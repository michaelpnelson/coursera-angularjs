(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.checkLunch = function () {
    if ($scope.lunch.trim().length == 0) {
      $scope.message = "Please enter data first";
      return;
    }
    var lunchItems = $scope.lunch.split(',').filter(isNotEmpty);
    checkLunchItems(lunchItems);
  }

  function checkLunchItems(lunchItems) {
    if (lunchItems.length <= 3) {
      $scope.message = "Enjoy!"
    } else if (lunchItems.length > 3) {
      $scope.message = "Too much!"
    }
  }

  function isNotEmpty(stringValue) {
    return stringValue.trim().length > 0;
  }
}

})();
