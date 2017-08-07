angular.module('angularGroundApp').controller('MovieController', function($scope, MovieService,MOVIE_TITLE) {
  $scope.movies=[];
  $scope.isError=false;
  $scope.errorMsg='';
  $scope.movieTitle=MOVIE_TITLE;
  $scope.loadMovies = function() {
                                    MovieService.loadMovies().then(function(data)
                                    {
                                      $scope.movies=data;
                                      $scope.isError=false;
                                    },function(data)
                                    {
                                      $scope.isError=true;
                                      $scope.errorMsg=data;
                                    });
                      };
});

