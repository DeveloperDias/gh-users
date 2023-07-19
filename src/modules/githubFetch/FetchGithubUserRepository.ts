import GithubUser from "../classes/User.js";

async function FetchGithubUserRepository(username: string) {
  return await fetch(`https://api.github.com/users/${username}/repos`).then(
    (res) => res.json()
  );
}

export default FetchGithubUserRepository;
