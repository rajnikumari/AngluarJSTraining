angular.module('invoices').controller('invoiceCtrl',['$scope','invoiceService','$window',function($scope,myService,$window){

    $scope.addName=function(){
        myService.addName($scope.employees);
        $scope.name='';
    };

    $scope.employees=myService.employees;

}]);
