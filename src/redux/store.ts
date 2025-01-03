import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./canvasSlice";
import paintReducer from "./paintSlice";

export const store = configureStore({
	reducer: {
		paint: paintReducer,
		canvas: canvasReducer,
	},
});
