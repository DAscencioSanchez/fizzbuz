const fs = require("fs");
const Reader = require('./lib/utils/Reader')

// Part 1 Read json file ===========================

const explorers = Reader.readJsonFile("explorers1.json"); // esto refrea la lista de explorers
console.log(explorers)
// const rawdata = fs.readFileSync("explorers.json");
// const explorers = JSON.parse(rawdata); //lista de explorers del archivo json

// console.log("hey I'm here!!")
