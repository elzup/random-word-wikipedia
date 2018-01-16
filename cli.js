#!/usr/bin/env node
"use strict";
const meow = require("meow");
const randomWordWikipedia = require(".");

const cli = meow(`
	Usage
	  $ random-word-wikipedia [lang]

	Options
	  -n 10 or less [Default: 1]

	Examples
	  $ random-word-wikipedia
		YuruYuri

	  $ random-word-wikipedia ja -n 3
		バダインジャラン砂漠
		内野 (印西市)
		PAC-MAN 256

`);

randomWordWikipedia(cli.input[0], cli.flags.n)
	.then(res => {
		console.log(res.join("\n"));
	})
	.catch(err => {
		console.error("Error: err.message");
		console.error("$ random-word-wikipedia --help");
	});
