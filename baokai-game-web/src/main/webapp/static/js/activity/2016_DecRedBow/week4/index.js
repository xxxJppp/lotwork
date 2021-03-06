! function(e, t) {
    function a(e) {
        var t = e.length,
            a = ue.type(e);
        return !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === a || "function" !== a && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function n(e) {
        var t = Ee[e] = {};
        return ue.each(e.match(ce) || [], function(e, a) {
            t[a] = !0
        }), t
    }

    function r(e, a, n, r) {
        if (ue.acceptData(e)) {
            var i, s, o = ue.expando,
                l = e.nodeType,
                p = l ? ue.cache : e,
                u = l ? e[o] : e[o] && o;
            if (u && p[u] && (r || p[u].data) || n !== t || "string" != typeof a) return u || (u = l ? e[o] = te.pop() || ue.guid++ : o), p[u] || (p[u] = l ? {} : {
                toJSON: ue.noop
            }), ("object" == typeof a || "function" == typeof a) && (r ? p[u] = ue.extend(p[u], a) : p[u].data = ue.extend(p[u].data, a)), s = p[u], r || (s.data || (s.data = {}), s = s.data), n !== t && (s[ue.camelCase(a)] = n), "string" == typeof a ? (i = s[a], null == i && (i = s[ue.camelCase(a)])) : i = s, i
        }
    }

    function i(e, t, a) {
        if (ue.acceptData(e)) {
            var n, r, i = e.nodeType,
                s = i ? ue.cache : e,
                l = i ? e[ue.expando] : ue.expando;
            if (s[l]) {
                if (t && (n = a ? s[l] : s[l].data)) {
                    ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in n ? t = [t] : (t = ue.camelCase(t), t = t in n ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete n[t[r]];
                    if (a ? !o(n) : !ue.isEmptyObject(n)) return
                }(a || (delete s[l].data, o(s[l]))) && (i ? ue.cleanData([e], !0) : ue.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function s(e, a, n) {
        if (n === t && 1 === e.nodeType) {
            var r = "data-" + a.replace(Me, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? ue.parseJSON(n) : n)
                } catch (i) {}
                ue.data(e, a, n)
            } else n = t
        }
        return n
    }

    function o(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function p() {
        return !1
    }

    function u() {
        try {
            return K.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function c(e, t, a) {
        if (ue.isFunction(t)) return ue.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== a
        });
        if (t.nodeType) return ue.grep(e, function(e) {
            return e === t !== a
        });
        if ("string" == typeof t) {
            if (_e.test(t)) return ue.filter(t, e, a);
            t = ue.filter(t, e)
        }
        return ue.grep(e, function(e) {
            return ue.inArray(e, t) >= 0 !== a
        })
    }

    function f(e) {
        var t = Fe.split("|"),
            a = e.createDocumentFragment();
        if (a.createElement)
            for (; t.length;) a.createElement(t.pop());
        return a
    }

    function m(e, t) {
        return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var a, n = 0; null != (a = e[n]); n++) ue._data(a, "globalEval", !t || ue._data(t[n], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ue.hasData(e)) {
            var a, n, r, i = ue._data(e),
                s = ue._data(t, i),
                o = i.events;
            if (o) {
                delete s.handle, s.events = {};
                for (a in o)
                    for (n = 0, r = o[a].length; r > n; n++) ue.event.add(t, a, o[a][n])
            }
            s.data && (s.data = ue.extend({}, s.data))
        }
    }

    function w(e, t) {
        var a, n, r;
        if (1 === t.nodeType) {
            if (a = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
                r = ue._data(t);
                for (n in r.events) ue.removeEvent(t, n, r.handle);
                t.removeAttribute(ue.expando)
            }
            "script" === a && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === a ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === a && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === a ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === a || "textarea" === a) && (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, a) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(a || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(a || "*") : t;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) !a || ue.nodeName(r, a) ? s.push(r) : ue.merge(s, x(r, a));
        return a === t || a && ue.nodeName(e, a) ? ue.merge([e], s) : s
    }

    function b(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function T(e, t) {
        if (t in e) return t;
        for (var a = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = St.length; r--;)
            if (t = St[r] + a, t in e) return t;
        return n
    }

    function C(e, t) {
        return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
    }

    function S(e, t) {
        for (var a, n, r, i = [], s = 0, o = e.length; o > s; s++) n = e[s], n.style && (i[s] = ue._data(n, "olddisplay"), a = n.style.display, t ? (i[s] || "none" !== a || (n.style.display = ""), "" === n.style.display && C(n) && (i[s] = ue._data(n, "olddisplay", z(n.nodeName)))) : i[s] || (r = C(n), (a && "none" !== a || !r) && ue._data(n, "olddisplay", r ? a : ue.css(n, "display"))));
        for (s = 0; o > s; s++) n = e[s], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[s] || "" : "none"));
        return e
    }

    function E(e, t, a) {
        var n = vt.exec(t);
        return n ? Math.max(0, n[1] - (a || 0)) + (n[2] || "px") : t
    }

    function k(e, t, a, n, r) {
        for (var i = a === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === a && (s += ue.css(e, a + Ct[i], !0, r)), n ? ("content" === a && (s -= ue.css(e, "padding" + Ct[i], !0, r)), "margin" !== a && (s -= ue.css(e, "border" + Ct[i] + "Width", !0, r))) : (s += ue.css(e, "padding" + Ct[i], !0, r), "padding" !== a && (s += ue.css(e, "border" + Ct[i] + "Width", !0, r)));
        return s
    }

    function M(e, t, a) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = ut(e),
            s = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i);
        if (0 >= r || null == r) {
            if (r = dt(e, t, i), (0 > r || null == r) && (r = e.style[t]), yt.test(r)) return r;
            n = s && (ue.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + k(e, t, a || (s ? "border" : "content"), n, i) + "px"
    }

    function z(e) {
        var t = K,
            a = xt[e];
        return a || (a = N(e, t), "none" !== a && a || (pt = (pt || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (pt[0].contentWindow || pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), a = N(e, t), pt.detach()), xt[e] = a), a
    }

    function N(e, t) {
        var a = ue(t.createElement(e)).appendTo(t.body),
            n = ue.css(a[0], "display");
        return a.remove(), n
    }

    function D(e, t, a, n) {
        var r;
        if (ue.isArray(t)) ue.each(t, function(t, r) {
            a || kt.test(e) ? n(e, r) : D(e + "[" + ("object" == typeof r ? t : "") + "]", r, a, n)
        });
        else if (a || "object" !== ue.type(t)) n(e, t);
        else
            for (r in t) D(e + "[" + r + "]", t[r], a, n)
    }

    function P(e) {
        return function(t, a) {
            "string" != typeof t && (a = t, t = "*");
            var n, r = 0,
                i = t.toLowerCase().match(ce) || [];
            if (ue.isFunction(a))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(a)) : (e[n] = e[n] || []).push(a)
        }
    }

    function L(e, a, n, r) {
        function i(l) {
            var p;
            return s[l] = !0, ue.each(e[l] || [], function(e, l) {
                var u = l(a, n, r);
                return "string" != typeof u || o || s[u] ? o ? !(p = u) : t : (a.dataTypes.unshift(u), i(u), !1)
            }), p
        }
        var s = {},
            o = e === qt;
        return i(a.dataTypes[0]) || !s["*"] && i("*")
    }

    function A(e, a) {
        var n, r, i = ue.ajaxSettings.flatOptions || {};
        for (r in a) a[r] !== t && ((i[r] ? e : n || (n = {}))[r] = a[r]);
        return n && ue.extend(!0, e, n), e
    }

    function H(e, a, n) {
        for (var r, i, s, o, l = e.contents, p = e.dataTypes;
            "*" === p[0];) p.shift(), i === t && (i = e.mimeType || a.getResponseHeader("Content-Type"));
        if (i)
            for (o in l)
                if (l[o] && l[o].test(i)) {
                    p.unshift(o);
                    break
                }
        if (p[0] in n) s = p[0];
        else {
            for (o in n) {
                if (!p[0] || e.converters[o + " " + p[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== p[0] && p.unshift(s), n[s]) : t
    }

    function I(e, t, a, n) {
        var r, i, s, o, l, p = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) p[s.toLowerCase()] = e.converters[s];
        for (i = u.shift(); i;)
            if (e.responseFields[i] && (a[e.responseFields[i]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
            if (s = p[l + " " + i] || p["* " + i], !s)
                for (r in p)
                    if (o = r.split(" "), o[1] === i && (s = p[l + " " + o[0]] || p["* " + o[0]])) {
                        s === !0 ? s = p[r] : p[r] !== !0 && (i = o[0], u.unshift(o[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function O() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function j() {
        return setTimeout(function() {
            Qt = t
        }), Qt = ue.now()
    }

    function X(e, t, a) {
        for (var n, r = (ra[t] || []).concat(ra["*"]), i = 0, s = r.length; s > i; i++)
            if (n = r[i].call(a, t, e)) return n
    }

    function R(e, t, a) {
        var n, r, i = 0,
            s = na.length,
            o = ue.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Qt || j(), a = Math.max(0, p.startTime + p.duration - t), n = a / p.duration || 0, i = 1 - n, s = 0, l = p.tweens.length; l > s; s++) p.tweens[s].run(i);
                return o.notifyWith(e, [p, i, a]), 1 > i && l ? a : (o.resolveWith(e, [p]), !1)
            },
            p = o.promise({
                elem: e,
                props: ue.extend({}, t),
                opts: ue.extend(!0, {
                    specialEasing: {}
                }, a),
                originalProperties: t,
                originalOptions: a,
                startTime: Qt || j(),
                duration: a.duration,
                tweens: [],
                createTween: function(t, a) {
                    var n = ue.Tween(e, p.opts, t, a, p.opts.specialEasing[t] || p.opts.easing);
                    return p.tweens.push(n), n
                },
                stop: function(t) {
                    var a = 0,
                        n = t ? p.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > a; a++) p.tweens[a].run(1);
                    return t ? o.resolveWith(e, [p, t]) : o.rejectWith(e, [p, t]), this
                }
            }),
            u = p.props;
        for (W(u, p.opts.specialEasing); s > i; i++)
            if (n = na[i].call(p, e, u, p.opts)) return n;
        return ue.map(u, X, p), ue.isFunction(p.opts.start) && p.opts.start.call(e, p), ue.fx.timer(ue.extend(l, {
            elem: e,
            anim: p,
            queue: p.opts.queue
        })), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
    }

    function W(e, t) {
        var a, n, r, i, s;
        for (a in e)
            if (n = ue.camelCase(a), r = t[n], i = e[a], ue.isArray(i) && (r = i[1], i = e[a] = i[0]), a !== n && (e[n] = i, delete e[a]), s = ue.cssHooks[n], s && "expand" in s) {
                i = s.expand(i), delete e[n];
                for (a in i) a in e || (e[a] = i[a], t[a] = r)
            } else t[n] = r
    }

    function _(e, t, a) {
        var n, r, i, s, o, l, p = this,
            u = {},
            d = e.style,
            c = e.nodeType && C(e),
            f = ue._data(e, "fxshow");
        a.queue || (o = ue._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
            o.unqueued || l()
        }), o.unqueued++, p.always(function() {
            p.always(function() {
                o.unqueued--, ue.queue(e, "fx").length || o.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (a.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== z(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), a.overflow && (d.overflow = "hidden", ue.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = a.overflow[0], d.overflowX = a.overflow[1], d.overflowY = a.overflow[2]
        }));
        for (n in t)
            if (r = t[n], ea.exec(r)) {
                if (delete t[n], i = i || "toggle" === r, r === (c ? "hide" : "show")) continue;
                u[n] = f && f[n] || ue.style(e, n)
            }
        if (!ue.isEmptyObject(u)) {
            f ? "hidden" in f && (c = f.hidden) : f = ue._data(e, "fxshow", {}), i && (f.hidden = !c), c ? ue(e).show() : p.done(function() {
                ue(e).hide()
            }), p.done(function() {
                var t;
                ue._removeData(e, "fxshow");
                for (t in u) ue.style(e, t, u[t])
            });
            for (n in u) s = X(c ? f[n] : 0, n, p), n in f || (f[n] = s.start, c && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function q(e, t, a, n, r) {
        return new q.prototype.init(e, t, a, n, r)
    }

    function G(e, t) {
        var a, n = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) a = Ct[r], n["margin" + a] = n["padding" + a] = e;
        return t && (n.opacity = n.width = e), n
    }

    function Y(e) {
        return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var F, $, V = typeof t,
        J = e.location,
        K = e.document,
        U = K.documentElement,
        Q = e.jQuery,
        Z = e.$,
        ee = {},
        te = [],
        ae = "1.10.2",
        ne = te.concat,
        re = te.push,
        ie = te.slice,
        se = te.indexOf,
        oe = ee.toString,
        le = ee.hasOwnProperty,
        pe = ae.trim,
        ue = function(e, t) {
            return new ue.fn.init(e, t, $)
        },
        de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ce = /\S+/g,
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^[\],:{}\s]*$/,
        ve = /(?:^|:|,)(?:\s*\[)+/g,
        ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        we = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        xe = /^-ms-/,
        be = /-([\da-z])/gi,
        Te = function(e, t) {
            return t.toUpperCase()
        },
        Ce = function(e) {
            (K.addEventListener || "load" === e.type || "complete" === K.readyState) && (Se(), ue.ready())
        },
        Se = function() {
            K.addEventListener ? (K.removeEventListener("DOMContentLoaded", Ce, !1), e.removeEventListener("load", Ce, !1)) : (K.detachEvent("onreadystatechange", Ce), e.detachEvent("onload", Ce))
        };
    ue.fn = ue.prototype = {
            jquery: ae,
            constructor: ue,
            init: function(e, a, n) {
                var r, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !r || !r[1] && a) return !a || a.jquery ? (a || n).find(e) : this.constructor(a).find(e);
                    if (r[1]) {
                        if (a = a instanceof ue ? a[0] : a, ue.merge(this, ue.parseHTML(r[1], a && a.nodeType ? a.ownerDocument || a : K, !0)), he.test(r[1]) && ue.isPlainObject(a))
                            for (r in a) ue.isFunction(this[r]) ? this[r](a[r]) : this.attr(r, a[r]);
                        return this
                    }
                    if (i = K.getElementById(r[2]), i && i.parentNode) {
                        if (i.id !== r[2]) return n.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = K, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return ie.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ue.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ue.each(this, e, t)
            },
            ready: function(e) {
                return ue.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(ie.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    a = +e + (0 > e ? t : 0);
                return this.pushStack(a >= 0 && t > a ? [this[a]] : [])
            },
            map: function(e) {
                return this.pushStack(ue.map(this, function(t, a) {
                    return e.call(t, a, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: re,
            sort: [].sort,
            splice: [].splice
        }, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
            var e, a, n, r, i, s, o = arguments[0] || {},
                l = 1,
                p = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, l = 2), "object" == typeof o || ue.isFunction(o) || (o = {}), p === l && (o = this, --l); p > l; l++)
                if (null != (i = arguments[l]))
                    for (r in i) e = o[r], n = i[r], o !== n && (u && n && (ue.isPlainObject(n) || (a = ue.isArray(n))) ? (a ? (a = !1, s = e && ue.isArray(e) ? e : []) : s = e && ue.isPlainObject(e) ? e : {}, o[r] = ue.extend(u, s, n)) : n !== t && (o[r] = n));
            return o
        }, ue.extend({
            expando: "jQuery" + (ae + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === ue && (e.$ = Z), t && e.jQuery === ue && (e.jQuery = Q), ue
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ue.readyWait++ : ue.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--ue.readyWait : !ue.isReady) {
                    if (!K.body) return setTimeout(ue.ready);
                    ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (F.resolveWith(K, [ue]), ue.fn.trigger && ue(K).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === ue.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ue.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[oe.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var a;
                if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
                try {
                    if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ue.support.ownLast)
                    for (a in e) return le.call(e, a);
                for (a in e);
                return a === t || le.call(e, a)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, a) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (a = t, t = !1), t = t || K;
                var n = he.exec(e),
                    r = !a && [];
                return n ? [t.createElement(n[1])] : (n = ue.buildFragment([e], t, r), r && ue(r).remove(), ue.merge([], n.childNodes))
            },
            parseJSON: function(a) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(a) : null === a ? a : "string" == typeof a && (a = ue.trim(a), a && ge.test(a.replace(ye, "@").replace(we, "]").replace(ve, ""))) ? Function("return " + a)() : (ue.error("Invalid JSON: " + a), t)
            },
            parseXML: function(a) {
                var n, r;
                if (!a || "string" != typeof a) return null;
                try {
                    e.DOMParser ? (r = new DOMParser, n = r.parseFromString(a, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(a))
                } catch (i) {
                    n = t
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + a), n
            },
            noop: function() {},
            globalEval: function(t) {
                t && ue.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(xe, "ms-").replace(be, Te)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = a(e);
                if (n) {
                    if (o)
                        for (; s > i && (r = t.apply(e[i], n), r !== !1); i++);
                    else
                        for (i in e)
                            if (r = t.apply(e[i], n), r === !1) break
                } else if (o)
                    for (; s > i && (r = t.call(e[i], i, e[i]), r !== !1); i++);
                else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]), r === !1) break; return e
            },
            trim: pe && !pe.call("\ufeff ") ? function(e) {
                return null == e ? "" : pe.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(fe, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ue.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
            },
            inArray: function(e, t, a) {
                var n;
                if (t) {
                    if (se) return se.call(t, e, a);
                    for (n = t.length, a = a ? 0 > a ? Math.max(0, n + a) : a : 0; n > a; a++)
                        if (a in t && t[a] === e) return a
                }
                return -1
            },
            merge: function(e, a) {
                var n = a.length,
                    r = e.length,
                    i = 0;
                if ("number" == typeof n)
                    for (; n > i; i++) e[r++] = a[i];
                else
                    for (; a[i] !== t;) e[r++] = a[i++];
                return e.length = r, e
            },
            grep: function(e, t, a) {
                var n, r = [],
                    i = 0,
                    s = e.length;
                for (a = !!a; s > i; i++) n = !!t(e[i], i), a !== n && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = a(e),
                    l = [];
                if (o)
                    for (; s > i; i++) r = t(e[i], i, n), null != r && (l[l.length] = r);
                else
                    for (i in e) r = t(e[i], i, n), null != r && (l[l.length] = r);
                return ne.apply([], l)
            },
            guid: 1,
            proxy: function(e, a) {
                var n, r, i;
                return "string" == typeof a && (i = e[a], a = e, e = i), ue.isFunction(e) ? (n = ie.call(arguments, 2), r = function() {
                    return e.apply(a || this, n.concat(ie.call(arguments)))
                }, r.guid = e.guid = e.guid || ue.guid++, r) : t
            },
            access: function(e, a, n, r, i, s, o) {
                var l = 0,
                    p = e.length,
                    u = null == n;
                if ("object" === ue.type(n)) {
                    i = !0;
                    for (l in n) ue.access(e, a, l, n[l], !0, s, o)
                } else if (r !== t && (i = !0, ue.isFunction(r) || (o = !0), u && (o ? (a.call(e, r), a = null) : (u = a, a = function(e, t, a) {
                        return u.call(ue(e), a)
                    })), a))
                    for (; p > l; l++) a(e[l], n, o ? r : r.call(e[l], l, a(e[l], n)));
                return i ? e : u ? a.call(e) : p ? a(e[0], n) : s
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, a, n) {
                var r, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                r = a.apply(e, n || []);
                for (i in t) e.style[i] = s[i];
                return r
            }
        }), ue.ready.promise = function(t) {
            if (!F)
                if (F = ue.Deferred(), "complete" === K.readyState) setTimeout(ue.ready);
                else if (K.addEventListener) K.addEventListener("DOMContentLoaded", Ce, !1), e.addEventListener("load", Ce, !1);
            else {
                K.attachEvent("onreadystatechange", Ce), e.attachEvent("onload", Ce);
                var a = !1;
                try {
                    a = null == e.frameElement && K.documentElement
                } catch (n) {}
                a && a.doScroll && function r() {
                    if (!ue.isReady) {
                        try {
                            a.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        Se(), ue.ready()
                    }
                }()
            }
            return F.promise(t)
        }, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        }), $ = ue(K),
        function(e, t) {
            function a(e, t, a, n) {
                var r, i, s, o, l, p, u, d, m, h;
                if ((t ? t.ownerDocument || t : R) !== L && P(t), t = t || L, a = a || [], !e || "string" != typeof e) return a;
                if (1 !== (o = t.nodeType) && 9 !== o) return [];
                if (H && !n) {
                    if (r = we.exec(e))
                        if (s = r[1]) {
                            if (9 === o) {
                                if (i = t.getElementById(s), !i || !i.parentNode) return a;
                                if (i.id === s) return a.push(i), a
                            } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(s)) && j(t, i) && i.id === s) return a.push(i), a
                        } else {
                            if (r[2]) return ee.apply(a, t.getElementsByTagName(e)), a;
                            if ((s = r[3]) && C.getElementsByClassName && t.getElementsByClassName) return ee.apply(a, t.getElementsByClassName(s)), a
                        }
                    if (C.qsa && (!I || !I.test(e))) {
                        if (d = u = X, m = t, h = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                            for (p = c(e), (u = t.getAttribute("id")) ? d = u.replace(Te, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = p.length; l--;) p[l] = d + f(p[l]);
                            m = fe.test(e) && t.parentNode || t, h = p.join(",")
                        }
                        if (h) try {
                            return ee.apply(a, m.querySelectorAll(h)), a
                        } catch (g) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(pe, "$1"), t, a, n)
            }

            function n() {
                function e(a, n) {
                    return t.push(a += " ") > E.cacheLength && delete e[t.shift()], e[a] = n
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[X] = !0, e
            }

            function i(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (a) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function s(e, t) {
                for (var a = e.split("|"), n = e.length; n--;) E.attrHandle[a[n]] = t
            }

            function o(e, t) {
                var a = t && e,
                    n = a && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (n) return n;
                if (a)
                    for (; a = a.nextSibling;)
                        if (a === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return function(t) {
                    var a = t.nodeName.toLowerCase();
                    return "input" === a && t.type === e
                }
            }

            function p(e) {
                return function(t) {
                    var a = t.nodeName.toLowerCase();
                    return ("input" === a || "button" === a) && t.type === e
                }
            }

            function u(e) {
                return r(function(t) {
                    return t = +t, r(function(a, n) {
                        for (var r, i = e([], a.length, t), s = i.length; s--;) a[r = i[s]] && (a[r] = !(n[r] = a[r]))
                    })
                })
            }

            function d() {}

            function c(e, t) {
                var n, r, i, s, o, l, p, u = G[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (o = e, l = [], p = E.preFilter; o;) {
                    (!n || (r = de.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(i = [])), n = !1, (r = ce.exec(o)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(pe, " ")
                    }), o = o.slice(n.length));
                    for (s in E.filter) !(r = ve[s].exec(o)) || p[s] && !(r = p[s](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: s,
                        matches: r
                    }), o = o.slice(n.length));
                    if (!n) break
                }
                return t ? o.length : o ? a.error(e) : G(e, l).slice(0)
            }

            function f(e) {
                for (var t = 0, a = e.length, n = ""; a > t; t++) n += e[t].value;
                return n
            }

            function m(e, t, a) {
                var n = t.dir,
                    r = a && "parentNode" === n,
                    i = _++;
                return t.first ? function(t, a, i) {
                    for (; t = t[n];)
                        if (1 === t.nodeType || r) return e(t, a, i)
                } : function(t, a, s) {
                    var o, l, p, u = W + " " + i;
                    if (s) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || r) && e(t, a, s)) return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || r)
                                if (p = t[X] || (t[X] = {}), (l = p[n]) && l[0] === u) {
                                    if ((o = l[1]) === !0 || o === S) return o === !0
                                } else if (l = p[n] = [u], l[1] = e(t, a, s) || S, l[1] === !0) return !0
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, a, n) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, a, n)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, a, n, r) {
                for (var i, s = [], o = 0, l = e.length, p = null != t; l > o; o++)(i = e[o]) && (!a || a(i, n, r)) && (s.push(i), p && t.push(o));
                return s
            }

            function v(e, t, a, n, i, s) {
                return n && !n[X] && (n = v(n)), i && !i[X] && (i = v(i, s)), r(function(r, s, o, l) {
                    var p, u, d, c = [],
                        f = [],
                        m = s.length,
                        h = r || x(t || "*", o.nodeType ? [o] : o, []),
                        v = !e || !r && t ? h : g(h, c, e, o, l),
                        y = a ? i || (r ? e : m || n) ? [] : s : v;
                    if (a && a(v, y, o, l), n)
                        for (p = g(y, f), n(p, [], o, l), u = p.length; u--;)(d = p[u]) && (y[f[u]] = !(v[f[u]] = d));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (p = [], u = y.length; u--;)(d = y[u]) && p.push(v[u] = d);
                                i(null, y = [], p, l)
                            }
                            for (u = y.length; u--;)(d = y[u]) && (p = i ? ae.call(r, d) : c[u]) > -1 && (r[p] = !(s[p] = d))
                        }
                    } else y = g(y === s ? y.splice(m, y.length) : y), i ? i(null, s, y, l) : ee.apply(s, y)
                })
            }

            function y(e) {
                for (var t, a, n, r = e.length, i = E.relative[e[0].type], s = i || E.relative[" "], o = i ? 1 : 0, l = m(function(e) {
                        return e === t
                    }, s, !0), p = m(function(e) {
                        return ae.call(t, e) > -1
                    }, s, !0), u = [function(e, a, n) {
                        return !i && (n || a !== N) || ((t = a).nodeType ? l(e, a, n) : p(e, a, n))
                    }]; r > o; o++)
                    if (a = E.relative[e[o].type]) u = [m(h(u), a)];
                    else {
                        if (a = E.filter[e[o].type].apply(null, e[o].matches), a[X]) {
                            for (n = ++o; r > n && !E.relative[e[n].type]; n++);
                            return v(o > 1 && h(u), o > 1 && f(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(pe, "$1"), a, n > o && y(e.slice(o, n)), r > n && y(e = e.slice(n)), r > n && f(e))
                        }
                        u.push(a)
                    }
                return h(u)
            }

            function w(e, t) {
                var n = 0,
                    i = t.length > 0,
                    s = e.length > 0,
                    o = function(r, o, l, p, u) {
                        var d, c, f, m = [],
                            h = 0,
                            v = "0",
                            y = r && [],
                            w = null != u,
                            x = N,
                            b = r || s && E.find.TAG("*", u && o.parentNode || o),
                            T = W += null == x ? 1 : Math.random() || .1;
                        for (w && (N = o !== L && o, S = n); null != (d = b[v]); v++) {
                            if (s && d) {
                                for (c = 0; f = e[c++];)
                                    if (f(d, o, l)) {
                                        p.push(d);
                                        break
                                    }
                                w && (W = T, S = ++n)
                            }
                            i && ((d = !f && d) && h--, r && y.push(d))
                        }
                        if (h += v, i && v !== h) {
                            for (c = 0; f = t[c++];) f(y, m, o, l);
                            if (r) {
                                if (h > 0)
                                    for (; v--;) y[v] || m[v] || (m[v] = Q.call(p));
                                m = g(m)
                            }
                            ee.apply(p, m), w && !r && m.length > 0 && h + t.length > 1 && a.uniqueSort(p)
                        }
                        return w && (W = T, N = x), y
                    };
                return i ? r(o) : o
            }

            function x(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
                return n
            }

            function b(e, t, a, n) {
                var r, i, s, o, l, p = c(e);
                if (!n && 1 === p.length) {
                    if (i = p[0] = p[0].slice(0), i.length > 2 && "ID" === (s = i[0]).type && C.getById && 9 === t.nodeType && H && E.relative[i[1].type]) {
                        if (t = (E.find.ID(s.matches[0].replace(Ce, Se), t) || [])[0], !t) return a;
                        e = e.slice(i.shift().value.length)
                    }
                    for (r = ve.needsContext.test(e) ? 0 : i.length; r-- && (s = i[r], !E.relative[o = s.type]);)
                        if ((l = E.find[o]) && (n = l(s.matches[0].replace(Ce, Se), fe.test(i[0].type) && t.parentNode || t))) {
                            if (i.splice(r, 1), e = n.length && f(i), !e) return ee.apply(a, n), a;
                            break
                        }
                }
                return z(e, p)(n, t, !H, a, fe.test(e)), a
            }
            var T, C, S, E, k, M, z, N, D, P, L, A, H, I, B, O, j, X = "sizzle" + -new Date,
                R = e.document,
                W = 0,
                _ = 0,
                q = n(),
                G = n(),
                Y = n(),
                F = !1,
                $ = function(e, t) {
                    return e === t ? (F = !0, 0) : 0
                },
                V = typeof t,
                J = 1 << 31,
                K = {}.hasOwnProperty,
                U = [],
                Q = U.pop,
                Z = U.push,
                ee = U.push,
                te = U.slice,
                ae = U.indexOf || function(e) {
                    for (var t = 0, a = this.length; a > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                re = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                se = ie.replace("w", "w#"),
                oe = "\\[" + re + "*(" + ie + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + re + "*\\]",
                le = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                pe = RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
                de = RegExp("^" + re + "*," + re + "*"),
                ce = RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
                fe = RegExp(re + "*[+~]"),
                me = RegExp("=" + re + "*([^\\]'\"]*)" + re + "*\\]", "g"),
                he = RegExp(le),
                ge = RegExp("^" + se + "$"),
                ve = {
                    ID: RegExp("^#(" + ie + ")"),
                    CLASS: RegExp("^\\.(" + ie + ")"),
                    TAG: RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + oe),
                    PSEUDO: RegExp("^" + le),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                },
                ye = /^[^{]+\{\s*\[native \w/,
                we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xe = /^(?:input|select|textarea|button)$/i,
                be = /^h\d$/i,
                Te = /'|\\/g,
                Ce = RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
                Se = function(e, t, a) {
                    var n = "0x" + t - 65536;
                    return n !== n || a ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                ee.apply(U = te.call(R.childNodes), R.childNodes), U[R.childNodes.length].nodeType
            } catch (Ee) {
                ee = {
                    apply: U.length ? function(e, t) {
                        Z.apply(e, te.call(t))
                    } : function(e, t) {
                        for (var a = e.length, n = 0; e[a++] = t[n++];);
                        e.length = a - 1
                    }
                }
            }
            M = a.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, C = a.support = {}, P = a.setDocument = function(e) {
                var a = e ? e.ownerDocument || e : R,
                    n = a.defaultView;
                return a !== L && 9 === a.nodeType && a.documentElement ? (L = a, A = a.documentElement, H = !M(a), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                    P()
                }), C.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), C.getElementsByTagName = i(function(e) {
                    return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
                }), C.getElementsByClassName = i(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), C.getById = i(function(e) {
                    return A.appendChild(e).id = X, !a.getElementsByName || !a.getElementsByName(X).length
                }), C.getById ? (E.find.ID = function(e, t) {
                    if (typeof t.getElementById !== V && H) {
                        var a = t.getElementById(e);
                        return a && a.parentNode ? [a] : []
                    }
                }, E.filter.ID = function(e) {
                    var t = e.replace(Ce, Se);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete E.find.ID, E.filter.ID = function(e) {
                    var t = e.replace(Ce, Se);
                    return function(e) {
                        var a = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                        return a && a.value === t
                    }
                }), E.find.TAG = C.getElementsByTagName ? function(e, a) {
                    return typeof a.getElementsByTagName !== V ? a.getElementsByTagName(e) : t
                } : function(e, t) {
                    var a, n = [],
                        r = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; a = i[r++];) 1 === a.nodeType && n.push(a);
                        return n
                    }
                    return i
                }, E.find.CLASS = C.getElementsByClassName && function(e, a) {
                    return typeof a.getElementsByClassName !== V && H ? a.getElementsByClassName(e) : t
                }, B = [], I = [], (C.qsa = ye.test(a.querySelectorAll)) && (i(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || I.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || I.push(":checked")
                }), i(function(e) {
                    var t = a.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && I.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (C.matchesSelector = ye.test(O = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(e) {
                    C.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), B.push("!=", le)
                }), I = I.length && RegExp(I.join("|")), B = B.length && RegExp(B.join("|")), j = ye.test(A.contains) || A.compareDocumentPosition ? function(e, t) {
                    var a = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(a.contains ? a.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, $ = A.compareDocumentPosition ? function(e, t) {
                    if (e === t) return F = !0, 0;
                    var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return n ? 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === a || j(R, e) ? -1 : t === a || j(R, t) ? 1 : D ? ae.call(D, e) - ae.call(D, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var n, r = 0,
                        i = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        p = [t];
                    if (e === t) return F = !0, 0;
                    if (!i || !s) return e === a ? -1 : t === a ? 1 : i ? -1 : s ? 1 : D ? ae.call(D, e) - ae.call(D, t) : 0;
                    if (i === s) return o(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) p.unshift(n);
                    for (; l[r] === p[r];) r++;
                    return r ? o(l[r], p[r]) : l[r] === R ? -1 : p[r] === R ? 1 : 0
                }, a) : L
            }, a.matches = function(e, t) {
                return a(e, null, null, t)
            }, a.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== L && P(e), t = t.replace(me, "='$1']"), !(!C.matchesSelector || !H || B && B.test(t) || I && I.test(t))) try {
                    var n = O.call(e, t);
                    if (n || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) {}
                return a(t, L, null, [e]).length > 0
            }, a.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && P(e), j(e, t)
            }, a.attr = function(e, a) {
                (e.ownerDocument || e) !== L && P(e);
                var n = E.attrHandle[a.toLowerCase()],
                    r = n && K.call(E.attrHandle, a.toLowerCase()) ? n(e, a, !H) : t;
                return r === t ? C.attributes || !H ? e.getAttribute(a) : (r = e.getAttributeNode(a)) && r.specified ? r.value : null : r
            }, a.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, a.uniqueSort = function(e) {
                var t, a = [],
                    n = 0,
                    r = 0;
                if (F = !C.detectDuplicates, D = !C.sortStable && e.slice(0), e.sort($), F) {
                    for (; t = e[r++];) t === e[r] && (n = a.push(r));
                    for (; n--;) e.splice(a[n], 1)
                }
                return e
            }, k = a.getText = function(e) {
                var t, a = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) a += k(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n]; n++) a += k(t);
                return a
            }, E = a.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: ve,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Ce, Se), e[3] = (e[4] || e[5] || "").replace(Ce, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var a, n = !e[5] && e[2];
                        return ve.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : n && he.test(n) && (a = c(n, !0)) && (a = n.indexOf(")", n.length - a) - n.length) && (e[0] = e[0].slice(0, a), e[2] = n.slice(0, a)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Ce, Se).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = q[e + " "];
                        return t || (t = RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && q(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = a.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, a, n, r) {
                        var i = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, a, l) {
                            var p, u, d, c, f, m, h = i !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(),
                                y = !l && !o;
                            if (g) {
                                if (i) {
                                    for (; h;) {
                                        for (d = t; d = d[h];)
                                            if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        m = h = "only" === e && !m && "nextSibling"
                                    }
                                    return !0
                                }
                                if (m = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (u = g[X] || (g[X] = {}), p = u[e] || [], f = p[0] === W && p[1], c = p[0] === W && p[2], d = f && g.childNodes[f]; d = ++f && d && d[h] || (c = f = 0) || m.pop();)
                                        if (1 === d.nodeType && ++c && d === t) {
                                            u[e] = [W, f, c];
                                            break
                                        }
                                } else if (y && (p = (t[X] || (t[X] = {}))[e]) && p[0] === W) c = p[1];
                                else
                                    for (;
                                        (d = ++f && d && d[h] || (c = f = 0) || m.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++c || (y && ((d[X] || (d[X] = {}))[e] = [W, c]), d !== t)););
                                return c -= r, c === n || 0 === c % n && c / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = E.pseudos[e] || E.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                        return i[X] ? i(t) : i.length > 1 ? (n = [e, e, "", t], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, a) {
                            for (var n, r = i(e, t), s = r.length; s--;) n = ae.call(e, r[s]), e[n] = !(a[n] = r[s])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            a = [],
                            n = z(e.replace(pe, "$1"));
                        return n[X] ? r(function(e, t, a, r) {
                            for (var i, s = n(e, null, r, []), o = e.length; o--;)(i = s[o]) && (e[o] = !(t[o] = i))
                        }) : function(e, r, i) {
                            return t[0] = e, n(t, null, i, a), !a.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(t) {
                            return a(e, t).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        return ge.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(Ce, Se).toLowerCase(),
                            function(t) {
                                var a;
                                do
                                    if (a = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return a = a.toLowerCase(), a === e || 0 === a.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var a = e.location && e.location.hash;
                        return a && a.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === A
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !E.pseudos.empty(e)
                    },
                    header: function(e) {
                        return be.test(e.nodeName)
                    },
                    input: function(e) {
                        return xe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, a) {
                        return [0 > a ? a + t : a]
                    }),
                    even: u(function(e, t) {
                        for (var a = 0; t > a; a += 2) e.push(a);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var a = 1; t > a; a += 2) e.push(a);
                        return e
                    }),
                    lt: u(function(e, t, a) {
                        for (var n = 0 > a ? a + t : a; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: u(function(e, t, a) {
                        for (var n = 0 > a ? a + t : a; t > ++n;) e.push(n);
                        return e
                    })
                }
            }, E.pseudos.nth = E.pseudos.eq;
            for (T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[T] = l(T);
            for (T in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[T] = p(T);
            d.prototype = E.filters = E.pseudos, E.setFilters = new d, z = a.compile = function(e, t) {
                var a, n = [],
                    r = [],
                    i = Y[e + " "];
                if (!i) {
                    for (t || (t = c(e)), a = t.length; a--;) i = y(t[a]), i[X] ? n.push(i) : r.push(i);
                    i = Y(e, w(r, n))
                }
                return i
            }, C.sortStable = X.split("").sort($).join("") === X, C.detectDuplicates = F, P(), C.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(e, a, n) {
                return n ? t : e.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
            }), C.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || s("value", function(e, a, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || s(ne, function(e, a, n) {
                var r;
                return n ? t : (r = e.getAttributeNode(a)) && r.specified ? r.value : e[a] === !0 ? a.toLowerCase() : null
            }), ue.find = a, ue.expr = a.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = a.uniqueSort, ue.text = a.getText, ue.isXMLDoc = a.isXML, ue.contains = a.contains
        }(e);
    var Ee = {};
    ue.Callbacks = function(e) {
        e = "string" == typeof e ? Ee[e] || n(e) : ue.extend({}, e);
        var a, r, i, s, o, l, p = [],
            u = !e.once && [],
            d = function(t) {
                for (r = e.memory && t, i = !0, o = l || 0, l = 0, s = p.length, a = !0; p && s > o; o++)
                    if (p[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                a = !1, p && (u ? u.length && d(u.shift()) : r ? p = [] : c.disable())
            },
            c = {
                add: function() {
                    if (p) {
                        var t = p.length;
                        ! function n(t) {
                            ue.each(t, function(t, a) {
                                var r = ue.type(a);
                                "function" === r ? e.unique && c.has(a) || p.push(a) : a && a.length && "string" !== r && n(a)
                            })
                        }(arguments), a ? s = p.length : r && (l = t, d(r))
                    }
                    return this
                },
                remove: function() {
                    return p && ue.each(arguments, function(e, t) {
                        for (var n;
                            (n = ue.inArray(t, p, n)) > -1;) p.splice(n, 1), a && (s >= n && s--, o >= n && o--)
                    }), this
                },
                has: function(e) {
                    return e ? ue.inArray(e, p) > -1 : !(!p || !p.length)
                },
                empty: function() {
                    return p = [], s = 0, this
                },
                disable: function() {
                    return p = u = r = t, this
                },
                disabled: function() {
                    return !p
                },
                lock: function() {
                    return u = t, r || c.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !p || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], a ? u.push(t) : d(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, ue.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ue.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ue.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ue.Callbacks("memory")]
                ],
                a = "pending",
                n = {
                    state: function() {
                        return a
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ue.Deferred(function(a) {
                            ue.each(t, function(t, i) {
                                var s = i[0],
                                    o = ue.isFunction(e[t]) && e[t];
                                r[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ue.isFunction(e.promise) ? e.promise().done(a.resolve).fail(a.reject).progress(a.notify) : a[s + "With"](this === n ? a.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ue.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, ue.each(t, function(e, i) {
                var s = i[2],
                    o = i[3];
                n[i[1]] = s.add, o && s.add(function() {
                    a = o
                }, t[1 ^ e][2].disable, t[2][2].lock), r[i[0]] = function() {
                    return r[i[0] + "With"](this === r ? n : this, arguments), this
                }, r[i[0] + "With"] = s.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, a, n, r = 0,
                i = ie.call(arguments),
                s = i.length,
                o = 1 !== s || e && ue.isFunction(e.promise) ? s : 0,
                l = 1 === o ? e : ue.Deferred(),
                p = function(e, a, n) {
                    return function(r) {
                        a[e] = this, n[e] = arguments.length > 1 ? ie.call(arguments) : r, n === t ? l.notifyWith(a, n) : --o || l.resolveWith(a, n)
                    }
                };
            if (s > 1)
                for (t = Array(s), a = Array(s), n = Array(s); s > r; r++) i[r] && ue.isFunction(i[r].promise) ? i[r].promise().done(p(r, n, i)).fail(l.reject).progress(p(r, a, t)) : --o;
            return o || l.resolveWith(n, i), l.promise()
        }
    }), ue.support = function(t) {
        var a, n, r, i, s, o, l, p, u, d = K.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = d.getElementsByTagName("*") || [], n = d.getElementsByTagName("a")[0], !n || !n.style || !a.length) return t;
        i = K.createElement("select"), o = i.appendChild(K.createElement("option")), r = d.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(n.getAttribute("style")), t.hrefNormalized = "/a" === n.getAttribute("href"), t.opacity = /^0.5/.test(n.style.opacity), t.cssFloat = !!n.style.cssFloat, t.checkOn = !!r.value, t.optSelected = o.selected, t.enctype = !!K.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete d.test
        } catch (c) {
            t.deleteExpando = !1
        }
        r = K.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = K.createDocumentFragment(), s.appendChild(r), t.appendChecked = r.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (u in ue(t)) break;
        return t.ownLast = "0" !== u, ue(function() {
            var a, n, r, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = K.getElementsByTagName("body")[0];
            s && (a = K.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(a).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, n = d.appendChild(K.createElement("div")), n.style.cssText = d.style.cssText = i, n.style.marginRight = n.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof d.style.zoom !== V && (d.innerHTML = "", d.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(a), a = d = r = n = null)
        }), a = i = s = o = n = r = null, t
    }({});
    var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Me = /([A-Z])/g;
    ue.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando], !!e && !o(e)
        },
        data: function(e, t, a) {
            return r(e, t, a)
        },
        removeData: function(e, t) {
            return i(e, t)
        },
        _data: function(e, t, a) {
            return r(e, t, a, !0)
        },
        _removeData: function(e, t) {
            return i(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ue.fn.extend({
        data: function(e, a) {
            var n, r, i = null,
                o = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (i = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
                    for (n = l.attributes; n.length > o; o++) r = n[o].name, 0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)), s(l, r, i[r]));
                    ue._data(l, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ue.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ue.data(this, e, a)
            }) : l ? s(l, e, ue.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ue.removeData(this, e)
            })
        }
    }), ue.extend({
        queue: function(e, a, n) {
            var r;
            return e ? (a = (a || "fx") + "queue", r = ue._data(e, a), n && (!r || ue.isArray(n) ? r = ue._data(e, a, ue.makeArray(n)) : r.push(n)), r || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var a = ue.queue(e, t),
                n = a.length,
                r = a.shift(),
                i = ue._queueHooks(e, t),
                s = function() {
                    ue.dequeue(e, t)
                };
            "inprogress" === r && (r = a.shift(), n--), r && ("fx" === t && a.unshift("inprogress"), delete i.stop, r.call(e, s, i)), !n && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var a = t + "queueHooks";
            return ue._data(e, a) || ue._data(e, a, {
                empty: ue.Callbacks("once memory").add(function() {
                    ue._removeData(e, t + "queue"), ue._removeData(e, a)
                })
            })
        }
    }), ue.fn.extend({
        queue: function(e, a) {
            var n = 2;
            return "string" != typeof e && (a = e, e = "fx", n--), n > arguments.length ? ue.queue(this[0], e) : a === t ? this : this.each(function() {
                var t = ue.queue(this, e, a);
                ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ue.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, a) {
                var n = setTimeout(t, e);
                a.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, a) {
            var n, r = 1,
                i = ue.Deferred(),
                s = this,
                o = this.length,
                l = function() {
                    --r || i.resolveWith(s, [s])
                };
            for ("string" != typeof e && (a = e, e = t), e = e || "fx"; o--;) n = ue._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
            return l(), i.promise(a)
        }
    });
    var ze, Ne, De = /[\t\r\n\f]/g,
        Pe = /\r/g,
        Le = /^(?:input|select|textarea|button|object)$/i,
        Ae = /^(?:a|area)$/i,
        He = /^(?:checked|selected)$/i,
        Ie = ue.support.getSetAttribute,
        Be = ue.support.input;
    ue.fn.extend({
        attr: function(e, t) {
            return ue.access(this, ue.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ue.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ue.access(this, ue.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ue.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (a) {}
            })
        },
        addClass: function(e) {
            var t, a, n, r, i, s = 0,
                o = this.length,
                l = "string" == typeof e && e;
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ce) || []; o > s; s++)
                    if (a = this[s], n = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(De, " ") : " ")) {
                        for (i = 0; r = t[i++];) 0 > n.indexOf(" " + r + " ") && (n += r + " ");
                        a.className = ue.trim(n)
                    }
            return this
        },
        removeClass: function(e) {
            var t, a, n, r, i, s = 0,
                o = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ce) || []; o > s; s++)
                    if (a = this[s], n = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(De, " ") : "")) {
                        for (i = 0; r = t[i++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        a.className = e ? ue.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var a = typeof e;
            return "boolean" == typeof t && "string" === a ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function(a) {
                ue(this).toggleClass(e.call(this, a, this.className, t), t)
            }) : this.each(function() {
                if ("string" === a)
                    for (var t, n = 0, r = ue(this), i = e.match(ce) || []; t = i[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(a === V || "boolean" === a) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", a = 0, n = this.length; n > a; a++)
                if (1 === this[a].nodeType && (" " + this[a].className + " ").replace(De, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var a, n, r, i = this[0];
            return arguments.length ? (r = ue.isFunction(e), this.each(function(a) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, a, ue(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ue.isArray(i) && (i = ue.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), n = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, i, "value") !== t || (this.value = i))
            })) : i ? (n = ue.valHooks[i.type] || ue.valHooks[i.nodeName.toLowerCase()], n && "get" in n && (a = n.get(i, "value")) !== t ? a : (a = i.value, "string" == typeof a ? a.replace(Pe, "") : null == a ? "" : a)) : void 0
        }
    }), ue.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ue.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, a, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || 0 > r, s = i ? null : [], o = i ? r + 1 : n.length, l = 0 > r ? o : i ? r : 0; o > l; l++)
                        if (a = n[l], !(!a.selected && l !== r || (ue.support.optDisabled ? a.disabled : null !== a.getAttribute("disabled")) || a.parentNode.disabled && ue.nodeName(a.parentNode, "optgroup"))) {
                            if (t = ue(a).val(), i) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var a, n, r = e.options, i = ue.makeArray(t), s = r.length; s--;) n = r[s], (n.selected = ue.inArray(ue(n).val(), i) >= 0) && (a = !0);
                    return a || (e.selectedIndex = -1), i
                }
            }
        },
        attr: function(e, a, n) {
            var r, i, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? ue.prop(e, a, n) : (1 === s && ue.isXMLDoc(e) || (a = a.toLowerCase(), r = ue.attrHooks[a] || (ue.expr.match.bool.test(a) ? Ne : ze)), n === t ? r && "get" in r && null !== (i = r.get(e, a)) ? i : (i = ue.find.attr(e, a), null == i ? t : i) : null !== n ? r && "set" in r && (i = r.set(e, n, a)) !== t ? i : (e.setAttribute(a, n + ""), n) : (ue.removeAttr(e, a), t))
        },
        removeAttr: function(e, t) {
            var a, n, r = 0,
                i = t && t.match(ce);
            if (i && 1 === e.nodeType)
                for (; a = i[r++];) n = ue.propFix[a] || a, ue.expr.match.bool.test(a) ? Be && Ie || !He.test(a) ? e[n] = !1 : e[ue.camelCase("default-" + a)] = e[n] = !1 : ue.attr(e, a, ""), e.removeAttribute(Ie ? a : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                        var a = e.value;
                        return e.setAttribute("type", t), a && (e.value = a), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, a, n) {
            var r, i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !ue.isXMLDoc(e), s && (a = ue.propFix[a] || a, i = ue.propHooks[a]), n !== t ? i && "set" in i && (r = i.set(e, n, a)) !== t ? r : e[a] = n : i && "get" in i && null !== (r = i.get(e, a)) ? r : e[a]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ue.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Le.test(e.nodeName) || Ae.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Ne = {
        set: function(e, t, a) {
            return t === !1 ? ue.removeAttr(e, a) : Be && Ie || !He.test(a) ? e.setAttribute(!Ie && ue.propFix[a] || a, a) : e[ue.camelCase("default-" + a)] = e[a] = !0, a
        }
    }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, a) {
        var n = ue.expr.attrHandle[a] || ue.find.attr;
        ue.expr.attrHandle[a] = Be && Ie || !He.test(a) ? function(e, a, r) {
            var i = ue.expr.attrHandle[a],
                s = r ? t : (ue.expr.attrHandle[a] = t) != n(e, a, r) ? a.toLowerCase() : null;
            return ue.expr.attrHandle[a] = i, s
        } : function(e, a, n) {
            return n ? t : e[ue.camelCase("default-" + a)] ? a.toLowerCase() : null
        }
    }), Be && Ie || (ue.attrHooks.value = {
        set: function(e, a, n) {
            return ue.nodeName(e, "input") ? (e.defaultValue = a, t) : ze && ze.set(e, a, n)
        }
    }), Ie || (ze = {
        set: function(e, a, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = a += "", "value" === n || a === e.getAttribute(n) ? a : t
        }
    }, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(e, a, n) {
        var r;
        return n ? t : (r = e.getAttributeNode(a)) && "" !== r.value ? r.value : null
    }, ue.valHooks.button = {
        get: function(e, a) {
            var n = e.getAttributeNode(a);
            return n && n.specified ? n.value : t
        },
        set: ze.set
    }, ue.attrHooks.contenteditable = {
        set: function(e, t, a) {
            ze.set(e, "" !== t && t, a)
        }
    }, ue.each(["width", "height"], function(e, a) {
        ue.attrHooks[a] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(a, "auto"), n) : t
            }
        }
    })), ue.support.hrefNormalized || ue.each(["href", "src"], function(e, t) {
        ue.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ue.support.style || (ue.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), ue.support.optSelected || (ue.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ue.propFix[this.toLowerCase()] = this
    }), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function() {
        ue.valHooks[this] = {
            set: function(e, a) {
                return ue.isArray(a) ? e.checked = ue.inArray(ue(e).val(), a) >= 0 : t
            }
        }, ue.support.checkOn || (ue.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Oe = /^(?:input|select|textarea)$/i,
        je = /^key/,
        Xe = /^(?:mouse|contextmenu)|click/,
        Re = /^(?:focusinfocus|focusoutblur)$/,
        We = /^([^.]*)(?:\.(.+)|)$/;
    ue.event = {
        global: {},
        add: function(e, a, n, r, i) {
            var s, o, l, p, u, d, c, f, m, h, g, v = ue._data(e);
            if (v) {
                for (n.handler && (p = n, n = p.handler, i = p.selector), n.guid || (n.guid = ue.guid++), (o = v.events) || (o = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                        return typeof ue === V || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), a = (a || "").match(ce) || [""], l = a.length; l--;) s = We.exec(a[l]) || [], m = g = s[1], h = (s[2] || "").split(".").sort(), m && (u = ue.event.special[m] || {}, m = (i ? u.delegateType : u.bindType) || m, u = ue.event.special[m] || {}, c = ue.extend({
                    type: m,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ue.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, p), (f = o[m]) || (f = o[m] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, d) !== !1 || (e.addEventListener ? e.addEventListener(m, d, !1) : e.attachEvent && e.attachEvent("on" + m, d))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), ue.event.global[m] = !0);
                e = null
            }
        },
        remove: function(e, t, a, n, r) {
            var i, s, o, l, p, u, d, c, f, m, h, g = ue.hasData(e) && ue._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(ce) || [""], p = t.length; p--;)
                    if (o = We.exec(t[p]) || [], f = h = o[1], m = (o[2] || "").split(".").sort(), f) {
                        for (d = ue.event.special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, c = u[f] || [], o = o[2] && RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = c.length; i--;) s = c[i], !r && h !== s.origType || a && a.guid !== s.guid || o && !o.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (c.splice(i, 1), s.selector && c.delegateCount--, d.remove && d.remove.call(e, s));
                        l && !c.length && (d.teardown && d.teardown.call(e, m, g.handle) !== !1 || ue.removeEvent(e, f, g.handle), delete u[f])
                    } else
                        for (f in u) ue.event.remove(e, f + t[p], a, n, !0);
                ue.isEmptyObject(u) && (delete g.handle, ue._removeData(e, "events"))
            }
        },
        trigger: function(a, n, r, i) {
            var s, o, l, p, u, d, c, f = [r || K],
                m = le.call(a, "type") ? a.type : a,
                h = le.call(a, "namespace") ? a.namespace.split(".") : [];
            if (l = d = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Re.test(m + ue.event.triggered) && (m.indexOf(".") >= 0 && (h = m.split("."), m = h.shift(), h.sort()), o = 0 > m.indexOf(":") && "on" + m, a = a[ue.expando] ? a : new ue.Event(m, "object" == typeof a && a), a.isTrigger = i ? 2 : 3, a.namespace = h.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = t, a.target || (a.target = r), n = null == n ? [a] : ue.makeArray(n, [a]), u = ue.event.special[m] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !ue.isWindow(r)) {
                    for (p = u.delegateType || m, Re.test(p + m) || (l = l.parentNode); l; l = l.parentNode) f.push(l), d = l;
                    d === (r.ownerDocument || K) && f.push(d.defaultView || d.parentWindow || e)
                }
                for (c = 0;
                    (l = f[c++]) && !a.isPropagationStopped();) a.type = c > 1 ? p : u.bindType || m, s = (ue._data(l, "events") || {})[a.type] && ue._data(l, "handle"), s && s.apply(l, n), s = o && l[o], s && ue.acceptData(l) && s.apply && s.apply(l, n) === !1 && a.preventDefault();
                if (a.type = m, !i && !a.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && ue.acceptData(r) && o && r[m] && !ue.isWindow(r)) {
                    d = r[o], d && (r[o] = null), ue.event.triggered = m;
                    try {
                        r[m]()
                    } catch (g) {}
                    ue.event.triggered = t, d && (r[o] = d)
                }
                return a.result
            }
        },
        dispatch: function(e) {
            e = ue.event.fix(e);
            var a, n, r, i, s, o = [],
                l = ie.call(arguments),
                p = (ue._data(this, "events") || {})[e.type] || [],
                u = ue.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = ue.event.handlers.call(this, e, p), a = 0;
                    (i = o[a++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, s = 0;
                        (r = i.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ue.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l), n !== t && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, a) {
            var n, r, i, s, o = [],
                l = a.delegateCount,
                p = e.target;
            if (l && p.nodeType && (!e.button || "click" !== e.type))
                for (; p != this; p = p.parentNode || this)
                    if (1 === p.nodeType && (p.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; l > s; s++) r = a[s], n = r.selector + " ", i[n] === t && (i[n] = r.needsContext ? ue(n, this).index(p) >= 0 : ue.find(n, this, null, [p]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: p,
                            handlers: i
                        })
                    }
            return a.length > l && o.push({
                elem: this,
                handlers: a.slice(l)
            }), o
        },
        fix: function(e) {
            if (e[ue.expando]) return e;
            var t, a, n, r = e.type,
                i = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Xe.test(r) ? this.mouseHooks : je.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new ue.Event(i), t = n.length; t--;) a = n[t], e[a] = i[a];
            return e.target || (e.target = i.srcElement || K), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, a) {
                var n, r, i, s = a.button,
                    o = a.fromElement;
                return null == e.pageX && null != a.clientX && (r = e.target.ownerDocument || K, i = r.documentElement, n = r.body, e.pageX = a.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = a.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? a.toElement : o), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return ue.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, a, n) {
            var r = ue.extend(new ue.Event, a, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ue.event.trigger(r, null, t) : ue.event.dispatch.call(t, r), r.isDefaultPrevented() && a.preventDefault()
        }
    }, ue.removeEvent = K.removeEventListener ? function(e, t, a) {
        e.removeEventListener && e.removeEventListener(t, a, !1)
    } : function(e, t, a) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === V && (e[n] = null), e.detachEvent(n, a))
    }, ue.Event = function(e, a) {
        return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : p) : this.type = e, a && ue.extend(this, a), this.timeStamp = e && e.timeStamp || ue.now(), this[ue.expando] = !0, t) : new ue.Event(e, a)
    }, ue.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ue.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var a, n = this,
                    r = e.relatedTarget,
                    i = e.handleObj;
                return (!r || r !== n && !ue.contains(n, r)) && (e.type = i.origType, a = i.handler.apply(this, arguments), e.type = t), a
            }
        }
    }), ue.support.submitBubbles || (ue.event.special.submit = {
        setup: function() {
            return !ue.nodeName(this, "form") && (ue.event.add(this, "click._submit keypress._submit", function(e) {
                var a = e.target,
                    n = ue.nodeName(a, "input") || ue.nodeName(a, "button") ? a.form : t;
                n && !ue._data(n, "submitBubbles") && (ue.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ue._data(n, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !ue.nodeName(this, "form") && (ue.event.remove(this, "._submit"), t)
        }
    }), ue.support.changeBubbles || (ue.event.special.change = {
        setup: function() {
            return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ue.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
            })), !1) : (ue.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Oe.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
                }), ue._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var a = e.target;
            return this !== a || e.isSimulated || e.isTrigger || "radio" !== a.type && "checkbox" !== a.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ue.event.remove(this, "._change"), !Oe.test(this.nodeName)
        }
    }), ue.support.focusinBubbles || ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var a = 0,
            n = function(e) {
                ue.event.simulate(t, e.target, ue.event.fix(e), !0)
            };
        ue.event.special[t] = {
            setup: function() {
                0 === a++ && K.addEventListener(e, n, !0)
            },
            teardown: function() {
                0 === --a && K.removeEventListener(e, n, !0)
            }
        }
    }), ue.fn.extend({
        on: function(e, a, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof a && (n = n || a, a = t);
                for (s in e) this.on(s, a, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = a, n = a = t) : null == r && ("string" == typeof a ? (r = n, n = t) : (r = n, n = a, a = t)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return ue().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = ue.guid++)), this.each(function() {
                ue.event.add(this, e, r, n, a)
            })
        },
        one: function(e, t, a, n) {
            return this.on(e, t, a, n, 1)
        },
        off: function(e, a, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, a, e[i]);
                return this
            }
            return (a === !1 || "function" == typeof a) && (n = a, a = t), n === !1 && (n = p), this.each(function() {
                ue.event.remove(this, e, n, a)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ue.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, a) {
            var n = this[0];
            return n ? ue.event.trigger(e, a, n, !0) : t
        }
    });
    var _e = /^.[^:#\[\.,]*$/,
        qe = /^(?:parents|prev(?:Until|All))/,
        Ge = ue.expr.match.needsContext,
        Ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ue.fn.extend({
        find: function(e) {
            var t, a = [],
                n = this,
                r = n.length;
            if ("string" != typeof e) return this.pushStack(ue(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (ue.contains(n[t], this)) return !0
            }));
            for (t = 0; r > t; t++) ue.find(e, n[t], a);
            return a = this.pushStack(r > 1 ? ue.unique(a) : a), a.selector = this.selector ? this.selector + " " + e : e, a
        },
        has: function(e) {
            var t, a = ue(e, this),
                n = a.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (ue.contains(this, a[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(c(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(c(this, e || [], !1))
        },
        is: function(e) {
            return !!c(this, "string" == typeof e && Ge.test(e) ? ue(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var a, n = 0, r = this.length, i = [], s = Ge.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; r > n; n++)
                for (a = this[n]; a && a !== t; a = a.parentNode)
                    if (11 > a.nodeType && (s ? s.index(a) > -1 : 1 === a.nodeType && ue.find.matchesSelector(a, e))) {
                        a = i.push(a);
                        break
                    }
            return this.pushStack(i.length > 1 ? ue.unique(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var a = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e),
                n = ue.merge(this.get(), a);
            return this.pushStack(ue.unique(n))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ue.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ue.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, a) {
            return ue.dir(e, "parentNode", a)
        },
        next: function(e) {
            return d(e, "nextSibling")
        },
        prev: function(e) {
            return d(e, "previousSibling")
        },
        nextAll: function(e) {
            return ue.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return ue.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, a) {
            return ue.dir(e, "nextSibling", a)
        },
        prevUntil: function(e, t, a) {
            return ue.dir(e, "previousSibling", a)
        },
        siblings: function(e) {
            return ue.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ue.sibling(e.firstChild)
        },
        contents: function(e) {
            return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
        }
    }, function(e, t) {
        ue.fn[e] = function(a, n) {
            var r = ue.map(this, t, a);
            return "Until" !== e.slice(-5) && (n = a), n && "string" == typeof n && (r = ue.filter(n, r)), this.length > 1 && (Ye[e] || (r = ue.unique(r)), qe.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    }), ue.extend({
        filter: function(e, t, a) {
            var n = t[0];
            return a && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ue.find.matchesSelector(n, e) ? [n] : [] : ue.find.matches(e, ue.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, a, n) {
            for (var r = [], i = e[a]; i && 9 !== i.nodeType && (n === t || 1 !== i.nodeType || !ue(i).is(n));) 1 === i.nodeType && r.push(i), i = i[a];
            return r
        },
        sibling: function(e, t) {
            for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
            return a
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        $e = / jQuery\d+="(?:null|\d+)"/g,
        Ve = RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        Je = /^\s+/,
        Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ue = /<([\w:]+)/,
        Qe = /<tbody/i,
        Ze = /<|&#?\w+;/,
        et = /<(?:script|style|link)/i,
        tt = /^(?:checkbox|radio)$/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^$|\/(?:java|ecma)script/i,
        rt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        st = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ot = f(K),
        lt = ot.appendChild(K.createElement("div"));
    st.optgroup = st.option, st.tbody = st.tfoot = st.colgroup = st.caption = st.thead, st.th = st.td, ue.fn.extend({
        text: function(e) {
            return ue.access(this, function(e) {
                return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var a, n = e ? ue.filter(e, this) : this, r = 0; null != (a = n[r]); r++) t || 1 !== a.nodeType || ue.cleanData(x(a)), a.parentNode && (t && ue.contains(a.ownerDocument, a) && v(x(a, "script")), a.parentNode.removeChild(a));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ue.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ue.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ue.clone(this, e, t)
            })
        },
        html: function(e) {
            return ue.access(this, function(e) {
                var a = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === t) return 1 === a.nodeType ? a.innerHTML.replace($e, "") : t;
                if (!("string" != typeof e || et.test(e) || !ue.support.htmlSerialize && Ve.test(e) || !ue.support.leadingWhitespace && Je.test(e) || st[(Ue.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ke, "<$1></$2>");
                    try {
                        for (; r > n; n++) a = this[n] || {}, 1 === a.nodeType && (ue.cleanData(x(a, !1)), a.innerHTML = e);
                        a = 0
                    } catch (i) {}
                }
                a && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ue.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(a) {
                var n = e[t++],
                    r = e[t++];
                r && (n && n.parentNode !== r && (n = this.nextSibling), ue(this).remove(), r.insertBefore(a, n))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, a) {
            e = ne.apply([], e);
            var n, r, i, s, o, l, p = 0,
                u = this.length,
                d = this,
                c = u - 1,
                f = e[0],
                m = ue.isFunction(f);
            if (m || !(1 >= u || "string" != typeof f || ue.support.checkClone) && at.test(f)) return this.each(function(n) {
                var r = d.eq(n);
                m && (e[0] = f.call(this, n, r.html())), r.domManip(e, t, a)
            });
            if (u && (l = ue.buildFragment(e, this[0].ownerDocument, !1, !a && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (s = ue.map(x(l, "script"), h), i = s.length; u > p; p++) r = l, p !== c && (r = ue.clone(r, !0, !0), i && ue.merge(s, x(r, "script"))), t.call(this[p], r, p);
                if (i)
                    for (o = s[s.length - 1].ownerDocument, ue.map(s, g), p = 0; i > p; p++) r = s[p], nt.test(r.type || "") && !ue._data(r, "globalEval") && ue.contains(o, r) && (r.src ? ue._evalUrl(r.src) : ue.globalEval((r.text || r.textContent || r.innerHTML || "").replace(it, "")));
                l = n = null
            }
            return this
        }
    }), ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ue.fn[e] = function(e) {
            for (var a, n = 0, r = [], i = ue(e), s = i.length - 1; s >= n; n++) a = n === s ? this : this.clone(!0), ue(i[n])[t](a), re.apply(r, a.get());
            return this.pushStack(r)
        }
    }), ue.extend({
        clone: function(e, t, a) {
            var n, r, i, s, o, l = ue.contains(e.ownerDocument, e);
            if (ue.support.html5Clone || ue.isXMLDoc(e) || !Ve.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(i = lt.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                for (n = x(i), o = x(e), s = 0; null != (r = o[s]); ++s) n[s] && w(r, n[s]);
            if (t)
                if (a)
                    for (o = o || x(e), n = n || x(i), s = 0; null != (r = o[s]); s++) y(r, n[s]);
                else y(e, i);
            return n = x(i, "script"), n.length > 0 && v(n, !l && x(e, "script")), n = o = r = null, i
        },
        buildFragment: function(e, t, a, n) {
            for (var r, i, s, o, l, p, u, d = e.length, c = f(t), m = [], h = 0; d > h; h++)
                if (i = e[h], i || 0 === i)
                    if ("object" === ue.type(i)) ue.merge(m, i.nodeType ? [i] : i);
                    else if (Ze.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), l = (Ue.exec(i) || ["", ""])[1].toLowerCase(), u = st[l] || st._default, o.innerHTML = u[1] + i.replace(Ke, "<$1></$2>") + u[2], r = u[0]; r--;) o = o.lastChild;
                if (!ue.support.leadingWhitespace && Je.test(i) && m.push(t.createTextNode(Je.exec(i)[0])), !ue.support.tbody)
                    for (i = "table" !== l || Qe.test(i) ? "<table>" !== u[1] || Qe.test(i) ? 0 : o : o.firstChild, r = i && i.childNodes.length; r--;) ue.nodeName(p = i.childNodes[r], "tbody") && !p.childNodes.length && i.removeChild(p);
                for (ue.merge(m, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                o = c.lastChild
            } else m.push(t.createTextNode(i));
            for (o && c.removeChild(o), ue.support.appendChecked || ue.grep(x(m, "input"), b), h = 0; i = m[h++];)
                if ((!n || -1 === ue.inArray(i, n)) && (s = ue.contains(i.ownerDocument, i), o = x(c.appendChild(i), "script"), s && v(o), a))
                    for (r = 0; i = o[r++];) nt.test(i.type || "") && a.push(i);
            return o = null, c
        },
        cleanData: function(e, t) {
            for (var a, n, r, i, s = 0, o = ue.expando, l = ue.cache, p = ue.support.deleteExpando, u = ue.event.special; null != (a = e[s]); s++)
                if ((t || ue.acceptData(a)) && (r = a[o], i = r && l[r])) {
                    if (i.events)
                        for (n in i.events) u[n] ? ue.event.remove(a, n) : ue.removeEvent(a, n, i.handle);
                    l[r] && (delete l[r], p ? delete a[o] : typeof a.removeAttribute !== V ? a.removeAttribute(o) : a[o] = null, te.push(r))
                }
        },
        _evalUrl: function(e) {
            return ue.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ue.fn.extend({
        wrapAll: function(e) {
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ue.isFunction(e) ? this.each(function(t) {
                ue(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ue(this),
                    a = t.contents();
                a.length ? a.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ue.isFunction(e);
            return this.each(function(a) {
                ue(this).wrapAll(t ? e.call(this, a) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var pt, ut, dt, ct = /alpha\([^)]*\)/i,
        ft = /opacity\s*=\s*([^)]*)/,
        mt = /^(top|right|bottom|left)$/,
        ht = /^(none|table(?!-c[ea]).+)/,
        gt = /^margin/,
        vt = RegExp("^(" + de + ")(.*)$", "i"),
        yt = RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"),
        wt = RegExp("^([+-])=(" + de + ")", "i"),
        xt = {
            BODY: "block"
        },
        bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ct = ["Top", "Right", "Bottom", "Left"],
        St = ["Webkit", "O", "Moz", "ms"];
    ue.fn.extend({
        css: function(e, a) {
            return ue.access(this, function(e, a, n) {
                var r, i, s = {},
                    o = 0;
                if (ue.isArray(a)) {
                    for (i = ut(e), r = a.length; r > o; o++) s[a[o]] = ue.css(e, a[o], !1, i);
                    return s
                }
                return n !== t ? ue.style(e, a, n) : ue.css(e, a)
            }, e, a, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                C(this) ? ue(this).show() : ue(this).hide()
            })
        }
    }), ue.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var a = dt(e, "opacity");
                        return "" === a ? "1" : a
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, a, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, l = ue.camelCase(a),
                    p = e.style;
                if (a = ue.cssProps[l] || (ue.cssProps[l] = T(p, l)), o = ue.cssHooks[a] || ue.cssHooks[l], n === t) return o && "get" in o && (i = o.get(e, !1, r)) !== t ? i : p[a];
                if (s = typeof n, "string" === s && (i = wt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ue.css(e, a)), s = "number"), !(null == n || "number" === s && isNaN(n) || ("number" !== s || ue.cssNumber[l] || (n += "px"), ue.support.clearCloneStyle || "" !== n || 0 !== a.indexOf("background") || (p[a] = "inherit"), o && "set" in o && (n = o.set(e, n, r)) === t))) try {
                    p[a] = n
                } catch (u) {}
            }
        },
        css: function(e, a, n, r) {
            var i, s, o, l = ue.camelCase(a);
            return a = ue.cssProps[l] || (ue.cssProps[l] = T(e.style, l)), o = ue.cssHooks[a] || ue.cssHooks[l], o && "get" in o && (s = o.get(e, !0, n)), s === t && (s = dt(e, a, r)), "normal" === s && a in Tt && (s = Tt[a]), "" === n || n ? (i = parseFloat(s), n === !0 || ue.isNumeric(i) ? i || 0 : s) : s
        }
    }), e.getComputedStyle ? (ut = function(t) {
        return e.getComputedStyle(t, null)
    }, dt = function(e, a, n) {
        var r, i, s, o = n || ut(e),
            l = o ? o.getPropertyValue(a) || o[a] : t,
            p = e.style;
        return o && ("" !== l || ue.contains(e.ownerDocument, e) || (l = ue.style(e, a)), yt.test(l) && gt.test(a) && (r = p.width, i = p.minWidth, s = p.maxWidth, p.minWidth = p.maxWidth = p.width = l, l = o.width, p.width = r, p.minWidth = i, p.maxWidth = s)), l
    }) : K.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle
    }, dt = function(e, a, n) {
        var r, i, s, o = n || ut(e),
            l = o ? o[a] : t,
            p = e.style;
        return null == l && p && p[a] && (l = p[a]), yt.test(l) && !mt.test(a) && (r = p.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), p.left = "fontSize" === a ? "1em" : l, l = p.pixelLeft + "px", p.left = r, s && (i.left = s)), "" === l ? "auto" : l
    }), ue.each(["height", "width"], function(e, a) {
        ue.cssHooks[a] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && ht.test(ue.css(e, "display")) ? ue.swap(e, bt, function() {
                    return M(e, a, r)
                }) : M(e, a, r) : t
            },
            set: function(e, t, n) {
                var r = n && ut(e);
                return E(e, t, n ? k(e, a, n, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ue.support.opacity || (ue.cssHooks.opacity = {
        get: function(e, t) {
            return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var a = e.style,
                n = e.currentStyle,
                r = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = n && n.filter || a.filter || "";
            a.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(i.replace(ct, "")) && a.removeAttribute && (a.removeAttribute("filter"), "" === t || n && !n.filter) || (a.filter = ct.test(i) ? i.replace(ct, r) : i + " " + r)
        }
    }), ue(function() {
        ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
            get: function(e, a) {
                return a ? ue.swap(e, {
                    display: "inline-block"
                }, dt, [e, "marginRight"]) : t
            }
        }), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, a) {
            ue.cssHooks[a] = {
                get: function(e, n) {
                    return n ? (n = dt(e, a), yt.test(n) ? ue(e).position()[a] + "px" : n) : t
                }
            }
        })
    }), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
    }, ue.expr.filters.visible = function(e) {
        return !ue.expr.filters.hidden(e)
    }), ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ue.cssHooks[e + t] = {
            expand: function(a) {
                for (var n = 0, r = {}, i = "string" == typeof a ? a.split(" ") : [a]; 4 > n; n++) r[e + Ct[n] + t] = i[n] || i[n - 2] || i[0];
                return r
            }
        }, gt.test(e) || (ue.cssHooks[e + t].set = E)
    });
    var Et = /%20/g,
        kt = /\[\]$/,
        Mt = /\r?\n/g,
        zt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    ue.fn.extend({
        serialize: function() {
            return ue.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ue.prop(this, "elements");
                return e ? ue.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ue(this).is(":disabled") && Nt.test(this.nodeName) && !zt.test(e) && (this.checked || !tt.test(e))
            }).map(function(e, t) {
                var a = ue(this).val();
                return null == a ? null : ue.isArray(a) ? ue.map(a, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Mt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: a.replace(Mt, "\r\n")
                }
            }).get()
        }
    }), ue.param = function(e, a) {
        var n, r = [],
            i = function(e, t) {
                t = ue.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (a === t && (a = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) D(n, e[n], a, i);
        return r.join("&").replace(Et, "+")
    }, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ue.fn[t] = function(e, a) {
            return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t)
        }
    }), ue.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, a) {
            return this.on(e, null, t, a)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, a, n) {
            return this.on(t, e, a, n)
        },
        undelegate: function(e, t, a) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a)
        }
    });
    var Dt, Pt, Lt = ue.now(),
        At = /\?/,
        Ht = /#.*$/,
        It = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        jt = /^(?:GET|HEAD)$/,
        Xt = /^\/\//,
        Rt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Wt = ue.fn.load,
        _t = {},
        qt = {},
        Gt = "*/".concat("*");
    try {
        Pt = J.href
    } catch (Yt) {
        Pt = K.createElement("a"), Pt.href = "", Pt = Pt.href
    }
    Dt = Rt.exec(Pt.toLowerCase()) || [], ue.fn.load = function(e, a, n) {
        if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
        var r, i, s, o = this,
            l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ue.isFunction(a) ? (n = a, a = t) : a && "object" == typeof a && (s = "POST"), o.length > 0 && ue.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: a
        }).done(function(e) {
            i = arguments, o.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ue.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pt,
            type: "GET",
            isLocal: Ot.test(Dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ue.parseJSON,
                "text xml": ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? A(A(e, ue.ajaxSettings), t) : A(ue.ajaxSettings, e)
        },
        ajaxPrefilter: P(_t),
        ajaxTransport: P(qt),
        ajax: function(e, a) {
            function n(e, a, n, r) {
                var i, d, y, w, b, C = a;
                2 !== x && (x = 2, l && clearTimeout(l), u = t, o = r || "", T.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (w = H(c, T, n)), w = I(c, w, T, i), i ? (c.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (ue.lastModified[s] = b), b = T.getResponseHeader("etag"), b && (ue.etag[s] = b)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, d = w.data, y = w.error, i = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (a || C) + "", i ? h.resolveWith(f, [d, C, T]) : h.rejectWith(f, [T, C, y]), T.statusCode(v), v = t, p && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, c, i ? d : y]), g.fireWith(f, [T, C]), p && (m.trigger("ajaxComplete", [T, c]), --ue.active || ue.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (a = e, e = t), a = a || {};
            var r, i, s, o, l, p, u, d, c = ue.ajaxSetup({}, a),
                f = c.context || c,
                m = c.context && (f.nodeType || f.jquery) ? ue(f) : ue.event,
                h = ue.Deferred(),
                g = ue.Callbacks("once memory"),
                v = c.statusCode || {},
                y = {},
                w = {},
                x = 0,
                b = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = Bt.exec(o);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var a = e.toLowerCase();
                        return x || (e = w[a] = w[a] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Pt) + "").replace(Ht, "").replace(Xt, Dt[1] + "//"), c.type = a.method || a.type || c.method || c.type, c.dataTypes = ue.trim(c.dataType || "*").toLowerCase().match(ce) || [""], null == c.crossDomain && (r = Rt.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === Dt[1] && r[2] === Dt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = ue.param(c.data, c.traditional)), L(_t, c, a, T), 2 === x) return T;
            p = c.global, p && 0 === ue.active++ && ue.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !jt.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (At.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = It.test(s) ? s.replace(It, "$1_=" + Lt++) : s + (At.test(s) ? "&" : "?") + "_=" + Lt++)), c.ifModified && (ue.lastModified[s] && T.setRequestHeader("If-Modified-Since", ue.lastModified[s]), ue.etag[s] && T.setRequestHeader("If-None-Match", ue.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || a.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) T.setRequestHeader(i, c.headers[i]);
            if (c.beforeSend && (c.beforeSend.call(f, T, c) === !1 || 2 === x)) return T.abort();
            b = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](c[i]);
            if (u = L(qt, c, a, T)) {
                T.readyState = 1, p && m.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, c.timeout));
                try {
                    x = 1, u.send(y, n)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, a) {
            return ue.get(e, t, a, "json")
        },
        getScript: function(e, a) {
            return ue.get(e, t, a, "script")
        }
    }), ue.each(["get", "post"], function(e, a) {
        ue[a] = function(e, n, r, i) {
            return ue.isFunction(n) && (i = i || r, r = n, n = t), ue.ajax({
                url: e,
                type: a,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ue.globalEval(e), e
            }
        }
    }), ue.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ue.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var a, n = K.head || ue("head")[0] || K.documentElement;
            return {
                send: function(t, r) {
                    a = K.createElement("script"), a.async = !0, e.scriptCharset && (a.charset = e.scriptCharset), a.src = e.url, a.onload = a.onreadystatechange = function(e, t) {
                        (t || !a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a), a = null, t || r(200, "success"))
                    }, n.insertBefore(a, n.firstChild)
                },
                abort: function() {
                    a && a.onload(t, !0)
                }
            }
        }
    });
    var Ft = [],
        $t = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || ue.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), ue.ajaxPrefilter("json jsonp", function(a, n, r) {
        var i, s, o, l = a.jsonp !== !1 && ($t.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(a.data) && "data");
        return l || "jsonp" === a.dataTypes[0] ? (i = a.jsonpCallback = ue.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, l ? a[l] = a[l].replace($t, "$1" + i) : a.jsonp !== !1 && (a.url += (At.test(a.url) ? "&" : "?") + a.jsonp + "=" + i), a.converters["script json"] = function() {
            return o || ue.error(i + " was not called"), o[0]
        }, a.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s, a[i] && (a.jsonpCallback = n.jsonpCallback, Ft.push(i)), o && ue.isFunction(s) && s(o[0]), o = s = t
        }), "script") : t
    });
    var Vt, Jt, Kt = 0,
        Ut = e.ActiveXObject && function() {
            var e;
            for (e in Vt) Vt[e](t, !0)
        };
    ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && B() || O()
    } : B, Jt = ue.ajaxSettings.xhr(), ue.support.cors = !!Jt && "withCredentials" in Jt, Jt = ue.support.ajax = !!Jt, Jt && ue.ajaxTransport(function(a) {
        if (!a.crossDomain || ue.support.cors) {
            var n;
            return {
                send: function(r, i) {
                    var s, o, l = a.xhr();
                    if (a.username ? l.open(a.type, a.url, a.async, a.username, a.password) : l.open(a.type, a.url, a.async), a.xhrFields)
                        for (o in a.xhrFields) l[o] = a.xhrFields[o];
                    a.mimeType && l.overrideMimeType && l.overrideMimeType(a.mimeType), a.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (o in r) l.setRequestHeader(o, r[o])
                    } catch (p) {}
                    l.send(a.hasContent && a.data || null), n = function(e, r) {
                        var o, p, u, d;
                        try {
                            if (n && (r || 4 === l.readyState))
                                if (n = t, s && (l.onreadystatechange = ue.noop, Ut && delete Vt[s]), r) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, o = l.status, p = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (c) {
                                        u = ""
                                    }
                                    o || !a.isLocal || a.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                                }
                        } catch (f) {
                            r || i(-1, f)
                        }
                        d && i(o, u, d, p)
                    }, a.async ? 4 === l.readyState ? setTimeout(n) : (s = ++Kt, Ut && (Vt || (Vt = {}, ue(e).unload(Ut)), Vt[s] = n), l.onreadystatechange = n) : n()
                },
                abort: function() {
                    n && n(t, !0)
                }
            }
        }
    });
    var Qt, Zt, ea = /^(?:toggle|show|hide)$/,
        ta = RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
        aa = /queueHooks$/,
        na = [_],
        ra = {
            "*": [function(e, t) {
                var a = this.createTween(e, t),
                    n = a.cur(),
                    r = ta.exec(t),
                    i = r && r[3] || (ue.cssNumber[e] ? "" : "px"),
                    s = (ue.cssNumber[e] || "px" !== i && +n) && ta.exec(ue.css(a.elem, e)),
                    o = 1,
                    l = 20;
                if (s && s[3] !== i) {
                    i = i || s[3], r = r || [], s = +n || 1;
                    do o = o || ".5", s /= o, ue.style(a.elem, e, s + i); while (o !== (o = a.cur() / n) && 1 !== o && --l)
                }
                return r && (s = a.start = +s || +n || 0, a.unit = i, a.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), a
            }]
        };
    ue.Animation = ue.extend(R, {
        tweener: function(e, t) {
            ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var a, n = 0, r = e.length; r > n; n++) a = e[n], ra[a] = ra[a] || [], ra[a].unshift(t)
        },
        prefilter: function(e, t) {
            t ? na.unshift(e) : na.push(e)
        }
    }), ue.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, a, n, r, i) {
            this.elem = e, this.prop = a, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = i || (ue.cssNumber[a] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, a = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), a && a.set ? a.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ue.each(["toggle", "show", "hide"], function(e, t) {
        var a = ue.fn[t];
        ue.fn[t] = function(e, n, r) {
            return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(G(t, !0), e, n, r)
        }
    }), ue.fn.extend({
        fadeTo: function(e, t, a, n) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, a, n)
        },
        animate: function(e, t, a, n) {
            var r = ue.isEmptyObject(e),
                i = ue.speed(t, a, n),
                s = function() {
                    var t = R(this, ue.extend({}, e), i);
                    (r || ue._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
        },
        stop: function(e, a, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = a, a = e, e = t), a && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    a = null != e && e + "queueHooks",
                    i = ue.timers,
                    s = ue._data(this);
                if (a) s[a] && s[a].stop && r(s[a]);
                else
                    for (a in s) s[a] && s[a].stop && aa.test(a) && r(s[a]);
                for (a = i.length; a--;) i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                (t || !n) && ue.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, a = ue._data(this),
                    n = a[e + "queue"],
                    r = a[e + "queueHooks"],
                    i = ue.timers,
                    s = n ? n.length : 0;
                for (a.finish = !0, ue.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete a.finish
            })
        }
    }), ue.each({
        slideDown: G("show"),
        slideUp: G("hide"),
        slideToggle: G("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ue.fn[e] = function(e, a, n) {
            return this.animate(t, e, a, n)
        }
    }), ue.speed = function(e, t, a) {
        var n = e && "object" == typeof e ? ue.extend({}, e) : {
            complete: a || !a && t || ue.isFunction(e) && e,
            duration: e,
            easing: a && t || t && !ue.isFunction(t) && t
        };
        return n.duration = ue.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ue.fx.speeds ? ue.fx.speeds[n.duration] : ue.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ue.isFunction(n.old) && n.old.call(this), n.queue && ue.dequeue(this, n.queue)
        }, n
    }, ue.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ue.timers = [], ue.fx = q.prototype.init, ue.fx.tick = function() {
        var e, a = ue.timers,
            n = 0;
        for (Qt = ue.now(); a.length > n; n++) e = a[n], e() || a[n] !== e || a.splice(n--, 1);
        a.length || ue.fx.stop(), Qt = t
    }, ue.fx.timer = function(e) {
        e() && ue.timers.push(e) && ue.fx.start()
    }, ue.fx.interval = 13, ue.fx.start = function() {
        Zt || (Zt = setInterval(ue.fx.tick, ue.fx.interval))
    }, ue.fx.stop = function() {
        clearInterval(Zt), Zt = null
    }, ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
        return ue.grep(ue.timers, function(t) {
            return e === t.elem
        }).length
    }), ue.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ue.offset.setOffset(this, e, t)
        });
        var a, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            s = i && i.ownerDocument;
        return s ? (a = s.documentElement, ue.contains(a, i) ? (typeof i.getBoundingClientRect !== V && (r = i.getBoundingClientRect()), n = Y(s), {
            top: r.top + (n.pageYOffset || a.scrollTop) - (a.clientTop || 0),
            left: r.left + (n.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
        }) : r) : void 0
    }, ue.offset = {
        setOffset: function(e, t, a) {
            var n = ue.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var r, i, s = ue(e),
                o = s.offset(),
                l = ue.css(e, "top"),
                p = ue.css(e, "left"),
                u = ("absolute" === n || "fixed" === n) && ue.inArray("auto", [l, p]) > -1,
                d = {},
                c = {};
            u ? (c = s.position(), r = c.top, i = c.left) : (r = parseFloat(l) || 0, i = parseFloat(p) || 0), ue.isFunction(t) && (t = t.call(e, a, o)), null != t.top && (d.top = t.top - o.top + r), null != t.left && (d.left = t.left - o.left + i), "using" in t ? t.using.call(e, d) : s.css(d)
        }
    }, ue.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, a = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === ue.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (a = e.offset()), a.top += ue.css(e[0], "borderTopWidth", !0), a.left += ue.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - a.top - ue.css(n, "marginTop", !0),
                    left: t.left - a.left - ue.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || U; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
                return e || U
            })
        }
    }), ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, a) {
        var n = /Y/.test(a);
        ue.fn[e] = function(r) {
            return ue.access(this, function(e, r, i) {
                var s = Y(e);
                return i === t ? s ? a in s ? s[a] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(n ? ue(s).scrollLeft() : i, n ? i : ue(s).scrollTop()) : e[r] = i, t)
            }, e, r, arguments.length, null)
        }
    }), ue.each({
        Height: "height",
        Width: "width"
    }, function(e, a) {
        ue.each({
            padding: "inner" + e,
            content: a,
            "": "outer" + e
        }, function(n, r) {
            ue.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return ue.access(this, function(a, n, r) {
                    var i;
                    return ue.isWindow(a) ? a.document.documentElement["client" + e] : 9 === a.nodeType ? (i = a.documentElement, Math.max(a.body["scroll" + e], i["scroll" + e], a.body["offset" + e], i["offset" + e], i["client" + e])) : r === t ? ue.css(a, n, o) : ue.style(a, n, r, o)
                }, a, s ? r : t, s, null)
            }
        })
    }), ue.fn.size = function() {
        return this.length
    }, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ue
    }))
}(window), ! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(t) {
            var n;
            return e(this).each(function() {
                var e = new a(this, t);
                n || (n = e)
            }), n
        }
    }
    var t, a = function(e, n) {
        function i(e) {
            return Math.floor(e)
        }

        function s() {
            var e = T.params.autoplay,
                t = T.slides.eq(T.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || T.params.autoplay), T.autoplayTimeoutId = setTimeout(function() {
                T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? n.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T))
            }, e)
        }

        function o(e, a) {
            var n = t(e.target);
            if (!n.is(a))
                if ("string" == typeof a) n = n.parents(a);
                else if (a.nodeType) {
                var r;
                return n.parents().each(function(e, t) {
                    t === a && (r = a)
                }), r ? a : void 0
            }
            if (0 !== n.length) return n[0]
        }

        function l(e, t) {
            t = t || {};
            var a = window.MutationObserver || window.WebkitMutationObserver,
                n = new a(function(e) {
                    e.forEach(function(e) {
                        T.onResize(!0), T.emit("onObserverUpdate", T, e)
                    })
                });
            n.observe(e, {
                attributes: "undefined" == typeof t.attributes || t.attributes,
                childList: "undefined" == typeof t.childList || t.childList,
                characterData: "undefined" == typeof t.characterData || t.characterData
            }), T.observers.push(n)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === t || !T.isHorizontal() && 40 === t)) return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === t || !T.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var a = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;
                    var n = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        r = window.innerWidth,
                        i = window.innerHeight,
                        s = T.container.offset();
                    T.rtl && (s.left = s.left - T.container[0].scrollLeft);
                    for (var o = [
                            [s.left, s.top],
                            [s.left + T.width, s.top],
                            [s.left, s.top + T.height],
                            [s.left + T.width, s.top + T.height]
                        ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= n.left && p[0] <= n.left + r && p[1] >= n.top && p[1] <= n.top + i && (a = !0)
                    }
                    if (!a) return
                }
                T.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !T.rtl || 37 === t && T.rtl) && T.slideNext(), (37 === t && !T.rtl || 39 === t && T.rtl) && T.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && T.slideNext(),
                    38 === t && T.slidePrev())
            }
        }

        function u() {
            var e = "onwheel",
                t = e in document;
            if (!t) {
                var a = document.createElement("div");
                a.setAttribute(e, "return;"), t = "function" == typeof a[e]
            }
            return !t && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0,
                a = T.rtl ? -1 : 1,
                n = c(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                    t = n.pixelX * a
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                    t = n.pixelY
                }
            else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * a : -n.pixelY;
            if (0 !== t) {
                if (T.params.mousewheelInvert && (t = -t), T.params.freeMode) {
                    var r = T.getWrapperTranslate() + t * T.params.mousewheelSensitivity,
                        i = T.isBeginning,
                        s = T.isEnd;
                    if (r >= T.minTranslate() && (r = T.minTranslate()), r <= T.maxTranslate() && (r = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(r), T.updateProgress(), T.updateActiveIndex(), (!i && T.isBeginning || !s && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function() {
                            T.slideReset()
                        }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, e), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === r || r === T.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (t < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges) return !0
                            } else T.slideNext(), T.emit("onScroll", T, e);
                    else if (T.isBeginning && !T.params.loop || T.animating) {
                        if (T.params.mousewheelReleaseOnEdges) return !0
                    } else T.slidePrev(), T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function c(e) {
            var t = 10,
                a = 40,
                n = 800,
                r = 0,
                i = 0,
                s = 0,
                o = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (r = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (r = i, i = 0), s = r * t, o = i * t, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || o) && e.deltaMode && (1 === e.deltaMode ? (s *= a, o *= a) : (s *= n, o *= n)), s && !r && (r = s < 1 ? -1 : 1), o && !i && (i = o < 1 ? -1 : 1), {
                spinX: r,
                spinY: i,
                pixelX: s,
                pixelY: o
            }
        }

        function f(e, a) {
            e = t(e);
            var n, r, i, s = T.rtl ? -1 : 1;
            n = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), i = e.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : T.isHorizontal() ? (r = n, i = "0") : (i = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a * s + "%" : r * a * s + "px", i = i.indexOf("%") >= 0 ? parseInt(i, 10) * a + "%" : i * a + "px", e.transform("translate3d(" + r + ", " + i + ",0px)")
        }

        function m(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof a)) return new a(e, n);
        var h = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            g = n && n.virtualTranslate;
        n = n || {};
        var v = {};
        for (var y in n)
            if ("object" != typeof n[y] || null === n[y] || n[y].nodeType || n[y] === window || n[y] === document || "undefined" != typeof Dom7 && n[y] instanceof Dom7 || "undefined" != typeof jQuery && n[y] instanceof jQuery) v[y] = n[y];
            else {
                v[y] = {};
                for (var w in n[y]) v[y][w] = n[y][w]
            }
        for (var x in h)
            if ("undefined" == typeof n[x]) n[x] = h[x];
            else if ("object" == typeof n[x])
            for (var b in h[x]) "undefined" == typeof n[x][b] && (n[x][b] = h[x][b]);
        var T = this;
        if (T.params = n, T.originalParams = v, T.classNames = [], "undefined" != typeof t && "undefined" != typeof Dom7 && (t = Dom7), ("undefined" != typeof t || (t = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (T.$ = t, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function() {
                if (!T.params.breakpoints) return !1;
                var e, t = !1,
                    a = [];
                for (e in T.params.breakpoints) T.params.breakpoints.hasOwnProperty(e) && a.push(e);
                a.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var n = 0; n < a.length; n++) e = a[n], e >= window.innerWidth && !t && (t = e);
                return t || "max"
            }, T.setBreakpoint = function() {
                var e = T.getActiveBreakpoint();
                if (e && T.currentBreakpoint !== e) {
                    var t = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams,
                        a = T.params.loop && t.slidesPerView !== T.params.slidesPerView;
                    for (var n in t) T.params[n] = t[n];
                    T.currentBreakpoint = e, a && T.destroyLoop && T.reLoop(!0)
                }
            }, T.params.breakpoints && T.setBreakpoint(), T.container = t(e), 0 !== T.container.length)) {
            if (T.container.length > 1) {
                var C = [];
                return T.container.each(function() {
                    C.push(new a(this, n))
                }), C
            }
            T.container[0].swiper = T, T.container.data("swiper", T), T.classNames.push(T.params.containerModifierClass + T.params.direction), T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"), T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1), T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"), (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0), T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"), "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect), "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0, T.params.setWrapperSize = !1), "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, T.params.setWrapperSize = !1, "undefined" == typeof g && (T.params.virtualTranslate = !0)), T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1), T.wrapper = T.container.children("." + T.params.wrapperClass), T.params.pagination && (T.paginationContainer = t(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)), (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = t(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = t(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))), T.isHorizontal = function() {
                return "horizontal" === T.params.direction
            }, T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")), T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"), T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")), T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"), T.device.android && T.classNames.push(T.params.containerModifierClass + "android"), T.container.addClass(T.classNames.join(" ")), T.translate = 0, T.progress = 0, T.velocity = 0, T.lockSwipeToNext = function() {
                T.params.allowSwipeToNext = !1, T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }, T.lockSwipeToPrev = function() {
                T.params.allowSwipeToPrev = !1, T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }, T.lockSwipes = function() {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1, T.params.grabCursor && T.unsetGrabCursor()
            }, T.unlockSwipeToNext = function() {
                T.params.allowSwipeToNext = !0, T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
            }, T.unlockSwipeToPrev = function() {
                T.params.allowSwipeToPrev = !0, T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
            }, T.unlockSwipes = function() {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0, T.params.grabCursor && T.setGrabCursor()
            }, T.setGrabCursor = function(e) {
                T.container[0].style.cursor = "move", T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", T.container[0].style.cursor = e ? "grabbing" : "grab"
            }, T.unsetGrabCursor = function() {
                T.container[0].style.cursor = ""
            }, T.params.grabCursor && T.setGrabCursor(), T.imagesToLoad = [], T.imagesLoaded = 0, T.loadImage = function(e, t, a, n, r, i) {
                function s() {
                    i && i()
                }
                var o;
                e.complete && r ? s() : t ? (o = new window.Image, o.onload = s, o.onerror = s, n && (o.sizes = n), a && (o.srcset = a), t && (o.src = t)) : s()
            }, T.preloadImages = function() {
                function e() {
                    "undefined" != typeof T && null !== T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)))
                }
                T.imagesToLoad = T.container.find("img");
                for (var t = 0; t < T.imagesToLoad.length; t++) T.loadImage(T.imagesToLoad[t], T.imagesToLoad[t].currentSrc || T.imagesToLoad[t].getAttribute("src"), T.imagesToLoad[t].srcset || T.imagesToLoad[t].getAttribute("srcset"), T.imagesToLoad[t].sizes || T.imagesToLoad[t].getAttribute("sizes"), !0, e)
            }, T.autoplayTimeoutId = void 0, T.autoplaying = !1, T.autoplayPaused = !1, T.startAutoplay = function() {
                return "undefined" == typeof T.autoplayTimeoutId && !!T.params.autoplay && !T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void s())
            }, T.stopAutoplay = function(e) {
                T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T))
            }, T.pauseAutoplay = function(e) {
                T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === e ? (T.autoplayPaused = !1, s()) : T.wrapper.transitionEnd(function() {
                    T && (T.autoplayPaused = !1, T.autoplaying ? s() : T.stopAutoplay())
                }))
            }, T.minTranslate = function() {
                return -T.snapGrid[0]
            }, T.maxTranslate = function() {
                return -T.snapGrid[T.snapGrid.length - 1]
            }, T.updateAutoHeight = function() {
                var e = [],
                    t = 0;
                if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                    for (r = 0; r < Math.ceil(T.params.slidesPerView); r++) {
                        var a = T.activeIndex + r;
                        if (a > T.slides.length) break;
                        e.push(T.slides.eq(a)[0])
                    } else e.push(T.slides.eq(T.activeIndex)[0]);
                for (r = 0; r < e.length; r++)
                    if ("undefined" != typeof e[r]) {
                        var n = e[r].offsetHeight;
                        t = n > t ? n : t
                    }
                t && T.wrapper.css("height", t + "px")
            }, T.updateContainerSize = function() {
                var e, t;
                e = "undefined" != typeof T.params.width ? T.params.width : T.container[0].clientWidth, t = "undefined" != typeof T.params.height ? T.params.height : T.container[0].clientHeight, 0 === e && T.isHorizontal() || 0 === t && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), t = t - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = e, T.height = t, T.size = T.isHorizontal() ? T.width : T.height)
            }, T.updateSlidesSize = function() {
                T.slides = T.wrapper.children("." + T.params.slideClass), T.snapGrid = [], T.slidesGrid = [], T.slidesSizesGrid = [];
                var e, t = T.params.spaceBetween,
                    a = -T.params.slidesOffsetBefore,
                    n = 0,
                    r = 0;
                if ("undefined" != typeof T.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * T.size), T.virtualSize = -t, T.rtl ? T.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : T.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var s;
                    T.params.slidesPerColumn > 1 && (s = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (s = Math.max(s, T.params.slidesPerView * T.params.slidesPerColumn)));
                    var o, l = T.params.slidesPerColumn,
                        p = s / l,
                        u = p - (T.params.slidesPerColumn * p - T.slides.length);
                    for (e = 0; e < T.slides.length; e++) {
                        o = 0;
                        var d = T.slides.eq(e);
                        if (T.params.slidesPerColumn > 1) {
                            var c, f, m;
                            "column" === T.params.slidesPerColumnFill ? (f = Math.floor(e / l), m = e - f * l, (f > u || f === u && m === l - 1) && ++m >= l && (m = 0, f++), c = f + m * s / l, d.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (m = Math.floor(e / p), f = e - m * p), d.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== m && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", m)
                        }
                        "none" !== d.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), T.params.roundLengths && (o = i(o))) : (o = (T.size - (T.params.slidesPerView - 1) * t) / T.params.slidesPerView, T.params.roundLengths && (o = i(o)), T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"), T.slides[e].swiperSlideSize = o, T.slidesSizesGrid.push(o), T.params.centeredSlides ? (a = a + o / 2 + n / 2 + t, 0 === e && (a = a - T.size / 2 - t), Math.abs(a) < .001 && (a = 0), r % T.params.slidesPerGroup === 0 && T.snapGrid.push(a), T.slidesGrid.push(a)) : (r % T.params.slidesPerGroup === 0 && T.snapGrid.push(a), T.slidesGrid.push(a), a = a + o + t), T.virtualSize += o + t, n = o, r++)
                    }
                    T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                    var h;
                    if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }) : T.wrapper.css({
                            height: T.virtualSize + T.params.spaceBetween + "px"
                        })), T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * s, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }) : T.wrapper.css({
                            height: T.virtualSize + T.params.spaceBetween + "px"
                        }), T.params.centeredSlides)) {
                        for (h = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && h.push(T.snapGrid[e]);
                        T.snapGrid = h
                    }
                    if (!T.params.centeredSlides) {
                        for (h = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] <= T.virtualSize - T.size && h.push(T.snapGrid[e]);
                        T.snapGrid = h, Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                    }
                    0 === T.snapGrid.length && (T.snapGrid = [0]), 0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                        marginLeft: t + "px"
                    }) : T.slides.css({
                        marginRight: t + "px"
                    }) : T.slides.css({
                        marginBottom: t + "px"
                    })), T.params.watchSlidesProgress && T.updateSlidesOffset()
                }
            }, T.updateSlidesOffset = function() {
                for (var e = 0; e < T.slides.length; e++) T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
            }, T.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = T.translate || 0), 0 !== T.slides.length) {
                    "undefined" == typeof T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                    var t = -e;
                    T.rtl && (t = e), T.slides.removeClass(T.params.slideVisibleClass);
                    for (var a = 0; a < T.slides.length; a++) {
                        var n = T.slides[a],
                            r = (t + (T.params.centeredSlides ? T.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + T.params.spaceBetween);
                        if (T.params.watchSlidesVisibility) {
                            var i = -(t - n.swiperSlideOffset),
                                s = i + T.slidesSizesGrid[a],
                                o = i >= 0 && i < T.size || s > 0 && s <= T.size || i <= 0 && s >= T.size;
                            o && T.slides.eq(a).addClass(T.params.slideVisibleClass)
                        }
                        n.progress = T.rtl ? -r : r
                    }
                }
            }, T.updateProgress = function(e) {
                "undefined" == typeof e && (e = T.translate || 0);
                var t = T.maxTranslate() - T.minTranslate(),
                    a = T.isBeginning,
                    n = T.isEnd;
                0 === t ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / t, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1), T.isBeginning && !a && T.emit("onReachBeginning", T), T.isEnd && !n && T.emit("onReachEnd", T), T.params.watchSlidesProgress && T.updateSlidesProgress(e), T.emit("onProgress", T, T.progress)
            }, T.updateActiveIndex = function() {
                var e, t, a, n = T.rtl ? T.translate : -T.translate;
                for (t = 0; t < T.slidesGrid.length; t++) "undefined" != typeof T.slidesGrid[t + 1] ? n >= T.slidesGrid[t] && n < T.slidesGrid[t + 1] - (T.slidesGrid[t + 1] - T.slidesGrid[t]) / 2 ? e = t : n >= T.slidesGrid[t] && n < T.slidesGrid[t + 1] && (e = t + 1) : n >= T.slidesGrid[t] && (e = t);
                T.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0), a = Math.floor(e / T.params.slidesPerGroup), a >= T.snapGrid.length && (a = T.snapGrid.length - 1), e !== T.activeIndex && (T.snapIndex = a, T.previousIndex = T.activeIndex, T.activeIndex = e, T.updateClasses(), T.updateRealIndex())
            }, T.updateRealIndex = function() {
                T.realIndex = T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex
            }, T.updateClasses = function() {
                T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                var e = T.slides.eq(T.activeIndex);
                e.addClass(T.params.slideActiveClass), n.loop && (e.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                var a = e.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                T.params.loop && 0 === a.length && (a = T.slides.eq(0), a.addClass(T.params.slideNextClass));
                var r = e.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                if (T.params.loop && 0 === r.length && (r = T.slides.eq(-1), r.addClass(T.params.slidePrevClass)), n.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), r.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
                    var i, s = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                    if (T.params.loop ? (i = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), i > T.slides.length - 1 - 2 * T.loopedSlides && (i -= T.slides.length - 2 * T.loopedSlides), i > s - 1 && (i -= s), i < 0 && "bullets" !== T.params.paginationType && (i = s + i)) : i = "undefined" != typeof T.snapIndex ? T.snapIndex : T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function() {
                            t(this).index() === i && t(this).addClass(T.params.bulletActiveClass)
                        }) : T.bullets.eq(i).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(i + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(s)), "progress" === T.params.paginationType) {
                        var o = (i + 1) / s,
                            l = o,
                            p = 1;
                        T.isHorizontal() || (p = o, l = 1), T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                    }
                    "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, i + 1, s)), T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                }
                T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
            }, T.updatePagination = function() {
                if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === T.params.paginationType) {
                        for (var t = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, a = 0; a < t; a++) e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, a, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                        T.paginationContainer.html(e), T.bullets = T.paginationContainer.find("." + T.params.bulletClass), T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                    }
                    "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(e)), "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(e)), "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                }
            }, T.update = function(e) {
                function t() {
                    T.rtl ? -T.translate : T.translate, n = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()), T.setWrapperTranslate(n), T.updateActiveIndex(), T.updateClasses()
                }
                if (T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), e) {
                    var a, n;
                    T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (t(), T.params.autoHeight && T.updateAutoHeight()) : (a = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0), a || t())
                } else T.params.autoHeight && T.updateAutoHeight()
            }, T.onResize = function(e) {
                T.params.breakpoints && T.setBreakpoint();
                var t = T.params.allowSwipeToPrev,
                    a = T.params.allowSwipeToNext;
                T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0, T.updateContainerSize(), T.updateSlidesSize(), ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), T.controller && T.controller.spline && (T.controller.spline = void 0);
                var n = !1;
                if (T.params.freeMode) {
                    var r = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                    T.setWrapperTranslate(r), T.updateActiveIndex(), T.updateClasses(), T.params.autoHeight && T.updateAutoHeight()
                } else T.updateClasses(), n = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                T.params.lazyLoading && !n && T.lazy && T.lazy.load(), T.params.allowSwipeToPrev = t, T.params.allowSwipeToNext = a
            }, T.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), T.touchEvents = {
                start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction), T.initEvents = function(e) {
                var t = e ? "off" : "on",
                    a = e ? "removeEventListener" : "addEventListener",
                    r = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
                    i = T.support.touch ? r : document,
                    s = !!T.params.nested;
                if (T.browser.ie) r[a](T.touchEvents.start, T.onTouchStart, !1), i[a](T.touchEvents.move, T.onTouchMove, s), i[a](T.touchEvents.end, T.onTouchEnd, !1);
                else {
                    if (T.support.touch) {
                        var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r[a](T.touchEvents.start, T.onTouchStart, o), r[a](T.touchEvents.move, T.onTouchMove, s), r[a](T.touchEvents.end, T.onTouchEnd, o)
                    }(n.simulateTouch && !T.device.ios && !T.device.android || n.simulateTouch && !T.support.touch && T.device.ios) && (r[a]("mousedown", T.onTouchStart, !1), document[a]("mousemove", T.onTouchMove, s), document[a]("mouseup", T.onTouchEnd, !1))
                }
                window[a]("resize", T.onResize), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[t]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[t]("keydown", T.a11y.onEnterKey)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[t]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[t]("keydown", T.a11y.onEnterKey)), T.params.pagination && T.params.paginationClickable && (T.paginationContainer[t]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[t]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)), (T.params.preventClicks || T.params.preventClicksPropagation) && r[a]("click", T.preventClicks, !0)
            }, T.attachEvents = function() {
                T.initEvents()
            }, T.detachEvents = function() {
                T.initEvents(!0)
            }, T.allowClick = !0, T.preventClicks = function(e) {
                T.allowClick || (T.params.preventClicks && e.preventDefault(), T.params.preventClicksPropagation && T.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, T.onClickNext = function(e) {
                e.preventDefault(), T.isEnd && !T.params.loop || T.slideNext()
            }, T.onClickPrev = function(e) {
                e.preventDefault(), T.isBeginning && !T.params.loop || T.slidePrev()
            }, T.onClickIndex = function(e) {
                e.preventDefault();
                var a = t(this).index() * T.params.slidesPerGroup;
                T.params.loop && (a += T.loopedSlides), T.slideTo(a)
            }, T.updateClickedSlide = function(e) {
                var a = o(e, "." + T.params.slideClass),
                    n = !1;
                if (a)
                    for (var r = 0; r < T.slides.length; r++) T.slides[r] === a && (n = !0);
                if (!a || !n) return T.clickedSlide = void 0, void(T.clickedIndex = void 0);
                if (T.clickedSlide = a, T.clickedIndex = t(a).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                    var i, s = T.clickedIndex;
                    if (T.params.loop) {
                        if (T.animating) return;
                        i = t(T.clickedSlide).attr("data-swiper-slide-index"), T.params.centeredSlides ? s < T.loopedSlides - T.params.slidesPerView / 2 || s > T.slides.length - T.loopedSlides + T.params.slidesPerView / 2 ? (T.fixLoop(), s = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            T.slideTo(s)
                        }, 0)) : T.slideTo(s) : s > T.slides.length - T.params.slidesPerView ? (T.fixLoop(), s = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            T.slideTo(s)
                        }, 0)) : T.slideTo(s)
                    } else T.slideTo(s)
                }
            };
            var S, E, k, M, z, N, D, P, L, A, H = "input, select, textarea, button, video",
                I = Date.now(),
                B = [];
            T.animating = !1, T.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var O, j;
            T.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), O = "touchstart" === e.type, O || !("which" in e) || 3 !== e.which) {
                    if (T.params.noSwiping && o(e, "." + T.params.noSwipingClass)) return void(T.allowClick = !0);
                    if (!T.params.swipeHandler || o(e, T.params.swipeHandler)) {
                        var a = T.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            n = T.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && a <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0, E = !1, k = !0, z = void 0, j = void 0, T.touches.startX = a, T.touches.startY = n, M = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (P = !1), "touchstart" !== e.type) {
                                var r = !0;
                                t(e.target).is(H) && (r = !1), document.activeElement && t(document.activeElement).is(H) && document.activeElement.blur(), r && e.preventDefault()
                            }
                            T.emit("onTouchStart", T, e)
                        }
                    }
                }
            }, T.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !O || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return T.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(T.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (T.params.onlyExternal) return T.allowClick = !1, void(S && (T.touches.startX = T.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, T.touches.startY = T.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, M = Date.now()));
                    if (O && T.params.touchReleaseOnEdges && !T.params.loop)
                        if (T.isHorizontal()) {
                            if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return
                        } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;
                    if (O && document.activeElement && e.target === document.activeElement && t(e.target).is(H)) return E = !0, void(T.allowClick = !1);
                    if (k && T.emit("onTouchMove", T, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (T.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, T.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof z) {
                            var a;
                            T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX !== T.touches.startX ? z = !1 : (a = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, z = T.isHorizontal() ? a > T.params.touchAngle : 90 - a > T.params.touchAngle)
                        }
                        if (z && T.emit("onTouchMoveOpposite", T, e), "undefined" == typeof j && T.browser.ieTouch && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (j = !0)), S) {
                            if (z) return void(S = !1);
                            if (j || !T.browser.ieTouch) {
                                T.allowClick = !1, T.emit("onSliderMove", T, e), e.preventDefault(), T.params.touchMoveStopPropagation && !T.params.nested && e.stopPropagation(), E || (n.loop && T.fixLoop(), D = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), A = !1, !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)), E = !0;
                                var r = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                r *= T.params.touchRatio, T.rtl && (r = -r), T.swipeDirection = r > 0 ? "prev" : "next", N = r + D;
                                var i = !0;
                                if (r > 0 && N > T.minTranslate() ? (i = !1, T.params.resistance && (N = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + D + r, T.params.resistanceRatio))) : r < 0 && N < T.maxTranslate() && (i = !1, T.params.resistance && (N = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - D - r, T.params.resistanceRatio))), i && (e.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && N < D && (N = D), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && N > D && (N = D), T.params.threshold > 0) {
                                    if (!(Math.abs(r) > T.params.threshold || P)) return void(N = D);
                                    if (!P) return P = !0, T.touches.startX = T.touches.currentX, T.touches.startY = T.touches.currentY, N = D, void(T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                }
                                T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === B.length && B.push({
                                    position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                    time: M
                                }), B.push({
                                    position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), T.updateProgress(N), T.setWrapperTranslate(N))
                            }
                        }
                    }
                }
            }, T.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), k && T.emit("onTouchEnd", T, e), k = !1, S) {
                    T.params.grabCursor && E && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                    var a = Date.now(),
                        n = a - M;
                    if (T.allowClick && (T.updateClickedSlide(e), T.emit("onTap", T, e), n < 300 && a - I > 300 && (L && clearTimeout(L), L = setTimeout(function() {
                            T && (T.params.paginationHide && T.paginationContainer.length > 0 && !t(e.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, e))
                        }, 300)), n < 300 && a - I < 300 && (L && clearTimeout(L), T.emit("onDoubleTap", T, e))), I = Date.now(), setTimeout(function() {
                            T && (T.allowClick = !0)
                        }, 0), !S || !E || !T.swipeDirection || 0 === T.touches.diff || N === D) return void(S = E = !1);
                    S = E = !1;
                    var r;
                    if (r = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -N, T.params.freeMode) {
                        if (r < -T.minTranslate()) return void T.slideTo(T.activeIndex);
                        if (r > -T.maxTranslate()) return void(T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                        if (T.params.freeModeMomentum) {
                            if (B.length > 1) {
                                var i = B.pop(),
                                    s = B.pop(),
                                    o = i.position - s.position,
                                    l = i.time - s.time;
                                T.velocity = o / l, T.velocity = T.velocity / 2, Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (T.velocity = 0)
                            } else T.velocity = 0;
                            T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio, B.length = 0;
                            var p = 1e3 * T.params.freeModeMomentumRatio,
                                u = T.velocity * p,
                                d = T.translate + u;
                            T.rtl && (d = -d);
                            var c, f = !1,
                                m = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                            if (d < T.maxTranslate()) T.params.freeModeMomentumBounce ? (d + T.maxTranslate() < -m && (d = T.maxTranslate() - m), c = T.maxTranslate(), f = !0, A = !0) : d = T.maxTranslate();
                            else if (d > T.minTranslate()) T.params.freeModeMomentumBounce ? (d - T.minTranslate() > m && (d = T.minTranslate() + m), c = T.minTranslate(), f = !0, A = !0) : d = T.minTranslate();
                            else if (T.params.freeModeSticky) {
                                var h, g = 0;
                                for (g = 0; g < T.snapGrid.length; g += 1)
                                    if (T.snapGrid[g] > -d) {
                                        h = g;
                                        break
                                    }
                                d = Math.abs(T.snapGrid[h] - d) < Math.abs(T.snapGrid[h - 1] - d) || "next" === T.swipeDirection ? T.snapGrid[h] : T.snapGrid[h - 1], T.rtl || (d = -d)
                            }
                            if (0 !== T.velocity) p = T.rtl ? Math.abs((-d - T.translate) / T.velocity) : Math.abs((d - T.translate) / T.velocity);
                            else if (T.params.freeModeSticky) return void T.slideReset();
                            T.params.freeModeMomentumBounce && f ? (T.updateProgress(c), T.setWrapperTransition(p), T.setWrapperTranslate(d), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function() {
                                T && A && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(c), T.wrapper.transitionEnd(function() {
                                    T && T.onTransitionEnd()
                                }))
                            })) : T.velocity ? (T.updateProgress(d), T.setWrapperTransition(p), T.setWrapperTranslate(d), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
                                T && T.onTransitionEnd()
                            }))) : T.updateProgress(d), T.updateActiveIndex()
                        }
                        return void((!T.params.freeModeMomentum || n >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()))
                    }
                    var v, y = 0,
                        w = T.slidesSizesGrid[0];
                    for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup) "undefined" != typeof T.slidesGrid[v + T.params.slidesPerGroup] ? r >= T.slidesGrid[v] && r < T.slidesGrid[v + T.params.slidesPerGroup] && (y = v, w = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : r >= T.slidesGrid[v] && (y = v, w = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                    var x = (r - T.slidesGrid[y]) / w;
                    if (n > T.params.longSwipesMs) {
                        if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y)), "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y))
                    } else {
                        if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && T.slideTo(y + T.params.slidesPerGroup), "prev" === T.swipeDirection && T.slideTo(y)
                    }
                }
            }, T._slideTo = function(e, t) {
                return T.slideTo(e, t, !0, !0)
            }, T.slideTo = function(e, t, a, n) {
                "undefined" == typeof a && (a = !0), "undefined" == typeof e && (e = 0), e < 0 && (e = 0), T.snapIndex = Math.floor(e / T.params.slidesPerGroup), T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                var r = -T.snapGrid[T.snapIndex];
                if (T.params.autoplay && T.autoplaying && (n || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(t) : T.stopAutoplay()), T.updateProgress(r), T.params.normalizeSlideIndex)
                    for (var i = 0; i < T.slidesGrid.length; i++) - Math.floor(100 * r) >= Math.floor(100 * T.slidesGrid[i]) && (e = i);
                return !(!T.params.allowSwipeToNext && r < T.translate && r < T.minTranslate() || !T.params.allowSwipeToPrev && r > T.translate && r > T.maxTranslate() && (T.activeIndex || 0) !== e || ("undefined" == typeof t && (t = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = e, T.updateRealIndex(), T.rtl && -r === T.translate || !T.rtl && r === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(r), 1) : (T.updateClasses(), T.onTransitionStart(a), 0 === t || T.browser.lteIE9 ? (T.setWrapperTranslate(r), T.setWrapperTransition(0), T.onTransitionEnd(a)) : (T.setWrapperTranslate(r), T.setWrapperTransition(t), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
                    T && T.onTransitionEnd(a)
                }))), 0)))
            }, T.onTransitionStart = function(e) {
                "undefined" == typeof e && (e = !0), T.params.autoHeight && T.updateAutoHeight(), T.lazy && T.lazy.onTransitionStart(), e && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
            }, T.onTransitionEnd = function(e) {
                T.animating = !1, T.setWrapperTransition(0), "undefined" == typeof e && (e = !0), T.lazy && T.lazy.onTransitionEnd(), e && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))), T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex), T.params.hashnav && T.hashnav && T.hashnav.setHash()
            }, T.slideNext = function(e, t, a) {
                return T.params.loop ? !T.animating && (T.fixLoop(), T.container[0].clientLeft, T.slideTo(T.activeIndex + T.params.slidesPerGroup, t, e, a)) : T.slideTo(T.activeIndex + T.params.slidesPerGroup, t, e, a)
            }, T._slideNext = function(e) {
                return T.slideNext(!0, e, !0)
            }, T.slidePrev = function(e, t, a) {
                return T.params.loop ? !T.animating && (T.fixLoop(), T.container[0].clientLeft, T.slideTo(T.activeIndex - 1, t, e, a)) : T.slideTo(T.activeIndex - 1, t, e, a)
            }, T._slidePrev = function(e) {
                return T.slidePrev(!0, e, !0)
            }, T.slideReset = function(e, t, a) {
                return T.slideTo(T.activeIndex, t, e)
            }, T.disableTouchControl = function() {
                return T.params.onlyExternal = !0, !0
            }, T.enableTouchControl = function() {
                return T.params.onlyExternal = !1, !0
            }, T.setWrapperTransition = function(e, t) {
                T.wrapper.transition(e), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e), T.params.parallax && T.parallax && T.parallax.setTransition(e), T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e), T.params.control && T.controller && T.controller.setTransition(e, t), T.emit("onSetTransition", T, e)
            }, T.setWrapperTranslate = function(e, t, a) {
                var n = 0,
                    r = 0,
                    s = 0;
                T.isHorizontal() ? n = T.rtl ? -e : e : r = e, T.params.roundLengths && (n = i(n), r = i(r)), T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + n + "px, " + r + "px, " + s + "px)") : T.wrapper.transform("translate(" + n + "px, " + r + "px)")), T.translate = T.isHorizontal() ? n : r;
                var o, l = T.maxTranslate() - T.minTranslate();
                o = 0 === l ? 0 : (e - T.minTranslate()) / l, o !== T.progress && T.updateProgress(e), t && T.updateActiveIndex(), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate), T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate), T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate), T.params.control && T.controller && T.controller.setTranslate(T.translate, a), T.emit("onSetTranslate", T, T.translate)
            }, T.getTranslate = function(e, t) {
                var a, n, r, i;
                return "undefined" == typeof t && (t = "x"), T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), i = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = i.toString().split(",")), "x" === t && (n = window.WebKitCSSMatrix ? i.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (n = window.WebKitCSSMatrix ? i.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), T.rtl && n && (n = -n), n || 0)
            }, T.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = T.isHorizontal() ? "x" : "y"), T.getTranslate(T.wrapper[0], e)
            }, T.observers = [], T.initObservers = function() {
                if (T.params.observeParents)
                    for (var e = T.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                l(T.container[0], {
                    childList: !1
                }), l(T.wrapper[0], {
                    attributes: !1
                })
            }, T.disconnectObservers = function() {
                for (var e = 0; e < T.observers.length; e++) T.observers[e].disconnect();
                T.observers = []
            }, T.createLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                var e = T.wrapper.children("." + T.params.slideClass);
                "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = e.length), T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10), T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides, T.loopedSlides > e.length && (T.loopedSlides = e.length);
                var a, n = [],
                    r = [];
                for (e.each(function(a, i) {
                        var s = t(this);
                        a < T.loopedSlides && r.push(i), a < e.length && a >= e.length - T.loopedSlides && n.push(i), s.attr("data-swiper-slide-index", a)
                    }), a = 0; a < r.length; a++) T.wrapper.append(t(r[a].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                for (a = n.length - 1; a >= 0; a--) T.wrapper.prepend(t(n[a].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
            }, T.destroyLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(), T.slides.removeAttr("data-swiper-slide-index")
            }, T.reLoop = function(e) {
                var t = T.activeIndex - T.loopedSlides;
                T.destroyLoop(), T.createLoop(), T.updateSlidesSize(), e && T.slideTo(t + T.loopedSlides, 0, !1)
            }, T.fixLoop = function() {
                var e;
                T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex, e += T.loopedSlides, T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides, e += T.loopedSlides, T.slideTo(e, 0, !1, !0))
            }, T.appendSlide = function(e) {
                if (T.params.loop && T.destroyLoop(), "object" == typeof e && e.length)
                    for (var t = 0; t < e.length; t++) e[t] && T.wrapper.append(e[t]);
                else T.wrapper.append(e);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0)
            }, T.prependSlide = function(e) {
                T.params.loop && T.destroyLoop();
                var t = T.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var a = 0; a < e.length; a++) e[a] && T.wrapper.prepend(e[a]);
                    t = T.activeIndex + e.length
                } else T.wrapper.prepend(e);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.slideTo(t, 0, !1)
            }, T.removeSlide = function(e) {
                T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));
                var t, a = T.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) t = e[n], T.slides[t] && T.slides.eq(t).remove(), t < a && a--;
                    a = Math.max(a, 0)
                } else t = e, T.slides[t] && T.slides.eq(t).remove(), t < a && a--, a = Math.max(a, 0);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.params.loop ? T.slideTo(a + T.loopedSlides, 0, !1) : T.slideTo(a, 0, !1)
            }, T.removeAllSlides = function() {
                for (var e = [], t = 0; t < T.slides.length; t++) e.push(t);
                T.removeSlide(e)
            }, T.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < T.slides.length; e++) {
                            var t = T.slides.eq(e),
                                a = t[0].swiperSlideOffset,
                                n = -a;
                            T.params.virtualTranslate || (n -= T.translate);
                            var r = 0;
                            T.isHorizontal() || (r = n, n = 0);
                            var i = T.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: i
                            }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (T.slides.transition(e), T.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            T.slides.transitionEnd(function() {
                                if (!t && T) {
                                    t = !0, T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) T.wrapper.trigger(e[a])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < T.slides.length; e++) {
                            var a = T.slides.eq(e),
                                n = a[0].progress;
                            T.params.flip.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                            var r = a[0].swiperSlideOffset,
                                i = -180 * n,
                                s = i,
                                o = 0,
                                l = -r,
                                p = 0;
                            if (T.isHorizontal() ? T.rtl && (s = -s) : (p = l, l = 0, o = -s, s = 0), a[0].style.zIndex = -Math.abs(Math.round(n)) + T.slides.length, T.params.flip.slideShadows) {
                                var u = T.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                    d = T.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), a.append(u)), 0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(d)), u.length && (u[0].style.opacity = Math.max(-n, 0)), d.length && (d[0].style.opacity = Math.max(n, 0))
                            }
                            a.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                        }
                    },
                    setTransition: function(e) {
                        if (T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), T.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            T.slides.eq(T.activeIndex).transitionEnd(function() {
                                if (!a && T && t(this).hasClass(T.params.slideActiveClass)) {
                                    a = !0, T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) T.wrapper.trigger(e[n])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, a = 0;
                        T.params.cube.shadow && (T.isHorizontal() ? (e = T.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(e)), e.css({
                            height: T.width + "px"
                        })) : (e = T.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), T.container.append(e))));
                        for (var n = 0; n < T.slides.length; n++) {
                            var r = T.slides.eq(n),
                                i = 90 * n,
                                s = Math.floor(i / 360);
                            T.rtl && (i = -i, s = Math.floor(-i / 360));
                            var o = Math.max(Math.min(r[0].progress, 1), -1),
                                l = 0,
                                p = 0,
                                u = 0;
                            n % 4 === 0 ? (l = 4 * -s * T.size, u = 0) : (n - 1) % 4 === 0 ? (l = 0, u = 4 * -s * T.size) : (n - 2) % 4 === 0 ? (l = T.size + 4 * s * T.size, u = T.size) : (n - 3) % 4 === 0 && (l = -T.size, u = 3 * T.size + 4 * T.size * s), T.rtl && (l = -l), T.isHorizontal() || (p = l, l = 0);
                            var d = "rotateX(" + (T.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (T.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + u + "px)";
                            if (o <= 1 && o > -1 && (a = 90 * n + 90 * o, T.rtl && (a = 90 * -n - 90 * o)), r.transform(d), T.params.cube.slideShadows) {
                                var c = T.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    f = T.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), r.append(c)), 0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(f)), c.length && (c[0].style.opacity = Math.max(-o, 0)), f.length && (f[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (T.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "transform-origin": "50% 50% -" + T.size / 2 + "px"
                            }), T.params.cube.shadow)
                            if (T.isHorizontal()) e.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                            else {
                                var m = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                    h = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
                                    g = T.params.cube.shadowScale,
                                    v = T.params.cube.shadowScale / h,
                                    y = T.params.cube.shadowOffset;
                                e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + y) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                            }
                        var w = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                        T.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (T.isHorizontal() ? 0 : a) + "deg) rotateY(" + (T.isHorizontal() ? -a : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = T.translate, a = T.isHorizontal() ? -e + T.width / 2 : -e + T.height / 2, n = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, r = T.params.coverflow.depth, i = 0, s = T.slides.length; i < s; i++) {
                            var o = T.slides.eq(i),
                                l = T.slidesSizesGrid[i],
                                p = o[0].swiperSlideOffset,
                                u = (a - p - l / 2) / l * T.params.coverflow.modifier,
                                d = T.isHorizontal() ? n * u : 0,
                                c = T.isHorizontal() ? 0 : n * u,
                                f = -r * Math.abs(u),
                                m = T.isHorizontal() ? 0 : T.params.coverflow.stretch * u,
                                h = T.isHorizontal() ? T.params.coverflow.stretch * u : 0;
                            Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(d) < .001 && (d = 0), Math.abs(c) < .001 && (c = 0);
                            var g = "translate3d(" + h + "px," + m + "px," + f + "px)  rotateX(" + c + "deg) rotateY(" + d + "deg)";
                            if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(u)) + 1, T.params.coverflow.slideShadows) {
                                var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    y = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(y)), v.length && (v[0].style.opacity = u > 0 ? u : 0), y.length && (y[0].style.opacity = -u > 0 ? -u : 0)
                            }
                        }
                        if (T.browser.ie) {
                            var w = T.wrapper[0].style;
                            w.perspectiveOrigin = a + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, T.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, a) {
                    if ("undefined" != typeof e && ("undefined" == typeof a && (a = !0), 0 !== T.slides.length)) {
                        var n = T.slides.eq(e),
                            r = n.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                        !n.hasClass(T.params.lazyLoadingClass) || n.hasClass(T.params.lazyStatusLoadedClass) || n.hasClass(T.params.lazyStatusLoadingClass) || (r = r.add(n[0])), 0 !== r.length && r.each(function() {
                            var e = t(this);
                            e.addClass(T.params.lazyStatusLoadingClass);
                            var r = e.attr("data-background"),
                                i = e.attr("data-src"),
                                s = e.attr("data-srcset"),
                                o = e.attr("data-sizes");
                            T.loadImage(e[0], i || r, s, o, !1, function() {
                                if (r ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background")) : (s && (e.attr("srcset", s), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), n.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && a) {
                                    var t = n.attr("data-swiper-slide-index");
                                    if (n.hasClass(T.params.slideDuplicateClass)) {
                                        var l = T.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                        T.lazy.loadImageInSlide(l.index(), !1)
                                    } else {
                                        var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                        T.lazy.loadImageInSlide(p.index(), !1)
                                    }
                                }
                                T.emit("onLazyImageReady", T, n[0], e[0])
                            }), T.emit("onLazyImageLoad", T, n[0], e[0])
                        })
                    }
                },
                load: function() {
                    var e, a = T.params.slidesPerView;
                    if ("auto" === a && (a = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                        T.lazy.loadImageInSlide(t(this).index())
                    });
                    else if (a > 1)
                        for (e = T.activeIndex; e < T.activeIndex + a; e++) T.slides[e] && T.lazy.loadImageInSlide(e);
                    else T.lazy.loadImageInSlide(T.activeIndex);
                    if (T.params.lazyLoadingInPrevNext)
                        if (a > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                            var n = T.params.lazyLoadingInPrevNextAmount,
                                r = a,
                                i = Math.min(T.activeIndex + r + Math.max(n, r), T.slides.length),
                                s = Math.max(T.activeIndex - Math.max(r, n), 0);
                            for (e = T.activeIndex + a; e < i; e++) T.slides[e] && T.lazy.loadImageInSlide(e);
                            for (e = s; e < T.activeIndex; e++) T.slides[e] && T.lazy.loadImageInSlide(e)
                        } else {
                            var o = T.wrapper.children("." + T.params.slideNextClass);
                            o.length > 0 && T.lazy.loadImageInSlide(o.index());
                            var l = T.wrapper.children("." + T.params.slidePrevClass);
                            l.length > 0 && T.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                },
                onTransitionEnd: function() {
                    T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                }
            }, T.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = T.scrollbar,
                        a = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        n = a - t.track.offset()[T.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                        r = -T.minTranslate() * t.moveDivider,
                        i = -T.maxTranslate() * t.moveDivider;
                    n < r ? n = r : n > i && (n = i), n = -n / t.moveDivider, T.updateProgress(n), T.setWrapperTranslate(n, !0)
                },
                dragStart: function(e) {
                    var t = T.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), T.params.scrollbarHide && t.track.css("opacity", 1), T.wrapper.transition(100), t.drag.transition(100), T.emit("onScrollbarDragStart", T)
                },
                dragMove: function(e) {
                    var t = T.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), T.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), T.emit("onScrollbarDragMove", T))
                },
                dragEnd: function(e) {
                    var t = T.scrollbar;
                    t.isTouched && (t.isTouched = !1, T.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400)
                    }, 1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset())
                },
                draggableEvents: function() {
                    return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var e = T.scrollbar,
                        a = T.support.touch ? e.track : document;
                    t(e.track).on(e.draggableEvents.start, e.dragStart), t(a).on(e.draggableEvents.move, e.dragMove), t(a).on(e.draggableEvents.end, e.dragEnd)
                },
                disableDraggable: function() {
                    var e = T.scrollbar,
                        a = T.support.touch ? e.track : document;
                    t(e.track).off(T.draggableEvents.start, e.dragStart), t(a).off(T.draggableEvents.move, e.dragMove), t(a).off(T.draggableEvents.end, e.dragEnd)
                },
                set: function() {
                    if (T.params.scrollbar) {
                        var e = T.scrollbar;
                        e.track = t(T.params.scrollbar), T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && e.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (e.track = T.container.find(T.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = T.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = T.size / T.virtualSize, e.moveDivider = e.divider * (e.trackSize / T.size), e.dragSize = e.trackSize * e.divider, T.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", T.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (T.params.scrollbar) {
                        var e, t = T.scrollbar,
                            a = (T.translate || 0, t.dragSize);
                        e = (t.trackSize - t.dragSize) * T.progress, T.rtl && T.isHorizontal() ? (e = -e, e > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e)) : e < 0 ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), T.isHorizontal() ? (T.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (T.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"), T.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    T.params.scrollbar && T.scrollbar.drag.transition(e)
                }
            }, T.controller = {
                LinearSpline: function(e, t) {
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var a, n;
                    this.x.length, this.interpolate = function(e) {
                        return e ? (n = r(this.x, e), a = n - 1, (e - this.x[a]) * (this.y[n] - this.y[a]) / (this.x[n] - this.x[a]) + this.y[a]) : 0
                    };
                    var r = function() {
                        var e, t, a;
                        return function(n, r) {
                            for (t = -1, e = n.length; e - t > 1;) n[a = e + t >> 1] <= r ? t = a : e = a;
                            return e
                        }
                    }()
                },
                getInterpolateFunction: function(e) {
                    T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function n(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -T.translate : T.translate, "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(t), i = -T.controller.spline.interpolate(-e)), i && "container" !== T.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (T.maxTranslate() - T.minTranslate()), i = (e - T.minTranslate()) * r + t.minTranslate()), T.params.controlInverse && (i = t.maxTranslate() - i), t.updateProgress(i), t.setWrapperTranslate(i, !1, T), t.updateActiveIndex()
                    }
                    var r, i, s = T.params.control;
                    if (T.isArray(s))
                        for (var o = 0; o < s.length; o++) s[o] !== t && s[o] instanceof a && n(s[o]);
                    else s instanceof a && t !== s && n(s)
                },
                setTransition: function(e, t) {
                    function n(t) {
                        t.setWrapperTransition(e, T), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            i && (t.params.loop && "slide" === T.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                        }))
                    }
                    var r, i = T.params.control;
                    if (T.isArray(i))
                        for (r = 0; r < i.length; r++) i[r] !== t && i[r] instanceof a && n(i[r]);
                    else i instanceof a && t !== i && n(i)
                }
            }, T.hashnav = {
                onHashCange: function(e, t) {
                    var a = document.location.hash.replace("#", ""),
                        n = T.slides.eq(T.activeIndex).attr("data-hash");
                    a !== n && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + a + '"]').index())
                },
                attachEvents: function(e) {
                    var a = e ? "off" : "on";
                    t(window)[a]("hashchange", T.hashnav.onHashCange)
                },
                setHash: function() {
                    if (T.hashnav.initialized && T.params.hashnav)
                        if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                        else {
                            var e = T.slides.eq(T.activeIndex),
                                t = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    if (T.params.hashnav && !T.params.history) {
                        T.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) {
                            for (var t = 0, a = 0, n = T.slides.length; a < n; a++) {
                                var r = T.slides.eq(a),
                                    i = r.attr("data-hash") || r.attr("data-history");
                                if (i === e && !r.hasClass(T.params.slideDuplicateClass)) {
                                    var s = r.index();
                                    T.slideTo(s, t, T.params.runCallbacksOnInit, !0)
                                }
                            }
                            T.params.hashnavWatchState && T.hashnav.attachEvents()
                        }
                    }
                },
                destroy: function() {
                    T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                }
            }, T.history = {
                init: function() {
                    if (T.params.history) {
                        if (!window.history || !window.history.pushState) return T.params.history = !1, void(T.params.hashnav = !0);
                        T.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    T.history.paths = T.history.getPathValues(), T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"),
                        t = e.length,
                        a = e[t - 2],
                        n = e[t - 1];
                    return {
                        key: a,
                        value: n
                    }
                },
                setHistory: function(e, t) {
                    if (T.history.initialized && T.params.history) {
                        var a = T.slides.eq(t),
                            n = this.slugify(a.attr("data-history"));
                        window.location.pathname.includes(e) || (n = e + "/" + n), T.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, a) {
                    if (t)
                        for (var n = 0, r = T.slides.length; n < r; n++) {
                            var i = T.slides.eq(n),
                                s = this.slugify(i.attr("data-history"));
                            if (s === t && !i.hasClass(T.params.slideDuplicateClass)) {
                                var o = i.index();
                                T.slideTo(o, e, a)
                            }
                        } else T.slideTo(0, e, a)
                }
            }, T.disableKeyboardControl = function() {
                T.params.keyboardControl = !1, t(document).off("keydown", p)
            }, T.enableKeyboardControl = function() {
                T.params.keyboardControl = !0, t(document).on("keydown", p)
            }, T.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : u() ? "wheel" : "mousewheel"), T.disableMousewheelControl = function() {
                if (!T.mousewheel.event) return !1;
                var e = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (e = t(T.params.mousewheelEventsTarged)), e.off(T.mousewheel.event, d), !0
            }, T.enableMousewheelControl = function() {
                if (!T.mousewheel.event) return !1;
                var e = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (e = t(T.params.mousewheelEventsTarged)), e.on(T.mousewheel.event, d), !0
            }, T.parallax = {
                setTranslate: function() {
                    T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        f(this, T.progress)
                    }), T.slides.each(function() {
                        var e = t(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = Math.min(Math.max(e[0].progress, -1), 1);
                            f(this, t)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = T.params.speed), T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var a = t(this),
                            n = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0), a.transition(n)
                    })
                }
            }, T.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: T.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        a = e.targetTouches[0].pageY,
                        n = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY,
                        i = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - a, 2));
                    return i
                },
                onGestureStart: function(e) {
                    var a = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        a.gesture.scaleStart = a.getDistanceBetweenTouches(e)
                    }
                    return a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = t(this), 0 === a.gesture.slide.length && (a.gesture.slide = T.slides.eq(T.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + T.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== a.gesture.imageWrap.length) ? (a.gesture.image.transition(0), void(a.isScaling = !0)) : void(a.gesture.image = void 0)
                },
                onGestureChange: function(e) {
                    var t = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (T.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < T.params.zoomMin && (t.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = T.zoom;
                    !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), T.params.zoomMin), t.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(e, t) {
                    var a = e.zoom;
                    a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === e.device.os && t.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, a.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(e) {
                    var t = T.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (T.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = T.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = T.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0));
                        var a = t.image.width * t.scale,
                            n = t.image.height * t.scale;
                        if (!(a < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - a / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                if (T.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                if (!T.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var a = e.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length) {
                        if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void(a.image.isMoved = !1);
                        a.image.isTouched = !1, a.image.isMoved = !1;
                        var n = 300,
                            r = 300,
                            i = a.velocity.x * n,
                            s = a.image.currentX + i,
                            o = a.velocity.y * r,
                            l = a.image.currentY + o;
                        0 !== a.velocity.x && (n = Math.abs((s - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (r = Math.abs((l - a.image.currentY) / a.velocity.y));
                        var p = Math.max(n, r);
                        a.image.currentX = s, a.image.currentY = l;
                        var u = a.image.width * a.scale,
                            d = a.image.height * a.scale;
                        a.image.minX = Math.min(a.gesture.slideWidth / 2 - u / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - d / 2, 0), a.image.maxY = -a.image.minY, a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), a.gesture.imageWrap.transition(p).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                },
                toggleZoom: function(e, a) {
                    var n = e.zoom;
                    if (n.gesture.slide || (n.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + e.params.zoomContainerClass)), n.gesture.image && 0 !== n.gesture.image.length) {
                        var r, i, s, o, l, p, u, d, c, f, m, h, g, v, y, w, x, b;
                        "undefined" == typeof n.image.touchesStart.x && a ? (r = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, i = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (r = n.image.touchesStart.x, i = n.image.touchesStart.y), n.scale && 1 !== n.scale ? (n.scale = n.currentScale = 1, n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), n.gesture.slide = void 0) : (n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, a ? (x = n.gesture.slide[0].offsetWidth, b = n.gesture.slide[0].offsetHeight, s = n.gesture.slide.offset().left, o = n.gesture.slide.offset().top, l = s + x / 2 - r, p = o + b / 2 - i, c = n.gesture.image[0].offsetWidth, f = n.gesture.image[0].offsetHeight, m = c * n.scale, h = f * n.scale, g = Math.min(x / 2 - m / 2, 0), v = Math.min(b / 2 - h / 2, 0), y = -g, w = -v, u = l * n.scale, d = p * n.scale, u < g && (u = g), u > y && (u = y), d < v && (d = v), d > w && (d = w)) : (u = 0, d = 0), n.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + d + "px,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                    }
                },
                attachEvents: function(e) {
                    var a = e ? "off" : "on";
                    if (T.params.zoom) {
                        var n = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        T.support.gestures ? (T.slides[a]("gesturestart", T.zoom.onGestureStart, n), T.slides[a]("gesturechange", T.zoom.onGestureChange, n), T.slides[a]("gestureend", T.zoom.onGestureEnd, n)) : "touchstart" === T.touchEvents.start && (T.slides[a](T.touchEvents.start, T.zoom.onGestureStart, n), T.slides[a](T.touchEvents.move, T.zoom.onGestureChange, n), T.slides[a](T.touchEvents.end, T.zoom.onGestureEnd, n)), T[a]("touchStart", T.zoom.onTouchStart), T.slides.each(function(e, n) {
                            t(n).find("." + T.params.zoomContainerClass).length > 0 && t(n)[a](T.touchEvents.move, T.zoom.onTouchMove)
                        }), T[a]("touchEnd", T.zoom.onTouchEnd), T[a]("transitionEnd", T.zoom.onTransitionEnd), T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                    }
                },
                init: function() {
                    T.zoom.attachEvents()
                },
                destroy: function() {
                    T.zoom.attachEvents(!0)
                }
            }, T._plugins = [];
            for (var X in T.plugins) {
                var R = T.plugins[X](T, T.params[X]);
                R && T._plugins.push(R)
            }
            return T.callPlugins = function(e) {
                for (var t = 0; t < T._plugins.length; t++) e in T._plugins[t] && T._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, T.emitterEventListeners = {}, T.emit = function(e) {
                T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (T.emitterEventListeners[e])
                    for (t = 0; t < T.emitterEventListeners[e].length; t++) T.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, T.on = function(e, t) {
                return e = m(e), T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []), T.emitterEventListeners[e].push(t), T
            }, T.off = function(e, t) {
                var a;
                if (e = m(e), "undefined" == typeof t) return T.emitterEventListeners[e] = [], T;
                if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                    for (a = 0; a < T.emitterEventListeners[e].length; a++) T.emitterEventListeners[e][a] === t && T.emitterEventListeners[e].splice(a, 1);
                    return T
                }
            }, T.once = function(e, t) {
                e = m(e);
                var a = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), T.off(e, a)
                };
                return T.on(e, a), T
            }, T.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (t(e.target).is(T.params.nextButton) ? (T.onClickNext(e), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : t(e.target).is(T.params.prevButton) && (T.onClickPrev(e), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), t(e.target).is("." + T.params.bulletClass) && t(e.target)[0].click())
                },
                liveRegion: t('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = T.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function() {
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)), t(T.container).append(T.a11y.liveRegion)
                },
                initPagination: function() {
                    T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                        var e = t(this);
                        T.a11y.makeFocusable(e), T.a11y.addRole(e, "button"), T.a11y.addLabel(e, T.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                }
            }, T.init = function() {
                T.params.loop && T.createLoop(), T.updateContainerSize(), T.updateSlidesSize(), T.updatePagination(), T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()), "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()), T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))), T.attachEvents(), T.params.observer && T.support.observer && T.initObservers(), T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(), T.params.zoom && T.zoom && T.zoom.init(), T.params.autoplay && T.startAutoplay(), T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(), T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(), T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState), T.params.history && T.history && T.history.init(), T.params.hashnav && T.hashnav && T.hashnav.init(), T.params.a11y && T.a11y && T.a11y.init(), T.emit("onInit", T)
            }, T.cleanupStyles = function() {
                T.container.removeClass(T.classNames.join(" ")).removeAttr("style"), T.wrapper.removeAttr("style"), T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass), T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass), T.params.prevButton && t(T.params.prevButton).removeClass(T.params.buttonDisabledClass), T.params.nextButton && t(T.params.nextButton).removeClass(T.params.buttonDisabledClass), T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
            }, T.destroy = function(e, t) {
                T.detachEvents(), T.stopAutoplay(), T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(), T.params.loop && T.destroyLoop(), t && T.cleanupStyles(), T.disconnectObservers(), T.params.zoom && T.zoom && T.zoom.destroy(), T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(), T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(), T.params.a11y && T.a11y && T.a11y.destroy(), T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState), T.params.hashnav && T.hashnav && T.hashnav.destroy(), T.emit("onDestroy"), e !== !1 && (T = null)
            }, T.init(), T
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = e.match(/(iPad).*OS\s([\d_]+)/),
                n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !a && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: a || r || n,
                android: t
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++)
                    if (t[a] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var n = ["jQuery", "Zepto", "Dom7"], r = 0; r < n.length; r++) window[n[r]] && e(window[n[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
        function t(i) {
            if (i.target === this)
                for (e.call(this, i), a = 0; a < n.length; a++) r.off(n[a], t)
        }
        var a, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (a = 0; a < n.length; a++) r.on(n[a], t);
        return this
    }), "transform" in i.fn || (i.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
        }
        return this
    }), "outerWidth" in i.fn || (i.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = a
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}), $(function() {
    var e = $(".J_screen"),
        t = $("body,html"),
        a = $(".J_nav");
    $(document).on("click", ".J_hongbao", function() {
        return $(".J_dialog_rules").toggle(), !1
    }), $(".J_dialog_rules").on("click", ".J_close", function() {
        $(".J_dialog_rules").toggle()
    }), $(document).on("click", ".J_step", function() {
        return $(".J_dialog_step").toggle(), !1
    }), $(".J_dialog_step").on("click", ".J_close", function() {
        $(".J_dialog_step").toggle()
    }), $(document).on("click", ".J_bianjie", function() {
        return $(".J_dialog_tools").toggle(), !1
    }), $(".J_dialog_tools").on("click", ".J_close", function() {
        $(".J_dialog_tools").toggle()
    });
    var n = (new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            paginationClickable: !0
        }), function(e, t) {
            var a = null;
            return function() {
                var n = this,
                    r = arguments;
                clearTimeout(a), a = setTimeout(function() {
                    e.apply(n, r)
                }, t)
            }
        }),
        r = null;
    $(window).scroll(n(function() {
        var n = t.scrollTop();
        e.each(function(e) {
            var t = $(this).offset().top;
            t - n < 350 && t - n > 0 && (console.log("index", e), a.find(".J_item").eq(e).addClass("current").siblings().removeClass("current"))
        }), r = n
    }, 500)), a.on("click", ".J_item", function() {
        var n = a.children().index($(this)),
            r = e.eq(n).offset().top - 66;
        return $(this).addClass("current").siblings().removeClass("current"), t.animate({
            scrollTop: r
        }, 300), !1
    }), $(document).on("click", ".J_next_screen", function() {
        var e = $(this).closest(".J_screen"),
            a = e.next(".J_screen").offset().top - 66;
        t.animate({
            scrollTop: a
        }, 300)
    }), $(document).on("click", ".J_toTop", function() {
        t.animate({
            scrollTop: 0
        }, 300)
    }), $(document).on("click", ".J_toBottom", function() {
        var a = e.eq(-1).offset().top;
        t.animate({
            scrollTop: a
        }, 300)
    })
});