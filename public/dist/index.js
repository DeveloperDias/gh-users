// IMPORT FETCH
import FetchGithubUser from "./modules/githubFetch/FetchGithubUser.js";
import FetchGithubUserRepository from "./modules/githubFetch/FetchGithubUserRepository.js";
// IMPORT CLASSES
import GithubUser from "./modules/classes/User.js";
import UserRepository from "./modules/classes/UserRepository.js";
// IMPORT RENDER FUNCTIONS
import renderGithubUser from "./modules/renders/renderGithubUser.js";
import renderWarn from "./modules/renders/renderWarn.js";
import renderGithubUserRepository from "./modules/renders/renderGithubRepository.js";
// IMPORT RESETS / REMOVE
import resetUserPage from "./modules/renders/resetPage.js";
let isRendering = false;
let currentUser = "";
async function searchUser(ev) {
    ev.preventDefault();
    const username = document.querySelector("#username");
    const myUser = "DeveloperDias";
    if (username.value === "")
        username.value = myUser;
    if (currentUser !== username.value) {
        if (!isRendering) {
            isRendering = true;
            resetUserPage();
            const userResponse = FetchGithubUser(username.value !== "" ? username.value : myUser);
            const repoResponse = FetchGithubUserRepository(username.value !== "" ? username.value : myUser);
            userResponse
                .then(async (userData) => {
                if (userData.message !== "Not Found") {
                    const newUser = new GithubUser(userData.name, userData.id, userData.login, userData.repos_url, userData.html_url, userData.public_repos, userData.avatar_url, userData.followers, userData.following, userData.bio);
                    currentUser = userData.login;
                    renderGithubUser(newUser);
                }
                else
                    renderWarn();
            })
                .then(() => {
                repoResponse.then((repoData) => {
                    const repos = [];
                    if (repoData !== null && Array.isArray(repoData)) {
                        repoData.map((repo) => {
                            const newRepository = new UserRepository(repo.id, repo.name, repo.description, repo.visibility, repo.language, repo.forks_count, repo.stargazers_count, repo.html_url);
                            repos.push(newRepository);
                        });
                        const reposMostStars = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
                        reposMostStars.map((rep) => renderGithubUserRepository(rep));
                    }
                });
            })
                .then(() => {
                isRendering = false;
            });
        }
    }
}
document.querySelector("form").addEventListener("submit", searchUser);
