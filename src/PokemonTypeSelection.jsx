export default function PokemonTypeSelection({
	pokedex,
	updateType,
	showing,
	selectedType,
	focusFields,
}) {
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
			// selected={el === selectedType ? "1" : ""}
		>
			{el.replace(/^(.)/, s => s.toUpperCase())}
		</option>
	));
	// console.log({ selectedType, options });

	// console.warn("focusFields(type)", focusFields);
	return (
		<div className="type-selector">
			{/* <label htmlFor="typeSelect">🝖 Type: </label> */}
			<label htmlFor="typeSelect">
				<span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
					🧲
				</span>
				{" Type: "}
			</label>
			<select
				// autoFocus // cleaner than relying on selectRef = useRef(null); <select ref={selectRef}>
				ref={focusFields.type}
				id="typeSelect"
				onChange={evt => updateType(evt.target.value)}
				value={selectedType ?? ""}
			>
				<option value={""}>- no filter -</option>
				{options}
				<option value={"-"}>...fog.of.war...</option>
			</select>{" "}
			(showing&nbsp;{showing})
		</div>
	);
}
