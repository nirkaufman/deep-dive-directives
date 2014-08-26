(function () {
    /**
     * use the task service manager to expose task functions
     * to the view
      * @param tasks
     * @constructor
     */
    function AnimationsController(tasks) {

        this.tasks = tasks.getTasks;

        this.addTask = function(task) {
            tasks.addTask(task);
        };

        this.removeTask = function (task) {
            tasks.removeTask(task)
        };

    }

    angular.module('directives.app')
        .controller('AnimationsController', ['TaskManagerService', AnimationsController])
}());