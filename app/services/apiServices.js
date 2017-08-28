angular.module("myApp").service("apiService",function($http){

    var result;

    //Get all Records Present
    this.GetApiCall = function(){

        result = $http.get('http://localhost:4000/api/books').success(function(response,status) {  
                result = response.data;  
            }).error(function(){
                alert('Something went Wrong');
            });  

            return result;
    }

    //Get Partical Record based on Id
    this.GetRecordApiCall = function(id){

        result = $http.get('http://localhost:4000/api/book/'+id).success(function(response,status) {  
                result = response.data;  
            }).error(function(){
                alert('Something went Wrong');
            });  

            return result;
    }

    //Delete a particular record based in Id
    this.DeleteApiCall = function(id){

        result = $http.delete('http://localhost:4000/api/book/'+id).success(function(response,status) {  
                result = response.data;  
            }).error(function(){
                alert('Something went Wrong');
            });  

            return result;
    }


    //Update a particular record based in Id
    this.PutApiCall = function(data){

        result = $http.put('http://localhost:4000/api/books',JSON.stringify(data)).success(function(response,status) {  
                result = response.data;  
            }).error(function(){
                alert('Something went Wrong');
            });  

            return result;
    }

    //Post a particular record based in Id
    this.PostApiCall = function(data){

        result = $http.post('http://localhost:4000/api/books',JSON.stringify(data)).success(function(response,status) {  
                result = response.data;  
            }).error(function(){
                alert('Something went Wrong');
            });  

            return result;
    }


});