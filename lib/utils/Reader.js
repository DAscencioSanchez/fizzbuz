const fs = require("fs");

class Reader {
    static readJsonFile(file) {
        const rawdata = fs.readFileSync(file);
        const explorers = JSON.parse(rawdata); //lista de explorers del archivo json
        return explorers
    }
}

module.exports = Reader