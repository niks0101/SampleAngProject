'use strict';

describe('Main Controller test suite', function() {

  describe('MainController', function() {
    var $scope;
    beforeEach(module('angularGroundApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MainCtrl', {$scope: $scope});
    }));

    it('should return the right name of the application', function() {
      expect($scope.appName).toBe('Popcorn Time');
    });
  });
});



