import { Layer, Stage } from "react-konva";
import { useSelector } from "react-redux";

const Canvas = () => {
	const shapesOnCanvas = useSelector((state) => state.paint);

	console.log(shapesOnCanvas);
	return (
		<Stage
			width={window.innerWidth}
			height={600}
			style={{ backgroundColor: "#faf7f0" }}
			draggable>
			<Layer></Layer>
		</Stage>
	);
};

export default Canvas;
