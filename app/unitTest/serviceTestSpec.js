xdescribe('Service Test', function () { //describe your object type
  var scope, myctrl, ApiService, $httpBackend, responseData;

  beforeEach(module('myApp')); //load module<br />

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, apiService) { //instantiate controller using $controller service
    //scope = $rootScope.$new();
    //myctrl = $controller('getBookList', { $scope: scope });
    $httpBackend = _$httpBackend_;
    ApiService = apiService;
  }));

  //Check if service is defined
  it('Service should be defined', function () {
    expect(ApiService).toBeDefined();
  });

  //Test GET/id API Service Function
  it('GetRecord Api Test', function () {
    //expect(scope.favorite).toBe('false'); //pass
    var id = 4;
    $httpBackend.expectGET('http://localhost:4000/api/book/' + id).respond({ "id": 4, "title": "The Lord of the ring", "year": 2010, "favorite": true });
    ApiService.GetRecordApiCall(id).then(function (resData) {
      expect(resData.data).toEqual(jasmine.objectContaining({ "id": 4, "title": "The Lord of the ring", "year": 2010, "favorite": true }));
    });
    $httpBackend.flush();
  });

  //Test GET API Service Function
  it('Get Api Test', function () {
    var responseData = [{ "id": 1, "title": "Harry Potter", "year": 2011, "favorite": true },
    { "id": 2, "title": "The Hobit", "year": 2010, "favorite": false },
    { "id": 3, "title": "The Da Vinci Code", "year": 2002, "favorite": true },
    { "id": 4, "title": "The Lord of the ring", "year": 2010, "favorite": true },
    { "id": 5, "title": "Jurassic Park", "year": 2005, "favorite": false },
    { "id": 913, "title": "Test11", "year": 2014, "favorite": false }];
    //expect(scope.favorite).toBe('false'); //pass
    $httpBackend.expectGET('http://localhost:4000/api/books').respond(responseData);
    ApiService.GetApiCall().then(function (resData) {
      expect(resData.data).toEqual(jasmine.objectContaining(responseData));
    });
    $httpBackend.flush();
  });

  //Test DELETE API Service Function
  it('DeleteRecord Api Test', function () {  //write tests
    //expect(scope.favorite).toBe('false'); //pass
    var id = 4;
    $httpBackend.expectDELETE('http://localhost:4000/api/book/' + id).respond('OK');
    ApiService.DeleteApiCall(id).then(function (resData) {
      expect(resData.status).toBe(200);
    });
    $httpBackend.flush();
  });


  //Test PUT API Service Function
  it('PutRecord Api Test', function () {  //write tests
    //expect(scope.favorite).toBe('false'); //pass
    var dataObj = {
      id: 4,
      title: 'The Lord of the ring',
      year: 2005,
      favorite: false
    }
    $httpBackend.expectPUT('http://localhost:4000/api/books', dataObj).respond('OK');
    ApiService.PutApiCall(dataObj).then(function (resData) {
      expect(resData.status).toBe(200);
    });
    $httpBackend.flush();
  });


  //Test POST API Service Function
  it('PostRecord Api Test', function () {  //write tests
    //expect(scope.favorite).toBe('false'); //pass
    var dataObj = {
      title: 'Test11',
      year: 2000,
      favorite: false
    }
    $httpBackend.expectPOST('http://localhost:4000/api/books', dataObj).respond('OK');
    ApiService.PostApiCall(dataObj).then(function (resData) {
      expect(1).toBe(1);
      expect(resData.status).toBe(200);
    });
    $httpBackend.flush();
  });
});