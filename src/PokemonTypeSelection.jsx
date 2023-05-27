export default function PokemonTypeSelection({ pokedex, updateType, showing }) {
	const types = Array.from(
		new Set(
			pokedex.reduce((prev, next) => {
				prev.push(...next.types);
				return prev;
			}, [])
		)
	);

	const options = types.map(el => (
		<option
			key={el}
			value={el}
		>
			{el.replace(/^(.)/, s => s.toUpperCase())}
		</option>
	));

	// console.warn({ types });
	// console.warn({ setSelectedType });

	return (
		<div className="type-selector">
			<select
				onChange={evt => updateType(evt.target.value)}
				autoFocus // cleaner than relying on selectRef = useRef(null); <select ref={selectRef}>
			>
				<option value={""}>-no filter-</option>
				{options}
				<option value={"-"}>...fog.of.war...</option>
			</select>{" "}
			(showing&nbsp;{showing})
		</div>
	);
}
