-- DropForeignKey
ALTER TABLE "gang" DROP CONSTRAINT "gang_student_fkey";

-- AlterTable
ALTER TABLE "gang" ALTER COLUMN "student" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "gang" ADD CONSTRAINT "gang_student_fkey" FOREIGN KEY ("student") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
