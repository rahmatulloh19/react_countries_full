import { useEffect } from "react";

function List({ data }) {
	useEffect(() => {
		if (data === "all") {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((countries) => {
					console.log(countries);
				});
		} else {
			fetch(`https://restcountries.com/v3.1/name/${data}`)
				.then((res) => res.json())
				.then((countries) => {
					console.log(countries);
				});
		}
	}, [data]);
	const smth = [{}];
	return (
		<section className="site-main__list list">
			<div className="container">
				<ul className="list__list"></ul>
			</div>
		</section>
	);
}

export default List;
