const loadUsersBtn = document.getElementById("load-users-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const usersRow = document.getElementById("users-row");

function setStatus(message, type) {
    status.textContent = message;
    status.className = `alert alert-${type}`;
}

loadUsersBtn.addEventListener("click", () => {
    setStatus("Loading users...", "warning");

    usersRow.innerHTML = "";

    const userFetch = fetch("https://jsonplaceholder.typicode.com/users");

    userFetch
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((users) => {
            for (let i = 0; i < 5; i++) {
                usersRow.innerHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h2 class="card-title">${users[i].name}</h2>

                                <p><strong>Email:</strong> ${users[i].email}</p>

                                <p><strong>Phone:</strong> ${users[i].phone}</p>

                                <p><strong>City:</strong> ${users[i].address.city}</p>

                                <p><strong>Company:</strong> ${users[i].company.name}</p>

                                <button class="btn btn-outline-primary">
                                    Load Posts
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }

            setStatus("Users loaded successfully!", "success");
        })
        .catch((error) => {
            setStatus(`Failed to load users: ${error.message}`, "danger");
        });
});