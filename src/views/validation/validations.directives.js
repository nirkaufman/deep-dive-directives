(function () {
    /**
     * creates regex expression from the the given attribute, test the
     * view value against it and set the validity accordingly
     * @returns {{restrict: string, require: string, link: link}}
     * @constructor
     */
    function CustomValidation() {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attr, ctrl) {

                // create the regex obj.
                var regex = new RegExp(attr.customValidation);

                ctrl.$parsers.push(function (value) {
                    var valid = regex.test(value);
                    ctrl.$setValidity('customValidate', valid);
                    return valid ? value : undefined;
                });



                ctrl.$formatters.unshift(function (value) {
                    ctrl.$setValidity('customValidate', regex.test(value));
                    return value;
                });
            }
        }
    }

    /**
     * check the user name against an array of user names
     * from the server
     * @param http
     * @returns {{restrict: string, require: string, link: link}}
     * @constructor
     */
    function UniqueUserName(http) {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {

                http.get("http://localhost:3000/users").success(function (usernames) {
                    scope.usernames = usernames;
                    validate();
                });

                function validate() {
                    if (scope.usernames && scope.usernames.indexOf(ngModel.$viewValue) === -1) {
                        ngModel.$setValidity('unique', true);
                    } else {
                        ngModel.$setValidity('unique', false);
                    }
                }

                scope.$watch(function () {
                    return ngModel.$viewValue;
                }, validate);
            }
        }
    }

    angular.module('directives.app')
        .directive({
            'customValidation': CustomValidation,
            'uniqueUserName': ['$http', UniqueUserName]
        })
}());
