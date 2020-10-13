(function() {
    "use strict";
    var f = {
        aServer: "https://www.yhhls.com",
        logServer: "https://www.yhhls.com",
        prefix: "2415689770463175004",
        adunit: "",
        sync: "true"
    };
    var w = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    var displayBefore = [],
    displayAfter = [],
    onLoadBefore = [],
    onLoadAfter = [];
    function e() {
        var e = navigator.platform;
        if (w && (e.indexOf("Win") > -1 || e.indexOf("Mac") > -1 || e.indexOf("X11") > -1 || e.indexOf("Linux") > -1)) {
            return true
        }
        return false
    }
    function t(t) {
        return function(e) {
            return {}.toString.call(e) === "[object " + t + "]"
        }
    }
    function b(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g,
        function(e) {
            return "%" + e.charCodeAt(0).toString(16)
        })
    }
    function u(e) {
        var t = new Image;
        t.src = e;
        t.onload = t.onerror = t.onabort = function() {
            t = t.onload = t.onerror = t.onabort = null
        }
    }
    var a = {};
    var n = t("Object");
    var r = t("String");
    var i = t("Function");
    var m = Array.isArray || t("Array");
    function o(e) {
        window.console && window.console.log(e)
    }
    function s(e) {
        this.name = e;
        this.factory = null
    }
    function define(e, t) {
        if (!e) {
            return
        }
        var n = a[e] || (a[e] = new s(e));
        n.factory = t
    }
    function l(e) {
        var t = a[e];
        if (t) {
            return c(t)
        } else {
            throw "can not get module by from ojs: " + e
        }
    }
    function c(e) {
        if (!e.exports) {
            e.exports = {};
            try {
                e.factory(l, e.exports, e)
            } catch(e) {
                o(e)
            }
        }
        return e.exports
    }
    function use(e, t) {
        if (r(e)) {
            e = [e]
        }
        for (var n = 0; n < e.length; n++) {
            var a = l(e[n]);
            if (typeof t === "function") {
                t(a)
            }
        }
        return a
    }
    function x(e, t) {
        var n = [].slice.call(arguments),
        a,
        r = typeof n[n.length - 1] == "boolean" ? n.pop() : true;
        for (var i = 1; t = n[i++];) {
            for (a in t) {
                if (r || !(a in e)) {
                    e[a] = t[a]
                }
            }
        }
        return e
    }
    function y(e, t) {
        if (r(e)) {
            e = {
                name: "throw",
                message: e
            }
        }
        try {
            var n = [];
            n.push("name=" + encodeURIComponent(e.name));
            n.push("msg=" + encodeURIComponent(e.message));
            n.push("description=" + encodeURIComponent(t));
            var a = [f.logServer, "/jserr?", n.join("&")].join("");
            u(a)
        } catch(e) {
            o(e)
        }
    } !
    function() {
        define("utils",
        function(e, a) {
            var o = document,
            t = navigator.userAgent.toLowerCase();
            var n = /complete|loaded|interactive/;
            x(a, {
                browser: {
                    ver: (t.match(/(?:rv|me|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
                    opera: /opera/.test(t),
                    mobile: !!t.match(/applewebkit.*mobile.*/),
                    firefox: /firefox/.test(t) && !/(compatible|webkit)/.test(t),
                    chrome: /chrome|crios/.test(t),
                    safari: /applewebkit/.test(t) && !/chrome/.test(t),
                    uc: /ucbrowser|ucweb|uc/.test(t),
                    ie: /msie/.test(t) || o.documentMode > 0 ? true: !+[1],
                    ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: /android|linux/.test(t),
                    iphone: /iphone/.test(t),
                    ipad: /ipad/.test(t),
                    weixin: t.indexOf("micromessenger") > -1,
                    qq: t.match(/\sqq/i) == " qq"
                },
                find: function(e, t) {
                    return e.getElementById(t)
                },
                findID: function(e) {
                    return o.getElementById(e)
                },
                findName: function(e) {
                    return o.getElementsByTagName(e)
                },
                bind: function(e, t, n) {
                    return "string" == typeof e && (e = a.findID(e)),
                    t = t.replace(/^on/i, "").toLowerCase(),
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n),
                    e
                },
                unbind: function(e, t, n) {
                    e = "string" == typeof e && (e = a.findID(e));
                    t = t.replace(/^on/i, "").toLowerCase();
                    if (e.removeEventListener) {
                        e.removeEventListener(t, n, false)
                    } else {
                        if (e.detachEvent) {
                            e.detachEvent("on" + t, n)
                        }
                    }
                    return e
                },
                guid: function() {
                    function e() {
                        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
                    }
                    var t = e() + e() + "" + e() + "" + e() + "" + e() + "" + e() + e() + e();
                    return t
                },
                encode: function(t) {
                    try {
                        return b(t + "")
                    } catch(e) {
                        return t
                    }
                },
                decode: function(t) {
                    try {
                        return decodeURIComponent(t + "")
                    } catch(e) {
                        return t
                    }
                },
                each: function(e, t) {
                    if (e.length && e.slice) for (var n = 0,
                    a = e.length; a > n; n++) t(e[n], n);
                    else for (var r in e) e.hasOwnProperty(r) && t(e[r], r)
                },
                getCookie: function(e, t) {
                    var n, t = t || window,
                    a = o,
                    r = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    i = r.exec(a.cookie);
                    if (i) {
                        n = i[2]
                    }
                    return n
                },
                setCookie: function(e, t, n) {
                    n = n || {};
                    var a = n.expires;
                    if ("number" == typeof n.expires) {
                        a = new Date;
                        a.setTime(a.getTime() + n.expires * (60 * 1e3))
                    }
                    document.cookie = e + "=" + t + (n.path ? "; path=" + n.path: "") + (a ? "; expires=" + a.toGMTString() : "") + (n.domain ? "; domain=" + n.domain: "") + (n.secure ? "; secure": "")
                },
                findTagName: function(e) {
                    return o.getElementsByTagName(e)
                },
                getParameterByName: function(e, t) {
                    if (!t) t = window.location.href;
                    e = e.replace(/[\[\]]/g, "\\$&");
                    var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                    a = n.exec(t);
                    if (!a) return null;
                    if (!a[2]) return "";
                    return decodeURIComponent(a[2].replace(/\+/g, " "))
                },
                ready: function(e) {
                    if (n.test(document.readyState)) {
                        e()
                    } else {
                        document.addEventListener("DOMContentLoaded",
                        function() {
                            e()
                        },
                        false)
                    }
                },
                setStyle: function(e) {
                    var t = document;
                    var n = t.createElement("style");
                    n.setAttribute("type", "text/css");
                    if (n.styleSheet) {
                        n.styleSheet.cssText = e
                    } else {
                        var a = t.createTextNode(e);
                        n.appendChild(a)
                    }
                    var r = t.getElementsByTagName("head");
                    if (r.length) r[0].appendChild(n);
                    else t.documentElement.appendChild(n)
                },
                loadScriptHtml: function(e) {
                    if (!document.body) {
                        return
                    }
                    var t = document.createRange();
                    t.selectNode(document.body);
                    var n = t.createContextualFragment(e);
                    document.body.appendChild(n)
                },
                moveLast: function(e) {
                    this.ready(function() {
                        document.body.appendChild(e)
                    })
                }
            })
        });
        define("client",
        function(e, t) {
            var r = e("utils"),
            n = e("mobile"),
            i = window,
            a = document,
            o;
            function s() {
                var t = "";
                try {
                    t = i.opener ? i.opener.document.location.href: a.referrer
                } catch(e) {
                    t = a.referrer
                }
                if (t !== "") {
                    t = t.substr(0, 8192)
                }
                return b(t)
            }
            function l() {
                var t = "";
                try {
                    t = i.top.document.location.href
                } catch(e) {
                    t = a.location.href
                }
                if (t !== "") {
                    t = t.substr(0, 2048)
                }
                return b(t)
            }
            function c() {
                var t = "";
                try {
                    t = i.top.document.title
                } catch(e) {
                    t = a.title
                }
                if (t.length > 40) {
                    t = t.substr(0, 40) + "..."
                }
                return b(t)
            }
            function d() {
                var t;
                try {
                    t = i.top.document.getElementsByTagName("meta")["keywords"].getAttribute("content")
                } catch(e) {
                    try {
                        t = document.getElementsByTagName("meta")["keywords"].getAttribute("content")
                    } catch(e) {
                        t = ""
                    }
                }
                return t
            }
            function f() {
                var e = 0;
                if (navigator.plugins && navigator.mimeTypes.length) {
                    var t = navigator.plugins["Shockwave Flash"];
                    if (t && t.description) e = t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
                } else if (r.browser.ie && !i.opera) {
                    var n = null;
                    try {
                        n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                    } catch(e) {
                        var a = 0;
                        try {
                            n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                            a = 6;
                            n.AllowScriptAccess = "always"
                        } catch(e) {
                            if (a == 6) return a.toString()
                        }
                        try {
                            n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                        } catch(e) {}
                    }
                    if (n != null) {
                        var a = n.GetVariable("$version").split(" ")[1];
                        e = a.replace(/,/g, ".")
                    }
                }
                return e
            }
            function u() {
                var e = s(),
                t = ["baidu", "haosou", "so", "soso", "google", "sm", "sogou", "chinaso", "bing", "everywhere", "youdao", "zhongsou", "yahoo", "easou"];
                if (!e) {
                    return ""
                }
                for (var n = 0; n < t.length; n++) {
                    var a = new RegExp(/(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./);
                    var r = e.match(a);
                    if (r[1] == t[n]) {
                        return t[n]
                    }
                }
            }
            function m() {
                if (i.screen) {
                    var e = i.screen.height || 0;
                    var t = i.screen.width || 0;
                    return t + "x" + e
                }
            }
            function p(e) {
                var t = {};
                try {
                    var n = e.getBoundingClientRect(),
                    a = document.body.scrollTop || document.documentElement.scrollTop;
                    t = {
                        top: n.top + a,
                        left: n.left
                    }
                } catch(t) {}
                return t
            }
            function h(e) {
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    t += (n > 0 ? ":": "") + e[n].charCodeAt(0)
                }
                return t
            }
            function g() {
                var e = w ? window.screen.height * window.devicePixelRatio: window.screen.height;
                var t = w ? window.screen.width * window.devicePixelRatio: window.screen.width;
                var n = window.screen.availWidth || 0;
                var a = window.screen.availHeight || 0;
                var r = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var i = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                return [Math.round(t) + "." + Math.round(e), n + "." + a, r + "." + i].join(":")
            }
            function y() {
                return navigator.platform
            }
            function v() {
                return navigator.productSub
            }
            x(t, {
                init: function() {
                    if (o) {
                        return
                    }
                    o = {
                        url: l(),
                        frm: window.top != window.self ? 1 : 0,
                        ref: s(),
                        ti: c(),
                        lg: navigator.browserLanguage || navigator.language,
                        ic: navigator.cookieEnabled ? 1 : 0,
                        ij: navigator.javaEnabled() ? 1 : 0,
                        pl: navigator.plugins.length,
                        ml: navigator.mimeTypes.length,
                        h5: typeof Worker !== "undefined" ? 1 : 0,
                        atf: document.body && document.body.clientHeight,
                        f: f(),
                        so: u(),
                        sai: h(g()),
                        ps: v(),
                        pf: y(),
                        ws: m()
                    }
                },
                getParams: function(e) {
                    this.init();
                    x(o, p(e.node), {
                        id: e.id,
                        rid: e.rid
                    },
                    n.getAllParam());
                    return o
                }
            })
        });
        define("mobile",
        function(e, t) {
            var n = e("utils");
            var i = {
                dcc: "",
                dcl: "",
                cpn: "",
                gvd: "",
                grr: "",
                ct: ""
            },
            a = {
                diit: "",
                dit: "",
                cmn: ""
            },
            o = [];
            function r() {
                if (!w) {
                    return
                }
                n.bind(window, "deviceorientation",
                function e(t) {
                    if (!t.alpha) {
                        return
                    }
                    a.diit = [t.alpha, t.beta, t.gamma].join(",")
                });
                n.bind(window, "devicemotion",
                function e(t) {
                    var n = t.accelerationIncludingGravity;
                    if (!n) {
                        return
                    }
                    a.dit = [n.x, n.y, n.z].join(",")
                });
                n.bind(window, "touchstart",
                function e(t) {
                    var n = t.touches[0].clientX;
                    var a = t.touches[0].clientY;
                    var r = [n, a].join("_");
                    if (o.length < 3) {
                        o.push(r)
                    }
                })
            }
            function s() {
                try {
                    navigator.getBattery().then(function(e) {
                        i.dcc = e.charging ? "yes": "no";
                        i.dcl = Math.round(e.level * 100)
                    })
                } catch(e) {}
            }
            function l() {
                try {
                    var e = document.createElement("canvas"),
                    t = e.getContext("experimental-webgl"),
                    n = t.getExtension("WEBGL_debug_renderer_info");
                    var a = t.getParameter(n.UNMASKED_VENDOR_WEBGL);
                    var r = t.getParameter(n.UNMASKED_RENDERER_WEBGL).replace(/[%]/g, "");
                    i.cpn = window.navigator.hardwareConcurrency;
                    i.gvd = a;
                    i.grr = r
                } catch(e) {}
            }
            function c() {
                try {
                    if (!navigator.connection) {
                        i.ct = "unknown";
                        return
                    }
                    if (!navigator.connection.type) {
                        i.ct = "unknown";
                        return
                    }
                    i.ct = navigator.connection.type
                } catch(e) {}
            }
            x(t, {
                init: function() {
                    r();
                    s();
                    l();
                    c()
                },
                getAllParam: function() {
                    a.cmn = o.join(";");
                    var e = x(i, a);
                    return e
                },
                getMParam: function() {
                    a.cmn = o.join(";");
                    return a
                }
            })
        });
        define("main",
        function(e, t) {
            var l = e("mobile"),
            r = e("utils"),
            s = e("client");
            var c = function(e) {
                this.container = e.container;
                this.id = e.id;
                this.rid = r.guid();
                this.node = e.node;
                this.width = 0;
                this.height = 0;
                this.interval = null;
                this.tplClass = null;
                this.aList = null;
                this.response = {};
                this.isDone = false;
                this.after();
                this.overload()
            };
            c.prototype.after = function() {
                onLoadAfter.push(function(e, t, n, a) {
                    if (e.response.TplName.indexOf("Fixed") === -1) {
                        setTimeout(function() {
                            r.moveLast(e.node)
                        },
                        10)
                    }
                })
            };
            c.prototype.overload = function() {
                var t = this;
                onLoadAfter.push(function() {
                    if (t.isDone === true) {
                        return
                    }
                    t.isDone = true;
                    t.interval = setInterval(function() {
                        if (t.node.clientHeight === 0) {
                            t.node.innerText = "";
                            t.tplClass.ready(t, t.aList)
                        } else {}
                    },
                    1e3);
                    setTimeout(function() {
                        if (t.node.clientHeight === 0) {
                            var e = f.logServer + "/aintercept";
                            u(e);
                            setTimeout(function() {
                                if (t.node.clientHeight > 0) {
                                    var e = f.logServer + "/areboot";
                                    u(e)
                                }
                            },
                            5e3)
                        }
                    },
                    1e3)
                })
            };
            c.prototype.request = function() {
                var e = s.getParams(this);
                var t = this;
                window["json_" + this.rid] = function(e) {
                    if (!e) {
                        throw "no ads: " + c.id
                    }
                    t.response = e;
                    t.display()
                };
                var n = [];
                for (var a in e) {
                    n.push(a + "=" + e[a])
                }
                var r = [f.aServer, "/bid?", n.join("&")].join("");
                var i = document.createElement("script"),
                o = document.getElementsByTagName("head")[0];
                i.charset = "utf-8",
                i.async = true,
                i.src = r,
                o.insertBefore(i, o.firstChild)
            };
            c.prototype.display = function() {
                if (this.response.Error !== "") {
                    o(this.response.Error);
                    return
                }
                this.height = this.response.Height;
                this.width = this.response.Width;
                var e = this.response.TplName;
                this.tplClass = use(e);
                this.aList = this.response.AType === "single" ? this.response.List[0] : this.response.List;
                for (var t = 0; t < displayBefore.length; t++) {
                    displayBefore[t](this, this.aList)
                }
                this.tplClass.ready(this, this.aList);
                this.log();
                this.cpm();
                for (var t = 0; t < displayAfter.length; t++) {
                    displayAfter[t](this, this.aList)
                }
            };
            c.prototype.log = function() {
                var e = f.logServer + "/gif?" + this.response.TrackLog;
                u(e)
            };
            c.prototype.cpm = function() {
                var e = this.response.AType === "single" ? this.response.List[0] : this.response.List;
                var t = m(e) ? e[0] : e;
                if (this.response.Bidding.toLowerCase() === "cpm" && (t.Creative !== "" || t.Html !== "") && t.CreativeId > 0) {
                    var n = e.Click;
                    var a = l.getAllParam();
                    var r = [];
                    r.push("ackimg=1");
                    for (var i in a) {
                        r.push(i + "=" + a[i])
                    }
                    var o = r.join("&");
                    var s = [n, o].join("&");
                    u(s)
                }
            };
            function d(e) {
                var e = new c(e);
                e.request()
            }
            function n() {
                if (f.sync === "false") {
                    var e = f.adunit;
                    document.write('<ins style="display:none!important" id="' + e + '"></ins>'); (window.adbyunion = window.adbyunion || []).push(e)
                }
            }
            function a() {
                var e = document.getElementsByTagName("INS");
                for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                    a = n.getAttribute("id"),
                    r = n.getAttribute("status");
                    if (a && a.indexOf("-") > -1 && a.length > 12 && r !== "done") {
                        var i = a.split("-"),
                        o = i[0],
                        s = i[1];
                        if (o === f.prefix) {
                            n.setAttribute("status", "done");
                            d({
                                container: a,
                                id: s,
                                node: n
                            })
                        }
                    }
                }
            }
            x(t, {
                run: function() {
                    n();
                    l.init();
                    setTimeout(function() {
                        a()
                    },
                    100)
                }
            })
        })
    } (); !
    function() {
        define("ack",
        function(e, t) {
            var r = e("utils"),
            i = e("mobile"),
            o = [];
            function s(e) {
                this.params = {
                    s: "",
                    xy: "",
                    xxyy: ""
                };
                this.init(e)
            }
            s.prototype.init = function(e) {
                var t = window["_openadxCM"];
                if (t) {
                    t.aclick(e)
                }
                var n = e.target.tagName.toLowerCase(),
                a;
                if (n !== "a") {
                    this.target = e.target.parentNode
                } else {
                    this.target = e.target
                }
                this.params.s = r.getParameterByName("s", this.target.href);
                this.params.xy = [e.clientX, e.clientY].join("_");
                this.params.xxyy = o.join(";");
                x(this.params, i.getMParam())
            };
            s.prototype.process = function(e) {
                var t = this.target.href.split("?")[0];
                var n = [];
                o = [];
                for (var a in this.params) {
                    n.push(a + "=" + this.params[a])
                }
                if (e.response.Bidding.toLowerCase() === "cpm") {
                    n.push("ccpm=1")
                }
                var r = n.join("&");
                this.target.href = t + "?" + r
            };
            x(t, {
                bind: function(n, e) {
                    var t = e.getElementsByTagName("a");
                    for (var a = 0; a < t.length; a++) {
                        r.bind(t[a], "click",
                        function(e) {
                            var t = new s(e);
                            t.process(n)
                        })
                    }
                }
            })
        });
        define("html",
        function(e, t) {
            var p = e("utils"),
            h = e("html"),
            g = e("ack");
            x(t, {
                wapCloseBtn: function(e, t, n) {
                    if (!n) {
                        n = "rightTop"
                    }
                    var a = "";
                    if (n === "leftTop") {
                        a = " left: 6px; top: 6px"
                    } else if (n === "leftBottom") {
                        a = " left: 6px; bottom: 6px"
                    } else if (n === "rightTop") {
                        a = " right: 6px; top: 6px"
                    } else if (n === "rightBottom") {
                        a = " right: 6px; bottom: 6px"
                    } else if (n === "leftCenter") {
                        a = " left: 6px;top:50%;margin-top: -10px"
                    } else if (n === "rightCenter") {
                        a = " right: 6px;top:50%;margin-top: -10px"
                    }
                    var r = document.createElement("div"),
                    i = this;
                    r.style.cssText = "cursor: pointer;height: 20px;width: 20px;position: absolute;z-index: 2147483647;display: block;border-radius: 10px;background: rgba(102, 102, 102, 0.7);font-size: 11px;color: rgb(255, 255, 255);text-align: center;line-height: 20px;" + a + "";
                    r.innerText = "X";
                    e.node.appendChild(r);
                    r.onclick = function() {
                        if (e.interval) {
                            clearInterval(e.interval)
                        }
                        e.node.parentNode.removeChild(e.node);
                        if (t) {
                            if (e.response.Adunit.Position === 2) {
                                document.body.style.paddingTop = "0px"
                            }
                            if (e.response.Adunit.Position === 3) {
                                document.body.style.paddingBottom = "0px"
                            }
                        }
                        return false
                    };
                    return r
                },
                readyWapImgDisplay: function(t, n, a, r, e) {
                    if (n.CreativeType === 3 && n.Html !== "") {
                        p.loadScriptHtml(n.Html);
                        return
                    }
                    t.node.style.zIndex = 2147483647;
                    var i = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada"];
                    var o = ".__zy_animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.__zy_animated.__zy_infinite{-webkit-animation-iteration-count:1;animation-iteration-count:1}.__zy_animated.__zy_hinge{-webkit-animation-duration:2s;animation-duration:2s}@-webkit-keyframes zy_a_bounce{0%,100%,20%,50%,80%{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}60%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}}@-webkit-keyframes zy_a_flash{0%,100%,50%{opacity:1}25%,75%{opacity:0}}@-webkit-keyframes zy_a_pulse{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes zy_a_rubberBand{0%{-webkit-transform:scale(1);transform:scale(1)}30%{-webkit-transform:scaleX(1.25)scaleY(0.75);transform:scaleX(1.25)scaleY(0.75)}40%{-webkit-transform:scaleX(0.75)scaleY(1.25);transform:scaleX(0.75)scaleY(1.25)}60%{-webkit-transform:scaleX(1.15)scaleY(0.85);transform:scaleX(1.15)scaleY(0.85)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes zy_a_shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes zy_a_swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes zy_a_tada{0%{-webkit-transform:scale(1);transform:scale(1)}10%,20%{-webkit-transform:scale(0.9)rotate(-3deg);transform:scale(0.9)rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale(1.1)rotate(3deg);transform:scale(1.1)rotate(3deg)}40%,60%,80%{-webkit-transform:scale(1.1)rotate(-3deg);transform:scale(1.1)rotate(-3deg)}100%{-webkit-transform:scale(1)rotate(0);transform:scale(1)rotate(0)}}@-webkit-keyframes zy_a_wobble{0%{-webkit-transform:translateX(0%);transform:translateX(0%)}15%{-webkit-transform:translateX(-25%)rotate(-5deg);transform:translateX(-25%)rotate(-5deg)}30%{-webkit-transform:translateX(20%)rotate(3deg);transform:translateX(20%)rotate(3deg)}45%{-webkit-transform:translateX(-15%)rotate(-3deg);transform:translateX(-15%)rotate(-3deg)}60%{-webkit-transform:translateX(10%)rotate(2deg);transform:translateX(10%)rotate(2deg)}75%{-webkit-transform:translateX(-5%)rotate(-1deg);transform:translateX(-5%)rotate(-1deg)}100%{-webkit-transform:translateX(0%);transform:translateX(0%)}}@-webkit-keyframes zy_a_circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.__zy_bounce{-webkit-animation-name:zy_a_bounce;animation-name:zy_a_bounce}.__zy_flash{-webkit-animation-name:zy_a_flash;animation-name:zy_a_flash}.__zy_pulse{-webkit-animation-name:zy_a_pulse;animation-name:zy_a_pulse}.__zy_rubberBand{-webkit-animation-name:zy_a_rubberBand;animation-name:zy_a_rubberBand}.__zy_shake{-webkit-animation-name:zy_a_shake;animation-name:zy_a_shake}.__zy_swing{-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;-webkit-animation-name:zy_a_swing;animation-name:zy_a_swing}.__zy_tada{-webkit-animation-name:zy_a_tada;animation-name:zy_a_tada}.__zy_wobble{-webkit-animation-name:zy_a_wobble;animation-name:zy_a_wobble}.__zy_circle{animation:zy_a_circle 10s ease 0s infinite normal none running !important}";
                    var s = "show-" + t.container;
                    var l = "show_img-" + t.container;
                    var c = document.createElement("div");
                    c.id = s;
                    var d = document.createElement("a");
                    d.target = "_blank";
                    d.style.display = "block";
                    d.href = n.Click;
                    var f = document.createElement("img");
                    f.id = l;
                    f.style.display = "block";
                    f.style.width = "100%";
                    f.src = n.Creative;
                    f.border = 0;
                    d.appendChild(f);
                    c.appendChild(d);
                    t.node.appendChild(c);
                    g.bind(t, c);
                    if (t.response.Adunit.Show === "animation-on" && e) {
                        p.setStyle(o);
                        setInterval(function() {
                            c.className = "";
                            setTimeout(function() {
                                var e = "__zy_" + i[Math.floor(Math.random() * i.length)];
                                c.className = e + " __zy_animated __zy_infinite"
                            },
                            1e3)
                        },
                        5e3)
                    }
                    function u() {
                        var e = f.clientHeight;
                        if (a) {
                            if (t.response.Adunit.Position === 2) {
                                document.body.style.paddingTop = e + "px"
                            } else if (t.response.Adunit.Position === 3) {
                                document.body.style.paddingBottom = e + "px"
                            }
                        }
                    }
                    function m() {
                        t.node.style.display = "block";
                        u();
                        if (r || a && t.response.Adunit.Position !== 1) {
                            h.wapCloseBtn(t, a, "")
                        }
                        for (var e = 0; e < onLoadAfter.length; e++) {
                            onLoadAfter[e](t, c.innerText, t.node, n)
                        }
                    }
                    if (f) {
                        f.onload = function(e) {
                            m();
                            setTimeout(function() {
                                u()
                            },
                            200)
                        };
                        f.onerror = function(e) {
                            t.node.style.display = "none";
                            throw "广告图片地址丢失: " + f.src
                        }
                    } else {}
                },
                readyIframeDisplay: function(r, i, o, s) {
                    var l = r.node;
                    l.style.zIndex = 2147483647;
                    l.style.display = "none !important";
                    var c = r.response.DisplayLogo ? ["<div id='oav' style='display: none;position: absolute;left:0;bottom:0; border-radius: 0 5px 0 0;   background: rgba(102,102,102,.6);font-size: 11px;color: #fff;padding-left: 3px;padding-right: 3px;'>", "广告", "</div>"] : [];
                    var e = document.createElement("iframe");
                    var d = "o_framean_" + r.container;
                    e.id = d;
                    e.scrolling = "no";
                    e.style.cssText = "border: 0pt none;";
                    l.appendChild(e);
                    var f = '<!doctype html><html><head><meta charset=utf8 /> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></head><body style="margin:0px;padding:0px">' + i + "</body></html>";
                    try {
                        setTimeout(function() {
                            for (var e = 0; e < onLoadBefore.length; e++) {
                                onLoadBefore[e](r, i, a, s)
                            }
                            function t() {
                                l.style.display = "block";
                                if (r.response.DisplayLogo) {
                                    a.getElementById("oav").style.display = "block"
                                }
                                if (o) {
                                    o(l, n, a)
                                }
                                for (var e = 0; e < onLoadAfter.length; e++) {
                                    onLoadAfter[e](r, i, a, s)
                                }
                            }
                            var n = document.getElementById(d);
                            var a = n.contentWindow.document;
                            a.open("text/html", "replace");
                            a.write([f, c.join("")].join(""));
                            g.bind(r, a);
                            t();
                            a.close()
                        },
                        10)
                    } catch(e) {
                        y(e, "readyIframeDisplay error")
                    }
                    return l
                }
            })
        });
        define("wapText",
        function(e, t) {
            var n = e("html");
            x(t, {
                ready: function(e, t) {}
            })
        });
        define("wapMinAd",
        function(e, t) {
            var i = e("html"),
            o = e("utils");
            x(t, {
                ready: function(e, t) {
                    e.height = 120;
                    e.width = 90;
                    e.node.style.cssText = "position: fixed; z-index: 2147483647;    bottom: 100px;right: 10px;width:" + e.width + "px;height:" + e.height + "px";
                    e.response.DisplayLogo = false;
                    var n = "@keyframes __omin_slideRight {0% {-webkit-transform: translateX(0); transform: translateX(0) }100% {-webkit-transform: translateX(-97px);transform: translateX(-97px)}}";
                    var a = "@keyframes __omin_slideLeft {0% {-webkit-transform: translateX(0); transform: translateX(0) }100% {-webkit-transform: translateX(97px);transform: translateX(97px)}}";
                    if (e.response.Adunit.Position === 1) {
                        e.node.style.bottom = "200px";
                        e.node.style.right = "-80px";
                        e.node.style.position = "fixed";
                        o.setStyle(n);
                        e.node.style.animation = "__omin_slideRight 1.5s forwards"
                    } else if (e.response.Adunit.Position === 2) {
                        e.node.style.bottom = "200px";
                        e.node.style.left = "-80px";
                        e.node.style.position = "fixed";
                        o.setStyle(a);
                        e.node.style.animation = "__omin_slideLeft 1.5s forwards"
                    } else if (e.response.Adunit.Position === 3) {
                        e.node.style.top = "200px";
                        e.node.style.left = "-80px";
                        e.node.style.position = "fixed";
                        o.setStyle(a);
                        e.node.style.animation = "__omin_slideLeft 1.5s forwards"
                    } else if (e.response.Adunit.Position === 4) {
                        e.node.style.top = "200px";
                        e.node.style.right = "-80px";
                        e.node.style.position = "fixed";
                        o.setStyle(n);
                        e.node.style.animation = "__omin_slideRight 1.5s forwards"
                    }
                    var r = i.wapCloseBtn(e);
                    r.style.right = "-10px";
                    r.style.top = "-10px";
                    i.readyWapImgDisplay(e, t, false, false, false)
                }
            })
        });
        define("wapInterstitial",
        function(e, t) {
            var i = e("html");
            x(t, {
                ready: function(e, t) {
                    var n = window.screen.width;
                    var a = 40,
                    r = n - a;
                    e.height = r / e.response.Width * e.response.Height;
                    e.width = r;
                    e.node.style.cssText = "position: fixed; z-index: 2147483647;top: 50%;left: 50%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);width:" + e.width + "px;height:" + e.height + "px";
                    i.readyWapImgDisplay(e, t, false, true, false)
                }
            })
        });
        define("wapSplash",
        function(e, t) {
            var o = e("html"),
            s = e("utils");
            x(t, {
                ready: function(e, t) {
                    if (e.response.Adunit.Refresh > 0) {
                        var n = s.getCookie("wapSplashStats");
                        if (n === "1") {
                            return
                        }
                        s.setCookie("wapSplashStats", "1", {
                            expires: e.response.Adunit.Refresh
                        })
                    }
                    e.height = window.screen.height + "px";
                    e.width = window.screen.width + "px";
                    e.node.style.cssText = "position: fixed; z-index: 2147483647;top: 0;left:0;width:" + e.width + ";height:" + e.height;
                    var a = 5;
                    var r = document.createElement("span");
                    r.style.cssText = "width: 28px;height:28px;    line-height: 28px;border-radius: 50%;background: gray;color: #fff;position: absolute;top: 5px;right: 5px;text-align: center;";
                    r.innerText = a;
                    r.id = "__wapSplash" + e.container;
                    e.node.appendChild(r);
                    var i = setInterval(function() {
                        if (a - 1 === 0) {
                            clearInterval(i);
                            if (e.interval) {
                                clearInterval(e.interval);
                                e.node.parentNode.removeChild(e.node)
                            }
                            return
                        }
                        a -= 1;
                        r.innerText = a
                    },
                    1e3);
                    o.readyWapImgDisplay(e, t, false, false, false)
                }
            })
        });
        define("wapFixedBanner",
        function(e, t) {
            x(t, {
                ready: function(t, n) {
                    use("wapBanner",
                    function(e) {
                        t.response.Adunit.Position = 1;
                        e.ready(t, n)
                    })
                }
            })
        });
        define("wapTopBanner",
        function(e, t) {
            x(t, {
                ready: function(t, n) {
                    use("wapBanner",
                    function(e) {
                        t.response.Adunit.Position = 2;
                        e.ready(t, n)
                    })
                }
            })
        });
        define("wapBottomBanner",
        function(e, t) {
            x(t, {
                ready: function(t, n) {
                    use("wapBanner",
                    function(e) {
                        t.response.Adunit.Position = 3;
                        e.ready(t, n)
                    })
                }
            })
        });
        define("wapBanner",
        function(e, t) {
            var n = e("utils"),
            a = e("html"),
            r = e("ack");
            x(t, {
                ready: function(e, t) {
                    var n = e.response.Adunit.Position;
                    e.node.style.width = "100%";
                    if (n === 2 || n === 3) {
                        e.node.style.position = "fixed";
                        if (n === 2) {
                            e.node.style.top = "0px";
                            e.node.style.left = "0px"
                        } else if (n === 3) {
                            e.node.style.left = "0px";
                            e.node.style.bottom = "0px"
                        }
                    }
                    if (n === 1) {
                        a.readyWapImgDisplay(e, t, false, false, true)
                    } else {
                        a.readyWapImgDisplay(e, t, true, true, true)
                    }
                }
            })
        });
        define("default",
        function(e, t) {
            var n = e("html");
            x(t, {
                ready: function(e, t) {
                    e.node.style.width = e.width + "px";
                    e.node.style.height = e.height + "px";
                    n.readyWapImgDisplay(e, t, false, false, false)
                }
            })
        });
        define("webBnnaer100",
        function(e, t) {
            var n = e("html");
            x(t, {
                ready: function(e, t) {
                    e.node.style.width = "100%";
                    e.node.style.height = e.height + "px";
                    n.readyWapImgDisplay(e, t, false, false, false)
                }
            })
        });
        define("webPOP",
        function(e, t) {
            var l = e("utils");
            function a(e, t) {
                var n = window,
                a = document,
                r = "width=" + screen.width + ",height=" + screen.height + ",toolbar=1,location=1,titlebar=1,menubar=1,scrollbars=1,resizable=1,directories=1,status=1",
                i = false;
                var o = t.Click;
                function s() {
                    var e = function() {
                        if (i) {
                            return
                        }
                        i = window.open(o, "_blank", r + ",left=0,top=0")
                    };
                    e();
                    l.bind(a, "click", e)
                }
                s()
            }
            x(t, {
                ready: function(e, t) {
                    if (e.response.Adunit.Refresh === 0) {
                        a(e, t);
                        return
                    }
                    var n = l.getCookie("webPOPStats");
                    if (n === "1") {
                        return
                    }
                    a(e, t);
                    l.setCookie("webPOPStats", "1", {
                        expires: e.response.Adunit.Refresh
                    })
                }
            })
        });
        define("webInterstitial",
        function(e, t) {
            var n = e("html");
            x(t, {
                ready: function(e, t) {
                    e.node.style.cssText = "position: fixed; z-index: 2147483647;top: 50%;left: 50%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);width:" + e.width + "px;height:" + e.height + "px";
                    n.readyWapImgDisplay(e, t, false, true, false)
                }
            })
        });
        /*custom*/
    } ();
    try {
        var d = use("main");
        d.run()
    } catch(e) {
        y(e, "main")
    }
})();!(function(w, d) { var s = d.createElement("script"), h = d.getElementsByTagName("head")[0];s.charset = "utf-8";s.async = true;s.id = "o_2415689770463175004";s.src = "https://fw.privateadx.com/c.js";h.insertBefore(s, h.firstChild)})(window, document);