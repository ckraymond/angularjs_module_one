(function() {
  'use strict';

  angular.module('EazeeDiet', [])
  .controller('EazeeDietController', EazeeDietController)

  EazeeDietController.$inject = ['$scope'];

  function EazeeDietController($scope) {
    $scope.foods = "";
    $scope.feedback = "Welcome Dieter";
    $scope.answerStyle = {};

    $scope.calculateDiet = function() {
      var split_foods = $scope.foods.split(",");
      var feed_back = "";

      if ($scope.foods == ""){
        feed_back = "Please enter data first.";
        $scope.answerStyle.style = {"color":"red"};
      } else {
        $scope.answerStyle.style = {"color":"green"};
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
