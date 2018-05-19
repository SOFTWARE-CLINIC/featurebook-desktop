const {
  app,
  dialog
} = require('electron');
const featureBookPdf = require('featurebook-pdf');
const featureBookHtml = require('featurebook-html');
const applicationState = require('./application_state');

function openSpecification(cb) {
  dialog.showOpenDialog({properties: ['openDirectory']}, function (paths) {
    applicationState.writeSync(getAppDataPath(), {specDir: paths[0]});
    if (cb) {
      cb(null, paths[0]);
    }
  });
}

function exportToPDF(cb) {
  dialog.showSaveDialog(function (selectedPath) {
    const state = applicationState.readSync(getAppDataPath());
    featureBookPdf(state.specDir, selectedPath);
    if (cb) {
      cb(null, selectedPath);
    }
  });
}

function exportToHTML(cb) {
  dialog.showSaveDialog(function (selectedPath) {
    const state = applicationState.readSync(getAppDataPath());
    featureBookHtml(state.specDir, selectedPath);
    if (cb) {
      cb(null, selectedPath);
    }
  });
}

function getAppDataPath() {
  return app.getPath('appData');
}

module.exports = {
  openSpecification: openSpecification,
  exportToPDF: exportToPDF,
  exportToHTML: exportToHTML
};
