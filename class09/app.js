import { fetchUsers } from "./api.js";
import { renderUsers, clearUsers } from "./ui.js";

const loadUsersBtn = document.getElementById("load-users-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const usersContainer = document.getElementById("users-container");

loadUsersBtn.addEventListener("click", () => {
  status.textContent = "Loading users...";

  fetchUsers()
    .then((users) => {
      renderUsers(users, usersContainer);
      status.textContent = "Users loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load users: ${error.message}`;
    });
});

clearBtn.addEventListener("click", () => {
    clearUsers(usersContainer);

    status.textContent = "Users cleared.";
})