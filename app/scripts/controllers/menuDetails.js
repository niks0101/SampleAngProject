'use strict';

/**
 * @ngdoc function
 * @name angularGroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGroundApp
 */
angular.module('angularGroundApp')
  .controller('menuDetailsCtrl', function n($scope, $state, $stateParams) {
    $scope.product = $scope.items[$stateParams.id]
    $scope.text = "The detail was selected from parent $scope.products";
  })
