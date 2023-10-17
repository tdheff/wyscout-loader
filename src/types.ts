/**
 * 
 * @export
 * @interface AResponseElementObject
 */
export interface AResponseElementObject {
    /**
     * 
     * @type {CoachesFetch}
     * @memberof AResponseElementObject
     */
    coaches?: CoachesFetch;
    /**
     * 
     * @type {Array<MatchEvent>}
     * @memberof AResponseElementObject
     */
    events?: Array<MatchEvent>;
    /**
     * 
     * @type {FormationsFetch}
     * @memberof AResponseElementObject
     */
    formations?: FormationsFetch;
    /**
     * Available with querystring param `fetch=match`
     * @type {Match}
     * @memberof AResponseElementObject
     */
    match?: Match;
    /**
     * 
     * @type {PlayersFetch}
     * @memberof AResponseElementObject
     */
    players?: PlayersFetch;
    /**
     * Available with querystring param `fetch=referees`
     * @type {Array<TheRefereeObject>}
     * @memberof AResponseElementObject
     */
    referees?: Array<TheRefereeObject>;
    /**
     * 
     * @type {SubstitutionFetch}
     * @memberof AResponseElementObject
     */
    substitutions?: SubstitutionFetch;
    /**
     * 
     * @type {TeamsFetch}
     * @memberof AResponseElementObject
     */
    teams?: TeamsFetch;
}
/**
 * Available when event is aerial duel
 * @export
 * @interface AerialDuelDetails
 */
export interface AerialDuelDetails {
    /**
     * Aerial duel won. An aerial duel is considered won in favor of the player who touches the ball first, no matter what happens next.
     * @type {boolean}
     * @memberof AerialDuelDetails
     */
    firstTouch?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AerialDuelDetails
     */
    height?: number;
    /**
     * 
     * @type {OpponentDetails}
     * @memberof AerialDuelDetails
     */
    opponent?: OpponentDetails;
    /**
     * 
     * @type {number}
     * @memberof AerialDuelDetails
     */
    relatedDuelId?: number;
}
/**
 * Retrieves information about a given area
 * @export
 * @interface Area
 */
export interface Area {
    /**
     * 
     * @type {string}
     * @memberof Area
     */
    alpha2code?: string;
    /**
     * 
     * @type {string}
     * @memberof Area
     */
    alpha3code?: string;
    /**
     * 
     * @type {number}
     * @memberof Area
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Area
     */
    name?: string;
}
/**
 * The list of retrieved areas
 * @export
 */
export type Areas = Array<Area>
/**
 * 
 * @export
 * @interface AttackDetails
 */
export interface AttackDetails {
    /**
     * <table><thead><tr><th>Possible flank values</th></tr></thead><tbody><tr><td>left</td></tr><tr><td>right</td></tr><tr><td>center</td></tr></tbody></table>
     * @type {string}
     * @memberof AttackDetails
     */
    flank?: string;
    /**
     * If true this is an attack with goal
     * @type {boolean}
     * @memberof AttackDetails
     */
    withGoal?: boolean;
    /**
     * If true this is an attack with shot
     * @type {boolean}
     * @memberof AttackDetails
     */
    withShot?: boolean;
    /**
     * If true this is an attack with shot on goal
     * @type {boolean}
     * @memberof AttackDetails
     */
    withShotOnGoal?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AttackDetails
     */
    xg?: number;
}
/**
 * Available when event is a carry with the ball
 * @export
 * @interface CarryDetails
 */
export interface CarryDetails {
    /**
     * 
     * @type {CarryEndLocation}
     * @memberof CarryDetails
     */
    endLocation?: CarryEndLocation;
    /**
     * 
     * @type {number}
     * @memberof CarryDetails
     */
    progression?: number;
}
/**
 * 
 * @export
 * @interface CarryEndLocation
 */
export interface CarryEndLocation {
    /**
     * 
     * @type {number}
     * @memberof CarryEndLocation
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof CarryEndLocation
     */
    y?: number;
}
/**
 * Retrieves information about a given coach
 * @export
 * @interface Coach
 */
export interface Coach {
    /**
     * 
     * @type {Area}
     * @memberof Coach
     */
    birthArea?: Area;
    /**
     * 
     * @type {string}
     * @memberof Coach
     */
    birthDate?: string;
    /**
     * Available with querystring param `details=currentTeam`
     * @type {Team}
     * @memberof Coach
     */
    currentTeam?: Team;
    /**
     * 
     * @type {number}
     * @memberof Coach
     */
    currentTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof Coach
     */
    firstName?: string;
    /**
     * <table><thead><tr><th>Gender</th></tr></thead><tbody><tr><td>male</td></tr><tr><td>female</td></tr></tbody></table>
     * @type {string}
     * @memberof Coach
     */
    gender?: Coach.GenderEnum;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Coach
     */
    gsmId?: number;
    /**
     * Coach picture URL
     * @type {string}
     * @memberof Coach
     */
    imageDataURL?: string;
    /**
     * 
     * @type {string}
     * @memberof Coach
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Coach
     */
    middleName?: string;
    /**
     * 
     * @type {Area}
     * @memberof Coach
     */
    passportArea?: Area;
    /**
     * 
     * @type {string}
     * @memberof Coach
     */
    shortName?: string;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>active</td><td>The coach is currently active</td></tr><tr><td>retired</td><td>The coach has retired</td></tr><tr><td>died</td><td>The coach is dead</td></tr></tbody></table>
     * @type {string}
     * @memberof Coach
     */
    status?: Coach.StatusEnum;
    /**
     * 
     * @type {number}
     * @memberof Coach
     */
    wyId?: number;
}

/**
 * @export
 * @namespace Coach
 */
export namespace Coach {
    /**
     * @export
     * @enum {string}
     */
    export enum GenderEnum {
        Male = <any>'male',
        Female = <any>'female'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Active = <any>'active',
        Retired = <any>'retired',
        Died = <any>'died'
    }
}
/**
 * Available with querystring param `fetch=coaches`
 * @export
 * @interface CoachesFetch
 */
export interface CoachesFetch {
    /**
     * 
     * @type {TeamCoach}
     * @memberof CoachesFetch
     */
    teamId?: TeamCoach;
}
/**
 * Retrieves information about a given competition
 * @export
 * @interface Competition
 */
export interface Competition {
    /**
     * 
     * @type {Area}
     * @memberof Competition
     */
    area?: Area;
    /**
     * <table><thead><tr><th>Category</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>All players with no age restriction</td></tr><tr><td>U13</td><td>All players under the age of 13</td></tr><tr><td>U14</td><td>All players under the age of 14</td></tr><tr><td>U15</td><td>All players under the age of 15</td></tr><tr><td>U16</td><td>All players under the age of 16</td></tr><tr><td>U17</td><td>All players under the age of 17</td></tr><tr><td>U18</td><td>All players under the age of 18</td></tr><tr><td>U19</td><td>All players under the age of 19</td></tr><tr><td>U20</td><td>All players under the age of 20</td></tr><tr><td>U21</td><td>All players under the age of 21</td></tr><tr><td>U23</td><td>All players under the age of 23</td></tr></tbody></table>
     * @type {string}
     * @memberof Competition
     */
    category?: Competition.CategoryEnum;
    /**
     * From 1 (highest) to 5 (lowest) (0 = no info)
     * @type {number}
     * @memberof Competition
     */
    divisionLevel?: Competition.DivisionLevelEnum;
    /**
     * <table><thead><tr><th>Format</th></tr></thead><tbody><tr><td>Domestic cup</td></tr><tr><td>Domestic league</td></tr><tr><td>Domestic super cup</td></tr><tr><td>International cup</td></tr><tr><td>International super cup</td></tr></tbody></table>
     * @type {string}
     * @memberof Competition
     */
    format?: Competition.FormatEnum;
    /**
     * <table><thead><tr><th>Gender</th></tr></thead><tbody><tr><td>male</td></tr><tr><td>female</td></tr></tbody></table>
     * @type {string}
     * @memberof Competition
     */
    gender?: Competition.GenderEnum;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Competition
     */
    gsmId?: number;
    /**
     * 
     * @type {string}
     * @memberof Competition
     */
    name?: string;
    /**
     * <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>club</td><td>This competition is reserved to club teams</td></tr><tr><td>international</td><td>This competition is reserved to national teams</td></tr></tbody></table>
     * @type {string}
     * @memberof Competition
     */
    type?: Competition.TypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Competition
     */
    wyId?: number;
}

/**
 * @export
 * @namespace Competition
 */
export namespace Competition {
    /**
     * @export
     * @enum {string}
     */
    export enum CategoryEnum {
        Default = <any>'default',
        U13 = <any>'U13',
        U14 = <any>'U14',
        U15 = <any>'U15',
        U16 = <any>'U16',
        U17 = <any>'U17',
        U18 = <any>'U18',
        U19 = <any>'U19',
        U20 = <any>'U20',
        U21 = <any>'U21',
        U23 = <any>'U23'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum DivisionLevelEnum {
        NUMBER_0 = <any>0,
        NUMBER_1 = <any>1,
        NUMBER_2 = <any>2,
        NUMBER_3 = <any>3,
        NUMBER_4 = <any>4,
        NUMBER_5 = <any>5
    }
    /**
     * @export
     * @enum {string}
     */
    export enum FormatEnum {
        DomesticCup = <any>'Domestic cup',
        DomesticLeague = <any>'Domestic league',
        DomesticSuperCup = <any>'Domestic super cup',
        InternationalCup = <any>'International cup',
        InternationalSuperCup = <any>'International super cup'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum GenderEnum {
        Male = <any>'male',
        Female = <any>'female'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Club = <any>'club',
        International = <any>'international'
    }
}
/**
 * The list of matches of the given competition in the current season
 * @export
 * @interface CompetitionMatches
 */
export interface CompetitionMatches {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof CompetitionMatches
     */
    competition?: Competition;
    /**
     * 
     * @type {Array<CompetitionMatchesMatches>}
     * @memberof CompetitionMatches
     */
    matches?: Array<CompetitionMatchesMatches>;
}
/**
 * 
 * @export
 * @interface CompetitionMatchesMatches
 */
export interface CompetitionMatchesMatches {
    /**
     * 
     * @type {number}
     * @memberof CompetitionMatchesMatches
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof CompetitionMatchesMatches
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof CompetitionMatchesMatches
     */
    dateutc?: string;
    /**
     * 
     * @type {number}
     * @memberof CompetitionMatchesMatches
     */
    gameweek?: number;
    /**
     * homeTeam – awayTeam, homeScore - awayScore
     * @type {string}
     * @memberof CompetitionMatchesMatches
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof CompetitionMatchesMatches
     */
    matchId?: number;
    /**
     * 
     * @type {number}
     * @memberof CompetitionMatchesMatches
     */
    roundId?: number;
    /**
     * 
     * @type {number}
     * @memberof CompetitionMatchesMatches
     */
    seasonId?: number;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>Fixture</td><td>The match has yet to kick-off and a date and time has been defined</td></tr><tr><td>Played</td><td>The match has played</td></tr></tbody></table>
     * @type {string}
     * @memberof CompetitionMatchesMatches
     */
    status?: CompetitionMatchesMatches.StatusEnum;
}

/**
 * @export
 * @namespace CompetitionMatchesMatches
 */
export namespace CompetitionMatchesMatches {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Fixture = <any>'Fixture',
        Played = <any>'Played'
    }
}
/**
 * The list of players of the given competition in the current season
 * @export
 * @interface CompetitionPlayers
 */
export interface CompetitionPlayers {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof CompetitionPlayers
     */
    competition?: Competition;
    /**
     * 
     * @type {Meta}
     * @memberof CompetitionPlayers
     */
    meta?: Meta;
    /**
     * 
     * @type {Array<Player>}
     * @memberof CompetitionPlayers
     */
    players?: Array<Player>;
}
/**
 * The list of seasons for a given competition
 * @export
 * @interface CompetitionSeasons
 */
export interface CompetitionSeasons {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof CompetitionSeasons
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof CompetitionSeasons
     */
    competitionId?: number;
    /**
     * 
     * @type {Array<CompetitionSeasonsSeasons>}
     * @memberof CompetitionSeasons
     */
    seasons?: Array<CompetitionSeasonsSeasons>;
}
/**
 * 
 * @export
 * @interface CompetitionSeasonsSeasons
 */
export interface CompetitionSeasonsSeasons {
    /**
     * 
     * @type {Season}
     * @memberof CompetitionSeasonsSeasons
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof CompetitionSeasonsSeasons
     */
    seasonId?: number;
}
/**
 * The list of teams of the given competition in the current season
 * @export
 * @interface CompetitionTeams
 */
export interface CompetitionTeams {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof CompetitionTeams
     */
    competition?: Competition;
    /**
     * 
     * @type {Array<Team>}
     * @memberof CompetitionTeams
     */
    teams?: Array<Team>;
}
/**
 * The list of competitions for a given area
 * @export
 * @interface Competitions
 */
export interface Competitions {
    /**
     * 
     * @type {Array<Competition>}
     * @memberof Competitions
     */
    competitions?: Array<Competition>;
}
/**
 * 
 * @export
 * @interface DestinationTeamDetails
 */
export interface DestinationTeamDetails {
    /**
     * 
     * @type {Team}
     * @memberof DestinationTeamDetails
     */
    team?: Team;
}
/**
 * 
 * @export
 * @interface Empty
 */
export interface Empty {
}
/**
 * HTTP status error code 400
 * @export
 * @interface ErrorCode400
 */
export interface ErrorCode400 {
    /**
     * 
     * @type {ErrorObject}
     * @memberof ErrorCode400
     */
    error?: ErrorObject;
}
/**
 * HTTP status error code 429
 * @export
 * @interface ErrorCode429
 */
export interface ErrorCode429 {
    /**
     * 
     * @type {ErrorObject}
     * @memberof ErrorCode429
     */
    error?: ErrorObject;
}
/**
 * HTTP status error code 500
 * @export
 * @interface ErrorCode500
 */
export interface ErrorCode500 {
    /**
     * 
     * @type {ErrorObject}
     * @memberof ErrorCode500
     */
    error?: ErrorObject;
}
/**
 * 
 * @export
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * 
     * @type {number}
     * @memberof ErrorObject
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorObject
     */
    message?: string;
}
/**
 * The locations are measured in percentages of the field, from 0 to 100. The (0, 0) point represents the left corner point near own goal, the (0, 100) point, the right corner point near own goal, the (100, 0), the left corner point near opponent goal, the (100, 100), the right corner point near opponent goal. The (50, 50) point is the center of the field. or events where location is not tagged, it can be set to null.
 * @export
 * @interface EventLocation
 */
export interface EventLocation {
    /**
     * 
     * @type {number}
     * @memberof EventLocation
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof EventLocation
     */
    y?: number;
}
/**
 * The event is identified by its primary and secondary types. The primary type is guaranteed to be present for all the events and has only one value
 * @export
 * @interface EventType
 */
export interface EventType {
    /**
     * <table><thead><tr><th>Primary event types</th></tr></thead><tbody><tr><td>acceleration</td></tr><tr><td>clearance</td></tr><tr><td>corner</td></tr><tr><td>duel</td></tr><tr><td>fairplay</td></tr><tr><td>free_kick</td></tr><tr><td>game_interruption</td></tr><tr><td>goal_kick</td></tr><tr><td>goalkeeper_exit</td></tr><tr><td>infraction</td></tr><tr><td>interception</td></tr><tr><td>offside</td></tr><tr><td>own_goal</td></tr><tr><td>pass</td></tr><tr><td>penalty</td></tr><tr><td>pressing_attempt</td></tr><tr><td>received_pass</td></tr><tr><td>shot_against</td></tr><tr><td>throw_in</td></tr><tr><td>touch</td></tr><tr><td>postmatch_penalty</td></tr><tr><td>postmatch_penalty_faced</td></tr></tbody></table>
     * @type {string}
     * @memberof EventType
     */
    primary?: string;
    /**
     * <table><thead><tr><th>Secondary event types</th></tr></thead><tbody><tr><td>aerial_duel</td></tr><tr><td>assist</td></tr><tr><td>back_pass</td></tr><tr><td>ball_out</td></tr><tr><td>carry</td></tr><tr><td>conceded_goal</td></tr><tr><td>counterpressing_recovery</td></tr><tr><td>cross</td></tr><tr><td>cross_blocked</td></tr><tr><td>deep_completed_cross</td></tr><tr><td>deep_completition</td></tr><tr><td>defensive_duel</td></tr><tr><td>dribble</td></tr><tr><td>dribbled_past_attempt</td></tr><tr><td>forward_pass</td></tr><tr><td>foul</td></tr><tr><td>foul_suffered</td></tr><tr><td>free_kick_cross</td></tr><tr><td>free_kick_shot</td></tr><tr><td>goal</td></tr><tr><td>ground_duel</td></tr><tr><td>hand_pass</td></tr><tr><td>head_pass</td></tr><tr><td>head_shot</td></tr><tr><td>key_pass</td></tr><tr><td>lateral_pass</td></tr><tr><td>linkup_play</td></tr><tr><td>long_pass</td></tr><tr><td>loose_ball_duel</td></tr><tr><td>loss</td></tr><tr><td>offensive_duel</td></tr><tr><td>opportunity</td></tr><tr><td>pass_into_penalty_area</td></tr><tr><td>pass_to_final_third</td></tr><tr><td>penalty_conceded_goal</td></tr><tr><td>penalty_foul</td></tr><tr><td>penalty_goal</td></tr><tr><td>penalty_save</td></tr><tr><td>pressing_duel</td></tr><tr><td>progressive_pass</td></tr><tr><td>progressive_run</td></tr><tr><td>recovery</td></tr><tr><td>red_card</td></tr><tr><td>save</td></tr><tr><td>save_with_reflex</td></tr><tr><td>second_assist</td></tr><tr><td>short_or_medium_pass</td></tr><tr><td>shot_after_corner</td></tr><tr><td>shot_after_free_kick</td></tr><tr><td>shot_after_throw_in</td></tr><tr><td>shot_assist</td></tr><tr><td>shot_block</td></tr><tr><td>sliding_tackle</td></tr><tr><td>smart_pass</td></tr><tr><td>third_assist</td></tr><tr><td>through_pass</td></tr><tr><td>touch_in_box</td></tr><tr><td>under_pressure</td></tr><tr><td>whistle</td></tr><tr><td>yellow_card</td></tr><tr><td>postmatch_penalty_saved</td></tr><tr><td>conceded_postmatch_penalty</td></tr></tbody></table>
     * @type {Array<string>}
     * @memberof EventType
     */
    secondary?: Array<string>;
}
/**
 * 
 * @export
 * @interface FormationSchema
 */
