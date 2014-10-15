var router = require("./router");
var home = require("./modules/home/home");
var inheritance = require("./modules/inheritance/inheritance");

var sample = angular.module('sample', ['ui.router', 'ng-ctrl-inheritance', home.name, inheritance.name]);

sample.config(router);

