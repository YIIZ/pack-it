'use strict';

const path = require('path');
const fs = require('fs-extra');
const fg = require('fast-glob');

function ieg(dumpDir, packDir) {
  const patterns = {
    entryFiles: 'index.html',
    cdnFiles: ['*', '!index.html'],
  };

  const options = {
    cwd: dumpDir,
    onlyFiles: false,
  };

  const entryFiles = fg.sync(patterns.entryFiles, options);
  const cdnFiles = fg.sync(patterns.cdnFiles, options);

  const cdnDir = path.join(packDir, 'ossweb-img/');
  fs.ensureDirSync(cdnDir);
  cdnFiles.forEach(file => {
    const sourceAbsolutePath = path.join(dumpDir, file);
    const destAbsolutePath = path.join(cdnDir, file);
    fs.moveSync(sourceAbsolutePath, destAbsolutePath);
  });

  entryFiles.forEach(file => {
    const sourceAbsolutePath = path.join(dumpDir, file);
    const destAbsolutePath = path.join(packDir, file);
    fs.moveSync(sourceAbsolutePath, destAbsolutePath);
  });
}

module.exports = ieg;
