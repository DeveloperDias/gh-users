interface repository {
  id: number;
  name: string;
  visibility: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  language: string;
  description: string;
}

class UserRepository implements repository {
  id: number;
  name: string;
  description: string;
  visibility: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;

  constructor(
    id: number,
    name: string,
    description: string,
    visibility: string,
    language: string,
    forks_count: number,
    stargazers_count: number,
    html_url: string
  ) {
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
