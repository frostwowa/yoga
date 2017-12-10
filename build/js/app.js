var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// example of simple includes for js
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};function p(a, b) {
        b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }var q = "3.0.0",
        r = function r(a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function v(a, b) {
        return b.toUpperCase();
    };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
            return f.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this);
        }, pushStack: function pushStack(a) {
            var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
        }, each: function each(a) {
            return r.each(this, a);
        }, map: function map(a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(f.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === r.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }, isPlainObject: function isPlainObject(a) {
            var b, c;return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(a) {
            p(a);
        }, camelCase: function camelCase(a) {
            return a.replace(t, "ms-").replace(u, v);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b) {
            var c,
                d = 0;if (w(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break;
                }
            } else for (d in a) {
                if (b.call(a[d], d, a[d]) === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(s, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                e,
                f = 0,
                h = [];if (w(a)) for (d = a.length; d > f; f++) {
                e = b(a[f], f, c), null != e && h.push(e);
            } else for (f in a) {
                e = b(a[f], f, c), null != e && h.push(e);
            }return g.apply([], h);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, d, e;return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function e() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0;
        }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function I(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function aa(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function ca(a, b) {
            return b ? "\x00" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function da() {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0;
        }, { dir: "parentNode", next: "legend" });try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = { apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
                            o[h] = "#" + k + " " + sa(o[h]);
                        }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }return i(a.replace(P, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("fieldset");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = c.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return function (b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
            };
        }function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    g.unshift(c);
                }c = b;while (c = c.parentNode) {
                    h.unshift(c);
                }while (g[d] === h[d]) {
                    d++;
                }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;if (q) {
                            if (f) {
                                while (p) {
                                    m = b;while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];break;
                                    }
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            }return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return X.test(a.nodeName);
                }, input: function input(a) {
                    return W.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: pa(function () {
                    return [0];
                }), last: pa(function (a, b) {
                    return [b - 1];
                }), eq: pa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: pa(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: pa(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;return b.first ? function (b, c, e) {
                while (b = b[d]) {
                    if (1 === b.nodeType || g) return a(b, c, e);
                }
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];if (i) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
            };
        }function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                ga(a, b[d], c);
            }return c;
        }function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            }return g;
        }function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
                    }m.push(c);
                }
            }return ua(m);
        }function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = _f && [],
                    u = [],
                    v = j,
                    x = _f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);break;
                            }
                        }k && (w = y);
                    }c && ((l = !q && l) && r--, _f && t.push(l));
                }if (r += s, c && s !== r) {
                    o = 0;while (q = b[o++]) {
                        q(t, u, g, h);
                    }if (_f) {
                        if (r > 0) while (s--) {
                            t[s] || u[s] || (u[s] = E.call(i));
                        }u = wa(u);
                    }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = y, j = v), t;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, za(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;d.push(a);
            }
        }return d;
    },
        z = function z(a, b) {
        for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a);
        }return c;
    },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return r.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
        }return r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        });
    }r.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({ find: function find(a) {
            var b,
                c,
                d = this.length,
                e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; d > b; b++) {
                    if (r.contains(e[b], this)) return !0;
                }
            }));for (c = this.pushStack([]), b = 0; d > b; b++) {
                r.find(a, e[b], c);
            }return d > 1 ? r.uniqueSort(c) : c;
        }, filter: function filter(a) {
            return this.pushStack(D(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(D(this, a || [], !0));
        }, is: function is(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        } });var E,
        F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                }return this;
            }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
            var b = r(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) {
                    if (r.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);if (!A.test(a)) for (; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }r.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return y(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return y(a, "parentNode", c);
        }, next: function next(a) {
            return J(a, "nextSibling");
        }, prev: function prev(a) {
            return J(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return y(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return y(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return y(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return y(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return z((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return z(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || r.merge([], a.childNodes);
        } }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
        };
    });var K = /\S+/g;function L(a) {
        var b = {};return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function i() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();while (++h < f.length) {
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                }
            }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function add() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            }, remove: function remove() {
                return r.each(arguments, function (a, b) {
                    var c;while ((c = r.inArray(b, f, c)) > -1) {
                        f.splice(c, 1), h >= c && h--;
                    }
                }), this;
            }, has: function has(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            }, empty: function empty() {
                return f && (f = []), this;
            }, disable: function disable() {
                return e = g = [], f = c = "", this;
            }, disabled: function disabled() {
                return !f;
            }, lock: function lock() {
                return e = g = [], c || b || (f = c = ""), this;
            }, locked: function locked() {
                return !!e;
            }, fireWith: function fireWith(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            }, fire: function fire() {
                return j.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return j;
    };function M(a) {
        return a;
    }function N(a) {
        throw a;
    }function O(a, b, c) {
        var d;try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
        } catch (a) {
            c.call(void 0, a);
        }
    }r.extend({ Deferred: function Deferred(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = { state: function state() {
                    return d;
                }, always: function always() {
                    return f.done(arguments).fail(arguments), this;
                }, "catch": function _catch(a) {
                    return e.then(null, a);
                }, pipe: function pipe() {
                    var a = arguments;return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, then: function then(b, d, e) {
                    var f = 0;function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function j() {
                                var a, j;if (!(f > b)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? r.extend(a, e) : e;
                } },
                f = {};return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        }, when: function when(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function h(a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
                O(e[c], h(c), g.reject);
            }return g.promise();
        } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    };var Q = r.Deferred();r.fn.ready = function (a) {
        return Q.then(a), this;
    }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? r.readyWait++ : r.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
        } }), r.ready.then = Q.then;function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
    }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === r.type(c)) {
            e = !0;for (h in c) {
                S(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(r(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        T = function T(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function U() {
        this.expando = r.expando + U.uid++;
    }U.uid = 1, U.prototype = { cache: function cache(a) {
            var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
        }, set: function set(a, b, c) {
            var d,
                e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
                e[r.camelCase(d)] = b[d];
            }return e;
        }, get: function get(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        }, access: function access(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d = a[this.expando];if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
                        delete d[b[c]];
                    }
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        }, hasData: function hasData(a) {
            var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
        } };var V = new U(),
        W = new U(),
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;function Z(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c;
            } catch (e) {}W.set(a, b, c);
        } else c = void 0;return c;
    }r.extend({ hasData: function hasData(a) {
            return W.hasData(a) || V.hasData(a);
        }, data: function data(a, b, c) {
            return W.access(a, b, c);
        }, removeData: function removeData(a, b) {
            W.remove(a, b);
        }, _data: function _data(a, b, c) {
            return V.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            V.remove(a, b);
        } }), r.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    }V.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                W.set(this, a);
            }) : S(this, function (b) {
                var c;if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    W.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                W.remove(this, a);
            });
        } }), r.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function g() {
                r.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c]);
                }) });
        } }), r.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function ba(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ca = function ca(a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };function da(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }var ea = {};function fa(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
    }function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
            d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        }for (f = 0; g > f; f++) {
            null != e[f] && (a[f].style.display = e[f]);
        }return a;
    }r.fn.extend({ show: function show() {
            return ga(this, !0);
        }, hide: function hide() {
            return ga(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ba(this) ? r(this).show() : r(this).hide();
            });
        } });var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
        }
    }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++) {
            if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
                    g = g.lastChild;
                }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }l.textContent = "", n = 0;while (f = m[n++]) {
            if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
                k = 0;while (f = g[k++]) {
                    ja.test(f.type || "") && c.push(f);
                }
            }
        }return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
        return !0;
    }function ua() {
        return !1;
    }function va() {
        try {
            return d.activeElement;
        } catch (a) {}
    }function wa(a, b, c, d, e, f) {
        var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
            "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
                wa(a, h, c, d, b[h], f);
            }return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }r.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.get(a);if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) {
                        r.event.remove(a, n + b[j], c, d, !0);
                    }
                }r.isEmptyObject(i) && V.remove(a, "handle events");
            }
        }, dispatch: function dispatch(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
                i[c] = arguments[c];
            }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) {
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                    }d.length && g.push({ elem: i, handlers: d });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, addProp: function addProp(a, b) {
            Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0;
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0;
                }, set: function set(b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                } });
        }, fix: function fix(a) {
            return a[r.expando] ? a : new r.Event(a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return r.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } } }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
            var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), r.fn.extend({ on: function on(a, b, c, d) {
            return wa(this, a, b, c, d);
        }, one: function one(a, b, c, d) {
            return wa(this, a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
    }function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function Ea(a) {
        var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function Fa(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        r.event.add(b, e, j[e][c]);
                    }
                }
            }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
        }
    }function Ga(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }function Ha(a, b, c, d) {
        b = g.apply([], b);var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
            var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) {
                j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) {
                j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
            }
        }return a;
    }function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        }return a;
    }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
            return a.replace(xa, "<$1></$2>");
        }, clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) {
                Ga(f[d], g[d]);
            }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) {
                Fa(f[d], g[d]);
            } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events) for (d in b.events) {
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        }c[V.expando] = void 0;
                    }c[W.expando] && (c[W.expando] = void 0);
                }
            }
        } }), r.fn.extend({ detach: function detach(a) {
            return Ia(this, a, !0);
        }, remove: function remove(a) {
            return Ia(this, a);
        }, text: function text(a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        }, html: function html(a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = [];return Ha(this, arguments, function (b) {
                var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
            }, a);
        } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) {
                c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function La(b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
    };!function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
            }
        }var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
                return b(), c;
            }, boxSizingReliable: function boxSizingReliable() {
                return b(), e;
            }, pixelMarginRight: function pixelMarginRight() {
                return b(), f;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return b(), g;
            } }));
    }();function Ma(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function Na(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = { position: "absolute", visibility: "hidden", display: "block" },
        Qa = { letterSpacing: "0", fontWeight: "400" },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;function Ta(a) {
        if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;while (c--) {
            if (a = Ra[c] + b, a in Sa) return a;
        }
    }function Ua(a, b, c) {
        var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        }return g;
    }function Wa(a, b, c) {
        var d,
            e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
        }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
    }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        } }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = { get: function get(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
                    return Wa(a, b, d);
                }) : void 0;
            }, set: function set(a, c, d) {
                var e,
                    f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
            } };
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        r.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
    }), r.fn.extend({ css: function css(a, b) {
            return S(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (r.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) {
                        f[b[g]] = r.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        } });function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e);
    }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
        } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
                var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            }, set: function set(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, r.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
        Za,
        $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick());
    }function bb() {
        return a.setTimeout(function () {
            Ya = void 0;
        }), Ya = r.now();
    }function cb(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = aa[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function eb(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));for (d in b) {
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }n[d] = q && q[d] || r.style(a, d);
            }
        }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;for (d in n) {
                i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
                    p || ga([a]), V.remove(a, "fxshow");for (d in n) {
                        r.style(a, d, n[d]);
                    }
                })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
            }
        }
    }function fb(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function gb(a, b, c) {
        var d,
            e,
            f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (fb(k, j.opts.specialEasing); g > f; f++) {
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
                var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
            }] }, tweener: function tweener(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
            }
        }, prefilters: [eb], prefilter: function prefilter(a, b) {
            b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
        } }), r.speed = function (a, b, c) {
        var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
        }, e;
    }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function g() {
                var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && _a.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }!b && c || r.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = V.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
        };
    }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;for (Ya = r.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || r.fx.stop(), Ya = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
    }, r.fx.interval = 13, r.fx.start = function () {
        Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
    }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();var hb,
        ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        } }), r.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } }, removeAttr: function removeAttr(a, b) {
            var c,
                d = 0,
                e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
                a.removeAttribute(c);
            }
        } }), hb = { set: function set(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
        };
    });var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        } }), r.extend({ prop: function prop(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        }, set: function set(a) {
            var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });var lb = /[\t\r\n\f]/g;function mb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }r.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, mb(this)));
            });if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, mb(this)));
            });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(a) {
            var b,
                c,
                d = 0;b = " " + a + " ";while (c = this[d++]) {
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            }return !1;
        } });var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
            }
        } }), r.extend({ valHooks: { option: { get: function get(a) {
                    var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = { set: function set(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0;
            } }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), i = h;
                    }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        }, simulate: function simulate(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
        } }), r.fn.extend({ trigger: function trigger(a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? r.event.trigger(a, b, c, !0) : void 0;
        } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };r.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
            } };
    });var qb = a.location,
        rb = r.now(),
        sb = /\?/;r.parseXML = function (b) {
        var c;if (!b || "string" != typeof b) return null;try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
        var e;if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
            xb(a + "[" + e + "]", b[e], c, d);
        }
    }r.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            xb(c, a[c], b, e);
        }return d.join("&");
    }, r.fn.extend({ serialize: function serialize() {
            return r.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
            }).map(function (a, b) {
                var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return { name: b.name, value: a.replace(ub, "\r\n") };
                }) : { name: b.name, value: c.replace(ub, "\r\n") };
            }).get();
        } });var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;function g(h) {
            var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Lb(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && r.extend(!0, a, d), a;
    }function Mb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Nb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
        }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
            "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (k) {
                        if (!h) {
                            h = {};while (b = Bb.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }b = h[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return k ? g : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return null == k && (o.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
                        u[b] = [u[b], a[b]];
                    }return this;
                }, abort: function abort(a) {
                    var b = a || x;return e && e.abort(b), A(0, b), this;
                } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
                y.setRequestHeader(m, o.headers[m]);
            }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;A(-1, z);
                }
            } else A(-1, "No Transport");function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }return y;
        }, getJSON: function getJSON(a, b, c) {
            return r.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return r.get(a, void 0, b, "script");
        } }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, r.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this;
        }, wrapInner: function wrapInner(a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = r.isFunction(a);return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap(a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        } }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var _c, d;return o.cors || Pb && !b.crossDomain ? { send: function send(e, f) {
                var g,
                    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
                    h[g] = b.xhrFields[g];
                }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
                    h.setRequestHeader(g, e[g]);
                }_c = function c(a) {
                    return function () {
                        _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                    };
                }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        _c && d();
                    });
                }, _c = _c("abort");try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (_c) throw i;
                }
            }, abort: function abort() {
                _c && _c();
            } } : void 0;
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
                return r.globalEval(a), a;
            } } }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(e, f) {
                    b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
        } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    };function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }r.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, r.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });var b,
                c,
                d,
                e,
                f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
                    a = a.offsetParent;
                }return a || pa;
            });
        } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b;r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
        });
    }), r.each({ Height: "height", Width: "width" }, function (a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
                    var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({ bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r;
    });var Tb = a.jQuery,
        Ub = a.$;return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
    }, b || (a.jQuery = a.$ = r), r;
});
// ==================================================
// fancyBox v3.2.10
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function (t, e, n, o) {
    "use strict";
    function i(t) {
        var e = n(t.currentTarget),
            o = t.data ? t.data.options : {},
            i = e.attr("data-fancybox") || "",
            a = 0,
            s = [];t.isDefaultPrevented() || (t.preventDefault(), i ? (s = o.selector ? n(o.selector) : t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'), a = s.index(e), a < 0 && (a = 0)) : s = [e], n.fancybox.open(s, o, a));
    }if (n) {
        if (n.fn.fancybox) return void ("console" in t && console.log("fancyBox already initialized"));var a = { loop: !1, margin: [44, 0], gutter: 50, keyboard: !0, arrows: !0, infobar: !0, toolbar: !0, buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"], idleTime: 3, smallBtn: "auto", protect: !1, modal: !1, image: { preload: "auto" }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, defaultType: "image", animationEffect: "zoom", animationDuration: 500, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>', smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>', arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>', arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>' }, parentEl: "body", autoFocus: !1, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 4e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop, clickContent: function clickContent(t, e) {
                return "image" === t.type && "zoom";
            }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { idleTime: !1, margin: 0, clickContent: function clickContent(t, e) {
                    return "image" === t.type && "toggleControls";
                }, clickSlide: function clickSlide(t, e) {
                    return "image" === t.type ? "toggleControls" : "close";
                }, dblclickContent: function dblclickContent(t, e) {
                    return "image" === t.type && "zoom";
                }, dblclickSlide: function dblclickSlide(t, e) {
                    return "image" === t.type && "zoom";
                } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schliessen", NEXT: "Weiter", PREV: "Zurück", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Maßstab" } } },
            s = n(t),
            r = n(e),
            c = 0,
            l = function l(t) {
            return t && t.hasOwnProperty && t instanceof n;
        },
            u = function () {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60);
            };
        }(),
            d = function () {
            var t,
                n = e.createElement("fakeelement"),
                i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (t in i) {
                if (n.style[t] !== o) return i[t];
            }return "transitionend";
        }(),
            f = function f(t) {
            return t && t.length && t[0].offsetHeight;
        },
            p = function p(t, o, i) {
            var a = this;a.opts = n.extend(!0, { index: i }, n.fancybox.defaults, o || {}), n.fancybox.isMobile && (a.opts = n.extend(!0, {}, a.opts, a.opts.mobile)), o && n.isArray(o.buttons) && (a.opts.buttons = o.buttons), a.id = a.opts.id || ++c, a.group = [], a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = null, a.createGroup(t), a.group.length && (a.$lastFocus = n(e.activeElement).blur(), a.slides = {}, a.init());
        };n.extend(p.prototype, { init: function init() {
                var i,
                    a,
                    s,
                    c = this,
                    l = c.group[c.currIndex],
                    u = l.opts,
                    d = n.fancybox.scrollbarWidth;c.scrollTop = r.scrollTop(), c.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream ? "image" !== l.type && n("body").css("top", n("body").scrollTop() * -1).addClass("fancybox-iosfix") : !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === o && (i = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), d = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth, i.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), s = "", n.each(u.buttons, function (t, e) {
                    s += u.btnTpl[e] || "";
                }), a = n(c.translate(c, u.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + c.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox", c).appendTo(u.parentEl), c.$refs = { container: a }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                    c.$refs[t] = a.find(".fancybox-" + t);
                }), c.trigger("onInit"), c.activate(), c.jumpTo(c.currIndex);
            }, translate: function translate(t, e) {
                var n = t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    var i = n[e];return i === o ? t : i;
                });
            }, createGroup: function createGroup(t) {
                var e = this,
                    i = n.makeArray(t);n.each(i, function (t, i) {
                    var a,
                        s,
                        r,
                        c,
                        l,
                        u = {},
                        d = {};n.isPlainObject(i) ? (u = i, d = i.opts || i) : "object" === n.type(i) && n(i).length ? (a = n(i), d = a.data(), d = n.extend({}, d, d.options || {}), d.$orig = a, u.src = d.src || a.attr("href"), u.type || u.src || (u.type = "inline", u.src = i)) : u = { type: "html", src: i + "" }, u.opts = n.extend(!0, {}, e.opts, d), n.isArray(d.buttons) && (u.opts.buttons = d.buttons), s = u.type || u.opts.type, c = u.src || "", !s && c && (c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : (r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video", u.opts.videoFormat || (u.opts.videoFormat = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : "#" === c.charAt(0) && (s = "inline")), s ? u.type = s : e.trigger("objectNeedsType", u), u.index = e.group.length, u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig, !u.opts.$thumb && u.opts.$orig && (u.opts.$thumb = u.opts.$orig.find("img:first")), u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb, "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(i, [e, u])), "function" === n.type(e.opts.caption) && (u.opts.caption = e.opts.caption.apply(i, [e, u])), u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === o ? "" : u.opts.caption + ""), "ajax" === s && (l = c.split(/\s+/, 2), l.length > 1 && (u.src = l.shift(), u.opts.filter = l.shift())), "auto" == u.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (u.opts.toolbar = !1, u.opts.smallBtn = !0) : u.opts.smallBtn = !1), "pdf" === s && (u.type = "iframe", u.opts.iframe.preload = !1), u.opts.modal && (u.opts = n.extend(!0, u.opts, { infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 })), e.group.push(u);
                });
            }, addEvents: function addEvents() {
                var o = this;o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.close(t);
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.previous();
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.next();
                }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                }), s.on("orientationchange.fb resize.fb", function (t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? u(function () {
                        o.update();
                    }) : (o.$refs.stage.hide(), setTimeout(function () {
                        o.$refs.stage.show(), o.update();
                    }, 600));
                }), r.on("focusin.fb", function (t) {
                    var i = n.fancybox ? n.fancybox.getInstance() : null;i.isClosing || !i.current || !i.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || i && "fixed" !== n(t.target).css("position") && !i.$refs.container.has(t.target).length && (t.stopPropagation(), i.focus(), s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft));
                }), r.on("keydown.fb", function (t) {
                    var e = o.current,
                        i = t.keyCode || t.which;if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i);
                }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                    o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1;
                }), o.idleInterval = t.setInterval(function () {
                    o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls());
                }, 1e3));
            }, removeEvents: function removeEvents() {
                var e = this;s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
            }, previous: function previous(t) {
                return this.jumpTo(this.currPos - 1, t);
            }, next: function next(t) {
                return this.jumpTo(this.currPos + 1, t);
            }, jumpTo: function jumpTo(t, e, i) {
                var a,
                    s,
                    r,
                    c,
                    l,
                    u,
                    d,
                    p = this,
                    h = p.group.length;if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
                    if (t = parseInt(t, 10), s = p.current ? p.current.opts.loop : p.opts.loop, !s && (t < 0 || t >= h)) return !1;if (a = p.firstRun = null === p.firstRun, !(h < 2 && !a && p.isDragging)) {
                        if (c = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, r = p.createSlide(t), h > 1 && ((s || r.index > 0) && p.createSlide(t - 1), (s || r.index < h - 1) && p.createSlide(t + 1)), p.current = r, p.currIndex = r.index, p.currPos = r.pos, p.trigger("beforeShow", a), p.updateControls(), u = n.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== u.left || 0 !== u.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), a) return r.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.removeClass("fancybox-is-hidden"), f(p.$refs.container), p.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), p.loadSlide(r), void p.preload("image");n.each(p.slides, function (t, e) {
                            n.fancybox.stop(e.$slide);
                        }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (l = Math.round(r.$slide.width()), n.each(p.slides, function (t, o) {
                            var i = o.pos - r.pos;n.fancybox.animate(o.$slide, { top: 0, left: i * l + i * o.opts.gutter }, e, function () {
                                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === p.currPos && (r.isMoved = !1, p.complete());
                            });
                        })) : p.$refs.stage.children().removeAttr("style"), r.isLoaded ? p.revealContent(r) : p.loadSlide(r), p.preload("image"), c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, d, e, function () {
                            c.$slide.removeClass(d).removeAttr("style");
                        }))));
                    }
                }
            }, createSlide: function createSlide(t) {
                var e,
                    o,
                    i = this;return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], { pos: t, $slide: e, isLoaded: !1 }), i.updateSlide(i.slides[t])), i.slides[t];
            }, scaleToActual: function scaleToActual(t, e, i) {
                var a,
                    s,
                    r,
                    c,
                    l,
                    u = this,
                    d = u.current,
                    f = d.$content,
                    p = parseInt(d.$slide.width(), 10),
                    h = parseInt(d.$slide.height(), 10),
                    g = d.width,
                    b = d.height;"image" != d.type || d.hasError || !f || u.isAnimating || (n.fancybox.stop(f), u.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, a = n.fancybox.getTranslate(f), c = g / a.width, l = b / a.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), u.updateCursor(g, b), n.fancybox.animate(f, { top: r, left: s, scaleX: c, scaleY: l }, i || 330, function () {
                    u.isAnimating = !1;
                }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
            }, scaleToFit: function scaleToFit(t) {
                var e,
                    o = this,
                    i = o.current,
                    a = i.$content;"image" != i.type || i.hasError || !a || o.isAnimating || (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, { top: e.top, left: e.left, scaleX: e.width / a.width(), scaleY: e.height / a.height() }, t || 330, function () {
                    o.isAnimating = !1;
                }));
            }, getFitPos: function getFitPos(t) {
                var e,
                    o,
                    i,
                    a,
                    s,
                    r = this,
                    c = t.$content,
                    l = t.width,
                    u = t.height,
                    d = t.opts.margin;return !(!c || !c.length || !l && !u) && ("number" === n.type(d) && (d = [d, d]), 2 == d.length && (d = [d[0], d[1], d[0], d[1]]), e = parseInt(r.$refs.stage.width(), 10) - (d[1] + d[3]), o = parseInt(r.$refs.stage.height(), 10) - (d[0] + d[2]), i = Math.min(1, e / l, o / u), a = Math.floor(i * l), s = Math.floor(i * u), { top: Math.floor(.5 * (o - s)) + d[0], left: Math.floor(.5 * (e - a)) + d[3], width: a, height: s });
            }, update: function update() {
                var t = this;n.each(t.slides, function (e, n) {
                    t.updateSlide(n);
                });
            }, updateSlide: function updateSlide(t, e) {
                var o = this,
                    i = t && t.$content;i && (t.width || t.height) && (o.isAnimating = !1, n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && o.updateCursor()), t.$slide.trigger("refresh"), o.trigger("onUpdate", t);
            }, centerSlide: function centerSlide(t, e) {
                var i,
                    a,
                    s = this;s.current && (i = Math.round(t.$slide.width()), a = t.pos - s.current.pos, n.fancybox.animate(t.$slide, { top: 0, left: a * i + a * t.opts.gutter, opacity: 1 }, e === o ? 0 : e, null, !1));
            }, updateCursor: function updateCursor(t, e) {
                var n,
                    i = this,
                    a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"), n = t !== o && e !== o ? t < i.current.width && e < i.current.height : i.isScaledDown(), n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"));
            }, isZoomable: function isZoomable() {
                var t,
                    e = this,
                    o = e.current;if (o && !e.isClosing) return !!("image" === o.type && o.isLoaded && !o.hasError && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) && (t = e.getFitPos(o), o.width > t.width || o.height > t.height));
            }, isScaledDown: function isScaledDown() {
                var t = this,
                    e = t.current,
                    o = e.$content,
                    i = !1;return o && (i = n.fancybox.getTranslate(o), i = i.width < e.width || i.height < e.height), i;
            }, canPan: function canPan() {
                var t = this,
                    e = t.current,
                    n = e.$content,
                    o = !1;return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o;
            }, loadSlide: function loadSlide(t) {
                var e,
                    o,
                    i,
                    a = this;if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {case "image":
                            a.setImage(t);break;case "iframe":
                            a.setIframe(t);break;case "html":
                            a.setContent(t, t.src || t.content);break;case "inline":
                            n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);break;case "ajax":
                            a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, { url: t.src, success: function success(e, n) {
                                    "success" === n && a.setContent(t, e);
                                }, error: function error(e, n) {
                                    e && "abort" !== n && a.setError(t);
                                } })), o.one("onReset", function () {
                                i.abort();
                            });break;case "video":
                            a.setContent(t, '<video controls><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");break;default:
                            a.setError(t);}return !0;
                }
            }, setImage: function setImage(e) {
                var o,
                    i,
                    a,
                    s,
                    r = this,
                    c = e.opts.srcset || e.opts.image.srcset;if (c) {
                    a = t.devicePixelRatio || 1, s = t.innerWidth * a, i = c.split(",").map(function (t) {
                        var e = {};return t.trim().split(/\s+/).forEach(function (t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);return 0 === n ? e.url = t : void (o && (e.value = o, e.postfix = t[t.length - 1]));
                        }), e;
                    }), i.sort(function (t, e) {
                        return t.value - e.value;
                    });for (var l = 0; l < i.length; l++) {
                        var u = i[l];if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= a) {
                            o = u;break;
                        }
                    }!o && i.length && (o = i[i.length - 1]), o && (e.src = o.url, e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value, e.width = o.value));
                }e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function () {
                    n(this).remove(), e.$ghost = null, r.setBigImage(e);
                }).one("load", function () {
                    r.afterLoad(e), r.setBigImage(e);
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e);
            }, setBigImage: function setBigImage(t) {
                var e = this,
                    o = n("<img />");t.$image = o.one("error", function () {
                    e.setError(t);
                }).one("load", function () {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = t.opts.width || this.naturalWidth, t.height = t.opts.height || this.naturalHeight, t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function () {
                        t.timouts = null, t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t));
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function () {
                    o[0].complete || t.hasError || e.showLoading(t);
                }, 100);
            }, setIframe: function setIframe(t) {
                var e,
                    i = this,
                    a = t.opts.iframe,
                    s = t.$slide;t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t);
                }), s.on("refresh.fb", function () {
                    var n,
                        i,
                        s,
                        r = t.$content,
                        c = a.css.width,
                        l = a.css.height;if (1 === e[0].isReady) {
                        try {
                            i = e.contents(), s = i.find("body");
                        } catch (t) {}s && s.length && (c === o && (n = e[0].contentWindow.document.documentElement.scrollWidth, c = Math.ceil(s.outerWidth(!0) + (r.width() - n)), c += r.outerWidth() - r.innerWidth()), l === o && (l = Math.ceil(s.outerHeight(!0)), l += r.outerHeight() - r.innerHeight()), c && r.width(c), l && r.height(l)), r.removeClass("fancybox-is-hidden");
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn === !0 && t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)), s.one("onReset", function () {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank");
                    } catch (t) {}n(this).empty(), t.isLoaded = !1;
                });
            }, setContent: function setContent(t, e) {
                var o = this;o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                    n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1);
                }), t.$content = n(e).appendTo(t.$slide), this.afterLoad(t));
            }, setError: function setError(t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl));
            }, showLoading: function showLoading(t) {
                var e = this;t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
            }, hideLoading: function hideLoading(t) {
                var e = this;t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
            }, afterLoad: function afterLoad(t) {
                var e = this;e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0;
                }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t));
            }, revealContent: function revealContent(t) {
                var e,
                    i,
                    a,
                    s,
                    r,
                    c = this,
                    l = t.$slide,
                    u = !1;return e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), !t.isMoved && t.pos === c.currPos && a || (e = !1), "zoom" !== e || t.pos === c.currPos && a && "image" === t.type && !t.hasError && (u = c.getThumbPos(t)) || (e = "fade"), "zoom" === e ? (r = c.getFitPos(t), r.scaleX = r.width / u.width, r.scaleY = r.height / u.height, delete r.width, delete r.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, r.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), f(t.$content), void n.fancybox.animate(t.$content, r, a, function () {
                    c.complete();
                })) : (c.updateSlide(t), e ? (n.fancybox.stop(l), i = "fancybox-animated fancybox-slide--" + (t.pos >= c.prevPos ? "next" : "previous") + " fancybox-fx-" + e, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(l), void n.fancybox.animate(l, "fancybox-slide--current", a, function (e) {
                    l.removeClass(i).removeAttr("style"), t.pos === c.currPos && c.complete();
                }, !0)) : (f(l), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === c.currPos && c.complete())));
            }, getThumbPos: function getThumbPos(o) {
                var i,
                    a = this,
                    s = !1,
                    r = function r(e) {
                    for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) {
                        "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                    }return o = s.every(function (t) {
                        var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                            n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);return e > 0 && n > 0;
                    }), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height();
                },
                    c = o.opts.$thumb,
                    l = c ? c.offset() : 0;return l && c[0].ownerDocument === e && r(c) && (i = a.$refs.stage.offset(), s = { top: l.top - i.top + parseFloat(c.css("border-top-width") || 0), left: l.left - i.left + parseFloat(c.css("border-left-width") || 0), width: c.width(), height: c.height(), scaleX: 1, scaleY: 1 }), s;
            }, complete: function complete() {
                var t = this,
                    o = t.current,
                    i = {};o.isMoved || !o.isLoaded || o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), t.preload("inline"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function (e, o) {
                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
                }), t.slides = i, t.updateCursor(), t.trigger("afterShow"), o.$slide.find("video,audio").first().trigger("play"), (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus());
            }, preload: function preload(t) {
                var e = this,
                    n = e.slides[e.currPos + 1],
                    o = e.slides[e.currPos - 1];n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o);
            }, focus: function focus() {
                var t,
                    e = this.current;this.isClosing || (e && e.isComplete && (t = e.$slide.find("input[autofocus]:enabled:visible:first"), t.length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), t = t && t.length ? t : this.$refs.container, t.focus());
            }, activate: function activate() {
                var t = this;n(".fancybox-container").each(function () {
                    var e = n(this).data("FancyBox");e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
            }, close: function close(t, e) {
                var o,
                    i,
                    a,
                    s,
                    r,
                    c,
                    l = this,
                    p = l.current,
                    h = function h() {
                    l.cleanUp(t);
                };return !l.isClosing && (l.isClosing = !0, l.trigger("beforeClose", t) === !1 ? (l.isClosing = !1, u(function () {
                    l.update();
                }), !1) : (l.removeEvents(), p.timouts && clearTimeout(p.timouts), a = p.$content, o = p.opts.animationEffect, i = n.isNumeric(e) ? e : o ? p.opts.animationDuration : 0, p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), p.$slide.siblings().trigger("onReset").remove(), i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), l.hideLoading(p), l.hideControls(), l.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === p.type && !p.hasError && (c = l.getThumbPos(p)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), r = n.fancybox.getTranslate(a), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, s = p.opts.zoomOpacity, "auto" == s && (s = Math.abs(p.width / p.height - c.width / c.height) > .1), s && (c.opacity = 0), r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, r.width = c.width, r.height = c.height, n.fancybox.setTranslate(p.$content, r), f(p.$content), n.fancybox.animate(p.$content, c, i, h), !0) : (o && i ? t === !0 ? setTimeout(h, i) : n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, h) : h(), !0)));
            }, cleanUp: function cleanUp(t) {
                var o,
                    i,
                    a = this,
                    r = n("body");a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", t), a.$lastFocus && a.current.opts.backFocus && a.$lastFocus.focus(), a.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (s.scrollTop(a.scrollTop).scrollLeft(a.scrollLeft), r.removeClass("fancybox-active compensate-for-scrollbar"), r.hasClass("fancybox-iosfix") && (i = parseInt(e.body.style.top, 10), r.removeClass("fancybox-iosfix").css("top", "").scrollTop(i * -1)), n("#fancybox-style-noscroll").remove());
            }, trigger: function trigger(t, e) {
                var o,
                    i = Array.prototype.slice.call(arguments, 1),
                    a = this,
                    s = e && e.opts ? e : a.current;return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void ("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i));
            }, updateControls: function updateControls(t) {
                var e = this,
                    n = e.current,
                    o = n.index,
                    i = n.opts.caption,
                    a = e.$refs.container,
                    s = e.$refs.caption;n.$slide.trigger("refresh"), e.$caption = i && i.length ? s.html(i) : null, e.isHiddenControls || e.isIdle || e.showControls(), a.find("[data-fancybox-count]").html(e.group.length), a.find("[data-fancybox-index]").html(o + 1), a.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0), a.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? a.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : a.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
            }, hideControls: function hideControls() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
            }, showControls: function showControls() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption");
            }, toggleControls: function toggleControls() {
                this.isHiddenControls ? this.showControls() : this.hideControls();
            } }), n.fancybox = { version: "3.2.10", defaults: a, getInstance: function getInstance(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    o = Array.prototype.slice.call(arguments, 1);return e instanceof p && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
            }, open: function open(t, e, n) {
                return new p(t, e, n);
            }, close: function close(t) {
                var e = this.getInstance();e && (e.close(), t === !0 && this.close());
            }, destroy: function destroy() {
                this.close(!0), r.off("click.fb-start");
            }, isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), use3d: function () {
                var n = e.createElement("div");return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
            }(), getTranslate: function getTranslate(t) {
                var e;if (!t || !t.length) return !1;if (e = t.eq(0).css("transform"), e && e.indexOf("matrix") !== -1 ? (e = e.split("(")[1], e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]], e = e.map(parseFloat);else {
                    e = [0, 0, 1, 1];var n = /\.*translate\((.*)px,(.*)px\)/i,
                        o = n.exec(t.eq(0).attr("style"));o && (e[0] = parseFloat(o[2]), e[1] = parseFloat(o[1]));
                }return { top: e[0], left: e[1], scaleX: e[2], scaleY: e[3], opacity: parseFloat(t.css("opacity")), width: t.width(), height: t.height() };
            }, setTranslate: function setTranslate(t, e) {
                var n = "",
                    i = {};if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i);
            }, animate: function animate(t, e, i, a, s) {
                n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(d, function (i) {
                    (!i || !i.originalEvent || t.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (n.fancybox.stop(t), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (t.css("transition-duration", ""), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)), s === !1 && t.removeAttr("style")) : s !== !0 && t.removeClass(e), n.isFunction(a) && a(i));
                }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), e.scaleX && t.hasClass("fancybox-image-wrap") && t.parent().addClass("fancybox-is-scaling"), t.data("timer", setTimeout(function () {
                    t.trigger("transitionend");
                }, i + 16));
            }, stop: function stop(t) {
                clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling");
            } }, n.fn.fancybox = function (t) {
            var e;return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, i) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, i), this;
        }, r.on("click.fb-start", "[data-fancybox]", i);
    }
}(window, document, window.jQuery || jQuery), function (t) {
    "use strict";
    var e = function e(_e, n, o) {
        if (_e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
            _e = _e.replace("$" + t, n || "");
        }), o.length && (_e += (_e.indexOf("?") > 0 ? "&" : "?") + o), _e;
    },
        n = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "//www.youtube.com/embed/$4", thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, metacafe: { matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/, type: "iframe", url: "//www.metacafe.com/embed/$1/?ap=1" }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "iframe", url: "//www.dailymotion.com/embed/video/$1" }, vine: { matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function url(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
            } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function url(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            } } };t(document).on("objectNeedsType.fb", function (o, i, a) {
        var s,
            r,
            c,
            l,
            u,
            d,
            f,
            p = a.src || "",
            h = !1;s = t.extend(!0, {}, n, a.opts.media), t.each(s, function (n, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type, d = {}, o.paramPlace && c[o.paramPlace]) {
                    u = c[o.paramPlace], "?" == u[0] && (u = u.substring(1)), u = u.split("&");for (var i = 0; i < u.length; ++i) {
                        var s = u[i].split("=", 2);2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                    }
                }return l = t.extend(!0, {}, o.params, a.opts[n], d), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c), "vimeo" === n && (p = p.replace("&%23", "#")), !1;
            }
        }), h ? (a.src = p, a.type = h, a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (t.extend(!0, a.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } }), a.contentProvider = f, a.opts.slideClass += " fancybox-slide--" + ("gmap_place" == f || "gmap_search" == f ? "map" : "video"))) : p && (a.type = a.opts.defaultType);
    });
}(window.jQuery || jQuery), function (t, e, n) {
    "use strict";
    var o = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60);
        };
    }(),
        i = function () {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e);
        };
    }(),
        a = function a(e) {
        var n = [];e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];for (var o in e) {
            e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        }return n;
    },
        s = function s(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
    },
        r = function r(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) {
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        }return !1;
    },
        c = function c(e) {
        var n = t.getComputedStyle(e)["overflow-y"],
            o = t.getComputedStyle(e)["overflow-x"],
            i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
            a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;return i || a;
    },
        l = function l(t) {
        for (var e = !1;;) {
            if (e = c(t.get(0))) break;if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
        }return e;
    },
        u = function u(t) {
        var e = this;e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
    };u.prototype.destroy = function () {
        this.$container.off(".fb.touch");
    }, u.prototype.ontouchstart = function (o) {
        var i = this,
            c = n(o.target),
            u = i.instance,
            d = u.current,
            f = d.$content,
            p = "touchstart" == o.type;if (p && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!d || i.instance.isAnimating || i.instance.isClosing) return o.stopPropagation(), void o.preventDefault();if (i.realPoints = i.startPoints = a(o), i.startPoints) {
                if (o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = f, i.opts = d.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.sliderStartPos = i.sliderLastPos || { top: 0, left: 0 }, i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(d.$slide[0].clientWidth), i.canvasHeight = Math.round(d.$slide[0].clientHeight), n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), !i.opts && !u.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length) return void (c.is("img") && o.preventDefault());n.fancybox.isMobile && (l(c) || l(c.parent())) || o.preventDefault(), 1 === i.startPoints.length && ("image" === d.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 !== i.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]));
            }
        }
    }, u.prototype.onscroll = function (t) {
        self.isScrolling = !0;
    }, u.prototype.ontouchmove = function (t) {
        var e = this,
            o = n(t.target);return e.isScrolling || !o.is(e.$stage) && !e.$stage.find(o).length ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
    }, u.prototype.onSwipe = function (e) {
        var a,
            s = this,
            r = s.isSwiping,
            c = s.sliderStartPos.left || 0;if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = { top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY, left: c }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
            s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
                var o = e.pos - s.instance.currPos;n.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter });
            }), s.$container.addClass("fancybox-is-sliding"));
        });else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && (l(s.$target) || l(s.$target.parent()))) return void (s.isScrolling = !0);s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function (t, e) {
                n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left);
            }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop();
        }
    }, u.prototype.onPan = function () {
        var t = this;return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (i(t.requestId), t.requestId = null), void (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
        })));
    }, u.prototype.limitMovement = function () {
        var t,
            e,
            n,
            o,
            i,
            a,
            s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            u = s.distanceY,
            d = s.contentStartPos,
            f = d.left,
            p = d.top,
            h = d.width,
            g = d.height;return i = h > r ? f + l : f, a = p + u, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), h > r && (l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0)), g > c && (u > 0 && a > e && (a = e - 1 + Math.pow(-e + p + u, .8) || 0), u < 0 && a < o && (a = o + 1 - Math.pow(o - p - u, .8) || 0)), { top: a, left: i, scaleX: d.scaleX, scaleY: d.scaleY };
    }, u.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
            a = i.canvasWidth,
            s = i.canvasHeight;return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), { top: e, left: t };
    }, u.prototype.onZoom = function () {
        var e = this,
            a = e.contentStartPos.width,
            r = e.contentStartPos.height,
            c = e.contentStartPos.left,
            l = e.contentStartPos.top,
            u = s(e.newPoints[0], e.newPoints[1]),
            d = u / e.startDistanceBetweenFingers,
            f = Math.floor(a * d),
            p = Math.floor(r * d),
            h = (a - f) * e.percentageOfImageAtPinchPointX,
            g = (r - p) * e.percentageOfImageAtPinchPointY,
            b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = b - e.centerPointStartX,
            v = m - e.centerPointStartY,
            x = c + (h + y),
            w = l + (g + v),
            $ = { top: w, left: x, scaleX: e.contentStartPos.scaleX * d, scaleY: e.contentStartPos.scaleY * d };e.canTap = !1, e.newWidth = f, e.newHeight = p, e.contentLastPos = $, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
    }, u.prototype.ontouchend = function (t) {
        var o = this,
            s = Math.max(new Date().getTime() - o.startTime, 1),
            r = o.isSwiping,
            c = o.isPanning,
            l = o.isZooming,
            u = o.isScrolling;return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, u)));
    }, u.prototype.endSwiping = function (t, e) {
        var o = this,
            i = !1,
            a = o.instance.group.length;o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, { top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY, opacity: 0 }, 150), i = o.instance.close(!0, 300)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)), i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding");
    }, u.prototype.endPanning = function () {
        var t,
            e,
            o,
            i = this;i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330));
    }, u.prototype.endZooming = function () {
        var t,
            e,
            o,
            i,
            a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)));
    }, u.prototype.onTap = function (t) {
        var e,
            o = this,
            i = n(t.target),
            s = o.instance,
            r = s.current,
            c = t && a(t) || o.startPoints,
            l = c[0] ? c[0].x - o.$stage.offset().left : 0,
            u = c[0] ? c[0].y - o.$stage.offset().top : 0,
            d = function d(e) {
            var i = r.opts[e];if (n.isFunction(i) && (i = i.apply(s, [r, t])), i) switch (i) {case "close":
                    s.close(o.startEvent);break;case "toggleControls":
                    s.toggleControls(!0);break;case "next":
                    s.next();break;case "nextOrClose":
                    s.group.length > 1 ? s.next() : s.close(o.startEvent);break;case "zoom":
                    "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, u) : s.group.length < 2 && s.close(o.startEvent));}
        };if ((!t.originalEvent || 2 != t.originalEvent.button) && (i.is("img") || !(l > i[0].clientWidth + i.offset().left))) {
            if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";else if (i.is(".fancybox-slide")) e = "Slide";else {
                if (!s.current.$content || !s.current.$content.find(i).addBack().filter(i).length) return;e = "Content";
            }if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50) return this;d("dblclick" + e);
            } else o.tapX = l, o.tapY = u, r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? o.tapped = setTimeout(function () {
                o.tapped = null, d("click" + e);
            }, 500) : d("click" + e);return this;
        }
    }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
    });
}(window, document, window.jQuery || jQuery), function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>' }, slideShow: { autoStart: !1, speed: 3e3 } });var n = function n(t) {
        this.instance = t, this.init();
    };e.extend(n.prototype, { timer: null, isActive: !1, $button: null, init: function init() {
            var t = this;t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle();
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide();
        }, set: function set(t) {
            var e = this;e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length);
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls());
        }, clear: function clear() {
            var t = this;clearTimeout(t.timer), t.timer = null;
        }, start: function start() {
            var t = this,
                e = t.instance.current;e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0));
        }, stop: function stop() {
            var t = this,
                e = t.instance.current;t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1;
        }, toggle: function toggle() {
            var t = this;t.isActive ? t.stop() : t.start();
        } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e));
        }, "beforeShow.fb": function beforeShowFb(t, e, n, o) {
            var i = e && e.SlideShow;o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
        }, "afterShow.fb": function afterShowFb(t, e, n) {
            var o = e && e.SlideShow;o && o.isActive && o.set();
        }, "afterKeydown.fb": function afterKeydownFb(n, o, i, a, s) {
            var r = o && o.SlideShow;!r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
        }, "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
            var n = e && e.SlideShow;n && n.stop();
        } }), e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;o && o.isActive && (t.hidden ? o.clear() : o.set());
    });
}(document, window.jQuery || jQuery), function (t, e) {
    "use strict";
    var n = function () {
        var e,
            n,
            o,
            i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]],
            a = {};for (n = 0; n < i.length; n++) {
            if (e = i[n], e && e[1] in t) {
                for (o = 0; o < e.length; o++) {
                    a[i[0][o]] = e[o];
                }return a;
            }
        }return !1;
    }();if (!n) return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));var o = { request: function request(e) {
            e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        }, exit: function exit() {
            t[n.exitFullscreen]();
        }, toggle: function toggle(e) {
            e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
        }, isFullscreen: function isFullscreen() {
            return Boolean(t[n.fullscreenElement]);
        }, enabled: function enabled() {
            return Boolean(t[n.fullscreenEnabled]);
        } };e.extend(!0, e.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>' }, fullScreen: { autoStart: !1 } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
            var n;e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle(n[0]);
            }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(n[0]), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        }, "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
        }, "beforeClose.fb": function beforeCloseFb(t) {
            t && t.FullScreen && o.exit();
        } }), e(t).on(n.fullscreenchange, function () {
        var t = o.isFullscreen(),
            n = e.fancybox.getInstance();n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t));
    });
}(document, window.jQuery || jQuery), function (t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, e.fancybox.defaults);var n = function n(t) {
        this.init(t);
    };e.extend(n.prototype, { $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function init(t) {
            var e = this;e.instance = t, t.Thumbs = e;var n = t.group[0],
                o = t.group[1];e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && n && o && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == o.type || o.opts.thumb || o.opts.$thumb) ? (e.$button.show().on("click", function () {
                e.toggle();
            }), e.isActive = !0) : e.$button.hide();
        }, create: function create() {
            var t,
                n,
                o = this,
                i = o.instance,
                a = o.opts.parentEl;o.$grid = e('<div class="fancybox-thumbs fancybox-thumbs-' + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), t = "<ul>", e.each(i.group, function (e, o) {
                n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null), n || "image" !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>');
            }), t += "</ul>", o.$list = e(t).appendTo(o.$grid).on("click", "li", function () {
                i.jumpTo(e(this).data("index"));
            }), o.$list.find("img").hide().one("load", function () {
                var t,
                    n,
                    o,
                    i,
                    a = e(this).parent().removeClass("fancybox-thumbs-loading"),
                    s = a.outerWidth(),
                    r = a.outerHeight();t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / s, i = n / r, o >= 1 && i >= 1 && (o > i ? (t /= i, n = r) : (t = s, n /= o)), e(this).css({ width: Math.floor(t), height: Math.floor(n), "margin-top": n > r ? Math.floor(.3 * r - .3 * n) : Math.floor(.5 * r - .5 * n), "margin-left": Math.floor(.5 * s - .5 * t) }).show();
            }).each(function () {
                this.src = e(this).data("src");
            }), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right")) + i.group.length * o.$list.children().eq(0).outerWidth(!0) + "px");
        }, focus: function focus(t) {
            var e,
                n,
                o = this,
                i = o.$list;o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t) : "x" === o.opts.axis && (n.left < i.parent().scrollLeft() || n.left > i.parent().scrollLeft() + (i.parent().width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
        }, update: function update() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update();
        }, hide: function hide() {
            this.isVisible = !1, this.update();
        }, show: function show() {
            this.isVisible = !0, this.update();
        }, toggle: function toggle() {
            this.isVisible = !this.isVisible, this.update();
        } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
            var o;e && !e.Thumbs && (o = new n(e), o.isActive && o.opts.autoStart === !0 && o.show());
        }, "beforeShow.fb": function beforeShowFb(t, e, n, o) {
            var i = e && e.Thumbs;i && i.isVisible && i.focus(o ? 0 : 250);
        }, "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
            var a = e && e.Thumbs;a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        }, "beforeClose.fb": function beforeCloseFb(t, e) {
            var n = e && e.Thumbs;n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
        } });
}(document, window.jQuery), function (t, e) {
    "use strict";
    function n(t) {
        var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return e[t];
        });
    }e.extend(!0, e.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>' }, share: { tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>' } }), e(t).on("click", "[data-fancybox-share]", function () {
        var t,
            o,
            i = e.fancybox.getInstance();i && (t = i.current.opts.hash === !1 ? i.current.src : window.location, o = i.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.current.type ? encodeURIComponent(i.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({ src: i.translate(i, o), type: "html", opts: { animationEffect: "fade", animationDuration: 250, afterLoad: function afterLoad(t, e) {
                    e.$content.find(".fancybox-share__links a").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                    });
                } } }));
    });
}(document, window.jQuery || jQuery), function (t, e, n) {
    "use strict";
    function o() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
            i = n.join("-");return o < 1 && (o = 1), { hash: t, index: o, gallery: i };
    }function i(t) {
        var e;"" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length || (e = n("#" + n.escapeSelector(t.gallery))), e.length && (s = !1, e.trigger("click")));
    }function a(t) {
        var e;return !!t && (e = t.current ? t.current.opts : t.opts, e.hash || (e.$orig ? e.$orig.data("fancybox") : ""));
    }n.escapeSelector || (n.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            n = function n(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        };return (t + "").replace(e, n);
    });var s = !0,
        r = null,
        c = null;n(function () {
        n.fancybox.defaults.hash !== !1 && (n(t).on({ "onInit.fb": function onInitFb(t, e) {
                var n, i;e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
            }, "beforeShow.fb": function beforeShowFb(n, o, i) {
                var l;i && i.opts.hash !== !1 && (l = a(o), l && "" !== l && (e.location.hash.indexOf(l) < 0 && (o.opts.origHash = e.location.hash), r = l + (o.group.length > 1 ? "-" + (i.index + 1) : ""), "replaceState" in e.history ? (c && clearTimeout(c), c = setTimeout(function () {
                    e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r), c = null, s = !1;
                }, 300)) : e.location.hash = r));
            }, "beforeClose.fb": function beforeCloseFb(o, i, s) {
                var l, u;c && clearTimeout(c), s.opts.hash !== !1 && (l = a(i), u = i && i.opts.origHash ? i.opts.origHash : "", l && "" !== l && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u, n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))), r = null);
            } }), n(e).on("hashchange.fb", function () {
            var t = o();n.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null, n.fancybox.close()) : "" !== t.gallery && i(t);
        }), setTimeout(function () {
            i(o());
        }, 50));
    });
}(document, window, window.jQuery || jQuery), function (t, e) {
    "use strict";
    var n = new Date().getTime();e(t).on({ "onInit.fb": function onInitFb(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var o = e.current,
                    i = new Date().getTime();e.group.length < 1 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
            });
        } });
}(document, window.jQuery || jQuery);
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this);
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)), this.setup(), this.initialize();
    }e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function run() {
            this._width = this.$element.width();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        } }, { filter: ["items", "settings"], run: function run() {
            this.$stage.children(".cloned").remove();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e;
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];for (a.items = { merge: !1, width: b }; d--;) {
                c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            }this._widths = f;
        } }, { filter: ["items", "settings"], run: function run() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";for (g /= 2; g--;) {
                b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            }this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
        } }, { filter: ["width", "items", "settings"], run: function run() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
                d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            }this._coordinates = f;
        } }, { filter: ["width", "items", "settings"], run: function run() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };this.$stage.css(c);
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();if (c && a.items.merge) for (; b--;) {
                a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            } else c && (a.css.width = a.items.width, d.css(a.css));
        } }, { filter: ["items"], run: function run() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
        } }, { filter: ["position"], run: function run() {
            this.animate(this.coordinates(this._current));
        } }, { filter: ["width", "position", "items", "settings"], run: function run() {
            var a,
                b,
                c,
                d,
                e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];for (c = 0, d = this._coordinates.length; c < d; c++) {
                a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            }this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
        } }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
        }this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.setup = function () {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } });
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data;
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a];
        }, this._invalidated), e = {}; b < c;) {
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        }this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {case e.Width.Inner:case e.Width.Outer:
                return this._width;default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;}
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function (b) {
        var d = null;3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
        }, this)));
    }, e.prototype.onDragMove = function (a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function (b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" });
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;if (0 === this._items.length) return d;if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
        }return this._current;
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b;
        });
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
        var b,
            c,
            d,
            e = this.settings,
            f = this._coordinates.length;if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {}f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function f(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };return b === d ? a.map(this._clones, function (a, b) {
            return f(b);
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
        var c,
            e = 1,
            f = b - 1;return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function () {
        var d;return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType;
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c });
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a }));
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this));
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));for (var d in this._plugins) {
            this._plugins[d].destroy();
        }this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;switch (b) {case "<":
                return d ? a > c : a < c;case ">":
                return d ? a < c : a > c;case ">=":
                return d ? a <= c : a >= c;case "<=":
                return d ? a >= c : a <= c;}
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a;
        }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
        }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this));
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--;
        }, this));
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                }, a.event.special[b.name].owl = !0;
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d;
        }, this)));
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.pointer = function (a) {
        var c = { x: null, y: null };return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a));
    }, e.prototype.difference = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);return this.each(function () {
            var d = a(this),
                f = d.data("owl.carousel");f || (f = new e(this, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, f));
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function () {
        var a, c;b.clearInterval(this._interval);for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b);
                }, this); f++ < e;) {
                    this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { lazyLoad: !1 }, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e,
                f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
                f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this._core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;a.each(d, function (b, c) {
            e.push(a(c).height());
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function () {
        var a, b;for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a);
        }, this));
    };e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) {
        var c = function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
        }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");if (!g) throw new Error("Missing video URL.");if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");c = "vzaar";
        }d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function (b, c) {
        var d,
            e,
            f,
            g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function l(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
        };if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a[0].thumbnail_large, l(f);
            } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a.framegrab_url, l(f);
            } });
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function (b) {
        var c,
            d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function () {
        var a, b;this._core.$element.off("click.owl.video");for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this) }, this.core.$element.on(this.handlers);
    };e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);var b,
                c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this.core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c);
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop();
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
            }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
        }, this), d || this._core.settings.autoplayTimeout);
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
    }, e.prototype.destroy = function () {
        var a, b;this.stop();for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () {
        var b,
            c = this._core.settings;this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed);
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed);
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this));for (b in this._overrides) {
            this._core[b] = a.proxy(this[b], this);
        }
    }, e.prototype.destroy = function () {
        var a, b, c, d;for (a in this._handlers) {
            this.$element.off(a, this._handlers[a]);
        }for (b in this._controls) {
            this._controls[b].remove();
        }for (d in this.overides) {
            this._core[d] = this._overrides[d];
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, e.prototype.update = function () {
        var a,
            b,
            c,
            d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;b = 0, ++c;
            }b += this._core.mergers(this._core.relative(a));
        }
    }, e.prototype.draw = function () {
        var b,
            c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b;
        }, this)).pop();
    }, e.prototype.getPosition = function (b) {
        var c,
            d,
            e = this._core.settings;return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function (b, c, d) {
        var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if (!c) return;this._hashes[c] = b.content;
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null;
                    }).join();if (!e || b.location.hash.slice(1) === e) return;b.location.hash = e;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
        }, this));
    };e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () {
        var c, d;a(b).off("hashchange.owl.navigation");for (c in this._handlers) {
            this._core.$element.off(c, this._handlers[c]);
        }for (d in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[d] && (this[d] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1;
        }), e;
    }function f(a) {
        return e(a, !0);
    }var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function csstransforms() {
            return !!e("transform");
        }, csstransforms3d: function csstransforms3d() {
            return !!e("perspective");
        }, csstransitions: function csstransitions() {
            return !!e("transition");
        }, cssanimations: function cssanimations() {
            return !!e("animation");
        } };j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);

// carousel arrows
var navArrows = ["\n    <svg class=\"icon icon-arrow-prev\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"img/sprite.svg#icon-arrow-prev\"></use>\n    </svg>", "<svg class=\"icon icon-arrow-next\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"img/sprite.svg#icon-arrow-next\"></use>\n    </svg>"];

// carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navElement: 'button',
        navText: navArrows,
        animateOut: 'fadeOut',
        dots: true,
        autoHeight: true
    });
});

// menu
(function () {
    var burger = $('.js-burger'),
        menu = $('.js-menu'),
        menuItem = $('.js-menu-item');
    burger.on('click', function () {
        burger.toggleClass('active');
        menu.toggleClass('visible');
    });
    menuItem.on('click', function () {
        menuItem.removeClass('active');
        $(this).addClass('active');
    });
})();

(function () {
    $('.js-price-btn').hover(function () {
        $(this).parents('.js-price').find('.js-price-head').css('background-color', '#2E2EFE');
    }, function () {
        $(this).parents('.js-price').find('.js-price-head').css('background-color', '#5b6ceb');
    });
})();