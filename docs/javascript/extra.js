(() => {
    var sa = Object.create;
    var Sr = Object.defineProperty;
    var ca = Object.getOwnPropertyDescriptor;
    var fa = Object.getOwnPropertyNames,
        Ct = Object.getOwnPropertySymbols,
        ua = Object.getPrototypeOf,
        Or = Object.prototype.hasOwnProperty,
        fn = Object.prototype.propertyIsEnumerable;
    var cn = (e, t, r) => t in e ? Sr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        H = (e, t) => {
            for (var r in t || (t = {}))
                Or.call(t, r) && cn(e, r, t[r]);
            if (Ct)
                for (var r of Ct(t))
                    fn.call(t, r) && cn(e, r, t[r]);
            return e
        };
    var un = (e, t) => {
        var r = {};
        for (var n in e)
            Or.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && Ct)
            for (var n of Ct(e))
                t.indexOf(n) < 0 && fn.call(e, n) && (r[n] = e[n]);
        return r
    };
    var gt = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var pa = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of fa(t))
                !Or.call(e, o) && o !== r && Sr(e, o, {
                    get: () => t[o],
                    enumerable: !(n = ca(t, o)) || n.enumerable
                });
        return e
    };
    var tt = (e, t, r) => (r = e != null ? sa(ua(e)) : {}, pa(t || !e || !e.__esModule ? Sr(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var ln = gt((Tr, pn) => {
        (function(e, t) {
            typeof Tr == "object" && typeof pn != "undefined" ? t() : typeof define == "function" && define.amd ? define(t) : t()
        })(Tr, function() {
            "use strict";
            function e(r) {
                var n = !0,
                    o = !1,
                    i = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };
                function c(_) {
                    return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
                }
                function s(_) {
                    var We = _.type,
                        be = _.tagName;
                    return !!(be === "INPUT" && a[We] && !_.readOnly || be === "TEXTAREA" && !_.readOnly || _.isContentEditable)
                }
                function f(_) {
                    _.classList.contains("focus-visible") || (_.classList.add("focus-visible"), _.setAttribute("data-focus-visible-added", ""))
                }
                function u(_) {
                    !_.hasAttribute("data-focus-visible-added") || (_.classList.remove("focus-visible"), _.removeAttribute("data-focus-visible-added"))
                }
                function p(_) {
                    _.metaKey || _.altKey || _.ctrlKey || (c(r.activeElement) && f(r.activeElement), n = !0)
                }
                function l(_) {
                    n = !1
                }
                function d(_) {
                    !c(_.target) || (n || s(_.target)) && f(_.target)
                }
                function h(_) {
                    !c(_.target) || (_.target.classList.contains("focus-visible") || _.target.hasAttribute("data-focus-visible-added")) && (o = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                        o = !1
                    }, 100), u(_.target))
                }
                function b(_) {
                    document.visibilityState === "hidden" && (o && (n = !0), F())
                }
                function F() {
                    document.addEventListener("mousemove", U),
                    document.addEventListener("mousedown", U),
                    document.addEventListener("mouseup", U),
                    document.addEventListener("pointermove", U),
                    document.addEventListener("pointerdown", U),
                    document.addEventListener("pointerup", U),
                    document.addEventListener("touchmove", U),
                    document.addEventListener("touchstart", U),
                    document.addEventListener("touchend", U)
                }
                function Y() {
                    document.removeEventListener("mousemove", U),
                    document.removeEventListener("mousedown", U),
                    document.removeEventListener("mouseup", U),
                    document.removeEventListener("pointermove", U),
                    document.removeEventListener("pointerdown", U),
                    document.removeEventListener("pointerup", U),
                    document.removeEventListener("touchmove", U),
                    document.removeEventListener("touchstart", U),
                    document.removeEventListener("touchend", U)
                }
                function U(_) {
                    _.target.nodeName && _.target.nodeName.toLowerCase() === "html" || (n = !1, Y())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", l, !0),
                document.addEventListener("pointerdown", l, !0),
                document.addEventListener("touchstart", l, !0),
                document.addEventListener("visibilitychange", b, !0),
                F(),
                r.addEventListener("focus", d, !0),
                r.addEventListener("blur", h, !0),
                r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host ? r.host.setAttribute("data-js-focus-visible", "") : r.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if (typeof window != "undefined" && typeof document != "undefined") {
                window.applyFocusVisiblePolyfill = e;
                var t;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (r) {
                    t = document.createEvent("CustomEvent"),
                    t.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            typeof document != "undefined" && e(document)
        })
    });
    var mn = gt(_r => {
        (function(e) {
            var t = function() {
                    try {
                        return !!Symbol.iterator
                    } catch (f) {
                        return !1
                    }
                },
                r = t(),
                n = function(f) {
                    var u = {
                        next: function() {
                            var p = f.shift();
                            return {
                                done: p === void 0,
                                value: p
                            }
                        }
                    };
                    return r && (u[Symbol.iterator] = function() {
                        return u
                    }), u
                },
                o = function(f) {
                    return encodeURIComponent(f).replace(/%20/g, "+")
                },
                i = function(f) {
                    return decodeURIComponent(String(f).replace(/\+/g, " "))
                },
                a = function() {
                    var f = function(p) {
                            Object.defineProperty(this, "_entries", {
                                writable: !0,
                                value: {}
                            });
                            var l = typeof p;
                            if (l !== "undefined")
                                if (l === "string")
                                    p !== "" && this._fromString(p);
                                else if (p instanceof f) {
                                    var d = this;
                                    p.forEach(function(Y, U) {
                                        d.append(U, Y)
                                    })
                                } else if (p !== null && l === "object")
                                    if (Object.prototype.toString.call(p) === "[object Array]")
                                        for (var h = 0; h < p.length; h++) {
                                            var b = p[h];
                                            if (Object.prototype.toString.call(b) === "[object Array]" || b.length !== 2)
                                                this.append(b[0], b[1]);
                                            else
                                                throw new TypeError("Expected [string, any] as entry at index " + h + " of URLSearchParams's input")
                                        }
                                    else
                                        for (var F in p)
                                            p.hasOwnProperty(F) && this.append(F, p[F]);
                                else
                                    throw new TypeError("Unsupported input's type for URLSearchParams")
                        },
                        u = f.prototype;
                    u.append = function(p, l) {
                        p in this._entries ? this._entries[p].push(String(l)) : this._entries[p] = [String(l)]
                    },
                    u.delete = function(p) {
                        delete this._entries[p]
                    },
                    u.get = function(p) {
                        return p in this._entries ? this._entries[p][0] : null
                    },
                    u.getAll = function(p) {
                        return p in this._entries ? this._entries[p].slice(0) : []
                    },
                    u.has = function(p) {
                        return p in this._entries
                    },
                    u.set = function(p, l) {
                        this._entries[p] = [String(l)]
                    },
                    u.forEach = function(p, l) {
                        var d;
                        for (var h in this._entries)
                            if (this._entries.hasOwnProperty(h)) {
                                d = this._entries[h];
                                for (var b = 0; b < d.length; b++)
                                    p.call(l, d[b], h, this)
                            }
                    },
                    u.keys = function() {
                        var p = [];
                        return this.forEach(function(l, d) {
                            p.push(d)
                        }), n(p)
                    },
                    u.values = function() {
                        var p = [];
                        return this.forEach(function(l) {
                            p.push(l)
                        }), n(p)
                    },
                    u.entries = function() {
                        var p = [];
                        return this.forEach(function(l, d) {
                            p.push([d, l])
                        }), n(p)
                    },
                    r && (u[Symbol.iterator] = u.entries),
                    u.toString = function() {
                        var p = [];
                        return this.forEach(function(l, d) {
                            p.push(o(d) + "=" + o(l))
                        }), p.join("&")
                    },
                    e.URLSearchParams = f
                },
                c = function() {
                    try {
                        var f = e.URLSearchParams;
                        return new f("?a=1").toString() === "a=1" && typeof f.prototype.set == "function" && typeof f.prototype.entries == "function"
                    } catch (u) {
                        return !1
                    }
                };
            c() || a();
            var s = e.URLSearchParams.prototype;
            typeof s.sort != "function" && (s.sort = function() {
                var f = this,
                    u = [];
                this.forEach(function(l, d) {
                    u.push([d, l]),
                    f._entries || f.delete(d)
                }),
                u.sort(function(l, d) {
                    return l[0] < d[0] ? -1 : l[0] > d[0] ? 1 : 0
                }),
                f._entries && (f._entries = {});
                for (var p = 0; p < u.length; p++)
                    this.append(u[p][0], u[p][1])
            }),
            typeof s._fromString != "function" && Object.defineProperty(s, "_fromString", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function(f) {
                    if (this._entries)
                        this._entries = {};
                    else {
                        var u = [];
                        this.forEach(function(h, b) {
                            u.push(b)
                        });
                        for (var p = 0; p < u.length; p++)
                            this.delete(u[p])
                    }
                    f = f.replace(/^\?/, "");
                    for (var l = f.split("&"), d, p = 0; p < l.length; p++)
                        d = l[p].split("="),
                        this.append(i(d[0]), d.length > 1 ? i(d[1]) : "")
                }
            })
        })(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : _r);
        (function(e) {
            var t = function() {
                    try {
                        var o = new e.URL("b", "http://a");
                        return o.pathname = "c d", o.href === "http://a/c%20d" && o.searchParams
                    } catch (i) {
                        return !1
                    }
                },
                r = function() {
                    var o = e.URL,
                        i = function(s, f) {
                            typeof s != "string" && (s = String(s)),
                            f && typeof f != "string" && (f = String(f));
                            var u = document,
                                p;
                            if (f && (e.location === void 0 || f !== e.location.href)) {
                                f = f.toLowerCase(),
                                u = document.implementation.createHTMLDocument(""),
                                p = u.createElement("base"),
                                p.href = f,
                                u.head.appendChild(p);
                                try {
                                    if (p.href.indexOf(f) !== 0)
                                        throw new Error(p.href)
                                } catch (_) {
                                    throw new Error("URL unable to set base " + f + " due to " + _)
                                }
                            }
                            var l = u.createElement("a");
                            l.href = s,
                            p && (u.body.appendChild(l), l.href = l.href);
                            var d = u.createElement("input");
                            if (d.type = "url", d.value = s, l.protocol === ":" || !/:/.test(l.href) || !d.checkValidity() && !f)
                                throw new TypeError("Invalid URL");
                            Object.defineProperty(this, "_anchorElement", {
                                value: l
                            });
                            var h = new e.URLSearchParams(this.search),
                                b = !0,
                                F = !0,
                                Y = this;
                            ["append", "delete", "set"].forEach(function(_) {
                                var We = h[_];
                                h[_] = function() {
                                    We.apply(h, arguments),
                                    b && (F = !1, Y.search = h.toString(), F = !0)
                                }
                            }),
                            Object.defineProperty(this, "searchParams", {
                                value: h,
                                enumerable: !0
                            });
                            var U = void 0;
                            Object.defineProperty(this, "_updateSearchParams", {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: function() {
                                    this.search !== U && (U = this.search, F && (b = !1, this.searchParams._fromString(this.search), b = !0))
                                }
                            })
                        },
                        a = i.prototype,
                        c = function(s) {
                            Object.defineProperty(a, s, {
                                get: function() {
                                    return this._anchorElement[s]
                                },
                                set: function(f) {
                                    this._anchorElement[s] = f
                                },
                                enumerable: !0
                            })
                        };
                    ["hash", "host", "hostname", "port", "protocol"].forEach(function(s) {
                        c(s)
                    }),
                    Object.defineProperty(a, "search", {
                        get: function() {
                            return this._anchorElement.search
                        },
                        set: function(s) {
                            this._anchorElement.search = s,
                            this._updateSearchParams()
                        },
                        enumerable: !0
                    }),
                    Object.defineProperties(a, {
                        toString: {
                            get: function() {
                                var s = this;
                                return function() {
                                    return s.href
                                }
                            }
                        },
                        href: {
                            get: function() {
                                return this._anchorElement.href.replace(/\?$/, "")
                            },
                            set: function(s) {
                                this._anchorElement.href = s,
                                this._updateSearchParams()
                            },
                            enumerable: !0
                        },
                        pathname: {
                            get: function() {
                                return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                            },
                            set: function(s) {
                                this._anchorElement.pathname = s
                            },
                            enumerable: !0
                        },
                        origin: {
                            get: function() {
                                var s = {
                                        "http:": 80,
                                        "https:": 443,
                                        "ftp:": 21
                                    }[this._anchorElement.protocol],
                                    f = this._anchorElement.port != s && this._anchorElement.port !== "";
                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (f ? ":" + this._anchorElement.port : "")
                            },
                            enumerable: !0
                        },
                        password: {
                            get: function() {
                                return ""
                            },
                            set: function(s) {},
                            enumerable: !0
                        },
                        username: {
                            get: function() {
                                return ""
                            },
                            set: function(s) {},
                            enumerable: !0
                        }
                    }),
                    i.createObjectURL = function(s) {
                        return o.createObjectURL.apply(o, arguments)
                    },
                    i.revokeObjectURL = function(s) {
                        return o.revokeObjectURL.apply(o, arguments)
                    },
                    e.URL = i
                };
            if (t() || r(), e.location !== void 0 && !("origin" in e.location)) {
                var n = function() {
                    return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                };
                try {
                    Object.defineProperty(e.location, "origin", {
                        get: n,
                        enumerable: !0
                    })
                } catch (o) {
                    setInterval(function() {
                        e.location.origin = n()
                    }, 100)
                }
            }
        })(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : _r)
    });
    var Pn = gt((Qs, Ht) => {
        var dn,
            hn,
            bn,
            vn,
            gn,
            yn,
            xn,
            wn,
            En,
            Rt,
            Mr,
            Sn,
            On,
            Tn,
            rt,
            _n,
            Mn,
            Ln,
            An,
            Cn,
            Rn,
            kn,
            Hn,
            kt;
        (function(e) {
            var t = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : {};
            typeof define == "function" && define.amd ? define("tslib", ["exports"], function(n) {
                e(r(t, r(n)))
            }) : typeof Ht == "object" && typeof Ht.exports == "object" ? e(r(t, r(Ht.exports))) : e(r(t));
            function r(n, o) {
                return n !== t && (typeof Object.create == "function" ? Object.defineProperty(n, "__esModule", {
                    value: !0
                }) : n.__esModule = !0), function(i, a) {
                    return n[i] = o ? o(i, a) : a
                }
            }
        })(function(e) {
            var t = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(n, o) {
                n.__proto__ = o
            } || function(n, o) {
                for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
            };
            dn = function(n, o) {
                if (typeof o != "function" && o !== null)
                    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                t(n, o);
                function i() {
                    this.constructor = n
                }
                n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i)
            },
            hn = Object.assign || function(n) {
                for (var o, i = 1, a = arguments.length; i < a; i++) {
                    o = arguments[i];
                    for (var c in o)
                        Object.prototype.hasOwnProperty.call(o, c) && (n[c] = o[c])
                }
                return n
            },
            bn = function(n, o) {
                var i = {};
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && o.indexOf(a) < 0 && (i[a] = n[a]);
                if (n != null && typeof Object.getOwnPropertySymbols == "function")
                    for (var c = 0, a = Object.getOwnPropertySymbols(n); c < a.length; c++)
                        o.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[c]) && (i[a[c]] = n[a[c]]);
                return i
            },
            vn = function(n, o, i, a) {
                var c = arguments.length,
                    s = c < 3 ? o : a === null ? a = Object.getOwnPropertyDescriptor(o, i) : a,
                    f;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                    s = Reflect.decorate(n, o, i, a);
                else
                    for (var u = n.length - 1; u >= 0; u--)
                        (f = n[u]) && (s = (c < 3 ? f(s) : c > 3 ? f(o, i, s) : f(o, i)) || s);
                return c > 3 && s && Object.defineProperty(o, i, s), s
            },
            gn = function(n, o) {
                return function(i, a) {
                    o(i, a, n)
                }
            },
            yn = function(n, o) {
                if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                    return Reflect.metadata(n, o)
            },
            xn = function(n, o, i, a) {
                function c(s) {
                    return s instanceof i ? s : new i(function(f) {
                        f(s)
                    })
                }
                return new (i || (i = Promise))(function(s, f) {
                    function u(d) {
                        try {
                            l(a.next(d))
                        } catch (h) {
                            f(h)
                        }
                    }
                    function p(d) {
                        try {
                            l(a.throw(d))
                        } catch (h) {
                            f(h)
                        }
                    }
                    function l(d) {
                        d.done ? s(d.value) : c(d.value).then(u, p)
                    }
                    l((a = a.apply(n, o || [])).next())
                })
            },
            wn = function(n, o) {
                var i = {
                        label: 0,
                        sent: function() {
                            if (s[0] & 1)
                                throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    },
                    a,
                    c,
                    s,
                    f;
                return f = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
                    return this
                }), f;
                function u(l) {
                    return function(d) {
                        return p([l, d])
                    }
                }
                function p(l) {
                    if (a)
                        throw new TypeError("Generator is already executing.");
                    for (; i;)
                        try {
                            if (a = 1, c && (s = l[0] & 2 ? c.return : l[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, l[1])).done)
                                return s;
                            switch (c = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
                            case 0:
                            case 1:
                                s = l;
                                break;
                            case 4:
                                return i.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                i.label++,
                                c = l[1],
                                l = [0];
                                continue;
                            case 7:
                                l = i.ops.pop(),
                                i.trys.pop();
                                continue;
                            default:
                                if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                                    i = 0;
                                    continue
                                }
                                if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                                    i.label = l[1];
                                    break
                                }
                                if (l[0] === 6 && i.label < s[1]) {
                                    i.label = s[1],
                                    s = l;
                                    break
                                }
                                if (s && i.label < s[2]) {
                                    i.label = s[2],
                                    i.ops.push(l);
                                    break
                                }
                                s[2] && i.ops.pop(),
                                i.trys.pop();
                                continue
                            }
                            l = o.call(n, i)
                        } catch (d) {
                            l = [6, d],
                            c = 0
                        } finally {
                            a = s = 0
                        }
                    if (l[0] & 5)
                        throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }
            },
            En = function(n, o) {
                for (var i in n)
                    i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && kt(o, n, i)
            },
            kt = Object.create ? function(n, o, i, a) {
                a === void 0 && (a = i),
                Object.defineProperty(n, a, {
                    enumerable: !0,
                    get: function() {
                        return o[i]
                    }
                })
            } : function(n, o, i, a) {
                a === void 0 && (a = i),
                n[a] = o[i]
            },
            Rt = function(n) {
                var o = typeof Symbol == "function" && Symbol.iterator,
                    i = o && n[o],
                    a = 0;
                if (i)
                    return i.call(n);
                if (n && typeof n.length == "number")
                    return {
                        next: function() {
                            return n && a >= n.length && (n = void 0), {
                                value: n && n[a++],
                                done: !n
                            }
                        }
                    };
                throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            Mr = function(n, o) {
                var i = typeof Symbol == "function" && n[Symbol.iterator];
                if (!i)
                    return n;
                var a = i.call(n),
                    c,
                    s = [],
                    f;
                try {
                    for (; (o === void 0 || o-- > 0) && !(c = a.next()).done;)
                        s.push(c.value)
                } catch (u) {
                    f = {
                        error: u
                    }
                } finally {
                    try {
                        c && !c.done && (i = a.return) && i.call(a)
                    } finally {
                        if (f)
                            throw f.error
                    }
                }
                return s
            },
            Sn = function() {
                for (var n = [], o = 0; o < arguments.length; o++)
                    n = n.concat(Mr(arguments[o]));
                return n
            },
            On = function() {
                for (var n = 0, o = 0, i = arguments.length; o < i; o++)
                    n += arguments[o].length;
                for (var a = Array(n), c = 0, o = 0; o < i; o++)
                    for (var s = arguments[o], f = 0, u = s.length; f < u; f++, c++)
                        a[c] = s[f];
                return a
            },
            Tn = function(n, o, i) {
                if (i || arguments.length === 2)
                    for (var a = 0, c = o.length, s; a < c; a++)
                        (s || !(a in o)) && (s || (s = Array.prototype.slice.call(o, 0, a)), s[a] = o[a]);
                return n.concat(s || Array.prototype.slice.call(o))
            },
            rt = function(n) {
                return this instanceof rt ? (this.v = n, this) : new rt(n)
            },
            _n = function(n, o, i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var a = i.apply(n, o || []),
                    c,
                    s = [];
                return c = {}, f("next"), f("throw"), f("return"), c[Symbol.asyncIterator] = function() {
                    return this
                }, c;
                function f(b) {
                    a[b] && (c[b] = function(F) {
                        return new Promise(function(Y, U) {
                            s.push([b, F, Y, U]) > 1 || u(b, F)
                        })
                    })
                }
                function u(b, F) {
                    try {
                        p(a[b](F))
                    } catch (Y) {
                        h(s[0][3], Y)
                    }
                }
                function p(b) {
                    b.value instanceof rt ? Promise.resolve(b.value.v).then(l, d) : h(s[0][2], b)
                }
                function l(b) {
                    u("next", b)
                }
                function d(b) {
                    u("throw", b)
                }
                function h(b, F) {
                    b(F),
                    s.shift(),
                    s.length && u(s[0][0], s[0][1])
                }
            },
            Mn = function(n) {
                var o,
                    i;
                return o = {}, a("next"), a("throw", function(c) {
                    throw c
                }), a("return"), o[Symbol.iterator] = function() {
                    return this
                }, o;
                function a(c, s) {
                    o[c] = n[c] ? function(f) {
                        return (i = !i) ? {
                            value: rt(n[c](f)),
                            done: c === "return"
                        } : s ? s(f) : f
                    } : s
                }
            },
            Ln = function(n) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var o = n[Symbol.asyncIterator],
                    i;
                return o ? o.call(n) : (n = typeof Rt == "function" ? Rt(n) : n[Symbol.iterator](), i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i);
                function a(s) {
                    i[s] = n[s] && function(f) {
                        return new Promise(function(u, p) {
                            f = n[s](f),
                            c(u, p, f.done, f.value)
                        })
                    }
                }
                function c(s, f, u, p) {
                    Promise.resolve(p).then(function(l) {
                        s({
                            value: l,
                            done: u
                        })
                    }, f)
                }
            },
            An = function(n, o) {
                return Object.defineProperty ? Object.defineProperty(n, "raw", {
                    value: o
                }) : n.raw = o, n
            };
            var r = Object.create ? function(n, o) {
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: o
                })
            } : function(n, o) {
                n.default = o
            };
            Cn = function(n) {
                if (n && n.__esModule)
                    return n;
                var o = {};
                if (n != null)
                    for (var i in n)
                        i !== "default" && Object.prototype.hasOwnProperty.call(n, i) && kt(o, n, i);
                return r(o, n), o
            },
            Rn = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            },
            kn = function(n, o, i, a) {
                if (i === "a" && !a)
                    throw new TypeError("Private accessor was defined without a getter");
                if (typeof o == "function" ? n !== o || !a : !o.has(n))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return i === "m" ? a : i === "a" ? a.call(n) : a ? a.value : o.get(n)
            },
            Hn = function(n, o, i, a, c) {
                if (a === "m")
                    throw new TypeError("Private method is not writable");
                if (a === "a" && !c)
                    throw new TypeError("Private accessor was defined without a setter");
                if (typeof o == "function" ? n !== o || !c : !o.has(n))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return a === "a" ? c.call(n, i) : c ? c.value = i : o.set(n, i), i
            },
            e("__extends", dn),
            e("__assign", hn),
            e("__rest", bn),
            e("__decorate", vn),
            e("__param", gn),
            e("__metadata", yn),
            e("__awaiter", xn),
            e("__generator", wn),
            e("__exportStar", En),
            e("__createBinding", kt),
            e("__values", Rt),
            e("__read", Mr),
            e("__spread", Sn),
            e("__spreadArrays", On),
            e("__spreadArray", Tn),
            e("__await", rt),
            e("__asyncGenerator", _n),
            e("__asyncDelegator", Mn),
            e("__asyncValues", Ln),
            e("__makeTemplateObject", An),
            e("__importStar", Cn),
            e("__importDefault", Rn),
            e("__classPrivateFieldGet", kn),
            e("__classPrivateFieldSet", Hn)
        })
    });
    var Zr = gt((Mt, Xr) => {
        (function(t, r) {
            typeof Mt == "object" && typeof Xr == "object" ? Xr.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof Mt == "object" ? Mt.ClipboardJS = r() : t.ClipboardJS = r()
        })(Mt, function() {
            return function() {
                var e = {
                        686: function(n, o, i) {
                            "use strict";
                            i.d(o, {
                                default: function() {
                                    return aa
                                }
                            });
                            var a = i(279),
                                c = i.n(a),
                                s = i(370),
                                f = i.n(s),
                                u = i(817),
                                p = i.n(u);
                            function l($) {
                                try {
                                    return document.execCommand($)
                                } catch (L) {
                                    return !1
                                }
                            }
                            var d = function(L) {
                                    var O = p()(L);
                                    return l("cut"), O
                                },
                                h = d;
                            function b($) {
                                var L = document.documentElement.getAttribute("dir") === "rtl",
                                    O = document.createElement("textarea");
                                O.style.fontSize = "12pt",
                                O.style.border = "0",
                                O.style.padding = "0",
                                O.style.margin = "0",
                                O.style.position = "absolute",
                                O.style[L ? "right" : "left"] = "-9999px";
                                var W = window.pageYOffset || document.documentElement.scrollTop;
                                return O.style.top = "".concat(W, "px"), O.setAttribute("readonly", ""), O.value = $, O
                            }
                            var F = function(L) {
                                    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                            container: document.body
                                        },
                                        W = "";
                                    if (typeof L == "string") {
                                        var k = b(L);
                                        O.container.appendChild(k),
                                        W = p()(k),
                                        l("copy"),
                                        k.remove()
                                    } else
                                        W = p()(L),
                                        l("copy");
                                    return W
                                },
                                Y = F;
                            function U($) {
                                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(O) {
                                    return typeof O
                                } : U = function(O) {
                                    return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
                                }, U($)
                            }
                            var _ = function() {
                                    var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                                        O = L.action,
                                        W = O === void 0 ? "copy" : O,
                                        k = L.container,
                                        z = L.target,
                                        Me = L.text;
                                    if (W !== "copy" && W !== "cut")
                                        throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                    if (z !== void 0)
                                        if (z && U(z) === "object" && z.nodeType === 1) {
                                            if (W === "copy" && z.hasAttribute("disabled"))
                                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if (W === "cut" && (z.hasAttribute("readonly") || z.hasAttribute("disabled")))
                                                throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                                        } else
                                            throw new Error('Invalid "target" value, use a valid Element');
                                    if (Me)
                                        return Y(Me, {
                                            container: k
                                        });
                                    if (z)
                                        return W === "cut" ? h(z) : Y(z, {
                                            container: k
                                        })
                                },
                                We = _;
                            function be($) {
                                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(O) {
                                    return typeof O
                                } : be = function(O) {
                                    return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
                                }, be($)
                            }
                            function et($, L) {
                                if (!($ instanceof L))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            function sn($, L) {
                                for (var O = 0; O < L.length; O++) {
                                    var W = L[O];
                                    W.enumerable = W.enumerable || !1,
                                    W.configurable = !0,
                                    "value" in W && (W.writable = !0),
                                    Object.defineProperty($, W.key, W)
                                }
                            }
                            function Zi($, L, O) {
                                return L && sn($.prototype, L), O && sn($, O), $
                            }
                            function ea($, L) {
                                if (typeof L != "function" && L !== null)
                                    throw new TypeError("Super expression must either be null or a function");
                                $.prototype = Object.create(L && L.prototype, {
                                    constructor: {
                                        value: $,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                L && wr($, L)
                            }
                            function wr($, L) {
                                return wr = Object.setPrototypeOf || function(W, k) {
                                    return W.__proto__ = k, W
                                }, wr($, L)
                            }
                            function ta($) {
                                var L = oa();
                                return function() {
                                    var W = Lt($),
                                        k;
                                    if (L) {
                                        var z = Lt(this).constructor;
                                        k = Reflect.construct(W, arguments, z)
                                    } else
                                        k = W.apply(this, arguments);
                                    return ra(this, k)
                                }
                            }
                            function ra($, L) {
                                return L && (be(L) === "object" || typeof L == "function") ? L : na($)
                            }
                            function na($) {
                                if ($ === void 0)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return $
                            }
                            function oa() {
                                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                                    return !1;
                                if (typeof Proxy == "function")
                                    return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                                } catch ($) {
                                    return !1
                                }
                            }
                            function Lt($) {
                                return Lt = Object.setPrototypeOf ? Object.getPrototypeOf : function(O) {
                                    return O.__proto__ || Object.getPrototypeOf(O)
                                }, Lt($)
                            }
                            function Er($, L) {
                                var O = "data-clipboard-".concat($);
                                if (!!L.hasAttribute(O))
                                    return L.getAttribute(O)
                            }
                            var ia = function($) {
                                    ea(O, $);
                                    var L = ta(O);
                                    function O(W, k) {
                                        var z;
                                        return et(this, O), z = L.call(this), z.resolveOptions(k), z.listenClick(W), z
                                    }
                                    return Zi(O, [{
                                        key: "resolveOptions",
                                        value: function() {
                                            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                            this.action = typeof k.action == "function" ? k.action : this.defaultAction,
                                            this.target = typeof k.target == "function" ? k.target : this.defaultTarget,
                                            this.text = typeof k.text == "function" ? k.text : this.defaultText,
                                            this.container = be(k.container) === "object" ? k.container : document.body
                                        }
                                    }, {
                                        key: "listenClick",
                                        value: function(k) {
                                            var z = this;
                                            this.listener = f()(k, "click", function(Me) {
                                                return z.onClick(Me)
                                            })
                                        }
                                    }, {
                                        key: "onClick",
                                        value: function(k) {
                                            var z = k.delegateTarget || k.currentTarget,
                                                Me = this.action(z) || "copy",
                                                At = We({
                                                    action: Me,
                                                    container: this.container,
                                                    target: this.target(z),
                                                    text: this.text(z)
                                                });
                                            this.emit(At ? "success" : "error", {
                                                action: Me,
                                                text: At,
                                                trigger: z,
                                                clearSelection: function() {
                                                    z && z.focus(),
                                                    document.activeElement.blur(),
                                                    window.getSelection().removeAllRanges()
                                                }
                                            })
                                        }
                                    }, {
                                        key: "defaultAction",
                                        value: function(k) {
                                            return Er("action", k)
                                        }
                                    }, {
                                        key: "defaultTarget",
                                        value: function(k) {
                                            var z = Er("target", k);
                                            if (z)
                                                return document.querySelector(z)
                                        }
                                    }, {
                                        key: "defaultText",
                                        value: function(k) {
                                            return Er("text", k)
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.listener.destroy()
                                        }
                                    }], [{
                                        key: "copy",
                                        value: function(k) {
                                            var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                                container: document.body
                                            };
                                            return Y(k, z)
                                        }
                                    }, {
                                        key: "cut",
                                        value: function(k) {
                                            return h(k)
                                        }
                                    }, {
                                        key: "isSupported",
                                        value: function() {
                                            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                                                z = typeof k == "string" ? [k] : k,
                                                Me = !!document.queryCommandSupported;
                                            return z.forEach(function(At) {
                                                Me = Me && !!document.queryCommandSupported(At)
                                            }), Me
                                        }
                                    }]), O
                                }(c()),
                                aa = ia
                        },
                        828: function(n) {
                            var o = 9;
                            if (typeof Element != "undefined" && !Element.prototype.matches) {
                                var i = Element.prototype;
                                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                            }
                            function a(c, s) {
                                for (; c && c.nodeType !== o;) {
                                    if (typeof c.matches == "function" && c.matches(s))
                                        return c;
                                    c = c.parentNode
                                }
                            }
                            n.exports = a
                        },
                        438: function(n, o, i) {
                            var a = i(828);
                            function c(u, p, l, d, h) {
                                var b = f.apply(this, arguments);
                                return u.addEventListener(l, b, h), {
                                    destroy: function() {
                                        u.removeEventListener(l, b, h)
                                    }
                                }
                            }
                            function s(u, p, l, d, h) {
                                return typeof u.addEventListener == "function" ? c.apply(null, arguments) : typeof l == "function" ? c.bind(null, document).apply(null, arguments) : (typeof u == "string" && (u = document.querySelectorAll(u)), Array.prototype.map.call(u, function(b) {
                                    return c(b, p, l, d, h)
                                }))
                            }
                            function f(u, p, l, d) {
                                return function(h) {
                                    h.delegateTarget = a(h.target, p),
                                    h.delegateTarget && d.call(u, h)
                                }
                            }
                            n.exports = s
                        },
                        879: function(n, o) {
                            o.node = function(i) {
                                return i !== void 0 && i instanceof HTMLElement && i.nodeType === 1
                            },
                            o.nodeList = function(i) {
                                var a = Object.prototype.toString.call(i);
                                return i !== void 0 && (a === "[object NodeList]" || a === "[object HTMLCollection]") && "length" in i && (i.length === 0 || o.node(i[0]))
                            },
                            o.string = function(i) {
                                return typeof i == "string" || i instanceof String
                            },
                            o.fn = function(i) {
                                var a = Object.prototype.toString.call(i);
                                return a === "[object Function]"
                            }
                        },
                        370: function(n, o, i) {
                            var a = i(879),
                                c = i(438);
                            function s(l, d, h) {
                                if (!l && !d && !h)
                                    throw new Error("Missing required arguments");
                                if (!a.string(d))
                                    throw new TypeError("Second argument must be a String");
                                if (!a.fn(h))
                                    throw new TypeError("Third argument must be a Function");
                                if (a.node(l))
                                    return f(l, d, h);
                                if (a.nodeList(l))
                                    return u(l, d, h);
                                if (a.string(l))
                                    return p(l, d, h);
                                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                            }
                            function f(l, d, h) {
                                return l.addEventListener(d, h), {
                                    destroy: function() {
                                        l.removeEventListener(d, h)
                                    }
                                }
                            }
                            function u(l, d, h) {
                                return Array.prototype.forEach.call(l, function(b) {
                                    b.addEventListener(d, h)
                                }), {
                                    destroy: function() {
                                        Array.prototype.forEach.call(l, function(b) {
                                            b.removeEventListener(d, h)
                                        })
                                    }
                                }
                            }
                            function p(l, d, h) {
                                return c(document.body, l, d, h)
                            }
                            n.exports = s
                        },
                        817: function(n) {
                            function o(i) {
                                var a;
                                if (i.nodeName === "SELECT")
                                    i.focus(),
                                    a = i.value;
                                else if (i.nodeName === "INPUT" || i.nodeName === "TEXTAREA") {
                                    var c = i.hasAttribute("readonly");
                                    c || i.setAttribute("readonly", ""),
                                    i.select(),
                                    i.setSelectionRange(0, i.value.length),
                                    c || i.removeAttribute("readonly"),
                                    a = i.value
                                } else {
                                    i.hasAttribute("contenteditable") && i.focus();
                                    var s = window.getSelection(),
                                        f = document.createRange();
                                    f.selectNodeContents(i),
                                    s.removeAllRanges(),
                                    s.addRange(f),
                                    a = s.toString()
                                }
                                return a
                            }
                            n.exports = o
                        },
                        279: function(n) {
                            function o() {}
                            o.prototype = {
                                on: function(i, a, c) {
                                    var s = this.e || (this.e = {});
                                    return (s[i] || (s[i] = [])).push({
                                        fn: a,
                                        ctx: c
                                    }), this
                                },
                                once: function(i, a, c) {
                                    var s = this;
                                    function f() {
                                        s.off(i, f),
                                        a.apply(c, arguments)
                                    }
                                    return f._ = a, this.on(i, f, c)
                                },
                                emit: function(i) {
                                    var a = [].slice.call(arguments, 1),
                                        c = ((this.e || (this.e = {}))[i] || []).slice(),
                                        s = 0,
                                        f = c.length;
                                    for (s; s < f; s++)
                                        c[s].fn.apply(c[s].ctx, a);
                                    return this
                                },
                                off: function(i, a) {
                                    var c = this.e || (this.e = {}),
                                        s = c[i],
                                        f = [];
                                    if (s && a)
                                        for (var u = 0, p = s.length; u < p; u++)
                                            s[u].fn !== a && s[u].fn._ !== a && f.push(s[u]);
                                    return f.length ? c[i] = f : delete c[i], this
                                }
                            },
                            n.exports = o,
                            n.exports.TinyEmitter = o
                        }
                    },
                    t = {};
                function r(n) {
                    if (t[n])
                        return t[n].exports;
                    var o = t[n] = {
                        exports: {}
                    };
                    return e[n](o, o.exports, r), o.exports
                }
                return function() {
                    r.n = function(n) {
                        var o = n && n.__esModule ? function() {
                            return n.default
                        } : function() {
                            return n
                        };
                        return r.d(o, {
                            a: o
                        }), o
                    }
                }(), function() {
                    r.d = function(n, o) {
                        for (var i in o)
                            r.o(o, i) && !r.o(n, i) && Object.defineProperty(n, i, {
                                enumerable: !0,
                                get: o[i]
                            })
                    }
                }(), function() {
                    r.o = function(n, o) {
                        return Object.prototype.hasOwnProperty.call(n, o)
                    }
                }(), r(686)
            }().default
        })
    });
    var _i = gt((OE, Ti) => {
        "use strict";
        var Ls = /["'&<>]/;
        Ti.exports = As;
        function As(e) {
            var t = "" + e,
                r = Ls.exec(t);
            if (!r)
                return t;
            var n,
                o = "",
                i = 0,
                a = 0;
            for (i = r.index; i < t.length; i++) {
                switch (t.charCodeAt(i)) {
                case 34:
                    n = "&quot;";
                    break;
                case 38:
                    n = "&amp;";
                    break;
                case 39:
                    n = "&#39;";
                    break;
                case 60:
                    n = "&lt;";
                    break;
                case 62:
                    n = "&gt;";
                    break;
                default:
                    continue
                }
                a !== i && (o += t.substring(a, i)),
                a = i + 1,
                o += n
            }
            return a !== i ? o + t.substring(a, i) : o
        }
    });
    Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function e() {
            var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return t ? Array.prototype.reduce.call(this, function(r, n) {
                return Array.isArray(n) ? r.push.apply(r, e.call(n, t - 1)) : r.push(n), r
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }),
    Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function(e) {
            return Array.prototype.map.apply(this, arguments).flat()
        },
        writable: !0
    });
    var YT = tt(ln());
    (() => {
        function e(o, i) {
            parent.postMessage(o, i || "*")
        }
        function t(...o) {
            return o.reduce((i, a) => i.then(() => new Promise(c => {
                let s = document.createElement("script");
                s.src = a,
                s.addEventListener("load", () => c()),
                document.body.appendChild(s)
            })), Promise.resolve())
        }
        function r() {
            let o = document.createElement("iframe");
            return o.width = o.height = o.frameBorder = "0", o
        }
        var n = class {
            constructor(o, i)
            {
                if (this.url = o, this.onerror = null, this.onmessage = null, this.onmessageerror = null, this.handleMessage = c => {
                    c.source === this.worker && (c.stopImmediatePropagation(), this.dispatchEvent(new MessageEvent("message", {
                        data: c.data
                    })), this.onmessage && this.onmessage(c))
                }, this.handleError = (c, s, f, u, p) => {
                    if (s === this.url.toString()) {
                        let l = new ErrorEvent("error", {
                            message: c,
                            filename: s,
                            lineno: f,
                            colno: u,
                            error: p
                        });
                        this.dispatchEvent(l),
                        this.onerror && this.onerror(l)
                    }
                }, typeof i != "undefined")
                    throw new TypeError("Options are not supported for iframe workers");
                let a = new EventTarget;
                this.addEventListener = a.addEventListener.bind(a),
                this.removeEventListener = a.removeEventListener.bind(a),
                this.dispatchEvent = a.dispatchEvent.bind(a),
                document.body.appendChild(this.iframe = r()),
                this.worker.document.open(),
                this.worker.document.write(`<html><body><script>postMessage=${e};importScripts=${t};addEventListener("error",ev=>{parent.dispatchEvent(new ErrorEvent("error",{filename:"${o}",error:ev.error}))})<\/script><script src="${o}?${+Date.now()}"><\/script></body></html>`),
                this.worker.document.close(),
                window.addEventListener("message", this.handleMessage),
                window.onerror = this.handleError,
                this.ready = new Promise((c, s) => {
                    this.worker.onload = c,
                    this.worker.onerror = s
                })
            }
            terminate()
            {
                document.body.removeChild(this.iframe),
                window.removeEventListener("message", this.handleMessage),
                window.onerror = null
            }
            postMessage(o)
            {
                this.ready.catch().then(() => {
                    this.worker.dispatchEvent(new MessageEvent("message", {
                        data: o
                    }))
                })
            }
            get worker()
            {
                return this.iframe.contentWindow
            }
        }
        ;
        window.IFrameWorker = n,
        location.protocol === "file:" && (window.Worker = n)
    })();
    self.fetch || (self.fetch = function(e, t) {
        return t = t || {}, new Promise(function(r, n) {
            var o = new XMLHttpRequest,
                i = [],
                a = [],
                c = {},
                s = function() {
                    return {
                        ok: (o.status / 100 | 0) == 2,
                        statusText: o.statusText,
                        status: o.status,
                        url: o.responseURL,
                        text: function() {
                            return Promise.resolve(o.responseText)
                        },
                        json: function() {
                            return Promise.resolve(o.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([o.response]))
                        },
                        clone: s,
                        headers: {
                            keys: function() {
                                return i
                            },
                            entries: function() {
                                return a
                            },
                            get: function(u) {
                                return c[u.toLowerCase()]
                            },
                            has: function(u) {
                                return u.toLowerCase() in c
                            }
                        }
                    }
                };
            for (var f in o.open(t.method || "get", e, !0), o.onload = function() {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(u, p, l) {
                    i.push(p = p.toLowerCase()),
                    a.push([p, l]),
                    c[p] = c[p] ? c[p] + "," + l : l
                }),
                r(s())
            }, o.onerror = n, o.withCredentials = t.credentials == "include", t.headers)
                o.setRequestHeader(f, t.headers[f]);
            o.send(t.body || null)
        })
    });
    var JT = tt(mn());
    var In = tt(Pn(), 1),
        {__extends: oe, __assign: Ys, __rest: Bs, __decorate: Gs, __param: Js, __metadata: Xs, __awaiter: $n, __generator: Pt, __exportStar: Zs, __createBinding: ec, __values: ve, __read: j, __spread: tc, __spreadArrays: rc, __spreadArray: D, __await: It, __asyncGenerator: jn, __asyncDelegator: nc, __asyncValues: Fn, __makeTemplateObject: oc, __importStar: ic, __importDefault: ac, __classPrivateFieldGet: sc, __classPrivateFieldSet: cc} = In.default;
    function T(e) {
        return typeof e == "function"
    }
    function $t(e) {
        var t = function(n) {
                Error.call(n),
                n.stack = new Error().stack
            },
            r = e(t);
        return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r
    }
    var jt = $t(function(e) {
        return function(r) {
            e(this),
            this.message = r ? r.length + ` errors occurred during unsubscription:
`
            + r.map(function(n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `
            ) : "",
            this.name = "UnsubscriptionError",
            this.errors = r
        }
    });
    function je(e, t) {
        if (e) {
            var r = e.indexOf(t);
            0 <= r && e.splice(r, 1)
        }
    }
    var Pe = function() {
        function e(t) {
            this.initialTeardown = t,
            this.closed = !1,
            this._parentage = null,
            this._finalizers = null
        }
        return e.prototype.unsubscribe = function() {
            var t,
                r,
                n,
                o,
                i;
            if (!this.closed) {
                this.closed = !0;
                var a = this._parentage;
                if (a)
                    if (this._parentage = null, Array.isArray(a))
                        try {
                            for (var c = ve(a), s = c.next(); !s.done; s = c.next()) {
                                var f = s.value;
                                f.remove(this)
                            }
                        } catch (b) {
                            t = {
                                error: b
                            }
                        } finally {
                            try {
                                s && !s.done && (r = c.return) && r.call(c)
                            } finally {
                                if (t)
                                    throw t.error
                            }
                        }
                    else
                        a.remove(this);
                var u = this.initialTeardown;
                if (T(u))
                    try {
                        u()
                    } catch (b) {
                        i = b instanceof jt ? b.errors : [b]
                    }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var l = ve(p), d = l.next(); !d.done; d = l.next()) {
                            var h = d.value;
                            try {
                                Un(h)
                            } catch (b) {
                                i = i != null ? i : [],
                                b instanceof jt ? i = D(D([], j(i)), j(b.errors)) : i.push(b)
                            }
                        }
                    } catch (b) {
                        n = {
                            error: b
                        }
                    } finally {
                        try {
                            d && !d.done && (o = l.return) && o.call(l)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                if (i)
                    throw new jt(i)
            }
        }, e.prototype.add = function(t) {
            var r;
            if (t && t !== this)
                if (this.closed)
                    Un(t);
                else {
                    if (t instanceof e) {
                        if (t.closed || t._hasParent(this))
                            return;
                        t._addParent(this)
                    }
                    (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t)
                }
        }, e.prototype._hasParent = function(t) {
            var r = this._parentage;
            return r === t || Array.isArray(r) && r.includes(t)
        }, e.prototype._addParent = function(t) {
            var r = this._parentage;
            this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t
        }, e.prototype._removeParent = function(t) {
            var r = this._parentage;
            r === t ? this._parentage = null : Array.isArray(r) && je(r, t)
        }, e.prototype.remove = function(t) {
            var r = this._finalizers;
            r && je(r, t),
            t instanceof e && t._removeParent(this)
        }, e.EMPTY = function() {
            var t = new e;
            return t.closed = !0, t
        }(), e
    }();
    var Lr = Pe.EMPTY;
    function Ft(e) {
        return e instanceof Pe || e && "closed" in e && T(e.remove) && T(e.add) && T(e.unsubscribe)
    }
    function Un(e) {
        T(e) ? e() : e.unsubscribe()
    }
    var Le = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var nt = {
        setTimeout: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = nt.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, D([e, t], j(r))) : setTimeout.apply(void 0, D([e, t], j(r)))
        },
        clearTimeout: function(e) {
            var t = nt.delegate;
            return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };
    function Ut(e) {
        nt.setTimeout(function() {
            var t = Le.onUnhandledError;
            if (t)
                t(e);
            else
                throw e
        })
    }
    function pe() {}
    var Wn = function() {
        return Ar("C", void 0, void 0)
    }();
    function Dn(e) {
        return Ar("E", void 0, e)
    }
    function Vn(e) {
        return Ar("N", e, void 0)
    }
    function Ar(e, t, r) {
        return {
            kind: e,
            value: t,
            error: r
        }
    }
    var Be = null;
    function ot(e) {
        if (Le.useDeprecatedSynchronousErrorHandling) {
            var t = !Be;
            if (t && (Be = {
                errorThrown: !1,
                error: null
            }), e(), t) {
                var r = Be,
                    n = r.errorThrown,
                    o = r.error;
                if (Be = null, n)
                    throw o
            }
        } else
            e()
    }
    function Nn(e) {
        Le.useDeprecatedSynchronousErrorHandling && Be && (Be.errorThrown = !0, Be.error = e)
    }
    var yt = function(e) {
        oe(t, e);
        function t(r) {
            var n = e.call(this) || this;
            return n.isStopped = !1, r ? (n.destination = r, Ft(r) && r.add(n)) : n.destination = ha, n
        }
        return t.create = function(r, n, o) {
            return new it(r, n, o)
        }, t.prototype.next = function(r) {
            this.isStopped ? Rr(Vn(r), this) : this._next(r)
        }, t.prototype.error = function(r) {
            this.isStopped ? Rr(Dn(r), this) : (this.isStopped = !0, this._error(r))
        }, t.prototype.complete = function() {
            this.isStopped ? Rr(Wn, this) : (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, t.prototype._next = function(r) {
            this.destination.next(r)
        }, t.prototype._error = function(r) {
            try {
                this.destination.error(r)
            } finally {
                this.unsubscribe()
            }
        }, t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, t
    }(Pe);
    var la = Function.prototype.bind;
    function Cr(e, t) {
        return la.call(e, t)
    }
    var ma = function() {
            function e(t) {
                this.partialObserver = t
            }
            return e.prototype.next = function(t) {
                var r = this.partialObserver;
                if (r.next)
                    try {
                        r.next(t)
                    } catch (n) {
                        Wt(n)
                    }
            }, e.prototype.error = function(t) {
                var r = this.partialObserver;
                if (r.error)
                    try {
                        r.error(t)
                    } catch (n) {
                        Wt(n)
                    }
                else
                    Wt(t)
            }, e.prototype.complete = function() {
                var t = this.partialObserver;
                if (t.complete)
                    try {
                        t.complete()
                    } catch (r) {
                        Wt(r)
                    }
            }, e
        }(),
        it = function(e) {
            oe(t, e);
            function t(r, n, o) {
                var i = e.call(this) || this,
                    a;
                if (T(r) || !r)
                    a = {
                        next: r != null ? r : void 0,
                        error: n != null ? n : void 0,
                        complete: o != null ? o : void 0
                    };
                else {
                    var c;
                    i && Le.useDeprecatedNextContext ? (c = Object.create(r), c.unsubscribe = function() {
                        return i.unsubscribe()
                    }, a = {
                        next: r.next && Cr(r.next, c),
                        error: r.error && Cr(r.error, c),
                        complete: r.complete && Cr(r.complete, c)
                    }) : a = r
                }
                return i.destination = new ma(a), i
            }
            return t
        }(yt);
    function Wt(e) {
        Le.useDeprecatedSynchronousErrorHandling ? Nn(e) : Ut(e)
    }
    function da(e) {
        throw e
    }
    function Rr(e, t) {
        var r = Le.onStoppedNotification;
        r && nt.setTimeout(function() {
            return r(e, t)
        })
    }
    var ha = {
        closed: !0,
        next: pe,
        error: da,
        complete: pe
    };
    var at = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();
    function ge(e) {
        return e
    }
    function zn() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return kr(e)
    }
    function kr(e) {
        return e.length === 0 ? ge : e.length === 1 ? e[0] : function(r) {
            return e.reduce(function(n, o) {
                return o(n)
            }, r)
        }
    }
    var P = function() {
        function e(t) {
            t && (this._subscribe = t)
        }
        return e.prototype.lift = function(t) {
            var r = new e;
            return r.source = this, r.operator = t, r
        }, e.prototype.subscribe = function(t, r, n) {
            var o = this,
                i = va(t) ? t : new it(t, r, n);
            return ot(function() {
                var a = o,
                    c = a.operator,
                    s = a.source;
                i.add(c ? c.call(i, s) : s ? o._subscribe(i) : o._trySubscribe(i))
            }), i
        }, e.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (r) {
                t.error(r)
            }
        }, e.prototype.forEach = function(t, r) {
            var n = this;
            return r = qn(r), new r(function(o, i) {
                var a = new it({
                    next: function(c) {
                        try {
                            t(c)
                        } catch (s) {
                            i(s),
                            a.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                n.subscribe(a)
            })
        }, e.prototype._subscribe = function(t) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)
        }, e.prototype[at] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return kr(t)(this)
        }, e.prototype.toPromise = function(t) {
            var r = this;
            return t = qn(t), new t(function(n, o) {
                var i;
                r.subscribe(function(a) {
                    return i = a
                }, function(a) {
                    return o(a)
                }, function() {
                    return n(i)
                })
            })
        }, e.create = function(t) {
            return new e(t)
        }, e
    }();
    function qn(e) {
        var t;
        return (t = e != null ? e : Le.Promise) !== null && t !== void 0 ? t : Promise
    }
    function ba(e) {
        return e && T(e.next) && T(e.error) && T(e.complete)
    }
    function va(e) {
        return e && e instanceof yt || ba(e) && Ft(e)
    }
    function ga(e) {
        return T(e == null ? void 0 : e.lift)
    }
    function g(e) {
        return function(t) {
            if (ga(t))
                return t.lift(function(r) {
                    try {
                        return e(r, this)
                    } catch (n) {
                        this.error(n)
                    }
                });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }
    function x(e, t, r, n, o) {
        return new ya(e, t, r, n, o)
    }
    var ya = function(e) {
        oe(t, e);
        function t(r, n, o, i, a, c) {
            var s = e.call(this, r) || this;
            return s.onFinalize = a, s.shouldUnsubscribe = c, s._next = n ? function(f) {
                try {
                    n(f)
                } catch (u) {
                    r.error(u)
                }
            } : e.prototype._next, s._error = i ? function(f) {
                try {
                    i(f)
                } catch (u) {
                    r.error(u)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, s._complete = o ? function() {
                try {
                    o()
                } catch (f) {
                    r.error(f)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, s
        }
        return t.prototype.unsubscribe = function() {
            var r;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                e.prototype.unsubscribe.call(this),
                !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this))
            }
        }, t
    }(yt);
    var st = {
        schedule: function(e) {
            var t = requestAnimationFrame,
                r = cancelAnimationFrame,
                n = st.delegate;
            n && (t = n.requestAnimationFrame, r = n.cancelAnimationFrame);
            var o = t(function(i) {
                r = void 0,
                e(i)
            });
            return new Pe(function() {
                return r == null ? void 0 : r(o)
            })
        },
        requestAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = st.delegate;
            return ((r == null ? void 0 : r.requestAnimationFrame) || requestAnimationFrame).apply(void 0, D([], j(e)))
        },
        cancelAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = st.delegate;
            return ((r == null ? void 0 : r.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, D([], j(e)))
        },
        delegate: void 0
    };
    var Kn = $t(function(e) {
        return function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
    });
    var E = function(e) {
        oe(t, e);
        function t() {
            var r = e.call(this) || this;
            return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r
        }
        return t.prototype.lift = function(r) {
            var n = new Qn(this, this);
            return n.operator = r, n
        }, t.prototype._throwIfClosed = function() {
            if (this.closed)
                throw new Kn
        }, t.prototype.next = function(r) {
            var n = this;
            ot(function() {
                var o,
                    i;
                if (n._throwIfClosed(), !n.isStopped) {
                    n.currentObservers || (n.currentObservers = Array.from(n.observers));
                    try {
                        for (var a = ve(n.currentObservers), c = a.next(); !c.done; c = a.next()) {
                            var s = c.value;
                            s.next(r)
                        }
                    } catch (f) {
                        o = {
                            error: f
                        }
                    } finally {
                        try {
                            c && !c.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                }
            })
        }, t.prototype.error = function(r) {
            var n = this;
            ot(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.hasError = n.isStopped = !0,
                    n.thrownError = r;
                    for (var o = n.observers; o.length;)
                        o.shift().error(r)
                }
            })
        }, t.prototype.complete = function() {
            var r = this;
            ot(function() {
                if (r._throwIfClosed(), !r.isStopped) {
                    r.isStopped = !0;
                    for (var n = r.observers; n.length;)
                        n.shift().complete()
                }
            })
        }, t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }, Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var r;
                return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._trySubscribe = function(r) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r)
        }, t.prototype._subscribe = function(r) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r)
        }, t.prototype._innerSubscribe = function(r) {
            var n = this,
                o = this,
                i = o.hasError,
                a = o.isStopped,
                c = o.observers;
            return i || a ? Lr : (this.currentObservers = null, c.push(r), new Pe(function() {
                n.currentObservers = null,
                je(c, r)
            }))
        }, t.prototype._checkFinalizedStatuses = function(r) {
            var n = this,
                o = n.hasError,
                i = n.thrownError,
                a = n.isStopped;
            o ? r.error(i) : a && r.complete()
        }, t.prototype.asObservable = function() {
            var r = new P;
            return r.source = this, r
        }, t.create = function(r, n) {
            return new Qn(r, n)
        }, t
    }(P);
    var Qn = function(e) {
        oe(t, e);
        function t(r, n) {
            var o = e.call(this) || this;
            return o.destination = r, o.source = n, o
        }
        return t.prototype.next = function(r) {
            var n,
                o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r)
        }, t.prototype.error = function(r) {
            var n,
                o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r)
        }, t.prototype.complete = function() {
            var r,
                n;
            (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r)
        }, t.prototype._subscribe = function(r) {
            var n,
                o;
            return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Lr
        }, t
    }(E);
    var xt = {
        now: function() {
            return (xt.delegate || Date).now()
        },
        delegate: void 0
    };
    var wt = function(e) {
        oe(t, e);
        function t(r, n, o) {
            r === void 0 && (r = 1 / 0),
            n === void 0 && (n = 1 / 0),
            o === void 0 && (o = xt);
            var i = e.call(this) || this;
            return i._bufferSize = r, i._windowTime = n, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, r), i._windowTime = Math.max(1, n), i
        }
        return t.prototype.next = function(r) {
            var n = this,
                o = n.isStopped,
                i = n._buffer,
                a = n._infiniteTimeWindow,
                c = n._timestampProvider,
                s = n._windowTime;
            o || (i.push(r), !a && i.push(c.now() + s)),
            this._trimBuffer(),
            e.prototype.next.call(this, r)
        }, t.prototype._subscribe = function(r) {
            this._throwIfClosed(),
            this._trimBuffer();
            for (var n = this._innerSubscribe(r), o = this, i = o._infiniteTimeWindow, a = o._buffer, c = a.slice(), s = 0; s < c.length && !r.closed; s += i ? 1 : 2)
                r.next(c[s]);
            return this._checkFinalizedStatuses(r), n
        }, t.prototype._trimBuffer = function() {
            var r = this,
                n = r._bufferSize,
                o = r._timestampProvider,
                i = r._buffer,
                a = r._infiniteTimeWindow,
                c = (a ? 1 : 2) * n;
            if (n < 1 / 0 && c < i.length && i.splice(0, i.length - c), !a) {
                for (var s = o.now(), f = 0, u = 1; u < i.length && i[u] <= s; u += 2)
                    f = u;
                f && i.splice(0, f + 1)
            }
        }, t
    }(E);
    var Yn = function(e) {
        oe(t, e);
        function t(r, n) {
            return e.call(this) || this
        }
        return t.prototype.schedule = function(r, n) {
            return n === void 0 && (n = 0), this
        }, t
    }(Pe);
    var Et = {
        setInterval: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = Et.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, D([e, t], j(r))) : setInterval.apply(void 0, D([e, t], j(r)))
        },
        clearInterval: function(e) {
            var t = Et.delegate;
            return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var Dt = function(e) {
        oe(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r, o.work = n, o.pending = !1, o
        }
        return t.prototype.schedule = function(r, n) {
            if (n === void 0 && (n = 0), this.closed)
                return this;
            this.state = r;
            var o = this.id,
                i = this.scheduler;
            return o != null && (this.id = this.recycleAsyncId(i, o, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(i, this.id, n), this
        }, t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0), Et.setInterval(r.flush.bind(r, this), o)
        }, t.prototype.recycleAsyncId = function(r, n, o) {
            if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
                return n;
            Et.clearInterval(n)
        }, t.prototype.execute = function(r, n) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(r, n);
            if (o)
                return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, t.prototype._execute = function(r, n) {
            var o = !1,
                i;
            try {
                this.work(r)
            } catch (a) {
                o = !0,
                i = a || new Error("Scheduled action threw falsy error")
            }
            if (o)
                return this.unsubscribe(), i
        }, t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var r = this,
                    n = r.id,
                    o = r.scheduler,
                    i = o.actions;
                this.work = this.state = this.scheduler = null,
                this.pending = !1,
                je(i, this),
                n != null && (this.id = this.recycleAsyncId(o, n, null)),
                this.delay = null,
                e.prototype.unsubscribe.call(this)
            }
        }, t
    }(Yn);
    var Hr = function() {
        function e(t, r) {
            r === void 0 && (r = e.now),
            this.schedulerActionCtor = t,
            this.now = r
        }
        return e.prototype.schedule = function(t, r, n) {
            return r === void 0 && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r)
        }, e.now = xt.now, e
    }();
    var Vt = function(e) {
        oe(t, e);
        function t(r, n) {
            n === void 0 && (n = Hr.now);
            var o = e.call(this, r, n) || this;
            return o.actions = [], o._active = !1, o._scheduled = void 0, o
        }
        return t.prototype.flush = function(r) {
            var n = this.actions;
            if (this._active) {
                n.push(r);
                return
            }
            var o;
            this._active = !0;
            do if (o = r.execute(r.state, r.delay))
                break;
            while (r = n.shift());
            if (this._active = !1, o) {
                for (; r = n.shift();)
                    r.unsubscribe();
                throw o
            }
        }, t
    }(Hr);
    var we = new Vt(Dt),
        Pr = we;
    var Bn = function(e) {
        oe(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r, o.work = n, o
        }
        return t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = st.requestAnimationFrame(function() {
                return r.flush(void 0)
            })))
        }, t.prototype.recycleAsyncId = function(r, n, o) {
            if (o === void 0 && (o = 0), o != null && o > 0 || o == null && this.delay > 0)
                return e.prototype.recycleAsyncId.call(this, r, n, o);
            r.actions.some(function(i) {
                return i.id === n
            }) || (st.cancelAnimationFrame(n), r._scheduled = void 0)
        }, t
    }(Dt);
    var Gn = function(e) {
        oe(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.flush = function(r) {
            this._active = !0;
            var n = this._scheduled;
            this._scheduled = void 0;
            var o = this.actions,
                i;
            r = r || o.shift();
            do if (i = r.execute(r.state, r.delay))
                break;
            while ((r = o[0]) && r.id === n && o.shift());
            if (this._active = !1, i) {
                for (; (r = o[0]) && r.id === n && o.shift();)
                    r.unsubscribe();
                throw i
            }
        }, t
    }(Vt);
    var ye = new Gn(Bn);
    var V = new P(function(e) {
        return e.complete()
    });
    function Nt(e) {
        return e && T(e.schedule)
    }
    function Ir(e) {
        return e[e.length - 1]
    }
    function De(e) {
        return T(Ir(e)) ? e.pop() : void 0
    }
    function Ee(e) {
        return Nt(Ir(e)) ? e.pop() : void 0
    }
    function zt(e, t) {
        return typeof Ir(e) == "number" ? e.pop() : t
    }
    var ct = function(e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };
    function qt(e) {
        return T(e == null ? void 0 : e.then)
    }
    function Kt(e) {
        return T(e[at])
    }
    function Qt(e) {
        return Symbol.asyncIterator && T(e == null ? void 0 : e[Symbol.asyncIterator])
    }
    function Yt(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    function xa() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var Bt = xa();
    function Gt(e) {
        return T(e == null ? void 0 : e[Bt])
    }
    function Jt(e) {
        return jn(this, arguments, function() {
            var r,
                n,
                o,
                i;
            return Pt(this, function(a) {
                switch (a.label) {
                case 0:
                    r = e.getReader(),
                    a.label = 1;
                case 1:
                    a.trys.push([1, , 9, 10]),
                    a.label = 2;
                case 2:
                    return [4, It(r.read())];
                case 3:
                    return n = a.sent(), o = n.value, i = n.done, i ? [4, It(void 0)] : [3, 5];
                case 4:
                    return [2, a.sent()];
                case 5:
                    return [4, It(o)];
                case 6:
                    return [4, a.sent()];
                case 7:
                    return a.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return r.releaseLock(), [7];
                case 10:
                    return [2]
                }
            })
        })
    }
    function Xt(e) {
        return T(e == null ? void 0 : e.getReader)
    }
    function N(e) {
        if (e instanceof P)
            return e;
        if (e != null) {
            if (Kt(e))
                return wa(e);
            if (ct(e))
                return Ea(e);
            if (qt(e))
                return Sa(e);
            if (Qt(e))
                return Jn(e);
            if (Gt(e))
                return Oa(e);
            if (Xt(e))
                return Ta(e)
        }
        throw Yt(e)
    }
    function wa(e) {
        return new P(function(t) {
            var r = e[at]();
            if (T(r.subscribe))
                return r.subscribe(t);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        })
    }
    function Ea(e) {
        return new P(function(t) {
            for (var r = 0; r < e.length && !t.closed; r++)
                t.next(e[r]);
            t.complete()
        })
    }
    function Sa(e) {
        return new P(function(t) {
            e.then(function(r) {
                t.closed || (t.next(r), t.complete())
            }, function(r) {
                return t.error(r)
            }).then(null, Ut)
        })
    }
    function Oa(e) {
        return new P(function(t) {
            var r,
                n;
            try {
                for (var o = ve(e), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    if (t.next(a), t.closed)
                        return
                }
            } catch (c) {
                r = {
                    error: c
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            t.complete()
        })
    }
    function Jn(e) {
        return new P(function(t) {
            _a(e, t).catch(function(r) {
                return t.error(r)
            })
        })
    }
    function Ta(e) {
        return Jn(Jt(e))
    }
    function _a(e, t) {
        var r,
            n,
            o,
            i;
        return $n(this, void 0, void 0, function() {
            var a,
                c;
            return Pt(this, function(s) {
                switch (s.label) {
                case 0:
                    s.trys.push([0, 5, 6, 11]),
                    r = Fn(e),
                    s.label = 1;
                case 1:
                    return [4, r.next()];
                case 2:
                    if (n = s.sent(), !!n.done)
                        return [3, 4];
                    if (a = n.value, t.next(a), t.closed)
                        return [2];
                    s.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return c = s.sent(), o = {
                        error: c
                    }, [3, 11];
                case 6:
                    return s.trys.push([6, , 9, 10]), n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
                case 7:
                    s.sent(),
                    s.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (o)
                        throw o.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return t.complete(), [2]
                }
            })
        })
    }
    function le(e, t, r, n, o) {
        n === void 0 && (n = 0),
        o === void 0 && (o = !1);
        var i = t.schedule(function() {
            r(),
            o ? e.add(this.schedule(null, n)) : this.unsubscribe()
        }, n);
        if (e.add(i), !o)
            return i
    }
    function Fe(e, t) {
        return t === void 0 && (t = 0), g(function(r, n) {
            r.subscribe(x(n, function(o) {
                return le(n, e, function() {
                    return n.next(o)
                }, t)
            }, function() {
                return le(n, e, function() {
                    return n.complete()
                }, t)
            }, function(o) {
                return le(n, e, function() {
                    return n.error(o)
                }, t)
            }))
        })
    }
    function Zt(e, t) {
        return t === void 0 && (t = 0), g(function(r, n) {
            n.add(e.schedule(function() {
                return r.subscribe(n)
            }, t))
        })
    }
    function Xn(e, t) {
        return N(e).pipe(Zt(t), Fe(t))
    }
    function Zn(e, t) {
        return N(e).pipe(Zt(t), Fe(t))
    }
    function eo(e, t) {
        return new P(function(r) {
            var n = 0;
            return t.schedule(function() {
                n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule())
            })
        })
    }
    function to(e, t) {
        return new P(function(r) {
            var n;
            return le(r, t, function() {
                n = e[Bt](),
                le(r, t, function() {
                    var o,
                        i,
                        a;
                    try {
                        o = n.next(),
                        i = o.value,
                        a = o.done
                    } catch (c) {
                        r.error(c);
                        return
                    }
                    a ? r.complete() : r.next(i)
                }, 0, !0)
            }), function() {
                return T(n == null ? void 0 : n.return) && n.return()
            }
        })
    }
    function er(e, t) {
        if (!e)
            throw new Error("Iterable cannot be null");
        return new P(function(r) {
            le(r, t, function() {
                var n = e[Symbol.asyncIterator]();
                le(r, t, function() {
                    n.next().then(function(o) {
                        o.done ? r.complete() : r.next(o.value)
                    })
                }, 0, !0)
            })
        })
    }
    function ro(e, t) {
        return er(Jt(e), t)
    }
    function no(e, t) {
        if (e != null) {
            if (Kt(e))
                return Xn(e, t);
            if (ct(e))
                return eo(e, t);
            if (qt(e))
                return Zn(e, t);
            if (Qt(e))
                return er(e, t);
            if (Gt(e))
                return to(e, t);
            if (Xt(e))
                return ro(e, t)
        }
        throw Yt(e)
    }
    function ce(e, t) {
        return t ? no(e, t) : N(e)
    }
    function I() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e);
        return ce(e, r)
    }
    function $r(e, t) {
        var r = T(e) ? e : function() {
                return e
            },
            n = function(o) {
                return o.error(r())
            };
        return new P(t ? function(o) {
            return t.schedule(n, 0, o)
        } : n)
    }
    function oo(e) {
        return e instanceof Date && !isNaN(e)
    }
    function m(e, t) {
        return g(function(r, n) {
            var o = 0;
            r.subscribe(x(n, function(i) {
                n.next(e.call(t, i, o++))
            }))
        })
    }
    var Ma = Array.isArray;
    function La(e, t) {
        return Ma(t) ? e.apply(void 0, D([], j(t))) : e(t)
    }
    function Ve(e) {
        return m(function(t) {
            return La(e, t)
        })
    }
    var Aa = Array.isArray,
        Ca = Object.getPrototypeOf,
        Ra = Object.prototype,
        ka = Object.keys;
    function io(e) {
        if (e.length === 1) {
            var t = e[0];
            if (Aa(t))
                return {
                    args: t,
                    keys: null
                };
            if (Ha(t)) {
                var r = ka(t);
                return {
                    args: r.map(function(n) {
                        return t[n]
                    }),
                    keys: r
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }
    function Ha(e) {
        return e && typeof e == "object" && Ca(e) === Ra
    }
    function ao(e, t) {
        return e.reduce(function(r, n, o) {
            return r[n] = t[o], r
        }, {})
    }
    function G() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e),
            n = De(e),
            o = io(e),
            i = o.args,
            a = o.keys;
        if (i.length === 0)
            return ce([], r);
        var c = new P(jr(i, r, a ? function(s) {
            return ao(a, s)
        } : ge));
        return n ? c.pipe(Ve(n)) : c
    }
    function jr(e, t, r) {
        return r === void 0 && (r = ge), function(n) {
            so(t, function() {
                for (var o = e.length, i = new Array(o), a = o, c = o, s = function(u) {
                        so(t, function() {
                            var p = ce(e[u], t),
                                l = !1;
                            p.subscribe(x(n, function(d) {
                                i[u] = d,
                                l || (l = !0, c--),
                                c || n.next(r(i.slice()))
                            }, function() {
                                --a || n.complete()
                            }))
                        }, n)
                    }, f = 0; f < o; f++)
                    s(f)
            }, n)
        }
    }
    function so(e, t, r) {
        e ? le(r, e, t) : t()
    }
    function co(e, t, r, n, o, i, a, c) {
        var s = [],
            f = 0,
            u = 0,
            p = !1,
            l = function() {
                p && !s.length && !f && t.complete()
            },
            d = function(b) {
                return f < n ? h(b) : s.push(b)
            },
            h = function(b) {
                i && t.next(b),
                f++;
                var F = !1;
                N(r(b, u++)).subscribe(x(t, function(Y) {
                    o == null || o(Y),
                    i ? d(Y) : t.next(Y)
                }, function() {
                    F = !0
                }, void 0, function() {
                    if (F)
                        try {
                            f--;
                            for (var Y = function() {
                                var U = s.shift();
                                a ? le(t, a, function() {
                                    return h(U)
                                }) : h(U)
                            }; s.length && f < n;)
                                Y();
                            l()
                        } catch (U) {
                            t.error(U)
                        }
                }))
            };
        return e.subscribe(x(t, d, function() {
            p = !0,
            l()
        })), function() {
            c == null || c()
        }
    }
    function ue(e, t, r) {
        return r === void 0 && (r = 1 / 0), T(t) ? ue(function(n, o) {
            return m(function(i, a) {
                return t(n, i, o, a)
            })(N(e(n, o)))
        }, r) : (typeof t == "number" && (r = t), g(function(n, o) {
            return co(n, o, e, r)
        }))
    }
    function ft(e) {
        return e === void 0 && (e = 1 / 0), ue(ge, e)
    }
    function fo() {
        return ft(1)
    }
    function Ge() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return fo()(ce(e, Ee(e)))
    }
    function R(e) {
        return new P(function(t) {
            N(e()).subscribe(t)
        })
    }
    var Pa = ["addListener", "removeListener"],
        Ia = ["addEventListener", "removeEventListener"],
        $a = ["on", "off"];
    function v(e, t, r, n) {
        if (T(r) && (n = r, r = void 0), n)
            return v(e, t, r).pipe(Ve(n));
        var o = j(Ua(e) ? Ia.map(function(c) {
                return function(s) {
                    return e[c](t, s, r)
                }
            }) : ja(e) ? Pa.map(uo(e, t)) : Fa(e) ? $a.map(uo(e, t)) : [], 2),
            i = o[0],
            a = o[1];
        if (!i && ct(e))
            return ue(function(c) {
                return v(c, t, r)
            })(N(e));
        if (!i)
            throw new TypeError("Invalid event target");
        return new P(function(c) {
            var s = function() {
                for (var f = [], u = 0; u < arguments.length; u++)
                    f[u] = arguments[u];
                return c.next(1 < f.length ? f : f[0])
            };
            return i(s), function() {
                return a(s)
            }
        })
    }
    function uo(e, t) {
        return function(r) {
            return function(n) {
                return e[r](t, n)
            }
        }
    }
    function ja(e) {
        return T(e.addListener) && T(e.removeListener)
    }
    function Fa(e) {
        return T(e.on) && T(e.off)
    }
    function Ua(e) {
        return T(e.addEventListener) && T(e.removeEventListener)
    }
    function tr(e, t, r) {
        return r ? tr(e, t).pipe(Ve(r)) : new P(function(n) {
            var o = function() {
                    for (var a = [], c = 0; c < arguments.length; c++)
                        a[c] = arguments[c];
                    return n.next(a.length === 1 ? a[0] : a)
                },
                i = e(o);
            return T(t) ? function() {
                return t(o, i)
            } : void 0
        })
    }
    function Ne(e, t, r) {
        e === void 0 && (e = 0),
        r === void 0 && (r = Pr);
        var n = -1;
        return t != null && (Nt(t) ? r = t : n = t), new P(function(o) {
            var i = oo(e) ? +e - r.now() : e;
            i < 0 && (i = 0);
            var a = 0;
            return r.schedule(function() {
                o.closed || (o.next(a++), 0 <= n ? this.schedule(void 0, n) : o.complete())
            }, i)
        })
    }
    function A() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e),
            n = zt(e, 1 / 0),
            o = e;
        return o.length ? o.length === 1 ? N(o[0]) : ft(n)(ce(o, r)) : V
    }
    var Se = new P(pe);
    var Wa = Array.isArray;
    function ut(e) {
        return e.length === 1 && Wa(e[0]) ? e[0] : e
    }
    function y(e, t) {
        return g(function(r, n) {
            var o = 0;
            r.subscribe(x(n, function(i) {
                return e.call(t, i, o++) && n.next(i)
            }))
        })
    }
    function St() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = De(e),
            n = ut(e);
        return n.length ? new P(function(o) {
            var i = n.map(function() {
                    return []
                }),
                a = n.map(function() {
                    return !1
                });
            o.add(function() {
                i = a = null
            });
            for (var c = function(f) {
                    N(n[f]).subscribe(x(o, function(u) {
                        if (i[f].push(u), i.every(function(l) {
                            return l.length
                        })) {
                            var p = i.map(function(l) {
                                return l.shift()
                            });
                            o.next(r ? r.apply(void 0, D([], j(p))) : p),
                            i.some(function(l, d) {
                                return !l.length && a[d]
                            }) && o.complete()
                        }
                    }, function() {
                        a[f] = !0,
                        !i[f].length && o.complete()
                    }))
                }, s = 0; !o.closed && s < n.length; s++)
                c(s);
            return function() {
                i = a = null
            }
        }) : V
    }
    function po(e) {
        return g(function(t, r) {
            var n = !1,
                o = null,
                i = null,
                a = !1,
                c = function() {
                    if (i == null || i.unsubscribe(), i = null, n) {
                        n = !1;
                        var f = o;
                        o = null,
                        r.next(f)
                    }
                    a && r.complete()
                },
                s = function() {
                    i = null,
                    a && r.complete()
                };
            t.subscribe(x(r, function(f) {
                n = !0,
                o = f,
                i || N(e(f)).subscribe(i = x(r, c, s))
            }, function() {
                a = !0,
                (!n || !i || i.closed) && r.complete()
            }))
        })
    }
    function Ae(e, t) {
        return t === void 0 && (t = we), po(function() {
            return Ne(e, t)
        })
    }
    function Ce(e, t) {
        return t === void 0 && (t = null), t = t != null ? t : e, g(function(r, n) {
            var o = [],
                i = 0;
            r.subscribe(x(n, function(a) {
                var c,
                    s,
                    f,
                    u,
                    p = null;
                i++ % t === 0 && o.push([]);
                try {
                    for (var l = ve(o), d = l.next(); !d.done; d = l.next()) {
                        var h = d.value;
                        h.push(a),
                        e <= h.length && (p = p != null ? p : [], p.push(h))
                    }
                } catch (Y) {
                    c = {
                        error: Y
                    }
                } finally {
                    try {
                        d && !d.done && (s = l.return) && s.call(l)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                if (p)
                    try {
                        for (var b = ve(p), F = b.next(); !F.done; F = b.next()) {
                            var h = F.value;
                            je(o, h),
                            n.next(h)
                        }
                    } catch (Y) {
                        f = {
                            error: Y
                        }
                    } finally {
                        try {
                            F && !F.done && (u = b.return) && u.call(b)
                        } finally {
                            if (f)
                                throw f.error
                        }
                    }
            }, function() {
                var a,
                    c;
                try {
                    for (var s = ve(o), f = s.next(); !f.done; f = s.next()) {
                        var u = f.value;
                        n.next(u)
                    }
                } catch (p) {
                    a = {
                        error: p
                    }
                } finally {
                    try {
                        f && !f.done && (c = s.return) && c.call(s)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                n.complete()
            }, void 0, function() {
                o = null
            }))
        })
    }
    function ze(e) {
        return g(function(t, r) {
            var n = null,
                o = !1,
                i;
            n = t.subscribe(x(r, void 0, void 0, function(a) {
                i = N(e(a, ze(e)(t))),
                n ? (n.unsubscribe(), n = null, i.subscribe(r)) : o = !0
            })),
            o && (n.unsubscribe(), n = null, i.subscribe(r))
        })
    }
    function lo(e, t, r, n, o) {
        return function(i, a) {
            var c = r,
                s = t,
                f = 0;
            i.subscribe(x(a, function(u) {
                var p = f++;
                s = c ? e(s, u, p) : (c = !0, u),
                n && a.next(s)
            }, o && function() {
                c && a.next(s),
                a.complete()
            }))
        }
    }
    function Fr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = De(e);
        return r ? zn(Fr.apply(void 0, D([], j(e))), Ve(r)) : g(function(n, o) {
            jr(D([n], j(ut(e))))(o)
        })
    }
    function qe() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Fr.apply(void 0, D([], j(e)))
    }
    function Ur(e, t) {
        return T(t) ? ue(e, t, 1) : ue(e, 1)
    }
    function Re(e, t) {
        return t === void 0 && (t = we), g(function(r, n) {
            var o = null,
                i = null,
                a = null,
                c = function() {
                    if (o) {
                        o.unsubscribe(),
                        o = null;
                        var f = i;
                        i = null,
                        n.next(f)
                    }
                };
            function s() {
                var f = a + e,
                    u = t.now();
                if (u < f) {
                    o = this.schedule(void 0, f - u),
                    n.add(o);
                    return
                }
                c()
            }
            r.subscribe(x(n, function(f) {
                i = f,
                a = t.now(),
                o || (o = t.schedule(s, e), n.add(o))
            }, function() {
                c(),
                n.complete()
            }, void 0, function() {
                i = o = null
            }))
        })
    }
    function Ue(e) {
        return g(function(t, r) {
            var n = !1;
            t.subscribe(x(r, function(o) {
                n = !0,
                r.next(o)
            }, function() {
                n || r.next(e),
                r.complete()
            }))
        })
    }
    function te(e) {
        return e <= 0 ? function() {
            return V
        } : g(function(t, r) {
            var n = 0;
            t.subscribe(x(r, function(o) {
                ++n <= e && (r.next(o), e <= n && r.complete())
            }))
        })
    }
    function mo() {
        return g(function(e, t) {
            e.subscribe(x(t, pe))
        })
    }
    function J(e) {
        return m(function() {
            return e
        })
    }
    function Wr(e, t) {
        return t ? function(r) {
            return Ge(t.pipe(te(1), mo()), r.pipe(Wr(e)))
        } : ue(function(r, n) {
            return e(r, n).pipe(te(1), J(r))
        })
    }
    function ke(e, t) {
        t === void 0 && (t = we);
        var r = Ne(e, t);
        return Wr(function() {
            return r
        })
    }
    function B(e, t) {
        return t === void 0 && (t = ge), e = e != null ? e : Da, g(function(r, n) {
            var o,
                i = !0;
            r.subscribe(x(n, function(a) {
                var c = t(a);
                (i || !e(o, c)) && (i = !1, o = c, n.next(a))
            }))
        })
    }
    function Da(e, t) {
        return e === t
    }
    function X(e, t) {
        return B(function(r, n) {
            return t ? t(r[e], n[e]) : r[e] === n[e]
        })
    }
    function rr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return function(r) {
            return Ge(r, I.apply(void 0, D([], j(e))))
        }
    }
    function M(e) {
        return g(function(t, r) {
            try {
                t.subscribe(r)
            } finally {
                r.add(e)
            }
        })
    }
    function ae(e) {
        return e <= 0 ? function() {
            return V
        } : g(function(t, r) {
            var n = [];
            t.subscribe(x(r, function(o) {
                n.push(o),
                e < n.length && n.shift()
            }, function() {
                var o,
                    i;
                try {
                    for (var a = ve(n), c = a.next(); !c.done; c = a.next()) {
                        var s = c.value;
                        r.next(s)
                    }
                } catch (f) {
                    o = {
                        error: f
                    }
                } finally {
                    try {
                        c && !c.done && (i = a.return) && i.call(a)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                r.complete()
            }, void 0, function() {
                n = null
            }))
        })
    }
    function ho() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e),
            n = zt(e, 1 / 0);
        return e = ut(e), g(function(o, i) {
            ft(n)(ce(D([o], j(e)), r)).subscribe(i)
        })
    }
    function Je() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return ho.apply(void 0, D([], j(e)))
    }
    function Ot(e) {
        var t,
            r = 1 / 0,
            n;
        return e != null && (typeof e == "object" ? (t = e.count, r = t === void 0 ? 1 / 0 : t, n = e.delay) : r = e), r <= 0 ? function() {
            return V
        } : g(function(o, i) {
            var a = 0,
                c,
                s = function() {
                    if (c == null || c.unsubscribe(), c = null, n != null) {
                        var u = typeof n == "number" ? Ne(n) : N(n(a)),
                            p = x(i, function() {
                                p.unsubscribe(),
                                f()
                            });
                        u.subscribe(p)
                    } else
                        f()
                },
                f = function() {
                    var u = !1;
                    c = o.subscribe(x(i, void 0, function() {
                        ++a < r ? c ? s() : u = !0 : i.complete()
                    })),
                    u && s()
                };
            f()
        })
    }
    function pt(e) {
        return g(function(t, r) {
            var n = !1,
                o = null;
            t.subscribe(x(r, function(i) {
                n = !0,
                o = i
            })),
            e.subscribe(x(r, function() {
                if (n) {
                    n = !1;
                    var i = o;
                    o = null,
                    r.next(i)
                }
            }, pe))
        })
    }
    function Dr(e, t) {
        return g(lo(e, t, arguments.length >= 2, !0))
    }
    function se(e) {
        e === void 0 && (e = {});
        var t = e.connector,
            r = t === void 0 ? function() {
                return new E
            } : t,
            n = e.resetOnError,
            o = n === void 0 ? !0 : n,
            i = e.resetOnComplete,
            a = i === void 0 ? !0 : i,
            c = e.resetOnRefCountZero,
            s = c === void 0 ? !0 : c;
        return function(f) {
            var u = null,
                p = null,
                l = null,
                d = 0,
                h = !1,
                b = !1,
                F = function() {
                    p == null || p.unsubscribe(),
                    p = null
                },
                Y = function() {
                    F(),
                    u = l = null,
                    h = b = !1
                },
                U = function() {
                    var _ = u;
                    Y(),
                    _ == null || _.unsubscribe()
                };
            return g(function(_, We) {
                d++,
                !b && !h && F();
                var be = l = l != null ? l : r();
                We.add(function() {
                    d--,
                    d === 0 && !b && !h && (p = Vr(U, s))
                }),
                be.subscribe(We),
                u || (u = new it({
                    next: function(et) {
                        return be.next(et)
                    },
                    error: function(et) {
                        b = !0,
                        F(),
                        p = Vr(Y, o, et),
                        be.error(et)
                    },
                    complete: function() {
                        h = !0,
                        F(),
                        p = Vr(Y, a),
                        be.complete()
                    }
                }), ce(_).subscribe(u))
            })(f)
        }
    }
    function Vr(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        return t === !0 ? (e(), null) : t === !1 ? null : t.apply(void 0, D([], j(r))).pipe(te(1)).subscribe(function() {
            return e()
        })
    }
    function Z(e, t, r) {
        var n,
            o,
            i,
            a,
            c = !1;
        return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, o = e.windowTime, t = o === void 0 ? 1 / 0 : o, i = e.refCount, c = i === void 0 ? !1 : i, r = e.scheduler) : a = e != null ? e : 1 / 0, se({
            connector: function() {
                return new wt(a, t, r)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: c
        })
    }
    function He(e) {
        return y(function(t, r) {
            return e <= r
        })
    }
    function Tt(e) {
        return g(function(t, r) {
            var n = !1,
                o = x(r, function() {
                    o == null || o.unsubscribe(),
                    n = !0
                }, pe);
            N(e).subscribe(o),
            t.subscribe(x(r, function(i) {
                return n && r.next(i)
            }))
        })
    }
    function K() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e);
        return g(function(n, o) {
            (r ? Ge(e, n, r) : Ge(e, n)).subscribe(o)
        })
    }
    function S(e, t) {
        return g(function(r, n) {
            var o = null,
                i = 0,
                a = !1,
                c = function() {
                    return a && !o && n.complete()
                };
            r.subscribe(x(n, function(s) {
                o == null || o.unsubscribe();
                var f = 0,
                    u = i++;
                N(e(s, u)).subscribe(o = x(n, function(p) {
                    return n.next(t ? t(s, p, u, f++) : p)
                }, function() {
                    o = null,
                    c()
                }))
            }, function() {
                a = !0,
                c()
            }))
        })
    }
    function Xe(e, t) {
        return T(t) ? S(function() {
            return e
        }, t) : S(function() {
            return e
        })
    }
    function re(e) {
        return g(function(t, r) {
            N(e).subscribe(x(r, function() {
                return r.complete()
            }, pe)),
            !r.closed && t.subscribe(r)
        })
    }
    function Nr(e, t) {
        return t === void 0 && (t = !1), g(function(r, n) {
            var o = 0;
            r.subscribe(x(n, function(i) {
                var a = e(i, o++);
                (a || t) && n.next(i),
                !a && n.complete()
            }))
        })
    }
    function w(e, t, r) {
        var n = T(e) || t || r ? {
            next: e,
            error: t,
            complete: r
        } : e;
        return n ? g(function(o, i) {
            var a;
            (a = n.subscribe) === null || a === void 0 || a.call(n);
            var c = !0;
            o.subscribe(x(i, function(s) {
                var f;
                (f = n.next) === null || f === void 0 || f.call(n, s),
                i.next(s)
            }, function() {
                var s;
                c = !1,
                (s = n.complete) === null || s === void 0 || s.call(n),
                i.complete()
            }, function(s) {
                var f;
                c = !1,
                (f = n.error) === null || f === void 0 || f.call(n, s),
                i.error(s)
            }, function() {
                var s,
                    f;
                c && ((s = n.unsubscribe) === null || s === void 0 || s.call(n)),
                (f = n.finalize) === null || f === void 0 || f.call(n)
            }))
        }) : ge
    }
    var zr = {
        leading: !0,
        trailing: !1
    };
    function _t(e, t) {
        return t === void 0 && (t = zr), g(function(r, n) {
            var o = t.leading,
                i = t.trailing,
                a = !1,
                c = null,
                s = null,
                f = !1,
                u = function() {
                    s == null || s.unsubscribe(),
                    s = null,
                    i && (d(), f && n.complete())
                },
                p = function() {
                    s = null,
                    f && n.complete()
                },
                l = function(h) {
                    return s = N(e(h)).subscribe(x(n, u, p))
                },
                d = function() {
                    if (a) {
                        a = !1;
                        var h = c;
                        c = null,
                        n.next(h),
                        !f && l(h)
                    }
                };
            r.subscribe(x(n, function(h) {
                a = !0,
                c = h,
                !(s && !s.closed) && (o ? d() : l(h))
            }, function() {
                f = !0,
                !(i && a && s && !s.closed) && n.complete()
            }))
        })
    }
    function qr(e, t, r) {
        t === void 0 && (t = we),
        r === void 0 && (r = zr);
        var n = Ne(e, t);
        return _t(function() {
            return n
        }, r)
    }
    function me() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = De(e);
        return g(function(n, o) {
            for (var i = e.length, a = new Array(i), c = e.map(function() {
                    return !1
                }), s = !1, f = function(p) {
                    N(e[p]).subscribe(x(o, function(l) {
                        a[p] = l,
                        !s && !c[p] && (c[p] = !0, (s = c.every(ge)) && (c = null))
                    }, pe))
                }, u = 0; u < i; u++)
                f(u);
            n.subscribe(x(o, function(p) {
                if (s) {
                    var l = D([p], j(a));
                    o.next(r ? r.apply(void 0, D([], j(l))) : l)
                }
            }))
        })
    }
    function bo() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return g(function(r, n) {
            St.apply(void 0, D([r], j(e))).subscribe(n)
        })
    }
    function Kr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return bo.apply(void 0, D([], j(e)))
    }
    function vo() {
        let e = new wt(1);
        return v(document, "DOMContentLoaded", {
            once: !0
        }).subscribe(() => e.next(document)), e
    }
    function Q(e, t=document) {
        return Array.from(t.querySelectorAll(e))
    }
    function q(e, t=document) {
        let r = fe(e, t);
        if (typeof r == "undefined")
            throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return r
    }
    function fe(e, t=document) {
        return t.querySelector(e) || void 0
    }
    function Ie() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }
    function nr(e) {
        return A(v(document.body, "focusin"), v(document.body, "focusout")).pipe(Re(1), m(() => {
            let t = Ie();
            return typeof t != "undefined" ? e.contains(t) : !1
        }), K(e === Ie()), B())
    }
    function Ke(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop
        }
    }
    function go(e) {
        return A(v(window, "load"), v(window, "resize")).pipe(Ae(0, ye), m(() => Ke(e)), K(Ke(e)))
    }
    function yo(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    function or(e) {
        return A(v(e, "scroll"), v(window, "resize")).pipe(Ae(0, ye), m(() => yo(e)), K(yo(e)))
    }
    var wo = function() {
            if (typeof Map != "undefined")
                return Map;
            function e(t, r) {
                var n = -1;
                return t.some(function(o, i) {
                    return o[0] === r ? (n = i, !0) : !1
                }), n
            }
            return function() {
                function t() {
                    this.__entries__ = []
                }
                return Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.get = function(r) {
                    var n = e(this.__entries__, r),
                        o = this.__entries__[n];
                    return o && o[1]
                }, t.prototype.set = function(r, n) {
                    var o = e(this.__entries__, r);
                    ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n])
                }, t.prototype.delete = function(r) {
                    var n = this.__entries__,
                        o = e(n, r);
                    ~o && n.splice(o, 1)
                }, t.prototype.has = function(r) {
                    return !!~e(this.__entries__, r)
                }, t.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, t.prototype.forEach = function(r, n) {
                    n === void 0 && (n = null);
                    for (var o = 0, i = this.__entries__; o < i.length; o++) {
                        var a = i[o];
                        r.call(n, a[1], a[0])
                    }
                }, t
            }()
        }(),
        Qr = typeof window != "undefined" && typeof document != "undefined" && window.document === document,
        ir = function() {
            return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")()
        }(),
        Va = function() {
            return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ir) : function(e) {
                return setTimeout(function() {
                    return e(Date.now())
                }, 1e3 / 60)
            }
        }(),
        Na = 2;
    function za(e, t) {
        var r = !1,
            n = !1,
            o = 0;
        function i() {
            r && (r = !1, e()),
            n && c()
        }
        function a() {
            Va(i)
        }
        function c() {
            var s = Date.now();
            if (r) {
                if (s - o < Na)
                    return;
                n = !0
            } else
                r = !0,
                n = !1,
                setTimeout(a, t);
            o = s
        }
        return c
    }
    var qa = 20,
        Ka = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Qa = typeof MutationObserver != "undefined",
        Ya = function() {
            function e() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = za(this.refresh.bind(this), qa)
            }
            return e.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_()
            }, e.prototype.removeObserver = function(t) {
                var r = this.observers_,
                    n = r.indexOf(t);
                ~n && r.splice(n, 1),
                !r.length && this.connected_ && this.disconnect_()
            }, e.prototype.refresh = function() {
                var t = this.updateObservers_();
                t && this.refresh()
            }, e.prototype.updateObservers_ = function() {
                var t = this.observers_.filter(function(r) {
                    return r.gatherActive(), r.hasActive()
                });
                return t.forEach(function(r) {
                    return r.broadcastActive()
                }), t.length > 0
            }, e.prototype.connect_ = function() {
                !Qr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Qa ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, e.prototype.disconnect_ = function() {
                !Qr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, e.prototype.onTransitionEnd_ = function(t) {
                var r = t.propertyName,
                    n = r === void 0 ? "" : r,
                    o = Ka.some(function(i) {
                        return !!~n.indexOf(i)
                    });
                o && this.refresh()
            }, e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e), this.instance_
            }, e.instance_ = null, e
        }(),
        Eo = function(e, t) {
            for (var r = 0, n = Object.keys(t); r < n.length; r++) {
                var o = n[r];
                Object.defineProperty(e, o, {
                    value: t[o],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        },
        lt = function(e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || ir
        },
        So = sr(0, 0, 0, 0);
    function ar(e) {
        return parseFloat(e) || 0
    }
    function xo(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return t.reduce(function(n, o) {
            var i = e["border-" + o + "-width"];
            return n + ar(i)
        }, 0)
    }
    function Ba(e) {
        for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
            var i = o[n],
                a = e["padding-" + i];
            r[i] = ar(a)
        }
        return r
    }
    function Ga(e) {
        var t = e.getBBox();
        return sr(0, 0, t.width, t.height)
    }
    function Ja(e) {
        var t = e.clientWidth,
            r = e.clientHeight;
        if (!t && !r)
            return So;
        var n = lt(e).getComputedStyle(e),
            o = Ba(n),
            i = o.left + o.right,
            a = o.top + o.bottom,
            c = ar(n.width),
            s = ar(n.height);
        if (n.boxSizing === "border-box" && (Math.round(c + i) !== t && (c -= xo(n, "left", "right") + i), Math.round(s + a) !== r && (s -= xo(n, "top", "bottom") + a)), !Za(e)) {
            var f = Math.round(c + i) - t,
                u = Math.round(s + a) - r;
            Math.abs(f) !== 1 && (c -= f),
            Math.abs(u) !== 1 && (s -= u)
        }
        return sr(o.left, o.top, c, s)
    }
    var Xa = function() {
        return typeof SVGGraphicsElement != "undefined" ? function(e) {
            return e instanceof lt(e).SVGGraphicsElement
        } : function(e) {
            return e instanceof lt(e).SVGElement && typeof e.getBBox == "function"
        }
    }();
    function Za(e) {
        return e === lt(e).document.documentElement
    }
    function es(e) {
        return Qr ? Xa(e) ? Ga(e) : Ja(e) : So
    }
    function ts(e) {
        var t = e.x,
            r = e.y,
            n = e.width,
            o = e.height,
            i = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
            a = Object.create(i.prototype);
        return Eo(a, {
            x: t,
            y: r,
            width: n,
            height: o,
            top: r,
            right: t + n,
            bottom: o + r,
            left: t
        }), a
    }
    function sr(e, t, r, n) {
        return {
            x: e,
            y: t,
            width: r,
            height: n
        }
    }
    var rs = function() {
            function e(t) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = sr(0, 0, 0, 0),
                this.target = t
            }
            return e.prototype.isActive = function() {
                var t = es(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, e.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, e
        }(),
        ns = function() {
            function e(t, r) {
                var n = ts(r);
                Eo(this, {
                    target: t,
                    contentRect: n
                })
            }
            return e
        }(),
        os = function() {
            function e(t, r, n) {
                if (this.activeObservations_ = [], this.observations_ = new wo, typeof t != "function")
                    throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t,
                this.controller_ = r,
                this.callbackCtx_ = n
            }
            return e.prototype.observe = function(t) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(t instanceof lt(t).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var r = this.observations_;
                    r.has(t) || (r.set(t, new rs(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, e.prototype.unobserve = function(t) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(t instanceof lt(t).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var r = this.observations_;
                    !r.has(t) || (r.delete(t), r.size || this.controller_.removeObserver(this))
                }
            }, e.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }, e.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(),
                this.observations_.forEach(function(r) {
                    r.isActive() && t.activeObservations_.push(r)
                })
            }, e.prototype.broadcastActive = function() {
                if (!!this.hasActive()) {
                    var t = this.callbackCtx_,
                        r = this.activeObservations_.map(function(n) {
                            return new ns(n.target, n.broadcastRect())
                        });
                    this.callback_.call(t, r, t),
                    this.clearActive()
                }
            }, e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, e
        }(),
        Oo = typeof WeakMap != "undefined" ? new WeakMap : new wo,
        To = function() {
            function e(t) {
                if (!(this instanceof e))
                    throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                var r = Ya.getInstance(),
                    n = new os(t, r, this);
                Oo.set(this, n)
            }
            return e
        }();
    ["observe", "unobserve", "disconnect"].forEach(function(e) {
        To.prototype[e] = function() {
            var t;
            return (t = Oo.get(this))[e].apply(t, arguments)
        }
    });
    var is = function() {
            return typeof ir.ResizeObserver != "undefined" ? ir.ResizeObserver : To
        }(),
        _o = is;
    var Mo = new E,
        as = R(() => I(new _o(e => {
            for (let t of e)
                Mo.next(t)
        }))).pipe(S(e => A(Se, I(e)).pipe(M(() => e.disconnect()))), Z(1));
    function de(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function xe(e) {
        return as.pipe(w(t => t.observe(e)), S(t => Mo.pipe(y(({target: r}) => r === e), M(() => t.unobserve(e)), m(() => de(e)))), K(de(e)))
    }
    function cr(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    function fr(e) {
        let t = e.parentElement;
        for (; t && e.scrollHeight <= t.scrollHeight;)
            t = (e = t).parentElement;
        return t ? e : void 0
    }
    var Lo = new E,
        ss = R(() => I(new IntersectionObserver(e => {
            for (let t of e)
                Lo.next(t)
        }, {
            threshold: 0
        }))).pipe(S(e => A(Se, I(e)).pipe(M(() => e.disconnect()))), Z(1));
    function Ao(e) {
        return ss.pipe(w(t => t.observe(e)), S(t => Lo.pipe(y(({target: r}) => r === e), M(() => t.unobserve(e)), m(({isIntersecting: r}) => r))))
    }
    function Co(e, t=16) {
        return or(e).pipe(m(({y: r}) => {
            let n = de(e),
                o = cr(e);
            return r >= o.height - n.height - t
        }), B())
    }
    var ur = {
        drawer: q("[data-md-toggle=drawer]"),
        search: q("[data-md-toggle=search]")
    };
    function Ro(e) {
        return ur[e].checked
    }
    function Qe(e, t) {
        ur[e].checked !== t && ur[e].click()
    }
    function mt(e) {
        let t = ur[e];
        return v(t, "change").pipe(m(() => t.checked), K(t.checked))
    }
    function cs(e, t) {
        switch (e.constructor) {
        case HTMLInputElement:
            return e.type === "radio" ? /^Arrow/.test(t) : !0;
        case HTMLSelectElement:
        case HTMLTextAreaElement:
            return !0;
        default:
            return e.isContentEditable
        }
    }
    function ko() {
        return v(window, "keydown").pipe(y(e => !(e.metaKey || e.ctrlKey)), m(e => ({
            mode: Ro("search") ? "search" : "global",
            type: e.key,
            claim() {
                e.preventDefault(),
                e.stopPropagation()
            }
        })), y(({mode: e, type: t}) => {
            if (e === "global") {
                let r = Ie();
                if (typeof r != "undefined")
                    return !cs(r, t)
            }
            return !0
        }), se())
    }
    function Oe() {
        return new URL(location.href)
    }
    function pr(e) {
        location.href = e.href
    }
    function Ho() {
        return new E
    }
    function Po(e, t) {
        if (typeof t == "string" || typeof t == "number")
            e.innerHTML += t.toString();
        else if (t instanceof Node)
            e.appendChild(t);
        else if (Array.isArray(t))
            for (let r of t)
                Po(e, r)
    }
    function C(e, t, ...r) {
        let n = document.createElement(e);
        if (t)
            for (let o of Object.keys(t))
                typeof t[o] != "undefined" && (typeof t[o] != "boolean" ? n.setAttribute(o, t[o]) : n.setAttribute(o, ""));
        for (let o of r)
            Po(n, o);
        return n
    }
    function lr(e) {
        if (e > 999) {
            let t = +((e - 950) % 1e3 > 99);
            return `${((e + 1e-6) / 1e3).toFixed(t)}k`
        } else
            return e.toString()
    }
    function Yr(e, t, r) {
        t = new RegExp(t, "g");
        let n,
            o = 0;
        do {
            n = t.exec(e);
            let i = n ? n.index : e.length;
            if (o < i && r([o, i]), n) {
                let [a] = n;
                o = n.index + a.length,
                a.length === 0 && (t.lastIndex = n.index + 1)
            }
        } while (n)
    }
    function Io() {
        return location.hash.substring(1)
    }
    function $o(e) {
        let t = C("a", {
            href: e
        });
        t.addEventListener("click", r => r.stopPropagation()),
        t.click()
    }
    function fs() {
        return v(window, "hashchange").pipe(m(Io), K(Io()), y(e => e.length > 0), Z(1))
    }
    function jo() {
        return fs().pipe(m(e => fe(`[id="${e}"]`)), y(e => typeof e != "undefined"))
    }
    function Br(e) {
        let t = matchMedia(e);
        return tr(r => t.addListener(() => r(t.matches))).pipe(K(t.matches))
    }
    function Fo() {
        let e = matchMedia("print");
        return A(v(window, "beforeprint").pipe(J(!0)), v(window, "afterprint").pipe(J(!1))).pipe(K(e.matches))
    }
    function Gr(e, t) {
        return e.pipe(S(r => r ? t() : V))
    }
    function mr(e, t={
        credentials: "same-origin"
    }) {
        return ce(fetch(`${e}`, t)).pipe(y(r => r.status === 200), ze(() => V))
    }
    function $e(e, t) {
        return mr(e, t).pipe(S(r => r.json()), Z(1))
    }
    function Uo(e, t) {
        let r = new DOMParser;
        return mr(e, t).pipe(S(n => n.text()), m(n => r.parseFromString(n, "text/xml")), Z(1))
    }
    function dr(e) {
        let t = C("script", {
            src: e
        });
        return R(() => (document.head.appendChild(t), A(v(t, "load"), v(t, "error").pipe(S(() => $r(() => new ReferenceError(`Invalid script: ${e}`))))).pipe(J(void 0), M(() => document.head.removeChild(t)), te(1))))
    }
    function Wo() {
        return {
            x: Math.max(0, scrollX),
            y: Math.max(0, scrollY)
        }
    }
    function Do() {
        return A(v(window, "scroll", {
            passive: !0
        }), v(window, "resize", {
            passive: !0
        })).pipe(m(Wo), K(Wo()))
    }
    function Vo() {
        return {
            width: innerWidth,
            height: innerHeight
        }
    }
    function No() {
        return v(window, "resize", {
            passive: !0
        }).pipe(m(Vo), K(Vo()))
    }
    function zo() {
        return G([Do(), No()]).pipe(m(([e, t]) => ({
            offset: e,
            size: t
        })), Z(1))
    }
    function hr(e, {viewport$: t, header$: r}) {
        let n = t.pipe(X("size")),
            o = G([n, r]).pipe(m(() => Ke(e)));
        return G([r, t, o]).pipe(m(([{height: i}, {offset: a, size: c}, {x: s, y: f}]) => ({
            offset: {
                x: a.x - s,
                y: a.y - f + i
            },
            size: c
        })))
    }
    function qo(e, {tx$: t}) {
        let r = v(e, "message").pipe(m(({data: n}) => n));
        return t.pipe(_t(() => r, {
            leading: !0,
            trailing: !0
        }), w(n => e.postMessage(n)), Xe(r), se())
    }
    var us = q("#__config"),
        dt = JSON.parse(us.textContent);
    dt.base = `${new URL(dt.base, Oe())}`;
    function he() {
        return dt
    }
    function ee(e) {
        return dt.features.includes(e)
    }
    function ne(e, t) {
        return typeof t != "undefined" ? dt.translations[e].replace("#", t.toString()) : dt.translations[e]
    }
    function Te(e, t=document) {
        return q(`[data-md-component=${e}]`, t)
    }
    function ie(e, t=document) {
        return Q(`[data-md-component=${e}]`, t)
    }
    function ps(e) {
        let t = q(".md-typeset > :first-child", e);
        return v(t, "click", {
            once: !0
        }).pipe(J(q(".md-typeset", e)), m(r => ({
            hash: __md_hash(r.innerHTML)
        })))
    }
    function Ko(e) {
        return !ee("announce.dismiss") || !e.childElementCount ? V : R(() => {
            let t = new E;
            return t.pipe(K({
                hash: __md_get("__announce")
            })).subscribe(({hash: r}) => {
                var n;
                r && r === ((n = __md_get("__announce")) != null ? n : r) && (e.hidden = !0, __md_set("__announce", r))
            }), ps(e).pipe(w(r => t.next(r)), M(() => t.complete()), m(r => H({
                ref: e
            }, r)))
        })
    }
    function ls(e, {target$: t}) {
        return t.pipe(m(r => ({
            hidden: r !== e
        })))
    }
    function Qo(e, t) {
        let r = new E;
        return r.subscribe(({hidden: n}) => {
            e.hidden = n
        }), ls(e, t).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
            ref: e
        }, n)))
    }
    function ms(e, t) {
        let r = R(() => G([go(e), or(t)])).pipe(m(([{x: n, y: o}, i]) => {
            let {width: a, height: c} = de(e);
            return {
                x: n - i.x + a / 2,
                y: o - i.y + c / 2
            }
        }));
        return nr(e).pipe(S(n => r.pipe(m(o => ({
            active: n,
            offset: o
        })), te(+!n || 1 / 0))))
    }
    function Yo(e, t, {target$: r}) {
        let [n, o] = Array.from(e.children);
        return R(() => {
            let i = new E;
            return i.subscribe({
                next({offset: a}) {
                    e.style.setProperty("--md-tooltip-x", `${a.x}px`),
                    e.style.setProperty("--md-tooltip-y", `${a.y}px`)
                },
                complete() {
                    e.style.removeProperty("--md-tooltip-x"),
                    e.style.removeProperty("--md-tooltip-y")
                }
            }), A(i.pipe(y(({active: a}) => a)), i.pipe(Re(250), y(({active: a}) => !a))).subscribe({
                next({active: a}) {
                    a ? e.prepend(n) : n.remove()
                },
                complete() {
                    e.prepend(n)
                }
            }), i.pipe(Ae(0, ye)).subscribe(({active: a}) => {
                n.classList.toggle("md-tooltip--active", a)
            }), i.pipe(qr(500, ye), y(() => !!e.offsetParent), m(() => e.offsetParent.getBoundingClientRect()), m(({x: a}) => a)).subscribe({
                next(a) {
                    a ? e.style.setProperty("--md-tooltip-0", `${-a}px`) : e.style.removeProperty("--md-tooltip-0")
                },
                complete() {
                    e.style.removeProperty("--md-tooltip-0")
                }
            }), v(o, "click").pipe(re(i.pipe(ae(1))), y(a => !(a.metaKey || a.ctrlKey))).subscribe(a => a.preventDefault()), v(o, "mousedown").pipe(re(i.pipe(ae(1))), me(i)).subscribe(([a, {active: c}]) => {
                var s;
                if (a.button !== 0 || a.metaKey || a.ctrlKey)
                    a.preventDefault();
                else if (c) {
                    a.preventDefault();
                    let f = e.parentElement.closest(".md-annotation");
                    f instanceof HTMLElement ? f.focus() : (s = Ie()) == null || s.blur()
                }
            }), r.pipe(re(i.pipe(ae(1))), y(a => a === n), ke(125)).subscribe(() => e.focus()), ms(e, t).pipe(w(a => i.next(a)), M(() => i.complete()), m(a => H({
                ref: e
            }, a)))
        })
    }
    function Bo(e) {
        return C("div", {
            class: "md-tooltip",
            id: e
        }, C("div", {
            class: "md-tooltip__inner md-typeset"
        }))
    }
    function Go(e, t) {
        t = t ? `${t}_annotation_${e}` : void 0;
        let r = t ? `#${t}` : void 0;
        return C("aside", {
            class: "md-annotation",
            tabIndex: 0
        }, Bo(t), C("a", {
            href: r,
            class: "md-annotation__index",
            tabIndex: -1
        }, C("span", {
            "data-md-annotation-id": e
        })))
    }
    function Jo(e) {
        return C("button", {
            class: "md-clipboard md-icon",
            title: ne("clipboard.copy"),
            "data-clipboard-target": `#${e} > code`
        })
    }
    function Jr(e, t) {
        let r = t & 2,
            n = t & 1,
            o = Object.keys(e.terms).filter(a => !e.terms[a]).reduce((a, c) => [...a, C("del", null, c), " "], []).slice(0, -1),
            i = new URL(e.location);
        return ee("search.highlight") && i.searchParams.set("h", Object.entries(e.terms).filter(([, a]) => a).reduce((a, [c]) => `${a} ${c}`.trim(), "")), C("a", {
            href: `${i}`,
            class: "md-search-result__link",
            tabIndex: -1
        }, C("article", {
            class: "md-search-result__article md-typeset",
            "data-md-score": e.score.toFixed(2)
        }, r > 0 && C("div", {
            class: "md-search-result__icon md-icon"
        }), r > 0 && C("h1", null, e.title), r <= 0 && C("h2", null, e.title), n > 0 && e.text.length > 0 && e.text, e.tags && e.tags.map(a => C("span", {
            class: "md-tag"
        }, a)), n > 0 && o.length > 0 && C("p", {
            class: "md-search-result__terms"
        }, ne("search.result.term.missing"), ": ", o)))
    }
    function Xo(e) {
        let t = e[0].score,
            r = [...e],
            n = r.findIndex(f => !f.location.includes("#")),
            [o] = r.splice(n, 1),
            i = r.findIndex(f => f.score < t);
        i === -1 && (i = r.length);
        let a = r.slice(0, i),
            c = r.slice(i),
            s = [Jr(o, 2 | +(!n && i === 0)), ...a.map(f => Jr(f, 1)), ...c.length ? [C("details", {
                class: "md-search-result__more"
            }, C("summary", {
                tabIndex: -1
            }, C("div", null, c.length > 0 && c.length === 1 ? ne("search.result.more.one") : ne("search.result.more.other", c.length))), c.map(f => Jr(f, 1)))] : []];
        return C("li", {
            class: "md-search-result__item"
        }, s)
    }
    function Zo(e) {
        return C("ul", {
            class: "md-source__facts"
        }, Object.entries(e).map(([t, r]) => C("li", {
            class: `md-source__fact md-source__fact--${t}`
        }, typeof r == "number" ? lr(r) : r)))
    }
    function ei(e) {
        return C("div", {
            class: "md-typeset__scrollwrap"
        }, C("div", {
            class: "md-typeset__table"
        }, e))
    }
    function ds(e) {
        let t = he(),
            r = new URL(`../${e.version}/`, t.base);
        return C("li", {
            class: "md-version__item"
        }, C("a", {
            href: `${r}`,
            class: "md-version__link"
        }, e.title))
    }
    function ti(e, t) {
        return C("div", {
            class: "md-version"
        }, C("button", {
            class: "md-version__current",
            "aria-label": ne("select.version.title")
        }, t.title), C("ul", {
            class: "md-version__list"
        }, e.map(ds)))
    }
    function hs(e) {
        let t = [];
        for (let r of e.tagName === "CODE" ? Q(".c, .c1, .cm", e) : [e]) {
            let n = [],
                o = document.createNodeIterator(r, NodeFilter.SHOW_TEXT);
            for (let i = o.nextNode(); i; i = o.nextNode())
                n.push(i);
            for (let i of n) {
                let a;
                for (; a = /(\(\d+\))(!)?/.exec(i.textContent);) {
                    let [, c, s] = a;
                    if (typeof s == "undefined") {
                        let f = i.splitText(a.index);
                        i = f.splitText(c.length),
                        t.push(f)
                    } else {
                        i.textContent = c,
                        t.push(i);
                        break
                    }
                }
            }
        }
        return t
    }
    function ri(e, t) {
        t.append(...Array.from(e.childNodes))
    }
    function br(e, t, {target$: r, print$: n}) {
        let o = t.closest("[id]"),
            i = o == null ? void 0 : o.id,
            a = new Map;
        for (let c of hs(t)) {
            let [, s] = c.textContent.match(/\((\d+)\)/);
            fe(`li:nth-child(${s})`, e) && (a.set(s, Go(s, i)), c.replaceWith(a.get(s)))
        }
        return a.size === 0 ? V : R(() => {
            let c = new E,
                s = [];
            for (let [f, u] of a)
                s.push([q(".md-typeset", u), q(`li:nth-child(${f})`, e)]);
            return n.pipe(re(c.pipe(ae(1)))).subscribe(f => {
                e.hidden = !f;
                for (let [u, p] of s)
                    f ? ri(u, p) : ri(p, u)
            }), A(...[...a].map(([, f]) => Yo(f, t, {
                target$: r
            }))).pipe(M(() => c.complete()), se())
        })
    }
    function ni(e) {
        if (e.nextElementSibling) {
            let t = e.nextElementSibling;
            if (t.tagName === "OL")
                return t;
            if (t.tagName === "P" && !t.children.length)
                return ni(t)
        }
    }
    function oi(e, t) {
        return R(() => {
            let r = ni(e);
            return typeof r != "undefined" ? br(r, e, t) : V
        })
    }
    var ai = tt(Zr());
    var bs = 0;
    function si(e) {
        if (e.nextElementSibling) {
            let t = e.nextElementSibling;
            if (t.tagName === "OL")
                return t;
            if (t.tagName === "P" && !t.children.length)
                return si(t)
        }
    }
    function ii(e) {
        return xe(e).pipe(m(({width: t}) => ({
            scrollable: cr(e).width > t
        })), X("scrollable"))
    }
    function ci(e, t) {
        let {matches: r} = matchMedia("(hover)"),
            n = R(() => {
                let o = new E;
                if (o.subscribe(({scrollable: a}) => {
                    a && r ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex")
                }), ai.default.isSupported()) {
                    let a = e.closest("pre");
                    a.id = `__code_${++bs}`,
                    a.insertBefore(Jo(a.id), e)
                }
                let i = e.closest([":not(td):not(.code) > .highlight", ".highlighttable"].join(", "));
                if (i instanceof HTMLElement) {
                    let a = si(i);
                    if (typeof a != "undefined" && (i.classList.contains("annotate") || ee("content.code.annotate"))) {
                        let c = br(a, e, t);
                        return ii(e).pipe(w(s => o.next(s)), M(() => o.complete()), m(s => H({
                            ref: e
                        }, s)), Je(xe(i).pipe(re(o.pipe(ae(1))), m(({width: s, height: f}) => s && f), B(), S(s => s ? c : V))))
                    }
                }
                return ii(e).pipe(w(a => o.next(a)), M(() => o.complete()), m(a => H({
                    ref: e
                }, a)))
            });
        return Ao(e).pipe(y(o => o), te(1), S(() => n))
    }
    var fi = ".node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}marker{fill:var(--md-mermaid-edge-color)!important}.edgeLabel .label rect{fill:transparent}.label{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.label foreignObject{line-height:normal;overflow:visible}.label div .edgeLabel{color:var(--md-mermaid-label-fg-color)}.edgeLabel,.edgeLabel rect,.label div .edgeLabel{background-color:var(--md-mermaid-label-bg-color)}.edgeLabel,.edgeLabel rect{fill:var(--md-mermaid-label-bg-color);color:var(--md-mermaid-edge-color)}.edgePath .path,.flowchart-link{stroke:var(--md-mermaid-edge-color)}.edgePath .arrowheadPath{fill:var(--md-mermaid-edge-color);stroke:none}.cluster rect{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}.cluster span{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}#flowchart-circleEnd,#flowchart-circleStart,#flowchart-crossEnd,#flowchart-crossStart,#flowchart-pointEnd,#flowchart-pointStart{stroke:none}g.classGroup line,g.classGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.classGroup text{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.classLabel .box{fill:var(--md-mermaid-label-bg-color);background-color:var(--md-mermaid-label-bg-color);opacity:1}.classLabel .label{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node .divider{stroke:var(--md-mermaid-node-fg-color)}.relation{stroke:var(--md-mermaid-edge-color)}.cardinality{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.cardinality text{fill:inherit!important}#compositionEnd,#compositionStart,#dependencyEnd,#dependencyStart,#extensionEnd,#extensionStart{fill:var(--md-mermaid-edge-color)!important;stroke:var(--md-mermaid-edge-color)!important}#aggregationEnd,#aggregationStart{fill:var(--md-mermaid-label-bg-color)!important;stroke:var(--md-mermaid-edge-color)!important}g.stateGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.stateGroup .state-title{fill:var(--md-mermaid-label-fg-color)!important;font-family:var(--md-mermaid-font-family)}g.stateGroup .composit{fill:var(--md-mermaid-label-bg-color)}.nodeLabel{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node circle.state-end,.node circle.state-start,.start-state{fill:var(--md-mermaid-edge-color);stroke:none}.end-state-inner,.end-state-outer{fill:var(--md-mermaid-edge-color)}.end-state-inner,.node circle.state-end{stroke:var(--md-mermaid-label-bg-color)}.transition{stroke:var(--md-mermaid-edge-color)}[id^=state-fork] rect,[id^=state-join] rect{fill:var(--md-mermaid-edge-color)!important;stroke:none!important}.statediagram-cluster.statediagram-cluster .inner{fill:var(--md-default-bg-color)}.statediagram-cluster rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}.statediagram-state rect.divider{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}.entityBox{fill:var(--md-mermaid-label-bg-color);stroke:var(--md-mermaid-node-fg-color)}.entityLabel{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.relationshipLabelBox{fill:var(--md-mermaid-label-bg-color);fill-opacity:1;background-color:var(--md-mermaid-label-bg-color);opacity:1}.relationshipLabel{fill:var(--md-mermaid-label-fg-color)}.relationshipLine{stroke:var(--md-mermaid-edge-color)}#ONE_OR_MORE_END *,#ONE_OR_MORE_START *,#ONLY_ONE_END *,#ONLY_ONE_START *,#ZERO_OR_MORE_END *,#ZERO_OR_MORE_START *,#ZERO_OR_ONE_END *,#ZERO_OR_ONE_START *{stroke:var(--md-mermaid-edge-color)!important}#ZERO_OR_MORE_END circle,#ZERO_OR_MORE_START circle,.actor{fill:var(--md-mermaid-label-bg-color)}.actor{stroke:var(--md-mermaid-node-fg-color)}text.actor>tspan{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}line{stroke:var(--md-default-fg-color--lighter)}.messageLine0,.messageLine1{stroke:var(--md-mermaid-edge-color)}.loopText>tspan,.messageText{font-family:var(--md-mermaid-font-family)!important}#arrowhead path,.loopText>tspan,.messageText{fill:var(--md-mermaid-edge-color);stroke:none}.loopLine{stroke:var(--md-mermaid-node-fg-color)}.labelBox,.loopLine{fill:var(--md-mermaid-node-bg-color)}.labelBox{stroke:none}.labelText,.labelText>span{fill:var(--md-mermaid-node-fg-color);font-family:var(--md-mermaid-font-family)}";
    var en,
        gs = 0;
    function ys() {
        return typeof mermaid == "undefined" || mermaid instanceof Element ? dr("https://squidfunk.github.io/mkdocs-material/assets/externals/unpkg.com/mermaid@8.13.3/dist/mermaid.min.js") : I(void 0)
    }
    function ui(e) {
        return e.classList.remove("mermaid"), en || (en = ys().pipe(w(() => mermaid.initialize({
            startOnLoad: !1,
            themeCSS: fi
        })), J(void 0), Z(1))), en.subscribe(() => {
            e.classList.add("mermaid");
            let t = `__mermaid_${gs++}`,
                r = C("div", {
                    class: "mermaid"
                });
            mermaid.mermaidAPI.render(t, e.textContent, n => {
                let o = r.attachShadow({
                    mode: "closed"
                });
                o.innerHTML = n,
                e.replaceWith(r)
            })
        }), en.pipe(J({
            ref: e
        }))
    }
    function xs(e, {target$: t, print$: r}) {
        let n = !0;
        return A(t.pipe(m(o => o.closest("details:not([open])")), y(o => e === o), J({
            action: "open",
            reveal: !0
        })), r.pipe(y(o => o || !n), w(() => n = e.open), m(o => ({
            action: o ? "open" : "close"
        }))))
    }
    function pi(e, t) {
        return R(() => {
            let r = new E;
            return r.subscribe(({action: n, reveal: o}) => {
                n === "open" ? e.setAttribute("open", "") : e.removeAttribute("open"),
                o && e.scrollIntoView()
            }), xs(e, t).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    var li = C("table");
    function mi(e) {
        return e.replaceWith(li), li.replaceWith(ei(e)), I({
            ref: e
        })
    }
    function ws(e) {
        let t = Q(":scope > input", e),
            r = t.find(n => n.checked);
        return A(...t.map(n => v(n, "change").pipe(J({
            active: q(`label[for=${n.id}]`)
        })))).pipe(K({
            active: q(`label[for=${r.id}]`)
        }))
    }
    function di(e) {
        let t = q(".tabbed-labels", e);
        return R(() => {
            let r = new E;
            return G([r, xe(e)]).pipe(Ae(1, ye), re(r.pipe(ae(1)))).subscribe({
                next([{active: n}]) {
                    let o = Ke(n),
                        {width: i} = de(n);
                    e.style.setProperty("--md-indicator-x", `${o.x}px`),
                    e.style.setProperty("--md-indicator-width", `${i}px`),
                    t.scrollTo({
                        behavior: "smooth",
                        left: o.x
                    })
                },
                complete() {
                    e.style.removeProperty("--md-indicator-x"),
                    e.style.removeProperty("--md-indicator-width")
                }
            }), ee("content.tabs.link") && r.pipe(He(1)).subscribe(({active: n}) => {
                let o = n.innerText.trim();
                for (let a of Q("[data-tabs]"))
                    for (let c of Q(":scope > input", a))
                        if (q(`label[for=${c.id}]`).innerText.trim() === o) {
                            c.click();
                            break
                        }
                let i = __md_get("__tabs") || [];
                __md_set("__tabs", [...new Set([o, ...i])])
            }), ws(e).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    function hi(e, {target$: t, print$: r}) {
        return A(...Q(".annotate:not(.highlight, .highlighttable)", e).map(n => oi(n, {
            target$: t,
            print$: r
        })), ...Q("pre:not(.mermaid) > code", e).map(n => ci(n, {
            target$: t,
            print$: r
        })), ...Q("pre.mermaid", e).map(n => ui(n)), ...Q("table:not([class])", e).map(n => mi(n)), ...Q("details", e).map(n => pi(n, {
            target$: t,
            print$: r
        })), ...Q("[data-tabs]", e).map(n => di(n)))
    }
    function Es(e, {alert$: t}) {
        return t.pipe(S(r => A(I(!0), I(!1).pipe(ke(2e3))).pipe(m(n => ({
            message: r,
            active: n
        })))))
    }
    function bi(e, t) {
        let r = q(".md-typeset", e);
        return R(() => {
            let n = new E;
            return n.subscribe(({message: o, active: i}) => {
                e.classList.toggle("md-dialog--active", i),
                r.textContent = o
            }), Es(e, t).pipe(w(o => n.next(o)), M(() => n.complete()), m(o => H({
                ref: e
            }, o)))
        })
    }
    function Ss({viewport$: e}) {
        if (!ee("header.autohide"))
            return I(!1);
        let t = e.pipe(m(({offset: {y: o}}) => o), Ce(2, 1), m(([o, i]) => [o < i, i]), X(0)),
            r = G([e, t]).pipe(y(([{offset: o}, [, i]]) => Math.abs(i - o.y) > 100), m(([, [o]]) => o), B()),
            n = mt("search");
        return G([e, n]).pipe(m(([{offset: o}, i]) => o.y > 400 && !i), B(), S(o => o ? r : I(!1)), K(!1))
    }
    function vi(e, t) {
        return R(() => {
            let r = getComputedStyle(e);
            return I(r.position === "sticky" || r.position === "-webkit-sticky")
        }).pipe(qe(xe(e), Ss(t)), m(([r, {height: n}, o]) => ({
            height: r ? n : 0,
            sticky: r,
            hidden: o
        })), B((r, n) => r.sticky === n.sticky && r.height === n.height && r.hidden === n.hidden), Z(1))
    }
    function gi(e, {header$: t, main$: r}) {
        return R(() => {
            let n = new E;
            return n.pipe(X("active"), qe(t)).subscribe(([{active: o}, {hidden: i}]) => {
                e.classList.toggle("md-header--hidden", i),
                e.classList.toggle("md-header--shadow", o && !i)
            }), r.subscribe(n), t.pipe(re(n.pipe(ae(1))), m(o => H({
                ref: e
            }, o)))
        })
    }
    function Os(e, {viewport$: t, header$: r}) {
        return hr(e, {
            viewport$: t,
            header$: r
        }).pipe(m(({offset: {y: n}}) => {
            let {height: o} = de(e);
            return {
                active: n >= o
            }
        }), X("active"))
    }
    function yi(e, t) {
        return R(() => {
            let r = new E;
            r.subscribe(({active: o}) => {
                e.classList.toggle("md-header__title--active", o)
            });
            let n = fe("article h1");
            return typeof n == "undefined" ? V : Os(n, t).pipe(w(o => r.next(o)), M(() => r.complete()), m(o => H({
                ref: e
            }, o)))
        })
    }
    function xi(e, {viewport$: t, header$: r}) {
        let n = r.pipe(m(({height: i}) => i), B()),
            o = n.pipe(S(() => xe(e).pipe(m(({height: i}) => ({
                top: e.offsetTop,
                bottom: e.offsetTop + i
            })), X("bottom"))));
        return G([n, o, t]).pipe(m(([i, {top: a, bottom: c}, {offset: {y: s}, size: {height: f}}]) => (f = Math.max(0, f - Math.max(0, a - s, i) - Math.max(0, f + s - c)), {
            offset: a - i,
            height: f,
            active: a - i <= s
        })), B((i, a) => i.offset === a.offset && i.height === a.height && i.active === a.active))
    }
    function Ts(e) {
        let t = __md_get("__palette") || {
            index: e.findIndex(r => matchMedia(r.getAttribute("data-md-color-media")).matches)
        };
        return I(...e).pipe(ue(r => v(r, "change").pipe(J(r))), K(e[Math.max(0, t.index)]), m(r => ({
            index: e.indexOf(r),
            color: {
                scheme: r.getAttribute("data-md-color-scheme"),
                primary: r.getAttribute("data-md-color-primary"),
                accent: r.getAttribute("data-md-color-accent")
            }
        })), Z(1))
    }
    function wi(e) {
        return R(() => {
            let t = new E;
            t.subscribe(n => {
                for (let [o, i] of Object.entries(n.color))
                    document.body.setAttribute(`data-md-color-${o}`, i);
                for (let o = 0; o < r.length; o++) {
                    let i = r[o].nextElementSibling;
                    i instanceof HTMLElement && (i.hidden = n.index !== o)
                }
                __md_set("__palette", n)
            });
            let r = Q("input", e);
            return Ts(r).pipe(w(n => t.next(n)), M(() => t.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    var tn = tt(Zr());
    function _s(e) {
        e.setAttribute("data-md-copying", "");
        let t = e.innerText;
        return e.removeAttribute("data-md-copying"), t
    }
    function Ei({alert$: e}) {
        tn.default.isSupported() && new P(t => {
            new tn.default("[data-clipboard-target], [data-clipboard-text]", {
                text: r => r.getAttribute("data-clipboard-text") || _s(q(r.getAttribute("data-clipboard-target")))
            }).on("success", r => t.next(r))
        }).pipe(w(t => {
            t.trigger.focus()
        }), J(ne("clipboard.copied"))).subscribe(e)
    }
    function Ms(e) {
        if (e.length < 2)
            return [""];
        let [t, r] = [...e].sort((o, i) => o.length - i.length).map(o => o.replace(/[^/]+$/, "")),
            n = 0;
        if (t === r)
            n = t.length;
        else
            for (; t.charCodeAt(n) === r.charCodeAt(n);)
                n++;
        return e.map(o => o.replace(t.slice(0, n), ""))
    }
    function vr(e) {
        let t = __md_get("__sitemap", sessionStorage, e);
        if (t)
            return I(t);
        {
            let r = he();
            return Uo(new URL("sitemap.xml", e || r.base)).pipe(m(n => Ms(Q("loc", n).map(o => o.textContent))), Ue([]), w(n => __md_set("__sitemap", n, sessionStorage, e)))
        }
    }
    function Si({document$: e, location$: t, viewport$: r}) {
        let n = he();
        if (location.protocol === "file:")
            return;
        "scrollRestoration" in history && (history.scrollRestoration = "manual", v(window, "beforeunload").subscribe(() => {
            history.scrollRestoration = "auto"
        }));
        let o = fe("link[rel=icon]");
        typeof o != "undefined" && (o.href = o.href);
        let i = vr().pipe(m(f => f.map(u => `${new URL(u, n.base)}`)), S(f => v(document.body, "click").pipe(y(u => !u.metaKey && !u.ctrlKey), S(u => {
                if (u.target instanceof Element) {
                    let p = u.target.closest("a");
                    if (p && !p.target) {
                        let l = new URL(p.href);
                        if (l.search = "", l.hash = "", l.pathname !== location.pathname && f.includes(l.toString()))
                            return u.preventDefault(), I({
                                url: new URL(p.href)
                            })
                    }
                }
                return Se
            }))), se()),
            a = v(window, "popstate").pipe(y(f => f.state !== null), m(f => ({
                url: new URL(location.href),
                offset: f.state
            })), se());
        A(i, a).pipe(B((f, u) => f.url.href === u.url.href), m(({url: f}) => f)).subscribe(t);
        let c = t.pipe(X("pathname"), S(f => mr(f.href).pipe(ze(() => (pr(f), Se)))), se());
        i.pipe(pt(c)).subscribe(({url: f}) => {
            history.pushState({}, "", `${f}`)
        });
        let s = new DOMParser;
        c.pipe(S(f => f.text()), m(f => s.parseFromString(f, "text/html"))).subscribe(e),
        e.pipe(He(1)).subscribe(f => {
            for (let u of ["title", "link[rel=canonical]", "meta[name=author]", "meta[name=description]", "[data-md-component=announce]", "[data-md-component=container]", "[data-md-component=header-topic]", "[data-md-component=outdated]", "[data-md-component=logo]", "[data-md-component=skip]", ...ee("navigation.tabs.sticky") ? ["[data-md-component=tabs]"] : []]) {
                let p = fe(u),
                    l = fe(u, f);
                typeof p != "undefined" && typeof l != "undefined" && p.replaceWith(l)
            }
        }),
        e.pipe(He(1), m(() => Te("container")), S(f => Q("script", f)), Ur(f => {
            let u = C("script");
            if (f.src) {
                for (let p of f.getAttributeNames())
                    u.setAttribute(p, f.getAttribute(p));
                return f.replaceWith(u), new P(p => {
                    u.onload = () => p.complete()
                })
            } else
                return u.textContent = f.textContent, f.replaceWith(u), V
        })).subscribe(),
        A(i, a).pipe(pt(e)).subscribe(({url: f, offset: u}) => {
            f.hash && !u ? $o(f.hash) : window.scrollTo(0, (u == null ? void 0 : u.y) || 0)
        }),
        r.pipe(Tt(i), Re(250), X("offset")).subscribe(({offset: f}) => {
            history.replaceState(f, "")
        }),
        A(i, a).pipe(Ce(2, 1), y(([f, u]) => f.url.pathname === u.url.pathname), m(([, f]) => f)).subscribe(({offset: f}) => {
            window.scrollTo(0, (f == null ? void 0 : f.y) || 0)
        })
    }
    function Oi(e, t=r => r) {
        return e.split(/"([^"]+)"/g).map((r, n) => n & 1 ? r.replace(/^\b|^(?![^\x00-\x7F]|$)|\s+/g, " +") : r).join("").replace(/"|(?:^|\s+)[*+\-:^~]+(?=\s+|$)/g, "").split(/\s+/g).flatMap(t).map(r => /^[+-]/.test(r) ? r : `${r}*`).join(" ").trim()
    }
    var Mi = tt(_i());
    function Li(e) {
        let t = e.separator.split("|").map(o => o.replace(/(\(\?[!=][^)]+\))/g, "").length === 0 ? "\uFFFD" : o).join("|"),
            r = new RegExp(t, "img"),
            n = (o, i, a) => `${i}<mark data-md-highlight>${a}</mark>`;
        return o => {
            o = o.replace(/[\s*+\-:~^]+/g, " ").trim();
            let i = new RegExp(`(^|${e.separator}|\\b)(${o.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&").replace(r, "|")})`, "img");
            return a => (0, Mi.default)(a).replace(i, n).replace(/<\/mark>(\s+)<mark[^>]*>/img, "$1")
        }
    }
    function ht(e) {
        return e.type === 1
    }
    function Ai(e) {
        return e.type === 2
    }
    function bt(e) {
        return e.type === 3
    }
    function Rs({config: e, docs: t}) {
        e.lang.length === 1 && e.lang[0] === "en" && (e.lang = [ne("search.config.lang")]),
        e.separator === "[\\s\\-]+" && (e.separator = ne("search.config.separator"));
        let n = {
            pipeline: ne("search.config.pipeline").split(/\s*,\s*/).filter(Boolean),
            suggestions: ee("search.suggest")
        };
        return {
            config: e,
            docs: t,
            options: n
        }
    }
    function Ci(e, t) {
        let r = he(),
            n = new Worker(e),
            o = new E,
            i = qo(n, {
                tx$: o
            }).pipe(m(a => {
                if (bt(a))
                    for (let c of a.data.items)
                        for (let s of c)
                            s.location = `${new URL(s.location, r.base)}`;
                return a
            }), se());
        return ce(t).pipe(m(a => ({
            type: 0,
            data: Rs(a)
        }))).subscribe(o.next.bind(o)), {
            tx$: o,
            rx$: i
        }
    }
    function Ri({document$: e}) {
        let t = he(),
            r = $e(new URL("../versions.json", t.base)),
            n = r.pipe(m(o => {
                let [, i] = t.base.match(/([^/]+)\/?$/);
                return o.find(({version: a, aliases: c}) => a === i || c.includes(i)) || o[0]
            }));
        G([r, n]).pipe(m(([o, i]) => new Map(o.filter(a => a !== i).map(a => [`${new URL(`../${a.version}/`, t.base)}`, a]))), S(o => v(document.body, "click").pipe(y(i => !i.metaKey && !i.ctrlKey), S(i => {
            if (i.target instanceof Element) {
                let a = i.target.closest("a");
                if (a && !a.target && o.has(a.href))
                    return i.preventDefault(), I(a.href)
            }
            return V
        }), S(i => {
            let {version: a} = o.get(i);
            return vr(new URL(i)).pipe(m(c => {
                let f = Oe().href.replace(t.base, "");
                return c.includes(f) ? new URL(`../${a}/${f}`, t.base) : new URL(i)
            }))
        })))).subscribe(o => pr(o)),
        G([r, n]).subscribe(([o, i]) => {
            q(".md-header__topic").appendChild(ti(o, i))
        }),
        e.pipe(Xe(n)).subscribe(o => {
            var a;
            let i = __md_get("__outdated", sessionStorage);
            if (i === null) {
                let c = ((a = t.version) == null ? void 0 : a.default) || "latest";
                i = !o.aliases.includes(c),
                __md_set("__outdated", i, sessionStorage)
            }
            if (i)
                for (let c of ie("outdated"))
                    c.hidden = !1
        })
    }
    function ks(e, {rx$: t}, {index$: r}) {
        let n = (__search == null ? void 0 : __search.transform) || Oi,
            {searchParams: o} = Oe();
        o.has("q") && Qe("search", !0);
        let i = t.pipe(y(ht), te(1), m(() => o.get("q") || ""));
        mt("search").pipe(y(s => !s), te(1)).subscribe(() => {
            let s = new URL(location.href);
            s.searchParams.delete("q"),
            history.replaceState({}, "", `${s}`)
        }),
        i.subscribe(s => {
            s && (e.value = s)
        });
        let a = nr(e),
            c = A(v(e, "keyup"), v(e, "focus").pipe(ke(1)), i).pipe(Xe(r), m(({config: s}) => n(e.value, f => {
                let u = [];
                return Yr(f, s.separator, p => {
                    u.push(f.slice(...p))
                }), u
            })), B());
        return G([c, a]).pipe(m(([s, f]) => ({
            value: s,
            focus: f
        })), Z(1))
    }
    function ki(e, {tx$: t, rx$: r}, n) {
        let o = new E;
        return o.pipe(X("value"), m(({value: i}) => ({
            type: 2,
            data: i
        }))).subscribe(t.next.bind(t)), o.pipe(X("focus")).subscribe(({focus: i}) => {
            i ? (Qe("search", i), e.placeholder = "") : e.placeholder = ne("search.placeholder")
        }), v(e.form, "reset").pipe(re(o.pipe(ae(1)))).subscribe(() => e.focus()), ks(e, {
            tx$: t,
            rx$: r
        }, n).pipe(w(i => o.next(i)), M(() => o.complete()), m(i => H({
            ref: e
        }, i)), se())
    }
    function Hi(e, {rx$: t}, {query$: r}) {
        let n = new E,
            o = Co(e.parentElement).pipe(y(Boolean)),
            i = q(":scope > :first-child", e),
            a = q(":scope > :last-child", e),
            c = t.pipe(y(ht), te(1));
        return n.pipe(me(r), Tt(c)).subscribe(([{items: f}, {value: u}]) => {
            if (u)
                switch (f.length) {
                case 0:
                    i.textContent = ne("search.result.none");
                    break;
                case 1:
                    i.textContent = ne("search.result.one");
                    break;
                default:
                    i.textContent = ne("search.result.other", lr(f.length))
                }
            else
                i.textContent = ne("search.result.placeholder")
        }), n.pipe(w(() => a.innerHTML = ""), S(({items: f}) => A(I(...f.slice(0, 10)), I(...f.slice(10)).pipe(Ce(4), Kr(o), S(([u]) => u)))), m(f => {
            let u = Xo(f);
            return a.appendChild(u), fe("details", u)
        })).subscribe(f => {
            f && f.addEventListener("toggle", () => {
                !f.open && f.offsetTop <= e.parentElement.scrollTop && (e.parentElement.scrollTop = f.offsetTop)
            })
        }), t.pipe(y(bt), m(({data: f}) => f)).pipe(w(f => n.next(f)), M(() => n.complete()), m(f => H({
            ref: e
        }, f)))
    }
    function Hs(e, {query$: t}) {
        return t.pipe(m(({value: r}) => {
            let n = Oe();
            return n.hash = "", n.searchParams.delete("h"), n.searchParams.set("q", r), {
                url: n
            }
        }))
    }
    function Pi(e, t) {
        let r = new E;
        return r.subscribe(({url: n}) => {
            e.setAttribute("data-clipboard-text", e.href),
            e.href = `${n}`
        }), v(e, "click").subscribe(n => n.preventDefault()), Hs(e, t).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
            ref: e
        }, n)))
    }
    function Ii(e, {rx$: t}, {keyboard$: r}) {
        let n = new E,
            o = Te("search-query"),
            i = A(v(o, "keydown"), v(o, "focus")).pipe(Fe(we), m(() => o.value), B());
        return n.pipe(qe(i), m(([{suggestions: c}, s]) => {
            let f = s.split(/([\s-]+)/);
            if ((c == null ? void 0 : c.length) && f[f.length - 1]) {
                let u = c[c.length - 1];
                u.startsWith(f[f.length - 1]) && (f[f.length - 1] = u)
            } else
                f.length = 0;
            return f
        })).subscribe(c => e.innerHTML = c.join("").replace(/\s/g, "&nbsp;")), r.pipe(y(({mode: c}) => c === "search")).subscribe(c => {
            switch (c.type) {
            case "ArrowRight":
                e.innerText.length && o.selectionStart === o.value.length && (o.value = e.innerText);
                break
            }
        }), t.pipe(y(bt), m(({data: c}) => c)).pipe(w(c => n.next(c)), M(() => n.complete()), m(() => ({
            ref: e
        })))
    }
    function $i(e, {index$: t, keyboard$: r}) {
        let n = he();
        try {
            let o = (__search == null ? void 0 : __search.worker) || n.search,
                i = Ci(o, t),
                a = Te("search-query", e),
                c = Te("search-result", e),
                {tx$: s, rx$: f} = i;
            s.pipe(y(Ai), pt(f.pipe(y(ht))), te(1)).subscribe(s.next.bind(s)),
            r.pipe(y(({mode: l}) => l === "search")).subscribe(l => {
                let d = Ie();
                switch (l.type) {
                case "Enter":
                    if (d === a) {
                        let h = new Map;
                        for (let b of Q(":first-child [href]", c)) {
                            let F = b.firstElementChild;
                            h.set(b, parseFloat(F.getAttribute("data-md-score")))
                        }
                        if (h.size) {
                            let [[b]] = [...h].sort(([, F], [, Y]) => Y - F);
                            b.click()
                        }
                        l.claim()
                    }
                    break;
                case "Escape":
                case "Tab":
                    Qe("search", !1),
                    a.blur();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    if (typeof d == "undefined")
                        a.focus();
                    else {
                        let h = [a, ...Q(":not(details) > [href], summary, details[open] [href]", c)],
                            b = Math.max(0, (Math.max(0, h.indexOf(d)) + h.length + (l.type === "ArrowUp" ? -1 : 1)) % h.length);
                        h[b].focus()
                    }
                    l.claim();
                    break;
                default:
                    a !== Ie() && a.focus()
                }
            }),
            r.pipe(y(({mode: l}) => l === "global")).subscribe(l => {
                switch (l.type) {
                case "f":
                case "s":
                case "/":
                    a.focus(),
                    a.select(),
                    l.claim();
                    break
                }
            });
            let u = ki(a, i, {
                    index$: t
                }),
                p = Hi(c, i, {
                    query$: u
                });
            return A(u, p).pipe(Je(...ie("search-share", e).map(l => Pi(l, {
                query$: u
            })), ...ie("search-suggest", e).map(l => Ii(l, i, {
                keyboard$: r
            }))))
        } catch (o) {
            return e.hidden = !0, Se
        }
    }
    function ji(e, {index$: t, location$: r}) {
        return G([t, r.pipe(K(Oe()), y(n => !!n.searchParams.get("h")))]).pipe(m(([n, o]) => Li(n.config)(o.searchParams.get("h"))), m(n => {
            var a;
            let o = new Map,
                i = document.createNodeIterator(e, NodeFilter.SHOW_TEXT);
            for (let c = i.nextNode(); c; c = i.nextNode())
                if ((a = c.parentElement) != null && a.offsetHeight) {
                    let s = c.textContent,
                        f = n(s);
                    f.length > s.length && o.set(c, f)
                }
            for (let [c, s] of o) {
                let {childNodes: f} = C("span", null, s);
                c.replaceWith(...Array.from(f))
            }
            return {
                ref: e,
                nodes: o
            }
        }))
    }
    function Ps(e, {viewport$: t, main$: r}) {
        let n = e.parentElement,
            o = n.offsetTop - n.parentElement.offsetTop;
        return G([r, t]).pipe(m(([{offset: i, height: a}, {offset: {y: c}}]) => (a = a + Math.min(o, Math.max(0, c - i)) - o, {
            height: a,
            locked: c >= i + o
        })), B((i, a) => i.height === a.height && i.locked === a.locked))
    }
    function rn(e, n) {
        var o = n,
            {header$: t} = o,
            r = un(o, ["header$"]);
        let i = q(".md-sidebar__scrollwrap", e),
            {y: a} = Ke(i);
        return R(() => {
            let c = new E;
            return c.pipe(Ae(0, ye), me(t)).subscribe({
                next([{height: s}, {height: f}]) {
                    i.style.height = `${s - 2 * a}px`,
                    e.style.top = `${f}px`
                },
                complete() {
                    i.style.height = "",
                    e.style.top = ""
                }
            }), c.pipe(Fe(ye), te(1)).subscribe(() => {
                for (let s of Q(".md-nav__link--active[href]", e)) {
                    let f = fr(s);
                    if (typeof f != "undefined") {
                        let u = s.offsetTop - f.offsetTop,
                            {height: p} = de(f);
                        f.scrollTo({
                            top: u - p / 2
                        })
                    }
                }
            }), Ps(e, r).pipe(w(s => c.next(s)), M(() => c.complete()), m(s => H({
                ref: e
            }, s)))
        })
    }
    function Fi(e, t) {
        if (typeof t != "undefined") {
            let r = `https://api.github.com/repos/${e}/${t}`;
            return St($e(`${r}/releases/latest`).pipe(m(n => ({
                version: n.tag_name
            })), Ue({})), $e(r).pipe(m(n => ({
                stars: n.stargazers_count,
                forks: n.forks_count
            })), Ue({}))).pipe(m(([n, o]) => H(H({}, n), o)))
        } else {
            let r = `https://api.github.com/users/${e}`;
            return $e(r).pipe(m(n => ({
                repositories: n.public_repos
            })), Ue({}))
        }
    }
    function Ui(e, t) {
        let r = `https://${e}/api/v4/projects/${encodeURIComponent(t)}`;
        return $e(r).pipe(m(({star_count: n, forks_count: o}) => ({
            stars: n,
            forks: o
        })), Ue({}))
    }
    function Wi(e) {
        let [t] = e.match(/(git(?:hub|lab))/i) || [];
        switch (t.toLowerCase()) {
        case "github":
            let [, r, n] = e.match(/^.+github\.com\/([^/]+)\/?([^/]+)?/i);
            return Fi(r, n);
        case "gitlab":
            let [, o, i] = e.match(/^.+?([^/]*gitlab[^/]+)\/(.+?)\/?$/i);
            return Ui(o, i);
        default:
            return V
        }
    }
    var Is;
    function $s(e) {
        return Is || (Is = R(() => {
                let t = __md_get("__source", sessionStorage);
                return t ? I(t) : Wi(e.href).pipe(w(r => __md_set("__source", r, sessionStorage)))
            }).pipe(ze(() => V), y(t => Object.keys(t).length > 0), m(t => ({
                facts: t
            })), Z(1)))
    }
    function Di(e) {
        let t = q(":scope > :last-child", e);
        return R(() => {
            let r = new E;
            return r.subscribe(({facts: n}) => {
                t.appendChild(Zo(n)),
                t.classList.add("md-source__repository--active")
            }), $s(e).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    function js(e, {viewport$: t, header$: r}) {
        return xe(document.body).pipe(S(() => hr(e, {
            header$: r,
            viewport$: t
        })), m(({offset: {y: n}}) => ({
            hidden: n >= 10
        })), X("hidden"))
    }
    function Vi(e, t) {
        return R(() => {
            let r = new E;
            return r.subscribe({
                next({hidden: n}) {
                    e.classList.toggle("md-tabs--hidden", n)
                },
                complete() {
                    e.classList.remove("md-tabs--hidden")
                }
            }), (ee("navigation.tabs.sticky") ? I({
                hidden: !1
            }) : js(e, t)).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    function Fs(e, {viewport$: t, header$: r}) {
        let n = new Map,
            o = Q("[href^=\\#]", e);
        for (let c of o) {
            let s = decodeURIComponent(c.hash.substring(1)),
                f = fe(`[id="${s}"]`);
            typeof f != "undefined" && n.set(c, f)
        }
        let i = r.pipe(X("height"), m(({height: c}) => {
            let s = Te("main"),
                f = q(":scope > :first-child", s);
            return c + .8 * (f.offsetTop - s.offsetTop)
        }), se());
        return xe(document.body).pipe(X("height"), S(c => R(() => {
            let s = [];
            return I([...n].reduce((f, [u, p]) => {
                for (; s.length && n.get(s[s.length - 1]).tagName >= p.tagName;)
                    s.pop();
                let l = p.offsetTop;
                for (; !l && p.parentElement;)
                    p = p.parentElement,
                    l = p.offsetTop;
                return f.set([...s = [...s, u]].reverse(), l)
            }, new Map))
        }).pipe(m(s => new Map([...s].sort(([, f], [, u]) => f - u))), qe(i), S(([s, f]) => t.pipe(Dr(([u, p], {offset: {y: l}, size: d}) => {
            let h = l + d.height >= Math.floor(c.height);
            for (; p.length;) {
                let [, b] = p[0];
                if (b - f < l || h)
                    u = [...u, p.shift()];
                else
                    break
            }
            for (; u.length;) {
                let [, b] = u[u.length - 1];
                if (b - f >= l && !h)
                    p = [u.pop(), ...p];
                else
                    break
            }
            return [u, p]
        }, [[], [...s]]), B((u, p) => u[0] === p[0] && u[1] === p[1])))))).pipe(m(([c, s]) => ({
            prev: c.map(([f]) => f),
            next: s.map(([f]) => f)
        })), K({
            prev: [],
            next: []
        }), Ce(2, 1), m(([c, s]) => c.prev.length < s.prev.length ? {
            prev: s.prev.slice(Math.max(0, c.prev.length - 1), s.prev.length),
            next: []
        } : {
            prev: s.prev.slice(-1),
            next: s.next.slice(0, s.next.length - c.next.length)
        }))
    }
    function Ni(e, {viewport$: t, header$: r, target$: n}) {
        return R(() => {
            let o = new E;
            if (o.subscribe(({prev: i, next: a}) => {
                for (let [c] of a)
                    c.classList.remove("md-nav__link--passed"),
                    c.classList.remove("md-nav__link--active");
                for (let [c, [s]] of i.entries())
                    s.classList.add("md-nav__link--passed"),
                    s.classList.toggle("md-nav__link--active", c === i.length - 1)
            }), ee("toc.follow")) {
                let i = A(t.pipe(Re(1), J(void 0)), t.pipe(Re(250), J("smooth")));
                o.pipe(y(({prev: a}) => a.length > 0), me(i)).subscribe(([{prev: a}, c]) => {
                    let [s] = a[a.length - 1];
                    if (s.offsetHeight) {
                        let f = fr(s);
                        if (typeof f != "undefined") {
                            let u = s.offsetTop - f.offsetTop,
                                {height: p} = de(f);
                            f.scrollTo({
                                top: u - p / 2,
                                behavior: c
                            })
                        }
                    }
                })
            }
            return ee("navigation.tracking") && t.pipe(re(o.pipe(ae(1))), X("offset"), Re(250), He(1), re(n.pipe(He(1))), Ot({
                delay: 250
            }), me(o)).subscribe(([, {prev: i}]) => {
                let a = Oe(),
                    c = i[i.length - 1];
                if (c && c.length) {
                    let [s] = c,
                        {hash: f} = new URL(s.href);
                    a.hash !== f && (a.hash = f, history.replaceState({}, "", `${a}`))
                } else
                    a.hash = "",
                    history.replaceState({}, "", `${a}`)
            }), Fs(e, {
                viewport$: t,
                header$: r
            }).pipe(w(i => o.next(i)), M(() => o.complete()), m(i => H({
                ref: e
            }, i)))
        })
    }
    function Us(e, {viewport$: t, main$: r, target$: n}) {
        let o = t.pipe(m(({offset: {y: a}}) => a), Ce(2, 1), m(([a, c]) => a > c && c > 0), B()),
            i = r.pipe(m(({active: a}) => a));
        return G([i, o]).pipe(m(([a, c]) => !(a && c)), B(), re(n.pipe(He(1))), rr(!0), Ot({
            delay: 250
        }), m(a => ({
            hidden: a
        })))
    }
    function zi(e, {viewport$: t, header$: r, main$: n, target$: o}) {
        let i = new E;
        return i.subscribe({
            next({hidden: a}) {
                e.classList.toggle("md-top--hidden", a),
                a ? (e.setAttribute("tabindex", "-1"), e.blur()) : e.removeAttribute("tabindex")
            },
            complete() {
                e.style.top = "",
                e.classList.add("md-top--hidden"),
                e.removeAttribute("tabindex")
            }
        }), r.pipe(re(i.pipe(rr(0), ae(1))), X("height")).subscribe(({height: a}) => {
            e.style.top = `${a + 16}px`
        }), Us(e, {
            viewport$: t,
            main$: n,
            target$: o
        }).pipe(w(a => i.next(a)), M(() => i.complete()), m(a => H({
            ref: e
        }, a)))
    }
    function qi({document$: e, tablet$: t}) {
        e.pipe(S(() => Q(".md-toggle--indeterminate, [data-md-state=indeterminate]")), w(r => {
            r.indeterminate = !0,
            r.checked = !1
        }), ue(r => v(r, "change").pipe(Nr(() => r.classList.contains("md-toggle--indeterminate")), J(r))), me(t)).subscribe(([r, n]) => {
            r.classList.remove("md-toggle--indeterminate"),
            n && (r.checked = !1)
        })
    }
    function Ws() {
        return /(iPad|iPhone|iPod)/.test(navigator.userAgent)
    }
    function Ki({document$: e}) {
        e.pipe(S(() => Q("[data-md-scrollfix]")), w(t => t.removeAttribute("data-md-scrollfix")), y(Ws), ue(t => v(t, "touchstart").pipe(J(t)))).subscribe(t => {
            let r = t.scrollTop;
            r === 0 ? t.scrollTop = 1 : r + t.offsetHeight === t.scrollHeight && (t.scrollTop = r - 1)
        })
    }
    function Qi({viewport$: e, tablet$: t}) {
        G([mt("search"), t]).pipe(m(([r, n]) => r && !n), S(r => I(r).pipe(ke(r ? 400 : 100))), me(e)).subscribe(([r, {offset: {y: n}}]) => {
            if (r)
                document.body.setAttribute("data-md-scrolllock", ""),
                document.body.style.top = `-${n}px`;
            else {
                let o = -1 * parseInt(document.body.style.top, 10);
                document.body.removeAttribute("data-md-scrolllock"),
                document.body.style.top = "",
                o && window.scrollTo(0, o)
            }
        })
    }
    Object.entries || (Object.entries = function(e) {
        let t = [];
        for (let r of Object.keys(e))
            t.push([r, e[r]]);
        return t
    });
    Object.values || (Object.values = function(e) {
        let t = [];
        for (let r of Object.keys(e))
            t.push(e[r]);
        return t
    });
    typeof Element != "undefined" && (Element.prototype.scrollTo || (Element.prototype.scrollTo = function(e, t) {
        typeof e == "object" ? (this.scrollLeft = e.left, this.scrollTop = e.top) : (this.scrollLeft = e, this.scrollTop = t)
    }), Element.prototype.replaceWith || (Element.prototype.replaceWith = function(...e) {
        let t = this.parentNode;
        if (t) {
            e.length === 0 && t.removeChild(this);
            for (let r = e.length - 1; r >= 0; r--) {
                let n = e[r];
                typeof n != "object" ? n = document.createTextNode(n) : n.parentNode && n.parentNode.removeChild(n),
                r ? t.insertBefore(this.previousSibling, n) : t.replaceChild(n, this)
            }
        }
    }));
    function Ds() {
        return location.protocol === "file:" ? dr(`${new URL("search/search_index.js", nn.base)}`).pipe(m(() => __index), Z(1)) : $e(new URL("search/search_index.json", nn.base))
    }
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
    var Ze = vo(),
        yr = Ho(),
        vt = jo(),
        on = ko(),
        _e = zo(),
        xr = Br("(min-width: 960px)"),
        Bi = Br("(min-width: 1220px)"),
        Gi = Fo(),
        nn = he(),
        Ji = document.forms.namedItem("search") ? Ds() : Se,
        an = new E;
    Ei({
        alert$: an
    });
    ee("navigation.instant") && Si({
        document$: Ze,
        location$: yr,
        viewport$: _e
    });
    var Yi;
    ((Yi = nn.version) == null ? void 0 : Yi.provider) === "mike" && Ri({
        document$: Ze
    });
    A(yr, vt).pipe(ke(125)).subscribe(() => {
        Qe("drawer", !1),
        Qe("search", !1)
    });
    on.pipe(y(({mode: e}) => e === "global")).subscribe(e => {
        switch (e.type) {
        case "p":
        case ",":
            let t = fe("[href][rel=prev]");
            typeof t != "undefined" && t.click();
            break;
        case "n":
        case ".":
            let r = fe("[href][rel=next]");
            typeof r != "undefined" && r.click();
            break
        }
    });
    qi({
        document$: Ze,
        tablet$: xr
    });
    Ki({
        document$: Ze
    });
    Qi({
        viewport$: _e,
        tablet$: xr
    });
    var Ye = vi(Te("header"), {
            viewport$: _e
        }),
        gr = Ze.pipe(m(() => Te("main")), S(e => xi(e, {
            viewport$: _e,
            header$: Ye
        })), Z(1)),
        Vs = A(...ie("consent").map(e => Qo(e, {
            target$: vt
        })), ...ie("dialog").map(e => bi(e, {
            alert$: an
        })), ...ie("header").map(e => gi(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr
        })), ...ie("palette").map(e => wi(e)), ...ie("search").map(e => $i(e, {
            index$: Ji,
            keyboard$: on
        })), ...ie("source").map(e => Di(e))),
        Ns = R(() => A(...ie("announce").map(e => Ko(e)), ...ie("content").map(e => hi(e, {
            target$: vt,
            print$: Gi
        })), ...ie("content").map(e => ee("search.highlight") ? ji(e, {
            index$: Ji,
            location$: yr
        }) : V), ...ie("header-title").map(e => yi(e, {
            viewport$: _e,
            header$: Ye
        })), ...ie("sidebar").map(e => e.getAttribute("data-md-type") === "navigation" ? Gr(Bi, () => rn(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr
        })) : Gr(xr, () => rn(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr
        }))), ...ie("tabs").map(e => Vi(e, {
            viewport$: _e,
            header$: Ye
        })), ...ie("toc").map(e => Ni(e, {
            viewport$: _e,
            header$: Ye,
            target$: vt
        })), ...ie("top").map(e => zi(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr,
            target$: vt
        })))),
        Xi = Ze.pipe(S(() => Ns), Je(Vs), Z(1));
    Xi.subscribe();
    window.document$ = Ze;
    window.location$ = yr;
    window.target$ = vt;
    window.keyboard$ = on;
    window.viewport$ = _e;
    window.tablet$ = xr;
    window.screen$ = Bi;
    window.print$ = Gi;
    window.alert$ = an;
    window.component$ = Xi;
})();

