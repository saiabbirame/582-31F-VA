export function setStatus(status, message, type) {
    status.textContent = message;
    status.className = `alert alert-${type}`;
}

export function renderTournamentCard(tournament, tournamentsContainer) {
    tournamentsContainer.innerHTML += `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">${tournament.name}</h2>

                    <p>Game: ${tournament.game}</p>
                    <p>Entry Fee: ${tournament.entryFee}</p>
                    <p>Max Players: ${tournament.maxPlayers}</p>
                    <p>Registered Players: ${tournament.registeredPlayers}</p>
                    <p>Spots Left: ${tournament.spotsLeft}</p>
                    <p>Status: ${tournament.status}</p>

                    <button class="btn btn-outline-primary view-registrations-btn" data-id="${tournament.id}">View Registrations</button>
                </div>
            </div>
        </div>
    `;
}

export function renderTournaments(tournaments, tournamentsContainer) {
    tournamentsContainer.innerHTML = "";

    for (let i = 0; i < tournaments.length; i++) {
        renderTournamentCard(tournaments[i], tournamentsContainer);
    }
}

export function clearDashboard(tournamentsContainer, registrationsContainer) {
    tournamentsContainer.innerHTML = "";   
    registrationsContainer.innerHTML = "";
}

export function renderRegistrations(registrations, tournament, registrationsContainer) {
    registrationsContainer.innerHTML = "";

    if (registrations.length === 0) {
        registrationsContainer.innerHTML = `
            <div class="alert alert-warning">There were no registrations found for this tournament.</div>
        `;
        return;
    }

    const confirmedRegistrations = registrations.filter((registration) => {
        return registration.status === "confirmed";
    });

    const totalRevenue = confirmedRegistrations.length * tournament.entryFee;

    registrationsContainer.innerHTML += `
        <div class="alert alert-info">
            <h3>Details about ${tournament.name}</h3>
            <p>Total Registrations: ${registrations.length}</p>
            <p>Confirmed Players: ${confirmedRegistrations.length}</p>
            <p>Expected Revenue: ${totalRevenue}</p>
            <p>Spots Left: ${tournament.spotsLeft}</p>
        </div>
    `;

    for (let i = 0; i < registrations.length; i++) {
        registrationsContainer.innerHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h3>${registrations[i].playerName}</h3>
                    <p>GamerTag: ${registrations[i].gamerTag}</p>
                    <p>Ticket Type: ${registrations[i].ticketType}</p>
                    <p>Status: ${registrations[i].status}</p>
                </div>
            </div>
        `;
    }
}