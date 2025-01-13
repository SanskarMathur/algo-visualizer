import { useEffect, useState } from "react";
import { Layer, Stage } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Shape from "../components/Shape";
import { BasicShapes } from "../components/ShapeEnum";
import ShapeFactory from "../components/ShapeFactory";
import { createNewShape, updateShapeProperties } from "../components/ShapeUtils";
import { changePosition } from "../redux/canvasSlice";
import { appendShape } from "../redux/paintSlice";

const Canvas = () => {
	const tool = useSelector((state) => state.paint.tool);
	const shapesOnCanvas = useSelector((state) => state.paint.shapesOnCanvas);
	const canvasPosition = useSelector((state) => state.canvas.position);
	const canvasScale = useSelector((state) => state.canvas.scale);
	const dispatch = useDispatch();

	const [canvasSize, setCanvasSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [newShape, setNewShape] = useState<Shape | null>(null);
	const [isDragging, setDragging] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleMouseDown = (e: any) => {
		const stage = e.target.getStage();
		let pointerPosition = stage.getPointerPosition();

		if (!pointerPosition) return;

		setDragging(true);

		pointerPosition = {
			x: (pointerPosition.x - canvasPosition.x) / canvasScale,
			y: (pointerPosition.y - canvasPosition.y) / canvasScale,
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
			x: (pointerPosition.x - canvasPosition.x) / canvasScale,
			y: (pointerPosition.y - canvasPosition.y) / canvasScale,
		};

		const updatedShape = updateShapeProperties(tool, newShape, pointerPosition);

		setNewShape(updatedShape);
	};

	const handleMouseUp = (e: any) => {
		// If the tool is Move, we need to update the canvas position
		if (tool === BasicShapes.Move) {
			const stage = e.target.getStage();
			dispatch(
				changePosition({
					x: stage.x(),
					y: stage.y(),
				})
			);
			return;
		}

		// Else it's a shape, so we need to append the new shape to the shapesOnCanvas state
		if (newShape) {
			dispatch(appendShape(newShape));
			setNewShape(null);
		}
		setDragging(false);
	};

	return (
		<Stage
			width={canvasSize.width}
			height={canvasSize.height}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			draggable={tool === BasicShapes.Move}
			scale={{ x: canvasScale, y: canvasScale }}
			onDragEnd={handleMouseUp}
			style={{ backgroundColor: "#faf7f0" }}
			x={canvasPosition.x}
			y={canvasPosition.y}>
			<Layer>
				{shapesOnCanvas && <ShapeFactory shapes={shapesOnCanvas} />}
				{newShape && <ShapeFactory shapes={[newShape]} />}
			</Layer>
		</Stage>
	);
};

export default Canvas;
