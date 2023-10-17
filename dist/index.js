var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
import { PrismaClient } from '@prisma/client';
import { Match as WyMatch } from "./types.js";
const prisma = new PrismaClient();
const token = Buffer.from("stsx1rp-kydpjmwxu-b0iddhr-pc0ciwdjk0:IND2c?lgltJZzQNTU3^ut^@NdwEMd9").toString("base64");
const authString = `Basic ${token}`;
function authorizedRequest(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `${authString}` }
        });
        const data = yield response.json();
        return data;
    });
}
function getSeasonMatches(seasonWyId) {
    return __awaiter(this, void 0, void 0, function* () {
        return authorizedRequest(`https://apirest.wyscout.com/v3/seasons/${seasonWyId}/matches`);
    });
}
function getSeasonTeams(seasonWyId) {
    return __awaiter(this, void 0, void 0, function* () {
        return authorizedRequest(`https://apirest.wyscout.com/v3/seasons/${seasonWyId}/teams`);
    });
}
function getSeasonPlayers(seasonWyId, page) {
    return __awaiter(this, void 0, void 0, function* () {
        return authorizedRequest(`https://apirest.wyscout.com/v3/seasons/${seasonWyId}/players?limit=100&page=${page}`);
    });
}
function getMatchEvents(matchWyId) {
    return __awaiter(this, void 0, void 0, function* () {
        return authorizedRequest(`https://apirest.wyscout.com/v3/matches/${matchWyId}/events`);
    });
}
function serializeStatus(statusString) {
    switch (statusString) {
        case 'Cancelled':
            return WyMatch.StatusEnum.Cancelled;
        case 'Fixture':
            return WyMatch.StatusEnum.Fixture;
        case 'Playing':
            return WyMatch.StatusEnum.Playing;
        case 'Postponed':
            return WyMatch.StatusEnum.Postponed;
        case 'Suspended':
            return WyMatch.StatusEnum.Suspended;
        case 'Awarded':
            return WyMatch.StatusEnum.Awarded;
        case 'Played':
        default:
            return WyMatch.StatusEnum.Played;
    }
}
function execute() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        prisma.matchEvent.deleteMany();
        const matches = yield getSeasonMatches("188268");
        if (matches.matches) {
            // console.info("Inserting matches...")
            // for (const match of matches.matches) {
            //     const matchToCreate = {
            //         wyId: match.matchId || -1,
            //         hasDataAvailable: false,
            //         duration: null,
            //         venue: null,
            //         winner: null,
            //         // competitionId: match.competitionId ?? null,
            //         competitionId: null,
            //         // seasonId: match.seasonId ?? null,
            //         seasonId: null,
            //         gameweek: match.gameweek ?? null,
            //         // roundId: match.roundId ?? null,
            //         roundId: null,
            //         label: match.label ?? null,
            //         status: match.status?.toString() ?? null,
            //         date: match.date ? new Date(match.date) : null,
            //         dateutc: match.dateutc ? new Date(match.dateutc) : null,
            //     }
            //     await prisma.match.upsert({ where: { wyId: matchToCreate.wyId }, update: matchToCreate, create: matchToCreate })
            // }
            // console.info("Done.")
            // // Get all teams
            // console.info("Fetching teams...")
            // const teams = await getSeasonTeams("188268");
            // console.info("Done.")
            // console.info("Inserting teams...")
            // for (const team of teams.teams || []) {
            //     const teamToCreate: Team = {
            //         wyId: team.wyId || -1,
            //         areaId: team.area?.id || null,
            //         category: team.category?.toString() || null,
            //         city: team.city || null,
            //         gender: team.gender?.toString() || null,
            //         name: team.name || null,
            //         officialName: team.officialName || null,
            //         type: team.type?.toString() || null
            //     }
            //     await prisma.team.upsert({ where: { wyId: teamToCreate.wyId }, update: teamToCreate, create: teamToCreate })
            // }
            // console.info("Done.")
            // // Get all players
            // let page = 0;
            // while (true) {
            //     console.info(`Gathering players page: ${page}`)
            //     console.info("Fetching players...")
            //     const players = await getSeasonPlayers("188268", page);
            //     console.info("Done.")
            //     console.info("Inserting players...")
            //     for (const player of players.players ?? []) {
            //         const playerToCreate: Player = {
            //             wyId: player.wyId || -1,
            //             areaId: player.passportArea?.id || null,
            //             birthDate: player.birthDate || null,
            //             currentNationalTeamId: player.currentNationalTeamId || null,
            //             currentTeamId: player.currentTeamId || null,
            //             firstName: player.firstName || null,
            //             middleName: player.middleName || null,
            //             lastName: player.lastName || null,
            //             foot: player.foot || null,
            //             gender: player.gender || null,
            //             height: player.height || null,
            //             passportAreaName: player.passportArea?.name || null,
            //             roleName: player.role?.name || null,
            //             roleCode2: player.role?.code2 || null,
            //             roleCode3: player.role?.code3 || null,
            //             status: player.status || null,
            //             weight: player.weight || null
            //         }
            //         await prisma.player.upsert({ where: { wyId: playerToCreate.wyId }, update: playerToCreate, create: playerToCreate })
            //     }
            //     console.info("Done.")
            //     console.log(players.meta)
            //     if (players.meta?.page_count == players.meta?.page_current) {
            //         console.info(`Fetched ${players.meta?.page_current}/${players.meta?.page_count} pages.`)
            //         break;
            //     }
            //     page++;
            // }
            let currentMatchIx = 1;
            for (const match of matches.matches) {
                console.info(`Processing match ${currentMatchIx++}/${matches.matches.length}`);
                if (!match.matchId)
                    return;
                console.info(`Fetching events for match: ${match.matchId}...`);
                const events = yield getMatchEvents(match.matchId.toString());
                console.info("Done.");
                if (events.events) {
                    console.log("in elements");
                    const convertedEvents = ((_a = events.events) !== null && _a !== void 0 ? _a : []).map(event => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56;
                        const converted = {
                            id: event.id || -1,
                            matchId: event.matchId || -1,
                            matchPeriod: event.matchPeriod || null,
                            matchTimestamp: event.matchTimestamp || null,
                            minute: event.minute || null,
                            second: event.second || null,
                            videoTimestamp: event.videoTimestamp || null,
                            relatedEventId: event.relatedEventId || null,
                            playerId: ((_a = event.player) === null || _a === void 0 ? void 0 : _a.id) || null,
                            playerName: ((_b = event.player) === null || _b === void 0 ? void 0 : _b.name) || null,
                            playerPosition: ((_c = event.player) === null || _c === void 0 ? void 0 : _c.position) || null,
                            teamId: ((_d = event.team) === null || _d === void 0 ? void 0 : _d.id) || null,
                            teamName: ((_e = event.team) === null || _e === void 0 ? void 0 : _e.name) || null,
                            teamFormation: ((_f = event.team) === null || _f === void 0 ? void 0 : _f.formation) || null,
                            typePrimary: ((_g = event.type) === null || _g === void 0 ? void 0 : _g.primary) || null,
                            typeSecondary: ((_j = (_h = event.type) === null || _h === void 0 ? void 0 : _h.secondary) === null || _j === void 0 ? void 0 : _j.toString()) || null,
                            aerialDuelDescription: null,
                            aerialDuelFirstTouch: ((_k = event.aerialDuel) === null || _k === void 0 ? void 0 : _k.firstTouch) || null,
                            aerialDuelHeight: ((_l = event.aerialDuel) === null || _l === void 0 ? void 0 : _l.height) || null,
                            aerialDuelOpoonentHeight: ((_o = (_m = event.aerialDuel) === null || _m === void 0 ? void 0 : _m.opponent) === null || _o === void 0 ? void 0 : _o.height) || null,
                            aerialDuelOpponentId: ((_q = (_p = event.aerialDuel) === null || _p === void 0 ? void 0 : _p.opponent) === null || _q === void 0 ? void 0 : _q.id) || null,
                            aerialDuelOpponentName: ((_s = (_r = event.aerialDuel) === null || _r === void 0 ? void 0 : _r.opponent) === null || _s === void 0 ? void 0 : _s.name) || null,
                            aerialDuelOpponentPosition: ((_u = (_t = event.aerialDuel) === null || _t === void 0 ? void 0 : _t.opponent) === null || _u === void 0 ? void 0 : _u.position) || null,
                            aerialDuelRelatedDuelId: ((_v = event.aerialDuel) === null || _v === void 0 ? void 0 : _v.relatedDuelId) || null,
                            carryEndLocationX: ((_x = (_w = event.carry) === null || _w === void 0 ? void 0 : _w.endLocation) === null || _x === void 0 ? void 0 : _x.x) || null,
                            carryEndLocationY: ((_z = (_y = event.carry) === null || _y === void 0 ? void 0 : _y.endLocation) === null || _z === void 0 ? void 0 : _z.y) || null,
                            carryProgression: ((_0 = event.carry) === null || _0 === void 0 ? void 0 : _0.progression) || null,
                            groundDuelduelType: ((_1 = event.groundDuel) === null || _1 === void 0 ? void 0 : _1.duelType) || null,
                            groundDuelKeptPossession: ((_2 = event.groundDuel) === null || _2 === void 0 ? void 0 : _2.keptPossession) || null,
                            groundDuelOpponentId: ((_4 = (_3 = event.groundDuel) === null || _3 === void 0 ? void 0 : _3.opponent) === null || _4 === void 0 ? void 0 : _4.id) || null,
                            groundDuelOpponentName: ((_6 = (_5 = event.groundDuel) === null || _5 === void 0 ? void 0 : _5.opponent) === null || _6 === void 0 ? void 0 : _6.name) || null,
                            groundDuelOpponentPosition: ((_8 = (_7 = event.groundDuel) === null || _7 === void 0 ? void 0 : _7.opponent) === null || _8 === void 0 ? void 0 : _8.position) || null,
                            groundDuelProgressedWithBall: ((_9 = event.groundDuel) === null || _9 === void 0 ? void 0 : _9.progressedWithBall) || null,
                            groundDuelRecoveredPossession: ((_10 = event.groundDuel) === null || _10 === void 0 ? void 0 : _10.recoveredPossession) || null,
                            groundDuelRelatedDuelId: ((_11 = event.groundDuel) === null || _11 === void 0 ? void 0 : _11.relatedDuelId) || null,
                            groundDuelSide: ((_12 = event.groundDuel) === null || _12 === void 0 ? void 0 : _12.side) || null,
                            groundDuelStoppedProgress: ((_13 = event.groundDuel) === null || _13 === void 0 ? void 0 : _13.stoppedProgress) || null,
                            groundDueltakeOn: ((_14 = event.groundDuel) === null || _14 === void 0 ? void 0 : _14.takeOn) || null,
                            passAccurate: ((_15 = event.pass) === null || _15 === void 0 ? void 0 : _15.accurate) || null,
                            passAngle: ((_16 = event.pass) === null || _16 === void 0 ? void 0 : _16.angle) || null,
                            passEndLocationX: ((_18 = (_17 = event.pass) === null || _17 === void 0 ? void 0 : _17.endLocation) === null || _18 === void 0 ? void 0 : _18.x) || null,
                            passEndLocationY: ((_20 = (_19 = event.pass) === null || _19 === void 0 ? void 0 : _19.endLocation) === null || _20 === void 0 ? void 0 : _20.y) || null,
                            passLength: ((_21 = event.pass) === null || _21 === void 0 ? void 0 : _21.length) || null,
                            passRecipientId: ((_23 = (_22 = event.pass) === null || _22 === void 0 ? void 0 : _22.recipient) === null || _23 === void 0 ? void 0 : _23.id) || null,
                            passRecipientName: ((_25 = (_24 = event.pass) === null || _24 === void 0 ? void 0 : _24.recipient) === null || _25 === void 0 ? void 0 : _25.name) || null,
                            passRecipientPosition: ((_27 = (_26 = event.pass) === null || _26 === void 0 ? void 0 : _26.recipient) === null || _27 === void 0 ? void 0 : _27.position) || null,
                            possessionAttackFlank: ((_29 = (_28 = event.possession) === null || _28 === void 0 ? void 0 : _28.attack) === null || _29 === void 0 ? void 0 : _29.flank) || null,
                            possessionAttackWithGoal: ((_31 = (_30 = event.possession) === null || _30 === void 0 ? void 0 : _30.attack) === null || _31 === void 0 ? void 0 : _31.withGoal) || null,
                            possessionAttackWithShot: ((_33 = (_32 = event.possession) === null || _32 === void 0 ? void 0 : _32.attack) === null || _33 === void 0 ? void 0 : _33.withShot) || null,
                            possessionAttackWithShotOnGoal: ((_35 = (_34 = event.possession) === null || _34 === void 0 ? void 0 : _34.attack) === null || _35 === void 0 ? void 0 : _35.withShotOnGoal) || null,
                            possessionAttackXG: ((_37 = (_36 = event.possession) === null || _36 === void 0 ? void 0 : _36.attack) === null || _37 === void 0 ? void 0 : _37.xg) || null,
                            possessionDuration: ((_38 = event.possession) === null || _38 === void 0 ? void 0 : _38.duration) || null,
                            possessionEndLocationX: ((_40 = (_39 = event.possession) === null || _39 === void 0 ? void 0 : _39.endLocation) === null || _40 === void 0 ? void 0 : _40.x) || null,
                            possessionEndLocationY: ((_42 = (_41 = event.possession) === null || _41 === void 0 ? void 0 : _41.endLocation) === null || _42 === void 0 ? void 0 : _42.y) || null,
                            possessionStartLocationX: ((_44 = (_43 = event.possession) === null || _43 === void 0 ? void 0 : _43.startLocation) === null || _44 === void 0 ? void 0 : _44.x) || null,
                            possessionStartLocationY: ((_46 = (_45 = event.possession) === null || _45 === void 0 ? void 0 : _45.startLocation) === null || _46 === void 0 ? void 0 : _46.y) || null,
                            possessionEventIndex: ((_47 = event.possession) === null || _47 === void 0 ? void 0 : _47.eventIndex) || null,
                            possessionEventsNumber: ((_48 = event.possession) === null || _48 === void 0 ? void 0 : _48.eventsNumber) || null,
                            possessionTeamFormation: ((_50 = (_49 = event.possession) === null || _49 === void 0 ? void 0 : _49.team) === null || _50 === void 0 ? void 0 : _50.formation) || null,
                            possessionTeamId: ((_52 = (_51 = event.possession) === null || _51 === void 0 ? void 0 : _51.team) === null || _52 === void 0 ? void 0 : _52.id) || null,
                            possessionTeamName: ((_54 = (_53 = event.possession) === null || _53 === void 0 ? void 0 : _53.team) === null || _54 === void 0 ? void 0 : _54.name) || null,
                            possessionTypes: ((_56 = (_55 = event.possession) === null || _55 === void 0 ? void 0 : _55.types) === null || _56 === void 0 ? void 0 : _56.toString()) || null,
                        };
                        return converted;
                    });
                    console.info(`Inserting events for match: ${match.matchId}...`);
                    yield prisma.matchEvent.createMany({ data: convertedEvents, skipDuplicates: true });
                    console.info("Done.");
                }
            }
            ;
        }
    });
}
execute().catch(err => console.log(err));
//# sourceMappingURL=index.js.map