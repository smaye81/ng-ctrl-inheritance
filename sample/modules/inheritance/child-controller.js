
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