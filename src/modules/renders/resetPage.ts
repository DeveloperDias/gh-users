function resetUserPage() {
  const container = document.querySelector(".user-container") as HTMLDivElement;
  if (container) container.remove();
}

export default resetUserPage;
