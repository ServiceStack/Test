"use strict";
var $ = require("jquery");
require("ss-utils");
var servicestack_client_1 = require("servicestack-client");
//import { JsonServiceClient } from "./JsonServiceClient";
var Test_dtos_1 = require("./Test.dtos");
function createUrl(path, params) {
    for (var key in params) {
        path += path.indexOf('?') <= 0 ? "?" : "&";
        path += key + "=" + encodeURIComponent(params[key]);
    }
    return path;
}
var client = new servicestack_client_1.JsonServiceClient("/");
$(document).bindHandlers({
    sayHello: function () {
        var request = new Test_dtos_1.Hello();
        request.name = this.value;
        $.getJSON(createUrl("/hello", request), function (r) {
            $("#helloResult").html(r.result);
        });
    },
    sayHelloRoute: function () {
        var request = new Test_dtos_1.Hello();
        request.name = this.value;
        request.title = "Dr";
        $.getJSON($.ss.createUrl("/hello/{Name}", request), request, function (r) {
            $("#helloRouteResult").html(r.result);
        });
    },
    generateIds: function () {
        if (isNaN(parseInt(this.value)))
            return;
        var request = new Test_dtos_1.GetRandomIds();
        request.take = parseInt(this.value);
        $.getJSON(createUrl("/randomids", request), function (r) {
            var html = r.results.map(function (id) { return "<li>" + id + "</id>"; }).join('');
            $("#randomIdsResult").html("<ul>" + html + "</ul>");
        });
    },
    helloTypes: function () {
        var request = new Test_dtos_1.HelloTypes();
        request.string = this.value;
        request.bool = false;
        request.int = 0;
        client.get(request).then(function (r) {
            $("#helloTypesResult").html(JSON.stringify(r));
        });
    },
    echoTypes: function () {
        var request = new Test_dtos_1.EchoTypes();
        request.string = this.value;
        client.post(request).then(function (r) {
            $("#echoTypesResult").html(r.string);
        });
    },
    rawString: function () {
        var request = new Test_dtos_1.ReturnString();
        request.data = this.value;
        client.get(request)
            .then(function (text) {
            $("#rawStringResult").html(text);
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
            $("#rawBytesResult").html(bytesToBase64(bytes) + "<br/>" + bytesToString(bytes));
        });
    },
    basicAuth: function () {
        var testAuth = new servicestack_client_1.JsonServiceClient("/");
        testAuth.userName = $("#txtBasicAuthUser").val();
        testAuth.password = $("#txtBasicAuthPass").val();
        testAuth.post(new Test_dtos_1.TestAuth())
            .then(function (r) {
            $("#basicAuthResult").html(JSON.stringify(r));
        })
            .catch(function (e) { return handleError(e, "#basicAuthResult"); });
    },
    returnVoid: function () {
        client.post(new Test_dtos_1.HelloReturnVoid())
            .then(function (r) { return $("#returnVoidResult").html("SUCCESS!"); })
            .catch(function (e) { return handleError(e, "#returnVoidResult"); });
    }
});
function handleError(e, id) {
    console.log('error: ', e);
    $(id).html("Error: " + JSON.stringify(e.responseStatus));
}
//# sourceMappingURL=app.js.map