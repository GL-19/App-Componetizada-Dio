import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GithubProvider } from "./providers/GithubProvider";

function App() {
	return (
		<>
			<GlobalStyle />
			<GithubProvider>
				<Routes />
			</GithubProvider>
		</>
	);
}

export default App;
