'use strict';

var otherActivitiesModule = angular.module('otherActivitiesModule', [
    'ngRoute',
]);

otherActivitiesModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/other-activities', {
                templateUrl: 'app/other-activities/other-activities.html',
                controller: [
                '$scope',

                function($scope){
                    siteHeaderText.value="Extracurricular + Leisure Activities";
                }],
            });
    }
]);

