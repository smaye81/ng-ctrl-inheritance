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
