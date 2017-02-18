(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['$http', 'ApiPath', 'UserService'];
function UserInfoController($http, ApiPath, UserService) {
  var reg = this;
  reg.apiPath = ApiPath;
  reg.favDishIsValid = false;
  reg.userInfo = UserService.retrieveInfo();

  reg.submit = function() {
    reg.validateFavDish(reg.userInfo.favDish);
    UserService.storeInfo(reg.userInfo);
  }

  reg.validateFavDish = function(favDish) {
    $http.get(ApiPath + '/menu_items/' + favDish + ".json")
    .then(function(response){
      reg.favDishNotValid = false;
      reg.completed = true;
    })
    .catch(function(error){
      reg.favDishNotValid = true;
      reg.completed = false;
    });
  }
}

})();
