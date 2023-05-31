// export default function PokemonNameSearch({ updateNameSearch, showing }) {
export default function PokemonNameSearch({ updateNameSearch, showing }) {
	return (
		<div className="type-selector">
			<label htmlFor="nameSearch">🔎 Search: </label>
			{/* <label htmlFor="nameSearch">🔍 Search: </label> */}
			<input
				id="nameSearch"
				type="text"
				onChange={evt => updateNameSearch(evt.target.value)}
				placeholder="- name -"
				// TODO: LATER autoFocus // cleaner than relying on selectRef = useRef(null); <select ref={selectRef}>
				// autoFocus
			/>
			(showing&nbsp;{showing})
		</div>
	);
}
