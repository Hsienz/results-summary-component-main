import SummaryElem from "@/components/SummaryElem";
import data from "../public/data.json";

const SummaryElemClassName = [
	"bg-Light_red",
	"bg-Orangey_yellow",
	"bg-Green_teal",
	"bg-Cobalt_blue",
];

const SummaryElemCategoryClassName = [
	"text-Light_red",
	"text-Orangey_yellow",
	"text-Green_teal",
	"text-Cobalt_blue",
];

export default function Home() {
	return (
		<main className="flex h-screen md:p-8 bg-Pale_blue">
			<div className="text-lg font-medium flex mx-auto mb-auto md:my-auto md:flex-row flex-col md:w-[720px] overflow-hidden md:rounded-3xl rounded-b-3xl bg-White">
				<div className="flex md:w-1/2 gap-4 px-12 py-10 flex-col text-center rounded-[inherit] bg-gradient-to-b to-Light_royal_blue_background from-Light_slate_blue_background">
					<p className="text-2xl text-Pale_blue">Your Result</p>
					<div className="relative w-40 m-auto rounded-full aspect-square to-Persian_blue_circle bg-gradient-to-b from-Violet_blue_circle">
						<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
							<p className="text-6xl font-extrabold text-White">
								{(data.reduce((a, b) => a + b.score, 0) /
									data.length) >>
									0}
							</p>
							<p className="text-Pale_blue">of 100</p>
						</div>
					</div>
					<p className="text-2xl font-extrabold text-White">Great</p>
					<p className="text-Pale_blue">
						You scored higher than 65% of the people who have taken
						these tests.
					</p>
				</div>
				<div className="flex flex-col justify-between gap-8 px-8 py-10 md:w-1/2">
					<p className="text-2xl font-extrabold text-Dark_gray_blue">
						Summary
					</p>
					<div className="flex flex-col gap-4">
						{data.map((x, i) => (
							<SummaryElem
								key={x.category}
								className={SummaryElemClassName[i]}
								categoryClassName={
									SummaryElemCategoryClassName[i]
								}
								{...x}
							/>
						))}
					</div>

					<button className="relative py-4 mt-auto overflow-hidden font-bold transition-all duration-300 rounded-full hover:scale-110 before:bg-gradient-to-b before:absolute before:w-full before:hover:opacity-100 before:h-full before:inset-0 before:opacity-0 before:to-Light_royal_blue_background before:duration-[inherit] before:from-Light_slate_blue_background text-White bg-Dark_gray_blue">
						<span className="relative z-50">Continue</span>
					</button>
				</div>
			</div>
		</main>
	);
}
