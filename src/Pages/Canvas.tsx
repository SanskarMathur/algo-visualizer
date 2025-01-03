import { useState } from "react";
import { Layer, Stage } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import BasicShapes from "../components/BasicShapeEnum";
import Shape from "../components/Shape";
import ShapeFactory from "../components/ShapeFactory";
import { createNewShape, updateShapeProperties } from "../components/ShapeUtils";
import { changePosition } from "../redux/canvasSlice";
import { appendShape } from "../redux/paintSlice";

const Canvas = () => {
	const tool = useSelector((state) => state.paint.tool);
	const shapesOnCanvas = useSelector((state) => state.paint.shapesOnCanvas);
	const canvasPosition = useSelector((state) => state.canvas.position);
	const dispatch = useDispatch();

	const [newShape, setNewShape] = useState<Shape | null>(null);
	const [isDragging, setDragging] = useState(false);

	const handleMouseDown = (e: any) => {
		const stage = e.target.getStage();
		let pointerPosition = stage.getPointerPosition();

		if (!pointerPosition) return;

		setDragging(true);

		pointerPosition = {
			x: pointerPosition.x - canvasPosition.x,
			y: pointerPosition.y - canvasPosition.y,
		};
		const shape = createNewShape(tool, pointerPosition, uuidv4());

		if (shape) setNewShape(shape);
	};

	const handleMouseMove = (e: any) => {
		if (!isDragging || !newShape) return;

		const stage = e.target.getStage();
		let pointerPosition = stage.getPointerPosition();

		if (!pointerPosition) return;

		pointerPosition = {
			x: pointerPosition.x - canvasPosition.x,
			y: pointerPosition.y - canvasPosition.y,
		};

		const updatedShape = updateShapeProperties(tool, newShape, pointerPosition);

		setNewShape(updatedShape);
	};

	const handleMouseUp = () => {
		if (newShape) {
			dispatch(appendShape(newShape));
			setNewShape(null);
		}
		setDragging(false);
	};

	const handleCanvasDragEnd = (e) => {
		if (tool === BasicShapes.Move) {
			const stage = e.target.getStage();
			dispatch(
				changePosition({
					x: stage.x(),
					y: stage.y(),
				})
			);
		}
	};

	return (
		<Stage
			width={window.innerWidth}
			height={window.innerHeight}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			draggable={tool === BasicShapes.Move}
			onDragEnd={handleCanvasDragEnd}
			style={{ backgroundColor: "#faf7f0" }}>
			<Layer>
				{shapesOnCanvas && <ShapeFactory shapes={shapesOnCanvas} />}
				{newShape && <ShapeFactory shapes={[newShape]} />}
			</Layer>
		</Stage>
	);
};

export default Canvas;
