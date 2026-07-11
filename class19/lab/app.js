import { fetchArtists } from "./api.js";
import { Artist } from "./artist.js";
import "./artist-card.js";
import { renderArtists, clearDashboard, renderArtistDetails } from "./ui.js";

const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const lineupContainer = document.getElementById("lineup-container");
const detailsContainer = document.getElementById("details-container");

let artists = [];

loadBtn.addEventListener("click", () => {
    status.textContent = "Loading lineup...";

    fetchArtists()
        .then((data) => {
            artists = [];

            for (let i = 0; i < data.length; i++) {
                artists.push(Artist.fromObject(data[i]));
            }

            renderArtists(artists, lineupContainer);

            status.textContent = "Lineup loaded successfully.";
        })
        .catch((error) => {
            status.textContent = `Failed to load lineup: ${error.message}`;
        });
});

clearBtn.addEventListener("click", () => {
    clearDashboard(lineupContainer, detailsContainer);

    artists = [];

    status.textContent = "Lineup cleared.";
});

lineupContainer.addEventListener("artist-selected", (event) => {
    renderArtistDetails(event.detail, detailsContainer);
});