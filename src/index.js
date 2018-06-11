'use strict';

const path = require('path');
const fs = require('fs-extra');
const ora = require('ora');
const ieg = require('./ieg');
const compress = require('./compress');

function pack(name, type, sourceDir, outputDir) {
  const TASK_ID = new Date().getTime();
  const baseDir = `/tmp/pack-it/${name}-${TASK_ID}`;
  const dumpDir = path.join(baseDir, 'dump');
  const packDir = path.join(baseDir, 'pack');

  let spinner = ora('Creating working directories').start();
  fs.ensureDirSync(baseDir);
  spinner.succeed();

  spinner = ora('Dumping source directory').start();
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
