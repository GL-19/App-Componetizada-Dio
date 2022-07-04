import axios, { AxiosResponse } from "axios";

export const api = axios.create({
	baseURL: "https://api.github.com/users",
});

export async function getUser(userLogin: string): Promise<AxiosResponse> {
	return api.get(`${userLogin}`);
}

export async function getRepositories(
	userLogin: string,
	page: number = 1
): Promise<AxiosResponse> {
	return api.get(`${userLogin}/repos?per_page=20&page=${page}`);
}