export interface FormationSchema {
    /**
     * The relative second from the period in which the formation ended being used
     * @type {number}
     * @memberof FormationSchema
     */
    endSec?: number;
    /**
     * 
     * @type {number}
     * @memberof FormationSchema
     */
    id?: number;
    /**
     * <table><thead><tr><th>Period</th><th>Description</th></tr></thead><tbody><tr><td>1H</td><td>First Half Time</td></tr><tr><td>2H</td><td>Second Half Time</td></tr><tr><td>E1</td><td>First Extra Time</td></tr><tr><td>E2</td><td>Second Extra Time</td></tr></tbody></table>
     * @type {string}
     * @memberof FormationSchema
     */
    matchPeriod?: FormationSchema.MatchPeriodEnum;
    /**
     * List of players in the current formation
     * @type {Array<FormationSchemaPlayers>}
     * @memberof FormationSchema
     */
    players?: Array<FormationSchemaPlayers>;
    /**
     * <table><thead><tr><th>Scheme</th><th>p0</th><th>p1</th><th>p2</th><th>p3</th><th>p4</th><th>p5</th><th>p6</th><th>p7</th><th>p8</th><th>p9</th><th>p10</th></tr></thead><tbody><tr><td>4-4-2</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rw</td><td>rcmf</td><td>lcmf</td><td>lw</td><td>ss</td><td>cf</td></tr><tr><td>4-4-1-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rw</td><td>rcmf</td><td>lcmf</td><td>lw</td><td>amf</td><td>cf</td></tr><tr><td>4-3-2-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>amf</td><td>amf</td><td>cf</td></tr><tr><td>4-2-3-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rdmf</td><td>ldmf</td><td>ramf</td><td>amf</td><td>lamf</td><td>cf</td></tr><tr><td>4-1-4-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>dmf</td><td>rw</td><td>rcmf</td><td>lcmf</td><td>lw</td><td>cf</td></tr><tr><td>4-1-3-2</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>dmf</td><td>ramf</td><td>amf</td><td>lamf</td><td>ss</td><td>cf</td></tr><tr><td>4-3-1-2</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>amf</td><td>ss</td><td>cf</td></tr><tr><td>4-3-3</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>rwf</td><td>cf</td><td>lwf</td></tr><tr><td>4-5-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rw</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>lw</td><td>cf</td></tr><tr><td>4-2-2-2</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rdmf</td><td>ldmf</td><td>ramf</td><td>lamf</td><td>ss</td><td>cf</td></tr><tr><td>4-2-1-3</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rdmf</td><td>ldmf</td><td>amf</td><td>rwf</td><td>cf</td><td>lwf</td></tr><tr><td>3-4-3</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf</td><td>lcmf</td><td>lwb</td><td>rwf</td><td>cf</td><td>lwf</td></tr><tr><td>3-4-1-2</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf</td><td>lcmf</td><td>lwb</td><td>amf</td><td>ss</td><td>cf</td></tr><tr><td>3-4-2-1</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf</td><td>lcmf</td><td>lwb</td><td>amf</td><td>amf</td><td>cf</td></tr><tr><td>3-5-2</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>lwb</td><td>ss</td><td>cf</td></tr><tr><td>3-5-1-1</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rw</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>lw</td><td>amf</td><td>cf</td></tr><tr><td>5-3-2</td><td>gk</td><td>rb5</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>lb5</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>ss</td><td>cf</td></tr><tr><td>5-4-1</td><td>gk</td><td>rb5</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>lb5</td><td>rw</td><td>rcmf</td><td>lcmf</td><td>lw</td><td>cf</td></tr><tr><td>4-3-2</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>ss</td><td>cf</td><td>esp</td></tr><tr><td>4-4-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rw</td><td>rcmf</td><td>lcmf</td><td>lw</td><td>cf</td><td>esp</td></tr><tr><td>4-3-1-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>amf</td><td>cf</td><td>esp</td></tr><tr><td>4-2-2-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rdmf</td><td>ldmf</td><td>amf</td><td>amf</td><td>cf</td><td>esp</td></tr><tr><td>4-1-3-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>dmf</td><td>ramf</td><td>amf</td><td>lamf</td><td>cf</td><td>esp</td></tr><tr><td>4-2-1-2</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rdmf</td><td>ldmf</td><td>amf</td><td>ss</td><td>cf</td><td>esp</td></tr><tr><td>3-4-2</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf</td><td>lcmf</td><td>lwb</td><td>ss</td><td>cf</td><td>esp</td></tr><tr><td>3-4-1-1</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf</td><td>lcmf</td><td>lwb</td><td>amf</td><td>cf</td><td>esp</td></tr><tr><td>3-5-1</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>lwb</td><td>cf</td><td>esp</td></tr><tr><td>5-3-1</td><td>gk</td><td>rb5</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>lb5</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>cf</td><td>esp</td></tr><tr><td>4-3-1</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>cf</td><td>esp</td><td>esp</td></tr><tr><td>4-4-0</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rw</td><td>rcmf</td><td>lcmf</td><td>lw</td><td>esp</td><td>esp</td></tr><tr><td>4-2-2-0</td><td>gk</td><td>rb</td><td>rcb</td><td>lcb</td><td>lb</td><td>rdmf</td><td>ldmf</td><td>amf</td><td>amf</td><td>esp</td><td>esp</td></tr><tr><td>3-4-1</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rwb</td><td>rcmf</td><td>lcmf</td><td>lwb</td><td>cf</td><td>esp</td><td>esp</td></tr><tr><td>5-3-0</td><td>gk</td><td>rb5</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>lb5</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>esp</td><td>esp</td></tr><tr><td>3-3-3-1</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rcmf3</td><td>dmf</td><td>lcmf3</td><td>ramf</td><td>amf</td><td>lamf</td><td>cf</td></tr><tr><td>3-2-3-2</td><td>gk</td><td>rcb3</td><td>cb</td><td>lcb3</td><td>rdmf</td><td>ldmf</td><td>ramf</td><td>amf</td><td>lamf</td><td>ss</td><td>cf</td></tr></tbody></table>
     * @type {string}
     * @memberof FormationSchema
     */
    scheme?: string;
    /**
     * The relative second from the period in which the formation started being used
     * @type {number}
     * @memberof FormationSchema
     */
    startSec?: number;
}

/**
 * @export
 * @namespace FormationSchema
 */
export namespace FormationSchema {
    /**
     * @export
     * @enum {string}
     */
    export enum MatchPeriodEnum {
        _1H = <any>'1H',
        _2H = <any>'2H',
        E1 = <any>'E1',
        E2 = <any>'E2',
        P = <any>'P'
    }
}
/**
 * 
 * @export
 * @interface FormationSchemaPlayerId
 */
export interface FormationSchemaPlayerId {
    /**
     * 
     * @type {number}
     * @memberof FormationSchemaPlayerId
     */
    playerId?: number;
    /**
     * <table><thead><tr><th>Name</th><th>Code</th></tr></thead><tbody><tr><td>Goalkeeper</td><td>gk</td></tr><tr><td>Right Back</td><td>rb</td></tr><tr><td>Right Centre Back</td><td>rcb</td></tr><tr><td>Left Centre Back</td><td>lcb</td></tr><tr><td>Left Back</td><td>lb</td></tr><tr><td>Right Winger</td><td>rw</td></tr><tr><td>Right Centre Midfielder</td><td>rcmf</td></tr><tr><td>Left Centre Midfielder</td><td>lcmf</td></tr><tr><td>Left Winger</td><td>lw</td></tr><tr><td>Second Striker</td><td>ss</td></tr><tr><td>Striker</td><td>cf</td></tr><tr><td>Attacking Midfielder</td><td>amf</td></tr><tr><td>Right Centre Midfielder</td><td>rcmf3</td></tr><tr><td>Defensive Midfielder</td><td>dmf</td></tr><tr><td>Left Centre Midfielder</td><td>lcmf3</td></tr><tr><td>Right Defensive Midfielder</td><td>rdmf</td></tr><tr><td>Left Defensive Midfielder</td><td>ldmf</td></tr><tr><td>Right Attacking Midfielder</td><td>ramf</td></tr><tr><td>Left Attacking Midfielder</td><td>lamf</td></tr><tr><td>Right Wing Forward</td><td>rwf</td></tr><tr><td>Left Wing Forward</td><td>lwf</td></tr><tr><td>Right Centre Back (3 at the back)</td><td>rcb3</td></tr><tr><td>Centre Back</td><td>cb</td></tr><tr><td>Left Centre Back (3 at the back)</td><td>lcb3</td></tr><tr><td>Right Wingback</td><td>rwb</td></tr><tr><td>Left Wingback</td><td>lwb</td></tr><tr><td>Right Back (5 at the back)</td><td>rb5</td></tr><tr><td>Left Back (5 at the back)</td><td>lb5</td></tr></tbody></table>
     * @type {string}
     * @memberof FormationSchemaPlayerId
     */
    position?: FormationSchemaPlayerId.PositionEnum;
}

/**
 * @export
 * @namespace FormationSchemaPlayerId
 */
export namespace FormationSchemaPlayerId {
    /**
     * @export
     * @enum {string}
     */
    export enum PositionEnum {
        Gk = <any>'gk',
        Rb = <any>'rb',
        Rcb = <any>'rcb',
        Lcb = <any>'lcb',
        Lb = <any>'lb',
        Rw = <any>'rw',
        Rcmf = <any>'rcmf',
        Lcmf = <any>'lcmf',
        Lw = <any>'lw',
        Ss = <any>'ss',
        Cf = <any>'cf',
        Amf = <any>'amf',
        Rcmf3 = <any>'rcmf3',
        Dmf = <any>'dmf',
        Lcmf3 = <any>'lcmf3',
        Rdmf = <any>'rdmf',
        Ldmf = <any>'ldmf',
        Ramf = <any>'ramf',
        Lamf = <any>'lamf',
        Rwf = <any>'rwf',
        Lwf = <any>'lwf',
        Rcb3 = <any>'rcb3',
        Cb = <any>'cb',
        Lcb3 = <any>'lcb3',
        Rwb = <any>'rwb',
        Lwb = <any>'lwb',
        Rb5 = <any>'rb5',
        Lb5 = <any>'lb5'
    }
}
/**
 * 
 * @export
 * @interface FormationSchemaPlayers
 */
export interface FormationSchemaPlayers {
    /**
     * 
     * @type {FormationSchemaPlayerId}
     * @memberof FormationSchemaPlayers
     */
    playerId?: FormationSchemaPlayerId;
}
/**
 * 
 * @export
 * @interface FormationStartSecond
 */
export interface FormationStartSecond {
    /**
     * 
     * @type {FormationSchema}
     * @memberof FormationStartSecond
     */
    formationSchema?: FormationSchema;
}
/**
 * Available with querystring param `fetch=formations`
 * @export
 * @interface FormationsFetch
 */
export interface FormationsFetch {
    /**
     * 
     * @type {FormationsRelatedToTheTeamWithIDTeamId}
     * @memberof FormationsFetch
     */
    teamId?: FormationsRelatedToTheTeamWithIDTeamId;
}
/**
 * 
 * @export
 * @interface FormationsRelatedToTheEventSecondStartsec
 */
export interface FormationsRelatedToTheEventSecondStartsec {
    /**
     * 
     * @type {MatchFormation}
     * @memberof FormationsRelatedToTheEventSecondStartsec
     */
    scheme?: MatchFormation;
}
/**
 * 
 * @export
 * @interface FormationsRelatedToThePeriodMatchPeriod
 */
export interface FormationsRelatedToThePeriodMatchPeriod {
    /**
     * 
     * @type {FormationsRelatedToTheEventSecondStartsec}
     * @memberof FormationsRelatedToThePeriodMatchPeriod
     */
    startsec?: FormationsRelatedToTheEventSecondStartsec;
}
/**
 * 
 * @export
 * @interface FormationsRelatedToTheTeamWithIDTeamId
 */
export interface FormationsRelatedToTheTeamWithIDTeamId {
    /**
     * 
     * @type {FormationsRelatedToThePeriodMatchPeriod}
     * @memberof FormationsRelatedToTheTeamWithIDTeamId
     */
    matchPeriod?: FormationsRelatedToThePeriodMatchPeriod;
}
/**
 * 
 * @export
 * @interface GoalkeeperDetails
 */
export interface GoalkeeperDetails {
    /**
     * 
     * @type {number}
     * @memberof GoalkeeperDetails
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GoalkeeperDetails
     */
    name?: string;
}
/**
 * Available when event is ground_duel
 * @export
 * @interface GroundDuelDetails
 */
export interface GroundDuelDetails {
    /**
     * <table><thead><tr><th>Possible duel types</th></tr></thead><tbody><tr><td>defensive_duel</td></tr><tr><td>dribble</td></tr><tr><td>offensive_duel</td></tr></tbody></table>
     * @type {string}
     * @memberof GroundDuelDetails
     */
    duelType?: string;
    /**
     * If true this results in a kept possession
     * @type {boolean}
     * @memberof GroundDuelDetails
     */
    keptPossession?: boolean;
    /**
     * 
     * @type {OpponentDetails1}
     * @memberof GroundDuelDetails
     */
    opponent?: OpponentDetails1;
    /**
     * If true this progressed with ball
     * @type {boolean}
     * @memberof GroundDuelDetails
     */
    progressedWithBall?: boolean;
    /**
     * If true this results in a recovered possession
     * @type {boolean}
     * @memberof GroundDuelDetails
     */
    recoveredPossession?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GroundDuelDetails
     */
    relatedDuelId?: number;
    /**
     * 
     * @type {string}
     * @memberof GroundDuelDetails
     */
    side?: string;
    /**
     * If true this results in a stopped progression
     * @type {boolean}
     * @memberof GroundDuelDetails
     */
    stoppedProgress?: boolean;
    /**
     * If true this results in a possession take on
     * @type {boolean}
     * @memberof GroundDuelDetails
     */
    takeOn?: boolean;
}
/**
 * 
 * @export
 * @interface GroupStandings
 */
export interface GroupStandings {
    /**
     * 
     * @type {Array<TeamsStandingForTheGroup>}
     * @memberof GroupStandings
     */
    teams?: Array<TeamsStandingForTheGroup>;
}
/**
 * 
 * @export
 * @interface InformationAboutVideoOffsets
 */
export interface InformationAboutVideoOffsets {
    /**
     * 
     * @type {Offset1}
     * @memberof InformationAboutVideoOffsets
     */
    _1H?: Offset1;
    /**
     * 
     * @type {Offset2}
     * @memberof InformationAboutVideoOffsets
     */
    _2H?: Offset2;
    /**
     * 
     * @type {Offset3}
     * @memberof InformationAboutVideoOffsets
     */
    e1?: Offset3;
    /**
     * 
     * @type {Offset4}
     * @memberof InformationAboutVideoOffsets
     */
    e2?: Offset4;
    /**
     * 
     * @type {Offset5}
     * @memberof InformationAboutVideoOffsets
     */
    P?: Offset5;
}
/**
 * Available when event is foul, yellow_card or red_card
 * @export
 * @interface InfractionDetails
 */
