import { createContext, useState } from "react";

export const inputContext = createContext();

export const InputProvider = ({ children }) => {
	const [inputValue, inputValueState] = useState("all");
	return (
		<inputContext.Provider value={{ inputValue, inputValueState }}>
			{children}
		</inputContext.Provider>
	);
};
