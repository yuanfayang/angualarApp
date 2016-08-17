/**
 * Created by CH-YFY on 2015/9/16.
 */

'use stricet';
var demoAppRoute = angular.module('demoApp.route', ['ngRoute']);

demoAppRoute.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "tpls/login.html",
        controller: "loginController"
    }).when('/scrollPage', {
        templateUrl: "tpls/scrollpage.html",
        controller: "scrollController"
    }).when('/toggleModel', {
        templateUrl: "tpls/togglemodel.html"
    }).when('/expre', {
        templateUrl: "tpls/expression.html"
    }).when('/filter', {
        templateUrl: "tpls/filter.html"
    }).when('/ctr', {
        templateUrl: 'tpls/controllerSample.html'
    })
        .otherwise({redirectTo: '/'});
}]);