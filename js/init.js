/*jslint browser: true*/
/*global console, Framework7, angular, MyApp, Tindercardsjs, $*/

MyApp.init = (function () {
  'use strict';
  
  var fw7App,
    fw7ViewOptions,
    mainView,
    angularApp;
  
  fw7App = new Framework7({
    animateNavBackIcon: true
  });

  fw7ViewOptions = {
    dynamicNavbar: true,
    domCache: true
  };

  mainView = fw7App.addView('.view-main', fw7ViewOptions);
  angularApp = angular.module('MyApp', []);
  
  angularApp.controller('IndexPageController', ['$scope', '$http', MyApp.pages.IndexPageController]);
  angularApp.controller('DetailPageController', ['$scope', '$http', MyApp.pages.DetailPageController]);
  
}());