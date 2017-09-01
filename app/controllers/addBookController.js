angular.module("myApp").controller("addBook",function($scope,$http,$location,apiService){


    $scope.titleOfPage="Add New Book Record";
    
    
    $scope.favorite = false;

     $scope.onSuccess = function(response){
           $location.path('/GetBookList');
    }

    $scope.onFailure = function(error){
      
    }

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
        // var result = apiService.PostApiCall(postData).success(function(data){  
        //        console.log(data);  
        //        $scope.clearData();
        //         $location.path('/GetBookList');
        //     }); 
        var result = apiService.PostApiCall(postData,$scope.onSuccess,$scope.onFailure)  
              
           
    }
});