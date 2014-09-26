(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/vierws/index.html'
            })
            .otherwise({
                controller: 'HomeCtrl as vm',
                templateUrl: '404.html',
                requiresLogin: false
            });
    });

    app.controller('AppCtrl', function AppCtrl($scope, $http) {
        $scope.title = 'Demo 06';
        $scope.shoppingCartTotalItems = 5;
        $scope.shoppingCartItems = [
            { title: 'Mouse' },
            { title: 'Teclado' },
            { title: 'Mousepad' },
            { title: 'Monitor' },
            { title: 'Celular' },
        ]
    });
})();