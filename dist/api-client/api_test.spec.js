/**
 * Wyscout API (v3)
 * [Customer resources](https://www.hudl.com/support/wyscout) | [Customer support](https://www.hudl.com/support/contact)  [Wyscout Data resources](https://footballdata.wyscout.com/resources/)  **IMPORTANT: Version switching planned for July 20th 2021.**  On July 20th 2021 we will switch v3 as the Current version. V2 will become Legacy.  Please see [Versioning](#section/Versioning) section for any related details.  # Overview  This is the product documentation for our API service, in which you can find all definitions and technical information you may need.  # Authentication  ## Overview  This page explain how to authenticate to Wyscout APIs using Basic Access Authentication.  ## Using your client software  Depending on your client software you should be provided with a mechanism for supplying an username and password: that will build the required authentication headers automatically.  For example you can specify the -u argument with curl as username:password.  ## Supplying Basic Access Authentication headers  It is possible to construct the authentication headers manually:  * Build a string of the form username:password. * Encode the string in Base64 * Supply an `Authorization` header with content `Basic` followed by the encoded string.   For example, the string `Aladdin:OpenSesame` encodes to `QWxhZGRpbjpPcGVuU2VzYW1l` in base64,   so you would use this string `Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l`  ## Rate limits  To avoid services overload requests are rate limited. The Wyscout API currently enforces a limit of **12** request per second per API Key.  If the rate limit is exceeded, the API will return the following HTTP 429 response:  ```json   {     \"error\": {       \"code\": 429,       \"message\": \"Too many requests\"     }   } ```  # Data glossary and definitions  At the following link you can find our Data Glossary that describes events, metrics and concepts used across the Wyscout API, Platform and reports.  <a href=\"https://dataglossary.wyscout.com/\" target=\"_blank\">Wyscout Data Glossary</a>   ## Pitch coordinates  ![Pitch map](assets/images/WyscoutDataCoordinates.png)  The event's coordinates depends on the subject. The subject's goal to be defended is always **x=0%** and the attack is always **x=100%**. All values are % expressed as **(x,y)**.  # Versioning  Wyscout gives you the chance to choose between three different sets of API endpoints.  ## Current The latest available version. It includes the most recent endpoints and improvements.  ## Preview The beta version of our next official release. Here we start to implement future improvements and new endpoints.  ## Legacy The old version. This is still available and running, in order to let users adapt their tools to new ones.  ## Version Switch  Wyscout will constantly improve its dataset by adding new endpoints and improving the existing ones. “Preview” version is where you can find last delivered updates. When a new and improved “Current” version is released, the previous version becomes “Legacy” – which means it will not immediately cease to exist, giving you the time to adapt your systems. It will be available and running until another new version – “Current” – is released, at least six months after the previous one.  ![Version Switch](assets/images/WyscoutVersionSwitch.png)  Documentation on [apidocs.wyscout.com](apidocs.wyscout.com) will always be available also for “Legacy” version. Each version will receive support as from the following table:  ![Version Support](assets/images/WyscoutVersionSupport.png)
 *
 * OpenAPI spec version: 2023-08-22T14:26:33Z
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
import * as api from "./api";
const config = {};
describe("AdvancedStatsApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.AdvancedStatsApi(config);
    });
    test("matchesWyIdAdvancedstatsGet", () => {
        const wyId = "wyId_example";
        const useSides = "useSides_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.matchesWyIdAdvancedstatsGet(wyId, useSides, details, authorization, {})).resolves.toBe(null);
    });
    test("matchesWyIdAdvancedstatsPlayersGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.matchesWyIdAdvancedstatsPlayersGet(wyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("playersWyIdAdvancedstatsGet", () => {
        const compId = "compId_example";
        const wyId = "wyId_example";
        const roundId = "roundId_example";
        const matchDay = "matchDay_example";
        const authorization = "authorization_example";
        const seasonId = "seasonId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        return expect(instance.playersWyIdAdvancedstatsGet(compId, wyId, roundId, matchDay, authorization, seasonId, fetch, details, {})).resolves.toBe(null);
    });
    test("playersWyIdMatchesMatchWyIdAdvancedstatsGet", () => {
        const wyId = "wyId_example";
        const matchWyId = "matchWyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdMatchesMatchWyIdAdvancedstatsGet(wyId, matchWyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("teamsWyIdAdvancedstatsGet", () => {
        const compId = "compId_example";
        const wyId = "wyId_example";
        const roundId = "roundId_example";
        const matchDay = "matchDay_example";
        const authorization = "authorization_example";
        const seasonId = "seasonId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        return expect(instance.teamsWyIdAdvancedstatsGet(compId, wyId, roundId, matchDay, authorization, seasonId, fetch, details, {})).resolves.toBe(null);
    });
    test("teamsWyIdMatchesMatchWyIdAdvancedstatsGet", () => {
        const wyId = "wyId_example";
        const matchWyId = "matchWyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdMatchesMatchWyIdAdvancedstatsGet(wyId, matchWyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
});
describe("AreasApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.AreasApi(config);
    });
    test("areasGet", () => {
        const authorization = "authorization_example";
        return expect(instance.areasGet(authorization, {})).resolves.toBe(null);
    });
});
describe("CoachesApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.CoachesApi(config);
    });
    test("coachesWyIdGet", () => {
        const wyId = "wyId_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.coachesWyIdGet(wyId, details, authorization, {})).resolves.toBe(null);
    });
});
describe("CompetitionsApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.CompetitionsApi(config);
    });
    test("competitionsGet", () => {
        const areaId = "areaId_example";
        const authorization = "authorization_example";
        return expect(instance.competitionsGet(areaId, authorization, {})).resolves.toBe(null);
    });
    test("competitionsWyIdGet", () => {
        const wyId = "wyId_example";
        const authorization = "authorization_example";
        return expect(instance.competitionsWyIdGet(wyId, authorization, {})).resolves.toBe(null);
    });
    test("competitionsWyIdMatchesGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.competitionsWyIdMatchesGet(wyId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("competitionsWyIdPlayersGet", () => {
        const wyId = "wyId_example";
        const count = "count_example";
        const limit = "limit_example";
        const sort = "sort_example";
        const authorization = "authorization_example";
        const fetch = "fetch_example";
        const page = "page_example";
        const search = "search_example";
        const details = "details_example";
        const filter = "filter_example";
        return expect(instance.competitionsWyIdPlayersGet(wyId, count, limit, sort, authorization, fetch, page, search, details, filter, {})).resolves.toBe(null);
    });
    test("competitionsWyIdSeasonsGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const active = "active_example";
        const authorization = "authorization_example";
        return expect(instance.competitionsWyIdSeasonsGet(wyId, fetch, active, authorization, {})).resolves.toBe(null);
    });
    test("competitionsWyIdTeamsGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.competitionsWyIdTeamsGet(wyId, fetch, authorization, {})).resolves.toBe(null);
    });
});
describe("DefaultApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.DefaultApi(config);
    });
    test("areasOptions", () => {
        return expect(instance.areasOptions({})).resolves.toBe(null);
    });
    test("coachesWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.coachesWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("competitionsOptions", () => {
        return expect(instance.competitionsOptions({})).resolves.toBe(null);
    });
    test("competitionsWyIdMatchesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.competitionsWyIdMatchesOptions(wyId, {})).resolves.toBe(null);
    });
    test("competitionsWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.competitionsWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("competitionsWyIdPlayersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.competitionsWyIdPlayersOptions(wyId, {})).resolves.toBe(null);
    });
    test("competitionsWyIdSeasonsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.competitionsWyIdSeasonsOptions(wyId, {})).resolves.toBe(null);
    });
    test("competitionsWyIdTeamsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.competitionsWyIdTeamsOptions(wyId, {})).resolves.toBe(null);
    });
    test("matchesWyIdAdvancedstatsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.matchesWyIdAdvancedstatsOptions(wyId, {})).resolves.toBe(null);
    });
    test("matchesWyIdAdvancedstatsPlayersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.matchesWyIdAdvancedstatsPlayersOptions(wyId, {})).resolves.toBe(null);
    });
    test("matchesWyIdEventsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.matchesWyIdEventsOptions(wyId, {})).resolves.toBe(null);
    });
    test("matchesWyIdFormationsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.matchesWyIdFormationsOptions(wyId, {})).resolves.toBe(null);
    });
    test("matchesWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.matchesWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdAdvancedstatsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdAdvancedstatsOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdCareerOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdCareerOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdContractinfoOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdContractinfoOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdFixturesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdFixturesOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdMatchesMatchWyIdAdvancedstatsOptions", () => {
        const wyId = "wyId_example";
        const matchWyId = "matchWyId_example";
        return expect(instance.playersWyIdMatchesMatchWyIdAdvancedstatsOptions(wyId, matchWyId, {})).resolves.toBe(null);
    });
    test("playersWyIdMatchesMatchWyIdOptions", () => {
        const wyId = "wyId_example";
        const matchWyId = "matchWyId_example";
        return expect(instance.playersWyIdMatchesMatchWyIdOptions(wyId, matchWyId, {})).resolves.toBe(null);
    });
    test("playersWyIdMatchesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdMatchesOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("playersWyIdTransfersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.playersWyIdTransfersOptions(wyId, {})).resolves.toBe(null);
    });
    test("refereesWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.refereesWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("roundsWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.roundsWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("searchOptions", () => {
        return expect(instance.searchOptions({})).resolves.toBe(null);
    });
    test("seasonsWyIdAssistmenOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdAssistmenOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdCareerOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdCareerOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdFixturesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdFixturesOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdMatchesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdMatchesOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdPlayersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdPlayersOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdScorersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdScorersOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdStandingsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdStandingsOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdTeamsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdTeamsOptions(wyId, {})).resolves.toBe(null);
    });
    test("seasonsWyIdTransfersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.seasonsWyIdTransfersOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdAdvancedstatsOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdAdvancedstatsOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdCareerOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdCareerOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdFixturesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdFixturesOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdMatchesMatchWyIdAdvancedstatsOptions", () => {
        const wyId = "wyId_example";
        const matchWyId = "matchWyId_example";
        return expect(instance.teamsWyIdMatchesMatchWyIdAdvancedstatsOptions(wyId, matchWyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdMatchesMatchWyIdOptions", () => {
        const wyId = "wyId_example";
        const matchWyId = "matchWyId_example";
        return expect(instance.teamsWyIdMatchesMatchWyIdOptions(wyId, matchWyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdMatchesOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdMatchesOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdSquadOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdSquadOptions(wyId, {})).resolves.toBe(null);
    });
    test("teamsWyIdTransfersOptions", () => {
        const wyId = "wyId_example";
        return expect(instance.teamsWyIdTransfersOptions(wyId, {})).resolves.toBe(null);
    });
    test("updatedobjectsOptions", () => {
        return expect(instance.updatedobjectsOptions({})).resolves.toBe(null);
    });
    test("videosMatchIdOffsetsOptions", () => {
        const matchId = "matchId_example";
        return expect(instance.videosMatchIdOffsetsOptions(matchId, {})).resolves.toBe(null);
    });
    test("videosMatchIdOptions", () => {
        const matchId = "matchId_example";
        return expect(instance.videosMatchIdOptions(matchId, {})).resolves.toBe(null);
    });
    test("videosMatchIdQualitiesOptions", () => {
        const matchId = "matchId_example";
        return expect(instance.videosMatchIdQualitiesOptions(matchId, {})).resolves.toBe(null);
    });
});
describe("EventsApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.EventsApi(config);
    });
    test("matchesWyIdEventsGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const exclude = "exclude_example";
        const authorization = "authorization_example";
        return expect(instance.matchesWyIdEventsGet(wyId, fetch, details, exclude, authorization, {})).resolves.toBe(null);
    });
});
describe("ExtraApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.ExtraApi(config);
    });
    test("updatedobjectsGet", () => {
        const updatedSince = "updatedSince_example";
        const type = "type_example";
        const emptyPayload = "emptyPayload_example";
        const authorization = "authorization_example";
        return expect(instance.updatedobjectsGet(updatedSince, type, emptyPayload, authorization, {})).resolves.toBe(null);
    });
});
describe("MatchesApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.MatchesApi(config);
    });
    test("matchesWyIdFormationsGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.matchesWyIdFormationsGet(wyId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("matchesWyIdGet", () => {
        const wyId = "wyId_example";
        const useSides = "useSides_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.matchesWyIdGet(wyId, useSides, details, authorization, {})).resolves.toBe(null);
    });
});
describe("PlayersApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.PlayersApi(config);
    });
    test("playersWyIdCareerGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdCareerGet(wyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("playersWyIdContractinfoGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdContractinfoGet(wyId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("playersWyIdFixturesGet", () => {
        const wyId = "wyId_example";
        const toDate = "toDate_example";
        const fromDate = "fromDate_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdFixturesGet(wyId, toDate, fromDate, authorization, {})).resolves.toBe(null);
    });
    test("playersWyIdGet", () => {
        const wyId = "wyId_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdGet(wyId, details, authorization, {})).resolves.toBe(null);
    });
    test("playersWyIdMatchesGet", () => {
        const wyId = "wyId_example";
        const seasonId = "seasonId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdMatchesGet(wyId, seasonId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("playersWyIdTransfersGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const alternative = "alternative_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.playersWyIdTransfersGet(wyId, fetch, alternative, details, authorization, {})).resolves.toBe(null);
    });
});
describe("RefereesApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.RefereesApi(config);
    });
    test("refereesWyIdGet", () => {
        const wyId = "wyId_example";
        const imageDataURL = "imageDataURL_example";
        const authorization = "authorization_example";
        return expect(instance.refereesWyIdGet(wyId, imageDataURL, authorization, {})).resolves.toBe(null);
    });
});
describe("RoundsApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.RoundsApi(config);
    });
    test("roundsWyIdGet", () => {
        const wyId = "wyId_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.roundsWyIdGet(wyId, details, authorization, {})).resolves.toBe(null);
    });
});
describe("SearchApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.SearchApi(config);
    });
    test("searchGet", () => {
        const query = "query_example";
        const objType = "objType_example";
        const gender = "gender_example";
        const authorization = "authorization_example";
        return expect(instance.searchGet(query, objType, gender, authorization, {})).resolves.toBe(null);
    });
});
describe("SeasonsApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.SeasonsApi(config);
    });
    test("seasonsWyIdAssistmenGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdAssistmenGet(wyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdCareerGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const filters = "filters_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdCareerGet(wyId, fetch, details, filters, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdFixturesGet", () => {
        const wyId = "wyId_example";
        const toDate = "toDate_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const fromDate = "fromDate_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdFixturesGet(wyId, toDate, fetch, details, fromDate, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdGet", () => {
        const wyId = "wyId_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdGet(wyId, details, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdMatchesGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdMatchesGet(wyId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdPlayersGet", () => {
        const wyId = "wyId_example";
        const count = "count_example";
        const limit = "limit_example";
        const sort = "sort_example";
        const authorization = "authorization_example";
        const fetch = "fetch_example";
        const page = "page_example";
        const search = "search_example";
        const details = "details_example";
        const filter = "filter_example";
        return expect(instance.seasonsWyIdPlayersGet(wyId, count, limit, sort, authorization, fetch, page, search, details, filter, {})).resolves.toBe(null);
    });
    test("seasonsWyIdScorersGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdScorersGet(wyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdStandingsGet", () => {
        const wyId = "wyId_example";
        const roundId = "roundId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdStandingsGet(wyId, roundId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdTeamsGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdTeamsGet(wyId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("seasonsWyIdTransfersGet", () => {
        const wyId = "wyId_example";
        const toDate = "toDate_example";
        const details = "details_example";
        const fromDate = "fromDate_example";
        const authorization = "authorization_example";
        return expect(instance.seasonsWyIdTransfersGet(wyId, toDate, details, fromDate, authorization, {})).resolves.toBe(null);
    });
});
describe("TeamsApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.TeamsApi(config);
    });
    test("teamsWyIdCareerGet", () => {
        const wyId = "wyId_example";
        const fetch = "fetch_example";
        const details = "details_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdCareerGet(wyId, fetch, details, authorization, {})).resolves.toBe(null);
    });
    test("teamsWyIdFixturesGet", () => {
        const wyId = "wyId_example";
        const toDate = "toDate_example";
        const fromDate = "fromDate_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdFixturesGet(wyId, toDate, fromDate, authorization, {})).resolves.toBe(null);
    });
    test("teamsWyIdGet", () => {
        const wyId = "wyId_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdGet(wyId, authorization, {})).resolves.toBe(null);
    });
    test("teamsWyIdMatchesGet", () => {
        const wyId = "wyId_example";
        const seasonId = "seasonId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdMatchesGet(wyId, seasonId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("teamsWyIdSquadGet", () => {
        const wyId = "wyId_example";
        const seasonId = "seasonId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdSquadGet(wyId, seasonId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("teamsWyIdTransfersGet", () => {
        const wyId = "wyId_example";
        const toDate = "toDate_example";
        const details = "details_example";
        const fromDate = "fromDate_example";
        const authorization = "authorization_example";
        return expect(instance.teamsWyIdTransfersGet(wyId, toDate, details, fromDate, authorization, {})).resolves.toBe(null);
    });
});
describe("VideosApi", () => {
    let instance;
    beforeEach(function () {
        instance = new api.VideosApi(config);
    });
    test("videosMatchIdGet", () => {
        const matchId = "matchId_example";
        const start = "start_example";
        const fetch = "fetch_example";
        const quality = "quality_example";
        const authorization = "authorization_example";
        const end = "end_example";
        return expect(instance.videosMatchIdGet(matchId, start, fetch, quality, authorization, end, {})).resolves.toBe(null);
    });
    test("videosMatchIdOffsetsGet", () => {
        const matchId = "matchId_example";
        const fetch = "fetch_example";
        const authorization = "authorization_example";
        return expect(instance.videosMatchIdOffsetsGet(matchId, fetch, authorization, {})).resolves.toBe(null);
    });
    test("videosMatchIdQualitiesGet", () => {
        const matchId = "matchId_example";
        const authorization = "authorization_example";
        return expect(instance.videosMatchIdQualitiesGet(matchId, authorization, {})).resolves.toBe(null);
    });
});
