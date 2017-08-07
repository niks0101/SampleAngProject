describe('basic Movie Service test', function () {
  var MovieService, httpBackend;
  beforeEach(function () {
    module('angularGroundApp');

    inject(function (_MovieService_, _$httpBackend_,_MOVIE_TITLE_) {
      MovieService = _MovieService_;
      httpBackend = _$httpBackend_;
      MOVIE_TITLE=_MOVIE_TITLE_;
    });

  });

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  it('should loadMovies from movieService success code', function () {

    var returnData = 'Hello';

    httpBackend.expectGET('http://localhost/foo').respond(returnData);


    var returnedPromise = MovieService.loadMovies();

    var result;
    returnedPromise.then(function (response) {
      result = response;
    });
    httpBackend.flush();
    expect(result.data).toEqual('Hello');
  });



  it('should loadMovies from movieService success code', function () {

    var returnData = 'Hello';


    httpBackend
      .expect('GET', 'http://localhost/foo')
      .respond(500, { errorMessage: 'Error Occured' });


    var returnedPromise = MovieService.loadMovies();

    var result, errorMessage;
    returnedPromise.then(function (response) {
      result = response;
    }, function (response) {
       console.log(response.errorMessage);
       errorMessage= response.errorMessage;
      });
    httpBackend.flush();
    expect(result).toBeUndefined();
  });


});
