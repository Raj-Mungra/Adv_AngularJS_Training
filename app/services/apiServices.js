angular.module("myApp").service("apiService",function($http){

    var result;

    //Get all Records Present
    this.GetApiCall = function(successFunction, failureFunction){

        // result = $http.get('http://localhost:4000/api/books').success(function(response,status) {  
        //         result = response.data;  
        //     }).error(function(){
        //         alert('Something went Wrong');
        //     });  
        result = $http.get('http://localhost:4000/api/books').then(successFunction,failureFunction);
            return result;
    }

    //Get Partical Record based on Id
    this.GetRecordApiCall = function(id,successFunction, failureFunction){

        // result = $http.get('http://localhost:4000/api/book/'+id).success(function(response,status) {  
        //         result = response.data;  
        //     }).error(function(){
        //         alert('Something went Wrong');
        //     });  
        result = $http.get('http://localhost:4000/api/book/'+id).then(
                successFunction
            ,
                failureFunction
            );
            return result;
    }

    //Delete a particular record based in Id
    this.DeleteApiCall = function(id,successFunction, failureFunction){

        // result = $http.delete('http://localhost:4000/api/book/'+id).success(function(response,status) {  
        //         result = response.data;  
        //     }).error(function(){
        //         alert('Something went Wrong');
        //     });  

         result = $http.delete('http://localhost:4000/api/book/'+id).then(
                successFunction
            ,
                failureFunction
           );

            return result;
    }


    //Update a particular record based in Id
    this.PutApiCall = function(data,successFunction, failureFunction){

        // result = $http.put('http://localhost:4000/api/books',JSON.stringify(data)).success(function(response,status) {  
        //         result = response.data;  
        //     }).error(function(){
        //         alert('Something went Wrong');
        //     });  

        result = $http.put('http://localhost:4000/api/books',JSON.stringify(data)).then(
                 successFunction
            ,
                failureFunction
            );  
            return result;
    }

    //Post a particular record based in Id
    this.PostApiCall = function(data,successFunction, failureFunction){

        // result = $http.post('http://localhost:4000/api/books',JSON.stringify(data)).success(function(response,status) {  
        //         result = response.data;  
        //     }).error(function(){
        //         alert('Something went Wrong');
        //     });  
        result = $http.post('http://localhost:4000/api/books',JSON.stringify(data)).then(successFunction,failureFunction);  
            return result;
    }


});