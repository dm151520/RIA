// app.js

var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMessages']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

        // page one
        .when('/', {
            templateUrl: 'page-one.html',
            controller: 'oneController'
        })

        // page two
        .when('/two', {
            templateUrl: 'page-two.html',
            controller: 'twoController'
        })

        // page three
        .when('/three', {
            templateUrl: 'page-three.html',
            controller: 'threeController'
        })

        // page four
        .when('/four', {
            templateUrl: 'page-four.html',
            controller: 'fourController'
        })

        // page five
        .when('/five', {
            templateUrl: 'page-five.html',
            controller: 'fiveController'
        })

        // page six
        .when('/six', {
            templateUrl: 'page-six.html',
            controller: 'sixController'
        })

        // page seven
        .when('/seven', {
            templateUrl: 'page-seven.html',
            controller: 'sevenController'
        })

        // page eight
        .when('/eight', {
            templateUrl: 'page-eight.html',
            controller: 'eightController'
        });
});

// CONTROLLERS ============================================
// page one controller
animateApp.controller('oneController', function($scope) {
    $scope.pageClass = 'page-one';
});

// page two controller
animateApp.controller('twoController', function($scope) {
    $scope.pageClass = 'page-two';
});

// page three controller
animateApp.controller('threeController', function($scope) {
    $scope.pageClass = 'page-three';
});

// page four controller
animateApp.controller('fourController', function($scope) {
    $scope.pageClass = 'page-four';
});

// page five controller
animateApp.controller('fiveController', function($scope) {
    $scope.pageClass = 'page-five';
});

// page six controller
animateApp.controller('sixController', function($scope) {
    $scope.pageClass = 'page-six';
});

// page seven controller
animateApp.controller('sevenController', function ($scope){
    $scope.pageClass = 'page-seven';
    var firstNames = ["<img src='pics/animal-01.png' height='400'/>", "<img src='pics/animal-02.png' height='400'/>", "<img src='pics/animal-03.png' height='400'/>", "<img src='pics/animal-04.png' height='400'/>", "<img src='pics/animal-05.png' height='400'/>", "<img src='pics/animal-06.png' height='400'/>", "<img src='pics/animal-07.png' height='400'/>", "<img src='pics/animal-08.png' height='400'/>", "<img src='pics/animal-09.png' height='400'/>", "<img src='pics/animal-10.png' height='400'/>"];
    var f = firstNames[Math.floor(Math.random()*firstNames.length)];
    document.getElementById("animal").innerHTML = f;
});

// page eight controller
animateApp.controller('eightController', function($scope) {
    $scope.pageClass = 'page-eight';
});
