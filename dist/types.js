/**
 * @export
 * @namespace Coach
 */
export var Coach;
(function (Coach) {
    /**
     * @export
     * @enum {string}
     */
    let GenderEnum;
    (function (GenderEnum) {
        GenderEnum[GenderEnum["Male"] = 'male'] = "Male";
        GenderEnum[GenderEnum["Female"] = 'female'] = "Female";
    })(GenderEnum = Coach.GenderEnum || (Coach.GenderEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'active'] = "Active";
        StatusEnum[StatusEnum["Retired"] = 'retired'] = "Retired";
        StatusEnum[StatusEnum["Died"] = 'died'] = "Died";
    })(StatusEnum = Coach.StatusEnum || (Coach.StatusEnum = {}));
})(Coach || (Coach = {}));
/**
 * @export
 * @namespace Competition
 */
export var Competition;
(function (Competition) {
    /**
     * @export
     * @enum {string}
     */
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["Default"] = 'default'] = "Default";
        CategoryEnum[CategoryEnum["U13"] = 'U13'] = "U13";
        CategoryEnum[CategoryEnum["U14"] = 'U14'] = "U14";
        CategoryEnum[CategoryEnum["U15"] = 'U15'] = "U15";
        CategoryEnum[CategoryEnum["U16"] = 'U16'] = "U16";
        CategoryEnum[CategoryEnum["U17"] = 'U17'] = "U17";
        CategoryEnum[CategoryEnum["U18"] = 'U18'] = "U18";
        CategoryEnum[CategoryEnum["U19"] = 'U19'] = "U19";
        CategoryEnum[CategoryEnum["U20"] = 'U20'] = "U20";
        CategoryEnum[CategoryEnum["U21"] = 'U21'] = "U21";
        CategoryEnum[CategoryEnum["U23"] = 'U23'] = "U23";
    })(CategoryEnum = Competition.CategoryEnum || (Competition.CategoryEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let DivisionLevelEnum;
    (function (DivisionLevelEnum) {
        DivisionLevelEnum[DivisionLevelEnum["NUMBER_0"] = 0] = "NUMBER_0";
        DivisionLevelEnum[DivisionLevelEnum["NUMBER_1"] = 1] = "NUMBER_1";
        DivisionLevelEnum[DivisionLevelEnum["NUMBER_2"] = 2] = "NUMBER_2";
        DivisionLevelEnum[DivisionLevelEnum["NUMBER_3"] = 3] = "NUMBER_3";
        DivisionLevelEnum[DivisionLevelEnum["NUMBER_4"] = 4] = "NUMBER_4";
        DivisionLevelEnum[DivisionLevelEnum["NUMBER_5"] = 5] = "NUMBER_5";
    })(DivisionLevelEnum = Competition.DivisionLevelEnum || (Competition.DivisionLevelEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let FormatEnum;
    (function (FormatEnum) {
        FormatEnum[FormatEnum["DomesticCup"] = 'Domestic cup'] = "DomesticCup";
        FormatEnum[FormatEnum["DomesticLeague"] = 'Domestic league'] = "DomesticLeague";
        FormatEnum[FormatEnum["DomesticSuperCup"] = 'Domestic super cup'] = "DomesticSuperCup";
        FormatEnum[FormatEnum["InternationalCup"] = 'International cup'] = "InternationalCup";
        FormatEnum[FormatEnum["InternationalSuperCup"] = 'International super cup'] = "InternationalSuperCup";
    })(FormatEnum = Competition.FormatEnum || (Competition.FormatEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let GenderEnum;
    (function (GenderEnum) {
        GenderEnum[GenderEnum["Male"] = 'male'] = "Male";
        GenderEnum[GenderEnum["Female"] = 'female'] = "Female";
    })(GenderEnum = Competition.GenderEnum || (Competition.GenderEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Club"] = 'club'] = "Club";
        TypeEnum[TypeEnum["International"] = 'international'] = "International";
    })(TypeEnum = Competition.TypeEnum || (Competition.TypeEnum = {}));
})(Competition || (Competition = {}));
/**
 * @export
 * @namespace CompetitionMatchesMatches
 */
export var CompetitionMatchesMatches;
(function (CompetitionMatchesMatches) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
        StatusEnum[StatusEnum["Played"] = 'Played'] = "Played";
    })(StatusEnum = CompetitionMatchesMatches.StatusEnum || (CompetitionMatchesMatches.StatusEnum = {}));
})(CompetitionMatchesMatches || (CompetitionMatchesMatches = {}));
/**
 * @export
 * @namespace FormationSchema
 */
export var FormationSchema;
(function (FormationSchema) {
    /**
     * @export
     * @enum {string}
     */
    let MatchPeriodEnum;
    (function (MatchPeriodEnum) {
        MatchPeriodEnum[MatchPeriodEnum["_1H"] = '1H'] = "_1H";
        MatchPeriodEnum[MatchPeriodEnum["_2H"] = '2H'] = "_2H";
        MatchPeriodEnum[MatchPeriodEnum["E1"] = 'E1'] = "E1";
        MatchPeriodEnum[MatchPeriodEnum["E2"] = 'E2'] = "E2";
        MatchPeriodEnum[MatchPeriodEnum["P"] = 'P'] = "P";
    })(MatchPeriodEnum = FormationSchema.MatchPeriodEnum || (FormationSchema.MatchPeriodEnum = {}));
})(FormationSchema || (FormationSchema = {}));
/**
 * @export
 * @namespace FormationSchemaPlayerId
 */
export var FormationSchemaPlayerId;
(function (FormationSchemaPlayerId) {
    /**
     * @export
     * @enum {string}
     */
    let PositionEnum;
    (function (PositionEnum) {
        PositionEnum[PositionEnum["Gk"] = 'gk'] = "Gk";
        PositionEnum[PositionEnum["Rb"] = 'rb'] = "Rb";
        PositionEnum[PositionEnum["Rcb"] = 'rcb'] = "Rcb";
        PositionEnum[PositionEnum["Lcb"] = 'lcb'] = "Lcb";
        PositionEnum[PositionEnum["Lb"] = 'lb'] = "Lb";
        PositionEnum[PositionEnum["Rw"] = 'rw'] = "Rw";
        PositionEnum[PositionEnum["Rcmf"] = 'rcmf'] = "Rcmf";
        PositionEnum[PositionEnum["Lcmf"] = 'lcmf'] = "Lcmf";
        PositionEnum[PositionEnum["Lw"] = 'lw'] = "Lw";
        PositionEnum[PositionEnum["Ss"] = 'ss'] = "Ss";
        PositionEnum[PositionEnum["Cf"] = 'cf'] = "Cf";
        PositionEnum[PositionEnum["Amf"] = 'amf'] = "Amf";
        PositionEnum[PositionEnum["Rcmf3"] = 'rcmf3'] = "Rcmf3";
        PositionEnum[PositionEnum["Dmf"] = 'dmf'] = "Dmf";
        PositionEnum[PositionEnum["Lcmf3"] = 'lcmf3'] = "Lcmf3";
        PositionEnum[PositionEnum["Rdmf"] = 'rdmf'] = "Rdmf";
        PositionEnum[PositionEnum["Ldmf"] = 'ldmf'] = "Ldmf";
        PositionEnum[PositionEnum["Ramf"] = 'ramf'] = "Ramf";
        PositionEnum[PositionEnum["Lamf"] = 'lamf'] = "Lamf";
        PositionEnum[PositionEnum["Rwf"] = 'rwf'] = "Rwf";
        PositionEnum[PositionEnum["Lwf"] = 'lwf'] = "Lwf";
        PositionEnum[PositionEnum["Rcb3"] = 'rcb3'] = "Rcb3";
        PositionEnum[PositionEnum["Cb"] = 'cb'] = "Cb";
        PositionEnum[PositionEnum["Lcb3"] = 'lcb3'] = "Lcb3";
        PositionEnum[PositionEnum["Rwb"] = 'rwb'] = "Rwb";
        PositionEnum[PositionEnum["Lwb"] = 'lwb'] = "Lwb";
        PositionEnum[PositionEnum["Rb5"] = 'rb5'] = "Rb5";
        PositionEnum[PositionEnum["Lb5"] = 'lb5'] = "Lb5";
    })(PositionEnum = FormationSchemaPlayerId.PositionEnum || (FormationSchemaPlayerId.PositionEnum = {}));
})(FormationSchemaPlayerId || (FormationSchemaPlayerId = {}));
/**
 * @export
 * @namespace Match
 */
export var Match;
(function (Match) {
    /**
     * @export
     * @enum {string}
     */
    let DurationEnum;
    (function (DurationEnum) {
        DurationEnum[DurationEnum["Regular"] = 'Regular'] = "Regular";
        DurationEnum[DurationEnum["GoldenGoal"] = 'GoldenGoal'] = "GoldenGoal";
        DurationEnum[DurationEnum["SilverGoal"] = 'SilverGoal'] = "SilverGoal";
        DurationEnum[DurationEnum["ExtraTime"] = 'ExtraTime'] = "ExtraTime";
        DurationEnum[DurationEnum["Penalties"] = 'Penalties'] = "Penalties";
    })(DurationEnum = Match.DurationEnum || (Match.DurationEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Cancelled"] = 'Cancelled'] = "Cancelled";
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
        StatusEnum[StatusEnum["Played"] = 'Played'] = "Played";
        StatusEnum[StatusEnum["Playing"] = 'Playing'] = "Playing";
        StatusEnum[StatusEnum["Postponed"] = 'Postponed'] = "Postponed";
        StatusEnum[StatusEnum["Suspended"] = 'Suspended'] = "Suspended";
        StatusEnum[StatusEnum["Awarded"] = 'Awarded'] = "Awarded";
    })(StatusEnum = Match.StatusEnum || (Match.StatusEnum = {}));
})(Match || (Match = {}));
/**
 * @export
 * @namespace MatchReferees
 */
export var MatchReferees;
(function (MatchReferees) {
    /**
     * @export
     * @enum {string}
     */
    let RoleEnum;
    (function (RoleEnum) {
        RoleEnum[RoleEnum["Referee"] = 'referee'] = "Referee";
        RoleEnum[RoleEnum["FirstAssistant"] = 'firstAssistant'] = "FirstAssistant";
        RoleEnum[RoleEnum["SecondAssistant"] = 'secondAssistant'] = "SecondAssistant";
        RoleEnum[RoleEnum["FourthOfficial"] = 'fourthOfficial'] = "FourthOfficial";
        RoleEnum[RoleEnum["FirstAdditionalAssistant"] = 'firstAdditionalAssistant'] = "FirstAdditionalAssistant";
        RoleEnum[RoleEnum["SecondAdditionalAssistant"] = 'secondAdditionalAssistant'] = "SecondAdditionalAssistant";
    })(RoleEnum = MatchReferees.RoleEnum || (MatchReferees.RoleEnum = {}));
})(MatchReferees || (MatchReferees = {}));
/**
 * @export
 * @namespace MatchTeamData
 */
export var MatchTeamData;
(function (MatchTeamData) {
    /**
     * @export
     * @enum {string}
     */
    let SideEnum;
    (function (SideEnum) {
        SideEnum[SideEnum["Home"] = 'home'] = "Home";
        SideEnum[SideEnum["Away"] = 'away'] = "Away";
        SideEnum[SideEnum["None"] = 'none'] = "None";
    })(SideEnum = MatchTeamData.SideEnum || (MatchTeamData.SideEnum = {}));
})(MatchTeamData || (MatchTeamData = {}));
/**
 * @export
 * @namespace Round
 */
export var Round;
(function (Round) {
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Table"] = 'table'] = "Table";
        TypeEnum[TypeEnum["Cup"] = 'cup'] = "Cup";
    })(TypeEnum = Round.TypeEnum || (Round.TypeEnum = {}));
})(Round || (Round = {}));
/**
 * @export
 * @namespace Team
 */
