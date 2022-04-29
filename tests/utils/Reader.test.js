const fs = require("fs");
const Reader = require("./../../lib/utils/Reader");

describe("Tests for Reader.js", () => {

    test("1. A test for JSON file Reader", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const rawdata = fs.readFileSync("explorers.json");
        const manualReadExplorers = JSON.parse(rawdata);
        expect(explorers).toStrictEqual(manualReadExplorers);
    });

});