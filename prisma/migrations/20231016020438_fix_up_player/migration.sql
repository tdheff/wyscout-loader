/*
  Warnings:

  - You are about to drop the column `imageDataUrl` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Player` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_areaId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_currentTeamId_fkey";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "imageDataUrl",
DROP COLUMN "role",
ADD COLUMN     "passportAreaName" TEXT,
ADD COLUMN     "roleCode2" TEXT,
ADD COLUMN     "roleCode3" TEXT,
ADD COLUMN     "roleName" TEXT,
ALTER COLUMN "areaId" DROP NOT NULL,
ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "currentNationalTeamId" DROP NOT NULL,
ALTER COLUMN "currentTeamId" DROP NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "middleName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "foot" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_currentTeamId_fkey" FOREIGN KEY ("currentTeamId") REFERENCES "Team"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;
