import React from "react";
import Image from "next/image";

interface Props {
	className: string;
	icon: string;
	category: string;
	score: number;
}

const SummaryElem = (props: Props) => {
	return (
		<div className={`flex px-4 py-2 ${props.className}`}>
			<Image src={props.icon} width={10} height={10} alt="" />
			<p>{props.category}</p>
			<p>
				<span>{props.score}</span>
				<span>/</span>
				<span>100</span>
			</p>
		</div>
	);
};

export default SummaryElem;
