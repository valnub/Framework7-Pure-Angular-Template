/*jslint browser: true*/
/*global console, MyApp, angular, Framework7*/

// Init angular
var MyApp = {};

MyApp.config = {
};

MyApp.angular = angular.module('MyApp', []);

MyApp.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};