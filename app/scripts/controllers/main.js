'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];

    /*
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch(function(){
        localStorageService.add('todos', $scope.todos.join('\n'))
      });
    */

    $scope.addTodo = function(){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };

    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
      };

  });
