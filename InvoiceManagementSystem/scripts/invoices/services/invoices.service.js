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
                Name:'Rajni Kumari',
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
        addName: function(employee){
            this.employees.push(employee);
        }
    })
}]);