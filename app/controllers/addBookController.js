angular.module("myApp").controller("addBook",function($scope,$http){


    $scope.titleOfPage="Add New Book Record";
    
    
    $scope.favorite = false;

     $scope.clearData = function(){
        $scope.favorite.checked = false;
        $scope.title = "";
        $scope.year = "";
        $scope.AddNewBookForm.$setUntouched();
    }    

    $scope.postBookRecord = function(){
        var postData = {
            favorite : $scope.favorite,
            title : $scope.title,
            year : $scope.year
            
        }
        $http.post('http://localhost:4000/api/books', JSON.stringify(postData)).then(function(response) {  
               console.log(response);  
               $scope.clearData();
                $location.path('/GetBookList');
            });  
    }
});