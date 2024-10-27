// Default values for team names and scores
const defaultData = {
  team1: { name: "Team 1", score: 0 },
  team2: { name: "Team 2", score: 0 }
};

// Retrieve and display score updates from NodeCG Replicants.
const team1Name = nodecg.Replicant('team1Name', { defaultValue: defaultData.team1.name });
const team2Name = nodecg.Replicant('team2Name', { defaultValue: defaultData.team2.name });
const team1Score = nodecg.Replicant('team1Score', { defaultValue: defaultData.team1.score });
const team2Score = nodecg.Replicant('team2Score', { defaultValue: defaultData.team2.score });

// Update team names and scores on the page
team1Name.on('change', newValue => {
  document.getElementById('team1-name').innerText = newValue;
});

team2Name.on('change', newValue => {
  document.getElementById('team2-name').innerText = newValue;
});

team1Score.on('change', newValue => {
  document.getElementById('team1-score').innerText = newValue;
});

team2Score.on('change', newValue => {
  document.getElementById('team2-score').innerText = newValue;
});
