import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonNameSearch from "./PokemonNameSearch";
import PokedexTable from "./PokedexTable";
import { STORE_KEY } from "./utils";

import { useState, useEffect, useMemo } from "react";

const loadFromStorage = () => {
	const json = localStorage.getItem(STORE_KEY);
	console.log("\n**json loaded:", json);

	if (!json) return;

	const stored = JSON.parse(json);
	const { focused, filters } = stored;
	console.log({ focused, filters });
	// debugger;

	const { nameSearch: name } = filters;
	const { selectedType: type } = filters;
	console.log("loadFromStorage:", { focused, name, type });

	return [focused, type, name];

	// TODO: only thing remaining is make it VISIBLY select in the dropdown and/or the text field.
	// I guess I need to useRef to update the dropdown/input fields
};

export default function FilterablePokedexTable({ pokedex, foo, bar }) {
	console.log("\n>>>TOP OF FilterablePokedexTable", new Date());
	// DONE: localStorage save+load for easier testing ( if querystring ?store )

	const defaults = useMemo(() => [{ type: 1 }, "grass"], []);
	const [focused, setFocused] = useState(defaults[0]);
	const [selectedType, setSelectedType] = useState(defaults[1]);
	const [nameSearch, setNameSearch] = useState(defaults[2]);

	useEffect(() => {
		console.log("\n---useEffect TOP");

		const shouldStore = true || /[?&]store\b/i.test(location.search);
		// console.log({ shouldStore }); // now ALWAYS instead of just when querystring ?store

		const [loadedFocus, loadedType, loadedName] =
			(shouldStore && loadFromStorage()) || defaults;

		if (loadedFocus != null) {
			setFocused(loadedFocus);
			// setFocused(() => {
			// debugger;
			// 	return loadedFocus;
			// });
		}
		setSelectedType(() => loadedType ?? "");
		setNameSearch(() => loadedName ?? "");

		// }, [defaultType, defaultName]);
	}, [defaults]); // [] = only run on first load

	const storeFilters = propsChanged => {
		const shouldStore = true || /[?&]store\b/i.test(location.search);
		// console.log({ shouldStore }); // now ALWAYS instead of just when querystring ?store
		if (!shouldStore) return;

		const { filterType, filterName } = propsChanged;
		let focus = {};
		const filters = {
			selectedType: selectedType || undefined,
			nameSearch: nameSearch || undefined,
		};

		// debugger;
		if (filterType != null) {
			console.log("updated filterType:", { filterType });
			filters.selectedType = filterType.trim().length ? filterType : undefined;
			focus = { type: 1 };
		}
		if (filterName != null) {
			console.log("updated filterName:", { filterName });
			filters.nameSearch = filterName.trim().length ? filterName : undefined;
			focus = { name: 1 };
		}

		const stored = { focused: focus, filters };
		const json = JSON.stringify(stored, null, "\t");
		console.log("\n**json saved:", json);
		// debugger;
		localStorage.setItem(STORE_KEY, json);
	};

	const updateType = next => {
		setFocused({ type: 1 });
		setSelectedType(next);
		console.log({ selectedType }, "=>", next);
		storeFilters({ filterType: next });
	};

	const updateNameSearch = next => {
		setFocused({ name: 1 });
		setNameSearch(next.trim().toLowerCase());
		console.log({ nameSearch }, "=>", next);
		storeFilters({ filterName: next });
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
				focused={focused}
			/>
			<PokemonNameSearch
				updateNameSearch={updateNameSearch}
				showing={showing}
				nameSearch={nameSearch}
				focused={focused}
			/>
			<PokedexTable pokedex={filteredPokedex} />
		</>
	);
}

// renders both the <PokemonTypeSelection /> component and <PokedexTable /> component.

// Make sure you only display Pokemon with the selected type!
