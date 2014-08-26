(function () {
    /**
     * holds some data for the input field
     * @constructor
     */
    function DatabindingController() {
        this.someData = {data: ''};

        this.changeModelFromScope = function () {
            this.someData.data = "Other Data"
        }
    }

    angular.module('directives.app')
        .controller('DatabindingController', DatabindingController)
}());