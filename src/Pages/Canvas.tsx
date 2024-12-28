import { useState } from "react";
import { Layer, Stage } from "react-konva";
import { useSelector } from "react-redux";

const Canvas = () => {
	const tool = useSelector((state) => state.paint.tool);
	const shapesOnCanvas = useSelector((state) => state.paint.shapesOnCanvas);

	const [newShape, setNewShape] = useState(null);
	const [isDragging, setDragging] = useState(false);

	const handleMouseDown = (e: any) => {
		setDragging(true);
		const stage = e.target.getStage();
		const pointerPosition = stage.getPointerPosition();
		console.log("Down ", pointerPosition);
	};
	const handleMouseMove = (e: any) => {
		if (!isDragging) return;

		const stage = e.target.getStage();
		const pointerPosition = stage.getPointerPosition();
		console.log("Move ", pointerPosition);
	};

	const handleMouseUp = (e: any) => {
		setDragging(false);
		const stage = e.target.getStage();
		const pointerPosition = stage.getPointerPosition();
		console.log("Up ", pointerPosition);
	};
	return (
		<Stage
			width={window.innerWidth}
			height={600}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			style={{ backgroundColor: "#faf7f0" }}
			draggable>
			<Layer></Layer>
		</Stage>
	);
};

export default Canvas;

// import { useState } from "react";
// import { Layer, Stage, Text } from "react-konva";

// const CanvasWithMousePosition = () => {
// 	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// 	const handleMouseMove = (e: any) => {
// 		const stage = e.target.getStage(); // Get the Stage object
// 		const pointerPosition = stage.getPointerPosition(); // Get the mouse position
// 		if (pointerPosition) {
// 			setMousePosition({
// 				x: Math.round(pointerPosition.x), // Round values for simplicity
// 				y: Math.round(pointerPosition.y),
// 			});
// 		}
// 	};

// 	return (
// 		<Stage
// 			width={window.innerWidth}
// 			height={window.innerHeight}
// 			onMouseMove={handleMouseMove}
// 			style={{ backgroundColor: "#faf7f0" }}>
// 			<Layer>
// 				{/* Display mouse coordinates */}
// 				<Text
// 					text={`Mouse Position: x=${mousePosition.x}, y=${mousePosition.y}`}
// 					fontSize={18}
// 					x={10}
// 					y={10}
// 					fill="black"
// 				/>
// 			</Layer>
// 		</Stage>
// 	);
// };

// export default CanvasWithMousePosition;
