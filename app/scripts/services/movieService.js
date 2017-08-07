angular.module('angularGroundApp').service('MovieService', function ($http, $q,MOVIE_TITLE) {
    var movieTitle=MOVIE_TITLE;
    this.loadMovies = function (movieTitle) {
        var deferedObj = $q.defer();
        $http.get('http://localhost/foo')
            .then(function (data, status, headers, config) {
                deferedObj.resolve(data);
            },
           function (data, status, headers, config) {
                deferedObj.reject(data);
            });

        return deferedObj.promise;
    }
});
