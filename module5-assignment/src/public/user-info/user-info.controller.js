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
  // reg.favDishName = 'q';
  // reg.favDishDesc = 'r';

  reg.submit = function() {
    reg.validateFavDish(reg.userInfo.favDishShortName);
    UserService.storeInfo(reg.userInfo);
  }

  reg.validateFavDish = function(favDishShortName) {
    $http.get(ApiPath + '/menu_items/' + favDishShortName + ".json")
    .then(function(response){
      reg.favDishNotValid = false;
      reg.userInfo.favDishName = response.data.name;
      reg.userInfo.favDishDesc = response.data.description;
      reg.completed = true;
    })
    .catch(function(error){
      reg.favDishNotValid = true;
      reg.completed = false;
    });
  }
}

})();
