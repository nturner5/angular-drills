angular.module("apiApp").controller('mainCtrl', function($scope, mainSvc){
    $scope.test = "controller working"
    $scope.test1 = mainSvc.test1;
    mainSvc.getData().then(function(info){
        $scope.characters = info;
    })
    
// //This is one option that works as well
// $scope.characters = mainSvc.getData() 


// // another option that woks
    // $scope.getData = function(response){  
    //     var promise = mainSvc.getData()
    //     promise.then(function(){
    //         $scope.got = response;
    //     })
    // }
    

})