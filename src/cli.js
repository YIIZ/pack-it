#!/usr/bin/env node

'use strict';

const yargs = require('yargs');
const packIt = require('.');

const argv = yargs.usage('Usage: pack-it -w [word]').help('h').argv;
process.stdout.write(`${packIt(argv.w || 'unicorns')}\n`);
