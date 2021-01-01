'use strict';

var minhasKamalPersonalWebsite = angular.module('minhasKamalPersonalWebsite', [
    'ngRoute',
    'homeModule',
    'educationModule',
    'projectsAndPublicationsModule',
    'experienceModule',
    'otherActivitiesModule',
    'photoGalleryModule',
    'contactModule',
    'errorModule',
    'sidebarModule',
    'siteFooterModule',
]);

minhasKamalPersonalWebsite.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);
