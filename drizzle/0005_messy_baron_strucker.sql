ALTER TABLE "users" ADD COLUMN "password_hash" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");