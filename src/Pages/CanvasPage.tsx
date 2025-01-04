import { useDispatch } from "react-redux";
import BasicShapes from "../components/BasicShapeEnum";
import LeftPane from "../components/LeftPane";
import useKeyboardShortcuts from "../components/useKeyboardShortcuts";
import { changeZoom } from "../redux/canvasSlice";
import { changeTool, redo, undo } from "../redux/paintSlice";
import Canvas from "./Canvas";
import ToolBar from "./ToolBar";

const CanvasPage = () => {
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
			<LeftPane />
			<ToolBar />
			<Canvas />
		</>
	);
};

export default CanvasPage;
