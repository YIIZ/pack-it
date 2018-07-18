# pack-it

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Just pack it.

## Features

* remove dotfiles
* package with specific format

## Installation

```
$ npm install @teambun/pack-it
```

## Usage

```sh
$ pack-it -t [type] -n [name] -s [source dir] -o [output dir]
```

| Name       | Needed | Description              | Example           |
| ---------- | ------ | ------------------------ | ----------------- |
| type       | 是     | 打包类型                 | `ieg`             |
| name       | 是     | 专题 ID                  | `a20180508cqsjar` |
| source dir | 是     | 需要打包的目录           | `build`           |
| output dir | 否     | 输出目录，默认为当前目录 | `/tmp`            |

## Example

```sh
$ pack-it -t ieg -n a20180508cqsjar -s ./build/
```

# LICENSE

MIT
