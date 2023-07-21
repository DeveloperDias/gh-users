function resetUserPage() {
  const containers = document.querySelectorAll(
    ".user-container"
  ) as NodeListOf<HTMLDivElement>;
  containers.forEach((container) => {
    if (container) container.remove();
  });
}

export default resetUserPage;
