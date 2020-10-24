'use strict';

var educationModule = angular.module('educationModule', [
    'ngRoute',
]);

educationModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/education', {
                templateUrl: 'app/education/education.html',
                controller: [
                '$scope',

                function($scope) {
                    siteHeaderText.value="Education";
                }],
            });
    }
]);
