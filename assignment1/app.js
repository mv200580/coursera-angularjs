(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.result = "";

  $scope.submit = function() {
    if ($scope.dishes.split(",").length <= 3) {
      $scope.result = "Enjoy!";
    }
    else {
      $scope.result = "Too much!";
    }
  };
}

})();
