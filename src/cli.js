#!/usr/bin/env node
"use strict";
const meow = require("meow");
import randomWordWikipedia from ".";

const cli = meow(`
	Usage
	  $ random-word-wikipedia [lang]

	Options
	  -n 10 or less [Default: 1]

	Examples
	  $ random-word-wikipedia
		YuruYuri

	  $ random-word-wikipedia ja -n 10
		TODO

`);

randomWordWikipedia(cli.input[0] || "en", cli.flags).then(res => {
	console.log(res);
});