export interface InfractionDetails {
    /**
     * 
     * @type {OpponentDetails1}
     * @memberof InfractionDetails
     */
    opponent?: OpponentDetails1;
    /**
     * If true this results in a red card
     * @type {boolean}
     * @memberof InfractionDetails
     */
    redCard?: boolean;
    /**
     * <table><thead><tr><th>Possible type values</th></tr></thead><tbody><tr><td>hand_foul</td></tr><tr><td>regular_foul</td></tr><tr><td>violent_foul</td></tr><tr><td>out_of_play_foul</td></tr><tr><td>protest_foul</td></tr><tr><td>time_lost_foul</td></tr><tr><td>simulation_foul</td></tr><tr><td>late_card_foul</td></tr></tbody></table>
     * @type {string}
     * @memberof InfractionDetails
     */
    type?: string;
    /**
     * If true this results in a yellow card
     * @type {boolean}
     * @memberof InfractionDetails
     */
    yellowCard?: boolean;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsAttacks
 */
export interface ListOfStatisticsAttacks {
    /**
     * 
     * @type {MatchAdvancedStatsAttacks}
     * @memberof ListOfStatisticsAttacks
     */
    teamId?: MatchAdvancedStatsAttacks;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsDefense
 */
export interface ListOfStatisticsDefense {
    /**
     * 
     * @type {MatchAdvancedStatsDefence}
     * @memberof ListOfStatisticsDefense
     */
    teamId?: MatchAdvancedStatsDefence;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsDuels
 */
export interface ListOfStatisticsDuels {
    /**
     * 
     * @type {MatchAdvancedStatsDuels}
     * @memberof ListOfStatisticsDuels
     */
    teamId?: MatchAdvancedStatsDuels;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsFlanks
 */
export interface ListOfStatisticsFlanks {
    /**
     * 
     * @type {MatchAdvancedStatsFlanks}
     * @memberof ListOfStatisticsFlanks
     */
    teamId?: MatchAdvancedStatsFlanks;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsGeneral
 */
export interface ListOfStatisticsGeneral {
    /**
     * 
     * @type {MatchAdvancedStatsGeneral}
     * @memberof ListOfStatisticsGeneral
     */
    teamId?: MatchAdvancedStatsGeneral;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsOpenPlay
 */
export interface ListOfStatisticsOpenPlay {
    /**
     * 
     * @type {MatchAdvancedStatsOpenPlay}
     * @memberof ListOfStatisticsOpenPlay
     */
    teamId?: MatchAdvancedStatsOpenPlay;
}
/**
 * 
 * @export
 * @interface ListOfStatisticsPasses
 */
export interface ListOfStatisticsPasses {
    /**
     * 
     * @type {MatchAdvancedStatsPasses}
     * @memberof ListOfStatisticsPasses
     */
    teamId?: MatchAdvancedStatsPasses;
}
/**
 * A Possession is a sequence of events with the ball of the same team. Time where the ball is out of play (either out of field or, for example, setting up a set piece) is not counted as possession for any of the two teams. Opponent actions that do not constitute a meaningful ball possession, like lost duels, missed balls and rebounds that are immediately picked up, do not break possessions
 * @export
 * @interface ListOfStatisticsPossession
 */
export interface ListOfStatisticsPossession {
    /**
     * 
     * @type {MatchAdvancedStatsPossession}
     * @memberof ListOfStatisticsPossession
     */
    teamId?: MatchAdvancedStatsPossession;
    /**
     * 
     * @type {string}
     * @memberof ListOfStatisticsPossession
     */
    deadTime?: string;
    /**
     * 
     * @type {string}
     * @memberof ListOfStatisticsPossession
     */
    totalTime?: string;
}
/**
 * Transition is an event where one team loses or recovers the Ball possession.
 * @export
 * @interface ListOfStatisticsTransitions
 */
export interface ListOfStatisticsTransitions {
    /**
     * 
     * @type {MatchAdvancedStatsTransitions}
     * @memberof ListOfStatisticsTransitions
     */
    teamId?: MatchAdvancedStatsTransitions;
}
/**
 * <table><thead><tr><th>Name</th><th>Code2</th><th>Code3</th></tr></thead><tbody><tr><td>Goalkeeper</td><td>GK</td><td>GKP</td></tr><tr><td>Defender</td><td>DF</td><td>DEF</td></tr><tr><td>Midfielder</td><td>MD</td><td>MID</td></tr><tr><td>Forward</td><td>FW</td><td>FWD</td></tr></tbody></table>
 * @export
 * @interface MainRole
 */
export interface MainRole {
    /**
     * 
     * @type {string}
     * @memberof MainRole
     */
    code2?: string;
    /**
     * 
     * @type {string}
     * @memberof MainRole
     */
    code3?: string;
    /**
     * 
     * @type {string}
     * @memberof MainRole
     */
    name?: string;
}
/**
 * Retrieves information about a given match
 * @export
 * @interface Match
 */
export interface Match {
    /**
     * Available with querystring param `details=competition`
     * @type {Competition}
     * @memberof Match
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof Match
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof Match
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof Match
     */
    dateutc?: string;
    /**
     * <table><thead><tr><th>Duration</th><th>Description</th></tr></thead><tbody><tr><td>Regular</td><td>The match is over at regulation</td></tr><tr><td>GoldenGoal</td><td>The match is over with a golden goal during extra time</td></tr><tr><td>SilverGoal</td><td>The match is over after the first extra time period</td></tr><tr><td>ExtraTime</td><td>The match is over after extra time</td></tr><tr><td>Penalties</td><td>The match is over after penalties</td></tr></tbody></table>
     * @type {string}
     * @memberof Match
     */
    duration?: Match.DurationEnum;
    /**
     * 
     * @type {number}
     * @memberof Match
     */
    gameweek?: number;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Match
     */
    gsmId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Match
     */
    hasDataAvailable?: boolean;
    /**
     * homeTeam – awayTeam, homeScore-awayScore
     * @type {string}
     * @memberof Match
     */
    label?: string;
    /**
     * 
     * @type {Array<MatchReferees>}
     * @memberof Match
     */
    referees?: Array<MatchReferees>;
    /**
     * Available with querystring param `details=round`
     * @type {Round}
     * @memberof Match
     */
    round?: Round;
    /**
     * 
     * @type {number}
     * @memberof Match
     */
    roundId?: number;
    /**
     * Available with querystring param `details=season`
     * @type {Season}
     * @memberof Match
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof Match
     */
    seasonId?: number;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>Cancelled</td><td>The match has been cancelled</td></tr><tr><td>Fixture</td><td>The match has yet to come</td></tr><tr><td>Played</td><td>The match has officially over</td></tr><tr><td>Playing</td><td>The match is currently underway</td></tr><tr><td>Postponed</td><td>The match has been postponed and no new date and time is available yet</td></tr><tr><td>Suspended</td><td>The match has been suspended and no new date and time is available yet</td></tr><tr><td>Awarded</td><td>The match has been awarded</td></tr></tbody></table>
     * @type {string}
     * @memberof Match
     */
    status?: Match.StatusEnum;
    /**
     * 
     * @type {MatchTeamsData}
     * @memberof Match
     */
    teamsData?: MatchTeamsData;
    /**
     * 
     * @type {string}
     * @memberof Match
     */
    venue?: string;
    /**
     * If no winner is present, value will be `0`
     * @type {number}
     * @memberof Match
     */
    winner?: number;
    /**
     * 
     * @type {number}
     * @memberof Match
     */
    wyId?: number;
}

/**
 * @export
 * @namespace Match
 */
export namespace Match {
    /**
     * @export
     * @enum {string}
     */
    export enum DurationEnum {
        Regular = <any>'Regular',
        GoldenGoal = <any>'GoldenGoal',
        SilverGoal = <any>'SilverGoal',
        ExtraTime = <any>'ExtraTime',
        Penalties = <any>'Penalties'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Cancelled = <any>'Cancelled',
        Fixture = <any>'Fixture',
        Played = <any>'Played',
        Playing = <any>'Playing',
        Postponed = <any>'Postponed',
        Suspended = <any>'Suspended',
        Awarded = <any>'Awarded'
    }
}
/**
 * Returns advanced statistics of a given match
 * @export
 * @interface MatchAdvancedStats
 */
export interface MatchAdvancedStats {
    /**
     * 
     * @type {ListOfStatisticsAttacks}
     * @memberof MatchAdvancedStats
     */
    attacks?: ListOfStatisticsAttacks;
    /**
     * 
     * @type {ListOfStatisticsDefense}
     * @memberof MatchAdvancedStats
     */
    defence?: ListOfStatisticsDefense;
    /**
     * 
     * @type {ListOfStatisticsDuels}
     * @memberof MatchAdvancedStats
     */
    duels?: ListOfStatisticsDuels;
    /**
     * 
     * @type {ListOfStatisticsFlanks}
     * @memberof MatchAdvancedStats
     */
    flanks?: ListOfStatisticsFlanks;
    /**
     * 
     * @type {ListOfStatisticsGeneral}
     * @memberof MatchAdvancedStats
     */
    general?: ListOfStatisticsGeneral;
    /**
     * Available with querystring param `details=match`
     * @type {Match}
     * @memberof MatchAdvancedStats
     */
    match?: Match;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStats
     */
    matchId?: number;
    /**
     * 
     * @type {ListOfStatisticsOpenPlay}
     * @memberof MatchAdvancedStats
     */
    openPlay?: ListOfStatisticsOpenPlay;
    /**
     * 
     * @type {ListOfStatisticsPasses}
     * @memberof MatchAdvancedStats
     */
    passes?: ListOfStatisticsPasses;
    /**
     * 
     * @type {ListOfStatisticsPossession}
     * @memberof MatchAdvancedStats
     */
    possession?: ListOfStatisticsPossession;
    /**
     * 
     * @type {TeamsDetails}
     * @memberof MatchAdvancedStats
     */
    teams?: TeamsDetails;
    /**
     * 
     * @type {ListOfStatisticsTransitions}
     * @memberof MatchAdvancedStats
     */
    transitions?: ListOfStatisticsTransitions;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsAttacks
 */
export interface MatchAdvancedStatsAttacks {
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    corners?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    cornersWithShot?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    counterAttacks?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    freeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    freeKicksWithShot?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    positionalAttack?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    positionalWithShots?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsAttacks
     */
    withShots?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsDefence
 */
export interface MatchAdvancedStatsDefence {
    /**
     * An Action (generally a pass) when the player, while having other option, to pass or to hold the ball, is instead clearing it, either with a long pass forward without a precise target or for a throw in/corner kick, playing safe
     * @type {number}
     * @memberof MatchAdvancedStatsDefence
     */
    clearances?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof MatchAdvancedStatsDefence
     */
    interceptions?: number;
    /**
     * A metric to quantify high press intensity introduced by Colin Trainor in 2014
     * @type {number}
     * @memberof MatchAdvancedStatsDefence
     */
    ppda?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDefence
     */
    tackles?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsDuels
 */
export interface MatchAdvancedStatsDuels {
    /**
     * When two or more players from opposing teams jump to compete for the ball
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    aerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    aerialDuelsSuccessful?: number;
    /**
     * Number of defensive actions (defensive duels, loose ball duels, interceptions, tackles) per minute of opponent ball possession
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    challengeIntensity?: number;
    /**
     * When a player attempts to dispossess an opposition player to stop an attack progressing
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    defensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    defensiveDuelsSuccessful?: number;
    /**
     * An attempt to move past an opposing player whilst trying to maintain possession of the ball
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    dribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    dribblesSuccessful?: number;
    /**
     * A challenge between two players to gain control of the ball, progress with the ball or change its direction
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    duels?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    duelsSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    groundDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    groundDuelsSuccessful?: number;
    /**
     * A duel for a loose ball, when no team has clear ball possession
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    looseBallDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    looseBallDuelsSuccessful?: number;
    /**
     * A ground Duel for the player in possession of the ball
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    offensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsDuels
     */
    offensiveDuelsSuccessful?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsFlanks
 */
export interface MatchAdvancedStatsFlanks {
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsFlanks
     */
    centerAttacks?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsFlanks
     */
    centerXg?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsFlanks
     */
    leftFlankAttacks?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsFlanks
     */
    leftFlankXg?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsFlanks
     */
    rightFlankAttacks?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsFlanks
     */
    rightFlankXg?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsGeneral
 */
export interface MatchAdvancedStatsGeneral {
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    avgDistance?: number;
    /**
     * A corner kick served as specified in law 17 IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    corners?: number;
    /**
     * An attempt to move past an opposing player whilst trying to maintain possession of the ball
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    dribbles?: number;
    /**
     * An offence committed by a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    fouls?: number;
    /**
     * An offence committed on a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    foulsSuffered?: number;
    /**
     * The execution of a free kick according to law 13 of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    freeKicks?: number;
    /**
     * A goal scored as specified in law 10.1 of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    goals?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    leftThrowIns?: number;
    /**
     * An offside as described in the law 11 of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    offsides?: number;
    /**
     * A continuous ball control by one player attempting to draw the team significantly closer to the opponent goal
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    progressiveRuns?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    redCards?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    rightThrowIns?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shots?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsBlocked?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsFromBox?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsFromBoxOnTarget?: number;
    /**
     * Shooting from the danger zone. The danger area falls within the coordinates x >= 84.29 and y >= 36.29 and y <= 63.71
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsFromDangerZone?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsOnPost?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsOutsideBox?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsOutsideBoxOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    shotsWide?: number;
    /**
     * A throw in served as specified in law 17 IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    totalThrowIns?: number;
    /**
     * An action (a Pass or a Touch) that happens in the opponent penalty area. Duels are excluded from this definition
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    touchesInBox?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    xg?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    xgPerShot?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a yellow card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof MatchAdvancedStatsGeneral
     */
    yellowCards?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsOpenPlay
 */
export interface MatchAdvancedStatsOpenPlay {
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsOpenPlay
     */
    _long?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsOpenPlay
     */
    medium?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsOpenPlay
     */
    _short?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsOpenPlay
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsOpenPlay
     */
    veryLong?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsPasses
 */
export interface MatchAdvancedStatsPasses {
    /**
     * The last action of a player from the goalscoring team, prior to the Goal being scored by a teammate, or an Own goal
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    assists?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    avgPassLength?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    avgPassToFinalThirdLength?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    backPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    backPassesSuccessful?: number;
    /**
     * Not distinguished by height
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesBlocked?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesFromLeftFlank?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesFromLeftFlankSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesFromRightFlank?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesFromRightFlankSuccessful?: number;
    /**
     * Cross over waist height
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesHigh?: number;
    /**
     * Cross cross below waist height
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesLow?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesSuccessful?: number;
    /**
     * A ball played from the offensive flanks aimed towards a teammate in the area in front of the opponent’s goal
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    crossesTotal?: number;
    /**
     * A non-cross Pass that is targeted to the zone within 20 meters of the opponent’s goal
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    deepCompletedPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    deepCompletedPassesSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    forwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    forwardPassesSuccessful?: number;
    /**
     * A pass that immediately creates a clear goal scoring opportunity for a teammate who in turn fails to score
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    keyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    keyPassesSuccessful?: number;
    /**
     * Passes in two 90° angles rotated by 45° facing sideways, longer than 12 meters
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    lateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    lateralPassesSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    longPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    longPassesSuccessful?: number;
    /**
     * Number of team passes per minute of pure ball possession
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    matchTempo?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    passToFinalThirds?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    passToFinalThirdsSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    passToPenaltyAreas?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    passToPenaltyAreasSuccessful?: number;
    /**
     * An attempt to pass the ball to a teammate
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    passes?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    passesSuccessful?: number;
    /**
     * A forward pass that attempts to advance a team significantly closer to the opponent’s goal
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    progressivePasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    progressivePassesSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    shortMediumPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    shortMediumPassesSuccessful?: number;
    /**
     * The last action of a player prior to a teammate having a Shot
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    shotAssists?: number;
    /**
     * A creative and penetrative pass that attempts to break the opposition's defensive lines to gain a significant advantage in attack
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    smartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    smartPassesSuccessful?: number;
    /**
     * A pass played into the space behind the defensive line for a teammate to contest
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    throughPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    throughPassesSuccessful?: number;
    /**
     * <i>Deprecated<i>, same value as lateralPasses
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    verticalPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPasses
     */
    verticalPassesSuccessful?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsPossession
 */
export interface MatchAdvancedStatsPossession {
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    avgPossessionDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession115?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession106120?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession1630?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession3145?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession4660?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession6175?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession7690?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    minutesOfPossession91105?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession115?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession106120?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession1630?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession3145?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession4660?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession6175?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession7690?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possession91105?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possessionNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    possessionPercent?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchAdvancedStatsPossession
     */
    purePossessionTime?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    reachingOpponentBox?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsPossession
     */
    reachingOpponentHalf?: number;
}
/**
 * 
 * @export
 * @interface MatchAdvancedStatsTransitions
 */
export interface MatchAdvancedStatsTransitions {
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    lossesHigh?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    lossesLow?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    lossesMedium?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    lossesTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    opponentHalfRecoveries?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    ownHalfLosses?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    recoveriesHigh?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    recoveriesLow?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    recoveriesMedium?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchAdvancedStatsTransitions
     */
    recoveriesTotal?: number;
}
/**
 * 
 * @export
 * @interface MatchEvent
 */
export interface MatchEvent {
    /**
     * 
     * @type {AerialDuelDetails}
     * @memberof MatchEvent
     */
    aerialDuel?: AerialDuelDetails;
    /**
     * 
     * @type {CarryDetails}
     * @memberof MatchEvent
     */
    carry?: CarryDetails;
    /**
     * 
     * @type {GroundDuelDetails}
     * @memberof MatchEvent
     */
    groundDuel?: GroundDuelDetails;
    /**
     * 
     * @type {number}
     * @memberof MatchEvent
     */
    id?: number;
    /**
     * 
     * @type {InfractionDetails}
     * @memberof MatchEvent
     */
    infraction?: InfractionDetails;
    /**
     * 
     * @type {EventLocation}
     * @memberof MatchEvent
     */
    location?: EventLocation;
    /**
     * 
     * @type {number}
     * @memberof MatchEvent
     */
    matchId?: number;
    /**
     * <table><thead><tr><th>Period</th><th>Description</th></tr></thead><tbody><tr><td>1H</td><td>First Half Time</td></tr><tr><td>2H</td><td>Second Half Time</td></tr><tr><td>E1</td><td>First Extra Time</td></tr><tr><td>E2</td><td>Second Extra Time</td></tr><tr><td>P</td><td>Pentalties Time</td></tr></tbody></table>
     * @type {string}
     * @memberof MatchEvent
     */
    matchPeriod?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchEvent
     */
    matchTimestamp?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchEvent
     */
    minute?: number;
    /**
     * 
     * @type {OpponentTeamDetails}
     * @memberof MatchEvent
     */
    opponentTeam?: OpponentTeamDetails;
    /**
     * 
     * @type {PassDetails}
     * @memberof MatchEvent
     */
    pass?: PassDetails;
    /**
     * 
     * @type {PlayerDetails}
     * @memberof MatchEvent
     */
    player?: PlayerDetails;
    /**
     * 
     * @type {PossessionDetails}
     * @memberof MatchEvent
     */
    possession?: PossessionDetails;
    /**
     * 
     * @type {number}
     * @memberof MatchEvent
     */
    relatedEventId?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchEvent
     */
    second?: number;
    /**
     * 
     * @type {ShotDetails}
     * @memberof MatchEvent
     */
    shot?: ShotDetails;
    /**
     * 
     * @type {TeamDetails1}
     * @memberof MatchEvent
     */
    team?: TeamDetails1;
    /**
     * 
     * @type {EventType}
     * @memberof MatchEvent
     */
    type?: EventType;
    /**
     * 
     * @type {string}
     * @memberof MatchEvent
     */
    videoTimestamp?: string;
}
/**
 * 
 * @export
 * @interface MatchEvents
 */
export interface MatchEvents {
    /**
     * 
     * @type {MatchEvent[]}
     * @memberof MatchEvents
     */
    events?: MatchEvent[];
    /**
     * 
     * @type {Meta}
     * @memberof MatchEvents
     */
    meta?: Meta;
}
/**
 * Team formation about a given match
 * @export
 * @interface MatchFormation
 */
export interface MatchFormation {
    /**
     * 
     * @type {MatchPeriod}
     * @memberof MatchFormation
     */
    matchPeriod?: MatchPeriod;
}
/**
 * Retrieves information about a given match's formations
 * @export
 * @interface MatchFormations
 */
export interface MatchFormations {
    /**
     * 
     * @type {MatchFormation}
     * @memberof MatchFormations
     */
    teamAId?: MatchFormation;
    /**
     * 
     * @type {MatchFormation}
     * @memberof MatchFormations
     */
    teamBId?: MatchFormation;
    /**
     * 
     * @type {TeamsDetails1}
     * @memberof MatchFormations
     */
    teams?: TeamsDetails1;
}
/**
 * Formations related to the period described in the key
 * @export
 * @interface MatchPeriod
 */
export interface MatchPeriod {
    /**
     * 
     * @type {FormationStartSecond}
     * @memberof MatchPeriod
     */
    startSec?: FormationStartSecond;
}
/**
 * Returns advanced statistics of all players in a specific match
 * @export
 * @interface MatchPlayersAdvancedStats
 */
export interface MatchPlayersAdvancedStats {
    /**
     * 
     * @type {Array<PlayerMatchAdvancedStats>}
     * @memberof MatchPlayersAdvancedStats
     */
    players?: Array<PlayerMatchAdvancedStats>;
}
/**
 * 
 * @export
 * @interface MatchReferees
 */
export interface MatchReferees {
    /**
     * Available with param `details=referees`
     * @type {Referee}
     * @memberof MatchReferees
     */
    referee?: Referee;
    /**
     * 
     * @type {number}
     * @memberof MatchReferees
     */
    refereeId?: number;
    /**
     * <table><thead><tr><th>Role</th><th>Description</th></tr></thead><tbody><tr><td>referee</td><td>Main referee</td></tr><tr><td>firstAssistant</td><td>First assistant (linesman)</td></tr><tr><td>secondAssistant</td><td>Second assistant (linesman)</td></tr><tr><td>fourthOfficial</td><td>Fourth official</td></tr><tr><td>firstAdditionalAssistant</td><td>First additional assistant</td></tr><tr><td>secondAdditionalAssistant</td><td>Second additional assistant</td></tr></tbody></table>
     * @type {string}
     * @memberof MatchReferees
     */
    role?: MatchReferees.RoleEnum;
}

/**
 * @export
 * @namespace MatchReferees
 */
export namespace MatchReferees {
    /**
     * @export
     * @enum {string}
     */
    export enum RoleEnum {
        Referee = <any>'referee',
        FirstAssistant = <any>'firstAssistant',
        SecondAssistant = <any>'secondAssistant',
        FourthOfficial = <any>'fourthOfficial',
        FirstAdditionalAssistant = <any>'firstAdditionalAssistant',
        SecondAdditionalAssistant = <any>'secondAdditionalAssistant'
    }
}
/**
 * Retrieves team data about a given match
 * @export
 * @interface MatchTeamData
 */
export interface MatchTeamData {
    /**
     * Available with param `details=coaches`
     * @type {Coach}
     * @memberof MatchTeamData
     */
    coach?: Coach;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    coachId?: number;
    /**
     * 
     * @type {TeamLineupBenchedSubstitutions}
     * @memberof MatchTeamData
     */
    formation?: TeamLineupBenchedSubstitutions;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    hasFormation?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    score?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    scoreET?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    scoreHT?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    scoreP?: number;
    /**
     * <table><thead><tr><th>Side</th><th>Description</th></tr></thead><tbody><tr><td>home</td><td>The team was the home team for the match</td></tr><tr><td>away</td><td>The team was the away team for the match</td></tr><tr><td>none</td><td>No side was determined for this team in the match</td></tr></tbody></table>
     * @type {string}
     * @memberof MatchTeamData
     */
    side?: MatchTeamData.SideEnum;
    /**
     * 
     * @type {Team}
     * @memberof MatchTeamData
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof MatchTeamData
     */
    teamId?: number;
}

/**
 * @export
 * @namespace MatchTeamData
 */
export namespace MatchTeamData {
    /**
     * @export
     * @enum {string}
     */
    export enum SideEnum {
        Home = <any>'home',
        Away = <any>'away',
        None = <any>'none'
    }
}
/**
 * 
 * @export
 * @interface MatchTeamsData
 */
export interface MatchTeamsData {
    /**
     * Use querystring param `useSides=true` to change teamId label in `home` or `away`
     * @type {MatchTeamData}
     * @memberof MatchTeamsData
     */
    teamAId?: MatchTeamData;
    /**
     * Use querystring param `useSides=true` to change teamId label in `home` or `away`
     * @type {MatchTeamData}
     * @memberof MatchTeamsData
     */
    teamBId?: MatchTeamData;
}
/**
 * 
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     * 
     * @type {TheAppliedFiltersSchema}
     * @memberof Meta
     */
    appliedFilters?: TheAppliedFiltersSchema;
    /**
     * 
     * @type {TheAvailableFiltersObject}
     * @memberof Meta
     */
    availableFilters?: TheAvailableFiltersObject;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    page_count?: number;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    page_current?: number;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    totalItems?: number;
}
/**
 * Information about a video offset.
 * @export
 * @interface Offset
 */
export interface Offset {
    /**
     * 
     * @type {number}
     * @memberof Offset
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof Offset
     */
    start?: number;
}
/**
 * First half offset
 * @export
 * @interface Offset1
 */
export interface Offset1 {
    /**
     * 
     * @type {number}
     * @memberof Offset1
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof Offset1
     */
    start?: number;
}
/**
 * Second half offset
 * @export
 * @interface Offset2
 */
export interface Offset2 {
    /**
     * 
     * @type {number}
     * @memberof Offset2
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof Offset2
     */
    start?: number;
}
/**
 * First extra-time offset
 * @export
 * @interface Offset3
 */
export interface Offset3 {
    /**
     * 
     * @type {number}
     * @memberof Offset3
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof Offset3
     */
    start?: number;
}
/**
 * Second extra-time offset
 * @export
 * @interface Offset4
 */
export interface Offset4 {
    /**
     * 
     * @type {number}
     * @memberof Offset4
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof Offset4
     */
    start?: number;
}
/**
 * Penalty period offset
 * @export
 * @interface Offset5
 */
export interface Offset5 {
    /**
     * 
     * @type {number}
     * @memberof Offset5
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof Offset5
     */
    start?: number;
}
/**
 * Information about a video offsets.
 * @export
 * @interface Offsets
 */
export interface Offsets {
    /**
     * 
     * @type {Offset}
     * @memberof Offsets
     */
    _1H?: Offset;
    /**
     * 
     * @type {Offset}
     * @memberof Offsets
     */
    _2H?: Offset;
    /**
     * 
     * @type {Offset}
     * @memberof Offsets
     */
    e1?: Offset;
    /**
     * 
     * @type {Offset}
     * @memberof Offsets
     */
    e2?: Offset;
    /**
     * 
     * @type {Offset}
     * @memberof Offsets
     */
    P?: Offset;
}
/**
 * 
 * @export
 * @interface OpponentDetails
 */
export interface OpponentDetails {
    /**
     * 
     * @type {number}
     * @memberof OpponentDetails
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof OpponentDetails
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OpponentDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OpponentDetails
     */
    position?: string;
}
/**
 * 
 * @export
 * @interface OpponentDetails1
 */
export interface OpponentDetails1 {
    /**
     * 
     * @type {number}
     * @memberof OpponentDetails1
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OpponentDetails1
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OpponentDetails1
     */
    position?: string;
}
/**
 * 
 * @export
 * @interface OpponentTeamDetails
 */
export interface OpponentTeamDetails {
    /**
     * Opponent formation used at the time of the event
     * @type {string}
     * @memberof OpponentTeamDetails
     */
    formation?: string;
    /**
     * 
     * @type {number}
     * @memberof OpponentTeamDetails
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OpponentTeamDetails
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface OriginTeamDetails
 */
export interface OriginTeamDetails {
    /**
     * 
     * @type {Team}
     * @memberof OriginTeamDetails
     */
    team?: Team;
}
/**
 * This field is present if team has a parent team
 * @export
 * @interface ParentTeam
 */
export interface ParentTeam {
    /**
     * 
     * @type {string}
     * @memberof ParentTeam
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ParentTeam
     */
    wyId?: number;
}
/**
 * Available when event is a pass (and all events included in the pass definition), throw_in, goal_kick, corner (not shot) or free_kick (not free_kick_shot)
 * @export
 * @interface PassDetails
 */
export interface PassDetails {
    /**
     * If true this is an accurate pass
     * @type {boolean}
     * @memberof PassDetails
     */
    accurate?: boolean;
    /**
     * For angle, 0° represents a perfect forward pass (straight line towards the goal). Passes to the right will have positive values (90° pass is a pass strictly to the right), to the left, negative (-90° pass is a pass strictly to the left). Straight back passes will have the angle of 180°. Angle is specified in degrees, taking into account standard field dimensions
     * @type {number}
     * @memberof PassDetails
     */
    angle?: number;
    /**
     * 
     * @type {PassEndLocation}
     * @memberof PassDetails
     */
    endLocation?: PassEndLocation;
    /**
     * Length is specified in meters, taking into account standard field dimensions
     * @type {number}
     * @memberof PassDetails
     */
    length?: number;
    /**
     * 
     * @type {PassRecipient}
     * @memberof PassDetails
     */
    recipient?: PassRecipient;
}
/**
 * 
 * @export
 * @interface PassEndLocation
 */
export interface PassEndLocation {
    /**
     * 
     * @type {number}
     * @memberof PassEndLocation
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof PassEndLocation
     */
    y?: number;
}
/**
 * 
 * @export
 * @interface PassRecipient
 */
export interface PassRecipient {
    /**
     * 
     * @type {number}
     * @memberof PassRecipient
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PassRecipient
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PassRecipient
     */
    position?: string;
}
/**
 * Retrieves information about a given player
 * @export
 * @interface Player
 */
export interface Player {
    /**
     * 
     * @type {Area}
     * @memberof Player
     */
    birthArea?: Area;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    birthDate?: string;
    /**
     * Unique ID of the national team this player is currently playing for (if exists)
     * @type {number}
     * @memberof Player
     */
    currentNationalTeamId?: number;
    /**
     * Available with querystring param `details=currentTeam`
     * @type {Team}
     * @memberof Player
     */
    currentTeam?: Team;
    /**
     * Unique ID of the club team this player is currently playing for
     * @type {number}
     * @memberof Player
     */
    currentTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    firstName?: string;
    /**
     * <table><thead><tr><th>Foot</th><th>Description</th></tr></thead><tbody><tr><td>right</td><td>Uses right foot as main foot</td></tr><tr><td>left</td><td>Uses left foot as main foot</td></tr><tr><td>both</td><td>Uses both left and right foot indifferently</td></tr></tbody></table>
     * @type {string}
     * @memberof Player
     */
    foot?: string;
    /**
     * <table><thead><tr><th>Gender</th></tr></thead><tbody><tr><td>male</td></tr><tr><td>female</td></tr></tbody></table>
     * @type {string}
     * @memberof Player
     */
    gender?: string;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Player
     */
    gsmId?: number;
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    height?: number;
    /**
     * Player picture URL
     * @type {string}
     * @memberof Player
     */
    imageDataURL?: string;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    middleName?: string;
    /**
     * 
     * @type {Area}
     * @memberof Player
     */
    passportArea?: Area;
    /**
     * 
     * @type {MainRole}
     * @memberof Player
     */
    role?: MainRole;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    shortName?: string;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>active</td><td>The player is currently active</td></tr><tr><td>retired</td><td>The player has retired</td></tr><tr><td>died</td><td>The player is dead</td></tr></tbody></table>
     * @type {string}
     * @memberof Player
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    wyId?: number;
}
/**
 * Returns advanced statistics of a given player in a specific competition season. Overall, the statistics provided are relative to the selected season, and not to a specific team
 * @export
 * @interface PlayerAdvancedStats
 */
export interface PlayerAdvancedStats {
    /**
     * 
     * @type {PlayerAdvancedStatsAverage}
     * @memberof PlayerAdvancedStats
     */
    average?: PlayerAdvancedStatsAverage;
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof PlayerAdvancedStats
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStats
     */
    competitionId?: number;
    /**
     * 
     * @type {PlayerAdvancedStatsPercent}
     * @memberof PlayerAdvancedStats
     */
    percent?: PlayerAdvancedStatsPercent;
    /**
     * Available with querystring param `details=player`
     * @type {Player}
     * @memberof PlayerAdvancedStats
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStats
     */
    playerId?: number;
    /**
     * 
     * @type {Array<PlayerAdvancedStatsPosition>}
     * @memberof PlayerAdvancedStats
     */
    positions?: Array<PlayerAdvancedStatsPosition>;
    /**
     * Available with querystring param `fetch=round`
     * @type {Round}
     * @memberof PlayerAdvancedStats
     */
    round?: Round;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStats
     */
    roundId?: number;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof PlayerAdvancedStats
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStats
     */
    seasonId?: number;
    /**
     * 
     * @type {PlayerAdvancedStatsTotal}
     * @memberof PlayerAdvancedStats
     */
    total?: PlayerAdvancedStatsTotal;
}
/**
 * 
 * @export
 * @interface PlayerAdvancedStatsAverage
 */
export interface PlayerAdvancedStatsAverage {
    /**
     * A run with the ball with a significant speed up
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    accelerations?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    aerialDuels?: number;
    /**
     * The last action of a player from the goalscoring team, prior to the Goal being scored by a teammate, or an Own goal
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    assists?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    attackingActions?: number;
    /**
     * An attempt to pass the ball back to a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    backPasses?: number;
    /**
     * Any Action that ends a Possession of the current team
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    ballLosses?: number;
    /**
     * Any Action that ends a Possession of the opposition team (the last action of this possession is a Loss) and starts a Possession for current team
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    ballRecoveries?: number;
    /**
     * An Action (generally a pass) when the player, while having other option, to pass or to hold the ball, is instead clearing it, either with a long pass forward without a precise target or for a throw in/corner kick, playing safe
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    clearances?: number;
    /**
     * A corner kick served as specified in law 17 IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    corners?: number;
    /**
     * Any Recovery that ends a Possession of the opposition team with length less than 5 seconds
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    counterpressingRecoveries?: number;
    /**
     * A ball played from the offensive flanks aimed towards a teammate in the area in front of the opponent’s goal
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    crosses?: number;
    /**
     * Ball’s recoveries in the opponent half that lead to a shot within 20s
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    dangerousOpponentHalfRecoveries?: number;
    /**
     * Ball’s losses in his own half that lead to a shot within 20s
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    dangerousOwnHalfLosses?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    defensiveActions?: number;
    /**
     * When a player attempts to dispossess an opposition player to stop an attack progressing
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    defensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    defensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    directFreeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    directFreeKicksOnTarget?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    directRedCards?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    dribbleDistanceFromOpponentGoal?: number;
    /**
     * An attempt to move past an opposing player whilst trying to maintain possession of the ball
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    dribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    dribblesAgainst?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    dribblesAgainstWon?: number;
    /**
     * A challenge between two players to gain control of the ball, progress with the ball or change its direction
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    duels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    duelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    fieldAerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    fieldAerialDuelsWon?: number;
    /**
     * An attempt to pass the ball forward to a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    forwardPasses?: number;
    /**
     * An offence committed by a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    fouls?: number;
    /**
     * An offence committed on a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    foulsSuffered?: number;
    /**
     * The execution of a free kick according to law 13 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    freeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    freeKicksOnTarget?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkAerialDuels?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkAerialDuelsWon?: number;
    /**
     * A goal scored by an opponent as specified in law 10.1 of the IFAB Laws of the Game, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkConcededGoals?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkExits?: number;
    /**
     * A successful attempt from the goalkeeper to prevent a shot from being scored, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkSaves?: number;
    /**
     * A shot on target faced by the goalkeeper, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkShotsAgainst?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    gkSuccessfulExits?: number;
    /**
     * A goal kick according to law 16 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    goalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    goalKicksLong?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    goalKicksShort?: number;
    /**
     * A goal scored as specified in law 10.1 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    goals?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    headShots?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    interceptions?: number;
    /**
     * A pass that immediately creates a clear goal scoring opportunity for a teammate who in turn fails to score
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    keyPasses?: number;
    /**
     * Passes in two 90° angles rotated by 45° facing sideways, longer than 12 meters
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    lateralPasses?: number;
    /**
     * An action of an attacking player receiving a ball from a defender or a midfielder with his back to the opposite goal
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    linkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    longPassLength?: number;
    /**
     * A ground pass longer than 45 meters or a high pass longer than 25 meters
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    longPasses?: number;
    /**
     * A duel for a loose ball, when no team has clear ball possession
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    looseBallDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    looseBallDuelsWon?: number;
    /**
     * Missed ball is a type of Touch when the player is trying to control the ball, but can’t reach it
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    missedBalls?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    newDefensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    newDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    newOffensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    newSuccessfulDribbles?: number;
    /**
     * A ground Duel for the player in possession of the ball
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    offensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    offensiveDuelsWon?: number;
    /**
     * An offside as described in the law 11 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    offsides?: number;
    /**
     * Ball’s recoveries in the opponent half
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    opponentHalfRecoveries?: number;
    /**
     * Ball’s losses in his own half
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    ownHalfLosses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    passLength?: number;
    /**
     * An attempt to pass the ball to a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    passes?: number;
    /**
     * Any pass that originates outside of the final third and the next ball touch occurs within the final third
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    passesToFinalThird?: number;
    /**
     * A shot from a penalty kick as specified in law 14 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    penalties?: number;
    /**
     * A forward pass that attempts to advance a team significantly closer to the opponent’s goal
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    progressivePasses?: number;
    /**
     * A continuous ball control by one player attempting to draw the team significantly closer to the opponent goal
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    progressiveRun?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    receivedPass?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    redCards?: number;
    /**
     * The last action of a player from the goalscoring team, prior to an Assist by a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    secondAssists?: number;
    /**
     * The last action of a player prior to a teammate having a Shot
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    shotAssists?: number;
    /**
     * The last action of a player prior to a teammate having a Shot on target
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    shotOnTargetAssists?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    shots?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    shotsBlocked?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    shotsOnTarget?: number;
    /**
     * An aggressive slide on the ground in the legs of the opposition player with a clear intention to dispossess the opponent or to clear the ball out
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    slidingTackles?: number;
    /**
     * A creative and penetrative pass that attempts to break the opposition's defensive lines to gain a significant advantage in attack
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    smartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulAttackingActions?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulBackPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulCrosses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulDefensiveAction?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulForwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulGoalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulKeyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulLateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulLinkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulLongPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulPassesToFinalThird?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulPenalties?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulProgressivePasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulSlidingTackles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulSmartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulThroughPasses?: number;
    /**
     * <i>Deprecated<i>, Same value as successfulLateralPasses
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    successfulVerticalPasses?: number;
    /**
     * The last action of a player from the goalscoring team, prior to a Second assist by a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    thirdAssists?: number;
    /**
     * A pass played into the space behind the defensive line for a teammate to contest
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    throughPasses?: number;
    /**
     * An action (a Pass or a Touch) that happens in the opponent penalty area. Duels are excluded from this definition
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    touchInBox?: number;
    /**
     * <i>Deprecated<i>, Same value as lateralPasses
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    verticalPasses?: number;
    /**
     * Expected assist (xA) value for a pass is a value of expected goals (xG) or the shot that this pass led to
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    xgAssist?: number;
    /**
     * A pre-shot xG value of a probability of the current shot (not necessarily on target) to be scored
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    xgSave?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    xgShot?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a yellow card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsAverage
     */
    yellowCards?: number;
}
/**
 * 
 * @export
 * @interface PlayerAdvancedStatsPercent
 */
export interface PlayerAdvancedStatsPercent {
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    aerialDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    defensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    directFreeKicksOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    dribblesAgainstWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    duelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    fieldAerialDuelsWon?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    gkAerialDuelsWon?: number;
    /**
     * A successful attempt from the goalkeeper to prevent a shot from being scored, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    gkSaves?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    gkSuccessfulExits?: number;
    /**
     * Shots converted into a goal
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    goalConversion?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    headShotsOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    newDefensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    newDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    newOffensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    newSuccessfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    offensiveDuelsWon?: number;
    /**
     * Penalties converted into a goal
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    penaltiesConversion?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    shotsOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulBackPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulCrosses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulForwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulGoalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulKeyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulLateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulLinkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulLongPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulPassesToFinalThird?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulProgressivePasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulShotAssists?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulSlidingTackles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulSmartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulThroughPasses?: number;
    /**
     * <i>Deprecated<i>, Same value as successfulLateralPasses
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    successfulVerticalPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    win?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPercent
     */
    yellowCardsPerFoul?: number;
}
/**
 * 
 * @export
 * @interface PlayerAdvancedStatsPosition
 */
export interface PlayerAdvancedStatsPosition {
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsPosition
     */
    percent?: number;
    /**
     * 
     * @type {PositionOfThePlayer}
     * @memberof PlayerAdvancedStatsPosition
     */
    position?: PositionOfThePlayer;
}
/**
 * 
 * @export
 * @interface PlayerAdvancedStatsTotal
 */
export interface PlayerAdvancedStatsTotal {
    /**
     * A run with the ball with a significant speed up
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    accelerations?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    aerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    aerialDuelsWon?: number;
    /**
     * The last action of a player from the goalscoring team, prior to the Goal being scored by a teammate, or an Own goal
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    assists?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    attackingActions?: number;
    /**
     * An attempt to pass the ball back to a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    backPasses?: number;
    /**
     * An Action (generally a pass) when the player, while having other option, to pass or to hold the ball, is instead clearing it, either with a long pass forward without a precise target or for a throw in/corner kick, playing safe
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    clearances?: number;
    /**
     * A corner kick served as specified in law 17 IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    corners?: number;
    /**
     * Any Recovery that ends a Possession of the opposition team with length less than 5 seconds
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    counterpressingRecoveries?: number;
    /**
     * A ball played from the offensive flanks aimed towards a teammate in the area in front of the opponent’s goal
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    crosses?: number;
    /**
     * Ball’s recoveries in the opponent half that lead to a shot within 20s
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    dangerousOpponentHalfRecoveries?: number;
    /**
     * Ball’s losses in his own half that lead to a shot within 20s
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    dangerousOwnHalfLosses?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    defensiveActions?: number;
    /**
     * When a player attempts to dispossess an opposition player to stop an attack progressing
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    defensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    defensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    directFreeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    directFreeKicksOnTarget?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    directRedCards?: number;
    /**
     * An attempt to move past an opposing player whilst trying to maintain possession of the ball
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    dribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    dribblesAgainst?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    dribblesAgainstWon?: number;
    /**
     * A challenge between two players to gain control of the ball, progress with the ball or change its direction
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    duels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    duelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    fieldAerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    fieldAerialDuelsWon?: number;
    /**
     * An attempt to pass the ball forward to a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    forwardPasses?: number;
    /**
     * An offence committed by a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    fouls?: number;
    /**
     * An offence committed on a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    foulsSuffered?: number;
    /**
     * The execution of a free kick according to law 13 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    freeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    freeKicksOnTarget?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkAerialDuels?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkAerialDuelsWon?: number;
    /**
     * Matches with no goals conceded, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkCleanSheets?: number;
    /**
     * A goal scored by an opponent as specified in law 10.1 of the IFAB Laws of the Game, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkConcededGoals?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkExits?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkSaves?: number;
    /**
     * A shot on target faced by the goalkeeper, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkShotsAgainst?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    gkSuccessfulExits?: number;
    /**
     * A goal kick according to law 16 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    goalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    goalKicksLong?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    goalKicksShort?: number;
    /**
     * A goal scored as specified in law 10.1 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    goals?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    headShots?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    interceptions?: number;
    /**
     * A pass that immediately creates a clear goal scoring opportunity for a teammate who in turn fails to score
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    keyPasses?: number;
    /**
     * Passes in two 90° angles rotated by 45° facing sideways, longer than 12 meters
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    lateralPasses?: number;
    /**
     * An action of an attacking player receiving a ball from a defender or a midfielder with his back to the opposite goal
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    linkupPlays?: number;
    /**
     * A ground pass longer than 45 meters or a high pass longer than 25 meters
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    longPasses?: number;
    /**
     * A duel for a loose ball, when no team has clear ball possession
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    looseBallDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    looseBallDuelsWon?: number;
    /**
     * Any Action that ends a Possession of the current team
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    losses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    matches?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    matchesComingOff?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    matchesInStart?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    matchesSubstituted?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    minutesOnField?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    minutesTagged?: number;
    /**
     * Missed ball is a type of Touch when the player is trying to control the ball, but can’t reach it
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    missedBalls?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    newDefensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    newDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    newOffensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    newSuccessfulDribbles?: number;
    /**
     * A ground Duel for the player in possession of the ball
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    offensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    offensiveDuelsWon?: number;
    /**
     * An offside as described in the law 11 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    offsides?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    opponentHalfRecoveries?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    ownHalfLosses?: number;
    /**
     * An attempt to pass the ball to a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    passes?: number;
    /**
     * Any pass that originates outside of the final third and the next ball touch occurs within the final third
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    passesToFinalThird?: number;
    /**
     * A shot from a penalty kick as specified in law 14 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    penalties?: number;
    /**
     * When a player moves to apply pressure on an opposing player who is in possession of the ball but doesn't make physical or ball contact
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    pressingDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    pressingDuelsWon?: number;
    /**
     * A forward pass that attempts to advance a team significantly closer to the opponent’s goal
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    progressivePasses?: number;
    /**
     * A continuous ball control by one player attempting to draw the team significantly closer to the opponent goal
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    progressiveRun?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    receivedPass?: number;
    /**
     * Any Action that ends a Possession of the opposition team (the last action of this possession is a Loss) and starts a Possession for current team
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    recoveries?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    redCards?: number;
    /**
     * The last action of a player from the goalscoring team, prior to an Assist by a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    secondAssists?: number;
    /**
     * The last action of a player prior to a teammate having a Shot
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    shotAssists?: number;
    /**
     * The last action of a player prior to a teammate having a Shot on target
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    shotOnTargetAssists?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    shots?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    shotsBlocked?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    shotsOnTarget?: number;
    /**
     * An aggressive slide on the ground in the legs of the opposition player with a clear intention to dispossess the opponent or to clear the ball out
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    slidingTackles?: number;
    /**
     * A creative and penetrative pass that attempts to break the opposition's defensive lines to gain a significant advantage in attack
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    smartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulAttackingActions?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulBackPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulCrosses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulDefensiveAction?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulForwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulGoalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulKeyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulLateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulLinkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulLongPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulPassesToFinalThird?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulPenalties?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulProgressivePasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulSlidingTackles?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulSmartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulThroughPasses?: number;
    /**
     * <i>Deprecated<i>, same value as successfulLateralPasses
     * @type {any}
     * @memberof PlayerAdvancedStatsTotal
     */
    successfulVerticalPasses?: any;
    /**
     * The last action of a player from the goalscoring team, prior to a Second assist by a teammate
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    thirdAssists?: number;
    /**
     * A pass played into the space behind the defensive line for a teammate to contest
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    throughPasses?: number;
    /**
     * An action (a Pass or a Touch) that happens in the opponent penalty area. Duels are excluded from this definition
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    touchInBox?: number;
    /**
     * <i>Deprecated<i>, same value as lateralPasses
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    verticalPasses?: number;
    /**
     * Expected assist (xA) value for a pass is a value of expected goals (xG) or the shot that this pass led to
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    xgAssist?: number;
    /**
     * A pre-shot xG value of a probability of the current shot (not necessarily on target) to be scored
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    xgSave?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    xgShot?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a yellow card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof PlayerAdvancedStatsTotal
     */
    yellowCards?: number;
}
/**
 * Info about the given player career
 * @export
 * @interface PlayerCareer
 */
export interface PlayerCareer {
    /**
     * 
     * @type {Array<TheItemsSchema>}
     * @memberof PlayerCareer
     */
    career?: Array<TheItemsSchema>;
    /**
     * Available with querystring param `fetch=player`
     * @type {Player}
     * @memberof PlayerCareer
     */
    player?: Player;
}
/**
 * Returns info about the given player contract
 * @export
 * @interface PlayerContractinfo
 */
export interface PlayerContractinfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof PlayerContractinfo
     */
    agencies?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PlayerContractinfo
     */
    contractExpiration?: string;
    /**
     * 
     * @type {Player}
     * @memberof PlayerContractinfo
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof PlayerContractinfo
     */
    playerId?: number;
}
/**
 * 
 * @export
 * @interface PlayerDetails
 */
export interface PlayerDetails {
    /**
     * 
     * @type {number}
     * @memberof PlayerDetails
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PlayerDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerDetails
     */
    position?: string;
}
/**
 * Returns info about the given player fixture
 * @export
 * @interface PlayerFixtures
 */
export interface PlayerFixtures {
    /**
     * 
     * @type {Array<TheMatchesObject>}
     * @memberof PlayerFixtures
     */
    matches?: Array<TheMatchesObject>;
}
/**
 * Returns info about the given player injuries
 * @export
 * @interface PlayerInjuries
 */
export interface PlayerInjuries {
    /**
     * 
     * @type {Array<TheInjuryObject>}
     * @memberof PlayerInjuries
     */
    injuries?: Array<TheInjuryObject>;
    /**
     * 
     * @type {Player}
     * @memberof PlayerInjuries
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof PlayerInjuries
     */
    wyId?: number;
}
/**
 * Returns advanced statistics of a given player in a specific match
 * @export
 * @interface PlayerMatchAdvancedStats
 */
export interface PlayerMatchAdvancedStats {
    /**
     * 
     * @type {PlayerAdvancedStatsAverage}
     * @memberof PlayerMatchAdvancedStats
     */
    average?: PlayerAdvancedStatsAverage;
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof PlayerMatchAdvancedStats
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof PlayerMatchAdvancedStats
     */
    competitionId?: number;
    /**
     * Available with querystring param `fetch=match`
     * @type {Match}
     * @memberof PlayerMatchAdvancedStats
     */
    match?: Match;
    /**
     * 
     * @type {number}
     * @memberof PlayerMatchAdvancedStats
     */
    matchId?: number;
    /**
     * 
     * @type {PlayerAdvancedStatsPercent}
     * @memberof PlayerMatchAdvancedStats
     */
    percent?: PlayerAdvancedStatsPercent;
    /**
     * Available with querystring param `details=player`
     * @type {Player}
     * @memberof PlayerMatchAdvancedStats
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof PlayerMatchAdvancedStats
     */
    playerId?: number;
    /**
     * 
     * @type {Array<PlayerAdvancedStatsPosition>}
     * @memberof PlayerMatchAdvancedStats
     */
    positions?: Array<PlayerAdvancedStatsPosition>;
    /**
     * Available with querystring param `fetch=round`
     * @type {Round}
     * @memberof PlayerMatchAdvancedStats
     */
    round?: Round;
    /**
     * 
     * @type {number}
     * @memberof PlayerMatchAdvancedStats
     */
    roundId?: number;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof PlayerMatchAdvancedStats
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof PlayerMatchAdvancedStats
     */
    seasonId?: number;
    /**
     * 
     * @type {PlayerAdvancedStatsTotal}
     * @memberof PlayerMatchAdvancedStats
     */
    total?: PlayerAdvancedStatsTotal;
}
/**
 * Returns info about the given player matches
 * @export
 * @interface PlayerMatches
 */
export interface PlayerMatches {
    /**
     * 
     * @type {Array<TheMatchesObject1>}
     * @memberof PlayerMatches
     */
    matches?: Array<TheMatchesObject1>;
    /**
     * Available with querystring param `fetch=player`
     * @type {Player}
     * @memberof PlayerMatches
     */
    player?: Player;
}
/**
 * Returns info about the given players transfers
 * @export
 * @interface PlayerTransfer
 */
export interface PlayerTransfer {
    /**
     * Available with querystring param `fetch=player`
     * @type {Player}
     * @memberof PlayerTransfer
     */
    player?: Player;
    /**
     * 
     * @type {Transfer}
     * @memberof PlayerTransfer
     */
    transfer?: Transfer;
    /**
     * 
     * @type {number}
     * @memberof PlayerTransfer
     */
    wyId?: number;
}
/**
 * Available with querystring param `fetch=players`
 * @export
 * @interface PlayersFetch
 */
export interface PlayersFetch {
    /**
     * 
     * @type {Array<Player>}
     * @memberof PlayersFetch
     */
    teamId?: Array<Player>;
}
/**
 * <table><thead><tr><th>Name</th><th>Code</th></tr></thead><tbody><tr><td>Goalkeeper</td><td>gk</td></tr><tr><td>Right Back</td><td>rb</td></tr><tr><td>Right Centre Back</td><td>rcb</td></tr><tr><td>Left Centre Back</td><td>lcb</td></tr><tr><td>Left Back</td><td>lb</td></tr><tr><td>Right Winger</td><td>rw</td></tr><tr><td>Right Centre Midfielder</td><td>rcmf</td></tr><tr><td>Left Centre Midfielder</td><td>lcmf</td></tr><tr><td>Left Winger</td><td>lw</td></tr><tr><td>Second Striker</td><td>ss</td></tr><tr><td>Striker</td><td>cf</td></tr><tr><td>Attacking Midfielder</td><td>amf</td></tr><tr><td>Right Centre Midfielder</td><td>rcmf3</td></tr><tr><td>Defensive Midfielder</td><td>dmf</td></tr><tr><td>Left Centre Midfielder</td><td>lcmf3</td></tr><tr><td>Right Defensive Midfielder</td><td>rdmf</td></tr><tr><td>Left Defensive Midfielder</td><td>ldmf</td></tr><tr><td>Right Attacking Midfielder</td><td>ramf</td></tr><tr><td>Left Attacking Midfielder</td><td>lamf</td></tr><tr><td>Right Wing Forward</td><td>rwf</td></tr><tr><td>Left Wing Forward</td><td>lwf</td></tr><tr><td>Right Centre Back (3 at the back)</td><td>rcb3</td></tr><tr><td>Centre Back</td><td>cb</td></tr><tr><td>Left Centre Back (3 at the back)</td><td>lcb3</td></tr><tr><td>Right Wingback</td><td>rwb</td></tr><tr><td>Left Wingback</td><td>lwb</td></tr><tr><td>Right Back (5 at the back)</td><td>rb5</td></tr><tr><td>Left Back (5 at the back)</td><td>lb5</td></tr></tbody></table>
 * @export
 * @interface PositionOfThePlayer
 */
export interface PositionOfThePlayer {
    /**
     * 
     * @type {string}
     * @memberof PositionOfThePlayer
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof PositionOfThePlayer
     */
    name?: string;
}
/**
 * Based on the type of the possession, some events would also additional payload with context for this possession
 * @export
 * @interface PossessionDetails
 */
export interface PossessionDetails {
    /**
     * 
     * @type {AttackDetails}
     * @memberof PossessionDetails
     */
    attack?: AttackDetails;
    /**
     * 
     * @type {string}
     * @memberof PossessionDetails
     */
    duration?: string;
    /**
     * 
     * @type {PossessionEndLocation}
     * @memberof PossessionDetails
     */
    endLocation?: PossessionEndLocation;
    /**
     * 
     * @type {number}
     * @memberof PossessionDetails
     */
    eventIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PossessionDetails
     */
    eventsNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PossessionDetails
     */
    id?: number;
    /**
     * 
     * @type {PossessionStartLocation}
     * @memberof PossessionDetails
     */
    startLocation?: PossessionStartLocation;
    /**
     * 
     * @type {TeamDetails}
     * @memberof PossessionDetails
     */
    team?: TeamDetails;
    /**
     * <table><thead><tr><th>Possible type values</th></tr></thead><tbody><tr><td>corner</td></tr><tr><td>counterattack</td></tr><tr><td>set_piece_attack</td></tr><tr><td>attack</td></tr><tr><td>free_kick</td></tr><tr><td>direct_free_kick</td></tr><tr><td>penalty</td></tr><tr><td>throw_in</td></tr><tr><td>free_kick_cross</td></tr><tr><td>transition_low</td></tr><tr><td>transition_medium</td></tr><tr><td>transition_high</td></tr></tbody></table>
     * @type {Array<string>}
     * @memberof PossessionDetails
     */
    types?: Array<string>;
}
/**
 * 
 * @export
 * @interface PossessionEndLocation
 */
export interface PossessionEndLocation {
    /**
     * 
     * @type {number}
     * @memberof PossessionEndLocation
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof PossessionEndLocation
     */
    y?: number;
}
/**
 * 
 * @export
 * @interface PossessionStartLocation
 */
export interface PossessionStartLocation {
    /**
     * 
     * @type {number}
     * @memberof PossessionStartLocation
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof PossessionStartLocation
     */
    y?: number;
}
/**
 * The quality url object
 * @export
 * @interface QualityUrl
 */
export interface QualityUrl {
    /**
     * 
     * @type {string | boolean}
     * @memberof QualityUrl
     */
    url?: string | boolean;
}
/**
 * Returns info about the given referee
 * @export
 * @interface Referee
 */
export interface Referee {
    /**
     * 
     * @type {Area}
     * @memberof Referee
     */
    birthArea?: Area;
    /**
     * 
     * @type {string}
     * @memberof Referee
     */
    birthDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Referee
     */
    firstName?: string;
    /**
     * male, female
     * @type {string}
     * @memberof Referee
     */
    gender?: string;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Referee
     */
    gsmId?: number;
    /**
     * Available with querystring param `imageDataURL=true`
     * @type {string}
     * @memberof Referee
     */
    imageDataURL?: string;
    /**
     * 
     * @type {string}
     * @memberof Referee
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Referee
     */
    middleName?: string;
    /**
     * 
     * @type {Area}
     * @memberof Referee
     */
    passportArea?: Area;
    /**
     * 
     * @type {string}
     * @memberof Referee
     */
    shortName?: string;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>active</td><td>The referee is currently active</td></tr><tr><td>retired</td><td>The referee has retired</td></tr><tr><td>died</td><td>The referee is dead</td></tr></tbody></table>
     * @type {string}
     * @memberof Referee
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof Referee
     */
    wyId?: number;
}
/**
 * Retrieves information about a given round
 * @export
 * @interface Round
 */
export interface Round {
    /**
     * Available with querystring param `details=competition`
     * @type {Competition}
     * @memberof Round
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof Round
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof Round
     */
    endDate?: string;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Round
     */
    gsmId?: number;
    /**
     * 
     * @type {string}
     * @memberof Round
     */
    name?: string;
    /**
     * Available with querystring param `details=season`
     * @type {Season}
     * @memberof Round
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof Round
     */
    seasonId?: number;
    /**
     * 
     * @type {string}
     * @memberof Round
     */
    startDate?: string;
    /**
     * <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>table</td><td>The round contains a table (group or league table)</td></tr><tr><td>cup</td><td>The round contains a cup structure (knock-out)</td></tr></tbody></table>
     * @type {string}
     * @memberof Round
     */
    type?: Round.TypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Round
     */
    wyId?: number;
}

/**
 * @export
 * @namespace Round
 */
export namespace Round {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Table = <any>'table',
        Cup = <any>'cup'
    }
}
/**
 * 
 * @export
 * @interface RoundData
 */
export interface RoundData {
    /**
     * 
     * @type {Array<GroupStandings>}
     * @memberof RoundData
     */
    groups?: Array<GroupStandings>;
    /**
     * Available with querystring param `details=round`
     * @type {Round}
     * @memberof RoundData
     */
    round?: Round;
    /**
     * 
     * @type {number}
     * @memberof RoundData
     */
    roundId?: number;
}
/**
 * Returns a list of objects, matching the provided search string
 * @export
 */
export type Search = Array<Competition | Team | Player | Referee>
/**
 * Retrieves information about a given season
 * @export
 * @interface Season
 */
export interface Season {
    /**
     * 
     * @type {boolean}
     * @memberof Season
     */
    active?: boolean;
    /**
     * Available with querystring param `details=competition`
     * @type {Competition}
     * @memberof Season
     */
    competition?: Competition;
    /**
     * 
     * @type {string}
     * @memberof Season
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof Season
     */
    endDate?: string;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Season
     */
    gsmId?: number;
    /**
     * 
     * @type {string}
     * @memberof Season
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Season
     */
    startDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Season
     */
    wyId?: number;
}
/**
 * Returns info about the given season assistmen
 * @export
 * @interface SeasonAssistmen
 */
export interface SeasonAssistmen {
    /**
     * 
     * @type {Competition}
     * @memberof SeasonAssistmen
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof SeasonAssistmen
     */
    competitionId?: number;
    /**
     * 
     * @type {Array<ThePlayerObject>}
     * @memberof SeasonAssistmen
     */
    players?: Array<ThePlayerObject>;
    /**
     * 
     * @type {Season}
     * @memberof SeasonAssistmen
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof SeasonAssistmen
     */
    seasonId?: number;
}
/**
 * Retrieves all the team's information for the given season.
 * @export
 * @interface SeasonCareer
 */
export interface SeasonCareer {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof SeasonCareer
     */
    competition?: Competition;
    /**
     * 
     * @type {Array<RoundData>}
     * @memberof SeasonCareer
     */
    rounds?: Array<RoundData>;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof SeasonCareer
     */
    season?: Season;
}
/**
 * Retrieves all the matches for the given season
 * @export
 * @interface SeasonFixtures
 */
export interface SeasonFixtures {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof SeasonFixtures
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof SeasonFixtures
     */
    competitionId?: number;
    /**
     * 
     * @type {Array<TheMatchObject>}
     * @memberof SeasonFixtures
     */
    matches?: Array<TheMatchObject>;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof SeasonFixtures
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof SeasonFixtures
     */
    seasonId?: number;
}
/**
 * Returns the list of matches played in the given season
 * @export
 * @interface SeasonMatches
 */
export interface SeasonMatches {
    /**
     * 
     * @type {Array<TheSeasonMatchObject>}
     * @memberof SeasonMatches
     */
    matches?: Array<TheSeasonMatchObject>;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof SeasonMatches
     */
    season?: Season;
}
/**
 * Returns the list of players in the given season
 * @export
 * @interface SeasonPlayers
 */
export interface SeasonPlayers {
    /**
     * 
     * @type {Meta}
     * @memberof SeasonPlayers
     */
    meta?: Meta;
    /**
     * 
     * @type {Array<Player>}
     * @memberof SeasonPlayers
     */
    players?: Array<Player>;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof SeasonPlayers
     */
    season?: Season;
}
/**
 * Returns info about the given season scorers
 * @export
 * @interface SeasonScorers
 */
export interface SeasonScorers {
    /**
     * 
     * @type {Competition}
     * @memberof SeasonScorers
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof SeasonScorers
     */
    competitionId?: number;
    /**
     * 
     * @type {Array<ThePlayerObject1>}
     * @memberof SeasonScorers
     */
    players?: Array<ThePlayerObject1>;
    /**
     * 
     * @type {Season}
     * @memberof SeasonScorers
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof SeasonScorers
     */
    seasonId?: number;
}
/**
 * Retrieves all the standing's information for the given season
 * @export
 * @interface SeasonStandings
 */
export interface SeasonStandings {
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof SeasonStandings
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof SeasonStandings
     */
    competitionId?: number;
    /**
     * 
     * @type {number}
     * @memberof SeasonStandings
     */
    roundId?: number;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof SeasonStandings
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof SeasonStandings
     */
    seasonId?: number;
    /**
     * 
     * @type {Array<TheTeamObject>}
     * @memberof SeasonStandings
     */
    teams?: Array<TheTeamObject>;
}
/**
 * Returns the list of teams in the given season
 * @export
 * @interface SeasonTeams
 */
export interface SeasonTeams {
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof SeasonTeams
     */
    season?: Season;
    /**
     * 
     * @type {Array<Team>}
     * @memberof SeasonTeams
     */
    teams?: Array<Team>;
}
/**
 * Retrieves all the transfer's information for the given season
 * @export
 * @interface SeasonTransfers
 */
export interface SeasonTransfers {
    /**
     * 
     * @type {Array<TheTransferObject>}
     * @memberof SeasonTransfers
     */
    transfer?: Array<TheTransferObject>;
    /**
     * 
     * @type {number}
     * @memberof SeasonTransfers
     */
    wyId?: number;
}
/**
 * Available when event is a shot or a post-match penalty
 * @export
 * @interface ShotDetails
 */
export interface ShotDetails {
    /**
     * <table><thead><tr><th>Possible bodyPart values</th></tr></thead><tbody><tr><td>left_foot</td></tr><tr><td>right_foot</td></tr><tr><td>head_or_other</td></tr></tbody></table>
     * @type {string}
     * @memberof ShotDetails
     */
    bodyPart?: string;
    /**
     * <table><thead><tr><th>Label</th><th>Description</th></tr></thead><tbody><tr><td>bc</td><td>Shot blocked</td></tr><tr><td>gb</td><td>Position: Goal low center</td></tr><tr><td>gbr</td><td>Position: Goal low right</td></tr><tr><td>gc</td><td>Position: Goal center</td></tr><tr><td>gl</td><td>Position: Goal center left</td></tr><tr><td>glb</td><td>Position: Goal low left</td></tr><tr><td>gr</td><td>Position: Goal center right</td></tr><tr><td>gt</td><td>Position: Goal high center</td></tr><tr><td>gtl</td><td>Position: Goal high left</td></tr><tr><td>gtr</td><td>Position: Goal high right</td></tr><tr><td>obr</td><td>Position: Out low right</td></tr><tr><td>ol</td><td>Position: Out center left</td></tr><tr><td>olb</td><td>Position: Out low left</td></tr><tr><td>or</td><td>Position: Out center right</td></tr><tr><td>ot</td><td>Position: Out high center</td></tr><tr><td>otl</td><td>Position: Out high left</td></tr><tr><td>otr</td><td>Position: Out high right</td></tr><tr><td>pbr</td><td>Position: Post low right</td></tr><tr><td>pl</td><td>Position: Post center left</td></tr><tr><td>plb</td><td>Position: Post low left</td></tr><tr><td>pr</td><td>Position: Post center right</td></tr><tr><td>pt</td><td>Position: Post high center</td></tr><tr><td>ptl</td><td>Position: Post high left</td></tr><tr><td>ptr</td><td>Position: Post high right</td></tr></tbody></table>
     * @type {string}
     * @memberof ShotDetails
     */
    goalZone?: string;
    /**
     * 
     * @type {GoalkeeperDetails}
     * @memberof ShotDetails
     */
    goalkeeper?: GoalkeeperDetails;
    /**
     * 
     * @type {number}
     * @memberof ShotDetails
     */
    goalkeeperActionId?: number;
    /**
     * If true this shot results in a goal
     * @type {boolean}
     * @memberof ShotDetails
     */
    isGoal?: boolean;
    /**
     * If true this shot is on target
     * @type {boolean}
     * @memberof ShotDetails
     */
    onTarget?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ShotDetails
     */
    postShotXg?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof ShotDetails
     */
    xg?: number;
}
/**
 * Available with querystring param `fetch=substitutions`
 * @export
 * @interface SubstitutionFetch
 */
export interface SubstitutionFetch {
    /**
     * 
     * @type {TheSubstitutionsRelatedToTheTeamWithIDTeamId}
     * @memberof SubstitutionFetch
     */
    teamId?: TheSubstitutionsRelatedToTheTeamWithIDTeamId;
}
/**
 * Data about the given team
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {Area}
     * @memberof Team
     */
    area?: Area;
    /**
     * <table><thead><tr><th>Category</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The team competes in competitions with no age limitations</td></tr><tr><td>youth</td><td>The team competes in youth competitions</td></tr></tbody></table>
     * @type {string}
     * @memberof Team
     */
    category?: Team.CategoryEnum;
    /**
     * This field is present if team has related teams
     * @type {Array<TeamChildren>}
     * @memberof Team
     */
    children?: Array<TeamChildren>;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    city?: string;
    /**
     * <table><thead><tr><th>Gender</th></tr></thead><tbody><tr><td>male</td></tr><tr><td>female</td></tr></tbody></table>
     * @type {string}
     * @memberof Team
     */
    gender?: Team.GenderEnum;
    /**
     * This field is no more used and it will be soon deprecated
     * @type {number}
     * @memberof Team
     */
    gsmId?: number;
    /**
     * Team picture URL
     * @type {string}
     * @memberof Team
     */
    imageDataURL?: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    officialName?: string;
    /**
     * 
     * @type {ParentTeam}
     * @memberof Team
     */
    parent?: ParentTeam;
    /**
     * <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>club</td><td>The team competes in club competitions</td></tr><tr><td>national</td><td>The team competes in national competitions</td></tr></tbody></table>
     * @type {string}
     * @memberof Team
     */
    type?: Team.TypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    wyId?: number;
}

/**
 * @export
 * @namespace Team
 */
export namespace Team {
    /**
     * @export
     * @enum {string}
     */
    export enum CategoryEnum {
        Default = <any>'default',
        Youth = <any>'youth'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum GenderEnum {
        Male = <any>'male',
        Female = <any>'female'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Club = <any>'club',
        National = <any>'national'
    }
}
/**
 * Returns advanced statistics of a given player in a specific competition season. Overall, the statistics provided are relative to the selected season, and not to a specific team
 * @export
 * @interface TeamAdvancedStats
 */
export interface TeamAdvancedStats {
    /**
     * 
     * @type {TeamAdvancedStatsAverage}
     * @memberof TeamAdvancedStats
     */
    average?: TeamAdvancedStatsAverage;
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof TeamAdvancedStats
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStats
     */
    competitionId?: number;
    /**
     * 
     * @type {TeamAdvancedStatsPercent}
     * @memberof TeamAdvancedStats
     */
    percent?: TeamAdvancedStatsPercent;
    /**
     * Available with querystring param `fetch=round`
     * @type {Round}
     * @memberof TeamAdvancedStats
     */
    round?: Round;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStats
     */
    roundId?: number;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof TeamAdvancedStats
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStats
     */
    seasonId?: number;
    /**
     * Available with querystring param `details=team`
     * @type {Team}
     * @memberof TeamAdvancedStats
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStats
     */
    teamId?: number;
    /**
     * 
     * @type {TeamAdvancedStatsTotal}
     * @memberof TeamAdvancedStats
     */
    total?: TeamAdvancedStatsTotal;
}
/**
 * 
 * @export
 * @interface TeamAdvancedStatsAverage
 */
export interface TeamAdvancedStatsAverage {
    /**
     * A run with the ball with a significant speed up
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    accelerations?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    aerialDuels?: number;
    /**
     * The last action of a player from the goalscoring team, prior to the Goal being scored by a teammate, or an Own goal
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    assists?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    attackingActions?: number;
    /**
     * An attempt to pass the ball back to a teammate
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    backPasses?: number;
    /**
     * Any Action that ends a Possession of the current team
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    ballLosses?: number;
    /**
     * Any Action that ends a Possession of the opposition team (the last action of this possession is a Loss) and starts a Possession for current team
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    ballRecoveries?: number;
    /**
     * A goal scored by an opponent as specified in law 10.1 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    concededGoals?: number;
    /**
     * A corner kick served as specified in law 17 IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    corners?: number;
    /**
     * A ball played from the offensive flanks aimed towards a teammate in the area in front of the opponent’s goal
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    crosses?: number;
    /**
     * Ball’s recoveries in the opponent half that lead to a shot within 20s
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    dangerousOpponentHalfRecoveries?: number;
    /**
     * Ball’s losses in his own half that lead to a shot within 20s
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    dangerousOwnHalfLosses?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    defensiveActions?: number;
    /**
     * When a player attempts to dispossess an opposition player to stop an attack progressing
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    defensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    defensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    directFreeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    directFreeKicksOnTarget?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    directRedCards?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    dribbleDistanceFromOpponentGoal?: number;
    /**
     * An attempt to move past an opposing player whilst trying to maintain possession of the ball
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    dribbles?: number;
    /**
     * A challenge between two players to gain control of the ball, progress with the ball or change its direction
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    duels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    duelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    fieldAerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    fieldAerialDuelsWon?: number;
    /**
     * An attempt to pass the ball forward to a teammate
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    forwardPasses?: number;
    /**
     * An offence committed by a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    fouls?: number;
    /**
     * The execution of a free kick according to law 13 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    freeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    freeKicksOnTarget?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkAerialDuels?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkAerialDuelsWon?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkExits?: number;
    /**
     * A goal kick according to law 16 of the IFAB Laws of the Game, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkGoalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkGoalKicksSuccess?: number;
    /**
     * A successful attempt from the goalkeeper to prevent a shot from being scored, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkSaves?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    gkSuccessfulExits?: number;
    /**
     * A goal scored as specified in law 10.1 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    goals?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    headShots?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    interceptions?: number;
    /**
     * A pass that immediately creates a clear goal scoring opportunity for a teammate who in turn fails to score
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    keyPasses?: number;
    /**
     * Passes in two 90° angles rotated by 45° facing sideways, longer than 12 meters
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    lateralPasses?: number;
    /**
     * An action of an attacking player receiving a ball from a defender or a midfielder with his back to the opposite goal
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    linkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    longGoalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    longPassLength?: number;
    /**
     * A ground pass longer than 45 meters or a high pass longer than 25 meters
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    longPasses?: number;
    /**
     * A duel for a loose ball, when no team has clear ball possession
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    looseBallDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    looseBallDuelsWon?: number;
    /**
     * Missed ball is a type of Touch when the player is trying to control the ball, but can’t reach it
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    missedBalls?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    newDefensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    newDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    newOffensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    newSuccessfulDribbles?: number;
    /**
     * A ground Duel for the player in possession of the ball
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    offensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    offensiveDuelsWon?: number;
    /**
     * An offside as described in the law 11 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    offsides?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    opponentHalfRecoveries?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    opponentOffsides?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    ownHalfLosses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    passLength?: number;
    /**
     * An attempt to pass the ball to a teammate
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    passes?: number;
    /**
     * Any pass that originates outside of the final third and the next ball touch occurs within the final third
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    passesToFinalThird?: number;
    /**
     * A shot from a penalty kick as specified in law 14 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    penalties?: number;
    /**
     * A metric quantifying how much a team is actually in possession of the ball. Available as pure time or as percentage of possession (compared to the opponent)
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    possessionPercent?: number;
    /**
     * A continuous ball control by one player attempting to draw the team significantly closer to the opponent goal
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    progressiveRun?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    receivedPass?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    redCards?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    shortGoalKicks?: number;
    /**
     * The last action of a player prior to a teammate having a Shot
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    shotAssists?: number;
    /**
     * The last action of a player prior to a teammate having a Shot on target
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    shotOnTargetAssists?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    shots?: number;
    /**
     * A shot on target faced by the goalkeeper
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    shotsAgainst?: number;
    /**
     * A creative and penetrative pass that attempts to break the opposition's defensive lines to gain a significant advantage in attack
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    smartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulAttackingActions?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulBackPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulCrosses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulDefensiveAction?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulForwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulKeyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulLateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulLinkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulLongPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulPassesToFinalThird?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulPenalties?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulSmartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulThroughPasses?: number;
    /**
     * <i>Deprecated<i>, Same value as successfulLateralPasses
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    successfulVerticalPasses?: number;
    /**
     * A pass played into the space behind the defensive line for a teammate to contest
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    throughPasses?: number;
    /**
     * An action (a Pass or a Touch) that happens in the opponent penalty area. Duels are excluded from this definition
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    touchInBox?: number;
    /**
     * <i>Deprecated<i>, same value as lateralPasses
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    verticalPasses?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    xgShot?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    xgShotAgainst?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a yellow card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsAverage
     */
    yellowCards?: number;
}
/**
 * 
 * @export
 * @interface TeamAdvancedStatsPercent
 */
export interface TeamAdvancedStatsPercent {
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    aerialDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    defensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    directFreeKicksOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    duelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    fieldAerialDuelsWon?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    gkAerialDuelsWon?: number;
    /**
     * A successful attempt from the goalkeeper to prevent a shot from being scored, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    gkSaves?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    gkSuccessfulExits?: number;
    /**
     * Shots converted into a goal
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    goalConversion?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    headShotsOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    newDefensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    newDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    newOffensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    newSuccessfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    offensiveDuelsWon?: number;
    /**
     * Penalties converted into a goal
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    penaltiesConversion?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    shotsOnTarget?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulBackPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulCrosses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulForwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulKeyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulLateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulLinkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulLongPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulPassesToFinalThird?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulShotAssists?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulSmartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulThroughPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulTouchInBox?: number;
    /**
     * <i>Deprecated<i>, same value as successfulLateralPasses
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    successfulVerticalPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    win?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsPercent
     */
    yellowCardsPerFoul?: number;
}
/**
 * 
 * @export
 * @interface TeamAdvancedStatsTotal
 */
export interface TeamAdvancedStatsTotal {
    /**
     * A run with the ball with a significant speed up
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    accelerations?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    aerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    aerialDuelsWon?: number;
    /**
     * The last action of a player from the goalscoring team, prior to the Goal being scored by a teammate, or an Own goal
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    assists?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    attackingActions?: number;
    /**
     * An attempt to pass the ball back to a teammate
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    backPasses?: number;
    /**
     * Matches with no goals conceded
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    cleanSheets?: number;
    /**
     * A goal scored by an opponent as specified in law 10.1 of the IFAB Laws of the Game.
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    concededGoals?: number;
    /**
     * A corner kick served as specified in law 17 IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    corners?: number;
    /**
     * A ball played from the offensive flanks aimed towards a teammate in the area in front of the opponent’s goal
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    crosses?: number;
    /**
     * Ball’s recoveries in the opponent half that lead to a shot within 20s
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    dangerousOpponentHalfRecoveries?: number;
    /**
     * Ball’s losses in his own half that lead to a shot within 20s
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    dangerousOwnHalfLosses?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    defensiveActions?: number;
    /**
     * When a player attempts to dispossess an opposition player to stop an attack progressing
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    defensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    defensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    directFreeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    directFreeKicksOnTarget?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    directRedCards?: number;
    /**
     * An attempt to move past an opposing player whilst trying to maintain possession of the ball
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    dribbles?: number;
    /**
     * A challenge between two players to gain control of the ball, progress with the ball or change its direction
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    duels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    duelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    fieldAerialDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    fieldAerialDuelsWon?: number;
    /**
     * An attempt to pass the ball forward to a teammate
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    forwardPasses?: number;
    /**
     * An offence committed by a player according to law 12 (1, 3) of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    fouls?: number;
    /**
     * The execution of a free kick according to law 13 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    freeKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    freeKicksOnTarget?: number;
    /**
     * When two or more players from opposing teams jump to compete for the ball, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkAerialDuels?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkAerialDuelsWon?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkExits?: number;
    /**
     * A goal kick according to law 16 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkGoalKicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkGoalKicksSuccess?: number;
    /**
     * A successful attempt from the goalkeeper to prevent a shot from being scored, <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkSaves?: number;
    /**
     * <i>Only Goalkeeper</i>
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    gkSuccessfulExits?: number;
    /**
     * A goal scored as specified in law 10.1 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    goals?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    headShots?: number;
    /**
     * An act of player actively intercepting the ball by anticipating its movement when the opponent is shooting, passing or crossing
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    interceptions?: number;
    /**
     * A pass that immediately creates a clear goal scoring opportunity for a teammate who in turn fails to score
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    keyPasses?: number;
    /**
     * Passes in two 90° angles rotated by 45° facing sideways, longer than 12 meters
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    lateralPasses?: number;
    /**
     * An action of an attacking player receiving a ball from a defender or a midfielder with his back to the opposite goal
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    linkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    longGoalKicks?: number;
    /**
     * A ground pass longer than 45 meters or a high pass longer than 25 meters
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    longPasses?: number;
    /**
     * A duel for a loose ball, when no team has clear ball possession
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    looseBallDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    looseBallDuelsWon?: number;
    /**
     * Any Action that ends a Possession of the current team
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    losses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    matches?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    matchesTagged?: number;
    /**
     * Missed ball is a type of Touch when the player is trying to control the ball, but can’t reach it
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    missedBalls?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    newDefensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    newDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    newOffensiveDuelsWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    newSuccessfulDribbles?: number;
    /**
     * A ground Duel for the player in possession of the ball
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    offensiveDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    offensiveDuelsWon?: number;
    /**
     * An offside as described in the law 11 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    offsides?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    opponentHalfRecoveries?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    opponentOffsides?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    ownHalfLosses?: number;
    /**
     * An attempt to pass the ball to a teammate
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    passes?: number;
    /**
     * Any pass that originates outside of the final third and the next ball touch occurs within the final third
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    passesToFinalThird?: number;
    /**
     * A shot from a penalty kick as specified in law 14 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    penalties?: number;
    /**
     * A metric to quantify high press intensity introduced by Colin Trainor in 2014
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    ppda?: number;
    /**
     * When a player moves to apply pressure on an opposing player who is in possession of the ball but doesn't make physical or ball contact
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    pressingDuels?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    pressingDuelsWon?: number;
    /**
     * A continuous ball control by one player attempting to draw the team significantly closer to the opponent goal
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    progressiveRun?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    receivedPass?: number;
    /**
     * Any Action that ends a Possession of the opposition team (the last action of this possession is a Loss) and starts a Possession for current team
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    recoveries?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a red card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    redCards?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    shortGoalKicks?: number;
    /**
     * The last action of a player prior to a teammate having a Shot
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    shotAssists?: number;
    /**
     * The last action of a player prior to a teammate having a Shot on target
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    shotOnTargetAssists?: number;
    /**
     * An attempt towards the opposition's goal with the intention of scoring
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    shots?: number;
    /**
     * A shot on target faced by the goalkeeper
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    shotsAgainst?: number;
    /**
     * A creative and penetrative pass that attempts to break the opposition's defensive lines to gain a significant advantage in attack
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    smartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulAttackingActions?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulBackPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulCrosses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulDefensiveAction?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulDribbles?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulForwardPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulKeyPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulLateralPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulLinkupPlays?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulLongPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulPassesToFinalThird?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulPenalties?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulSmartPasses?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulThroughPasses?: number;
    /**
     * <i>Deprecated<i>, same value as successfulLateralPasses
     * @type {any}
     * @memberof TeamAdvancedStatsTotal
     */
    successfulVerticalPasses?: any;
    /**
     * A pass played into the space behind the defensive line for a teammate to contest
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    throughPasses?: number;
    /**
     * An action (a Pass or a Touch) that happens in the opponent penalty area. Duels are excluded from this definition
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    touchInBox?: number;
    /**
     * <i>Deprecated<i>, same value as lateralPasses
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    verticalPasses?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    xgShot?: number;
    /**
     * Expected goals (xG) is a predictive ML model used to assess the likelihood of scoring for every shot made in the game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    xgShotAgainst?: number;
    /**
     * Disciplinary action by the referee that is indicated by showing a yellow card according to law 12.3 of the IFAB Laws of the Game
     * @type {number}
     * @memberof TeamAdvancedStatsTotal
     */
    yellowCards?: number;
}
/**
 * Retrieves all the team career information
 * @export
 * @interface TeamCareer
 */
export interface TeamCareer {
    /**
     * 
     * @type {Array<TeamCareerCareer>}
     * @memberof TeamCareer
     */
    career?: Array<TeamCareerCareer>;
    /**
     * Available with querystring param `fetch=team`
     * @type {Team}
     * @memberof TeamCareer
     */
    team?: Team;
}
/**
 * 
 * @export
 * @interface TeamCareerCareer
 */
export interface TeamCareerCareer {
    /**
     * Available with querystring param `details=competition`
     * @type {Competition}
     * @memberof TeamCareerCareer
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    competitionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    goalAgainst?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    goalPro?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    groupId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamCareerCareer
     */
    groupName?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    matchDraw?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    matchLost?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    matchTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    matchWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    points?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    rank?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    roundId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamCareerCareer
     */
    roundName?: string;
    /**
     * Available with querystring param `details=season`
     * @type {Season}
     * @memberof TeamCareerCareer
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    seasonId?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamCareerCareer
     */
    teamId?: number;
}
/**
 * 
 * @export
 * @interface TeamChildren
 */
export interface TeamChildren {
    /**
     * 
     * @type {string}
     * @memberof TeamChildren
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamChildren
     */
    wyId?: number;
}
/**
 * 
 * @export
 * @interface TeamCoach
 */
export interface TeamCoach {
    /**
     * 
     * @type {Coach}
     * @memberof TeamCoach
     */
    coach?: Coach;
}
/**
 * 
 * @export
 * @interface TeamDetails
 */
export interface TeamDetails {
    /**
     * 
     * @type {string}
     * @memberof TeamDetails
     */
    formation?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamDetails
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamDetails
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface TeamDetails1
 */
export interface TeamDetails1 {
    /**
     * Formation used at the time of the event
     * @type {string}
     * @memberof TeamDetails1
     */
    formation?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamDetails1
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamDetails1
     */
    name?: string;
}
/**
 * Retrieves all the fixtures matches for the given team
 * @export
 * @interface TeamFixtures
 */
export interface TeamFixtures {
    /**
     * 
     * @type {Array<TheMatchesObject2>}
     * @memberof TeamFixtures
     */
    matches?: Array<TheMatchesObject2>;
}
/**
 * Available if field `hasFormation=1`
 * @export
 * @interface TeamLineupBenchedSubstitutions
 */
export interface TeamLineupBenchedSubstitutions {
    /**
     * 
     * @type {Array<TeamLineupBenchedSubstitutionsBench>}
     * @memberof TeamLineupBenchedSubstitutions
     */
    bench?: Array<TeamLineupBenchedSubstitutionsBench>;
    /**
     * 
     * @type {Array<TeamLineupBenchedSubstitutionsLineup>}
     * @memberof TeamLineupBenchedSubstitutions
     */
    lineup?: Array<TeamLineupBenchedSubstitutionsLineup>;
    /**
     * 
     * @type {Array<TeamLineupBenchedSubstitutionsSubstitutions>}
     * @memberof TeamLineupBenchedSubstitutions
     */
    substitutions?: Array<TeamLineupBenchedSubstitutionsSubstitutions>;
}
/**
 * 
 * @export
 * @interface TeamLineupBenchedSubstitutionsBench
 */
export interface TeamLineupBenchedSubstitutionsBench {
    /**
     * Not available in Updated Objects endpoint
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    assists?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    goals?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    ownGoals?: string;
    /**
     * Available with param `details=players`
     * @type {Player}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    playerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    redCards?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    shirtNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsBench
     */
    yellowCards?: string;
}
/**
 * 
 * @export
 * @interface TeamLineupBenchedSubstitutionsLineup
 */
export interface TeamLineupBenchedSubstitutionsLineup {
    /**
     * Not available in Updated Objects endpoint
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    assists?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    goals?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    ownGoals?: string;
    /**
     * Available with param `details=players`
     * @type {Player}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    playerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    redCards?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    shirtNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsLineup
     */
    yellowCards?: string;
}
/**
 * 
 * @export
 * @interface TeamLineupBenchedSubstitutionsSubstitutions
 */
export interface TeamLineupBenchedSubstitutionsSubstitutions {
    /**
     * Not available in Updated Objects endpoint
     * @type {string}
     * @memberof TeamLineupBenchedSubstitutionsSubstitutions
     */
    assists?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamLineupBenchedSubstitutionsSubstitutions
     */
    minute?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamLineupBenchedSubstitutionsSubstitutions
     */
    playerIn?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamLineupBenchedSubstitutionsSubstitutions
     */
    playerOut?: number;
}
/**
 * Returns advanced statistics of a given player in a specific competition season. Overall, the statistics provided are relative to the selected season, and not to a specific team
 * @export
 * @interface TeamMatchAdvancedStats
 */
export interface TeamMatchAdvancedStats {
    /**
     * 
     * @type {TeamAdvancedStatsAverage}
     * @memberof TeamMatchAdvancedStats
     */
    average?: TeamAdvancedStatsAverage;
    /**
     * Available with querystring param `fetch=competition`
     * @type {Competition}
     * @memberof TeamMatchAdvancedStats
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchAdvancedStats
     */
    competitionId?: number;
    /**
     * Available with querystring param `fetch=match`
     * @type {Match}
     * @memberof TeamMatchAdvancedStats
     */
    match?: Match;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchAdvancedStats
     */
    matchId?: number;
    /**
     * 
     * @type {TeamAdvancedStatsPercent}
     * @memberof TeamMatchAdvancedStats
     */
    percent?: TeamAdvancedStatsPercent;
    /**
     * Available with querystring param `fetch=round`
     * @type {Round}
     * @memberof TeamMatchAdvancedStats
     */
    round?: Round;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchAdvancedStats
     */
    roundId?: number;
    /**
     * Available with querystring param `fetch=season`
     * @type {Season}
     * @memberof TeamMatchAdvancedStats
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchAdvancedStats
     */
    seasonId?: number;
    /**
     * Available with querystring param `details=team`
     * @type {Team}
     * @memberof TeamMatchAdvancedStats
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchAdvancedStats
     */
    teamId?: number;
    /**
     * 
     * @type {TeamAdvancedStatsTotal}
     * @memberof TeamMatchAdvancedStats
     */
    total?: TeamAdvancedStatsTotal;
}
/**
 * Returns the list of matches played by the given team
 * @export
 * @interface TeamMatches
 */
export interface TeamMatches {
    /**
     * 
     * @type {Array<TeamMatchesMatches>}
     * @memberof TeamMatches
     */
    matches?: Array<TeamMatchesMatches>;
    /**
     * Available with querystring param `fetch=team`
     * @type {Team}
     * @memberof TeamMatches
     */
    team?: Team;
}
/**
 * 
 * @export
 * @interface TeamMatchesMatches
 */
export interface TeamMatchesMatches {
    /**
     * 
     * @type {number}
     * @memberof TeamMatchesMatches
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamMatchesMatches
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamMatchesMatches
     */
    dateutc?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchesMatches
     */
    gameweek?: number;
    /**
     * homeTeam – awayTeam, homeScore-awayScore
     * @type {string}
     * @memberof TeamMatchesMatches
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchesMatches
     */
    matchId?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchesMatches
     */
    roundId?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamMatchesMatches
     */
    seasonId?: number;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>Fixture</td><td>The match has yet to come</td></tr><tr><td>Played</td><td>The match is over</td></tr></tbody></table>
     * @type {string}
     * @memberof TeamMatchesMatches
     */
    status?: TeamMatchesMatches.StatusEnum;
}

/**
 * @export
 * @namespace TeamMatchesMatches
 */
export namespace TeamMatchesMatches {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Fixture = <any>'Fixture',
        Played = <any>'Played'
    }
}
/**
 * Returns the list of players currently playing for the given team
 * @export
 * @interface TeamSquad
 */
export interface TeamSquad {
    /**
     * 
     * @type {Array<Coach>}
     * @memberof TeamSquad
     */
    coach?: Array<Coach>;
    /**
     * 
     * @type {Array<Player>}
     * @memberof TeamSquad
     */
    squad?: Array<Player>;
    /**
     * 
     * @type {Array<Coach>}
     * @memberof TeamSquad
     */
    staff?: Array<Coach>;
    /**
     * Available with querystring param `fetch=team`
     * @type {Team}
     * @memberof TeamSquad
     */
    team?: Team;
}
/**
 * 
 * @export
 * @interface TeamTransfers
 */
export interface TeamTransfers {
    /**
     * 
     * @type {Array<TheTransferObject>}
     * @memberof TeamTransfers
     */
    transfer?: Array<TheTransferObject>;
}
/**
 * Available with querystring param `details=teams`
 * @export
 * @interface TeamsDetails
 */
export interface TeamsDetails {
    /**
     * 
     * @type {OriginTeamDetails}
     * @memberof TeamsDetails
     */
    fromTeam?: OriginTeamDetails;
    /**
     * 
     * @type {DestinationTeamDetails}
     * @memberof TeamsDetails
     */
    toTeam?: DestinationTeamDetails;
}
/**
 * Available with querystring param `fetch=teams`
 * @export
 * @interface TeamsDetails1
 */
export interface TeamsDetails1 {
    /**
     * 
     * @type {Team}
     * @memberof TeamsDetails1
     */
    teamAId?: Team;
    /**
     * 
     * @type {Team}
     * @memberof TeamsDetails1
     */
    teamBId?: Team;
}
/**
 * Available with querystring param `fetch=teams`
 * @export
 * @interface TeamsFetch
 */
export interface TeamsFetch {
    /**
     * 
     * @type {Team}
     * @memberof TeamsFetch
     */
    teamId?: Team;
}
/**
 * 
 * @export
 * @interface TeamsStandingForTheGroup
 */
export interface TeamsStandingForTheGroup {
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    competitionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    gameDraw?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    gameLost?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    gameTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    gameWon?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    goalAgainst?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    goalPro?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    groupId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamsStandingForTheGroup
     */
    groupName?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    points?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    rank?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    roundId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamsStandingForTheGroup
     */
    roundName?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    seasonId?: number;
    /**
     * Available with querystring param `details=team`
     * @type {Team}
     * @memberof TeamsStandingForTheGroup
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TeamsStandingForTheGroup
     */
    teamId?: number;
}
/**
 * 
 * @export
 * @interface TheAppliedFiltersSchema
 */
export interface TheAppliedFiltersSchema {
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAppliedFiltersSchema
     */
    advsearch?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAppliedFiltersSchema
     */
    fetch?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAppliedFiltersSchema
     */
    filter?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof TheAppliedFiltersSchema
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof TheAppliedFiltersSchema
     */
    page?: number;
    /**
     * 
     * @type {string}
     * @memberof TheAppliedFiltersSchema
     */
    search?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAppliedFiltersSchema
     */
    sort?: Array<string>;
}
/**
 * 
 * @export
 * @interface TheAvailableFiltersObject
 */
export interface TheAvailableFiltersObject {
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAvailableFiltersObject
     */
    advsearches?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAvailableFiltersObject
     */
    fetches?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAvailableFiltersObject
     */
    filters?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAvailableFiltersObject
     */
    searches?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TheAvailableFiltersObject
     */
    sorts?: Array<string>;
}
/**
 * 
 * @export
 * @interface TheEntranceOfAPlayerAsASubstitute
 */
export interface TheEntranceOfAPlayerAsASubstitute {
    /**
     * 
     * @type {number}
     * @memberof TheEntranceOfAPlayerAsASubstitute
     */
    playerId?: number;
}
/**
 * 
 * @export
 * @interface TheExitOfAPlayerFromTheFieldRedCardsIncluded
 */
export interface TheExitOfAPlayerFromTheFieldRedCardsIncluded {
    /**
     * 
     * @type {number}
     * @memberof TheExitOfAPlayerFromTheFieldRedCardsIncluded
     */
    playerId?: number;
}
/**
 * 
 * @export
 * @interface TheFullhdObject
 */
export interface TheFullhdObject {
    /**
     * 
     * @type {boolean}
     * @memberof TheFullhdObject
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface TheHdObject
 */
export interface TheHdObject {
    /**
     * 
     * @type {boolean}
     * @memberof TheHdObject
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface TheInjuryObject
 */
export interface TheInjuryObject {
    /**
     * 
     * @type {string}
     * @memberof TheInjuryObject
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TheInjuryObject
     */
    fromDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TheInjuryObject
     */
    gamesMissed?: number;
    /**
     * 
     * @type {number}
     * @memberof TheInjuryObject
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TheInjuryObject
     */
    injuryLocalization?: string;
    /**
     * 
     * @type {string}
     * @memberof TheInjuryObject
     */
    injurySide?: string;
    /**
     * 
     * @type {string}
     * @memberof TheInjuryObject
     */
    injuryType?: string;
    /**
     * 
     * @type {number}
     * @memberof TheInjuryObject
     */
    isDisease?: number;
    /**
     * 
     * @type {number}
     * @memberof TheInjuryObject
     */
    playerId?: number;
}
/**
 * 
 * @export
 * @interface TheItemsSchema
 */
export interface TheItemsSchema {
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    appearances?: number;
    /**
     * Available with querystring param `details=competition`
     * @type {Competition}
     * @memberof TheItemsSchema
     */
    competition?: Competition;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    competitionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    goal?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    minutesPlayed?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    penalties?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    playerId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    redCards?: number;
    /**
     * Available with querystring param `details=season`
     * @type {Season}
     * @memberof TheItemsSchema
     */
    season?: Season;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    seasonId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    shirtNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    substituteIn?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    substituteOnBench?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    substituteOut?: number;
    /**
     * Available with querystring param `details=team`
     * @type {Team}
     * @memberof TheItemsSchema
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    teamId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheItemsSchema
     */
    yellowCard?: number;
}
/**
 * 
 * @export
 * @interface TheLqObject
 */
export interface TheLqObject {
    /**
     * 
     * @type {boolean}
     * @memberof TheLqObject
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface TheMatchGoalObject
 */
export interface TheMatchGoalObject {
    /**
     * 
     * @type {number}
     * @memberof TheMatchGoalObject
     */
    minute?: number;
    /**
     * <table><thead><tr><th>Period</th></tr></thead><tbody><tr><td>FirstHalf</td></tr><tr><td>SecondHalf</td></tr><tr><td>ExtraFirstHalf</td></tr><tr><td>ExtraSecondHalf</td></tr><tr><td>Shootout</td></tr></tbody></table>
     * @type {string}
     * @memberof TheMatchGoalObject
     */
    period?: TheMatchGoalObject.PeriodEnum;
    /**
     * Available with querystring param `details=players`
     * @type {Player}
     * @memberof TheMatchGoalObject
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof TheMatchGoalObject
     */
    playerId?: number;
    /**
     * Available with querystring param `details=teams`
     * @type {Team}
     * @memberof TheMatchGoalObject
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TheMatchGoalObject
     */
    teamId?: number;
    /**
     * <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>goal</td><td>Generic goal</td></tr><tr><td>own</td><td>Own goal</td></tr><tr><td>penalty</td><td>Penalty goal</td></tr></tbody></table>
     * @type {string}
     * @memberof TheMatchGoalObject
     */
    type?: TheMatchGoalObject.TypeEnum;
}

/**
 * @export
 * @namespace TheMatchGoalObject
 */
export namespace TheMatchGoalObject {
    /**
     * @export
     * @enum {string}
     */
    export enum PeriodEnum {
        FirstHalf = <any>'FirstHalf',
        SecondHalf = <any>'SecondHalf',
        ExtraFirstHalf = <any>'ExtraFirstHalf',
        ExtraSecondHalf = <any>'ExtraSecondHalf',
        Shootout = <any>'Shootout'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Goal = <any>'goal',
        Own = <any>'own',
        Penalty = <any>'penalty'
    }
}
/**
 * 
 * @export
 * @interface TheMatchObject
 */
export interface TheMatchObject {
    /**
     * 
     * @type {Array<TheMatchGoalObject>}
     * @memberof TheMatchObject
     */
    goals?: Array<TheMatchGoalObject>;
    /**
     * 
     * @type {Match}
     * @memberof TheMatchObject
     */
    match?: Match;
    /**
     * 
     * @type {number}
     * @memberof TheMatchObject
     */
    matchId?: number;
}
/**
 * 
 * @export
 * @interface TheMatchesObject
 */
export interface TheMatchesObject {
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject
     */
    dateutc?: string;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject
     */
    gameweek?: number;
    /**
     * homeTeam – awayTeam, homeScore-awayScore
     * @type {string}
     * @memberof TheMatchesObject
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject
     */
    matchId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject
     */
    roundId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject
     */
    seasonId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject
     */
    status?: TheMatchesObject.StatusEnum;
}

/**
 * @export
 * @namespace TheMatchesObject
 */
export namespace TheMatchesObject {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Fixture = <any>'Fixture'
    }
}
/**
 * 
 * @export
 * @interface TheMatchesObject1
 */
export interface TheMatchesObject1 {
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject1
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject1
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject1
     */
    dateutc?: string;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject1
     */
    gameweek?: number;
    /**
     * homeTeam – awayTeam, homeScore-awayScore
     * @type {string}
     * @memberof TheMatchesObject1
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject1
     */
    matchId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject1
     */
    roundId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject1
     */
    seasonId?: number;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>Fixture</td><td>The match has yet come</td></tr><tr><td>Played</td><td>The match is over</td></tr></tbody></table>
     * @type {string}
     * @memberof TheMatchesObject1
     */
    status?: TheMatchesObject1.StatusEnum;
}

/**
 * @export
 * @namespace TheMatchesObject1
 */
export namespace TheMatchesObject1 {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Fixture = <any>'Fixture',
        Played = <any>'Played'
    }
}
/**
 * 
 * @export
 * @interface TheMatchesObject2
 */
export interface TheMatchesObject2 {
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject2
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject2
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject2
     */
    dateutc?: string;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject2
     */
    gameweek?: number;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject2
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject2
     */
    matchId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject2
     */
    roundId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheMatchesObject2
     */
    seasonId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheMatchesObject2
     */
    status?: TheMatchesObject2.StatusEnum;
}

/**
 * @export
 * @namespace TheMatchesObject2
 */
export namespace TheMatchesObject2 {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Fixture = <any>'Fixture'
    }
}
/**
 * 
 * @export
 * @interface ThePlayerObject
 */
export interface ThePlayerObject {
    /**
     * 
     * @type {number}
     * @memberof ThePlayerObject
     */
    assists?: number;
    /**
     * 
     * @type {Player}
     * @memberof ThePlayerObject
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof ThePlayerObject
     */
    playerId?: number;
    /**
     * 
     * @type {Team}
     * @memberof ThePlayerObject
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof ThePlayerObject
     */
    teamId?: number;
}
/**
 * 
 * @export
 * @interface ThePlayerObject1
 */
export interface ThePlayerObject1 {
    /**
     * 
     * @type {number}
     * @memberof ThePlayerObject1
     */
    goals?: number;
    /**
     * 
     * @type {Player}
     * @memberof ThePlayerObject1
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof ThePlayerObject1
     */
    playerId?: number;
    /**
     * 
     * @type {Team}
     * @memberof ThePlayerObject1
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof ThePlayerObject1
     */
    teamId?: number;
}
/**
 * 
 * @export
 * @interface TheRefereeObject
 */
export interface TheRefereeObject {
    /**
     * 
     * @type {number}
     * @memberof TheRefereeObject
     */
    refereeId?: number;
    /**
     * <table><thead><tr><th>Role</th></tr></thead><tbody><tr><td>referee</td></tr><tr><td>firstAssistant</td></tr><tr><td>secondAssistant</td></tr><tr><td>fourthOfficial</td></tr></tbody></table>
     * @type {string}
     * @memberof TheRefereeObject
     */
    role?: string;
}
/**
 * 
 * @export
 * @interface TheResourceObject
 */
export interface TheResourceObject {
    /**
     * 
     * @type {Area | Coach | Competition | Match | MatchEvents | PlayerCareer | PlayerInjuries | Player | Referee | Round | Season | TeamCareer | Team | PlayerTransfer}
     * @memberof TheResourceObject
     */
    resourceId?: Area | Coach | Competition | Match | MatchEvents | PlayerCareer | PlayerInjuries | Player | Referee | Round | Season | TeamCareer | Team | PlayerTransfer;
}
/**
 * 
 * @export
 * @interface TheSdObject
 */
export interface TheSdObject {
    /**
     * 
     * @type {boolean}
     * @memberof TheSdObject
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface TheSeasonMatchObject
 */
export interface TheSeasonMatchObject {
    /**
     * 
     * @type {number}
     * @memberof TheSeasonMatchObject
     */
    competitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheSeasonMatchObject
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TheSeasonMatchObject
     */
    dateutc?: string;
    /**
     * 
     * @type {number}
     * @memberof TheSeasonMatchObject
     */
    gameweek?: number;
    /**
     * homeTeam – awayTeam, homeScore-awayScore
     * @type {string}
     * @memberof TheSeasonMatchObject
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof TheSeasonMatchObject
     */
    matchId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheSeasonMatchObject
     */
    roundId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheSeasonMatchObject
     */
    seasonId?: number;
    /**
     * <table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>Fixture</td><td>The match has yet to come</td></tr><tr><td>Played</td><td>The match is over</td></tr></tbody></table>
     * @type {string}
     * @memberof TheSeasonMatchObject
     */
    status?: TheSeasonMatchObject.StatusEnum;
}

/**
 * @export
 * @namespace TheSeasonMatchObject
 */
export namespace TheSeasonMatchObject {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Fixture = <any>'Fixture',
        Played = <any>'Played'
    }
}
/**
 * 
 * @export
 * @interface TheSubstitutionThatHappenedAtStartSecSecondsElapsedFromTheStart
 */
export interface TheSubstitutionThatHappenedAtStartSecSecondsElapsedFromTheStart {
    /**
     * 
     * @type {Array<TheEntranceOfAPlayerAsASubstitute>}
     * @memberof TheSubstitutionThatHappenedAtStartSecSecondsElapsedFromTheStart
     */
    _in?: Array<TheEntranceOfAPlayerAsASubstitute>;
    /**
     * 
     * @type {Array<TheExitOfAPlayerFromTheFieldRedCardsIncluded>}
     * @memberof TheSubstitutionThatHappenedAtStartSecSecondsElapsedFromTheStart
     */
    out?: Array<TheExitOfAPlayerFromTheFieldRedCardsIncluded>;
}
/**
 * 
 * @export
 * @interface TheSubstitutionsRelatedToMatchPeriodMatchPeriod
 */
export interface TheSubstitutionsRelatedToMatchPeriodMatchPeriod {
    /**
     * 
     * @type {TheSubstitutionThatHappenedAtStartSecSecondsElapsedFromTheStart}
     * @memberof TheSubstitutionsRelatedToMatchPeriodMatchPeriod
     */
    startSec?: TheSubstitutionThatHappenedAtStartSecSecondsElapsedFromTheStart;
}
/**
 * 
 * @export
 * @interface TheSubstitutionsRelatedToTheTeamWithIDTeamId
 */
export interface TheSubstitutionsRelatedToTheTeamWithIDTeamId {
    /**
     * 
     * @type {TheSubstitutionsRelatedToMatchPeriodMatchPeriod}
     * @memberof TheSubstitutionsRelatedToTheTeamWithIDTeamId
     */
    matchPeriod?: TheSubstitutionsRelatedToMatchPeriodMatchPeriod;
}
/**
 * 
 * @export
 * @interface TheTeamObject
 */
export interface TheTeamObject {
    /**
     * 
     * @type {string}
     * @memberof TheTeamObject
     */
    groupName?: string;
    /**
     * Available with querystring param `details=teams`
     * @type {Team}
     * @memberof TheTeamObject
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    teamId?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalDraws?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalGoalsAgainst?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalGoalsFor?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalLosses?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalPlayed?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalPoints?: number;
    /**
     * 
     * @type {number}
     * @memberof TheTeamObject
     */
    totalWins?: number;
}
/**
 * 
 * @export
 * @interface TheTransferObject
 */
export interface TheTransferObject {
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject
     */
    active?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject
     */
    announceDate?: string;
    /**
     * <table><thead><tr><th>Currency</th></tr></thead><tbody><tr><td>USD</td></tr><tr><td>EUR</td></tr><tr><td>GBP</td></tr></tbody></table>
     * @type {string}
     * @memberof TheTransferObject
     */
    currency?: TheTransferObject.CurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject
     */
    endDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject
     */
    fromTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject
     */
    fromTeamName?: string;
    /**
     * Available with querystring param `details=player`
     * @type {Player}
     * @memberof TheTransferObject
     */
    player?: Player;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject
     */
    playerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject
     */
    startDate?: string;
    /**
     * 
     * @type {TeamsDetails}
     * @memberof TheTransferObject
     */
    teamsData?: TeamsDetails;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject
     */
    toTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject
     */
    toTeamName?: string;
    /**
     * <table><thead><tr><th>Transfer type</th></tr></thead><tbody><tr><td>Transfer</td></tr><tr><td>Free Transfer</td></tr><tr><td>Loan</td></tr><tr><td>Back from Loan</td></tr><tr><td>Free Agent</td></tr><tr><td>Player Swap</td></tr><tr><td>Trial</td></tr></tbody></table>
     * @type {string}
     * @memberof TheTransferObject
     */
    type?: TheTransferObject.TypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject
     */
    value?: number;
}

/**
 * @export
 * @namespace TheTransferObject
 */
export namespace TheTransferObject {
    /**
     * @export
     * @enum {string}
     */
    export enum CurrencyEnum {
        USD = <any>'USD',
        EUR = <any>'EUR',
        GBP = <any>'GBP'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Transfer = <any>'Transfer',
        FreeTransfer = <any>'Free Transfer',
        Loan = <any>'Loan',
        BackFromLoan = <any>'Back from Loan',
        FreeAgent = <any>'Free Agent',
        PlayerSwap = <any>'Player Swap',
        Trial = <any>'Trial'
    }
}
/**
 * 
 * @export
 * @interface TheTransferObject1
 */
export interface TheTransferObject1 {
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject1
     */
    active?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject1
     */
    announceDate?: string;
    /**
     * <table><thead><tr><th>Currency</th></tr></thead><tbody><tr><td>USD</td></tr><tr><td>EUR</td></tr><tr><td>GBP</td></tr></tbody></table>
     * @type {string}
     * @memberof TheTransferObject1
     */
    currency?: TheTransferObject1.CurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject1
     */
    endDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject1
     */
    fromTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject1
     */
    fromTeamName?: string;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject1
     */
    playerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject1
     */
    startDate?: string;
    /**
     * Available with querystring param `details=teams`
     * @type {any}
     * @memberof TheTransferObject1
     */
    teamsData?: any;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject1
     */
    toTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof TheTransferObject1
     */
    toTeamName?: string;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject1
     */
    transferId?: number;
    /**
     * <table><thead><tr><th>Transfer type</th></tr></thead><tbody><tr><td>Transfer</td></tr><tr><td>Free Transfer</td></tr><tr><td>Loan</td></tr><tr><td>Back from Loan</td></tr><tr><td>Free Agent</td></tr><tr><td>Player Swap</td></tr><tr><td>Trial</td></tr></tbody></table>
     * @type {string}
     * @memberof TheTransferObject1
     */
    type?: TheTransferObject1.TypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TheTransferObject1
     */
    value?: number;
}

/**
 * @export
 * @namespace TheTransferObject1
 */
export namespace TheTransferObject1 {
    /**
     * @export
     * @enum {string}
     */
    export enum CurrencyEnum {
        USD = <any>'USD',
        EUR = <any>'EUR',
        GBP = <any>'GBP'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Transfer = <any>'Transfer',
        FreeTransfer = <any>'Free Transfer',
        Loan = <any>'Loan',
        BackFromLoan = <any>'Back from Loan',
        FreeAgent = <any>'Free Agent',
        PlayerSwap = <any>'Player Swap',
        Trial = <any>'Trial'
    }
}
/**
 * List of transfers related to a given player
 * @export
 */
export type Transfer = Array<TheTransferObject1>
/**
 * Info about the recently updated resources
 * @export
 * @interface UpdatedObjects
 */
export interface UpdatedObjects {
    /**
     * 
     * @type {TheResourceObject}
     * @memberof UpdatedObjects
     */
    resourceType?: TheResourceObject;
}
/**
 * Data about the given video
 * @export
 * @interface Video
 */
export interface Video {
    /**
     * 
     * @type {QualityUrl}
     * @memberof Video
     */
    fullhd?: QualityUrl;
    /**
     * 
     * @type {QualityUrl}
     * @memberof Video
     */
    hd?: QualityUrl;
    /**
     * 
     * @type {QualityUrl}
     * @memberof Video
     */
    lq?: QualityUrl;
    /**
     * 
     * @type {number}
     * @memberof Video
     */
    matchId?: number;
    /**
     * 
     * @type {InformationAboutVideoOffsets}
     * @memberof Video
     */
    offsets?: InformationAboutVideoOffsets;
    /**
     * 
     * @type {QualityUrl}
     * @memberof Video
     */
    sd?: QualityUrl;
}
/**
 * Information about the given video periods offsets
 * @export
 * @interface VideoOffsets
 */
export interface VideoOffsets {
    /**
     * 
     * @type {Match}
     * @memberof VideoOffsets
     */
    match?: Match;
    /**
     * 
     * @type {Offsets}
     * @memberof VideoOffsets
     */
    offsets?: Offsets;
}
/**
 * Information about the existing qualities for a given video
 * @export
 * @interface VideoQualities
 */
export interface VideoQualities {
    /**
     * 
     * @type {TheFullhdObject}
     * @memberof VideoQualities
     */
    fullhd?: TheFullhdObject;
    /**
     * 
     * @type {TheHdObject}
     * @memberof VideoQualities
     */
    hd?: TheHdObject;
    /**
     * 
     * @type {TheLqObject}
     * @memberof VideoQualities
     */
    lq?: TheLqObject;
    /**
     * 
     * @type {number}
     * @memberof VideoQualities
     */
    matchId?: number;
    /**
     * 
     * @type {TheSdObject}
     * @memberof VideoQualities
     */
    sd?: TheSdObject;
}