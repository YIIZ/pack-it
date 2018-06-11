# pack-it

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Just pack it.

## 功能

* 移除 dotfiles
* 针对特定上传标准进行打包

## 安装

通过 Git URL:

```
$ npm install https://bitbucket.org/teambun/pack-it.git
```

通过 NPM (暂未提供):

```
$ npm install pack-it
```

## 使用说明

```sh
$ pack-it -t [type] -n [name] -s [source dir] -o [output dir]
```

| 参数名称   | 必需 | 说明                     | 举例              |
| ---------- | ---- | ------------------------ | ----------------- |
| type       | 是   | 打包类型                 | `ieg`             |
| name       | 是   | 专题 ID                  | `a20180508cqsjar` |
| source dir | 是   | 需要打包的目录           | `build`           |
| output dir | 否   | 输出目录，默认为当前目录 | `/tmp`            |

## 举例

```sh
$ pack-it -t ieg -n a20180508cqsjar -s ./build/
```

# 许可证

无
