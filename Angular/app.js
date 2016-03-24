var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngCookies',  'ngTouch']);
app.config(['$routeProvider',"$httpProvider", function ($routeProvider,$httpProvider) {
    $routeProvider.
    when('/Index', { templateUrl: 'model/Index.html', controller: IndexCtrl }).
    when('/Index/:value', { templateUrl: 'model/Index.html', controller: IndexCtrl }).
    when('/BoxIndex', { templateUrl: 'model/BoxIndex.html', controller: BoxIndexCtrl }).
    when('/Opt_Box', { templateUrl: 'model/Opt_Box.html', controller: Opt_BoxCtrl }).
    when('/Opt_Box_2', { templateUrl: 'model/Opt_Box_2.html', controller: Opt_Box_2Ctrl }).
    when('/Opt_Goods', { templateUrl: 'model/Opt_Goods.html', controller: Opt_GoodsCtrl }).
    when('/Opt_Goods/:value', { templateUrl: 'model/Opt_Goods.html', controller: Opt_GoodsCtrl }).
    when('/PreIn', { templateUrl: 'model/PreIn.html', controller: PreInCtrl }).
    when('/Goods', { templateUrl: 'model/Goods.html', controller: GoodsCtrl }).
    when('/ScoreShop', { templateUrl: 'model/ScoreShop.html', controller: ScoreShopCtrl }).
    when('/Circle', { templateUrl: 'model/Circle.html', controller: CircleCtrl }).
    when('/test', { templateUrl: 'model/test.html', controller: testCtrl }).
    otherwise({ redirectTo: '/Index' });
    $httpProvider.interceptors.push('timestampMarker');
}])
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);
app.factory('timestampMarker', ["$rootScope", function ($rootScope) {
    var numLoadings = 0;
    var timestampMarker = {
        request: function (config) {
            numLoadings++;
            $rootScope.loading = true;
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function (response) {
            response.config.responseTimestamp = new Date().getTime();
            if ((--numLoadings) === 0) {
                $rootScope.loading = false;
            }
            return response;
        },
        responseError: function (response) {
            if ((--numLoadings) === 0) {
                $rootScope.loading = false;
            }
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return timestampMarker;
}]);
var login = angular.module('login', ['ngRoute', 'ui.bootstrap', 'ngCookies']);
login.config(['$routeProvider', "$httpProvider", function ($routeProvider, $httpProvider) {
    $routeProvider.
    when('/login', { templateUrl: 'model/login.html', controller: LoginCtrl }).
    when('/Index', { templateUrl: 'model/Index.html', controller: LoginCtrl }).
    when('/login/:value', { templateUrl: 'Model/login.html', controller: LoginCtrl }).
    when('/ProDetailed/:value', { templateUrl: 'Model/ProDetailed.html', controller: ProDetailedCtrl }).
    when('/C_Order', { templateUrl: 'Model/C_Order.html', controller: C_OrderCtrl }).
    when('/C_Order/:value', { templateUrl: 'Model/C_Order.html', controller: C_OrderCtrl }).
    when('/openid/:value', { templateUrl: 'Model/openid.html', controller: openidCtrl }).
    when('/order', { templateUrl: 'Model/order.html', controller: orderCtrl }).
    when('/AddDres', { templateUrl: 'Model/AddDres.html', controller: AddDresCtrl }).
    when('/ProAddress', { templateUrl: 'Model/ProAddress.html', controller: ProAddressCtrl }).
    when('/EvalPro/:value', { templateUrl: 'Model/EvalPro.html', controller: EvalProCtrl }).
    when('/OrderDe/:value', { templateUrl: 'Model/OrderDe.html', controller: OrderDeCtrl }).
    otherwise({ redirectTo: '/login' });
    $httpProvider.interceptors.push('timestampMarker');
}])
login.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);
login.factory('timestampMarker', ["$rootScope", function ($rootScope) {
    var numLoadings = 0;
    var timestampMarker = {
        request: function (config) {
            numLoadings++;
            $rootScope.loading = true;
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function (response) {
            response.config.responseTimestamp = new Date().getTime();
            if ((--numLoadings) === 0) {
                $rootScope.loading = false;
            }
            return response;
        },
        responseError: function (response) {
            if ((--numLoadings) === 0) {
                $rootScope.loading = false;
            }
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return timestampMarker;
}]);

var registe = angular.module('registe', ['ngRoute', 'ui.bootstrap', 'ngCookies']);
registe.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/Registe', { templateUrl: 'model/Registe.html', controller: RegisteCtrl }).
    when('/index', { templateUrl: 'model/Index.html', controller: LoginCtrl }).
    when('/login/:value', { templateUrl: 'Model/login.html', controller: LoginCtrl }).
    otherwise({ redirectTo: '/Registe' })
}])
registe.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);

