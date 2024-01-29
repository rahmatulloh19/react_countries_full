import { createContext, useState } from "react";

export const selectContext = createContext();

export const SelectProvider = ({ children }) => {
	const [selectValue, selectValueState] = useState("");

	return (
		<selectContext.Provider value={{ selectValue, selectValueState }}>
			{children}
		</selectContext.Provider>
	);
};
