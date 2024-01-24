/*
  Warnings:

  - The primary key for the `MatchTeamData` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "MatchTeamData" DROP CONSTRAINT "MatchTeamData_coachId_fkey";

-- DropForeignKey
ALTER TABLE "MatchTeamData" DROP CONSTRAINT "MatchTeamData_matchId_fkey";

-- DropForeignKey
ALTER TABLE "MatchTeamData" DROP CONSTRAINT "MatchTeamData_teamId_fkey";

-- AlterTable
ALTER TABLE "MatchTeamData" DROP CONSTRAINT "MatchTeamData_pkey",
ADD COLUMN     "formation" JSONB,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "coachId" DROP NOT NULL,
ALTER COLUMN "score" DROP NOT NULL,
ALTER COLUMN "scoreHT" DROP NOT NULL,
ALTER COLUMN "scoreET" DROP NOT NULL,
ALTER COLUMN "scoreP" DROP NOT NULL,
ALTER COLUMN "side" DROP NOT NULL,
ALTER COLUMN "teamId" DROP NOT NULL,
ALTER COLUMN "matchId" DROP NOT NULL,
ADD CONSTRAINT "MatchTeamData_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MatchTeamData_id_seq";

-- AddForeignKey
ALTER TABLE "MatchTeamData" ADD CONSTRAINT "MatchTeamData_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeamData" ADD CONSTRAINT "MatchTeamData_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeamData" ADD CONSTRAINT "MatchTeamData_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;
