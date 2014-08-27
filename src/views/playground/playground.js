(function () {

    function PlaygroundController (scope){


    }

    function Config (provide) {

        provide.decorator('ngClickDirective', function ($delegate){
            console.log($delegate);
            return $delegate
        })

    }

    angular.module('directives.app')
        .controller('PlaygroundController', ['$scope', PlaygroundController])
        .config(['$provide', Config])
}());