angular.module("myApp").controller("editBook",function($scope,$http,$routeParams,$location,apiService){
        $scope.id;
        $scope.titleOfPage="Edit Book Record";
       
        var getBookRecord;
        $scope.getId = function(){
            $scope.id = $routeParams.id;
            
        }
        $scope.getId();

        $scope.getBookDetails = function(){
            var result = apiService.GetRecordApiCall($scope.id).success(function(data){  
                $scope.getBookRecord = data;  
               
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


         var result = apiService.PutApiCall(putData).success(function(data){ 
               console.log(data);  
                $location.path('/GetBookList');
            }); 


        } 
});

