import fetch from "node-fetch";
import { Match, PrismaClient, MatchEvent, Team, Player } from '@prisma/client'
import { MatchEvents, SeasonMatches, SeasonPlayers, SeasonTeams, Match as WyMatch } from "./types.js"

const prisma = new PrismaClient()

const token = Buffer.from("USERNAME:PASSWORD").toString("base64")
const authString = `Basic ${token}`

async function authorizedRequest<T>(url: string): Promise<T> {
    const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json', 'Authorization': `${authString}` }
    });
    const data = await response.json() as T;
    return data;
}

async function getSeasonMatches(seasonWyId: string): Promise<SeasonMatches> {
    return authorizedRequest<SeasonMatches>(`https://apirest.wyscout.com/v3/seasons/${seasonWyId}/matches`)
}

async function getSeasonTeams(seasonWyId: string): Promise<SeasonTeams> {
    return authorizedRequest<SeasonTeams>(`https://apirest.wyscout.com/v3/seasons/${seasonWyId}/teams`)
}

async function getSeasonPlayers(seasonWyId: string, page: number): Promise<SeasonPlayers> {
    return authorizedRequest<SeasonPlayers>(`https://apirest.wyscout.com/v3/seasons/${seasonWyId}/players?limit=100&page=${page}`)
}

async function getMatchEvents(matchWyId: string): Promise<MatchEvents> {
    return authorizedRequest<MatchEvents>(`https://apirest.wyscout.com/v3/matches/${matchWyId}/events`)
}

function serializeStatus(statusString: string): WyMatch.StatusEnum {
    switch (statusString) {
        case 'Cancelled':
            return WyMatch.StatusEnum.Cancelled
        case 'Fixture':
            return WyMatch.StatusEnum.Fixture
        case 'Playing':
            return WyMatch.StatusEnum.Playing
        case 'Postponed':
            return WyMatch.StatusEnum.Postponed
        case 'Suspended':
            return WyMatch.StatusEnum.Suspended
        case 'Awarded':
            return WyMatch.StatusEnum.Awarded
        case 'Played':
        default:
            return WyMatch.StatusEnum.Played
    }
}

