/// <reference path="../typings/index.d.ts"/>

import $ from "jquery";
import "ss-utils"; 
import { JsonServiceClient } from "servicestack-client";
import {
    Hello, HelloResponse,
    GetRandomIds, GetRandomIdsResponse,
    HelloTypes
} from "./Test.dtos";

function createUrl(path: string, params: any): string {
    for (var key in params) {
        path += path.indexOf('?') <= 0 ? "?" : "&";
        path += key + "=" + encodeURIComponent(params[key]);
    }
    return path;
}

var client = new JsonServiceClient("/");

$(document).bindHandlers({
    sayHello () {
        var request = new Hello();
        request.name = this.value;
        $.getJSON(createUrl("/hello", request), function (r: HelloResponse) {
            $("#helloResult").html(r.result);
        });
    },
    sayHelloRoute () {
        var request = new Hello();
        request.name = this.value;
        request.title = "Dr";
        $.getJSON($.ss.createUrl("/hello/{Name}", request), request, function (r: HelloResponse) {
            $("#helloRouteResult").html(r.result);
        });
    },
    generateIds () {
        if (isNaN(parseInt(this.value))) return;
        var request = new GetRandomIds();
        request.take = parseInt(this.value);
        $.getJSON(createUrl("/randomids", request), function (r: GetRandomIdsResponse) {
            var html = r.results.map(function (id) { return "<li>" + id + "</id>"; }).join('');
            $("#randomIdsResult").html("<ul>" + html + "</ul>");
        });
    },
    helloTypes () {
        var request = new HelloTypes();
        request.name = this.value;
        request.happy = false;
        client.get(request).then((r) => {
            $("#helloTypesResult").html(JSON.stringify(r));
        });
    }
});