'use strict';

var photoGalleryModule = angular.module('photoGalleryModule', [
    'ngRoute',
]);

photoGalleryModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/photo-gallery', {
                templateUrl: 'app/photo-gallery/photo-gallery.html',
                controller: [
                '$scope',

                function($scope){
                    siteHeaderText.value="Photo Gallery";
                }],
            });
    }
]);
