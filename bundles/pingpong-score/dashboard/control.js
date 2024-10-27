// Default values for team names and scores
const defaultData = {
    team1: { name: "Team 1", score: 0 },
    team2: { name: "Team 2", score: 0 }
};

// Function to load stored data
function loadInitialData() {
    nodecg.readReplicant('team1Name', value => {
        document.getElementById('team1-name').value = value ?? defaultData.team1.name;
    });
    nodecg.readReplicant('team1Score', value => {
        document.getElementById('team1-score').value = value ?? defaultData.team1.score;
    });
    nodecg.readReplicant('team2Name', value => {
        document.getElementById('team2-name').value = value ?? defaultData.team2.name;
    });
    nodecg.readReplicant('team2Score', value => {
        document.getElementById('team2-score').value = value ?? defaultData.team2.score;
    });
}

// Function to update scores
document.getElementById('update').addEventListener('click', () => {
    const newScore = {
        team1: {
            name: document.getElementById('team1-name').value,
            score: parseInt(document.getElementById('team1-score').value)
        },
        team2: {
            name: document.getElementById('team2-name').value,
            score: parseInt(document.getElementById('team2-score').value)
        }
    };

    // Update NodeCG replicant with new data
    nodecg.sendMessage('updateScore', newScore);
});

// Reset score to zero (keep team names)
document.getElementById('reset-score').addEventListener('click', () => {
    document.getElementById('team1-score').value = 0;
    document.getElementById('team2-score').value = 0;

    const resetScoreData = {
        team1: { name: document.getElementById('team1-name').value, score: 0 },
        team2: { name: document.getElementById('team2-name').value, score: 0 }
    };

    // Send reset score to the scoreboard
    nodecg.sendMessage('updateScore', resetScoreData);
});

// Reset everything to default (both names and scores)
document.getElementById('reset-all').addEventListener('click', () => {
    document.getElementById('team1-name').value = defaultData.team1.name;
    document.getElementById('team1-score').value = defaultData.team1.score;
    document.getElementById('team2-name').value = defaultData.team2.name;
    document.getElementById('team2-score').value = defaultData.team2.score;

    // Send reset data to the scoreboard
    nodecg.sendMessage('updateScore', defaultData);
});

// Load initial data when the control page loads
window.addEventListener('load', loadInitialData);
