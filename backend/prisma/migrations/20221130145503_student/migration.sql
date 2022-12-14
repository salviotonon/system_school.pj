-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "id_student" TEXT NOT NULL,

    CONSTRAINT "gang_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "gang" ADD CONSTRAINT "gang_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
