import { Layer, Rect, Stage } from "react-konva";

const Canvas = () => {
	return (
		<Stage
			width={window.innerWidth}
			height={600}
			style={{ backgroundColor: "#faf7f0" }}>
			<Layer>
				<Rect fill={"blue"} height={100} width={100} x={50} y={50} />
				<Rect fill={"red"} height={100} width={100} x={150} y={150} />
			</Layer>
		</Stage>
	);
};

export default Canvas;
