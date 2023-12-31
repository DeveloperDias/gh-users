import languageVerify from "../modules/languageVerify.js";
function renderGithubUserRepository(repo) {
    // REPOSITORIES-CONTAINER
    const repositoriesContainer = document.querySelector(".repositories-container");
    // REPOSITORY DIV --------------
    const repository = document.createElement("div");
    repository.classList.add("repository");
    repository.id = `${repo.id}`;
    // REPOSITORY HEADER DIV -------------
    const repositoryHeader = document.createElement("div");
    repositoryHeader.classList.add("repository-header");
    // -- Title
    const titleAnchor = document.createElement("a");
    titleAnchor.href = repo.html_url;
    titleAnchor.target = "_blank";
    const title = document.createElement("h3");
    title.textContent = repo.name;
    title.classList.add("repository-title");
    // -- Repository Reach Div
    const repositoryReach = document.createElement("div");
    repositoryReach.classList.add("repository-reach");
    // -- Star and fork counters
    const starContainer = document.createElement("div");
    starContainer.classList.add("star-container");
    const starImg = document.createElement("img");
    starImg.src = "./img/octicons/star.svg";
    starImg.classList.add("star-icon");
    const forkContainer = document.createElement("div");
    forkContainer.classList.add("fork-container");
    const forkImg = document.createElement("img");
    forkImg.src = "./img/octicons/fork.svg";
    forkImg.classList.add("fork-icon");
    const star = document.createElement("p");
    star.textContent = `${repo.stargazers_count}`;
    const fork = document.createElement("p");
    fork.textContent = `${repo.stargazers_count}`;
    // REPOSITORY BODY DIV --------------
    const repositoryBody = document.createElement("div");
    repositoryBody.classList.add("repository-body");
    // -- Repository description
    const description = document.createElement("p");
    description.classList.add("repository-description");
    description.textContent = repo.description;
    // REPOSITORY LANGUAGE DIV ------------
    const repositoryLanguage = document.createElement("div");
    repositoryLanguage.classList.add("repository-language");
    const repositoryLanguageSpan = document.createElement("span");
    repositoryLanguageSpan.classList.add("repository-language-span");
    const language = document.createElement("p");
    language.textContent = repo.language;
    // APPENDS
    starContainer.append(starImg, star);
    forkContainer.append(forkImg, fork);
    repositoryReach.append(starContainer, forkContainer);
    titleAnchor.appendChild(title);
    repositoryHeader.append(titleAnchor, repositoryReach);
    repositoryLanguage.append(repositoryLanguageSpan, language);
    repositoryBody.append(description, repositoryLanguage);
    repository.append(repositoryHeader, repositoryBody);
    repositoriesContainer.appendChild(repository);
    languageVerify(repo.language, repositoryLanguageSpan, repositoryLanguage);
}
export default renderGithubUserRepository;
