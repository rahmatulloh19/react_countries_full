import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { SinglePage } from "./page";
import { useState } from "react";

function App() {
	const [inputValue, inputValueState] = useState("all");
	const [selectValue, selectValueState] = useState("");

	return (
		<>
			<Header />
			<main className="site-main">
				<Routes>
					<Route
						element={
							<Main
								inputValue={inputValue}
								inputValueState={inputValueState}
								selectValue={selectValue}
								selectValueState={selectValueState}
							/>
						}
						path="/"
					/>
					<Route
						element={<SinglePage inputValue={inputValue} selectValue={selectValue} />}
						path={`/country/:cca2`}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
