import { useDispatch } from "react-redux";
import useKeyboardShortcuts from "../components/useKeyboardShortcuts";
import { changeTool, redo, undo } from "../redux/paintSlice";
import Canvas from "./Canvas";
import ToolBar from "./ToolBar";
import BasicShapes from "../components/BasicShapeEnum";

const CanvasPage = () => {
	const dispatch = useDispatch();

	// Tool selection shortcuts
	useKeyboardShortcuts("l", () => dispatch(changeTool(BasicShapes.Line)));
	useKeyboardShortcuts("a", () => dispatch(changeTool(BasicShapes.Arrow)));
	useKeyboardShortcuts("c", () => dispatch(changeTool(BasicShapes.Circle)));
	useKeyboardShortcuts("r", () => dispatch(changeTool(BasicShapes.Rectangle)));
	useKeyboardShortcuts("p", () => dispatch(changeTool(BasicShapes.Scribble)));
	useKeyboardShortcuts("e", () => dispatch(changeTool(BasicShapes.Eraser)));

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
