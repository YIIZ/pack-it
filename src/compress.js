'use strict';

const path = require('path');
const fs = require('fs-extra');
const archiver = require('archiver');
const localtime = require('localtime');

function timestamp() {
  const ts = localtime(null, 'YYYYMMDDThhmmss');
  return ts;
}

function compress(packDir, outputDir, zipname, { dirname, addTimestamp }) {
  return new Promise(function(resolve, reject) {
    let zipFullname;
    if (addTimestamp) {
      zipFullname = `${zipname}-${timestamp()}.zip`;
    } else {
      zipFullname = `${zipname}.zip`;
    }

    const zipPath = path.join(outputDir, `${zipFullname}`);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 5 } });
    archive.pipe(output);
    archive.directory(packDir, dirname);

    archive.on('error', reject);
    archive.on('finish', () => {
      resolve(zipFullname);
    });

    archive.finalize();
  });
}

module.exports = compress;
