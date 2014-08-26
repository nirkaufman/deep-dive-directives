(function () {

    function AnimationsController() {
        this.msg = 'animations prints'
    }

    angular.module('directives.app')
        .controller('AnimationsController', ['$scope', AnimationsController])
}());