angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/state1/list");

    $stateProvider
        .state('state1',{
            url: "/state1",
            templateUrl: "scripts/partials/state1.html"
        })
        .state('state2',{
            url: "/state2",
            templateUrl: "scripts/partials/state2.html"
        })
        .state('state1.list',{
            url: "/list",
            templateUrl: "scripts/partials/state1.list.html",
            controller:function($scope){
                $scope.items=["Item 1","Item 2","Item 3"]
            }
        })
        .state('state1.table',{
            url: "/table",
            templateUrl: "scripts/partials/state1.table.html",
            controller:function($scope){
                $scope.items=["Item 4","Item 5","Item 6"]
            }
        })

        .state('state1.table.list',{
            //URL can be left bank, it is only used for showing url in the browser
            url: "",
            templateUrl: "scripts/partials/state1.table.list.html",
            controller:function($scope){
                $scope.items=["Item 1","Item 2","Item 3"]
            }
        })


});