import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  url: text("url").notNull(),
  likes: integer("likes").default(0).notNull(),
  userId: integer("user_id").references(() => users.id),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  username: text("username").notNull(),
  name: text("name").notNull(),
});
