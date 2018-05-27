'use strict';

const path = require('path');
const fs = require('fs-extra');
const uuid = require('uuid/v4');
const debug = require('debug')('pack-it');
const ieg = require('./ieg');
const compress = require('./compress');

function pack(name, type, sourceDir, outputDir) {
  const TASK_ID = uuid();
  const dumpsDir = '/tmp/pack-it/dumps';
  const packsDir = '/tmp/pack-it/packs';
  const dumpDir = path.join(dumpsDir, `${name}-${TASK_ID}`);
  const packDir = path.join(packsDir, `${name}-${TASK_ID}`);

  debug(`creating ${dumpsDir}`);
  fs.ensureDirSync(dumpsDir);
  fs.ensureDirSync(packsDir);

  debug(`${sourceDir} -> ${dumpDir}`);
  fs.copySync(sourceDir, dumpDir);

  if (type === 'ieg') {
    ieg(dumpDir, packDir);
  }

  compress(packDir, outputDir, name, { dirname: name, addTimestamp: true });
}

module.exports = pack;