export var Team;
(function (Team) {
    /**
     * @export
     * @enum {string}
     */
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["Default"] = 'default'] = "Default";
        CategoryEnum[CategoryEnum["Youth"] = 'youth'] = "Youth";
    })(CategoryEnum = Team.CategoryEnum || (Team.CategoryEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let GenderEnum;
    (function (GenderEnum) {
        GenderEnum[GenderEnum["Male"] = 'male'] = "Male";
        GenderEnum[GenderEnum["Female"] = 'female'] = "Female";
    })(GenderEnum = Team.GenderEnum || (Team.GenderEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Club"] = 'club'] = "Club";
        TypeEnum[TypeEnum["National"] = 'national'] = "National";
    })(TypeEnum = Team.TypeEnum || (Team.TypeEnum = {}));
})(Team || (Team = {}));
/**
 * @export
 * @namespace TeamMatchesMatches
 */
export var TeamMatchesMatches;
(function (TeamMatchesMatches) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
        StatusEnum[StatusEnum["Played"] = 'Played'] = "Played";
    })(StatusEnum = TeamMatchesMatches.StatusEnum || (TeamMatchesMatches.StatusEnum = {}));
})(TeamMatchesMatches || (TeamMatchesMatches = {}));
/**
 * @export
 * @namespace TheMatchGoalObject
 */
