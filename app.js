(function () {
  'use strict';
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyC = this;
    toBuyC.getItemBuy = ShoppingListCheckOffService.getBuyList();
    toBuyC.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var abought = this;
    abought.getBought = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuy = [
      {name: 'A', quantity : 5},
      {name: 'B', quantity : 4},
      {name: 'C', quantity : 3},
      {name: 'D', quantity : 2},
      {name: 'E', quantity : 1}
    ];
    var bought = [];

    service.getBuyList = function () {
      return toBuy;
    };

    service.getBoughtList = function () {
      return bought;
    };

    service.buyItem = function(index) {
      var item = toBuy[index];
      toBuy.splice(index,1);
      bought.push(item);
    };
  }
})();
