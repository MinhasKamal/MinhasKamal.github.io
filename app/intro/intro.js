'use strict';

var introModule = angular.module('introModule', [
    'ngRoute',
]);

introModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/intro', {
                templateUrl: 'app/intro/intro.html',
                controller: [
                '$scope',
                
                function($scope){}],
            });
    }
]);
