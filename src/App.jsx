import FilterablePokedexTable from "./FilterablePokedexTable";
import pokemonArray from "./pokedex.json";

function App() {
	// TODO: #15 Add free-text search field, toggles if URL /search , else current (type select dropdown)
	// DONE create <PokemonNameSearch />
	// DONE add to <FilterablePokedexTable />
	// localStorage save+load for easier testing ( if querystring ?store )
	// use reacter-router-dom to toggle
	// maybe add a route called /both (because then it combines)
	// also when I am NOT showing BOTH, make sure it does not consider BOTH in the filtering

	return <FilterablePokedexTable pokedex={pokemonArray} />;
}

export default App;
