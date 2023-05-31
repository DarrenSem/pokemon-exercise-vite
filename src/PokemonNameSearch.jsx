// export default function PokemonNameSearch({ updateNameSearch, showing }) {
export default function PokemonNameSearch({
	updateNameSearch,
	showing,
	nameSearch,
	focusFields,
}) {
	// console.warn("focusFields(name)", focusFields);
	return (
		<div className="type-selector">
			<label htmlFor="nameSearch">🔎 Search: </label>
			{/* <label htmlFor="nameSearch">🔍 Search: </label> */}
			<input
				// autoFocus // cleaner than relying on selectRef = useRef(null); <select ref={selectRef}>
				ref={focusFields.name}
				id="nameSearch"
				type="text"
				value={nameSearch ?? ""}
				onChange={evt => updateNameSearch(evt.target.value)}
				placeholder="- partial name -"
			/>{" "}
			(showing&nbsp;{showing})
		</div>
	);
}
