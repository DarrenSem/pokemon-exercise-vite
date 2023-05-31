// TODO: future make this use process.env (see vite.config.js)

export const isLocal = !/\bgithub/.test(location.hostname);

export const mode = /\/dist\/?/.test(location.pathname)
	? "production"
	: "development";

export const IMG_PATH = (
    isLocal ? (     // on localhost...
        mode === "production"
        ? "./dist/" // PRD
        : "../"     // DEV
    ) : (               // on GitHub...
        mode === "production"
        ? "./"          // PRD
        : "./N_A/"      // DEV
    )
) + "assets/";

export const STORE_KEY = "POKEDEX";

console.log({ isLocal }, { mode }, { IMG_PATH });
