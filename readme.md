# random-word-wikipedia [![Node.js CI](https://github.com/elzup/random-word-wikipedia/actions/workflows/node.js.yml/badge.svg)](https://github.com/elzup/random-word-wikipedia/actions/workflows/node.js.yml)

> Get random word from wikipedia random page

ESM-only, zero dependencies. Requires Node.js >= 22.

## Install

```
$ npm install random-word-wikipedia
```

## Usage

```js
import randomWordWikipedia from "random-word-wikipedia";

randomWordWikipedia().then(console.log);
//=> [ 'Saxifraga spathularis' ]

randomWordWikipedia("ja", 2).then(console.log);
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
    $ random-word-wikipedia [lang=en]

  Options
    -n  Number of words, 10 or less [Default: 1]

  Examples
    $ random-word-wikipedia
    $ random-word-wikipedia ja -n 3
```

## License

MIT © [elzup](https://elzup.com)
