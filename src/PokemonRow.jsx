import { mode } from "./utils";

// reusable <PokemonRow /> component (or the equivalent in your framework)
export function PokemonRow({ pokemon }) {
	// renders a row with the name, id, type and sprite image
	const { name, id, types } = pokemon;
	const sprite = `${mode === "production" ? "./" : "../"}assets/${
		pokemon.sprite
	}`;
	return (
		name &&
		id &&
		types && (
			<tr>
				<td>{name}</td>
				<td>{id}</td>
				<td>{types}</td>
				<td>
					<img
						src={sprite}
						width={"50%"}
					/>
				</td>
			</tr>
		)
	);
}
