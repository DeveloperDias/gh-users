function renderWarn() {
  const userContainer = document.createElement("div");
  userContainer.classList.add("user-container");
  const warn = document.createElement("h1");
  warn.classList.add("warn-message");
  warn.textContent = "User Not Found";

  userContainer.appendChild(warn);
  document.querySelector("main").appendChild(userContainer);
}

export default renderWarn;
