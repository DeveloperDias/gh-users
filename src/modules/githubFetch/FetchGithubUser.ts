export default async function FetchGithubUser(username: string) {
  return await fetch(`https://api.github.com/users/${username}`).then((res) => res.json())
}
