const fs = require("fs");
const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/ExplorerService')

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json"); // esto refrea la lista de explorers
//console.log(explorers)

// Part 2: Get the explorers in a mission
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
console.log(explorersInNode)

//Part 3: Get number of explorers in a mission
const amountExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log(amountExplorersByMission)

//Part 4: Get number of explorers in a mission
const ExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(ExplorersUsernamesByMission)