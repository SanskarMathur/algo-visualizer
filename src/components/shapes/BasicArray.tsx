import { Rect, Text } from "react-konva";

const ArrayShape = ({ x, y, elements }) => {
	const rectHeight = 40;
	const rectWidth = 60;

	return (
		<>
			{elements.map((el, index: number) => (
				<>
					<Rect
						key={index}
						x={x + index * rectWidth}
						y={y}
						width={rectWidth}
						height={rectHeight}
						fill="#FF6584"
						stroke="black"
						strokeWidth={2}
					/>
					<Text
						key={`text-${index}`}
						x={x + index * rectWidth}
						y={y - 30}
						width={rectWidth}
						height={rectHeight}
						text={index}
						align="center"
						verticalAlign="middle"
						fontSize={12}
						fill="black"
					/>
					<Text
						key={`text-${index}`}
						x={x + index * rectWidth}
						y={y}
						width={rectWidth}
						height={rectHeight}
						text={el}
						align="center"
						verticalAlign="middle"
						fontSize={16}
						fill="white"
					/>
				</>
			))}
		</>
	);
};

export default ArrayShape;
