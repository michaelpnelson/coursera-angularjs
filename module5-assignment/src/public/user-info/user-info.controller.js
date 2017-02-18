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
    var userInfo = {};
    userInfo.firstName = reg.firstName;
    userInfo.lastName = reg.lastName;
    userInfo.email = reg.email;
    userInfo.phone = reg.phone;
    userInfo.favDish = reg.favDish;
    reg.validateFavDish(reg.favDish);
    UserService.storeInfo(userInfo);
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
