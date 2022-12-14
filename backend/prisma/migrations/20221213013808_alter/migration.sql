/*
  Warnings:

  - You are about to drop the column `student` on the `gang` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "gang" DROP CONSTRAINT "gang_student_fkey";

-- AlterTable
ALTER TABLE "gang" DROP COLUMN "student";

-- AlterTable
ALTER TABLE "student" ADD COLUMN     "gang" TEXT;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_gang_fkey" FOREIGN KEY ("gang") REFERENCES "gang"("id") ON DELETE SET NULL ON UPDATE CASCADE;
