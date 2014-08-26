(function () {

    function PlaygroundDirective () {

        function PlaygroundDirectiveController () {
            this.printMsg = function (msg) {
                console.log(msg)
            }

        }

        return {
            controller: PlaygroundDirectiveController,
            require:'playgroundDirective',
            template: '<div class="lead">i`m a playground directive!</div>'
        }
    }

    angular.module('directives.app')
        .directive('playgroundDirective',PlaygroundDirective)
}());