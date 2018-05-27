'use strict';

const path = require('path');
const fs = require('fs-extra');
const archiver = require('archiver');

function timestamp() {
  const timeString = new Date().toLocaleString();
  const ts = timeString.replace(/:/g, '-').replace(/ /g, '_');
  return ts;
}

function compress(packDir, outputDir, zipname, { dirname, addTimestamp }) {
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
  archive.finalize();
}

module.exports = compress;
