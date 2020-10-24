'use strict';

var publicationsModule = angular.module('publicationsModule', [
    'ngRoute',
]);

publicationsModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/publications', {
                templateUrl: 'app/publications/publications.html',
                controller: [
                '$scope',
                
                function($scope){
                    siteHeaderText.value="Publications";
                }],
            });
    }
]);
