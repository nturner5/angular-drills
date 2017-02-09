angular.module('app').controller('mainCtrl', function($scope, mainSvc){
    $scope.test = "working";
    $scope.test1 = mainSvc.test1;
    $scope.employees = mainSvc.getData();
})