# random-word-wikipedia [![Build Status](https://travis-ci.org/elzup/random-word-wikipedia.svg?branch=master)](https://travis-ci.org/elzup/random-word-wikipedia)

> Get random word from wikipedia random page


## Install

```
$ npm install random-word-wikipedia
```


## Usage

```js
const randomWordWikipedia = require('random-word-wikipedia');

randomWordWikipedia().then(console.log);
//=> [ 'Saxifraga spathularis' ]

randomWordWikipedia('ja', 2).then(console.log);
//=> [ 'ジョン・イサーク・ブリケ', '月は闇夜に隠るが如く' ]
```


## API

### randomWordWikipedia([lang, n])

#### options

##### lang

Type: `string`<br>
Default: `en`

wikipedia lang string.

##### n

Type: `number` 1 - 10<br>
Default: 1

number of word.

## CLI

```
$ npm install --global random-word-wikipedia
```

```
$ random-word-wikipedia --help

	Usage
	  $ random-word-wikipedia [lang]

	Options
	  -n 10 or less [Default: 1]

	Examples
	  $ random-word-wikipedia
		YuruYuri

	  $ random-word-wikipedia ja -n 4
		バダインジャラン砂漠
		ゆるゆり
		内野 (印西市)
		PAC-MAN 256
```


## License

MIT © [elzup](https://elzup.com)
