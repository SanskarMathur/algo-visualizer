import { BasicShapes } from "./ShapeEnum";

export default interface Shape {
	id: string; // UUID
	type: BasicShapes; // Pre-defined types (Arrow, Rectangle, Circle)
	properties: Record<string, any>; // Custom Properties based on type
	stroke: string; // Outline color
	strokeWidth: number; // Outline Width
	rotation: number; // Angle (in 0-180)
	fill: string; // Fill color (default - transparent)
	isDraggable: boolean; // Drag across canvas
}

/*
Core shapes are: Rect, Circle, Line, Scribble, Arrow

Shape:
	{
		id:				UUID
		type:			String
		Props:			Object
		stroke:			String
		strokeWidth:	Number
		rotation: 		Number
		fill:			String
		isDraggable: 	Boolean
	}

Rectangle :
	Props: 	{
				x:		Top-left corner coords
				y:		Top-left corner coords
				height:	Bottom-right corner coords
				width:	Bottom-right corner coords
			}
Circle:
	Props: 	{
				x:		Center coords
				y:		Center coords
				radius:
			}
Line:
	Props: 	{
				points:	Array(x1,y1,x2,y2)	Starting point and ending point coords
			}
Scribble:
	Props: 	{
				points:	Array(x1,y1,x2,y2,x3,y3,x4,y4,...)	Coords of all the points on line
			}
Arrow:
	Props:	{
				points: Array(x1,y1,x2,y2,x3,y3)
				pointerLength: 
				pointerWidth: 
			}
*/
