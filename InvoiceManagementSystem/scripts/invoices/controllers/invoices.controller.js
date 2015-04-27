angular.module('invoices').controller('invoiceCtrl',['$scope','invoiceService','$window',function($scope,myService,$window){

      $scope.addCustomer=function(name,addr){
         // $window.alert(name);
          myService.addCustomer(name,addr);
          $scope.name='';
          $scope.addr='';
    },
    $scope.showInvoiceForCustomer=function(customerID){
        //$window.alert(customerID);
        $scope.invoice=myService.showInvoiceForCustomer(customerID);
    },

    $scope.selectedItem=function(itm){
        myService.selectedItem(itm);
    }
    $scope.addInvoiceToCustomer=function(CustId,AmountPaid,TotalCost,selectedItm){
        $window.alert(CustId);
        $window.alert(AmountPaid);
        $window.alert(TotalCost);
        $window.alert(selectedItem);
        myService.addInvoiceToCustomer(CustId,AmountPaid,TotalCost,selectedItm);
    }
    $scope.selectedItm=myService.selectedItm;
    $scope.Items=myService.Items;
    $scope.employees=myService.employees;
}]);
