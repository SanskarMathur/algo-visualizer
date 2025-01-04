import { useDispatch } from "react-redux";
import BasicShapes from "../components/BasicShapeEnum";
import useKeyboardShortcuts from "../components/useKeyboardShortcuts";
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
	return (
		<div>
			<ToolBar />
			<Canvas />
		</div>
	);
};

export default CanvasPage;
