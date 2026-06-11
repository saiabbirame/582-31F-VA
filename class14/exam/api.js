export function fetchTournaments() {
    return fetch("./tournaments.json")
        .then((response) => {
            if (response.ok == false) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        });
}

export function fetchRegistrations() {
    return fetch("./registrations.json")
        .then((response) => {
            if (response.ok == false) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        });
}