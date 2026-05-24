export function createUserCard(user) {
  const article = document.createElement("article");
  article.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
  `;
  return article;
}

export function renderUsers(users, container) {
  container.innerHTML = "";

  users.slice(0, 5).forEach((user) => {
    const userCard = createUserCard(user);
    container.appendChild(userCard);
  });
}

export function clearUsers(container) {
  container.innerHTML = "";
}