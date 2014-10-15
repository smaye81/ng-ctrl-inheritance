describe('ChildCtrl', function () {

    var inheritance = require('./inheritance');

    var sut;
    var mocks = angular.mock;

    beforeEach(mocks.module(inheritance.name));

    beforeEach(mocks.module("ng-ctrl-inheritance"));

    beforeEach(mocks.module(function ($provide) {

        $provide.value("$location", {});

        $provide.value("$stateParams", {

        });
    }));

    beforeEach(mocks.inject(function ($controller) {

        sut = $controller('ChildCtrl');
    }));

    it('should return a value of common from the testCommon property in the parent controller', function () {
        expect(sut.testCommon).toEqual("common");
    });

    it('should invoke the inherited setCommonSize function', function () {
        sut.setCommonSize();

        expect(sut.commonSize).toEqual("commonSize");
    });

    it('should return a value of child from the overridden testProp property in the child controller', function () {
        expect(sut.testProp).toEqual("child");
    });

    it('should return a value of childOnly from the child only property', function () {
        expect(sut.childOnlyProp).toEqual("childOnly");
    });

    it('should invoke the set size function on the child controller', function () {
        sut.setSize();
        expect(sut.testSize).toEqual("childSize");
    });

    it('should have dependency that is child only defined', function () {
        expect(sut.$stateParams).toBeDefined();
    });

});