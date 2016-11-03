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
                    request.string = this.value;
                    request.bool = false;
                    request.int = 0;
                    client.get(request).then(function (r) {
                        jquery_1.default("#helloTypesResult").html(JSON.stringify(r));
                    });
                },
                rawString: function () {
                    var request = new Test_dtos_1.ReturnString();
                    request.data = this.value;
                    client.get(request)
                        .then(function (text) {
                        jquery_1.default("#rawStringResult").html(text);
                    });
                },
                rawBytes: function () {
                    var bytesToBase64 = function (array) { return btoa(String.fromCharCode.apply(null, new Uint8Array(array))); };
                    var base64ToBytes = function (b64) { return new Uint8Array(atob(b64).split("").map(function (c) { return c.charCodeAt(0); })); };
                    var bytesToString = function (array) { return String.fromCharCode.apply(String, array); };
                    var request = new Test_dtos_1.ReturnBytes();
                    request.data = base64ToBytes(this.value);
                    client.get(request)
                        .then(function (bytes) {
                        jquery_1.default("#rawBytesResult").html(bytesToBase64(bytes) + "<br/>" + bytesToString(bytes));
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=app.js.map