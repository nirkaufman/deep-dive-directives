(function () {
    /**
     * simple recursive directive
     * @returns {{restrict: string, replace: boolean, scope: {collection: string}, template: string}}
     * @constructor
     */
    function CollectionDirective() {
        return {
            restrict: "A",
            replace: true,
            scope: {
                collection: '='
            },
            template: "<ul><member ng-repeat='member in collection' member='member'></member></ul>"
        }
    }

    function MemberDirective(compile) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                member: '='
            },
            template: "<li>{{member.name}}</li>",
            link: function (scope, element) {

                var collectionSt = '<span collection="member.children"></span>';

                if (angular.isArray(scope.member.children)) {

                    compile(collectionSt)(scope, function (cloned) {
                        element.append(cloned);
                    });
                }
            }
        }
    }

    /**
     * simple view directive that can be nested
     * @param http
     * @param routeParams
     * @returns {{restrict: string, terminal: boolean, priority: number, transclude: string, link: link}}
     * @constructor
     */
    function MiniView(http, routeParams) {
        return {
            restrict: 'E',
            terminal: true,
            priority: 400,
            transclude: 'element',
            link: function (scope, element, attr, ctrls, linker) {

                scope.$on('$routeChangeSuccess', function () {

                    var template = 'views/usecases/templates/' + routeParams.subview + '.html';
                    var content = http.get(template);
                    content.then(function (result) {
                        linker(scope, function (clone) {
                            clone.html(result.data);
                            element.parent().append(clone);
                        })
                    })
                });
            }
        }
    }

    /**
     * holds the compilation, to display the binding
     * @param compile
     * @returns {{terminal: boolean, priority: number, link: link}}
     * @constructor
     */
    function DebugDirective(compile) {
        return {

            terminal: true,
            priority: 1000000,

            link: function (scope, element) {

                var clone = element.clone();
                element.attr("style", "color:red");
                clone.removeAttr("nk-debug");
                var clonedElement = compile(clone)(scope);
                element.after(clonedElement);
            }
        }
    }

    function DuplicatorDirective() {
        return {
            transclude: 'element',
            scope: {
                amount: '=times'
            },


            link: function (scope, element, attrs, ctrl, transclude) {

                var times = parseInt(scope.amount, 10);
                var previous = element;
                var childScope;

                for (var i = 0; i < times; i += 1) {
                    childScope = scope.$new();
                    childScope.$index = i;

                    transclude(childScope, function (clone) {
                        previous.after(clone);
                        previous = clone;
                    });
                }


            }
        }
    }

    angular.module('directives.app')
        .directive({
            'collection': CollectionDirective,
            'member': ['$compile', MemberDirective],
            'miniView': ['$http', '$routeParams', MiniView],
            'nkDebug': ['$compile', DebugDirective],
            'duplicate': ['$compile', DuplicatorDirective]
        })
}());