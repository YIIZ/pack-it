# pack-it

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/pack-it.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/pack-it.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/pack-it.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/pack-it.svg)](#)


> Just pack it.

## Install

```
$ npm install pack-it
```

## Usage

```js
const packIt = require('pack-it');

packIt('unicorns');
//=> 'unicorns & rainbows'
```

## API

### packIt(input, [options])

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
$ npm install --global pack-it
```

```
$ pack-it --help

  Usage
    pack-it [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ pack-it
    unicorns & rainbows
    $ pack-it ponies
    ponies & rainbows
```
