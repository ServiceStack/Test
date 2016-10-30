/// <reference path="../typings/index.d.ts"/>
System.register(["jquery", "ss-utils", "servicestack-client", "./Test.dtos"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jquery_1, servicestack_client_1, Test_dtos_1;
    var client;
    function createUrl(path, params) {
        for (var key in params) {
            path += path.indexOf('?') <= 0 ? "?" : "&";
            path += key + "=" + encodeURIComponent(params[key]);
        }
        return path;
    }
    return {
        setters:[
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {},
            function (servicestack_client_1_1) {
                servicestack_client_1 = servicestack_client_1_1;
            },
            function (Test_dtos_1_1) {
                Test_dtos_1 = Test_dtos_1_1;
            }],
        execute: function() {
            client = new servicestack_client_1.JsonServiceClient("/");
            jquery_1.default(document).bindHandlers({
                sayHello: function () {
                    var request = new Test_dtos_1.Hello();
                    request.name = this.value;
                    jquery_1.default.getJSON(createUrl("/hello", request), function (r) {
                        jquery_1.default("#helloResult").html(r.result);
                    });
                },
                sayHelloRoute: function () {
                    var request = new Test_dtos_1.Hello();
                    request.name = this.value;
                    request.title = "Dr";
                    jquery_1.default.getJSON(jquery_1.default.ss.createUrl("/hello/{Name}", request), request, function (r) {
                        jquery_1.default("#helloRouteResult").html(r.result);
                    });
                },
                generateIds: function () {
                    if (isNaN(parseInt(this.value)))
                        return;
                    var request = new Test_dtos_1.GetRandomIds();
                    request.take = parseInt(this.value);
                    jquery_1.default.getJSON(createUrl("/randomids", request), function (r) {
                        var html = r.results.map(function (id) { return "<li>" + id + "</id>"; }).join('');
                        jquery_1.default("#randomIdsResult").html("<ul>" + html + "</ul>");
                    });
                },
                helloTypes: function () {
                    var request = new Test_dtos_1.HelloTypes();
                    request.name = this.value;
                    request.happy = false;
                    client.get(request).then(function (r) {
                        jquery_1.default("#helloTypesResult").html(JSON.stringify(r));
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=app.js.map