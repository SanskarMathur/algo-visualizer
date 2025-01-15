import React from "react";
import { Arrow, Rect, Text } from "react-konva";
import Shape from "../Shape";

const LinkedListShape = ({
	stroke,
	strokeWidth,
	fill,
	isDraggable,
	rotation,
	properties,
	elements,
}: Shape) => {
	const arrowLength = 50;

	return (
		<>
			{elements?.values.map((el: any, index: number) => (
				<React.Fragment key={index}>
					<Rect
						x={properties.x + index * (properties.width! + arrowLength)}
						y={properties.y}
						width={properties.width}
						height={properties.height}
						fill={fill}
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
					<Text
						x={properties.x + index * (properties.width! + arrowLength)}
						y={properties.y}
						width={properties.width}
						height={properties.height}
						text={el}
						align="center"
						verticalAlign="middle"
						fontSize={16}
						fill="white"
					/>
					<Arrow
						x={
							properties.x +
							index * (properties.width! + arrowLength) +
							properties.width!
						}
						y={properties.y + properties.height! / 2}
						points={[0, 0, arrowLength, 0]}
						pointerLength={10}
						pointerWidth={10}
						fill="black"
						stroke="black"
					/>
					{index === elements.values.length - 1 && (
						<Text
							x={properties.x + (index + 1) * (properties.width! + arrowLength)}
							y={properties.y}
							width={properties.width!}
							height={properties.height}
							text="NULL"
							align="center"
							verticalAlign="middle"
							fontSize={16}
							fill="black"
						/>
					)}
				</React.Fragment>
			))}
		</>
	);
};

export default LinkedListShape;
