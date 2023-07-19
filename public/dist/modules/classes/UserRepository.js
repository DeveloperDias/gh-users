class UserRepository {
    id;
    name;
    description;
    visibility;
    language;
    forks_count;
    stargazers_count;
    html_url;
    constructor(id, name, description, visibility, language, forks_count, stargazers_count, html_url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.visibility = visibility;
        this.language = language;
        this.forks_count = forks_count;
        this.stargazers_count = stargazers_count;
        this.html_url = html_url;
    }
}
export default UserRepository;
