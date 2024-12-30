import BasicShapes from "./BasicShapeEnum";
import Shape from "./Shape";
import BasicArrow from "./shapes/BasicArrow";
import BasicCircle from "./shapes/BasicCircle";
import BasicLine from "./shapes/BasicLine";
import BasicRectangle from "./shapes/BasicRectangle";

const ShapeFactory = ({shapes}: {shapes: Shape[]}) => {
	return (
		<>
			{shapes.map((shape) => {
				switch (shape.type) {
					case BasicShapes.Rectangle:
						return <BasicRectangle key={shape.id} {...shape} />;
					case BasicShapes.Circle:
						return <BasicCircle key={shape.id} {...shape} />;
					case BasicShapes.Line:
						return <BasicLine key={shape.id} {...shape} />;
					case BasicShapes.Arrow:
						return <BasicArrow key={shape.id} {...shape} />;
					default:
						return null;
				}
			})}
		</>
	);
};

export default ShapeFactory;