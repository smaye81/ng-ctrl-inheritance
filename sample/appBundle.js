(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var router = require("./router");
var home = require("./modules/home/home");
var inheritance = require("./modules/inheritance/inheritance");

var sample = angular.module('sample', ['ui.router', 'ng-ctrl-inheritance', home.name, inheritance.name]);

sample.config(router);


},{"./modules/home/home":2,"./modules/inheritance/inheritance":5,"./router":6}],2:[function(require,module,exports){
// Create module
var home = angular.module("home", []);

module.exports = home;
},{}],3:[function(require,module,exports){
function BaseController($location) {

    // This should be overridden by the child
    this.testProp = "base";

    // This will be inherited by the child
    this.testCommon = "common";

    // Dependency that will need injected by the child also
    this.$location = $location;
}

// Both controllers will have this
BaseController.prototype.setCommonSize = function () {

    this.commonSize = "commonSize";
};

// This should be overridden by the child
BaseController.prototype.setSize = function () {
    this.testSize = "baseSize";
};

module.exports = BaseController;

},{}],4:[function(require,module,exports){

// Constructor wrapper.  This is invoked by Angular
function ChildControllerWrapper(InheritanceService, $location, $stateParams) {

    // Actual controller constructor function.  All actual controller functionality will go in this block
    // Dependencies for the base controller and for this controller are captured by a closure
    function ChildController($location, $stateParams) {

        // No need to explicitly pass the injected dependencies, provided they
        // are ordered consistently.
        ChildController.super_.apply(this, arguments);

        // Set any dependencies to this
        this.$location = $location;
        this.$stateParams = $stateParams;

        // Overrides testProp on the base controller
        this.testProp = "child";

        // Property that only appears in this controller
        this.childOnlyProp = "childOnly";
    }

    // Inherit the actual controller constructor function from the Base controller.  Note that since this uses
    //  the $controller functionality, you could pass the string or the actual constructor function if you have
    //  access to it
    InheritanceService.inherit(ChildController, 'BaseCtrl');

    // Overrides setSize on the base controller.  All prototype functions will go here
    // Note that any overriding functions must come after the call to inherit otherwise 'inherit' will overwrite
    //  these on the prototype
    ChildController.prototype.setSize = function () {


        this.testSize = "childSize";
    };

    // Return a new instance of the child constructor instead of the wrapper, making sure to pass in all
    //  dependencies.  In this example, $location is needed by the base controller and $stateParams is needed by
    //  the child only
    return new ChildController($location, $stateParams);
};

module.exports = ChildControllerWrapper;
},{}],5:[function(require,module,exports){
var baseController = require("./base-controller");
var childController = require("./child-controller");

// Create module
var inheritance = angular.module("inheritance", []);

// Define controllers
inheritance.controller('BaseCtrl', baseController);
inheritance.controller('ChildCtrl', childController);

console.log(childController);


module.exports = inheritance;
},{"./base-controller":3,"./child-controller":4}],6:[function(require,module,exports){
function Router ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: "modules/home/home.html"
        })

        .state('inheritance', {
            url: '/inheritance',
            templateUrl: "modules/inheritance/inheritance.html"
        });


    // If none of the above states are matched, use this as the fallback
    $urlRouterProvider
        .when("/", "/home")
        .otherwise('/home');
};

module.exports = Router;
},{}]},{},[1])