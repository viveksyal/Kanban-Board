/*
  Warnings:

  - You are about to drop the column `adminId` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `ListId` on the `Card` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_ListId_fkey";

-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_boardId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "adminId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "ListId",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "listId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
