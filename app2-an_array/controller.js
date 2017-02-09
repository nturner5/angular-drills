angular.module("arrayApp").controller('arrayController', function($scope, mainSvc){
    $scope.test = "controller is working";
    $scope.test1 = "main service is working";
    $scope.employees = mainSvc.getData();
})