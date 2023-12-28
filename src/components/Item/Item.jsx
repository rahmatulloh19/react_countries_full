function Item({ flags, name, population, region, capital }) {
	return (
		<li className="list__items bg-bg-items box-shadow rounded-5 dark:bg-bg-onDark">
			<img className="w-full rounded-t-5" src={flags.svg} alt={name.common + " flag's"} />
			<div className="list__items-inner pb-12 p-6">
				<h3 className="text-lg mb-4 text-text-onLight dark:text-text-onDark">{name.common}</h3>
				<p className="text-sm leading-4 font-extralight mb-2 text-text-onLight dark:text-text-onDark">
					<strong className="font-semibold">Population:</strong> {population}
				</p>
				{capital ? (
					<p className="text-sm leading-4 font-extralight mb-2 text-text-onLight dark:text-text-onDark">
						<strong className="font-semibold">Region:</strong>
						{capital[0]}
					</p>
				) : (
					""
				)}
				<p className="text-sm leading-4 font-extralight text-text-onLight dark:text-text-onDark">
					<strong className="font-semibold">Capital:</strong> {region}
				</p>
			</div>
		</li>
	);
}

export default Item;
