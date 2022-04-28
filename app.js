const fs = require("fs");
const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/ExplorerService')
const FizzBuzzService = require('./lib/services/FizzBuzzService')

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json"); // esto refrea la lista de explorers
//console.log(explorers)

// Part 2: Get the explorers in a mission
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
//console.log(explorersInNode)

//Part 3: Get number of explorers in a mission
const amountExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//console.log(amountExplorersByMission)

//Part 4: Get number of explorers in a mission
const ExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
//console.log(ExplorersUsernamesByMission)

// Part 5: Get a list of the explorers in node, if the score is divisible by 5 and 3, 
//set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik 
//and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, 
// otherwise set the property trick and the score value.

const explorer1 = {name: 'Explorer1', score:1}
const validationExplorer1 = FizzBuzzService.applyValidationInExplorer(explorer1)
console.log(validationExplorer1) // { name: 'Explorer1', score: 1, trick: 1 }

const explorer3 = {name: 'Explorer3', score:3}
const validationExplorer3 = FizzBuzzService.applyValidationInExplorer(explorer3)
console.log(validationExplorer3) // { name: 'Explorer3', score: 3, trick: 'FIZZ' }

const explorer5 = {name: 'Explorer5', score:5}
const validationExplorer5 = FizzBuzzService.applyValidationInExplorer(explorer5)
console.log(validationExplorer5) // { name: 'Explorer5', score: 5, trick: 'BUZZ' }

const explorer15 = {name: 'Explorer15', score:15}
const validationExplorer15 = FizzBuzzService.applyValidationInExplorer(explorer15)
console.log(validationExplorer15) // { name: 'Explorer15', score: 15, trick: 'FIZZBUZZ' }



