
const form = document.getElementById("team-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const namesInput = document.getElementById("names");
  const numTeamsInput = document.getElementById("num-teams");
  
  const names = namesInput.value.split(",");
  const numTeams = parseInt(numTeamsInput.value);
  
  const teams = createTeams(names, numTeams);
  
  const teamsTable = document.getElementById("teams-table");
  const tbody = teamsTable.querySelector("tbody");
  
  tbody.innerHTML = "";
  
  teams.forEach((team, index) => {
    const tr = document.createElement("tr");
    const tdTeamNumber = document.createElement("td");
    tdTeamNumber.textContent = index + 1;
    const tdTeamNames = document.createElement("td");
    tdTeamNames.textContent = team.join(", ");
    tr.appendChild(tdTeamNumber);
    tr.appendChild(tdTeamNames);
    tbody.appendChild(tr);
  });
});

function createTeams(names, numTeams) {
  const shuffledNames = names.sort(() => Math.random() - 0.5);
  const peoplePerTeam = Math.floor(shuffledNames.length / numTeams);
  console.log(peoplePerTeam)
  const teams = [];
  for (let i = 0; i < numTeams; i++) {
    const startIndex = i * peoplePerTeam;
    const endIndex = i === numTeams - 1 ? shuffledNames.length : (i + 1) * peoplePerTeam;
    const teamNames = shuffledNames.slice(startIndex, endIndex);
    teams.push(teamNames);
  }
  return teams;
}
