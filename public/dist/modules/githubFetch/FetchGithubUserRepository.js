async function FetchGithubUserRepository(username) {
    return await fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json());
}
export default FetchGithubUserRepository;
