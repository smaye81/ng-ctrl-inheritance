var baseController = require("./base-controller");
var childController = require("./child-controller");

// Create module
var inheritance = angular.module("inheritance", []);

// Define controllers
inheritance.controller('BaseCtrl', baseController);
inheritance.controller('ChildCtrl', childController);

module.exports = inheritance;