import BasicShapes from "./BasicShapeEnum";

export default interface Shape {
	id: string;
	type: BasicShapes;
	properties: Record<string, any>;
}
