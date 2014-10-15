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