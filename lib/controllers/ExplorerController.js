const { filterByMission } = require('./../services/ExplorerService')
const ExplorerService = require('./../services/ExplorerService')
const FizzBuzzService = require('./../services/FizzBuzzService')
const Reader = require('./../utils/Reader')

class ExplorerController {
    
    static getExplorersByMission(mission) {
        explorers = Reader.readJsonFile("explorers.json")
        return filterByMission(explorers,mission)
    }

    static getExplorersUsernamesByMission(mission) {
        explorers = Reader.readJsonFile("explorers.json")
        return getExplorersUsernamesByMission(explorers,mission)
    }

    static getExplorersAmountByMission(mission) {
        explorers = Reader.readJsonFile("explorers.json")
        return  getAmountOfExplorersByMission(explorers,mission)
    }


}

module.exports = ExplorerController