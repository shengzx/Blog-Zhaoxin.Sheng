function ajaxParam(route, headers, bodyParam, UrlParam) {
    this.method = route.Type;
    this.url = route.Url;
    if(headers)
    this.headers = headers;
    if(UrlParam)
    this.params = UrlParam;
    if(bodyParam)
    this.data = bodyParam;
}
function eventParam(website,params,Name) {
    return function (fun) {
        var a = new ajaxParam(params);
        website.ajax(a,function(data){
            if(fun) fun(data);
        });
    };
}
function compent(website, dos, Name) {
    this.name = Name;
   for(var i =0;i<dos.length;i++){
       var name = dos[i].Name;
       var a =  eventParam(website,dos[i].params,name);
       this[name] = a;
   }
}