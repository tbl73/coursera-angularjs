(function(){
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.items = "";
  $scope.message = "";

  $scope.checkLunch = function(){
    var msg = getMessage($scope.items);
    $scope.message = msg;
  };

  function getMessage(string){
    var msg = "";
    //get array from string then remove empty items
    var items = string.split(',').filter(function(x){
      return (x.trim() != "");
    });
    var length = items.length;
    //set message according to array length
    if (length == 0) {
      msg = "Please enter data first.";
      $scope.msgColor = "red";
    } else if (length >= 1 && length <= 3) {
        msg = "Enjoy!";
        $scope.msgColor = "green";
    } else {
        msg = "Too much!"
        $scope.msgColor = "green";
    };
    return msg;
  };
}

})();