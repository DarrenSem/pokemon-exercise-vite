import { PokemonRow } from "./PokemonRow";

export function PokedexTable({ pokedex }) {
	// for each pokemon render PokemonRow(pokemon)
	return (
		<table border="1">
			{/* <thead></thead> */}
			<tbody>
				{pokedex.map(pokemon => (
					<PokemonRow
						key={pokemon.id}
						pokemon={pokemon} />
				))}
			</tbody>
		</table>
	);
}
