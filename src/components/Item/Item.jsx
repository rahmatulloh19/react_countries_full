import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Item({ flags, name, population, region, capital, path }) {
	const { t } = useTranslation();

	const navigate = useNavigate();
	return (
		<li
			className="list__items grid bg-bg-items box-shadow rounded-5 dark:bg-bg-onDark"
			onClick={() => {
				navigate(`/country/${path}`);
			}}>
			<img
				className="w-full rounded-t-5 h-[160px] object-fill"
				src={flags.png}
				alt={name.common + " flag's"}
			/>
			<div className="list__items-inner pb-12 p-6 flex flex-col">
				<h3 className="text-lg mb-4 text-text-onLight dark:text-text-onDark grow">{name.common}</h3>
				<div className="list__desc-wrapper">
					<p className="text-sm leading-4 font-extralight mb-2 text-text-onLight dark:text-text-onDark">
						<strong className="font-semibold">{t("item.population")}: </strong> {population}
					</p>
					{capital ? (
						<p className="text-sm leading-4 font-extralight mb-2 text-text-onLight dark:text-text-onDark">
							<strong className="font-semibold">{t("item.region")} : </strong>
							{capital[0]}
						</p>
					) : (
						""
					)}
					<p className="text-sm leading-4 font-extralight text-text-onLight dark:text-text-onDark">
						<strong className="font-semibold">{t("item.region")} : </strong> {region}
					</p>
				</div>
			</div>
		</li>
	);
}

export default Item;
