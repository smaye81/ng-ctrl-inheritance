describe('BaseCtrl', function () {

    var inheritance = require('./inheritance');

    var sut;

    var mocks = angular.mock;

    beforeEach(mocks.module(inheritance.name));

    beforeEach(mocks.inject(function ($controller) {

        sut = $controller('BaseCtrl');
    }));

    it('should return a value of common from the testCommon property', function () {
        expect(sut.testCommon).toEqual("common");
    });

    it('should invoke the setCommonSize function on the base controller', function () {
        sut.setCommonSize();

        expect(sut.commonSize).toEqual("commonSize");
    });

    it('should return a value of base from the testProp property', function () {
        expect(sut.testProp).toEqual("base");
    });

    it('should invoke the set size function on the base controller', function () {
        sut.setSize();
        expect(sut.testSize).toEqual("baseSize");
    });
});