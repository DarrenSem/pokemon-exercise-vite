// TODO: future make this use process.env (see vite.config.js)
const mode = /\/dist\/?/.test(location.pathname) ? "production" : "development";

// reusable <PokemonRow /> component (or the equivalent in your framework)
function PokemonRow({ pokemon }) {
	// renders a row with the name, id, type and sprite image
	const { name, id, types } = pokemon;
	const sprite = `${mode === "production" ? "./" : "../"}assets/${
		pokemon.sprite
	}`;
	return (
		<tr>
			<td>name: {name}</td>
			<td>id: {id}</td>
			<td>type: {types}</td>
			<td>
				<img
					src={sprite}
					width={"50%"}
				/>
			</td>
		</tr>
	);
}

function PokedexTable({ pokedex }) {
	// for each pokemon render PokemonRow(pokemon)
	return (
		<table border="1">
			{/* <thead></thead> */}
			<tbody>
				{pokedex.map(pokemon => (
					<PokemonRow
						key={pokemon.id}
						pokemon={pokemon}
					/>
				))}
			</tbody>
		</table>
	);
}

const pokemonArray = [
	{
		id: 1,
		name: "Bulbasaur",
		types: ["grass"],
		// sprite: "https://pokemon.com/pictures/bulbasaur.png",
		sprite: "001.png",
	},
	//  {
	//   id: 2,
	//   ...
	// }, ...
];

function App() {
	// TODO: #7 "Part 2" create a reusable component
	// https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff
	// create a <PokedexTable /> component that takes in the array and renders all the pokemon in that array.
	return <PokedexTable pokedex={pokemonArray} />;
}

export default App;
