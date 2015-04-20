angular.module('names').controller('nameCtrl',['$scope','nameService','$window',function($scope,myService,$window){

    $scope.addName=function(){
        myService.addName($scope.name);
        $scope.name='';
    };

    $scope.names=myService.items;
}]);
