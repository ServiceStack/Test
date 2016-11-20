//local copy of JsonServiceClient to test JsonServiceClient in client TypeScript project
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ResponseStatus, ResponseError, ErrorResponse, HttpMethods, JsonServiceClient, createErrorResponse, toCamelCase, sanitize, nameOf, css, splitOnFirst, splitOnLast, splitCase, humanize, queryString, combinePaths, createPath, createUrl, appendQueryString, qsValue, bytesToBase64, uint6ToB64, _btoa, toDate, toDateFmt, padInt, dateFmt, dateFmtHM, timeFmt12;
    return {
        setters:[],
        execute: function() {
            ResponseStatus = (function () {
                function ResponseStatus() {
                }
                return ResponseStatus;
            }());
            exports_1("ResponseStatus", ResponseStatus);
            ResponseError = (function () {
                function ResponseError() {
                }
                return ResponseError;
            }());
            exports_1("ResponseError", ResponseError);
            ErrorResponse = (function () {
                function ErrorResponse() {
                }
                return ErrorResponse;
            }());
            exports_1("ErrorResponse", ErrorResponse);
            HttpMethods = (function () {
                function HttpMethods() {
                }
                HttpMethods.Get = "GET";
                HttpMethods.Post = "POST";
                HttpMethods.Put = "PUT";
                HttpMethods.Delete = "DELETE";
                HttpMethods.Patch = "PATCH";
                HttpMethods.Head = "HEAD";
                HttpMethods.Options = "OPTIONS";
                HttpMethods.hasRequestBody = function (method) {
                    return !(method === "GET" || method === "DELETE" || method === "HEAD" || method === "OPTIONS");
                };
                return HttpMethods;
            }());
            exports_1("HttpMethods", HttpMethods);
            JsonServiceClient = (function () {
                function JsonServiceClient(baseUrl) {
                    if (baseUrl == null)
                        throw "baseUrl is required";
                    this.baseUrl = baseUrl;
                    this.replyBaseUrl = combinePaths(baseUrl, "json", "reply") + "/";
                    this.oneWayBaseUrl = combinePaths(baseUrl, "json", "oneway") + "/";
                    this.mode = "cors";
                    this.credentials = 'include';
                    this.headers = new Headers();
                    this.headers.set("Content-Type", "application/json");
                }
                JsonServiceClient.prototype.setCredentials = function (userName, password) {
                    this.userName = userName;
                    this.password = password;
                };
                JsonServiceClient.prototype.get = function (request) {
                    return this.send(HttpMethods.Get, request);
                };
                JsonServiceClient.prototype.delete = function (request) {
                    return this.send(HttpMethods.Delete, request);
                };
                JsonServiceClient.prototype.post = function (request) {
                    return this.send(HttpMethods.Post, request);
                };
                JsonServiceClient.prototype.put = function (request) {
                    return this.send(HttpMethods.Put, request);
                };
                JsonServiceClient.prototype.patch = function (request) {
                    return this.send(HttpMethods.Patch, request);
                };
                JsonServiceClient.prototype.send = function (method, request) {
                    var url = combinePaths(this.replyBaseUrl, nameOf(request));
                    var hasRequestBody = HttpMethods.hasRequestBody(method);
                    if (!hasRequestBody)
                        url = appendQueryString(url, request);
                    if (this.userName != null && this.password != null) {
                        this.headers.set('Authorization', 'Basic ' + JsonServiceClient.toBase64(this.userName + ":" + this.password));
                    }
                    // Set `compress` false due to common error
                    // https://github.com/bitinn/node-fetch/issues/93#issuecomment-200791658
                    var reqOptions = {
                        method: method,
                        mode: this.mode,
                        credentials: this.credentials,
                        headers: this.headers,
                        compress: false
                    };
                    var req = new Request(url, reqOptions);
                    if (hasRequestBody)
                        req.body = JSON.stringify(request);
                    return fetch(url, req)
                        .then(function (res) {
                        if (!res.ok)
                            throw res;
                        var x = typeof request.createResponse == 'function'
                            ? request.createResponse()
                            : null;
                        if (typeof x === 'string')
                            return res.text().then(function (o) { return o; });
                        var contentType = res.headers.get("content-type");
                        if (contentType && contentType.indexOf("application/json") !== -1) {
                            return res.json().then(function (o) { return o; });
                        }
                        if (x instanceof Uint8Array) {
                            if (typeof res.arrayBuffer != 'function')
                                throw new Error("This fetch polyfill does not implement 'arrayBuffer'");
                            return res.arrayBuffer().then(function (o) { return new Uint8Array(o); });
                        }
                        else if (x instanceof Blob) {
                            if (typeof res.blob != 'function')
                                throw new Error("This fetch polyfill does not implement 'blob'");
                            return res.blob().then(function (o) { return o; });
                        }
                        return res.json().then(function (o) { return o; }); //fallback
                    })
                        .catch(function (res) {
                        if (res instanceof Error)
                            throw res;
                        // res.json can only be called once.
                        if (res.bodyUsed)
                            throw createErrorResponse(res.status, res.statusText);
                        return res.json().then(function (o) {
                            var errorDto = sanitize(o);
                            if (!errorDto.responseStatus)
                                throw createErrorResponse(res.status, res.statusText);
                            throw errorDto;
                        }).catch(function (responseStatusError) {
                            // No responseStatus body, set from `res` Body object
                            if (responseStatusError instanceof Error)
                                throw createErrorResponse(res.status, res.statusText);
                            throw responseStatusError;
                        });
                    });
                };
                return JsonServiceClient;
            }());
            exports_1("JsonServiceClient", JsonServiceClient);
            createErrorResponse = function (errorCode, message) {
                var error = new ErrorResponse();
                error.responseStatus = new ResponseStatus();
                error.responseStatus.errorCode = errorCode;
                error.responseStatus.message = message;
                return error;
            };
            exports_1("toCamelCase", toCamelCase = function (key) {
                return !key ? key : key.charAt(0).toLowerCase() + key.substring(1);
            });
            exports_1("sanitize", sanitize = function (status) {
                if (status.responseStatus)
                    return status;
                if (status.errors)
                    return status;
                var to = {};
                for (var k in status) {
                    if (status.hasOwnProperty(k)) {
                        if (status[k] instanceof Object)
                            to[toCamelCase(k)] = sanitize(status[k]);
                        else
                            to[toCamelCase(k)] = status[k];
                    }
                }
                to.errors = [];
                return to;
            });
            exports_1("nameOf", nameOf = function (o) {
                if (!o)
                    return "null";
                if (typeof o.getTypeName == "function")
                    return o.getTypeName();
                var ctor = o && o.constructor;
                if (ctor == null)
                    throw o + " doesn't have constructor";
                if (ctor.name)
                    return ctor.name;
                var str = ctor.toString();
                return str.substring(9, str.indexOf("(")); //"function ".length == 9
            });
            /* utils */
            exports_1("css", css = function (selector, name, value) {
                var els = typeof selector == "string"
                    ? document.querySelectorAll(selector)
                    : selector;
                for (var i = 0; i < els.length; i++) {
                    var el = els[i];
                    if (el != null && el.style != null) {
                        el.style[name] = value;
                    }
                }
            });
            exports_1("splitOnFirst", splitOnFirst = function (s, c) {
                if (!s)
                    return [s];
                var pos = s.indexOf(c);
                return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
            });
            exports_1("splitOnLast", splitOnLast = function (s, c) {
                if (!s)
                    return [s];
                var pos = s.lastIndexOf(c);
                return pos >= 0
                    ? [s.substring(0, pos), s.substring(pos + 1)]
                    : [s];
            });
            splitCase = function (t) {
                return typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();
            };
            exports_1("humanize", humanize = function (s) { return (!s || s.indexOf(' ') >= 0 ? s : splitCase(s)); });
            exports_1("queryString", queryString = function (url) {
                if (!url || url.indexOf('?') === -1)
                    return {};
                var pairs = splitOnFirst(url, '?')[1].split('&');
                var map = {};
                for (var i = 0; i < pairs.length; ++i) {
                    var p = pairs[i].split('=');
                    map[p[0]] = p.length > 1
                        ? decodeURIComponent(p[1].replace(/\+/g, ' '))
                        : null;
                }
                return map;
            });
            exports_1("combinePaths", combinePaths = function () {
                var paths = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    paths[_i - 0] = arguments[_i];
                }
                var parts = [], i, l;
                for (i = 0, l = paths.length; i < l; i++) {
                    var arg = paths[i];
                    parts = arg.indexOf("://") === -1
                        ? parts.concat(arg.split("/"))
                        : parts.concat(arg.lastIndexOf("/") === arg.length - 1 ? arg.substring(0, arg.length - 1) : arg);
                }
                var combinedPaths = [];
                for (i = 0, l = parts.length; i < l; i++) {
                    var part = parts[i];
                    if (!part || part === ".")
                        continue;
                    if (part === "..")
                        combinedPaths.pop();
                    else
                        combinedPaths.push(part);
                }
                if (parts[0] === "")
                    combinedPaths.unshift("");
                return combinedPaths.join("/") || (combinedPaths.length ? "/" : ".");
            });
            exports_1("createPath", createPath = function (route, args) {
                var argKeys = {};
                for (var k in args) {
                    argKeys[k.toLowerCase()] = k;
                }
                var parts = route.split("/");
                var url = "";
                for (var i = 0; i < parts.length; i++) {
                    var p = parts[i];
                    if (p == null)
                        p = "";
                    if (p[0] === "{" && p[p.length - 1] === "}") {
                        var key = argKeys[p.substring(1, p.length - 1).toLowerCase()];
                        if (key) {
                            p = args[key];
                            delete args[key];
                        }
                    }
                    if (url.length > 0)
                        url += "/";
                    url += p;
                }
                return url;
            });
            exports_1("createUrl", createUrl = function (route, args) {
                var url = createPath(route, args);
                return appendQueryString(url, args);
            });
            exports_1("appendQueryString", appendQueryString = function (url, args) {
                for (var k in args) {
                    if (args.hasOwnProperty(k)) {
                        url += url.indexOf("?") >= 0 ? "&" : "?";
                        url += k + "=" + qsValue(args[k]);
                    }
                }
                return url;
            });
            qsValue = function (arg) {
                if (arg == null)
                    return "";
                if (arg instanceof Uint8Array)
                    return bytesToBase64(arg);
                return encodeURIComponent(arg) || "";
            };
            //from: https://github.com/madmurphy/stringview.js/blob/master/stringview.js
            exports_1("bytesToBase64", bytesToBase64 = function (aBytes) {
                var eqLen = (3 - (aBytes.length % 3)) % 3, sB64Enc = "";
                for (var nMod3, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
                    nMod3 = nIdx % 3;
                    nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
                    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                        sB64Enc += String.fromCharCode(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
                        nUint24 = 0;
                    }
                }
                return eqLen === 0
                    ? sB64Enc
                    : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
            });
            uint6ToB64 = function (nUint6) {
                return nUint6 < 26 ?
                    nUint6 + 65
                    : nUint6 < 52 ?
                        nUint6 + 71
                        : nUint6 < 62 ?
                            nUint6 - 4
                            : nUint6 === 62 ? 43
                                : nUint6 === 63 ? 47 : 65;
            };
            _btoa = typeof btoa == 'function'
                ? btoa
                : function (str) { return new Buffer(str).toString('base64'); };
            //from: http://stackoverflow.com/a/30106551/85785
            JsonServiceClient.toBase64 = function (str) {
                return _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                    return String.fromCharCode(new Number('0x' + p1).valueOf());
                }));
            };
            exports_1("toDate", toDate = function (s) { return new Date(parseFloat(/Date\(([^)]+)\)/.exec(s)[1])); });
            exports_1("toDateFmt", toDateFmt = function (s) { return dateFmt(toDate(s)); });
            exports_1("padInt", padInt = function (n) { return n < 10 ? '0' + n : n; });
            exports_1("dateFmt", dateFmt = function (d) {
                if (d === void 0) { d = new Date(); }
                return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate());
            });
            exports_1("dateFmtHM", dateFmtHM = function (d) {
                if (d === void 0) { d = new Date(); }
                return d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()) + ' ' + padInt(d.getHours()) + ":" + padInt(d.getMinutes());
            });
            exports_1("timeFmt12", timeFmt12 = function (d) {
                if (d === void 0) { d = new Date(); }
                return padInt((d.getHours() + 24) % 12 || 12) + ":" + padInt(d.getMinutes()) + ":" + padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM");
            });
        }
    }
});
//# sourceMappingURL=JsonServiceClient.js.map