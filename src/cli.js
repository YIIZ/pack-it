#!/usr/bin/env node

'use strict';

const yargs = require('yargs');
const packIt = require('.');

yargs
  .command(
    '$0 <dir> [options]',
    'Pack files in directory',
    (yargs) => {
      yargs.positional('dir', {
        description: 'directory to be packed',
        type: 'string',
      });
    },
    (argv) => {
      const sourceDir = argv.dir;

      const outputDir = argv.o;
      const addTimestamp = argv.x;
      const name = argv.n;
      const type = argv.t;
      const ignores = argv.i;

      packIt(sourceDir, { outputDir, name, type, addTimestamp, ignores });
    }
  )
  .option('name', {
    alias: 'n',
    demandOption: false,
    default: 'archive',
    describe: 'archive name',
    type: 'string',
  })
  .option('type', {
    alias: 't',
    demandOption: true,
    default: 'ieg',
    choices: ['ieg'],
    describe: 'archive type',
    type: 'string',
  })
  .option('output-dir', {
    alias: 'o',
    demandOption: false,
    default: process.cwd(),
    describe: 'output directory which stores archives',
    type: 'string',
  })
  .option('add-timestamp', {
    alias: 'x',
    demandOption: false,
    default: false,
    describe: "add timestamp to archive's name",
    type: 'boolean',
  })
  .option('ignore-pattern', {
    alias: 'i',
    demandOption: false,
    describe: 'ignore file or directory to CDN',
    type: 'array',
  })
  .help('h').argv;
