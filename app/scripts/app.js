'use strict';

/**
 * @ngdoc overview
 * @name microWorkApp
 * @description
 * # microWorkApp
 *
 * Main module of the application.
 */
angular
  .module('microWorkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/workOrder', {
        templateUrl: 'views/workOrder.html',
        controller: 'workOrderCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/workOrders', {
        templateUrl: 'views/workorders.html',
        controller: 'WorkordersCtrl'
      })
      .when('/assets', {
        templateUrl: 'views/assets.html',
        controller: 'AssetsCtrl'
      })
      .when('/pmStatus', {
        templateUrl: 'views/pmstatus.html',
        controller: 'PmstatusCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });