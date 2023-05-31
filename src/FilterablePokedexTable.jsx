import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonNameSearch from "./PokemonNameSearch";
import PokedexTable from "./PokedexTable";
import { STORE_KEY } from "./utils";

import { useState, useEffect, useRef } from "react";

const loadFromStorage = () => {
	const json = localStorage.getItem(STORE_KEY);
	console.log("\n**json loaded:", json);

	if (!json) return;

	const stored = JSON.parse(json);
	const { filters, focusField } = stored;
	console.log(filters);

	// debugger;
	const { selectedType: type } = filters;
	const { nameSearch: name } = filters;
	console.log("loadFromStorage:", { type, name, focusField });

	return [focusField, type, name];
};

const stateDefaults = ["type", "grass"];

let focusFields;

export default function FilterablePokedexTable({ pokedex, foo, bar }) {
	console.log("\n>>>TOP OF FilterablePokedexTable", new Date());
	// DONE: localStorage save+load for easier testing ( if querystring ?store )

	const [selectedType, setSelectedType] = useState(stateDefaults[1]);
	const [nameSearch, setNameSearch] = useState(stateDefaults[2]);

	// debugger;

	focusFields = { type: useRef(null), name: useRef(null) };

	useEffect(() => {
		console.log("\n---useEffect TOP");

		const shouldStore = true || /[?&]store\b/i.test(location.search);
		// console.log({ shouldStore }); // now ALWAYS instead of just when querystring ?store

		const [loadedFocus, loadedType, loadedName] =
			(shouldStore && loadFromStorage()) || stateDefaults;

		if (loadedFocus != null) {
			// debugger;
			focusFields[loadedFocus]?.current.focus();
		}
		setSelectedType(() => loadedType ?? "");
		setNameSearch(() => loadedName ?? "");

		// }, [defaultType, defaultName]);
	}, []); // [] = only run on first load

	const storeFilters = propsChanged => {
		const shouldStore = true || /[?&]store\b/i.test(location.search);
		// console.log({ shouldStore }); // now ALWAYS instead of just when querystring ?store
		if (!shouldStore) return;

		const { filterType, filterName } = propsChanged;
		let focus;
		const filters = {
			selectedType: selectedType || undefined,
			nameSearch: nameSearch || undefined,
		};

		// debugger;
		if (filterType != null) {
			console.log("updated filterType:", { filterType });
			filters.selectedType = filterType.trim().length ? filterType : undefined;
			focus = "type";
		}
		if (filterName != null) {
			console.log("updated filterName:", { filterName });
			filters.nameSearch = filterName.trim().length ? filterName : undefined;
			focus = "name";
		}

		const stored = { focusField: focus, filters };
		const json = JSON.stringify(stored, null, "\t");
		console.log("\n**json saved:", json);
		// debugger;
		localStorage.setItem(STORE_KEY, json);
	};

	const updateType = next => {
		// debugger;
		setSelectedType(next);
		console.log({ selectedType }, "=>", next);
		storeFilters({ filterType: next });
		focusFields.type?.current.focus();
	};

	const updateNameSearch = next => {
		// debugger;
		setNameSearch(next.trim().toLowerCase());
		console.log({ nameSearch }, "=>", next);
		storeFilters({ filterName: next });
		focusFields.name?.current.focus();
	};

	const filteredPokedex = pokedex.filter(el => {
		const filterByType = true || "TODO: based on 'visibility' or" || foo || bar;
		const filterByName = true || "TODO: based on 'visibility' or" || foo || bar;
		const t = !selectedType || el.types.includes(selectedType);
		const n = !nameSearch || el.name.trim().toLowerCase().includes(nameSearch);
		return (!filterByType || t) && (!filterByName || n);
	});

	const showing = filteredPokedex.length;

	return (
		<>
			<PokemonTypeSelection
				pokedex={pokedex}
				updateType={updateType}
				showing={showing}
				selectedType={selectedType}
				focusFields={focusFields}
			/>
			<PokemonNameSearch
				updateNameSearch={updateNameSearch}
				showing={showing}
				nameSearch={nameSearch}
				focusFields={focusFields}
			/>
			<PokedexTable pokedex={filteredPokedex} />
		</>
	);
}

// renders both the <PokemonTypeSelection /> component and <PokedexTable /> component.

// Make sure you only display Pokemon with the selected type!
