var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/GetBookList", {
        templateUrl : "feature/getBookList.html",
        controller : "getBookList"
    })
    .when("/AddBook", {
        templateUrl : "feature/addBook.html",
        controller : "addBook"
    })
    .when("/EditBook/:id", {
        templateUrl : "feature/addBook.html",
        controller : "editBook"
    })
    .otherwise({
        templateUrl : "feature/home.html"
    })
    
});
