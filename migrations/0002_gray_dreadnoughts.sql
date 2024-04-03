CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`auth_provider` text NOT NULL,
	`image_path` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `colours_colour_embedding_unique` ON `colours` (`colour_embedding`);--> statement-breakpoint
CREATE UNIQUE INDEX `colours_hex_unique` ON `colours` (`hex`);