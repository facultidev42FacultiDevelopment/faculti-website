-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatar_url" TEXT;

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
CREATE TABLE "writer_to_post" (
    "post_id" TEXT NOT NULL,
    "writer_id" TEXT NOT NULL,

    CONSTRAINT "writer_to_post_pkey" PRIMARY KEY ("post_id","writer_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "writers_slug_key" ON "writers"("slug");

-- CreateIndex
CREATE INDEX "writers_slug_idx" ON "writers"("slug");

-- CreateIndex
CREATE INDEX "writer_to_post_post_id_idx" ON "writer_to_post"("post_id");

-- CreateIndex
CREATE INDEX "writer_to_post_writer_id_idx" ON "writer_to_post"("writer_id");

-- AddForeignKey
ALTER TABLE "writer_to_post" ADD CONSTRAINT "writer_to_post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "writer_to_post" ADD CONSTRAINT "writer_to_post_writer_id_fkey" FOREIGN KEY ("writer_id") REFERENCES "writers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
