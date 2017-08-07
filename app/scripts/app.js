'use strict';

/**
 * @ngdoc overview
 * @name angularGroundApp
 * @description
 * # angularGroundApp
 *
 * Main module of the application.
 */
angular
  .module('angularGroundApp', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('menus', {
        url: '/menus',
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .state('menus.detail', {
        url: '^/:id',
        views: {
          'detail': {
            templateUrl: 'views/menuDetails.html',
            controller: 'menuDetailsCtrl'
          }
        },
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      });
  }).run(function($rootScope){ 
  
    $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
        // do something
    });
    $rootScope.$on('$stateChangeSuccess', function() {
      console.log("$state  changed");
    });
  })

