//started with DUP of https://widgets.thereviewsplace.com/2.0/rw-widget-floating.js
console.log("AN EDIT of https://widgets.thereviewsplace.com/2.0/rw-widget-floating.js");

let t, i, e = !1,
    s = !1;
const o = "undefined" != typeof window ? window : {},
    n = o.document || {
        head: {}
    },
    r = {
        t: 0,
        i: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, i, e, s) => t.addEventListener(i, e, s),
        rel: (t, i, e, s) => t.removeEventListener(i, e, s),
        ce: (t, i) => new CustomEvent(t, i)
    },
    l = (() => {
        try {
            return new CSSStyleSheet, !0
        } catch (t) {}
        return !1
    })(),
    a = (t, i, e) => {
        e && e.map(([e, s, o]) => {
            const n = h(t, e),
                l = c(i, o),
                a = d(e);
            r.ael(n, s, l, a), (i.s = i.s || []).push(() => r.rel(n, s, l, a))
        })
    },
    c = (t, i) => e => {
        t.o[i](e)
    },
    h = (t, i) => 4 & i ? n : t,
    d = t => 0 != (2 & t),
    p = new WeakMap,
    u = t => "sc-" + t.l,
    f = {},
    x = t => "object" == (t = typeof t) || "function" === t,
    m = (t, i, ...e) => {
        let s = null,
            o = !1,
            n = !1,
            r = [];
        const l = i => {
            for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? l(s) : null != s && "boolean" != typeof s && ((o = "function" != typeof t && !x(s)) && (s += ""), o && n ? r[r.length - 1].p += s : r.push(o ? g(null, s) : s), n = o)
        };
        if (l(e), i) {
            const t = i.className || i.class;
            t && (i.class = "object" != typeof t ? t : Object.keys(t).filter(i => t[i]).join(" "))
        }
        if ("function" == typeof t) return t(null === i ? {} : i, r, w);
        const a = g(t, null);
        return a.u = i, r.length > 0 && (a.g = r), a
    },
    g = (t, i) => ({
        t: 0,
        v: t,
        p: i,
        k: null,
        g: null,
        u: null
    }),
    b = {},
    w = {
        forEach: (t, i) => t.map(v).forEach(i),
        map: (t, i) => t.map(v).map(i).map(y)
    },
    v = t => ({
        vattrs: t.u,
        vchildren: t.g,
        vkey: t.C,
        vname: t.F,
        vtag: t.v,
        vtext: t.p
    }),
    y = t => {
        if ("function" == typeof t.vtag) {
            const i = Object.assign({}, t.vattrs);
            return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), m(t.vtag, i, ...t.vchildren || [])
        }
        const i = g(t.vtag, t.vtext);
        return i.u = t.vattrs, i.g = t.vchildren, i.C = t.vkey, i.F = t.vname, i
    },
    k = (t, i, e, s, n, l) => {
        if (e !== s) {
            let a = Q(t, i),
                c = i.toLowerCase();
            if ("class" === i) {
                const i = t.classList,
                    o = z(e),
                    n = z(s);
                i.remove(...o.filter(t => t && !n.includes(t))), i.add(...n.filter(t => t && !o.includes(t)))
            } else if ("style" === i) {
                for (const i in e) s && null != s[i] || (i.includes("-") ? t.style.removeProperty(i) : t.style[i] = "");
                for (const i in s) e && s[i] === e[i] || (i.includes("-") ? t.style.setProperty(i, s[i]) : t.style[i] = s[i])
            } else if ("ref" === i) s && s(t);
            else if (t.__lookupSetter__(i) || "o" !== i[0] || "n" !== i[1]) {
                const o = x(s);
                if ((a || o && null !== s) && !n) try {
                    if (t.tagName.includes("-")) t[i] = s;
                    else {
                        let o = null == s ? "" : s;
                        "list" === i ? a = !1 : null != e && t[i] == o || (t[i] = o)
                    }
                } catch (t) {}
                null == s || !1 === s ? !1 === s && "" !== t.getAttribute(i) || t.removeAttribute(i) : (!a || 4 & l || n) && !o && t.setAttribute(i, s = !0 === s ? "" : s)
            } else i = "-" === i[2] ? i.slice(3) : Q(o, c) ? c.slice(2) : c[2] + i.slice(3), e && r.rel(t, i, e, !1), s && r.ael(t, i, s, !1)
        }
    },
    C = /\s/,
    z = t => t ? t.split(C) : [],
    F = (t, i, e, s) => {
        const o = 11 === i.k.nodeType && i.k.host ? i.k.host : i.k,
            n = t && t.u || f,
            r = i.u || f;
        for (s in n) s in r || k(o, s, n[s], void 0, e, i.t);
        for (s in r) k(o, s, n[s], r[s], e, i.t)
    },
    $ = (i, s, o) => {
        let r, l, a = s.g[o],
            c = 0;
        if (null !== a.p) r = a.k = n.createTextNode(a.p);
        else {
            if (e || (e = "svg" === a.v), r = a.k = n.createElementNS(e ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a.v), e && "foreignObject" === a.v && (e = !1), F(null, a, e), null != t && r["s-si"] !== t && r.classList.add(r["s-si"] = t), a.g)
                for (c = 0; c < a.g.length; ++c) l = $(i, a, c), l && r.appendChild(l);
            "svg" === a.v ? e = !1 : "foreignObject" === r.tagName && (e = !0)
        }
        return r
    },
    M = (t, e, s, o, n, r) => {
        let l, a = t;
        for (a.shadowRoot && a.tagName === i && (a = a.shadowRoot); n <= r; ++n) o[n] && (l = $(null, s, n), l && (o[n].k = l, a.insertBefore(l, e)))
    },
    E = (t, i, e, s, o) => {
        for (; i <= e; ++i)(s = t[i]) && (o = s.k, _(s), o.remove())
    },
    j = (t, i) => t.v === i.v,
    P = (t, i) => {
        const s = i.k = t.k,
            o = t.g,
            n = i.g,
            r = i.v,
            l = i.p;
        null === l ? (e = "svg" === r || "foreignObject" !== r && e, F(t, i, e), null !== o && null !== n ? ((t, i, e, s) => {
            let o, n = 0,
                r = 0,
                l = i.length - 1,
                a = i[0],
                c = i[l],
                h = s.length - 1,
                d = s[0],
                p = s[h];
            for (; n <= l && r <= h;) null == a ? a = i[++n] : null == c ? c = i[--l] : null == d ? d = s[++r] : null == p ? p = s[--h] : j(a, d) ? (P(a, d), a = i[++n], d = s[++r]) : j(c, p) ? (P(c, p), c = i[--l], p = s[--h]) : j(a, p) ? (P(a, p), t.insertBefore(a.k, c.k.nextSibling), a = i[++n], p = s[--h]) : j(c, d) ? (P(c, d), t.insertBefore(c.k, a.k), c = i[--l], d = s[++r]) : (o = $(i && i[r], e, r), d = s[++r], o && a.k.parentNode.insertBefore(o, a.k));
            n > l ? M(t, null == s[h + 1] ? null : s[h + 1].k, e, s, r, h) : r > h && E(i, n, l)
        })(s, o, i, n) : null !== n ? (null !== t.p && (s.textContent = ""), M(s, null, i, n, 0, n.length - 1)) : null !== o && E(o, 0, o.length - 1), e && "svg" === r && (e = !1)) : t.p !== l && (s.data = l)
    },
    _ = t => {
        t.u && t.u.ref && t.u.ref(null), t.g && t.g.map(_)
    },
    X = (t, i, e) => {
        const s = t;
        return {
            emit: t => B(s, i, {
                bubbles: !!(4 & e),
                composed: !!(2 & e),
                cancelable: !!(1 & e),
                detail: t
            })
        }
    },
    B = (t, i, e) => {
        const s = r.ce(i, e);
        return t.dispatchEvent(s), s
    },
    D = (t, i) => {
        i && !t.$ && i["s-p"] && i["s-p"].push(new Promise(i => t.$ = i))
    },
    O = (t, i) => {
        if (t.t |= 16, !(4 & t.t)) return D(t, t.M), rt(() => L(t, i));
        t.t |= 512
    },
    L = (t, i) => {
        const e = t.o;
        let s;
        return i && (s = T(e, "componentWillLoad")), A(s, () => H(t, e, i))
    },
    H = async (e, s, o) => {
        const r = e.o,
            l = r["s-rc"];
        o && (t => {
            const i = t.j,
                e = t.o,
                s = i.t,
                o = ((t, i) => {
                    let e = u(i),
                        s = Z.get(e);
                    if (t = 11 === t.nodeType ? t : n, s)
                        if ("string" == typeof s) {
                            let i, o = p.get(t = t.head || t);
                            o || p.set(t, o = new Set), o.has(e) || (i = n.createElement("style"), i.innerHTML = s, t.insertBefore(i, t.querySelector("link")), o && o.add(e))
                        } else t.adoptedStyleSheets.includes(s) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, s]);
                    return e
                })(e.shadowRoot ? e.shadowRoot : e.getRootNode(), i);
            10 & s && (e["s-sc"] = o, e.classList.add(o + "-h"))
        })(e);
        ((e, s) => {
            const o = e.o,
                n = e.P || g(null, null),
                r = (t => t && t.v === b)(s) ? s : m(null, null, s);
            i = o.tagName, r.v = null, r.t |= 4, e.P = r, r.k = n.k = o.shadowRoot || o, t = o["s-sc"], P(n, r)
        })(e, S(e, s)), l && (l.map(t => t()), r["s-rc"] = void 0); {
            const t = r["s-p"],
                i = () => q(e);
            0 === t.length ? i() : (Promise.all(t).then(i), e.t |= 4, t.length = 0)
        }
    }, S = (t, i) => {
        try {
            i = i.render(), t.t &= -17, t.t |= 2
        } catch (t) {
            Y(t)
        }
        return i
    }, q = t => {
        const i = t.o,
            e = i,
            s = t.M;
        64 & t.t || (t.t |= 64, R(i), T(e, "componentDidLoad"), t._(i), s || I()), t.$ && (t.$(), t.$ = void 0), 512 & t.t && nt(() => O(t, !1)), t.t &= -517
    }, I = () => {
        R(n.documentElement), nt(() => B(o, "appload", {
            detail: {
                namespace: "rw-widgets"
            }
        }))
    }, T = (t, i, e) => {
        if (t && t[i]) try {
            return t[i](e)
        } catch (t) {
            Y(t)
        }
    }, A = (t, i) => t && t.then ? t.then(i) : i(), R = t => t.classList.add("hydrated"), W = (t, i) => {
        if (i.X) {
            const e = Object.entries(i.X),
                s = t.prototype;
            e.map(([t, [e]]) => {
                (31 & e || 32 & e) && Object.defineProperty(s, t, {
                    get() {
                        return ((t, i) => G(this).B.get(i))(0, t)
                    },
                    set(e) {
                        ((t, i, e, s) => {
                            const o = G(t),
                                n = o.B.get(i),
                                r = o.t;
                            (e = ((t, i) => null == t || x(t) ? t : 2 & i ? parseFloat(t) : 1 & i ? t + "" : t)(e, s.X[i][0])) !== n && (o.B.set(i, e), 2 == (18 & r) && O(o, !1))
                        })(this, t, e, i)
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }); {
                const i = new Map;
                s.attributeChangedCallback = function(t, e, s) {
                    r.jmp(() => {
                        const e = i.get(t);
                        this[e] = (null !== s || "boolean" != typeof this[e]) && s
                    })
                }, t.observedAttributes = e.filter(([t, i]) => 15 & i[0]).map(([t, e]) => {
                    const s = e[1] || t;
                    return i.set(s, t), s
                })
            }
        }
        return t
    }, K = (t, i) => {
        const e = {
            t: i[0],
            l: i[1]
        };
        e.X = i[2], e.D = i[3];
        const s = t.prototype.connectedCallback,
            o = t.prototype.disconnectedCallback;
        return Object.assign(t.prototype, {
            __registerHost() {
                J(this, e)
            },
            connectedCallback() {
                (t => {
                    if (0 == (1 & r.t)) {
                        const i = G(t),
                            e = i.j,
                            s = () => {};
                        if (1 & i.t) a(t, i, e.D);
                        else {
                            i.t |= 1; {
                                let e = t;
                                for (; e = e.parentNode || e.host;)
                                    if (e["s-p"]) {
                                        D(i, i.M = e);
                                        break
                                    }
                            }(async (t, i, e, s, o) => {
                                if (0 == (32 & i.t) && (o = t.constructor, i.t |= 160, o.style)) {
                                    let t = o.style;
                                    const i = u(e);
                                    if (!Z.has(i)) {
                                        const s = () => {};
                                        ((t, i, e) => {
                                            let s = Z.get(t);
                                            l && e ? (s = s || new CSSStyleSheet, s.replace(i)) : s = i, Z.set(t, s)
                                        })(i, t, !!(1 & e.t)), s()
                                    }
                                }
                                const n = i.M,
                                    r = () => O(i, !0);
                                n && n["s-rc"] ? n["s-rc"].push(r) : r()
                            })(t, i, e)
                        }
                        s()
                    }
                })(this), s && s.call(this)
            },
            disconnectedCallback() {
                (() => {
                    if (0 == (1 & r.t)) {
                        const t = G(this);
                        t.s && (t.s.map(t => t()), t.s = void 0)
                    }
                })(), o && o.call(this)
            }
        }), t.is = e.l, W(t, e)
    }, U = t => {
        t.attachShadow({
            mode: "open"
        })
    }, V = t => r.i = t, N = new WeakMap, G = t => N.get(t), J = (t, i) => {
        const e = {
            t: 0,
            o: t,
            j: i,
            B: new Map
        };
        return e.O = new Promise(t => e._ = t), t["s-p"] = [], t["s-rc"] = [], a(t, e, i.D), N.set(t, e)
    }, Q = (t, i) => i in t, Y = t => console.error(t), Z = new Map, tt = [], it = [], et = (t, i) => e => {
        t.push(e), s || (s = !0, i && 4 & r.t ? nt(ot) : r.raf(ot))
    }, st = t => {
        for (let i = 0; i < t.length; i++) try {
            t[i](performance.now())
        } catch (t) {
            Y(t)
        }
        t.length = 0
    }, ot = () => {
        st(tt), st(it), (s = tt.length > 0) && r.raf(ot)
    }, nt = t => Promise.resolve(void 0).then(t), rt = et(it, !0);

function lt(t) {
    return "https://widgets.thereviewsplace.com/2.0/" + t
}

function at(t) {
    return "https://repuso.com/?utm_source=widget&utm_medium=" + t + "&utm_campaign=powered"
}

function ct(t, i, e, s) {
    let o = e || "0,400";
    return "Roboto" === i && (o = o.replace(/400/g, "300")),
        function(t, i, e, s) {
            let o = "https://fonts.googleapis.com/css2?family=" + i.split(" ").join("+") + ":ital,wght@" + e + "&display=swap";
            return s && (o += "&text=" + s),
                function(t, i, e) {
                    return new Promise((i, s) => {
                        const o = document.createElement("link");
                        o.onload = i, o.onerror = s, o.setAttribute("rel", "stylesheet"), o.setAttribute("href", e), t.appendChild(o)
                    })
                }(t, 0, o)
        }(t, i, o, s).then(() => function(t, i) {
            if ("fonts" in document) {
                const e = i.split(";").map(t => t.replace("0,", "normal ").replace("1,", "italic ")).map(i => i + " 1em " + t);
                return Promise.all(e.map(t => document.fonts.load(t)))
            }
        }(i, o))
}

function ht(t, i, e, s, o) {
    return new Promise((n, r) => {
        if (null === document.head.querySelector(`link[href="${i}"]`)) {
            const l = document.createElement("link");
            l.onload = n, l.onerror = r, l.setAttribute("rel", t), l.setAttribute("href", i), null != e && l.setAttribute("as", e), null != s && l.setAttribute("type", s), null != o && l.setAttribute("crossorigin", o), document.head.appendChild(l)
        } else n()
    })
}

function dt(t) {
    t.target.onerror = null, t.target.src = lt("images/no-img.png")
}

function pt(t, i, e = 1e3) {
    t.classList.add(i), window.setTimeout(() => t.classList.remove(i), e)
}

function ut(t) {
    const i = {
            y: 31536e3,
            m: 2592e3,
            d: 86400,
            h: 3600,
            min: 60,
            sec: 1
        },
        e = Date.now() / 1e3 - t;
    for (let t in i) {
        const s = Math.floor(e / i[t]);
        if (s >= 1) return s + t
    }
}
const ft = t => "object" == (t = typeof t) || "function" === t,
    xt = (t, i, ...e) => {
        let s = null,
            o = !1,
            n = !1,
            r = [];
        const l = i => {
            for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? l(s) : null != s && "boolean" != typeof s && ((o = "function" != typeof t && !ft(s)) && (s += ""), o && n ? r[r.length - 1].p += s : r.push(o ? mt(null, s) : s), n = o)
        };
        if (l(e), i) {
            const t = i.className || i.class;
            t && (i.class = "object" != typeof t ? t : Object.keys(t).filter(i => t[i]).join(" "))
        }
        if ("function" == typeof t) return t(null === i ? {} : i, r, gt);
        const a = mt(t, null);
        return a.u = i, r.length > 0 && (a.g = r), a
    },
    mt = (t, i) => ({
        t: 0,
        v: t,
        p: i,
        k: null,
        g: null,
        u: null
    }),
    gt = {
        forEach: (t, i) => t.map(bt).forEach(i),
        map: (t, i) => t.map(bt).map(i).map(wt)
    },
    bt = t => ({
        vattrs: t.u,
        vchildren: t.g,
        vkey: t.C,
        vname: t.F,
        vtag: t.v,
        vtext: t.p
    }),
    wt = t => {
        if ("function" == typeof t.vtag) {
            const i = Object.assign({}, t.vattrs);
            return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), xt(t.vtag, i, ...t.vchildren || [])
        }
        const i = mt(t.vtag, t.vtext);
        return i.u = t.vattrs, i.g = t.vchildren, i.C = t.vkey, i.F = t.vname, i
    },
    vt = t => xt("div", {
        class: t.class
    }, xt("a", {
        onClick: t => t.stopPropagation(),
        style: {
            "font-size": "inherit",
            color: "inherit",
            "text-decoration": "none"
        },
        href: t.href,
        target: "_blank"
    }, t.prefix, xt("span", {
        style: {
            "font-family": "Courgette, cursive",
            "font-size": "1.2em"
        }
    }, "Repuso"))),
    yt = t => {
        if (0 === t.value) return null;
        let i = t.value;
        const e = [];
        for (; i > 0;) i >= 1 ? e.push(xt(Ct, {
            type: "icon-star"
        })) : i > 0 && e.push(xt(Ct, {
            type: "icon-star-half"
        })), i--;
        for (let i = Math.ceil(t.value) + 1; i <= 5; i++) e.push(xt(Ct, {
            type: "icon-star-outline"
        }));
        return xt("div", {
            class: t.classname,
            style: {
                color: t.color,
                "line-height": "0"
            }
        }, e)
    },
    kt = t => xt("div", {
        class: t.class,
        style: {
            height: t.size,
            width: t.size,
            "font-size": t.size,
            color: t.color
        }
    }, xt(Ct, {
        type: "icon-quote"
    })),
    Ct = t => xt("svg", {
        class: "icon " + t.type
    }, xt("use", {
        href: "#" + t.type
    })),
    zt = t => xt("svg", {
        "aria-hidden": "true",
        style: {
            position: "absolute",
            width: "0",
            height: "0",
            overflow: "hidden"
        }
    }, xt("defs", null, t.defs.map(t => t()))),
    Ft = () => xt("symbol", {
        id: "icon-chevron-left",
        viewBox: "0 0 21 28"
    }, xt("path", {
        d: "M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"
    })),
    $t = () => xt("symbol", {
        id: "icon-chevron-right",
        viewBox: "0 0 19 28"
    }, xt("path", {
        d: "M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"
    })),
    Mt = () => xt("symbol", {
        id: "icon-minus",
        viewBox: "0 0 22 28"
    }, xt("path", {
        d: "M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-19c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h19c0.828 0 1.5 0.672 1.5 1.5z"
    })),
    Et = () => xt("symbol", {
        id: "icon-plus",
        viewBox: "0 0 22 28"
    }, xt("path", {
        d: "M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"
    })),
    jt = () => xt("symbol", {
        id: "icon-cross",
        viewBox: "0 0 32 32"
    }, xt("path", {
        d: "M22.957 23.758c-0.75 0.75-1.966 0.75-2.715 0l-4.242-4.848-4.242 4.846c-0.75 0.75-1.966 0.75-2.715 0-0.75-0.75-0.75-1.966 0-2.715l4.413-5.040-4.414-5.043c-0.75-0.75-0.75-1.965 0-2.715s1.965-0.75 2.715 0l4.243 4.85 4.242-4.85c0.75-0.75 1.965-0.75 2.715 0s0.75 1.966 0 2.715l-4.413 5.043 4.413 5.040c0.75 0.75 0.75 1.966 0 2.717z"
    })),
    Pt = () => xt("symbol", {
        id: "icon-share-square-o",
        viewBox: "0 0 26 28"
    }, xt("path", {
        d: "M22 15.453v4.047c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h3.984c0.266 0 0.5 0.219 0.5 0.5 0 0.25-0.172 0.453-0.406 0.5-0.781 0.266-1.484 0.578-2.078 0.938-0.078 0.031-0.156 0.063-0.25 0.063h-1.75c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-3.344c0-0.187 0.109-0.359 0.281-0.453 0.313-0.141 0.594-0.344 0.844-0.578 0.141-0.141 0.359-0.203 0.547-0.125s0.328 0.25 0.328 0.453zM25.703 7.703l-6 6c-0.187 0.203-0.438 0.297-0.703 0.297-0.125 0-0.266-0.031-0.391-0.078-0.359-0.156-0.609-0.516-0.609-0.922v-3h-2.5c-3.437 0-5.625 0.656-6.844 2.047-1.266 1.453-1.641 3.797-1.156 7.391 0.031 0.219-0.109 0.438-0.313 0.531-0.063 0.016-0.125 0.031-0.187 0.031-0.156 0-0.313-0.078-0.406-0.203-0.109-0.156-2.594-3.672-2.594-6.797 0-4.188 1.313-9 11.5-9h2.5v-3c0-0.406 0.25-0.766 0.609-0.922 0.125-0.047 0.266-0.078 0.391-0.078 0.266 0 0.516 0.109 0.703 0.297l6 6c0.391 0.391 0.391 1.016 0 1.406z"
    })),
    _t = () => xt("symbol", {
        id: "icon-quote",
        viewBox: "0 0 20 20"
    }, xt("path", {
        d: "M5.315 3.401c-1.61 0-2.916 1.343-2.916 3s1.306 3 2.916 3c2.915 0 0.972 5.799-2.916 5.799v1.4c6.939 0.001 9.658-13.199 2.916-13.199zM13.715 3.401c-1.609 0-2.915 1.343-2.915 3s1.306 3 2.915 3c2.916 0 0.973 5.799-2.915 5.799v1.4c6.938 0.001 9.657-13.199 2.915-13.199z"
    })),
    Xt = () => xt("symbol", {
        id: "icon-star-outline",
        viewBox: "0 0 24 24"
    }, xt("path", {
        d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"
    })),
    Bt = () => xt("symbol", {
        id: "icon-star-half",
        viewBox: "0 0 24 24"
    }, xt("path", {
        d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031v9.328zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"
    })),
    Dt = () => xt("symbol", {
        id: "icon-star",
        viewBox: "0 0 24 24"
    }, xt("path", {
        d: "M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"
    })),
    Ot = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), this.arrows = "hover", this.dots = "always", this.autoplay = 0, this.index = 0
        }
        connectedCallback() {
            this.autoplay > 0 && this.src.length > 1 && window.setTimeout(() => {
                this.timer = window.setInterval(() => this.showNext(), this.autoplay)
            }, 1e3 * Math.random())
        }
        disconnectedCallback() {
            window.clearInterval(this.timer)
        }
        showNext() {
            this.index = this.index === this.src.length - 1 ? 0 : this.index + 1
        }
        showPrev() {
            this.index = 0 === this.index ? this.src.length - 1 : this.index - 1
        }
        play(t) {
            const i = videojs(this.videoNode, {
                fluid: !0
            });
            i.src({
                src: t
            }), i.play()
        }
        manualAction(t) {
            t.stopImmediatePropagation(), window.clearInterval(this.timer)
        }
        render() {
            let t = null,
                i = null;
            return this.src.length > 1 && ("always" !== this.arrows && "hover" !== this.arrows || (i = [m("div", {
                class: "arrows a-prev " + this.arrows,
                onClick: t => {
                    this.manualAction(t), this.showPrev()
                }
            }, m("span", {
                class: "arrow-icon"
            }, m(Ct, {
                type: "icon-chevron-left"
            }))), m("div", {
                class: "arrows a-next " + this.arrows,
                onClick: t => {
                    this.manualAction(t), this.showNext()
                }
            }, m("span", {
                class: "arrow-icon"
            }, m(Ct, {
                type: "icon-chevron-right"
            }))), m(zt, {
                defs: [Ft, $t]
            })]), "always" !== this.dots && "hover" !== this.dots || (t = m("div", {
                class: "dots"
            }, this.src.map((t, i) => m("span", {
                class: i === this.index ? "dot-selected" : "dot",
                onClick: t => {
                    this.manualAction(t), this.index = i
                }
            }))))), m(b, {
                onClick: t => {
                    this.manualAction(t)
                }
            }, m("div", {
                class: "media-container"
            }, this.src.map((t, i) => m("div", {
                class: "media-item",
                style: {
                    "background-image": "url(" + t.url + ")",
                    opacity: i === this.index ? "1" : "0"
                }
            }))), i, t)
        }
        static get style() {
            return "rw-media{cursor:default;position:relative}.media-container{position:relative;border-radius:inherit;height:100%;overflow-y:auto}.media-item{position:absolute;top:0px;left:0px;width:100%;height:100%;background-position:center center;background-size:cover;background-clip:content-box;background-repeat:no-repeat;transition:opacity 0.6s ease-in}.play{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);color:white;background-color:rgba(0, 0, 0, 0.4);line-height:0;font-size:20px;cursor:pointer}.arrows{position:absolute;top:0;height:100%;display:flex;cursor:pointer;color:lightgray;visibility:hidden}.arrows:hover{color:white}rw-media>.arrows.always{visibility:visible}rw-media:hover>.arrows.hover{visibility:visible}.a-prev{left:4px;padding-left:10px}.a-next{right:4px;padding-right:10px}.arrow-icon{align-self:center;font-size:16px;line-height:0}.dots{position:absolute;left:50%;transform:translate(-50%, 0);bottom:10%}.dot{width:6px;height:6px;display:inline-block;border-radius:100%;background:darkgray;border:1px solid white;margin:0 4px;cursor:pointer}.dot-selected{width:8px;height:8px;display:inline-block;border-radius:100%;background:white;margin:0 4px;cursor:pointer}"
        }
    },
    Lt = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), U(this), this.popupClosed = X(this, "popupClosed", 7)
        }
        handleKeyDown(t) {
            "Escape" === t.key && this.close()
        }
        handleClick() {
            this.close()
        }
        close() {
            this.popupClosed.emit(), this.host.remove()
        }
        render() {
            return m("div", {
                class: "container",
                onClick: t => t.stopPropagation()
            }, m("iframe", {
                src: this.source
            }), m("div", {
                class: "close",
                onClick: () => this.close()
            }, m(Ct, {
                type: "icon-cross"
            })), m(zt, {
                defs: [jt]
            }))
        }
        get host() {
            return this
        }
        static get style() {
            return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}:host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8)}.container{position:relative;width:80%;height:80%;max-width:600px;max-height:500px;border-radius:5px;color:#565656;background-color:#ffffff}.container iframe{border:none;border-radius:5px;width:100%;height:100%}.close{position:absolute;top:16px;right:16px;cursor:pointer;font-size:28px}"
        }
    },
    Ht = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), U(this), this.popupClosed = X(this, "popupClosed", 7)
        }
        handleKeyDown(t) {
            "Escape" === t.key && this.close()
        }
        handleClick() {
            this.close()
        }
        close() {
            this.popupClosed.emit(), this.host.remove()
        }
        render() {
            return m("div", {
                class: "container",
                onClick: t => t.stopPropagation(),
                style: {
                    "font-family": this.settings.popup_font || "Verdana, Helvetica, Arial, sans-serif"
                }
            }, m("div", {
                class: "main"
            }, m("div", {
                class: "header"
            }, this.item.from_image ? m("div", {
                class: "avatar"
            }, m("img", {
                src: this.item.from_image,
                onError: dt
            })) : null, m("div", {
                class: "info"
            }, m("div", {
                class: "name"
            }, this.item.from_name), this.settings.disable_external_links ? null : m("div", {
                class: "channel-link"
            }, "repuso" !== this.item.type || this.settings.branded ? m("a", {
                href: this.item.post_url || this.item.from_url || null,
                target: "_blank"
            }, this.item.label, "Â ", m("span", null, m(Ct, {
                type: "icon-share-square-o"
            }))) : null)), m("div", {
                class: "close",
                onClick: () => this.close()
            }, m(Ct, {
                type: "icon-cross"
            }))), m("div", {
                class: "text",
                innerHTML: this.item.text
            }), m("div", {
                class: "stat"
            }, m(yt, {
                value: this.item.rating_value,
                classname: "star"
            }), m("div", {
                class: "spacer"
            }), m("div", {
                class: "date"
            }, ut(this.item.ts), "Â Â "), "repuso" !== this.item.type || this.settings.branded ? m("div", {
                class: "source"
            }, m("img", {
                src: lt("images/28x28/logo-" + this.item.type + ".png")
            })) : null), this.item.media_arr && this.item.media_arr.length > 0 ? m("rw-media", {
                class: "media",
                autoplay: this.settings.media_autoplay,
                src: this.settings.slider_enabled_popup ? this.item.media_arr : this.item.media_arr.slice(0, 1)
            }) : null), this.settings.branded ? m(vt, {
                class: "branding",
                prefix: "Powered by ",
                href: this.settings.branding_link_modal
            }) : null, m(zt, {
                defs: [Dt, Bt, Xt, Pt, jt]
            }))
        }
        get host() {
            return this
        }
        static get style() {
            return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-share-square-o{width:0.9319285714285714em}:host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8);font-size:14px}.container{display:flex;flex-direction:column;min-width:40%;max-width:600px;max-height:85vh;margin:30px}.main{max-height:75vh;display:flex;flex-direction:column;padding:30px;border-radius:5px;color:#565656;background-color:#ffffff}.branding{max-height:10vh;align-self:flex-end;margin-top:4px;font-size:12px;color:#ffffff}.header{display:flex;min-height:35px}.avatar{display:flex;align-items:center;margin-right:10px}.avatar img{min-height:35px;min-width:35px;max-width:35px;border-radius:5px}.info{display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;margin-right:10px}.name{font-weight:bold}.channel-link a,.channel-link a:hover{display:flex;color:#b8b8b8;text-decoration:none;font-size:13px}.channel-link span{display:flex;align-items:flex-end;font-size:14px}.close{align-self:flex-start;cursor:pointer;font-size:28px}.text{overflow-y:auto;line-height:24px;min-height:48px;margin-top:10px;margin-bottom:10px}.stat{display:flex;align-items:center;min-height:28px}.spacer{flex-grow:1}.source img{max-width:28px;max-height:28px;min-width:28px;min-height:28px}.star{font-size:22px;color:gold}.media{margin-top:10px;min-height:120px;height:280px;padding:4px;border:1px solid #f2f2f2;border-radius:5px}"
        }
    },
    St = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), U(this), this.items = [], this.dataIndex = 0, this.firstRun = !0
        }
        componentWillLoad() {
            const t = {
                disable_custom_posts: this.dataDisableCustomPosts || null,
                tags: this.dataContentTags || null,
                website_id: this.dataWebsiteId || null
            };
            "undefined" != typeof rw_schema_params && Object.entries(rw_schema_params).forEach(([i, e]) => t["schema[" + i + "]"] = e);
            let i = function(t) {
                return Object.keys(t).filter(i => t[i]).map(i => encodeURIComponent(i) + "=" + encodeURIComponent("" + t[i])).join("&")
            }(t);
            return fetch(function(t, i) {
                const e = i.filter(Boolean).join("&");
                return "https://api.thereviewsplace.com/v1/widgets/posts/" + t + (e ? "?" + e : "")
            }(this.dataRwFloating, [i])).then(t => function(t) {
                if (t.ok) return t.json().catch(() => {
                    throw Error("Widget [ID] not found")
                });
                throw Error(t.status + " " + t.statusText)
            }(t)).catch(t => console.warn(t.message)).then(t => this.data = t).then(() => this.data && this.data.items && 0 !== this.data.items.length ? Promise.resolve() : new Promise(() => {})).then(() => this.mode = screen.width <= 468 ? this.data.settings.mobile_state : this.data.settings.default_state).then(() => this.data.settings.action_card.enabled && "true" !== this.dataDisableActioncard ? this.data.items.splice(this.data.settings.action_card.position - 1, 0, {
                action_card: this.data.settings.action_card
            }) : null).then(() => this.data.settings.slider_enabled_popup = !1).then(() => this.data.settings.slider_enabled_small = !1).then(() => this.data.settings.branding_link = at("floating")).then(() => this.data.settings.branding_link_modal = at("floating-modal"))
        }
        componentDidLoad() {
            const t = function(t, i) {
                switch (i || "Default") {
                    case "Default":
                        return Promise.resolve();
                    case "Inherit":
                        return Promise.resolve(t.style.setProperty("font-family", "inherit"));
                    default:
                        return ct(t, i, "0,400;0,700;1,400").then(() => t.style.setProperty("font-family", i)).catch(() => console.warn("Unable to load font. Fallback to default"))
                }
            }(this.host, this.data.settings.font);
            let i = "";
            if (this.data.settings.icon_image || (i += this.data.settings.icon_letter), this.data.settings.branded && (i += "Repuso"), i && ct(this.host, "Courgette", "0,400", i), this.data.settings.custom_css) {
                const t = document.createElement("style");
                t.textContent = this.data.settings.custom_css, t.setAttribute("data-name", "custom-css"), this.host.shadowRoot.appendChild(t)
            }
            this.setMode(this.mode), t.then(() => {
                    this.host.style.setProperty("z-index", "2147483001"), this.host.style.setProperty("position", "fixed"), this.host.style.setProperty("left", "left" === this.data.settings.position ? "20px" : "auto"), this.host.style.setProperty("right", "right" === this.data.settings.position ? "20px" : "auto"), this.host.style.setProperty("display", "block"), "banner" === this.mode && this.data.settings.banner_autoplay > 0 && this.play(), "mini" === this.mode && this.data.settings.mobile_hide_after > 0 && this.autohide(), this.data.settings.popup_font = window.getComputedStyle(this.host).getPropertyValue("font-family")
                }),
                function(t) {
                    t && null === document.querySelector("#rw-schema") && document.head.insertAdjacentHTML("beforeend", t)
                }(this.data.schema)
        }
        setMode(t) {
            switch (this.firstRun ? this.firstRun = !1 : this.stop(), this.mode = t, t) {
                case "mini":
                case "bar":
                    this.host.style.setProperty("width", "auto"), this.host.style.setProperty("height", "auto"), this.host.style.setProperty("bottom", "20px"), this.data.settings.wobble > 0 && this.shake();
                    break;
                case "banner":
                    this.min && this.min.style.setProperty("visibility", "hidden"), this.max && this.max.style.setProperty("visibility", "hidden"), this.host.style.setProperty("width", "324px"), this.host.style.setProperty("height", "auto"), this.host.style.setProperty("bottom", "0px");
                    break;
                case "full":
                    this.host.style.setProperty("width", "300px"), this.host.style.setProperty("height", "470px"), this.host.style.setProperty("bottom", "0px")
            }
        }
        play() {
            this.timer = window.setInterval(() => {
                this.dataIndex === this.items.length - 1 ? this.stop() : this.setIndex(this.dataIndex + 1)
            }, this.data.settings.banner_autoplay)
        }
        shake() {
            this.timer = window.setInterval(() => {
                pt(this.bar, "shake", 800)
            }, this.data.settings.wobble)
        }
        stop(t = !0) {
            t && (this.data.settings.banner_autoplay = 0), window.clearInterval(this.timer), window.clearTimeout(this.hide)
        }
        autohide() {
            this.hide = window.setTimeout(() => {
                this.host.remove()
            }, this.data.settings.mobile_hide_after)
        }
        actionButton(t) {
            "url" === t.mode ? t.new_window ? window.open(t.url, "_blank") : top.location.href = t.url : "collect" === t.mode && this.popupCollect("https://" + this.data.settings.vanity_url + ".repuso.com/collect")
        }
        actionPost(t) {
            t.content.url && (t.content.newwindow ? window.open(t.content.url, "_blank") : top.location.href = t.content.url)
        }
        popupReview(t) {
            this.popup1 = document.createElement("rw-popup-review"), this.popup1.item = t, this.popup1.settings = this.data.settings, document.body.appendChild(this.popup1), this.stop(!1), this.popup1.addEventListener("popupClosed", () => {
                this.popup1 = null, "banner" === this.mode && this.data.settings.banner_autoplay > 0 && this.play()
            })
        }
        popupCollect(t) {
            this.popup2 = document.createElement("rw-popup-collect"), this.popup2.setAttribute("source", t), document.body.appendChild(this.popup2), this.stop(!1), this.popup2.addEventListener("popupClosed", () => {
                this.popup2 = null, "banner" === this.mode && this.data.settings.banner_autoplay > 0 && this.play()
            })
        }
        setIndex(t) {
            this.dataIndex = t, this.onIndexChange(t)
        }
        onIndexChange(t) {
            t < 0 ? (this.dataIndex = 0, pt(this.items[this.dataIndex], "wobble-left")) : t >= this.items.length && (this.dataIndex = this.items.length - 1, pt(this.items[this.dataIndex], "wobble-right"))
        }
        handleMouseover() {
            this.popup1 || this.popup2 || "banner" !== this.mode || (this.stop(!1), this.min && this.min.style.setProperty("visibility", "visible"), this.max && this.max.style.setProperty("visibility", "visible"))
        }
        handleMouseout() {
            this.popup1 || this.popup2 || "banner" !== this.mode || (this.data.settings.banner_autoplay > 0 && this.play(), this.min && this.min.style.setProperty("visibility", "hidden"), this.max && this.max.style.setProperty("visibility", "hidden"))
        }
        render() {
            switch (this.mode) {
                case "mini":
                    return this.renderBar(!0);
                case "bar":
                    return this.renderBar();
                case "banner":
                    return this.renderBanner();
                case "full":
                    return this.renderFull()
            }
        }
        renderBar(t) {
            return m("div", {
                class: "bar",
                ref: t => this.bar = t,
                onClick: () => this.setMode("full"),
                style: {
                    "background-color": this.data.settings.primary_color || "#E67E21",
                    color: this.data.settings.secondary_color || "#FFFFFF"
                }
            }, this.data.settings.icon_image || this.data.settings.icon_letter ? m("div", {
                class: "logo"
            }, this.data.settings.icon_image ? m("img", {
                src: this.data.settings.icon_image
            }) : m("div", null, this.data.settings.icon_letter)) : null, t ? null : m("div", {
                class: "title"
            }, this.data.settings.title))
        }
        renderBanner() {
            return m("div", {
                class: "container",
                style: {
                    color: this.data.settings.font_color || "#565656"
                }
            }, m("div", {
                class: "border",
                style: {
                    "background-color": this.data.settings.primary_color
                }
            }), m("div", {
                class: "holder-overflow"
            }, m("div", {
                class: "holder",
                style: {
                    transform: "translateX(" + -100 * this.dataIndex + "%)"
                }
            }, this.data.items.map((t, i) => m("div", {
                class: "column"
            }, t.content ? m("div", {
                class: "post-a",
                ref: t => this.items[i] = t,
                onClick: () => this.actionPost(t),
                style: {
                    cursor: t.content.url ? "pointer" : "default"
                }
            }, m("img", {
                class: "post-left",
                src: lt("images/lauwer-left.png")
            }), m("div", {
                class: "post-middle"
            }, m("div", {
                class: "post-title"
            }, t.content.title), t.content.banner_text ? m("div", {
                class: "post-banner-text"
            }, t.content.banner_text) : m("img", {
                class: "post-banner",
                src: t.media
            }), m("div", {
                class: "post-body"
            }, t.content.body)), m("img", {
                class: "post-right",
                src: lt("images/lauwer-right.png")
            })) : t.action_card ? m("div", {
                class: "post-a",
                ref: t => this.items[i] = t
            }, m("div", {
                class: "action-card"
            }, m("div", {
                class: "action-card-title"
            }, t.action_card.title), m("div", {
                class: "action-card-button",
                onClick: () => this.actionButton(t.action_card),
                style: {
                    "background-color": this.data.settings.primary_color || "#E67E21",
                    color: this.data.settings.secondary_color || "#FFFFFF"
                }
            }, t.action_card.text))) : m("div", {
                class: "item",
                ref: t => this.items[i] = t
            }, t.media_arr.length > 0 ? m("rw-media", {
                class: "media",
                autoplay: this.data.settings.media_autoplay,
                src: t.media_arr.slice(0, this.data.settings.slider_enabled_small ? 3 : 1)
            }) : m(kt, {
                class: "quote-left",
                size: (this.data.settings.icon_size || 32) + "px",
                color: this.data.settings.primary_color || "#E67E21"
            }), m("div", {
                class: "data"
            }, m("div", {
                class: "text",
                innerHTML: t.text
            }), m("div", {
                class: "rating"
            }, m(yt, {
                value: t.rating_value,
                classname: "star"
            })), m("div", {
                class: "footer",
                onClick: () => this.popupReview(t)
            }, m("div", {
                class: "info"
            }, m("div", {
                class: "name"
            }, t.from_name), m("div", {
                class: "link"
            }, m("div", {
                class: "view-post"
            }, "Â ", this.data.settings.view_post_text), "repuso" !== t.type || this.data.settings.branded ? m("div", {
                class: "channel"
            }, m("img", {
                src: lt("images/15x15/logo-" + t.type + ".png")
            })) : null)), t.from_image ? m("div", {
                class: "avatar"
            }, m("img", {
                src: t.from_image,
                onError: dt
            })) : null))))))), this.data.settings.branded ? m(vt, {
                class: "branding",
                prefix: "Powered by ",
                href: this.data.settings.branding_link
            }) : m("div", {
                class: "no-branding"
            }), this.data.items.length > 1 ? m("div", null, m("div", {
                class: "prev",
                onClick: () => {
                    this.stop(), this.setIndex(this.dataIndex - 1)
                }
            }, m(Ct, {
                type: "icon-chevron-left"
            })), m("div", {
                class: "next",
                onClick: () => {
                    this.stop(), this.setIndex(this.dataIndex + 1)
                }
            }, m(Ct, {
                type: "icon-chevron-right"
            }))) : null, m("div", {
                class: "min",
                ref: t => this.min = t,
                onClick: () => this.setMode("bar")
            }, m(Ct, {
                type: "icon-minus"
            })), m("div", {
                class: "max",
                ref: t => this.max = t,
                onClick: () => this.setMode("full")
            }, m(Ct, {
                type: "icon-plus"
            })), m(zt, {
                defs: [Dt, Bt, Xt, _t, Ft, $t, Mt, Et]
            }))
        }
        renderFull() {
            return m("div", {
                class: "container-reviews",
                style: {
                    color: this.data.settings.font_color || "#565656"
                }
            }, m("div", {
                class: "border",
                style: {
                    "background-color": this.data.settings.primary_color
                }
            }), m("div", {
                class: "control"
            }, this.data.settings.icon_image || this.data.settings.icon_letter ? m("div", {
                class: "logo"
            }, this.data.settings.icon_image ? m("img", {
                src: this.data.settings.icon_image
            }) : m("div", null, this.data.settings.icon_letter)) : null, m("div", {
                class: "title"
            }, this.data.settings.title), m("div", {
                class: "spacer"
            }), m("div", {
                class: "minus",
                onClick: () => this.setMode(screen.width <= 468 ? this.data.settings.mobile_state : "bar")
            }, m(Ct, {
                type: "icon-minus"
            }))), m("div", {
                class: "reviews"
            }, this.data.items.map(t => t.content ? m("div", {
                class: "post-b",
                style: {
                    cursor: t.content.url ? "pointer" : "default"
                },
                onClick: () => this.actionPost(t)
            }, m("img", {
                class: "post-left",
                src: lt("images/lauwer-left.png")
            }), m("div", {
                class: "post-middle"
            }, m("div", {
                class: "post-title"
            }, t.content.title), t.content.banner_text ? m("div", {
                class: "post-banner-text"
            }, t.content.banner_text) : m("img", {
                class: "post-banner",
                src: t.media
            }), m("div", {
                class: "post-body"
            }, t.content.body)), m("img", {
                class: "post-right",
                src: lt("images/lauwer-right.png")
            })) : t.action_card ? m("div", {
                class: "post-b"
            }, m("div", {
                class: "action-card"
            }, m("div", {
                class: "action-card-title"
            }, t.action_card.title), m("div", {
                class: "action-card-button",
                onClick: () => this.actionButton(t.action_card),
                style: {
                    "background-color": this.data.settings.primary_color || "#E67E21",
                    color: this.data.settings.secondary_color || "#FFFFFF"
                }
            }, t.action_card.text))) : m("div", {
                class: "review"
            }, t.from_image ? m("div", {
                class: "review-left"
            }, m("img", {
                onClick: () => this.popupReview(t),
                src: t.from_image,
                onError: dt
            })) : null, m("div", {
                class: "review-right"
            }, m("div", {
                class: "review-header",
                onClick: () => this.popupReview(t)
            }, m("div", {
                class: "review-name"
            }, t.from_name), "repuso" !== t.type || this.data.settings.branded ? m("div", {
                class: "review-channel"
            }, m("img", {
                src: lt("images/15x15/logo-" + t.type + ".png")
            })) : null, m("div", {
                class: "review-date"
            }, ut(t.ts))), m("div", {
                class: "review-text",
                innerHTML: t.text
            }), m(yt, {
                value: t.rating_value,
                classname: "review-star"
            }), t.media_arr.length > 0 ? m("rw-media", {
                class: "review-media",
                autoplay: this.data.settings.media_autoplay,
                src: t.media_arr.slice(0, this.data.settings.slider_enabled_small ? 3 : 1)
            }) : null)))), this.data.settings.action_button.enabled ? m("div", {
                class: "action-button",
                onClick: () => this.actionButton(this.data.settings.action_button),
                style: {
                    "background-color": this.data.settings.primary_color || "#E67E21",
                    color: this.data.settings.secondary_color || "#FFFFFF"
                }
            }, this.data.settings.action_button.text) : null, this.data.settings.branded ? m(vt, {
                class: "branding",
                prefix: "Powered by ",
                href: this.data.settings.branding_link
            }) : null, m(zt, {
                defs: [Dt, Bt, Xt, Mt]
            }))
        }
        get host() {
            return this
        }
        static get style() {
            return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-chevron-left{width:0.75em}.icon-chevron-right{width:0.6785714285714285em}.icon-minus{width:0.7857142857142857em}.icon-plus{width:0.7857142857142857em}:host{all:initial;display:none;overflow:hidden;font-family:Verdana, Helvetica, Arial, sans-serif;font-size:14px}.logo{display:flex;font-family:Courgette, cursive;font-size:22px;margin-right:8px}.logo img{max-width:22px;min-width:22px;min-height:22px}.spacer{flex-grow:1}.border{min-height:5px;border-top-left-radius:10px;border-top-right-radius:10px}.action-card{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0px 20px}.action-card-title{text-align:center;font-size:17px;margin-bottom:20px}.action-card-button{align-self:stretch;border-radius:5px;padding:12px;font-weight:bold;text-align:center;cursor:pointer}.action-card-button:hover{opacity:0.9}.post-left,.post-right{width:43px;height:100px}.post-left{margin-left:20px}.post-right{margin-right:20px}.post-middle{display:flex;flex-direction:column;align-items:center;flex-grow:1;text-align:center}.post-title{font-weight:bold;font-size:12px}.post-banner-text{font-size:24px;font-weight:bold;padding-top:10px;padding-bottom:10px}.post-banner{max-height:65px;margin:5px 0px}.post-body{font-style:italic}.no-branding{min-height:20px}.branding{min-height:24px;font-size:12px;display:flex;justify-content:center;color:#b2b2b2}.bar{display:flex;align-items:center;border-radius:7px;padding:6px 16px;margin:0px 7px;cursor:pointer;font-weight:bold}.shake{animation-name:shake;animation-duration:0.8s;animation-timing-function:ease-in-out}@keyframes shake{16.66%{transform:translateX(7px)}33.33%{transform:translateX(-7px)}50.00%{transform:translateX(4px)}66.66%{transform:translateX(-4px)}83.33%{transform:translateX(2px)}}.container{position:relative;height:100%;margin:0px 11px;border-left:1px solid #CCCCCC;border-right:1px solid #CCCCCC;border-top-left-radius:8px;border-top-right-radius:8px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#FFFFFF}.holder-overflow{width:100%;height:100%;overflow:hidden}.holder{height:100%;white-space:nowrap;transition:transform .3s ease-in-out}.column{white-space:normal;display:inline-block;vertical-align:middle;width:100%;height:100%}.item{display:flex;height:100%;min-height:152px;overflow:hidden;padding:18px 15px 0px 15px;box-sizing:border-box}.quote-left{transform:rotate(180deg);margin-right:5px}.media{margin-right:8px;min-width:90px;padding:2px;border:1px solid #f2f2f2;border-radius:8px}.data{flex-grow:1;position:relative;overflow:hidden}.text{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:26px}.footer{position:absolute;right:0px;bottom:0px;display:flex;justify-content:flex-end;max-width:100%;overflow:hidden;cursor:pointer}.rating{margin:2px 0px 2px -3px}.star{font-size:18px;color:gold}.info{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-end;overflow:hidden}.name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;font-weight:bold;max-width:100%}.link{display:flex;align-items:center}.view-post{opacity:0.6;font-size:12px;white-space:nowrap}.channel{display:flex}.channel img{width:15px;height:15px;min-width:15px;min-height:15px;margin-left:5px}.avatar{display:flex;align-items:flex-end}.avatar img{max-width:35px;min-width:35px;min-height:35px;margin-left:10px;border-radius:5px}.post-a{display:flex;height:100%;align-items:center;padding:18px 10px 0px 10px;box-sizing:border-box;overflow:hidden}.prev,.next{display:flex;align-items:center;justify-content:center;position:absolute;top:50%;cursor:pointer;color:#818181;background-color:#eeeeee;border-radius:3px;width:15px;height:15px;font-size:14px;padding:0px 2px}.prev{left:0px;transform:translate(-50%, -50%)}.next{right:0px;transform:translate(50%, -50%)}.wobble-left{animation-name:wobbleleft;animation-duration:1s;animation-timing-function:ease-in-out}.wobble-right{animation-name:wobbleright;animation-duration:1s;animation-timing-function:ease-in-out}@keyframes wobbleleft{16.65%{transform:translateX(8px)}33.33%{transform:translateX(-6px)}49.95%{transform:translateX(4px)}66.66%{transform:translateX(-2px)}83.25%{transform:translateX(1px)}}@keyframes wobbleright{16.65%{transform:translateX(-8px)}33.33%{transform:translateX(6px)}49.95%{transform:translateX(-4px)}66.66%{transform:translateX(2px)}83.25%{transform:translateX(-1px)}}.min{visibility:hidden;position:absolute;top:10px;right:6px;font-size:18px;width:18px;height:18px;padding:2px;cursor:pointer;color:#565656}.max{visibility:hidden;position:absolute;top:10px;right:32px;font-size:18px;width:18px;height:18px;padding:2px;cursor:pointer;color:#565656}.container-reviews{display:flex;flex-direction:column;height:100%;border-left:1px solid #CCCCCC;border-right:1px solid #CCCCCC;border-top-left-radius:8px;border-top-right-radius:8px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#FFFFFF}.control{display:flex;align-items:center;min-height:20px;padding:10px 13px;border-bottom:1px solid #f2f2f2;color:#565656;font-weight:bold}.minus{display:flex;justify-content:flex-end;font-size:20px;width:20px;height:20px;cursor:pointer}.reviews{flex-grow:1;overflow-y:auto}.review{display:flex;border-bottom:1px solid #f0f0f0;padding:18px 10px;font-size:0.9em;line-height:20px}.review-left{margin-right:7px}.review-left img{min-width:35px;max-width:35px;border-radius:5px;cursor:pointer}.review-right{display:flex;flex-grow:1;flex-direction:column}.review-header{display:flex;cursor:pointer;padding-left:3px}.review-name{flex-grow:1;font-weight:bold}.review-channel{display:flex;align-items:center;margin:0 2px}.review-channel img{max-width:15px;max-height:15px}.review-text{margin-top:1px;margin-bottom:5px;padding-left:3px}.review-star{font-size:20px;color:gold}.review-media{margin-top:5px;height:140px;padding:2px;border:1px solid #f2f2f2;border-radius:8px}.post-b{display:flex;align-items:center;padding:15px 5px;border-bottom:1px solid #f0f0f0;line-height:20px;overflow:hidden}.action-button{border-radius:5px;padding:10px;margin:6px 10px;text-align:center;font-weight:bold;cursor:pointer;font-size:14px}.action-button:hover{opacity:0.9}"
        }
    };
