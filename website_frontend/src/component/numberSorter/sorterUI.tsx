import Button from "react-bootstrap/Button";
import "./sorterUI.scss";
import DrawAllNumbers from "./drawBars";

const NumberSorter = () => {
	return (
		<div className="container sorterui">
			<span>
				My sorter
				<Button>Button</Button>
			</span>
			<DrawAllNumbers />
		</div>
	);
};

export default NumberSorter;