export var TheMatchGoalObject;
(function (TheMatchGoalObject) {
    /**
     * @export
     * @enum {string}
     */
    let PeriodEnum;
    (function (PeriodEnum) {
        PeriodEnum[PeriodEnum["FirstHalf"] = 'FirstHalf'] = "FirstHalf";
        PeriodEnum[PeriodEnum["SecondHalf"] = 'SecondHalf'] = "SecondHalf";
        PeriodEnum[PeriodEnum["ExtraFirstHalf"] = 'ExtraFirstHalf'] = "ExtraFirstHalf";
        PeriodEnum[PeriodEnum["ExtraSecondHalf"] = 'ExtraSecondHalf'] = "ExtraSecondHalf";
        PeriodEnum[PeriodEnum["Shootout"] = 'Shootout'] = "Shootout";
    })(PeriodEnum = TheMatchGoalObject.PeriodEnum || (TheMatchGoalObject.PeriodEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Goal"] = 'goal'] = "Goal";
        TypeEnum[TypeEnum["Own"] = 'own'] = "Own";
        TypeEnum[TypeEnum["Penalty"] = 'penalty'] = "Penalty";
    })(TypeEnum = TheMatchGoalObject.TypeEnum || (TheMatchGoalObject.TypeEnum = {}));
})(TheMatchGoalObject || (TheMatchGoalObject = {}));
/**
 * @export
 * @namespace TheMatchesObject
 */
