import { createContext, useState } from "react";

export const langContext = createContext();

export const LangProvider = ({ children }) => {
	const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
	return <langContext.Provider value={{ lang, setLang }}>{children}</langContext.Provider>;
};
