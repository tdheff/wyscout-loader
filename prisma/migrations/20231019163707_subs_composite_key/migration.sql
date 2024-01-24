-- CreateTable
CREATE TABLE "Substitution" (
    "matchWyId" INTEGER NOT NULL,
    "playerWyId" INTEGER NOT NULL,
    "direction" TEXT NOT NULL,
    "second" INTEGER NOT NULL,

    CONSTRAINT "Substitution_pkey" PRIMARY KEY ("matchWyId","playerWyId","direction")
);

-- AddForeignKey
ALTER TABLE "Substitution" ADD CONSTRAINT "Substitution_matchWyId_fkey" FOREIGN KEY ("matchWyId") REFERENCES "Match"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Substitution" ADD CONSTRAINT "Substitution_playerWyId_fkey" FOREIGN KEY ("playerWyId") REFERENCES "Player"("wyId") ON DELETE RESTRICT ON UPDATE CASCADE;
