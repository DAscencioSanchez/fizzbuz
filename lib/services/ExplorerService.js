class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission.length;
        
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);    
        return usernamesInMission;
    }
}

module.exports = ExplorerService;