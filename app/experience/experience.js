'use strict';

var experienceModule = angular.module('experienceModule', [
    'ngRoute',
]);

experienceModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/experience', {
                templateUrl: 'app/experience/experience.html',
                controller: [
                '$scope',
                
                function($scope){}],
            });
    }
]);

