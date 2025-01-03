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
import {useDispatch, useSelector} from "react-redux";
import BasicShapes from "../components/BasicShapeEnum";
import {changeTool, PaintState, redo, undo} from "../redux/paintSlice";
import "./ToolBar.css";

const ToolBar = () => {
	const activeTool = useSelector((state: PaintState) => state.paint.tool);
	const dispatch = useDispatch();

	const changeToolHelper = (newTool: BasicShapes) => {
		dispatch(changeTool(newTool));
	};

	return (
		<div className="toolbar">
			<div className="basic-shape-container">
				<div className="basic-shape" onClick={() => dispatch(undo())}>
					<ArrowCounterclockwise />
				</div>
				<div className="basic-shape" onClick={() => dispatch(redo())}>
					<ArrowClockwise />
				</div>
			</div>
			<div className="basic-shape-container">
				<div
					className={`basic-shape ${activeTool === BasicShapes.Move ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.Move)}>
					<ArrowsMove />
				</div>
				<div
					className={`basic-shape ${
						activeTool === BasicShapes.Selection ? "active" : ""
					}`}
					onClick={() => changeToolHelper(BasicShapes.Selection)}>
					<HandIndexThumb />
				</div>
				<div
					className={`basic-shape ${activeTool === BasicShapes.Line ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.Line)}>
					<SlashLg />
				</div>
				<div
					className={`basic-shape ${activeTool === BasicShapes.Arrow ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.Arrow)}>
					<ArrowUpRight />
				</div>
				<div
					className={`basic-shape ${activeTool === BasicShapes.Circle ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.Circle)}>
					<Circle />
				</div>
				<div
					className={`basic-shape ${
						activeTool === BasicShapes.Rectangle ? "active" : ""
					}`}
					onClick={() => changeToolHelper(BasicShapes.Rectangle)}>
					<Square />
				</div>
				<div
					className={`basic-shape ${activeTool === BasicShapes.Scribble ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.Scribble)}>
					<Pencil />
				</div>
				<div
					className={`basic-shape ${activeTool === BasicShapes.Eraser ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.Eraser)}>
					<Eraser />
				</div>
				<div
					className={`basic-shape ${activeTool === BasicShapes.More ? "active" : ""}`}
					onClick={() => changeToolHelper(BasicShapes.More)}>
					<PlusCircle />
				</div>
			</div>
			<div className="basic-shape-container">
				<div className="basic-shape">
					<ZoomIn />
				</div>
				<div className="basic-shape">
					<ZoomOut />
				</div>
			</div>
		</div>
	);
};

export default ToolBar;
