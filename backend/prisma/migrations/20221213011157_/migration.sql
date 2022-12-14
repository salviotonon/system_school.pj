-- CreateTable
CREATE TABLE "administrator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gang" (
    "id" TEXT NOT NULL,
    "gang" TEXT NOT NULL,
    "student" TEXT NOT NULL,

    CONSTRAINT "gang_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "gang" ADD CONSTRAINT "gang_student_fkey" FOREIGN KEY ("student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
