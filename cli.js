#!/usr/bin/env node
'use strict';
const meow = require('meow');
const randomWordWikipedia = require('.');

const cli = meow(`
	Usage
	  $ random-word-wikipedia [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ random-word-wikipedia
	  unicorns & rainbows
	  $ random-word-wikipedia ponies
	  ponies & rainbows
`);

console.log(randomWordWikipedia(cli.input[0] || 'unicorns'));
