'use strict';

const path = require('path');
const fs = require('fs-extra');
const uuid = require('uuid/v4');
const ora = require('ora');
const ieg = require('./ieg');
const compress = require('./compress');

function pack(name, type, sourceDir, outputDir) {
  const TASK_ID = uuid();
  const dumpsDir = '/tmp/pack-it/dumps';
  const packsDir = '/tmp/pack-it/packs';
  const dumpDir = path.join(dumpsDir, `${name}-${TASK_ID}`);
  const packDir = path.join(packsDir, `${name}-${TASK_ID}`);

  let spinner = ora('Creating working dirs').start();
  fs.ensureDirSync(dumpsDir);
  fs.ensureDirSync(packsDir);
  spinner.succeed();

  spinner = ora('Dumping source dir').start();
  fs.copySync(sourceDir, dumpDir);
  spinner.succeed();

  if (type === 'ieg') {
    spinner = ora(`Pack it as type - ${type}`).start();
    ieg(dumpDir, packDir);
    spinner.succeed();
  }

  spinner = ora('Compressing').start();
  compress(packDir, outputDir, name, { dirname: name, addTimestamp: true });
  spinner.succeed();
}

module.exports = pack;
