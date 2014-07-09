'use strict';

/**
 * @ngdoc function
 * @name microWorkApp.controller:AssetsCtrl
 * @description
 * # AssetsCtrl
 * Controller of the microWorkApp
 */
angular.module('microWorkApp')
  .controller('AssetsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
