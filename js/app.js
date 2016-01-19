// app.js

// define our application and pull in ngRoute and ngAnimate
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
animateApp.controller('sevenController', function($scope) {
    $scope.pageClass = 'page-seven';
    var firstNames = ["Cat","Dog","Monkey","Mouse","Horse"];
    var f = firstNames[Math.floor(Math.random()*firstNames.length)];
    document.getElementById("animal").innerHTML = f;
});

// page eight controller
animateApp.controller('eightController', function($scope) {
    $scope.pageClass = 'page-eight';
});

// Collection

UserList = new Mongo.Collection('users');

if(Meteor.isClient){
  Template.wpirfy.helpers({
    'user': function(){
      return UserList.find()
    }
  });

  Template.addUserForm.events({
    'submit form': function(event){
      event.preventDefault();
      var userNameVar = event.target.userName.value;
      UserList.insert({
        name: userNameVar
      });
    }
  });
}
