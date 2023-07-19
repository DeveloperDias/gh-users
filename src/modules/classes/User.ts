interface User {
  id: number;
  name: string;
  login: string;
}

class GithubUser implements User {
  name: string;
  id: number;
  login: string;
  reposUrl: string;
  htmlUrl: string;
  publicRepos: number;
  avatarUrl: string;
  followers: number;
  following: number;
  bio: string;

  constructor(
    name: string,
    id: number,
    login: string,
    reposUrl: string,
    htmlUrl: string,
    publicRepos: number,
    avatarUrl: string,
    followers: number,
    following: number,
    bio: string
  ) {
    this.name = name;
    this.id = id;
    this.login = login;
    this.reposUrl = reposUrl;
    this.htmlUrl = htmlUrl;
    this.publicRepos = publicRepos;
    this.avatarUrl = avatarUrl;
    this.followers = followers;
    this.following = following;
    this.bio = bio;
  }
}

export default GithubUser;
