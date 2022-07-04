import axios from "axios";

const api = axios.create({
	baseURL: "https://api.github.com/users",
});

export function getRepos(user, page = 1) {
	return api.get(`${user}/repos?per_page=20&page=${page}`);
}

export function getUser(user) {
	return api.get(`${user}`);
}
