import {
	ArrowClockwise,
	ArrowCounterclockwise,
	ArrowsMove,
	ArrowUpRight,
	Circle,
	Eraser,
	HandIndexThumb,
	Pencil,
	PlusCircle,
	SlashLg,
	Square,
	ZoomIn,
	ZoomOut,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { BasicShapes } from "../components/ShapeEnum";
import { changeZoom, resetZoom, toggleLeftPane } from "../redux/canvasSlice";
import { changeTool, redo, undo } from "../redux/paintSlice";
import "./ToolBar.css";

const ToolBar = () => {
	const activeTool = useSelector((state) => state.paint.tool || BasicShapes.Move);
	const canvasScale = useSelector((state) => state.canvas.scale);
	const dispatch = useDispatch();

	const tools = [
		{ shape: BasicShapes.Move, icon: <ArrowsMove />, label: "Move" },
		{ shape: BasicShapes.Selection, icon: <HandIndexThumb />, label: "Selection" },
		{ shape: BasicShapes.Line, icon: <SlashLg />, label: "Line" },
		{ shape: BasicShapes.Arrow, icon: <ArrowUpRight />, label: "Arrow" },
		{ shape: BasicShapes.Circle, icon: <Circle />, label: "Circle" },
		{ shape: BasicShapes.Rectangle, icon: <Square />, label: "Rectangle" },
		{ shape: BasicShapes.Scribble, icon: <Pencil />, label: "Scribble" },
		{ shape: BasicShapes.Eraser, icon: <Eraser />, label: "Eraser" },
	];

	return (
		<>
			<div className="basic-shape-container left">
				<div className="basic-shape" onClick={() => dispatch(undo())} aria-label="Undo">
					<ArrowCounterclockwise />
				</div>
				<div className="basic-shape" onClick={() => dispatch(redo())} aria-label="Redo">
					<ArrowClockwise />
				</div>
			</div>

			<div className="basic-shape-container middle">
				{tools.map((tool) => (
					<div
						key={tool.shape}
						className={`basic-shape ${activeTool === tool.shape ? "active" : ""}`}
						onClick={() => dispatch(changeTool(tool.shape))}
						aria-label={tool.label}>
						{tool.icon}
					</div>
				))}
				<div
					className="basic-shape"
					aria-label="More Shapes"
					onClick={() => dispatch(toggleLeftPane(true))}>
					<PlusCircle />
				</div>
			</div>

			<div className="basic-shape-container right">
				<div
					className="basic-shape"
					onClick={() => dispatch(changeZoom("out"))}
					aria-label="Zoom Out">
					<ZoomOut />
				</div>
				<div
					className="basic-shape zoom-display"
					onClick={() => dispatch(resetZoom())}
					aria-label="Reset Zoom">
					{Math.round(canvasScale * 100)} %
				</div>
				<div
					className="basic-shape"
					onClick={() => dispatch(changeZoom("in"))}
					aria-label="Zoom In">
					<ZoomIn />
				</div>
			</div>
		</>
	);
};

export default ToolBar;
