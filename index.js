require("isomorphic-fetch");
require("es6-promise").polyfill();

module.exports = (lang, n) => {
	return new Promise(function(resolve, reject) {
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

		const res = fetch(url)
			.then(res => res.json())
			.then(data => {
				const words = data.query.random;
				words.length = n;
				resolve(words.map(v => v.title));
			});
	});
};
