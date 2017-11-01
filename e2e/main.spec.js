const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const path = require('path');

chai.should();
chai.use(chaiAsPromised);

describe('main', function () {
    this.timeout(10000);

    let app;

    beforeEach(function () {
        app = createApp();
        return app.start();
    });
    
    beforeEach(function () {
        chaiAsPromised.transferPromiseness = app.transferPromiseness;
    });

    afterEach(function () {
        if (app && app.isRunning()) {
            return app.stop();
        }
    });

    it('should display main window', function () {
        return app.client.waitUntilWindowLoaded()
            .getWindowCount().should.eventually.equal(1)
            .getTitle().should.eventually.equal('FeatureBook');
    });

    function createApp() {
        let electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
        if (process.platform === 'win32') {
          electronPath += '.cmd'
        }
        const appPath = path.join(__dirname, '..');
    
        return new Application({
          path: electronPath,
          args: [appPath]
        });
    }
    
});