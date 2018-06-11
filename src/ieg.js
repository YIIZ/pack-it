'use strict';

const path = require('path');
const fs = require('fs-extra');
const fg = require('fast-glob');

function ieg(dumpDir, packDir) {
  const patterns = {
    dotFiles: '**/.*',
    entryFiles: 'index.html',
    cdnFiles: ['*', '!index.html'],
  };

  const options = {
    cwd: dumpDir,
    onlyFiles: false,
  };

  const dotFiles = fg.sync(patterns.dotFiles, options);
  const entryFiles = fg.sync(patterns.entryFiles, options);
  const cdnFiles = fg.sync(patterns.cdnFiles, options);

  dotFiles.forEach(dotfile => {
    fs.removeSync(dotfile);
  });

  const cdnDir = path.join(packDir, 'ossweb-img/');
  fs.ensureDirSync(cdnDir);
  cdnFiles.forEach(file => {
    const sourceAbsolutePath = path.join(dumpDir, file);
    const destAbsolutePath = path.join(cdnDir, file);
    fs.moveSync(sourceAbsolutePath, destAbsolutePath);
  });

  entryFiles.forEach(entryFile => {
    const srcEntryFileAbsolutePath = path.join(dumpDir, entryFile);
    const destEntryFileAbsolutePath = path.join(packDir, entryFile);
    fs.moveSync(srcEntryFileAbsolutePath, destEntryFileAbsolutePath);
  });
}

module.exports = ieg;
