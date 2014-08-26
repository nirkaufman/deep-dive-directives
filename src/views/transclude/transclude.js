(function () {

    function TranscludeController() {
        this.msg = "transclude prints";
    }

    angular.module('directives.app')
        .controller('TranscludeController', ['$scope', TranscludeController])
}());