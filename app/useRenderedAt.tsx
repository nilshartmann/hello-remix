export function useRenderedAt(compname: string) {
	const renderedAt = new Date().toLocaleTimeString('de-DE', {
		hour:                   "2-digit",
		minute:                 "2-digit",
		second:                 "2-digit",
		fractionalSecondDigits: 3
	})

	console.log(`${compname} rendered at`, renderedAt);

	return <p>{compname} rendered at {renderedAt}</p>

}