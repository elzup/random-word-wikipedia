# random-word-wikipedia

[![npm](https://img.shields.io/npm/v/random-word-wikipedia.svg)](https://www.npmjs.com/package/random-word-wikipedia)
[![Node.js CI](https://github.com/elzup/random-word-wikipedia/actions/workflows/node.js.yml/badge.svg)](https://github.com/elzup/random-word-wikipedia/actions/workflows/node.js.yml)

> Get a random word (article title) from Wikipedia's random page.

- 🪶 **Zero runtime dependencies** — uses the platform `fetch`, nothing else
- 📦 **ESM + CommonJS** with bundled **TypeScript types**, for Node.js `>= 22`
- 🌍 **Any language** — pass a Wikipedia language code (`en`, `ja`, …)

## Install

```sh
npm install random-word-wikipedia
```

## Usage

```js
import randomWordWikipedia from "random-word-wikipedia";

await randomWordWikipedia();
//=> ['Saxifraga spathularis']

await randomWordWikipedia("ja", 2);
//=> ['ジョン・イサーク・ブリケ', '月は闇夜に隠るが如く']
```

CommonJS (note the `.default`):

```js
const randomWordWikipedia = require("random-word-wikipedia").default;

randomWordWikipedia().then(console.log);
```

## API

### `randomWordWikipedia(lang?, n?)`

Returns `Promise<string[]>` — an array of random article titles.

| Param  | Type     | Default | Description                                  |
| ------ | -------- | ------- | -------------------------------------------- |
| `lang` | `string` | `"en"`  | Wikipedia language code (e.g. `en`, `ja`).   |
| `n`    | `number` | `1`     | How many words to return. Must be `1`–`10`.  |

Throws a `TypeError` if `lang` is not a string or `n` is outside `1`–`10`.

## CLI

```sh
npm install --global random-word-wikipedia
```

```console
$ random-word-wikipedia
Mapania caudata

$ random-word-wikipedia ja -n 3
バダインジャラン砂漠
内野 (印西市)
PAC-MAN 256

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
