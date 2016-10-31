(function() {
  'use strict';

  angular.module('EazeeDiet', [])
  .controller('EazeeDietController', EazeeDietController)

  EazeeDietController.$inject = ['$scope'];

  function EazeeDietController($scope) {
    $scope.foods = "";
    $scope.feedback = "Welcome Dieter";

    $scope.calculateDiet = function() {
      var split_foods = $scope.foods.split(",");
      var feed_back = "";

      if ($scope.foods == ""){
        feed_back = "Please enter data first."
      } else {
        if (split_foods.length <= 3){
          feed_back = "Enjoy!";
        } else {
          feed_back = "Too Much!";
        }
      }

      $scope.feedback = feed_back;
    };
  };
})();