export var TheMatchesObject;
(function (TheMatchesObject) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
    })(StatusEnum = TheMatchesObject.StatusEnum || (TheMatchesObject.StatusEnum = {}));
})(TheMatchesObject || (TheMatchesObject = {}));
/**
 * @export
 * @namespace TheMatchesObject1
 */
export var TheMatchesObject1;
(function (TheMatchesObject1) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
        StatusEnum[StatusEnum["Played"] = 'Played'] = "Played";
    })(StatusEnum = TheMatchesObject1.StatusEnum || (TheMatchesObject1.StatusEnum = {}));
})(TheMatchesObject1 || (TheMatchesObject1 = {}));
/**
 * @export
 * @namespace TheMatchesObject2
 */
export var TheMatchesObject2;
(function (TheMatchesObject2) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
    })(StatusEnum = TheMatchesObject2.StatusEnum || (TheMatchesObject2.StatusEnum = {}));
})(TheMatchesObject2 || (TheMatchesObject2 = {}));
/**
 * @export
 * @namespace TheSeasonMatchObject
 */
export var TheSeasonMatchObject;
(function (TheSeasonMatchObject) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Fixture"] = 'Fixture'] = "Fixture";
        StatusEnum[StatusEnum["Played"] = 'Played'] = "Played";
    })(StatusEnum = TheSeasonMatchObject.StatusEnum || (TheSeasonMatchObject.StatusEnum = {}));
})(TheSeasonMatchObject || (TheSeasonMatchObject = {}));
/**
 * @export
 * @namespace TheTransferObject
 */
