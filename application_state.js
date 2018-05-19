const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const UTF8 = 'utf8';

function writeSync(appDir, state) {
  const stateDir = path.join(appDir, 'FeatureBook');
  const stateFile = path.join(stateDir, 'state.json');
  mkdirp.sync(stateDir);
  fs.writeFileSync(stateFile, JSON.stringify(state), UTF8);
  return stateFile;
}

function readSync(appDir) {
  const stateFile = path.join(appDir, 'FeatureBook', 'state.json');
  return JSON.parse(fs.readFileSync(stateFile, UTF8));
}

module.exports = {
  writeSync: writeSync,
  readSync: readSync
};
