(function () {

    function DataBindingDirective () {

        return {
            require: 'ngModel',
            link: function (scope, element, attrs, model) {

                model.$render = function () {
                    model.$setViewValue(model.$modelValue);
                };

                model.$parsers.push(function (input) {
                    return input.toUpperCase()
                });

                model.$formatters.push(function(input) {
                    console.log(input)
                });

            }
        }
    }

    angular.module('directives.app')
        .directive('customDb',DataBindingDirective)
}());