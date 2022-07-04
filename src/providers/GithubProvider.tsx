import { ReactNode } from "react";

interface GithubProviderProps {
	children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
	return { children };
}
