//local copy of JsonServiceClient to test JsonServiceClient in client TypeScript project

export interface IReturnVoid {
    createResponse();
}
export interface IReturn<T> {
    createResponse(): T;
}
export class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: { [index: string]: string; };
}
export class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: { [index: string]: string; };
}
export class ErrorResponse {
    responseStatus: ResponseStatus;
}

export class HttpMethods {
    static Get = "GET";
    static Post = "POST";
    static Put = "PUT";
    static Delete = "DELETE";
    static Patch = "PATCH";
    static Head = "HEAD";
    static Options = "OPTIONS";

    static hasRequestBody = (method: string) =>
        !(method === "GET" || method === "DELETE" || method === "HEAD" || method === "OPTIONS");
}

export class JsonServiceClient {
    baseUrl: string;
    replyBaseUrl: string;
    oneWayBaseUrl: string;
    mode: RequestMode;
    credentials: RequestCredentials;
    headers: Headers;
    userName: string;
    password: string;
    static toBase64: (rawString:string) => string;

    constructor(baseUrl: string) {
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

    setCredentials(userName:string, password:string): void {
        this.userName = userName;
        this.password = password;
    }

    get<T>(request: IReturn<T>): Promise<T> {
        return this.send(HttpMethods.Get, request);
    }

    delete<T>(request: IReturn<T>): Promise<T> {
        return this.send(HttpMethods.Delete, request);
    }

    post<T>(request: IReturn<T>): Promise<T> {
        return this.send(HttpMethods.Post, request);
    }

    put<T>(request: IReturn<T>): Promise<T> {
        return this.send(HttpMethods.Put, request);
    }

    patch<T>(request: IReturn<T>): Promise<T> {
        return this.send(HttpMethods.Patch, request);
    }

    send<T>(method: string, request: IReturn<T>): Promise<T> {
        let url = combinePaths(this.replyBaseUrl, nameOf(request));

        const hasRequestBody = HttpMethods.hasRequestBody(method);
        if (!hasRequestBody)
            url = appendQueryString(url, request);

        if (this.userName != null && this.password != null) {
            this.headers.set('Authorization', 'Basic '+ JsonServiceClient.toBase64(`${this.userName}:${this.password}`));
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
        const req = new Request(url, reqOptions);

        if (hasRequestBody)
            (req as any).body = JSON.stringify(request);

        return fetch(url, req)
            .then(res => {
                if (!res.ok)
                    throw res;

                var x = typeof request.createResponse == 'function'
                    ? request.createResponse()
                    : null;

                if (typeof x === 'string')
                    return res.text().then(o => o as Object as T);

                var contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return res.json().then(o => o as Object as T);
                }

                if (x instanceof Uint8Array) {
                    if (typeof res.arrayBuffer != 'function')
                        throw new Error("This fetch polyfill does not implement 'arrayBuffer'");

                    return res.arrayBuffer().then(o => new Uint8Array(o) as Object as T);

                } else if (x instanceof Blob) {
                    if (typeof res.blob != 'function')
                        throw new Error("This fetch polyfill does not implement 'blob'");

                    return res.blob().then(o => o as Object as T);
                }

                return res.json().then(o => o as Object as T); //fallback
            })
            .catch(res => {
                if (res instanceof Error)
                    throw res;

                // res.json can only be called once.
                if (res.bodyUsed)
                    throw createErrorResponse(res.status, res.statusText);

                return res.json().then(o => {
                    var errorDto = sanitize(o);
                    if (!errorDto.responseStatus)
                        throw createErrorResponse(res.status, res.statusText);
                    throw errorDto;
                }).catch(responseStatusError => {
                    // No responseStatus body, set from `res` Body object
                    if (responseStatusError instanceof Error)
                        throw createErrorResponse(res.status, res.statusText);
                    throw responseStatusError;
                });
            });
    }
}

const createErrorResponse = (errorCode: string, message: string) => {
    const error = new ErrorResponse();
    error.responseStatus = new ResponseStatus();
    error.responseStatus.errorCode = errorCode;
    error.responseStatus.message = message;
    return error;
};

export const toCamelCase = (key: string) => {
    return !key ? key : key.charAt(0).toLowerCase() + key.substring(1);
};

export const sanitize = (status: any): any => {
    if (status.responseStatus)
        return status;
    if (status.errors)
        return status;
    var to: any = {};
    for (let k in status) {
        if (status.hasOwnProperty(k)) {
            if (status[k] instanceof Object)
                to[toCamelCase(k)] = sanitize(status[k]);
            else
                to[toCamelCase(k)] = status[k];
        }
    }

    to.errors = [];
    return to;
}

export const nameOf = (o: any) => {
    if (!o)
        return "null";

    if (typeof o.getTypeName == "function")
        return o.getTypeName();

    var ctor = o && o.constructor;
    if (ctor == null)
        throw `${o} doesn't have constructor`;

    if (ctor.name)
        return ctor.name;

    var str = ctor.toString();
    return str.substring(9, str.indexOf("(")); //"function ".length == 9
};

/* utils */

export const css = (selector: string | NodeListOf<Element>, name: string, value: string) => {
    const els = typeof selector == "string"
        ? document.querySelectorAll(selector as string)
        : selector as NodeListOf<Element>;

    for (let i = 0; i < els.length; i++) {
        const el = els[i] as any;
        if (el != null && el.style != null) {
            el.style[name] = value;
        }
    }
}

export const splitOnFirst = (s: string, c: string): string[] => {
    if (!s) return [s];
    var pos = s.indexOf(c);
    return pos >= 0 ? [s.substring(0, pos), s.substring(pos + 1)] : [s];
};

export const splitOnLast = (s: string, c: string): string[] => {
    if (!s) return [s];
    var pos = s.lastIndexOf(c);
    return pos >= 0
        ? [s.substring(0, pos), s.substring(pos + 1)]
        : [s];
};

const splitCase = (t: string) =>
    typeof t != 'string' ? t : t.replace(/([A-Z]|[0-9]+)/g, ' $1').replace(/_/g, ' ').trim();

export const humanize = s => (!s || s.indexOf(' ') >= 0 ? s : splitCase(s));

export const queryString = (url: string): any => {
    if (!url || url.indexOf('?') === -1) return {};
    var pairs = splitOnFirst(url, '?')[1].split('&');
    var map = {};
    for (var i = 0; i < pairs.length; ++i) {
        var p = pairs[i].split('=');
        map[p[0]] = p.length > 1
            ? decodeURIComponent(p[1].replace(/\+/g, ' '))
            : null;
    }
    return map;
};

export const combinePaths = (...paths: string[]): string => {
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
        if (!part || part === ".") continue;
        if (part === "..") combinedPaths.pop();
        else combinedPaths.push(part);
    }
    if (parts[0] === "") combinedPaths.unshift("");
    return combinedPaths.join("/") || (combinedPaths.length ? "/" : ".");
};