export var TheTransferObject;
(function (TheTransferObject) {
    /**
     * @export
     * @enum {string}
     */
    let CurrencyEnum;
    (function (CurrencyEnum) {
        CurrencyEnum[CurrencyEnum["USD"] = 'USD'] = "USD";
        CurrencyEnum[CurrencyEnum["EUR"] = 'EUR'] = "EUR";
        CurrencyEnum[CurrencyEnum["GBP"] = 'GBP'] = "GBP";
    })(CurrencyEnum = TheTransferObject.CurrencyEnum || (TheTransferObject.CurrencyEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transfer"] = 'Transfer'] = "Transfer";
        TypeEnum[TypeEnum["FreeTransfer"] = 'Free Transfer'] = "FreeTransfer";
        TypeEnum[TypeEnum["Loan"] = 'Loan'] = "Loan";
        TypeEnum[TypeEnum["BackFromLoan"] = 'Back from Loan'] = "BackFromLoan";
        TypeEnum[TypeEnum["FreeAgent"] = 'Free Agent'] = "FreeAgent";
        TypeEnum[TypeEnum["PlayerSwap"] = 'Player Swap'] = "PlayerSwap";
        TypeEnum[TypeEnum["Trial"] = 'Trial'] = "Trial";
    })(TypeEnum = TheTransferObject.TypeEnum || (TheTransferObject.TypeEnum = {}));
})(TheTransferObject || (TheTransferObject = {}));
/**
 * @export
 * @namespace TheTransferObject1
 */
export var TheTransferObject1;
(function (TheTransferObject1) {
    /**
     * @export
     * @enum {string}
     */
    let CurrencyEnum;
    (function (CurrencyEnum) {
        CurrencyEnum[CurrencyEnum["USD"] = 'USD'] = "USD";
        CurrencyEnum[CurrencyEnum["EUR"] = 'EUR'] = "EUR";
        CurrencyEnum[CurrencyEnum["GBP"] = 'GBP'] = "GBP";
    })(CurrencyEnum = TheTransferObject1.CurrencyEnum || (TheTransferObject1.CurrencyEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transfer"] = 'Transfer'] = "Transfer";
        TypeEnum[TypeEnum["FreeTransfer"] = 'Free Transfer'] = "FreeTransfer";
        TypeEnum[TypeEnum["Loan"] = 'Loan'] = "Loan";
        TypeEnum[TypeEnum["BackFromLoan"] = 'Back from Loan'] = "BackFromLoan";
        TypeEnum[TypeEnum["FreeAgent"] = 'Free Agent'] = "FreeAgent";
        TypeEnum[TypeEnum["PlayerSwap"] = 'Player Swap'] = "PlayerSwap";
        TypeEnum[TypeEnum["Trial"] = 'Trial'] = "Trial";
    })(TypeEnum = TheTransferObject1.TypeEnum || (TheTransferObject1.TypeEnum = {}));
})(TheTransferObject1 || (TheTransferObject1 = {}));
//# sourceMappingURL=types.js.map