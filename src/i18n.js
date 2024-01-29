import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./lang";
import { lang } from "./lang";

i18n.use(initReactI18next).init({
	debug: true,
	lng: localStorage.getItem("lang") || "en",
	fallbackLng: ["en", "ru", "uz"],
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: { ...lang.en },
		},
		ru: {
			translation: { ...lang.ru },
		},
		uz: {
			translation: { ...lang.uz },
		},
	},
});

export default i18n;
