var pn = Object.defineProperty;
var _t = Object.getOwnPropertySymbols;
var _n = Object.prototype.hasOwnProperty, hn = Object.prototype.propertyIsEnumerable;
var He = (e, t, n) => t in e ? pn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ht = (e, t) => {
  for (var n in t || (t = {}))
    _n.call(t, n) && He(e, n, t[n]);
  if (_t)
    for (var n of _t(t))
      hn.call(t, n) && He(e, n, t[n]);
  return e;
};
var We = (e, t, n) => He(e, typeof t != "symbol" ? t + "" : t, n);
var mt = (e, t, n) => new Promise((r, i) => {
  var l = (u) => {
    try {
      v(n.next(u));
    } catch (s) {
      i(s);
    }
  }, f = (u) => {
    try {
      v(n.throw(u));
    } catch (s) {
      i(s);
    }
  }, v = (u) => u.done ? r(u.value) : Promise.resolve(u.value).then(l, f);
  v((n = n.apply(e, t)).next());
});
const mn = "5";
typeof window != "undefined" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(mn);
const gn = 1, wn = 2, yn = 16, bn = 2, O = Symbol(), Ke = !1, B = 2, At = 4, xe = 8, tt = 16, re = 32, Ee = 64, Ne = 128, X = 256, Ie = 512, I = 1024, G = 2048, ce = 4096, W = 8192, qe = 16384, kn = 32768, Tt = 65536, xn = 1 << 19, Nt = 1 << 20, ae = Symbol("$state"), En = Symbol("");
var nt = Array.isArray, zn = Array.prototype.indexOf, rt = Array.from, Sn = Object.defineProperty, we = Object.getOwnPropertyDescriptor, It = Object.getOwnPropertyDescriptors, Cn = Object.prototype, An = Array.prototype, it = Object.getPrototypeOf;
function Tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let Re = !1, Ge = [];
function Rt() {
  Re = !1;
  const e = Ge.slice();
  Ge = [], Tn(e);
}
function lt(e) {
  Re || (Re = !0, queueMicrotask(Rt)), Ge.push(e);
}
function Nn() {
  Re && Rt();
}
function Lt(e) {
  return e === this.v;
}
function Dt(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ot(e) {
  return !Dt(e, this.v);
}
function In() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ln() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Dn() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function On() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Fe = !1, Mn = !1;
function Pn() {
  Fe = !0;
}
function P(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Lt,
    rv: 0,
    wv: 0
  };
  return n;
}
function Le(e) {
  return /* @__PURE__ */ Fn(P(e));
}
// @__NO_SIDE_EFFECTS__
function qn(e, t = !1) {
  var r, i;
  const n = P(e);
  return t || (n.equals = Ot), Fe && T !== null && T.l !== null && ((i = (r = T.l).s) != null ? i : r.s = []).push(n), n;
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return k !== null && !Y && k.f & B && (j === null ? Hn([e]) : j.push(e)), e;
}
function D(e, t) {
  return k !== null && !Y && Ve() && k.f & (B | tt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (j === null || !j.includes(e)) && On(), Mt(e, t);
}
function Mt(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ut(), Pt(e, G), Ve() && E !== null && E.f & I && !(E.f & (re | Ee)) && (H === null ? Wn([e]) : H.push(e))), t;
}
function Pt(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ve(), i = n.length, l = 0; l < i; l++) {
      var f = n[l], v = f.f;
      v & G || !r && f === E || (U(f, t), v & (I | X) && (v & B ? Pt(
        /** @type {Derived} */
        f,
        ce
      ) : je(
        /** @type {Effect} */
        f
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  var t = B | G, n = k !== null && k.f & B ? (
    /** @type {Derived} */
    k
  ) : null;
  return E === null || n !== null && n.f & X ? t |= X : E.f |= Nt, {
    ctx: T,
    deps: null,
    effects: null,
    equals: Lt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n != null ? n : E
  };
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const t = /* @__PURE__ */ De(e);
  return t.equals = Ot, t;
}
function qt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      K(
        /** @type {Effect} */
        t[n]
      );
  }
}
function jn(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & B))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Un(e) {
  var t, n = E;
  ne(jn(e));
  try {
    qt(e), t = Ht(e);
  } finally {
    ne(n);
  }
  return t;
}
function Ft(e) {
  var t = Un(e), n = ($ || e.f & X) && e.deps !== null ? ce : I;
  U(e, n), e.equals(t) || (e.v = t, e.wv = Ut());
}
const Bt = 0, Vn = 1;
let Ae = !1, Te = Bt, be = !1, ke = null, fe = !1;
function gt(e) {
  fe = e;
}
let le = [], ue = 0;
let k = null, Y = !1;
function te(e) {
  k = e;
}
let E = null;
function ne(e) {
  E = e;
}
let j = null;
function Hn(e) {
  j = e;
}
let N = null, M = 0, H = null;
function Wn(e) {
  H = e;
}
let jt = 1, Oe = 0, $ = !1;
function Ut() {
  return ++jt;
}
function ze(e) {
  var s, a;
  var t = e.f;
  if (t & G)
    return !0;
  if (t & ce) {
    var n = e.deps, r = (t & X) !== 0;
    if (n !== null) {
      var i, l, f = (t & Ie) !== 0, v = r && E !== null && !$, u = n.length;
      if (f || v) {
        for (i = 0; i < u; i++)
          l = n[i], (f || !((s = l == null ? void 0 : l.reactions) != null && s.includes(e))) && ((a = l.reactions) != null ? a : l.reactions = []).push(e);
        f && (e.f ^= Ie);
      }
      for (i = 0; i < u; i++)
        if (l = n[i], ze(
          /** @type {Derived} */
          l
        ) && Ft(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!r || E !== null && !$) && U(e, I);
  }
  return !1;
}
function Yn(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Ne)
      try {
        n.fn(e);
        return;
      } catch (r) {
        n.f ^= Ne;
      }
    n = n.parent;
  }
  throw Ae = !1, e;
}
function Xn(e) {
  return (e.f & qe) === 0 && (e.parent === null || (e.parent.f & Ne) === 0);
}
function Be(e, t, n, r) {
  if (Ae) {
    if (n === null && (Ae = !1), Xn(t))
      throw e;
    return;
  }
  n !== null && (Ae = !0);
  {
    Yn(e, t);
    return;
  }
}
function Vt(e, t, n = 0) {
  var r = e.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      l.f & B ? Vt(
        /** @type {Derived} */
        l,
        t,
        n + 1
      ) : t === l && (n === 0 ? U(l, G) : l.f & I && U(l, ce), je(
        /** @type {Effect} */
        l
      ));
    }
}
function Ht(e) {
  var d, p;
  var t = N, n = M, r = H, i = k, l = $, f = j, v = T, u = Y, s = e.f;
  N = /** @type {null | Value[]} */
  null, M = 0, H = null, k = s & (re | Ee) ? null : e, $ = (s & X) !== 0 && (!fe || i === null || u), j = null, kt(e.ctx), Y = !1, Oe++;
  try {
    var a = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (N !== null) {
      var o;
      if (Me(e, M), c !== null && M > 0)
        for (c.length = M + N.length, o = 0; o < N.length; o++)
          c[M + o] = N[o];
      else
        e.deps = c = N;
      if (!$)
        for (o = M; o < c.length; o++)
          ((p = (d = c[o]).reactions) != null ? p : d.reactions = []).push(e);
    } else c !== null && M < c.length && (Me(e, M), c.length = M);
    if (Ve() && H !== null && !(e.f & (B | ce | G)))
      for (o = 0; o < /** @type {Source[]} */
      H.length; o++)
        Vt(
          H[o],
          /** @type {Effect} */
          e
        );
    return i !== null && Oe++, a;
  } finally {
    N = t, M = n, H = r, k = i, $ = l, j = f, kt(v), Y = u;
  }
}
function Kn(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = zn.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && t.f & B && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (N === null || !N.includes(t)) && (U(t, ce), t.f & (X | Ie) || (t.f ^= Ie), qt(
    /** @type {Derived} **/
    t
  ), Me(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Me(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Kn(e, n[r]);
}
function st(e) {
  var t = e.f;
  if (!(t & qe)) {
    U(e, I);
    var n = E, r = T;
    E = e;
    try {
      t & tt ? lr(e) : tn(e), en(e);
      var i = Ht(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = jt;
      var l = e.deps, f;
      Ke && Mn && e.f & G;
    } catch (v) {
      Be(v, e, n, r || e.ctx);
    } finally {
      E = n;
    }
  }
}
function Wt() {
  if (ue > 1e3) {
    ue = 0;
    try {
      In();
    } catch (e) {
      if (ke !== null)
        Be(e, ke, null);
      else
        throw e;
    }
  }
  ue++;
}
function Yt(e) {
  var t = e.length;
  if (t !== 0) {
    Wt();
    var n = fe;
    fe = !0;
    try {
      for (var r = 0; r < t; r++) {
        var i = e[r];
        i.f & I || (i.f ^= I);
        var l = [];
        Xt(i, l), Gn(l);
      }
    } finally {
      fe = n;
    }
  }
}
function Gn(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (qe | W)))
        try {
          ze(r) && (st(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? nn(r) : r.fn = null));
        } catch (i) {
          Be(i, r, null, r.ctx);
        }
    }
}
function Zn() {
  if (be = !1, ue > 1001)
    return;
  const e = le;
  le = [], Yt(e), be || (ue = 0, ke = null);
}
function je(e) {
  Te === Bt && (be || (be = !0, queueMicrotask(Zn))), ke = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Ee | re)) {
      if (!(n & I)) return;
      t.f ^= I;
    }
  }
  le.push(t);
}
function Xt(e, t) {
  var n = e.first, r = [];
  e: for (; n !== null; ) {
    var i = n.f, l = (i & re) !== 0, f = l && (i & I) !== 0, v = n.next;
    if (!f && !(i & W))
      if (i & xe) {
        if (l)
          n.f ^= I;
        else {
          var u = k;
          try {
            k = n, ze(n) && st(n);
          } catch (o) {
            Be(o, n, null, n.ctx);
          } finally {
            k = u;
          }
        }
        var s = n.first;
        if (s !== null) {
          n = s;
          continue;
        }
      } else i & At && r.push(n);
    if (v === null) {
      let o = n.parent;
      for (; o !== null; ) {
        if (e === o)
          break e;
        var a = o.next;
        if (a !== null) {
          n = a;
          continue e;
        }
        o = o.parent;
      }
    }
    n = v;
  }
  for (var c = 0; c < r.length; c++)
    s = r[c], t.push(s), Xt(s, t);
}
function Kt(e) {
  var t = Te, n = le;
  try {
    Wt();
    const i = [];
    Te = Vn, le = i, be = !1, Yt(n);
    var r = e == null ? void 0 : e();
    return Nn(), (le.length > 0 || i.length > 0) && Kt(), ue = 0, ke = null, r;
  } finally {
    Te = t, le = n;
  }
}
function wt() {
  return mt(this, null, function* () {
    yield Promise.resolve(), Kt();
  });
}
function C(e) {
  var t = e.f, n = (t & B) !== 0;
  if (k !== null && !Y) {
    j !== null && j.includes(e) && Dn();
    var r = k.deps;
    e.rv < Oe && (e.rv = Oe, N === null && r !== null && r[M] === e ? M++ : N === null ? N = [e] : (!$ || !N.includes(e)) && N.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), l = i.parent;
    l !== null && !(l.f & X) && (i.f ^= X);
  }
  return n && (i = /** @type {Derived} */
  e, ze(i) && Ft(i)), e.v;
}
function Gt(e) {
  var t = Y;
  try {
    return Y = !0, e();
  } finally {
    Y = t;
  }
}
const Jn = -7169;
function U(e, t) {
  e.f = e.f & Jn | t;
}
function Qn(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ae in e)
      Ze(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ae in n && Ze(n);
      }
  }
}
function Ze(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ze(e[r], t);
      } catch (i) {
      }
    const n = it(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = It(n);
      for (let i in r) {
        const l = r[i].get;
        if (l)
          try {
            l.call(e);
          } catch (f) {
          }
      }
    }
  }
}
let $n = !1;
function oe(e, t = null, n) {
  if (typeof e != "object" || e === null || ae in e)
    return e;
  const r = it(e);
  if (r !== Cn && r !== An)
    return e;
  var i = /* @__PURE__ */ new Map(), l = nt(e), f = P(0);
  l && i.set("length", P(
    /** @type {any[]} */
    e.length
  ));
  var v;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, s, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && Rn();
        var c = i.get(s);
        return c === void 0 ? (c = P(a.value), i.set(s, c)) : D(c, oe(a.value, v)), !0;
      },
      deleteProperty(u, s) {
        var a = i.get(s);
        if (a === void 0)
          s in u && i.set(s, P(O));
        else {
          if (l && typeof s == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), o = Number(s);
            Number.isInteger(o) && o < c.v && D(c, o);
          }
          D(a, O), yt(f);
        }
        return !0;
      },
      get(u, s, a) {
        var p;
        if (s === ae)
          return e;
        var c = i.get(s), o = s in u;
        if (c === void 0 && (!o || (p = we(u, s)) != null && p.writable) && (c = P(oe(o ? u[s] : O, v)), i.set(s, c)), c !== void 0) {
          var d = C(c);
          return d === O ? void 0 : d;
        }
        return Reflect.get(u, s, a);
      },
      getOwnPropertyDescriptor(u, s) {
        var a = Reflect.getOwnPropertyDescriptor(u, s);
        if (a && "value" in a) {
          var c = i.get(s);
          c && (a.value = C(c));
        } else if (a === void 0) {
          var o = i.get(s), d = o == null ? void 0 : o.v;
          if (o !== void 0 && d !== O)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return a;
      },
      has(u, s) {
        var d;
        if (s === ae)
          return !0;
        var a = i.get(s), c = a !== void 0 && a.v !== O || Reflect.has(u, s);
        if (a !== void 0 || E !== null && (!c || (d = we(u, s)) != null && d.writable)) {
          a === void 0 && (a = P(c ? oe(u[s], v) : O), i.set(s, a));
          var o = C(a);
          if (o === O)
            return !1;
        }
        return c;
      },
      set(u, s, a, c) {
        var A;
        var o = i.get(s), d = s in u;
        if (l && s === "length")
          for (var p = a; p < /** @type {Source<number>} */
          o.v; p += 1) {
            var g = i.get(p + "");
            g !== void 0 ? D(g, O) : p in u && (g = P(O), i.set(p + "", g));
          }
        o === void 0 ? (!d || (A = we(u, s)) != null && A.writable) && (o = P(void 0), D(o, oe(a, v)), i.set(s, o)) : (d = o.v !== O, D(o, oe(a, v)));
        var _ = Reflect.getOwnPropertyDescriptor(u, s);
        if (_ != null && _.set && _.set.call(c, a), !d) {
          if (l && typeof s == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), m = Number(s);
            Number.isInteger(m) && m >= h.v && D(h, m + 1);
          }
          yt(f);
        }
        return !0;
      },
      ownKeys(u) {
        C(f);
        var s = Reflect.ownKeys(u).filter((o) => {
          var d = i.get(o);
          return d === void 0 || d.v !== O;
        });
        for (var [a, c] of i)
          c.v !== O && !(a in u) && s.push(a);
        return s;
      },
      setPrototypeOf() {
        Ln();
      }
    }
  );
}
function yt(e, t = 1) {
  D(e, e.v + t);
}
var bt, Zt, Jt;
function er() {
  if (bt === void 0) {
    bt = window;
    var e = Element.prototype, t = Node.prototype;
    Zt = we(t, "firstChild").get, Jt = we(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Qt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return Zt.call(e);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return Jt.call(e);
}
function L(e, t) {
  return /* @__PURE__ */ ot(e);
}
function ee(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ at(r);
  return r;
}
function tr(e) {
  e.textContent = "";
}
function nr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ve(e, t, n, r = !0) {
  var a;
  var i = (e & Ee) !== 0, l = E, f = {
    ctx: T,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | G,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n) {
    var v = fe;
    try {
      gt(!0), st(f), f.f |= kn;
    } catch (c) {
      throw K(f), c;
    } finally {
      gt(v);
    }
  } else t !== null && je(f);
  var u = n && f.deps === null && f.first === null && f.nodes_start === null && f.teardown === null && (f.f & (Nt | Ne)) === 0;
  if (!u && !i && r && (l !== null && nr(f, l), k !== null && k.f & B)) {
    var s = (
      /** @type {Derived} */
      k
    );
    ((a = s.effects) != null ? a : s.effects = []).push(f);
  }
  return f;
}
function rr(e) {
  const t = ve(xe, null, !1);
  return U(t, I), t.teardown = e, t;
}
function ir(e) {
  const t = ve(Ee, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? rn(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function ft(e) {
  return ve(At, e, !1);
}
function $t(e) {
  return ve(xe, e, !0);
}
function Je(e, t = [], n = De) {
  const r = t.map(n);
  return ut(() => e(...r.map(C)));
}
function ut(e, t = 0) {
  return ve(xe | tt | t, e, !0);
}
function Ue(e, t = !0) {
  return ve(xe | re, e, !0, t);
}
function en(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = k;
    te(null);
    try {
      t.call(null);
    } finally {
      te(n);
    }
  }
}
function tn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    K(n, t), n = r;
  }
}
function lr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & re || K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  if ((t || e.f & xn) && e.nodes_start !== null) {
    for (var r = e.nodes_start, i = e.nodes_end; r !== null; ) {
      var l = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(r)
      );
      r.remove(), r = l;
    }
    n = !0;
  }
  tn(e, t && !n), Me(e, 0), U(e, qe);
  var f = e.transitions;
  if (f !== null)
    for (const u of f)
      u.stop();
  en(e);
  var v = e.parent;
  v !== null && v.first !== null && nn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function nn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function rn(e, t) {
  var n = [];
  ct(e, n, !0), ln(n, () => {
    K(e), t && t();
  });
}
function ln(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function ct(e, t, n) {
  if (!(e.f & W)) {
    if (e.f ^= W, e.transitions !== null)
      for (const f of e.transitions)
        (f.is_global || n) && t.push(f);
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Tt) !== 0 || (r.f & re) !== 0;
      ct(r, t, l ? n : !1), r = i;
    }
  }
}
function sn(e) {
  on(e, !0);
}
function on(e, t) {
  if (e.f & W) {
    e.f ^= W, e.f & I || (e.f ^= I), ze(e) && (U(e, G), je(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Tt) !== 0 || (n.f & re) !== 0;
      on(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let T = null;
function kt(e) {
  T = e;
}
function vt(e, t = !1, n) {
  T = {
    p: T,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Fe && !t && (T.l = {
    s: null,
    u: null,
    r1: [],
    r2: P(!1)
  });
}
function dt(e) {
  const t = T;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const f = t.e;
    if (f !== null) {
      var n = E, r = k;
      t.e = null;
      try {
        for (var i = 0; i < f.length; i++) {
          var l = f[i];
          ne(l.effect), te(l.reaction), ft(l.fn);
        }
      } finally {
        ne(n), te(r);
      }
    }
    T = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ve() {
  return !Fe || T !== null && T.l === null;
}
const sr = ["touchstart", "touchmove"];
function or(e) {
  return sr.includes(e);
}
function ar(e) {
  var t = k, n = E;
  te(null), ne(null);
  try {
    return e();
  } finally {
    te(t), ne(n);
  }
}
const an = /* @__PURE__ */ new Set(), Qe = /* @__PURE__ */ new Set();
function fn(e, t, n, r = {}) {
  function i(l) {
    if (r.capture || me.call(t, l), !l.cancelBubble)
      return ar(() => n == null ? void 0 : n.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? lt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function _e(e, t, n, r = {}) {
  var i = fn(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r);
  };
}
function xt(e, t, n, r, i) {
  var l = { capture: r, passive: i }, f = fn(e, t, n, l);
  (t === document.body || t === window || t === document) && rr(() => {
    t.removeEventListener(e, f, l);
  });
}
function un(e) {
  for (var t = 0; t < e.length; t++)
    an.add(e[t]);
  for (var n of Qe)
    n(e);
}
function me(e) {
  var m;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  ), f = 0, v = e.__root;
  if (v) {
    var u = i.indexOf(v);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    u <= s && (f = u);
  }
  if (l = /** @type {Element} */
  i[f] || e.target, l !== t) {
    Sn(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var a = k, c = E;
    te(null), ne(null);
    try {
      for (var o, d = []; l !== null; ) {
        var p = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var g = l["__" + r];
          if (g !== void 0 && !/** @type {any} */
          l.disabled)
            if (nt(g)) {
              var [_, ...h] = g;
              _.apply(l, [e, ...h]);
            } else
              g.call(l, e);
        } catch (A) {
          o ? d.push(A) : o = A;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        l = p;
      }
      if (o) {
        for (let A of d)
          queueMicrotask(() => {
            throw A;
          });
        throw o;
      }
    } finally {
      e.__root = t, delete e.currentTarget, te(a), ne(c);
    }
  }
}
function cn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function vn(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function pt(e, t) {
  var n = (t & bn) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = cn(i ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ ot(r));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return vn(l, l), l;
  };
}
function $e(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function et(e, t) {
  var r;
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== ((r = e.__t) != null ? r : e.__t = e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function fr(e, t) {
  return ur(e, t);
}
const se = /* @__PURE__ */ new Map();
function ur(e, { target: t, anchor: n, props: r = {}, events: i, context: l, intro: f = !0 }) {
  er();
  var v = /* @__PURE__ */ new Set(), u = (c) => {
    for (var o = 0; o < c.length; o++) {
      var d = c[o];
      if (!v.has(d)) {
        v.add(d);
        var p = or(d);
        t.addEventListener(d, me, { passive: p });
        var g = se.get(d);
        g === void 0 ? (document.addEventListener(d, me, { passive: p }), se.set(d, 1)) : se.set(d, g + 1);
      }
    }
  };
  u(rt(an)), Qe.add(u);
  var s = void 0, a = ir(() => {
    var c = n != null ? n : t.appendChild(Qt());
    return Ue(() => {
      if (l) {
        vt({});
        var o = (
          /** @type {ComponentContext} */
          T
        );
        o.c = l;
      }
      i && (r.$$events = i), s = e(c, r) || {}, l && dt();
    }), () => {
      var p;
      for (var o of v) {
        t.removeEventListener(o, me);
        var d = (
          /** @type {number} */
          se.get(o)
        );
        --d === 0 ? (document.removeEventListener(o, me), se.delete(o)) : se.set(o, d);
      }
      Qe.delete(u), c !== n && ((p = c.parentNode) == null || p.removeChild(c));
    };
  });
  return cr.set(s, a), s;
}
let cr = /* @__PURE__ */ new WeakMap();
function vr(e, t) {
  return t;
}
function dr(e, t, n, r) {
  for (var i = [], l = t.length, f = 0; f < l; f++)
    ct(t[f].e, i, !0);
  var v = l > 0 && i.length === 0 && n !== null;
  if (v) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    tr(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), Q(e, t[0].prev, t[l - 1].next);
  }
  ln(i, () => {
    for (var s = 0; s < l; s++) {
      var a = t[s];
      v || (r.delete(a.k), Q(e, a.prev, a.next)), K(a.e, !v);
    }
  });
}
function pr(e, t, n, r, i, l = null) {
  var f = e, v = { items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      e
    );
    f = u.appendChild(Qt());
  }
  var s = null, a = !1, c = /* @__PURE__ */ Bn(() => {
    var o = n();
    return nt(o) ? o : o == null ? [] : rt(o);
  });
  ut(() => {
    var o = C(c), d = o.length;
    a && d === 0 || (a = d === 0, _r(o, v, f, i, t, r, n), l !== null && (d === 0 ? s ? sn(s) : s = Ue(() => l(f)) : s !== null && rn(s, () => {
      s = null;
    })), C(c));
  });
}
function _r(e, t, n, r, i, l, f) {
  var v = e.length, u = t.items, s = t.first, a = s, c, o = null, d = [], p = [], g, _, h, m;
  for (m = 0; m < v; m += 1) {
    if (g = e[m], _ = l(g, m), h = u.get(_), h === void 0) {
      var A = a ? (
        /** @type {TemplateNode} */
        a.e.nodes_start
      ) : n;
      o = mr(
        A,
        t,
        o,
        o === null ? t.first : o.next,
        g,
        _,
        m,
        r,
        i,
        f
      ), u.set(_, o), d = [], p = [], a = o.next;
      continue;
    }
    if (hr(h, g, m), h.e.f & W && sn(h.e), h !== a) {
      if (c !== void 0 && c.has(h)) {
        if (d.length < p.length) {
          var F = p[0], z;
          o = F.prev;
          var w = d[0], y = d[d.length - 1];
          for (z = 0; z < d.length; z += 1)
            Et(d[z], F, n);
          for (z = 0; z < p.length; z += 1)
            c.delete(p[z]);
          Q(t, w.prev, y.next), Q(t, o, w), Q(t, y, F), a = F, o = y, m -= 1, d = [], p = [];
        } else
          c.delete(h), Et(h, a, n), Q(t, h.prev, h.next), Q(t, h, o === null ? t.first : o.next), Q(t, o, h), o = h;
        continue;
      }
      for (d = [], p = []; a !== null && a.k !== _; )
        a.e.f & W || (c != null ? c : c = /* @__PURE__ */ new Set()).add(a), p.push(a), a = a.next;
      if (a === null)
        continue;
      h = a;
    }
    d.push(h), o = h, a = h.next;
  }
  if (a !== null || c !== void 0) {
    for (var x = c === void 0 ? [] : rt(c); a !== null; )
      a.e.f & W || x.push(a), a = a.next;
    var S = x.length;
    if (S > 0) {
      var V = v === 0 ? n : null;
      dr(t, x, V, u);
    }
  }
  E.first = t.first && t.first.e, E.last = o && o.e;
}
function hr(e, t, n, r) {
  Mt(e.v, t), e.i = n;
}
function mr(e, t, n, r, i, l, f, v, u, s) {
  var a = (u & gn) !== 0, c = (u & yn) === 0, o = a ? c ? /* @__PURE__ */ qn(i) : P(i) : i, d = u & wn ? P(f) : f, p = {
    i: d,
    v: o,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = Ue(() => v(e, o, d, s), $n), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Et(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== r; ) {
    var f = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(l)
    );
    i.before(l), l = f;
  }
}
function Q(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function gr(e, t, n, r, i) {
  var l = e, f = "", v;
  ut(() => {
    var u;
    f !== (f = (u = t()) != null ? u : "") && (v !== void 0 && (K(v), v = void 0), f !== "" && (v = Ue(() => {
      var s = f + "", a = cn(s);
      vn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(a),
        /** @type {TemplateNode} */
        a.lastChild
      ), l.before(a);
    })));
  });
}
function dn(e, t) {
  lt(() => {
    var i;
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        (i = n.head) != null ? i : (
          /** @type {Document} */
          n.ownerDocument.head
        )
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const l = document.createElement("style");
      l.id = t.hash, l.textContent = t.code, r.appendChild(l);
    }
  });
}
function wr(e, t, n) {
  ft(() => {
    var r = Gt(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, l = (
        /** @type {any} */
        {}
      );
      $t(() => {
        var f = n();
        Qn(f), i && Dt(l, f) && (l = f, r.update(f));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function he(e, t, n, r) {
  var l;
  var i = (l = e.__attributes) != null ? l : e.__attributes = {};
  i[t] !== (i[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[En] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && yr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var zt = /* @__PURE__ */ new Map();
function yr(e) {
  var t = zt.get(e.nodeName);
  if (t) return t;
  zt.set(e.nodeName, t = []);
  for (var n, r = e, i = Element.prototype; i !== r; ) {
    n = It(r);
    for (var l in n)
      n[l].set && t.push(l);
    r = it(r);
  }
  return t;
}
function Se(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function St(e, t) {
  return e === t || (e == null ? void 0 : e[ae]) === t;
}
function ge(e = {}, t, n, r) {
  return ft(() => {
    var i, l;
    return $t(() => {
      i = l, l = [], Gt(() => {
        e !== n(...l) && (t(e, ...l), i && St(n(...i), e) && t(null, ...i));
      });
    }), () => {
      lt(() => {
        l && St(n(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
function Ye(e, t = { enabled: !0 }) {
  let { parent: n, normalizedDelta: r, handle: i, enabled: l, ignore: f, cursor: v } = Ct(e, t);
  const u = { x: 0, y: 0 }, s = { top: 0, left: 0 };
  let a = 0, c = 0;
  function o() {
    return f ? Array.from(i.querySelectorAll(f)) : [];
  }
  function d(w) {
    u.x = w.clientX, u.y = w.clientY;
  }
  function p({ top: w, left: y }) {
    s.top = w, s.left = y;
  }
  function g(w) {
    var pe;
    const y = e.getBoundingClientRect();
    let x;
    if (r.x)
      switch ((pe = r.x) == null ? void 0 : pe.unit) {
        case "%":
          x = r.x.value * y.width / 100;
          break;
        case "px":
          x = r.x.value;
          break;
      }
    let S;
    if (r.y)
      switch (r.y.unit) {
        case "%":
          S = r.y.value * y.height / 100;
          break;
        case "px":
          S = r.y.value;
          break;
      }
    const V = w.clientX - u.x, de = w.clientY - u.y;
    d(w);
    let q = s.left;
    x !== 0 && (q += V);
    let R = s.top;
    if (S !== 0 && (R += de), n) {
      let b;
      if (n === "screen" ? b = {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth
      } : b = n.getBoundingClientRect(), x !== 0) {
        const Z = x != null ? x : 0, J = y.left + V + Z;
        if (J < b.left)
          q += b.left - J;
        else {
          const ie = y.right + V - Z;
          ie > b.right && (q -= ie - b.right);
        }
      }
      if (S !== 0) {
        const Z = S != null ? S : 0, J = y.top + de + Z;
        if (J < b.top)
          R += b.top - J;
        else {
          const ie = y.bottom + de - Z;
          ie > b.bottom && (R -= ie - b.bottom);
        }
      }
    } else {
      if (x) {
        const b = a + q - s.left;
        b > x ? q -= b - x : b < -x && (q -= b + x);
      }
      if (S) {
        const b = c + R - s.top;
        b > S ? R -= b - S : b < -S && (R -= b + S);
      }
    }
    q !== s.left && (e.style.left = `${q}px`), R !== s.top && (e.style.top = `${R}px`), a += q - s.left, c += R - s.top, p({ top: R, left: q });
  }
  let _ = [];
  function h() {
    document.body.style.userSelect = "", v && (document.body.style.cursor === "grabbing" && document.body.style.removeProperty("cursor"), i.style.cursor = "grab"), _.forEach((y) => y()), _ = [];
    const w = { node: e, position: s };
    e.dispatchEvent(new CustomEvent("movableend", { detail: w }));
  }
  function m(w) {
    var pe, b, Z, J;
    if (o().some((ie) => ie.isSameNode(
      /** @type {HTMLElement} */
      w.target
    )))
      return;
    const x = getComputedStyle(e), S = "^[-0-9]+", V = parseInt((b = (pe = x.getPropertyValue("left").match(S)) == null ? void 0 : pe[0]) != null ? b : "0"), de = parseInt((J = (Z = x.getPropertyValue("top").match(S)) == null ? void 0 : Z[0]) != null ? J : "0");
    p({ left: V, top: de });
    const q = { node: e, position: s };
    e.dispatchEvent(new CustomEvent("movablestart", { detail: q }));
    const R = x.getPropertyValue("position");
    R !== "relative" && R !== "absolute" && R !== "fixed" && (e.style.position = "relative"), d(w), document.body.style.userSelect = "none", v && (document.body.style.cursor = "grabbing", i.style.cursor = "grabbing"), _.push(_e(
      window,
      "pointermove",
      /** @type {EventListener} */
      g
    )), _.push(_e(window, "pointerup", h)), _.push(_e(window, "pointercancel", h));
  }
  function A() {
    if (i.style.touchAction = "none", v) {
      i.style.cursor = "grab";
      const w = o();
      for (const y of w)
        y.style.cursor || (y.style.cursor = "auto");
    }
  }
  function F() {
    if (i.style.removeProperty("touch-action"), v) {
      (i == null ? void 0 : i.style.cursor) === "grab" && i.style.removeProperty("cursor");
      const w = o();
      for (const y of w)
        y.style.cursor === "auto" && y.style.removeProperty("cursor");
    }
  }
  let z;
  return l && (z = _e(i, "pointerdown", m, { capture: !0 }), wt().then(() => {
    A();
  })), {
    update(w) {
      F(), z == null || z(), { parent: n, normalizedDelta: r, handle: i, enabled: l, ignore: f, cursor: v } = Ct(e, w), l && (z = _e(i, "pointerdown", m, { capture: !0 }), wt().then(() => {
        A();
      }));
    },
    destroy() {
      z == null || z(), F();
    }
  };
}
function br(e) {
  let t, n;
  return e && (typeof e == "number" ? t = n = {
    unit: "px",
    value: 0
  } : typeof e == "string" ? t = n = {
    unit: Xe(e),
    value: parseInt(e, 10)
  } : (e.x === 0 ? t = {
    unit: "px",
    value: 0
  } : e.x !== void 0 && (t = {
    unit: Xe(e.x, "x"),
    value: parseInt(e.x, 10)
  }), e.y === 0 ? n = {
    unit: "px",
    value: 0
  } : e.y !== void 0 && (n = {
    unit: Xe(e.y, "y"),
    value: parseInt(e.y, 10)
  }))), { x: t, y: n };
}
function Xe(e, t = void 0) {
  let n = "px";
  if (e === "0" && (n = "px"), e.slice(-1) === "%")
    n = "%";
  else if (e.slice(-2) === "px")
    n = "px";
  else
    throw new Error(`Invalid delta ${t != null ? t : ""} unit. Only 'px' and '%' are supported.`);
  return n;
}
function Ct(e, t = {}) {
  var n, r, i, l, f, v;
  return {
    enabled: (n = t.enabled) != null ? n : !0,
    parent: (r = t.limit) == null ? void 0 : r.parent,
    normalizedDelta: br((i = t.limit) == null ? void 0 : i.delta),
    handle: (f = (l = t.handle) != null ? l : t.trigger) != null ? f : e,
    ignore: (t.ignore ? typeof t.ignore == "string" ? [t.ignore] : t.ignore : []).join(","),
    cursor: (v = t.cursor) != null ? v : !0
  };
}
const kr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="0.75em" height="0.75em" overflow="visible" stroke="currentColor" stroke-width="2" >
   <line x1="0" y1="0" x2="50" y2="50" />
   <line x1="50" y1="0" x2="0" y2="50" />
</svg>`;
Pn();
const Ce = (e, t, n) => {
  D(t, !1), D(n, !0), setTimeout(
    () => {
      D(n, !1);
    },
    300
  );
};
var xr = /* @__PURE__ */ pt('<div id="modal-wrapper" class="svelte-9zgedm"><div class="modal__mask svelte-9zgedm"></div> <div class="modal__content svelte-9zgedm"><div class="modal__content-header svelte-9zgedm"><span class="title svelte-9zgedm"> </span> <div class="close svelte-9zgedm"><!></div></div> <div class="content svelte-9zgedm"></div> <div class="footer svelte-9zgedm"><button class="btn cancel svelte-9zgedm">cancel</button> <button class="btn confirm svelte-9zgedm">confirm</button></div></div></div>');
const Er = {
  hash: "svelte-9zgedm",
  code: `#modal-wrapper.svelte-9zgedm {visibility:hidden;font-size:16px;}#modal-wrapper.active.svelte-9zgedm {visibility:visible;}#modal-wrapper.svelte-9zgedm .modal__mask:where(.svelte-9zgedm) {width:100%;height:100%;position:fixed;z-index:10001;top:0;left:0;background-color:#00000073;visibility:hidden;opacity:0;transition:all 0.3s ease;}#modal-wrapper.svelte-9zgedm .modal__mask.active:where(.svelte-9zgedm) {visibility:visible;opacity:1;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) {position:fixed;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:10001;background-color:#fff;width:fit-content;height:fit-content;max-height:25em;margin:auto;border-radius:0.3125em;visibility:hidden;transform:scale(0.2);transform-origin:150px 150px;overflow:hidden;color:rgba(0, 0, 0, 0.85);line-height:normal;transition:all 0.3s ease;opacity:0;}#modal-wrapper.svelte-9zgedm .modal__content.active:where(.svelte-9zgedm) {visibility:visible;transform:scale(1);opacity:1;}#modal-wrapper.svelte-9zgedm .modal__content.closing:where(.svelte-9zgedm) {
  animation: svelte-9zgedm-closeAnimation 0.3s forwards;}#modal-wrapper.svelte-9zgedm .modal__content-header:where(.svelte-9zgedm) {border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;padding:0.5em 0.75em;align-items:center;}#modal-wrapper.svelte-9zgedm .modal__content-header:where(.svelte-9zgedm) .title:where(.svelte-9zgedm) {font-size:1em;opacity:0.65;}#modal-wrapper.svelte-9zgedm .modal__content-header:where(.svelte-9zgedm) .close:where(.svelte-9zgedm) {align-self:center;font-size:1em;cursor:pointer;display:inline-block;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) .content:where(.svelte-9zgedm) {overflow:auto;min-width:25em;min-height:12em;padding:0.7em;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) .footer:where(.svelte-9zgedm) {display:flex;justify-content:flex-end;gap:10px;padding:10px;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) .footer:where(.svelte-9zgedm) .btn:where(.svelte-9zgedm) {padding:0.5em 1em;border-radius:0.25em;cursor:pointer;font-size:0.875em;border:none;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) .footer:where(.svelte-9zgedm) .btn.cancel:where(.svelte-9zgedm) {background-color:#f0f0f0;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) .footer:where(.svelte-9zgedm) .btn.confirm:where(.svelte-9zgedm) {background-color:#1890ff;color:#fff;}#modal-wrapper.svelte-9zgedm .modal__content:where(.svelte-9zgedm) .footer:where(.svelte-9zgedm) .btn:where(.svelte-9zgedm):hover {opacity:0.9;}
@keyframes svelte-9zgedm-closeAnimation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}`
};
function zr(e, t) {
  vt(t, !0), dn(e, Er);
  let n = Le(!1), r = Le(!1), i;
  const l = () => {
    D(n, !0);
    const h = i.querySelector(".content");
    t.dom && (h.innerHTML = "", h.appendChild(t.dom));
  };
  var f = xr(), v = L(f);
  v.__click = [Ce, n, r];
  var u = ee(v, 2), s = L(u), a = L(s), c = L(a), o = ee(a, 2);
  o.__click = [Ce, n, r];
  var d = L(o);
  gr(d, () => kr);
  var p = ee(s, 4), g = L(p);
  g.__click = [Ce, n, r];
  var _ = ee(g, 2);
  return _.__click = [Ce, n, r], ge(f, (h) => i = h, () => i), Je(() => {
    Se(f, "active", C(n)), Se(v, "active", C(n)), Se(u, "active", C(n)), Se(u, "closing", C(r)), et(c, t.title);
  }), $e(e, f), dt({ open: l });
}
un(["click"]);
var Sr = (e, t, n) => t(n()), Cr = /* @__PURE__ */ pt('<div class="feat svelte-sspk90"><span class="feat__logo svelte-sspk90"><img alt="logo" draggable="false" class="svelte-sspk90"></span> <div class="feat__tooltip svelte-sspk90"><div class="feat__tooltip-name svelte-sspk90"> </div> <div class="feat__tooltip-desc svelte-sspk90"> </div></div></div>'), Ar = /* @__PURE__ */ pt('<div id="whale" class="svelte-sspk90"><div class="menu"><div class="menu-logo animate svelte-sspk90"><img draggable="false" alt="brand" class="svelte-sspk90"></div></div> <div class="sub-menu animate svelte-sspk90"></div> <!></div>');
const Tr = {
  hash: "svelte-sspk90",
  code: "#whale.svelte-sspk90 {position:fixed;z-index:10000;right:0px;bottom:160px;font-size:16px;color:rgba(103, 92, 92, 0.85);line-height:normal;display:block;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}#whale.hover .menu-logo.svelte-sspk90 {opacity:0.85;transform:translateX(0px);}#whale.hover .menu-logo.svelte-sspk90::before {transform:translateX(125%) skew(-45deg);transition:transform 1s ease;}#whale.hover .sub-menu.svelte-sspk90 {opacity:0.85;transform:translateX(1.375em);}#whale.svelte-sspk90 .animate:where(.svelte-sspk90) {transition:transform ease-out 250ms, -webkit-transform ease-out 250ms, opacity ease 300ms;}#whale.svelte-sspk90 .menu-logo:where(.svelte-sspk90) {display:flex;flex-shrink:0;align-items:center;width:100%;height:100%;margin-left:0.625em;width:3.5em;height:2.25em;line-height:5em;border-top-left-radius:3.125em;border-bottom-left-radius:3.125em;background:#fff;box-shadow:0px 3px 10px 3px rgba(0, 0, 0, 0.2);opacity:0.65;transform:translate(1.25em);-webkit-tap-highlight-color:transparent;overflow:hidden;}#whale.svelte-sspk90 .menu-logo:where(.svelte-sspk90)::before {content:'';position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;background-image:linear-gradient(90deg, rgba(255, 255, 255, 0), #fff, rgba(255, 255, 255, 0));transform:translateX(-125%) skew(-45deg);}#whale.svelte-sspk90 .menu-logo:where(.svelte-sspk90) img:where(.svelte-sspk90) {width:1.25em;height:1.25em;margin-left:0.625em;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) {margin-top:0.625em;margin-right:1em;border-radius:1.125em;box-shadow:0px 2px 10px 0px #00000014;border:1px solid #f6f6f6;background:#fcfcfc;cursor:pointer;transform:translateX(4.375em);width:2.25em;-webkit-tap-highlight-color:transparent;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat:where(.svelte-sspk90) {position:relative;display:flex;justify-content:center;align-items:center;width:2.25em;height:2.25em;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat:where(.svelte-sspk90):hover .feat__tooltip:where(.svelte-sspk90) {display:block;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat__logo:where(.svelte-sspk90) {width:2.25em;height:2.25em;display:flex;align-items:center;justify-content:center;cursor:pointer;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat__logo:where(.svelte-sspk90) img:where(.svelte-sspk90) {width:1.125em;height:1.125em;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat__tooltip:where(.svelte-sspk90) {display:none;position:absolute;right:3.125em;width:fit-content;background-color:rgba(0, 0, 0, 0.85);color:#fff;border-radius:0.625em;padding:0.625em 0.9375em;font-size:0.875em;cursor:default;}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat__tooltip-name:where(.svelte-sspk90) {font-size:0.875em;color:rgba(255, 255, 255, 0.95);}#whale.svelte-sspk90 .sub-menu:where(.svelte-sspk90) .feat__tooltip-desc:where(.svelte-sspk90):not(:empty) {font-size:0.8125em;color:rgba(255, 255, 255, 0.85);width:12.5em;margin-top:0.125em;}"
};
function Nr(e, t) {
  dn(e, Tr);
  const n = window.config;
  let r = Le(void 0), i, l, f = Le(void 0);
  const v = (_) => {
    D(r, oe(_)), i.open();
  };
  var u = Ar(), s = L(u), a = L(s), c = L(a);
  ge(s, (_) => D(f, _), () => C(f)), ge(s, (_) => l = _, () => l);
  var o = ee(s, 2);
  pr(o, 21, () => Array.from((n == null ? void 0 : n.entries()) || []), vr, (_, h) => {
    let m = () => C(h)[1];
    var A = Cr();
    A.__click = [Sr, v, m];
    var F = L(A), z = L(F), w = ee(F, 2), y = L(w), x = L(y), S = ee(y, 2), V = L(S);
    Je(() => {
      he(A, "data-tool-name", m().name), he(F, "data-tool-name", m().name), he(z, "data-tool-name", m().name), he(z, "src", m().logo), et(x, m().name || ""), et(V, m().desc || "");
    }), $e(_, A);
  });
  var d = ee(o, 2);
  const p = /* @__PURE__ */ De(() => {
    var _;
    return (_ = C(r)) == null ? void 0 : _.title;
  }), g = /* @__PURE__ */ De(() => {
    var _;
    return (_ = C(r)) == null ? void 0 : _.dom;
  });
  ge(
    zr(d, {
      get title() {
        return C(p);
      },
      get dom() {
        return C(g);
      }
    }),
    (_) => i = _,
    () => i
  ), wr(u, (_, h) => Ye == null ? void 0 : Ye(_, h), () => ({
    handle: C(f),
    limit: { delta: { x: 0 }, parent: "screen" },
    cursor: !1
  })), ge(u, (_) => l = _, () => l), Je(() => he(c, "src", t.mainLogo)), xt("mouseleave", u, () => l.classList.remove("hover")), xt("mouseenter", s, () => l.classList.add("hover")), $e(e, u);
}
un(["click"]);
function Ir(e, t) {
  vt(t, !0);
  const n = window;
  n.config || (n.config = /* @__PURE__ */ new Map()), n.config.set(t.options.name, t.options), Nr(e, {
    get mainLogo() {
      return t.globalConfig.mainLogo;
    }
  }), dt();
}
const ye = class ye {
  constructor(t) {
    We(this, "containerID", "whale-container");
    this.init(t);
  }
  static config(t) {
    ye.globalConfig = t;
  }
  init(t) {
    const n = document.getElementById(this.containerID);
    n && n.remove();
    const r = document.createElement("div");
    r.id = this.containerID;
    const i = r.attachShadow({ mode: "open" });
    document.documentElement.appendChild(r), fr(Ir, {
      target: i,
      props: {
        options: ht({}, t),
        globalConfig: ye.globalConfig
      }
    });
  }
};
We(ye, "globalConfig");
let Pe = ye;
const Lr = (e) => (new Pe(e), window.Whale), Dr = (e) => (Pe.config(e), window.Whale);
export {
  Dr as config,
  Lr as createWhale
};
//# sourceMappingURL=index.js.map
