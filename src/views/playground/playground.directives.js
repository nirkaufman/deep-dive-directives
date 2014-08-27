
(function () {

    function PrintMsg (msg) {
        console.log(msg)
    }

    function PlaygroundDirective () {

        function PlaygroundDirectiveController () {

            this.printMsg = function (msg) {
                console.log(msg)
            }
        }


        return {
            controller: PlaygroundDirectiveController,
            require:'playgroundDirective',
            template: '<div class="lead">i`m a playground directive!</div>',
            link: function (scope, elem, attr, ctrl) {
                ctrl.printMsg()
            }
        }
    }

    angular.module('directives.app')
        .directive('playgroundDirective',PlaygroundDirective)
}());