import { BasicShapes } from "./ShapeEnum";
import Shape from "./Shape";

export const createNewShape = (tool: string, pointerPosition: any, id: string) => {
	let shapeObj = {
		id,
		type: tool,
		properties: {},
		stroke: "black",
		strokeWidth: 4,
		rotation: 0,
		fill: "transparent",
		isDraggable: false,
	};

	switch (tool) {
		case BasicShapes.Rectangle:
			shapeObj.properties = {
				x: pointerPosition.x,
				y: pointerPosition.y,
				width: 0,
				height: 0,
			};
			break;
		case BasicShapes.Circle:
			shapeObj.properties = {
				startX: pointerPosition.x,
				startY: pointerPosition.y,
				x: pointerPosition.x,
				y: pointerPosition.y,
				radius: 0,
			};
			break;
		case BasicShapes.Line:
		case BasicShapes.Arrow:
		case BasicShapes.Scribble:
			shapeObj.properties = {
				points: [pointerPosition.x, pointerPosition.y],
			};
			break;
		case BasicShapes.Eraser:
			shapeObj.strokeWidth = 20;
			shapeObj.properties = {
				points: [pointerPosition.x, pointerPosition.y],
			};
			break;

		default:
			shapeObj = null;
	}

	return shapeObj;
};

export const updateShapeProperties = (tool: string, shape: Shape, pointerPosition: any) => {
	const updatedShape = { ...shape };

	switch (tool) {
		case BasicShapes.Rectangle:
			updatedShape.properties.width = pointerPosition.x - updatedShape.properties.x;
			updatedShape.properties.height = pointerPosition.y - updatedShape.properties.y;
			break;
		case BasicShapes.Circle:
			updatedShape.properties.x = (updatedShape.properties.startX + pointerPosition.x) / 2;
			updatedShape.properties.y = (updatedShape.properties.startY + pointerPosition.y) / 2;
			updatedShape.properties.radius =
				Math.max(
					Math.abs(pointerPosition.x - updatedShape.properties.startX),
					Math.abs(pointerPosition.y - updatedShape.properties.startY)
				) / 2;
			break;
		case BasicShapes.Line:
		case BasicShapes.Arrow:
			updatedShape.properties.points = [
				shape.properties.points[0],
				shape.properties.points[1],
				pointerPosition.x,
				pointerPosition.y,
			];
			break;
		case BasicShapes.Eraser:
		case BasicShapes.Scribble:
			updatedShape.properties.points = [
				...shape.properties.points,
				pointerPosition.x,
				pointerPosition.y,
			];
			break;
		default:
			break;
	}

	return updatedShape;
};
