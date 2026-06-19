#!/usr/bin/env node

import { parseArgs } from "node:util";
import randomWordWikipedia from "./index.js";

const help = `
  Usage
    $ random-word-wikipedia [lang=en]

  Options
    -n  Number of words, 10 or less [Default: 1]

  Examples
    $ random-word-wikipedia
    $ random-word-wikipedia ja -n 3
`;

const { values, positionals } = parseArgs({
	allowPositionals: true,
	options: {
		n: { type: "string", short: "n" },
		help: { type: "boolean", short: "h" }
	}
});

if (values.help) {
	console.log(help);
	process.exit(0);
}

const lang = positionals[0];
const n = values.n === undefined ? 1 : Number(values.n);

randomWordWikipedia(lang, n)
	.then((res) => {
		console.log(res.join("\n"));
	})
	.catch((err) => {
		console.error(`Error: ${err.message}`);
		console.error("$ random-word-wikipedia --help");
		process.exit(1);
	});
