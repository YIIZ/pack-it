# pack-it

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Just pack it.

## Install

via NPM (unavailable):

```
$ npm install pack-it
```

via Git URL:

```
$ npm install https://bitbucket.org/teambun/pack-it.git
```

## Usage

```sh
# pack-it -n [name] -t [type] -s [source dir] -o [output dir]
```

* [compulsory] name - project name. eg. `a20180508cqsjar`
* [compulsory] type - project type. eg. `ieg`
* [compulsory] source dir - source directory to be packed
* [optional] output dir - output directory which stores archives. Current directory by default.

## Example

```sh
# pack-it -n a20180508cqsjar -t ieg -s ./build/
```

# LICENSE

No License
