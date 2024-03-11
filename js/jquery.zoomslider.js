/*! jQuery UI - v1.12.1 - 2021-02-17
* http://jqueryui.com
* Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(b) {
    b.ui = b.ui || {};
    b.ui.version = "1.12.1";
    var l, u, a, d, t, h, p, g, s, m, r, o, f, c, y, e, i, n, v, x, w = "ui-effects-", C = "ui-effects-style", T = "ui-effects-animated", k = b;
    function W(t, e, i) {
        var n = g[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t),
        isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : t < 0 ? 0 : n.max < t ? n.max : t)
    }
    function q(n) {
        var o = h()
          , r = o._rgba = [];
        return n = n.toLowerCase(),
        m(t, function(t, e) {
            var i = e.re.exec(n)
              , i = i && e.parse(i)
              , e = e.space || "rgba";
            if (i)
                return i = o[e](i),
                o[p[e].cache] = i[p[e].cache],
                r = o._rgba = i._rgba,
                !1
        }),
        r.length ? ("0,0,0,0" === r.join() && l.extend(r, a.transparent),
        o) : a[n]
    }
    function B(t, e, i) {
        return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    function H(t) {
        var e, i, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, o = {};
        if (n && n.length && n[0] && n[n[0]])
            for (i = n.length; i--; )
                "string" == typeof n[e = n[i]] && (o[b.camelCase(e)] = n[e]);
        else
            for (e in n)
                "string" == typeof n[e] && (o[e] = n[e]);
        return o
    }
    function _(t, e, i, n) {
        return b.isPlainObject(t) && (t = (e = t).effect),
        t = {
            effect: t
        },
        null == e && (e = {}),
        b.isFunction(e) && (n = e,
        i = null,
        e = {}),
        "number" != typeof e && !b.fx.speeds[e] || (n = i,
        i = e,
        e = {}),
        b.isFunction(i) && (n = i,
        i = null),
        e && b.extend(t, e),
        i = i || e.duration,
        t.duration = b.fx.off ? 0 : "number" == typeof i ? i : i in b.fx.speeds ? b.fx.speeds[i] : b.fx.speeds._default,
        t.complete = n || e.complete,
        t
    }
    function M(t) {
        return !t || "number" == typeof t || b.fx.speeds[t] || ("string" == typeof t && !b.effects.effect[t] || (b.isFunction(t) || "object" == typeof t && !t.effect))
    }
    function S(t, e) {
        var i = e.outerWidth()
          , e = e.outerHeight()
          , t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, e, 0];
        return {
            top: parseFloat(t[1]) || 0,
            right: "auto" === t[2] ? i : parseFloat(t[2]),
            bottom: "auto" === t[3] ? e : parseFloat(t[3]),
            left: parseFloat(t[4]) || 0
        }
    }
    b.effects = {
        effect: {}
    },
    d = /^([\-+])=\s*(\d+\.?\d*)/,
    t = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }],
    h = (l = k).Color = function(t, e, i, n) {
        return new l.Color.fn.parse(t,e,i,n)
    }
    ,
    p = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    },
    g = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    },
    s = h.support = {},
    I = l("<p>")[0],
    m = l.each,
    I.style.cssText = "background-color:rgba(1,1,1,.5)",
    s.rgba = -1 < I.style.backgroundColor.indexOf("rgba"),
    m(p, function(t, e) {
        e.cache = "_" + t,
        e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }),
    h.fn = l.extend(h.prototype, {
        parse: function(o, t, e, i) {
            if (o === u)
                return this._rgba = [null, null, null, null],
                this;
            (o.jquery || o.nodeType) && (o = l(o).css(t),
            t = u);
            var r = this
              , n = l.type(o)
              , s = this._rgba = [];
            return t !== u && (o = [o, t, e, i],
            n = "array"),
            "string" === n ? this.parse(q(o) || a._default) : "array" === n ? (m(p.rgba.props, function(t, e) {
                s[e.idx] = W(o[e.idx], e)
            }),
            this) : "object" === n ? (m(p, o instanceof h ? function(t, e) {
                o[e.cache] && (r[e.cache] = o[e.cache].slice())
            }
            : function(t, i) {
                var n = i.cache;
                m(i.props, function(t, e) {
                    if (!r[n] && i.to) {
                        if ("alpha" === t || null == o[t])
                            return;
                        r[n] = i.to(r._rgba)
                    }
                    r[n][e.idx] = W(o[t], e, !0)
                }),
                r[n] && l.inArray(null, r[n].slice(0, 3)) < 0 && (r[n][3] = 1,
                i.from && (r._rgba = i.from(r[n])))
            }
            ),
            this) : void 0
        },
        is: function(t) {
            var o = h(t)
              , r = !0
              , s = this;
            return m(p, function(t, e) {
                var i, n = o[e.cache];
                return n && (i = s[e.cache] || e.to && e.to(s._rgba) || [],
                m(e.props, function(t, e) {
                    if (null != n[e.idx])
                        return r = n[e.idx] === i[e.idx]
                })),
                r
            }),
            r
        },
        _space: function() {
            var i = []
              , n = this;
            return m(p, function(t, e) {
                n[e.cache] && i.push(t)
            }),
            i.pop()
        },
        transition: function(t, s) {
            var e = (c = h(t))._space()
              , i = p[e]
              , t = 0 === this.alpha() ? h("transparent") : this
              , a = t[i.cache] || i.to(t._rgba)
              , f = a.slice()
              , c = c[i.cache];
            return m(i.props, function(t, e) {
                var i = e.idx
                  , n = a[i]
                  , o = c[i]
                  , r = g[e.type] || {};
                null !== o && (null === n ? f[i] = o : (r.mod && (r.mod / 2 < o - n ? n += r.mod : r.mod / 2 < n - o && (n -= r.mod)),
                f[i] = W((o - n) * s + n, e)))
            }),
            this[e](f)
        },
        blend: function(t) {
            if (1 === this._rgba[3])
                return this;
            var e = this._rgba.slice()
              , i = e.pop()
              , n = h(t)._rgba;
            return h(l.map(e, function(t, e) {
                return (1 - i) * n[e] + i * t
            }))
        },
        toRgbaString: function() {
            var t = "rgba("
              , e = l.map(this._rgba, function(t, e) {
                return null == t ? 2 < e ? 1 : 0 : t
            });
            return 1 === e[3] && (e.pop(),
            t = "rgb("),
            t + e.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla("
              , e = l.map(this.hsla(), function(t, e) {
                return null == t && (t = 2 < e ? 1 : 0),
                e && e < 3 && (t = Math.round(100 * t) + "%"),
                t
            });
            return 1 === e[3] && (e.pop(),
            t = "hsl("),
            t + e.join() + ")"
        },
        toHexString: function(t) {
            var e = this._rgba.slice()
              , i = e.pop();
            return t && e.push(~~(255 * i)),
            "#" + l.map(e, function(t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }),
    h.fn.parse.prototype = h.fn,
    p.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 255
          , i = t[1] / 255
          , n = t[2] / 255
          , o = t[3]
          , r = Math.max(e, i, n)
          , s = Math.min(e, i, n)
          , a = r - s
          , f = r + s
          , t = .5 * f
          , i = s === r ? 0 : e === r ? 60 * (i - n) / a + 360 : i === r ? 60 * (n - e) / a + 120 : 60 * (e - i) / a + 240
          , f = 0 == a ? 0 : t <= .5 ? a / f : a / (2 - f);
        return [Math.round(i) % 360, f, t, null == o ? 1 : o]
    }
    ,
    p.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 360
          , i = t[1]
          , n = t[2]
          , t = t[3]
          , i = n <= .5 ? n * (1 + i) : n + i - n * i
          , n = 2 * n - i;
        return [Math.round(255 * B(n, i, e + 1 / 3)), Math.round(255 * B(n, i, e)), Math.round(255 * B(n, i, e - 1 / 3)), t]
    }
    ,
    m(p, function(f, t) {
        var r = t.props
          , s = t.cache
          , a = t.to
          , c = t.from;
        h.fn[f] = function(t) {
            if (a && !this[s] && (this[s] = a(this._rgba)),
            t === u)
                return this[s].slice();
            var e, i = l.type(t), n = "array" === i || "object" === i ? t : arguments, o = this[s].slice();
            return m(r, function(t, e) {
                t = n["object" === i ? t : e.idx];
                null == t && (t = o[e.idx]),
                o[e.idx] = W(t, e)
            }),
            c ? ((e = h(c(o)))[s] = o,
            e) : h(o)
        }
        ,
        m(r, function(s, a) {
            h.fn[s] || (h.fn[s] = function(t) {
                var e, i = l.type(t), n = "alpha" === s ? this._hsla ? "hsla" : "rgba" : f, o = this[n](), r = o[a.idx];
                return "undefined" === i ? r : ("function" === i && (t = t.call(this, r),
                i = l.type(t)),
                null == t && a.empty ? this : ("string" === i && (e = d.exec(t)) && (t = r + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                o[a.idx] = t,
                this[n](o)))
            }
            )
        })
    }),
    h.hook = function(t) {
        t = t.split(" ");
        m(t, function(t, r) {
            l.cssHooks[r] = {
                set: function(t, e) {
                    var i, n, o = "";
                    if ("transparent" !== e && ("string" !== l.type(e) || (i = q(e)))) {
                        if (e = h(i || e),
                        !s.rgba && 1 !== e._rgba[3]) {
                            for (n = "backgroundColor" === r ? t.parentNode : t; ("" === o || "transparent" === o) && n && n.style; )
                                try {
                                    o = l.css(n, "backgroundColor"),
                                    n = n.parentNode
                                } catch (t) {}
                            e = e.blend(o && "transparent" !== o ? o : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[r] = e
                    } catch (t) {}
                }
            },
            l.fx.step[r] = function(t) {
                t.colorInit || (t.start = h(t.elem, r),
                t.end = h(t.end),
                t.colorInit = !0),
                l.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }
    ,
    h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
    l.cssHooks.borderColor = {
        expand: function(i) {
            var n = {};
            return m(["Top", "Right", "Bottom", "Left"], function(t, e) {
                n["border" + e + "Color"] = i
            }),
            n
        }
    },
    a = l.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    },
    c = ["add", "remove", "toggle"],
    y = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    },
    b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
        b.fx.step[e] = function(t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (k.style(t.elem, e, t.end),
            t.setAttr = !0)
        }
    }),
    b.fn.addBack || (b.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    b.effects.animateClass = function(o, t, e, i) {
        var r = b.speed(t, e, i);
        return this.queue(function() {
            var i = b(this)
              , t = i.attr("class") || ""
              , e = (e = r.children ? i.find("*").addBack() : i).map(function() {
                return {
                    el: b(this),
                    start: H(this)
                }
            })
              , n = function() {
                b.each(c, function(t, e) {
                    o[e] && i[e + "Class"](o[e])
                })
            };
            n(),
            e = e.map(function() {
                return this.end = H(this.el[0]),
                this.diff = function(t, e) {
                    var i, n, o = {};
                    for (i in e)
                        n = e[i],
                        t[i] !== n && (y[i] || !b.fx.step[i] && isNaN(parseFloat(n)) || (o[i] = n));
                    return o
                }(this.start, this.end),
                this
            }),
            i.attr("class", t),
            e = e.map(function() {
                var t = this
                  , e = b.Deferred()
                  , i = b.extend({}, r, {
                    queue: !1,
                    complete: function() {
                        e.resolve(t)
                    }
                });
                return this.el.animate(this.diff, i),
                e.promise()
            }),
            b.when.apply(b, e.get()).done(function() {
                n(),
                b.each(arguments, function() {
                    var e = this.el;
                    b.each(this.diff, function(t) {
                        e.css(t, "")
                    })
                }),
                r.complete.call(i[0])
            })
        })
    }
    ,
    b.fn.extend({
        addClass: (f = b.fn.addClass,
        function(t, e, i, n) {
            return e ? b.effects.animateClass.call(this, {
                add: t
            }, e, i, n) : f.apply(this, arguments)
        }
        ),
        removeClass: (o = b.fn.removeClass,
        function(t, e, i, n) {
            return 1 < arguments.length ? b.effects.animateClass.call(this, {
                remove: t
            }, e, i, n) : o.apply(this, arguments)
        }
        ),
        toggleClass: (r = b.fn.toggleClass,
        function(t, e, i, n, o) {
            return "boolean" == typeof e || void 0 === e ? i ? b.effects.animateClass.call(this, e ? {
                add: t
            } : {
                remove: t
            }, i, n, o) : r.apply(this, arguments) : b.effects.animateClass.call(this, {
                toggle: t
            }, e, i, n)
        }
        ),
        switchClass: function(t, e, i, n, o) {
            return b.effects.animateClass.call(this, {
                add: e,
                remove: t
            }, i, n, o)
        }
    }),
    b.expr && b.expr.filters && b.expr.filters.animated && (b.expr.filters.animated = (e = b.expr.filters.animated,
    function(t) {
        return !!b(t).data(T) || e(t)
    }
    )),
    !1 !== b.uiBackCompat && b.extend(b.effects, {
        save: function(t, e) {
            for (var i = 0, n = e.length; i < n; i++)
                null !== e[i] && t.data(w + e[i], t[0].style[e[i]])
        },
        restore: function(t, e) {
            for (var i, n = 0, o = e.length; n < o; n++)
                null !== e[n] && (i = t.data(w + e[n]),
                t.css(e[n], i))
        },
        setMode: function(t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
            e
        },
        createWrapper: function(i) {
            if (i.parent().is(".ui-effects-wrapper"))
                return i.parent();
            var n = {
                width: i.outerWidth(!0),
                height: i.outerHeight(!0),
                float: i.css("float")
            }
              , t = b("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , e = {
                width: i.width(),
                height: i.height()
            }
              , o = document.activeElement;
            try {
                o.id
            } catch (t) {
                o = document.body
            }
            return i.wrap(t),
            i[0] !== o && !b.contains(i[0], o) || b(o).trigger("focus"),
            t = i.parent(),
            "static" === i.css("position") ? (t.css({
                position: "relative"
            }),
            i.css({
                position: "relative"
            })) : (b.extend(n, {
                position: i.css("position"),
                zIndex: i.css("z-index")
            }),
            b.each(["top", "left", "bottom", "right"], function(t, e) {
                n[e] = i.css(e),
                isNaN(parseInt(n[e], 10)) && (n[e] = "auto")
            }),
            i.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })),
            i.css(e),
            t.css(n).show()
        },
        removeWrapper: function(t) {
            var e = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
            t[0] !== e && !b.contains(t[0], e) || b(e).trigger("focus")),
            t
        }
    }),
    b.extend(b.effects, {
        version: "1.12.1",
        define: function(t, e, i) {
            return i || (i = e,
            e = "effect"),
            b.effects.effect[t] = i,
            b.effects.effect[t].mode = e,
            i
        },
        scaledDimensions: function(t, e, i) {
            if (0 === e)
                return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            var n = "horizontal" !== i ? (e || 100) / 100 : 1
              , e = "vertical" !== i ? (e || 100) / 100 : 1;
            return {
                height: t.height() * e,
                width: t.width() * n,
                outerHeight: t.outerHeight() * e,
                outerWidth: t.outerWidth() * n
            }
        },
        clipToBox: function(t) {
            return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top
            }
        },
        unshift: function(t, e, i) {
            var n = t.queue();
            1 < e && n.splice.apply(n, [1, 0].concat(n.splice(e, i))),
            t.dequeue()
        },
        saveStyle: function(t) {
            t.data(C, t[0].style.cssText)
        },
        restoreStyle: function(t) {
            t[0].style.cssText = t.data(C) || "",
            t.removeData(C)
        },
        mode: function(t, e) {
            t = t.is(":hidden");
            return "toggle" === e && (e = t ? "show" : "hide"),
            (t ? "hide" === e : "show" === e) && (e = "none"),
            e
        },
        getBaseline: function(t, e) {
            var i, n;
            switch (t[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = t[0] / e.height
            }
            switch (t[1]) {
            case "left":
                n = 0;
                break;
            case "center":
                n = .5;
                break;
            case "right":
                n = 1;
                break;
            default:
                n = t[1] / e.width
            }
            return {
                x: n,
                y: i
            }
        },
        createPlaceholder: function(t) {
            var e, i = t.css("position"), n = t.position();
            return t.css({
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
            /^(static|relative)/.test(i) && (i = "absolute",
            e = b("<" + t[0].nodeName + ">").insertAfter(t).css({
                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
            t.data(w + "placeholder", e)),
            t.css({
                position: i,
                left: n.left,
                top: n.top
            }),
            e
        },
        removePlaceholder: function(t) {
            var e = w + "placeholder"
              , i = t.data(e);
            i && (i.remove(),
            t.removeData(e))
        },
        cleanUp: function(t) {
            b.effects.restoreStyle(t),
            b.effects.removePlaceholder(t)
        },
        setTransition: function(n, t, o, r) {
            return r = r || {},
            b.each(t, function(t, e) {
                var i = n.cssUnit(e);
                0 < i[0] && (r[e] = i[0] * o + i[1])
            }),
            r
        }
    }),
    b.fn.extend({
        effect: function() {
            function t(t) {
                var e = b(this)
                  , i = b.effects.mode(e, a) || r;
                e.data(T, !0),
                f.push(i),
                r && ("show" === i || i === r && "hide" === i) && e.show(),
                r && "none" === i || b.effects.saveStyle(e),
                b.isFunction(t) && t()
            }
            var n = _.apply(this, arguments)
              , o = b.effects.effect[n.effect]
              , r = o.mode
              , e = n.queue
              , i = e || "fx"
              , s = n.complete
              , a = n.mode
              , f = [];
            return b.fx.off || !o ? a ? this[a](n.duration, s) : this.each(function() {
                s && s.call(this)
            }) : !1 === e ? this.each(t).each(c) : this.queue(i, t).queue(i, c);
            function c(t) {
                var e = b(this);
                function i() {
                    b.isFunction(s) && s.call(e[0]),
                    b.isFunction(t) && t()
                }
                n.mode = f.shift(),
                !1 === b.uiBackCompat || r ? "none" === n.mode ? (e[a](),
                i()) : o.call(e[0], n, function() {
                    e.removeData(T),
                    b.effects.cleanUp(e),
                    "hide" === n.mode && e.hide(),
                    i()
                }) : (e.is(":hidden") ? "hide" === a : "show" === a) ? (e[a](),
                i()) : o.call(e[0], n, i)
            }
        },
        show: (v = b.fn.show,
        function(t) {
            if (M(t))
                return v.apply(this, arguments);
            var e = _.apply(this, arguments);
            return e.mode = "show",
            this.effect.call(this, e)
        }
        ),
        hide: (n = b.fn.hide,
        function(t) {
            if (M(t))
                return n.apply(this, arguments);
            var e = _.apply(this, arguments);
            return e.mode = "hide",
            this.effect.call(this, e)
        }
        ),
        toggle: (i = b.fn.toggle,
        function(t) {
            if (M(t) || "boolean" == typeof t)
                return i.apply(this, arguments);
            var e = _.apply(this, arguments);
            return e.mode = "toggle",
            this.effect.call(this, e)
        }
        ),
        cssUnit: function(t) {
            var i = this.css(t)
              , n = [];
            return b.each(["em", "px", "%", "pt"], function(t, e) {
                0 < i.indexOf(e) && (n = [parseFloat(i), e])
            }),
            n
        },
        cssClip: function(t) {
            return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : S(this.css("clip"), this)
        },
        transfer: function(t, e) {
            var i = b(this)
              , n = b(t.to)
              , o = "fixed" === n.css("position")
              , r = b("body")
              , s = o ? r.scrollTop() : 0
              , a = o ? r.scrollLeft() : 0
              , r = n.offset()
              , r = {
                top: r.top - s,
                left: r.left - a,
                height: n.innerHeight(),
                width: n.innerWidth()
            }
              , n = i.offset()
              , f = b("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                top: n.top - s,
                left: n.left - a,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(r, t.duration, t.easing, function() {
                f.remove(),
                b.isFunction(e) && e()
            })
        }
    }),
    b.fx.step.clip = function(t) {
        t.clipInit || (t.start = b(t.elem).cssClip(),
        "string" == typeof t.end && (t.end = S(t.end, t.elem)),
        t.clipInit = !0),
        b(t.elem).cssClip({
            top: t.pos * (t.end.top - t.start.top) + t.start.top,
            right: t.pos * (t.end.right - t.start.right) + t.start.right,
            bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
            left: t.pos * (t.end.left - t.start.left) + t.start.left
        })
    }
    ,
    x = {},
    b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
        x[t] = function(t) {
            return Math.pow(t, e + 2)
        }
    }),
    b.extend(x, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }),
    b.each(x, function(t, e) {
        b.easing["easeIn" + t] = e,
        b.easing["easeOut" + t] = function(t) {
            return 1 - e(1 - t)
        }
        ,
        b.easing["easeInOut" + t] = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    var I = b.effects;
    b.effects.define("blind", "hide", function(t, e) {
        var i = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , n = b(this)
          , o = t.direction || "up"
          , r = n.cssClip()
          , s = {
            clip: b.extend({}, r)
        }
          , a = b.effects.createPlaceholder(n);
        s.clip[i[o][0]] = s.clip[i[o][1]],
        "show" === t.mode && (n.cssClip(s.clip),
        a && a.css(b.effects.clipToBox(s)),
        s.clip = r),
        a && a.animate(b.effects.clipToBox(s), t.duration, t.easing),
        n.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    b.effects.define("bounce", function(t, e) {
        var i, n, o = b(this), r = t.mode, s = "hide" === r, a = "show" === r, f = t.direction || "up", c = t.distance, l = t.times || 5, r = 2 * l + (a || s ? 1 : 0), u = t.duration / r, d = t.easing, h = "up" === f || "down" === f ? "top" : "left", p = "up" === f || "left" === f, g = 0, t = o.queue().length;
        for (b.effects.createPlaceholder(o),
        f = o.css(h),
        c = c || o["top" == h ? "outerHeight" : "outerWidth"]() / 3,
        a && ((n = {
            opacity: 1
        })[h] = f,
        o.css("opacity", 0).css(h, p ? 2 * -c : 2 * c).animate(n, u, d)),
        s && (c /= Math.pow(2, l - 1)),
        (n = {})[h] = f; g < l; g++)
            (i = {})[h] = (p ? "-=" : "+=") + c,
            o.animate(i, u, d).animate(n, u, d),
            c = s ? 2 * c : c / 2;
        s && ((i = {
            opacity: 0
        })[h] = (p ? "-=" : "+=") + c,
        o.animate(i, u, d)),
        o.queue(e),
        b.effects.unshift(o, t, 1 + r)
    }),
    b.effects.define("clip", "hide", function(t, e) {
        var i = {}
          , n = b(this)
          , o = t.direction || "vertical"
          , r = "both" === o
          , s = r || "horizontal" === o
          , r = r || "vertical" === o
          , o = n.cssClip();
        i.clip = {
            top: r ? (o.bottom - o.top) / 2 : o.top,
            right: s ? (o.right - o.left) / 2 : o.right,
            bottom: r ? (o.bottom - o.top) / 2 : o.bottom,
            left: s ? (o.right - o.left) / 2 : o.left
        },
        b.effects.createPlaceholder(n),
        "show" === t.mode && (n.cssClip(i.clip),
        i.clip = o),
        n.animate(i, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    b.effects.define("drop", "hide", function(t, e) {
        var i = b(this)
          , n = "show" === t.mode
          , o = t.direction || "left"
          , r = "up" === o || "down" === o ? "top" : "left"
          , s = "up" === o || "left" === o ? "-=" : "+="
          , a = "+=" == s ? "-=" : "+="
          , f = {
            opacity: 0
        };
        b.effects.createPlaceholder(i),
        o = t.distance || i["top" == r ? "outerHeight" : "outerWidth"](!0) / 2,
        f[r] = s + o,
        n && (i.css(f),
        f[r] = a + o,
        f.opacity = 1),
        i.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    b.effects.define("explode", "hide", function(t, e) {
        var i, n, o, r, s, a, f = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = f, l = b(this), u = "show" === t.mode, d = l.show().css("visibility", "hidden").offset(), h = Math.ceil(l.outerWidth() / c), p = Math.ceil(l.outerHeight() / f), g = [];
        function m() {
            g.push(this),
            g.length === f * c && (l.css({
                visibility: "visible"
            }),
            b(g).remove(),
            e())
        }
        for (i = 0; i < f; i++)
            for (r = d.top + i * p,
            a = i - (f - 1) / 2,
            n = 0; n < c; n++)
                o = d.left + n * h,
                s = n - (c - 1) / 2,
                l.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -n * h,
                    top: -i * p
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: h,
                    height: p,
                    left: o + (u ? s * h : 0),
                    top: r + (u ? a * p : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: o + (u ? 0 : s * h),
                    top: r + (u ? 0 : a * p),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, m)
    }),
    b.effects.define("fade", "toggle", function(t, e) {
        var i = "show" === t.mode;
        b(this).css("opacity", i ? 0 : 1).animate({
            opacity: i ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    b.effects.define("fold", "hide", function(e, t) {
        var i = b(this)
          , n = e.mode
          , o = "show" === n
          , r = "hide" === n
          , s = e.size || 15
          , a = /([0-9]+)%/.exec(s)
          , f = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"]
          , c = e.duration / 2
          , l = b.effects.createPlaceholder(i)
          , u = i.cssClip()
          , d = {
            clip: b.extend({}, u)
        }
          , h = {
            clip: b.extend({}, u)
        }
          , p = [u[f[0]], u[f[1]]]
          , n = i.queue().length;
        a && (s = parseInt(a[1], 10) / 100 * p[r ? 0 : 1]),
        d.clip[f[0]] = s,
        h.clip[f[0]] = s,
        h.clip[f[1]] = 0,
        o && (i.cssClip(h.clip),
        l && l.css(b.effects.clipToBox(h)),
        h.clip = u),
        i.queue(function(t) {
            l && l.animate(b.effects.clipToBox(d), c, e.easing).animate(b.effects.clipToBox(h), c, e.easing),
            t()
        }).animate(d, c, e.easing).animate(h, c, e.easing).queue(t),
        b.effects.unshift(i, n, 4)
    }),
    b.effects.define("highlight", "show", function(t, e) {
        var i = b(this)
          , n = {
            backgroundColor: i.css("backgroundColor")
        };
        "hide" === t.mode && (n.opacity = 0),
        b.effects.saveStyle(i),
        i.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(n, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    b.effects.define("size", function(n, e) {
        var o, i = b(this), t = ["fontSize"], r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], s = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], a = n.mode, f = "effect" !== a, c = n.scale || "both", l = n.origin || ["middle", "center"], u = i.css("position"), d = i.position(), h = b.effects.scaledDimensions(i), p = n.from || h, g = n.to || b.effects.scaledDimensions(i, 0);
        b.effects.createPlaceholder(i),
        "show" === a && (a = p,
        p = g,
        g = a),
        o = {
            from: {
                y: p.height / h.height,
                x: p.width / h.width
            },
            to: {
                y: g.height / h.height,
                x: g.width / h.width
            }
        },
        "box" !== c && "both" !== c || (o.from.y !== o.to.y && (p = b.effects.setTransition(i, r, o.from.y, p),
        g = b.effects.setTransition(i, r, o.to.y, g)),
        o.from.x !== o.to.x && (p = b.effects.setTransition(i, s, o.from.x, p),
        g = b.effects.setTransition(i, s, o.to.x, g))),
        "content" !== c && "both" !== c || o.from.y !== o.to.y && (p = b.effects.setTransition(i, t, o.from.y, p),
        g = b.effects.setTransition(i, t, o.to.y, g)),
        l && (l = b.effects.getBaseline(l, h),
        p.top = (h.outerHeight - p.outerHeight) * l.y + d.top,
        p.left = (h.outerWidth - p.outerWidth) * l.x + d.left,
        g.top = (h.outerHeight - g.outerHeight) * l.y + d.top,
        g.left = (h.outerWidth - g.outerWidth) * l.x + d.left),
        i.css(p),
        "content" !== c && "both" !== c || (r = r.concat(["marginTop", "marginBottom"]).concat(t),
        s = s.concat(["marginLeft", "marginRight"]),
        i.find("*[width]").each(function() {
            var t = b(this)
              , e = b.effects.scaledDimensions(t)
              , i = {
                height: e.height * o.from.y,
                width: e.width * o.from.x,
                outerHeight: e.outerHeight * o.from.y,
                outerWidth: e.outerWidth * o.from.x
            }
              , e = {
                height: e.height * o.to.y,
                width: e.width * o.to.x,
                outerHeight: e.height * o.to.y,
                outerWidth: e.width * o.to.x
            };
            o.from.y !== o.to.y && (i = b.effects.setTransition(t, r, o.from.y, i),
            e = b.effects.setTransition(t, r, o.to.y, e)),
            o.from.x !== o.to.x && (i = b.effects.setTransition(t, s, o.from.x, i),
            e = b.effects.setTransition(t, s, o.to.x, e)),
            f && b.effects.saveStyle(t),
            t.css(i),
            t.animate(e, n.duration, n.easing, function() {
                f && b.effects.restoreStyle(t)
            })
        })),
        i.animate(g, {
            queue: !1,
            duration: n.duration,
            easing: n.easing,
            complete: function() {
                var t = i.offset();
                0 === g.opacity && i.css("opacity", p.opacity),
                f || (i.css("position", "static" === u ? "relative" : u).offset(t),
                b.effects.saveStyle(i)),
                e()
            }
        })
    }),
    b.effects.define("scale", function(t, e) {
        var i = b(this)
          , n = t.mode
          , n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== n ? 0 : 100)
          , n = b.extend(!0, {
            from: b.effects.scaledDimensions(i),
            to: b.effects.scaledDimensions(i, n, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
        }, t);
        t.fade && (n.from.opacity = 1,
        n.to.opacity = 0),
        b.effects.effect.size.call(this, n, e)
    }),
    b.effects.define("puff", "hide", function(t, e) {
        t = b.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        b.effects.effect.scale.call(this, t, e)
    }),
    b.effects.define("pulsate", "show", function(t, e) {
        var i = b(this)
          , n = t.mode
          , o = "show" === n
          , n = o || "hide" === n
          , r = 2 * (t.times || 5) + (n ? 1 : 0)
          , s = t.duration / r
          , a = 0
          , f = 1
          , n = i.queue().length;
        for (!o && i.is(":visible") || (i.css("opacity", 0).show(),
        a = 1); f < r; f++)
            i.animate({
                opacity: a
            }, s, t.easing),
            a = 1 - a;
        i.animate({
            opacity: a
        }, s, t.easing),
        i.queue(e),
        b.effects.unshift(i, n, 1 + r)
    }),
    b.effects.define("shake", function(t, e) {
        var i = 1
          , n = b(this)
          , o = t.direction || "left"
          , r = t.distance || 20
          , s = t.times || 3
          , a = 2 * s + 1
          , f = Math.round(t.duration / a)
          , c = "up" === o || "down" === o ? "top" : "left"
          , l = "up" === o || "left" === o
          , u = {}
          , d = {}
          , h = {}
          , o = n.queue().length;
        for (b.effects.createPlaceholder(n),
        u[c] = (l ? "-=" : "+=") + r,
        d[c] = (l ? "+=" : "-=") + 2 * r,
        h[c] = (l ? "-=" : "+=") + 2 * r,
        n.animate(u, f, t.easing); i < s; i++)
            n.animate(d, f, t.easing).animate(h, f, t.easing);
        n.animate(d, f, t.easing).animate(u, f / 2, t.easing).queue(e),
        b.effects.unshift(n, o, 1 + a)
    }),
    b.effects.define("slide", "show", function(t, e) {
        var i, n, o = b(this), r = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, s = t.mode, a = t.direction || "left", f = "up" === a || "down" === a ? "top" : "left", c = "up" === a || "left" === a, l = t.distance || o["top" == f ? "outerHeight" : "outerWidth"](!0), u = {};
        b.effects.createPlaceholder(o),
        i = o.cssClip(),
        n = o.position()[f],
        u[f] = (c ? -1 : 1) * l + n,
        u.clip = o.cssClip(),
        u.clip[r[a][1]] = u.clip[r[a][0]],
        "show" === s && (o.cssClip(u.clip),
        o.css(f, u[f]),
        u.clip = i,
        u[f] = n),
        o.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    });
    !1 !== b.uiBackCompat && (I = b.effects.define("transfer", function(t, e) {
        b(this).transfer(t, e)
    }))
});
