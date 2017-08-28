var app = angular.module("myApp");
app.controller("getBookList", function ($scope, $http, apiService) {


  $scope.getList;

  $scope.getBookList = function () {

    var result = apiService.GetApiCall().success(function (data) {
      $scope.getList = data;
      // console.log(data)
    });
  }
  $scope.getBookList();

  $scope.deleteBook = function (id) {
    var result = apiService.DeleteApiCall(id).success(function (data) {
      console.log("Successfully Deleted");
    });

    $scope.getBookList();
  }

});

app.directive("myDirective", function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      list: '=',
      onDelete :'&'
    },
    // template: '<h4>{{listItems}}</h4>'
    // template : '<tr ng-repeat="x in list">'+
    //             '<td>{{ x.id }}</td>'+
    //             '<td><a href="#EditBook/{{x.id}}">{{ x.title }}</a></td>'+
    //             '<td>{{ x.year }}</td>'+
    //             '<td>{{ x.favorite }}</td>'+
    //             '<td><a href="" ng-click="deleteBook(x.id)">Delete</a></td>'+
    //             '</tr>'

    templateUrl : 'templates/templateTable.html'
  };
});