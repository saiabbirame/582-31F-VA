// let's load all DOM
const loadUserBtn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

// add eventListener to button
loadUserBtn.addEventListener("click", () => {
    // first status update
    status.textContent = "Loading user...";
    output.innerHTML = "";

    // now let's fetch
    const userFetch = fetch("https://jsonplaceholder.typicode.com/users/7")
    // fetch resolves a Promise for us, and gives a Response object.

    userFetch.then(response => {
        // convert Response object to JSON
        console.log(response);

        if (response.ok == false) {
            // return an Error object
            // goes automaticallt to catch
            throw new Error (`HTTP error: ${response.status}`);
        }

        // return a Response object
        return response.json();
    })
    // update the output with username
    .then((data) => {
        output.innerHTML = `${data.username}`;

        status.textContent = "User loaded successfully!";
    })
    // By DEFAULT:
    // error here is only reserved for 500 level errors (Server errors)
    // unless we throw 
    .catch((error) => {
        status.textContent = "Failed to load user.";
        console.log(error);
    });
});