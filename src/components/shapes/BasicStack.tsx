import { Rect, Text } from "react-konva";

const StackShape = ({ x, y, elements }) => {
	const rectHeight = 40;
	const rectWidth = 100;

	return (
		<>
			{elements.map((el, index: number) => (
				<Rect
					key={index}
					x={x}
					y={y - index * rectHeight}
					width={rectWidth}
					height={rectHeight}
					fill="#6C63FF"
					stroke="black"
					strokeWidth={2}
				/>
			))}
			{elements.map((el, index: number) => (
				<Text
					key={`text-${index}`}
					x={x}
					y={y - index * rectHeight}
					width={rectWidth}
					height={rectHeight}
					text={el}
					align="center"
					verticalAlign="middle"
					fontSize={16}
					fill="white"
				/>
			))}
			<Text
				x={x}
				y={y - elements.length * rectHeight + 10}
				width={rectWidth}
				height={rectHeight}
				text="Top"
				align="center"
				verticalAlign="middle"
				fontSize={16}
				fill="black"
			/>
		</>
	);
};

export default StackShape;
