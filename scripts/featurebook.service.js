(function () {
  'use strict';

  const nodePath = require('path');
  const featurebook = require('featurebook-api');

  angular.module('scFeatureBook')
    .factory('featureBookService', featureBookServiceFactory);

  featureBookServiceFactory.$inject = ['$q'];

  function featureBookServiceFactory($q) {

    const state = getStateSync();

    return {
      getMetadata: getMetadata,
      getSummary: getSummary,
      getSpecTree: getSpecTree,
      getFeature: getFeature
    };

    function getMetadata() {
      return $q(function (resolve) {
        featurebook.readMetadata(state.specDir, function (err, response) {
          resolve(response);
        });
      });
    }

    function getSpecTree() {
      return $q(function (resolve) {
        featurebook.readSpecTree(state.specDir, function (err, response) {
          resolve(response.children);
        });
      });

    }

    function getFeature(featurePath) {
      return $q(function (resolve) {
        featurebook.readFeature(nodePath.join(state.specDir, featurePath), function (err, response) {
          resolve(response);
        });
      });

    }

    function getSummary(path) {
      return $q(function (resolve, reject) {
        featurebook.readSummary(nodePath.join(state.specDir, path), function (err, response) {
          if (err) {
            return reject(null);
          }
          resolve(response);
        });
      });
    }

  }

  function getStateSync() {
    const {app} = require('electron').remote;
    const applicationState = require('./application_state');
    return applicationState.readSync(app.getPath('appData'));
  }

})();
