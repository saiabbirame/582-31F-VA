import { fetchTournaments, fetchRegistrations } from "./api.js";
import { Tournament } from "./tournament.js";
import { setStatus, renderTournaments, renderRegistrations, clearDashboard } from "./ui.js";

const loadTournamentsBtn = document.getElementById("load-tournaments-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const tournamentsContainer = document.getElementById("tournaments-container");
const registrationsContainer = document.getElementById("registrations-container");

let tournaments = [];

loadTournamentsBtn.addEventListener("click", () => {
    setStatus(status, "Loading tournaments...", "warning");

    tournamentsContainer.innerHTML = "";   
    registrationsContainer.innerHTML = "";

    fetchTournaments()
        .then((data) => { 
            tournaments = [];
            for (let i = 0; i < data.length; i++) {
                tournaments.push(Tournament.fromObject(data[i]));
            }

            renderTournaments(tournaments, tournamentsContainer);

            setStatus(status, "Tournaments loaded successfully!", "success");
        })
        .catch((error) => {
            setStatus(status, `Failed to load tournaments: ${error.message}`, "danger");
        });
})

clearBtn.addEventListener("click", () => {
    clearDashboard(tournamentsContainer, registrationsContainer);

    setStatus(status, "Dashboard cleared", "secondary");
});

tournamentsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-registrations-btn")) {
        const tournamentId = Number(event.target.dataset.id);

        let selectedTournament = null;

        for (let i = 0; i < tournaments.length; i++) {
            if (tournaments[i].id === tournamentId) {
                selectedTournament = tournaments[i];
            }
        }

        registrationsContainer.innerHTML = `
            <div class="alert alert-warning">Loading registrations...</div>
        `;

        fetchRegistrations()
            .then((registrations) => {
                const tournamentRegistrations = registrations.filter((registration) => {
                    return registration.tournamentId === tournamentId;
                });

                renderRegistrations(tournamentRegistrations, selectedTournament, registrationsContainer);
            })
            .catch((error) => {
                registrationsContainer.innerHTML = `
                    <div class="alert alert-danger">Failed to load registrations: ${error.message}</div>
                `;
            });
    }
});