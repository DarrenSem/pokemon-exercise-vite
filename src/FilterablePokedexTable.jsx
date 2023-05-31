import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonNameSearch from "./PokemonNameSearch";
import PokedexTable from "./PokedexTable";

import { useState } from "react";

export default function FilterablePokedexTable({ pokedex, foo, bar }) {
	const [selectedType, setSelectedType] = useState();
	const [nameSearch, setNameSearch] = useState();

	console.warn("FilterablePokedexTable", new Date());
	// TODO: localStorage save+load for easier testing ( if querystring ?store )
	const shouldStore = /[?&]store\b/i.test(location.search);
	console.log({shouldStore});

	const updateType = next => {
		setSelectedType(next);
		console.log({ selectedType }, "=>", next);
	};

	const updateNameSearch = next => {
		setNameSearch(next.trim().toLowerCase());
		console.log({ nameSearch }, "=>", next);
	};

	const filteredPokedex = pokedex.filter(p => {
		const filterByType = true || "TODO: based on 'visibility' or" || foo || bar;
		const filterByName = true || "TODO: based on 'visibility' or" || foo || bar;
		const t = !selectedType || p.types.includes(selectedType);
		const n = !nameSearch || p.name.trim().toLowerCase().includes(nameSearch);
		return (!filterByType || t) && (!filterByName || n);
	});

	const showing = filteredPokedex.length;

	return (
		<>
			<PokemonTypeSelection
				pokedex={pokedex}
				updateType={updateType}
				showing={showing}
			/>
			<PokemonNameSearch
				updateNameSearch={updateNameSearch}
				showing={showing}
			/>
			<PokedexTable pokedex={filteredPokedex} />
		</>
	);
}

// renders both the <PokemonTypeSelection /> component and <PokedexTable /> component.

// Make sure you only display Pokemon with the selected type!
