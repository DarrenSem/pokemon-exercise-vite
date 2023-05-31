// export default function PokemonNameSearch({ updateNameSearch, showing }) {
export default function PokemonNameSearch({
	updateNameSearch,
	showing,
	nameSearch,
	// focused,
}) {
	// console.warn("focused.name:", focused.name);
	return (
		<div className="type-selector">
			<label htmlFor="nameSearch">🔎 Search: </label>
			{/* <label htmlFor="nameSearch">🔍 Search: </label> */}
			<input
				// autoFocus={focused.name ? 1 : 0} // cleaner than relying on selectRef = useRef(null); <select ref={selectRef}>
				autoFocus
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
