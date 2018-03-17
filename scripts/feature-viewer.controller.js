(function () {
  'use strict';

  angular.module('scFeatureBook')
    .controller('FeatureViewerController', FeatureViewerController);

  FeatureViewerController.$inject = ['$scope', '$route'];

  function FeatureViewerController($scope, $route) {
    $scope.gherkinDocument = $route.current.locals.gherkinDocument;
  }

}());
