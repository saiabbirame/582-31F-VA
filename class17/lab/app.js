import { fetchTeams } from "./api.js";
import { Team } from "./team.js";
import "./team-card.js ";
import { renderTeams, clearDashboard, renderTeamDetails } from "./ui.js";

const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const teamsContainer = document.getElementById("teams-container");
const detailsContainer = document.getElementById("details-container");

let teams = [];

loadBtn.addEventListener("click", () => {
    status.textContent = "Loading teams...";

    fetchTeams()
        .then((data) => {
            teams = [];

            for (let i = 0; i < data.length; i++) {
                teams.push(Team.fromObject(data[i]));
            }

            renderTeams(teams, teamsContainer);

            status.textContent = "Teams loaded successfully!";
        })
        .catch((error) => {
            status.textContent = `Failed to load teams: ${error.message}`;
        });
});

clearBtn.addEventListener("click", () => {
    clearDashboard(teamsContainer, detailsContainer);

    teams = [];

    status.textContent = "Dashboard cleared!";
});

teamsContainer.addEventListener("team-selected", (event) => {
    renderTeamDetails(event.detail, detailsContainer);
});