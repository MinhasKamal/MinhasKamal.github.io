'use strict';

var projectsModule = angular.module('projectsModule', [
    'ngRoute',
]);

projectsModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/projects', {
                templateUrl: 'app/projects/projects.html',
                controller: [
                '$scope',

                function($scope){
                    siteHeaderText.value="Selected Open-Source Projects";
                }],
            });
    }
]);
