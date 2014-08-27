(function () {

    function DataBindingDirective (timeout) {

        return {
            require: 'ngModel',
            link: function (scope, element, attrs, model) {

                // optional - every time the model changed
                model.$render = function () {
                    element.val(model.$modelValue);
                };

                // when the view value changed
                model.$parsers.push(function (input) {
                    return 'bad' == input ? undefined : input.toUpperCase();
                });

                // when the model value changed
                model.$formatters.push(function(input) {
                    return input.split("").reverse().join("")
                });

                // lets roll back to the model value
                element.on('click', function () {
                    console.log('0');
                    model.$rollbackViewValue();
                });
            }
        }
    }

    angular.module('directives.app')
        .directive('customDb',['$timeout',DataBindingDirective])
}());