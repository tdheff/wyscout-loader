-- CreateTable
CREATE TABLE "Area" (
    "id" INTEGER NOT NULL,
    "alpha2code" TEXT NOT NULL,
    "alpha3code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "wyId" INTEGER NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "birthAreaId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "imageDataUrl" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "Competition" (
    "wyId" INTEGER NOT NULL,
    "areaId" INTEGER,
    "category" TEXT,
    "divisionLevel" INTEGER,
    "format" TEXT,
    "gender" TEXT,
    "name" TEXT,
    "type" TEXT,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "Match" (
    "wyId" INTEGER NOT NULL,
    "competitionId" INTEGER,
    "date" TIMESTAMP(3),
    "dateutc" TIMESTAMP(3),
    "duration" TEXT,
    "gameweek" INTEGER,
    "hasDataAvailable" BOOLEAN,
    "label" TEXT,
    "roundId" INTEGER,
    "status" TEXT,
    "venue" TEXT,
    "winner" INTEGER,
    "seasonId" INTEGER,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "MatchTeamData" (
    "id" SERIAL NOT NULL,
    "coachId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "scoreHT" INTEGER NOT NULL,
    "scoreET" INTEGER NOT NULL,
    "scoreP" INTEGER NOT NULL,
    "side" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,

    CONSTRAINT "MatchTeamData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "wyId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "birthDate" TEXT NOT NULL,
    "currentNationalTeamId" INTEGER NOT NULL,
    "currentTeamId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "foot" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "imageDataUrl" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "Team" (
    "wyId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "imageDataUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "officialName" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "Season" (
    "wyId" INTEGER NOT NULL,
    "active" BOOLEAN,
    "competitionId" INTEGER,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "name" TEXT,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "Round" (
    "wyId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("wyId")
);

-- CreateTable
CREATE TABLE "MatchEvent" (
    "id" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "matchPeriod" TEXT,
    "matchTimestamp" TEXT,
    "minute" INTEGER,
    "second" INTEGER,
    "playerId" INTEGER,
    "playerName" TEXT,
    "playerPosition" TEXT,
    "relatedEventId" INTEGER,
    "teamId" INTEGER,
    "teamName" TEXT,
    "teamFormation" TEXT,
    "typePrimary" TEXT,
    "typeSecondary" TEXT,
    "videoTimestamp" TEXT,
    "aerialDuelDescription" TEXT,
    "aerialDuelFirstTouch" BOOLEAN,
    "aerialDuelHeight" INTEGER,
    "aerialDuelOpoonentHeight" INTEGER,
    "aerialDuelOpponentId" INTEGER,
    "aerialDuelOpponentName" TEXT,
    "aerialDuelOpponentPosition" TEXT,
    "aerialDuelRelatedDuelId" INTEGER,
    "carryEndLocationX" INTEGER,
    "carryEndLocationY" INTEGER,
    "carryProgression" DOUBLE PRECISION,
    "groundDuelduelType" TEXT,
    "groundDuelKeptPossession" BOOLEAN,
    "groundDuelOpponentId" INTEGER,
    "groundDuelOpponentName" TEXT,
    "groundDuelOpponentPosition" TEXT,
    "groundDuelProgressedWithBall" BOOLEAN,
    "groundDuelRecoveredPossession" BOOLEAN,
    "groundDuelRelatedDuelId" INTEGER,
    "groundDuelSide" TEXT,
    "groundDuelStoppedProgress" BOOLEAN,
    "groundDueltakeOn" BOOLEAN,
    "passAccurate" BOOLEAN,
    "passAngle" INTEGER,
    "passEndLocationX" INTEGER,
    "passEndLocationY" INTEGER,
    "passLength" DOUBLE PRECISION,
    "passRecipientId" INTEGER,
    "passRecipientName" TEXT,
    "passRecipientPosition" TEXT,
    "possessionAttackFlank" TEXT,
    "possessionAttackWithGoal" BOOLEAN,
    "possessionAttackWithShot" BOOLEAN,
    "possessionAttackWithShotOnGoal" BOOLEAN,
    "possessionAttackXG" DOUBLE PRECISION,
    "possessionDuration" TEXT,
    "possessionEndLocationX" INTEGER,
    "possessionEndLocationY" INTEGER,
    "possessionStartLocationX" INTEGER,
    "possessionStartLocationY" INTEGER,
    "possessionEventIndex" INTEGER,
    "possessionEventsNumber" INTEGER,
    "possessionTeamFormation" TEXT,
    "possessionTeamId" INTEGER,
    "possessionTeamName" TEXT,
    "possessionTypes" TEXT,

    CONSTRAINT "MatchEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_birthAreaId_fkey" FOREIGN KEY ("birthAreaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeamData" ADD CONSTRAINT "MatchTeamData_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeamData" ADD CONSTRAINT "MatchTeamData_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeamData" ADD CONSTRAINT "MatchTeamData_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_currentTeamId_fkey" FOREIGN KEY ("currentTeamId") REFERENCES "Team"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("wyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchEvent" ADD CONSTRAINT "MatchEvent_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;
