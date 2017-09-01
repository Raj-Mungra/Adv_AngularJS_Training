angular.module("myApp").controller("editBook",function($scope,$http,$routeParams,$location,apiService){
        $scope.id;
        $scope.titleOfPage="Edit Book Record";
       
        var getBookRecord;
        $scope.getId = function(){
            $scope.id = $routeParams.id;
            
        }
        $scope.getId();

        $scope.onSuccess = function(response){
            $scope.getBookRecord = response.data;

            $scope.title = $scope.title = $scope.getBookRecord.title;
            $scope.year = $scope.getBookRecord.year;
            $scope.favorite =$scope.getBookRecord.favorite;
            $scope.id = $scope.getBookRecord.id; 
        }

        $scope.onFailure = function(error){
      
        }

        $scope.getBookDetails = function(){
            // var result = apiService.GetRecordApiCall($scope.id).success(function(data){  
            //     $scope.getBookRecord = data;  
               
            //     $scope.title = $scope.getBookRecord.title;
            //     $scope.year = $scope.getBookRecord.year;
            //     $scope.favorite =$scope.getBookRecord.favorite;
            //     $scope.id = $scope.getBookRecord.id;
                
            //  }); 
                var result = apiService.GetRecordApiCall($scope.id,$scope.onSuccess,$scope.onFailure);

        }
         $scope.getBookDetails($scope.id);


        $scope.updateBookRecord = function(){
            var putData = {
            favorite : $scope.favorite,
            title : $scope.title,
            year : $scope.year,
            id : $scope.id
            
            }
        //  var result = apiService.PutApiCall(putData).success(function(data){ 
        //        console.log(data);  
        //         $location.path('/GetBookList');
        //     }); 
            $scope.result= apiService.PutApiCall(putData,function(response){
               // $scope.onSuccess(response); 
                $location.path('/GetBookList');
            },$scope.onFailure);
            
        } 
});

