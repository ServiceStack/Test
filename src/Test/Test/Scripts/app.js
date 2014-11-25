/// <reference path="jquery.d.ts"/>
/// <reference path="Test.dtos.d.ts"/>
function createUrl(path, params) {
    for (var key in params) {
        path += path.indexOf('?') <= 0 ? "?" : "&";
        path += key + "=" + encodeURIComponent(params[key]);
    }
    return path;
}

$(document).bindHandlers({
    sayHello: function () {
        var request = { name: this.value };
        $.getJSON(createUrl("/hello", request), function (r) {
            $("#helloResult").html(r.result);
        });
    },
    generateIds: function () {
        if (isNaN(parseInt(this.value)))
            return;
        var request = { take: parseInt(this.value) };
        $.getJSON(createUrl("/randomids", request), function (r) {
            var html = r.results.map(function (id) {
                return "<li>" + id + "</id>";
            }).join('');
            $("#randomIdsResult").html("<ul>" + html + "</ul>");
        });
    }
});
