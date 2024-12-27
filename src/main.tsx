import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import CanvasPage from "./Pages/CanvasPage.tsx";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<CanvasPage />
		</Provider>
	</StrictMode>
);
