(function () {

    function WelcomeController() {
        this.msg = "WelcomeController prints";
    }

    angular.module('directives.app')
        .controller('WelcomeController', ['$scope', WelcomeController])
}());