'use strict';

/**
 * @ngdoc function
 * @name microWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the microWorkApp
 */
angular.module('microWorkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
