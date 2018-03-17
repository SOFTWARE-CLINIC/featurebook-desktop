(function () {
  'use strict';

  angular.module('scFeatureBook')
    .filter('encodeURIComponent', encodeURIComponentFilter);

  encodeURIComponentFilter.$inject = ['$window'];

  function encodeURIComponentFilter($window) {
    return $window.encodeURIComponent;
  }

}());
