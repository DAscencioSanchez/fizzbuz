const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests for ExplorerService.js", () => {

    test("1.Get the explorers in a mission", () => {
        const explorers = [ {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "java",
            
        }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toStrictEqual([{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
        }]);
    
    });

});