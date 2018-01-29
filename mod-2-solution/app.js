(function(){
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItemsToBuy();
  buy.buyItem = function(index){
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;
  
  var itemsToBuy = [
    { name: 'strawberries', quantity: '1 box'},
    { name: 'bananas', quantity: '1 bunch'},
    { name: 'cereal', quantity: '1 box'},
    { name: 'bread', quantity: '1 loaf'},
    { name: 'peanut butter', quantity: '1 jar'},
  ];

  var itemsBought = [];

  service.getItemsToBuy = function() {
    return itemsToBuy;
  };

  service.getBoughtItems = function(){
    return itemsBought;
  };

  service.buyItem = function(itemIndex){
    var item = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(item);
  };

}

})();