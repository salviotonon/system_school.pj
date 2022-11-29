/*
  Warnings:

  - You are about to drop the column `turma` on the `student` table. All the data in the column will be lost.
  - Added the required column `email` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `father` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gang` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "turma",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "father" TEXT NOT NULL,
ADD COLUMN     "gang" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL;
