import { Arrow, Rect, Text } from "react-konva";

const QueueShape = ({ x, y, elements }) => {
	const rectHeight = 40;
	const rectWidth = 60;

	return (
		<>
			{elements.map((el, index) => (
				<Rect
					key={index}
					x={x + index * rectWidth}
					y={y}
					width={rectWidth}
					height={rectHeight}
					fill="#FFB830"
					stroke="black"
					strokeWidth={2}
				/>
			))}
			{elements.map((el, index) => (
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
					fill="black"
				/>
			))}
			<Arrow
				x={x - 50}
				y={y + rectHeight / 2}
				points={[0, 0, 50, 0]}
				pointerLength={10}
				pointerWidth={10}
				fill="black"
				stroke="black"
			/>
			<Text
				x={x - 70}
				y={y + rectHeight / 2 + 10}
				text="Enqueue"
				fontSize={14}
				fill="black"
			/>
			<Arrow
				x={x + elements.length * rectWidth}
				y={y + rectHeight / 2}
				points={[0, 0, 50, 0]}
				pointerLength={10}
				pointerWidth={10}
				fill="black"
				stroke="black"
			/>
			<Text
				x={x + elements.length * rectWidth + 10}
				y={y + rectHeight / 2 + 10}
				text="Dequeue"
				fontSize={14}
				fill="black"
			/>
		</>
	);
};

export default QueueShape;
