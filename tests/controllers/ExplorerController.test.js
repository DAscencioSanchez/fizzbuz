const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require('./../../lib/services/ExplorerService')
const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe("Tests for ExplorerController.js", () => {

    test("1. A test for getExplorersByMission(mission)", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const manualExplorersByMission = ExplorerService.filterByMission(explorers, "node");
        const ExplorersByMission = ExplorerController.getExplorersByMission("node")
        expect(ExplorersByMission).toStrictEqual(manualExplorersByMission);
    });

    test("2. A test for getExplorersUsernamesByMission(mission)", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const manualExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        const explorersUsernmesByMission = ExplorerController.getExplorersUsernamesByMission("java")
        expect(explorersUsernmesByMission).toStrictEqual(manualExplorersUsernamesByMission);
    });

    test("3. A test for getExplorersAmountByMission(mission)", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const manualAmountExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        const AmountExplorersByMission = ExplorerController.getExplorersAmountByMission("java")
        expect(AmountExplorersByMission).toStrictEqual(manualAmountExplorersByMission);
    });


});