import verifyBio from "../verifyBio.js";
async function renderUser(user) {
    // REPOSITORY CONTAINER
    const repositoryContainer = document.createElement("div");
    repositoryContainer.classList.add("repositories-container");
    // USER CONTAINER
    const userContainer = document.createElement("div");
    userContainer.classList.add("user-container");
    // USER FLEX
    const userFlex = document.createElement("div");
    userFlex.classList.add("user-flex");
    //////////////////////////////////////////
    // USER INFO
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add("user-info");
    const userImgAnchor = document.createElement("a");
    userImgAnchor.href = user.htmlUrl;
    userImgAnchor.target = "_blank";
    const userImg = document.createElement("img");
    userImg.classList.add("user-image");
    // Imagem inicial
    const placeholderImg = document.createElement("img");
    placeholderImg.src = "../public/img/github-mark/github-mark-white.png";
    placeholderImg.classList.add("user-image", "user-image-load");
    userImg.onload = function () {
        // Substituir a imagem inicial pela imagem do usuário quando ela carregar
        userImgAnchor.removeChild(placeholderImg);
        userImgAnchor.appendChild(userImg);
    };
    userImg.src = user.avatarUrl;
    const name = document.createElement("h2");
    name.textContent = user.name;
    const login = document.createElement("h3");
    login.textContent = user.login;
    //////////////////////////////////////////
    // USER ASIDE
    const userAsideContainer = document.createElement("div");
    userAsideContainer.classList.add("user-aside");
    const userId = document.createElement("p");
    userId.classList.add("user-id");
    userId.textContent = `ID: ${user.id}`;
    // USER FOLLOWING
    const userFollowContainer = document.createElement("div");
    userFollowContainer.classList.add("user-follow");
    const followers = document.createElement("p");
    followers.textContent = `Followers: ${user.followers}`;
    const spanDecoration = document.createElement("span");
    spanDecoration.classList.add("follow-space");
    const following = document.createElement("p");
    following.textContent = `following: ${user.following}`;
    // USER BIO
    const userBioContainer = document.createElement("div");
    userBioContainer.classList.add("user-bio");
    const bio = document.createElement("p");
    // if (user.bio !== null) bio.textContent = `${user.bio}`;
    // else bio.textContent = "Empty Biographic";
    // REPOSITORIES
    const userRepositoriesContainer = document.createElement("div");
    userRepositoriesContainer.classList.add("user-repositories");
    const publicRepositories = document.createElement("p");
    publicRepositories.textContent = `Repositories: ${user.publicRepos}`;
    //////////////////////////////////////////
    // APPENDS
    userImgAnchor.appendChild(placeholderImg);
    userInfoContainer.append(userImgAnchor, name, login);
    userFollowContainer.append(followers, following);
    userBioContainer.appendChild(bio);
    userRepositoriesContainer.append(publicRepositories);
    userAsideContainer.append(userId, userFollowContainer, userBioContainer, userRepositoriesContainer);
    userFlex.append(userInfoContainer, userAsideContainer);
    verifyBio(user, bio, userBioContainer);
    userContainer.append(userFlex, repositoryContainer);
    document.querySelector("main").appendChild(userContainer);
}
export default renderUser;
