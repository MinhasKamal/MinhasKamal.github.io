'use strict';

var projectsAndPublicationsModule = angular.module('projectsAndPublicationsModule', [
    'ngRoute',
]);

projectsAndPublicationsModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/projects-and-publications', {
                templateUrl: 'app/projects-and-publications/projects-and-publications.html',
                controller: [
                '$scope',

                function($scope){}],
            });
    }
]);
