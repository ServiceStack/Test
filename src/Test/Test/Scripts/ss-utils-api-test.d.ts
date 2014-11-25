/// <reference path="jquery.d.ts"/>
/// <reference path="ss-utils.d.ts"/>



$.ss.handlers = {
    "a": function () { },
    "b": function (a) { }
};

$("#").handleServerEvents({
    handlers: {
        "A": function () { }
    }
});