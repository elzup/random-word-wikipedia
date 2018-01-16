import { parse } from "url";
import "isomorphic-fetch";
require("es6-promise").polyfill();

export function getWord(url) {
	const path = parse(url).path;
	const wordPath = path.split("/")[2];
	return decodeURI(wordPath);
}

export default async function main(input, opts) {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {};

	const randomUrl = `http://${input}.wikipedia.org/wiki/Special:Randompage`;

	const res = await fetch(randomUrl);

	if (res.status != 200) {
		return false;
	}
	const keywrod = getWord(res.url);
	return keywrod;
}
