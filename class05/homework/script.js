const button = document.getElementById("load-post-btn");
const status = document.getElementById("statusText");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    status.textContent = "Loading post...";
    output.innerHTML = "";

    setTimeout(() => {
        const postFetch = fetch("https://jsonplaceholder.typicode.com/posts/16");

        postFetch
            .then((response) => {
                return response.json();
            })

            .then((post) => {
                output.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">${post.title}</h2>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;

                status.textContent = "Post loaded successfully!";
            })

            .catch((error) => {
                status.textContent = "Failed to load.";
                console.log(error);
            });
    }, 2000);
});