(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.moveItemToBought = function (itemIndex) {
    ShoppingListCheckOffService.moveItemToBought(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [];
  var boughtItems = [];

  service.addToBuyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.addToBuyItem("carrots", "5");
  service.addToBuyItem("broccoli", "1");
  service.addToBuyItem("dark chocolate", "5 bars");
  service.addToBuyItem("Hard Bites chips", "5 bags");
  service.addToBuyItem("Fat Tug IPA", "3 bottles");

  service.moveItemToBought = function(itemIndex) {
    var itemToMove = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(itemToMove);
    console.log(boughtItems);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
