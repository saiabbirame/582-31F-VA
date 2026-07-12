export function renderArtists(artists, container) {
    container.innerHTML = "";

    for (let i = 0; i < artists.length; i++) {
        const artistCard = document.createElement("artist-card");

        artistCard.setAttribute("id", artists[i].id);
        artistCard.setAttribute("name", artists[i].name);
        artistCard.setAttribute("genre", artists[i].genre);
        artistCard.setAttribute("stage", artists[i].stage);
        artistCard.setAttribute("time", artists[i].time);
        artistCard.setAttribute("country", artists[i].country);
        artistCard.setAttribute("headliner", artists[i].headliner);

        container.appendChild(artistCard);
    }
}

export function clearDashboard(lineupContainer, detailsContainer) {
    lineupContainer.innerHTML = "";

    detailsContainer.innerHTML = `
        <p>No artist selected yet.</p>
    `;
}

export function renderArtistDetails(artist, detailsContainer) {
    detailsContainer.innerHTML = `
        <h3>${artist.name}</h3>
        <p>Genre: ${artist.genre}</p>
        <p>Stage: ${artist.stage}</p>
        <p>Time: ${artist.time}</p>
        <p>Country: ${artist.country}</p>
        <p>Headliner: ${artist.headliner ? "Yes" : "No"}</p>
    `;
}