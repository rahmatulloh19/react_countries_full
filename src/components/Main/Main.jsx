import List from "../List/List";
import Search from "../Search/Search";
import { useState } from "react";

function Main() {
	const [inputValue, inputValueState] = useState("all");
	const [selectValue, selectValueState] = useState("");

	return (
		<main className="site-main">
			<Search inputValueState={inputValueState} selectValueState={selectValueState} />
			<List inputValue={inputValue} selectValue={selectValue} />
		</main>
	);
}

export default Main;
