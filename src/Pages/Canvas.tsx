import { useState } from "react";
import { Layer, Stage } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import BasicShapes from "../components/BasicShapeEnum";
import Shape from "../components/Shape";
import BasicArrow from "../components/shapes/BasicArrow";
import BasicCircle from "../components/shapes/BasicCircle";
import BasicLine from "../components/shapes/BasicLine";
import BasicRectange from "../components/shapes/BasicRectange";
import { appendShape } from "../redux/paintSlice";

const calculateDist = (x1: number, y1: number, x2: number, y2: number) => {
	return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
};

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

		let shape: Shape | null = null;

		switch (tool) {
			case BasicShapes.Rectangle:
				shape = {
					id: uuidv4(),
					type: BasicShapes.Rectangle,
					properties: {
						x: pointerPosition.x,
						y: pointerPosition.y,
						width: 0,
						height: 0,
					},
					stroke: "black",
					strokeWidth: 2,
					rotation: 0,
					fill: "transparent",
					isDraggable: false,
				};
				break;
			case BasicShapes.Circle:
				shape = {
					id: uuidv4(),
					type: BasicShapes.Circle,
					properties: {
						x: pointerPosition.x,
						y: pointerPosition.y,
						radius: 0,
					},
					stroke: "black",
					strokeWidth: 2,
					rotation: 0,
					fill: "transparent",
					isDraggable: false,
				};
				break;
			case BasicShapes.Line:
				shape = {
					id: uuidv4(),
					type: BasicShapes.Line,
					properties: {
						points: [pointerPosition.x, pointerPosition.y],
					},
					stroke: "black",
					strokeWidth: 2,
					rotation: 0,
					fill: "transparent",
					isDraggable: false,
				};
				break;
			case BasicShapes.Arrow:
				shape = {
					id: uuidv4(),
					type: BasicShapes.Arrow,
					properties: {
						points: [pointerPosition.x, pointerPosition.y],
					},
					stroke: "black",
					strokeWidth: 2,
					rotation: 0,
					fill: "transparent",
					isDraggable: false,
				};
				break;

			default:
				break;
		}

		if (shape) setNewShape(shape);
	};
	const handleMouseMove = (e: any) => {
		if (!isDragging || !newShape) return;

		const stage = e.target.getStage();
		const pointerPosition = stage.getPointerPosition();

		if (!pointerPosition) return;

		const updatedShape = { ...newShape };

		switch (tool) {
			case BasicShapes.Rectangle:
				updatedShape.properties.width = pointerPosition.x - updatedShape.properties.x;
				updatedShape.properties.height = pointerPosition.y - updatedShape.properties.y;
				break;
			case BasicShapes.Circle:
				updatedShape.properties.radius = calculateDist(
					pointerPosition.x,
					pointerPosition.y,
					updatedShape.properties.x,
					updatedShape.properties.y
				);
				break;
			case BasicShapes.Line:
			case BasicShapes.Arrow:
				updatedShape.properties.points = [
					newShape.properties.points[0],
					newShape.properties.points[1],
					pointerPosition.x,
					pointerPosition.y,
				];
				break;
			default:
				break;
		}

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
			height={window.innerHeight - 60}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			style={{ backgroundColor: "#faf7f0" }}>
			<Layer>
				{shapesOnCanvas.length &&
					shapesOnCanvas.map((shape: Shape) => {
						switch (shape.type) {
							case BasicShapes.Rectangle:
								return <BasicRectange key={shape.id} {...shape} />;
							case BasicShapes.Circle:
								return <BasicCircle key={shape.id} {...shape} />;
							case BasicShapes.Line:
								return <BasicLine key={shape.id} {...shape} />;
							case BasicShapes.Arrow:
								return <BasicArrow key={shape.id} {...shape} />;
						}
					})}
				{newShape &&
					(() => {
						switch (newShape.type) {
							case BasicShapes.Rectangle:
								return <BasicRectange key={newShape.id} {...newShape} />;
							case BasicShapes.Circle:
								return <BasicCircle key={newShape.id} {...newShape} />;
							case BasicShapes.Line:
								return <BasicLine key={newShape.id} {...newShape} />;
							case BasicShapes.Arrow:
								return <BasicArrow key={newShape.id} {...newShape} />;
						}
					})}
			</Layer>
		</Stage>
	);
};

export default Canvas;
