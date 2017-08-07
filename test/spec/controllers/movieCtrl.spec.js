'use strict';

describe('Movie Controller test suite', function () {

  describe('MovieController', function () {

    var $scope, $httpBackend, createController, $http, $q,MOVIE_TITLE;
    var deferred;
    var returnData = [{
      id: 1,
      title: "Commando",
      actors: "Arnold Schwarzenegger, Rae Dawn Chong",
      director: "Mark L. Lester",
      year: 1985
    }, {
      id: 2,
      title: "Raw Deal",
      actors: "Arnold Schwarzenegger, Kathryn Harrold, Darren McGavin",
      director: "John Irvin",
      year: 1986
    }, {
      id: 3,
      title: "Predator",
      actors: "Arnold Schwarzenegger, Carl Weathers, Bill Duke",
      director: "John McTiernan",
      year: 1987
    }];

    beforeEach(module('angularGroundApp'));

    beforeEach(inject(function ($controller, $rootScope, MovieService, _$q_) {
      MovieService = MovieService;
      $q = _$q_;
      deferred = $q.defer();
      spyOn(MovieService, 'loadMovies').and.returnValue(deferred.promise);
      $scope = $rootScope.$new();
      createController = function () {
        return $controller('MovieController', {
          $scope: $scope,
          MovieService: MovieService
        });
      };
    }));

    it("should GET all the movies when success is returned ", function () {
      createController();
      expect($scope.movieTitle).toBe('The Matrix');
    });
    it("should GET all the movies when success is returned ", function () {
      createController();
      deferred.resolve(returnData);
      $scope.loadMovies();
      $scope.$apply();
      expect($scope.movies).toBe(returnData);
    });

    it("should GET no the movies when error is returned ", function () {
      createController();
      deferred.reject('Error occured');
      $scope.loadMovies();
      $scope.$apply();
      expect($scope.isError).toBe(true);
      //expect($scope.errorMsg).toBe('Error occured');
    });
  });
});
