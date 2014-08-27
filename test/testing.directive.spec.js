describe('Unit: Directives', function () {

    var element, scope;
    var model = [
        {
            name: 'Europe',
            children: [
                {
                    name: 'Italy',
                    children: [
                        {name: 'Rome'},
                        {name: 'Milan'}
                    ]},
                {name: 'Spain'}
            ]
        },

        {
            name: 'South America',
            children: [
                {name: 'Brazil'},
                {name: 'Peru' }
            ]
        }
    ];

    // get a reference to the module
    beforeEach(module('directives.app'));

    /*
     to test a directive, we need to create an html element that
     we can apply the directive on it. we will need the $compile service
     and the $rootScope to compile it.
     */
    beforeEach(inject(function ($compile, $rootScope, $injector) {

        scope = $rootScope;
        element = angular.element('<div collection="model"></div>');
        service = $injector.get('DirectiveLogic');

        $compile(element)(scope);
        scope.$apply();
    }));

    it('should be true', function () {
        expect(true).toBe(true);
    })
});