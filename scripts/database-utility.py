#!/usr/bin/env python3
import os
import logging
import argparse
import json
import random
import datetime

import colorlog
from dotenv import load_dotenv
import sqlite3
import sqlite_vss
import cv2
import numpy as np

LOGGING_LEVEL = os.getenv("LOGGING_LEVEL", "DEBUG").upper()
LOG_FORMAT = "%(log_color)s%(asctime)s %(levelname)s: %(name)s: %(reset)s%(message_log_color)s%(message)s"  # noqa: E501
colorlog.basicConfig(
    level=LOGGING_LEVEL,
    format=LOG_FORMAT,
    log_colors={
        "DEBUG": "cyan",
        "INFO": "green",
        "WARNING": "yellow",
        "ERROR": "red",
        "CRITICAL": "red,bg_white",
    },
    secondary_log_colors={
        "message": {
            "DEBUG": "white",
            "INFO": "white",
            "WARNING": "white",
            "ERROR": "white",
            "CRITICAL": "white,bg_red",
        }
    },
    style="%",
)

tables = {
    "heroes": '''
              CREATE TABLE heroes (
                id INTEGER PRIMARY KEY,
                hero_name TEXT,
                hero_image_path TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )
              ''',
    "colours": '''
               CREATE TABLE IF NOT EXISTS colours (
                 id INTEGER PRIMARY KEY,
                 luv_embedding TEXT
               )
               ''',
    "hero_colours": '''
                    CREATE TABLE IF NOT EXISTS hero_colours (
                      id INTEGER PRIMARY KEY,
                      hero_id INTEGER,
                      colour_id INTEGER,
                      dominance TEXT,
                      FOREIGN KEY (hero_id) REFERENCES heroes(id),
                      FOREIGN KEY (colour_id) REFERENCES colours(id)
                    )
                    ''',
    "vss_colours": "CREATE VIRTUAL TABLE IF NOT EXISTS vss_colours USING vss0(luv_vector(3));"
}


