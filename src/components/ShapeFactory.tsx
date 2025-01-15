import Shape from "./Shape";
import { AdvancedShapes, BasicShapes } from "./ShapeEnum";
import ArrayShape from "./shapes/BasicArray";
import BasicArrow from "./shapes/BasicArrow";
import BasicCircle from "./shapes/BasicCircle";
import BasicEraser from "./shapes/BasicEraser";
import BasicLine from "./shapes/BasicLine";
import LinkedListShape from "./shapes/BasicLinkedList";
import QueueShape from "./shapes/BasicQueue";
import BasicRectangle from "./shapes/BasicRectangle";
import StackShape from "./shapes/BasicStack";

const ShapeFactory = ({ shapes }: { shapes: Shape[] }) => {
	return (
		<>
			{shapes.map((shape) => {
				if (shape.type in BasicShapes) {
					switch (shape.type) {
						case BasicShapes.Rectangle:
							return <BasicRectangle key={shape.id} {...shape} />;
						case BasicShapes.Circle:
							return <BasicCircle key={shape.id} {...shape} />;
						case BasicShapes.Line:
						case BasicShapes.Scribble:
							return <BasicLine key={shape.id} {...shape} />;
						case BasicShapes.Arrow:
							return <BasicArrow key={shape.id} {...shape} />;
						case BasicShapes.Eraser:
							return <BasicEraser key={shape.id} {...shape} />;
					}
				} else if (shape.type in AdvancedShapes) {
					switch (shape.type) {
						case AdvancedShapes.Array:
							return <ArrayShape key={shape.id} {...shape} />;
						case AdvancedShapes.Queue:
							return <QueueShape key={shape.id} {...shape} />;
						case AdvancedShapes.Stack:
							return <StackShape key={shape.id} {...shape} />;
						case AdvancedShapes.LinkedList:
							return <LinkedListShape key={shape.id} {...shape} />;
					}
				} else console.error(`Unsupported shape type: ${shape.type}`);
			})}
		</>
	);
};

export default ShapeFactory;
