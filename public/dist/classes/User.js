class GithubUser {
    name;
    id;
    login;
    reposUrl;
    htmlUrl;
    publicRepos;
    avatarUrl;
    followers;
    following;
    bio;
    constructor(name, id, login, reposUrl, htmlUrl, publicRepos, avatarUrl, followers, following, bio) {
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
