import {integer,sqliteTable,text,index} from "drizzle-orm/sqlite-core";
export const comments=sqliteTable("comments",{id:integer("id").primaryKey({autoIncrement:true}),articleSlug:text("article_slug").notNull(),authorName:text("author_name").notNull(),body:text("body").notNull(),createdAt:text("created_at").notNull()},t=>[index("idx_comments_article_created").on(t.articleSlug,t.createdAt)]);
