import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { SinglePage } from "./page";

function App() {
	return (
		<>
			<Header />
			<main className="site-main">
				<Routes>
					<Route element={<Main />} path="/" />
					<Route element={<SinglePage />} path={`/country/:cca2`} />
				</Routes>
			</main>
		</>
	);
}

export default App;
