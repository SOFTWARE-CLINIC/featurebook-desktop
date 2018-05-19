const os = require('os');
const path = require('path');
const expect = require('chai').expect;
const applicationState = require('../application_state');

describe('application_state', function () {

  it('should write and then read application state', function () {
    const appDir = path.join(os.tmpdir());
    applicationState.writeSync(appDir, {specDir: '/somewhere/state.json', foo: 'bar'});
    expect(applicationState.readSync(appDir)).to.deep.equal({specDir: '/somewhere/state.json', foo: 'bar'});
  });

});
