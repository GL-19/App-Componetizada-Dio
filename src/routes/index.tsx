import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, PageNotFound, SearchResult } from "../pages";

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
					<PageNotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
