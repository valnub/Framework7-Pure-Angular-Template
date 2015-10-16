/*jslint browser: true*/
/*global console, Framework7, angular, MyApp, Tindercardsjs, $*/

MyApp.init = (function () {
  'use strict';

  // Init fw7 app
  MyApp.ns('MyApp.fw7');
  MyApp.fw7.app = new Framework7({
    animateNavBackIcon: true
  });

  // Define main view
  MyApp.ns('MyApp.fw7.views.main');
  MyApp.fw7.views.main.options = {
    dynamicNavbar: true,
    domCache: true
  };
  MyApp.fw7.views.main.view = MyApp.fw7.app.addView('.view-main', MyApp.fw7.views.main.options);
  
  // Init angular
  MyApp.ns('MyApp.angular');  
  MyApp.angular = {
    app : angular.module('MyApp', [])
  };
  
  // Init controllers
  MyApp.angular.app.controller('IndexPageController', ['$scope', '$http', MyApp.pages.IndexPageController]);
  MyApp.angular.app.controller('DetailPageController', ['$scope', '$http', MyApp.pages.DetailPageController]);
  
}());