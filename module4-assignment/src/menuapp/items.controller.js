(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var itemsList = this;
  itemsList.category = $stateParams.category;
  itemsList.items = items;
}

})();
