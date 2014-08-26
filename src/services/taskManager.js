(function () {

    function TaskManagerService () {
        var tasks = [];

        this.addTask = function (task) {
            tasks.push(task);
        };

        this.removeTask = function (task) {
            tasks.splice(tasks.indexOf(task), 1);
        };

        this.getTasks = function () {
            return tasks;
        }
    }

    angular.module('directives.app')
        .service('TaskManagerService',TaskManagerService)
}());