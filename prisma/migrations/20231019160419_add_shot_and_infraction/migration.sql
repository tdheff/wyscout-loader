/*
  Warnings:

  - The `possessionTypes` column on the `MatchEvent` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "MatchEvent" ADD COLUMN     "infractionOpponentId" INTEGER,
ADD COLUMN     "infractionOpponentName" TEXT,
ADD COLUMN     "infractionOpponentPosition" TEXT,
ADD COLUMN     "infractionRedCard" BOOLEAN,
ADD COLUMN     "infractionType" TEXT,
ADD COLUMN     "infractionYellowCard" BOOLEAN,
ADD COLUMN     "shotBodyPart" TEXT,
ADD COLUMN     "shotGoalZone" TEXT,
ADD COLUMN     "shotGoalkeeperActionId" INTEGER,
ADD COLUMN     "shotGoalkeeperId" INTEGER,
ADD COLUMN     "shotGoalkeeperName" TEXT,
ADD COLUMN     "shotGoalkeeperReflexSave" BOOLEAN,
ADD COLUMN     "shotIsGoal" BOOLEAN,
ADD COLUMN     "shotOnTarget" BOOLEAN,
ADD COLUMN     "shotPostShotXG" DOUBLE PRECISION,
ADD COLUMN     "shotXG" DOUBLE PRECISION,
DROP COLUMN "possessionTypes",
ADD COLUMN     "possessionTypes" TEXT[];
