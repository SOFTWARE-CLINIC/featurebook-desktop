const {
  app,
  BrowserWindow
} = require('electron');
const url = require('url');
const path = require('path');
const ApplicationMenu = require('./application_menu');

class Application {
  constructor() {
  }

  run() {
    const me = this;
    app.on('ready', me._createWindow);

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', function () {
      if (me.win === null) {
        me._createWindow();
      }
    });

  }

  _createWindow() {
    let me = this;
    me.win = new BrowserWindow({width: 800, height: 600});
    ApplicationMenu.create(this.win);
    me.win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));

    me.win.on('close', function () {
      me.win = null;
    });
  }
}

module.exports = Application;
