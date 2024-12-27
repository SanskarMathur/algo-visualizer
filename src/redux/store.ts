import { configureStore } from "@reduxjs/toolkit";
import paintReducer from "./paintSlice";

export const store = configureStore({
	reducer: {
		paint: paintReducer,
	},
});
