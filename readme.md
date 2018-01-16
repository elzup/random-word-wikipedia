# random-word-wikipedia [![Build Status](https://travis-ci.org/elzup/random-word-wikipedia.svg?branch=master)](https://travis-ci.org/elzup/random-word-wikipedia)

> Get random word from wikipedia random page


## Install

```
$ npm install random-word-wikipedia
```


## Usage

```js
const randomWordWikipedia = require('random-word-wikipedia');

randomWordWikipedia('unicorns');
//=> 'unicorns & rainbows'
```


## API

### randomWordWikipedia(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global random-word-wikipedia
```

```
$ random-word-wikipedia --help

  Usage
    random-word-wikipedia [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ random-word-wikipedia
    unicorns & rainbows
    $ random-word-wikipedia ponies
    ponies & rainbows
```


## License

MIT © [elzup](https://elzup.com)
