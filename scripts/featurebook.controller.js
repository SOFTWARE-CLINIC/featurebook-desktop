(function () {
  'use strict';

  angular.module('scFeatureBook')
    .controller('FeatureBookController', FeatureBookController);

  FeatureBookController.$inject = ['$scope', 'featureBookService'];

  function FeatureBookController($scope, featureBookService) {

    function activate() {
      featureBookService.getMetadata().then(function (metadata) {
        $scope.metadata = metadata;
      });

      featureBookService.getSpecTree().then(function (specTree) {
        $scope.featuresTree = specTree;
      });
    }

    activate();

  }

}());
