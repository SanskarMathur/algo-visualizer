import React from "react";
import { Arrow, Rect, Text } from "react-konva";

const LinkedListShape = ({ x, y, elements }) => {
	const nodeSize = 50;
	const arrowLength = 50;

	return (
		<>
			{elements.map((el, index) => (
				<React.Fragment key={index}>
					<Rect
						x={x + index * (nodeSize + arrowLength)}
						y={y}
						width={nodeSize}
						height={nodeSize}
						fill="#00C897"
						stroke="black"
						strokeWidth={2}
					/>
					<Text
						x={x + index * (nodeSize + arrowLength)}
						y={y}
						width={nodeSize}
						height={nodeSize}
						text={el}
						align="center"
						verticalAlign="middle"
						fontSize={16}
						fill="white"
					/>
					<Arrow
						x={x + index * (nodeSize + arrowLength) + nodeSize}
						y={y + nodeSize / 2}
						points={[0, 0, arrowLength, 0]}
						pointerLength={10}
						pointerWidth={10}
						fill="black"
						stroke="black"
					/>
					{index === elements.length - 1 && (
						<Text
							x={x + (index + 1) * (nodeSize + arrowLength)}
							y={y}
							width={nodeSize}
							height={nodeSize}
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
