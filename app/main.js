var app = angular.module('app', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app/views/home.html",
            controller: "HomeController"
        });
    $locationProvider.html5Mode(true);
});

app.run(function($rootScope) {
    $rootScope.page_title = ""
});