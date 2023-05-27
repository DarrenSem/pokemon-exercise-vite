// TODO: future make this use process.env (see vite.config.js)

export const mode = /\/dist\/?/.test(location.pathname) ? "production" : "development";
console.warn({mode});