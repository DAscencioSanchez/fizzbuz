const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzBuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers,mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);
    }

    static getFizzBuzzValidation(score) {
        const validationInNumber = FizzBuzzService.applyValidationInNumber(score);
        return validationInNumber;
    }


}

module.exports = ExplorerController;