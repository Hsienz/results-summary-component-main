import SummaryElem from "@/components/SummaryElem";
import data from "../public/data.json";

const SummaryElemClassName = [
	"bg-Light_red",
	"bg-Orangey_yellow",
	"bg-Green_teal",
	"bg-Cobalt_blue",
];

export default function Home() {
	return (
		<main className="flex h-screen">
			<div className="flex m-auto overflow-hidden rounded-3xl bg-blue-50">
				<div className="flex p-4 flex-col text-center rounded-[inherit] bg-gradient-to-b to-Light_royal_blue_background from-Light_slate_blue_background">
					<p className="text-Pale_blue">Your Result</p>
					<div className="w-32 m-auto rounded-full aspect-square to-Persian_blue_circle bg-gradient-to-b from-Violet_blue_circle"></div>
					<p className="text-White">Great</p>
					<p className="text-Pale_blue">
						You scored higher than 65% of the people who have taken
						these tests.
					</p>
				</div>
				<div>
					<p>Summary</p>

					{data.map((x, i) => (
						<SummaryElem
							key={x.category}
							className={SummaryElemClassName[i]}
							{...x}
						/>
					))}

					<button>Continue</button>
				</div>
			</div>
		</main>
	);
}
