import { useEffect, useState } from "react";
import Item from "../Item/Item";

function List({ inputValue, selectValue }) {
	let [Data, SetData] = useState();

	useEffect(() => {
		if (inputValue === "all" || inputValue === "") {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((countries) => {
					SetData(countries);
				});
		} else {
			fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
				.then((res) => res.json())
				.then((countries) => {
					SetData(countries);
				});
			return;
		}
	}, [inputValue]);

	useEffect(() => {
		if (selectValue) {
			fetch(`https://restcountries.com/v3.1/region/${selectValue}`)
				.then((res) => res.json())
				.then((countries) => {
					SetData(countries);
				});
		}
	}, [selectValue]);

	return (
		<section className="site-main__list list">
			<div className="container">
				{Array.isArray(Data) ? (
					<ul className="list__list grid justify-center flex-wrap min-[651px]:grid-cols-2 min-[990px]:grid-cols-3 min-[1329px]:grid-cols-4 gap-75px">
						{Data.map((item) => {
							return (
								<Item
									flags={item.flags}
									name={item.name}
									population={item.population}
									region={item.region}
									capital={item.capital}
									path={item.cca2}
									key={item.cca2}
								/>
							);
						})}
					</ul>
				) : (
					<h3 className="text-center text-2xl mt-10 text-text-onLight dark:text-text-onDark">
						Nothing is found
					</h3>
				)}
			</div>
		</section>
	);
}

export default List;
