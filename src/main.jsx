import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./context/langContext.jsx";
import { InputProvider } from "./context/inputContext.jsx";
import { SelectProvider } from "./context/selectContext.jsx";
import "./i18n";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<InputProvider>
				<LangProvider>
					<SelectProvider>
						<App />
					</SelectProvider>
				</LangProvider>
			</InputProvider>
		</BrowserRouter>
	</React.StrictMode>
);
