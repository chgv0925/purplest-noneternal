module.exports = function (nodecg) {
    // Default values for team names and scores
    const defaultData = {
        team1: { name: "Team 1", score: 0 },
        team2: { name: "Team 2", score: 0 }
    };

    // Define replicants for team names and scores
    const team1Name = nodecg.Replicant('team1Name', { defaultValue: defaultData.team1.name });
    const team2Name = nodecg.Replicant('team2Name', { defaultValue: defaultData.team2.name });
    const team1Score = nodecg.Replicant('team1Score', { defaultValue: defaultData.team1.score });
    const team2Score = nodecg.Replicant('team2Score', { defaultValue: defaultData.team2.score });

    nodecg.listenFor('updateScore', (newScore) => {
        team1Name.value = newScore.team1.name;
        team1Score.value = newScore.team1.score;
        team2Name.value = newScore.team2.name;
        team2Score.value = newScore.team2.score;
    });
};
