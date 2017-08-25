var app =angular.module("myApp");
app.controller("getBookList",function($scope,$http){


    $scope.getList;

    $scope.getBookList = function(){

        $http.get('http://localhost:4000/api/books').then(function(response) {  
                $scope.getList = response.data;  
            });  
   }
    $scope.getBookList();

   $scope.deleteBook = function(id){
        $http.delete('http://localhost:4000/api/book/'+id).then(function(response) {  
            console.log("Successfully Deleted");        
        });

        $scope.getBookList();
   }

});

// app.directive("myDirective",function(){
//     return {
//         restrict : 'EA',
//         replace : true,
//         scope :{
//            list : '@'
//         },
//         controller: function (scope) {
//                 this.name = scope.list;
//                 console.log("Name :",this.name);
//             },
//         controllerAs: 'ctrl',
//         templateUrl : 'templates/templateTable.html',
//         link:function(scope,element,attrs){
//           //      var listName = scope[attrs["list"]];
//             console.log('myTable=',listName);
//             }
//      };
// });

app.directive('myDirective', function(){
  return {
    restrict: 'E',
    template: [
        '<b>From directive scope:</b> {{ directivevariable }}<br/>',
        '<b>From directive controller:</b> {{ vm.controllerVariable }}<br/>',
        '<b>Adapted by directive controller:</b> {{ vm.controllerAdapted }}'
      ].join(''),
    scope: {
        directivevariable: '='
    },
    bindToController: {
      directivevariable: '='
    },
    controller: function(){
      var vm = this;
      vm.controllerVariable = 'Hi, I am from the controller';
      vm.controllerAdapted = vm.directivevariable + '(ctrl adapted)';
    },
    controllerAs: 'vm'
  }
});
