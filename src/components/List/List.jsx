import { useEffect, useRef, useState } from "react";
import Item from "../Item/Item";
import { render } from "react-dom";

function List({ data }) {
	let [Data, SetData] = useState([]);

	useEffect(() => {
		if (data === "all" || data === "") {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((countries) => {
					SetData(countries);
				});
		} else {
			fetch(`https://restcountries.com/v3.1/name/${data}`)
				.then((res) => res.json())
				.then((countries) => {
					SetData(countries);
				});
		}
	}, [Data]);

	return (
		<section className="site-main__list list">
			<div className="container">
				<ul className="list__list grid justify-between flex-wrap min-[651px]:grid-cols-2 min-[990px]:grid-cols-3 min-[1329px]:grid-cols-4 gap-75px">
					{Data.map((item, index) => {
						return <Item {...item} key={index} />;
					})}
				</ul>
			</div>
		</section>
	);
}

export default List;
