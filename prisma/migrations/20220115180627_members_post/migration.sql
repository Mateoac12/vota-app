/*
  Warnings:

  - You are about to drop the column `owner` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `_PostToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "owner",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_PostToUser";

-- CreateTable
CREATE TABLE "MemberOfPost" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "usersId" TEXT[],

    CONSTRAINT "MemberOfPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MemberOfPostToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MemberOfPost_postId_key" ON "MemberOfPost"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "_MemberOfPostToUser_AB_unique" ON "_MemberOfPostToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MemberOfPostToUser_B_index" ON "_MemberOfPostToUser"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberOfPost" ADD CONSTRAINT "MemberOfPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberOfPostToUser" ADD FOREIGN KEY ("A") REFERENCES "MemberOfPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberOfPostToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
