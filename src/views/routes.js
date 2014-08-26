(function () {

    function RoutesConfig(router) {

        router
            .when('/welcome', {
                templateUrl: 'views/welcome/welcome.html',
                controller: 'WelcomeController',
                controllerAs: 'welcome'
            })

            .when('/validation', {
                templateUrl: 'views/validation/validation.html',
                controller: 'ValidationController',
                controllerAs: 'validation'
            })

            .when('/login', {
                templateUrl: 'views/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })

            .when('/databinding', {
                templateUrl: 'views/databinding/databinding.html',
                controller: 'DatabindingController',
                controllerAs: 'databinding'
            })

            .when('/animations', {
                templateUrl: 'views/animations/animations.html',
                controller: 'AnimationsController',
                controllerAs: 'animations'
            })

            .when('/transclude', {
                templateUrl: 'views/transclude/transclude.html',
                controller: 'TranscludeController',
                controllerAs: 'transclude'
            })

            .when('/playground', {
                templateUrl: 'views/playground/playground.html',
                controller: 'PlaygroundController',
                controllerAs: 'playground'
            })



            .otherwise({
                redirectTo: '/welcome'
            })
    }


    angular.module('directives.app')
        .config(['$routeProvider' , RoutesConfig])
}());