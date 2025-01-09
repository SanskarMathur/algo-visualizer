import { AdvancedShapes, BasicShapes } from "./ShapeEnum";

export default interface Shape {
	id: string; // UUID
	type: BasicShapes | AdvancedShapes; // Pre-defined types (Arrow, Rectangle, Circle)
	properties: BasicShapeProps | AdvancedShapesProps; // Custom Properties based on type
	stroke: string; // Outline color
	strokeWidth: number; // Outline Width
	rotation: number; // Angle (in 0-180)
	fill: string; // Fill color (default - transparent)
	isDraggable: boolean; // Drag across canvas
	elements?: ElementProps; // Elements in the shape (Queue, Stack, Array)
}

export interface BasicShapeProps {
	x: number;
	y: number;
	height?: number;
	width?: number;
	radius?: number;
	points?: number[];
	startX?: number;
	startY?: number;
}

export interface AdvancedShapesProps {
	x: number;
	y: number;
	height: number;
	width: number;
}

export interface ElementProps {
	values: any[];
	size: number;
}

export interface PointerPosition {
	x: number;
	y: number;
}
