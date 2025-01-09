import { List } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { AdvancedShapes, BasicShapes } from "../components/ShapeEnum";
import useKeyboardShortcuts from "../components/useKeyboardShortcuts";
import { changeZoom, toggleLeftPane } from "../redux/canvasSlice";
import { changeTool, PaintState, redo, undo } from "../redux/paintSlice";
import Canvas from "./Canvas";
import "./CanvasPage.css";
import LeftPane from "./LeftPane";
import ToolBar from "./ToolBar";

const CanvasPage = () => {
	const leftPaneOpen = useSelector((state) => state.canvas.leftPaneOpen);
	const activeTool = useSelector((state: PaintState) => state.paint.tool);
	const dispatch = useDispatch();

	// Tool selection shortcuts
	useKeyboardShortcuts("alt+m", () => dispatch(changeTool(BasicShapes.Move)));
	useKeyboardShortcuts("alt+s", () => dispatch(changeTool(BasicShapes.Selection)));
	useKeyboardShortcuts("alt+l", () => dispatch(changeTool(BasicShapes.Line)));
	useKeyboardShortcuts("alt+a", () => dispatch(changeTool(BasicShapes.Arrow)));
	useKeyboardShortcuts("alt+c", () => dispatch(changeTool(BasicShapes.Circle)));
	useKeyboardShortcuts("alt+r", () => dispatch(changeTool(BasicShapes.Rectangle)));
	useKeyboardShortcuts("alt+p", () => dispatch(changeTool(BasicShapes.Scribble)));
	useKeyboardShortcuts("alt+e", () => dispatch(changeTool(BasicShapes.Eraser)));

	// Undo/Redo shortcuts
	useKeyboardShortcuts("ctrl+z", () => dispatch(undo()));
	useKeyboardShortcuts("ctrl+y", () => dispatch(redo()));

	// Zoom shortcuts
	useKeyboardShortcuts("ctrl+=", () => dispatch(changeZoom("in")));
	useKeyboardShortcuts("ctrl+-", () => dispatch(changeZoom("out")));
	return (
		<>
			{leftPaneOpen ? (
				<LeftPane />
			) : (
				<List
					className="list-icon-closed"
					onClick={() => {
						dispatch(toggleLeftPane(true));
						if (!(activeTool in AdvancedShapes))
							dispatch(changeTool(AdvancedShapes.Array));
					}}
				/>
			)}
			<ToolBar />
			<Canvas />
		</>
	);
};

export default CanvasPage;
