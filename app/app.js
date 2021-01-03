'use strict';

var minhasKamalPersonalWebsite = angular.module('minhasKamalPersonalWebsite', [
    'ngRoute',
    'introModule',
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
                redirectTo: '/intro',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);
