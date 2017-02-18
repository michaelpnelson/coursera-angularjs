(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['$http', 'ApiPath', 'UserService'];
function UserInfoController($http, ApiPath, UserService) {
  var reg = this;
  reg.userInfo = UserService.retrieveInfo();
  reg.apiPath = ApiPath;

  reg.submit = function() {
    var userInfo = {};
    userInfo.firstName = reg.firstName;
    userInfo.lastName = reg.lastName;
    userInfo.email = reg.email;
    userInfo.phone = reg.phone;
    userInfo.favDish = reg.favDish;
    UserService.storeInfo(userInfo);
    reg.completed = true;
    console.log("reg.completed=" + reg.completed);
  }
}

})();
