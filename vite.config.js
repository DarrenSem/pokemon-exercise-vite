import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// export default defineConfig(({ command, mode, ssrBuild }) => {
export default defineConfig(({ command, mode }) => {
	// based on https://vitejs.dev/config/

	//vitejs.dev/config/shared-options.html#mode
	// "npm run dev": mode = "development"
	// "npm run preview": mode = "production"

	// https://vitejs.dev/config/shared-options.html#root
	// Default: process.cwd()
	// "Project root directory (where index.html is located).
	//  Can be an absolute path, or a path relative to the current working directory."
	// https://vitejs.dev/guide/#index-html-and-project-root

	// https://vitejs.dev/config/shared-options.html#base
	// Default: /
	// Base public path when served in development or production:
	// /foo/				// absolute pathname
	// https://foo.com/bar/	// full URL
	// Empty string or ./ (for embedded deployment)
	// https://vitejs.dev/guide/build.html#public-base-path
	// cf. https://vitejs.dev/guide/assets.html

	if (command === "serve") {
		return {
			base: `/pokemon-exercise-vite/${
				mode === "development" ? "" : "dist"
			}`,
			// base: "./",
			plugins: [react()],
		};
	} else {
		// command === "build", via "npm run build" (cf. "npm run preview")
		// "when running vite build, it will load the env variables from .env.production if there is one"
		// ^ https://vitejs.dev/guide/env-and-mode.html#modes
		return {
			base: "/pokemon-exercise-vite/dist/",
			// base: "./",
			plugins: [react()],
		};
	}
});
