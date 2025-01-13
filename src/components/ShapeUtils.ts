import Shape, { PointerPosition } from "./Shape";
import { AdvancedShapes, BasicShapes } from "./ShapeEnum";

// Function to create a new shape
export const createNewShape = (
	tool: BasicShapes,
	pointerPosition: PointerPosition,
	id: string
): Shape | null => {
	const baseShape: Shape = {
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
			baseShape.properties = {
				x: pointerPosition.x,
				y: pointerPosition.y,
				width: 0,
				height: 0,
			};
			break;
		case BasicShapes.Circle:
			baseShape.properties = {
				startX: pointerPosition.x,
				startY: pointerPosition.y,
				x: pointerPosition.x,
				y: pointerPosition.y,
				radiusX: 0,
				radiusY: 0,
			};
			break;
		case BasicShapes.Line:
		case BasicShapes.Arrow:
		case BasicShapes.Scribble:
			baseShape.properties = {
				points: [pointerPosition.x, pointerPosition.y],
			};
			break;
		case BasicShapes.Eraser:
			baseShape.strokeWidth = 20;
			baseShape.properties = {
				points: [pointerPosition.x, pointerPosition.y],
			};
			break;
		default:
			return null; // Return null for unsupported shapes
	}

	return baseShape;
};

// Function to update shape properties
export const updateShapeProperties = (
	tool: BasicShapes,
	shape: Shape,
	pointerPosition: PointerPosition
): Shape => {
	const updatedShape = { ...shape };

	switch (tool) {
		case BasicShapes.Rectangle:
			updatedShape.properties.width = pointerPosition.x - updatedShape.properties.x!;
			updatedShape.properties.height = pointerPosition.y - updatedShape.properties.y!;
			break;
		case BasicShapes.Circle:
			updatedShape.properties.x = (updatedShape.properties.startX + pointerPosition.x) / 2;
			updatedShape.properties.y = (updatedShape.properties.startY + pointerPosition.y) / 2;
			updatedShape.properties.radiusX = Math.abs(
				pointerPosition.x - updatedShape.properties.startX
			)/2;
			updatedShape.properties.radiusY = Math.abs(
				pointerPosition.y - updatedShape.properties.startY
			)/2;
			break;
		case BasicShapes.Line:
		case BasicShapes.Arrow:
			updatedShape.properties.points = [
				shape.properties.points![0],
				shape.properties.points![1],
				pointerPosition.x,
				pointerPosition.y,
			];
			break;
		case BasicShapes.Scribble:
		case BasicShapes.Eraser:
			updatedShape.properties.points = [
				...shape.properties.points!,
				pointerPosition.x,
				pointerPosition.y,
			];
			break;
		default:
			break;
	}

	return updatedShape;
};

export const createNewDataStructureShape = (
	tool: AdvancedShapes,
	id: string,
	values: any[],
	size: number,
	x: number,
	y: number,
	rectHeight: number,
	rectWidth: number
) => {
	if (!Array.isArray(values)) throw new Error("Values must be an array");
	if (size < 0 || size > values.length) throw new Error("Invalid size");

	const baseShape = {
		id,
		type: tool,
		properties: {
			x,
			y,
			height: 40,
			width: 150,
		},
		stroke: "black",
		strokeWidth: 2,
		rotation: 0,
		fill: "transparent",
		isDraggable: false,
		elements: {
			values: values.slice(0, size),
			size,
		},
	};

	switch (tool) {
		case AdvancedShapes.Stack:
		case AdvancedShapes.Array:
		case AdvancedShapes.Queue:
			baseShape.properties = {
				x: x,
				y: y,
				height: rectHeight,
				width: rectWidth,
			};
			baseShape.elements.values = values.slice(0, size);
			baseShape.elements.size = size;
			break;
		default:
			throw new Error(`Unsupported tool: ${tool}`);
	}

	return baseShape;
};
