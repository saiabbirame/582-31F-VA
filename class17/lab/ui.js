export function renderTeams(teams, container) {
    container.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
        const teamCard = document.createElement("team-card");

        teamCard.setAttribute("id", teams[i].id);
        teamCard.setAttribute("name", teams[i].name);
        teamCard.setAttribute("group", teams[i].group);
        teamCard.setAttribute("points", teams[i].points);
        teamCard.setAttribute("played", teams[i].played);
        teamCard.setAttribute("goal-difference", teams[i].goalDifference);

        container.appendChild(teamCard);
    }
}

export function clearDashboard(teamsContainer, detailsContainer) {
    teamsContainer.innerHTML = "";

    detailsContainer.innerHTML = `
        <p>No team selected yet.</p>
    `;
}

export function renderTeamDetails(team, detailsContainer) {
    detailsContainer = `
        <h3>${team.name}</h3>
        <p>Group: ${team.group}</p>
        <p>Points: ${team.points}</p>
        <p>Matches Played: ${team.played}</p>
        <p>Goal Difference: ${team.goalDifference}</p>
    `;
}