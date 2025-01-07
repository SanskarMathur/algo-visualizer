import { List } from "react-bootstrap-icons";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleLeftPane } from "../redux/canvasSlice";
import "./LeftPane.css";
import { AdvancedShapes } from "./ShapeEnum";

const LeftPane = () => {
	const { register, control, handleSubmit } = useForm();
	const dispatch = useDispatch();

	const selectedShape = AdvancedShapes.Tree;

	// Reusable input field component
	const InputField = ({ label, placeholder, name }) => (
		<div className="input-group">
			<p className="input-label">{label}</p>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<input
						{...field}
						type="text"
						placeholder={placeholder}
						className="input-text"
					/>
				)}
			/>
		</div>
	);

	// Display shape-specific properties dynamically
	const displayShapeProperties = (shape) => {
		switch (shape) {
			case AdvancedShapes.Array:
				return (
					<>
						<InputField
							label="Number of Elements"
							placeholder="Enter shape size"
							name="arraySize"
						/>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="arrayElements"
						/>
					</>
				);
			case AdvancedShapes.Stack:
				return (
					<>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="stackElements"
						/>
						<div
							style={{
								display: "flex",
								gap: "2rem",
								alignItems: "center",
							}}>
							<InputField
								label="New Element"
								placeholder="Enter element to Push"
								name="elementToPush"
							/>
							<button className="btn">Push</button>
						</div>
						<button className="btn">Pop</button>
					</>
				);
			case AdvancedShapes.Queue:
				return (
					<>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="queueElements"
						/>
						<div
							style={{
								display: "flex",
								gap: "2rem",
								alignItems: "center",
							}}>
							<InputField
								label="New Element"
								placeholder="Enter element to Push"
								name="elementToEnqueue"
							/>
							<button className="btn">Enqueue</button>
						</div>
						<button className="btn">Dequeue</button>
					</>
				);
			case AdvancedShapes.Tree:
			case AdvancedShapes.LinkedList:
				return (
					<>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="arrayElements"
						/>
					</>
				);
			case AdvancedShapes.Graph:
				return (
					<>
						<InputField
							label="Graph Nodes"
							placeholder="Enter nodes (Comma Separated)"
							name="graphNodes"
						/>
						<InputField
							label="Graph Edges"
							placeholder="Enter edges (e.g., A-B, B-C)"
							name="graphEdges"
						/>
					</>
				);
			case AdvancedShapes.Matrix:
				return (
					<>
						<InputField
							label="Number of Rows"
							placeholder="Enter number of rows"
							name="matrixRows"
						/>
						<InputField
							label="Number of Columns"
							placeholder="Enter number of columns"
							name="matrixColumns"
						/>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="arrayElements"
						/>
					</>
				);
			default:
				return <p className="input-label">Select a shape to configure</p>;
		}
	};

	const onSubmit = (data) => {
		console.log("Form Data:", data);
	};

	return (
		<div className="leftPane-container">
			<div
				className="list-icon-opened"
				onClick={() => dispatch(toggleLeftPane())}
				aria-label="Close left pane">
				<List />
			</div>
			<div className="leftPane">
				<form onSubmit={handleSubmit(onSubmit)}>
					<InputField label="Name" placeholder="Enter shape name" name="shapeName" />
					{displayShapeProperties(selectedShape)}
				</form>
			</div>
		</div>
	);
};

export default LeftPane;
