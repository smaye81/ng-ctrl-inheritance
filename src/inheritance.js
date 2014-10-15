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