import { Link } from "react-router-dom";

function Header() {
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

	return (
		<header className="site-header py-7.5 md:py-6 box-shadow dark:bg-bg-onDark">
			<div className="container">
				<div className="site-header__inner flex justify-between items-center">
					<Link
						className="site-logo text-sm font-extrabold md:text-2xl md:leading-normal text-text-onLight dark:text-text-onDark"
						to="./">
						Where in the world?
					</Link>

					<button
						className="site-header__mode text-xs leading-normal md:text-base md:leading-normal font-semibold text-text-onLight flex justify-center gap-x-2 items-end md:items-stretch dark:text-text-onDark"
						type="button"
						onClick={() => {
							document.body.classList.contains("dark") ? removeDark() : addDark();
						}}>
						Dark Mode
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
