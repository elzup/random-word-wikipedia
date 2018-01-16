import "isomorphic-fetch";
require("es6-promise").polyfill();

export default async function main(lang, opts) {
	if (typeof lang !== "string") {
		throw new TypeError(`Expected a string, got ${typeof lang}`);
	}

	opts = opts || {};

	const url = `http://${lang}.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=10`;

	const res = await fetch(url);
	const data = await res.json();
	return data.query.random[0].title;
}
