/*
  Warnings:

  - The primary key for the `Substitution` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Substitution" DROP CONSTRAINT "Substitution_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Substitution_pkey" PRIMARY KEY ("id");
