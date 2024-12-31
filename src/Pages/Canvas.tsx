import { useState } from "react";
import { Layer, Stage } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Shape from "../components/Shape";
import ShapeFactory from "../components/ShapeFactory";
import { createNewShape, updateShapeProperties } from "../components/ShapeUtils";
import { appendShape } from "../redux/paintSlice";

const Canvas = () => {
	const tool = useSelector((state) => state.paint.tool);
	const shapesOnCanvas = useSelector((state) => state.paint.shapesOnCanvas);
	const dispatch = useDispatch();

	const [newShape, setNewShape] = useState<Shape | null>(null);
	const [isDragging, setDragging] = useState(false);

	const handleMouseDown = (e: any) => {
		const stage = e.target.getStage();
		const pointerPosition = stage.getPointerPosition();

		if (!pointerPosition) return;

		setDragging(true);

		const shape = createNewShape(tool, pointerPosition, uuidv4());

		if (shape) setNewShape(shape);
	};

	const handleMouseMove = (e: any) => {
		if (!isDragging || !newShape) return;

		const stage = e.target.getStage();
		const pointerPosition = stage.getPointerPosition();

		if (!pointerPosition) return;

		const updatedShape = updateShapeProperties(tool, newShape, pointerPosition);

		setNewShape(updatedShape);
	};

	const handleMouseUp = (e: any) => {
		if (newShape) {
			dispatch(appendShape(newShape));
			setNewShape(null);
		}
		setDragging(false);
	};

	return (
		<Stage
			width={window.innerWidth}
			height={window.innerHeight}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			style={{ backgroundColor: "#faf7f0" }}>
			<Layer>
				{shapesOnCanvas && <ShapeFactory shapes={shapesOnCanvas} />}
				{newShape && <ShapeFactory shapes={[newShape]} />}
			</Layer>
		</Stage>
	);
};

export default Canvas;
