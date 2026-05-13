const loadButton = document.getElementById("load-user-btn");
const clearButton = document.getElementById("clear-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadButton.addEventListener("click", () => {
    status.textContent = "Loading user...";

    const userFetch = fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    userFetch
    .then((response) => {
        console.log(response);

        if (response.ok == false) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })

    .then((user) => {
        output.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">
                        ${user.name}
                    </h2>
                    
                    <p class="card-text">
                        <strong>Email:</strong> ${user.email}
                    </p>

                    <p class="card-text">
                        <strong>Phone:</strong> ${user.phone}
                    </p>

                    <p class="card-text">
                        <strong>City:</strong> ${user.address.city}
                    </p>

                    <p class="card-text">
                        <strong>Company:</strong> ${user.company.name}
                    </p>

                    <p class="card-text">
                        <strong>Website:</strong> ${user.website}
                    </p>
                </div>
            </div>
        `;

        status.textContent = "User Loaded Successfully!"
})

    .catch((error) => {
        status.textContent = "Failed to load user"

        output.innerHTML = `
            <div class="alert alert-danger">
                Could not load user.
            </div
        `;

        console.log(error);
    });
});

clearButton.addEventListener("click", () => {
    status.textContent = "Ready";
    output.innerHTML = "";
});