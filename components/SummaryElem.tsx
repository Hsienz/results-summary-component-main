import React from "react";
import Image from "next/image";

interface Props {
	className?: string;
	categoryClassName?: string;
	icon: string;
	category: string;
	score: number;
}

const SummaryElem = (props: Props) => {
	return (
		<div className={`flex font-bold px-4 py-3 rounded-lg bg-opacity-25 gap-4 ${props.className}`}>
			<Image src={props.icon} width={20} height={20} alt="" className="pointer-events-none" />
			<p className={props.categoryClassName}>{props.category}</p>
			<p className="flex gap-2 ml-auto text-Dark_gray_blue">
				<span>{props.score}</span>
				<span className="opacity-50">/</span>
				<span className="opacity-50">100</span>
			</p>
		</div>
	);
};

export default SummaryElem;
