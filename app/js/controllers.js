// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  angular;
  var controllers_module;

  controllers_module = angular.module('ciboulot.controllers', []);

  controllers_module.controller('root', [
    '$log', '$scope', '$rootScope', function($log, $scope, $rootScope) {
      $rootScope.__resources = {};
      $rootScope.__files = {};
      $rootScope.__displayed_resources = {};
      $rootScope.__partials = {};
      $rootScope.__mode = 'display';
      $scope.chiffres = ['un', 'deux', 'trois'];
      $scope['varname'] = 10;
      return $rootScope.$on('$viewContentLoaded', function() {
        return $log.info('loaded');
      });
    }
  ]);

  controllers_module.controller('markdown', [
    '$scope', '$log', '$rootScope', '$location', 'save_resource', function($scope, $log, $rootScope, $location, save_resource) {
      $scope.__save_resource = function(resource_id) {
        var markdown_text;
        markdown_text = $rootScope.displayed_resources[resource_id][0].value;
        $rootScope.resources[resource_id]['data']['text'] = markdown_text;
        return save_resource(resource_id);
      };
      return $scope.hide_procs = function() {
        return $location.hash('');
      };
    }
  ]);

  controllers_module.controller('steps', [
    '$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {
      $scope.current_step = 0;
      $scope.steps_length = void 0;
      $scope.next_step = function() {
        if ($scope.current_step < ($scope.steps_length - 1)) {
          return $scope.current_step += 1;
        }
      };
      $scope.previous_step = function() {
        if ($scope.current_step > 0) {
          return $scope.current_step -= 1;
        }
      };
      return $scope.goto_step = function(step_index) {
        return $scope.current_step = step_index;
      };
    }
  ]);

  controllers_module.controller('step', ['$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {}]);

  controllers_module.controller('error', ['$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {}]);

  controllers_module.controller('proc', [
    '$scope', '$log', '$rootScope', '$location', function($scope, $log, $rootScope, $location) {
      $scope.visible = false;
      return $scope.hide = function() {
        return $location.hash('');
      };
    }
  ]);

  controllers_module.controller('tabs', [
    '$scope', '$log', '$rootScope', '$location', function($scope, $log, $rootScope, $location) {
      $scope.current_tab = 0;
      $scope.default_tab = 0;
      return $scope.goto_tab = function(tab_index) {
        return $scope.current_tab = tab_index;
      };
    }
  ]);

  controllers_module.controller('questions', ['$scope', '$log', '$rootScope', '$location', function($scope, $log, $rootScope, $location) {}]);

  controllers_module.controller('popup', ['$scope', '$log', '$rootScope', '$location', function($scope, $log, $rootScope, $location) {}]);

  controllers_module.controller('embed', ['$scope', '$log', '$rootScope', '$location', function($scope, $log, $rootScope, $location) {}]);

}).call(this);
