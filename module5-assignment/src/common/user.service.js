(function() {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.info = {};

  service.storeInfo = function(userInfo) {
    service.info = userInfo;
  };

  service.retrieveInfo = function() {
    return service.info;
  };
}
})();
