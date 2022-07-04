import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SearchResult } from "../pages";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/search">
					<SearchResult />
				</Route>
				<Route path="*">
					<h1>Página não encontrada</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
