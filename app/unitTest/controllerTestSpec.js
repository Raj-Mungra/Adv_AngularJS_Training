describe("Testing A Add Controller ", function () {
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

describe("Testing Edit Controller", function () {
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

    xit("Test if Edit Controller Exist", function () {
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