async function execute() {
    prisma.matchEvent.deleteMany();
    const matches = await getSeasonMatches("188268");
    if (matches.matches) {

        console.info("Inserting matches...")
        for (const match of matches.matches) {
            const matchToCreate = {
                wyId: match.matchId || -1,
                hasDataAvailable: false,
                duration: null,
                venue: null,
                winner: null,
                // competitionId: match.competitionId ?? null,
                competitionId: null,
                // seasonId: match.seasonId ?? null,
                seasonId: null,
                gameweek: match.gameweek ?? null,
                // roundId: match.roundId ?? null,
                roundId: null,
                label: match.label ?? null,
                status: match.status?.toString() ?? null,
                date: match.date ? new Date(match.date) : null,
                dateutc: match.dateutc ? new Date(match.dateutc) : null,
            }
            await prisma.match.upsert({ where: { wyId: matchToCreate.wyId }, update: matchToCreate, create: matchToCreate })
        }
        console.info("Done.")

        // Get all teams
        console.info("Fetching teams...")
        const teams = await getSeasonTeams("188268");
        console.info("Done.")

        console.info("Inserting teams...")
        for (const team of teams.teams || []) {
            const teamToCreate: Team = {
                wyId: team.wyId || -1,
                areaId: team.area?.id || null,
                category: team.category?.toString() || null,
                city: team.city || null,
                gender: team.gender?.toString() || null,
                name: team.name || null,
                officialName: team.officialName || null,
                type: team.type?.toString() || null
            }
            await prisma.team.upsert({ where: { wyId: teamToCreate.wyId }, update: teamToCreate, create: teamToCreate })
        }
        console.info("Done.")

        // Get all players
        let page = 0;
        while (true) {
            console.info(`Gathering players page: ${page}`)
            console.info("Fetching players...")
            const players = await getSeasonPlayers("188268", page);
            console.info("Done.")

            console.info("Inserting players...")
            for (const player of players.players ?? []) {
                const playerToCreate: Player = {
                    wyId: player.wyId || -1,
                    areaId: player.passportArea?.id || null,
                    birthDate: player.birthDate || null,
                    currentNationalTeamId: player.currentNationalTeamId || null,
                    currentTeamId: player.currentTeamId || null,
                    firstName: player.firstName || null,
                    middleName: player.middleName || null,
                    lastName: player.lastName || null,
                    foot: player.foot || null,
                    gender: player.gender || null,
                    height: player.height || null,
                    passportAreaName: player.passportArea?.name || null,
                    roleName: player.role?.name || null,
                    roleCode2: player.role?.code2 || null,
                    roleCode3: player.role?.code3 || null,
                    status: player.status || null,
                    weight: player.weight || null
                }
                await prisma.player.upsert({ where: { wyId: playerToCreate.wyId }, update: playerToCreate, create: playerToCreate })
            }
            console.info("Done.")

            console.log(players.meta)

            if (players.meta?.page_count == players.meta?.page_current) {
                console.info(`Fetched ${players.meta?.page_current}/${players.meta?.page_count} pages.`)
                break;
            }
            page++;
        }

        let currentMatchIx = 1;
        for (const match of matches.matches) {
            console.info(`Processing match ${currentMatchIx++}/${matches.matches.length}`);
            if (!match.matchId) return;
            console.info(`Fetching events for match: ${match.matchId}...`)
            const events = await getMatchEvents(match.matchId.toString());
            console.info("Done.")
            if (events.events) {
                console.log("in elements")
                const convertedEvents: MatchEvent[] = (events.events ?? []).map(event => {
                    const converted: MatchEvent = {
                        id: event.id || -1,
                        matchId: event.matchId || -1,
                        matchPeriod: event.matchPeriod || null,
                        matchTimestamp: event.matchTimestamp || null,
                        minute: event.minute || null,
                        second: event.second || null,
                        videoTimestamp: event.videoTimestamp || null,
                        relatedEventId: event.relatedEventId || null,
                        playerId: event.player?.id || null,
                        playerName: event.player?.name || null,
                        playerPosition: event.player?.position || null,
                        teamId: event.team?.id || null,
                        teamName: event.team?.name || null,
                        teamFormation: event.team?.formation || null,
                        typePrimary: event.type?.primary || null,
                        typeSecondary: event.type?.secondary?.toString() || null,
                        aerialDuelDescription: null,
                        aerialDuelFirstTouch: event.aerialDuel?.firstTouch || null,
                        aerialDuelHeight: event.aerialDuel?.height || null,
                        aerialDuelOpoonentHeight: event.aerialDuel?.opponent?.height || null,
                        aerialDuelOpponentId: event.aerialDuel?.opponent?.id || null,
                        aerialDuelOpponentName: event.aerialDuel?.opponent?.name || null,
                        aerialDuelOpponentPosition: event.aerialDuel?.opponent?.position || null,
                        aerialDuelRelatedDuelId: event.aerialDuel?.relatedDuelId || null,
                        carryEndLocationX: event.carry?.endLocation?.x || null,
                        carryEndLocationY: event.carry?.endLocation?.y || null,
                        carryProgression: event.carry?.progression || null,
                        groundDuelduelType: event.groundDuel?.duelType || null,
                        groundDuelKeptPossession: event.groundDuel?.keptPossession || null,
                        groundDuelOpponentId: event.groundDuel?.opponent?.id || null,
                        groundDuelOpponentName: event.groundDuel?.opponent?.name || null,
                        groundDuelOpponentPosition: event.groundDuel?.opponent?.position || null,
                        groundDuelProgressedWithBall: event.groundDuel?.progressedWithBall || null,
                        groundDuelRecoveredPossession: event.groundDuel?.recoveredPossession || null,
                        groundDuelRelatedDuelId: event.groundDuel?.relatedDuelId || null,
                        groundDuelSide: event.groundDuel?.side || null,
                        groundDuelStoppedProgress: event.groundDuel?.stoppedProgress || null,
                        groundDueltakeOn: event.groundDuel?.takeOn || null,
                        passAccurate: event.pass?.accurate || null,
                        passAngle: event.pass?.angle || null,
                        passEndLocationX: event.pass?.endLocation?.x || null,
                        passEndLocationY: event.pass?.endLocation?.y || null,
                        passLength: event.pass?.length || null,
                        passRecipientId: event.pass?.recipient?.id || null,
                        passRecipientName: event.pass?.recipient?.name || null,
                        passRecipientPosition: event.pass?.recipient?.position || null,
                        possessionAttackFlank: event.possession?.attack?.flank || null,
                        possessionAttackWithGoal: event.possession?.attack?.withGoal || null,
                        possessionAttackWithShot: event.possession?.attack?.withShot || null,
                        possessionAttackWithShotOnGoal: event.possession?.attack?.withShotOnGoal || null,
                        possessionAttackXG: event.possession?.attack?.xg || null,
                        possessionDuration: event.possession?.duration || null,
                        possessionEndLocationX: event.possession?.endLocation?.x || null,
                        possessionEndLocationY: event.possession?.endLocation?.y || null,
                        possessionStartLocationX: event.possession?.startLocation?.x || null,
                        possessionStartLocationY: event.possession?.startLocation?.y || null,
                        possessionEventIndex: event.possession?.eventIndex || null,
                        possessionEventsNumber: event.possession?.eventsNumber || null,
                        possessionTeamFormation: event.possession?.team?.formation || null,
                        possessionTeamId: event.possession?.team?.id || null,
                        possessionTeamName: event.possession?.team?.name || null,
                        possessionTypes: event.possession?.types?.toString() || null,
                    }
                    return converted
                })

                console.info(`Inserting events for match: ${match.matchId}...`)
                await prisma.matchEvent.createMany({ data: convertedEvents, skipDuplicates: true })
                console.info("Done.")
            }
        };
    }
}

execute().catch(err => console.log(err))