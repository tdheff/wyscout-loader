/*
  Warnings:

  - The primary key for the `Substitution` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Substitution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Substitution" DROP CONSTRAINT "Substitution_matchWyId_fkey";

-- DropForeignKey
ALTER TABLE "Substitution" DROP CONSTRAINT "Substitution_playerWyId_fkey";

-- AlterTable
ALTER TABLE "Substitution" DROP CONSTRAINT "Substitution_pkey",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "matchWyId" DROP NOT NULL,
ALTER COLUMN "playerWyId" DROP NOT NULL,
ALTER COLUMN "direction" DROP NOT NULL,
ALTER COLUMN "second" DROP NOT NULL,
ADD CONSTRAINT "Substitution_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Substitution" ADD CONSTRAINT "Substitution_matchWyId_fkey" FOREIGN KEY ("matchWyId") REFERENCES "Match"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Substitution" ADD CONSTRAINT "Substitution_playerWyId_fkey" FOREIGN KEY ("playerWyId") REFERENCES "Player"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;
