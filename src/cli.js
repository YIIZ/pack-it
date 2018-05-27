#!/usr/bin/env node

'use strict';

const yargs = require('yargs');
const packIt = require('.');

const argv = yargs
  .usage('Usage: $0 -n [name] -t [type] -s [source dir] -o [output dir]')
  .option('n', {
    demandOption: true,
    describe: "project's name",
    type: 'string',
  })
  .option('t', {
    demandOption: true,
    default: 'ieg',
    choices: ['ieg'],
    describe: "project's type",
    type: 'string',
  })
  .option('s', {
    demandOption: true,
    describe: 'source directory to be packed ',
    type: 'string',
  })
  .option('o', {
    demandOption: false,
    default: process.cwd(),
    describe: 'output directory which stores archives',
    type: 'string',
  })
  .help('h').argv;

const name = argv.n;
const type = argv.t;
const sourceDir = argv.s;
const outputDir = argv.o;

packIt(name, type, sourceDir, outputDir);
