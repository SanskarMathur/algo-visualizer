import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const minScale = 0.1;
const maxScale = 2;
const zoomStep = 0.1;

export interface CanvasState {
	position: { x: number; y: number };
	scale: number;
	leftPaneOpen: boolean;
}

const initialState: CanvasState = {
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
			if (action.payload === "out" && state.scale > minScale) {
				state.scale = Math.max(minScale, state.scale - zoomStep);
				state.position.x += (window.innerWidth / 2) * zoomStep;
				state.position.y += (window.innerHeight / 2) * zoomStep;
			} else if (action.payload === "in" && state.scale < maxScale) {
				state.scale = Math.min(maxScale, state.scale + zoomStep);
				state.position.x -= (window.innerWidth / 2) * zoomStep;
				state.position.y -= (window.innerHeight / 2) * zoomStep;
			}
		},
		resetZoom: (state) => {
			state.position = { x: 0, y: 0 };
			state.scale = 1;
		},
		toggleLeftPane: (state, action: PayloadAction<boolean>) => {
			if (action.payload !== null) state.leftPaneOpen = action.payload;
		},
	},
});

export const { changePosition, changeZoom, resetZoom, toggleLeftPane } = canvasSlice.actions;
export default canvasSlice.reducer;
