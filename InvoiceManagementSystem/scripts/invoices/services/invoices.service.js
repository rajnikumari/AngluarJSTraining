angular.module('invoices').factory("invoiceService",[function(){
    return({
        employees:[
            {
                Id:1,
                Name:'Rajni Kumari',
                Address: 'PUNE',
                Invoices:[{
                    id:101,
                    AmountPaid:1000,
                    TotalCost:2000,
                    Items:['item1','item2']
                },{
                    id:102,
                    AmountPaid:5000,
                    TotalCost:12000,
                    Items:['item16','item19']
                }]
            },  {
                Id:2,
                Name:'R K',
                Address: 'PUNE',
                Invoices:[{
                    id:108,
                    AmountPaid:1000,
                    TotalCost:2000,
                    Items:['item1','item2']
                },{
                    id:109,
                    AmountPaid:5000,
                    TotalCost:12000,
                    Items:['item16','item19']
                }]
            }
        ],
        addCustomer: function(name,addr){
            var employee={
                Id:this.employees.length+1,
                Name:name,
                Address: addr
            };
            this.employees.push(employee);
        },
        showInvoiceForCustomer: function(customerID){
            for (var i = 0; i < this.employees.length; i++) {
               if(customerID==this.employees[i].Id){
                  return  this.employees[i];

               }
            }
        },
        Items: [
        'item1',
        'item2',
        'item16',
        'item19'
    ],
    selectedItm:[],
    selectedItem:function(itm){
        this.selectedItm.push(itm);
    }


    })

}]);