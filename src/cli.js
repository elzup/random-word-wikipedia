#!/usr/bin/env node
"use strict";
const meow = require("meow");
import randomWordWikipedia from ".";

const cli = meow(`
	Usage
	  $ random-word-wikipedia [lang]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ random-word-wikipedia
	  unicorns & rainbows
	  $ random-word-wikipedia ja
	  ponies & rainbows
`);

randomWordWikipedia(cli.input[0] || "en").then(res => {
	console.log(res);
});
