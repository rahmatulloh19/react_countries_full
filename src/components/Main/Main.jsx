import { useEffect, useRef } from "react";
import List from "../List/List";
import Search from "../Search/Search";
import { useState } from "react";

function Main() {
	const [inputValue, inputValueState] = useState("all");

	// useEffect(() => {}, []);

	return (
		<main className="site-main">
			<Search inputValue={inputValue} inputValueState={inputValueState} />
			<List data={inputValue} />
		</main>
	);
}

export default Main;
