type RandomQueryResponse = {
	query: { random: { title: string }[] };
};

const randomWordWikipedia = async (
	lang: string = "en",
	n: number = 1
): Promise<string[]> => {
	if (typeof lang !== "string") {
		throw new TypeError(`Expected a string, got ${typeof lang}`);
	}

	if (n <= 0 || n > 10) {
		throw new TypeError(`Expected a -n (1 - 10), got ${n}`);
	}

	// rnlimit: API limit 10 or less
	const url = `https://${lang}.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=${n}`;

	const res = await fetch(url);
	const data = (await res.json()) as RandomQueryResponse;
	const words = data.query.random;

	return words.slice(-n).map((v) => v.title);
};

export default randomWordWikipedia;
