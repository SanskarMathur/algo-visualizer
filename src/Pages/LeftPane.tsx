import { List } from "react-bootstrap-icons";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AdvancedShapes, BasicShapes } from "../components/ShapeEnum";
import { toggleLeftPane } from "../redux/canvasSlice";
import { appendShape, changeTool } from "../redux/paintSlice";
import { v4 as uuidv4 } from "uuid";
import "./LeftPane.css";
import { createNewDataStructureShape } from "../components/ShapeUtils";

const LeftPane = () => {
	const { register, control, handleSubmit } = useForm();
	const tool = useSelector((state) => state.paint.tool);
	const dispatch = useDispatch();

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

	const displayShapeProperties = (shape: AdvancedShapes) => {
		switch (shape) {
			case AdvancedShapes.Array:
				return (
					<>
						<InputField
							label="Number of Elements"
							placeholder="Enter shape size"
							name="size"
						/>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="elements"
						/>
					</>
				);
			case AdvancedShapes.Stack:
				return (
					<>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="elements"
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
								name="addElement"
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
							name="elements"
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
								name="addElement"
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
							name="elements"
						/>
					</>
				);
			case AdvancedShapes.Graph:
				return (
					<>
						<InputField
							label="Graph Nodes"
							placeholder="Enter Number of nodes"
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
							name="size"
						/>
						<InputField
							label="Number of Columns"
							placeholder="Enter number of columns"
							name="numColumns"
						/>
						<InputField
							label="Elements (Comma Separated)"
							placeholder="e.g., 1,2,3"
							name="elements"
						/>
					</>
				);
			default:
				return <p className="input-label">Select a shape to configure</p>;
		}
	};

	const onSubmit = (data) => {
		const values = data.elements.split(",").map((el) => parseInt(el));
		dispatch(
			appendShape(
				createNewDataStructureShape(
					tool,
					uuidv4(),
					values,
					parseInt(values.length),
					parseInt(data.shapeX),
					parseInt(data.shapeY),
					parseInt(data.rectHeight),
					parseInt(data.rectWidth)
				)
			)
		);
	};

	return (
		<div className="leftPane-container">
			<div className="leftPane-div">
				{Object.values(AdvancedShapes).map((shape) => (
					<button
						key={shape}
						className={`shape-button ${tool === shape ? "active" : ""}`}
						onClick={() => dispatch(changeTool(shape))}>
						{shape}
					</button>
				))}
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="leftPane-form">
				<InputField label="Name" placeholder="Enter shape name" name="shapeName" />
				{displayShapeProperties(tool)}
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ maxWidth: "40%" }}>
						<InputField label="X" placeholder="Enter X" name="shapeX" />
					</div>
					<div style={{ maxWidth: "40%" }}>
						<InputField label="Y" placeholder="Enter Y" name="shapeY" />
					</div>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ maxWidth: "40%" }}>
						<InputField label="Height" placeholder="Box Height" name="rectHeight" />
					</div>
					<div style={{ maxWidth: "40%" }}>
						<InputField label="Width" placeholder="Box Width" name="rectWidth" />
					</div>
				</div>
				<button type="submit" className="btn">
					Add to Canvas
				</button>
			</form>
			<div
				className="list-icon-opened"
				onClick={() => {
					dispatch(toggleLeftPane(false));
					if (!(tool in BasicShapes)) dispatch(changeTool(BasicShapes.Move));
				}}
				aria-label="Close left pane">
				<List />
			</div>
		</div>
	);
};

export default LeftPane;
