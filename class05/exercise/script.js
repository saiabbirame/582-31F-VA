// Ex 01

// fetch from https://jsonplaceholder.typicode.com/users

// addeventlistener to button to load the users
// update the DOM with the first 5 users as li elements.

const loadUserBtn = document.getElementById("load-user-btn");
const statusText = document.getElementById("status");
const output = document.getElementById("output");

loadUserBtn.addEventListener("click", () => {
    statusText.textContent = "Loading users...";
    output.innerHTML = "";

    const userFetch = fetch("https://jsonplaceholder.typicode.com/users")
        
        userFetch.then(response => {
            return response.json();
        })

        .then((data) => {
            let usersList = "<ul>";

            

            statusText.textContent = "Users loaded successfully!";
        })

        .catch((error) => {
            statusText.textContent = "Failed to load users.";
            console.log(error);
        });
});