import PokemonRow from "./PokemonRow";

export default function PokedexTable({ pokedex }) {
	return (
		<table border="1">
			<thead>
				<tr>
					<th>name</th>
					<th>id</th>
					<th>type</th>
					<th>sprite</th>
				</tr>
			</thead>
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
