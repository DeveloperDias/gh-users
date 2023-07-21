function resetUserPage() {
    const containers = document.querySelectorAll(".user-container");
    containers.forEach((container) => {
        if (container)
            container.remove();
    });
}
export default resetUserPage;
