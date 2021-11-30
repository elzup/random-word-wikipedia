#!/usr/bin/env node

import meow from "meow";
import randomWordWikipedia from "./index.js";

const cli = meow(
	`
	Usage
	  $ random-word-wikipedia [lang=en]

	Options
	  -n 10 or less [Default: 1]

	Examples
	  $ random-word-wikipedia
		YuruYuri

	  $ random-word-wikipedia ja -n 3
		バダインジャラン砂漠
		内野 (印西市)
		PAC-MAN 256

`,
	{
		importMeta: import.meta,
		flags: {
			n: {
				type: "number"
			}
		}
	}
);

randomWordWikipedia(cli.input[0], cli.flags.n || 1)
	.then((res) => {
		console.log(res.join("\n"));
	})
	.catch((err) => {
		console.error("Error: err.message");
		console.error("$ random-word-wikipedia --help");
	});
