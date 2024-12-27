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
		updateShape: (state, action) => {},
	},
});

export const { changeTool, appendShape, updateShape } = paintSlice.actions;
export default paintSlice.reducer;
