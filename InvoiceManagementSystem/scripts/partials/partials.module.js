angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('employee',{
            url: "/employee",
            templateUrl: "scripts/partials/employee.html"
        })
        .state('invoice',{
            url: "/invoices",
            templateUrl: "scripts/partials/invoices.html"
        })
        .state('employee.invoices',{
            url: "/invoices:emp",
            templateUrl: "scripts/partials/employee.invoices.html",
            controller:function($scope,$stateParams){
             //console.log($stateParams.emp);
             //$scope.emp_id=$stateParams.emp;
             $scope.showInvoiceForCustomer($stateParams.emp);
            //    console.log($scope.invoice);
            }
        })

        .state('#',{
            url: "/home",
            templateUrl: "scripts/partials/home.html"
        })
});