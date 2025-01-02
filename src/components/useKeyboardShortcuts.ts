import { useEffect } from "react";

const SecondaryKeys = ["ctrl", "shift", "alt", "meta"];

const useKeyboardShortcuts = (shortcuts: string, callback, isShortcutActive = true) => {
	useEffect(() => {
		if (!isShortcutActive) return;
		
		const handleKeyDown = (event) => {
			const keys = shortcuts.split("+").map((key) => key.toLowerCase());

			const mainKey = keys.find((key) => !SecondaryKeys.includes(key));
			if (!mainKey) return;

			const isCtrlPressed = keys.includes("ctrl") ? event.ctrlKey : true;
			const isShiftPressed = keys.includes("shift") ? event.shiftKey : true;
			const isAltPressed = keys.includes("alt") ? event.altKey : true;
			const isMetaPressed = keys.includes("meta") ? event.metaKey : true;

			const isMainKeyPressed = event.key.toLowerCase() === mainKey;

			if (
				isCtrlPressed &&
				isShiftPressed &&
				isAltPressed &&
				isMetaPressed &&
				isMainKeyPressed
			) {
				event.preventDefault();
				callback();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [shortcuts, callback]);
};

export default useKeyboardShortcuts;
