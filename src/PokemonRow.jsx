import { IMG_PATH } from "./utils";

export default function PokemonRow({ pokemon }) {
	const { name, id, types } = pokemon;

	const sprite = `${IMG_PATH}${pokemon.sprite}`;

	return (
		name &&
		id &&
		types && (
			<tr>
				<td>{name}</td>
				<td>{id}</td>
				<td>{types.join(", ")}</td>
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
