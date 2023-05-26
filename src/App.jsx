import { PokedexTable } from "./PokedexTable";
import pokemonArray from "./pokedex.json";

function App() {
	// TODO: #7 "Part 2" create a reusable component
	// https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff
	// create a <PokedexTable /> component that takes in the array and renders all the pokemon in that array.
	return <PokedexTable pokedex={pokemonArray} />;
}

export default App;
