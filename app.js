const fs = require("fs");
const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/ExplorerService')

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json"); // esto refrea la lista de explorers
//console.log(explorers)

// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
console.log(explorersInNode)
