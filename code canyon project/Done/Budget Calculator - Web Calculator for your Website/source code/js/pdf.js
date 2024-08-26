/**
 * html2pdf v0.8.0
 * Copyright (c) 2017 Erik Koopmans
 * Released under the MIT License.
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.html2pdf = e());
})(this, function () {
    "use strict";
    function t() {
        throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
    }
    function e(t, e) {
        return (e = { exports: {} }), t(e, e.exports), e.exports;
    }
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        r =
            (e(function (e, r) {
                e.exports = (function () {
                    function e(t) {
                        return "function" == typeof t;
                    }
                    function r() {
                        var t = setTimeout;
                        return function () {
                            return t(i, 1);
                        };
                    }
                    function i() {
                        for (var t = 0; t < _; t += 2) {
                            var e = q[t],
                                n = q[t + 1];
                            e(n), (q[t] = void 0), (q[t + 1] = void 0);
                        }
                        _ = 0;
                    }
                    function o(t, e) {
                        var n = arguments,
                            r = this,
                            i = new this.constructor(s);
                        void 0 === i[B] && y(i);
                        var o = r._state;
                        return (
                            o
                                ? (function () {
                                      var t = n[o - 1];
                                      S(function () {
                                          return w(o, i, t, r._result);
                                      });
                                  })()
                                : p(r, i, t, e),
                            i
                        );
                    }
                    function a(t) {
                        if (t && "object" == typeof t && t.constructor === this) return t;
                        var e = new this(s);
                        return h(e, t), e;
                    }
                    function s() {}
                    function c(t) {
                        try {
                            return t.then;
                        } catch (t) {
                            return (N.error = t), N;
                        }
                    }
                    function l(t, n, r) {
                        n.constructor === t.constructor && r === o && n.constructor.resolve === a
                            ? (function (t, e) {
                                  e._state === D
                                      ? d(t, e._result)
                                      : e._state === L
                                      ? f(t, e._result)
                                      : p(
                                            e,
                                            void 0,
                                            function (e) {
                                                return h(t, e);
                                            },
                                            function (e) {
                                                return f(t, e);
                                            }
                                        );
                              })(t, n)
                            : r === N
                            ? (f(t, N.error), (N.error = null))
                            : void 0 === r
                            ? d(t, n)
                            : e(r)
                            ? (function (t, e, n) {
                                  S(function (t) {
                                      var r = !1,
                                          i = (function (t, e, n, r) {
                                              try {
                                                  t.call(e, n, r);
                                              } catch (t) {
                                                  return t;
                                              }
                                          })(
                                              n,
                                              e,
                                              function (n) {
                                                  r || ((r = !0), e !== n ? h(t, n) : d(t, n));
                                              },
                                              function (e) {
                                                  r || ((r = !0), f(t, e));
                                              },
                                              t._label
                                          );
                                      !r && i && ((r = !0), f(t, i));
                                  }, t);
                              })(t, n, r)
                            : d(t, n);
                    }
                    function h(t, e) {
                        t === e
                            ? f(t, new TypeError("You cannot resolve a promise with itself"))
                            : !(function (t) {
                                  var e = typeof t;
                                  return null !== t && ("object" === e || "function" === e);
                              })(e)
                            ? d(t, e)
                            : l(t, e, c(e));
                    }
                    function u(t) {
                        t._onerror && t._onerror(t._result), g(t);
                    }
                    function d(t, e) {
                        t._state === F && ((t._result = e), (t._state = D), 0 !== t._subscribers.length && S(g, t));
                    }
                    function f(t, e) {
                        t._state === F && ((t._state = L), (t._result = e), S(u, t));
                    }
                    function p(t, e, n, r) {
                        var i = t._subscribers,
                            o = i.length;
                        (t._onerror = null), (i[o] = e), (i[o + D] = n), (i[o + L] = r), 0 === o && t._state && S(g, t);
                    }
                    function g(t) {
                        var e = t._subscribers,
                            n = t._state;
                        if (0 !== e.length) {
                            for (var r = void 0, i = void 0, o = t._result, a = 0; a < e.length; a += 3) (r = e[a]), (i = e[a + n]), r ? w(n, r, i, o) : i(o);
                            t._subscribers.length = 0;
                        }
                    }
                    function m() {
                        this.error = null;
                    }
                    function w(t, n, r, i) {
                        var o = e(r),
                            a = void 0,
                            s = void 0,
                            c = void 0,
                            l = void 0;
                        if (o) {
                            if (
                                ((a = (function (t, e) {
                                    try {
                                        return t(e);
                                    } catch (t) {
                                        return (j.error = t), j;
                                    }
                                })(r, i)) === j
                                    ? ((l = !0), (s = a.error), (a.error = null))
                                    : (c = !0),
                                n === a)
                            )
                                return void f(n, new TypeError("A promises callback cannot return that same promise."));
                        } else (a = i), (c = !0);
                        n._state !== F || (o && c ? h(n, a) : l ? f(n, s) : t === D ? d(n, a) : t === L && f(n, a));
                    }
                    function y(t) {
                        (t[B] = M++), (t._state = void 0), (t._result = void 0), (t._subscribers = []);
                    }
                    function v(t, e) {
                        (this._instanceConstructor = t),
                            (this.promise = new t(s)),
                            this.promise[B] || y(this.promise),
                            k(e)
                                ? ((this.length = e.length),
                                  (this._remaining = e.length),
                                  (this._result = new Array(this.length)),
                                  0 === this.length ? d(this.promise, this._result) : ((this.length = this.length || 0), this._enumerate(e), 0 === this._remaining && d(this.promise, this._result)))
                                : f(this.promise, new Error("Array Methods must be provided an Array"));
                    }
                    function b(t) {
                        (this[B] = M++),
                            (this._result = this._state = void 0),
                            (this._subscribers = []),
                            s !== t &&
                                ("function" != typeof t &&
                                    (function () {
                                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                    })(),
                                this instanceof b
                                    ? (function (t, e) {
                                          try {
                                              e(
                                                  function (e) {
                                                      h(t, e);
                                                  },
                                                  function (e) {
                                                      f(t, e);
                                                  }
                                              );
                                          } catch (e) {
                                              f(t, e);
                                          }
                                      })(this, t)
                                    : (function () {
                                          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                                      })());
                    }
                    var x = void 0;
                    x = Array.isArray
                        ? Array.isArray
                        : function (t) {
                              return "[object Array]" === Object.prototype.toString.call(t);
                          };
                    var k = x,
                        _ = 0,
                        C = void 0,
                        T = void 0,
                        S = function (t, e) {
                            (q[_] = t), (q[_ + 1] = e), 2 === (_ += 2) && (T ? T(i) : R());
                        };
                    var E = "undefined" != typeof window ? window : void 0,
                        A = E || {},
                        I = A.MutationObserver || A.WebKitMutationObserver,
                        P = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                        O = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                    var q = new Array(1e3);
                    var R = void 0;
                    R = P
                        ? function () {
                              return process.nextTick(i);
                          }
                        : I
                        ? (function () {
                              var t = 0,
                                  e = new I(i),
                                  n = document.createTextNode("");
                              return (
                                  e.observe(n, { characterData: !0 }),
                                  function () {
                                      n.data = t = ++t % 2;
                                  }
                              );
                          })()
                        : O
                        ? (function () {
                              var t = new MessageChannel();
                              return (
                                  (t.port1.onmessage = i),
                                  function () {
                                      return t.port2.postMessage(0);
                                  }
                              );
                          })()
                        : void 0 === E && "function" == typeof t
                        ? (function () {
                              try {
                                  var e,
                                      n = (e = t)("vertx");
                                  return (
                                      (C = n.runOnLoop || n.runOnContext),
                                      (function () {
                                          if (void 0 !== C)
                                              return function () {
                                                  C(i);
                                              };
                                          return r();
                                      })()
                                  );
                              } catch (t) {
                                  return r();
                              }
                          })()
                        : r();
                    var B = Math.random().toString(36).substring(16);
                    var F = void 0,
                        D = 1,
                        L = 2,
                        N = new m();
                    var j = new m();
                    var M = 0;
                    (v.prototype._enumerate = function (t) {
                        for (var e = 0; this._state === F && e < t.length; e++) this._eachEntry(t[e], e);
                    }),
                        (v.prototype._eachEntry = function (t, e) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === a) {
                                var i = c(t);
                                if (i === o && t._state !== F) this._settledAt(t._state, e, t._result);
                                else if ("function" != typeof i) this._remaining--, (this._result[e] = t);
                                else if (n === b) {
                                    var h = new n(s);
                                    l(h, t, i), this._willSettleAt(h, e);
                                } else
                                    this._willSettleAt(
                                        new n(function (e) {
                                            return e(t);
                                        }),
                                        e
                                    );
                            } else this._willSettleAt(r(t), e);
                        }),
                        (v.prototype._settledAt = function (t, e, n) {
                            var r = this.promise;
                            r._state === F && (this._remaining--, t === L ? f(r, n) : (this._result[e] = n)), 0 === this._remaining && d(r, this._result);
                        }),
                        (v.prototype._willSettleAt = function (t, e) {
                            var n = this;
                            p(
                                t,
                                void 0,
                                function (t) {
                                    return n._settledAt(D, e, t);
                                },
                                function (t) {
                                    return n._settledAt(L, e, t);
                                }
                            );
                        });
                    (b.all = function (t) {
                        return new v(this, t).promise;
                    }),
                        (b.race = function (t) {
                            var e = this;
                            return new e(
                                k(t)
                                    ? function (n, r) {
                                          for (var i = t.length, o = 0; o < i; o++) e.resolve(t[o]).then(n, r);
                                      }
                                    : function (t, e) {
                                          return e(new TypeError("You must pass an array to race."));
                                      }
                            );
                        }),
                        (b.resolve = a),
                        (b.reject = function (t) {
                            var e = new this(s);
                            return f(e, t), e;
                        }),
                        (b._setScheduler = function (t) {
                            T = t;
                        }),
                        (b._setAsap = function (t) {
                            S = t;
                        }),
                        (b._asap = S),
                        (b.prototype = {
                            constructor: b,
                            then: o,
                            catch: function (t) {
                                return this.then(null, t);
                            },
                        });
                    return (
                        (b.polyfill = function () {
                            var t = void 0;
                            if (void 0 !== n) t = n;
                            else if ("undefined" != typeof self) t = self;
                            else
                                try {
                                    t = Function("return this")();
                                } catch (t) {
                                    throw new Error("polyfill failed because global object is unavailable in this environment");
                                }
                            var e = t.Promise;
                            if (e) {
                                var r = null;
                                try {
                                    r = Object.prototype.toString.call(e.resolve());
                                } catch (t) {}
                                if ("[object Promise]" === r && !e.cast) return;
                            }
                            t.Promise = b;
                        }),
                        (b.Promise = b),
                        b
                    );
                })();
            }).polyfill(),
            e(function (e, r) {
                e.exports = (function () {
                    var r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  },
                        i = (function (t) {
                            function n(e, s, l, h) {
                                var u = {};
                                "object" === (void 0 === e ? "undefined" : r(e)) && ((e = (u = e).orientation), (s = u.unit || s), (l = u.format || l), (h = u.compress || u.compressPdf || h)),
                                    (s = s || "mm"),
                                    (l = l || "a4"),
                                    (e = ("" + (e || "P")).toLowerCase()),
                                    ("" + l).toLowerCase();
                                var d,
                                    f,
                                    p,
                                    g,
                                    m,
                                    w,
                                    y,
                                    v,
                                    b,
                                    x = !!h && "function" == typeof Uint8Array,
                                    k = u.textColor || "0 g",
                                    _ = u.drawColor || "0 G",
                                    C = u.fontSize || 16,
                                    T = u.lineHeight || 1.15,
                                    S = u.lineWidth || 0.200025,
                                    E = 2,
                                    A = !1,
                                    I = [],
                                    P = {},
                                    O = {},
                                    q = 0,
                                    R = [],
                                    B = [],
                                    F = [],
                                    D = [],
                                    L = [],
                                    N = 0,
                                    j = 0,
                                    M = 0,
                                    z = { title: "", subject: "", author: "", keywords: "", creator: "" },
                                    U = {},
                                    H = new (function (e) {
                                        var n = {};
                                        (this.subscribe = function (t, e, r) {
                                            if ("function" != typeof e) return !1;
                                            n.hasOwnProperty(t) || (n[t] = {});
                                            var i = Math.random().toString(35);
                                            return (n[t][i] = [e, !!r]), i;
                                        }),
                                            (this.unsubscribe = function (t) {
                                                for (var e in n) if (n[e][t]) return delete n[e][t], !0;
                                                return !1;
                                            }),
                                            (this.publish = function (r) {
                                                if (n.hasOwnProperty(r)) {
                                                    var i = Array.prototype.slice.call(arguments, 1),
                                                        o = [];
                                                    for (var a in n[r]) {
                                                        var s = n[r][a];
                                                        try {
                                                            s[0].apply(e, i);
                                                        } catch (e) {
                                                            t.console && console.error("jsPDF PubSub Error", e.message, e);
                                                        }
                                                        s[1] && o.push(a);
                                                    }
                                                    o.length && o.forEach(this.unsubscribe);
                                                }
                                            });
                                    })(U),
                                    W = u.hotfixes || [],
                                    V = function (t) {
                                        return t.toFixed(2);
                                    },
                                    X = function (t) {
                                        return t.toFixed(3);
                                    },
                                    G = function (t) {
                                        return ("0" + parseInt(t)).slice(-2);
                                    },
                                    Y = function (t) {
                                        A ? R[g].push(t) : ((M += t.length + 1), D.push(t));
                                    },
                                    Q = function () {
                                        return E++, (I[E] = M), Y(E + " 0 obj"), E;
                                    },
                                    J = function (t) {
                                        Y("stream"), Y(t), Y("endstream");
                                    },
                                    K = function () {
                                        var e,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            l,
                                            h,
                                            u,
                                            d = [];
                                        for (l = t.adler32cs || n.adler32cs, x && void 0 === l && (x = !1), e = 1; e <= q; e++) {
                                            if (
                                                (d.push(Q()),
                                                (h = (m = F[e].width) * f),
                                                (u = (w = F[e].height) * f),
                                                Y("<</Type /Page"),
                                                Y("/Parent 1 0 R"),
                                                Y("/Resources 2 0 R"),
                                                Y("/MediaBox [0 0 " + V(h) + " " + V(u) + "]"),
                                                H.publish("putPage", { pageNumber: e, page: R[e] }),
                                                Y("/Contents " + (E + 1) + " 0 R"),
                                                Y(">>"),
                                                Y("endobj"),
                                                (r = R[e].join("\n")),
                                                Q(),
                                                x)
                                            ) {
                                                for (i = [], o = r.length; o--; ) i[o] = r.charCodeAt(o);
                                                (s = l.from(r)),
                                                    (a = new c(6)).append(new Uint8Array(i)),
                                                    (r = a.flush()),
                                                    (i = new Uint8Array(r.length + 6)).set(new Uint8Array([120, 156])),
                                                    i.set(r, 2),
                                                    i.set(new Uint8Array([255 & s, (s >> 8) & 255, (s >> 16) & 255, (s >> 24) & 255]), r.length + 2),
                                                    (r = String.fromCharCode.apply(null, i)),
                                                    Y("<</Length " + r.length + " /Filter [/FlateDecode]>>");
                                            } else Y("<</Length " + r.length + ">>");
                                            J(r), Y("endobj");
                                        }
                                        (I[1] = M), Y("1 0 obj"), Y("<</Type /Pages");
                                        var p = "/Kids [";
                                        for (o = 0; o < q; o++) p += d[o] + " 0 R ";
                                        Y(p + "]"), Y("/Count " + q), Y(">>"), Y("endobj"), H.publish("postPutPages");
                                    },
                                    $ = function (t) {
                                        (t.objectNumber = Q()), Y("<</BaseFont/" + t.PostScriptName + "/Type/Font"), "string" == typeof t.encoding && Y("/Encoding/" + t.encoding), Y("/Subtype/Type1>>"), Y("endobj");
                                    },
                                    Z = function () {
                                        Y("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), Y("/Font <<");
                                        for (var t in P) P.hasOwnProperty(t) && Y("/" + t + " " + P[t].objectNumber + " 0 R");
                                        Y(">>"), Y("/XObject <<"), H.publish("putXobjectDict"), Y(">>");
                                    },
                                    tt = function () {
                                        (function () {
                                            for (var t in P) P.hasOwnProperty(t) && $(P[t]);
                                        })(),
                                            H.publish("putResources"),
                                            (I[2] = M),
                                            Y("2 0 obj"),
                                            Y("<<"),
                                            Z(),
                                            Y(">>"),
                                            Y("endobj"),
                                            H.publish("postPutResources");
                                    },
                                    et = function (t, e, n) {
                                        O.hasOwnProperty(e) || (O[e] = {}), (O[e][n] = t);
                                    },
                                    nt = function (t, e, n, r) {
                                        var i = "F" + (Object.keys(P).length + 1).toString(10),
                                            o = (P[i] = { id: i, PostScriptName: t, fontName: e, fontStyle: n, encoding: r, metadata: {} });
                                        return et(i, e, n), H.publish("addFont", o), i;
                                    },
                                    rt = function (t, e) {
                                        return (function (t, e) {
                                            var n, r, i, o, a, s, c, l, h;
                                            if (
                                                ((e = e || {}),
                                                (i = e.sourceEncoding || "Unicode"),
                                                (a = e.outputEncoding),
                                                (e.autoencode || a) &&
                                                    P[d].metadata &&
                                                    P[d].metadata[i] &&
                                                    P[d].metadata[i].encoding &&
                                                    ((o = P[d].metadata[i].encoding), !a && P[d].encoding && (a = P[d].encoding), !a && o.codePages && (a = o.codePages[0]), "string" == typeof a && (a = o[a]), a))
                                            ) {
                                                for (c = !1, s = [], n = 0, r = t.length; n < r; n++) (l = a[t.charCodeAt(n)]) ? s.push(String.fromCharCode(l)) : s.push(t[n]), s[n].charCodeAt(0) >> 8 && (c = !0);
                                                t = s.join("");
                                            }
                                            for (n = t.length; void 0 === c && 0 !== n; ) t.charCodeAt(n - 1) >> 8 && (c = !0), n--;
                                            if (!c) return t;
                                            for (s = e.noBOM ? [] : [254, 255], n = 0, r = t.length; n < r; n++) {
                                                if (((l = t.charCodeAt(n)), (h = l >> 8) >> 8)) throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                                                s.push(h), s.push(l - (h << 8));
                                            }
                                            return String.fromCharCode.apply(void 0, s);
                                        })(t, e)
                                            .replace(/\\/g, "\\\\")
                                            .replace(/\(/g, "\\(")
                                            .replace(/\)/g, "\\)");
                                    },
                                    it = function () {
                                        (function (t, e) {
                                            var n = "string" == typeof e && e.toLowerCase();
                                            if ("string" == typeof t) {
                                                var r = t.toLowerCase();
                                                o.hasOwnProperty(r) && ((t = o[r][0] / f), (e = o[r][1] / f));
                                            }
                                            if ((Array.isArray(t) && ((e = t[1]), (t = t[0])), n)) {
                                                switch (n.substr(0, 1)) {
                                                    case "l":
                                                        e > t && (n = "s");
                                                        break;
                                                    case "p":
                                                        t > e && (n = "s");
                                                }
                                                "s" === n && ((p = t), (t = e), (e = p));
                                            }
                                            (A = !0), (R[++q] = []), (F[q] = { width: Number(t) || m, height: Number(e) || w }), (B[q] = {}), ot(q);
                                        }.apply(this, arguments),
                                            Y(V(S * f) + " w"),
                                            Y(_),
                                            0 !== N && Y(N + " J"),
                                            0 !== j && Y(j + " j"),
                                            H.publish("addPage", { pageNumber: q }));
                                    },
                                    ot = function (t) {
                                        t > 0 && t <= q && ((g = t), (m = F[t].width), (w = F[t].height));
                                    },
                                    at = function (t, e) {
                                        var n;
                                        switch (((t = void 0 !== t ? t : P[d].fontName), (e = void 0 !== e ? e : P[d].fontStyle), void 0 !== t && (t = t.toLowerCase()), t)) {
                                            case "sans-serif":
                                            case "verdana":
                                            case "arial":
                                            case "helvetica":
                                                t = "helvetica";
                                                break;
                                            case "fixed":
                                            case "monospace":
                                            case "terminal":
                                            case "courier":
                                                t = "courier";
                                                break;
                                            case "serif":
                                            case "cursive":
                                            case "fantasy":
                                            default:
                                                t = "times";
                                        }
                                        try {
                                            n = O[t][e];
                                        } catch (t) {}
                                        return n || (null == (n = O.times[e]) && (n = O.times.normal)), n;
                                    },
                                    st = function () {
                                        (A = !1),
                                            (E = 2),
                                            (M = 0),
                                            (D = []),
                                            (I = []),
                                            (L = []),
                                            H.publish("buildDocument"),
                                            Y("%PDF-" + i),
                                            K(),
                                            (function () {
                                                H.publish("putAdditionalObjects");
                                                for (var t = 0; t < L.length; t++) {
                                                    var e = L[t];
                                                    (I[e.objId] = M), Y(e.objId + " 0 obj"), Y(e.content), Y("endobj");
                                                }
                                                (E += L.length), H.publish("postPutAdditionalObjects");
                                            })(),
                                            tt(),
                                            Q(),
                                            Y("<<"),
                                            (function () {
                                                Y("/Producer (jsPDF " + n.version + ")");
                                                for (var t in z) z.hasOwnProperty(t) && z[t] && Y("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + rt(z[t]) + ")");
                                                var e = new Date(),
                                                    r = e.getTimezoneOffset(),
                                                    i = r < 0 ? "+" : "-",
                                                    o = Math.floor(Math.abs(r / 60)),
                                                    a = Math.abs(r % 60),
                                                    s = [i, G(o), "'", G(a), "'"].join("");
                                                Y(["/CreationDate (D:", e.getFullYear(), G(e.getMonth() + 1), G(e.getDate()), G(e.getHours()), G(e.getMinutes()), G(e.getSeconds()), s, ")"].join(""));
                                            })(),
                                            Y(">>"),
                                            Y("endobj"),
                                            Q(),
                                            Y("<<"),
                                            (function () {
                                                switch ((Y("/Type /Catalog"), Y("/Pages 1 0 R"), v || (v = "fullwidth"), v)) {
                                                    case "fullwidth":
                                                        Y("/OpenAction [3 0 R /FitH null]");
                                                        break;
                                                    case "fullheight":
                                                        Y("/OpenAction [3 0 R /FitV null]");
                                                        break;
                                                    case "fullpage":
                                                        Y("/OpenAction [3 0 R /Fit]");
                                                        break;
                                                    case "original":
                                                        Y("/OpenAction [3 0 R /XYZ null null 1]");
                                                        break;
                                                    default:
                                                        var t = "" + v;
                                                        "%" === t.substr(t.length - 1) && (v = parseInt(v) / 100), "number" == typeof v && Y("/OpenAction [3 0 R /XYZ null null " + V(v) + "]");
                                                }
                                                switch ((b || (b = "continuous"), b)) {
                                                    case "continuous":
                                                        Y("/PageLayout /OneColumn");
                                                        break;
                                                    case "single":
                                                        Y("/PageLayout /SinglePage");
                                                        break;
                                                    case "two":
                                                    case "twoleft":
                                                        Y("/PageLayout /TwoColumnLeft");
                                                        break;
                                                    case "tworight":
                                                        Y("/PageLayout /TwoColumnRight");
                                                }
                                                y && Y("/PageMode /" + y), H.publish("putCatalog");
                                            })(),
                                            Y(">>"),
                                            Y("endobj");
                                        var t,
                                            e = M,
                                            r = "0000000000";
                                        for (Y("xref"), Y("0 " + (E + 1)), Y(r + " 65535 f "), t = 1; t <= E; t++) {
                                            var o = I[t];
                                            Y("function" == typeof o ? (r + I[t]()).slice(-10) + " 00000 n " : (r + I[t]).slice(-10) + " 00000 n ");
                                        }
                                        return Y("trailer"), Y("<<"), Y("/Size " + (E + 1)), Y("/Root " + E + " 0 R"), Y("/Info " + (E - 1) + " 0 R"), Y(">>"), Y("startxref"), Y("" + e), Y("%%EOF"), (A = !0), D.join("\n");
                                    },
                                    ct = function (t) {
                                        var e = "S";
                                        return "F" === t ? (e = "f") : "FD" === t || "DF" === t ? (e = "B") : ("f" !== t && "f*" !== t && "B" !== t && "B*" !== t) || (e = t), e;
                                    },
                                    lt = function () {
                                        for (var t = st(), e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--; ) r[e] = t.charCodeAt(e);
                                        return n;
                                    },
                                    ht = function () {
                                        return new Blob([lt()], { type: "application/pdf" });
                                    },
                                    ut = (function (e) {
                                        return (
                                            (e.foo = function () {
                                                try {
                                                    return e.apply(this, arguments);
                                                } catch (e) {
                                                    var n = e.stack || "";
                                                    ~n.indexOf(" at ") && (n = n.split(" at ")[1]);
                                                    var r = "Error in function " + n.split("\n")[0].split("<")[0] + ": " + e.message;
                                                    if (!t.console) throw new Error(r);
                                                    t.console.error(r, e), t.alert && alert(r);
                                                }
                                            }),
                                            (e.foo.bar = e),
                                            e.foo
                                        );
                                    })(function (e, n) {
                                        var r = "dataur" === ("" + e).substr(0, 6) ? "data:application/pdf;base64," + btoa(st()) : 0;
                                        switch (e) {
                                            case void 0:
                                                return st();
                                            case "save":
                                                if (navigator.getUserMedia && (void 0 === t.URL || void 0 === t.URL.createObjectURL)) return U.output("dataurlnewwindow");
                                                a(ht(), n), "function" == typeof a.unload && t.setTimeout && setTimeout(a.unload, 911);
                                                break;
                                            case "arraybuffer":
                                                return lt();
                                            case "blob":
                                                return ht();
                                            case "bloburi":
                                            case "bloburl":
                                                return (t.URL && t.URL.createObjectURL(ht())) || void 0;
                                            case "datauristring":
                                            case "dataurlstring":
                                                return r;
                                            case "dataurlnewwindow":
                                                var i = t.open(r);
                                                if (i || "undefined" == typeof safari) return i;
                                            case "datauri":
                                            case "dataurl":
                                                return (t.document.location.href = r);
                                            default:
                                                throw new Error('Output type "' + e + '" is not supported.');
                                        }
                                    }),
                                    dt = function (t) {
                                        return !0 === Array.isArray(W) && W.indexOf(t) > -1;
                                    };
                                switch (s) {
                                    case "pt":
                                        f = 1;
                                        break;
                                    case "mm":
                                        f = 72 / 25.4000508;
                                        break;
                                    case "cm":
                                        f = 72 / 2.54000508;
                                        break;
                                    case "in":
                                        f = 72;
                                        break;
                                    case "px":
                                        f = 1 == dt("px_scaling") ? 0.75 : 96 / 72;
                                        break;
                                    case "pc":
                                    case "em":
                                        f = 12;
                                        break;
                                    case "ex":
                                        f = 6;
                                        break;
                                    default:
                                        throw "Invalid unit: " + s;
                                }
                                (U.internal = {
                                    pdfEscape: rt,
                                    getStyle: ct,
                                    getFont: function () {
                                        return P[at.apply(U, arguments)];
                                    },
                                    getFontSize: function () {
                                        return C;
                                    },
                                    getLineHeight: function () {
                                        return C * T;
                                    },
                                    write: function (t) {
                                        Y(1 === arguments.length ? t : Array.prototype.join.call(arguments, " "));
                                    },
                                    getCoordinateString: function (t) {
                                        return V(t * f);
                                    },
                                    getVerticalCoordinateString: function (t) {
                                        return V((w - t) * f);
                                    },
                                    collections: {},
                                    newObject: Q,
                                    newAdditionalObject: function () {
                                        var t = 2 * R.length + 1,
                                            e = { objId: (t += L.length), content: "" };
                                        return L.push(e), e;
                                    },
                                    newObjectDeferred: function () {
                                        return (
                                            E++,
                                            (I[E] = function () {
                                                return M;
                                            }),
                                            E
                                        );
                                    },
                                    newObjectDeferredBegin: function (t) {
                                        I[t] = M;
                                    },
                                    putStream: J,
                                    events: H,
                                    scaleFactor: f,
                                    pageSize: {
                                        get width() {
                                            return m;
                                        },
                                        get height() {
                                            return w;
                                        },
                                    },
                                    output: function (t, e) {
                                        return ut(t, e);
                                    },
                                    getNumberOfPages: function () {
                                        return R.length - 1;
                                    },
                                    pages: R,
                                    out: Y,
                                    f2: V,
                                    getPageInfo: function (t) {
                                        return { objId: 2 * (t - 1) + 3, pageNumber: t, pageContext: B[t] };
                                    },
                                    getCurrentPageInfo: function () {
                                        return { objId: 2 * (g - 1) + 3, pageNumber: g, pageContext: B[g] };
                                    },
                                    getPDFVersion: function () {
                                        return i;
                                    },
                                    hasHotfix: dt,
                                }),
                                    (U.addPage = function () {
                                        return it.apply(this, arguments), this;
                                    }),
                                    (U.setPage = function () {
                                        return ot.apply(this, arguments), this;
                                    }),
                                    (U.insertPage = function (t) {
                                        return this.addPage(), this.movePage(g, t), this;
                                    }),
                                    (U.movePage = function (t, e) {
                                        if (t > e) {
                                            for (var n = R[t], r = F[t], i = B[t], o = t; o > e; o--) (R[o] = R[o - 1]), (F[o] = F[o - 1]), (B[o] = B[o - 1]);
                                            (R[e] = n), (F[e] = r), (B[e] = i), this.setPage(e);
                                        } else if (t < e) {
                                            for (var n = R[t], r = F[t], i = B[t], o = t; o < e; o++) (R[o] = R[o + 1]), (F[o] = F[o + 1]), (B[o] = B[o + 1]);
                                            (R[e] = n), (F[e] = r), (B[e] = i), this.setPage(e);
                                        }
                                        return this;
                                    }),
                                    (U.deletePage = function () {
                                        return (
                                            function (t) {
                                                t > 0 && t <= q && (R.splice(t, 1), F.splice(t, 1), g > --q && (g = q), this.setPage(g));
                                            }.apply(this, arguments),
                                            this
                                        );
                                    }),
                                    (U.setDisplayMode = function (t, e, n) {
                                        if (((v = t), (b = e), (y = n), -1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(n)))
                                            throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + n + '" is not recognized.');
                                        return this;
                                    }),
                                    (U.text = function (t, e, n, r, i, o) {
                                        function a(t) {
                                            return (t = t.split("\t").join(Array(u.TabLen || 9).join(" "))), rt(t, r);
                                        }
                                        "number" == typeof t && ((p = n), (n = e), (e = t), (t = p)),
                                            "string" == typeof t && (t = t.match(/[\n\r]/) ? t.split(/\r\n|\r|\n/g) : [t]),
                                            "string" == typeof i && ((o = i), (i = null)),
                                            "string" == typeof r && ((o = r), (r = null)),
                                            "number" == typeof r && ((i = r), (r = null));
                                        var s = "",
                                            c = "Td";
                                        if (i) {
                                            i *= Math.PI / 180;
                                            var l = Math.cos(i),
                                                h = Math.sin(i);
                                            (s = [V(l), V(h), V(-1 * h), V(l), ""].join(" ")), (c = "Tm");
                                        }
                                        "noBOM" in (r = r || {}) || (r.noBOM = !0), "autoencode" in r || (r.autoencode = !0);
                                        var g = "",
                                            m = this.internal.getCurrentPageInfo().pageContext;
                                        if (
                                            (!0 === r.stroke ? !0 !== m.lastTextWasStroke && ((g = "1 Tr\n"), (m.lastTextWasStroke = !0)) : (m.lastTextWasStroke && (g = "0 Tr\n"), (m.lastTextWasStroke = !1)),
                                            void 0 === this._runningPageHeight && (this._runningPageHeight = 0),
                                            "string" == typeof t)
                                        )
                                            t = a(t);
                                        else {
                                            if ("[object Array]" !== Object.prototype.toString.call(t)) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                                            for (var y = t.concat(), v = [], b = y.length; b--; ) v.push(a(y.shift()));
                                            if (o) {
                                                var x,
                                                    _,
                                                    S,
                                                    E = C * T,
                                                    A = t.map(function (t) {
                                                        return (this.getStringUnitWidth(t) * C) / f;
                                                    }, this);
                                                if (((S = Math.max.apply(Math, A)), "center" === o)) (x = e - S / 2), (e -= A[0] / 2);
                                                else {
                                                    if ("right" !== o) throw new Error('Unrecognized alignment option, use "center" or "right".');
                                                    (x = e - S), (e -= A[0]);
                                                }
                                                (_ = e), (t = v[0]);
                                                for (var I = 1, b = v.length; I < b; I++) {
                                                    var P = S - A[I];
                                                    "center" === o && (P /= 2), (t += ") Tj\n" + (x - _ + P) + " -" + E + " Td (" + v[I]), (_ = x + P);
                                                }
                                            } else t = v.join(") Tj\nT* (");
                                        }
                                        var O;
                                        return (O = V((w - n) * f)), Y("BT\n/" + d + " " + C + " Tf\n" + C * T + " TL\n" + g + k + "\n" + s + V(e * f) + " " + O + " " + c + "\n(" + t + ") Tj\nET"), this;
                                    }),
                                    (U.lstext = function (t, e, n, r) {
                                        console.warn("jsPDF.lstext is deprecated");
                                        for (var i = 0, o = t.length; i < o; i++, e += r) this.text(t[i], e, n);
                                        return this;
                                    }),
                                    (U.line = function (t, e, n, r) {
                                        return this.lines([[n - t, r - e]], t, e);
                                    }),
                                    (U.clip = function () {
                                        Y("W"), Y("S");
                                    }),
                                    (U.clip_fixed = function (t) {
                                        Y("evenodd" === t ? "W*" : "W"), Y("n");
                                    }),
                                    (U.lines = function (t, e, n, r, i, o) {
                                        var a, s, c, l, h, u, d, g, m, y, v;
                                        for ("number" == typeof t && ((p = n), (n = e), (e = t), (t = p)), r = r || [1, 1], Y(X(e * f) + " " + X((w - n) * f) + " m "), a = r[0], s = r[1], l = t.length, y = e, v = n, c = 0; c < l; c++)
                                            2 === (h = t[c]).length
                                                ? ((y = h[0] * a + y), (v = h[1] * s + v), Y(X(y * f) + " " + X((w - v) * f) + " l"))
                                                : ((u = h[0] * a + y),
                                                  (d = h[1] * s + v),
                                                  (g = h[2] * a + y),
                                                  (m = h[3] * s + v),
                                                  (y = h[4] * a + y),
                                                  (v = h[5] * s + v),
                                                  Y(X(u * f) + " " + X((w - d) * f) + " " + X(g * f) + " " + X((w - m) * f) + " " + X(y * f) + " " + X((w - v) * f) + " c"));
                                        return o && Y(" h"), null !== i && Y(ct(i)), this;
                                    }),
                                    (U.rect = function (t, e, n, r, i) {
                                        return ct(i), Y([V(t * f), V((w - e) * f), V(n * f), V(-r * f), "re"].join(" ")), null !== i && Y(ct(i)), this;
                                    }),
                                    (U.triangle = function (t, e, n, r, i, o, a) {
                                        return (
                                            this.lines(
                                                [
                                                    [n - t, r - e],
                                                    [i - n, o - r],
                                                    [t - i, e - o],
                                                ],
                                                t,
                                                e,
                                                [1, 1],
                                                a,
                                                !0
                                            ),
                                            this
                                        );
                                    }),
                                    (U.roundedRect = function (t, e, n, r, i, o, a) {
                                        var s = (4 / 3) * (Math.SQRT2 - 1);
                                        return (
                                            this.lines(
                                                [
                                                    [n - 2 * i, 0],
                                                    [i * s, 0, i, o - o * s, i, o],
                                                    [0, r - 2 * o],
                                                    [0, o * s, -i * s, o, -i, o],
                                                    [2 * i - n, 0],
                                                    [-i * s, 0, -i, -o * s, -i, -o],
                                                    [0, 2 * o - r],
                                                    [0, -o * s, i * s, -o, i, -o],
                                                ],
                                                t + i,
                                                e,
                                                [1, 1],
                                                a
                                            ),
                                            this
                                        );
                                    }),
                                    (U.ellipse = function (t, e, n, r, i) {
                                        var o = (4 / 3) * (Math.SQRT2 - 1) * n,
                                            a = (4 / 3) * (Math.SQRT2 - 1) * r;
                                        return (
                                            Y([V((t + n) * f), V((w - e) * f), "m", V((t + n) * f), V((w - (e - a)) * f), V((t + o) * f), V((w - (e - r)) * f), V(t * f), V((w - (e - r)) * f), "c"].join(" ")),
                                            Y([V((t - o) * f), V((w - (e - r)) * f), V((t - n) * f), V((w - (e - a)) * f), V((t - n) * f), V((w - e) * f), "c"].join(" ")),
                                            Y([V((t - n) * f), V((w - (e + a)) * f), V((t - o) * f), V((w - (e + r)) * f), V(t * f), V((w - (e + r)) * f), "c"].join(" ")),
                                            Y([V((t + o) * f), V((w - (e + r)) * f), V((t + n) * f), V((w - (e + a)) * f), V((t + n) * f), V((w - e) * f), "c"].join(" ")),
                                            null !== i && Y(ct(i)),
                                            this
                                        );
                                    }),
                                    (U.circle = function (t, e, n, r) {
                                        return this.ellipse(t, e, n, n, r);
                                    }),
                                    (U.setProperties = function (t) {
                                        for (var e in z) z.hasOwnProperty(e) && t[e] && (z[e] = t[e]);
                                        return this;
                                    }),
                                    (U.setFontSize = function (t) {
                                        return (C = t), this;
                                    }),
                                    (U.setFont = function (t, e) {
                                        return (d = at(t, e)), this;
                                    }),
                                    (U.setFontStyle = U.setFontType = function (t) {
                                        return (d = at(void 0, t)), this;
                                    }),
                                    (U.getFontList = function () {
                                        var t,
                                            e,
                                            n,
                                            r = {};
                                        for (t in O)
                                            if (O.hasOwnProperty(t)) {
                                                r[t] = n = [];
                                                for (e in O[t]) O[t].hasOwnProperty(e) && n.push(e);
                                            }
                                        return r;
                                    }),
                                    (U.addFont = function (t, e, n) {
                                        nt(t, e, n, "StandardEncoding");
                                    }),
                                    (U.setLineWidth = function (t) {
                                        return Y((t * f).toFixed(2) + " w"), this;
                                    }),
                                    (U.setDrawColor = function (t, e, n, r) {
                                        var i;
                                        return (
                                            (i =
                                                void 0 === e || (void 0 === r && (t === e) === n)
                                                    ? "string" == typeof t
                                                        ? t + " G"
                                                        : V(t / 255) + " G"
                                                    : void 0 === r
                                                    ? "string" == typeof t
                                                        ? [t, e, n, "RG"].join(" ")
                                                        : [V(t / 255), V(e / 255), V(n / 255), "RG"].join(" ")
                                                    : "string" == typeof t
                                                    ? [t, e, n, r, "K"].join(" ")
                                                    : [V(t), V(e), V(n), V(r), "K"].join(" ")),
                                            Y(i),
                                            this
                                        );
                                    }),
                                    (U.setFillColor = function (t, e, n, i) {
                                        var o;
                                        return (
                                            void 0 === e || (void 0 === i && (t === e) === n)
                                                ? (o = "string" == typeof t ? t + " g" : V(t / 255) + " g")
                                                : void 0 === i || "object" === (void 0 === i ? "undefined" : r(i))
                                                ? ((o = "string" == typeof t ? [t, e, n, "rg"].join(" ") : [V(t / 255), V(e / 255), V(n / 255), "rg"].join(" ")), i && 0 === i.a && (o = ["255", "255", "255", "rg"].join(" ")))
                                                : (o = "string" == typeof t ? [t, e, n, i, "k"].join(" ") : [V(t), V(e), V(n), V(i), "k"].join(" ")),
                                            Y(o),
                                            this
                                        );
                                    }),
                                    (U.setTextColor = function (t, e, n) {
                                        if ("string" == typeof t && /^#[0-9A-Fa-f]{6}$/.test(t)) {
                                            var r = parseInt(t.substr(1), 16);
                                            (t = (r >> 16) & 255), (e = (r >> 8) & 255), (n = 255 & r);
                                        }
                                        return (k = (0 === t && 0 === e && 0 === n) || void 0 === e ? X(t / 255) + " g" : [X(t / 255), X(e / 255), X(n / 255), "rg"].join(" ")), this;
                                    }),
                                    (U.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }),
                                    (U.setLineCap = function (t) {
                                        var e = this.CapJoinStyles[t];
                                        if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                                        return (N = e), Y(e + " J"), this;
                                    }),
                                    (U.setLineJoin = function (t) {
                                        var e = this.CapJoinStyles[t];
                                        if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                                        return (j = e), Y(e + " j"), this;
                                    }),
                                    (U.output = ut),
                                    (U.save = function (t) {
                                        U.output("save", t);
                                    });
                                for (var ft in n.API)
                                    n.API.hasOwnProperty(ft) &&
                                        ("events" === ft && n.API.events.length
                                            ? (function (t, e) {
                                                  var n, r, i;
                                                  for (i = e.length - 1; -1 !== i; i--) (n = e[i][0]), (r = e[i][1]), t.subscribe.apply(t, [n].concat("function" == typeof r ? [r] : r));
                                              })(H, n.API.events)
                                            : (U[ft] = n.API[ft]));
                                return (
                                    (function () {
                                        for (
                                            var t = [
                                                    ["Helvetica", "helvetica", "normal"],
                                                    ["Helvetica-Bold", "helvetica", "bold"],
                                                    ["Helvetica-Oblique", "helvetica", "italic"],
                                                    ["Helvetica-BoldOblique", "helvetica", "bolditalic"],
                                                    ["Courier", "courier", "normal"],
                                                    ["Courier-Bold", "courier", "bold"],
                                                    ["Courier-Oblique", "courier", "italic"],
                                                    ["Courier-BoldOblique", "courier", "bolditalic"],
                                                    ["Times-Roman", "times", "normal"],
                                                    ["Times-Bold", "times", "bold"],
                                                    ["Times-Italic", "times", "italic"],
                                                    ["Times-BoldItalic", "times", "bolditalic"],
                                                    ["ZapfDingbats", "zapfdingbats"],
                                                ],
                                                e = 0,
                                                n = t.length;
                                            e < n;
                                            e++
                                        ) {
                                            var r = nt(t[e][0], t[e][1], t[e][2], "StandardEncoding"),
                                                i = t[e][0].split("-");
                                            et(r, i[0], i[1] || "");
                                        }
                                        H.publish("addFonts", { fonts: P, dictionary: O });
                                    })(),
                                    (d = "F1"),
                                    it(l, e),
                                    H.publish("initialized"),
                                    U
                                );
                            }
                            var i = "1.3",
                                o = {
                                    a0: [2383.94, 3370.39],
                                    a1: [1683.78, 2383.94],
                                    a2: [1190.55, 1683.78],
                                    a3: [841.89, 1190.55],
                                    a4: [595.28, 841.89],
                                    a5: [419.53, 595.28],
                                    a6: [297.64, 419.53],
                                    a7: [209.76, 297.64],
                                    a8: [147.4, 209.76],
                                    a9: [104.88, 147.4],
                                    a10: [73.7, 104.88],
                                    b0: [2834.65, 4008.19],
                                    b1: [2004.09, 2834.65],
                                    b2: [1417.32, 2004.09],
                                    b3: [1000.63, 1417.32],
                                    b4: [708.66, 1000.63],
                                    b5: [498.9, 708.66],
                                    b6: [354.33, 498.9],
                                    b7: [249.45, 354.33],
                                    b8: [175.75, 249.45],
                                    b9: [124.72, 175.75],
                                    b10: [87.87, 124.72],
                                    c0: [2599.37, 3676.54],
                                    c1: [1836.85, 2599.37],
                                    c2: [1298.27, 1836.85],
                                    c3: [918.43, 1298.27],
                                    c4: [649.13, 918.43],
                                    c5: [459.21, 649.13],
                                    c6: [323.15, 459.21],
                                    c7: [229.61, 323.15],
                                    c8: [161.57, 229.61],
                                    c9: [113.39, 161.57],
                                    c10: [79.37, 113.39],
                                    dl: [311.81, 623.62],
                                    letter: [612, 792],
                                    "government-letter": [576, 756],
                                    legal: [612, 1008],
                                    "junior-legal": [576, 360],
                                    ledger: [1224, 792],
                                    tabloid: [792, 1224],
                                    "credit-card": [153, 243],
                                };
                            return (n.API = { events: [] }), (n.version = "1.x-master"), e.exports ? (e.exports = n) : (t.jsPDF = n), n;
                        })(("undefined" != typeof self && self) || ("undefined" != typeof window && window) || void 0);
                    (window.AcroForm = function (t) {
                        var e = window.AcroForm;
                        (e.scale = function (t) {
                            return t * (n.internal.scaleFactor / 1);
                        }),
                            (e.antiScale = function (t) {
                                return (1 / n.internal.scaleFactor) * t;
                            });
                        var n = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null };
                        i.API.acroformPlugin = n;
                        var r = function () {
                                for (var t in this.acroformPlugin.acroFormDictionaryRoot.Fields) {
                                    var e = this.acroformPlugin.acroFormDictionaryRoot.Fields[t];
                                    e.hasAnnotation && o.call(this, e);
                                }
                            },
                            o = function (t) {
                                var e = { type: "reference", object: t };
                                i.API.annotationPlugin.annotations[this.internal.getPageInfo(t.page).pageNumber].push(e);
                            },
                            a = function (t) {
                                this.acroformPlugin.printedOut && ((this.acroformPlugin.printedOut = !1), (this.acroformPlugin.acroFormDictionaryRoot = null)),
                                    this.acroformPlugin.acroFormDictionaryRoot ||
                                        function () {
                                            if (this.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
                                            (this.acroformPlugin.acroFormDictionaryRoot = new e.AcroFormDictionary()),
                                                (this.acroformPlugin.internal = this.internal),
                                                (this.acroformPlugin.acroFormDictionaryRoot._eventID = this.internal.events.subscribe("postPutResources", c)),
                                                this.internal.events.subscribe("buildDocument", r),
                                                this.internal.events.subscribe("putCatalog", s),
                                                this.internal.events.subscribe("postPutPages", l);
                                        }.call(this),
                                    this.acroformPlugin.acroFormDictionaryRoot.Fields.push(t);
                            },
                            s = function () {
                                void 0 !== this.acroformPlugin.acroFormDictionaryRoot ? this.internal.write("/AcroForm " + this.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R") : console.log("Root missing...");
                            },
                            c = function () {
                                this.internal.events.unsubscribe(this.acroformPlugin.acroFormDictionaryRoot._eventID), delete this.acroformPlugin.acroFormDictionaryRoot._eventID, (this.acroformPlugin.printedOut = !0);
                            },
                            l = function (t) {
                                var n = !t;
                                t || (this.internal.newObjectDeferredBegin(this.acroformPlugin.acroFormDictionaryRoot.objId), this.internal.out(this.acroformPlugin.acroFormDictionaryRoot.getString()));
                                t = t || this.acroformPlugin.acroFormDictionaryRoot.Kids;
                                for (var r in t) {
                                    var i = t[r],
                                        o = i.Rect;
                                    i.Rect && (i.Rect = e.internal.calculateCoordinates.call(this, i.Rect)), this.internal.newObjectDeferredBegin(i.objId);
                                    var a = "";
                                    if (((a += i.objId + " 0 obj\n"), (a += "<<\n" + i.getContent()), (i.Rect = o), i.hasAppearanceStream && !i.appearanceStreamContent)) {
                                        var s = e.internal.calculateAppearanceStream.call(this, i);
                                        (a += "/AP << /N " + s + " >>\n"), this.acroformPlugin.xForms.push(s);
                                    }
                                    if (i.appearanceStreamContent) {
                                        a += "/AP << ";
                                        for (var c in i.appearanceStreamContent) {
                                            var l = i.appearanceStreamContent[c];
                                            if (((a += "/" + c + " "), (a += "<< "), Object.keys(l).length >= 1 || Array.isArray(l)))
                                                for (var r in l) "function" == typeof (u = l[r]) && (u = u.call(this, i)), (a += "/" + r + " " + u + " "), this.acroformPlugin.xForms.indexOf(u) >= 0 || this.acroformPlugin.xForms.push(u);
                                            else {
                                                var u = l;
                                                "function" == typeof u && (u = u.call(this, i)), (a += "/" + r + " " + u + " \n"), this.acroformPlugin.xForms.indexOf(u) >= 0 || this.acroformPlugin.xForms.push(u);
                                            }
                                            a += " >>\n";
                                        }
                                        a += ">>\n";
                                    }
                                    (a += ">>\nendobj\n"), this.internal.out(a);
                                }
                                n && h.call(this, this.acroformPlugin.xForms);
                            },
                            h = function (t) {
                                for (var e in t) {
                                    var n = e,
                                        r = t[e];
                                    this.internal.newObjectDeferredBegin(r && r.objId);
                                    var i = "";
                                    (i += r ? r.getString() : ""), this.internal.out(i), delete t[n];
                                }
                            };
                        t.addField = function (t) {
                            return (
                                t instanceof e.TextField ? d.call(this, t) : t instanceof e.ChoiceField ? f.call(this, t) : t instanceof e.Button ? u.call(this, t) : t instanceof e.ChildClass ? a.call(this, t) : t && a.call(this, t),
                                (t.page = this.acroformPlugin.internal.getCurrentPageInfo().pageNumber),
                                this
                            );
                        };
                        var u = function (t) {
                                (t = t || new e.Field()).FT = "/Btn";
                                var n = t.Ff || 0;
                                t.pushbutton && ((n = e.internal.setBitPosition(n, 17)), delete t.pushbutton),
                                    t.radio && ((n = e.internal.setBitPosition(n, 16)), delete t.radio),
                                    t.noToggleToOff && (n = e.internal.setBitPosition(n, 15)),
                                    (t.Ff = n),
                                    a.call(this, t);
                            },
                            d = function (t) {
                                (t = t || new e.Field()).FT = "/Tx";
                                var n = t.Ff || 0;
                                t.multiline && (n |= 4096), t.password && (n |= 8192), t.fileSelect && (n |= 1 << 20), t.doNotSpellCheck && (n |= 1 << 22), t.doNotScroll && (n |= 1 << 23), (t.Ff = t.Ff || n), a.call(this, t);
                            },
                            f = function (t) {
                                var n = t || new e.Field();
                                n.FT = "/Ch";
                                var r = n.Ff || 0;
                                n.combo && ((r = e.internal.setBitPosition(r, 18)), delete n.combo),
                                    n.edit && ((r = e.internal.setBitPosition(r, 19)), delete n.edit),
                                    n.sort && ((r = e.internal.setBitPosition(r, 20)), delete n.sort),
                                    n.multiSelect && this.internal.getPDFVersion() >= 1.4 && ((r = e.internal.setBitPosition(r, 22)), delete n.multiSelect),
                                    n.doNotSpellCheck && this.internal.getPDFVersion() >= 1.4 && ((r = e.internal.setBitPosition(r, 23)), delete n.doNotSpellCheck),
                                    (n.Ff = r),
                                    a.call(this, n);
                            };
                    })(i.API);
                    var o = window.AcroForm;
                    (o.internal = {}),
                        (o.createFormXObject = function (t) {
                            var e = new o.FormXObject(),
                                n = o.Appearance.internal.getHeight(t) || 0,
                                r = o.Appearance.internal.getWidth(t) || 0;
                            return (e.BBox = [0, 0, r, n]), e;
                        }),
                        (o.Appearance = {
                            CheckBox: {
                                createAppearanceStream: function () {
                                    return { N: { On: o.Appearance.CheckBox.YesNormal }, D: { On: o.Appearance.CheckBox.YesPushDown, Off: o.Appearance.CheckBox.OffPushDown } };
                                },
                                createMK: function () {
                                    return "<< /CA (3)>>";
                                },
                                YesPushDown: function (t) {
                                    var e = o.createFormXObject(t),
                                        n = "";
                                    t.Q = 1;
                                    var r = o.internal.calculateX(t, "3", "ZapfDingbats", 50);
                                    return (
                                        (n +=
                                            "0.749023 g\n             0 0 " +
                                            o.Appearance.internal.getWidth(t) +
                                            " " +
                                            o.Appearance.internal.getHeight(t) +
                                            " re\n             f\n             BMC\n             q\n             0 0 1 rg\n             /F13 " +
                                            r.fontSize +
                                            " Tf 0 g\n             BT\n"),
                                        (n += r.text),
                                        (n += "ET\n             Q\n             EMC\n"),
                                        (e.stream = n),
                                        e
                                    );
                                },
                                YesNormal: function (t) {
                                    var e = o.createFormXObject(t),
                                        n = "";
                                    t.Q = 1;
                                    var r = o.internal.calculateX(t, "3", "ZapfDingbats", 0.9 * o.Appearance.internal.getHeight(t));
                                    return (
                                        (n +=
                                            "1 g\n0 0 " +
                                            o.Appearance.internal.getWidth(t) +
                                            " " +
                                            o.Appearance.internal.getHeight(t) +
                                            " re\nf\nq\n0 0 1 rg\n0 0 " +
                                            (o.Appearance.internal.getWidth(t) - 1) +
                                            " " +
                                            (o.Appearance.internal.getHeight(t) - 1) +
                                            " re\nW\nn\n0 g\nBT\n/F13 " +
                                            r.fontSize +
                                            " Tf 0 g\n"),
                                        (n += r.text),
                                        (n += "ET\n             Q\n"),
                                        (e.stream = n),
                                        e
                                    );
                                },
                                OffPushDown: function (t) {
                                    var e = o.createFormXObject(t),
                                        n = "";
                                    return (n += "0.749023 g\n            0 0 " + o.Appearance.internal.getWidth(t) + " " + o.Appearance.internal.getHeight(t) + " re\n            f\n"), (e.stream = n), e;
                                },
                            },
                            RadioButton: {
                                Circle: {
                                    createAppearanceStream: function (t) {
                                        var e = { D: { Off: o.Appearance.RadioButton.Circle.OffPushDown }, N: {} };
                                        return (e.N[t] = o.Appearance.RadioButton.Circle.YesNormal), (e.D[t] = o.Appearance.RadioButton.Circle.YesPushDown), e;
                                    },
                                    createMK: function () {
                                        return "<< /CA (l)>>";
                                    },
                                    YesNormal: function (t) {
                                        var e = o.createFormXObject(t),
                                            n = "",
                                            r = o.Appearance.internal.getWidth(t) <= o.Appearance.internal.getHeight(t) ? o.Appearance.internal.getWidth(t) / 4 : o.Appearance.internal.getHeight(t) / 4;
                                        r *= 0.9;
                                        var i = o.Appearance.internal.Bezier_C;
                                        return (
                                            (n +=
                                                "q\n1 0 0 1 " +
                                                o.Appearance.internal.getWidth(t) / 2 +
                                                " " +
                                                o.Appearance.internal.getHeight(t) / 2 +
                                                " cm\n" +
                                                r +
                                                " 0 m\n" +
                                                r +
                                                " " +
                                                r * i +
                                                " " +
                                                r * i +
                                                " " +
                                                r +
                                                " 0 " +
                                                r +
                                                " c\n-" +
                                                r * i +
                                                " " +
                                                r +
                                                " -" +
                                                r +
                                                " " +
                                                r * i +
                                                " -" +
                                                r +
                                                " 0 c\n-" +
                                                r +
                                                " -" +
                                                r * i +
                                                " -" +
                                                r * i +
                                                " -" +
                                                r +
                                                " 0 -" +
                                                r +
                                                " c\n" +
                                                r * i +
                                                " -" +
                                                r +
                                                " " +
                                                r +
                                                " -" +
                                                r * i +
                                                " " +
                                                r +
                                                " 0 c\nf\nQ\n"),
                                            (e.stream = n),
                                            e
                                        );
                                    },
                                    YesPushDown: function (t) {
                                        var e = o.createFormXObject(t),
                                            n = "",
                                            r = o.Appearance.internal.getWidth(t) <= o.Appearance.internal.getHeight(t) ? o.Appearance.internal.getWidth(t) / 4 : o.Appearance.internal.getHeight(t) / 4,
                                            i = 2 * (r *= 0.9),
                                            a = i * o.Appearance.internal.Bezier_C,
                                            s = r * o.Appearance.internal.Bezier_C;
                                        return (
                                            (n +=
                                                "0.749023 g\n            q\n           1 0 0 1 " +
                                                o.Appearance.internal.getWidth(t) / 2 +
                                                " " +
                                                o.Appearance.internal.getHeight(t) / 2 +
                                                " cm\n" +
                                                i +
                                                " 0 m\n" +
                                                i +
                                                " " +
                                                a +
                                                " " +
                                                a +
                                                " " +
                                                i +
                                                " 0 " +
                                                i +
                                                " c\n-" +
                                                a +
                                                " " +
                                                i +
                                                " -" +
                                                i +
                                                " " +
                                                a +
                                                " -" +
                                                i +
                                                " 0 c\n-" +
                                                i +
                                                " -" +
                                                a +
                                                " -" +
                                                a +
                                                " -" +
                                                i +
                                                " 0 -" +
                                                i +
                                                " c\n" +
                                                a +
                                                " -" +
                                                i +
                                                " " +
                                                i +
                                                " -" +
                                                a +
                                                " " +
                                                i +
                                                " 0 c\n            f\n            Q\n            0 g\n            q\n            1 0 0 1 " +
                                                o.Appearance.internal.getWidth(t) / 2 +
                                                " " +
                                                o.Appearance.internal.getHeight(t) / 2 +
                                                " cm\n" +
                                                r +
                                                " 0 m\n" +
                                                r +
                                                " " +
                                                s +
                                                " " +
                                                s +
                                                " " +
                                                r +
                                                " 0 " +
                                                r +
                                                " c\n-" +
                                                s +
                                                " " +
                                                r +
                                                " -" +
                                                r +
                                                " " +
                                                s +
                                                " -" +
                                                r +
                                                " 0 c\n-" +
                                                r +
                                                " -" +
                                                s +
                                                " -" +
                                                s +
                                                " -" +
                                                r +
                                                " 0 -" +
                                                r +
                                                " c\n" +
                                                s +
                                                " -" +
                                                r +
                                                " " +
                                                r +
                                                " -" +
                                                s +
                                                " " +
                                                r +
                                                " 0 c\n            f\n            Q\n"),
                                            (e.stream = n),
                                            e
                                        );
                                    },
                                    OffPushDown: function (t) {
                                        var e = o.createFormXObject(t),
                                            n = "",
                                            r = o.Appearance.internal.getWidth(t) <= o.Appearance.internal.getHeight(t) ? o.Appearance.internal.getWidth(t) / 4 : o.Appearance.internal.getHeight(t) / 4,
                                            i = 2 * (r *= 0.9),
                                            a = i * o.Appearance.internal.Bezier_C;
                                        return (
                                            (n +=
                                                "0.749023 g\n            q\n 1 0 0 1 " +
                                                o.Appearance.internal.getWidth(t) / 2 +
                                                " " +
                                                o.Appearance.internal.getHeight(t) / 2 +
                                                " cm\n" +
                                                i +
                                                " 0 m\n" +
                                                i +
                                                " " +
                                                a +
                                                " " +
                                                a +
                                                " " +
                                                i +
                                                " 0 " +
                                                i +
                                                " c\n-" +
                                                a +
                                                " " +
                                                i +
                                                " -" +
                                                i +
                                                " " +
                                                a +
                                                " -" +
                                                i +
                                                " 0 c\n-" +
                                                i +
                                                " -" +
                                                a +
                                                " -" +
                                                a +
                                                " -" +
                                                i +
                                                " 0 -" +
                                                i +
                                                " c\n" +
                                                a +
                                                " -" +
                                                i +
                                                " " +
                                                i +
                                                " -" +
                                                a +
                                                " " +
                                                i +
                                                " 0 c\n            f\n            Q\n"),
                                            (e.stream = n),
                                            e
                                        );
                                    },
                                },
                                Cross: {
                                    createAppearanceStream: function (t) {
                                        var e = { D: { Off: o.Appearance.RadioButton.Cross.OffPushDown }, N: {} };
                                        return (e.N[t] = o.Appearance.RadioButton.Cross.YesNormal), (e.D[t] = o.Appearance.RadioButton.Cross.YesPushDown), e;
                                    },
                                    createMK: function () {
                                        return "<< /CA (8)>>";
                                    },
                                    YesNormal: function (t) {
                                        var e = o.createFormXObject(t),
                                            n = "",
                                            r = o.Appearance.internal.calculateCross(t);
                                        return (
                                            (n +=
                                                "q\n            1 1 " +
                                                (o.Appearance.internal.getWidth(t) - 2) +
                                                " " +
                                                (o.Appearance.internal.getHeight(t) - 2) +
                                                " re\n            W\n            n\n            " +
                                                r.x1.x +
                                                " " +
                                                r.x1.y +
                                                " m\n            " +
                                                r.x2.x +
                                                " " +
                                                r.x2.y +
                                                " l\n            " +
                                                r.x4.x +
                                                " " +
                                                r.x4.y +
                                                " m\n            " +
                                                r.x3.x +
                                                " " +
                                                r.x3.y +
                                                " l\n            s\n            Q\n"),
                                            (e.stream = n),
                                            e
                                        );
                                    },
                                    YesPushDown: function (t) {
                                        var e = o.createFormXObject(t),
                                            n = o.Appearance.internal.calculateCross(t),
                                            r = "";
                                        return (
                                            (r +=
                                                "0.749023 g\n            0 0 " +
                                                o.Appearance.internal.getWidth(t) +
                                                " " +
                                                o.Appearance.internal.getHeight(t) +
                                                " re\n            f\n            q\n            1 1 " +
                                                (o.Appearance.internal.getWidth(t) - 2) +
                                                " " +
                                                (o.Appearance.internal.getHeight(t) - 2) +
                                                " re\n            W\n            n\n            " +
                                                n.x1.x +
                                                " " +
                                                n.x1.y +
                                                " m\n            " +
                                                n.x2.x +
                                                " " +
                                                n.x2.y +
                                                " l\n            " +
                                                n.x4.x +
                                                " " +
                                                n.x4.y +
                                                " m\n            " +
                                                n.x3.x +
                                                " " +
                                                n.x3.y +
                                                " l\n            s\n            Q\n"),
                                            (e.stream = r),
                                            e
                                        );
                                    },
                                    OffPushDown: function (t) {
                                        var e = o.createFormXObject(t),
                                            n = "";
                                        return (n += "0.749023 g\n            0 0 " + o.Appearance.internal.getWidth(t) + " " + o.Appearance.internal.getHeight(t) + " re\n            f\n"), (e.stream = n), e;
                                    },
                                },
                            },
                            createDefaultAppearanceStream: function (t) {
                                var e = "";
                                return (e += "/Helv 0 Tf 0 g");
                            },
                        }),
                        (o.Appearance.internal = {
                            Bezier_C: 0.551915024494,
                            calculateCross: function (t) {
                                var e = o.Appearance.internal.getWidth(t),
                                    n = o.Appearance.internal.getHeight(t),
                                    r = (function (t, e) {
                                        return t > n ? n : t;
                                    })(e);
                                return { x1: { x: (e - r) / 2, y: (n - r) / 2 + r }, x2: { x: (e - r) / 2 + r, y: (n - r) / 2 }, x3: { x: (e - r) / 2, y: (n - r) / 2 }, x4: { x: (e - r) / 2 + r, y: (n - r) / 2 + r } };
                            },
                        }),
                        (o.Appearance.internal.getWidth = function (t) {
                            return t.Rect[2];
                        }),
                        (o.Appearance.internal.getHeight = function (t) {
                            return t.Rect[3];
                        }),
                        (o.internal.inherit = function (t, e) {
                            (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t);
                        }),
                        (o.internal.arrayToPdfArray = function (t) {
                            if (Array.isArray(t)) {
                                var e = " [";
                                for (var n in t) (e += t[n].toString()), (e += n < t.length - 1 ? " " : "");
                                return (e += "]");
                            }
                        }),
                        (o.internal.toPdfString = function (t) {
                            return 0 !== (t = t || "").indexOf("(") && (t = "(" + t), ")" != t.substring(t.length - 1) && (t += "("), t;
                        }),
                        (o.PDFObject = function () {
                            var t;
                            Object.defineProperty(this, "objId", {
                                get: function () {
                                    return (
                                        t || (this.internal ? (t = this.internal.newObjectDeferred()) : i.API.acroformPlugin.internal && (t = i.API.acroformPlugin.internal.newObjectDeferred())),
                                        t || console.log("Couldn't create Object ID"),
                                        t
                                    );
                                },
                                configurable: !1,
                            });
                        }),
                        (o.PDFObject.prototype.toString = function () {
                            return this.objId + " 0 R";
                        }),
                        (o.PDFObject.prototype.getString = function () {
                            var t = this.objId + " 0 obj\n<<";
                            return (t += this.getContent() + ">>\n"), this.stream && ((t += "stream\n"), (t += this.stream), (t += "endstream\n")), (t += "endobj\n");
                        }),
                        (o.PDFObject.prototype.getContent = function () {
                            var t = "";
                            return (t += (function (t) {
                                var e = "",
                                    n = Object.keys(t).filter(function (t) {
                                        return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1);
                                    });
                                for (var r in n) {
                                    var i = n[r],
                                        a = t[i];
                                    a && (Array.isArray(a) ? (e += "/" + i + " " + o.internal.arrayToPdfArray(a) + "\n") : a instanceof o.PDFObject ? (e += "/" + i + " " + a.objId + " 0 R\n") : (e += "/" + i + " " + a + "\n"));
                                }
                                return e;
                            })(this));
                        }),
                        (o.FormXObject = function () {
                            o.PDFObject.call(this), (this.Type = "/XObject"), (this.Subtype = "/Form"), (this.FormType = 1), this.BBox, this.Matrix, (this.Resources = "2 0 R"), this.PieceInfo;
                            var t;
                            Object.defineProperty(this, "Length", {
                                enumerable: !0,
                                get: function () {
                                    return void 0 !== t ? t.length : 0;
                                },
                            }),
                                Object.defineProperty(this, "stream", {
                                    enumerable: !1,
                                    set: function (e) {
                                        t = e;
                                    },
                                    get: function () {
                                        return t || null;
                                    },
                                });
                        }),
                        o.internal.inherit(o.FormXObject, o.PDFObject),
                        (o.AcroFormDictionary = function () {
                            o.PDFObject.call(this);
                            var t = [];
                            Object.defineProperty(this, "Kids", {
                                enumerable: !1,
                                configurable: !0,
                                get: function () {
                                    return t.length > 0 ? t : void 0;
                                },
                            }),
                                Object.defineProperty(this, "Fields", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function () {
                                        return t;
                                    },
                                }),
                                this.DA;
                        }),
                        o.internal.inherit(o.AcroFormDictionary, o.PDFObject),
                        (o.Field = function () {
                            o.PDFObject.call(this);
                            var t;
                            Object.defineProperty(this, "Rect", {
                                enumerable: !0,
                                configurable: !1,
                                get: function () {
                                    if (t) return t;
                                },
                                set: function (e) {
                                    t = e;
                                },
                            });
                            var e = "";
                            Object.defineProperty(this, "FT", {
                                enumerable: !0,
                                set: function (t) {
                                    e = t;
                                },
                                get: function () {
                                    return e;
                                },
                            });
                            var n;
                            Object.defineProperty(this, "T", {
                                enumerable: !0,
                                configurable: !1,
                                set: function (t) {
                                    n = t;
                                },
                                get: function () {
                                    if (!n || n.length < 1) {
                                        if (this instanceof o.ChildClass) return;
                                        return "(FieldObject" + o.Field.FieldNum++ + ")";
                                    }
                                    return "(" == n.substring(0, 1) && n.substring(n.length - 1) ? n : "(" + n + ")";
                                },
                            });
                            var r;
                            Object.defineProperty(this, "DA", {
                                enumerable: !0,
                                get: function () {
                                    if (r) return "(" + r + ")";
                                },
                                set: function (t) {
                                    r = t;
                                },
                            });
                            var i;
                            Object.defineProperty(this, "DV", {
                                enumerable: !0,
                                configurable: !0,
                                get: function () {
                                    if (i) return i;
                                },
                                set: function (t) {
                                    i = t;
                                },
                            }),
                                Object.defineProperty(this, "Type", {
                                    enumerable: !0,
                                    get: function () {
                                        return this.hasAnnotation ? "/Annot" : null;
                                    },
                                }),
                                Object.defineProperty(this, "Subtype", {
                                    enumerable: !0,
                                    get: function () {
                                        return this.hasAnnotation ? "/Widget" : null;
                                    },
                                }),
                                this.BG,
                                Object.defineProperty(this, "hasAnnotation", {
                                    enumerable: !1,
                                    get: function () {
                                        return !!(this.Rect || this.BC || this.BG);
                                    },
                                }),
                                Object.defineProperty(this, "hasAppearanceStream", { enumerable: !1, configurable: !0, writable: !0 }),
                                Object.defineProperty(this, "page", { enumerable: !1, configurable: !0, writable: !0 });
                        }),
                        (o.Field.FieldNum = 0),
                        o.internal.inherit(o.Field, o.PDFObject),
                        (o.ChoiceField = function () {
                            o.Field.call(this),
                                (this.FT = "/Ch"),
                                (this.Opt = []),
                                (this.V = "()"),
                                (this.TI = 0),
                                (this.combo = !1),
                                Object.defineProperty(this, "edit", {
                                    enumerable: !0,
                                    set: function (t) {
                                        1 == t ? ((this._edit = !0), (this.combo = !0)) : (this._edit = !1);
                                    },
                                    get: function () {
                                        return !!this._edit && this._edit;
                                    },
                                    configurable: !1,
                                }),
                                (this.hasAppearanceStream = !0),
                                Object.defineProperty(this, "V", {
                                    get: function () {
                                        o.internal.toPdfString();
                                    },
                                });
                        }),
                        o.internal.inherit(o.ChoiceField, o.Field),
                        (window.ChoiceField = o.ChoiceField),
                        (o.ListBox = function () {
                            o.ChoiceField.call(this);
                        }),
                        o.internal.inherit(o.ListBox, o.ChoiceField),
                        (window.ListBox = o.ListBox),
                        (o.ComboBox = function () {
                            o.ListBox.call(this), (this.combo = !0);
                        }),
                        o.internal.inherit(o.ComboBox, o.ListBox),
                        (window.ComboBox = o.ComboBox),
                        (o.EditBox = function () {
                            o.ComboBox.call(this), (this.edit = !0);
                        }),
                        o.internal.inherit(o.EditBox, o.ComboBox),
                        (window.EditBox = o.EditBox),
                        (o.Button = function () {
                            o.Field.call(this), (this.FT = "/Btn");
                        }),
                        o.internal.inherit(o.Button, o.Field),
                        (window.Button = o.Button),
                        (o.PushButton = function () {
                            o.Button.call(this), (this.pushbutton = !0);
                        }),
                        o.internal.inherit(o.PushButton, o.Button),
                        (window.PushButton = o.PushButton),
                        (o.RadioButton = function () {
                            o.Button.call(this), (this.radio = !0);
                            var t = [];
                            Object.defineProperty(this, "Kids", {
                                enumerable: !0,
                                get: function () {
                                    if (t.length > 0) return t;
                                },
                            }),
                                Object.defineProperty(this, "__Kids", {
                                    get: function () {
                                        return t;
                                    },
                                });
                            var e;
                            Object.defineProperty(this, "noToggleToOff", {
                                enumerable: !1,
                                get: function () {
                                    return e;
                                },
                                set: function (t) {
                                    e = t;
                                },
                            });
                        }),
                        o.internal.inherit(o.RadioButton, o.Button),
                        (window.RadioButton = o.RadioButton),
                        (o.ChildClass = function (t, e) {
                            o.Field.call(this),
                                (this.Parent = t),
                                (this._AppearanceType = o.Appearance.RadioButton.Circle),
                                (this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(e)),
                                (this.F = o.internal.setBitPosition(this.F, 3, 1)),
                                (this.MK = this._AppearanceType.createMK()),
                                (this.AS = "/Off"),
                                (this._Name = e);
                        }),
                        o.internal.inherit(o.ChildClass, o.Field),
                        (o.RadioButton.prototype.setAppearance = function (t) {
                            if ("createAppearanceStream" in t && "createMK" in t)
                                for (var e in this.__Kids) {
                                    var n = this.__Kids[e];
                                    (n.appearanceStreamContent = t.createAppearanceStream(n._Name)), (n.MK = t.createMK());
                                }
                            else console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
                        }),
                        (o.RadioButton.prototype.createOption = function (t) {
                            var e = new o.ChildClass(this, t);
                            return this.__Kids.push(e), i.API.addField(e), e;
                        }),
                        (o.CheckBox = function () {
                            Button.call(this), (this.appearanceStreamContent = o.Appearance.CheckBox.createAppearanceStream()), (this.MK = o.Appearance.CheckBox.createMK()), (this.AS = "/On"), (this.V = "/On");
                        }),
                        o.internal.inherit(o.CheckBox, o.Button),
                        (window.CheckBox = o.CheckBox),
                        (o.TextField = function () {
                            o.Field.call(this), (this.DA = o.Appearance.createDefaultAppearanceStream()), (this.F = 4);
                            var t;
                            Object.defineProperty(this, "V", {
                                get: function () {
                                    return t ? "(" + t + ")" : t;
                                },
                                enumerable: !0,
                                set: function (e) {
                                    t = e;
                                },
                            });
                            var e;
                            Object.defineProperty(this, "DV", {
                                get: function () {
                                    return e ? "(" + e + ")" : e;
                                },
                                enumerable: !0,
                                set: function (t) {
                                    e = t;
                                },
                            });
                            var n = !1;
                            Object.defineProperty(this, "multiline", {
                                enumerable: !1,
                                get: function () {
                                    return n;
                                },
                                set: function (t) {
                                    n = t;
                                },
                            });
                            var r = !1;
                            Object.defineProperty(this, "MaxLen", {
                                enumerable: !0,
                                get: function () {
                                    return r;
                                },
                                set: function (t) {
                                    r = t;
                                },
                            }),
                                Object.defineProperty(this, "hasAppearanceStream", {
                                    enumerable: !1,
                                    get: function () {
                                        return this.V || this.DV;
                                    },
                                });
                        }),
                        o.internal.inherit(o.TextField, o.Field),
                        (window.TextField = o.TextField),
                        (o.PasswordField = function () {
                            TextField.call(this), Object.defineProperty(this, "password", { value: !0, enumerable: !1, configurable: !1, writable: !1 });
                        }),
                        o.internal.inherit(o.PasswordField, o.TextField),
                        (window.PasswordField = o.PasswordField),
                        (o.internal.calculateFontSpace = function (t, e, n) {
                            var n = n || "helvetica",
                                r = o.internal.calculateFontSpace.canvas || (o.internal.calculateFontSpace.canvas = document.createElement("canvas"));
                            (s = r.getContext("2d")).save();
                            var i = e + " " + n;
                            s.font = i;
                            var a = s.measureText(t);
                            s.fontcolor = "black";
                            var s = r.getContext("2d");
                            return (a.height = 1.5 * s.measureText("3").width), s.restore(), a;
                        }),
                        (o.internal.calculateX = function (t, e, n, r) {
                            var r = r || 12,
                                n = n || "helvetica",
                                i = { text: "", fontSize: "" },
                                a = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
                                s = r,
                                c = o.Appearance.internal.getHeight(t) || 0;
                            c = c < 0 ? -c : c;
                            var l = o.Appearance.internal.getWidth(t) || 0;
                            (l = l < 0 ? -l : l), s++;
                            t: for (;;) {
                                e = "";
                                s--;
                                var h = o.internal.calculateFontSpace("3", s + "px", n).height,
                                    u = t.multiline ? c - s : (c - h) / 2,
                                    d = -2,
                                    f = (u += 2),
                                    p = 0,
                                    g = 0,
                                    m = 0;
                                if (0 == s) {
                                    (s = 12), (e = "(...) Tj\n"), (e += "% Width of Text: " + o.internal.calculateFontSpace(e, "1px").width + ", FieldWidth:" + l + "\n");
                                    break;
                                }
                                m = o.internal.calculateFontSpace(a[0] + " ", s + "px", n).width;
                                var w = "",
                                    y = 0;
                                for (var v in a) {
                                    w = " " == (w += a[v] + " ").substr(w.length - 1) ? w.substr(0, w.length - 1) : w;
                                    var b = parseInt(v);
                                    m = o.internal.calculateFontSpace(w + " ", s + "px", n).width;
                                    var x = (function (t, e, r) {
                                            if (t + 1 < a.length) {
                                                var i = e + " " + a[t + 1];
                                                return o.internal.calculateFontSpace(i, r + "px", n).width <= l - 4;
                                            }
                                            return !1;
                                        })(b, w, s),
                                        k = v >= a.length - 1;
                                    if (!x || k) {
                                        if (x || k) {
                                            if (k) g = b;
                                            else if (t.multiline && (h + 2) * (y + 2) + 2 > c) continue t;
                                        } else {
                                            if (!t.multiline) continue t;
                                            if ((h + 2) * (y + 2) + 2 > c) continue t;
                                            g = b;
                                        }
                                        for (var _ = "", C = p; C <= g; C++) _ += a[C] + " ";
                                        switch (((_ = " " == _.substr(_.length - 1) ? _.substr(0, _.length - 1) : _), (m = o.internal.calculateFontSpace(_, s + "px", n).width), t.Q)) {
                                            case 2:
                                                d = l - m - 2;
                                                break;
                                            case 1:
                                                d = (l - m) / 2;
                                                break;
                                            case 0:
                                            default:
                                                d = 2;
                                        }
                                        (e += d + " " + f + " Td\n"), (e += "(" + _ + ") Tj\n"), (e += -d + " 0 Td\n"), (f = -(s + 2)), (m = 0), (p = g + 1), y++, (w = "");
                                    } else w += " ";
                                }
                                break;
                            }
                            return (i.text = e), (i.fontSize = s), i;
                        }),
                        (o.internal.calculateAppearanceStream = function (t) {
                            if (t.appearanceStreamContent) return t.appearanceStreamContent;
                            if (t.V || t.DV) {
                                var e = "",
                                    n = t.V || t.DV,
                                    r = o.internal.calculateX(t, n);
                                (e += "/Tx BMC\nq\n/F1 " + r.fontSize + " Tf\n1 0 0 1 0 0 Tm\n"), (e += "BT\n"), (e += r.text), (e += "ET\n"), (e += "Q\nEMC\n");
                                var i = new o.createFormXObject(t);
                                return (i.stream = e), i;
                            }
                        }),
                        (o.internal.calculateCoordinates = function (t, e, n, r) {
                            var i = {};
                            if (this.internal) {
                                var a = function (t) {
                                    return t * this.internal.scaleFactor;
                                };
                                Array.isArray(t)
                                    ? ((t[0] = o.scale(t[0])),
                                      (t[1] = o.scale(t[1])),
                                      (t[2] = o.scale(t[2])),
                                      (t[3] = o.scale(t[3])),
                                      (i.lowerLeft_X = t[0] || 0),
                                      (i.lowerLeft_Y = a.call(this, this.internal.pageSize.height) - t[3] - t[1] || 0),
                                      (i.upperRight_X = t[0] + t[2] || 0),
                                      (i.upperRight_Y = a.call(this, this.internal.pageSize.height) - t[1] || 0))
                                    : ((t = o.scale(t)),
                                      (e = o.scale(e)),
                                      (n = o.scale(n)),
                                      (r = o.scale(r)),
                                      (i.lowerLeft_X = t || 0),
                                      (i.lowerLeft_Y = this.internal.pageSize.height - e || 0),
                                      (i.upperRight_X = t + n || 0),
                                      (i.upperRight_Y = this.internal.pageSize.height - e + r || 0));
                            } else
                                Array.isArray(t)
                                    ? ((i.lowerLeft_X = t[0] || 0), (i.lowerLeft_Y = t[1] || 0), (i.upperRight_X = t[0] + t[2] || 0), (i.upperRight_Y = t[1] + t[3] || 0))
                                    : ((i.lowerLeft_X = t || 0), (i.lowerLeft_Y = e || 0), (i.upperRight_X = t + n || 0), (i.upperRight_Y = e + r || 0));
                            return [i.lowerLeft_X, i.lowerLeft_Y, i.upperRight_X, i.upperRight_Y];
                        }),
                        (o.internal.calculateColor = function (t, e, n) {
                            var r = new Array(3);
                            return (r.r = 0 | t), (r.g = 0 | e), (r.b = 0 | n), r;
                        }),
                        (o.internal.getBitPosition = function (t, e) {
                            var n = 1;
                            return (n <<= e - 1), (t = t || 0) | n;
                        }),
                        (o.internal.setBitPosition = function (t, e, n) {
                            t = t || 0;
                            var r = 1;
                            if (((r <<= e - 1), 1 == (n = n || 1))) t |= r;
                            else t = t & ~r;
                            return t;
                        }),
                        (i.API.addHTML = function (t, e, n, r, i) {
                            if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML) throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
                            "number" != typeof e && ((r = e), (i = n)), "function" == typeof r && ((i = r), (r = null));
                            var o = this.internal,
                                a = o.scaleFactor,
                                s = o.pageSize.width,
                                c = o.pageSize.height;
                            if (
                                ((r = r || {}),
                                (r.onrendered = function (t) {
                                    (e = parseInt(e) || 0), (n = parseInt(n) || 0);
                                    var o = r.dim || {},
                                        l = o.h || 0,
                                        h = o.w || Math.min(s, t.width / a) - e,
                                        u = "JPEG";
                                    if ((r.format && (u = r.format), t.height > c && r.pagesplit)) {
                                        var d = function () {
                                            for (var r = 0; ; ) {
                                                var o = document.createElement("canvas");
                                                (o.width = Math.min(s * a, t.width)), (o.height = Math.min(c * a, t.height - r)), o.getContext("2d").drawImage(t, 0, r, t.width, o.height, 0, 0, o.width, o.height);
                                                var l = [o, e, r ? 0 : n, o.width / a, o.height / a, u, null, "SLOW"];
                                                if ((this.addImage.apply(this, l), (r += o.height) >= t.height)) break;
                                                this.addPage();
                                            }
                                            i(h, r, null, l);
                                        }.bind(this);
                                        if ("CANVAS" === t.nodeName) {
                                            var f = new Image();
                                            (f.onload = d), (f.src = t.toDataURL("image/png")), (t = f);
                                        } else d();
                                    } else {
                                        var p = Math.random().toString(35),
                                            g = [t, e, n, h, l, u, p, "SLOW"];
                                        this.addImage.apply(this, g), i(h, l, p, g);
                                    }
                                }.bind(this)),
                                "undefined" != typeof html2canvas && !r.rstz)
                            )
                                return html2canvas(t, r);
                            if ("undefined" != typeof rasterizeHTML) {
                                var l = "drawDocument";
                                return (
                                    "string" == typeof t && (l = /^http/.test(t) ? "drawURL" : "drawHTML"),
                                    (r.width = r.width || s * a),
                                    rasterizeHTML[l](t, void 0, r).then(
                                        function (t) {
                                            r.onrendered(t.image);
                                        },
                                        function (t) {
                                            i(null, t);
                                        }
                                    )
                                );
                            }
                            return null;
                        }),
                        (function (t) {
                            var e = ["jpeg", "jpg", "png"],
                                n = function t(e) {
                                    var n = this.internal.newObject(),
                                        r = this.internal.write,
                                        i = this.internal.putStream;
                                    if (
                                        ((e.n = n),
                                        r("<</Type /XObject"),
                                        r("/Subtype /Image"),
                                        r("/Width " + e.w),
                                        r("/Height " + e.h),
                                        e.cs === this.color_spaces.INDEXED
                                            ? r("/ColorSpace [/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + ("smask" in e ? n + 2 : n + 1) + " 0 R]")
                                            : (r("/ColorSpace /" + e.cs), e.cs === this.color_spaces.DEVICE_CMYK && r("/Decode [1 0 1 0 1 0 1 0]")),
                                        r("/BitsPerComponent " + e.bpc),
                                        "f" in e && r("/Filter /" + e.f),
                                        "dp" in e && r("/DecodeParms <<" + e.dp + ">>"),
                                        "trns" in e && e.trns.constructor == Array)
                                    ) {
                                        for (var o = "", a = 0, s = e.trns.length; a < s; a++) o += e.trns[a] + " " + e.trns[a] + " ";
                                        r("/Mask [" + o + "]");
                                    }
                                    if (("smask" in e && r("/SMask " + (n + 1) + " 0 R"), r("/Length " + e.data.length + ">>"), i(e.data), r("endobj"), "smask" in e)) {
                                        var c = "/Predictor " + e.p + " /Colors 1 /BitsPerComponent " + e.bpc + " /Columns " + e.w,
                                            l = { w: e.w, h: e.h, cs: "DeviceGray", bpc: e.bpc, dp: c, data: e.smask };
                                        "f" in e && (l.f = e.f), t.call(this, l);
                                    }
                                    e.cs === this.color_spaces.INDEXED && (this.internal.newObject(), r("<< /Length " + e.pal.length + ">>"), i(this.arrayBufferToBinaryString(new Uint8Array(e.pal))), r("endobj"));
                                },
                                i = function () {
                                    var t = this.internal.collections.addImage_images;
                                    for (var e in t) n.call(this, t[e]);
                                },
                                o = function () {
                                    var t,
                                        e = this.internal.collections.addImage_images,
                                        n = this.internal.write;
                                    for (var r in e) n("/I" + (t = e[r]).i, t.n, "0", "R");
                                },
                                a = function (e) {
                                    return e && "string" == typeof e && (e = e.toUpperCase()), e in t.image_compression ? e : t.image_compression.NONE;
                                },
                                s = function () {
                                    var t = this.internal.collections.addImage_images;
                                    return t || ((this.internal.collections.addImage_images = t = {}), this.internal.events.subscribe("putResources", i), this.internal.events.subscribe("putXobjectDict", o)), t;
                                },
                                c = function (e) {
                                    return "string" == typeof e && t.sHashCode(e);
                                },
                                l = function (e) {
                                    return "function" != typeof t["process" + e.toUpperCase()];
                                },
                                h = function (t) {
                                    return "object" === (void 0 === t ? "undefined" : r(t)) && 1 === t.nodeType;
                                },
                                u = function (t, e) {
                                    var n;
                                    if (e)
                                        for (var r in e)
                                            if (t === e[r].alias) {
                                                n = e[r];
                                                break;
                                            }
                                    return n;
                                },
                                d = function (t, e, n, r, i, o, a) {
                                    var s = function (t, e, n) {
                                            return (
                                                t || e || ((t = -96), (e = -96)),
                                                t < 0 && (t = (-1 * n.w * 72) / t / this.internal.scaleFactor),
                                                e < 0 && (e = (-1 * n.h * 72) / e / this.internal.scaleFactor),
                                                0 === t && (t = (e * n.w) / n.h),
                                                0 === e && (e = (t * n.h) / n.w),
                                                [t, e]
                                            );
                                        }.call(this, n, r, i),
                                        c = this.internal.getCoordinateString,
                                        l = this.internal.getVerticalCoordinateString;
                                    (n = s[0]), (r = s[1]), (a[o] = i), this.internal.write("q", c(n), "0 0", c(r), c(t), l(e + r), "cm /I" + i.i, "Do Q");
                                };
                            (t.color_spaces = {
                                DEVICE_RGB: "DeviceRGB",
                                DEVICE_GRAY: "DeviceGray",
                                DEVICE_CMYK: "DeviceCMYK",
                                CAL_GREY: "CalGray",
                                CAL_RGB: "CalRGB",
                                LAB: "Lab",
                                ICC_BASED: "ICCBased",
                                INDEXED: "Indexed",
                                PATTERN: "Pattern",
                                SEPARATION: "Separation",
                                DEVICE_N: "DeviceN",
                            }),
                                (t.decode = {
                                    DCT_DECODE: "DCTDecode",
                                    FLATE_DECODE: "FlateDecode",
                                    LZW_DECODE: "LZWDecode",
                                    JPX_DECODE: "JPXDecode",
                                    JBIG2_DECODE: "JBIG2Decode",
                                    ASCII85_DECODE: "ASCII85Decode",
                                    ASCII_HEX_DECODE: "ASCIIHexDecode",
                                    RUN_LENGTH_DECODE: "RunLengthDecode",
                                    CCITT_FAX_DECODE: "CCITTFaxDecode",
                                }),
                                (t.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }),
                                (t.sHashCode = function (t) {
                                    return (
                                        Array.prototype.reduce &&
                                        t.split("").reduce(function (t, e) {
                                            return (t = (t << 5) - t + e.charCodeAt(0)) & t;
                                        }, 0)
                                    );
                                }),
                                (t.isString = function (t) {
                                    return "string" == typeof t;
                                }),
                                (t.extractInfoFromBase64DataURI = function (t) {
                                    return /^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t);
                                }),
                                (t.supportsArrayBuffer = function () {
                                    return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
                                }),
                                (t.isArrayBuffer = function (t) {
                                    return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer;
                                }),
                                (t.isArrayBufferView = function (t) {
                                    return (
                                        !!this.supportsArrayBuffer() &&
                                        "undefined" != typeof Uint32Array &&
                                        (t instanceof Int8Array ||
                                            t instanceof Uint8Array ||
                                            ("undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray) ||
                                            t instanceof Int16Array ||
                                            t instanceof Uint16Array ||
                                            t instanceof Int32Array ||
                                            t instanceof Uint32Array ||
                                            t instanceof Float32Array ||
                                            t instanceof Float64Array)
                                    );
                                }),
                                (t.binaryStringToUint8Array = function (t) {
                                    for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++) n[r] = t.charCodeAt(r);
                                    return n;
                                }),
                                (t.arrayBufferToBinaryString = function (t) {
                                    if ("function" == typeof window.atob) return atob(this.arrayBufferToBase64(t));
                                    for (var e = this.isArrayBuffer(t) ? t : new Uint8Array(t), n = "", r = Math.round(e.byteLength / 20480), i = 0; i < r; i++) n += String.fromCharCode.apply(null, e.slice(20480 * i, 20480 * i + 20480));
                                    return n;
                                }),
                                (t.arrayBufferToBase64 = function (t) {
                                    for (var e, n, r, i, o = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = new Uint8Array(t), c = s.byteLength, l = c % 3, h = c - l, u = 0; u < h; u += 3)
                                        (e = (258048 & (i = (s[u] << 16) | (s[u + 1] << 8) | s[u + 2])) >> 12), (n = (4032 & i) >> 6), (r = 63 & i), (o += a[(16515072 & i) >> 18] + a[e] + a[n] + a[r]);
                                    return (
                                        1 == l
                                            ? ((e = (3 & (i = s[h])) << 4), (o += a[(252 & i) >> 2] + a[e] + "=="))
                                            : 2 == l && ((e = (1008 & (i = (s[h] << 8) | s[h + 1])) >> 4), (n = (15 & i) << 2), (o += a[(64512 & i) >> 10] + a[e] + a[n] + "=")),
                                        o
                                    );
                                }),
                                (t.createImageInfo = function (t, e, n, r, i, o, a, s, c, l, h, u, d) {
                                    var f = { alias: s, w: e, h: n, cs: r, bpc: i, i: a, data: t };
                                    return o && (f.f = o), c && (f.dp = c), l && (f.trns = l), h && (f.pal = h), u && (f.smask = u), d && (f.p = d), f;
                                }),
                                (t.addImage = function (t, n, i, o, f, p, g, m, w) {
                                    if ("string" != typeof n) {
                                        var y = p;
                                        (p = f), (f = o), (o = i), (i = n), (n = y);
                                    }
                                    if ("object" === (void 0 === t ? "undefined" : r(t)) && !h(t) && "imageData" in t) {
                                        var v = t;
                                        (t = v.imageData), (n = v.format || n), (i = v.x || i || 0), (o = v.y || o || 0), (f = v.w || f), (p = v.h || p), (g = v.alias || g), (m = v.compression || m), (w = v.rotation || v.angle || w);
                                    }
                                    if (isNaN(i) || isNaN(o)) throw (console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage"));
                                    var b,
                                        x = s.call(this);
                                    if (!(b = u(t, x))) {
                                        var k;
                                        if (
                                            (h(t) &&
                                                (t = (function (t, e, n) {
                                                    if ("IMG" === t.nodeName && t.hasAttribute("src")) {
                                                        var i = "" + t.getAttribute("src");
                                                        if (!n && 0 === i.indexOf("data:image/")) return i;
                                                        !e && /\.png(?:[?#].*)?$/i.test(i) && (e = "png");
                                                    }
                                                    if ("CANVAS" === t.nodeName) var o = t;
                                                    else {
                                                        ((o = document.createElement("canvas")).width = t.clientWidth || t.width), (o.height = t.clientHeight || t.height);
                                                        var a = o.getContext("2d");
                                                        if (!a) throw "addImage requires canvas to be supported by browser.";
                                                        if (n) {
                                                            var s,
                                                                c,
                                                                l,
                                                                h,
                                                                u,
                                                                d,
                                                                f,
                                                                p,
                                                                g = Math.PI / 180;
                                                            "object" === (void 0 === n ? "undefined" : r(n)) && ((s = n.x), (c = n.y), (l = n.bg), (n = n.angle)),
                                                                (p = n * g),
                                                                (h = Math.abs(Math.cos(p))),
                                                                (u = Math.abs(Math.sin(p))),
                                                                (d = o.width),
                                                                (f = o.height),
                                                                (o.width = f * u + d * h),
                                                                (o.height = f * h + d * u),
                                                                isNaN(s) && (s = o.width / 2),
                                                                isNaN(c) && (c = o.height / 2),
                                                                a.clearRect(0, 0, o.width, o.height),
                                                                (a.fillStyle = l || "white"),
                                                                a.fillRect(0, 0, o.width, o.height),
                                                                a.save(),
                                                                a.translate(s, c),
                                                                a.rotate(p),
                                                                a.drawImage(t, -d / 2, -f / 2),
                                                                a.rotate(-p),
                                                                a.translate(-s, -c),
                                                                a.restore();
                                                        } else a.drawImage(t, 0, 0, o.width, o.height);
                                                    }
                                                    return o.toDataURL("png" == ("" + e).toLowerCase() ? "image/png" : "image/jpeg");
                                                })(t, n, w)),
                                            (function (t) {
                                                return void 0 === t || null === t;
                                            })(g) && (g = c(t)),
                                            !(b = u(g, x)))
                                        ) {
                                            if (this.isString(t)) {
                                                var _ = this.extractInfoFromBase64DataURI(t);
                                                _ ? ((n = _[2]), (t = atob(_[3]))) : 137 === t.charCodeAt(0) && 80 === t.charCodeAt(1) && 78 === t.charCodeAt(2) && 71 === t.charCodeAt(3) && (n = "png");
                                            }
                                            if (
                                                ((n = (n || "JPEG").toLowerCase()),
                                                (function (t) {
                                                    return -1 === e.indexOf(t);
                                                })(n))
                                            )
                                                throw new Error("addImage currently only supports formats " + e + ", not '" + n + "'");
                                            if (l(n)) throw new Error("please ensure that the plugin for '" + n + "' support is added");
                                            if (
                                                (this.supportsArrayBuffer() && (t instanceof Uint8Array || ((k = t), (t = this.binaryStringToUint8Array(t)))),
                                                !(b = this["process" + n.toUpperCase()](
                                                    t,
                                                    (function (t) {
                                                        var e = 0;
                                                        return (
                                                            t &&
                                                                (e = Object.keys
                                                                    ? Object.keys(t).length
                                                                    : (function (t) {
                                                                          var e = 0;
                                                                          for (var n in t) t.hasOwnProperty(n) && e++;
                                                                          return e;
                                                                      })(t)),
                                                            e
                                                        );
                                                    })(x),
                                                    g,
                                                    a(m),
                                                    k
                                                )))
                                            )
                                                throw new Error("An unkwown error occurred whilst processing the image");
                                        }
                                    }
                                    return d.call(this, i, o, f, p, b, b.i, x), this;
                                });
                            var f = function (t, e) {
                                return t.subarray(e, e + 5);
                            };
                            (t.processJPEG = function (t, e, n, r, i) {
                                var o,
                                    a = this.color_spaces.DEVICE_RGB,
                                    s = this.decode.DCT_DECODE;
                                return this.isString(t)
                                    ? ((o = (function (t) {
                                          var e, n, r;
                                          if (
                                              255 === !t.charCodeAt(0) ||
                                              216 === !t.charCodeAt(1) ||
                                              255 === !t.charCodeAt(2) ||
                                              224 === !t.charCodeAt(3) ||
                                              !t.charCodeAt(6) === "J".charCodeAt(0) ||
                                              !t.charCodeAt(7) === "F".charCodeAt(0) ||
                                              !t.charCodeAt(8) === "I".charCodeAt(0) ||
                                              !t.charCodeAt(9) === "F".charCodeAt(0) ||
                                              0 === !t.charCodeAt(10)
                                          )
                                              throw new Error("getJpegSize requires a binary string jpeg file");
                                          for (var i = 256 * t.charCodeAt(4) + t.charCodeAt(5), o = 4, a = t.length; o < a; ) {
                                              if (((o += i), 255 !== t.charCodeAt(o))) throw new Error("getJpegSize could not find the size of the image");
                                              if (
                                                  192 === t.charCodeAt(o + 1) ||
                                                  193 === t.charCodeAt(o + 1) ||
                                                  194 === t.charCodeAt(o + 1) ||
                                                  195 === t.charCodeAt(o + 1) ||
                                                  196 === t.charCodeAt(o + 1) ||
                                                  197 === t.charCodeAt(o + 1) ||
                                                  198 === t.charCodeAt(o + 1) ||
                                                  199 === t.charCodeAt(o + 1)
                                              )
                                                  return (n = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6)), (e = 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8)), (r = t.charCodeAt(o + 9)), [e, n, r];
                                              (o += 2), (i = 256 * t.charCodeAt(o) + t.charCodeAt(o + 1));
                                          }
                                      })(t)),
                                      this.createImageInfo(t, o[0], o[1], 1 == o[3] ? this.color_spaces.DEVICE_GRAY : a, 8, s, e, n))
                                    : (this.isArrayBuffer(t) && (t = new Uint8Array(t)),
                                      this.isArrayBufferView(t)
                                          ? ((o = (function (t) {
                                                if (65496 != ((t[0] << 8) | t[1])) throw new Error("Supplied data is not a JPEG");
                                                for (var e, n, r, i, o = t.length, a = (t[4] << 8) + t[5], s = 4; s < o; ) {
                                                    if (((s += a), (e = f(t, s)), (a = (e[2] << 8) + e[3]), (192 === e[1] || 194 === e[1]) && 255 === e[0] && a > 7))
                                                        return (e = f(t, s + 5)), (n = (e[2] << 8) + e[3]), (r = (e[0] << 8) + e[1]), (i = e[4]), { width: n, height: r, numcomponents: i };
                                                    s += 2;
                                                }
                                                throw new Error("getJpegSizeFromBytes could not find the size of the image");
                                            })(t)),
                                            (t = i || this.arrayBufferToBinaryString(t)),
                                            this.createImageInfo(t, o.width, o.height, 1 == o.numcomponents ? this.color_spaces.DEVICE_GRAY : a, 8, s, e, n))
                                          : null);
                            }),
                                (t.processJPG = function () {
                                    return this.processJPEG.apply(this, arguments);
                                });
                        })(i.API),
                        (function (t) {
                            var e = {
                                annotations: [],
                                f2: function (t) {
                                    return t.toFixed(2);
                                },
                                notEmpty: function (t) {
                                    if (void 0 !== t && "" != t) return !0;
                                },
                            };
                            (i.API.annotationPlugin = e),
                                i.API.events.push([
                                    "addPage",
                                    function (t) {
                                        this.annotationPlugin.annotations[t.pageNumber] = [];
                                    },
                                ]),
                                t.events.push([
                                    "putPage",
                                    function (t) {
                                        for (var n = this.annotationPlugin.annotations[t.pageNumber], r = !1, i = 0; i < n.length && !r; i++)
                                            switch ((l = n[i]).type) {
                                                case "link":
                                                    if (e.notEmpty(l.options.url) || e.notEmpty(l.options.pageNumber)) {
                                                        r = !0;
                                                        break;
                                                    }
                                                case "reference":
                                                case "text":
                                                case "freetext":
                                                    r = !0;
                                            }
                                        if (0 != r) {
                                            this.internal.write("/Annots [");
                                            for (var o = this.annotationPlugin.f2, a = this.internal.scaleFactor, s = this.internal.pageSize.height, c = this.internal.getPageInfo(t.pageNumber), i = 0; i < n.length; i++) {
                                                var l = n[i];
                                                switch (l.type) {
                                                    case "reference":
                                                        this.internal.write(" " + l.object.objId + " 0 R ");
                                                        break;
                                                    case "text":
                                                        var h = this.internal.newAdditionalObject(),
                                                            u = this.internal.newAdditionalObject(),
                                                            d = l.title || "Note";
                                                        (w =
                                                            "<</Type /Annot /Subtype /Text " +
                                                            (p = "/Rect [" + o(l.bounds.x * a) + " " + o(s - (l.bounds.y + l.bounds.h) * a) + " " + o((l.bounds.x + l.bounds.w) * a) + " " + o((s - l.bounds.y) * a) + "] ") +
                                                            "/Contents (" +
                                                            l.contents +
                                                            ")"),
                                                            (w += " /Popup " + u.objId + " 0 R"),
                                                            (w += " /P " + c.objId + " 0 R"),
                                                            (w += " /T (" + d + ") >>"),
                                                            (h.content = w);
                                                        var f = h.objId + " 0 R";
                                                        (w =
                                                            "<</Type /Annot /Subtype /Popup " +
                                                            (p = "/Rect [" + o((l.bounds.x + 30) * a) + " " + o(s - (l.bounds.y + l.bounds.h) * a) + " " + o((l.bounds.x + l.bounds.w + 30) * a) + " " + o((s - l.bounds.y) * a) + "] ") +
                                                            " /Parent " +
                                                            f),
                                                            l.open && (w += " /Open true"),
                                                            (w += " >>"),
                                                            (u.content = w),
                                                            this.internal.write(h.objId, "0 R", u.objId, "0 R");
                                                        break;
                                                    case "freetext":
                                                        var p = "/Rect [" + o(l.bounds.x * a) + " " + o((s - l.bounds.y) * a) + " " + o(l.bounds.x + l.bounds.w * a) + " " + o(s - (l.bounds.y + l.bounds.h) * a) + "] ",
                                                            g = l.color || "#000000";
                                                        (w = "<</Type /Annot /Subtype /FreeText " + p + "/Contents (" + l.contents + ")"),
                                                            (w += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + g + ")"),
                                                            (w += " /Border [0 0 0]"),
                                                            (w += " >>"),
                                                            this.internal.write(w);
                                                        break;
                                                    case "link":
                                                        if (l.options.name) {
                                                            var m = this.annotations._nameMap[l.options.name];
                                                            (l.options.pageNumber = m.page), (l.options.top = m.y);
                                                        } else l.options.top || (l.options.top = 0);
                                                        var p = "/Rect [" + o(l.x * a) + " " + o((s - l.y) * a) + " " + o((l.x + l.w) * a) + " " + o((s - (l.y + l.h)) * a) + "] ",
                                                            w = "";
                                                        if (l.options.url) w = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /A <</S /URI /URI (" + l.options.url + ") >>";
                                                        else if (l.options.pageNumber)
                                                            switch (
                                                                ((w = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /Dest [" + (t = this.internal.getPageInfo(l.options.pageNumber)).objId + " 0 R"),
                                                                (l.options.magFactor = l.options.magFactor || "XYZ"),
                                                                l.options.magFactor)
                                                            ) {
                                                                case "Fit":
                                                                    w += " /Fit]";
                                                                    break;
                                                                case "FitH":
                                                                    w += " /FitH " + l.options.top + "]";
                                                                    break;
                                                                case "FitV":
                                                                    (l.options.left = l.options.left || 0), (w += " /FitV " + l.options.left + "]");
                                                                    break;
                                                                case "XYZ":
                                                                default:
                                                                    var y = o((s - l.options.top) * a);
                                                                    (l.options.left = l.options.left || 0), void 0 === l.options.zoom && (l.options.zoom = 0), (w += " /XYZ " + l.options.left + " " + y + " " + l.options.zoom + "]");
                                                            }
                                                        "" != w && ((w += " >>"), this.internal.write(w));
                                                }
                                            }
                                            this.internal.write("]");
                                        }
                                    },
                                ]),
                                (t.createAnnotation = function (t) {
                                    switch (t.type) {
                                        case "link":
                                            this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                                            break;
                                        case "text":
                                        case "freetext":
                                            this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t);
                                    }
                                }),
                                (t.link = function (t, e, n, r, i) {
                                    this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({ x: t, y: e, w: n, h: r, options: i, type: "link" });
                                }),
                                (t.textWithLink = function (t, e, n, r) {
                                    var i = this.getTextWidth(t),
                                        o = this.internal.getLineHeight() / this.internal.scaleFactor;
                                    return this.text(t, e, n), (n += 0.2 * o), this.link(e, n - o, i, o, r), i;
                                }),
                                (t.getTextWidth = function (t) {
                                    var e = this.internal.getFontSize();
                                    return (this.getStringUnitWidth(t) * e) / this.internal.scaleFactor;
                                }),
                                (t.getLineHeight = function () {
                                    return this.internal.getLineHeight();
                                });
                        })(i.API),
                        (i.API.autoPrint = function () {
                            var t;
                            return (
                                this.internal.events.subscribe("postPutResources", function () {
                                    (t = this.internal.newObject()), this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj");
                                }),
                                this.internal.events.subscribe("putCatalog", function () {
                                    this.internal.write("/OpenAction " + t + " 0 R");
                                }),
                                this
                            );
                        }),
                        (function (t) {
                            t.events.push([
                                "initialized",
                                function () {
                                    this.canvas.pdf = this;
                                },
                            ]),
                                (t.canvas = {
                                    getContext: function (t) {
                                        return (this.pdf.context2d._canvas = this), this.pdf.context2d;
                                    },
                                    style: {},
                                }),
                                Object.defineProperty(t.canvas, "width", {
                                    get: function () {
                                        return this._width;
                                    },
                                    set: function (t) {
                                        (this._width = t), (this.getContext("2d").pageWrapX = t + 1);
                                    },
                                }),
                                Object.defineProperty(t.canvas, "height", {
                                    get: function () {
                                        return this._height;
                                    },
                                    set: function (t) {
                                        (this._height = t), (this.getContext("2d").pageWrapY = t + 1);
                                    },
                                });
                        })(i.API),
                        (function (t) {
                            var e,
                                n,
                                r,
                                i,
                                o = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 },
                                a = 1,
                                s = function (t, e, n, r, i) {
                                    o = { x: t, y: e, w: n, h: r, ln: i };
                                },
                                c = function () {
                                    return o;
                                },
                                l = { left: 0, top: 0, bottom: 0 };
                            (t.setHeaderFunction = function (t) {
                                i = t;
                            }),
                                (t.getTextDimensions = function (t) {
                                    (e = this.internal.getFont().fontName), (n = this.table_font_size || this.internal.getFontSize()), (r = this.internal.getFont().fontStyle);
                                    var i, o;
                                    (o = document.createElement("font")).id = "jsPDFCell";
                                    try {
                                        o.style.fontStyle = r;
                                    } catch (t) {
                                        o.style.fontWeight = r;
                                    }
                                    (o.style.fontName = e), (o.style.fontSize = n + "pt");
                                    try {
                                        o.textContent = t;
                                    } catch (e) {
                                        o.innerText = t;
                                    }
                                    return document.body.appendChild(o), (i = { w: (o.offsetWidth + 1) * (19.049976 / 25.4), h: (o.offsetHeight + 1) * (19.049976 / 25.4) }), document.body.removeChild(o), i;
                                }),
                                (t.cellAddPage = function () {
                                    var t = this.margins || l;
                                    this.addPage(), s(t.left, t.top, void 0, void 0), (a += 1);
                                }),
                                (t.cellInitialize = function () {
                                    (o = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }), (a = 1);
                                }),
                                (t.cell = function (t, e, n, r, i, o, a) {
                                    var h = c(),
                                        u = !1;
                                    if (void 0 !== h.ln)
                                        if (h.ln === o) (t = h.x + h.w), (e = h.y);
                                        else {
                                            var d = this.margins || l;
                                            h.y + h.h + r + 13 >= this.internal.pageSize.height - d.bottom && (this.cellAddPage(), (u = !0), this.printHeaders && this.tableHeaderRow && this.printHeaderRow(o, !0)),
                                                (e = c().y + c().h),
                                                u && (e = 23);
                                        }
                                    if (void 0 !== i[0])
                                        if ((this.printingHeaderRow ? this.rect(t, e, n, r, "FD") : this.rect(t, e, n, r), "right" === a)) {
                                            i instanceof Array || (i = [i]);
                                            for (var f = 0; f < i.length; f++) {
                                                var p = i[f],
                                                    g = this.getStringUnitWidth(p) * this.internal.getFontSize();
                                                this.text(p, t + n - g - 3, e + this.internal.getLineHeight() * (f + 1));
                                            }
                                        } else this.text(i, t + 3, e + this.internal.getLineHeight());
                                    return s(t, e, n, r, o), this;
                                }),
                                (t.arrayMax = function (t, e) {
                                    var n,
                                        r,
                                        i,
                                        o = t[0];
                                    for (n = 0, r = t.length; n < r; n += 1) (i = t[n]), e ? -1 === e(o, i) && (o = i) : i > o && (o = i);
                                    return o;
                                }),
                                (t.table = function (e, n, r, i, s) {
                                    if (!r) throw "No data for PDF table";
                                    var c,
                                        h,
                                        u,
                                        d,
                                        f,
                                        p,
                                        g,
                                        m,
                                        w,
                                        y,
                                        v = [],
                                        b = [],
                                        x = {},
                                        k = {},
                                        _ = [],
                                        C = [],
                                        T = !1,
                                        S = !0,
                                        E = 12,
                                        A = l;
                                    if (
                                        ((A.width = this.internal.pageSize.width),
                                        s &&
                                            (!0 === s.autoSize && (T = !0),
                                            !1 === s.printHeaders && (S = !1),
                                            s.fontSize && (E = s.fontSize),
                                            s.css && void 0 !== s.css["font-size"] && (E = 16 * s.css["font-size"]),
                                            s.margins && (A = s.margins)),
                                        (this.lnMod = 0),
                                        (o = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }),
                                        (a = 1),
                                        (this.printHeaders = S),
                                        (this.margins = A),
                                        this.setFontSize(E),
                                        (this.table_font_size = E),
                                        void 0 === i || null === i)
                                    )
                                        v = Object.keys(r[0]);
                                    else if (i[0] && "string" != typeof i[0]) for (h = 0, u = i.length; h < u; h += 1) (c = i[h]), v.push(c.name), b.push(c.prompt), (k[c.name] = c.width * (19.049976 / 25.4));
                                    else v = i;
                                    if (T)
                                        for (
                                            y = function (t) {
                                                return t[c];
                                            },
                                                h = 0,
                                                u = v.length;
                                            h < u;
                                            h += 1
                                        ) {
                                            for (x[(c = v[h])] = r.map(y), _.push(this.getTextDimensions(b[h] || c).w), g = 0, d = (p = x[c]).length; g < d; g += 1) (f = p[g]), _.push(this.getTextDimensions(f).w);
                                            (k[c] = t.arrayMax(_)), (_ = []);
                                        }
                                    if (S) {
                                        for (I = this.calculateLineHeight(v, k, b.length ? b : v), h = 0, u = v.length; h < u; h += 1) (c = v[h]), C.push([e, n, k[c], I, String(b.length ? b[h] : c)]);
                                        this.setTableHeaderRow(C), this.printHeaderRow(1, !1);
                                    }
                                    for (h = 0, u = r.length; h < u; h += 1) {
                                        var I;
                                        for (m = r[h], I = this.calculateLineHeight(v, k, m), g = 0, w = v.length; g < w; g += 1) (c = v[g]), this.cell(e, n, k[c], I, m[c], h + 2, c.align);
                                    }
                                    return (this.lastCellPos = o), (this.table_x = e), (this.table_y = n), this;
                                }),
                                (t.calculateLineHeight = function (t, e, n) {
                                    for (var r, i = 0, o = 0; o < t.length; o++) {
                                        n[(r = t[o])] = this.splitTextToSize(String(n[r]), e[r] - 3);
                                        var a = this.internal.getLineHeight() * n[r].length + 3;
                                        a > i && (i = a);
                                    }
                                    return i;
                                }),
                                (t.setTableHeaderRow = function (t) {
                                    this.tableHeaderRow = t;
                                }),
                                (t.printHeaderRow = function (t, e) {
                                    if (!this.tableHeaderRow) throw "Property tableHeaderRow does not exist.";
                                    var n, r, o, c;
                                    if (((this.printingHeaderRow = !0), void 0 !== i)) {
                                        var l = i(this, a);
                                        s(l[0], l[1], l[2], l[3], -1);
                                    }
                                    this.setFontStyle("bold");
                                    var h = [];
                                    for (o = 0, c = this.tableHeaderRow.length; o < c; o += 1)
                                        this.setFillColor(200, 200, 200),
                                            (n = this.tableHeaderRow[o]),
                                            e && ((this.margins.top = 13), (n[1] = (this.margins && this.margins.top) || 0), h.push(n)),
                                            (r = [].concat(n)),
                                            this.cell.apply(this, r.concat(t));
                                    h.length > 0 && this.setTableHeaderRow(h), this.setFontStyle("normal"), (this.printingHeaderRow = !1);
                                });
                        })(i.API),
                        (function (t) {
                            function e() {
                                (this._isStrokeTransparent = !1),
                                    (this._strokeOpacity = 1),
                                    (this.strokeStyle = "#000000"),
                                    (this.fillStyle = "#000000"),
                                    (this._isFillTransparent = !1),
                                    (this._fillOpacity = 1),
                                    (this.font = "12pt times"),
                                    (this.textBaseline = "alphabetic"),
                                    (this.textAlign = "start"),
                                    (this.lineWidth = 1),
                                    (this.lineJoin = "miter"),
                                    (this.lineCap = "butt"),
                                    (this._transform = [1, 0, 0, 1, 0, 0]),
                                    (this.globalCompositeOperation = "normal"),
                                    (this.globalAlpha = 1),
                                    (this._clip_path = []),
                                    (this.ignoreClearRect = !1),
                                    (this.copy = function (t) {
                                        (this._isStrokeTransparent = t._isStrokeTransparent),
                                            (this._strokeOpacity = t._strokeOpacity),
                                            (this.strokeStyle = t.strokeStyle),
                                            (this._isFillTransparent = t._isFillTransparent),
                                            (this._fillOpacity = t._fillOpacity),
                                            (this.fillStyle = t.fillStyle),
                                            (this.font = t.font),
                                            (this.lineWidth = t.lineWidth),
                                            (this.lineJoin = t.lineJoin),
                                            (this.lineCap = t.lineCap),
                                            (this.textBaseline = t.textBaseline),
                                            (this.textAlign = t.textAlign),
                                            (this._fontSize = t._fontSize),
                                            (this._transform = t._transform.slice(0)),
                                            (this.globalCompositeOperation = t.globalCompositeOperation),
                                            (this.globalAlpha = t.globalAlpha),
                                            (this._clip_path = t._clip_path.slice(0)),
                                            (this.ignoreClearRect = t.ignoreClearRect);
                                    });
                            }
                            t.events.push([
                                "initialized",
                                function () {
                                    (this.context2d.pdf = this), (this.context2d.internal.pdf = this), (this.context2d.ctx = new e()), (this.context2d.ctxStack = []), (this.context2d.path = []);
                                },
                            ]),
                                (t.context2d = {
                                    pageWrapXEnabled: !1,
                                    pageWrapYEnabled: !1,
                                    pageWrapX: 9999999,
                                    pageWrapY: 9999999,
                                    ctx: new e(),
                                    f2: function (t) {
                                        return t.toFixed(2);
                                    },
                                    fillRect: function (t, e, n, r) {
                                        if (!this._isFillTransparent()) {
                                            (t = this._wrapX(t)), (e = this._wrapY(e));
                                            var i = this._matrix_map_rect(this.ctx._transform, { x: t, y: e, w: n, h: r });
                                            this.pdf.rect(i.x, i.y, i.w, i.h, "f");
                                        }
                                    },
                                    strokeRect: function (t, e, n, r) {
                                        if (!this._isStrokeTransparent()) {
                                            (t = this._wrapX(t)), (e = this._wrapY(e));
                                            var i = this._matrix_map_rect(this.ctx._transform, { x: t, y: e, w: n, h: r });
                                            this.pdf.rect(i.x, i.y, i.w, i.h, "s");
                                        }
                                    },
                                    clearRect: function (t, e, n, r) {
                                        if (!this.ctx.ignoreClearRect) {
                                            (t = this._wrapX(t)), (e = this._wrapY(e));
                                            var i = this._matrix_map_rect(this.ctx._transform, { x: t, y: e, w: n, h: r });
                                            this.save(), this.setFillStyle("#ffffff"), this.pdf.rect(i.x, i.y, i.w, i.h, "f"), this.restore();
                                        }
                                    },
                                    save: function () {
                                        this.ctx._fontSize = this.pdf.internal.getFontSize();
                                        var t = new e();
                                        t.copy(this.ctx), this.ctxStack.push(this.ctx), (this.ctx = t);
                                    },
                                    restore: function () {
                                        (this.ctx = this.ctxStack.pop()),
                                            this.setFillStyle(this.ctx.fillStyle),
                                            this.setStrokeStyle(this.ctx.strokeStyle),
                                            this.setFont(this.ctx.font),
                                            this.pdf.setFontSize(this.ctx._fontSize),
                                            this.setLineCap(this.ctx.lineCap),
                                            this.setLineWidth(this.ctx.lineWidth),
                                            this.setLineJoin(this.ctx.lineJoin);
                                    },
                                    rect: function (t, e, n, r) {
                                        this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.lineTo(t, e), this.closePath();
                                    },
                                    beginPath: function () {
                                        this.path = [];
                                    },
                                    closePath: function () {
                                        this.path.push({ type: "close" });
                                    },
                                    _getRGBA: function (t) {
                                        var e, n, r, i;
                                        if (!t) return { r: 0, g: 0, b: 0, a: 0, style: t };
                                        if (this.internal.rxTransparent.test(t)) (e = 0), (n = 0), (r = 0), (i = 0);
                                        else {
                                            var o = this.internal.rxRgb.exec(t);
                                            null != o
                                                ? ((e = parseInt(o[1])), (n = parseInt(o[2])), (r = parseInt(o[3])), (i = 1))
                                                : null != (o = this.internal.rxRgba.exec(t))
                                                ? ((e = parseInt(o[1])), (n = parseInt(o[2])), (r = parseInt(o[3])), (i = parseFloat(o[4])))
                                                : ((i = 1),
                                                  "#" != t.charAt(0) && ((t = s.colorNameToHex(t)) || (t = "#000000")),
                                                  4 === t.length
                                                      ? ((e = t.substring(1, 2)), (e += e), (n = t.substring(2, 3)), (n += n), (r = t.substring(3, 4)), (r += r))
                                                      : ((e = t.substring(1, 3)), (n = t.substring(3, 5)), (r = t.substring(5, 7))),
                                                  (e = parseInt(e, 16)),
                                                  (n = parseInt(n, 16)),
                                                  (r = parseInt(r, 16)));
                                        }
                                        return { r: e, g: n, b: r, a: i, style: t };
                                    },
                                    setFillStyle: function (t) {
                                        var e = this._getRGBA(t);
                                        (this.ctx.fillStyle = t), (this.ctx._isFillTransparent = 0 === e.a), (this.ctx._fillOpacity = e.a), this.pdf.setFillColor(e.r, e.g, e.b, { a: e.a }), this.pdf.setTextColor(e.r, e.g, e.b, { a: e.a });
                                    },
                                    setStrokeStyle: function (t) {
                                        var e = this._getRGBA(t);
                                        (this.ctx.strokeStyle = e.style),
                                            (this.ctx._isStrokeTransparent = 0 === e.a),
                                            (this.ctx._strokeOpacity = e.a),
                                            0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
                                    },
                                    fillText: function (t, e, n, r) {
                                        if (!this._isFillTransparent()) {
                                            (e = this._wrapX(e)), (n = this._wrapY(n));
                                            var i = this._matrix_map_point(this.ctx._transform, [e, n]);
                                            (e = i[0]), (n = i[1]);
                                            var o = 57.2958 * this._matrix_rotation(this.ctx._transform);
                                            if (this.ctx._clip_path.length > 0) {
                                                var a;
                                                (a = window.outIntercept ? ("group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept) : this.internal.getCurrentPage()).push("q");
                                                var s = this.path;
                                                (this.path = this.ctx._clip_path), (this.ctx._clip_path = []), this._fill(null, !0), (this.ctx._clip_path = this.path), (this.path = s);
                                            }
                                            var c = 1;
                                            try {
                                                c = this._matrix_decompose(this._getTransform()).scale[0];
                                            } catch (t) {
                                                console.warn(t);
                                            }
                                            if (c < 0.01) this.pdf.text(t, e, this._getBaseline(n), null, o);
                                            else {
                                                var l = this.pdf.internal.getFontSize();
                                                this.pdf.setFontSize(l * c), this.pdf.text(t, e, this._getBaseline(n), null, o), this.pdf.setFontSize(l);
                                            }
                                            this.ctx._clip_path.length > 0 && a.push("Q");
                                        }
                                    },
                                    strokeText: function (t, e, n, r) {
                                        if (!this._isStrokeTransparent()) {
                                            (e = this._wrapX(e)), (n = this._wrapY(n));
                                            var i = this._matrix_map_point(this.ctx._transform, [e, n]);
                                            (e = i[0]), (n = i[1]);
                                            var o = 57.2958 * this._matrix_rotation(this.ctx._transform);
                                            if (this.ctx._clip_path.length > 0) {
                                                var a;
                                                (a = window.outIntercept ? ("group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept) : this.internal.getCurrentPage()).push("q");
                                                var s = this.path;
                                                (this.path = this.ctx._clip_path), (this.ctx._clip_path = []), this._fill(null, !0), (this.ctx._clip_path = this.path), (this.path = s);
                                            }
                                            var c = 1;
                                            try {
                                                c = this._matrix_decompose(this._getTransform()).scale[0];
                                            } catch (t) {
                                                console.warn(t);
                                            }
                                            if (1 === c) this.pdf.text(t, e, this._getBaseline(n), { stroke: !0 }, o);
                                            else {
                                                var l = this.pdf.internal.getFontSize();
                                                this.pdf.setFontSize(l * c), this.pdf.text(t, e, this._getBaseline(n), { stroke: !0 }, o), this.pdf.setFontSize(l);
                                            }
                                            this.ctx._clip_path.length > 0 && a.push("Q");
                                        }
                                    },
                                    setFont: function (t) {
                                        this.ctx.font = t;
                                        var e = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/;
                                        if (null != (h = e.exec(t))) {
                                            var n = h[1],
                                                r = h[3],
                                                i = h[4],
                                                o = h[5],
                                                a = h[6];
                                            (i = "px" === o ? Math.floor(parseFloat(i)) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i))),
                                                this.pdf.setFontSize(i),
                                                "bold" === r || "700" === r ? this.pdf.setFontStyle("bold") : "italic" === n ? this.pdf.setFontStyle("italic") : this.pdf.setFontStyle("normal");
                                            var s,
                                                c = (d = a).toLowerCase().split(/\s*,\s*/);
                                            s =
                                                -1 != c.indexOf("arial")
                                                    ? "Arial"
                                                    : -1 != c.indexOf("verdana")
                                                    ? "Verdana"
                                                    : -1 != c.indexOf("helvetica")
                                                    ? "Helvetica"
                                                    : -1 != c.indexOf("sans-serif")
                                                    ? "sans-serif"
                                                    : -1 != c.indexOf("fixed")
                                                    ? "Fixed"
                                                    : -1 != c.indexOf("monospace")
                                                    ? "Monospace"
                                                    : -1 != c.indexOf("terminal")
                                                    ? "Terminal"
                                                    : -1 != c.indexOf("courier")
                                                    ? "Courier"
                                                    : -1 != c.indexOf("times")
                                                    ? "Times"
                                                    : -1 != c.indexOf("cursive")
                                                    ? "Cursive"
                                                    : -1 != c.indexOf("fantasy")
                                                    ? "Fantasy"
                                                    : (c.indexOf("serif"), "Serif");
                                            var l;
                                            (l = "bold" === r ? "bold" : "normal"), this.pdf.setFont(s, l);
                                        } else {
                                            var h = (e = /\s*(\d+)(pt|px|em)\s+([\w "]+)\s*([\w "]+)?/).exec(t);
                                            if (null != h) {
                                                var u = h[1],
                                                    d = h[3];
                                                (l = h[4]) || (l = "normal"), (u = "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(u))), this.pdf.setFontSize(u), this.pdf.setFont(d, l);
                                            }
                                        }
                                    },
                                    setTextBaseline: function (t) {
                                        this.ctx.textBaseline = t;
                                    },
                                    getTextBaseline: function () {
                                        return this.ctx.textBaseline;
                                    },
                                    setTextAlign: function (t) {
                                        this.ctx.textAlign = t;
                                    },
                                    getTextAlign: function () {
                                        return this.ctx.textAlign;
                                    },
                                    setLineWidth: function (t) {
                                        (this.ctx.lineWidth = t), this.pdf.setLineWidth(t);
                                    },
                                    setLineCap: function (t) {
                                        (this.ctx.lineCap = t), this.pdf.setLineCap(t);
                                    },
                                    setLineJoin: function (t) {
                                        (this.ctx.lineJoin = t), this.pdf.setLineJoin(t);
                                    },
                                    moveTo: function (t, e) {
                                        (t = this._wrapX(t)), (e = this._wrapY(e));
                                        var n = this._matrix_map_point(this.ctx._transform, [t, e]),
                                            r = { type: "mt", x: (t = n[0]), y: (e = n[1]) };
                                        this.path.push(r);
                                    },
                                    _wrapX: function (t) {
                                        return this.pageWrapXEnabled ? t % this.pageWrapX : t;
                                    },
                                    _wrapY: function (t) {
                                        return this.pageWrapYEnabled ? (this._gotoPage(this._page(t)), (t - this.lastBreak) % this.pageWrapY) : t;
                                    },
                                    transform: function (t, e, n, r, i, o) {
                                        this.ctx._transform = [t, e, n, r, i, o];
                                    },
                                    setTransform: function (t, e, n, r, i, o) {
                                        this.ctx._transform = [t, e, n, r, i, o];
                                    },
                                    _getTransform: function () {
                                        return this.ctx._transform;
                                    },
                                    lastBreak: 0,
                                    pageBreaks: [],
                                    _page: function (t) {
                                        if (this.pageWrapYEnabled) {
                                            this.lastBreak = 0;
                                            for (var e = 0, n = 0, r = 0; r < this.pageBreaks.length; r++)
                                                if (t >= this.pageBreaks[r]) {
                                                    e++, 0 === this.lastBreak && n++;
                                                    var i = this.pageBreaks[r] - this.lastBreak;
                                                    (this.lastBreak = this.pageBreaks[r]), (n += o = Math.floor(i / this.pageWrapY));
                                                }
                                            if (0 === this.lastBreak) {
                                                var o = Math.floor(t / this.pageWrapY) + 1;
                                                n += o;
                                            }
                                            return n + e;
                                        }
                                        return this.pdf.internal.getCurrentPageInfo().pageNumber;
                                    },
                                    _gotoPage: function (t) {},
                                    lineTo: function (t, e) {
                                        (t = this._wrapX(t)), (e = this._wrapY(e));
                                        var n = this._matrix_map_point(this.ctx._transform, [t, e]),
                                            r = { type: "lt", x: (t = n[0]), y: (e = n[1]) };
                                        this.path.push(r);
                                    },
                                    bezierCurveTo: function (t, e, n, r, i, o) {
                                        (t = this._wrapX(t)), (e = this._wrapY(e)), (n = this._wrapX(n)), (r = this._wrapY(r)), (i = this._wrapX(i)), (o = this._wrapY(o));
                                        var a;
                                        (i = (a = this._matrix_map_point(this.ctx._transform, [i, o]))[0]), (o = a[1]);
                                        var s = {
                                            type: "bct",
                                            x1: (t = (a = this._matrix_map_point(this.ctx._transform, [t, e]))[0]),
                                            y1: (e = a[1]),
                                            x2: (n = (a = this._matrix_map_point(this.ctx._transform, [n, r]))[0]),
                                            y2: (r = a[1]),
                                            x: i,
                                            y: o,
                                        };
                                        this.path.push(s);
                                    },
                                    quadraticCurveTo: function (t, e, n, r) {
                                        (t = this._wrapX(t)), (e = this._wrapY(e)), (n = this._wrapX(n)), (r = this._wrapY(r));
                                        var i;
                                        (n = (i = this._matrix_map_point(this.ctx._transform, [n, r]))[0]), (r = i[1]);
                                        var o = { type: "qct", x1: (t = (i = this._matrix_map_point(this.ctx._transform, [t, e]))[0]), y1: (e = i[1]), x: n, y: r };
                                        this.path.push(o);
                                    },
                                    arc: function (t, e, n, r, i, o) {
                                        if (((t = this._wrapX(t)), (e = this._wrapY(e)), !this._matrix_is_identity(this.ctx._transform))) {
                                            var a = this._matrix_map_point(this.ctx._transform, [t, e]);
                                            (t = a[0]), (e = a[1]);
                                            var s = this._matrix_map_point(this.ctx._transform, [0, 0]),
                                                c = this._matrix_map_point(this.ctx._transform, [0, n]);
                                            n = Math.sqrt(Math.pow(c[0] - s[0], 2) + Math.pow(c[1] - s[1], 2));
                                        }
                                        var l = { type: "arc", x: t, y: e, radius: n, startAngle: r, endAngle: i, anticlockwise: o };
                                        this.path.push(l);
                                    },
                                    drawImage: function (t, e, n, r, i, o, a, s, c) {
                                        void 0 !== o && ((e = o), (n = a), (r = s), (i = c)), (e = this._wrapX(e)), (n = this._wrapY(n));
                                        var l,
                                            h = this._matrix_map_rect(this.ctx._transform, { x: e, y: n, w: r, h: i }),
                                            u = (this._matrix_map_rect(this.ctx._transform, { x: o, y: a, w: s, h: c }), /data:image\/(\w+).*/i.exec(t));
                                        (l = null != u ? u[1] : "png"), this.pdf.addImage(t, l, h.x, h.y, h.w, h.h);
                                    },
                                    _matrix_multiply: function (t, e) {
                                        var n = e[0],
                                            r = e[1],
                                            i = e[2],
                                            o = e[3],
                                            a = e[4],
                                            s = e[5],
                                            c = n * t[0] + r * t[2],
                                            l = i * t[0] + o * t[2],
                                            h = a * t[0] + s * t[2] + t[4];
                                        return (r = n * t[1] + r * t[3]), (o = i * t[1] + o * t[3]), (s = a * t[1] + s * t[3] + t[5]), (n = c), (i = l), (a = h), [n, r, i, o, a, s];
                                    },
                                    _matrix_rotation: function (t) {
                                        return Math.atan2(t[2], t[0]);
                                    },
                                    _matrix_decompose: function (t) {
                                        var e = t[0],
                                            n = t[1],
                                            r = t[2],
                                            i = t[3],
                                            o = Math.sqrt(e * e + n * n),
                                            a = (e /= o) * r + (n /= o) * i;
                                        (r -= e * a), (i -= n * a);
                                        var s = Math.sqrt(r * r + i * i);
                                        return (
                                            (r /= s),
                                            (i /= s),
                                            (a /= s),
                                            e * i < n * r && ((e = -e), (n = -n), (a = -a), (o = -o)),
                                            { scale: [o, 0, 0, s, 0, 0], translate: [1, 0, 0, 1, t[4], t[5]], rotate: [e, n, -n, e, 0, 0], skew: [1, 0, a, 1, 0, 0] }
                                        );
                                    },
                                    _matrix_map_point: function (t, e) {
                                        var n = t[0],
                                            r = t[1],
                                            i = t[2],
                                            o = t[3],
                                            a = t[4],
                                            s = t[5],
                                            c = e[0],
                                            l = e[1];
                                        return [c * n + l * i + a, c * r + l * o + s];
                                    },
                                    _matrix_map_point_obj: function (t, e) {
                                        var n = this._matrix_map_point(t, [e.x, e.y]);
                                        return { x: n[0], y: n[1] };
                                    },
                                    _matrix_map_rect: function (t, e) {
                                        var n = this._matrix_map_point(t, [e.x, e.y]),
                                            r = this._matrix_map_point(t, [e.x + e.w, e.y + e.h]);
                                        return { x: n[0], y: n[1], w: r[0] - n[0], h: r[1] - n[1] };
                                    },
                                    _matrix_is_identity: function (t) {
                                        return 1 == t[0] && 0 == t[1] && 0 == t[2] && 1 == t[3] && 0 == t[4] && 0 == t[5];
                                    },
                                    rotate: function (t) {
                                        var e = [Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0];
                                        this.ctx._transform = this._matrix_multiply(this.ctx._transform, e);
                                    },
                                    scale: function (t, e) {
                                        var n = [t, 0, 0, e, 0, 0];
                                        this.ctx._transform = this._matrix_multiply(this.ctx._transform, n);
                                    },
                                    translate: function (t, e) {
                                        var n = [1, 0, 0, 1, t, e];
                                        this.ctx._transform = this._matrix_multiply(this.ctx._transform, n);
                                    },
                                    stroke: function () {
                                        if (this.ctx._clip_path.length > 0) {
                                            var t;
                                            (t = window.outIntercept ? ("group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept) : this.internal.getCurrentPage()).push("q");
                                            var e = this.path;
                                            (this.path = this.ctx._clip_path), (this.ctx._clip_path = []), this._stroke(!0), (this.ctx._clip_path = this.path), (this.path = e), this._stroke(!1), t.push("Q");
                                        } else this._stroke(!1);
                                    },
                                    _stroke: function (t) {
                                        if (t || !this._isStrokeTransparent()) {
                                            for (var e = [], n = this.path, r = 0; r < n.length; r++) {
                                                var i = n[r];
                                                switch (i.type) {
                                                    case "mt":
                                                        e.push({ start: i, deltas: [], abs: [] });
                                                        break;
                                                    case "lt":
                                                        (u = [i.x - n[r - 1].x, i.y - n[r - 1].y]), e[e.length - 1].deltas.push(u), e[e.length - 1].abs.push(i);
                                                        break;
                                                    case "bct":
                                                        (u = [i.x1 - n[r - 1].x, i.y1 - n[r - 1].y, i.x2 - n[r - 1].x, i.y2 - n[r - 1].y, i.x - n[r - 1].x, i.y - n[r - 1].y]), e[e.length - 1].deltas.push(u);
                                                        break;
                                                    case "qct":
                                                        var o = n[r - 1].x + (2 / 3) * (i.x1 - n[r - 1].x),
                                                            a = n[r - 1].y + (2 / 3) * (i.y1 - n[r - 1].y),
                                                            s = i.x + (2 / 3) * (i.x1 - i.x),
                                                            c = i.y + (2 / 3) * (i.y1 - i.y),
                                                            l = i.x,
                                                            h = i.y,
                                                            u = [o - n[r - 1].x, a - n[r - 1].y, s - n[r - 1].x, c - n[r - 1].y, l - n[r - 1].x, h - n[r - 1].y];
                                                        e[e.length - 1].deltas.push(u);
                                                        break;
                                                    case "arc":
                                                        0 == e.length && e.push({ start: { x: 0, y: 0 }, deltas: [], abs: [] }), (e[e.length - 1].arc = !0), e[e.length - 1].abs.push(i);
                                                }
                                            }
                                            for (r = 0; r < e.length; r++) {
                                                var d;
                                                if (((d = r == e.length - 1 ? "s" : null), e[r].arc))
                                                    for (var f = e[r].abs, p = 0; p < f.length; p++) {
                                                        var g = f[p],
                                                            m = (360 * g.startAngle) / (2 * Math.PI),
                                                            w = (360 * g.endAngle) / (2 * Math.PI),
                                                            y = g.x,
                                                            v = g.y;
                                                        this.internal.arc2(this, y, v, g.radius, m, w, g.anticlockwise, d, t);
                                                    }
                                                else {
                                                    var y = e[r].start.x,
                                                        v = e[r].start.y;
                                                    t ? (this.pdf.lines(e[r].deltas, y, v, null, null), this.pdf.clip_fixed()) : this.pdf.lines(e[r].deltas, y, v, null, d);
                                                }
                                            }
                                        }
                                    },
                                    _isFillTransparent: function () {
                                        return this.ctx._isFillTransparent || 0 == this.globalAlpha;
                                    },
                                    _isStrokeTransparent: function () {
                                        return this.ctx._isStrokeTransparent || 0 == this.globalAlpha;
                                    },
                                    fill: function (t) {
                                        if (this.ctx._clip_path.length > 0) {
                                            var e;
                                            (e = window.outIntercept ? ("group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept) : this.internal.getCurrentPage()).push("q");
                                            var n = this.path;
                                            (this.path = this.ctx._clip_path), (this.ctx._clip_path = []), this._fill(t, !0), (this.ctx._clip_path = this.path), (this.path = n), this._fill(t, !1), e.push("Q");
                                        } else this._fill(t, !1);
                                    },
                                    _fill: function (t, e) {
                                        if (!this._isFillTransparent()) {
                                            var r,
                                                i = "function" == typeof this.pdf.internal.newObject2;
                                            r = window.outIntercept ? ("group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept) : this.internal.getCurrentPage();
                                            var o = [],
                                                a = window.outIntercept;
                                            if (i)
                                                switch (this.ctx.globalCompositeOperation) {
                                                    case "normal":
                                                    case "source-over":
                                                        break;
                                                    case "destination-in":
                                                    case "destination-out":
                                                        var s = this.pdf.internal.newStreamObject(),
                                                            c = this.pdf.internal.newObject2();
                                                        c.push("<</Type /ExtGState"), c.push("/SMask <</S /Alpha /G " + s.objId + " 0 R>>"), c.push(">>"), (f = "MASK" + c.objId), this.pdf.internal.addGraphicsState(f, c.objId);
                                                        var l = "/" + f + " gs";
                                                        r.splice(0, 0, "q"), r.splice(1, 0, l), r.push("Q"), (window.outIntercept = s);
                                                        break;
                                                    default:
                                                        var h = "/" + this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];
                                                        h && this.pdf.internal.out(h + " gs");
                                                }
                                            var u = this.ctx.globalAlpha;
                                            if ((this.ctx._fillOpacity < 1 && (u = this.ctx._fillOpacity), i)) {
                                                var d = this.pdf.internal.newObject2();
                                                d.push("<</Type /ExtGState"), d.push("/CA " + u), d.push("/ca " + u), d.push(">>");
                                                var f = "GS_O_" + d.objId;
                                                this.pdf.internal.addGraphicsState(f, d.objId), this.pdf.internal.out("/" + f + " gs");
                                            }
                                            for (var p = this.path, g = 0; g < p.length; g++) {
                                                var m = p[g];
                                                switch (m.type) {
                                                    case "mt":
                                                        o.push({ start: m, deltas: [], abs: [] });
                                                        break;
                                                    case "lt":
                                                        (_ = [m.x - p[g - 1].x, m.y - p[g - 1].y]), o[o.length - 1].deltas.push(_), o[o.length - 1].abs.push(m);
                                                        break;
                                                    case "bct":
                                                        (_ = [m.x1 - p[g - 1].x, m.y1 - p[g - 1].y, m.x2 - p[g - 1].x, m.y2 - p[g - 1].y, m.x - p[g - 1].x, m.y - p[g - 1].y]), o[o.length - 1].deltas.push(_);
                                                        break;
                                                    case "qct":
                                                        var w = p[g - 1].x + (2 / 3) * (m.x1 - p[g - 1].x),
                                                            y = p[g - 1].y + (2 / 3) * (m.y1 - p[g - 1].y),
                                                            v = m.x + (2 / 3) * (m.x1 - m.x),
                                                            b = m.y + (2 / 3) * (m.y1 - m.y),
                                                            x = m.x,
                                                            k = m.y,
                                                            _ = [w - p[g - 1].x, y - p[g - 1].y, v - p[g - 1].x, b - p[g - 1].y, x - p[g - 1].x, k - p[g - 1].y];
                                                        o[o.length - 1].deltas.push(_);
                                                        break;
                                                    case "arc":
                                                        0 === o.length && o.push({ deltas: [], abs: [] }), (o[o.length - 1].arc = !0), o[o.length - 1].abs.push(m);
                                                        break;
                                                    case "close":
                                                        o.push({ close: !0 });
                                                }
                                            }
                                            for (g = 0; g < o.length; g++) {
                                                var C;
                                                if ((g == o.length - 1 ? ((C = "f"), "evenodd" === t && (C += "*")) : (C = null), o[g].close)) this.pdf.internal.out("h"), this.pdf.internal.out("f");
                                                else if (o[g].arc) {
                                                    o[g].start && this.internal.move2(this, o[g].start.x, o[g].start.y);
                                                    for (var T = o[g].abs, S = 0; S < T.length; S++) {
                                                        var E = T[S];
                                                        if (void 0 !== E.startAngle) {
                                                            var A = (360 * E.startAngle) / (2 * Math.PI),
                                                                I = (360 * E.endAngle) / (2 * Math.PI),
                                                                P = E.x,
                                                                O = E.y;
                                                            if ((0 === S && this.internal.move2(this, P, O), this.internal.arc2(this, P, O, E.radius, A, I, E.anticlockwise, null, e), S === T.length - 1 && o[g].start)) {
                                                                var P = o[g].start.x,
                                                                    O = o[g].start.y;
                                                                this.internal.line2(n, P, O);
                                                            }
                                                        } else this.internal.line2(n, E.x, E.y);
                                                    }
                                                } else {
                                                    var P = o[g].start.x,
                                                        O = o[g].start.y;
                                                    e ? (this.pdf.lines(o[g].deltas, P, O, null, null), this.pdf.clip_fixed()) : this.pdf.lines(o[g].deltas, P, O, null, C);
                                                }
                                            }
                                            window.outIntercept = a;
                                        }
                                    },
                                    pushMask: function () {
                                        if ("function" == typeof this.pdf.internal.newObject2) {
                                            var t = this.pdf.internal.newStreamObject(),
                                                e = this.pdf.internal.newObject2();
                                            e.push("<</Type /ExtGState"), e.push("/SMask <</S /Alpha /G " + t.objId + " 0 R>>"), e.push(">>");
                                            var n = "MASK" + e.objId;
                                            this.pdf.internal.addGraphicsState(n, e.objId);
                                            var r = "/" + n + " gs";
                                            this.pdf.internal.out(r);
                                        } else console.log("jsPDF v2 not enabled");
                                    },
                                    clip: function () {
                                        if (this.ctx._clip_path.length > 0) for (var t = 0; t < this.path.length; t++) this.ctx._clip_path.push(this.path[t]);
                                        else this.ctx._clip_path = this.path;
                                        this.path = [];
                                    },
                                    measureText: function (t) {
                                        var e = this.pdf;
                                        return {
                                            getWidth: function () {
                                                var n = e.internal.getFontSize(),
                                                    r = (e.getStringUnitWidth(t) * n) / e.internal.scaleFactor;
                                                return (r *= 1.3333);
                                            },
                                            get width() {
                                                return this.getWidth(t);
                                            },
                                        };
                                    },
                                    _getBaseline: function (t) {
                                        var e = parseInt(this.pdf.internal.getFontSize()),
                                            n = 0.25 * e;
                                        switch (this.ctx.textBaseline) {
                                            case "bottom":
                                                return t - n;
                                            case "top":
                                                return t + e;
                                            case "hanging":
                                                return t + e - n;
                                            case "middle":
                                                return t + e / 2 - n;
                                            case "ideographic":
                                                return t;
                                            case "alphabetic":
                                            default:
                                                return t;
                                        }
                                    },
                                });
                            var n = t.context2d;
                            Object.defineProperty(n, "fillStyle", {
                                set: function (t) {
                                    this.setFillStyle(t);
                                },
                                get: function () {
                                    return this.ctx.fillStyle;
                                },
                            }),
                                Object.defineProperty(n, "strokeStyle", {
                                    set: function (t) {
                                        this.setStrokeStyle(t);
                                    },
                                    get: function () {
                                        return this.ctx.strokeStyle;
                                    },
                                }),
                                Object.defineProperty(n, "lineWidth", {
                                    set: function (t) {
                                        this.setLineWidth(t);
                                    },
                                    get: function () {
                                        return this.ctx.lineWidth;
                                    },
                                }),
                                Object.defineProperty(n, "lineCap", {
                                    set: function (t) {
                                        this.setLineCap(t);
                                    },
                                    get: function () {
                                        return this.ctx.lineCap;
                                    },
                                }),
                                Object.defineProperty(n, "lineJoin", {
                                    set: function (t) {
                                        this.setLineJoin(t);
                                    },
                                    get: function () {
                                        return this.ctx.lineJoin;
                                    },
                                }),
                                Object.defineProperty(n, "miterLimit", {
                                    set: function (t) {
                                        this.ctx.miterLimit = t;
                                    },
                                    get: function () {
                                        return this.ctx.miterLimit;
                                    },
                                }),
                                Object.defineProperty(n, "textBaseline", {
                                    set: function (t) {
                                        this.setTextBaseline(t);
                                    },
                                    get: function () {
                                        return this.getTextBaseline();
                                    },
                                }),
                                Object.defineProperty(n, "textAlign", {
                                    set: function (t) {
                                        this.setTextAlign(t);
                                    },
                                    get: function () {
                                        return this.getTextAlign();
                                    },
                                }),
                                Object.defineProperty(n, "font", {
                                    set: function (t) {
                                        this.setFont(t);
                                    },
                                    get: function () {
                                        return this.ctx.font;
                                    },
                                }),
                                Object.defineProperty(n, "globalCompositeOperation", {
                                    set: function (t) {
                                        this.ctx.globalCompositeOperation = t;
                                    },
                                    get: function () {
                                        return this.ctx.globalCompositeOperation;
                                    },
                                }),
                                Object.defineProperty(n, "globalAlpha", {
                                    set: function (t) {
                                        this.ctx.globalAlpha = t;
                                    },
                                    get: function () {
                                        return this.ctx.globalAlpha;
                                    },
                                }),
                                Object.defineProperty(n, "ignoreClearRect", {
                                    set: function (t) {
                                        this.ctx.ignoreClearRect = t;
                                    },
                                    get: function () {
                                        return this.ctx.ignoreClearRect;
                                    },
                                }),
                                (n.internal = {}),
                                (n.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/),
                                (n.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/),
                                (n.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/),
                                (n.internal.arc = function (t, e, n, r, i, o, a, s) {
                                    for (
                                        var c = this.pdf.internal.scaleFactor, l = this.pdf.internal.pageSize.height, h = this.pdf.internal.f2, u = i * (Math.PI / 180), d = o * (Math.PI / 180), f = this.createArc(r, u, d, a), p = 0;
                                        p < f.length;
                                        p++
                                    ) {
                                        var g = f[p];
                                        0 === p
                                            ? this.pdf.internal.out(
                                                  [
                                                      h((g.x1 + e) * c),
                                                      h((l - (g.y1 + n)) * c),
                                                      "m",
                                                      h((g.x2 + e) * c),
                                                      h((l - (g.y2 + n)) * c),
                                                      h((g.x3 + e) * c),
                                                      h((l - (g.y3 + n)) * c),
                                                      h((g.x4 + e) * c),
                                                      h((l - (g.y4 + n)) * c),
                                                      "c",
                                                  ].join(" ")
                                              )
                                            : this.pdf.internal.out([h((g.x2 + e) * c), h((l - (g.y2 + n)) * c), h((g.x3 + e) * c), h((l - (g.y3 + n)) * c), h((g.x4 + e) * c), h((l - (g.y4 + n)) * c), "c"].join(" ")),
                                            (t._lastPoint = { x: e, y: n });
                                    }
                                    null !== s && this.pdf.internal.out(this.pdf.internal.getStyle(s));
                                }),
                                (n.internal.arc2 = function (t, e, n, r, i, o, a, s, c) {
                                    var l = e,
                                        h = n;
                                    c ? (this.arc(t, l, h, r, i, o, a, null), this.pdf.clip_fixed()) : this.arc(t, l, h, r, i, o, a, s);
                                }),
                                (n.internal.move2 = function (t, e, n) {
                                    var r = this.pdf.internal.scaleFactor,
                                        i = this.pdf.internal.pageSize.height,
                                        o = this.pdf.internal.f2;
                                    this.pdf.internal.out([o(e * r), o((i - n) * r), "m"].join(" ")), (t._lastPoint = { x: e, y: n });
                                }),
                                (n.internal.line2 = function (t, e, n) {
                                    var r = this.pdf.internal.scaleFactor,
                                        i = this.pdf.internal.pageSize.height,
                                        o = this.pdf.internal.f2,
                                        a = { x: e, y: n };
                                    this.pdf.internal.out([o(a.x * r), o((i - a.y) * r), "l"].join(" ")), (t._lastPoint = a);
                                }),
                                (n.internal.createArc = function (t, e, n, r) {
                                    var i = 2 * Math.PI,
                                        o = Math.PI / 2,
                                        a = e;
                                    for ((a < i || a > i) && (a %= i), a < 0 && (a = i + a); e > n; ) e -= i;
                                    var s = Math.abs(n - e);
                                    s < i && r && (s = i - s);
                                    for (var c = [], l = r ? -1 : 1, h = a; s > 1e-5; ) {
                                        var u = h + l * Math.min(s, o);
                                        c.push(this.createSmallArc(t, h, u)), (s -= Math.abs(u - h)), (h = u);
                                    }
                                    return c;
                                }),
                                (n.internal.getCurrentPage = function () {
                                    return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber];
                                }),
                                (n.internal.createSmallArc = function (t, e, n) {
                                    var r = (n - e) / 2,
                                        i = t * Math.cos(r),
                                        o = t * Math.sin(r),
                                        a = i,
                                        s = -o,
                                        c = a * a + s * s,
                                        l = c + a * i + s * o,
                                        h = ((4 / 3) * (Math.sqrt(2 * c * l) - l)) / (a * o - s * i),
                                        u = a - h * s,
                                        d = s + h * a,
                                        f = u,
                                        p = -d,
                                        g = r + e,
                                        m = Math.cos(g),
                                        w = Math.sin(g);
                                    return { x1: t * Math.cos(e), y1: t * Math.sin(e), x2: u * m - d * w, y2: u * w + d * m, x3: f * m - p * w, y3: f * w + p * m, x4: t * Math.cos(n), y4: t * Math.sin(n) };
                                });
                        })(i.API),
                        (function (t) {
                            var e, n, i, o, a, c, l, h, u, d, f, p, g, m, w, y, v, b, x, k;
                            (e = (function () {
                                function t() {}
                                return function (e) {
                                    return (t.prototype = e), new t();
                                };
                            })()),
                                (d = function (t) {
                                    var e, n, r, i, o, a, s;
                                    for (n = 0, r = t.length, e = void 0, i = !1, a = !1; !i && n !== r; ) (e = t[n] = t[n].trimLeft()) && (i = !0), n++;
                                    for (n = r - 1; r && !a && -1 !== n; ) (e = t[n] = t[n].trimRight()) && (a = !0), n--;
                                    for (o = /\s+$/g, s = !0, n = 0; n !== r; ) "\u2028" != t[n] && ((e = t[n].replace(/\s+/g, " ")), s && (e = e.trimLeft()), e && (s = o.test(e)), (t[n] = e)), n++;
                                    return t;
                                }),
                                (p = function (t) {
                                    var e, n, r;
                                    for (e = void 0, n = (r = t.split(",")).shift(); !e && n; ) (e = i[n.trim().toLowerCase()]), (n = r.shift());
                                    return e;
                                }),
                                (g = function (t) {
                                    (t = "auto" === t ? "0px" : t).indexOf("em") > -1 && !isNaN(Number(t.replace("em", ""))) && (t = 18.719 * Number(t.replace("em", "")) + "px"),
                                        t.indexOf("pt") > -1 && !isNaN(Number(t.replace("pt", ""))) && (t = 1.333 * Number(t.replace("pt", "")) + "px");
                                    var e;
                                    return (e = m[t])
                                        ? e
                                        : void 0 !== (e = { "xx-small": 9, "x-small": 11, small: 13, medium: 16, large: 19, "x-large": 23, "xx-large": 28, auto: 0 }[{ css_line_height_string: t }])
                                        ? (m[t] = e / 16)
                                        : (e = parseFloat(t))
                                        ? (m[t] = e / 16)
                                        : 3 === (e = t.match(/([\d\.]+)(px)/)).length
                                        ? (m[t] = parseFloat(e[1]) / 16)
                                        : (m[t] = 1);
                                }),
                                (u = function (t) {
                                    var e, n, r;
                                    return (
                                        (r = (function (e) {
                                            var n;
                                            return (
                                                (n = (function (t) {
                                                    return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(t, null) : t.currentStyle ? t.currentStyle : t.style;
                                                })(t)),
                                                function (t) {
                                                    return (
                                                        (t = t.replace(/-\D/g, function (t) {
                                                            return t.charAt(1).toUpperCase();
                                                        })),
                                                        n[t]
                                                    );
                                                }
                                            );
                                        })()),
                                        (e = {}),
                                        (n = void 0),
                                        (e["font-family"] = p(r("font-family")) || "times"),
                                        (e["font-style"] = o[r("font-style")] || "normal"),
                                        (e["text-align"] = a[r("text-align")] || "left"),
                                        "bold" === (n = c[r("font-weight")] || "normal") && ("normal" === e["font-style"] ? (e["font-style"] = n) : (e["font-style"] = n + e["font-style"])),
                                        (e["font-size"] = g(r("font-size")) || 1),
                                        (e["line-height"] = g(r("line-height")) || 1),
                                        (e.display = "inline" === r("display") ? "inline" : "block"),
                                        (n = "block" === e.display),
                                        (e["margin-top"] = (n && g(r("margin-top"))) || 0),
                                        (e["margin-bottom"] = (n && g(r("margin-bottom"))) || 0),
                                        (e["padding-top"] = (n && g(r("padding-top"))) || 0),
                                        (e["padding-bottom"] = (n && g(r("padding-bottom"))) || 0),
                                        (e["margin-left"] = (n && g(r("margin-left"))) || 0),
                                        (e["margin-right"] = (n && g(r("margin-right"))) || 0),
                                        (e["padding-left"] = (n && g(r("padding-left"))) || 0),
                                        (e["padding-right"] = (n && g(r("padding-right"))) || 0),
                                        (e["page-break-before"] = r("page-break-before") || "auto"),
                                        (e.float = l[r("cssFloat")] || "none"),
                                        (e.clear = h[r("clear")] || "none"),
                                        (e.color = r("color")),
                                        e
                                    );
                                }),
                                (w = function (t, e, n) {
                                    var r, i, o, a, s;
                                    if (((o = !1), (i = void 0), (a = void 0), (r = n["#" + t.id])))
                                        if ("function" == typeof r) o = r(t, e);
                                        else for (i = 0, a = r.length; !o && i !== a; ) (o = r[i](t, e)), i++;
                                    if (((r = n[t.nodeName]), !o && r))
                                        if ("function" == typeof r) o = r(t, e);
                                        else for (i = 0, a = r.length; !o && i !== a; ) (o = r[i](t, e)), i++;
                                    for (s = t.className ? t.className.split(" ") : [], i = 0; i < s.length; i++)
                                        if (((r = n["." + s[i]]), !o && r))
                                            if ("function" == typeof r) o = r(t, e);
                                            else for (i = 0, a = r.length; !o && i !== a; ) (o = r[i](t, e)), i++;
                                    return o;
                                }),
                                (k = function (t, e) {
                                    var n, r, i, o, a, s, c, l, h;
                                    for (n = [], r = [], i = 0, h = t.rows[0].cells.length, c = t.clientWidth; i < h; )
                                        (l = t.rows[0].cells[i]),
                                            (r[i] = { name: l.textContent.toLowerCase().replace(/\s+/g, ""), prompt: l.textContent.replace(/\r?\n/g, ""), width: (l.clientWidth / c) * e.pdf.internal.pageSize.width }),
                                            i++;
                                    for (i = 1; i < t.rows.length; ) {
                                        for (s = t.rows[i], a = {}, o = 0; o < s.cells.length; ) (a[r[o].name] = s.cells[o].textContent.replace(/\r?\n/g, "")), o++;
                                        n.push(a), i++;
                                    }
                                    return { rows: n, headers: r };
                                });
                            var _ = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, OBJECT: 1, EMBED: 1, SELECT: 1 },
                                C = 1;
                            (n = function (t, i, o) {
                                var a, s, c, l, h, d, f, p;
                                for (s = t.childNodes, a = void 0, (h = "block" === (c = u(t)).display) && (i.setBlockBoundary(), i.setBlockStyle(c)), l = 0, d = s.length; l < d; ) {
                                    if ("object" === (void 0 === (a = s[l]) ? "undefined" : r(a))) {
                                        if ((i.executeWatchFunctions(a), 1 === a.nodeType && "HEADER" === a.nodeName)) {
                                            var g = a,
                                                m = i.pdf.margins_doc.top;
                                            i.pdf.internal.events.subscribe(
                                                "addPage",
                                                function (t) {
                                                    (i.y = m), n(g, i, o), (i.pdf.margins_doc.top = i.y + 10), (i.y += 10);
                                                },
                                                !1
                                            );
                                        }
                                        if (8 === a.nodeType && "#comment" === a.nodeName) ~a.textContent.indexOf("ADD_PAGE") && (i.pdf.addPage(), (i.y = i.pdf.margins_doc.top));
                                        else if (1 !== a.nodeType || _[a.nodeName])
                                            if (3 === a.nodeType) {
                                                var v = a.nodeValue;
                                                if (a.nodeValue && "LI" === a.parentNode.nodeName)
                                                    if ("OL" === a.parentNode.parentNode.nodeName) v = C++ + ". " + v;
                                                    else {
                                                        var b = c["font-size"],
                                                            x = (3 - 0.75 * b) * i.pdf.internal.scaleFactor,
                                                            T = 0.75 * b * i.pdf.internal.scaleFactor,
                                                            S = (1.74 * b) / i.pdf.internal.scaleFactor;
                                                        p = function (t, e) {
                                                            this.pdf.circle(t + x, e + T, S, "FD");
                                                        };
                                                    }
                                                16 & a.ownerDocument.body.compareDocumentPosition(a) && i.addText(v, c);
                                            } else "string" == typeof a && i.addText(a, c);
                                        else {
                                            var E;
                                            if ("IMG" === a.nodeName) {
                                                var A = a.getAttribute("src");
                                                E = y[i.pdf.sHashCode(A) || A];
                                            }
                                            if (E) {
                                                i.pdf.internal.pageSize.height - i.pdf.margins_doc.bottom < i.y + a.height && i.y > i.pdf.margins_doc.top && (i.pdf.addPage(), (i.y = i.pdf.margins_doc.top), i.executeWatchFunctions(a));
                                                var I = u(a),
                                                    P = i.x,
                                                    O = 12 / i.pdf.internal.scaleFactor,
                                                    q = (I["margin-left"] + I["padding-left"]) * O,
                                                    R = (I["margin-right"] + I["padding-right"]) * O,
                                                    B = (I["margin-top"] + I["padding-top"]) * O,
                                                    F = (I["margin-bottom"] + I["padding-bottom"]) * O;
                                                void 0 !== I.float && "right" === I.float ? (P += i.settings.width - a.width - R) : (P += q),
                                                    i.pdf.addImage(E, P, i.y + B, a.width, a.height),
                                                    (E = void 0),
                                                    "right" === I.float || "left" === I.float
                                                        ? (i.watchFunctions.push(
                                                              function (t, e, n, r) {
                                                                  return i.y >= e
                                                                      ? ((i.x += t), (i.settings.width += n), !0)
                                                                      : !!(r && 1 === r.nodeType && !_[r.nodeName] && i.x + r.width > i.pdf.margins_doc.left + i.pdf.margins_doc.width) && ((i.x += t), (i.y = e), (i.settings.width += n), !0);
                                                              }.bind(this, "left" === I.float ? -a.width - q - R : 0, i.y + a.height + B + F, a.width)
                                                          ),
                                                          i.watchFunctions.push(
                                                              function (t, e, n) {
                                                                  return !(i.y < t && e === i.pdf.internal.getNumberOfPages()) || (1 === n.nodeType && "both" === u(n).clear && ((i.y = t), !0));
                                                              }.bind(this, i.y + a.height, i.pdf.internal.getNumberOfPages())
                                                          ),
                                                          (i.settings.width -= a.width + q + R),
                                                          "left" === I.float && (i.x += a.width + q + R))
                                                        : (i.y += a.height + B + F);
                                            } else if ("TABLE" === a.nodeName)
                                                (f = k(a, i)),
                                                    (i.y += 10),
                                                    i.pdf.table(i.x, i.y, f.rows, f.headers, { autoSize: !1, printHeaders: o.printHeaders, margins: i.pdf.margins_doc, css: u(a) }),
                                                    (i.y = i.pdf.lastCellPos.y + i.pdf.lastCellPos.h + 20);
                                            else if ("OL" === a.nodeName || "UL" === a.nodeName) (C = 1), w(a, i, o) || n(a, i, o), (i.y += 10);
                                            else if ("LI" === a.nodeName) {
                                                var D = i.x;
                                                (i.x += 20 / i.pdf.internal.scaleFactor), (i.y += 3), w(a, i, o) || n(a, i, o), (i.x = D);
                                            } else "BR" === a.nodeName ? ((i.y += c["font-size"] * i.pdf.internal.scaleFactor), i.addText("\u2028", e(c))) : w(a, i, o) || n(a, i, o);
                                        }
                                    }
                                    l++;
                                }
                                if (((o.outY = i.y), h)) return i.setBlockBoundary(p);
                            }),
                                (y = {}),
                                (v = function (t, e, n, r) {
                                    function i() {
                                        e.pdf.internal.events.publish("imagesLoaded"), r(o);
                                    }
                                    for (var o, a = t.getElementsByTagName("img"), s = a.length, c = 0; s--; )
                                        !(function (t, n, r) {
                                            if (t) {
                                                var a = new Image();
                                                (o = ++c),
                                                    (a.crossOrigin = ""),
                                                    (a.onerror = a.onload = function () {
                                                        if (a.complete && (0 === a.src.indexOf("data:image/") && ((a.width = n || a.width || 0), (a.height = r || a.height || 0)), a.width + a.height)) {
                                                            var o = e.pdf.sHashCode(t) || t;
                                                            y[o] = y[o] || a;
                                                        }
                                                        --c || i();
                                                    }),
                                                    (a.src = t);
                                            }
                                        })(a[s].getAttribute("src"), a[s].width, a[s].height);
                                    return c || i();
                                }),
                                (b = function (t, e, r) {
                                    var i = t.getElementsByTagName("footer");
                                    if (i.length > 0) {
                                        i = i[0];
                                        var o = e.pdf.internal.write,
                                            a = e.y;
                                        (e.pdf.internal.write = function () {}), n(i, e, r);
                                        var s = Math.ceil(e.y - a) + 5;
                                        (e.y = a), (e.pdf.internal.write = o), (e.pdf.margins_doc.bottom += s);
                                        for (
                                            var c = function (t) {
                                                    var o = void 0 !== t ? t.pageNumber : 1,
                                                        a = e.y;
                                                    (e.y = e.pdf.internal.pageSize.height - e.pdf.margins_doc.bottom), (e.pdf.margins_doc.bottom -= s);
                                                    for (var c = i.getElementsByTagName("span"), l = 0; l < c.length; ++l)
                                                        (" " + c[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") > -1 && (c[l].innerHTML = o),
                                                            (" " + c[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && (c[l].innerHTML = "###jsPDFVarTotalPages###");
                                                    n(i, e, r), (e.pdf.margins_doc.bottom += s), (e.y = a);
                                                },
                                                l = i.getElementsByTagName("span"),
                                                h = 0;
                                            h < l.length;
                                            ++h
                                        )
                                            (" " + l[h].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 &&
                                                e.pdf.internal.events.subscribe("htmlRenderingFinished", e.pdf.putTotalPages.bind(e.pdf, "###jsPDFVarTotalPages###"), !0);
                                        e.pdf.internal.events.subscribe("addPage", c, !1), c(), (_.FOOTER = 1);
                                    }
                                }),
                                (x = function (t, e, r, i, o, a) {
                                    if (!e) return !1;
                                    "string" == typeof e || e.parentNode || (e = "" + e.innerHTML),
                                        "string" == typeof e &&
                                            (e = (function (t) {
                                                var e, n, r, i;
                                                return (
                                                    (r = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0)),
                                                    (i =
                                                        "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;"),
                                                    (n = document.createElement("div")),
                                                    (n.style.cssText = i),
                                                    (n.innerHTML = '<iframe style="height:1px;width:1px" name="' + r + '" />'),
                                                    document.body.appendChild(n),
                                                    (e = window.frames[r]).document.open(),
                                                    e.document.writeln(t),
                                                    e.document.close(),
                                                    e.document.body
                                                );
                                            })(e.replace(/<\/?script[^>]*?>/gi, "")));
                                    var s,
                                        c = new f(t, r, i, o);
                                    return (
                                        v.call(this, e, c, o.elementHandlers, function (t) {
                                            b(e, c, o.elementHandlers),
                                                n(e, c, o.elementHandlers),
                                                c.pdf.internal.events.publish("htmlRenderingFinished"),
                                                (s = c.dispose()),
                                                "function" == typeof a ? a(s) : t && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
                                        }),
                                        s || { x: c.x, y: c.y }
                                    );
                                }),
                                ((f = function (t, e, n, r) {
                                    return (this.pdf = t), (this.x = e), (this.y = n), (this.settings = r), (this.watchFunctions = []), this.init(), this;
                                }).prototype.init = function () {
                                    return (this.paragraph = { text: [], style: [] }), this.pdf.internal.write("q");
                                }),
                                (f.prototype.dispose = function () {
                                    return this.pdf.internal.write("Q"), { x: this.x, y: this.y, ready: !0 };
                                }),
                                (f.prototype.executeWatchFunctions = function (t) {
                                    var e = !1,
                                        n = [];
                                    if (this.watchFunctions.length > 0) {
                                        for (var r = 0; r < this.watchFunctions.length; ++r) !0 === this.watchFunctions[r](t) ? (e = !0) : n.push(this.watchFunctions[r]);
                                        this.watchFunctions = n;
                                    }
                                    return e;
                                }),
                                (f.prototype.splitFragmentsIntoLines = function (t, n) {
                                    var r, i, o, a, s, c, l, h, u, d, f, p, g, m;
                                    for (d = this.pdf.internal.scaleFactor, a = {}, i = void 0, u = void 0, o = void 0, s = void 0, m = void 0, h = void 0, l = void 0, c = void 0, p = [(f = [])], r = 0, g = this.settings.width; t.length; )
                                        if (((s = t.shift()), (m = n.shift()), s))
                                            if (
                                                ((i = m["font-family"]),
                                                (u = m["font-style"]),
                                                (o = a[i + u]) || ((o = this.pdf.internal.getFont(i, u).metadata.Unicode), (a[i + u] = o)),
                                                (h = { widths: o.widths, kerning: o.kerning, fontSize: 12 * m["font-size"], textIndent: r }),
                                                (l = (this.pdf.getStringUnitWidth(s, h) * h.fontSize) / d),
                                                "\u2028" == s)
                                            )
                                                (f = []), p.push(f);
                                            else if (r + l > g) {
                                                for (c = this.pdf.splitTextToSize(s, g, h), f.push([c.shift(), m]); c.length; ) (f = [[c.shift(), m]]), p.push(f);
                                                r = (this.pdf.getStringUnitWidth(f[0][0], h) * h.fontSize) / d;
                                            } else f.push([s, m]), (r += l);
                                    if (void 0 !== m["text-align"] && ("center" === m["text-align"] || "right" === m["text-align"] || "justify" === m["text-align"]))
                                        for (var w = 0; w < p.length; ++w) {
                                            var y = (this.pdf.getStringUnitWidth(p[w][0][0], h) * h.fontSize) / d;
                                            w > 0 && (p[w][0][1] = e(p[w][0][1]));
                                            var v = g - y;
                                            if ("right" === m["text-align"]) p[w][0][1]["margin-left"] = v;
                                            else if ("center" === m["text-align"]) p[w][0][1]["margin-left"] = v / 2;
                                            else if ("justify" === m["text-align"]) {
                                                var b = p[w][0][0].split(" ").length - 1;
                                                (p[w][0][1]["word-spacing"] = v / b), w === p.length - 1 && (p[w][0][1]["word-spacing"] = 0);
                                            }
                                        }
                                    return p;
                                }),
                                (f.prototype.RenderTextFragment = function (t, e) {
                                    var n, r;
                                    (r = 0),
                                        this.pdf.internal.pageSize.height - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() &&
                                            (this.pdf.internal.write("ET", "Q"),
                                            this.pdf.addPage(),
                                            (this.y = this.pdf.margins_doc.top),
                                            this.pdf.internal.write("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), e.color, "Td"),
                                            (r = Math.max(r, e["line-height"], e["font-size"])),
                                            this.pdf.internal.write(0, (-12 * r).toFixed(2), "Td")),
                                        (n = this.pdf.internal.getFont(e["font-family"], e["font-style"]));
                                    var i = this.getPdfColor(e.color);
                                    i !== this.lastTextColor && (this.pdf.internal.write(i), (this.lastTextColor = i)),
                                        void 0 !== e["word-spacing"] && e["word-spacing"] > 0 && this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"),
                                        this.pdf.internal.write("/" + n.id, (12 * e["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t) + ") Tj"),
                                        void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw");
                                }),
                                (f.prototype.getPdfColor = function (t) {
                                    var e,
                                        n,
                                        r,
                                        i = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);
                                    if (
                                        (null != i
                                            ? ((e = parseInt(i[1])), (n = parseInt(i[2])), (r = parseInt(i[3])))
                                            : ("#" != t.charAt(0) && ((t = s.colorNameToHex(t)) || (t = "#000000")),
                                              (e = t.substring(1, 3)),
                                              (e = parseInt(e, 16)),
                                              (n = t.substring(3, 5)),
                                              (n = parseInt(n, 16)),
                                              (r = t.substring(5, 7)),
                                              (r = parseInt(r, 16))),
                                        "string" == typeof e && /^#[0-9A-Fa-f]{6}$/.test(e))
                                    ) {
                                        var o = parseInt(e.substr(1), 16);
                                        (e = (o >> 16) & 255), (n = (o >> 8) & 255), (r = 255 & o);
                                    }
                                    var a = this.f3;
                                    return (0 === e && 0 === n && 0 === r) || void 0 === n ? a(e / 255) + " g" : [a(e / 255), a(n / 255), a(r / 255), "rg"].join(" ");
                                }),
                                (f.prototype.f3 = function (t) {
                                    return t.toFixed(3);
                                }),
                                (f.prototype.renderParagraph = function (t) {
                                    var e, n, r, i, o, a, s, c, l, h, u, f, p;
                                    if (((r = d(this.paragraph.text)), (f = this.paragraph.style), (e = this.paragraph.blockstyle), (this.paragraph = { text: [], style: [], blockstyle: {}, priorblockstyle: e }), r.join("").trim())) {
                                        (s = this.splitFragmentsIntoLines(r, f)),
                                            (a = void 0),
                                            (c = void 0),
                                            (n = 12 / this.pdf.internal.scaleFactor),
                                            (this.priorMarginBottom = this.priorMarginBottom || 0),
                                            (u = (Math.max((e["margin-top"] || 0) - this.priorMarginBottom, 0) + (e["padding-top"] || 0)) * n),
                                            (h = ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * n),
                                            (this.priorMarginBottom = e["margin-bottom"] || 0),
                                            "always" === e["page-break-before"] && (this.pdf.addPage(), (this.y = 0), (u = ((e["margin-top"] || 0) + (e["padding-top"] || 0)) * n)),
                                            (l = this.pdf.internal.write),
                                            (i = void 0),
                                            (o = void 0),
                                            (this.y += u),
                                            l("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
                                        for (var g = 0; s.length; ) {
                                            for (c = 0, i = 0, o = (a = s.shift()).length; i !== o; ) a[i][0].trim() && ((c = Math.max(c, a[i][1]["line-height"], a[i][1]["font-size"])), (p = 7 * a[i][1]["font-size"])), i++;
                                            var m = 0,
                                                w = 0;
                                            for (
                                                void 0 !== a[0][1]["margin-left"] && a[0][1]["margin-left"] > 0 && ((m = (w = this.pdf.internal.getCoordinateString(a[0][1]["margin-left"])) - g), (g = w)),
                                                    l(m + Math.max(e["margin-left"] || 0, 0) * n, (-12 * c).toFixed(2), "Td"),
                                                    i = 0,
                                                    o = a.length;
                                                i !== o;

                                            )
                                                a[i][0] && this.RenderTextFragment(a[i][0], a[i][1]), i++;
                                            if (((this.y += c * n), this.executeWatchFunctions(a[0][1]) && s.length > 0)) {
                                                var y = [],
                                                    v = [];
                                                s.forEach(function (t) {
                                                    for (var e = 0, n = t.length; e !== n; ) t[e][0] && (y.push(t[e][0] + " "), v.push(t[e][1])), ++e;
                                                }),
                                                    (s = this.splitFragmentsIntoLines(d(y), v)),
                                                    l("ET", "Q"),
                                                    l("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
                                            }
                                        }
                                        return t && "function" == typeof t && t.call(this, this.x - 9, this.y - p / 2), l("ET", "Q"), (this.y += h);
                                    }
                                }),
                                (f.prototype.setBlockBoundary = function (t) {
                                    return this.renderParagraph(t);
                                }),
                                (f.prototype.setBlockStyle = function (t) {
                                    return (this.paragraph.blockstyle = t);
                                }),
                                (f.prototype.addText = function (t, e) {
                                    return this.paragraph.text.push(t), this.paragraph.style.push(e);
                                }),
                                (i = { helvetica: "helvetica", "sans-serif": "helvetica", "times new roman": "times", serif: "times", times: "times", monospace: "courier", courier: "courier" }),
                                (c = { 100: "normal", 200: "normal", 300: "normal", 400: "normal", 500: "bold", 600: "bold", 700: "bold", 800: "bold", 900: "bold", normal: "normal", bold: "bold", bolder: "bold", lighter: "normal" }),
                                (o = { normal: "normal", italic: "italic", oblique: "italic" }),
                                (a = { left: "left", right: "right", center: "center", justify: "justify" }),
                                (l = { none: "none", right: "right", left: "left" }),
                                (h = { none: "none", both: "both" }),
                                (m = { normal: 1 }),
                                (t.fromHTML = function (t, e, n, r, i, o) {
                                    return (this.margins_doc = o || { top: 0, bottom: 0 }), r || (r = {}), r.elementHandlers || (r.elementHandlers = {}), x(this, t, isNaN(e) ? 4 : e, isNaN(n) ? 4 : n, r, i);
                                });
                        })(i.API),
                        (function (t) {
                            var e, n, r;
                            i.API.addJS = function (t) {
                                return (
                                    (r = t),
                                    this.internal.events.subscribe("postPutResources", function (t) {
                                        (e = this.internal.newObject()),
                                            this.internal.write("<< /Names [(EmbeddedJS) " + (e + 1) + " 0 R] >>", "endobj"),
                                            (n = this.internal.newObject()),
                                            this.internal.write("<< /S /JavaScript /JS (", r, ") >>", "endobj");
                                    }),
                                    this.internal.events.subscribe("putCatalog", function () {
                                        void 0 !== e && void 0 !== n && this.internal.write("/Names <</JavaScript " + e + " 0 R>>");
                                    }),
                                    this
                                );
                            };
                        })(),
                        (function (t) {
                            t.events.push([
                                "postPutResources",
                                function () {
                                    var t = this,
                                        e = /^(\d+) 0 obj$/;
                                    if (this.outline.root.children.length > 0)
                                        for (var n = t.outline.render().split(/\r\n/), r = 0; r < n.length; r++) {
                                            var i = n[r],
                                                o = e.exec(i);
                                            if (null != o) {
                                                var a = o[1];
                                                t.internal.newObjectDeferredBegin(a);
                                            }
                                            t.internal.write(i);
                                        }
                                    if (this.outline.createNamedDestinations) {
                                        for (var s = this.internal.pages.length, c = [], r = 0; r < s; r++) {
                                            var l = t.internal.newObject();
                                            c.push(l);
                                            var h = t.internal.getPageInfo(r + 1);
                                            t.internal.write("<< /D[" + h.objId + " 0 R /XYZ null null null]>> endobj");
                                        }
                                        var u = t.internal.newObject();
                                        for (t.internal.write("<< /Names [ "), r = 0; r < c.length; r++) t.internal.write("(page_" + (r + 1) + ")" + c[r] + " 0 R");
                                        t.internal.write(" ] >>", "endobj"), t.internal.newObject(), t.internal.write("<< /Dests " + u + " 0 R"), t.internal.write(">>", "endobj");
                                    }
                                },
                            ]),
                                t.events.push([
                                    "putCatalog",
                                    function () {
                                        var t = this;
                                        t.outline.root.children.length > 0 && (t.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && t.internal.write("/Names " + namesOid + " 0 R"));
                                    },
                                ]),
                                t.events.push([
                                    "initialized",
                                    function () {
                                        var t = this;
                                        (t.outline = { createNamedDestinations: !1, root: { children: [] } }),
                                            (t.outline.add = function (t, e, n) {
                                                var r = { title: e, options: n, children: [] };
                                                return null == t && (t = this.root), t.children.push(r), r;
                                            }),
                                            (t.outline.render = function () {
                                                return (this.ctx = {}), (this.ctx.val = ""), (this.ctx.pdf = t), this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
                                            }),
                                            (t.outline.genIds_r = function (e) {
                                                e.id = t.internal.newObjectDeferred();
                                                for (var n = 0; n < e.children.length; n++) this.genIds_r(e.children[n]);
                                            }),
                                            (t.outline.renderRoot = function (t) {
                                                this.objStart(t),
                                                    this.line("/Type /Outlines"),
                                                    t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))),
                                                    this.line("/Count " + this.count_r({ count: 0 }, t)),
                                                    this.objEnd();
                                            }),
                                            (t.outline.renderItems = function (e) {
                                                for (i = 0; i < e.children.length; i++) {
                                                    (o = e.children[i]),
                                                        this.objStart(o),
                                                        this.line("/Title " + this.makeString(o.title)),
                                                        this.line("/Parent " + this.makeRef(e)),
                                                        i > 0 && this.line("/Prev " + this.makeRef(e.children[i - 1])),
                                                        i < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[i + 1])),
                                                        o.children.length > 0 && (this.line("/First " + this.makeRef(o.children[0])), this.line("/Last " + this.makeRef(o.children[o.children.length - 1])));
                                                    var n = (this.count = this.count_r({ count: 0 }, o));
                                                    if ((n > 0 && this.line("/Count " + n), o.options && o.options.pageNumber)) {
                                                        var r = t.internal.getPageInfo(o.options.pageNumber);
                                                        this.line("/Dest [" + r.objId + " 0 R /XYZ 0 " + this.ctx.pdf.internal.pageSize.height + " 0]");
                                                    }
                                                    this.objEnd();
                                                }
                                                for (var i = 0; i < e.children.length; i++) {
                                                    var o = e.children[i];
                                                    this.renderItems(o);
                                                }
                                            }),
                                            (t.outline.line = function (t) {
                                                this.ctx.val += t + "\r\n";
                                            }),
                                            (t.outline.makeRef = function (t) {
                                                return t.id + " 0 R";
                                            }),
                                            (t.outline.makeString = function (e) {
                                                return "(" + t.internal.pdfEscape(e) + ")";
                                            }),
                                            (t.outline.objStart = function (t) {
                                                this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
                                            }),
                                            (t.outline.objEnd = function (t) {
                                                this.ctx.val += ">> \r\nendobj\r\n";
                                            }),
                                            (t.outline.count_r = function (t, e) {
                                                for (var n = 0; n < e.children.length; n++) t.count++, this.count_r(t, e.children[n]);
                                                return t.count;
                                            });
                                    },
                                ]);
                        })(i.API),
                        (function (t) {
                            var e = function () {
                                    return "function" != typeof PNG || "function" != typeof h;
                                },
                                n = function (e) {
                                    return e !== t.image_compression.NONE && r();
                                },
                                r = function () {
                                    var t = "function" == typeof c;
                                    if (!t) throw new Error("requires deflate.js for compression");
                                    return t;
                                },
                                i = function (e, n, r, i) {
                                    var l = 5,
                                        h = d;
                                    switch (i) {
                                        case t.image_compression.FAST:
                                            (l = 3), (h = u);
                                            break;
                                        case t.image_compression.MEDIUM:
                                            (l = 6), (h = f);
                                            break;
                                        case t.image_compression.SLOW:
                                            (l = 9), (h = p);
                                    }
                                    e = s(e, n, r, h);
                                    var g = new Uint8Array(o(l)),
                                        m = a(e),
                                        w = new c(l),
                                        y = w.append(e),
                                        v = w.flush(),
                                        b = g.length + y.length + v.length,
                                        x = new Uint8Array(b + 4);
                                    return (
                                        x.set(g), x.set(y, g.length), x.set(v, g.length + y.length), (x[b++] = (m >>> 24) & 255), (x[b++] = (m >>> 16) & 255), (x[b++] = (m >>> 8) & 255), (x[b++] = 255 & m), t.arrayBufferToBinaryString(x)
                                    );
                                },
                                o = function (t, e) {
                                    var n = ((Math.LOG2E * Math.log(32768) - 8) << 4) | 8,
                                        r = n << 8;
                                    return (r |= Math.min(3, ((e - 1) & 255) >> 1) << 6), (r |= 0), (r += 31 - (r % 31)), [n, 255 & r];
                                },
                                a = function (t, e) {
                                    for (var n, r = 1, i = 0, o = t.length, a = 0; o > 0; ) {
                                        o -= n = o > e ? e : o;
                                        do {
                                            i += r += t[a++];
                                        } while (--n);
                                        (r %= 65521), (i %= 65521);
                                    }
                                    return ((i << 16) | r) >>> 0;
                                },
                                s = function (t, e, n, r) {
                                    for (var i, o, a, s = t.length / e, c = new Uint8Array(t.length + s), l = m(), h = 0; h < s; h++) {
                                        if (((a = h * e), (i = t.subarray(a, a + e)), r)) c.set(r(i, n, o), a + h);
                                        else {
                                            for (var u = 0, d = l.length, f = []; u < d; u++) f[u] = l[u](i, n, o);
                                            var p = w(f.concat());
                                            c.set(f[p], a + h);
                                        }
                                        o = i;
                                    }
                                    return c;
                                },
                                l = function (t, e, n) {
                                    var r = Array.apply([], t);
                                    return r.unshift(0), r;
                                },
                                u = function (t, e, n) {
                                    var r,
                                        i = [],
                                        o = 0,
                                        a = t.length;
                                    for (i[0] = 1; o < a; o++) (r = t[o - e] || 0), (i[o + 1] = (t[o] - r + 256) & 255);
                                    return i;
                                },
                                d = function (t, e, n) {
                                    var r,
                                        i = [],
                                        o = 0,
                                        a = t.length;
                                    for (i[0] = 2; o < a; o++) (r = (n && n[o]) || 0), (i[o + 1] = (t[o] - r + 256) & 255);
                                    return i;
                                },
                                f = function (t, e, n) {
                                    var r,
                                        i,
                                        o = [],
                                        a = 0,
                                        s = t.length;
                                    for (o[0] = 3; a < s; a++) (r = t[a - e] || 0), (i = (n && n[a]) || 0), (o[a + 1] = (t[a] + 256 - ((r + i) >>> 1)) & 255);
                                    return o;
                                },
                                p = function (t, e, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s = [],
                                        c = 0,
                                        l = t.length;
                                    for (s[0] = 4; c < l; c++) (r = t[c - e] || 0), (i = (n && n[c]) || 0), (o = (n && n[c - e]) || 0), (a = g(r, i, o)), (s[c + 1] = (t[c] - a + 256) & 255);
                                    return s;
                                },
                                g = function (t, e, n) {
                                    var r = t + e - n,
                                        i = Math.abs(r - t),
                                        o = Math.abs(r - e),
                                        a = Math.abs(r - n);
                                    return i <= o && i <= a ? t : o <= a ? e : n;
                                },
                                m = function () {
                                    return [l, u, d, f, p];
                                },
                                w = function (t) {
                                    for (var e, n, r, i = 0, o = t.length; i < o; ) ((e = y(t[i].slice(1))) < n || !n) && ((n = e), (r = i)), i++;
                                    return r;
                                },
                                y = function (t) {
                                    for (var e = 0, n = t.length, r = 0; e < n; ) r += Math.abs(t[e++]);
                                    return r;
                                },
                                v = function (e) {
                                    var n;
                                    switch (e) {
                                        case t.image_compression.FAST:
                                            n = 11;
                                            break;
                                        case t.image_compression.MEDIUM:
                                            n = 13;
                                            break;
                                        case t.image_compression.SLOW:
                                            n = 14;
                                            break;
                                        default:
                                            n = 12;
                                    }
                                    return n;
                                };
                            t.processPNG = function (t, r, o, a, s) {
                                var c,
                                    l,
                                    h,
                                    u,
                                    d,
                                    f,
                                    p = this.color_spaces.DEVICE_RGB,
                                    g = this.decode.FLATE_DECODE,
                                    m = 8;
                                if ((this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t))) {
                                    if (e()) throw new Error("PNG support requires png.js and zlib.js");
                                    if (((c = new PNG(t)), (t = c.imgData), (m = c.bits), (p = c.colorSpace), (u = c.colors), -1 !== [4, 6].indexOf(c.colorType))) {
                                        if (8 === c.bits)
                                            for (
                                                var w,
                                                    y = (P = 32 == c.pixelBitlength ? new Uint32Array(c.decodePixels().buffer) : 16 == c.pixelBitlength ? new Uint16Array(c.decodePixels().buffer) : new Uint8Array(c.decodePixels().buffer))
                                                        .length,
                                                    b = new Uint8Array(y * c.colors),
                                                    x = new Uint8Array(y),
                                                    k = c.pixelBitlength - c.bits,
                                                    _ = 0,
                                                    C = 0;
                                                _ < y;
                                                _++
                                            ) {
                                                for (T = P[_], w = 0; w < k; ) (b[C++] = (T >>> w) & 255), (w += c.bits);
                                                x[_] = (T >>> w) & 255;
                                            }
                                        if (16 === c.bits) {
                                            for (
                                                var T,
                                                    y = (P = new Uint32Array(c.decodePixels().buffer)).length,
                                                    b = new Uint8Array(y * (32 / c.pixelBitlength) * c.colors),
                                                    x = new Uint8Array(y * (32 / c.pixelBitlength)),
                                                    S = c.colors > 1,
                                                    _ = 0,
                                                    C = 0,
                                                    E = 0;
                                                _ < y;

                                            )
                                                (T = P[_++]), (b[C++] = (T >>> 0) & 255), S && ((b[C++] = (T >>> 16) & 255), (T = P[_++]), (b[C++] = (T >>> 0) & 255)), (x[E++] = (T >>> 16) & 255);
                                            m = 8;
                                        }
                                        n(a) ? ((t = i(b, c.width * c.colors, c.colors, a)), (f = i(x, c.width, 1, a))) : ((t = b), (f = x), (g = null));
                                    }
                                    if (3 === c.colorType && ((p = this.color_spaces.INDEXED), (d = c.palette), c.transparency.indexed)) {
                                        for (var A = c.transparency.indexed, I = 0, _ = 0, y = A.length; _ < y; ++_) I += A[_];
                                        if ((I /= 255) == y - 1 && -1 !== A.indexOf(0)) h = [A.indexOf(0)];
                                        else if (I !== y) {
                                            for (var P = c.decodePixels(), x = new Uint8Array(P.length), _ = 0, y = P.length; _ < y; _++) x[_] = A[P[_]];
                                            f = i(x, c.width, 1);
                                        }
                                    }
                                    var O = v(a);
                                    return (
                                        (l = g === this.decode.FLATE_DECODE ? "/Predictor " + O + " /Colors " + u + " /BitsPerComponent " + m + " /Columns " + c.width : "/Colors " + u + " /BitsPerComponent " + m + " /Columns " + c.width),
                                        (this.isArrayBuffer(t) || this.isArrayBufferView(t)) && (t = this.arrayBufferToBinaryString(t)),
                                        ((f && this.isArrayBuffer(f)) || this.isArrayBufferView(f)) && (f = this.arrayBufferToBinaryString(f)),
                                        this.createImageInfo(t, c.width, c.height, p, m, g, r, o, l, h, d, f, O)
                                    );
                                }
                                throw new Error("Unsupported PNG image data, try using JPEG instead.");
                            };
                        })(i.API),
                        (i.API.autoPrint = function () {
                            var t;
                            return (
                                this.internal.events.subscribe("postPutResources", function () {
                                    (t = this.internal.newObject()), this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj");
                                }),
                                this.internal.events.subscribe("putCatalog", function () {
                                    this.internal.write("/OpenAction " + t + " 0 R");
                                }),
                                this
                            );
                        }),
                        (function (t) {
                            var e = (t.getCharWidthsArray = function (t, e) {
                                    e || (e = {});
                                    var n,
                                        r,
                                        i,
                                        o = e.widths ? e.widths : this.internal.getFont().metadata.Unicode.widths,
                                        a = o.fof ? o.fof : 1,
                                        s = e.kerning ? e.kerning : this.internal.getFont().metadata.Unicode.kerning,
                                        c = s.fof ? s.fof : 1,
                                        l = 0,
                                        h = o[0] || a,
                                        u = [];
                                    for (n = 0, r = t.length; n < r; n++) (i = t.charCodeAt(n)), u.push((o[i] || h) / a + ((s[i] && s[i][l]) || 0) / c), (l = i);
                                    return u;
                                }),
                                n = function (t) {
                                    for (var e = t.length, n = 0; e; ) n += t[--e];
                                    return n;
                                },
                                r = (t.getStringUnitWidth = function (t, r) {
                                    return n(e.call(this, t, r));
                                }),
                                i = function (t, e, n, r) {
                                    for (var i = [], o = 0, a = t.length, s = 0; o !== a && s + e[o] < n; ) (s += e[o]), o++;
                                    i.push(t.slice(0, o));
                                    var c = o;
                                    for (s = 0; o !== a; ) s + e[o] > r && (i.push(t.slice(c, o)), (s = 0), (c = o)), (s += e[o]), o++;
                                    return c !== o && i.push(t.slice(c, o)), i;
                                },
                                o = function (t, o, a) {
                                    a || (a = {});
                                    var s,
                                        c,
                                        l,
                                        h,
                                        u,
                                        d,
                                        f = [],
                                        p = [f],
                                        g = a.textIndent || 0,
                                        m = 0,
                                        w = 0,
                                        y = t.split(" "),
                                        v = e(" ", a)[0];
                                    if ((d = -1 === a.lineIndent ? y[0].length + 2 : a.lineIndent || 0)) {
                                        var b = Array(d).join(" "),
                                            x = [];
                                        y.map(function (t) {
                                            (t = t.split(/\s*\n/)).length > 1
                                                ? (x = x.concat(
                                                      t.map(function (t, e) {
                                                          return (e && t.length ? "\n" : "") + t;
                                                      })
                                                  ))
                                                : x.push(t[0]);
                                        }),
                                            (y = x),
                                            (d = r(b, a));
                                    }
                                    for (l = 0, h = y.length; l < h; l++) {
                                        var k = 0;
                                        if (((s = y[l]), d && "\n" == s[0] && ((s = s.substr(1)), (k = 1)), (c = e(s, a)), (w = n(c)), g + m + w > o || k)) {
                                            if (w > o) {
                                                for (u = i(s, c, o - (g + m), o), f.push(u.shift()), f = [u.pop()]; u.length; ) p.push([u.shift()]);
                                                w = n(c.slice(s.length - f[0].length));
                                            } else f = [s];
                                            p.push(f), (g = w + d), (m = v);
                                        } else f.push(s), (g += m + w), (m = v);
                                    }
                                    if (d)
                                        _ = function (t, e) {
                                            return (e ? b : "") + t.join(" ");
                                        };
                                    else
                                        var _ = function (t) {
                                            return t.join(" ");
                                        };
                                    return p.map(_);
                                };
                            t.splitTextToSize = function (t, e, n) {
                                n || (n = {});
                                var r,
                                    i = n.fontSize || this.internal.getFontSize(),
                                    a = function (t) {
                                        var e = { 0: 1 },
                                            n = {};
                                        if (t.widths && t.kerning) return { widths: t.widths, kerning: t.kerning };
                                        var r = this.internal.getFont(t.fontName, t.fontStyle);
                                        return r.metadata.Unicode ? { widths: r.metadata.Unicode.widths || e, kerning: r.metadata.Unicode.kerning || n } : { widths: e, kerning: n };
                                    }.call(this, n);
                                r = Array.isArray(t) ? t : t.split(/\r?\n/);
                                var s = (1 * this.internal.scaleFactor * e) / i;
                                (a.textIndent = n.textIndent ? (1 * n.textIndent * this.internal.scaleFactor) / i : 0), (a.lineIndent = n.lineIndent);
                                var c,
                                    l,
                                    h = [];
                                for (c = 0, l = r.length; c < l; c++) h = h.concat(o(r[c], s, a));
                                return h;
                            };
                        })(i.API),
                        (function (t) {
                            var e = function (t) {
                                    for (var e = {}, n = 0; n < "klmnopqrstuvwxyz".length; n++) e["klmnopqrstuvwxyz"[n]] = "0123456789abcdef"[n];
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s = {},
                                        c = 1,
                                        l = s,
                                        h = [],
                                        u = "",
                                        d = "",
                                        f = t.length - 1;
                                    for (n = 1; n != f; )
                                        (a = t[n]),
                                            (n += 1),
                                            "'" == a
                                                ? r
                                                    ? ((o = r.join("")), (r = void 0))
                                                    : (r = [])
                                                : r
                                                ? r.push(a)
                                                : "{" == a
                                                ? (h.push([l, o]), (l = {}), (o = void 0))
                                                : "}" == a
                                                ? (((i = h.pop())[0][i[1]] = l), (o = void 0), (l = i[0]))
                                                : "-" == a
                                                ? (c = -1)
                                                : void 0 === o
                                                ? e.hasOwnProperty(a)
                                                    ? ((u += e[a]), (o = parseInt(u, 16) * c), (c = 1), (u = ""))
                                                    : (u += a)
                                                : e.hasOwnProperty(a)
                                                ? ((d += e[a]), (l[o] = parseInt(d, 16) * c), (c = 1), (o = void 0), (d = ""))
                                                : (d += a);
                                    return s;
                                },
                                n = {
                                    codePages: ["WinAnsiEncoding"],
                                    WinAnsiEncoding: e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}"),
                                },
                                r = {
                                    Unicode: {
                                        Courier: n,
                                        "Courier-Bold": n,
                                        "Courier-BoldOblique": n,
                                        "Courier-Oblique": n,
                                        Helvetica: n,
                                        "Helvetica-Bold": n,
                                        "Helvetica-BoldOblique": n,
                                        "Helvetica-Oblique": n,
                                        "Times-Roman": n,
                                        "Times-Bold": n,
                                        "Times-BoldItalic": n,
                                        "Times-Italic": n,
                                    },
                                },
                                i = {
                                    Unicode: {
                                        "Courier-Oblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                                        "Times-BoldItalic": e(
                                            "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
                                        ),
                                        "Helvetica-Bold": e(
                                            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
                                        ),
                                        Courier: e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                                        "Courier-BoldOblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                                        "Times-Bold": e(
                                            "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
                                        ),
                                        Helvetica: e(
                                            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
                                        ),
                                        "Helvetica-BoldOblique": e(
                                            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
                                        ),
                                        "Courier-Bold": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                                        "Times-Italic": e(
                                            "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
                                        ),
                                        "Times-Roman": e(
                                            "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
                                        ),
                                        "Helvetica-Oblique": e(
                                            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
                                        ),
                                    },
                                };
                            t.events.push([
                                "addFont",
                                function (t) {
                                    var e, n, o;
                                    (e = i.Unicode[t.PostScriptName]) && (((n = t.metadata.Unicode ? t.metadata.Unicode : (t.metadata.Unicode = {})).widths = e.widths), (n.kerning = e.kerning)),
                                        (o = r.Unicode[t.PostScriptName]) && (((n = t.metadata.Unicode ? t.metadata.Unicode : (t.metadata.Unicode = {})).encoding = o), o.codePages && o.codePages.length && (t.encoding = o.codePages[0]));
                                },
                            ]);
                        })(i.API),
                        (i.API.addSVG = function (t, e, n, r, i) {
                            if (void 0 === e || void 0 === n) throw new Error("addSVG needs values for 'x' and 'y'");
                            var o = (function (t, e) {
                                    var n = (e.contentWindow || e.contentDocument).document;
                                    return n.write(t), n.close(), n.getElementsByTagName("svg")[0];
                                })(
                                    t,
                                    (function (t) {
                                        var e = t.createElement("iframe");
                                        return (
                                            (function (t, e) {
                                                var n = e.createElement("style");
                                                (n.type = "text/css"), n.styleSheet ? (n.styleSheet.cssText = t) : n.appendChild(e.createTextNode(t)), e.getElementsByTagName("head")[0].appendChild(n);
                                            })(".jsPDF_sillysvg_iframe {display:none;position:absolute;}", t),
                                            (e.name = "childframe"),
                                            e.setAttribute("width", 0),
                                            e.setAttribute("height", 0),
                                            e.setAttribute("frameborder", "0"),
                                            e.setAttribute("scrolling", "no"),
                                            e.setAttribute("seamless", "seamless"),
                                            e.setAttribute("class", "jsPDF_sillysvg_iframe"),
                                            t.body.appendChild(e),
                                            e
                                        );
                                    })(document)
                                ),
                                a = [1, 1],
                                s = parseFloat(o.getAttribute("width")),
                                c = parseFloat(o.getAttribute("height"));
                            s && c && (r && i ? (a = [r / s, i / c]) : r ? (a = [r / s, r / s]) : i && (a = [i / c, i / c]));
                            var l,
                                h,
                                u,
                                d,
                                f = o.childNodes;
                            for (l = 0, h = f.length; l < h; l++)
                                (u = f[l]).tagName &&
                                    "PATH" === u.tagName.toUpperCase() &&
                                    (((d = (function (t) {
                                        for (var e = parseFloat(t[1]), n = parseFloat(t[2]), r = [], i = 3, o = t.length; i < o; )
                                            "c" === t[i]
                                                ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2]), parseFloat(t[i + 3]), parseFloat(t[i + 4]), parseFloat(t[i + 5]), parseFloat(t[i + 6])]), (i += 7))
                                                : "l" === t[i]
                                                ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2])]), (i += 3))
                                                : (i += 1);
                                        return [e, n, r];
                                    })(u.getAttribute("d").split(" ")))[0] = d[0] * a[0] + e),
                                    (d[1] = d[1] * a[1] + n),
                                    this.lines.call(this, d[2], d[0], d[1], a));
                            return this;
                        }),
                        (i.API.putTotalPages = function (t) {
                            for (var e = new RegExp(t, "g"), n = 1; n <= this.internal.getNumberOfPages(); n++)
                                for (var r = 0; r < this.internal.pages[n].length; r++) this.internal.pages[n][r] = this.internal.pages[n][r].replace(e, this.internal.getNumberOfPages());
                            return this;
                        }),
                        (function (t) {
                            var e = "",
                                n = "",
                                r = "";
                            i.API.addMetadata = function (t, i) {
                                return (
                                    (n = i || "http://jspdf.default.namespaceuri/"),
                                    (e = t),
                                    this.internal.events.subscribe("postPutResources", function () {
                                        if (e) {
                                            var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + n + '"><jspdf:metadata>',
                                                i = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                                                o = unescape(encodeURIComponent(t)),
                                                a = unescape(encodeURIComponent(e)),
                                                s = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                                                c = unescape(encodeURIComponent("</x:xmpmeta>")),
                                                l = o.length + a.length + s.length + i.length + c.length;
                                            (r = this.internal.newObject()),
                                                this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + l + " >>"),
                                                this.internal.write("stream"),
                                                this.internal.write(i + o + a + s + c),
                                                this.internal.write("endstream"),
                                                this.internal.write("endobj");
                                        } else r = "";
                                    }),
                                    this.internal.events.subscribe("putCatalog", function () {
                                        r && this.internal.write("/Metadata " + r + " 0 R");
                                    }),
                                    this
                                );
                            };
                        })(),
                        (function (t) {
                            if (((t.URL = t.URL || t.webkitURL), t.Blob && t.URL))
                                try {
                                    return void new Blob();
                                } catch (t) {}
                            var e =
                                t.BlobBuilder ||
                                t.WebKitBlobBuilder ||
                                t.MozBlobBuilder ||
                                (function (t) {
                                    var e = function (t) {
                                            return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1];
                                        },
                                        n = function () {
                                            this.data = [];
                                        },
                                        r = function (t, e, n) {
                                            (this.data = t), (this.size = t.length), (this.type = e), (this.encoding = n);
                                        },
                                        i = n.prototype,
                                        o = r.prototype,
                                        a = t.FileReaderSync,
                                        s = function (t) {
                                            this.code = this[(this.name = t)];
                                        },
                                        c = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
                                        l = c.length,
                                        h = t.URL || t.webkitURL || t,
                                        u = h.createObjectURL,
                                        d = h.revokeObjectURL,
                                        f = h,
                                        p = t.btoa,
                                        g = t.atob,
                                        m = t.ArrayBuffer,
                                        w = t.Uint8Array,
                                        y = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                                    for (r.fake = o.fake = !0; l--; ) s.prototype[c[l]] = l + 1;
                                    return (
                                        h.createObjectURL ||
                                            (f = t.URL = function (t) {
                                                var e,
                                                    n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                                                return (n.href = t), "origin" in n || ("data:" === n.protocol.toLowerCase() ? (n.origin = null) : ((e = t.match(y)), (n.origin = e && e[1]))), n;
                                            }),
                                        (f.createObjectURL = function (t) {
                                            var e,
                                                n = t.type;
                                            return (
                                                null === n && (n = "application/octet-stream"),
                                                t instanceof r
                                                    ? ((e = "data:" + n),
                                                      "base64" === t.encoding ? e + ";base64," + t.data : "URI" === t.encoding ? e + "," + decodeURIComponent(t.data) : p ? e + ";base64," + p(t.data) : e + "," + encodeURIComponent(t.data))
                                                    : u
                                                    ? u.call(h, t)
                                                    : void 0
                                            );
                                        }),
                                        (f.revokeObjectURL = function (t) {
                                            "data:" !== t.substring(0, 5) && d && d.call(h, t);
                                        }),
                                        (i.append = function (t) {
                                            var n = this.data;
                                            if (w && (t instanceof m || t instanceof w)) {
                                                for (var i = "", o = new w(t), c = 0, l = o.length; c < l; c++) i += String.fromCharCode(o[c]);
                                                n.push(i);
                                            } else if ("Blob" === e(t) || "File" === e(t)) {
                                                if (!a) throw new s("NOT_READABLE_ERR");
                                                var h = new a();
                                                n.push(h.readAsBinaryString(t));
                                            } else
                                                t instanceof r
                                                    ? "base64" === t.encoding && g
                                                        ? n.push(g(t.data))
                                                        : "URI" === t.encoding
                                                        ? n.push(decodeURIComponent(t.data))
                                                        : "raw" === t.encoding && n.push(t.data)
                                                    : ("string" != typeof t && (t += ""), n.push(unescape(encodeURIComponent(t))));
                                        }),
                                        (i.getBlob = function (t) {
                                            return arguments.length || (t = null), new r(this.data.join(""), t, "raw");
                                        }),
                                        (i.toString = function () {
                                            return "[object BlobBuilder]";
                                        }),
                                        (o.slice = function (t, e, n) {
                                            var i = arguments.length;
                                            return i < 3 && (n = null), new r(this.data.slice(t, i > 1 ? e : this.data.length), n, this.encoding);
                                        }),
                                        (o.toString = function () {
                                            return "[object Blob]";
                                        }),
                                        (o.close = function () {
                                            (this.size = 0), delete this.data;
                                        }),
                                        n
                                    );
                                })(t);
                            t.Blob = function (t, n) {
                                var r = n ? n.type || "" : "",
                                    i = new e();
                                if (t) for (var o = 0, a = t.length; o < a; o++) Uint8Array && t[o] instanceof Uint8Array ? i.append(t[o].buffer) : i.append(t[o]);
                                var s = i.getBlob(r);
                                return !s.slice && s.webkitSlice && (s.slice = s.webkitSlice), s;
                            };
                            var n =
                                Object.getPrototypeOf ||
                                function (t) {
                                    return t.__proto__;
                                };
                            t.Blob.prototype = n(new t.Blob());
                        })(("undefined" != typeof self && self) || ("undefined" != typeof window && window) || (void 0).content || void 0);
                    var a =
                        a ||
                        (function (t) {
                            if (!(void 0 === t || ("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent)))) {
                                var e = function () {
                                        return t.URL || t.webkitURL || t;
                                    },
                                    n = t.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                                    r = "download" in n,
                                    i = /constructor/i.test(t.HTMLElement) || t.safari,
                                    o = /CriOS\/[\d]+/.test(navigator.userAgent),
                                    a = function (e) {
                                        (t.setImmediate || t.setTimeout)(function () {
                                            throw e;
                                        }, 0);
                                    },
                                    s = function (t) {
                                        setTimeout(function () {
                                            "string" == typeof t ? e().revokeObjectURL(t) : t.remove();
                                        }, 4e4);
                                    },
                                    c = function (t, e, n) {
                                        for (var r = (e = [].concat(e)).length; r--; ) {
                                            var i = t["on" + e[r]];
                                            if ("function" == typeof i)
                                                try {
                                                    i.call(t, n || t);
                                                } catch (t) {
                                                    a(t);
                                                }
                                        }
                                    },
                                    l = function (t) {
                                        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
                                    },
                                    h = function (a, h, u) {
                                        u || (a = l(a));
                                        var d,
                                            f = this,
                                            p = "application/octet-stream" === a.type,
                                            g = function () {
                                                c(f, "writestart progress write writeend".split(" "));
                                            };
                                        if (((f.readyState = f.INIT), r))
                                            return (
                                                (d = e().createObjectURL(a)),
                                                void setTimeout(function () {
                                                    (n.href = d),
                                                        (n.download = h),
                                                        (function (t) {
                                                            var e = new MouseEvent("click");
                                                            t.dispatchEvent(e);
                                                        })(n),
                                                        g(),
                                                        s(d),
                                                        (f.readyState = f.DONE);
                                                })
                                            );
                                        !(function () {
                                            if ((o || (p && i)) && t.FileReader) {
                                                var n = new FileReader();
                                                return (
                                                    (n.onloadend = function () {
                                                        var e = o ? n.result : n.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                                        t.open(e, "_blank") || (t.location.href = e), (e = void 0), (f.readyState = f.DONE), g();
                                                    }),
                                                    n.readAsDataURL(a),
                                                    void (f.readyState = f.INIT)
                                                );
                                            }
                                            d || (d = e().createObjectURL(a)), p ? (t.location.href = d) : t.open(d, "_blank") || (t.location.href = d), (f.readyState = f.DONE), g(), s(d);
                                        })();
                                    },
                                    u = h.prototype;
                                return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
                                    ? function (t, e, n) {
                                          return (e = e || t.name || "download"), n || (t = l(t)), navigator.msSaveOrOpenBlob(t, e);
                                      }
                                    : ((u.abort = function () {}),
                                      (u.readyState = u.INIT = 0),
                                      (u.WRITING = 1),
                                      (u.DONE = 2),
                                      (u.error = u.onwritestart = u.onprogress = u.onwrite = u.onabort = u.onerror = u.onwriteend = null),
                                      function (t, e, n) {
                                          return new h(t, e || t.name || "download", n);
                                      });
                            }
                        })(("undefined" != typeof self && self) || ("undefined" != typeof window && window) || (void 0).content);
                    !!e.exports && (e.exports.saveAs = a),
                        (e.exports = (function () {
                            var t = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array,
                                e = null,
                                n = (function () {
                                    if (!t)
                                        return function () {
                                            return !1;
                                        };
                                    try {
                                        var n = {};
                                        "function" == typeof n.Buffer && (e = n.Buffer);
                                    } catch (t) {}
                                    return function (t) {
                                        return t instanceof ArrayBuffer || (null !== e && t instanceof e);
                                    };
                                })(),
                                r =
                                    null !== e
                                        ? function (t) {
                                              return new e(t, "utf8").toString("binary");
                                          }
                                        : function (t) {
                                              return unescape(encodeURIComponent(t));
                                          },
                                i = function (t, e) {
                                    for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++) r = (r + (n = (n + (255 & e.charCodeAt(i))) % 65521)) % 65521;
                                    return ((r << 16) | n) >>> 0;
                                },
                                o = function (t, e) {
                                    for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++) r = (r + (n = (n + e[i]) % 65521)) % 65521;
                                    return ((r << 16) | n) >>> 0;
                                },
                                a = {},
                                s = (a.Adler32 = (function () {
                                    var e = function (t) {
                                            if (!(this instanceof e)) throw new TypeError("Constructor cannot called be as a function.");
                                            if (!isFinite((t = null == t ? 1 : +t))) throw new Error("First arguments needs to be a finite number.");
                                            this.checksum = t >>> 0;
                                        },
                                        a = (e.prototype = {});
                                    return (
                                        (a.constructor = e),
                                        (e.from = (function (t) {
                                            return (t.prototype = a), t;
                                        })(function (t) {
                                            if (!(this instanceof e)) throw new TypeError("Constructor cannot called be as a function.");
                                            if (null == t) throw new Error("First argument needs to be a string.");
                                            this.checksum = i(1, t.toString());
                                        })),
                                        (e.fromUtf8 = (function (t) {
                                            return (t.prototype = a), t;
                                        })(function (t) {
                                            if (!(this instanceof e)) throw new TypeError("Constructor cannot called be as a function.");
                                            if (null == t) throw new Error("First argument needs to be a string.");
                                            var n = r(t.toString());
                                            this.checksum = i(1, n);
                                        })),
                                        t &&
                                            (e.fromBuffer = (function (t) {
                                                return (t.prototype = a), t;
                                            })(function (t) {
                                                if (!(this instanceof e)) throw new TypeError("Constructor cannot called be as a function.");
                                                if (!n(t)) throw new Error("First argument needs to be ArrayBuffer.");
                                                var r = new Uint8Array(t);
                                                return (this.checksum = o(1, r));
                                            })),
                                        (a.update = function (t) {
                                            if (null == t) throw new Error("First argument needs to be a string.");
                                            return (t = t.toString()), (this.checksum = i(this.checksum, t));
                                        }),
                                        (a.updateUtf8 = function (t) {
                                            if (null == t) throw new Error("First argument needs to be a string.");
                                            var e = r(t.toString());
                                            return (this.checksum = i(this.checksum, e));
                                        }),
                                        t &&
                                            (a.updateBuffer = function (t) {
                                                if (!n(t)) throw new Error("First argument needs to be ArrayBuffer.");
                                                var e = new Uint8Array(t);
                                                return (this.checksum = o(this.checksum, e));
                                            }),
                                        (a.clone = function () {
                                            return new s(this.checksum);
                                        }),
                                        e
                                    );
                                })());
                            return (
                                (a.from = function (t) {
                                    if (null == t) throw new Error("First argument needs to be a string.");
                                    return i(1, t.toString());
                                }),
                                (a.fromUtf8 = function (t) {
                                    if (null == t) throw new Error("First argument needs to be a string.");
                                    var e = r(t.toString());
                                    return i(1, e);
                                }),
                                t &&
                                    (a.fromBuffer = function (t) {
                                        if (!n(t)) throw new Error("First argument need to be ArrayBuffer.");
                                        var e = new Uint8Array(t);
                                        return o(1, e);
                                    }),
                                a
                            );
                        })());
                    var s = {};
                    (s._colorsTable = {
                        aliceblue: "#f0f8ff",
                        antiquewhite: "#faebd7",
                        aqua: "#00ffff",
                        aquamarine: "#7fffd4",
                        azure: "#f0ffff",
                        beige: "#f5f5dc",
                        bisque: "#ffe4c4",
                        black: "#000000",
                        blanchedalmond: "#ffebcd",
                        blue: "#0000ff",
                        blueviolet: "#8a2be2",
                        brown: "#a52a2a",
                        burlywood: "#deb887",
                        cadetblue: "#5f9ea0",
                        chartreuse: "#7fff00",
                        chocolate: "#d2691e",
                        coral: "#ff7f50",
                        cornflowerblue: "#6495ed",
                        cornsilk: "#fff8dc",
                        crimson: "#dc143c",
                        cyan: "#00ffff",
                        darkblue: "#00008b",
                        darkcyan: "#008b8b",
                        darkgoldenrod: "#b8860b",
                        darkgray: "#a9a9a9",
                        darkgreen: "#006400",
                        darkkhaki: "#bdb76b",
                        darkmagenta: "#8b008b",
                        darkolivegreen: "#556b2f",
                        darkorange: "#ff8c00",
                        darkorchid: "#9932cc",
                        darkred: "#8b0000",
                        darksalmon: "#e9967a",
                        darkseagreen: "#8fbc8f",
                        darkslateblue: "#483d8b",
                        darkslategray: "#2f4f4f",
                        darkturquoise: "#00ced1",
                        darkviolet: "#9400d3",
                        deeppink: "#ff1493",
                        deepskyblue: "#00bfff",
                        dimgray: "#696969",
                        dodgerblue: "#1e90ff",
                        firebrick: "#b22222",
                        floralwhite: "#fffaf0",
                        forestgreen: "#228b22",
                        fuchsia: "#ff00ff",
                        gainsboro: "#dcdcdc",
                        ghostwhite: "#f8f8ff",
                        gold: "#ffd700",
                        goldenrod: "#daa520",
                        gray: "#808080",
                        green: "#008000",
                        greenyellow: "#adff2f",
                        honeydew: "#f0fff0",
                        hotpink: "#ff69b4",
                        "indianred ": "#cd5c5c",
                        indigo: "#4b0082",
                        ivory: "#fffff0",
                        khaki: "#f0e68c",
                        lavender: "#e6e6fa",
                        lavenderblush: "#fff0f5",
                        lawngreen: "#7cfc00",
                        lemonchiffon: "#fffacd",
                        lightblue: "#add8e6",
                        lightcoral: "#f08080",
                        lightcyan: "#e0ffff",
                        lightgoldenrodyellow: "#fafad2",
                        lightgrey: "#d3d3d3",
                        lightgreen: "#90ee90",
                        lightpink: "#ffb6c1",
                        lightsalmon: "#ffa07a",
                        lightseagreen: "#20b2aa",
                        lightskyblue: "#87cefa",
                        lightslategray: "#778899",
                        lightsteelblue: "#b0c4de",
                        lightyellow: "#ffffe0",
                        lime: "#00ff00",
                        limegreen: "#32cd32",
                        linen: "#faf0e6",
                        magenta: "#ff00ff",
                        maroon: "#800000",
                        mediumaquamarine: "#66cdaa",
                        mediumblue: "#0000cd",
                        mediumorchid: "#ba55d3",
                        mediumpurple: "#9370d8",
                        mediumseagreen: "#3cb371",
                        mediumslateblue: "#7b68ee",
                        mediumspringgreen: "#00fa9a",
                        mediumturquoise: "#48d1cc",
                        mediumvioletred: "#c71585",
                        midnightblue: "#191970",
                        mintcream: "#f5fffa",
                        mistyrose: "#ffe4e1",
                        moccasin: "#ffe4b5",
                        navajowhite: "#ffdead",
                        navy: "#000080",
                        oldlace: "#fdf5e6",
                        olive: "#808000",
                        olivedrab: "#6b8e23",
                        orange: "#ffa500",
                        orangered: "#ff4500",
                        orchid: "#da70d6",
                        palegoldenrod: "#eee8aa",
                        palegreen: "#98fb98",
                        paleturquoise: "#afeeee",
                        palevioletred: "#d87093",
                        papayawhip: "#ffefd5",
                        peachpuff: "#ffdab9",
                        peru: "#cd853f",
                        pink: "#ffc0cb",
                        plum: "#dda0dd",
                        powderblue: "#b0e0e6",
                        purple: "#800080",
                        red: "#ff0000",
                        rosybrown: "#bc8f8f",
                        royalblue: "#4169e1",
                        saddlebrown: "#8b4513",
                        salmon: "#fa8072",
                        sandybrown: "#f4a460",
                        seagreen: "#2e8b57",
                        seashell: "#fff5ee",
                        sienna: "#a0522d",
                        silver: "#c0c0c0",
                        skyblue: "#87ceeb",
                        slateblue: "#6a5acd",
                        slategray: "#708090",
                        snow: "#fffafa",
                        springgreen: "#00ff7f",
                        steelblue: "#4682b4",
                        tan: "#d2b48c",
                        teal: "#008080",
                        thistle: "#d8bfd8",
                        tomato: "#ff6347",
                        turquoise: "#40e0d0",
                        violet: "#ee82ee",
                        wheat: "#f5deb3",
                        white: "#ffffff",
                        whitesmoke: "#f5f5f5",
                        yellow: "#ffff00",
                        yellowgreen: "#9acd32",
                    }),
                        (s.colorNameToHex = function (t) {
                            return (t = t.toLowerCase()), void 0 !== this._colorsTable[t] && this._colorsTable[t];
                        });
                    var c = (function (t) {
                        function e() {
                            function t(t) {
                                var e,
                                    n,
                                    i,
                                    o,
                                    a,
                                    c,
                                    l = r.dyn_tree,
                                    h = r.stat_desc.static_tree,
                                    u = r.stat_desc.extra_bits,
                                    f = r.stat_desc.extra_base,
                                    p = r.stat_desc.max_length,
                                    g = 0;
                                for (o = 0; o <= s; o++) t.bl_count[o] = 0;
                                for (l[2 * t.heap[t.heap_max] + 1] = 0, e = t.heap_max + 1; e < d; e++)
                                    (o = l[2 * l[2 * (n = t.heap[e]) + 1] + 1] + 1) > p && ((o = p), g++),
                                        (l[2 * n + 1] = o),
                                        n > r.max_code || (t.bl_count[o]++, (a = 0), n >= f && (a = u[n - f]), (c = l[2 * n]), (t.opt_len += c * (o + a)), h && (t.static_len += c * (h[2 * n + 1] + a)));
                                if (0 !== g) {
                                    do {
                                        for (o = p - 1; 0 === t.bl_count[o]; ) o--;
                                        t.bl_count[o]--, (t.bl_count[o + 1] += 2), t.bl_count[p]--, (g -= 2);
                                    } while (g > 0);
                                    for (o = p; 0 !== o; o--) for (n = t.bl_count[o]; 0 !== n; ) (i = t.heap[--e]) > r.max_code || (l[2 * i + 1] != o && ((t.opt_len += (o - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = o)), n--);
                                }
                            }
                            function e(t, e) {
                                var n = 0;
                                do {
                                    (n |= 1 & t), (t >>>= 1), (n <<= 1);
                                } while (--e > 0);
                                return n >>> 1;
                            }
                            function n(t, n, r) {
                                var i,
                                    o,
                                    a,
                                    c = [],
                                    l = 0;
                                for (i = 1; i <= s; i++) c[i] = l = (l + r[i - 1]) << 1;
                                for (o = 0; o <= n; o++) 0 !== (a = t[2 * o + 1]) && (t[2 * o] = e(c[a]++, a));
                            }
                            var r = this;
                            r.build_tree = function (e) {
                                var i,
                                    o,
                                    a,
                                    s = r.dyn_tree,
                                    c = r.stat_desc.static_tree,
                                    l = r.stat_desc.elems,
                                    h = -1;
                                for (e.heap_len = 0, e.heap_max = d, i = 0; i < l; i++) 0 !== s[2 * i] ? ((e.heap[++e.heap_len] = h = i), (e.depth[i] = 0)) : (s[2 * i + 1] = 0);
                                for (; e.heap_len < 2; ) (s[2 * (a = e.heap[++e.heap_len] = h < 2 ? ++h : 0)] = 1), (e.depth[a] = 0), e.opt_len--, c && (e.static_len -= c[2 * a + 1]);
                                for (r.max_code = h, i = Math.floor(e.heap_len / 2); i >= 1; i--) e.pqdownheap(s, i);
                                a = l;
                                do {
                                    (i = e.heap[1]),
                                        (e.heap[1] = e.heap[e.heap_len--]),
                                        e.pqdownheap(s, 1),
                                        (o = e.heap[1]),
                                        (e.heap[--e.heap_max] = i),
                                        (e.heap[--e.heap_max] = o),
                                        (s[2 * a] = s[2 * i] + s[2 * o]),
                                        (e.depth[a] = Math.max(e.depth[i], e.depth[o]) + 1),
                                        (s[2 * i + 1] = s[2 * o + 1] = a),
                                        (e.heap[1] = a++),
                                        e.pqdownheap(s, 1);
                                } while (e.heap_len >= 2);
                                (e.heap[--e.heap_max] = e.heap[1]), t(e), n(s, r.max_code, e.bl_count);
                            };
                        }
                        function n(t, e, n, r, i) {
                            var o = this;
                            (o.static_tree = t), (o.extra_bits = e), (o.extra_base = n), (o.elems = r), (o.max_length = i);
                        }
                        function r(t, e, n, r, i) {
                            var o = this;
                            (o.good_length = t), (o.max_lazy = e), (o.nice_length = n), (o.max_chain = r), (o.func = i);
                        }
                        function i(t, e, n, r) {
                            var i = t[2 * e],
                                o = t[2 * n];
                            return i < o || (i == o && r[e] <= r[n]);
                        }
                        function o() {
                            function t() {
                                var t;
                                for (t = 0; t < u; t++) Ht[2 * t] = 0;
                                for (t = 0; t < c; t++) Wt[2 * t] = 0;
                                for (t = 0; t < l; t++) Vt[2 * t] = 0;
                                (Ht[2 * f] = 1), (Xt.opt_len = Xt.static_len = 0), ($t = te = 0);
                            }
                            function r(t, e) {
                                var n,
                                    r,
                                    i = -1,
                                    o = t[1],
                                    a = 0,
                                    s = 7,
                                    c = 4;
                                for (0 === o && ((s = 138), (c = 3)), t[2 * (e + 1) + 1] = 65535, n = 0; n <= e; n++)
                                    (r = o),
                                        (o = t[2 * (n + 1) + 1]),
                                        (++a < s && r == o) ||
                                            (a < c ? (Vt[2 * r] += a) : 0 !== r ? (r != i && Vt[2 * r]++, Vt[2 * p]++) : a <= 10 ? Vt[2 * g]++ : Vt[2 * m]++,
                                            (a = 0),
                                            (i = r),
                                            0 === o ? ((s = 138), (c = 3)) : r == o ? ((s = 6), (c = 3)) : ((s = 7), (c = 4)));
                            }
                            function o() {
                                var t;
                                for (r(Ht, Gt.max_code), r(Wt, Yt.max_code), Qt.build_tree(Xt), t = l - 1; t >= 3 && 0 === Vt[2 * e.bl_order[t] + 1]; t--);
                                return (Xt.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
                            }
                            function a(t) {
                                Xt.pending_buf[Xt.pending++] = t;
                            }
                            function s(t) {
                                a(255 & t), a((t >>> 8) & 255);
                            }
                            function d(t, e) {
                                var n,
                                    r = e;
                                re > w - r ? (s((ne |= ((n = t) << re) & 65535)), (ne = n >>> (w - re)), (re += r - w)) : ((ne |= (t << re) & 65535), (re += r));
                            }
                            function q(t, e) {
                                var n = 2 * t;
                                d(65535 & e[n], 65535 & e[n + 1]);
                            }
                            function et(t, e) {
                                var n,
                                    r,
                                    i = -1,
                                    o = t[1],
                                    a = 0,
                                    s = 7,
                                    c = 4;
                                for (0 === o && ((s = 138), (c = 3)), n = 0; n <= e; n++)
                                    if (((r = o), (o = t[2 * (n + 1) + 1]), !(++a < s && r == o))) {
                                        if (a < c)
                                            do {
                                                q(r, Vt);
                                            } while (0 != --a);
                                        else 0 !== r ? (r != i && (q(r, Vt), a--), q(p, Vt), d(a - 3, 2)) : a <= 10 ? (q(g, Vt), d(a - 3, 3)) : (q(m, Vt), d(a - 11, 7));
                                        (a = 0), (i = r), 0 === o ? ((s = 138), (c = 3)) : r == o ? ((s = 6), (c = 3)) : ((s = 7), (c = 4));
                                    }
                            }
                            function nt(t, n, r) {
                                var i;
                                for (d(t - 257, 5), d(n - 1, 5), d(r - 4, 4), i = 0; i < r; i++) d(Vt[2 * e.bl_order[i] + 1], 3);
                                et(Ht, t - 1), et(Wt, n - 1);
                            }
                            function rt() {
                                16 == re ? (s(ne), (ne = 0), (re = 0)) : re >= 8 && (a(255 & ne), (ne >>>= 8), (re -= 8));
                            }
                            function it() {
                                d(J << 1, 3), q(f, n.static_ltree), rt(), 1 + ee + 10 - re < 9 && (d(J << 1, 3), q(f, n.static_ltree), rt()), (ee = 7);
                            }
                            function ot(t, n) {
                                var r, i, o;
                                if (
                                    ((Xt.pending_buf[Zt + 2 * $t] = (t >>> 8) & 255),
                                    (Xt.pending_buf[Zt + 2 * $t + 1] = 255 & t),
                                    (Xt.pending_buf[Jt + $t] = 255 & n),
                                    $t++,
                                    0 === t ? Ht[2 * n]++ : (te++, t--, Ht[2 * (e._length_code[n] + h + 1)]++, Wt[2 * e.d_code(t)]++),
                                    0 == (8191 & $t) && jt > 2)
                                ) {
                                    for (r = 8 * $t, i = Rt - It, o = 0; o < c; o++) r += Wt[2 * o] * (5 + e.extra_dbits[o]);
                                    if (((r >>>= 3), te < Math.floor($t / 2) && r < Math.floor(i / 2))) return !0;
                                }
                                return $t == Kt - 1;
                            }
                            function at(t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = 0;
                                if (0 !== $t)
                                    do {
                                        (r = ((Xt.pending_buf[Zt + 2 * s] << 8) & 65280) | (255 & Xt.pending_buf[Zt + 2 * s + 1])),
                                            (i = 255 & Xt.pending_buf[Jt + s]),
                                            s++,
                                            0 === r
                                                ? q(i, t)
                                                : (q((o = e._length_code[i]) + h + 1, t),
                                                  0 !== (a = e.extra_lbits[o]) && d((i -= e.base_length[o]), a),
                                                  r--,
                                                  q((o = e.d_code(r)), n),
                                                  0 !== (a = e.extra_dbits[o]) && d((r -= e.base_dist[o]), a));
                                    } while (s < $t);
                                q(f, t), (ee = t[2 * f + 1]);
                            }
                            function st() {
                                re > 8 ? s(ne) : re > 0 && a(255 & ne), (ne = 0), (re = 0);
                            }
                            function ct(t, e, n) {
                                d((Q << 1) + (n ? 1 : 0), 3),
                                    (function (t, e, n) {
                                        st(), (ee = 8), n && (s(e), s(~e)), Xt.pending_buf.set(bt.subarray(t, t + e), Xt.pending), (Xt.pending += e);
                                    })(t, e, !0);
                            }
                            function lt(e) {
                                (function (e, r, i) {
                                    var a,
                                        s,
                                        c = 0;
                                    jt > 0 ? (Gt.build_tree(Xt), Yt.build_tree(Xt), (c = o()), (a = (Xt.opt_len + 3 + 7) >>> 3), (s = (Xt.static_len + 3 + 7) >>> 3) <= a && (a = s)) : (a = s = r + 5),
                                        r + 4 <= a && -1 != e
                                            ? ct(e, r, i)
                                            : s == a
                                            ? (d((J << 1) + (i ? 1 : 0), 3), at(n.static_ltree, n.static_dtree))
                                            : (d((K << 1) + (i ? 1 : 0), 3), nt(Gt.max_code + 1, Yt.max_code + 1, c + 1), at(Ht, Wt)),
                                        t(),
                                        i && st();
                                })(It >= 0 ? It : -1, Rt - It, e),
                                    (It = Rt),
                                    ft.flush_pending();
                            }
                            function ht() {
                                var t, e, n, r;
                                do {
                                    if (0 == (r = xt - Ft - Rt) && 0 === Rt && 0 === Ft) r = wt;
                                    else if (-1 == r) r--;
                                    else if (Rt >= wt + wt - tt) {
                                        bt.set(bt.subarray(wt, wt + wt), 0), (Bt -= wt), (Rt -= wt), (It -= wt), (n = t = Tt);
                                        do {
                                            (e = 65535 & _t[--n]), (_t[n] = e >= wt ? e - wt : 0);
                                        } while (0 != --t);
                                        n = t = wt;
                                        do {
                                            (e = 65535 & kt[--n]), (kt[n] = e >= wt ? e - wt : 0);
                                        } while (0 != --t);
                                        r += wt;
                                    }
                                    if (0 === ft.avail_in) return;
                                    (t = ft.read_buf(bt, Rt + Ft, r)), (Ft += t) >= $ && ((Ct = 255 & bt[Rt]), (Ct = ((Ct << At) ^ (255 & bt[Rt + 1])) & Et));
                                } while (Ft < tt && 0 !== ft.avail_in);
                            }
                            function ut(t) {
                                var e,
                                    n,
                                    r = Lt,
                                    i = Rt,
                                    o = Dt,
                                    a = Rt > wt - tt ? Rt - (wt - tt) : 0,
                                    s = Ut,
                                    c = vt,
                                    l = Rt + Z,
                                    h = bt[i + o - 1],
                                    u = bt[i + o];
                                Dt >= zt && (r >>= 2), s > Ft && (s = Ft);
                                do {
                                    if (((e = t), bt[e + o] == u && bt[e + o - 1] == h && bt[e] == bt[i] && bt[++e] == bt[i + 1])) {
                                        (i += 2), e++;
                                        do {} while (bt[++i] == bt[++e] && bt[++i] == bt[++e] && bt[++i] == bt[++e] && bt[++i] == bt[++e] && bt[++i] == bt[++e] && bt[++i] == bt[++e] && bt[++i] == bt[++e] && bt[++i] == bt[++e] && i < l);
                                        if (((n = Z - (l - i)), (i = l - Z), n > o)) {
                                            if (((Bt = t), (o = n), n >= s)) break;
                                            (h = bt[i + o - 1]), (u = bt[i + o]);
                                        }
                                    }
                                } while ((t = 65535 & kt[t & c]) > a && 0 != --r);
                                return o <= Ft ? o : Ft;
                            }
                            function dt(e) {
                                return (
                                    (e.total_in = e.total_out = 0),
                                    (e.msg = null),
                                    (Xt.pending = 0),
                                    (Xt.pending_out = 0),
                                    (pt = X),
                                    (mt = k),
                                    (Gt.dyn_tree = Ht),
                                    (Gt.stat_desc = n.static_l_desc),
                                    (Yt.dyn_tree = Wt),
                                    (Yt.stat_desc = n.static_d_desc),
                                    (Qt.dyn_tree = Vt),
                                    (Qt.stat_desc = n.static_bl_desc),
                                    (ne = 0),
                                    (re = 0),
                                    (ee = 8),
                                    t(),
                                    (function () {
                                        var t;
                                        for (xt = 2 * wt, _t[Tt - 1] = 0, t = 0; t < Tt - 1; t++) _t[t] = 0;
                                        (Nt = N[jt].max_lazy), (zt = N[jt].good_length), (Ut = N[jt].nice_length), (Lt = N[jt].max_chain), (Rt = 0), (It = 0), (Ft = 0), (Pt = Dt = $ - 1), (qt = 0), (Ct = 0);
                                    })(),
                                    S
                                );
                            }
                            var ft,
                                pt,
                                gt,
                                mt,
                                wt,
                                yt,
                                vt,
                                bt,
                                xt,
                                kt,
                                _t,
                                Ct,
                                Tt,
                                St,
                                Et,
                                At,
                                It,
                                Pt,
                                Ot,
                                qt,
                                Rt,
                                Bt,
                                Ft,
                                Dt,
                                Lt,
                                Nt,
                                jt,
                                Mt,
                                zt,
                                Ut,
                                Ht,
                                Wt,
                                Vt,
                                Xt = this,
                                Gt = new e(),
                                Yt = new e(),
                                Qt = new e();
                            Xt.depth = [];
                            var Jt, Kt, $t, Zt, te, ee, ne, re;
                            (Xt.bl_count = []),
                                (Xt.heap = []),
                                (Ht = []),
                                (Wt = []),
                                (Vt = []),
                                (Xt.pqdownheap = function (t, e) {
                                    for (var n = Xt.heap, r = n[e], o = e << 1; o <= Xt.heap_len && (o < Xt.heap_len && i(t, n[o + 1], n[o], Xt.depth) && o++, !i(t, r, n[o], Xt.depth)); ) (n[e] = n[o]), (e = o), (o <<= 1);
                                    n[e] = r;
                                }),
                                (Xt.deflateInit = function (t, e, n, r, i, o) {
                                    return (
                                        r || (r = Y),
                                        i || (i = B),
                                        o || (o = x),
                                        (t.msg = null),
                                        e == y && (e = 6),
                                        i < 1 || i > R || r != Y || n < 9 || n > 15 || e < 0 || e > 9 || o < 0 || o > b
                                            ? I
                                            : ((t.dstate = Xt),
                                              (yt = n),
                                              (wt = 1 << yt),
                                              (vt = wt - 1),
                                              (St = i + 7),
                                              (Tt = 1 << St),
                                              (Et = Tt - 1),
                                              (At = Math.floor((St + $ - 1) / $)),
                                              (bt = new Uint8Array(2 * wt)),
                                              (kt = []),
                                              (_t = []),
                                              (Kt = 1 << (i + 6)),
                                              (Xt.pending_buf = new Uint8Array(4 * Kt)),
                                              (gt = 4 * Kt),
                                              (Zt = Math.floor(Kt / 2)),
                                              (Jt = 3 * Kt),
                                              (jt = e),
                                              (Mt = o),
                                              dt(t))
                                    );
                                }),
                                (Xt.deflateEnd = function () {
                                    return pt != V && pt != X && pt != G ? I : ((Xt.pending_buf = null), (_t = null), (kt = null), (bt = null), (Xt.dstate = null), pt == X ? P : S);
                                }),
                                (Xt.deflateParams = function (t, e, n) {
                                    var r = S;
                                    return (
                                        e == y && (e = 6),
                                        e < 0 || e > 9 || n < 0 || n > b
                                            ? I
                                            : (N[jt].func != N[e].func && 0 !== t.total_in && (r = t.deflate(_)),
                                              jt != e && ((Nt = N[(jt = e)].max_lazy), (zt = N[jt].good_length), (Ut = N[jt].nice_length), (Lt = N[jt].max_chain)),
                                              (Mt = n),
                                              r)
                                    );
                                }),
                                (Xt.deflateSetDictionary = function (t, e, n) {
                                    var r,
                                        i = n,
                                        o = 0;
                                    if (!e || pt != V) return I;
                                    if (i < $) return S;
                                    for (i > wt - tt && (o = n - (i = wt - tt)), bt.set(e.subarray(o, o + i), 0), Rt = i, It = i, Ct = (((Ct = 255 & bt[0]) << At) ^ (255 & bt[1])) & Et, r = 0; r <= i - $; r++)
                                        (Ct = ((Ct << At) ^ (255 & bt[r + ($ - 1)])) & Et), (kt[r & vt] = _t[Ct]), (_t[Ct] = r);
                                    return S;
                                }),
                                (Xt.deflate = function (t, e) {
                                    var n, r, i, o, s;
                                    if (e > T || e < 0) return I;
                                    if (!t.next_out || (!t.next_in && 0 !== t.avail_in) || (pt == G && e != T)) return (t.msg = j[A - I]), I;
                                    if (0 === t.avail_out) return (t.msg = j[A - O]), O;
                                    if (
                                        ((ft = t),
                                        (o = mt),
                                        (mt = e),
                                        pt == V &&
                                            ((r = (Y + ((yt - 8) << 4)) << 8),
                                            (i = ((jt - 1) & 255) >> 1) > 3 && (i = 3),
                                            (r |= i << 6),
                                            0 !== Rt && (r |= W),
                                            (pt = X),
                                            (function (t) {
                                                a((t >> 8) & 255), a(255 & t);
                                            })((r += 31 - (r % 31)))),
                                        0 !== Xt.pending)
                                    ) {
                                        if ((ft.flush_pending(), 0 === ft.avail_out)) return (mt = -1), S;
                                    } else if (0 === ft.avail_in && e <= o && e != T) return (ft.msg = j[A - O]), O;
                                    if (pt == G && 0 !== ft.avail_in) return (t.msg = j[A - O]), O;
                                    if (0 !== ft.avail_in || 0 !== Ft || (e != k && pt != G)) {
                                        switch (((s = -1), N[jt].func)) {
                                            case F:
                                                s = (function (t) {
                                                    var e,
                                                        n = 65535;
                                                    for (n > gt - 5 && (n = gt - 5); ; ) {
                                                        if (Ft <= 1) {
                                                            if ((ht(), 0 === Ft && t == k)) return M;
                                                            if (0 === Ft) break;
                                                        }
                                                        if (((Rt += Ft), (Ft = 0), (e = It + n), (0 === Rt || Rt >= e) && ((Ft = Rt - e), (Rt = e), lt(!1), 0 === ft.avail_out))) return M;
                                                        if (Rt - It >= wt - tt && (lt(!1), 0 === ft.avail_out)) return M;
                                                    }
                                                    return lt(t == T), 0 === ft.avail_out ? (t == T ? U : M) : t == T ? H : z;
                                                })(e);
                                                break;
                                            case D:
                                                s = (function (t) {
                                                    for (var e, n = 0; ; ) {
                                                        if (Ft < tt) {
                                                            if ((ht(), Ft < tt && t == k)) return M;
                                                            if (0 === Ft) break;
                                                        }
                                                        if (
                                                            (Ft >= $ && ((Ct = ((Ct << At) ^ (255 & bt[Rt + ($ - 1)])) & Et), (n = 65535 & _t[Ct]), (kt[Rt & vt] = _t[Ct]), (_t[Ct] = Rt)),
                                                            0 !== n && ((Rt - n) & 65535) <= wt - tt && Mt != b && (Pt = ut(n)),
                                                            Pt >= $)
                                                        )
                                                            if (((e = ot(Rt - Bt, Pt - $)), (Ft -= Pt), Pt <= Nt && Ft >= $)) {
                                                                Pt--;
                                                                do {
                                                                    (Ct = ((Ct << At) ^ (255 & bt[++Rt + ($ - 1)])) & Et), (n = 65535 & _t[Ct]), (kt[Rt & vt] = _t[Ct]), (_t[Ct] = Rt);
                                                                } while (0 != --Pt);
                                                                Rt++;
                                                            } else (Rt += Pt), (Pt = 0), (Ct = 255 & bt[Rt]), (Ct = ((Ct << At) ^ (255 & bt[Rt + 1])) & Et);
                                                        else (e = ot(0, 255 & bt[Rt])), Ft--, Rt++;
                                                        if (e && (lt(!1), 0 === ft.avail_out)) return M;
                                                    }
                                                    return lt(t == T), 0 === ft.avail_out ? (t == T ? U : M) : t == T ? H : z;
                                                })(e);
                                                break;
                                            case L:
                                                s = (function (t) {
                                                    for (var e, n, r = 0; ; ) {
                                                        if (Ft < tt) {
                                                            if ((ht(), Ft < tt && t == k)) return M;
                                                            if (0 === Ft) break;
                                                        }
                                                        if (
                                                            (Ft >= $ && ((Ct = ((Ct << At) ^ (255 & bt[Rt + ($ - 1)])) & Et), (r = 65535 & _t[Ct]), (kt[Rt & vt] = _t[Ct]), (_t[Ct] = Rt)),
                                                            (Dt = Pt),
                                                            (Ot = Bt),
                                                            (Pt = $ - 1),
                                                            0 !== r && Dt < Nt && ((Rt - r) & 65535) <= wt - tt && (Mt != b && (Pt = ut(r)), Pt <= 5 && (Mt == v || (Pt == $ && Rt - Bt > 4096)) && (Pt = $ - 1)),
                                                            Dt >= $ && Pt <= Dt)
                                                        ) {
                                                            (n = Rt + Ft - $), (e = ot(Rt - 1 - Ot, Dt - $)), (Ft -= Dt - 1), (Dt -= 2);
                                                            do {
                                                                ++Rt <= n && ((Ct = ((Ct << At) ^ (255 & bt[Rt + ($ - 1)])) & Et), (r = 65535 & _t[Ct]), (kt[Rt & vt] = _t[Ct]), (_t[Ct] = Rt));
                                                            } while (0 != --Dt);
                                                            if (((qt = 0), (Pt = $ - 1), Rt++, e && (lt(!1), 0 === ft.avail_out))) return M;
                                                        } else if (0 !== qt) {
                                                            if (((e = ot(0, 255 & bt[Rt - 1])) && lt(!1), Rt++, Ft--, 0 === ft.avail_out)) return M;
                                                        } else (qt = 1), Rt++, Ft--;
                                                    }
                                                    return 0 !== qt && ((e = ot(0, 255 & bt[Rt - 1])), (qt = 0)), lt(t == T), 0 === ft.avail_out ? (t == T ? U : M) : t == T ? H : z;
                                                })(e);
                                        }
                                        if (((s != U && s != H) || (pt = G), s == M || s == U)) return 0 === ft.avail_out && (mt = -1), S;
                                        if (s == z) {
                                            if (e == _) it();
                                            else if ((ct(0, 0, !1), e == C)) for (n = 0; n < Tt; n++) _t[n] = 0;
                                            if ((ft.flush_pending(), 0 === ft.avail_out)) return (mt = -1), S;
                                        }
                                    }
                                    return e != T ? S : E;
                                });
                        }
                        function a() {
                            var t = this;
                            (t.next_in_index = 0), (t.next_out_index = 0), (t.avail_in = 0), (t.total_in = 0), (t.avail_out = 0), (t.total_out = 0);
                        }
                        var s = 15,
                            c = 30,
                            l = 19,
                            h = 256,
                            u = h + 1 + 29,
                            d = 2 * u + 1,
                            f = 256,
                            p = 16,
                            g = 17,
                            m = 18,
                            w = 16,
                            y = -1,
                            v = 1,
                            b = 2,
                            x = 0,
                            k = 0,
                            _ = 1,
                            C = 3,
                            T = 4,
                            S = 0,
                            E = 1,
                            A = 2,
                            I = -2,
                            P = -3,
                            O = -5,
                            q = [
                                0,
                                1,
                                2,
                                3,
                                4,
                                4,
                                5,
                                5,
                                6,
                                6,
                                6,
                                6,
                                7,
                                7,
                                7,
                                7,
                                8,
                                8,
                                8,
                                8,
                                8,
                                8,
                                8,
                                8,
                                9,
                                9,
                                9,
                                9,
                                9,
                                9,
                                9,
                                9,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                11,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                12,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                13,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                14,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                15,
                                0,
                                0,
                                16,
                                17,
                                18,
                                18,
                                19,
                                19,
                                20,
                                20,
                                20,
                                20,
                                21,
                                21,
                                21,
                                21,
                                22,
                                22,
                                22,
                                22,
                                22,
                                22,
                                22,
                                22,
                                23,
                                23,
                                23,
                                23,
                                23,
                                23,
                                23,
                                23,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                24,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                26,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                27,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                28,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                                29,
                            ];
                        (e._length_code = [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            8,
                            9,
                            9,
                            10,
                            10,
                            11,
                            11,
                            12,
                            12,
                            12,
                            12,
                            13,
                            13,
                            13,
                            13,
                            14,
                            14,
                            14,
                            14,
                            15,
                            15,
                            15,
                            15,
                            16,
                            16,
                            16,
                            16,
                            16,
                            16,
                            16,
                            16,
                            17,
                            17,
                            17,
                            17,
                            17,
                            17,
                            17,
                            17,
                            18,
                            18,
                            18,
                            18,
                            18,
                            18,
                            18,
                            18,
                            19,
                            19,
                            19,
                            19,
                            19,
                            19,
                            19,
                            19,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            20,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            21,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            22,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            23,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            24,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            25,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            26,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            27,
                            28,
                        ]),
                            (e.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0]),
                            (e.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576]),
                            (e.d_code = function (t) {
                                return t < 256 ? q[t] : q[256 + (t >>> 7)];
                            }),
                            (e.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
                            (e.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
                            (e.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
                            (e.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                            (n.static_ltree = [
                                12,
                                8,
                                140,
                                8,
                                76,
                                8,
                                204,
                                8,
                                44,
                                8,
                                172,
                                8,
                                108,
                                8,
                                236,
                                8,
                                28,
                                8,
                                156,
                                8,
                                92,
                                8,
                                220,
                                8,
                                60,
                                8,
                                188,
                                8,
                                124,
                                8,
                                252,
                                8,
                                2,
                                8,
                                130,
                                8,
                                66,
                                8,
                                194,
                                8,
                                34,
                                8,
                                162,
                                8,
                                98,
                                8,
                                226,
                                8,
                                18,
                                8,
                                146,
                                8,
                                82,
                                8,
                                210,
                                8,
                                50,
                                8,
                                178,
                                8,
                                114,
                                8,
                                242,
                                8,
                                10,
                                8,
                                138,
                                8,
                                74,
                                8,
                                202,
                                8,
                                42,
                                8,
                                170,
                                8,
                                106,
                                8,
                                234,
                                8,
                                26,
                                8,
                                154,
                                8,
                                90,
                                8,
                                218,
                                8,
                                58,
                                8,
                                186,
                                8,
                                122,
                                8,
                                250,
                                8,
                                6,
                                8,
                                134,
                                8,
                                70,
                                8,
                                198,
                                8,
                                38,
                                8,
                                166,
                                8,
                                102,
                                8,
                                230,
                                8,
                                22,
                                8,
                                150,
                                8,
                                86,
                                8,
                                214,
                                8,
                                54,
                                8,
                                182,
                                8,
                                118,
                                8,
                                246,
                                8,
                                14,
                                8,
                                142,
                                8,
                                78,
                                8,
                                206,
                                8,
                                46,
                                8,
                                174,
                                8,
                                110,
                                8,
                                238,
                                8,
                                30,
                                8,
                                158,
                                8,
                                94,
                                8,
                                222,
                                8,
                                62,
                                8,
                                190,
                                8,
                                126,
                                8,
                                254,
                                8,
                                1,
                                8,
                                129,
                                8,
                                65,
                                8,
                                193,
                                8,
                                33,
                                8,
                                161,
                                8,
                                97,
                                8,
                                225,
                                8,
                                17,
                                8,
                                145,
                                8,
                                81,
                                8,
                                209,
                                8,
                                49,
                                8,
                                177,
                                8,
                                113,
                                8,
                                241,
                                8,
                                9,
                                8,
                                137,
                                8,
                                73,
                                8,
                                201,
                                8,
                                41,
                                8,
                                169,
                                8,
                                105,
                                8,
                                233,
                                8,
                                25,
                                8,
                                153,
                                8,
                                89,
                                8,
                                217,
                                8,
                                57,
                                8,
                                185,
                                8,
                                121,
                                8,
                                249,
                                8,
                                5,
                                8,
                                133,
                                8,
                                69,
                                8,
                                197,
                                8,
                                37,
                                8,
                                165,
                                8,
                                101,
                                8,
                                229,
                                8,
                                21,
                                8,
                                149,
                                8,
                                85,
                                8,
                                213,
                                8,
                                53,
                                8,
                                181,
                                8,
                                117,
                                8,
                                245,
                                8,
                                13,
                                8,
                                141,
                                8,
                                77,
                                8,
                                205,
                                8,
                                45,
                                8,
                                173,
                                8,
                                109,
                                8,
                                237,
                                8,
                                29,
                                8,
                                157,
                                8,
                                93,
                                8,
                                221,
                                8,
                                61,
                                8,
                                189,
                                8,
                                125,
                                8,
                                253,
                                8,
                                19,
                                9,
                                275,
                                9,
                                147,
                                9,
                                403,
                                9,
                                83,
                                9,
                                339,
                                9,
                                211,
                                9,
                                467,
                                9,
                                51,
                                9,
                                307,
                                9,
                                179,
                                9,
                                435,
                                9,
                                115,
                                9,
                                371,
                                9,
                                243,
                                9,
                                499,
                                9,
                                11,
                                9,
                                267,
                                9,
                                139,
                                9,
                                395,
                                9,
                                75,
                                9,
                                331,
                                9,
                                203,
                                9,
                                459,
                                9,
                                43,
                                9,
                                299,
                                9,
                                171,
                                9,
                                427,
                                9,
                                107,
                                9,
                                363,
                                9,
                                235,
                                9,
                                491,
                                9,
                                27,
                                9,
                                283,
                                9,
                                155,
                                9,
                                411,
                                9,
                                91,
                                9,
                                347,
                                9,
                                219,
                                9,
                                475,
                                9,
                                59,
                                9,
                                315,
                                9,
                                187,
                                9,
                                443,
                                9,
                                123,
                                9,
                                379,
                                9,
                                251,
                                9,
                                507,
                                9,
                                7,
                                9,
                                263,
                                9,
                                135,
                                9,
                                391,
                                9,
                                71,
                                9,
                                327,
                                9,
                                199,
                                9,
                                455,
                                9,
                                39,
                                9,
                                295,
                                9,
                                167,
                                9,
                                423,
                                9,
                                103,
                                9,
                                359,
                                9,
                                231,
                                9,
                                487,
                                9,
                                23,
                                9,
                                279,
                                9,
                                151,
                                9,
                                407,
                                9,
                                87,
                                9,
                                343,
                                9,
                                215,
                                9,
                                471,
                                9,
                                55,
                                9,
                                311,
                                9,
                                183,
                                9,
                                439,
                                9,
                                119,
                                9,
                                375,
                                9,
                                247,
                                9,
                                503,
                                9,
                                15,
                                9,
                                271,
                                9,
                                143,
                                9,
                                399,
                                9,
                                79,
                                9,
                                335,
                                9,
                                207,
                                9,
                                463,
                                9,
                                47,
                                9,
                                303,
                                9,
                                175,
                                9,
                                431,
                                9,
                                111,
                                9,
                                367,
                                9,
                                239,
                                9,
                                495,
                                9,
                                31,
                                9,
                                287,
                                9,
                                159,
                                9,
                                415,
                                9,
                                95,
                                9,
                                351,
                                9,
                                223,
                                9,
                                479,
                                9,
                                63,
                                9,
                                319,
                                9,
                                191,
                                9,
                                447,
                                9,
                                127,
                                9,
                                383,
                                9,
                                255,
                                9,
                                511,
                                9,
                                0,
                                7,
                                64,
                                7,
                                32,
                                7,
                                96,
                                7,
                                16,
                                7,
                                80,
                                7,
                                48,
                                7,
                                112,
                                7,
                                8,
                                7,
                                72,
                                7,
                                40,
                                7,
                                104,
                                7,
                                24,
                                7,
                                88,
                                7,
                                56,
                                7,
                                120,
                                7,
                                4,
                                7,
                                68,
                                7,
                                36,
                                7,
                                100,
                                7,
                                20,
                                7,
                                84,
                                7,
                                52,
                                7,
                                116,
                                7,
                                3,
                                8,
                                131,
                                8,
                                67,
                                8,
                                195,
                                8,
                                35,
                                8,
                                163,
                                8,
                                99,
                                8,
                                227,
                                8,
                            ]),
                            (n.static_dtree = [
                                0,
                                5,
                                16,
                                5,
                                8,
                                5,
                                24,
                                5,
                                4,
                                5,
                                20,
                                5,
                                12,
                                5,
                                28,
                                5,
                                2,
                                5,
                                18,
                                5,
                                10,
                                5,
                                26,
                                5,
                                6,
                                5,
                                22,
                                5,
                                14,
                                5,
                                30,
                                5,
                                1,
                                5,
                                17,
                                5,
                                9,
                                5,
                                25,
                                5,
                                5,
                                5,
                                21,
                                5,
                                13,
                                5,
                                29,
                                5,
                                3,
                                5,
                                19,
                                5,
                                11,
                                5,
                                27,
                                5,
                                7,
                                5,
                                23,
                                5,
                            ]),
                            (n.static_l_desc = new n(n.static_ltree, e.extra_lbits, h + 1, u, s)),
                            (n.static_d_desc = new n(n.static_dtree, e.extra_dbits, 0, c, s)),
                            (n.static_bl_desc = new n(null, e.extra_blbits, 0, l, 7));
                        var R = 9,
                            B = 8,
                            F = 0,
                            D = 1,
                            L = 2,
                            N = [
                                new r(0, 0, 0, 0, F),
                                new r(4, 4, 8, 4, D),
                                new r(4, 5, 16, 8, D),
                                new r(4, 6, 32, 32, D),
                                new r(4, 4, 16, 16, L),
                                new r(8, 16, 32, 32, L),
                                new r(8, 16, 128, 128, L),
                                new r(8, 32, 128, 256, L),
                                new r(32, 128, 258, 1024, L),
                                new r(32, 258, 258, 4096, L),
                            ],
                            j = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
                            M = 0,
                            z = 1,
                            U = 2,
                            H = 3,
                            W = 32,
                            V = 42,
                            X = 113,
                            G = 666,
                            Y = 8,
                            Q = 0,
                            J = 1,
                            K = 2,
                            $ = 3,
                            Z = 258,
                            tt = Z + $ + 1;
                        return (
                            (a.prototype = {
                                deflateInit: function (t, e) {
                                    var n = this;
                                    return (n.dstate = new o()), e || (e = s), n.dstate.deflateInit(n, t, e);
                                },
                                deflate: function (t) {
                                    var e = this;
                                    return e.dstate ? e.dstate.deflate(e, t) : I;
                                },
                                deflateEnd: function () {
                                    var t = this;
                                    if (!t.dstate) return I;
                                    var e = t.dstate.deflateEnd();
                                    return (t.dstate = null), e;
                                },
                                deflateParams: function (t, e) {
                                    var n = this;
                                    return n.dstate ? n.dstate.deflateParams(n, t, e) : I;
                                },
                                deflateSetDictionary: function (t, e) {
                                    var n = this;
                                    return n.dstate ? n.dstate.deflateSetDictionary(n, t, e) : I;
                                },
                                read_buf: function (t, e, n) {
                                    var r = this,
                                        i = r.avail_in;
                                    return i > n && (i = n), 0 === i ? 0 : ((r.avail_in -= i), t.set(r.next_in.subarray(r.next_in_index, r.next_in_index + i), e), (r.next_in_index += i), (r.total_in += i), i);
                                },
                                flush_pending: function () {
                                    var t = this,
                                        e = t.dstate.pending;
                                    e > t.avail_out && (e = t.avail_out),
                                        0 !== e &&
                                            (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index),
                                            (t.next_out_index += e),
                                            (t.dstate.pending_out += e),
                                            (t.total_out += e),
                                            (t.avail_out -= e),
                                            (t.dstate.pending -= e),
                                            0 === t.dstate.pending && (t.dstate.pending_out = 0));
                                },
                            }),
                            function (t) {
                                var e = new a(),
                                    n = k,
                                    r = new Uint8Array(512);
                                void 0 === t && (t = y),
                                    e.deflateInit(t),
                                    (e.next_out = r),
                                    (this.append = function (t, i) {
                                        var o,
                                            a = [],
                                            s = 0,
                                            c = 0,
                                            l = 0;
                                        if (t.length) {
                                            (e.next_in_index = 0), (e.next_in = t), (e.avail_in = t.length);
                                            do {
                                                if (((e.next_out_index = 0), (e.avail_out = 512), e.deflate(n) != S)) throw "deflating: " + e.msg;
                                                e.next_out_index && (512 == e.next_out_index ? a.push(new Uint8Array(r)) : a.push(new Uint8Array(r.subarray(0, e.next_out_index)))),
                                                    (l += e.next_out_index),
                                                    i && e.next_in_index > 0 && e.next_in_index != s && (i(e.next_in_index), (s = e.next_in_index));
                                            } while (e.avail_in > 0 || 0 === e.avail_out);
                                            return (
                                                (o = new Uint8Array(l)),
                                                a.forEach(function (t) {
                                                    o.set(t, c), (c += t.length);
                                                }),
                                                o
                                            );
                                        }
                                    }),
                                    (this.flush = function () {
                                        var t,
                                            n,
                                            i = [],
                                            o = 0,
                                            a = 0;
                                        do {
                                            if (((e.next_out_index = 0), (e.avail_out = 512), (t = e.deflate(T)) != E && t != S)) throw "deflating: " + e.msg;
                                            512 - e.avail_out > 0 && i.push(new Uint8Array(r.subarray(0, e.next_out_index))), (a += e.next_out_index);
                                        } while (e.avail_in > 0 || 0 === e.avail_out);
                                        return (
                                            e.deflateEnd(),
                                            (n = new Uint8Array(a)),
                                            i.forEach(function (t) {
                                                n.set(t, o), (o += t.length);
                                            }),
                                            n
                                        );
                                    });
                            }
                        );
                    })();
                    (e.exports = (function e(n, r, i) {
                        function o(s, c) {
                            if (!r[s]) {
                                if (!n[s]) {
                                    var l = "function" == typeof t && t;
                                    if (!c && l) return l(s, !0);
                                    if (a) return a(s, !0);
                                    var h = new Error("Cannot find module '" + s + "'");
                                    throw ((h.code = "MODULE_NOT_FOUND"), h);
                                }
                                var u = (r[s] = { exports: {} });
                                n[s][0].call(
                                    u.exports,
                                    function (t) {
                                        return o(n[s][1][t] || t);
                                    },
                                    u,
                                    u.exports,
                                    e,
                                    n,
                                    r,
                                    i
                                );
                            }
                            return r[s].exports;
                        }
                        for (var a = "function" == typeof t && t, s = 0; s < i.length; s++) o(i[s]);
                        return o;
                    })(
                        {
                            1: [
                                function (t, e, r) {
                                    (function (t) {
                                        !(function (n) {
                                            function i(t) {
                                                throw RangeError(O[t]);
                                            }
                                            function o(t, e) {
                                                for (var n = t.length; n--; ) t[n] = e(t[n]);
                                                return t;
                                            }
                                            function a(t, e) {
                                                return o(t.split(P), e).join(".");
                                            }
                                            function s(t) {
                                                for (var e, n, r = [], i = 0, o = t.length; i < o; )
                                                    (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? (56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                                                return r;
                                            }
                                            function c(t) {
                                                return o(t, function (t) {
                                                    var e = "";
                                                    return t > 65535 && ((e += B((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), (e += B(t));
                                                }).join("");
                                            }
                                            function l(t) {
                                                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : b;
                                            }
                                            function h(t, e) {
                                                return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                                            }
                                            function u(t, e, n) {
                                                var r = 0;
                                                for (t = n ? R(t / C) : t >> 1, t += R(t / e); t > (q * k) >> 1; r += b) t = R(t / q);
                                                return R(r + ((q + 1) * t) / (t + _));
                                            }
                                            function d(t) {
                                                var e,
                                                    n,
                                                    r,
                                                    o,
                                                    a,
                                                    s,
                                                    h,
                                                    d,
                                                    f,
                                                    p,
                                                    g = [],
                                                    m = t.length,
                                                    w = 0,
                                                    y = S,
                                                    _ = T;
                                                for ((n = t.lastIndexOf(E)) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && i("not-basic"), g.push(t.charCodeAt(r));
                                                for (o = n > 0 ? n + 1 : 0; o < m; ) {
                                                    for (
                                                        a = w, s = 1, h = b;
                                                        o >= m && i("invalid-input"), ((d = l(t.charCodeAt(o++))) >= b || d > R((v - w) / s)) && i("overflow"), (w += d * s), (f = h <= _ ? x : h >= _ + k ? k : h - _), !(d < f);
                                                        h += b
                                                    )
                                                        s > R(v / (p = b - f)) && i("overflow"), (s *= p);
                                                    (_ = u(w - a, (e = g.length + 1), 0 == a)), R(w / e) > v - y && i("overflow"), (y += R(w / e)), (w %= e), g.splice(w++, 0, y);
                                                }
                                                return c(g);
                                            }
                                            function f(t) {
                                                var e,
                                                    n,
                                                    r,
                                                    o,
                                                    a,
                                                    c,
                                                    l,
                                                    d,
                                                    f,
                                                    p,
                                                    g,
                                                    m,
                                                    w,
                                                    y,
                                                    _,
                                                    C = [];
                                                for (m = (t = s(t)).length, e = S, n = 0, a = T, c = 0; c < m; ++c) (g = t[c]) < 128 && C.push(B(g));
                                                for (r = o = C.length, o && C.push(E); r < m; ) {
                                                    for (l = v, c = 0; c < m; ++c) (g = t[c]) >= e && g < l && (l = g);
                                                    for (l - e > R((v - n) / (w = r + 1)) && i("overflow"), n += (l - e) * w, e = l, c = 0; c < m; ++c)
                                                        if (((g = t[c]) < e && ++n > v && i("overflow"), g == e)) {
                                                            for (d = n, f = b; (p = f <= a ? x : f >= a + k ? k : f - a), !(d < p); f += b) (_ = d - p), (y = b - p), C.push(B(h(p + (_ % y), 0))), (d = R(_ / y));
                                                            C.push(B(h(d, 0))), (a = u(n, w, r == o)), (n = 0), ++r;
                                                        }
                                                    ++n, ++e;
                                                }
                                                return C.join("");
                                            }
                                            var p = "object" == typeof r && r,
                                                g = "object" == typeof e && e && e.exports == p && e,
                                                m = "object" == typeof t && t;
                                            (m.global !== m && m.window !== m) || (n = m);
                                            var w,
                                                y,
                                                v = 2147483647,
                                                b = 36,
                                                x = 1,
                                                k = 26,
                                                _ = 38,
                                                C = 700,
                                                T = 72,
                                                S = 128,
                                                E = "-",
                                                A = /^xn--/,
                                                I = /[^ -~]/,
                                                P = /\x2E|\u3002|\uFF0E|\uFF61/g,
                                                O = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                                                q = b - x,
                                                R = Math.floor,
                                                B = String.fromCharCode;
                                            if (
                                                ((w = {
                                                    version: "1.2.4",
                                                    ucs2: { decode: s, encode: c },
                                                    decode: d,
                                                    encode: f,
                                                    toASCII: function (t) {
                                                        return a(t, function (t) {
                                                            return I.test(t) ? "xn--" + f(t) : t;
                                                        });
                                                    },
                                                    toUnicode: function (t) {
                                                        return a(t, function (t) {
                                                            return A.test(t) ? d(t.slice(4).toLowerCase()) : t;
                                                        });
                                                    },
                                                }),
                                                p && !p.nodeType)
                                            )
                                                if (g) g.exports = w;
                                                else for (y in w) w.hasOwnProperty(y) && (p[y] = w[y]);
                                            else n.punycode = w;
                                        })(this);
                                    }.call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
                                },
                                {},
                            ],
                            2: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i; )
                                            (!0 !== e && 1 === i.nodeType && "SCRIPT" === i.nodeName) || n.appendChild(r(i, e)), (i = i.nextSibling);
                                        return (
                                            1 === t.nodeType &&
                                                ((n._scrollTop = t.scrollTop),
                                                (n._scrollLeft = t.scrollLeft),
                                                "CANVAS" === t.nodeName
                                                    ? (function (t, e) {
                                                          try {
                                                              e && ((e.width = t.width), (e.height = t.height), e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0));
                                                          } catch (e) {
                                                              o("Unable to copy canvas content from", t, e);
                                                          }
                                                      })(t, n)
                                                    : ("TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName) || (n.value = t.value)),
                                            n
                                        );
                                    }
                                    function i(t) {
                                        if (1 === t.nodeType) {
                                            (t.scrollTop = t._scrollTop), (t.scrollLeft = t._scrollLeft);
                                            for (var e = t.firstChild; e; ) i(e), (e = e.nextSibling);
                                        }
                                    }
                                    var o = t("./log");
                                    e.exports = function (t, e, n, o, a, s, c) {
                                        var l = r(t.documentElement, a.javascriptEnabled),
                                            h = e.createElement("iframe");
                                        return (
                                            (h.className = "html2canvas-container"),
                                            (h.style.visibility = "hidden"),
                                            (h.style.position = "fixed"),
                                            (h.style.left = "-10000px"),
                                            (h.style.top = "0px"),
                                            (h.style.border = "0"),
                                            (h.width = n),
                                            (h.height = o),
                                            (h.scrolling = "no"),
                                            e.body.appendChild(h),
                                            new Promise(function (e) {
                                                var n = h.contentWindow.document;
                                                (h.contentWindow.onload = h.onload = function () {
                                                    var t = setInterval(function () {
                                                        n.body.childNodes.length > 0 &&
                                                            (i(n.documentElement),
                                                            clearInterval(t),
                                                            "view" === a.type &&
                                                                (h.contentWindow.scrollTo(s, c),
                                                                !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                                                                    (h.contentWindow.scrollY === c && h.contentWindow.scrollX === s) ||
                                                                    ((n.documentElement.style.top = -c + "px"), (n.documentElement.style.left = -s + "px"), (n.documentElement.style.position = "absolute"))),
                                                            e(h));
                                                    }, 50);
                                                }),
                                                    n.open(),
                                                    n.write("<!DOCTYPE html><html></html>"),
                                                    (function (t, e, n) {
                                                        !t.defaultView || (e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset) || t.defaultView.scrollTo(e, n);
                                                    })(t, s, c),
                                                    n.replaceChild(n.adoptNode(l), n.documentElement),
                                                    n.close();
                                            })
                                        );
                                    };
                                },
                                { "./log": 13 },
                            ],
                            3: [
                                function (t, e, n) {
                                    function r(t) {
                                        (this.r = 0), (this.g = 0), (this.b = 0), (this.a = null), this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t);
                                    }
                                    (r.prototype.darken = function (t) {
                                        var e = 1 - t;
                                        return new r([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a]);
                                    }),
                                        (r.prototype.isTransparent = function () {
                                            return 0 === this.a;
                                        }),
                                        (r.prototype.isBlack = function () {
                                            return 0 === this.r && 0 === this.g && 0 === this.b;
                                        }),
                                        (r.prototype.fromArray = function (t) {
                                            return Array.isArray(t) && ((this.r = Math.min(t[0], 255)), (this.g = Math.min(t[1], 255)), (this.b = Math.min(t[2], 255)), t.length > 3 && (this.a = t[3])), Array.isArray(t);
                                        });
                                    var i = /^#([a-f0-9]{3})$/i;
                                    r.prototype.hex3 = function (t) {
                                        var e = null;
                                        return null !== (e = t.match(i)) && ((this.r = parseInt(e[1][0] + e[1][0], 16)), (this.g = parseInt(e[1][1] + e[1][1], 16)), (this.b = parseInt(e[1][2] + e[1][2], 16))), null !== e;
                                    };
                                    var o = /^#([a-f0-9]{6})$/i;
                                    r.prototype.hex6 = function (t) {
                                        var e = null;
                                        return null !== (e = t.match(o)) && ((this.r = parseInt(e[1].substring(0, 2), 16)), (this.g = parseInt(e[1].substring(2, 4), 16)), (this.b = parseInt(e[1].substring(4, 6), 16))), null !== e;
                                    };
                                    var a = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                                    r.prototype.rgb = function (t) {
                                        var e = null;
                                        return null !== (e = t.match(a)) && ((this.r = Number(e[1])), (this.g = Number(e[2])), (this.b = Number(e[3]))), null !== e;
                                    };
                                    var s = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                                    (r.prototype.rgba = function (t) {
                                        var e = null;
                                        return null !== (e = t.match(s)) && ((this.r = Number(e[1])), (this.g = Number(e[2])), (this.b = Number(e[3])), (this.a = Number(e[4]))), null !== e;
                                    }),
                                        (r.prototype.toString = function () {
                                            return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")";
                                        }),
                                        (r.prototype.namedColor = function (t) {
                                            t = t.toLowerCase();
                                            var e = c[t];
                                            if (e) (this.r = e[0]), (this.g = e[1]), (this.b = e[2]);
                                            else if ("transparent" === t) return (this.r = this.g = this.b = this.a = 0), !0;
                                            return !!e;
                                        }),
                                        (r.prototype.isColor = !0);
                                    var c = {
                                        aliceblue: [240, 248, 255],
                                        antiquewhite: [250, 235, 215],
                                        aqua: [0, 255, 255],
                                        aquamarine: [127, 255, 212],
                                        azure: [240, 255, 255],
                                        beige: [245, 245, 220],
                                        bisque: [255, 228, 196],
                                        black: [0, 0, 0],
                                        blanchedalmond: [255, 235, 205],
                                        blue: [0, 0, 255],
                                        blueviolet: [138, 43, 226],
                                        brown: [165, 42, 42],
                                        burlywood: [222, 184, 135],
                                        cadetblue: [95, 158, 160],
                                        chartreuse: [127, 255, 0],
                                        chocolate: [210, 105, 30],
                                        coral: [255, 127, 80],
                                        cornflowerblue: [100, 149, 237],
                                        cornsilk: [255, 248, 220],
                                        crimson: [220, 20, 60],
                                        cyan: [0, 255, 255],
                                        darkblue: [0, 0, 139],
                                        darkcyan: [0, 139, 139],
                                        darkgoldenrod: [184, 134, 11],
                                        darkgray: [169, 169, 169],
                                        darkgreen: [0, 100, 0],
                                        darkgrey: [169, 169, 169],
                                        darkkhaki: [189, 183, 107],
                                        darkmagenta: [139, 0, 139],
                                        darkolivegreen: [85, 107, 47],
                                        darkorange: [255, 140, 0],
                                        darkorchid: [153, 50, 204],
                                        darkred: [139, 0, 0],
                                        darksalmon: [233, 150, 122],
                                        darkseagreen: [143, 188, 143],
                                        darkslateblue: [72, 61, 139],
                                        darkslategray: [47, 79, 79],
                                        darkslategrey: [47, 79, 79],
                                        darkturquoise: [0, 206, 209],
                                        darkviolet: [148, 0, 211],
                                        deeppink: [255, 20, 147],
                                        deepskyblue: [0, 191, 255],
                                        dimgray: [105, 105, 105],
                                        dimgrey: [105, 105, 105],
                                        dodgerblue: [30, 144, 255],
                                        firebrick: [178, 34, 34],
                                        floralwhite: [255, 250, 240],
                                        forestgreen: [34, 139, 34],
                                        fuchsia: [255, 0, 255],
                                        gainsboro: [220, 220, 220],
                                        ghostwhite: [248, 248, 255],
                                        gold: [255, 215, 0],
                                        goldenrod: [218, 165, 32],
                                        gray: [128, 128, 128],
                                        green: [0, 128, 0],
                                        greenyellow: [173, 255, 47],
                                        grey: [128, 128, 128],
                                        honeydew: [240, 255, 240],
                                        hotpink: [255, 105, 180],
                                        indianred: [205, 92, 92],
                                        indigo: [75, 0, 130],
                                        ivory: [255, 255, 240],
                                        khaki: [240, 230, 140],
                                        lavender: [230, 230, 250],
                                        lavenderblush: [255, 240, 245],
                                        lawngreen: [124, 252, 0],
                                        lemonchiffon: [255, 250, 205],
                                        lightblue: [173, 216, 230],
                                        lightcoral: [240, 128, 128],
                                        lightcyan: [224, 255, 255],
                                        lightgoldenrodyellow: [250, 250, 210],
                                        lightgray: [211, 211, 211],
                                        lightgreen: [144, 238, 144],
                                        lightgrey: [211, 211, 211],
                                        lightpink: [255, 182, 193],
                                        lightsalmon: [255, 160, 122],
                                        lightseagreen: [32, 178, 170],
                                        lightskyblue: [135, 206, 250],
                                        lightslategray: [119, 136, 153],
                                        lightslategrey: [119, 136, 153],
                                        lightsteelblue: [176, 196, 222],
                                        lightyellow: [255, 255, 224],
                                        lime: [0, 255, 0],
                                        limegreen: [50, 205, 50],
                                        linen: [250, 240, 230],
                                        magenta: [255, 0, 255],
                                        maroon: [128, 0, 0],
                                        mediumaquamarine: [102, 205, 170],
                                        mediumblue: [0, 0, 205],
                                        mediumorchid: [186, 85, 211],
                                        mediumpurple: [147, 112, 219],
                                        mediumseagreen: [60, 179, 113],
                                        mediumslateblue: [123, 104, 238],
                                        mediumspringgreen: [0, 250, 154],
                                        mediumturquoise: [72, 209, 204],
                                        mediumvioletred: [199, 21, 133],
                                        midnightblue: [25, 25, 112],
                                        mintcream: [245, 255, 250],
                                        mistyrose: [255, 228, 225],
                                        moccasin: [255, 228, 181],
                                        navajowhite: [255, 222, 173],
                                        navy: [0, 0, 128],
                                        oldlace: [253, 245, 230],
                                        olive: [128, 128, 0],
                                        olivedrab: [107, 142, 35],
                                        orange: [255, 165, 0],
                                        orangered: [255, 69, 0],
                                        orchid: [218, 112, 214],
                                        palegoldenrod: [238, 232, 170],
                                        palegreen: [152, 251, 152],
                                        paleturquoise: [175, 238, 238],
                                        palevioletred: [219, 112, 147],
                                        papayawhip: [255, 239, 213],
                                        peachpuff: [255, 218, 185],
                                        peru: [205, 133, 63],
                                        pink: [255, 192, 203],
                                        plum: [221, 160, 221],
                                        powderblue: [176, 224, 230],
                                        purple: [128, 0, 128],
                                        rebeccapurple: [102, 51, 153],
                                        red: [255, 0, 0],
                                        rosybrown: [188, 143, 143],
                                        royalblue: [65, 105, 225],
                                        saddlebrown: [139, 69, 19],
                                        salmon: [250, 128, 114],
                                        sandybrown: [244, 164, 96],
                                        seagreen: [46, 139, 87],
                                        seashell: [255, 245, 238],
                                        sienna: [160, 82, 45],
                                        silver: [192, 192, 192],
                                        skyblue: [135, 206, 235],
                                        slateblue: [106, 90, 205],
                                        slategray: [112, 128, 144],
                                        slategrey: [112, 128, 144],
                                        snow: [255, 250, 250],
                                        springgreen: [0, 255, 127],
                                        steelblue: [70, 130, 180],
                                        tan: [210, 180, 140],
                                        teal: [0, 128, 128],
                                        thistle: [216, 191, 216],
                                        tomato: [255, 99, 71],
                                        turquoise: [64, 224, 208],
                                        violet: [238, 130, 238],
                                        wheat: [245, 222, 179],
                                        white: [255, 255, 255],
                                        whitesmoke: [245, 245, 245],
                                        yellow: [255, 255, 0],
                                        yellowgreen: [154, 205, 50],
                                    };
                                    e.exports = r;
                                },
                                {},
                            ],
                            4: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        var n = w++;
                                        if (
                                            ((e = e || {}).logging && ((u.options.logging = !0), (u.options.start = Date.now())),
                                            (e.async = void 0 === e.async || e.async),
                                            (e.allowTaint = void 0 !== e.allowTaint && e.allowTaint),
                                            (e.removeContainer = void 0 === e.removeContainer || e.removeContainer),
                                            (e.javascriptEnabled = void 0 !== e.javascriptEnabled && e.javascriptEnabled),
                                            (e.imageTimeout = void 0 === e.imageTimeout ? 1e4 : e.imageTimeout),
                                            (e.renderer = "function" == typeof e.renderer ? e.renderer : s),
                                            (e.strict = !!e.strict),
                                            "string" == typeof t)
                                        ) {
                                            if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
                                            var r = null != e.width ? e.width : window.innerWidth,
                                                o = null != e.height ? e.height : window.innerHeight;
                                            return p(
                                                (function (t) {
                                                    var e = document.createElement("a");
                                                    return (e.href = t), (e.href = e.href), e;
                                                })(t),
                                                e.proxy,
                                                document,
                                                r,
                                                o,
                                                e
                                            ).then(function (t) {
                                                return i(t.contentWindow.document.documentElement, t, e, r, o);
                                            });
                                        }
                                        var a = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
                                        return (
                                            a.setAttribute(m + n, n),
                                            (function (t, e, n, r, o) {
                                                return f(t, t, n, r, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function (a) {
                                                    u("Document cloned");
                                                    var s = m + o,
                                                        c = "[" + s + "='" + o + "']";
                                                    t.querySelector(c).removeAttribute(s);
                                                    var l = a.contentWindow,
                                                        h = l.document.querySelector(c);
                                                    return ("function" == typeof e.onclone ? Promise.resolve(e.onclone(l.document)) : Promise.resolve(!0)).then(function () {
                                                        return i(h, a, e, n, r);
                                                    });
                                                });
                                            })(a.ownerDocument, e, a.ownerDocument.defaultView.innerWidth, a.ownerDocument.defaultView.innerHeight, n).then(function (t) {
                                                return "function" == typeof e.onrendered && (u("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)), t;
                                            })
                                        );
                                    }
                                    function i(t, e, n, r, i) {
                                        var s = e.contentWindow,
                                            h = new a(s.document),
                                            d = new c(n, h),
                                            f = g(t),
                                            p =
                                                "view" === n.type
                                                    ? r
                                                    : (function (t) {
                                                          return Math.max(
                                                              Math.max(t.body.scrollWidth, t.documentElement.scrollWidth),
                                                              Math.max(t.body.offsetWidth, t.documentElement.offsetWidth),
                                                              Math.max(t.body.clientWidth, t.documentElement.clientWidth)
                                                          );
                                                      })(s.document),
                                            m =
                                                "view" === n.type
                                                    ? i
                                                    : (function (t) {
                                                          return Math.max(
                                                              Math.max(t.body.scrollHeight, t.documentElement.scrollHeight),
                                                              Math.max(t.body.offsetHeight, t.documentElement.offsetHeight),
                                                              Math.max(t.body.clientHeight, t.documentElement.clientHeight)
                                                          );
                                                      })(s.document),
                                            w = new n.renderer(p, m, d, n, document);
                                        return new l(t, w, h, d, n).ready.then(function () {
                                            u("Finished rendering");
                                            var r;
                                            return (
                                                (r =
                                                    "view" === n.type
                                                        ? o(w.canvas, { width: w.canvas.width, height: w.canvas.height, top: 0, left: 0, x: 0, y: 0 })
                                                        : t === s.document.body || t === s.document.documentElement || null != n.canvas
                                                        ? w.canvas
                                                        : o(w.canvas, { width: null != n.width ? n.width : f.width, height: null != n.height ? n.height : f.height, top: f.top, left: f.left, x: 0, y: 0 })),
                                                (function (t, e) {
                                                    e.removeContainer && (t.parentNode.removeChild(t), u("Cleaned up container"));
                                                })(e, n),
                                                r
                                            );
                                        });
                                    }
                                    function o(t, e) {
                                        var n = document.createElement("canvas"),
                                            r = Math.min(t.width - 1, Math.max(0, e.left)),
                                            i = Math.min(t.width, Math.max(1, e.left + e.width)),
                                            o = Math.min(t.height - 1, Math.max(0, e.top)),
                                            a = Math.min(t.height, Math.max(1, e.top + e.height));
                                        (n.width = e.width), (n.height = e.height);
                                        var s = i - r,
                                            c = a - o;
                                        return (
                                            u("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", s, "height:", c),
                                            u("Resulting crop with width", e.width, "and height", e.height, "with x", r, "and y", o),
                                            n.getContext("2d").drawImage(t, r, o, s, c, e.x, e.y, s, c),
                                            n
                                        );
                                    }
                                    var a = t("./support"),
                                        s = t("./renderers/canvas"),
                                        c = t("./imageloader"),
                                        l = t("./nodeparser"),
                                        h = t("./nodecontainer"),
                                        u = t("./log"),
                                        d = t("./utils"),
                                        f = t("./clone"),
                                        p = t("./proxy").loadUrlDocument,
                                        g = d.getBounds,
                                        m = "data-html2canvas-node",
                                        w = 0;
                                    (r.CanvasRenderer = s), (r.NodeContainer = h), (r.log = u), (r.utils = d);
                                    var y =
                                        "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext
                                            ? function () {
                                                  return Promise.reject("No canvas support");
                                              }
                                            : r;
                                    e.exports = y;
                                },
                                { "./clone": 2, "./imageloader": 11, "./log": 13, "./nodecontainer": 14, "./nodeparser": 15, "./proxy": 16, "./renderers/canvas": 20, "./support": 22, "./utils": 26 },
                            ],
                            5: [
                                function (t, e, n) {
                                    function r(t) {
                                        if (((this.src = t), i("DummyImageContainer for", t), !this.promise || !this.image)) {
                                            i("Initiating DummyImageContainer"), (r.prototype.image = new Image());
                                            var e = this.image;
                                            r.prototype.promise = new Promise(function (t, n) {
                                                (e.onload = t), (e.onerror = n), (e.src = o()), !0 === e.complete && t(e);
                                            });
                                        }
                                    }
                                    var i = t("./log"),
                                        o = t("./utils").smallImage;
                                    e.exports = r;
                                },
                                { "./log": 13, "./utils": 26 },
                            ],
                            6: [
                                function (t, e, n) {
                                    var r = t("./utils").smallImage;
                                    e.exports = function (t, e) {
                                        var n,
                                            i,
                                            o = document.createElement("div"),
                                            a = document.createElement("img"),
                                            s = document.createElement("span");
                                        (o.style.visibility = "hidden"),
                                            (o.style.fontFamily = t),
                                            (o.style.fontSize = e),
                                            (o.style.margin = 0),
                                            (o.style.padding = 0),
                                            document.body.appendChild(o),
                                            (a.src = r()),
                                            (a.width = 1),
                                            (a.height = 1),
                                            (a.style.margin = 0),
                                            (a.style.padding = 0),
                                            (a.style.verticalAlign = "baseline"),
                                            (s.style.fontFamily = t),
                                            (s.style.fontSize = e),
                                            (s.style.margin = 0),
                                            (s.style.padding = 0),
                                            s.appendChild(document.createTextNode("Hidden Text")),
                                            o.appendChild(s),
                                            o.appendChild(a),
                                            (n = a.offsetTop - s.offsetTop + 1),
                                            o.removeChild(s),
                                            o.appendChild(document.createTextNode("Hidden Text")),
                                            (o.style.lineHeight = "normal"),
                                            (a.style.verticalAlign = "super"),
                                            (i = a.offsetTop - o.offsetTop + 1),
                                            document.body.removeChild(o),
                                            (this.baseline = n),
                                            (this.lineWidth = 1),
                                            (this.middle = i);
                                    };
                                },
                                { "./utils": 26 },
                            ],
                            7: [
                                function (t, e, n) {
                                    function r() {
                                        this.data = {};
                                    }
                                    var i = t("./font");
                                    (r.prototype.getMetrics = function (t, e) {
                                        return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new i(t, e)), this.data[t + "-" + e];
                                    }),
                                        (e.exports = r);
                                },
                                { "./font": 6 },
                            ],
                            8: [
                                function (t, e, n) {
                                    function r(e, n, r) {
                                        (this.image = null), (this.src = e);
                                        var o = this,
                                            a = i(e);
                                        this.promise = (n
                                            ? new Promise(function (t) {
                                                  "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement
                                                      ? (e.contentWindow.onload = e.onload = function () {
                                                            t(e);
                                                        })
                                                      : t(e);
                                              })
                                            : this.proxyLoad(r.proxy, a, r)
                                        )
                                            .then(function (e) {
                                                return t("./core")(e.contentWindow.document.documentElement, {
                                                    type: "view",
                                                    width: e.width,
                                                    height: e.height,
                                                    proxy: r.proxy,
                                                    javascriptEnabled: r.javascriptEnabled,
                                                    removeContainer: r.removeContainer,
                                                    allowTaint: r.allowTaint,
                                                    imageTimeout: r.imageTimeout / 2,
                                                });
                                            })
                                            .then(function (t) {
                                                return (o.image = t);
                                            });
                                    }
                                    var i = t("./utils").getBounds,
                                        o = t("./proxy").loadUrlDocument;
                                    (r.prototype.proxyLoad = function (t, e, n) {
                                        var r = this.src;
                                        return o(r.src, t, r.ownerDocument, e.width, e.height, n);
                                    }),
                                        (e.exports = r);
                                },
                                { "./core": 4, "./proxy": 16, "./utils": 26 },
                            ],
                            9: [
                                function (t, e, n) {
                                    function r(t) {
                                        (this.src = t.value), (this.colorStops = []), (this.type = null), (this.x0 = 0.5), (this.y0 = 0.5), (this.x1 = 0.5), (this.y1 = 0.5), (this.promise = Promise.resolve(!0));
                                    }
                                    (r.TYPES = { LINEAR: 1, RADIAL: 2 }),
                                        (r.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i),
                                        (e.exports = r);
                                },
                                {},
                            ],
                            10: [
                                function (t, e, n) {
                                    e.exports = function (t, e) {
                                        (this.src = t), (this.image = new Image());
                                        var n = this;
                                        (this.tainted = null),
                                            (this.promise = new Promise(function (r, i) {
                                                (n.image.onload = r), (n.image.onerror = i), e && (n.image.crossOrigin = "anonymous"), (n.image.src = t), !0 === n.image.complete && r(n.image);
                                            }));
                                    };
                                },
                                {},
                            ],
                            11: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        (this.link = null), (this.options = t), (this.support = e), (this.origin = this.getOrigin(window.location.href));
                                    }
                                    var i = t("./log"),
                                        o = t("./imagecontainer"),
                                        a = t("./dummyimagecontainer"),
                                        s = t("./proxyimagecontainer"),
                                        c = t("./framecontainer"),
                                        l = t("./svgcontainer"),
                                        h = t("./svgnodecontainer"),
                                        u = t("./lineargradientcontainer"),
                                        d = t("./webkitgradientcontainer"),
                                        f = t("./utils").bind;
                                    (r.prototype.findImages = function (t) {
                                        var e = [];
                                        return (
                                            t
                                                .reduce(function (t, e) {
                                                    switch (e.node.nodeName) {
                                                        case "IMG":
                                                            return t.concat([{ args: [e.node.src], method: "url" }]);
                                                        case "svg":
                                                        case "IFRAME":
                                                            return t.concat([{ args: [e.node], method: e.node.nodeName }]);
                                                    }
                                                    return t;
                                                }, [])
                                                .forEach(this.addImage(e, this.loadImage), this),
                                            e
                                        );
                                    }),
                                        (r.prototype.findBackgroundImage = function (t, e) {
                                            return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t;
                                        }),
                                        (r.prototype.addImage = function (t, e) {
                                            return function (n) {
                                                n.args.forEach(function (r) {
                                                    this.imageExists(t, r) || (t.splice(0, 0, e.call(this, n)), i("Added image #" + t.length, "string" == typeof r ? r.substring(0, 100) : r));
                                                }, this);
                                            };
                                        }),
                                        (r.prototype.hasImageBackground = function (t) {
                                            return "none" !== t.method;
                                        }),
                                        (r.prototype.loadImage = function (t) {
                                            if ("url" === t.method) {
                                                var e = t.args[0];
                                                return !this.isSVG(e) || this.support.svg || this.options.allowTaint
                                                    ? e.match(/data:image\/.*;base64,/i)
                                                        ? new o(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1)
                                                        : this.isSameOrigin(e) || !0 === this.options.allowTaint || this.isSVG(e)
                                                        ? new o(e, !1)
                                                        : this.support.cors && !this.options.allowTaint && this.options.useCORS
                                                        ? new o(e, !0)
                                                        : this.options.proxy
                                                        ? new s(e, this.options.proxy)
                                                        : new a(e)
                                                    : new l(e);
                                            }
                                            return "linear-gradient" === t.method
                                                ? new u(t)
                                                : "gradient" === t.method
                                                ? new d(t)
                                                : "svg" === t.method
                                                ? new h(t.args[0], this.support.svg)
                                                : "IFRAME" === t.method
                                                ? new c(t.args[0], this.isSameOrigin(t.args[0].src), this.options)
                                                : new a(t);
                                        }),
                                        (r.prototype.isSVG = function (t) {
                                            return "svg" === t.substring(t.length - 3).toLowerCase() || l.prototype.isInline(t);
                                        }),
                                        (r.prototype.imageExists = function (t, e) {
                                            return t.some(function (t) {
                                                return t.src === e;
                                            });
                                        }),
                                        (r.prototype.isSameOrigin = function (t) {
                                            return this.getOrigin(t) === this.origin;
                                        }),
                                        (r.prototype.getOrigin = function (t) {
                                            var e = this.link || (this.link = document.createElement("a"));
                                            return (e.href = t), (e.href = e.href), e.protocol + e.hostname + e.port;
                                        }),
                                        (r.prototype.getPromise = function (t) {
                                            return this.timeout(t, this.options.imageTimeout).catch(function () {
                                                return new a(t.src).promise.then(function (e) {
                                                    t.image = e;
                                                });
                                            });
                                        }),
                                        (r.prototype.get = function (t) {
                                            var e = null;
                                            return this.images.some(function (n) {
                                                return (e = n).src === t;
                                            })
                                                ? e
                                                : null;
                                        }),
                                        (r.prototype.fetch = function (t) {
                                            return (
                                                (this.images = t.reduce(f(this.findBackgroundImage, this), this.findImages(t))),
                                                this.images.forEach(function (t, e) {
                                                    t.promise.then(
                                                        function () {
                                                            i("Succesfully loaded image #" + (e + 1), t);
                                                        },
                                                        function (n) {
                                                            i("Failed loading image #" + (e + 1), t, n);
                                                        }
                                                    );
                                                }),
                                                (this.ready = Promise.all(this.images.map(this.getPromise, this))),
                                                i("Finished searching images"),
                                                this
                                            );
                                        }),
                                        (r.prototype.timeout = function (t, e) {
                                            var n,
                                                r = Promise.race([
                                                    t.promise,
                                                    new Promise(function (r, o) {
                                                        n = setTimeout(function () {
                                                            i("Timed out loading image", t), o(t);
                                                        }, e);
                                                    }),
                                                ]).then(function (t) {
                                                    return clearTimeout(n), t;
                                                });
                                            return (
                                                r.catch(function () {
                                                    clearTimeout(n);
                                                }),
                                                r
                                            );
                                        }),
                                        (e.exports = r);
                                },
                                {
                                    "./dummyimagecontainer": 5,
                                    "./framecontainer": 8,
                                    "./imagecontainer": 10,
                                    "./lineargradientcontainer": 12,
                                    "./log": 13,
                                    "./proxyimagecontainer": 17,
                                    "./svgcontainer": 23,
                                    "./svgnodecontainer": 24,
                                    "./utils": 26,
                                    "./webkitgradientcontainer": 27,
                                },
                            ],
                            12: [
                                function (t, e, n) {
                                    function r(t) {
                                        i.apply(this, arguments), (this.type = i.TYPES.LINEAR);
                                        var e = r.REGEXP_DIRECTION.test(t.args[0]) || !i.REGEXP_COLORSTOP.test(t.args[0]);
                                        e
                                            ? t.args[0]
                                                  .split(/\s+/)
                                                  .reverse()
                                                  .forEach(function (t, e) {
                                                      switch (t) {
                                                          case "left":
                                                              (this.x0 = 0), (this.x1 = 1);
                                                              break;
                                                          case "top":
                                                              (this.y0 = 0), (this.y1 = 1);
                                                              break;
                                                          case "right":
                                                              (this.x0 = 1), (this.x1 = 0);
                                                              break;
                                                          case "bottom":
                                                              (this.y0 = 1), (this.y1 = 0);
                                                              break;
                                                          case "to":
                                                              var n = this.y0,
                                                                  r = this.x0;
                                                              (this.y0 = this.y1), (this.x0 = this.x1), (this.x1 = r), (this.y1 = n);
                                                              break;
                                                          case "center":
                                                              break;
                                                          default:
                                                              var i = 0.01 * parseFloat(t, 10);
                                                              if (isNaN(i)) break;
                                                              0 === e ? ((this.y0 = i), (this.y1 = 1 - this.y0)) : ((this.x0 = i), (this.x1 = 1 - this.x0));
                                                      }
                                                  }, this)
                                            : ((this.y0 = 0), (this.y1 = 1)),
                                            (this.colorStops = t.args.slice(e ? 1 : 0).map(function (t) {
                                                var e = t.match(i.REGEXP_COLORSTOP),
                                                    n = +e[2],
                                                    r = 0 === n ? "%" : e[3];
                                                return { color: new o(e[1]), stop: "%" === r ? n / 100 : null };
                                            })),
                                            null === this.colorStops[0].stop && (this.colorStops[0].stop = 0),
                                            null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1),
                                            this.colorStops.forEach(function (t, e) {
                                                null === t.stop &&
                                                    this.colorStops.slice(e).some(function (n, r) {
                                                        return null !== n.stop && ((t.stop = (n.stop - this.colorStops[e - 1].stop) / (r + 1) + this.colorStops[e - 1].stop), !0);
                                                    }, this);
                                            }, this);
                                    }
                                    var i = t("./gradientcontainer"),
                                        o = t("./color");
                                    (r.prototype = Object.create(i.prototype)), (r.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i), (e.exports = r);
                                },
                                { "./color": 3, "./gradientcontainer": 9 },
                            ],
                            13: [
                                function (t, e, n) {
                                    var r = function () {
                                        r.options.logging &&
                                            window.console &&
                                            window.console.log &&
                                            Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - r.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
                                    };
                                    (r.options = { logging: !1 }), (e.exports = r);
                                },
                                {},
                            ],
                            14: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        (this.node = t),
                                            (this.parent = e),
                                            (this.stack = null),
                                            (this.bounds = null),
                                            (this.borders = null),
                                            (this.clip = []),
                                            (this.backgroundClip = []),
                                            (this.offsetBounds = null),
                                            (this.visible = null),
                                            (this.computedStyles = null),
                                            (this.colors = {}),
                                            (this.styles = {}),
                                            (this.backgroundImages = null),
                                            (this.transformData = null),
                                            (this.transformMatrix = null),
                                            (this.isPseudoElement = !1),
                                            (this.opacity = null);
                                    }
                                    function i(t) {
                                        return -1 !== t.toString().indexOf("%");
                                    }
                                    function o(t) {
                                        return t.replace("px", "");
                                    }
                                    function a(t) {
                                        return parseFloat(t);
                                    }
                                    var s = t("./color"),
                                        c = t("./utils"),
                                        l = c.getBounds,
                                        h = c.parseBackgrounds,
                                        u = c.offsetBounds;
                                    (r.prototype.cloneTo = function (t) {
                                        (t.visible = this.visible),
                                            (t.borders = this.borders),
                                            (t.bounds = this.bounds),
                                            (t.clip = this.clip),
                                            (t.backgroundClip = this.backgroundClip),
                                            (t.computedStyles = this.computedStyles),
                                            (t.styles = this.styles),
                                            (t.backgroundImages = this.backgroundImages),
                                            (t.opacity = this.opacity);
                                    }),
                                        (r.prototype.getOpacity = function () {
                                            return null === this.opacity ? (this.opacity = this.cssFloat("opacity")) : this.opacity;
                                        }),
                                        (r.prototype.assignStack = function (t) {
                                            (this.stack = t), t.children.push(this);
                                        }),
                                        (r.prototype.isElementVisible = function () {
                                            return this.node.nodeType === Node.TEXT_NODE
                                                ? this.parent.visible
                                                : "none" !== this.css("display") &&
                                                      "hidden" !== this.css("visibility") &&
                                                      !this.node.hasAttribute("data-html2canvas-ignore") &&
                                                      ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"));
                                        }),
                                        (r.prototype.css = function (t) {
                                            return (
                                                this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)),
                                                this.styles[t] || (this.styles[t] = this.computedStyles[t])
                                            );
                                        }),
                                        (r.prototype.prefixedCss = function (t) {
                                            var e = this.css(t);
                                            return (
                                                void 0 === e &&
                                                    ["webkit", "moz", "ms", "o"].some(function (n) {
                                                        return void 0 !== (e = this.css(n + t.substr(0, 1).toUpperCase() + t.substr(1)));
                                                    }, this),
                                                void 0 === e ? null : e
                                            );
                                        }),
                                        (r.prototype.computedStyle = function (t) {
                                            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t);
                                        }),
                                        (r.prototype.cssInt = function (t) {
                                            var e = parseInt(this.css(t), 10);
                                            return isNaN(e) ? 0 : e;
                                        }),
                                        (r.prototype.color = function (t) {
                                            return this.colors[t] || (this.colors[t] = new s(this.css(t)));
                                        }),
                                        (r.prototype.cssFloat = function (t) {
                                            var e = parseFloat(this.css(t));
                                            return isNaN(e) ? 0 : e;
                                        }),
                                        (r.prototype.fontWeight = function () {
                                            var t = this.css("fontWeight");
                                            switch (parseInt(t, 10)) {
                                                case 401:
                                                    t = "bold";
                                                    break;
                                                case 400:
                                                    t = "normal";
                                            }
                                            return t;
                                        }),
                                        (r.prototype.parseClip = function () {
                                            var t = this.css("clip").match(this.CLIP);
                                            return t ? { top: parseInt(t[1], 10), right: parseInt(t[2], 10), bottom: parseInt(t[3], 10), left: parseInt(t[4], 10) } : null;
                                        }),
                                        (r.prototype.parseBackgroundImages = function () {
                                            return this.backgroundImages || (this.backgroundImages = h(this.css("backgroundImage")));
                                        }),
                                        (r.prototype.cssList = function (t, e) {
                                            var n = (this.css(t) || "").split(",");
                                            return (n = n[e || 0] || n[0] || "auto"), 1 === (n = n.trim().split(" ")).length && (n = [n[0], i(n[0]) ? "auto" : n[0]]), n;
                                        }),
                                        (r.prototype.parseBackgroundSize = function (t, e, n) {
                                            var r,
                                                o,
                                                a = this.cssList("backgroundSize", n);
                                            if (i(a[0])) r = (t.width * parseFloat(a[0])) / 100;
                                            else {
                                                if (/contain|cover/.test(a[0])) {
                                                    var s = t.width / t.height,
                                                        c = e.width / e.height;
                                                    return (s < c) ^ ("contain" === a[0]) ? { width: t.height * c, height: t.height } : { width: t.width, height: t.width / c };
                                                }
                                                r = parseInt(a[0], 10);
                                            }
                                            return (
                                                (o = "auto" === a[0] && "auto" === a[1] ? e.height : "auto" === a[1] ? (r / e.width) * e.height : i(a[1]) ? (t.height * parseFloat(a[1])) / 100 : parseInt(a[1], 10)),
                                                "auto" === a[0] && (r = (o / e.height) * e.width),
                                                { width: r, height: o }
                                            );
                                        }),
                                        (r.prototype.parseBackgroundPosition = function (t, e, n, r) {
                                            var o,
                                                a,
                                                s = this.cssList("backgroundPosition", n);
                                            return (
                                                (o = i(s[0]) ? (t.width - (r || e).width) * (parseFloat(s[0]) / 100) : parseInt(s[0], 10)),
                                                (a = "auto" === s[1] ? (o / e.width) * e.height : i(s[1]) ? ((t.height - (r || e).height) * parseFloat(s[1])) / 100 : parseInt(s[1], 10)),
                                                "auto" === s[0] && (o = (a / e.height) * e.width),
                                                { left: o, top: a }
                                            );
                                        }),
                                        (r.prototype.parseBackgroundRepeat = function (t) {
                                            return this.cssList("backgroundRepeat", t)[0];
                                        }),
                                        (r.prototype.parseTextShadows = function () {
                                            var t = this.css("textShadow"),
                                                e = [];
                                            if (t && "none" !== t)
                                                for (var n = t.match(this.TEXT_SHADOW_PROPERTY), r = 0; n && r < n.length; r++) {
                                                    var i = n[r].match(this.TEXT_SHADOW_VALUES);
                                                    e.push({ color: new s(i[0]), offsetX: i[1] ? parseFloat(i[1].replace("px", "")) : 0, offsetY: i[2] ? parseFloat(i[2].replace("px", "")) : 0, blur: i[3] ? i[3].replace("px", "") : 0 });
                                                }
                                            return e;
                                        }),
                                        (r.prototype.parseTransform = function () {
                                            if (!this.transformData)
                                                if (this.hasTransform()) {
                                                    var t = this.parseBounds(),
                                                        e = this.prefixedCss("transformOrigin").split(" ").map(o).map(a);
                                                    (e[0] += t.left), (e[1] += t.top), (this.transformData = { origin: e, matrix: this.parseTransformMatrix() });
                                                } else this.transformData = { origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0] };
                                            return this.transformData;
                                        }),
                                        (r.prototype.parseTransformMatrix = function () {
                                            if (!this.transformMatrix) {
                                                var t = this.prefixedCss("transform"),
                                                    e = t
                                                        ? (function (t) {
                                                              if (t && "matrix" === t[1])
                                                                  return t[2].split(",").map(function (t) {
                                                                      return parseFloat(t.trim());
                                                                  });
                                                              if (t && "matrix3d" === t[1]) {
                                                                  var e = t[2].split(",").map(function (t) {
                                                                      return parseFloat(t.trim());
                                                                  });
                                                                  return [e[0], e[1], e[4], e[5], e[12], e[13]];
                                                              }
                                                          })(t.match(this.MATRIX_PROPERTY))
                                                        : null;
                                                this.transformMatrix = e || [1, 0, 0, 1, 0, 0];
                                            }
                                            return this.transformMatrix;
                                        }),
                                        (r.prototype.parseBounds = function () {
                                            return this.bounds || (this.bounds = this.hasTransform() ? u(this.node) : l(this.node));
                                        }),
                                        (r.prototype.hasTransform = function () {
                                            return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || (this.parent && this.parent.hasTransform());
                                        }),
                                        (r.prototype.getValue = function () {
                                            var t = this.node.value || "";
                                            return (
                                                "SELECT" === this.node.tagName
                                                    ? (t = (function (t) {
                                                          var e = t.options[t.selectedIndex || 0];
                                                          return e ? e.text || "" : "";
                                                      })(this.node))
                                                    : "password" === this.node.type && (t = Array(t.length + 1).join("•")),
                                                0 === t.length ? this.node.placeholder || "" : t
                                            );
                                        }),
                                        (r.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/),
                                        (r.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g),
                                        (r.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g),
                                        (r.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/),
                                        (e.exports = r);
                                },
                                { "./color": 3, "./utils": 26 },
                            ],
                            15: [
                                function (t, e, n) {
                                    function r(t, e, n, r, i) {
                                        P("Starting NodeParser"), (this.renderer = e), (this.options = i), (this.range = null), (this.support = n), (this.renderQueue = []), (this.stack = new L(!0, 1, t.ownerDocument, null));
                                        var o = new q(t, null);
                                        if ((i.background && e.rectangle(0, 0, e.width, e.height, new D(i.background)), t === t.ownerDocument.documentElement)) {
                                            var a = new q(o.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
                                            e.rectangle(0, 0, e.width, e.height, a.color("backgroundColor"));
                                        }
                                        (o.visibile = o.isElementVisible()),
                                            this.createPseudoHideStyles(t.ownerDocument),
                                            this.disableAnimations(t.ownerDocument),
                                            (this.nodes = I(
                                                [o]
                                                    .concat(this.getChildren(o))
                                                    .filter(function (t) {
                                                        return (t.visible = t.isElementVisible());
                                                    })
                                                    .map(this.getPseudoElements, this)
                                            )),
                                            (this.fontMetrics = new F()),
                                            P("Fetched nodes, total:", this.nodes.length),
                                            P("Calculate overflow clips"),
                                            this.calculateOverflowClips(),
                                            P("Start fetching images"),
                                            (this.images = r.fetch(this.nodes.filter(_))),
                                            (this.ready = this.images.ready.then(
                                                j(function () {
                                                    return (
                                                        P("Images loaded, starting parsing"),
                                                        P("Creating stacking contexts"),
                                                        this.createStackingContexts(),
                                                        P("Sorting stacking contexts"),
                                                        this.sortStackingContexts(this.stack),
                                                        this.parse(this.stack),
                                                        P("Render queue created with " + this.renderQueue.length + " items"),
                                                        new Promise(
                                                            j(function (t) {
                                                                i.async
                                                                    ? "function" == typeof i.async
                                                                        ? i.async.call(this, this.renderQueue, t)
                                                                        : this.renderQueue.length > 0
                                                                        ? ((this.renderIndex = 0), this.asyncRenderer(this.renderQueue, t))
                                                                        : t()
                                                                    : (this.renderQueue.forEach(this.paint, this), t());
                                                            }, this)
                                                        )
                                                    );
                                                }, this)
                                            ));
                                    }
                                    function i(t) {
                                        return t.parent && t.parent.clip.length;
                                    }
                                    function o(t) {
                                        return t.replace(/(\-[a-z])/g, function (t) {
                                            return t.toUpperCase().replace("-", "");
                                        });
                                    }
                                    function a() {}
                                    function s(t, e, n, r) {
                                        return t.map(function (i, o) {
                                            if (i.width > 0) {
                                                var a = e.left,
                                                    s = e.top,
                                                    c = e.width,
                                                    l = e.height - t[2].width;
                                                switch (o) {
                                                    case 0:
                                                        (l = t[0].width),
                                                            (i.args = u(
                                                                { c1: [a, s], c2: [a + c, s], c3: [a + c - t[1].width, s + l], c4: [a + t[3].width, s + l] },
                                                                r[0],
                                                                r[1],
                                                                n.topLeftOuter,
                                                                n.topLeftInner,
                                                                n.topRightOuter,
                                                                n.topRightInner
                                                            ));
                                                        break;
                                                    case 1:
                                                        (a = e.left + e.width - t[1].width),
                                                            (c = t[1].width),
                                                            (i.args = u(
                                                                { c1: [a + c, s], c2: [a + c, s + l + t[2].width], c3: [a, s + l], c4: [a, s + t[0].width] },
                                                                r[1],
                                                                r[2],
                                                                n.topRightOuter,
                                                                n.topRightInner,
                                                                n.bottomRightOuter,
                                                                n.bottomRightInner
                                                            ));
                                                        break;
                                                    case 2:
                                                        (s = s + e.height - t[2].width),
                                                            (l = t[2].width),
                                                            (i.args = u(
                                                                { c1: [a + c, s + l], c2: [a, s + l], c3: [a + t[3].width, s], c4: [a + c - t[3].width, s] },
                                                                r[2],
                                                                r[3],
                                                                n.bottomRightOuter,
                                                                n.bottomRightInner,
                                                                n.bottomLeftOuter,
                                                                n.bottomLeftInner
                                                            ));
                                                        break;
                                                    case 3:
                                                        (c = t[3].width),
                                                            (i.args = u(
                                                                { c1: [a, s + l + t[2].width], c2: [a, s], c3: [a + c, s + t[0].width], c4: [a + c, s + l] },
                                                                r[3],
                                                                r[0],
                                                                n.bottomLeftOuter,
                                                                n.bottomLeftInner,
                                                                n.topLeftOuter,
                                                                n.topLeftInner
                                                            ));
                                                }
                                            }
                                            return i;
                                        });
                                    }
                                    function c(t, e, n, r) {
                                        var i = ((Math.sqrt(2) - 1) / 3) * 4,
                                            o = n * i,
                                            a = r * i,
                                            s = t + n,
                                            c = e + r;
                                        return {
                                            topLeft: h({ x: t, y: c }, { x: t, y: c - a }, { x: s - o, y: e }, { x: s, y: e }),
                                            topRight: h({ x: t, y: e }, { x: t + o, y: e }, { x: s, y: c - a }, { x: s, y: c }),
                                            bottomRight: h({ x: s, y: e }, { x: s, y: e + a }, { x: t + o, y: c }, { x: t, y: c }),
                                            bottomLeft: h({ x: s, y: c }, { x: s - o, y: c }, { x: t, y: e + a }, { x: t, y: e }),
                                        };
                                    }
                                    function l(t, e, n) {
                                        var r = t.left,
                                            i = t.top,
                                            o = t.width,
                                            a = t.height,
                                            s = e[0][0] < o / 2 ? e[0][0] : o / 2,
                                            l = e[0][1] < a / 2 ? e[0][1] : a / 2,
                                            h = e[1][0] < o / 2 ? e[1][0] : o / 2,
                                            u = e[1][1] < a / 2 ? e[1][1] : a / 2,
                                            d = e[2][0] < o / 2 ? e[2][0] : o / 2,
                                            f = e[2][1] < a / 2 ? e[2][1] : a / 2,
                                            p = e[3][0] < o / 2 ? e[3][0] : o / 2,
                                            g = e[3][1] < a / 2 ? e[3][1] : a / 2,
                                            m = o - h,
                                            w = a - f,
                                            y = o - d,
                                            v = a - g;
                                        return {
                                            topLeftOuter: c(r, i, s, l).topLeft.subdivide(0.5),
                                            topLeftInner: c(r + n[3].width, i + n[0].width, Math.max(0, s - n[3].width), Math.max(0, l - n[0].width)).topLeft.subdivide(0.5),
                                            topRightOuter: c(r + m, i, h, u).topRight.subdivide(0.5),
                                            topRightInner: c(r + Math.min(m, o + n[3].width), i + n[0].width, m > o + n[3].width ? 0 : h - n[3].width, u - n[0].width).topRight.subdivide(0.5),
                                            bottomRightOuter: c(r + y, i + w, d, f).bottomRight.subdivide(0.5),
                                            bottomRightInner: c(r + Math.min(y, o - n[3].width), i + Math.min(w, a + n[0].width), Math.max(0, d - n[1].width), f - n[2].width).bottomRight.subdivide(0.5),
                                            bottomLeftOuter: c(r, i + v, p, g).bottomLeft.subdivide(0.5),
                                            bottomLeftInner: c(r + n[3].width, i + v, Math.max(0, p - n[3].width), g - n[2].width).bottomLeft.subdivide(0.5),
                                        };
                                    }
                                    function h(t, e, n, r) {
                                        var i = function (t, e, n) {
                                            return { x: t.x + (e.x - t.x) * n, y: t.y + (e.y - t.y) * n };
                                        };
                                        return {
                                            start: t,
                                            startControl: e,
                                            endControl: n,
                                            end: r,
                                            subdivide: function (o) {
                                                var a = i(t, e, o),
                                                    s = i(e, n, o),
                                                    c = i(n, r, o),
                                                    l = i(a, s, o),
                                                    u = i(s, c, o),
                                                    d = i(l, u, o);
                                                return [h(t, a, l, d), h(d, u, c, r)];
                                            },
                                            curveTo: function (t) {
                                                t.push(["bezierCurve", e.x, e.y, n.x, n.y, r.x, r.y]);
                                            },
                                            curveToReversed: function (r) {
                                                r.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y]);
                                            },
                                        };
                                    }
                                    function u(t, e, n, r, i, o, a) {
                                        var s = [];
                                        return (
                                            e[0] > 0 || e[1] > 0 ? (s.push(["line", r[1].start.x, r[1].start.y]), r[1].curveTo(s)) : s.push(["line", t.c1[0], t.c1[1]]),
                                            n[0] > 0 || n[1] > 0
                                                ? (s.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(s), s.push(["line", a[0].end.x, a[0].end.y]), a[0].curveToReversed(s))
                                                : (s.push(["line", t.c2[0], t.c2[1]]), s.push(["line", t.c3[0], t.c3[1]])),
                                            e[0] > 0 || e[1] > 0 ? (s.push(["line", i[1].end.x, i[1].end.y]), i[1].curveToReversed(s)) : s.push(["line", t.c4[0], t.c4[1]]),
                                            s
                                        );
                                    }
                                    function d(t, e, n, r, i, o, a) {
                                        e[0] > 0 || e[1] > 0 ? (t.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(t), r[1].curveTo(t)) : t.push(["line", o, a]),
                                            (n[0] > 0 || n[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y]);
                                    }
                                    function f(t) {
                                        return t.cssInt("zIndex") < 0;
                                    }
                                    function p(t) {
                                        return t.cssInt("zIndex") > 0;
                                    }
                                    function g(t) {
                                        return 0 === t.cssInt("zIndex");
                                    }
                                    function m(t) {
                                        return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"));
                                    }
                                    function w(t) {
                                        return t instanceof L;
                                    }
                                    function y(t) {
                                        return t.node.data.trim().length > 0;
                                    }
                                    function v(t) {
                                        return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE;
                                    }
                                    function b(t) {
                                        return "static" !== t.css("position");
                                    }
                                    function x(t) {
                                        return "none" !== t.css("float");
                                    }
                                    function k(t) {
                                        var e = this;
                                        return function () {
                                            return !t.apply(e, arguments);
                                        };
                                    }
                                    function _(t) {
                                        return t.node.nodeType === Node.ELEMENT_NODE;
                                    }
                                    function C(t) {
                                        return !0 === t.isPseudoElement;
                                    }
                                    function T(t) {
                                        return t.node.nodeType === Node.TEXT_NODE;
                                    }
                                    function S(t) {
                                        return parseInt(t, 10);
                                    }
                                    function E(t) {
                                        return t.width;
                                    }
                                    function A(t) {
                                        return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName);
                                    }
                                    function I(t) {
                                        return [].concat.apply([], t);
                                    }
                                    var P = t("./log"),
                                        O = t("punycode"),
                                        q = t("./nodecontainer"),
                                        R = t("./textcontainer"),
                                        B = t("./pseudoelementcontainer"),
                                        F = t("./fontmetrics"),
                                        D = t("./color"),
                                        L = t("./stackingcontext"),
                                        N = t("./utils"),
                                        j = N.bind,
                                        M = N.getBounds,
                                        z = N.parseBackgrounds,
                                        U = N.offsetBounds;
                                    (r.prototype.calculateOverflowClips = function () {
                                        this.nodes.forEach(function (t) {
                                            if (_(t)) {
                                                C(t) && t.appendToDOM(), (t.borders = this.parseBorders(t));
                                                var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                                                    n = t.parseClip();
                                                n && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]),
                                                    (t.clip = i(t) ? t.parent.clip.concat(e) : e),
                                                    (t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip),
                                                    C(t) && t.cleanDOM();
                                            } else T(t) && (t.clip = i(t) ? t.parent.clip : []);
                                            C(t) || (t.bounds = null);
                                        }, this);
                                    }),
                                        (r.prototype.asyncRenderer = function (t, e, n) {
                                            (n = n || Date.now()),
                                                this.paint(t[this.renderIndex++]),
                                                t.length === this.renderIndex
                                                    ? e()
                                                    : n + 20 > Date.now()
                                                    ? this.asyncRenderer(t, e, n)
                                                    : setTimeout(
                                                          j(function () {
                                                              this.asyncRenderer(t, e);
                                                          }, this),
                                                          0
                                                      );
                                        }),
                                        (r.prototype.createPseudoHideStyles = function (t) {
                                            this.createStyles(
                                                t,
                                                "." +
                                                    B.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE +
                                                    ':before { content: "" !important; display: none !important; }.' +
                                                    B.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER +
                                                    ':after { content: "" !important; display: none !important; }'
                                            );
                                        }),
                                        (r.prototype.disableAnimations = function (t) {
                                            this.createStyles(
                                                t,
                                                "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}"
                                            );
                                        }),
                                        (r.prototype.createStyles = function (t, e) {
                                            var n = t.createElement("style");
                                            (n.innerHTML = e), t.body.appendChild(n);
                                        }),
                                        (r.prototype.getPseudoElements = function (t) {
                                            var e = [[t]];
                                            if (t.node.nodeType === Node.ELEMENT_NODE) {
                                                var n = this.getPseudoElement(t, ":before"),
                                                    r = this.getPseudoElement(t, ":after");
                                                n && e.push(n), r && e.push(r);
                                            }
                                            return I(e);
                                        }),
                                        (r.prototype.getPseudoElement = function (t, e) {
                                            var n = t.computedStyle(e);
                                            if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
                                            for (
                                                var r = (function (t) {
                                                        var e = t.substr(0, 1);
                                                        return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t;
                                                    })(n.content),
                                                    i = "url" === r.substr(0, 3),
                                                    a = document.createElement(i ? "img" : "html2canvaspseudoelement"),
                                                    s = new B(a, t, e),
                                                    c = n.length - 1;
                                                c >= 0;
                                                c--
                                            ) {
                                                var l = o(n.item(c));
                                                a.style[l] = n[l];
                                            }
                                            if (((a.className = B.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + B.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER), i)) return (a.src = z(r)[0].args[0]), [s];
                                            var h = document.createTextNode(r);
                                            return a.appendChild(h), [s, new R(h, s)];
                                        }),
                                        (r.prototype.getChildren = function (t) {
                                            return I(
                                                [].filter.call(t.node.childNodes, v).map(function (e) {
                                                    var n = [e.nodeType === Node.TEXT_NODE ? new R(e, t) : new q(e, t)].filter(A);
                                                    return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? (n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : []) : n;
                                                }, this)
                                            );
                                        }),
                                        (r.prototype.newStackingContext = function (t, e) {
                                            var n = new L(e, t.getOpacity(), t.node, t.parent);
                                            t.cloneTo(n), (e ? n.getParentStack(this) : n.parent.stack).contexts.push(n), (t.stack = n);
                                        }),
                                        (r.prototype.createStackingContexts = function () {
                                            this.nodes.forEach(function (t) {
                                                _(t) &&
                                                (this.isRootElement(t) ||
                                                    (function (t) {
                                                        return t.getOpacity() < 1;
                                                    })(t) ||
                                                    (function (t) {
                                                        var e = t.css("position");
                                                        return "auto" !== (-1 !== ["absolute", "relative", "fixed"].indexOf(e) ? t.css("zIndex") : "auto");
                                                    })(t) ||
                                                    this.isBodyWithTransparentRoot(t) ||
                                                    t.hasTransform())
                                                    ? this.newStackingContext(t, !0)
                                                    : _(t) &&
                                                      ((b(t) && g(t)) ||
                                                          (function (t) {
                                                              return -1 !== ["inline-block", "inline-table"].indexOf(t.css("display"));
                                                          })(t) ||
                                                          x(t))
                                                    ? this.newStackingContext(t, !1)
                                                    : t.assignStack(t.parent.stack);
                                            }, this);
                                        }),
                                        (r.prototype.isBodyWithTransparentRoot = function (t) {
                                            return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent();
                                        }),
                                        (r.prototype.isRootElement = function (t) {
                                            return null === t.parent;
                                        }),
                                        (r.prototype.sortStackingContexts = function (t) {
                                            t.contexts.sort(
                                                (function (t) {
                                                    return function (e, n) {
                                                        return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length);
                                                    };
                                                })(t.contexts.slice(0))
                                            ),
                                                t.contexts.forEach(this.sortStackingContexts, this);
                                        }),
                                        (r.prototype.parseTextBounds = function (t) {
                                            return function (e, n, r) {
                                                if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                                                    if (this.support.rangeBounds && !t.parent.hasTransform()) {
                                                        var i = r.slice(0, n).join("").length;
                                                        return this.getRangeBounds(t.node, i, e.length);
                                                    }
                                                    if (t.node && "string" == typeof t.node.data) {
                                                        var o = t.node.splitText(e.length),
                                                            a = this.getWrapperBounds(t.node, t.parent.hasTransform());
                                                        return (t.node = o), a;
                                                    }
                                                } else (this.support.rangeBounds && !t.parent.hasTransform()) || (t.node = t.node.splitText(e.length));
                                                return {};
                                            };
                                        }),
                                        (r.prototype.getWrapperBounds = function (t, e) {
                                            var n = t.ownerDocument.createElement("html2canvaswrapper"),
                                                r = t.parentNode,
                                                i = t.cloneNode(!0);
                                            n.appendChild(t.cloneNode(!0)), r.replaceChild(n, t);
                                            var o = e ? U(n) : M(n);
                                            return r.replaceChild(i, n), o;
                                        }),
                                        (r.prototype.getRangeBounds = function (t, e, n) {
                                            var r = this.range || (this.range = t.ownerDocument.createRange());
                                            return r.setStart(t, e), r.setEnd(t, e + n), r.getBoundingClientRect();
                                        }),
                                        (r.prototype.parse = function (t) {
                                            var e = t.contexts.filter(f),
                                                n = t.children.filter(_),
                                                r = n.filter(k(x)),
                                                i = r.filter(k(b)).filter(k(m)),
                                                o = n.filter(k(b)).filter(x),
                                                s = r.filter(k(b)).filter(m),
                                                c = t.contexts.concat(r.filter(b)).filter(g),
                                                l = t.children.filter(T).filter(y),
                                                h = t.contexts.filter(p);
                                            e.concat(i)
                                                .concat(o)
                                                .concat(s)
                                                .concat(c)
                                                .concat(l)
                                                .concat(h)
                                                .forEach(function (t) {
                                                    this.renderQueue.push(t), w(t) && (this.parse(t), this.renderQueue.push(new a()));
                                                }, this);
                                        }),
                                        (r.prototype.paint = function (t) {
                                            try {
                                                t instanceof a ? this.renderer.ctx.restore() : T(t) ? (C(t.parent) && t.parent.appendToDOM(), this.paintText(t), C(t.parent) && t.parent.cleanDOM()) : this.paintNode(t);
                                            } catch (t) {
                                                if ((P(t), this.options.strict)) throw t;
                                            }
                                        }),
                                        (r.prototype.paintNode = function (t) {
                                            w(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())),
                                                "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t);
                                        }),
                                        (r.prototype.paintElement = function (t) {
                                            var e = t.parseBounds();
                                            this.renderer.clip(
                                                t.backgroundClip,
                                                function () {
                                                    this.renderer.renderBackground(t, e, t.borders.borders.map(E));
                                                },
                                                this
                                            ),
                                                this.renderer.clip(
                                                    t.clip,
                                                    function () {
                                                        this.renderer.renderBorders(t.borders.borders);
                                                    },
                                                    this
                                                ),
                                                this.renderer.clip(
                                                    t.backgroundClip,
                                                    function () {
                                                        switch (t.node.nodeName) {
                                                            case "svg":
                                                            case "IFRAME":
                                                                var n = this.images.get(t.node);
                                                                n ? this.renderer.renderImage(t, e, t.borders, n) : P("Error loading <" + t.node.nodeName + ">", t.node);
                                                                break;
                                                            case "IMG":
                                                                var r = this.images.get(t.node.src);
                                                                r ? this.renderer.renderImage(t, e, t.borders, r) : P("Error loading <img>", t.node.src);
                                                                break;
                                                            case "CANVAS":
                                                                this.renderer.renderImage(t, e, t.borders, { image: t.node });
                                                                break;
                                                            case "SELECT":
                                                            case "INPUT":
                                                            case "TEXTAREA":
                                                                this.paintFormValue(t);
                                                        }
                                                    },
                                                    this
                                                );
                                        }),
                                        (r.prototype.paintCheckbox = function (t) {
                                            var e = t.parseBounds(),
                                                n = Math.min(e.width, e.height),
                                                r = { width: n - 1, height: n - 1, top: e.top, left: e.left },
                                                i = [3, 3],
                                                o = [i, i, i, i],
                                                a = [1, 1, 1, 1].map(function (t) {
                                                    return { color: new D("#A5A5A5"), width: t };
                                                }),
                                                c = l(r, o, a);
                                            this.renderer.clip(
                                                t.backgroundClip,
                                                function () {
                                                    this.renderer.rectangle(r.left + 1, r.top + 1, r.width - 2, r.height - 2, new D("#DEDEDE")),
                                                        this.renderer.renderBorders(s(a, r, c, o)),
                                                        t.node.checked && (this.renderer.font(new D("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"), this.renderer.text("✔", r.left + n / 6, r.top + n - 1));
                                                },
                                                this
                                            );
                                        }),
                                        (r.prototype.paintRadio = function (t) {
                                            var e = t.parseBounds(),
                                                n = Math.min(e.width, e.height) - 2;
                                            this.renderer.clip(
                                                t.backgroundClip,
                                                function () {
                                                    this.renderer.circleStroke(e.left + 1, e.top + 1, n, new D("#DEDEDE"), 1, new D("#A5A5A5")),
                                                        t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new D("#424242"));
                                                },
                                                this
                                            );
                                        }),
                                        (r.prototype.paintFormValue = function (t) {
                                            var e = t.getValue();
                                            if (e.length > 0) {
                                                var n = t.node.ownerDocument,
                                                    r = n.createElement("html2canvaswrapper");
                                                [
                                                    "lineHeight",
                                                    "textAlign",
                                                    "fontFamily",
                                                    "fontWeight",
                                                    "fontSize",
                                                    "color",
                                                    "paddingLeft",
                                                    "paddingTop",
                                                    "paddingRight",
                                                    "paddingBottom",
                                                    "width",
                                                    "height",
                                                    "borderLeftStyle",
                                                    "borderTopStyle",
                                                    "borderLeftWidth",
                                                    "borderTopWidth",
                                                    "boxSizing",
                                                    "whiteSpace",
                                                    "wordWrap",
                                                ].forEach(function (e) {
                                                    try {
                                                        r.style[e] = t.css(e);
                                                    } catch (t) {
                                                        P("html2canvas: Parse: Exception caught in renderFormValue: " + t.message);
                                                    }
                                                });
                                                var i = t.parseBounds();
                                                (r.style.position = "fixed"),
                                                    (r.style.left = i.left + "px"),
                                                    (r.style.top = i.top + "px"),
                                                    (r.textContent = e),
                                                    n.body.appendChild(r),
                                                    this.paintText(new R(r.firstChild, t)),
                                                    n.body.removeChild(r);
                                            }
                                        }),
                                        (r.prototype.paintText = function (t) {
                                            t.applyTextTransform();
                                            var e = O.ucs2.decode(t.node.data),
                                                n =
                                                    (this.options.letterRendering &&
                                                        !(function (t) {
                                                            return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"));
                                                        })(t)) ||
                                                    (function (t) {
                                                        return /[^\u0000-\u00ff]/.test(t);
                                                    })(t.node.data)
                                                        ? e.map(function (t) {
                                                              return O.ucs2.encode([t]);
                                                          })
                                                        : (function (t) {
                                                              for (var e, n = [], r = 0, i = !1; t.length; )
                                                                  (function (t) {
                                                                      return -1 !== [32, 13, 10, 9, 45].indexOf(t);
                                                                  })(t[r]) === i
                                                                      ? ((e = t.splice(0, r)).length && n.push(O.ucs2.encode(e)), (i = !i), (r = 0))
                                                                      : r++,
                                                                      r >= t.length && (e = t.splice(0, r)).length && n.push(O.ucs2.encode(e));
                                                              return n;
                                                          })(e),
                                                r = t.parent.fontWeight(),
                                                i = t.parent.css("fontSize"),
                                                o = t.parent.css("fontFamily"),
                                                a = t.parent.parseTextShadows();
                                            this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), r, i, o),
                                                a.length ? this.renderer.fontShadow(a[0].color, a[0].offsetX, a[0].offsetY, a[0].blur) : this.renderer.clearShadow(),
                                                this.renderer.clip(
                                                    t.parent.clip,
                                                    function () {
                                                        n.map(this.parseTextBounds(t), this).forEach(function (e, r) {
                                                            e && (this.renderer.text(n[r], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(o, i)));
                                                        }, this);
                                                    },
                                                    this
                                                );
                                        }),
                                        (r.prototype.renderTextDecoration = function (t, e, n) {
                                            switch (t.css("textDecoration").split(" ")[0]) {
                                                case "underline":
                                                    this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                                                    break;
                                                case "overline":
                                                    this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                                                    break;
                                                case "line-through":
                                                    this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"));
                                            }
                                        });
                                    var H = {
                                        inset: [
                                            ["darken", 0.6],
                                            ["darken", 0.1],
                                            ["darken", 0.1],
                                            ["darken", 0.6],
                                        ],
                                    };
                                    (r.prototype.parseBorders = function (t) {
                                        var e = t.parseBounds(),
                                            n = (function (t) {
                                                return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (e) {
                                                    var n = t.css("border" + e + "Radius").split(" ");
                                                    return n.length <= 1 && (n[1] = n[0]), n.map(S);
                                                });
                                            })(t),
                                            r = ["Top", "Right", "Bottom", "Left"].map(function (e, n) {
                                                var r = t.css("border" + e + "Style"),
                                                    i = t.color("border" + e + "Color");
                                                "inset" === r && i.isBlack() && (i = new D([255, 255, 255, i.a]));
                                                var o = H[r] ? H[r][n] : null;
                                                return { width: t.cssInt("border" + e + "Width"), color: o ? i[o[0]](o[1]) : i, args: null };
                                            }),
                                            i = l(e, n, r);
                                        return { clip: this.parseBackgroundClip(t, i, r, n, e), borders: s(r, e, i, n) };
                                    }),
                                        (r.prototype.parseBackgroundClip = function (t, e, n, r, i) {
                                            var o = [];
                                            switch (t.css("backgroundClip")) {
                                                case "content-box":
                                                case "padding-box":
                                                    d(o, r[0], r[1], e.topLeftInner, e.topRightInner, i.left + n[3].width, i.top + n[0].width),
                                                        d(o, r[1], r[2], e.topRightInner, e.bottomRightInner, i.left + i.width - n[1].width, i.top + n[0].width),
                                                        d(o, r[2], r[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - n[1].width, i.top + i.height - n[2].width),
                                                        d(o, r[3], r[0], e.bottomLeftInner, e.topLeftInner, i.left + n[3].width, i.top + i.height - n[2].width);
                                                    break;
                                                default:
                                                    d(o, r[0], r[1], e.topLeftOuter, e.topRightOuter, i.left, i.top),
                                                        d(o, r[1], r[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top),
                                                        d(o, r[2], r[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height),
                                                        d(o, r[3], r[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height);
                                            }
                                            return o;
                                        }),
                                        (e.exports = r);
                                },
                                { "./color": 3, "./fontmetrics": 7, "./log": 13, "./nodecontainer": 14, "./pseudoelementcontainer": 18, "./stackingcontext": 21, "./textcontainer": 25, "./utils": 26, punycode: 1 },
                            ],
                            16: [
                                function (t, e, n) {
                                    function r(t, e, n) {
                                        var r = "withCredentials" in new XMLHttpRequest();
                                        if (!e) return Promise.reject("No proxy configured");
                                        var c = o(r),
                                            l = a(e, t, c);
                                        return r
                                            ? s(l)
                                            : i(n, l, c).then(function (t) {
                                                  return u(t.content);
                                              });
                                    }
                                    function i(t, e, n) {
                                        return new Promise(function (r, i) {
                                            var o = t.createElement("script"),
                                                a = function () {
                                                    delete window.html2canvas.proxy[n], t.body.removeChild(o);
                                                };
                                            (window.html2canvas.proxy[n] = function (t) {
                                                a(), r(t);
                                            }),
                                                (o.src = e),
                                                (o.onerror = function (t) {
                                                    a(), i(t);
                                                }),
                                                t.body.appendChild(o);
                                        });
                                    }
                                    function o(t) {
                                        return t ? "" : "html2canvas_" + Date.now() + "_" + ++d + "_" + Math.round(1e5 * Math.random());
                                    }
                                    function a(t, e, n) {
                                        return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n : "");
                                    }
                                    var s = t("./xhr"),
                                        c = t("./utils"),
                                        l = t("./log"),
                                        h = t("./clone"),
                                        u = c.decode64,
                                        d = 0;
                                    (n.Proxy = r),
                                        (n.ProxyURL = function (t, e, n) {
                                            var r = "crossOrigin" in new Image(),
                                                s = o(r),
                                                c = a(e, t, s);
                                            return r
                                                ? Promise.resolve(c)
                                                : i(n, c, s).then(function (t) {
                                                      return "data:" + t.type + ";base64," + t.content;
                                                  });
                                        }),
                                        (n.loadUrlDocument = function (t, e, n, i, o, a) {
                                            return new r(t, e, window.document)
                                                .then(
                                                    (function (t) {
                                                        return function (e) {
                                                            var n,
                                                                r = new DOMParser();
                                                            try {
                                                                n = r.parseFromString(e, "text/html");
                                                            } catch (t) {
                                                                l("DOMParser not supported, falling back to createHTMLDocument"), (n = document.implementation.createHTMLDocument(""));
                                                                try {
                                                                    n.open(), n.write(e), n.close();
                                                                } catch (t) {
                                                                    l("createHTMLDocument write not supported, falling back to document.body.innerHTML"), (n.body.innerHTML = e);
                                                                }
                                                            }
                                                            var i = n.querySelector("base");
                                                            if (!i || !i.href.host) {
                                                                var o = n.createElement("base");
                                                                (o.href = t), n.head.insertBefore(o, n.head.firstChild);
                                                            }
                                                            return n;
                                                        };
                                                    })(t)
                                                )
                                                .then(function (t) {
                                                    return h(t, n, i, o, a, 0, 0);
                                                });
                                        });
                                },
                                { "./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28 },
                            ],
                            17: [
                                function (t, e, n) {
                                    var r = t("./proxy").ProxyURL;
                                    e.exports = function (t, e) {
                                        var n = document.createElement("a");
                                        (n.href = t), (t = n.href), (this.src = t), (this.image = new Image());
                                        var i = this;
                                        this.promise = new Promise(function (n, o) {
                                            (i.image.crossOrigin = "Anonymous"),
                                                (i.image.onload = n),
                                                (i.image.onerror = o),
                                                new r(t, e, document)
                                                    .then(function (t) {
                                                        i.image.src = t;
                                                    })
                                                    .catch(o);
                                        });
                                    };
                                },
                                { "./proxy": 16 },
                            ],
                            18: [
                                function (t, e, n) {
                                    function r(t, e, n) {
                                        i.call(this, t, e), (this.isPseudoElement = !0), (this.before = ":before" === n);
                                    }
                                    var i = t("./nodecontainer");
                                    (r.prototype.cloneTo = function (t) {
                                        r.prototype.cloneTo.call(this, t), (t.isPseudoElement = !0), (t.before = this.before);
                                    }),
                                        ((r.prototype = Object.create(i.prototype)).appendToDOM = function () {
                                            this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), (this.parent.node.className += " " + this.getHideClass());
                                        }),
                                        (r.prototype.cleanDOM = function () {
                                            this.node.parentNode.removeChild(this.node), (this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), ""));
                                        }),
                                        (r.prototype.getHideClass = function () {
                                            return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
                                        }),
                                        (r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before"),
                                        (r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after"),
                                        (e.exports = r);
                                },
                                { "./nodecontainer": 14 },
                            ],
                            19: [
                                function (t, e, n) {
                                    function r(t, e, n, r, i) {
                                        (this.width = t), (this.height = e), (this.images = n), (this.options = r), (this.document = i);
                                    }
                                    var i = t("./log");
                                    (r.prototype.renderImage = function (t, e, n, r) {
                                        var i = t.cssInt("paddingLeft"),
                                            o = t.cssInt("paddingTop"),
                                            a = t.cssInt("paddingRight"),
                                            s = t.cssInt("paddingBottom"),
                                            c = n.borders,
                                            l = e.width - (c[1].width + c[3].width + i + a),
                                            h = e.height - (c[0].width + c[2].width + o + s);
                                        this.drawImage(r, 0, 0, r.image.width || l, r.image.height || h, e.left + i + c[3].width, e.top + o + c[0].width, l, h);
                                    }),
                                        (r.prototype.renderBackground = function (t, e, n) {
                                            e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, n));
                                        }),
                                        (r.prototype.renderBackgroundColor = function (t, e) {
                                            var n = t.color("backgroundColor");
                                            n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n);
                                        }),
                                        (r.prototype.renderBorders = function (t) {
                                            t.forEach(this.renderBorder, this);
                                        }),
                                        (r.prototype.renderBorder = function (t) {
                                            t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color);
                                        }),
                                        (r.prototype.renderBackgroundImage = function (t, e, n) {
                                            t.parseBackgroundImages()
                                                .reverse()
                                                .forEach(function (r, o, a) {
                                                    switch (r.method) {
                                                        case "url":
                                                            var s = this.images.get(r.args[0]);
                                                            s ? this.renderBackgroundRepeating(t, e, s, a.length - (o + 1), n) : i("Error loading background-image", r.args[0]);
                                                            break;
                                                        case "linear-gradient":
                                                        case "gradient":
                                                            var c = this.images.get(r.value);
                                                            c ? this.renderBackgroundGradient(c, e, n) : i("Error loading background-image", r.args[0]);
                                                            break;
                                                        case "none":
                                                            break;
                                                        default:
                                                            i("Unknown background-image type", r.args[0]);
                                                    }
                                                }, this);
                                        }),
                                        (r.prototype.renderBackgroundRepeating = function (t, e, n, r, i) {
                                            var o = t.parseBackgroundSize(e, n.image, r),
                                                a = t.parseBackgroundPosition(e, n.image, r, o);
                                            switch (t.parseBackgroundRepeat(r)) {
                                                case "repeat-x":
                                                case "repeat no-repeat":
                                                    this.backgroundRepeatShape(n, a, o, e, e.left + i[3], e.top + a.top + i[0], 99999, o.height, i);
                                                    break;
                                                case "repeat-y":
                                                case "no-repeat repeat":
                                                    this.backgroundRepeatShape(n, a, o, e, e.left + a.left + i[3], e.top + i[0], o.width, 99999, i);
                                                    break;
                                                case "no-repeat":
                                                    this.backgroundRepeatShape(n, a, o, e, e.left + a.left + i[3], e.top + a.top + i[0], o.width, o.height, i);
                                                    break;
                                                default:
                                                    this.renderBackgroundRepeat(n, a, o, { top: e.top, left: e.left }, i[3], i[0]);
                                            }
                                        }),
                                        (e.exports = r);
                                },
                                { "./log": 13 },
                            ],
                            20: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        o.apply(this, arguments),
                                            (this.canvas = this.options.canvas || this.document.createElement("canvas")),
                                            this.options.canvas || ((this.canvas.width = t), (this.canvas.height = e)),
                                            (this.ctx = this.canvas.getContext("2d")),
                                            (this.taintCtx = this.document.createElement("canvas").getContext("2d")),
                                            (this.ctx.textBaseline = "bottom"),
                                            (this.variables = {}),
                                            s("Initialized CanvasRenderer with size", t, "x", e);
                                    }
                                    function i(t) {
                                        return t.length > 0;
                                    }
                                    var o = t("../renderer"),
                                        a = t("../lineargradientcontainer"),
                                        s = t("../log");
                                    ((r.prototype = Object.create(o.prototype)).setFillStyle = function (t) {
                                        return (this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t), this.ctx;
                                    }),
                                        (r.prototype.rectangle = function (t, e, n, r, i) {
                                            this.setFillStyle(i).fillRect(t, e, n, r);
                                        }),
                                        (r.prototype.circle = function (t, e, n, r) {
                                            this.setFillStyle(r), this.ctx.beginPath(), this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill();
                                        }),
                                        (r.prototype.circleStroke = function (t, e, n, r, i, o) {
                                            this.circle(t, e, n, r), (this.ctx.strokeStyle = o.toString()), this.ctx.stroke();
                                        }),
                                        (r.prototype.drawShape = function (t, e) {
                                            this.shape(t), this.setFillStyle(e).fill();
                                        }),
                                        (r.prototype.taints = function (t) {
                                            if (null === t.tainted) {
                                                this.taintCtx.drawImage(t.image, 0, 0);
                                                try {
                                                    this.taintCtx.getImageData(0, 0, 1, 1), (t.tainted = !1);
                                                } catch (e) {
                                                    (this.taintCtx = document.createElement("canvas").getContext("2d")), (t.tainted = !0);
                                                }
                                            }
                                            return t.tainted;
                                        }),
                                        (r.prototype.drawImage = function (t, e, n, r, i, o, a, s, c) {
                                            (this.taints(t) && !this.options.allowTaint) || this.ctx.drawImage(t.image, e, n, r, i, o, a, s, c);
                                        }),
                                        (r.prototype.clip = function (t, e, n) {
                                            this.ctx.save(),
                                                t.filter(i).forEach(function (t) {
                                                    this.shape(t).clip();
                                                }, this),
                                                e.call(n),
                                                this.ctx.restore();
                                        }),
                                        (r.prototype.shape = function (t) {
                                            return (
                                                this.ctx.beginPath(),
                                                t.forEach(function (t, e) {
                                                    "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1));
                                                }, this),
                                                this.ctx.closePath(),
                                                this.ctx
                                            );
                                        }),
                                        (r.prototype.font = function (t, e, n, r, i, o) {
                                            this.setFillStyle(t).font = [e, n, r, i, o].join(" ").split(",")[0];
                                        }),
                                        (r.prototype.fontShadow = function (t, e, n, r) {
                                            this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", r);
                                        }),
                                        (r.prototype.clearShadow = function () {
                                            this.setVariable("shadowColor", "rgba(0,0,0,0)");
                                        }),
                                        (r.prototype.setOpacity = function (t) {
                                            this.ctx.globalAlpha = t;
                                        }),
                                        (r.prototype.setTransform = function (t) {
                                            this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1]);
                                        }),
                                        (r.prototype.setVariable = function (t, e) {
                                            return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this;
                                        }),
                                        (r.prototype.text = function (t, e, n) {
                                            this.ctx.fillText(t, e, n);
                                        }),
                                        (r.prototype.backgroundRepeatShape = function (t, e, n, r, i, o, a, s, c) {
                                            var l = [
                                                ["line", Math.round(i), Math.round(o)],
                                                ["line", Math.round(i + a), Math.round(o)],
                                                ["line", Math.round(i + a), Math.round(s + o)],
                                                ["line", Math.round(i), Math.round(s + o)],
                                            ];
                                            this.clip(
                                                [l],
                                                function () {
                                                    this.renderBackgroundRepeat(t, e, n, r, c[3], c[0]);
                                                },
                                                this
                                            );
                                        }),
                                        (r.prototype.renderBackgroundRepeat = function (t, e, n, r, i, o) {
                                            var a = Math.round(r.left + e.left + i),
                                                s = Math.round(r.top + e.top + o);
                                            this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")), this.ctx.translate(a, s), this.ctx.fill(), this.ctx.translate(-a, -s);
                                        }),
                                        (r.prototype.renderBackgroundGradient = function (t, e) {
                                            if (t instanceof a) {
                                                var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                                                t.colorStops.forEach(function (t) {
                                                    n.addColorStop(t.stop, t.color.toString());
                                                }),
                                                    this.rectangle(e.left, e.top, e.width, e.height, n);
                                            }
                                        }),
                                        (r.prototype.resizeImage = function (t, e) {
                                            var n = t.image;
                                            if (n.width === e.width && n.height === e.height) return n;
                                            var r = document.createElement("canvas");
                                            return (r.width = e.width), (r.height = e.height), r.getContext("2d").drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height), r;
                                        }),
                                        (e.exports = r);
                                },
                                { "../lineargradientcontainer": 12, "../log": 13, "../renderer": 19 },
                            ],
                            21: [
                                function (t, e, n) {
                                    function r(t, e, n, r) {
                                        i.call(this, n, r), (this.ownStacking = t), (this.contexts = []), (this.children = []), (this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e);
                                    }
                                    var i = t("./nodecontainer");
                                    ((r.prototype = Object.create(i.prototype)).getParentStack = function (t) {
                                        var e = this.parent ? this.parent.stack : null;
                                        return e ? (e.ownStacking ? e : e.getParentStack(t)) : t.stack;
                                    }),
                                        (e.exports = r);
                                },
                                { "./nodecontainer": 14 },
                            ],
                            22: [
                                function (t, e, n) {
                                    function r(t) {
                                        (this.rangeBounds = this.testRangeBounds(t)), (this.cors = this.testCORS()), (this.svg = this.testSVG());
                                    }
                                    (r.prototype.testRangeBounds = function (t) {
                                        var e,
                                            n,
                                            r = !1;
                                        return (
                                            t.createRange &&
                                                (e = t.createRange()).getBoundingClientRect &&
                                                (((n = t.createElement("boundtest")).style.height = "123px"),
                                                (n.style.display = "block"),
                                                t.body.appendChild(n),
                                                e.selectNode(n),
                                                123 === e.getBoundingClientRect().height && (r = !0),
                                                t.body.removeChild(n)),
                                            r
                                        );
                                    }),
                                        (r.prototype.testCORS = function () {
                                            return void 0 !== new Image().crossOrigin;
                                        }),
                                        (r.prototype.testSVG = function () {
                                            var t = new Image(),
                                                e = document.createElement("canvas"),
                                                n = e.getContext("2d");
                                            t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                                            try {
                                                n.drawImage(t, 0, 0), e.toDataURL();
                                            } catch (t) {
                                                return !1;
                                            }
                                            return !0;
                                        }),
                                        (e.exports = r);
                                },
                                {},
                            ],
                            23: [
                                function (t, e, n) {
                                    function r(t) {
                                        (this.src = t), (this.image = null);
                                        var e = this;
                                        this.promise = this.hasFabric()
                                            .then(function () {
                                                return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : i(t);
                                            })
                                            .then(function (t) {
                                                return new Promise(function (n) {
                                                    window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n));
                                                });
                                            });
                                    }
                                    var i = t("./xhr"),
                                        o = t("./utils").decode64;
                                    (r.prototype.hasFabric = function () {
                                        return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"));
                                    }),
                                        (r.prototype.inlineFormatting = function (t) {
                                            return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t);
                                        }),
                                        (r.prototype.removeContentType = function (t) {
                                            return t.replace(/^data:image\/svg\+xml(;base64)?,/, "");
                                        }),
                                        (r.prototype.isInline = function (t) {
                                            return /^data:image\/svg\+xml/i.test(t);
                                        }),
                                        (r.prototype.createCanvas = function (t) {
                                            var e = this;
                                            return function (n, r) {
                                                var i = new window.html2canvas.svg.fabric.StaticCanvas("c");
                                                (e.image = i.lowerCanvasEl), i.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, r)).renderAll(), t(i.lowerCanvasEl);
                                            };
                                        }),
                                        (r.prototype.decode64 = function (t) {
                                            return "function" == typeof window.atob ? window.atob(t) : o(t);
                                        }),
                                        (e.exports = r);
                                },
                                { "./utils": 26, "./xhr": 28 },
                            ],
                            24: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        (this.src = t), (this.image = null);
                                        var n = this;
                                        this.promise = e
                                            ? new Promise(function (e, r) {
                                                  (n.image = new Image()), (n.image.onload = e), (n.image.onerror = r), (n.image.src = "data:image/svg+xml," + new XMLSerializer().serializeToString(t)), !0 === n.image.complete && e(n.image);
                                              })
                                            : this.hasFabric().then(function () {
                                                  return new Promise(function (e) {
                                                      window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e));
                                                  });
                                              });
                                    }
                                    var i = t("./svgcontainer");
                                    (r.prototype = Object.create(i.prototype)), (e.exports = r);
                                },
                                { "./svgcontainer": 23 },
                            ],
                            25: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        o.call(this, t, e);
                                    }
                                    function i(t, e, n) {
                                        if (t.length > 0) return e + n.toUpperCase();
                                    }
                                    var o = t("./nodecontainer");
                                    ((r.prototype = Object.create(o.prototype)).applyTextTransform = function () {
                                        this.node.data = this.transform(this.parent.css("textTransform"));
                                    }),
                                        (r.prototype.transform = function (t) {
                                            var e = this.node.data;
                                            switch (t) {
                                                case "lowercase":
                                                    return e.toLowerCase();
                                                case "capitalize":
                                                    return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, i);
                                                case "uppercase":
                                                    return e.toUpperCase();
                                                default:
                                                    return e;
                                            }
                                        }),
                                        (e.exports = r);
                                },
                                { "./nodecontainer": 14 },
                            ],
                            26: [
                                function (t, e, n) {
                                    (n.smallImage = function () {
                                        return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                                    }),
                                        (n.bind = function (t, e) {
                                            return function () {
                                                return t.apply(e, arguments);
                                            };
                                        }),
                                        (n.decode64 = function (t) {
                                            var e,
                                                n,
                                                r,
                                                i,
                                                o,
                                                a,
                                                s,
                                                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                                l = t.length,
                                                h = "";
                                            for (e = 0; e < l; e += 4)
                                                (o = (c.indexOf(t[e]) << 2) | ((n = c.indexOf(t[e + 1])) >> 4)),
                                                    (a = ((15 & n) << 4) | ((r = c.indexOf(t[e + 2])) >> 2)),
                                                    (s = ((3 & r) << 6) | (i = c.indexOf(t[e + 3]))),
                                                    (h += 64 === r ? String.fromCharCode(o) : 64 === i || -1 === i ? String.fromCharCode(o, a) : String.fromCharCode(o, a, s));
                                            return h;
                                        }),
                                        (n.getBounds = function (t) {
                                            if (t.getBoundingClientRect) {
                                                var e = t.getBoundingClientRect(),
                                                    n = null == t.offsetWidth ? e.width : t.offsetWidth;
                                                return { top: e.top, bottom: e.bottom || e.top + e.height, right: e.left + n, left: e.left, width: n, height: null == t.offsetHeight ? e.height : t.offsetHeight };
                                            }
                                            return {};
                                        }),
                                        (n.offsetBounds = function (t) {
                                            var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : { top: 0, left: 0 };
                                            return {
                                                top: t.offsetTop + e.top,
                                                bottom: t.offsetTop + t.offsetHeight + e.top,
                                                right: t.offsetLeft + e.left + t.offsetWidth,
                                                left: t.offsetLeft + e.left,
                                                width: t.offsetWidth,
                                                height: t.offsetHeight,
                                            };
                                        }),
                                        (n.parseBackgrounds = function (t) {
                                            var e,
                                                n,
                                                r,
                                                i,
                                                o,
                                                a,
                                                s,
                                                c = [],
                                                l = 0,
                                                h = 0,
                                                u = function () {
                                                    e &&
                                                        ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)),
                                                        n && s.push(n),
                                                        "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && ((r = e.substr(0, i)), (e = e.substr(i))),
                                                        c.push({ prefix: r, method: e.toLowerCase(), value: o, args: s, image: null })),
                                                        (s = []),
                                                        (e = r = n = o = "");
                                                };
                                            return (
                                                (s = []),
                                                (e = r = n = o = ""),
                                                t.split("").forEach(function (t) {
                                                    if (!(0 === l && " \r\n\t".indexOf(t) > -1)) {
                                                        switch (t) {
                                                            case '"':
                                                                a ? a === t && (a = null) : (a = t);
                                                                break;
                                                            case "(":
                                                                if (a) break;
                                                                if (0 === l) return (l = 1), void (o += t);
                                                                h++;
                                                                break;
                                                            case ")":
                                                                if (a) break;
                                                                if (1 === l) {
                                                                    if (0 === h) return (l = 0), (o += t), void u();
                                                                    h--;
                                                                }
                                                                break;
                                                            case ",":
                                                                if (a) break;
                                                                if (0 === l) return void u();
                                                                if (1 === l && 0 === h && !e.match(/^url$/i)) return s.push(n), (n = ""), void (o += t);
                                                        }
                                                        (o += t), 0 === l ? (e += t) : (n += t);
                                                    }
                                                }),
                                                u(),
                                                c
                                            );
                                        });
                                },
                                {},
                            ],
                            27: [
                                function (t, e, n) {
                                    function r(t) {
                                        i.apply(this, arguments), (this.type = "linear" === t.args[0] ? i.TYPES.LINEAR : i.TYPES.RADIAL);
                                    }
                                    var i = t("./gradientcontainer");
                                    (r.prototype = Object.create(i.prototype)), (e.exports = r);
                                },
                                { "./gradientcontainer": 9 },
                            ],
                            28: [
                                function (t, e, n) {
                                    e.exports = function (t) {
                                        return new Promise(function (e, n) {
                                            var r = new XMLHttpRequest();
                                            r.open("GET", t),
                                                (r.onload = function () {
                                                    200 === r.status ? e(r.responseText) : n(new Error(r.statusText));
                                                }),
                                                (r.onerror = function () {
                                                    n(new Error("Network Error"));
                                                }),
                                                r.send();
                                        });
                                    };
                                },
                                {},
                            ],
                        },
                        {},
                        [4]
                    )(4)),
                        (function (t) {
                            var e;
                            (e = (function () {
                                function e(t) {
                                    var e, n, r, i, o, a, s, c, l, h, u, d, f, p, g;
                                    for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, a = null; ; ) {
                                        switch (
                                            ((e = this.readUInt32()),
                                            (h = function () {
                                                var t, e;
                                                for (e = [], s = t = 0; t < 4; s = ++t) e.push(String.fromCharCode(this.data[this.pos++]));
                                                return e;
                                            }
                                                .call(this)
                                                .join("")))
                                        ) {
                                            case "IHDR":
                                                (this.width = this.readUInt32()),
                                                    (this.height = this.readUInt32()),
                                                    (this.bits = this.data[this.pos++]),
                                                    (this.colorType = this.data[this.pos++]),
                                                    (this.compressionMethod = this.data[this.pos++]),
                                                    (this.filterMethod = this.data[this.pos++]),
                                                    (this.interlaceMethod = this.data[this.pos++]);
                                                break;
                                            case "acTL":
                                                this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
                                                break;
                                            case "PLTE":
                                                this.palette = this.read(e);
                                                break;
                                            case "fcTL":
                                                a && this.animation.frames.push(a),
                                                    (this.pos += 4),
                                                    (a = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }),
                                                    (o = this.readUInt16()),
                                                    (i = this.readUInt16() || 100),
                                                    (a.delay = (1e3 * o) / i),
                                                    (a.disposeOp = this.data[this.pos++]),
                                                    (a.blendOp = this.data[this.pos++]),
                                                    (a.data = []);
                                                break;
                                            case "IDAT":
                                            case "fdAT":
                                                for ("fdAT" === h && ((this.pos += 4), (e -= 4)), t = (null != a ? a.data : void 0) || this.imgData, s = f = 0; 0 <= e ? f < e : f > e; s = 0 <= e ? ++f : --f) t.push(this.data[this.pos++]);
                                                break;
                                            case "tRNS":
                                                switch (((this.transparency = {}), this.colorType)) {
                                                    case 3:
                                                        if (((r = this.palette.length / 3), (this.transparency.indexed = this.read(e)), this.transparency.indexed.length > r)) throw new Error("More transparent colors than palette size");
                                                        if ((u = r - this.transparency.indexed.length) > 0) for (s = p = 0; 0 <= u ? p < u : p > u; s = 0 <= u ? ++p : --p) this.transparency.indexed.push(255);
                                                        break;
                                                    case 0:
                                                        this.transparency.grayscale = this.read(e)[0];
                                                        break;
                                                    case 2:
                                                        this.transparency.rgb = this.read(e);
                                                }
                                                break;
                                            case "tEXt":
                                                (c = (d = this.read(e)).indexOf(0)), (l = String.fromCharCode.apply(String, d.slice(0, c))), (this.text[l] = String.fromCharCode.apply(String, d.slice(c + 1)));
                                                break;
                                            case "IEND":
                                                return (
                                                    a && this.animation.frames.push(a),
                                                    (this.colors = function () {
                                                        switch (this.colorType) {
                                                            case 0:
                                                            case 3:
                                                            case 4:
                                                                return 1;
                                                            case 2:
                                                            case 6:
                                                                return 3;
                                                        }
                                                    }.call(this)),
                                                    (this.hasAlphaChannel = 4 === (g = this.colorType) || 6 === g),
                                                    (n = this.colors + (this.hasAlphaChannel ? 1 : 0)),
                                                    (this.pixelBitlength = this.bits * n),
                                                    (this.colorSpace = function () {
                                                        switch (this.colors) {
                                                            case 1:
                                                                return "DeviceGray";
                                                            case 3:
                                                                return "DeviceRGB";
                                                        }
                                                    }.call(this)),
                                                    void (this.imgData = new Uint8Array(this.imgData))
                                                );
                                            default:
                                                this.pos += e;
                                        }
                                        if (((this.pos += 4), this.pos > this.data.length)) throw new Error("Incomplete or corrupt PNG file");
                                    }
                                }
                                var n, r, i;
                                (e.load = function (t, n, r) {
                                    var i;
                                    return (
                                        "function" == typeof n && (r = n),
                                        (i = new XMLHttpRequest()).open("GET", t, !0),
                                        (i.responseType = "arraybuffer"),
                                        (i.onload = function () {
                                            var t, o;
                                            return (
                                                (t = new Uint8Array(i.response || i.mozResponseArrayBuffer)), (o = new e(t)), "function" == typeof (null != n ? n.getContext : void 0) && o.render(n), "function" == typeof r ? r(o) : void 0
                                            );
                                        }),
                                        i.send(null)
                                    );
                                }),
                                    (e.prototype.read = function (t) {
                                        var e, n;
                                        for (n = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) n.push(this.data[this.pos++]);
                                        return n;
                                    }),
                                    (e.prototype.readUInt32 = function () {
                                        var t, e, n, r;
                                        return (t = this.data[this.pos++] << 24), (e = this.data[this.pos++] << 16), (n = this.data[this.pos++] << 8), (r = this.data[this.pos++]), t | e | n | r;
                                    }),
                                    (e.prototype.readUInt16 = function () {
                                        var t, e;
                                        return (t = this.data[this.pos++] << 8), (e = this.data[this.pos++]), t | e;
                                    }),
                                    (e.prototype.decodePixels = function (t) {
                                        var e, n, r, i, o, a, s, c, l, u, d, f, p, g, m, w, y, v, b, x, k, _, C;
                                        if ((null == t && (t = this.imgData), 0 === t.length)) return new Uint8Array(0);
                                        for (t = (t = new h(t)).getBytes(), w = (f = this.pixelBitlength / 8) * this.width, p = new Uint8Array(w * this.height), a = t.length, m = 0, g = 0, n = 0; g < a; ) {
                                            switch (t[g++]) {
                                                case 0:
                                                    for (i = b = 0; b < w; i = b += 1) p[n++] = t[g++];
                                                    break;
                                                case 1:
                                                    for (i = x = 0; x < w; i = x += 1) (e = t[g++]), (o = i < f ? 0 : p[n - f]), (p[n++] = (e + o) % 256);
                                                    break;
                                                case 2:
                                                    for (i = k = 0; k < w; i = k += 1) (e = t[g++]), (r = (i - (i % f)) / f), (y = m && p[(m - 1) * w + r * f + (i % f)]), (p[n++] = (y + e) % 256);
                                                    break;
                                                case 3:
                                                    for (i = _ = 0; _ < w; i = _ += 1)
                                                        (e = t[g++]), (r = (i - (i % f)) / f), (o = i < f ? 0 : p[n - f]), (y = m && p[(m - 1) * w + r * f + (i % f)]), (p[n++] = (e + Math.floor((o + y) / 2)) % 256);
                                                    break;
                                                case 4:
                                                    for (i = C = 0; C < w; i = C += 1)
                                                        (e = t[g++]),
                                                            (r = (i - (i % f)) / f),
                                                            (o = i < f ? 0 : p[n - f]),
                                                            0 === m ? (y = v = 0) : ((y = p[(m - 1) * w + r * f + (i % f)]), (v = r && p[(m - 1) * w + (r - 1) * f + (i % f)])),
                                                            (s = o + y - v),
                                                            (c = Math.abs(s - o)),
                                                            (u = Math.abs(s - y)),
                                                            (d = Math.abs(s - v)),
                                                            (l = c <= u && c <= d ? o : u <= d ? y : v),
                                                            (p[n++] = (e + l) % 256);
                                                    break;
                                                default:
                                                    throw new Error("Invalid filter algorithm: " + t[g - 1]);
                                            }
                                            m++;
                                        }
                                        return p;
                                    }),
                                    (e.prototype.decodePalette = function () {
                                        var t, e, n, r, i, o, a, s, c;
                                        for (n = this.palette, o = this.transparency.indexed || [], i = new Uint8Array((o.length || 0) + n.length), r = 0, t = 0, e = a = 0, s = n.length; a < s; e = a += 3)
                                            (i[r++] = n[e]), (i[r++] = n[e + 1]), (i[r++] = n[e + 2]), (i[r++] = null != (c = o[t++]) ? c : 255);
                                        return i;
                                    }),
                                    (e.prototype.copyToImageData = function (t, e) {
                                        var n, r, i, o, a, s, c, l, h, u, d;
                                        if (
                                            ((r = this.colors),
                                            (h = null),
                                            (n = this.hasAlphaChannel),
                                            this.palette.length && ((h = null != (d = this._decodedPalette) ? d : (this._decodedPalette = this.decodePalette())), (r = 4), (n = !0)),
                                            (i = t.data || t),
                                            (l = i.length),
                                            (a = h || e),
                                            (o = s = 0),
                                            1 === r)
                                        )
                                            for (; o < l; ) (c = h ? 4 * e[o / 4] : s), (u = a[c++]), (i[o++] = u), (i[o++] = u), (i[o++] = u), (i[o++] = n ? a[c++] : 255), (s = c);
                                        else for (; o < l; ) (c = h ? 4 * e[o / 4] : s), (i[o++] = a[c++]), (i[o++] = a[c++]), (i[o++] = a[c++]), (i[o++] = n ? a[c++] : 255), (s = c);
                                    }),
                                    (e.prototype.decode = function () {
                                        var t;
                                        return (t = new Uint8Array(this.width * this.height * 4)), this.copyToImageData(t, this.decodePixels()), t;
                                    });
                                try {
                                    (r = t.document.createElement("canvas")), (i = r.getContext("2d"));
                                } catch (t) {
                                    return -1;
                                }
                                return (
                                    (n = function (t) {
                                        var e;
                                        return (i.width = t.width), (i.height = t.height), i.clearRect(0, 0, t.width, t.height), i.putImageData(t, 0, 0), (e = new Image()), (e.src = r.toDataURL()), e;
                                    }),
                                    (e.prototype.decodeFrames = function (t) {
                                        var e, r, i, o, a, s, c, l;
                                        if (this.animation) {
                                            for (l = [], r = a = 0, s = (c = this.animation.frames).length; a < s; r = ++a)
                                                (e = c[r]), (i = t.createImageData(e.width, e.height)), (o = this.decodePixels(new Uint8Array(e.data))), this.copyToImageData(i, o), (e.imageData = i), l.push((e.image = n(i)));
                                            return l;
                                        }
                                    }),
                                    (e.prototype.renderFrame = function (t, e) {
                                        var n, r, i;
                                        return (
                                            (r = this.animation.frames),
                                            (n = r[e]),
                                            (i = r[e - 1]),
                                            0 === e && t.clearRect(0, 0, this.width, this.height),
                                            1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset),
                                            0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
                                            t.drawImage(n.image, n.xOffset, n.yOffset)
                                        );
                                    }),
                                    (e.prototype.animate = function (t) {
                                        var e,
                                            n,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s = this;
                                        return (
                                            (n = 0),
                                            (a = this.animation),
                                            (i = a.numFrames),
                                            (r = a.frames),
                                            (o = a.numPlays),
                                            (e = function () {
                                                var a, c;
                                                if (((a = n++ % i), (c = r[a]), s.renderFrame(t, a), i > 1 && n / i < o)) return (s.animation._timeout = setTimeout(e, c.delay));
                                            })()
                                        );
                                    }),
                                    (e.prototype.stopAnimation = function () {
                                        var t;
                                        return clearTimeout(null != (t = this.animation) ? t._timeout : void 0);
                                    }),
                                    (e.prototype.render = function (t) {
                                        var e, n;
                                        return (
                                            t._png && t._png.stopAnimation(),
                                            (t._png = this),
                                            (t.width = this.width),
                                            (t.height = this.height),
                                            (e = t.getContext("2d")),
                                            this.animation ? (this.decodeFrames(e), this.animate(e)) : ((n = e.createImageData(this.width, this.height)), this.copyToImageData(n, this.decodePixels()), e.putImageData(n, 0, 0))
                                        );
                                    }),
                                    e
                                );
                            })()),
                                (t.PNG = e);
                        })(("undefined" != typeof window && window) || void 0);
                    var l = (function () {
                            function t() {
                                (this.pos = 0), (this.bufferLength = 0), (this.eof = !1), (this.buffer = null);
                            }
                            return (
                                (t.prototype = {
                                    ensureBuffer: function (t) {
                                        var e = this.buffer,
                                            n = e ? e.byteLength : 0;
                                        if (t < n) return e;
                                        for (var r = 512; r < t; ) r <<= 1;
                                        for (var i = new Uint8Array(r), o = 0; o < n; ++o) i[o] = e[o];
                                        return (this.buffer = i);
                                    },
                                    getByte: function () {
                                        for (var t = this.pos; this.bufferLength <= t; ) {
                                            if (this.eof) return null;
                                            this.readBlock();
                                        }
                                        return this.buffer[this.pos++];
                                    },
                                    getBytes: function (t) {
                                        var e = this.pos;
                                        if (t) {
                                            for (this.ensureBuffer(e + t), r = e + t; !this.eof && this.bufferLength < r; ) this.readBlock();
                                            var n = this.bufferLength;
                                            r > n && (r = n);
                                        } else {
                                            for (; !this.eof; ) this.readBlock();
                                            var r = this.bufferLength;
                                        }
                                        return (this.pos = r), this.buffer.subarray(e, r);
                                    },
                                    lookChar: function () {
                                        for (var t = this.pos; this.bufferLength <= t; ) {
                                            if (this.eof) return null;
                                            this.readBlock();
                                        }
                                        return String.fromCharCode(this.buffer[this.pos]);
                                    },
                                    getChar: function () {
                                        for (var t = this.pos; this.bufferLength <= t; ) {
                                            if (this.eof) return null;
                                            this.readBlock();
                                        }
                                        return String.fromCharCode(this.buffer[this.pos++]);
                                    },
                                    makeSubStream: function (t, e, n) {
                                        for (var r = t + e; this.bufferLength <= r && !this.eof; ) this.readBlock();
                                        return new Stream(this.buffer, t, e, n);
                                    },
                                    skip: function (t) {
                                        t || (t = 1), (this.pos += t);
                                    },
                                    reset: function () {
                                        this.pos = 0;
                                    },
                                }),
                                t
                            );
                        })(),
                        h = (function () {
                            function t(t) {
                                throw new Error(t);
                            }
                            function e(e) {
                                var n = 0,
                                    r = e[n++],
                                    i = e[n++];
                                (-1 != r && -1 != i) || t("Invalid header in flate stream"),
                                    8 != (15 & r) && t("Unknown compression method in flate stream"),
                                    ((r << 8) + i) % 31 != 0 && t("Bad FCHECK in flate stream"),
                                    32 & i && t("FDICT bit set in flate stream"),
                                    (this.bytes = e),
                                    (this.bytesPos = n),
                                    (this.codeSize = 0),
                                    (this.codeBuf = 0),
                                    l.call(this);
                            }
                            if ("undefined" != typeof Uint32Array) {
                                var n = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                                    r = new Uint32Array([
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        65547,
                                        65549,
                                        65551,
                                        65553,
                                        131091,
                                        131095,
                                        131099,
                                        131103,
                                        196643,
                                        196651,
                                        196659,
                                        196667,
                                        262211,
                                        262227,
                                        262243,
                                        262259,
                                        327811,
                                        327843,
                                        327875,
                                        327907,
                                        258,
                                        258,
                                        258,
                                    ]),
                                    i = new Uint32Array([
                                        1,
                                        2,
                                        3,
                                        4,
                                        65541,
                                        65543,
                                        131081,
                                        131085,
                                        196625,
                                        196633,
                                        262177,
                                        262193,
                                        327745,
                                        327777,
                                        393345,
                                        393409,
                                        459009,
                                        459137,
                                        524801,
                                        525057,
                                        590849,
                                        591361,
                                        657409,
                                        658433,
                                        724993,
                                        727041,
                                        794625,
                                        798721,
                                        868353,
                                        876545,
                                    ]),
                                    o = [
                                        new Uint32Array([
                                            459008,
                                            524368,
                                            524304,
                                            524568,
                                            459024,
                                            524400,
                                            524336,
                                            590016,
                                            459016,
                                            524384,
                                            524320,
                                            589984,
                                            524288,
                                            524416,
                                            524352,
                                            590048,
                                            459012,
                                            524376,
                                            524312,
                                            589968,
                                            459028,
                                            524408,
                                            524344,
                                            590032,
                                            459020,
                                            524392,
                                            524328,
                                            59e4,
                                            524296,
                                            524424,
                                            524360,
                                            590064,
                                            459010,
                                            524372,
                                            524308,
                                            524572,
                                            459026,
                                            524404,
                                            524340,
                                            590024,
                                            459018,
                                            524388,
                                            524324,
                                            589992,
                                            524292,
                                            524420,
                                            524356,
                                            590056,
                                            459014,
                                            524380,
                                            524316,
                                            589976,
                                            459030,
                                            524412,
                                            524348,
                                            590040,
                                            459022,
                                            524396,
                                            524332,
                                            590008,
                                            524300,
                                            524428,
                                            524364,
                                            590072,
                                            459009,
                                            524370,
                                            524306,
                                            524570,
                                            459025,
                                            524402,
                                            524338,
                                            590020,
                                            459017,
                                            524386,
                                            524322,
                                            589988,
                                            524290,
                                            524418,
                                            524354,
                                            590052,
                                            459013,
                                            524378,
                                            524314,
                                            589972,
                                            459029,
                                            524410,
                                            524346,
                                            590036,
                                            459021,
                                            524394,
                                            524330,
                                            590004,
                                            524298,
                                            524426,
                                            524362,
                                            590068,
                                            459011,
                                            524374,
                                            524310,
                                            524574,
                                            459027,
                                            524406,
                                            524342,
                                            590028,
                                            459019,
                                            524390,
                                            524326,
                                            589996,
                                            524294,
                                            524422,
                                            524358,
                                            590060,
                                            459015,
                                            524382,
                                            524318,
                                            589980,
                                            459031,
                                            524414,
                                            524350,
                                            590044,
                                            459023,
                                            524398,
                                            524334,
                                            590012,
                                            524302,
                                            524430,
                                            524366,
                                            590076,
                                            459008,
                                            524369,
                                            524305,
                                            524569,
                                            459024,
                                            524401,
                                            524337,
                                            590018,
                                            459016,
                                            524385,
                                            524321,
                                            589986,
                                            524289,
                                            524417,
                                            524353,
                                            590050,
                                            459012,
                                            524377,
                                            524313,
                                            589970,
                                            459028,
                                            524409,
                                            524345,
                                            590034,
                                            459020,
                                            524393,
                                            524329,
                                            590002,
                                            524297,
                                            524425,
                                            524361,
                                            590066,
                                            459010,
                                            524373,
                                            524309,
                                            524573,
                                            459026,
                                            524405,
                                            524341,
                                            590026,
                                            459018,
                                            524389,
                                            524325,
                                            589994,
                                            524293,
                                            524421,
                                            524357,
                                            590058,
                                            459014,
                                            524381,
                                            524317,
                                            589978,
                                            459030,
                                            524413,
                                            524349,
                                            590042,
                                            459022,
                                            524397,
                                            524333,
                                            590010,
                                            524301,
                                            524429,
                                            524365,
                                            590074,
                                            459009,
                                            524371,
                                            524307,
                                            524571,
                                            459025,
                                            524403,
                                            524339,
                                            590022,
                                            459017,
                                            524387,
                                            524323,
                                            589990,
                                            524291,
                                            524419,
                                            524355,
                                            590054,
                                            459013,
                                            524379,
                                            524315,
                                            589974,
                                            459029,
                                            524411,
                                            524347,
                                            590038,
                                            459021,
                                            524395,
                                            524331,
                                            590006,
                                            524299,
                                            524427,
                                            524363,
                                            590070,
                                            459011,
                                            524375,
                                            524311,
                                            524575,
                                            459027,
                                            524407,
                                            524343,
                                            590030,
                                            459019,
                                            524391,
                                            524327,
                                            589998,
                                            524295,
                                            524423,
                                            524359,
                                            590062,
                                            459015,
                                            524383,
                                            524319,
                                            589982,
                                            459031,
                                            524415,
                                            524351,
                                            590046,
                                            459023,
                                            524399,
                                            524335,
                                            590014,
                                            524303,
                                            524431,
                                            524367,
                                            590078,
                                            459008,
                                            524368,
                                            524304,
                                            524568,
                                            459024,
                                            524400,
                                            524336,
                                            590017,
                                            459016,
                                            524384,
                                            524320,
                                            589985,
                                            524288,
                                            524416,
                                            524352,
                                            590049,
                                            459012,
                                            524376,
                                            524312,
                                            589969,
                                            459028,
                                            524408,
                                            524344,
                                            590033,
                                            459020,
                                            524392,
                                            524328,
                                            590001,
                                            524296,
                                            524424,
                                            524360,
                                            590065,
                                            459010,
                                            524372,
                                            524308,
                                            524572,
                                            459026,
                                            524404,
                                            524340,
                                            590025,
                                            459018,
                                            524388,
                                            524324,
                                            589993,
                                            524292,
                                            524420,
                                            524356,
                                            590057,
                                            459014,
                                            524380,
                                            524316,
                                            589977,
                                            459030,
                                            524412,
                                            524348,
                                            590041,
                                            459022,
                                            524396,
                                            524332,
                                            590009,
                                            524300,
                                            524428,
                                            524364,
                                            590073,
                                            459009,
                                            524370,
                                            524306,
                                            524570,
                                            459025,
                                            524402,
                                            524338,
                                            590021,
                                            459017,
                                            524386,
                                            524322,
                                            589989,
                                            524290,
                                            524418,
                                            524354,
                                            590053,
                                            459013,
                                            524378,
                                            524314,
                                            589973,
                                            459029,
                                            524410,
                                            524346,
                                            590037,
                                            459021,
                                            524394,
                                            524330,
                                            590005,
                                            524298,
                                            524426,
                                            524362,
                                            590069,
                                            459011,
                                            524374,
                                            524310,
                                            524574,
                                            459027,
                                            524406,
                                            524342,
                                            590029,
                                            459019,
                                            524390,
                                            524326,
                                            589997,
                                            524294,
                                            524422,
                                            524358,
                                            590061,
                                            459015,
                                            524382,
                                            524318,
                                            589981,
                                            459031,
                                            524414,
                                            524350,
                                            590045,
                                            459023,
                                            524398,
                                            524334,
                                            590013,
                                            524302,
                                            524430,
                                            524366,
                                            590077,
                                            459008,
                                            524369,
                                            524305,
                                            524569,
                                            459024,
                                            524401,
                                            524337,
                                            590019,
                                            459016,
                                            524385,
                                            524321,
                                            589987,
                                            524289,
                                            524417,
                                            524353,
                                            590051,
                                            459012,
                                            524377,
                                            524313,
                                            589971,
                                            459028,
                                            524409,
                                            524345,
                                            590035,
                                            459020,
                                            524393,
                                            524329,
                                            590003,
                                            524297,
                                            524425,
                                            524361,
                                            590067,
                                            459010,
                                            524373,
                                            524309,
                                            524573,
                                            459026,
                                            524405,
                                            524341,
                                            590027,
                                            459018,
                                            524389,
                                            524325,
                                            589995,
                                            524293,
                                            524421,
                                            524357,
                                            590059,
                                            459014,
                                            524381,
                                            524317,
                                            589979,
                                            459030,
                                            524413,
                                            524349,
                                            590043,
                                            459022,
                                            524397,
                                            524333,
                                            590011,
                                            524301,
                                            524429,
                                            524365,
                                            590075,
                                            459009,
                                            524371,
                                            524307,
                                            524571,
                                            459025,
                                            524403,
                                            524339,
                                            590023,
                                            459017,
                                            524387,
                                            524323,
                                            589991,
                                            524291,
                                            524419,
                                            524355,
                                            590055,
                                            459013,
                                            524379,
                                            524315,
                                            589975,
                                            459029,
                                            524411,
                                            524347,
                                            590039,
                                            459021,
                                            524395,
                                            524331,
                                            590007,
                                            524299,
                                            524427,
                                            524363,
                                            590071,
                                            459011,
                                            524375,
                                            524311,
                                            524575,
                                            459027,
                                            524407,
                                            524343,
                                            590031,
                                            459019,
                                            524391,
                                            524327,
                                            589999,
                                            524295,
                                            524423,
                                            524359,
                                            590063,
                                            459015,
                                            524383,
                                            524319,
                                            589983,
                                            459031,
                                            524415,
                                            524351,
                                            590047,
                                            459023,
                                            524399,
                                            524335,
                                            590015,
                                            524303,
                                            524431,
                                            524367,
                                            590079,
                                        ]),
                                        9,
                                    ],
                                    a = [
                                        new Uint32Array([
                                            327680,
                                            327696,
                                            327688,
                                            327704,
                                            327684,
                                            327700,
                                            327692,
                                            327708,
                                            327682,
                                            327698,
                                            327690,
                                            327706,
                                            327686,
                                            327702,
                                            327694,
                                            0,
                                            327681,
                                            327697,
                                            327689,
                                            327705,
                                            327685,
                                            327701,
                                            327693,
                                            327709,
                                            327683,
                                            327699,
                                            327691,
                                            327707,
                                            327687,
                                            327703,
                                            327695,
                                            0,
                                        ]),
                                        5,
                                    ];
                                return (
                                    (e.prototype = Object.create(l.prototype)),
                                    (e.prototype.getBits = function (e) {
                                        for (var n, r = this.codeSize, i = this.codeBuf, o = this.bytes, a = this.bytesPos; r < e; ) void 0 === (n = o[a++]) && t("Bad encoding in flate stream"), (i |= n << r), (r += 8);
                                        return (n = i & ((1 << e) - 1)), (this.codeBuf = i >> e), (this.codeSize = r -= e), (this.bytesPos = a), n;
                                    }),
                                    (e.prototype.getCode = function (e) {
                                        for (var n = e[0], r = e[1], i = this.codeSize, o = this.codeBuf, a = this.bytes, s = this.bytesPos; i < r; ) {
                                            var c;
                                            void 0 === (c = a[s++]) && t("Bad encoding in flate stream"), (o |= c << i), (i += 8);
                                        }
                                        var l = n[o & ((1 << r) - 1)],
                                            h = l >> 16,
                                            u = 65535 & l;
                                        return (0 == i || i < h || 0 == h) && t("Bad encoding in flate stream"), (this.codeBuf = o >> h), (this.codeSize = i - h), (this.bytesPos = s), u;
                                    }),
                                    (e.prototype.generateHuffmanTable = function (t) {
                                        for (var e = t.length, n = 0, r = 0; r < e; ++r) t[r] > n && (n = t[r]);
                                        for (var i = 1 << n, o = new Uint32Array(i), a = 1, s = 0, c = 2; a <= n; ++a, s <<= 1, c <<= 1)
                                            for (var l = 0; l < e; ++l)
                                                if (t[l] == a) {
                                                    for (var h = 0, u = s, r = 0; r < a; ++r) (h = (h << 1) | (1 & u)), (u >>= 1);
                                                    for (r = h; r < i; r += c) o[r] = (a << 16) | l;
                                                    ++s;
                                                }
                                        return [o, n];
                                    }),
                                    (e.prototype.readBlock = function () {
                                        function e(t, e, n, r, i) {
                                            for (var o = t.getBits(n) + r; o-- > 0; ) e[p++] = i;
                                        }
                                        var s = this.getBits(3);
                                        if ((1 & s && (this.eof = !0), 0 != (s >>= 1))) {
                                            var c, l;
                                            if (1 == s) (c = o), (l = a);
                                            else if (2 == s) {
                                                for (var h = this.getBits(5) + 257, u = this.getBits(5) + 1, d = this.getBits(4) + 4, f = Array(n.length), p = 0; p < d; ) f[n[p++]] = this.getBits(3);
                                                for (var g = this.generateHuffmanTable(f), m = 0, p = 0, w = h + u, y = new Array(w); p < w; ) {
                                                    var v = this.getCode(g);
                                                    16 == v ? e(this, y, 2, 3, m) : 17 == v ? e(this, y, 3, 3, (m = 0)) : 18 == v ? e(this, y, 7, 11, (m = 0)) : (y[p++] = m = v);
                                                }
                                                (c = this.generateHuffmanTable(y.slice(0, h))), (l = this.generateHuffmanTable(y.slice(h, w)));
                                            } else t("Unknown block type in flate stream");
                                            for (var b = (q = this.buffer) ? q.length : 0, x = this.bufferLength; ; ) {
                                                var k = this.getCode(c);
                                                if (k < 256) x + 1 >= b && (b = (q = this.ensureBuffer(x + 1)).length), (q[x++] = k);
                                                else {
                                                    if (256 == k) return void (this.bufferLength = x);
                                                    var _ = (k = r[(k -= 257)]) >> 16;
                                                    _ > 0 && (_ = this.getBits(_)), (m = (65535 & k) + _), (k = this.getCode(l)), (_ = (k = i[k]) >> 16) > 0 && (_ = this.getBits(_));
                                                    var C = (65535 & k) + _;
                                                    x + m >= b && (b = (q = this.ensureBuffer(x + m)).length);
                                                    for (var T = 0; T < m; ++T, ++x) q[x] = q[x - C];
                                                }
                                            }
                                        } else {
                                            var S,
                                                E = this.bytes,
                                                A = this.bytesPos;
                                            void 0 === (S = E[A++]) && t("Bad block header in flate stream");
                                            var I = S;
                                            void 0 === (S = E[A++]) && t("Bad block header in flate stream"), (I |= S << 8), void 0 === (S = E[A++]) && t("Bad block header in flate stream");
                                            var P = S;
                                            void 0 === (S = E[A++]) && t("Bad block header in flate stream"), (P |= S << 8) != (65535 & ~I) && t("Bad uncompressed block length in flate stream"), (this.codeBuf = 0), (this.codeSize = 0);
                                            var O = this.bufferLength,
                                                q = this.ensureBuffer(O + I),
                                                R = O + I;
                                            this.bufferLength = R;
                                            for (var B = O; B < R; ++B) {
                                                if (void 0 === (S = E[A++])) {
                                                    this.eof = !0;
                                                    break;
                                                }
                                                q[B] = S;
                                            }
                                            this.bytesPos = A;
                                        }
                                    }),
                                    e
                                );
                            }
                        })();
                    return (
                        (function (t) {
                            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                            void 0 === t.btoa &&
                                (t.btoa = function (t) {
                                    var n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s = 0,
                                        c = 0,
                                        l = "",
                                        h = [];
                                    if (!t) return t;
                                    do {
                                        (n = ((a = (t.charCodeAt(s++) << 16) | (t.charCodeAt(s++) << 8) | t.charCodeAt(s++)) >> 18) & 63),
                                            (r = (a >> 12) & 63),
                                            (i = (a >> 6) & 63),
                                            (o = 63 & a),
                                            (h[c++] = e.charAt(n) + e.charAt(r) + e.charAt(i) + e.charAt(o));
                                    } while (s < t.length);
                                    l = h.join("");
                                    var u = t.length % 3;
                                    return (u ? l.slice(0, u - 3) : l) + "===".slice(u || 3);
                                }),
                                void 0 === t.atob &&
                                    (t.atob = function (t) {
                                        var n,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            c = 0,
                                            l = 0,
                                            h = [];
                                        if (!t) return t;
                                        t += "";
                                        do {
                                            (n = ((s = (e.indexOf(t.charAt(c++)) << 18) | (e.indexOf(t.charAt(c++)) << 12) | ((o = e.indexOf(t.charAt(c++))) << 6) | (a = e.indexOf(t.charAt(c++)))) >> 16) & 255),
                                                (r = (s >> 8) & 255),
                                                (i = 255 & s),
                                                (h[l++] = 64 == o ? String.fromCharCode(n) : 64 == a ? String.fromCharCode(n, r) : String.fromCharCode(n, r, i));
                                        } while (c < t.length);
                                        return h.join("");
                                    }),
                                Array.prototype.map ||
                                    (Array.prototype.map = function (t) {
                                        if (void 0 === this || null === this || "function" != typeof t) throw new TypeError();
                                        for (var e = Object(this), n = e.length >>> 0, r = new Array(n), i = arguments.length > 1 ? arguments[1] : void 0, o = 0; o < n; o++) o in e && (r[o] = t.call(i, e[o], o, e));
                                        return r;
                                    }),
                                Array.isArray ||
                                    (Array.isArray = function (t) {
                                        return "[object Array]" === Object.prototype.toString.call(t);
                                    }),
                                Array.prototype.forEach ||
                                    (Array.prototype.forEach = function (t, e) {
                                        if (void 0 === this || null === this || "function" != typeof t) throw new TypeError();
                                        for (var n = Object(this), r = n.length >>> 0, i = 0; i < r; i++) i in n && t.call(e, n[i], i, n);
                                    }),
                                Object.keys ||
                                    (Object.keys = (function () {
                                        var t = Object.prototype.hasOwnProperty,
                                            e = !{ toString: null }.propertyIsEnumerable("toString"),
                                            n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                                            r = n.length;
                                        return function (i) {
                                            if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError();
                                            var o,
                                                a,
                                                s = [];
                                            for (o in i) t.call(i, o) && s.push(o);
                                            if (e) for (a = 0; a < r; a++) t.call(i, n[a]) && s.push(n[a]);
                                            return s;
                                        };
                                    })()),
                                String.prototype.trim ||
                                    (String.prototype.trim = function () {
                                        return this.replace(/^\s+|\s+$/g, "");
                                    }),
                                String.prototype.trimLeft ||
                                    (String.prototype.trimLeft = function () {
                                        return this.replace(/^\s+/g, "");
                                    }),
                                String.prototype.trimRight ||
                                    (String.prototype.trimRight = function () {
                                        return this.replace(/\s+$/g, "");
                                    });
                        })(("undefined" != typeof self && self) || ("undefined" != typeof window && window) || void 0),
                        i
                    );
                })();
            })),
        i =
            (r.saveAs,
            e(function (e, r) {
                e.exports = (function e(n, r, i) {
                    function o(s, c) {
                        if (!r[s]) {
                            if (!n[s]) {
                                var l = "function" == typeof t && t;
                                if (!c && l) return l(s, !0);
                                if (a) return a(s, !0);
                                var h = new Error("Cannot find module '" + s + "'");
                                throw ((h.code = "MODULE_NOT_FOUND"), h);
                            }
                            var u = (r[s] = { exports: {} });
                            n[s][0].call(
                                u.exports,
                                function (t) {
                                    var e = n[s][1][t];
                                    return o(e || t);
                                },
                                u,
                                u.exports,
                                e,
                                n,
                                r,
                                i
                            );
                        }
                        return r[s].exports;
                    }
                    for (var a = "function" == typeof t && t, s = 0; s < i.length; s++) o(i[s]);
                    return o;
                })(
                    {
                        1: [
                            function (t, e, r) {
                                (function (t) {
                                    !(function (n) {
                                        function i(t) {
                                            throw new RangeError(O[t]);
                                        }
                                        function o(t, e) {
                                            for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
                                            return r;
                                        }
                                        function a(t, e) {
                                            var n = t.split("@"),
                                                r = "";
                                            n.length > 1 && ((r = n[0] + "@"), (t = n[1]));
                                            var i = o((t = t.replace(P, ".")).split("."), e).join(".");
                                            return r + i;
                                        }
                                        function s(t) {
                                            for (var e, n, r = [], i = 0, o = t.length; i < o; )
                                                (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? (56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                                            return r;
                                        }
                                        function c(t) {
                                            return o(t, function (t) {
                                                var e = "";
                                                return t > 65535 && ((e += B((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), (e += B(t));
                                            }).join("");
                                        }
                                        function l(t) {
                                            return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : b;
                                        }
                                        function h(t, e) {
                                            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                                        }
                                        function u(t, e, n) {
                                            var r = 0;
                                            for (t = n ? R(t / C) : t >> 1, t += R(t / e); t > (q * k) >> 1; r += b) t = R(t / q);
                                            return R(r + ((q + 1) * t) / (t + _));
                                        }
                                        function d(t) {
                                            var e,
                                                n,
                                                r,
                                                o,
                                                a,
                                                s,
                                                h,
                                                d,
                                                f,
                                                p,
                                                g = [],
                                                m = t.length,
                                                w = 0,
                                                y = S,
                                                _ = T;
                                            for ((n = t.lastIndexOf(E)) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && i("not-basic"), g.push(t.charCodeAt(r));
                                            for (o = n > 0 ? n + 1 : 0; o < m; ) {
                                                for (
                                                    a = w, s = 1, h = b;
                                                    o >= m && i("invalid-input"), ((d = l(t.charCodeAt(o++))) >= b || d > R((v - w) / s)) && i("overflow"), (w += d * s), (f = h <= _ ? x : h >= _ + k ? k : h - _), !(d < f);
                                                    h += b
                                                )
                                                    s > R(v / (p = b - f)) && i("overflow"), (s *= p);
                                                (e = g.length + 1), (_ = u(w - a, e, 0 == a)), R(w / e) > v - y && i("overflow"), (y += R(w / e)), (w %= e), g.splice(w++, 0, y);
                                            }
                                            return c(g);
                                        }
                                        function f(t) {
                                            var e,
                                                n,
                                                r,
                                                o,
                                                a,
                                                c,
                                                l,
                                                d,
                                                f,
                                                p,
                                                g,
                                                m,
                                                w,
                                                y,
                                                _,
                                                C = [];
                                            for (t = s(t), m = t.length, e = S, n = 0, a = T, c = 0; c < m; ++c) (g = t[c]) < 128 && C.push(B(g));
                                            for (r = o = C.length, o && C.push(E); r < m; ) {
                                                for (l = v, c = 0; c < m; ++c) (g = t[c]) >= e && g < l && (l = g);
                                                for (l - e > R((v - n) / (w = r + 1)) && i("overflow"), n += (l - e) * w, e = l, c = 0; c < m; ++c)
                                                    if (((g = t[c]) < e && ++n > v && i("overflow"), g == e)) {
                                                        for (d = n, f = b; (p = f <= a ? x : f >= a + k ? k : f - a), !(d < p); f += b) (_ = d - p), (y = b - p), C.push(B(h(p + (_ % y), 0))), (d = R(_ / y));
                                                        C.push(B(h(d, 0))), (a = u(n, w, r == o)), (n = 0), ++r;
                                                    }
                                                ++n, ++e;
                                            }
                                            return C.join("");
                                        }
                                        var p = "object" == typeof r && r && !r.nodeType && r,
                                            g = "object" == typeof e && e && !e.nodeType && e,
                                            m = "object" == typeof t && t;
                                        (m.global !== m && m.window !== m && m.self !== m) || (n = m);
                                        var w,
                                            y,
                                            v = 2147483647,
                                            b = 36,
                                            x = 1,
                                            k = 26,
                                            _ = 38,
                                            C = 700,
                                            T = 72,
                                            S = 128,
                                            E = "-",
                                            A = /^xn--/,
                                            I = /[^\x20-\x7E]/,
                                            P = /[\x2E\u3002\uFF0E\uFF61]/g,
                                            O = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                                            q = b - x,
                                            R = Math.floor,
                                            B = String.fromCharCode;
                                        if (
                                            ((w = {
                                                version: "1.4.1",
                                                ucs2: { decode: s, encode: c },
                                                decode: d,
                                                encode: f,
                                                toASCII: function (t) {
                                                    return a(t, function (t) {
                                                        return I.test(t) ? "xn--" + f(t) : t;
                                                    });
                                                },
                                                toUnicode: function (t) {
                                                    return a(t, function (t) {
                                                        return A.test(t) ? d(t.slice(4).toLowerCase()) : t;
                                                    });
                                                },
                                            }),
                                            p && g)
                                        )
                                            if (e.exports == p) g.exports = w;
                                            else for (y in w) w.hasOwnProperty(y) && (p[y] = w[y]);
                                        else n.punycode = w;
                                    })(this);
                                }.call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
                            },
                            {},
                        ],
                        2: [
                            function (t, e, n) {
                                function r(t, e) {
                                    for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i; )
                                        (!0 !== e && 1 === i.nodeType && "SCRIPT" === i.nodeName) || n.appendChild(r(i, e)), (i = i.nextSibling);
                                    return (
                                        1 === t.nodeType &&
                                            ((n._scrollTop = t.scrollTop),
                                            (n._scrollLeft = t.scrollLeft),
                                            "CANVAS" === t.nodeName
                                                ? (function (t, e) {
                                                      try {
                                                          e && ((e.width = t.width), (e.height = t.height), e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0));
                                                      } catch (e) {
                                                          o("Unable to copy canvas content from", t, e);
                                                      }
                                                  })(t, n)
                                                : ("TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName) || (n.value = t.value)),
                                        n
                                    );
                                }
                                function i(t) {
                                    if (1 === t.nodeType) {
                                        (t.scrollTop = t._scrollTop), (t.scrollLeft = t._scrollLeft);
                                        for (var e = t.firstChild; e; ) i(e), (e = e.nextSibling);
                                    }
                                }
                                var o = t("./log");
                                e.exports = function (t, e, n, o, a, s, c) {
                                    var l = r(t.documentElement, a.javascriptEnabled),
                                        h = e.createElement("iframe");
                                    return (
                                        (h.className = "html2canvas-container"),
                                        (h.style.visibility = "hidden"),
                                        (h.style.position = "fixed"),
                                        (h.style.left = "-10000px"),
                                        (h.style.top = "0px"),
                                        (h.style.border = "0"),
                                        (h.width = n),
                                        (h.height = o),
                                        (h.scrolling = "no"),
                                        e.body.appendChild(h),
                                        new Promise(function (e) {
                                            var n = h.contentWindow.document;
                                            (h.contentWindow.onload = h.onload = function () {
                                                var t = setInterval(function () {
                                                    n.body.childNodes.length > 0 &&
                                                        (i(n.documentElement),
                                                        clearInterval(t),
                                                        "view" === a.type &&
                                                            (h.contentWindow.scrollTo(s, c),
                                                            !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                                                                (h.contentWindow.scrollY === c && h.contentWindow.scrollX === s) ||
                                                                ((n.documentElement.style.top = -c + "px"), (n.documentElement.style.left = -s + "px"), (n.documentElement.style.position = "absolute"))),
                                                        e(h));
                                                }, 50);
                                            }),
                                                n.open(),
                                                n.write("<!DOCTYPE html><html></html>"),
                                                (function (t, e, n) {
                                                    !t.defaultView || (e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset) || t.defaultView.scrollTo(e, n);
                                                })(t, s, c),
                                                n.replaceChild(n.adoptNode(l), n.documentElement),
                                                n.close();
                                        })
                                    );
                                };
                            },
                            { "./log": 13 },
                        ],
                        3: [
                            function (t, e, n) {
                                function r(t) {
                                    (this.r = 0), (this.g = 0), (this.b = 0), (this.a = null);
                                    this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t);
                                }
                                (r.prototype.darken = function (t) {
                                    var e = 1 - t;
                                    return new r([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a]);
                                }),
                                    (r.prototype.isTransparent = function () {
                                        return 0 === this.a;
                                    }),
                                    (r.prototype.isBlack = function () {
                                        return 0 === this.r && 0 === this.g && 0 === this.b;
                                    }),
                                    (r.prototype.fromArray = function (t) {
                                        return Array.isArray(t) && ((this.r = Math.min(t[0], 255)), (this.g = Math.min(t[1], 255)), (this.b = Math.min(t[2], 255)), t.length > 3 && (this.a = t[3])), Array.isArray(t);
                                    });
                                var i = /^#([a-f0-9]{3})$/i;
                                r.prototype.hex3 = function (t) {
                                    var e = null;
                                    return null !== (e = t.match(i)) && ((this.r = parseInt(e[1][0] + e[1][0], 16)), (this.g = parseInt(e[1][1] + e[1][1], 16)), (this.b = parseInt(e[1][2] + e[1][2], 16))), null !== e;
                                };
                                var o = /^#([a-f0-9]{6})$/i;
                                r.prototype.hex6 = function (t) {
                                    var e = null;
                                    return null !== (e = t.match(o)) && ((this.r = parseInt(e[1].substring(0, 2), 16)), (this.g = parseInt(e[1].substring(2, 4), 16)), (this.b = parseInt(e[1].substring(4, 6), 16))), null !== e;
                                };
                                var a = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                                r.prototype.rgb = function (t) {
                                    var e = null;
                                    return null !== (e = t.match(a)) && ((this.r = Number(e[1])), (this.g = Number(e[2])), (this.b = Number(e[3]))), null !== e;
                                };
                                var s = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                                (r.prototype.rgba = function (t) {
                                    var e = null;
                                    return null !== (e = t.match(s)) && ((this.r = Number(e[1])), (this.g = Number(e[2])), (this.b = Number(e[3])), (this.a = Number(e[4]))), null !== e;
                                }),
                                    (r.prototype.toString = function () {
                                        return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")";
                                    }),
                                    (r.prototype.namedColor = function (t) {
                                        t = t.toLowerCase();
                                        var e = c[t];
                                        if (e) (this.r = e[0]), (this.g = e[1]), (this.b = e[2]);
                                        else if ("transparent" === t) return (this.r = this.g = this.b = this.a = 0), !0;
                                        return !!e;
                                    }),
                                    (r.prototype.isColor = !0);
                                var c = {
                                    aliceblue: [240, 248, 255],
                                    antiquewhite: [250, 235, 215],
                                    aqua: [0, 255, 255],
                                    aquamarine: [127, 255, 212],
                                    azure: [240, 255, 255],
                                    beige: [245, 245, 220],
                                    bisque: [255, 228, 196],
                                    black: [0, 0, 0],
                                    blanchedalmond: [255, 235, 205],
                                    blue: [0, 0, 255],
                                    blueviolet: [138, 43, 226],
                                    brown: [165, 42, 42],
                                    burlywood: [222, 184, 135],
                                    cadetblue: [95, 158, 160],
                                    chartreuse: [127, 255, 0],
                                    chocolate: [210, 105, 30],
                                    coral: [255, 127, 80],
                                    cornflowerblue: [100, 149, 237],
                                    cornsilk: [255, 248, 220],
                                    crimson: [220, 20, 60],
                                    cyan: [0, 255, 255],
                                    darkblue: [0, 0, 139],
                                    darkcyan: [0, 139, 139],
                                    darkgoldenrod: [184, 134, 11],
                                    darkgray: [169, 169, 169],
                                    darkgreen: [0, 100, 0],
                                    darkgrey: [169, 169, 169],
                                    darkkhaki: [189, 183, 107],
                                    darkmagenta: [139, 0, 139],
                                    darkolivegreen: [85, 107, 47],
                                    darkorange: [255, 140, 0],
                                    darkorchid: [153, 50, 204],
                                    darkred: [139, 0, 0],
                                    darksalmon: [233, 150, 122],
                                    darkseagreen: [143, 188, 143],
                                    darkslateblue: [72, 61, 139],
                                    darkslategray: [47, 79, 79],
                                    darkslategrey: [47, 79, 79],
                                    darkturquoise: [0, 206, 209],
                                    darkviolet: [148, 0, 211],
                                    deeppink: [255, 20, 147],
                                    deepskyblue: [0, 191, 255],
                                    dimgray: [105, 105, 105],
                                    dimgrey: [105, 105, 105],
                                    dodgerblue: [30, 144, 255],
                                    firebrick: [178, 34, 34],
                                    floralwhite: [255, 250, 240],
                                    forestgreen: [34, 139, 34],
                                    fuchsia: [255, 0, 255],
                                    gainsboro: [220, 220, 220],
                                    ghostwhite: [248, 248, 255],
                                    gold: [255, 215, 0],
                                    goldenrod: [218, 165, 32],
                                    gray: [128, 128, 128],
                                    green: [0, 128, 0],
                                    greenyellow: [173, 255, 47],
                                    grey: [128, 128, 128],
                                    honeydew: [240, 255, 240],
                                    hotpink: [255, 105, 180],
                                    indianred: [205, 92, 92],
                                    indigo: [75, 0, 130],
                                    ivory: [255, 255, 240],
                                    khaki: [240, 230, 140],
                                    lavender: [230, 230, 250],
                                    lavenderblush: [255, 240, 245],
                                    lawngreen: [124, 252, 0],
                                    lemonchiffon: [255, 250, 205],
                                    lightblue: [173, 216, 230],
                                    lightcoral: [240, 128, 128],
                                    lightcyan: [224, 255, 255],
                                    lightgoldenrodyellow: [250, 250, 210],
                                    lightgray: [211, 211, 211],
                                    lightgreen: [144, 238, 144],
                                    lightgrey: [211, 211, 211],
                                    lightpink: [255, 182, 193],
                                    lightsalmon: [255, 160, 122],
                                    lightseagreen: [32, 178, 170],
                                    lightskyblue: [135, 206, 250],
                                    lightslategray: [119, 136, 153],
                                    lightslategrey: [119, 136, 153],
                                    lightsteelblue: [176, 196, 222],
                                    lightyellow: [255, 255, 224],
                                    lime: [0, 255, 0],
                                    limegreen: [50, 205, 50],
                                    linen: [250, 240, 230],
                                    magenta: [255, 0, 255],
                                    maroon: [128, 0, 0],
                                    mediumaquamarine: [102, 205, 170],
                                    mediumblue: [0, 0, 205],
                                    mediumorchid: [186, 85, 211],
                                    mediumpurple: [147, 112, 219],
                                    mediumseagreen: [60, 179, 113],
                                    mediumslateblue: [123, 104, 238],
                                    mediumspringgreen: [0, 250, 154],
                                    mediumturquoise: [72, 209, 204],
                                    mediumvioletred: [199, 21, 133],
                                    midnightblue: [25, 25, 112],
                                    mintcream: [245, 255, 250],
                                    mistyrose: [255, 228, 225],
                                    moccasin: [255, 228, 181],
                                    navajowhite: [255, 222, 173],
                                    navy: [0, 0, 128],
                                    oldlace: [253, 245, 230],
                                    olive: [128, 128, 0],
                                    olivedrab: [107, 142, 35],
                                    orange: [255, 165, 0],
                                    orangered: [255, 69, 0],
                                    orchid: [218, 112, 214],
                                    palegoldenrod: [238, 232, 170],
                                    palegreen: [152, 251, 152],
                                    paleturquoise: [175, 238, 238],
                                    palevioletred: [219, 112, 147],
                                    papayawhip: [255, 239, 213],
                                    peachpuff: [255, 218, 185],
                                    peru: [205, 133, 63],
                                    pink: [255, 192, 203],
                                    plum: [221, 160, 221],
                                    powderblue: [176, 224, 230],
                                    purple: [128, 0, 128],
                                    rebeccapurple: [102, 51, 153],
                                    red: [255, 0, 0],
                                    rosybrown: [188, 143, 143],
                                    royalblue: [65, 105, 225],
                                    saddlebrown: [139, 69, 19],
                                    salmon: [250, 128, 114],
                                    sandybrown: [244, 164, 96],
                                    seagreen: [46, 139, 87],
                                    seashell: [255, 245, 238],
                                    sienna: [160, 82, 45],
                                    silver: [192, 192, 192],
                                    skyblue: [135, 206, 235],
                                    slateblue: [106, 90, 205],
                                    slategray: [112, 128, 144],
                                    slategrey: [112, 128, 144],
                                    snow: [255, 250, 250],
                                    springgreen: [0, 255, 127],
                                    steelblue: [70, 130, 180],
                                    tan: [210, 180, 140],
                                    teal: [0, 128, 128],
                                    thistle: [216, 191, 216],
                                    tomato: [255, 99, 71],
                                    turquoise: [64, 224, 208],
                                    violet: [238, 130, 238],
                                    wheat: [245, 222, 179],
                                    white: [255, 255, 255],
                                    whitesmoke: [245, 245, 245],
                                    yellow: [255, 255, 0],
                                    yellowgreen: [154, 205, 50],
                                };
                                e.exports = r;
                            },
                            {},
                        ],
                        4: [
                            function (t, e, n) {
                                function r(t, e) {
                                    var n = w++;
                                    if (
                                        ((e = e || {}).logging && ((u.options.logging = !0), (u.options.start = Date.now())),
                                        (e.async = void 0 === e.async || e.async),
                                        (e.allowTaint = void 0 !== e.allowTaint && e.allowTaint),
                                        (e.removeContainer = void 0 === e.removeContainer || e.removeContainer),
                                        (e.javascriptEnabled = void 0 !== e.javascriptEnabled && e.javascriptEnabled),
                                        (e.imageTimeout = void 0 === e.imageTimeout ? 1e4 : e.imageTimeout),
                                        (e.renderer = "function" == typeof e.renderer ? e.renderer : s),
                                        (e.strict = !!e.strict),
                                        "string" == typeof t)
                                    ) {
                                        if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
                                        var r = null != e.width ? e.width : window.innerWidth,
                                            o = null != e.height ? e.height : window.innerHeight;
                                        return p(
                                            (function (t) {
                                                var e = document.createElement("a");
                                                return (e.href = t), (e.href = e.href), e;
                                            })(t),
                                            e.proxy,
                                            document,
                                            r,
                                            o,
                                            e
                                        ).then(function (t) {
                                            return i(t.contentWindow.document.documentElement, t, e, r, o);
                                        });
                                    }
                                    var a = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
                                    return (
                                        a.setAttribute(m + n, n),
                                        (function (t, e, n, r, o) {
                                            return f(t, t, n, r, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function (a) {
                                                u("Document cloned");
                                                var s = m + o,
                                                    c = "[" + s + "='" + o + "']";
                                                t.querySelector(c).removeAttribute(s);
                                                var l = a.contentWindow,
                                                    h = l.document.querySelector(c);
                                                return ("function" == typeof e.onclone ? Promise.resolve(e.onclone(l.document)) : Promise.resolve(!0)).then(function () {
                                                    return i(h, a, e, n, r);
                                                });
                                            });
                                        })(a.ownerDocument, e, a.ownerDocument.defaultView.innerWidth, a.ownerDocument.defaultView.innerHeight, n).then(function (t) {
                                            return "function" == typeof e.onrendered && (u("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)), t;
                                        })
                                    );
                                }
                                function i(t, e, n, r, i) {
                                    var s = e.contentWindow,
                                        h = new a(s.document),
                                        d = new c(n, h),
                                        f = g(t),
                                        p = "view" === n.type ? r : f.right + 1,
                                        m = "view" === n.type ? i : f.bottom + 1,
                                        w = new n.renderer(p, m, d, n, document);
                                    return new l(t, w, h, d, n).ready.then(function () {
                                        u("Finished rendering");
                                        var r;
                                        if ("view" === n.type) r = o(w.canvas, { width: w.canvas.width, height: w.canvas.height, top: 0, left: 0, x: 0, y: 0 });
                                        else if (t === s.document.body || t === s.document.documentElement || null != n.canvas) r = w.canvas;
                                        else if (n.scale) {
                                            var i = { width: null != n.width ? n.width : f.width, height: null != n.height ? n.height : f.height, top: f.top, left: f.left, x: 0, y: 0 },
                                                a = {};
                                            for (var c in i) i.hasOwnProperty(c) && (a[c] = i[c] * n.scale);
                                            ((r = o(w.canvas, a)).style.width = i.width + "px"), (r.style.height = i.height + "px");
                                        } else r = o(w.canvas, { width: null != n.width ? n.width : f.width, height: null != n.height ? n.height : f.height, top: f.top, left: f.left, x: 0, y: 0 });
                                        return (
                                            (function (t, e) {
                                                e.removeContainer && (t.parentNode.removeChild(t), u("Cleaned up container"));
                                            })(e, n),
                                            r
                                        );
                                    });
                                }
                                function o(t, e) {
                                    var n = document.createElement("canvas"),
                                        r = Math.min(t.width - 1, Math.max(0, e.left)),
                                        i = Math.min(t.width, Math.max(1, e.left + e.width)),
                                        o = Math.min(t.height - 1, Math.max(0, e.top)),
                                        a = Math.min(t.height, Math.max(1, e.top + e.height));
                                    (n.width = e.width), (n.height = e.height);
                                    var s = i - r,
                                        c = a - o;
                                    return (
                                        u("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", s, "height:", c),
                                        u("Resulting crop with width", e.width, "and height", e.height, "with x", r, "and y", o),
                                        n.getContext("2d").drawImage(t, r, o, s, c, e.x, e.y, s, c),
                                        n
                                    );
                                }
                                var a = t("./support"),
                                    s = t("./renderers/canvas"),
                                    c = t("./imageloader"),
                                    l = t("./nodeparser"),
                                    h = t("./nodecontainer"),
                                    u = t("./log"),
                                    d = t("./utils"),
                                    f = t("./clone"),
                                    p = t("./proxy").loadUrlDocument,
                                    g = d.getBounds,
                                    m = "data-html2canvas-node",
                                    w = 0;
                                (r.CanvasRenderer = s), (r.NodeContainer = h), (r.log = u), (r.utils = d);
                                var y =
                                    "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext
                                        ? function () {
                                              return Promise.reject("No canvas support");
                                          }
                                        : r;
                                e.exports = y;
                            },
                            { "./clone": 2, "./imageloader": 11, "./log": 13, "./nodecontainer": 14, "./nodeparser": 15, "./proxy": 16, "./renderers/canvas": 20, "./support": 22, "./utils": 26 },
                        ],
                        5: [
                            function (t, e, n) {
                                function r(t) {
                                    if (((this.src = t), i("DummyImageContainer for", t), !this.promise || !this.image)) {
                                        i("Initiating DummyImageContainer"), (r.prototype.image = new Image());
                                        var e = this.image;
                                        r.prototype.promise = new Promise(function (t, n) {
                                            (e.onload = t), (e.onerror = n), (e.src = o()), !0 === e.complete && t(e);
                                        });
                                    }
                                }
                                var i = t("./log"),
                                    o = t("./utils").smallImage;
                                e.exports = r;
                            },
                            { "./log": 13, "./utils": 26 },
                        ],
                        6: [
                            function (t, e, n) {
                                var r = t("./utils").smallImage;
                                e.exports = function (t, e) {
                                    var n,
                                        i,
                                        o = document.createElement("div"),
                                        a = document.createElement("img"),
                                        s = document.createElement("span");
                                    (o.style.visibility = "hidden"),
                                        (o.style.fontFamily = t),
                                        (o.style.fontSize = e),
                                        (o.style.margin = 0),
                                        (o.style.padding = 0),
                                        document.body.appendChild(o),
                                        (a.src = r()),
                                        (a.width = 1),
                                        (a.height = 1),
                                        (a.style.margin = 0),
                                        (a.style.padding = 0),
                                        (a.style.verticalAlign = "baseline"),
                                        (s.style.fontFamily = t),
                                        (s.style.fontSize = e),
                                        (s.style.margin = 0),
                                        (s.style.padding = 0),
                                        s.appendChild(document.createTextNode("Hidden Text")),
                                        o.appendChild(s),
                                        o.appendChild(a),
                                        (n = a.offsetTop - s.offsetTop + 1),
                                        o.removeChild(s),
                                        o.appendChild(document.createTextNode("Hidden Text")),
                                        (o.style.lineHeight = "normal"),
                                        (a.style.verticalAlign = "super"),
                                        (i = a.offsetTop - o.offsetTop + 1),
                                        document.body.removeChild(o),
                                        (this.baseline = n),
                                        (this.lineWidth = 1),
                                        (this.middle = i);
                                };
                            },
                            { "./utils": 26 },
                        ],
                        7: [
                            function (t, e, n) {
                                function r() {
                                    this.data = {};
                                }
                                var i = t("./font");
                                (r.prototype.getMetrics = function (t, e) {
                                    return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new i(t, e)), this.data[t + "-" + e];
                                }),
                                    (e.exports = r);
                            },
                            { "./font": 6 },
                        ],
                        8: [
                            function (t, e, n) {
                                function r(e, n, r) {
                                    (this.image = null), (this.src = e);
                                    var o = this,
                                        a = i(e);
                                    this.promise = (n
                                        ? new Promise(function (t) {
                                              "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement
                                                  ? (e.contentWindow.onload = e.onload = function () {
                                                        t(e);
                                                    })
                                                  : t(e);
                                          })
                                        : this.proxyLoad(r.proxy, a, r)
                                    )
                                        .then(function (e) {
                                            return t("./core")(e.contentWindow.document.documentElement, {
                                                type: "view",
                                                width: e.width,
                                                height: e.height,
                                                proxy: r.proxy,
                                                javascriptEnabled: r.javascriptEnabled,
                                                removeContainer: r.removeContainer,
                                                allowTaint: r.allowTaint,
                                                imageTimeout: r.imageTimeout / 2,
                                            });
                                        })
                                        .then(function (t) {
                                            return (o.image = t);
                                        });
                                }
                                var i = t("./utils").getBounds,
                                    o = t("./proxy").loadUrlDocument;
                                (r.prototype.proxyLoad = function (t, e, n) {
                                    var r = this.src;
                                    return o(r.src, t, r.ownerDocument, e.width, e.height, n);
                                }),
                                    (e.exports = r);
                            },
                            { "./core": 4, "./proxy": 16, "./utils": 26 },
                        ],
                        9: [
                            function (t, e, n) {
                                function r(t) {
                                    (this.src = t.value), (this.colorStops = []), (this.type = null), (this.x0 = 0.5), (this.y0 = 0.5), (this.x1 = 0.5), (this.y1 = 0.5), (this.promise = Promise.resolve(!0));
                                }
                                (r.TYPES = { LINEAR: 1, RADIAL: 2 }),
                                    (r.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i),
                                    (e.exports = r);
                            },
                            {},
                        ],
                        10: [
                            function (t, e, n) {
                                e.exports = function (t, e) {
                                    (this.src = t), (this.image = new Image());
                                    var n = this;
                                    (this.tainted = null),
                                        (this.promise = new Promise(function (r, i) {
                                            (n.image.onload = r), (n.image.onerror = i), e && (n.image.crossOrigin = "anonymous"), (n.image.src = t), !0 === n.image.complete && r(n.image);
                                        }));
                                };
                            },
                            {},
                        ],
                        11: [
                            function (t, e, n) {
                                function r(t, e) {
                                    (this.link = null), (this.options = t), (this.support = e), (this.origin = this.getOrigin(window.location.href));
                                }
                                var i = t("./log"),
                                    o = t("./imagecontainer"),
                                    a = t("./dummyimagecontainer"),
                                    s = t("./proxyimagecontainer"),
                                    c = t("./framecontainer"),
                                    l = t("./svgcontainer"),
                                    h = t("./svgnodecontainer"),
                                    u = t("./lineargradientcontainer"),
                                    d = t("./webkitgradientcontainer"),
                                    f = t("./utils").bind;
                                (r.prototype.findImages = function (t) {
                                    var e = [];
                                    return (
                                        t
                                            .reduce(function (t, e) {
                                                switch (e.node.nodeName) {
                                                    case "IMG":
                                                        return t.concat([{ args: [e.node.src], method: "url" }]);
                                                    case "svg":
                                                    case "IFRAME":
                                                        return t.concat([{ args: [e.node], method: e.node.nodeName }]);
                                                }
                                                return t;
                                            }, [])
                                            .forEach(this.addImage(e, this.loadImage), this),
                                        e
                                    );
                                }),
                                    (r.prototype.findBackgroundImage = function (t, e) {
                                        return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t;
                                    }),
                                    (r.prototype.addImage = function (t, e) {
                                        return function (n) {
                                            n.args.forEach(function (r) {
                                                this.imageExists(t, r) || (t.splice(0, 0, e.call(this, n)), i("Added image #" + t.length, "string" == typeof r ? r.substring(0, 100) : r));
                                            }, this);
                                        };
                                    }),
                                    (r.prototype.hasImageBackground = function (t) {
                                        return "none" !== t.method;
                                    }),
                                    (r.prototype.loadImage = function (t) {
                                        if ("url" === t.method) {
                                            var e = t.args[0];
                                            return !this.isSVG(e) || this.support.svg || this.options.allowTaint
                                                ? e.match(/data:image\/.*;base64,/i)
                                                    ? new o(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1)
                                                    : this.isSameOrigin(e) || !0 === this.options.allowTaint || this.isSVG(e)
                                                    ? new o(e, !1)
                                                    : this.support.cors && !this.options.allowTaint && this.options.useCORS
                                                    ? new o(e, !0)
                                                    : this.options.proxy
                                                    ? new s(e, this.options.proxy)
                                                    : new a(e)
                                                : new l(e);
                                        }
                                        return "linear-gradient" === t.method
                                            ? new u(t)
                                            : "gradient" === t.method
                                            ? new d(t)
                                            : "svg" === t.method
                                            ? new h(t.args[0], this.support.svg)
                                            : "IFRAME" === t.method
                                            ? new c(t.args[0], this.isSameOrigin(t.args[0].src), this.options)
                                            : new a(t);
                                    }),
                                    (r.prototype.isSVG = function (t) {
                                        return "svg" === t.substring(t.length - 3).toLowerCase() || l.prototype.isInline(t);
                                    }),
                                    (r.prototype.imageExists = function (t, e) {
                                        return t.some(function (t) {
                                            return t.src === e;
                                        });
                                    }),
                                    (r.prototype.isSameOrigin = function (t) {
                                        return this.getOrigin(t) === this.origin;
                                    }),
                                    (r.prototype.getOrigin = function (t) {
                                        var e = this.link || (this.link = document.createElement("a"));
                                        return (e.href = t), (e.href = e.href), e.protocol + e.hostname + e.port;
                                    }),
                                    (r.prototype.getPromise = function (t) {
                                        return this.timeout(t, this.options.imageTimeout).catch(function () {
                                            return new a(t.src).promise.then(function (e) {
                                                t.image = e;
                                            });
                                        });
                                    }),
                                    (r.prototype.get = function (t) {
                                        var e = null;
                                        return this.images.some(function (n) {
                                            return (e = n).src === t;
                                        })
                                            ? e
                                            : null;
                                    }),
                                    (r.prototype.fetch = function (t) {
                                        return (
                                            (this.images = t.reduce(f(this.findBackgroundImage, this), this.findImages(t))),
                                            this.images.forEach(function (t, e) {
                                                t.promise.then(
                                                    function () {
                                                        i("Succesfully loaded image #" + (e + 1), t);
                                                    },
                                                    function (n) {
                                                        i("Failed loading image #" + (e + 1), t, n);
                                                    }
                                                );
                                            }),
                                            (this.ready = Promise.all(this.images.map(this.getPromise, this))),
                                            i("Finished searching images"),
                                            this
                                        );
                                    }),
                                    (r.prototype.timeout = function (t, e) {
                                        var n,
                                            r = Promise.race([
                                                t.promise,
                                                new Promise(function (r, o) {
                                                    n = setTimeout(function () {
                                                        i("Timed out loading image", t), o(t);
                                                    }, e);
                                                }),
                                            ]).then(function (t) {
                                                return clearTimeout(n), t;
                                            });
                                        return (
                                            r.catch(function () {
                                                clearTimeout(n);
                                            }),
                                            r
                                        );
                                    }),
                                    (e.exports = r);
                            },
                            {
                                "./dummyimagecontainer": 5,
                                "./framecontainer": 8,
                                "./imagecontainer": 10,
                                "./lineargradientcontainer": 12,
                                "./log": 13,
                                "./proxyimagecontainer": 17,
                                "./svgcontainer": 23,
                                "./svgnodecontainer": 24,
                                "./utils": 26,
                                "./webkitgradientcontainer": 27,
                            },
                        ],
                        12: [
                            function (t, e, n) {
                                function r(t) {
                                    i.apply(this, arguments), (this.type = i.TYPES.LINEAR);
                                    var e = r.REGEXP_DIRECTION.test(t.args[0]) || !i.REGEXP_COLORSTOP.test(t.args[0]);
                                    e
                                        ? t.args[0]
                                              .split(/\s+/)
                                              .reverse()
                                              .forEach(function (t, e) {
                                                  switch (t) {
                                                      case "left":
                                                          (this.x0 = 0), (this.x1 = 1);
                                                          break;
                                                      case "top":
                                                          (this.y0 = 0), (this.y1 = 1);
                                                          break;
                                                      case "right":
                                                          (this.x0 = 1), (this.x1 = 0);
                                                          break;
                                                      case "bottom":
                                                          (this.y0 = 1), (this.y1 = 0);
                                                          break;
                                                      case "to":
                                                          var n = this.y0,
                                                              r = this.x0;
                                                          (this.y0 = this.y1), (this.x0 = this.x1), (this.x1 = r), (this.y1 = n);
                                                          break;
                                                      case "center":
                                                          break;
                                                      default:
                                                          var i = 0.01 * parseFloat(t, 10);
                                                          if (isNaN(i)) break;
                                                          0 === e ? ((this.y0 = i), (this.y1 = 1 - this.y0)) : ((this.x0 = i), (this.x1 = 1 - this.x0));
                                                  }
                                              }, this)
                                        : ((this.y0 = 0), (this.y1 = 1)),
                                        (this.colorStops = t.args.slice(e ? 1 : 0).map(function (t) {
                                            var e = t.match(i.REGEXP_COLORSTOP),
                                                n = +e[2],
                                                r = 0 === n ? "%" : e[3];
                                            return { color: new o(e[1]), stop: "%" === r ? n / 100 : null };
                                        })),
                                        null === this.colorStops[0].stop && (this.colorStops[0].stop = 0),
                                        null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1),
                                        this.colorStops.forEach(function (t, e) {
                                            null === t.stop &&
                                                this.colorStops.slice(e).some(function (n, r) {
                                                    return null !== n.stop && ((t.stop = (n.stop - this.colorStops[e - 1].stop) / (r + 1) + this.colorStops[e - 1].stop), !0);
                                                }, this);
                                        }, this);
                                }
                                var i = t("./gradientcontainer"),
                                    o = t("./color");
                                (r.prototype = Object.create(i.prototype)), (r.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i), (e.exports = r);
                            },
                            { "./color": 3, "./gradientcontainer": 9 },
                        ],
                        13: [
                            function (t, e, n) {
                                var r = function () {
                                    r.options.logging &&
                                        window.console &&
                                        window.console.log &&
                                        Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - r.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
                                };
                                (r.options = { logging: !1 }), (e.exports = r);
                            },
                            {},
                        ],
                        14: [
                            function (t, e, n) {
                                function r(t, e) {
                                    (this.node = t),
                                        (this.parent = e),
                                        (this.stack = null),
                                        (this.bounds = null),
                                        (this.borders = null),
                                        (this.clip = []),
                                        (this.backgroundClip = []),
                                        (this.offsetBounds = null),
                                        (this.visible = null),
                                        (this.computedStyles = null),
                                        (this.colors = {}),
                                        (this.styles = {}),
                                        (this.backgroundImages = null),
                                        (this.transformData = null),
                                        (this.transformMatrix = null),
                                        (this.isPseudoElement = !1),
                                        (this.opacity = null);
                                }
                                function i(t) {
                                    var e = t[0],
                                        n = t[2],
                                        r = t[4],
                                        i = t[1],
                                        o = t[3],
                                        a = t[5],
                                        s = e * o - n * i;
                                    return [o, -i, -n, e, n * a - r * o, r * i - e * a].map(function (t) {
                                        return t / s;
                                    });
                                }
                                function o(t) {
                                    return -1 !== t.toString().indexOf("%");
                                }
                                function a(t) {
                                    return t.replace("px", "");
                                }
                                function s(t) {
                                    return parseFloat(t);
                                }
                                var c = t("./color"),
                                    l = t("./utils"),
                                    h = l.getBounds,
                                    u = l.parseBackgrounds,
                                    d = l.offsetBounds;
                                (r.prototype.cloneTo = function (t) {
                                    (t.visible = this.visible),
                                        (t.borders = this.borders),
                                        (t.bounds = this.bounds),
                                        (t.clip = this.clip),
                                        (t.backgroundClip = this.backgroundClip),
                                        (t.computedStyles = this.computedStyles),
                                        (t.styles = this.styles),
                                        (t.backgroundImages = this.backgroundImages),
                                        (t.opacity = this.opacity);
                                }),
                                    (r.prototype.getOpacity = function () {
                                        return null === this.opacity ? (this.opacity = this.cssFloat("opacity")) : this.opacity;
                                    }),
                                    (r.prototype.assignStack = function (t) {
                                        (this.stack = t), t.children.push(this);
                                    }),
                                    (r.prototype.isElementVisible = function () {
                                        return this.node.nodeType === Node.TEXT_NODE
                                            ? this.parent.visible
                                            : "none" !== this.css("display") &&
                                                  "hidden" !== this.css("visibility") &&
                                                  !this.node.hasAttribute("data-html2canvas-ignore") &&
                                                  ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"));
                                    }),
                                    (r.prototype.css = function (t) {
                                        return (
                                            this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)),
                                            this.styles[t] || (this.styles[t] = this.computedStyles[t])
                                        );
                                    }),
                                    (r.prototype.prefixedCss = function (t) {
                                        var e = this.css(t);
                                        return (
                                            void 0 === e &&
                                                ["webkit", "moz", "ms", "o"].some(function (n) {
                                                    return void 0 !== (e = this.css(n + t.substr(0, 1).toUpperCase() + t.substr(1)));
                                                }, this),
                                            void 0 === e ? null : e
                                        );
                                    }),
                                    (r.prototype.computedStyle = function (t) {
                                        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t);
                                    }),
                                    (r.prototype.cssInt = function (t) {
                                        var e = parseInt(this.css(t), 10);
                                        return isNaN(e) ? 0 : e;
                                    }),
                                    (r.prototype.color = function (t) {
                                        return this.colors[t] || (this.colors[t] = new c(this.css(t)));
                                    }),
                                    (r.prototype.cssFloat = function (t) {
                                        var e = parseFloat(this.css(t));
                                        return isNaN(e) ? 0 : e;
                                    }),
                                    (r.prototype.fontWeight = function () {
                                        var t = this.css("fontWeight");
                                        switch (parseInt(t, 10)) {
                                            case 401:
                                                t = "bold";
                                                break;
                                            case 400:
                                                t = "normal";
                                        }
                                        return t;
                                    }),
                                    (r.prototype.parseClip = function () {
                                        var t = this.css("clip").match(this.CLIP);
                                        return t ? { top: parseInt(t[1], 10), right: parseInt(t[2], 10), bottom: parseInt(t[3], 10), left: parseInt(t[4], 10) } : null;
                                    }),
                                    (r.prototype.parseBackgroundImages = function () {
                                        return this.backgroundImages || (this.backgroundImages = u(this.css("backgroundImage")));
                                    }),
                                    (r.prototype.cssList = function (t, e) {
                                        var n = (this.css(t) || "").split(",");
                                        return (n = n[e || 0] || n[0] || "auto"), 1 === (n = n.trim().split(" ")).length && (n = [n[0], o(n[0]) ? "auto" : n[0]]), n;
                                    }),
                                    (r.prototype.parseBackgroundSize = function (t, e, n) {
                                        var r,
                                            i,
                                            a = this.cssList("backgroundSize", n);
                                        if (o(a[0])) r = (t.width * parseFloat(a[0])) / 100;
                                        else {
                                            if (/contain|cover/.test(a[0])) {
                                                var s = t.width / t.height,
                                                    c = e.width / e.height;
                                                return (s < c) ^ ("contain" === a[0]) ? { width: t.height * c, height: t.height } : { width: t.width, height: t.width / c };
                                            }
                                            r = parseInt(a[0], 10);
                                        }
                                        return (
                                            (i = "auto" === a[0] && "auto" === a[1] ? e.height : "auto" === a[1] ? (r / e.width) * e.height : o(a[1]) ? (t.height * parseFloat(a[1])) / 100 : parseInt(a[1], 10)),
                                            "auto" === a[0] && (r = (i / e.height) * e.width),
                                            { width: r, height: i }
                                        );
                                    }),
                                    (r.prototype.parseBackgroundPosition = function (t, e, n, r) {
                                        var i,
                                            a,
                                            s = this.cssList("backgroundPosition", n);
                                        return (
                                            (i = o(s[0]) ? (t.width - (r || e).width) * (parseFloat(s[0]) / 100) : parseInt(s[0], 10)),
                                            (a = "auto" === s[1] ? (i / e.width) * e.height : o(s[1]) ? ((t.height - (r || e).height) * parseFloat(s[1])) / 100 : parseInt(s[1], 10)),
                                            "auto" === s[0] && (i = (a / e.height) * e.width),
                                            { left: i, top: a }
                                        );
                                    }),
                                    (r.prototype.parseBackgroundRepeat = function (t) {
                                        return this.cssList("backgroundRepeat", t)[0];
                                    }),
                                    (r.prototype.parseTextShadows = function () {
                                        var t = this.css("textShadow"),
                                            e = [];
                                        if (t && "none" !== t)
                                            for (var n = t.match(this.TEXT_SHADOW_PROPERTY), r = 0; n && r < n.length; r++) {
                                                var i = n[r].match(this.TEXT_SHADOW_VALUES);
                                                e.push({ color: new c(i[0]), offsetX: i[1] ? parseFloat(i[1].replace("px", "")) : 0, offsetY: i[2] ? parseFloat(i[2].replace("px", "")) : 0, blur: i[3] ? i[3].replace("px", "") : 0 });
                                            }
                                        return e;
                                    }),
                                    (r.prototype.parseTransform = function () {
                                        if (!this.transformData)
                                            if (this.hasTransform()) {
                                                var t = this.parseBounds(),
                                                    e = this.prefixedCss("transformOrigin").split(" ").map(a).map(s);
                                                (e[0] += t.left), (e[1] += t.top), (this.transformData = { origin: e, matrix: this.parseTransformMatrix() });
                                            } else this.transformData = { origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0] };
                                        return this.transformData;
                                    }),
                                    (r.prototype.parseTransformMatrix = function () {
                                        if (!this.transformMatrix) {
                                            var t = this.prefixedCss("transform"),
                                                e = t
                                                    ? (function (t) {
                                                          {
                                                              if (t && "matrix" === t[1])
                                                                  return t[2].split(",").map(function (t) {
                                                                      return parseFloat(t.trim());
                                                                  });
                                                              if (t && "matrix3d" === t[1]) {
                                                                  var e = t[2].split(",").map(function (t) {
                                                                      return parseFloat(t.trim());
                                                                  });
                                                                  return [e[0], e[1], e[4], e[5], e[12], e[13]];
                                                              }
                                                          }
                                                      })(t.match(this.MATRIX_PROPERTY))
                                                    : null;
                                            this.transformMatrix = e || [1, 0, 0, 1, 0, 0];
                                        }
                                        return this.transformMatrix;
                                    }),
                                    (r.prototype.inverseTransform = function () {
                                        var t = this.parseTransform();
                                        return { origin: t.origin, matrix: i(t.matrix) };
                                    }),
                                    (r.prototype.parseBounds = function () {
                                        return this.bounds || (this.bounds = this.hasTransform() ? d(this.node) : h(this.node));
                                    }),
                                    (r.prototype.hasTransform = function () {
                                        return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || (this.parent && this.parent.hasTransform());
                                    }),
                                    (r.prototype.getValue = function () {
                                        var t = this.node.value || "";
                                        return (
                                            "SELECT" === this.node.tagName
                                                ? (t = (function (t) {
                                                      var e = t.options[t.selectedIndex || 0];
                                                      return e ? e.text || "" : "";
                                                  })(this.node))
                                                : "password" === this.node.type && (t = Array(t.length + 1).join("•")),
                                            0 === t.length ? this.node.placeholder || "" : t
                                        );
                                    }),
                                    (r.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/),
                                    (r.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g),
                                    (r.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g),
                                    (r.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/),
                                    (e.exports = r);
                            },
                            { "./color": 3, "./utils": 26 },
                        ],
                        15: [
                            function (t, e, n) {
                                function r(t, e, n, r, i) {
                                    q("Starting NodeParser"), (this.renderer = e), (this.options = i), (this.range = null), (this.support = n), (this.renderQueue = []), (this.stack = new j(!0, 1, t.ownerDocument, null));
                                    var o = new B(t, null);
                                    if ((i.background && e.rectangle(0, 0, e.width, e.height, new N(i.background)), t === t.ownerDocument.documentElement)) {
                                        var a = new B(o.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
                                        e.rectangle(0, 0, e.width, e.height, a.color("backgroundColor"));
                                    }
                                    (o.visibile = o.isElementVisible()),
                                        this.createPseudoHideStyles(t.ownerDocument),
                                        this.disableAnimations(t.ownerDocument),
                                        (this.nodes = O(
                                            [o]
                                                .concat(this.getChildren(o))
                                                .filter(function (t) {
                                                    return (t.visible = t.isElementVisible());
                                                })
                                                .map(this.getPseudoElements, this)
                                        )),
                                        (this.fontMetrics = new L()),
                                        q("Fetched nodes, total:", this.nodes.length),
                                        q("Calculate overflow clips"),
                                        this.calculateOverflowClips(),
                                        q("Start fetching images"),
                                        (this.images = r.fetch(this.nodes.filter(T))),
                                        (this.ready = this.images.ready.then(
                                            z(function () {
                                                return (
                                                    q("Images loaded, starting parsing"),
                                                    q("Creating stacking contexts"),
                                                    this.createStackingContexts(),
                                                    q("Sorting stacking contexts"),
                                                    this.sortStackingContexts(this.stack),
                                                    this.parse(this.stack),
                                                    q("Render queue created with " + this.renderQueue.length + " items"),
                                                    new Promise(
                                                        z(function (t) {
                                                            i.async
                                                                ? "function" == typeof i.async
                                                                    ? i.async.call(this, this.renderQueue, t)
                                                                    : this.renderQueue.length > 0
                                                                    ? ((this.renderIndex = 0), this.asyncRenderer(this.renderQueue, t))
                                                                    : t()
                                                                : (this.renderQueue.forEach(this.paint, this), t());
                                                        }, this)
                                                    )
                                                );
                                            }, this)
                                        ));
                                }
                                function i(t) {
                                    return t.parent && t.parent.clip.length;
                                }
                                function o(t) {
                                    return t.replace(/(\-[a-z])/g, function (t) {
                                        return t.toUpperCase().replace("-", "");
                                    });
                                }
                                function a() {}
                                function s(t, e, n, r) {
                                    var i = { top: e.top + t[0].width / 2, right: e.right - t[1].width / 2, bottom: e.bottom - t[2].width / 2, left: e.left + t[3].width / 2 };
                                    return t.map(function (o, a) {
                                        if (o.width > 0) {
                                            var s = e.left,
                                                c = e.top,
                                                l = e.width,
                                                h = e.height - t[2].width;
                                            switch (a) {
                                                case 0:
                                                    (h = t[0].width),
                                                        (o.args = u(
                                                            { c1: [s, c], c2: [s + l, c], c3: [s + l - t[1].width, c + h], c4: [s + t[3].width, c + h] },
                                                            r[0],
                                                            r[1],
                                                            n.topLeftOuter,
                                                            n.topLeftInner,
                                                            n.topRightOuter,
                                                            n.topRightInner
                                                        )),
                                                        (o.pathArgs = d({ c1: [i.left, i.top], c2: [i.right, i.top] }, r[0], r[1], n.topLeft, n.topRight));
                                                    break;
                                                case 1:
                                                    (s = e.left + e.width - t[1].width),
                                                        (l = t[1].width),
                                                        (o.args = u(
                                                            { c1: [s + l, c], c2: [s + l, c + h + t[2].width], c3: [s, c + h], c4: [s, c + t[0].width] },
                                                            r[1],
                                                            r[2],
                                                            n.topRightOuter,
                                                            n.topRightInner,
                                                            n.bottomRightOuter,
                                                            n.bottomRightInner
                                                        )),
                                                        (o.pathArgs = d({ c1: [i.right, i.top], c2: [i.right, i.bottom] }, r[1], r[2], n.topRight, n.bottomRight));
                                                    break;
                                                case 2:
                                                    (c = c + e.height - t[2].width),
                                                        (h = t[2].width),
                                                        (o.args = u(
                                                            { c1: [s + l, c + h], c2: [s, c + h], c3: [s + t[3].width, c], c4: [s + l - t[3].width, c] },
                                                            r[2],
                                                            r[3],
                                                            n.bottomRightOuter,
                                                            n.bottomRightInner,
                                                            n.bottomLeftOuter,
                                                            n.bottomLeftInner
                                                        )),
                                                        (o.pathArgs = d({ c1: [i.right, i.bottom], c2: [i.left, i.bottom] }, r[2], r[3], n.bottomRight, n.bottomLeft));
                                                    break;
                                                case 3:
                                                    (l = t[3].width),
                                                        (o.args = u(
                                                            { c1: [s, c + h + t[2].width], c2: [s, c], c3: [s + l, c + t[0].width], c4: [s + l, c + h] },
                                                            r[3],
                                                            r[0],
                                                            n.bottomLeftOuter,
                                                            n.bottomLeftInner,
                                                            n.topLeftOuter,
                                                            n.topLeftInner
                                                        )),
                                                        (o.pathArgs = d({ c1: [i.left, i.bottom], c2: [i.left, i.top] }, r[3], r[0], n.bottomLeft, n.topLeft));
                                            }
                                        }
                                        return o;
                                    });
                                }
                                function c(t, e, n, r) {
                                    var i = ((Math.sqrt(2) - 1) / 3) * 4,
                                        o = n * i,
                                        a = r * i,
                                        s = t + n,
                                        c = e + r;
                                    return {
                                        topLeft: h({ x: t, y: c }, { x: t, y: c - a }, { x: s - o, y: e }, { x: s, y: e }),
                                        topRight: h({ x: t, y: e }, { x: t + o, y: e }, { x: s, y: c - a }, { x: s, y: c }),
                                        bottomRight: h({ x: s, y: e }, { x: s, y: e + a }, { x: t + o, y: c }, { x: t, y: c }),
                                        bottomLeft: h({ x: s, y: c }, { x: s - o, y: c }, { x: t, y: e + a }, { x: t, y: e }),
                                    };
                                }
                                function l(t, e, n) {
                                    var r = t.left,
                                        i = t.top,
                                        o = t.width,
                                        a = t.height,
                                        s = e[0][0] < o / 2 ? e[0][0] : o / 2,
                                        l = e[0][1] < a / 2 ? e[0][1] : a / 2,
                                        h = e[1][0] < o / 2 ? e[1][0] : o / 2,
                                        u = e[1][1] < a / 2 ? e[1][1] : a / 2,
                                        d = e[2][0] < o / 2 ? e[2][0] : o / 2,
                                        f = e[2][1] < a / 2 ? e[2][1] : a / 2,
                                        p = e[3][0] < o / 2 ? e[3][0] : o / 2,
                                        g = e[3][1] < a / 2 ? e[3][1] : a / 2,
                                        m = o - h,
                                        w = a - f,
                                        y = o - d,
                                        v = a - g;
                                    return {
                                        topLeft: c(r + n[3].width / 2, i + n[0].width / 2, Math.max(0, s - n[3].width / 2), Math.max(0, l - n[0].width / 2)).topLeft.subdivide(0.5),
                                        topRight: c(r + Math.min(m, o + n[3].width / 2), i + n[0].width / 2, m > o + n[3].width / 2 ? 0 : h - n[3].width / 2, u - n[0].width / 2).topRight.subdivide(0.5),
                                        bottomRight: c(r + Math.min(y, o - n[3].width / 2), i + Math.min(w, a + n[0].width / 2), Math.max(0, d - n[1].width / 2), f - n[2].width / 2).bottomRight.subdivide(0.5),
                                        bottomLeft: c(r + n[3].width / 2, i + v, Math.max(0, p - n[3].width / 2), g - n[2].width / 2).bottomLeft.subdivide(0.5),
                                        topLeftOuter: c(r, i, s, l).topLeft.subdivide(0.5),
                                        topLeftInner: c(r + n[3].width, i + n[0].width, Math.max(0, s - n[3].width), Math.max(0, l - n[0].width)).topLeft.subdivide(0.5),
                                        topRightOuter: c(r + m, i, h, u).topRight.subdivide(0.5),
                                        topRightInner: c(r + Math.min(m, o + n[3].width), i + n[0].width, m > o + n[3].width ? 0 : h - n[3].width, u - n[0].width).topRight.subdivide(0.5),
                                        bottomRightOuter: c(r + y, i + w, d, f).bottomRight.subdivide(0.5),
                                        bottomRightInner: c(r + Math.min(y, o - n[3].width), i + Math.min(w, a + n[0].width), Math.max(0, d - n[1].width), f - n[2].width).bottomRight.subdivide(0.5),
                                        bottomLeftOuter: c(r, i + v, p, g).bottomLeft.subdivide(0.5),
                                        bottomLeftInner: c(r + n[3].width, i + v, Math.max(0, p - n[3].width), g - n[2].width).bottomLeft.subdivide(0.5),
                                    };
                                }
                                function h(t, e, n, r) {
                                    var i = function (t, e, n) {
                                        return { x: t.x + (e.x - t.x) * n, y: t.y + (e.y - t.y) * n };
                                    };
                                    return {
                                        start: t,
                                        startControl: e,
                                        endControl: n,
                                        end: r,
                                        subdivide: function (o) {
                                            var a = i(t, e, o),
                                                s = i(e, n, o),
                                                c = i(n, r, o),
                                                l = i(a, s, o),
                                                u = i(s, c, o),
                                                d = i(l, u, o);
                                            return [h(t, a, l, d), h(d, u, c, r)];
                                        },
                                        curveTo: function (t) {
                                            t.push(["bezierCurve", e.x, e.y, n.x, n.y, r.x, r.y]);
                                        },
                                        curveToReversed: function (r) {
                                            r.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y]);
                                        },
                                    };
                                }
                                function u(t, e, n, r, i, o, a) {
                                    var s = [];
                                    return (
                                        e[0] > 0 || e[1] > 0 ? (s.push(["line", r[1].start.x, r[1].start.y]), r[1].curveTo(s)) : s.push(["line", t.c1[0], t.c1[1]]),
                                        n[0] > 0 || n[1] > 0
                                            ? (s.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(s), s.push(["line", a[0].end.x, a[0].end.y]), a[0].curveToReversed(s))
                                            : (s.push(["line", t.c2[0], t.c2[1]]), s.push(["line", t.c3[0], t.c3[1]])),
                                        e[0] > 0 || e[1] > 0 ? (s.push(["line", i[1].end.x, i[1].end.y]), i[1].curveToReversed(s)) : s.push(["line", t.c4[0], t.c4[1]]),
                                        s
                                    );
                                }
                                function d(t, e, n, r, i) {
                                    var o = [];
                                    return (
                                        e[0] > 0 || e[1] > 0 ? (o.push(["line", r[1].start.x, r[1].start.y]), r[1].curveTo(o)) : o.push(["line", t.c1[0], t.c1[1]]),
                                        n[0] > 0 || n[1] > 0 ? (o.push(["line", i[0].start.x, i[0].start.y]), i[0].curveTo(o)) : o.push(["line", t.c2[0], t.c2[1]]),
                                        o
                                    );
                                }
                                function f(t, e, n, r, i, o, a) {
                                    e[0] > 0 || e[1] > 0 ? (t.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(t), r[1].curveTo(t)) : t.push(["line", o, a]), (n[0] > 0 || n[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y]);
                                }
                                function p(t) {
                                    return t.cssInt("zIndex") < 0;
                                }
                                function g(t) {
                                    return t.cssInt("zIndex") > 0;
                                }
                                function m(t) {
                                    return 0 === t.cssInt("zIndex");
                                }
                                function w(t) {
                                    return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"));
                                }
                                function y(t) {
                                    return t instanceof j;
                                }
                                function v(t) {
                                    return t.node.data.trim().length > 0;
                                }
                                function b(t) {
                                    return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE;
                                }
                                function x(t) {
                                    var e = t.css("position");
                                    return "auto" !== (-1 !== ["absolute", "relative", "fixed"].indexOf(e) ? t.css("zIndex") : "auto");
                                }
                                function k(t) {
                                    return "static" !== t.css("position");
                                }
                                function _(t) {
                                    return "none" !== t.css("float");
                                }
                                function C(t) {
                                    var e = this;
                                    return function () {
                                        return !t.apply(e, arguments);
                                    };
                                }
                                function T(t) {
                                    return t.node.nodeType === Node.ELEMENT_NODE;
                                }
                                function S(t) {
                                    return !0 === t.isPseudoElement;
                                }
                                function E(t) {
                                    return t.node.nodeType === Node.TEXT_NODE;
                                }
                                function A(t) {
                                    return parseInt(t, 10);
                                }
                                function I(t) {
                                    return t.width;
                                }
                                function P(t) {
                                    return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName);
                                }
                                function O(t) {
                                    return [].concat.apply([], t);
                                }
                                var q = t("./log"),
                                    R = t("punycode"),
                                    B = t("./nodecontainer"),
                                    F = t("./textcontainer"),
                                    D = t("./pseudoelementcontainer"),
                                    L = t("./fontmetrics"),
                                    N = t("./color"),
                                    j = t("./stackingcontext"),
                                    M = t("./utils"),
                                    z = M.bind,
                                    U = M.getBounds,
                                    H = M.parseBackgrounds,
                                    W = M.offsetBounds;
                                (r.prototype.calculateOverflowClips = function () {
                                    this.nodes.forEach(function (t) {
                                        if (T(t)) {
                                            S(t) && t.appendToDOM(), (t.borders = this.parseBorders(t));
                                            var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                                                n = t.parseClip();
                                            n && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]),
                                                (t.clip = i(t) ? t.parent.clip.concat(e) : e),
                                                (t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip),
                                                S(t) && t.cleanDOM();
                                        } else E(t) && (t.clip = i(t) ? t.parent.clip : []);
                                        S(t) || (t.bounds = null);
                                    }, this);
                                }),
                                    (r.prototype.asyncRenderer = function (t, e, n) {
                                        (n = n || Date.now()),
                                            this.paint(t[this.renderIndex++]),
                                            t.length === this.renderIndex
                                                ? e()
                                                : n + 20 > Date.now()
                                                ? this.asyncRenderer(t, e, n)
                                                : setTimeout(
                                                      z(function () {
                                                          this.asyncRenderer(t, e);
                                                      }, this),
                                                      0
                                                  );
                                    }),
                                    (r.prototype.createPseudoHideStyles = function (t) {
                                        this.createStyles(
                                            t,
                                            "." +
                                                D.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE +
                                                ':before { content: "" !important; display: none !important; }.' +
                                                D.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER +
                                                ':after { content: "" !important; display: none !important; }'
                                        );
                                    }),
                                    (r.prototype.disableAnimations = function (t) {
                                        this.createStyles(
                                            t,
                                            "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}"
                                        );
                                    }),
                                    (r.prototype.createStyles = function (t, e) {
                                        var n = t.createElement("style");
                                        (n.innerHTML = e), t.body.appendChild(n);
                                    }),
                                    (r.prototype.getPseudoElements = function (t) {
                                        var e = [[t]];
                                        if (t.node.nodeType === Node.ELEMENT_NODE) {
                                            var n = this.getPseudoElement(t, ":before"),
                                                r = this.getPseudoElement(t, ":after");
                                            n && e.push(n), r && e.push(r);
                                        }
                                        return O(e);
                                    }),
                                    (r.prototype.getPseudoElement = function (t, e) {
                                        var n = t.computedStyle(e);
                                        if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
                                        for (
                                            var r = (function (t) {
                                                    var e = t.substr(0, 1);
                                                    return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t;
                                                })(n.content),
                                                i = "url" === r.substr(0, 3),
                                                a = document.createElement(i ? "img" : "html2canvaspseudoelement"),
                                                s = new D(a, t, e),
                                                c = n.length - 1;
                                            c >= 0;
                                            c--
                                        ) {
                                            var l = o(n.item(c));
                                            a.style[l] = n[l];
                                        }
                                        if (((a.className = D.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + D.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER), i)) return (a.src = H(r)[0].args[0]), [s];
                                        var h = document.createTextNode(r);
                                        return a.appendChild(h), [s, new F(h, s)];
                                    }),
                                    (r.prototype.getChildren = function (t) {
                                        return O(
                                            [].filter.call(t.node.childNodes, b).map(function (e) {
                                                var n = [e.nodeType === Node.TEXT_NODE ? new F(e, t) : new B(e, t)].filter(P);
                                                return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? (n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : []) : n;
                                            }, this)
                                        );
                                    }),
                                    (r.prototype.newStackingContext = function (t, e) {
                                        var n = new j(e, t.getOpacity(), t.node, t.parent);
                                        t.cloneTo(n);
                                        (e ? n.getParentStack(this) : n.parent.stack).contexts.push(n), (t.stack = n);
                                    }),
                                    (r.prototype.createStackingContexts = function () {
                                        this.nodes.forEach(function (t) {
                                            T(t) &&
                                            (this.isRootElement(t) ||
                                                (function (t) {
                                                    return t.getOpacity() < 1;
                                                })(t) ||
                                                x(t) ||
                                                this.isBodyWithTransparentRoot(t) ||
                                                t.hasTransform())
                                                ? this.newStackingContext(t, !0)
                                                : T(t) &&
                                                  ((k(t) && m(t)) ||
                                                      (function (t) {
                                                          return -1 !== ["inline-block", "inline-table"].indexOf(t.css("display"));
                                                      })(t) ||
                                                      _(t))
                                                ? this.newStackingContext(t, !1)
                                                : t.assignStack(t.parent.stack);
                                        }, this);
                                    }),
                                    (r.prototype.isBodyWithTransparentRoot = function (t) {
                                        return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent();
                                    }),
                                    (r.prototype.isRootElement = function (t) {
                                        return null === t.parent;
                                    }),
                                    (r.prototype.sortStackingContexts = function (t) {
                                        t.contexts.sort(
                                            (function (t) {
                                                return function (e, n) {
                                                    return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length);
                                                };
                                            })(t.contexts.slice(0))
                                        ),
                                            t.contexts.forEach(this.sortStackingContexts, this);
                                    }),
                                    (r.prototype.parseTextBounds = function (t) {
                                        return function (e, n, r) {
                                            if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                                                if (this.support.rangeBounds && !t.parent.hasTransform()) {
                                                    var i = r.slice(0, n).join("").length;
                                                    return this.getRangeBounds(t.node, i, e.length);
                                                }
                                                if (t.node && "string" == typeof t.node.data) {
                                                    var o = t.node.splitText(e.length),
                                                        a = this.getWrapperBounds(t.node, t.parent.hasTransform());
                                                    return (t.node = o), a;
                                                }
                                            } else (this.support.rangeBounds && !t.parent.hasTransform()) || (t.node = t.node.splitText(e.length));
                                            return {};
                                        };
                                    }),
                                    (r.prototype.getWrapperBounds = function (t, e) {
                                        var n = t.ownerDocument.createElement("html2canvaswrapper"),
                                            r = t.parentNode,
                                            i = t.cloneNode(!0);
                                        n.appendChild(t.cloneNode(!0)), r.replaceChild(n, t);
                                        var o = e ? W(n) : U(n);
                                        return r.replaceChild(i, n), o;
                                    }),
                                    (r.prototype.getRangeBounds = function (t, e, n) {
                                        var r = this.range || (this.range = t.ownerDocument.createRange());
                                        return r.setStart(t, e), r.setEnd(t, e + n), r.getBoundingClientRect();
                                    }),
                                    (r.prototype.parse = function (t) {
                                        var e = t.contexts.filter(p),
                                            n = t.children.filter(T),
                                            r = n.filter(C(_)),
                                            i = r.filter(C(k)).filter(C(w)),
                                            o = n.filter(C(k)).filter(_),
                                            s = r.filter(C(k)).filter(w),
                                            c = t.contexts.concat(r.filter(k)).filter(m),
                                            l = t.children.filter(E).filter(v),
                                            h = t.contexts.filter(g);
                                        e.concat(i)
                                            .concat(o)
                                            .concat(s)
                                            .concat(c)
                                            .concat(l)
                                            .concat(h)
                                            .forEach(function (t) {
                                                this.renderQueue.push(t), y(t) && (this.parse(t), this.renderQueue.push(new a()));
                                            }, this);
                                    }),
                                    (r.prototype.paint = function (t) {
                                        try {
                                            t instanceof a ? this.renderer.ctx.restore() : E(t) ? (S(t.parent) && t.parent.appendToDOM(), this.paintText(t), S(t.parent) && t.parent.cleanDOM()) : this.paintNode(t);
                                        } catch (t) {
                                            if ((q(t), this.options.strict)) throw t;
                                        }
                                    }),
                                    (r.prototype.paintNode = function (t) {
                                        y(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())),
                                            "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t);
                                    }),
                                    (r.prototype.paintElement = function (t) {
                                        var e = t.parseBounds();
                                        this.renderer.clip(
                                            t.backgroundClip,
                                            function () {
                                                this.renderer.renderBackground(t, e, t.borders.borders.map(I));
                                            },
                                            this,
                                            t
                                        ),
                                            this.renderer.mask(
                                                t.backgroundClip,
                                                function () {
                                                    this.renderer.renderShadows(t, t.borders.clip);
                                                },
                                                this,
                                                t
                                            ),
                                            this.renderer.clip(
                                                t.clip,
                                                function () {
                                                    this.renderer.renderBorders(t.borders.borders);
                                                },
                                                this,
                                                t
                                            ),
                                            this.renderer.clip(
                                                t.backgroundClip,
                                                function () {
                                                    switch (t.node.nodeName) {
                                                        case "svg":
                                                        case "IFRAME":
                                                            var n = this.images.get(t.node);
                                                            n ? this.renderer.renderImage(t, e, t.borders, n) : q("Error loading <" + t.node.nodeName + ">", t.node);
                                                            break;
                                                        case "IMG":
                                                            var r = this.images.get(t.node.src);
                                                            r ? this.renderer.renderImage(t, e, t.borders, r) : q("Error loading <img>", t.node.src);
                                                            break;
                                                        case "CANVAS":
                                                            this.renderer.renderImage(t, e, t.borders, { image: t.node });
                                                            break;
                                                        case "SELECT":
                                                        case "INPUT":
                                                        case "TEXTAREA":
                                                            this.paintFormValue(t);
                                                    }
                                                },
                                                this,
                                                t
                                            );
                                    }),
                                    (r.prototype.paintCheckbox = function (t) {
                                        var e = t.parseBounds(),
                                            n = Math.min(e.width, e.height),
                                            r = { width: n - 1, height: n - 1, top: e.top, left: e.left },
                                            i = [3, 3],
                                            o = [i, i, i, i],
                                            a = [1, 1, 1, 1].map(function (t) {
                                                return { color: new N("#A5A5A5"), width: t };
                                            }),
                                            c = l(r, o, a);
                                        this.renderer.clip(
                                            t.backgroundClip,
                                            function () {
                                                this.renderer.rectangle(r.left + 1, r.top + 1, r.width - 2, r.height - 2, new N("#DEDEDE")),
                                                    this.renderer.renderBorders(s(a, r, c, o)),
                                                    t.node.checked && (this.renderer.font(new N("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"), this.renderer.text("✔", r.left + n / 6, r.top + n - 1));
                                            },
                                            this,
                                            t
                                        );
                                    }),
                                    (r.prototype.paintRadio = function (t) {
                                        var e = t.parseBounds(),
                                            n = Math.min(e.width, e.height) - 2;
                                        this.renderer.clip(
                                            t.backgroundClip,
                                            function () {
                                                this.renderer.circleStroke(e.left + 1, e.top + 1, n, new N("#DEDEDE"), 1, new N("#A5A5A5")),
                                                    t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new N("#424242"));
                                            },
                                            this,
                                            t
                                        );
                                    }),
                                    (r.prototype.paintFormValue = function (t) {
                                        var e = t.getValue();
                                        if (e.length > 0) {
                                            var n = t.node.ownerDocument,
                                                r = n.createElement("html2canvaswrapper");
                                            [
                                                "lineHeight",
                                                "textAlign",
                                                "fontFamily",
                                                "fontWeight",
                                                "fontSize",
                                                "color",
                                                "paddingLeft",
                                                "paddingTop",
                                                "paddingRight",
                                                "paddingBottom",
                                                "width",
                                                "height",
                                                "borderLeftStyle",
                                                "borderTopStyle",
                                                "borderLeftWidth",
                                                "borderTopWidth",
                                                "boxSizing",
                                                "whiteSpace",
                                                "wordWrap",
                                            ].forEach(function (e) {
                                                try {
                                                    r.style[e] = t.css(e);
                                                } catch (t) {
                                                    q("html2canvas: Parse: Exception caught in renderFormValue: " + t.message);
                                                }
                                            });
                                            var i = t.parseBounds();
                                            (r.style.position = "fixed"),
                                                (r.style.left = i.left + "px"),
                                                (r.style.top = i.top + "px"),
                                                (r.textContent = e),
                                                n.body.appendChild(r),
                                                this.paintText(new F(r.firstChild, t)),
                                                n.body.removeChild(r);
                                        }
                                    }),
                                    (r.prototype.paintText = function (t) {
                                        t.applyTextTransform();
                                        var e = R.ucs2.decode(t.node.data),
                                            n =
                                                (!this.options.letterRendering ||
                                                    (function (t) {
                                                        return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"));
                                                    })(t)) &&
                                                !(function (t) {
                                                    return /[^\u0000-\u00ff]/.test(t);
                                                })(t.node.data),
                                            r = n
                                                ? (function (t) {
                                                      var e,
                                                          n = [],
                                                          r = 0,
                                                          i = !1;
                                                      for (; t.length; )
                                                          (function (t) {
                                                              return -1 !== [32, 13, 10, 9, 45].indexOf(t);
                                                          })(t[r]) === i
                                                              ? ((e = t.splice(0, r)).length && n.push(R.ucs2.encode(e)), (i = !i), (r = 0))
                                                              : r++,
                                                              r >= t.length && (e = t.splice(0, r)).length && n.push(R.ucs2.encode(e));
                                                      return n;
                                                  })(e)
                                                : e.map(function (t) {
                                                      return R.ucs2.encode([t]);
                                                  });
                                        n || (t.parent.node.style.fontVariantLigatures = "none");
                                        var i = t.parent.fontWeight(),
                                            o = t.parent.css("fontSize"),
                                            a = t.parent.css("fontFamily"),
                                            s = t.parent.parseTextShadows();
                                        this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), i, o, a),
                                            s.length ? this.renderer.fontShadow(s[0].color, s[0].offsetX, s[0].offsetY, s[0].blur) : this.renderer.clearShadow(),
                                            this.renderer.clip(
                                                t.parent.clip,
                                                function () {
                                                    r.map(this.parseTextBounds(t), this).forEach(function (e, n) {
                                                        e && (this.renderer.text(r[n], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(a, o)));
                                                    }, this);
                                                },
                                                this,
                                                t.parent
                                            );
                                    }),
                                    (r.prototype.renderTextDecoration = function (t, e, n) {
                                        switch (t.css("textDecoration").split(" ")[0]) {
                                            case "underline":
                                                this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                                                break;
                                            case "overline":
                                                this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                                                break;
                                            case "line-through":
                                                this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"));
                                        }
                                    });
                                var V = {
                                    inset: [
                                        ["darken", 0.6],
                                        ["darken", 0.1],
                                        ["darken", 0.1],
                                        ["darken", 0.6],
                                    ],
                                };
                                (r.prototype.parseBorders = function (t) {
                                    var e = t.parseBounds(),
                                        n = (function (t) {
                                            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (e) {
                                                var n,
                                                    r = (n = t.css("border" + e + "Radius")).split(" ");
                                                return r.length <= 1 && (r[1] = r[0]), r.map(A);
                                            });
                                        })(t),
                                        r = ["Top", "Right", "Bottom", "Left"].map(function (e, n) {
                                            var r = t.css("border" + e + "Style"),
                                                i = t.color("border" + e + "Color");
                                            "inset" === r && i.isBlack() && (i = new N([255, 255, 255, i.a]));
                                            var o = V[r] ? V[r][n] : null;
                                            return { width: t.cssInt("border" + e + "Width"), color: o ? i[o[0]](o[1]) : i, style: r, pathArgs: null, args: null };
                                        }),
                                        i = l(e, n, r);
                                    return { clip: this.parseBackgroundClip(t, i, r, n, e), borders: s(r, e, i, n) };
                                }),
                                    (r.prototype.parseBackgroundClip = function (t, e, n, r, i) {
                                        var o = [];
                                        switch (t.css("backgroundClip")) {
                                            case "content-box":
                                            case "padding-box":
                                                f(o, r[0], r[1], e.topLeftInner, e.topRightInner, i.left + n[3].width, i.top + n[0].width),
                                                    f(o, r[1], r[2], e.topRightInner, e.bottomRightInner, i.left + i.width - n[1].width, i.top + n[0].width),
                                                    f(o, r[2], r[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - n[1].width, i.top + i.height - n[2].width),
                                                    f(o, r[3], r[0], e.bottomLeftInner, e.topLeftInner, i.left + n[3].width, i.top + i.height - n[2].width);
                                                break;
                                            default:
                                                f(o, r[0], r[1], e.topLeftOuter, e.topRightOuter, i.left, i.top),
                                                    f(o, r[1], r[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top),
                                                    f(o, r[2], r[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height),
                                                    f(o, r[3], r[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height);
                                        }
                                        return o;
                                    }),
                                    (e.exports = r);
                            },
                            { "./color": 3, "./fontmetrics": 7, "./log": 13, "./nodecontainer": 14, "./pseudoelementcontainer": 18, "./stackingcontext": 21, "./textcontainer": 25, "./utils": 26, punycode: 1 },
                        ],
                        16: [
                            function (t, e, n) {
                                function r(t, e, n) {
                                    var r = "withCredentials" in new XMLHttpRequest();
                                    if (!e) return Promise.reject("No proxy configured");
                                    var s = o(r),
                                        l = a(e, t, s);
                                    return r
                                        ? c(l)
                                        : i(n, l, s).then(function (t) {
                                              return d(t.content);
                                          });
                                }
                                function i(t, e, n) {
                                    return new Promise(function (r, i) {
                                        var o = t.createElement("script"),
                                            a = function () {
                                                delete window.html2canvas.proxy[n], t.body.removeChild(o);
                                            };
                                        (window.html2canvas.proxy[n] = function (t) {
                                            a(), r(t);
                                        }),
                                            (o.src = e),
                                            (o.onerror = function (t) {
                                                a(), i(t);
                                            }),
                                            t.body.appendChild(o);
                                    });
                                }
                                function o(t) {
                                    return t ? "" : "html2canvas_" + Date.now() + "_" + ++f + "_" + Math.round(1e5 * Math.random());
                                }
                                function a(t, e, n) {
                                    return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n : "");
                                }
                                function s(t) {
                                    return function (e) {
                                        var n,
                                            r = new DOMParser();
                                        try {
                                            n = r.parseFromString(e, "text/html");
                                        } catch (t) {
                                            h("DOMParser not supported, falling back to createHTMLDocument"), (n = document.implementation.createHTMLDocument(""));
                                            try {
                                                n.open(), n.write(e), n.close();
                                            } catch (t) {
                                                h("createHTMLDocument write not supported, falling back to document.body.innerHTML"), (n.body.innerHTML = e);
                                            }
                                        }
                                        var i = n.querySelector("base");
                                        if (!i || !i.href.host) {
                                            var o = n.createElement("base");
                                            (o.href = t), n.head.insertBefore(o, n.head.firstChild);
                                        }
                                        return n;
                                    };
                                }
                                var c = t("./xhr"),
                                    l = t("./utils"),
                                    h = t("./log"),
                                    u = t("./clone"),
                                    d = l.decode64,
                                    f = 0;
                                (n.Proxy = r),
                                    (n.ProxyURL = function (t, e, n) {
                                        var r = "crossOrigin" in new Image(),
                                            s = o(r),
                                            c = a(e, t, s);
                                        return r
                                            ? Promise.resolve(c)
                                            : i(n, c, s).then(function (t) {
                                                  return "data:" + t.type + ";base64," + t.content;
                                              });
                                    }),
                                    (n.loadUrlDocument = function (t, e, n, i, o, a) {
                                        return new r(t, e, window.document).then(s(t)).then(function (t) {
                                            return u(t, n, i, o, a, 0, 0);
                                        });
                                    });
                            },
                            { "./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28 },
                        ],
                        17: [
                            function (t, e, n) {
                                var r = t("./proxy").ProxyURL;
                                e.exports = function (t, e) {
                                    var n = document.createElement("a");
                                    (n.href = t), (t = n.href), (this.src = t), (this.image = new Image());
                                    var i = this;
                                    this.promise = new Promise(function (n, o) {
                                        (i.image.crossOrigin = "Anonymous"),
                                            (i.image.onload = n),
                                            (i.image.onerror = o),
                                            new r(t, e, document)
                                                .then(function (t) {
                                                    i.image.src = t;
                                                })
                                                .catch(o);
                                    });
                                };
                            },
                            { "./proxy": 16 },
                        ],
                        18: [
                            function (t, e, n) {
                                function r(t, e, n) {
                                    i.call(this, t, e), (this.isPseudoElement = !0), (this.before = ":before" === n);
                                }
                                var i = t("./nodecontainer");
                                (r.prototype.cloneTo = function (t) {
                                    r.prototype.cloneTo.call(this, t), (t.isPseudoElement = !0), (t.before = this.before);
                                }),
                                    ((r.prototype = Object.create(i.prototype)).appendToDOM = function () {
                                        this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), (this.parent.node.className += " " + this.getHideClass());
                                    }),
                                    (r.prototype.cleanDOM = function () {
                                        this.node.parentNode.removeChild(this.node), (this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), ""));
                                    }),
                                    (r.prototype.getHideClass = function () {
                                        return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
                                    }),
                                    (r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before"),
                                    (r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after"),
                                    (e.exports = r);
                            },
                            { "./nodecontainer": 14 },
                        ],
                        19: [
                            function (t, e, n) {
                                function r(t, e, n, r, i) {
                                    (this.width = t), (this.height = e), (this.images = n), (this.options = r), (this.document = i);
                                }
                                var i = t("./log");
                                (r.prototype.renderImage = function (t, e, n, r) {
                                    var i = t.cssInt("paddingLeft"),
                                        o = t.cssInt("paddingTop"),
                                        a = t.cssInt("paddingRight"),
                                        s = t.cssInt("paddingBottom"),
                                        c = n.borders,
                                        l = e.width - (c[1].width + c[3].width + i + a),
                                        h = e.height - (c[0].width + c[2].width + o + s);
                                    this.drawImage(r, 0, 0, r.image.width || l, r.image.height || h, e.left + i + c[3].width, e.top + o + c[0].width, l, h);
                                }),
                                    (r.prototype.renderBackground = function (t, e, n) {
                                        e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, n));
                                    }),
                                    (r.prototype.renderBackgroundColor = function (t, e) {
                                        var n = t.color("backgroundColor");
                                        n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n);
                                    }),
                                    (r.prototype.renderShadows = function (t, e) {
                                        var n = t.css("boxShadow");
                                        if ("none" !== n) {
                                            var r = n.split(/,(?![^(]*\))/);
                                            this.shadow(e, r);
                                        }
                                    }),
                                    (r.prototype.renderBorders = function (t) {
                                        t.forEach(this.renderBorder, this);
                                    }),
                                    (r.prototype.renderBorder = function (t) {
                                        if (!t.color.isTransparent() && null !== t.args)
                                            if ("dashed" === t.style || "dotted" === t.style) {
                                                var e = "dashed" === t.style ? 3 : t.width;
                                                this.ctx.setLineDash([e]), this.path(t.pathArgs), (this.ctx.strokeStyle = t.color), (this.ctx.lineWidth = t.width), this.ctx.stroke();
                                            } else this.drawShape(t.args, t.color);
                                    }),
                                    (r.prototype.renderBackgroundImage = function (t, e, n) {
                                        t.parseBackgroundImages()
                                            .reverse()
                                            .forEach(function (r, o, a) {
                                                switch (r.method) {
                                                    case "url":
                                                        var s = this.images.get(r.args[0]);
                                                        s ? this.renderBackgroundRepeating(t, e, s, a.length - (o + 1), n) : i("Error loading background-image", r.args[0]);
                                                        break;
                                                    case "linear-gradient":
                                                    case "gradient":
                                                        var c = this.images.get(r.value);
                                                        c ? this.renderBackgroundGradient(c, e, n) : i("Error loading background-image", r.args[0]);
                                                        break;
                                                    case "none":
                                                        break;
                                                    default:
                                                        i("Unknown background-image type", r.args[0]);
                                                }
                                            }, this);
                                    }),
                                    (r.prototype.renderBackgroundRepeating = function (t, e, n, r, i) {
                                        var o = t.parseBackgroundSize(e, n.image, r),
                                            a = t.parseBackgroundPosition(e, n.image, r, o);
                                        switch (t.parseBackgroundRepeat(r)) {
                                            case "repeat-x":
                                            case "repeat no-repeat":
                                                this.backgroundRepeatShape(n, a, o, e, e.left + i[3], e.top + a.top + i[0], 99999, o.height, i);
                                                break;
                                            case "repeat-y":
                                            case "no-repeat repeat":
                                                this.backgroundRepeatShape(n, a, o, e, e.left + a.left + i[3], e.top + i[0], o.width, 99999, i);
                                                break;
                                            case "no-repeat":
                                                this.backgroundRepeatShape(n, a, o, e, e.left + a.left + i[3], e.top + a.top + i[0], o.width, o.height, i);
                                                break;
                                            default:
                                                this.renderBackgroundRepeat(n, a, o, { top: e.top, left: e.left }, i[3], i[0]);
                                        }
                                    }),
                                    (e.exports = r);
                            },
                            { "./log": 13 },
                        ],
                        20: [
                            function (t, e, n) {
                                function r(t, e) {
                                    o.apply(this, arguments),
                                        (this.canvas = this.options.canvas || this.document.createElement("canvas")),
                                        (this.ctx = this.canvas.getContext("2d")),
                                        this.options.canvas ||
                                            (this.options.dpi && (this.options.scale = this.options.dpi / 96),
                                            this.options.scale
                                                ? ((this.canvas.style.width = t + "px"),
                                                  (this.canvas.style.height = e + "px"),
                                                  (this.canvas.width = Math.floor(t * this.options.scale)),
                                                  (this.canvas.height = Math.floor(e * this.options.scale)),
                                                  this.ctx.scale(this.options.scale, this.options.scale))
                                                : ((this.canvas.width = t), (this.canvas.height = e))),
                                        (this.taintCtx = this.document.createElement("canvas").getContext("2d")),
                                        (this.ctx.textBaseline = "bottom"),
                                        (this.variables = {}),
                                        s("Initialized CanvasRenderer with size", t, "x", e);
                                }
                                function i(t) {
                                    return t.length > 0;
                                }
                                var o = t("../renderer"),
                                    a = t("../lineargradientcontainer"),
                                    s = t("../log");
                                ((r.prototype = Object.create(o.prototype)).setFillStyle = function (t) {
                                    return (this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t), this.ctx;
                                }),
                                    (r.prototype.rectangle = function (t, e, n, r, i) {
                                        this.setFillStyle(i).fillRect(t, e, n, r);
                                    }),
                                    (r.prototype.circle = function (t, e, n, r) {
                                        this.setFillStyle(r), this.ctx.beginPath(), this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill();
                                    }),
                                    (r.prototype.circleStroke = function (t, e, n, r, i, o) {
                                        this.circle(t, e, n, r), (this.ctx.strokeStyle = o.toString()), this.ctx.stroke();
                                    }),
                                    (r.prototype.shadow = function (t, e) {
                                        var n = this.setFillStyle("white");
                                        n.save(),
                                            this.shape(t),
                                            e.forEach(function (t) {
                                                var e = (function (t) {
                                                    var e = { color: /^(#|rgb|hsl|(?!(inset|initial|inherit))\D+)/i, inset: /^inset/i, px: /px$/i },
                                                        n = ["x", "y", "blur", "spread"],
                                                        r = t.split(/ (?![^(]*\))/),
                                                        i = {};
                                                    for (var o in e) (i[o] = r.filter(e[o].test.bind(e[o]))), (i[o] = 0 === i[o].length ? null : 1 === i[o].length ? i[o][0] : i[o]);
                                                    for (var a = 0; a < i.px.length; a++) i[n[a]] = parseInt(i.px[a]);
                                                    return i;
                                                })(t);
                                                e.inset || ((n.shadowOffsetX = e.x), (n.shadowOffsetY = e.y), (n.shadowColor = e.color), (n.shadowBlur = e.blur), n.fill());
                                            }, this),
                                            n.restore();
                                    }),
                                    (r.prototype.drawShape = function (t, e) {
                                        this.shape(t), this.setFillStyle(e).fill();
                                    }),
                                    (r.prototype.taints = function (t) {
                                        if (null === t.tainted) {
                                            this.taintCtx.drawImage(t.image, 0, 0);
                                            try {
                                                this.taintCtx.getImageData(0, 0, 1, 1), (t.tainted = !1);
                                            } catch (e) {
                                                (this.taintCtx = document.createElement("canvas").getContext("2d")), (t.tainted = !0);
                                            }
                                        }
                                        return t.tainted;
                                    }),
                                    (r.prototype.drawImage = function (t, e, n, r, i, o, a, s, c) {
                                        (this.taints(t) && !this.options.allowTaint) || this.ctx.drawImage(t.image, e, n, r, i, o, a, s, c);
                                    }),
                                    (r.prototype.clip = function (t, e, n, r) {
                                        this.ctx.save(),
                                            r && r.hasTransform()
                                                ? (this.setTransform(r.inverseTransform()),
                                                  t.filter(i).forEach(function (t) {
                                                      this.shape(t).clip();
                                                  }, this),
                                                  this.setTransform(r.parseTransform()))
                                                : t.filter(i).forEach(function (t) {
                                                      this.shape(t).clip();
                                                  }, this),
                                            e.call(n),
                                            this.ctx.restore();
                                    }),
                                    (r.prototype.mask = function (t, e, n, r) {
                                        var i = t[t.length - 1];
                                        if (i && i.length) {
                                            var o = [["rect", this.canvas.width, 0, -this.canvas.width, this.canvas.height]].concat(i).concat([i[0]]);
                                            t = t.slice(0, -1).concat([o]);
                                        }
                                        this.clip(t, e, n, r);
                                    }),
                                    (r.prototype.shape = function (t) {
                                        return (
                                            this.ctx.beginPath(),
                                            t.forEach(function (t, e) {
                                                "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1));
                                            }, this),
                                            this.ctx.closePath(),
                                            this.ctx
                                        );
                                    }),
                                    (r.prototype.path = function (t) {
                                        return (
                                            this.ctx.beginPath(),
                                            t.forEach(function (t, e) {
                                                "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1));
                                            }, this),
                                            this.ctx
                                        );
                                    }),
                                    (r.prototype.font = function (t, e, n, r, i, o) {
                                        (n = /^(normal|small-caps)$/i.test(n) ? n : ""), (this.setFillStyle(t).font = [e, n, r, i, o].join(" ").split(",")[0]);
                                    }),
                                    (r.prototype.fontShadow = function (t, e, n, r) {
                                        this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", r);
                                    }),
                                    (r.prototype.clearShadow = function () {
                                        this.setVariable("shadowColor", "rgba(0,0,0,0)");
                                    }),
                                    (r.prototype.setOpacity = function (t) {
                                        this.ctx.globalAlpha = t;
                                    }),
                                    (r.prototype.setTransform = function (t) {
                                        this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1]);
                                    }),
                                    (r.prototype.setVariable = function (t, e) {
                                        return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this;
                                    }),
                                    (r.prototype.text = function (t, e, n) {
                                        this.ctx.fillText(t, e, n);
                                    }),
                                    (r.prototype.backgroundRepeatShape = function (t, e, n, r, i, o, a, s, c) {
                                        var l = [
                                            ["line", Math.round(i), Math.round(o)],
                                            ["line", Math.round(i + a), Math.round(o)],
                                            ["line", Math.round(i + a), Math.round(s + o)],
                                            ["line", Math.round(i), Math.round(s + o)],
                                        ];
                                        this.clip(
                                            [l],
                                            function () {
                                                this.renderBackgroundRepeat(t, e, n, r, c[3], c[0]);
                                            },
                                            this
                                        );
                                    }),
                                    (r.prototype.renderBackgroundRepeat = function (t, e, n, r, i, o) {
                                        var a = Math.round(r.left + e.left + i),
                                            s = Math.round(r.top + e.top + o);
                                        this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")), this.ctx.translate(a, s), this.ctx.fill(), this.ctx.translate(-a, -s);
                                    }),
                                    (r.prototype.renderBackgroundGradient = function (t, e) {
                                        if (t instanceof a) {
                                            var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                                            t.colorStops.forEach(function (t) {
                                                n.addColorStop(t.stop, t.color.toString());
                                            }),
                                                this.rectangle(e.left, e.top, e.width, e.height, n);
                                        }
                                    }),
                                    (r.prototype.resizeImage = function (t, e) {
                                        var n = t.image;
                                        if (n.width === e.width && n.height === e.height) return n;
                                        var r = document.createElement("canvas");
                                        return (r.width = e.width), (r.height = e.height), r.getContext("2d").drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height), r;
                                    }),
                                    (e.exports = r);
                            },
                            { "../lineargradientcontainer": 12, "../log": 13, "../renderer": 19 },
                        ],
                        21: [
                            function (t, e, n) {
                                function r(t, e, n, r) {
                                    i.call(this, n, r), (this.ownStacking = t), (this.contexts = []), (this.children = []), (this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e);
                                }
                                var i = t("./nodecontainer");
                                ((r.prototype = Object.create(i.prototype)).getParentStack = function (t) {
                                    var e = this.parent ? this.parent.stack : null;
                                    return e ? (e.ownStacking ? e : e.getParentStack(t)) : t.stack;
                                }),
                                    (e.exports = r);
                            },
                            { "./nodecontainer": 14 },
                        ],
                        22: [
                            function (t, e, n) {
                                function r(t) {
                                    (this.rangeBounds = this.testRangeBounds(t)), (this.cors = this.testCORS()), (this.svg = this.testSVG());
                                }
                                (r.prototype.testRangeBounds = function (t) {
                                    var e,
                                        n,
                                        r,
                                        i = !1;
                                    return (
                                        t.createRange &&
                                            (e = t.createRange()).getBoundingClientRect &&
                                            (((n = t.createElement("boundtest")).style.height = "123px"),
                                            (n.style.display = "block"),
                                            t.body.appendChild(n),
                                            e.selectNode(n),
                                            (r = e.getBoundingClientRect()),
                                            123 === r.height && (i = !0),
                                            t.body.removeChild(n)),
                                        i
                                    );
                                }),
                                    (r.prototype.testCORS = function () {
                                        return void 0 !== new Image().crossOrigin;
                                    }),
                                    (r.prototype.testSVG = function () {
                                        var t = new Image(),
                                            e = document.createElement("canvas"),
                                            n = e.getContext("2d");
                                        t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                                        try {
                                            n.drawImage(t, 0, 0), e.toDataURL();
                                        } catch (t) {
                                            return !1;
                                        }
                                        return !0;
                                    }),
                                    (e.exports = r);
                            },
                            {},
                        ],
                        23: [
                            function (t, e, n) {
                                function r(t) {
                                    (this.src = t), (this.image = null);
                                    var e = this;
                                    this.promise = this.hasFabric()
                                        .then(function () {
                                            return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : i(t);
                                        })
                                        .then(function (t) {
                                            return new Promise(function (n) {
                                                window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n));
                                            });
                                        });
                                }
                                var i = t("./xhr"),
                                    o = t("./utils").decode64;
                                (r.prototype.hasFabric = function () {
                                    return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"));
                                }),
                                    (r.prototype.inlineFormatting = function (t) {
                                        return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t);
                                    }),
                                    (r.prototype.removeContentType = function (t) {
                                        return t.replace(/^data:image\/svg\+xml(;base64)?,/, "");
                                    }),
                                    (r.prototype.isInline = function (t) {
                                        return /^data:image\/svg\+xml/i.test(t);
                                    }),
                                    (r.prototype.createCanvas = function (t) {
                                        var e = this;
                                        return function (n, r) {
                                            var i = new window.html2canvas.svg.fabric.StaticCanvas("c");
                                            (e.image = i.lowerCanvasEl), i.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, r)).renderAll(), t(i.lowerCanvasEl);
                                        };
                                    }),
                                    (r.prototype.decode64 = function (t) {
                                        return "function" == typeof window.atob ? window.atob(t) : o(t);
                                    }),
                                    (e.exports = r);
                            },
                            { "./utils": 26, "./xhr": 28 },
                        ],
                        24: [
                            function (t, e, n) {
                                function r(t, e) {
                                    (this.src = t), (this.image = null);
                                    var n = this;
                                    this.promise = e
                                        ? new Promise(function (e, r) {
                                              (n.image = new Image()), (n.image.onload = e), (n.image.onerror = r), (n.image.src = "data:image/svg+xml," + new XMLSerializer().serializeToString(t)), !0 === n.image.complete && e(n.image);
                                          })
                                        : this.hasFabric().then(function () {
                                              return new Promise(function (e) {
                                                  window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e));
                                              });
                                          });
                                }
                                var i = t("./svgcontainer");
                                (r.prototype = Object.create(i.prototype)), (e.exports = r);
                            },
                            { "./svgcontainer": 23 },
                        ],
                        25: [
                            function (t, e, n) {
                                function r(t, e) {
                                    o.call(this, t, e);
                                }
                                function i(t, e, n) {
                                    if (t.length > 0) return e + n.toUpperCase();
                                }
                                var o = t("./nodecontainer");
                                ((r.prototype = Object.create(o.prototype)).applyTextTransform = function () {
                                    this.node.data = this.transform(this.parent.css("textTransform"));
                                }),
                                    (r.prototype.transform = function (t) {
                                        var e = this.node.data;
                                        switch (t) {
                                            case "lowercase":
                                                return e.toLowerCase();
                                            case "capitalize":
                                                return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, i);
                                            case "uppercase":
                                                return e.toUpperCase();
                                            default:
                                                return e;
                                        }
                                    }),
                                    (e.exports = r);
                            },
                            { "./nodecontainer": 14 },
                        ],
                        26: [
                            function (t, e, n) {
                                (n.smallImage = function () {
                                    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                                }),
                                    (n.bind = function (t, e) {
                                        return function () {
                                            return t.apply(e, arguments);
                                        };
                                    }),
                                    (n.decode64 = function (t) {
                                        var e,
                                            n,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            c,
                                            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                            h = t.length,
                                            u = "";
                                        for (e = 0; e < h; e += 4)
                                            (n = l.indexOf(t[e])),
                                                (r = l.indexOf(t[e + 1])),
                                                (i = l.indexOf(t[e + 2])),
                                                (o = l.indexOf(t[e + 3])),
                                                (a = (n << 2) | (r >> 4)),
                                                (s = ((15 & r) << 4) | (i >> 2)),
                                                (c = ((3 & i) << 6) | o),
                                                (u += 64 === i ? String.fromCharCode(a) : 64 === o || -1 === o ? String.fromCharCode(a, s) : String.fromCharCode(a, s, c));
                                        return u;
                                    }),
                                    (n.getBounds = function (t) {
                                        if (t.getBoundingClientRect) {
                                            var e = t.getBoundingClientRect(),
                                                n = null == t.offsetWidth ? e.width : t.offsetWidth;
                                            return { top: e.top, bottom: e.bottom || e.top + e.height, right: e.left + n, left: e.left, width: n, height: null == t.offsetHeight ? e.height : t.offsetHeight };
                                        }
                                        return {};
                                    }),
                                    (n.offsetBounds = function (t) {
                                        var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : { top: 0, left: 0 };
                                        return {
                                            top: t.offsetTop + e.top,
                                            bottom: t.offsetTop + t.offsetHeight + e.top,
                                            right: t.offsetLeft + e.left + t.offsetWidth,
                                            left: t.offsetLeft + e.left,
                                            width: t.offsetWidth,
                                            height: t.offsetHeight,
                                        };
                                    }),
                                    (n.parseBackgrounds = function (t) {
                                        var e,
                                            n,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            c = [],
                                            l = 0,
                                            h = 0,
                                            u = function () {
                                                e &&
                                                    ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)),
                                                    n && s.push(n),
                                                    "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && ((r = e.substr(0, i)), (e = e.substr(i))),
                                                    c.push({ prefix: r, method: e.toLowerCase(), value: o, args: s, image: null })),
                                                    (s = []),
                                                    (e = r = n = o = "");
                                            };
                                        return (
                                            (s = []),
                                            (e = r = n = o = ""),
                                            t.split("").forEach(function (t) {
                                                if (!(0 === l && " \r\n\t".indexOf(t) > -1)) {
                                                    switch (t) {
                                                        case '"':
                                                            a ? a === t && (a = null) : (a = t);
                                                            break;
                                                        case "(":
                                                            if (a) break;
                                                            if (0 === l) return (l = 1), void (o += t);
                                                            h++;
                                                            break;
                                                        case ")":
                                                            if (a) break;
                                                            if (1 === l) {
                                                                if (0 === h) return (l = 0), (o += t), void u();
                                                                h--;
                                                            }
                                                            break;
                                                        case ",":
                                                            if (a) break;
                                                            if (0 === l) return void u();
                                                            if (1 === l && 0 === h && !e.match(/^url$/i)) return s.push(n), (n = ""), void (o += t);
                                                    }
                                                    (o += t), 0 === l ? (e += t) : (n += t);
                                                }
                                            }),
                                            u(),
                                            c
                                        );
                                    });
                            },
                            {},
                        ],
                        27: [
                            function (t, e, n) {
                                function r(t) {
                                    i.apply(this, arguments), (this.type = "linear" === t.args[0] ? i.TYPES.LINEAR : i.TYPES.RADIAL);
                                }
                                var i = t("./gradientcontainer");
                                (r.prototype = Object.create(i.prototype)), (e.exports = r);
                            },
                            { "./gradientcontainer": 9 },
                        ],
                        28: [
                            function (t, e, n) {
                                e.exports = function (t) {
                                    return new Promise(function (e, n) {
                                        var r = new XMLHttpRequest();
                                        r.open("GET", t),
                                            (r.onload = function () {
                                                200 === r.status ? e(r.responseText) : n(new Error(r.statusText));
                                            }),
                                            (r.onerror = function () {
                                                n(new Error("Network Error"));
                                            }),
                                            r.send();
                                    });
                                };
                            },
                            {},
                        ],
                    },
                    {},
                    [4]
                )(4);
            })),
        o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  };
    r.getPageSize = function (t, e, n) {
        if ("object" === (void 0 === t ? "undefined" : o(t))) {
            var r = t;
            (t = r.orientation), (e = r.unit || e), (n = r.format || n);
        }
        (e = e || "mm"), (n = n || "a4"), (t = ("" + (t || "P")).toLowerCase());
        var i = ("" + n).toLowerCase(),
            a = {
                a0: [2383.94, 3370.39],
                a1: [1683.78, 2383.94],
                a2: [1190.55, 1683.78],
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [419.53, 595.28],
                a6: [297.64, 419.53],
                a7: [209.76, 297.64],
                a8: [147.4, 209.76],
                a9: [104.88, 147.4],
                a10: [73.7, 104.88],
                b0: [2834.65, 4008.19],
                b1: [2004.09, 2834.65],
                b2: [1417.32, 2004.09],
                b3: [1000.63, 1417.32],
                b4: [708.66, 1000.63],
                b5: [498.9, 708.66],
                b6: [354.33, 498.9],
                b7: [249.45, 354.33],
                b8: [175.75, 249.45],
                b9: [124.72, 175.75],
                b10: [87.87, 124.72],
                c0: [2599.37, 3676.54],
                c1: [1836.85, 2599.37],
                c2: [1298.27, 1836.85],
                c3: [918.43, 1298.27],
                c4: [649.13, 918.43],
                c5: [459.21, 649.13],
                c6: [323.15, 459.21],
                c7: [229.61, 323.15],
                c8: [161.57, 229.61],
                c9: [113.39, 161.57],
                c10: [79.37, 113.39],
                dl: [311.81, 623.62],
                letter: [612, 792],
                "government-letter": [576, 756],
                legal: [612, 1008],
                "junior-legal": [576, 360],
                ledger: [1224, 792],
                tabloid: [792, 1224],
                "credit-card": [153, 243],
            };
        switch (e) {
            case "pt":
                s = 1;
                break;
            case "mm":
                s = 72 / 25.4;
                break;
            case "cm":
                s = 72 / 2.54;
                break;
            case "in":
                s = 72;
                break;
            case "px":
                s = 0.75;
                break;
            case "pc":
            case "em":
                s = 12;
                break;
            case "ex":
                var s = 6;
                break;
            default:
                throw "Invalid unit: " + e;
        }
        if (a.hasOwnProperty(i))
            var c = a[i][1] / s,
                l = a[i][0] / s;
        else
            try {
                var c = n[1],
                    l = n[0];
            } catch (t) {
                throw new Error("Invalid format: " + n);
            }
        if ("p" === t || "portrait" === t) {
            if (((t = "p"), l > c)) {
                h = l;
                (l = c), (c = h);
            }
        } else {
            if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
            if (((t = "l"), c > l)) {
                var h = l;
                (l = c), (c = h);
            }
        }
        return { width: l, height: c, unit: e, k: s };
    };
    var a = function (t) {
            return void 0 === t
                ? "undefined"
                : "string" == typeof t || t instanceof String
                ? "string"
                : "number" == typeof t || t instanceof Number
                ? "number"
                : t && t.constructor === Array
                ? "array"
                : t && 1 === t.nodeType
                ? "element"
                : "object" === (void 0 === t ? "undefined" : o(t))
                ? "object"
                : "unknown";
        },
        s = function (t, e) {
            var n = document.createElement(t);
            if ((e.className && (n.className = e.className), e.innerHTML)) {
                n.innerHTML = e.innerHTML;
                for (var r = n.getElementsByTagName("script"), i = r.length; i-- > 0; null) r[i].parentNode.removeChild(r[i]);
            }
            for (var o in e.style) n.style[o] = e.style[o];
            return n;
        },
        c = function (t, e) {
            var n = {};
            for (var r in t) n[r] = (72 * t[r]) / 96 / e;
            return n;
        },
        l = function t(e, n) {
            n = "object" === a(n) ? n : {};
            var e = t.parseInput(e, n),
                o = r.getPageSize(n.jsPDF);
            (o.inner = { width: o.width - n.margin[1] - n.margin[3], height: o.height - n.margin[0] - n.margin[2] }), (o.inner.ratio = o.inner.height / o.inner.width);
            var s = t.makeContainer(e, o),
                l = s.parentElement;
            if (n.enableLinks) {
                n.links = [];
                var h = s.querySelectorAll("a"),
                    u = c(s.getBoundingClientRect(), o.k);
                Array.prototype.forEach.call(h, function (t) {
                    for (var e = t.getClientRects(), r = 0; r < e.length; r++) {
                        var i = c(e[r], o.k);
                        (i.left -= u.left), (i.top -= u.top), n.links.push({ el: t, clientRect: i });
                    }
                });
            }
            var d = n.html2canvas.onrendered || function () {};
            (n.html2canvas.onrendered = function (e) {
                d(e), document.body.removeChild(l), t.makePDF(e, o, n);
            }),
                i(s, n.html2canvas);
        };
    return (
        (l.parseInput = function (t, e) {
            switch (
                ((e.jsPDF = e.jsPDF || {}),
                (e.html2canvas = e.html2canvas || {}),
                (e.filename = e.filename && "string" === a(e.filename) ? e.filename : "file.pdf"),
                (e.enableLinks = !e.hasOwnProperty("enableLinks") || e.enableLinks),
                (e.image = e.image || {}),
                (e.image.type = e.image.type || "jpeg"),
                (e.image.quality = e.image.quality || 0.95),
                a(e.margin))
            ) {
                case "undefined":
                    e.margin = 0;
                case "number":
                    e.margin = [e.margin, e.margin, e.margin, e.margin];
                    break;
                case "array":
                    if ((2 === e.margin.length && (e.margin = [e.margin[0], e.margin[1], e.margin[0], e.margin[1]]), 4 === e.margin.length)) break;
                default:
                    throw "Invalid margin array.";
            }
            if (!t) throw "Missing source element or string.";
            if ("string" === a(t)) t = s("div", { innerHTML: t });
            else {
                if ("element" !== a(t)) throw "Invalid source - please specify an HTML Element or string.";
                t = (function t(e, n) {
                    for (var r = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling) (!0 !== n && 1 === i.nodeType && "SCRIPT" === i.nodeName) || r.appendChild(t(i, n));
                    return (
                        1 === e.nodeType &&
                            ("CANVAS" === e.nodeName ? ((r.width = e.width), (r.height = e.height), r.getContext("2d").drawImage(e, 0, 0)) : ("TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName) || (r.value = e.value),
                            r.addEventListener(
                                "load",
                                function () {
                                    (r.scrollTop = e.scrollTop), (r.scrollLeft = e.scrollLeft);
                                },
                                !0
                            )),
                        r
                    );
                })(t, e.html2canvas.javascriptEnabled);
            }
            return t;
        }),
        (l.makeContainer = function (t, e) {
            var n = { position: "fixed", overflow: "hidden", zIndex: 1e3, left: 0, right: 0, bottom: 0, top: 0, backgroundColor: "rgba(0,0,0,0.8)" },
                r = { position: "absolute", width: e.inner.width + e.unit, left: 0, right: 0, top: 0, height: "auto", margin: "auto", backgroundColor: "white" };
            n.opacity = 0;
            var i = s("div", { className: "html2pdf__overlay", style: n }),
                o = s("div", { className: "html2pdf__container", style: r });
            o.appendChild(t), i.appendChild(o), document.body.appendChild(i);
            var a = t.querySelectorAll(".html2pdf__page-break"),
                c = ((e.inner.height * e.k) / 72) * 96;
            return (
                Array.prototype.forEach.call(
                    a,
                    function (t) {
                        t.style.display = "block";
                        var e = t.getBoundingClientRect();
                        t.style.height = c - (e.top % c) + "px";
                    },
                    this
                ),
                o
            );
        }),
        (l.makePDF = function (t, e, n) {
            t.getContext("2d");
            var i = t.height,
                o = Math.floor(t.width * e.inner.ratio),
                a = Math.ceil(i / o),
                s = document.createElement("canvas"),
                c = s.getContext("2d"),
                l = e.inner.height;
            (s.width = t.width), (s.height = o);
            for (var h = new r(n.jsPDF), u = 0; u < a; u++) {
                u === a - 1 && ((s.height = i % o), (l = (s.height * e.inner.width) / s.width));
                var d = s.width,
                    f = s.height;
                (c.fillStyle = "white"), c.fillRect(0, 0, d, f), c.drawImage(t, 0, u * o, d, f, 0, 0, d, f), u && h.addPage();
                var p = s.toDataURL("image/" + n.image.type, n.image.quality);
                if ((h.addImage(p, n.image.type, n.margin[1], n.margin[0], e.inner.width, l), n.enableLinks)) {
                    var g = u * e.inner.height;
                    n.links.forEach(function (t) {
                        if (t.clientRect.top > g && t.clientRect.top < g + e.inner.height) {
                            var r = n.margin[1] + t.clientRect.left,
                                i = n.margin[0] + t.clientRect.top - g;
                            h.link(r, i, t.clientRect.width, t.clientRect.height, { url: t.el.href });
                        }
                    });
                }
            }
            h.save(n.filename);
        }),
        l
    );
});
