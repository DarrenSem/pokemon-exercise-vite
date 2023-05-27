import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";

import { useState } from "react";

export default function FilterablePokedexTable({ pokedex }) {
	const [selectedType, setSelectedType] = useState();

	const updateType = next => {
		setSelectedType(next);
		console.log({ selectedType }, "=>", next);
	};

	const filteredPokedex = pokedex.filter(el => {
		return !selectedType || el.types.includes(selectedType);
	});

	const showing = filteredPokedex.length;

	return (
		<>
			<PokemonTypeSelection
				pokedex={pokedex}
				updateType={updateType}
				showing={showing}
			/>
			<PokedexTable pokedex={filteredPokedex} />
		</>
	);
}

// renders both the <PokemonTypeSelection /> component and <PokedexTable /> component.

// Make sure you only display Pokemon with the selected type!
