//全站服务
app.factory('website', ['$http', '$rootScope',function ($http, $rootScope) {
    var website = {
        //ajax请求对象
        ajax: function (param,fun) {
            $http(param).success(
                function (data) {
                    if(fun) fun(data);
                }
            ).error(
                function (data) {
                }
            );
        },
        //提示对象
        msg:
        {
            alert: function (msg) {
               alert(msg);
            },
            confirm: function (msg, OK_fun, Cancel_fun) {
                return alertify.confirm(msg, OK_fun, Cancel_fun);
            }
        }
    };
    return website;
}]);