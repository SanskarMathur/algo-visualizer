import { List } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleLeftPane } from "../redux/canvasSlice";
import "./LeftPane.css";

const LeftPane = () => {
	const { register } = useForm();
	const dispatch = useDispatch();
	return (
		<div className="leftPane-container">
			<div className="list-icon-opened" onClick={() => dispatch(toggleLeftPane())}>
				<List />
			</div>
			<div className="leftPane">
				<form>
					<div>
						<label htmlFor="search" className="input-label">
							Name
						</label>
						<input
							type="text"
							placeholder="Search"
							{...register("search")}
							className="input-text"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LeftPane;
