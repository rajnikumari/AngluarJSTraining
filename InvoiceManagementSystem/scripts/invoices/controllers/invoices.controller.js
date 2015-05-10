angular.module('invoices').controller('invoiceCtrl',['$scope','invoiceService','$window',function($scope,myService,$window){

      $scope.addCustomer=function(name,addr){
         // $window.alert(name);
          myService.addCustomer(name,addr);
          $scope.name='';
          $scope.addr='';
    },
    $scope.showInvoiceForCustomer=function(customerID){
       // $window.alert(customerID);
        $scope.invoice=myService.showInvoiceForCustomer(customerID);
      //  $window.alert( $scope.invoice);
    },
    $scope.addInvoiceToCustomer=function(CustId,AmountPaid){
      //  $window.alert(CustId);
       // $window.alert(AmountPaid);
      //  $window.alert($scope.selectedItem);
        var TotalCost=0;
        for(var i = 0; i < $scope.selectedItemList.length; i++){
            TotalCost=parseFloat(TotalCost)+parseFloat($scope.selectedItemList[i].ItemCost);
        }
       // $window.alert(TotalCost);
        myService.addInvoiceToCustomer(CustId,AmountPaid,TotalCost, $scope.selectedItemList);
        $scope.TotalCost=0;
        $scope.selectedItemList=[];
    },
    $scope.addItem= function(ItemName,ItemCost){
       var item={
            ItemName:ItemName,
            ItemCost:ItemCost
        }
        $scope.selectedItemList.push(item);
        $scope.TotalCost=parseFloat($scope.TotalCost)+parseFloat(ItemCost);
        $scope.ItemCost='';
        $scope.ItemName='';
    }
    $scope.TotalCost=0;
    $scope.selectedItemList=[];
    $scope.Items=myService.Items;
    $scope.employees=myService.employees;

}]);
