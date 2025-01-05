import { List } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { toggleLeftPane } from "../redux/canvasSlice";
import "./LeftPane.css";

const LeftPane = () => {
	const dispatch = useDispatch();
	return (
		<div className="leftPane-container">
			<div className="list-icon-opened" onClick={() => dispatch(toggleLeftPane())}>
				<List />
			</div>
			<div className="leftPane"></div>
		</div>
	);
};

export default LeftPane;
