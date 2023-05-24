// import { useState } from "react";
// import "./App.css";

const mode = /\/dist\/?/.test(location.pathname) ? "production" : "development"; // TODO: temp

const bulbasaur = {
	id: 1,
	name: "Bulbasaur",
	types: ["grass"],
	// sprite: "https://pokemon.com/pictures/bulbasaur.png",
	sprite: "001.png",
};

// reusable <PokemonRow /> component (or the equivalent in your framework)
function PokemonRow(props) {
	//  takes in bulbasaur as a property
	const { bulbasaur } = props;
	// renders a row with the name, id, type and sprite image
	const { name, id, types } = bulbasaur;
	const sprite = `${mode === "production" ? "./dist/" : "../"}assets/${
		bulbasaur.sprite
	}`;
	return (
		<table border="1">
			<td>name: {name}</td>
			<td>id: {id}</td>
			<td>type: {types}</td>
			<td>
				<img
					src={sprite}
					width={"50%"}
				/>
			</td>
		</table>
	);
}

function App() {
	// TODO: #2 "Part 1" create a reusable component
	// https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff
	// create a reusable <PokemonRow /> component (or the equivalent in your framework) that takes in bulbasaur as a property and renders a row with the name, id, type and sprite image
	return <PokemonRow bulbasaur={bulbasaur} />;
}

export default App;
