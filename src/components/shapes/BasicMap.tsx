import React from "react";
import { Line, Rect, Text } from "react-konva";

const MapShape = ({ x, y, elements }) => {
	const rectHeight = 40;
	const rectWidth = 150;

	return (
		<>
			<Text
				x={x}
				y={y - 30}
				width={rectWidth / 2}
				height={rectHeight}
				text="Key"
				align="center"
				verticalAlign="middle"
				fontSize={16}
				fill="black"
			/>
			<Text
				x={x + rectWidth / 2}
				y={y - 30}
				width={rectWidth / 2}
				height={rectHeight}
				text="Value"
				align="center"
				verticalAlign="middle"
				fontSize={16}
				fill="black"
			/>
			{elements.map((el, index: number) => (
				<React.Fragment key={index}>
					<Rect
						x={x}
						y={y + index * rectHeight}
						width={rectWidth}
						height={rectHeight}
						fill="#17A2B8"
						stroke="black"
						strokeWidth={2}
					/>
					<Line
						points={[
							x + rectWidth / 2,
							y + index * rectHeight,
							x + rectWidth / 2,
							y + index * rectHeight + rectHeight,
						]}
						stroke="black"
						strokeWidth={1}
					/>
					<Text
						x={x}
						y={y + index * rectHeight}
						width={rectWidth / 2}
						height={rectHeight}
						text={el.key}
						align="center"
						verticalAlign="middle"
						fontSize={16}
						fill="white"
					/>
					<Text
						x={x + rectWidth / 2}
						y={y + index * rectHeight}
						width={rectWidth / 2}
						height={rectHeight}
						text={el.value}
						align="center"
						verticalAlign="middle"
						fontSize={16}
						fill="white"
					/>
				</React.Fragment>
			))}
		</>
	);
};

export default MapShape;
