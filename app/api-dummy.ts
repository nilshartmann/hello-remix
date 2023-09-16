export async function apiDummy(name: string, timeout = 1200) {
	const calledAt = new Date().toLocaleTimeString('de-DE', {
		hour:                   "2-digit",
		minute:                 "2-digit",
		second:                 "2-digit",
		fractionalSecondDigits: 3
	})
	console.log(`${name} Loader called at ${calledAt}`)

	await sleep(timeout);

	const fetchCompletedAt = new Date().toLocaleTimeString('de-DE', {
		hour:                   "2-digit",
		minute:                 "2-digit",
		second:                 "2-digit",
		fractionalSecondDigits: 3
	});

	console.log(`${name} Loader fetch finished at ${fetchCompletedAt}`)

	return {
		calledAt:         `${name} Loader called at ${calledAt}`,
		fetchCompletedAt: `${name} Loader fetch finished at ${fetchCompletedAt}`,
		apiCallTook: `${timeout}ms`
	}

}

async function sleep(timeout: number) {
	return new Promise(res => {
		setTimeout(res, timeout);
	});
}