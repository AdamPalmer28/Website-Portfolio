import { useState } from "react";
import "./numbers.scss";

type BarProps = {
	value: number;
	active: boolean;
};

const DrawBar = (props: BarProps) => {
	const height = 100 * (props.value / 5);
	const active = props.active;

	return <div className="NumberBar m-1" style={{ height: `${height}%` }}></div>;
};

const DrawAllNumbers = () => {
	const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

	return (
		<div className="NumberCanvas">
			{numbers.map((val) => (
				<DrawBar value={val} active={false} />
			))}
		</div>
	);
};

export default DrawAllNumbers;
