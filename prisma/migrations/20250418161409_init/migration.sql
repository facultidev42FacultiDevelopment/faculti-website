-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('PARENT', 'DAUGHTER', 'SUB');

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "excerpt" TEXT,
    "image_url" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "date_gmt" TIMESTAMP(3) NOT NULL,
    "modified" TIMESTAMP(3),
    "modified_gmt" TIMESTAMP(3),
    "slug" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'publish',
    "comment_status" TEXT NOT NULL,
    "ping_status" TEXT NOT NULL,
    "guid" TEXT,
    "menu_order" INTEGER NOT NULL DEFAULT 0,
    "vimeo_video_id" TEXT,
    "author_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "search_vector" tsvector,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT,
    "url" TEXT,
    "avatar_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "CategoryType" NOT NULL,
    "parentId" TEXT,
    "daughterId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "writers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "img_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "writers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_to_post" (
    "post_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "category_to_post_pkey" PRIMARY KEY ("post_id","category_id")
);

-- CreateTable
CREATE TABLE "tag_to_post" (
    "post_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "tag_to_post_pkey" PRIMARY KEY ("post_id","tag_id")
);

-- CreateTable
CREATE TABLE "institution_to_post" (
    "post_id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,

    CONSTRAINT "institution_to_post_pkey" PRIMARY KEY ("post_id","institution_id")
);

-- CreateTable
CREATE TABLE "writer_to_post" (
    "post_id" TEXT NOT NULL,
    "writer_id" TEXT NOT NULL,

    CONSTRAINT "writer_to_post_pkey" PRIMARY KEY ("post_id","writer_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- CreateIndex
CREATE INDEX "posts_author_id_idx" ON "posts"("author_id");

-- CreateIndex
CREATE INDEX "posts_slug_idx" ON "posts"("slug");

-- CreateIndex
CREATE INDEX "posts_date_idx" ON "posts"("date");

-- CreateIndex
CREATE INDEX "posts_status_idx" ON "posts"("status");

-- CreateIndex
CREATE INDEX "posts_vimeo_video_id_idx" ON "posts"("vimeo_video_id");

-- CreateIndex
CREATE INDEX "posts_search_vector_idx" ON "posts" USING GIN ("search_vector");

-- CreateIndex
CREATE UNIQUE INDEX "users_slug_key" ON "users"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_slug_idx" ON "users"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tags_slug_key" ON "tags"("slug");

-- CreateIndex
CREATE INDEX "tags_slug_idx" ON "tags"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "institutions_slug_key" ON "institutions"("slug");

-- CreateIndex
CREATE INDEX "institutions_slug_idx" ON "institutions"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "writers_slug_key" ON "writers"("slug");

-- CreateIndex
CREATE INDEX "writers_slug_idx" ON "writers"("slug");

-- CreateIndex
CREATE INDEX "category_to_post_post_id_idx" ON "category_to_post"("post_id");

-- CreateIndex
CREATE INDEX "category_to_post_category_id_idx" ON "category_to_post"("category_id");

-- CreateIndex
CREATE INDEX "tag_to_post_post_id_idx" ON "tag_to_post"("post_id");

-- CreateIndex
CREATE INDEX "tag_to_post_tag_id_idx" ON "tag_to_post"("tag_id");

-- CreateIndex
CREATE INDEX "institution_to_post_post_id_idx" ON "institution_to_post"("post_id");

-- CreateIndex
CREATE INDEX "institution_to_post_institution_id_idx" ON "institution_to_post"("institution_id");

-- CreateIndex
CREATE INDEX "writer_to_post_post_id_idx" ON "writer_to_post"("post_id");

-- CreateIndex
CREATE INDEX "writer_to_post_writer_id_idx" ON "writer_to_post"("writer_id");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_daughterId_fkey" FOREIGN KEY ("daughterId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_to_post" ADD CONSTRAINT "category_to_post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_to_post" ADD CONSTRAINT "category_to_post_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_to_post" ADD CONSTRAINT "tag_to_post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_to_post" ADD CONSTRAINT "tag_to_post_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institution_to_post" ADD CONSTRAINT "institution_to_post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institution_to_post" ADD CONSTRAINT "institution_to_post_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "writer_to_post" ADD CONSTRAINT "writer_to_post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "writer_to_post" ADD CONSTRAINT "writer_to_post_writer_id_fkey" FOREIGN KEY ("writer_id") REFERENCES "writers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
