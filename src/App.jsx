import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	// EXAMPLE: eslint-disable-next-line no-unused-vars
	// let unused = 9;
	// or .eslintrc.cjs: rules: { ..., 'no-unused-vars': 'warn', ... }

	/* eslint-disable react/jsx-no-target-blank */
	// eslint-disable-next-line react/jsx-no-target-blank
	return (
		<>
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn m0r3
			</p>
		</>
	);
}

export default App;
