'use strict';

const fs = require('fs-extra');
const fg = require('fast-glob');

function cleanupDotfiles(dir) {
  const pattern = '**/.*';
  const dotFiles = fg.sync(pattern, {
    cwd: dir,
    onlyFiles: false,
  });

  dotFiles.forEach(file => {
    fs.removeSync(file);
  });
}

module.exports = cleanupDotfiles;
