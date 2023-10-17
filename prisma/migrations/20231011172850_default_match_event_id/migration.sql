-- AlterTable
CREATE SEQUENCE matchevent_id_seq;
ALTER TABLE "MatchEvent" ALTER COLUMN "id" SET DEFAULT nextval('matchevent_id_seq');
ALTER SEQUENCE matchevent_id_seq OWNED BY "MatchEvent"."id";