export const createPath = (route: string, args: any) => {
    var argKeys = {};
    for (let k in args) {
        argKeys[k.toLowerCase()] = k;
    }
    var parts = route.split("/");
    var url = "";
    for (let i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (p == null) p = "";
        if (p[0] === "{" && p[p.length - 1] === "}") {
            const key = argKeys[p.substring(1, p.length - 1).toLowerCase()];
            if (key) {
                p = args[key];
                delete args[key];
            }
        }
        if (url.length > 0) url += "/";
        url += p;
    }
    return url;
};

export const createUrl = (route: string, args: any) => {
    var url = createPath(route, args);
    return appendQueryString(url, args);
};

export const appendQueryString = (url: string, args: any): string => {
    for (let k in args) {
        if (args.hasOwnProperty(k)) {
            url += url.indexOf("?") >= 0 ? "&" : "?";
            url += k + "=" + qsValue(args[k]);
        }
    }
    return url;
};

const qsValue = (arg: any) => {
    if (arg == null)
        return "";
    if (arg instanceof Uint8Array)
        return bytesToBase64(arg as Uint8Array);
    return encodeURIComponent(arg) || "";
}

//from: https://github.com/madmurphy/stringview.js/blob/master/stringview.js
export const bytesToBase64 = (aBytes: Uint8Array): string => {
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
}

const uint6ToB64 = (nUint6: number) : number =>
     nUint6 < 26 ?
      nUint6 + 65
    : nUint6 < 52 ?
      nUint6 + 71
    : nUint6 < 62 ?
      nUint6 - 4
    : nUint6 === 62 ? 43
    : nUint6 === 63 ? 47 : 65;

//JsonServiceClient.toBase64 requires IE10+ or node
interface NodeBuffer extends Uint8Array {
    toString(encoding?: string, start?: number, end?: number): string;
}
interface Buffer extends NodeBuffer { }
declare var Buffer: {
    new (str: string, encoding?: string): Buffer;
}
var _btoa = typeof btoa == 'function'
    ? btoa
    : (str) => new Buffer(str).toString('base64');

//from: http://stackoverflow.com/a/30106551/85785
JsonServiceClient.toBase64 = (str:string) => 
    _btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match:any, p1:string) =>
        String.fromCharCode(new Number('0x' + p1).valueOf())
    ));

export const toDate = (s: string) => new Date(parseFloat(/Date\(([^)]+)\)/.exec(s)[1]));
export const toDateFmt = (s: string) => dateFmt(toDate(s));
export const padInt = (n: number) => n < 10 ? '0' + n : n;
export const dateFmt = (d: Date = new Date()) => d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate());
export const dateFmtHM = (d: Date = new Date()) => d.getFullYear() + '/' + padInt(d.getMonth() + 1) + '/' + padInt(d.getDate()) + ' ' + padInt(d.getHours()) + ":" + padInt(d.getMinutes());
export const timeFmt12 = (d: Date = new Date()) => padInt((d.getHours() + 24) % 12 || 12) + ":" + padInt(d.getMinutes()) + ":" + padInt(d.getSeconds()) + " " + (d.getHours() > 12 ? "PM" : "AM");
