(function () {

    function DatabindingController(scope) {
        this.someData = {data: ''};

        this.changeModelFromScope = function () {
            this.someData.data = "Other Data"
        }

    }

    angular.module('directives.app')
        .controller('DatabindingController', ['$scope', DatabindingController])
}());