class DatabaseUtility:
    def __init__(self, database_driver="sqlite", db_name=None, url=None, auth_token=None, libsql_conn_mode="local"):
        if database_driver == "sqlite":
            db_name = db_name if db_name else "local_sqlite.db"
            logging.info(f"Connecting to SQLite database: {db_name}")
            self.connect_sqlite(db_name)
        elif database_driver == "libsql":
            logging.info(f"Connecting to LibSQL database: {url} with mode: {libsql_conn_mode}")
            self.connect_libsql(url, auth_token, libsql_conn_mode)

        self.cursor = self.connection.cursor()

    def connect_sqlite(self, db_name):
        db_name = db_name if db_name else "local_sqlite.db"
        self.connection = sqlite3.connect(db_name)
        self.connection.enable_load_extension(True)
        sqlite_vss.load(self.connection)
        self.connection.enable_load_extension(False)

    def connect_libsql(self, url, auth_token, libsql_conn_mode, db_name = "local_libsql.db"):
        import libsql_experimental as libsql
        db_name = db_name if db_name else "local_libsql.db"
        if libsql_conn_mode == "remote":
            print("Connecting to remote database: ", url)
            self.connection = libsql.connect(database=url, auth_token=auth_token)
        elif libsql_conn_mode == "memory":
            print("Connecting to in-memory database")
            self.connection = libsql.connect(":memory:")
        elif libsql_conn_mode == "local":
            print("Connecting to local database: ", db_name)
            self.connection = libsql.connect(db_name)
        elif libsql_conn_mode == "remote_sync":
            print("Connecting to local database (localsync.db) with remote sync: ", url)
            self.connection = libsql.connect("localsync.db", sync_url=url, auth_token=auth_token)
            self.connection.sync()

    def create_tables(self):
        logging.info("Creating the tables in the database")
        for table_name, table_query in tables.items():
            self.cursor.execute(table_query)
        self.list_schema()

    def populate_database(self):
        logging.info("Populating the database from the JSON file")
        with open("heroes.json") as file:
            heroes = json.load(file)
        rowid = 1
        hero_id = 1
        for hero in heroes:
            self.cursor.execute('''
            INSERT INTO heroes (hero_name, hero_image_path) VALUES (?, ?)
            ''', (hero['name'], hero['hero_image_path']))

            # For each colour type, insert the colour data into the colours table and the vector data into the vss_colours table
            for color_type in ['primary_colours', 'secondary_colours', 'tertiary_colours']:
                for color in hero[color_type]:
                    color_json = json.dumps(self.rgb_to_luv(color))

                    self.cursor.execute('''
                    INSERT INTO colours (id, luv_embedding) VALUES (?, ?)
                    ''', (rowid, color_json))

                    self.cursor.execute("INSERT INTO vss_colours (rowid, luv_vector) VALUES (?, ?)", (rowid, color_json))

                    # Insert hero-colour relationship into hero_colours table
                    self.cursor.execute('''
                    INSERT INTO hero_colours (hero_id, colour_id, dominance) VALUES (?, ?, ?)
                    ''', (hero_id, rowid, color_type[:-8]))

                    rowid += 1
            hero_id += 1
        self.connection.commit()


    def select_vss_version(self):
        self.cursor.execute("SELECT vss_version();")
        version = self.cursor.fetchone()
        logging.info(f"VSS version: {version[0]}")

    def get_random_vector(self):
        return [random.randint(0, 255) for _ in range(3)]

    def random_vectory_query(self):
        logging.info("Querying the vector database with a random RGB vector")
        vector = self.get_random_vector()
        logging.info(f"Random vector: {vector}")
        self.query_vector(vector)

    def rgb_to_luv(self, rgb):
        rgb = np.array([rgb], dtype=np.uint8)
        bgr = cv2.cvtColor(rgb.reshape(1, 1, 3), cv2.COLOR_RGB2BGR)
        luv = cv2.cvtColor(bgr, cv2.COLOR_BGR2Luv)
        return luv[0][0].tolist()

    def query_vector(self, vector):
        colour_json = self.rgb_to_luv(vector)
        self.cursor.execute(f'''
                            SELECT 
                                h.hero_name, 
                                v.distance,
                                hc.dominance,
                                CASE 
                                    WHEN hc.dominance = 'primary' THEN 1
                                    WHEN hc.dominance = 'secondary' THEN 2
                                    WHEN hc.dominance = 'tertiary' THEN 3
                                    ELSE 4 -- for any unexpected value
                                END AS dominance_weight
                            FROM (
                                SELECT rowid, distance
                                FROM vss_colours
                                WHERE vss_search(luv_vector, '{colour_json}')
                                LIMIT 100
                            ) AS v
                            JOIN hero_colours hc ON v.rowid = hc.colour_id
                            JOIN heroes h ON hc.hero_id = h.id
                            GROUP BY h.hero_name, v.distance, hc.dominance
                            ORDER BY dominance_weight, v.distance
                            ''')

        results = self.cursor.fetchall()
        logging.info(f"Hero Name - Distance - Colour Category")
        for result in results:
            logging.info(f"{result[0]} - {result[1]} - {result[2]}")


    def delete_tables(self):
        logging.info("Deleting the tables in the database")
        for table_name in tables.keys():
            self.cursor.execute(f"DROP TABLE IF EXISTS {table_name};")
        self.list_schema()

    def list_schema(self):
        logging.info("Listing the schema")
        query = "SELECT name FROM sqlite_master WHERE type='table';"
        self.cursor.execute(query)
        for row in self.cursor.fetchall():
            logging.info(f"- {row[0]}")

    def __del__(self):
        self.connection.commit()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Database Management Utility")
    parser.add_argument(
        "-c", "--create",
        help="Create the database",
        action="store_true",
    )
    parser.add_argument(
        "-ctl", "--convert-to-luv",
        help="Convert RGB to LUV",
        type=str,
    )
    parser.add_argument(
        "-p", "--populate",
        help="Populate the database from the JSON file",
        action="store_true",
    )
    parser.add_argument(
        "-d", "--delete",
        help="Delete the database",
        action="store_true",
    )
    parser.add_argument(
        "-r", "--recreate",
        help="Delete, recreate and populate the database",
        action="store_true",
    )
    parser.add_argument(
        "-l", "--list",
        help="List the schema of the database",
        action="store_true",
    )
    parser.add_argument(
        "-q", "--query",
        help="Query the vector database with an RGB vector",
        type=str,
    )
    parser.add_argument(
        "-sv", "--show-vss-version",
        help="Show the VSS extension version",
        action="store_true",
    )
    parser.add_argument(
        "-e", "--environment-file",
        help="Set the environment file to load variables from",
        default=".env",
    )
    args = parser.parse_args()

    load_dotenv(args.environment_file)
    url = os.getenv("DB_URL", "http://127.0.0.1:8080")
    auth_token = os.getenv("DB_AUTH_TOKEN", "")
    libsql_conn_mode = os.getenv("LIBSQL_MODE", "local")
    database_driver = os.getenv("DATABASE_DRIVER", "sqlite")
    db_name = os.getenv("DATABASE_NAME")

    database = DatabaseUtility(database_driver, db_name, url, auth_token, libsql_conn_mode)

    if args.convert_to_luv:
        rgb = json.loads(args.convert_to_luv)
        print(database.rgb_to_luv(rgb))

    if args.create:
        database.create_tables()
    elif args.show_vss_version:
        database.select_vss_version()
    elif args.populate:
        database.populate_database()
    elif args.delete:
        database.delete_tables()
    elif args.recreate:
        database.delete_tables()
        database.create_tables()
        database.populate_database()
    elif args.list:
        database.list_schema()
    elif args.query == "random":
        database.random_vectory_query()
    elif args.query:
        vector = json.loads(args.query)
        database.query_vector(vector)
    else:
        parser.print_help()
