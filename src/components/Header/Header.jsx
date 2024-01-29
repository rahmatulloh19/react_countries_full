import { useContext } from "react";
import { Link } from "react-router-dom";
import { langContext } from "../../context/langContext";
import { useTranslation } from "react-i18next";

function Header() {
	const { t, i18n } = useTranslation();

	if (localStorage.getItem("mode")) {
		document.body.classList.add("dark");
	}
	function addDark() {
		document.body.classList.add("dark");
		localStorage.setItem("mode", "dark");
	}

	function removeDark() {
		document.body.classList.remove("dark");
		localStorage.removeItem("mode");
	}

	const { setLang } = useContext(langContext);
	const handleChange = (evt) => {
		setLang(evt.target.value);
		localStorage.setItem("lang", evt.target.value);
		i18n.changeLanguage(evt.target.value);
	};

	return (
		<header className="site-header py-7.5 md:py-6 box-shadow dark:bg-bg-onDark">
			<div className="container">
				<div className="site-header__inner flex justify-between items-center">
					<Link
						className="site-logo text-sm font-extrabold md:text-2xl md:leading-normal text-text-onLight dark:text-text-onDark"
						to="./">
						{t("header.title")}
					</Link>

					<div className="wrapper flex items-center gap-4">
						<select
							className="bg-transparent font-extrabold  md:leading-normal text-text-onLight dark:text-text-onDark"
							defaultValue={localStorage.getItem("lang") || "en"}
							onChange={handleChange}>
							<option className="dark:bg-bg-onDark" value="en">
								en
							</option>
							<option className="dark:bg-bg-onDark" value="ru">
								ru
							</option>
							<option className="dark:bg-bg-onDark" value="uz">
								uz
							</option>
						</select>
						<button
							className="site-header__mode text-xs leading-normal md:text-base md:leading-normal font-semibold text-text-onLight flex justify-center gap-x-2 items-end md:items-stretch dark:text-text-onDark"
							type="button"
							onClick={() => {
								document.body.classList.contains("dark") ? removeDark() : addDark();
							}}>
							{t("header.modeBtn")}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
