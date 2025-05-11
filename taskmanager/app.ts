/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js" />

var app = angular.module("taskApp", []);

// Task service
app.service('taskService', function () {
  var tasks = [];

  this.getTasks = function () {
    return tasks;
  };

  this.addTask = function (title) {
    var newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    tasks.push(newTask);
  };

  this.toggleTaskCompletion = function (task) {
    task.completed = !task.completed;
  };

  this.deleteTask = function (task) {
    var index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  };
});

// Task manager controller
app.controller("taskController", function ($scope, taskService) {
  $scope.tasks = taskService.getTasks();
  $scope.taskTitle = '';

  $scope.addTask = function () {
    if ($scope.taskTitle) {
      taskService.addTask($scope.taskTitle);
      $scope.taskTitle = '';
    }
  };

  $scope.toggleCompletion = function (task) {
    taskService.toggleTaskCompletion(task);
  };

  $scope.deleteTask = function (task) {
    taskService.deleteTask(task);
  };
});
