(function () {

    function PanelDirective(animate) {
        return {
            restrict: 'E',
            scope: {
                heading: '@title',
                content: '@body'
            },
            templateUrl: 'views/animations/panel.html',
            link: function (scope, element, attrs) {

                var root = element.children()[0];

                scope.contentVisable = false;

                scope.toggleContent = function () {
                    if(scope.contentVisable) {
                        animate.removeClass(root, 'nk');
                        scope.contentVisable = false;
                    } else {

                        animate.addClass(root, 'nk');
                        scope.contentVisable = true;
                    }

                }
            }
        };
    }

    angular.module('directives.app')
        .directive('panel', ['$animate', PanelDirective])
}());