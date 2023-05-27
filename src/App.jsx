import FilterablePokedexTable from "./FilterablePokedexTable";
import pokemonArray from "./pokedex.json";

function App() {
	// TODO: #11 "Part 3" create a FilterablePokedexTable and PokemonTypeSelection
	// https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff
	// create <FilterablePokedexTable /> to render <PokemonTypeSelection /> and filtered <PokedexTable />

	return <FilterablePokedexTable pokedex={pokemonArray} />;
}

export default App;
