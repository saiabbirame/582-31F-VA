const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const postContent = document.getElementById("post-content");

loadPostBtn.addEventListener("click", () => {
    status.textContent = "Loading post...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then((post) => {
            postContent.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            status.textContent = "Post loaded successfully!";
        })
        .catch((error) => {
            status.textContent = `Failed to load post: ${error.message}`;
        });
});