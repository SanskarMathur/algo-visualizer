import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BasicShapes from "../components/BasicShapeEnum";
import Shape from "../components/Shape";

export interface PaintState {
	tool: BasicShapes;
	shapesOnCanvas: Shape[];
}

const initialState: PaintState = {
	tool: BasicShapes.Selection,
	shapesOnCanvas: [],
};

export const paintSlice = createSlice({
	name: "paint",
	initialState,
	reducers: {
		changeTool: (state, action: PayloadAction<BasicShapes>) => {
			state.tool = action.payload;
		},
		appendShape: (state, action: PayloadAction<Shape>) => {
			state.shapesOnCanvas.push(action.payload);
		},
		updateShape: (state, action: PayloadAction<Shape>) => {
			const newShape = action.payload;
			const index = state.shapesOnCanvas.findIndex((curShape) => curShape.id === newShape.id);

			if (index >= 0) state.shapesOnCanvas[index] = newShape;
		},
	},
});

export const { changeTool, appendShape, updateShape } = paintSlice.actions;
export default paintSlice.reducer;
