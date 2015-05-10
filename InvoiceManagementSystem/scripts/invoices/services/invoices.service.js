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
                    Items:[{
                        ItemName: 'item1',
                        ItemCost: '1000'
                    },{
                        ItemName: 'item2',
                        ItemCost: '1000'
                    }]
                },{
                    id:102,
                    AmountPaid:5000,
                    TotalCost:12000,
                    Items:[{
                        ItemName: 'item1',
                        ItemCost: '6000'
                    },{
                        ItemName: 'item2',
                        ItemCost: '6000'
                    }]
                }]
            },  {
                Id:2,
                Name:'R K',
                Address: 'PUNE',
                Invoices:[{
                    id:108,
                    AmountPaid:1000,
                    TotalCost:2000,
                    Items:[{
                        ItemName: 'item1',
                        ItemCost: '1000'
                    },{
                        ItemName: 'item2',
                        ItemCost: '1000'
                    }]
                },{
                    id:109,
                    AmountPaid:5000,
                    TotalCost:12000,
                    Items:[{
                        ItemName: 'item1',
                        ItemCost: '6000'
                    },{
                        ItemName: 'item2',
                        ItemCost: '6000'
                    }]
                }]
            }
        ],
        addCustomer: function(name,addr){
            var employee={
                Id:this.employees.length+1,
                Name:name,
                Address: addr,
                Invoices:[]
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
        addInvoiceToCustomer: function(CustId,AmountPaid,TotalCost,selectedItem) {
            var cust = this.showInvoiceForCustomer(CustId);
            var invoiceId = 0;
            if (cust.hasOwnProperty('Invoices')) {
                invoiceId = cust.Invoices.length;
            }
            var invoice = {
                id: cust.Name + (CustId + invoiceId + 1),
                AmountPaid: AmountPaid,
                TotalCost: TotalCost,
                Items: selectedItem
            };

            cust.Invoices.push(invoice);

        }
    })

}]);