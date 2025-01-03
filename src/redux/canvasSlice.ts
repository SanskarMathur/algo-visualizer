import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CanvasState {
	position: {x: number; y: number};
	scale: number;
}

const initialState = {
	position: {x: 0, y: 0},
	scale: 1,
};

export const canvasSlice = createSlice({
	name: "canvas",
	initialState,
	reducers: {
		changePosition: (state, action: PayloadAction<{x: number; y: number}>) => {
			state.position = action.payload;
		},
	},
});

export const {changePosition} = canvasSlice.actions;
export default canvasSlice.reducer;
