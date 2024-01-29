import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

localStorage.setItem("border", JSON.stringify([]));

export const SinglePage = () => {
	const { t } = useTranslation();

	const { cca2 } = useParams();
	const [country, setCountry] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
			.then((res) => res.json())
			.then((data) => {
				setCountry(data[0]);
			});
	}, [cca2]);
	return (
		<section className="site-main__single single text-text-onLight dark:text-text-onDark py-10">
			<div className="container">
				<button
					className="single-btn min-w-[104px] md:min-w-[134px] bg-bg-items dark:bg-bg-onDark box-shadow text-sm font-light py-1.5 pr-6 text-end md:pl-10 md:text-center rounded-md md:py-4 md:text-base leading-5 mb-16 md:mb-20"
					onClick={() => {
						navigate("/");
					}}>
					{t("singlePage.backBtn")}
				</button>
				<div className="single__info flex flex-col md:flex-row  flex-wrap md:justify-between md:gap-x-10">
					<img
						className="single__info-img object-contain md:max-w-[560px] rounded-md mb-11 md:mb-0 md:max-h-[401px]"
						src={country.flags?.svg}
						alt={`${country.name?.common}'s flag`}
					/>
					<div className="single__inner md:max-w-[574px] grow">
						<h2 className="font-extrabold text-[22px] md:text-[32px] mb-4 md:mb-6 leading-snug">
							{country.name?.common}
						</h2>
						<div className="single__main-info text-sm leading-8 md:text-base md:leading-8 md:flex md:justify-between md:gap-x-6 mb-[34px]">
							<div className="single__location mb-8">
								<p className="single__location-desc">
									<strong className="single__bold">{t("singlePage.nativeName")}:</strong>
									{country.name?.nativeName &&
										" " + Object.values(country.name?.nativeName).at(-1)?.common}
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">{t("singlePage.population")}:</strong>
									{" " + country?.population}
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">{t("singlePage.region")}:</strong>{" "}
									{" " + country?.region}
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">{t("singlePage.subRegion")}:</strong>{" "}
									{" " + country?.subregion}
								</p>
								<p className="single__location-desc">
									<strong className="single__bold"> {t("singlePage.capital")}:</strong>
									{" " + country?.capital?.at(0)}
								</p>
							</div>
							<div className="single__international">
								<p className="single__international-desc">
									<strong className="single__bold"> {t("singlePage.domain")}:</strong>
									{" " + country?.tld?.at(0)}
								</p>
								<p className="single__international-desc">
									<strong className="single__bold"> {t("singlePage.currencies")}:</strong>
									{country?.currencies && " " + Object.values(country?.currencies).at(-1)?.symbol}
								</p>
								<p className="single__international-desc">
									<strong className="single__bold"> {t("singlePage.languages")}:</strong>
									{country?.languages && " " + Object.values(country?.languages).join(", ")}
								</p>
							</div>
						</div>
						<div className="single__border md:flex md:items-center">
							<h3 className="single__border-title font-semibold mb-4 md:mr-4 md:mb-0">
								{t("singlePage.border")}:
							</h3>
							<div className="single__border-inner flex gap-[10px] flex-wrap text-center">
								{country?.borders?.map((item) => (
									<Link
										className="min-w-[96px] py-1.5 rounded-sm box-shadow text-xs md:text-sm bg-bg-items dark:bg-bg-onDark"
										type="button"
										key={item}
										to={`/country/${item}`}>
										{item}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
