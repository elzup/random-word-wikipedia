import "isomorphic-fetch";
require("es6-promise").polyfill();

export default async function main(lang, n) {
	lang = lang || "en";
	if (typeof lang !== "string") {
		throw new TypeError(`Expected a string, got ${typeof lang}`);
	}

	n = n || 1;
	if (n <= 0 || n > 10) {
		throw new TypeError(`Expected a -n (1 - 10), got ${n}`);
	}

	// rnlimit: API limit 10 or less
	const url = `http://${lang}.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=10`;

	const res = await fetch(url);
	const data = await res.json();
	const words = data.query.random;
	words.length = n;
	return words.map(v => v.title);
}
