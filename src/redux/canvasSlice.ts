import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CanvasState {
	position: { x: number; y: number };
	scale: number;
	leftPaneOpen: boolean;
}

const initialState = {
	position: { x: 0, y: 0 },
	scale: 1,
	leftPaneOpen: false,
};

export const canvasSlice = createSlice({
	name: "canvas",
	initialState,
	reducers: {
		changePosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
			state.position = action.payload;
		},
		changeZoom: (state, action: PayloadAction<string>) => {
			const minScale = 0.1;
			const maxScale = 2;
			if (action.payload === "out" && state.scale > minScale)
				state.scale = Math.max(minScale, state.scale - 0.1);
			else if (action.payload === "in" && state.scale < maxScale)
				state.scale = Math.min(maxScale, state.scale + 0.1);
		},
		resetZoom: (state) => {
			state.scale = 1;
		},
		toggleLeftPane: (state) => {
			state.leftPaneOpen = !state.leftPaneOpen;
		},
	},
});

export const { changePosition, changeZoom, resetZoom, toggleLeftPane } = canvasSlice.actions;
export default canvasSlice.reducer;
