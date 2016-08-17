var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngCookies', 'ngTouch']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/General', { templateUrl: 'BootModel/General.html', controller: 'generalCtrl'}).
    when('/Grid', { templateUrl: 'BootModel/Grid.html', controller: 'gridCtrl' }).
    when('/blogEdit', { templateUrl: 'BootModel/blogEdit.html', controller: 'blogEditCtrl' }).
    otherwise({ redirectTo: '/General' });
}]);
