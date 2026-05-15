const loadUsersBtn = document.getElementById("load-users-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const usersRow = document.getElementById("users-row");

function setStatus(message, type) {
    status.textContent = message;
    status.className = `alert alert-${type}`;
}

function clearDashboard() {
    usersRow.innerHTML = "";
    setStatus("Ready to load users.", "secondary");
}

function loadUsers() {
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
               renderUserCard(users[i]);
            }
            setStatus("Users loaded successfully!", "success");
        })
        .catch((error) => {
            setStatus(`Failed to load users: ${error.message}`, "danger");
        });
}

function renderUserCard(user) {
    usersRow.innerHTML += `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">${user.name}</h2>

                    <p><strong>Email:</strong> ${user.email}</p>

                    <p><strong>Phone:</strong> ${user.phone}</p>

                    <p><strong>City:</strong> ${user.address.city}</p>

                    <p><strong>Company:</strong> ${user.company.name}</p>

                    <button class="btn btn-outline-primary load-posts-btn" onclick="loadPostsForUser(${user.id})">
                        Load Posts
                    </button>

                    <div class="posts-container mt-3" id="posts-${user.id}">
                        <p>No posts loaded yet.</p>
                    </div> 
                </div>
            </div>
        </div>
    `;
}

function loadPostsForUser(userId) {
    const postsContainer = document.getElementById(`posts-${userId}`);
    
    postsContainer.innerHTML = "<p>Loading posts...</p>";

    const postsFetch = fetch("https://jsonplaceholder.typicode.com/posts");

    postsFetch
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((posts) => {
            const userPosts = posts.filter((post) => {
                return post.userId === userId;
            });

            postsContainer.innerHTML = "";

            for (let i = 0; i < 3; i++) {
                postsContainer.innerHTML += `
                    <div class="pt-2 mt-2">
                        <h3>${userPosts[i].title}</h3>
                        <p>${userPosts[i].body}</p>
                    </div>
                `;
            }
        })
        .catch((error) => {
            postsContainer.innerHTML = `<p>Failed to load posts: ${error.message}</p>`;
        });
}

loadUsersBtn.addEventListener("click", loadUsers);
clearBtn.addEventListener("click", clearDashboard);

