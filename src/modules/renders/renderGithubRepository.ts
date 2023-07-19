import UserRepository from "../classes/UserRepository.js";
import languageVerify from "../languageVerify.js";

function renderGithubUserRepository(repo: UserRepository) {
  // REPOSITORIES-CONTAINER
  const repositoriesContainer = document.querySelector(
    ".repositories-container"
  );

  // REPOSITORY DIV --------------
  const repository = document.createElement("div");
  repository.classList.add("repository");
  repository.id = `${repo.id}`;

  // REPOSITORY HEADER DIV -------------
  const repositoryHeader = document.createElement("div");
  repositoryHeader.classList.add("repository-header");

  // -- Title
  const titleAnchor = document.createElement("a") as HTMLAnchorElement;
  titleAnchor.href = repo.html_url;
  titleAnchor.target = "_blank";

  const title = document.createElement("h3");
  title.textContent = repo.name;
  title.classList.add("repository-title");

  // REPOSITORY BODY DIV --------------
  const repositoryBody = document.createElement("div");
  repositoryBody.classList.add("repository-body");
  // -- Repository description
  const description = document.createElement("p");
  description.classList.add("repository-description");
  description.textContent = repo.description;

  // REPOSITORY FOOTER DIV ----------------
  const repositoryFooter = document.createElement("div");
  repositoryFooter.classList.add("repository-footer");

  // -- Repository Reach Div
  const repositoryReach = document.createElement("div");
  repositoryReach.classList.add("repository-reach");
  // -- Star and fork counters
  const starContainer = document.createElement("div");
  starContainer.classList.add("star-container");
  const starImg = document.createElement("img") as HTMLImageElement;
  starImg.src = "./public/img/octicons/star.svg";
  starImg.classList.add("star-icon");

  const forkContainer = document.createElement("div");
  forkContainer.classList.add("fork-container");
  const forkImg = document.createElement("img") as HTMLImageElement;
  forkImg.src = "./public/img/octicons/fork.svg";
  forkImg.classList.add("fork-icon");

  const star = document.createElement("p");
  star.textContent = `${repo.stargazers_count}`;

  const fork = document.createElement("p");
  fork.textContent = `${repo.stargazers_count}`;

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

  repositoryLanguage.append(repositoryLanguageSpan, language);

  repositoryHeader.append(titleAnchor);
  repositoryBody.append(description);
  repositoryFooter.append(repositoryLanguage, repositoryReach);
  repository.append(repositoryHeader, repositoryBody, repositoryFooter);
  repositoriesContainer.appendChild(repository);

  languageVerify(repo.language, repositoryLanguageSpan, repositoryLanguage);
}

export default renderGithubUserRepository;
