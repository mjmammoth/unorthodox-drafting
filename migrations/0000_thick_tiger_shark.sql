CREATE TABLE `colours` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`colour_embedding` text NOT NULL,
	`hex` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `hero_colours` (
	`hero_id` integer NOT NULL,
	`colour_id` integer NOT NULL,
	`dominance` integer NOT NULL,
	FOREIGN KEY (`hero_id`) REFERENCES `heroes`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`colour_id`) REFERENCES `colours`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `heroes` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `heroes_name_unique` ON `heroes` (`name`);