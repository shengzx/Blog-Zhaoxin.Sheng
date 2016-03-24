var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngCookies', 'ngTouch']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/General', { templateUrl: 'BootModel/General.html', controller: GeneralCtrl }).
    when('/Grid', { templateUrl: 'BootModel/Grid.html', controller: GeneralCtrl }).
    otherwise({ redirectTo: '/General' });
}])
