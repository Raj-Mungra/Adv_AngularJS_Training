angular.module("myApp").controller("editBook",function($scope,$http,$routeParams,$location){
        $scope.id;
        $scope.titleOfPage="Edit Book Record";
       
        var getBookRecord;
        $scope.getId = function(){
            $scope.id = $routeParams.id;
            
        }
        $scope.getId();

        $scope.getBookDetails = function(){
           $http.get('http://localhost:4000/api/book/'+$scope.id).then(function(response) {  
                $scope.getBookRecord = response.data;  
               
                $scope.title = $scope.getBookRecord.title;
                $scope.year = $scope.getBookRecord.year;
                $scope.favorite =$scope.getBookRecord.favorite;
                $scope.id = $scope.getBookRecord.id;
                
             }); 
        }
         $scope.getBookDetails($scope.id);


        $scope.updateBookRecord = function(){
            var putData = {
            favorite : $scope.favorite,
            title : $scope.title,
            year : $scope.year,
            id : $scope.id
            
        }
        $http.put('http://localhost:4000/api/books', JSON.stringify(putData)).then(function(response) {  
               console.log(response);  
                $location.path('/GetBookList');
            }); 


        } 
});

