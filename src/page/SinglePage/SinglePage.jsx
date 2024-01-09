import img from "../../images/flag.svg";

export const SinglePage = ({ inputValue, selectValue }) => {
	console.log(inputValue, selectValue);
	return (
		<section className="site-main__single single text-text-onLight dark:text-text-onDark py-10">
			<div className="container">
				<button className="single-btn min-w-[104px] md:min-w-[134px] bg-bg-items dark:bg-bg-onDark box-shadow text-sm font-light py-1.5 pr-6 text-end md:pl-10 md:text-center rounded-md md:py-4 md:text-base leading-5 mb-16 md:mb-20">
					Back
				</button>
				<div className="single__info flex flex-col md:flex-row md:justify-between md:gap-x-10">
					<img
						className="single__info-img object-cover md:max-w-[560px] grow rounded-md mb-11 md:mb-0 md:max-h-[401px]"
						src={img}
						alt=""
					/>
					<div className="single__inner md:max-w-[574px] grow">
						<h2 className="font-extrabold text-[22px] md:text-[32px] mb-4 md:mb-6 leading-snug">
							Belgium
						</h2>
						<div className="single__main-info text-sm leading-8 md:text-base md:leading-8 md:flex md:justify-between md:gap-x-6 mb-[34px]">
							<div className="single__location mb-8">
								<p className="single__location-desc">
									<strong className="single__bold">Native Name:</strong> België
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">Population:</strong> 11,319,511
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">Region:</strong> Europe
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">Sub Region:</strong> Western Europe
								</p>
								<p className="single__location-desc">
									<strong className="single__bold">Capital:</strong> Brussels
								</p>
							</div>
							<div className="single__international">
								<p className="single__international-desc">
									<strong className="single__bold">Top Level Domain:</strong> .be
								</p>
								<p className="single__international-desc">
									<strong className="single__bold">Currencies:</strong> Euro
								</p>
								<p className="single__international-desc">
									<strong className="single__bold">Languages:</strong> Dutch, French, German
								</p>
							</div>
						</div>
						<div className="single__border md:flex md:items-center">
							<h3 className="single__border-title font-semibold mb-4 md:mr-4 md:mb-0">
								Border Countries:
							</h3>
							<div className="single__border-inner flex gap-[10px] flex-wrap text-center">
								<button
									className="min-w-[96px] py-1.5 rounded-sm box-shadow text-xs md:text-sm bg-bg-items dark:bg-bg-onDark"
									type="button">
									France
								</button>
								<button
									className="min-w-[96px] py-1.5 rounded-sm box-shadow text-xs md:text-sm bg-bg-items dark:bg-bg-onDark"
									type="button">
									Germany
								</button>
								<button
									className="min-w-[96px] py-1.5 rounded-sm box-shadow text-xs md:text-sm bg-bg-items dark:bg-bg-onDark"
									type="button">
									Netherlands
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
