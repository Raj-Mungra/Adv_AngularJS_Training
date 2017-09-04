xdescribe("Testing A Add Controller ", function () {
    var scope, addController, location,$scope;

    beforeEach(function () {
        module('myApp');
    });

    beforeEach(inject(function ($controller, $rootScope, $location) { //instantiate controller using $controller service
        scope = $rootScope.$new();
        addController = $controller('addBook', { $scope: scope });
        location = $location;
        
    }));


    it("Check if Add Controller exist", function () {
        expect(addController).toBeDefined();
    });

    it("Check Success Function", function () {
        scope.onSuccess();
        expect(location.path()).toBe('/GetBookList');
    });
});

xdescribe("Testing Edit Controller", function () {
    var scope, addController,$httpBackend,ApiService,location;

    beforeEach(function () {
        module('myApp');
    });

    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, apiService,$location) {
        //module('myApp');
        var dataObj={
            favorite : true,
            title : "TEst",
            year : 2001
        }
        $httpBackend = _$httpBackend_;
        ApiService = apiService;
        $httpBackend.expectPOST('http://localhost:4000/api/books', dataObj).respond('OK');
        scope = $rootScope.$new();
        addController = $controller('addBook', { $scope: scope });
        location = $location;  
        //$httpBackend.flush();
    }));

    it("Test if Edit Controller Exist", function () {
        expect(addController).toBeDefined();
        expect(scope.titleOfPage).toBe('Add New Book Record');
        spyOn(scope,'postBookRecord');
        spyOn(scope,'onSuccess');
        
        expect(scope.postBookRecord).toBeDefined();
        scope.postBookRecord();
        //expect(scope.result.$resolved).toBeFalsy();
        
        expect(scope.postBookRecord).toHaveBeenCalled();
        scope.onSuccess();
        expect(scope.onSuccess).toHaveBeenCalled();
        expect(location.path()).toBe('');
        //expect(deferred.resolve(scope.result)).toBe('');
        
    });


    
});

xdescribe("Testing Add Controller with API", function () {
    var scope, addController,$httpBackend,ApiService,location;
    var dataObj = {
            favorite : true,
            title : "Test123",
            year : 2004
        }
    beforeEach(function () {
        module('myApp');
    });

    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, apiService,$location) {
        $httpBackend = _$httpBackend_;
        ApiService = apiService;
        scope = $rootScope.$new();
        addController = $controller('addBook', { $scope: scope });
        location = $location;  
        location.path('/AddBook');
        
    }));

    it("Test if Add Controller Exist", function () {
        expect(addController).toBeDefined();
        expect(scope.titleOfPage).toBe('Add New Book Record');
        spyOn(scope,'postBookRecord');
        expect(location.path()).toBe('/AddBook');
        $httpBackend.expectPOST('http://localhost:4000/api/books',JSON.stringify(dataObj)).respond(location.path('/GetBookList'));
        expect(scope.postBookRecord).toBeDefined();
        scope.postBookRecord();
        expect(scope.postBookRecord).toHaveBeenCalled();
        expect(location.path()).toBe('/GetBookList');
        
    });
});



//Temp for testing


describe("Testing Get Controller with API", function () {
    var scope, getController,$httpBackend,ApiService,location;
     var responseData = [{"id":1,"title":"Harry Potter","year":2011,"favorite":true},
     {"id":2,"title":"The Hobit","year":2010,"favorite":false},
     {"id":3,"title":"The Da Vinci Code","year":2002,"favorite":true},
     {"id":4,"title":"The Lord of the ring","year":2010,"favorite":true},
     {"id":5,"title":"Jurassic Park","year":2005,"favorite":false},
     {"id":772,"title":"Test11","year":2015,"favorite":true}];
    beforeEach(function () {
        module('myApp');
    });

    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, apiService,$location) {
        $httpBackend = _$httpBackend_;
        ApiService = apiService;
        scope = $rootScope.$new();
        getController = $controller('getBookList', { $scope: scope });
        location = $location;  
       //location.path('/AddBook');
        
    }));

    it("Test if get Controller Exist", function () {
        expect(getController).toBeDefined();

        $httpBackend.expectGET('http://localhost:4000/api/books').respond(scope.getList=responseData);
        scope.getBookList();
        expect(scope.getList).toEqual(jasmine.objectContaining(responseData));
    });

});