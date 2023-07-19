// IMPORT FETCH
import FetchGithubUser from "./modules/githubFetch/FetchGithubUser.js";
import FetchGithubUserRepository from "./modules/githubFetch/FetchGithubUserRepository.js";

// IMPORT CLASSES
import GithubUser from "./modules/classes/User.js";
import UserRepository from "./modules/classes/UserRepository.js";

// IMPORT RENDER FUNCTIONS
import renderUser from "./modules/renders/renderGithubUser.js";
import renderWarn from "./modules/renders/renderWarn.js";
import renderGithubUserRepository from "./modules/renders/renderGithubRepository.js";

// IMPORT RESETS / REMOVE
import resetUserPage from "./modules/renders/resetPage.js";

const users: GithubUser[] = [];

async function searchUser(ev: Event) {
  ev.preventDefault();
  resetUserPage();
  const username = document.querySelector("#username") as HTMLInputElement;
  const myUser: string = "DeveloperDias";

  const userResponse = FetchGithubUser(
    username.value !== "" ? username.value : myUser
  );
  const repoResponse = FetchGithubUserRepository(
    username.value !== "" ? username.value : myUser
  );

  userResponse
    .then(async (userData) => {
      if (userData.message !== "Not Found") {
        const newUser: GithubUser = new GithubUser(
          userData.name,
          userData.id,
          userData.login,
          userData.repos_url,
          userData.html_url,
          userData.public_repos,
          userData.avatar_url,
          userData.followers,
          userData.following,
          userData.bio
        );
        console.log(userData);
        renderUser(newUser);
      } else renderWarn();
    })
    .then(() => {
      repoResponse.then((repoData) => {
        if (repoData !== null && Array.isArray(repoData)) {
          repoData.map((repo) => {
            const newRepository: UserRepository = new UserRepository(
              repo.id,
              repo.name,
              repo.description,
              repo.visibility,
              repo.language,
              repo.forks_count,
              repo.stargazers_count,
              repo.html_url
            );

            renderGithubUserRepository(newRepository);
          });
        }
      });
    });
}

document.querySelector("form").addEventListener("submit", searchUser);
// document.addEventListener("DOMContentLoaded", searchUser);
