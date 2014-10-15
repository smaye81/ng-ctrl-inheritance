(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Requester = factory();
    }
}(this, function () {

    function InheritanceService($controller) {

        this.$controller = $controller;
    }

    InheritanceService.prototype.inherit = function (ctor, superController) {

        var superCtor = this.$controller(superController).constructor;
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false
            }
        });
    };

    angular.module('ng-ctrl-inheritance', [])
        .service('InheritanceService', InheritanceService);

    return InheritanceService;
}));
},{}]},{},[1])