const postIdInput = document.getElementById("post-id-input");
const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

function validatePostId(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Post ID must be a positive number");
  }
}

try {
  validatePostId(-1);
} catch (error) {
  console.log(error.message);
}

loadPostBtn.addEventListener("click", () => {
  status.textContent = "Loading post...";
  output.innerHTML = "";

  

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      output.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      status.textContent = "Post loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load post: ${error.message}`;
    });
});