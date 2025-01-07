import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicShapes } from "../components/ShapeEnum";
import Shape from "../components/Shape";

export interface PaintState {
	tool: BasicShapes;
	shapesOnCanvas: Shape[];
	history: Shape[][];
	future: Shape[][];
}

const initialState: PaintState = {
	tool: BasicShapes.Selection,
	shapesOnCanvas: [],
	history: [],
	future: [],
};

export const paintSlice = createSlice({
	name: "paint",
	initialState,
	reducers: {
		changeTool: (state, action: PayloadAction<BasicShapes>) => {
			state.tool = action.payload;
		},
		appendShape: (state, action: PayloadAction<Shape>) => {
			state.history = [[...state.shapesOnCanvas], ...state.history];
			state.future = [];
			state.shapesOnCanvas = [...state.shapesOnCanvas, action.payload];
		},
		updateShape: (state, action: PayloadAction<Shape>) => {
			state.history = [[...state.shapesOnCanvas], ...state.history];
			state.future = [];
			state.shapesOnCanvas = state.shapesOnCanvas.map((shape) =>
				shape.id === action.payload.id ? action.payload : shape
			);
		},
		removeShape: (state, action: PayloadAction<string>) => {
			state.history = [[...state.shapesOnCanvas], ...state.history];
			state.future = [];
			state.shapesOnCanvas = state.shapesOnCanvas.filter(
				(shape) => shape.id !== action.payload
			);
		},
		undo: (state) => {
			if (state.history.length > 0) {
				const previousState = state.history[0];
				state.future = [[...state.shapesOnCanvas], ...state.future];
				state.shapesOnCanvas = previousState;
				state.history = state.history.slice(1);
			}
		},
		redo: (state) => {
			if (state.future.length > 0) {
				const nextState = state.future[0];
				state.history = [[...state.shapesOnCanvas], ...state.history];
				state.shapesOnCanvas = nextState;
				state.future = state.future.slice(1);
			}
		},
	},
});

export const { changeTool, appendShape, updateShape, removeShape, undo, redo } = paintSlice.actions;
export default paintSlice.reducer;
