import "isomorphic-fetch";
require("es6-promise").polyfill();

export default async function main(lang, opts) {
	if (typeof lang !== "string") {
		throw new TypeError(`Expected a string, got ${typeof lang}`);
	}

	opts = Object.assign({ n: 1 }, opts);
	if (opts.n <= 0 || opts.n > 10) {
		throw new TypeError(`Expected a -n (1 - 10), got ${opts.n}`);
	}

	// rnlimit: API limit 10 or less
	const url = `http://${lang}.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=10`;

	const res = await fetch(url);
	const data = await res.json();
	const words = data.query.random;
	words.length = opts.n;
	return rords.map(v => v.title);
}
