import { useRef } from "react";
import { regions } from "../../CONSTANTS";

function Search({ inputValue, inputValueState }) {
	const inputRef = useRef();

	return (
		<section className="site-main__search search pt-6 pb-8 md:py-12">
			<div className="container">
				<form className="search__form" onSubmit={(evt) => evt.preventDefault()}>
					<div className="search__wrapper flex flex-wrap justify-between gap-10">
						<label className="search__label flex items-center max-w-[480px] w-full dark:bg-bg-onDark rounded-5 pl-8 pr-6 dark:text-text-onDark bg-bg-items box-shadow">
							<button className="search__btn mr-6 w-5 h-5" type="submit"></button>
							<input
								className="search__input py-0.875 md:py-5 outline-none grow dark:bg-bg-onDark rounded-5 text-xs leading-5 md:text-sm"
								type="text"
								onChange={() => {
									inputValueState(inputRef.current.value.trim());
								}}
								ref={inputRef}
								placeholder="Search for a country..."
							/>
						</label>

						<select className="search__select py-0.875 pl-6 pr-5 appearance-none text-text-onLight bg-bg-items dark:bg-bg-onDark dark:text-text-onDark rounded-5 max-w-[200px] w-full outline-none box-shadow">
							<option value={false} disabled selected>
								Filter by Region
							</option>
							{regions.map((item, index) => {
								return (
									<option key={index} value={item.value} id={item.id}>
										{item.text}
									</option>
								);
							})}
						</select>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Search;
