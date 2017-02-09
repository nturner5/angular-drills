angular.module("apiApp").service("mainSvc", function($http){
    this.test1 = "service is working"
    var baseUrl ="http://swapi.co/api";
    this.getData = function(){
        return $http ({
            method: 'GET',
            url: baseUrl + "/people"
        }).then(function(response){
            if (response.status == 200){
            console.log(response.data.results)
            return response.data.results
        }
        return "Main charactor killed off again"
        })
    }
})