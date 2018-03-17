(function () {
  'use strict';

  // TODO Based on the opened spec; do not hard code.
  const specDir = '/Users/dpacak/development/github/featurebook-examples/time_tracking';
  const nodePath = require('path');
  const featurebook = require('featurebook-api');

  angular.module('scFeatureBook')
    .factory('featureBookService', featureBookServiceFactory);

  featureBookServiceFactory.$inject = ['$q'];

  function featureBookServiceFactory($q) {
    return {
      getMetadata: getMetadata,
      getSummary: getSummary,
      getSpecTree: getSpecTree,
      getFeature: getFeature
    };

    function getMetadata() {
      return $q(function (resolve, reject) {
        featurebook.readMetadata(specDir, function (err, response) {
          resolve(response);
        });
      });
    }

    function getSpecTree() {
      return $q(function (resolve, reject) {
        featurebook.readSpecTree(specDir, function (err, response) {
          resolve(response.children);
        });
      });

    }

    function getFeature(featurePath) {
      return $q(function (resolve, reject) {
        featurebook.readFeature(nodePath.join(specDir, featurePath), function (err, response) {
          resolve(response);
        });
      });

    }

    function getSummary(path) {
      return $q(function (resolve, reject) {
        featurebook.readSummary(nodePath.join(specDir, path), function (err, response) {
          if (err) {
            return reject(null);
          }
          resolve(response);
        });
      });
    }

  }

})();
