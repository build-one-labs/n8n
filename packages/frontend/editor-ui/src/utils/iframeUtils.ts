/**
 * Check if the current window is an iframe.
 */
export function isIFrameOrigin() {
	return window.self !== window.top;
}
