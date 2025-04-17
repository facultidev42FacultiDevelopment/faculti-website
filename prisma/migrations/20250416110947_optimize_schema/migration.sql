-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "vimeo_video_id" TEXT;

-- CreateIndex
CREATE INDEX "posts_vimeo_video_id_idx" ON "posts"("vimeo_video_id");