! function() {
    ht("preconnect", "https://fonts.googleapis.com"), ht("preconnect", "https://fonts.gstatic.com", null, null, "");
    const t =
        import.meta.url.split("/").pop().split(".").shift(),
        i = "div[data-rw-" + t.split("-").pop() + "]";
    document.querySelectorAll(i).forEach(i => {
        if (!i.querySelector(t)) {
            const e = document.createElement(t);
            for (let t of i.getAttributeNames()) e.setAttribute(t, i.getAttribute(t));
            e.removeAttribute("id"), e.removeAttribute("style"), i.appendChild(e)
        }
    })
}();
const qt = K(Ot, [0, "rw-media", {
        arrows: [1],
        dots: [1],
        autoplay: [2],
        src: [16],
        index: [32]
    }]),
    It = K(Lt, [1, "rw-popup-collect", {
            source: [1]
        },
        [
            [4, "keydown", "handleKeyDown"],
            [0, "click", "handleClick"]
        ]
    ]),
    Tt = K(Ht, [1, "rw-popup-review", {
            item: [8],
            settings: [8]
        },
        [
            [4, "keydown", "handleKeyDown"],
            [0, "click", "handleClick"]
        ]
    ]),
    At = K(St, [1, "rw-widget-floating", {
            dataRwFloating: [1, "data-rw-floating"],
            dataDisableCustomPosts: [1, "data-disable-custom-posts"],
            dataDisableActioncard: [1, "data-disable-actioncard"],
            dataContentTags: [1, "data-content-tags"],
            dataWebsiteId: [1, "data-website-id"],
            mode: [32],
            dataIndex: [32]
        },
        [
            [1, "mouseover", "handleMouseover"],
            [1, "mouseout", "handleMouseout"]
        ]
    ]),
    Rt = t => {
        "undefined" != typeof customElements && [qt, It, Tt, At].forEach(i => {
            customElements.get(i.is) || customElements.define(i.is, i, t)
        })
    };
export {
    qt as RwMedia, It as RwPopupCollect, Tt as RwPopupReview, At as RwWidgetFloating, Rt as defineCustomElements, V as setAssetPath
};
Rt();

console.log("an edit ends");
