import axios from "axios";

const path = "https://api.github.com/users";

export function getRepos(user, page = 1) {
	return axios.get(`${path}/${user}/repos?per_page=20&page=${page}`);
}

export function getUser(user) {
	return axios.get(`${path}/${user}`);
}
