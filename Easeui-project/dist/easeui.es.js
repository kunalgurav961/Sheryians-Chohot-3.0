import * as fe from "react";
import de, { useRef as ze, useEffect as ot, useState as or, forwardRef as Br, createElement as wr } from "react";
var Wt = { exports: {} }, Ct = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function Zi() {
  if (ln) return Ct;
  ln = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, n, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), n.key !== void 0 && (o = "" + n.key), "key" in n) {
      i = {};
      for (var a in n)
        a !== "key" && (i[a] = n[a]);
    } else i = n;
    return n = i.ref, {
      $$typeof: s,
      type: r,
      key: o,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return Ct.Fragment = e, Ct.jsx = t, Ct.jsxs = t, Ct;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Ji() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === z ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case d:
          return "Fragment";
        case b:
          return "Profiler";
        case _:
          return "StrictMode";
        case g:
          return "Suspense";
        case S:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case m:
            return "Portal";
          case w:
            return (v.displayName || "Context") + ".Provider";
          case y:
            return (v._context.displayName || "Context") + ".Consumer";
          case T:
            var M = v.render;
            return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case C:
            return M = v.displayName || null, M !== null ? M : s(v.type) || "Memo";
          case x:
            M = v._payload, v = v._init;
            try {
              return s(v(M));
            } catch {
            }
        }
      return null;
    }
    function e(v) {
      return "" + v;
    }
    function t(v) {
      try {
        e(v);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var N = M.error, D = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return N.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), e(v);
      }
    }
    function r(v) {
      if (v === d) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === x)
        return "<...>";
      try {
        var M = s(v);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var v = B.A;
      return v === null ? null : v.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(v) {
      if (I.call(v, "key")) {
        var M = Object.getOwnPropertyDescriptor(v, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function a(v, M) {
      function N() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: N,
        configurable: !0
      });
    }
    function l() {
      var v = s(this.type);
      return L[v] || (L[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function c(v, M, N, D, V, H, ct, Q) {
      return N = H.ref, v = {
        $$typeof: p,
        type: v,
        key: M,
        props: H,
        _owner: V
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ct
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function u(v, M, N, D, V, H, ct, Q) {
      var ne = M.children;
      if (ne !== void 0)
        if (D)
          if (Y(ne)) {
            for (D = 0; D < ne.length; D++)
              f(ne[D]);
            Object.freeze && Object.freeze(ne);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ne);
      if (I.call(M, "key")) {
        ne = s(v);
        var Re = Object.keys(M).filter(function(St) {
          return St !== "key";
        });
        D = 0 < Re.length ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}", Oe[ne + D] || (Re = 0 < Re.length ? "{" + Re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          ne,
          Re,
          ne
        ), Oe[ne + D] = !0);
      }
      if (ne = null, N !== void 0 && (t(N), ne = "" + N), o(M) && (t(M.key), ne = "" + M.key), "key" in M) {
        N = {};
        for (var Be in M)
          Be !== "key" && (N[Be] = M[Be]);
      } else N = M;
      return ne && a(
        N,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), c(
        v,
        ne,
        H,
        V,
        n(),
        N,
        ct,
        Q
      );
    }
    function f(v) {
      typeof v == "object" && v !== null && v.$$typeof === p && v._store && (v._store.validated = 1);
    }
    var h = de, p = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), w = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), B = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, Y = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var G, L = {}, U = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), E = $(r(i)), Oe = {};
    Pt.Fragment = d, Pt.jsx = function(v, M, N, D, V) {
      var H = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        v,
        M,
        N,
        !1,
        D,
        V,
        H ? Error("react-stack-top-frame") : U,
        H ? $(r(v)) : E
      );
    }, Pt.jsxs = function(v, M, N, D, V) {
      var H = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        v,
        M,
        N,
        !0,
        D,
        V,
        H ? Error("react-stack-top-frame") : U,
        H ? $(r(v)) : E
      );
    };
  })()), Pt;
}
var un;
function Qi() {
  return un || (un = 1, process.env.NODE_ENV === "production" ? Wt.exports = Zi() : Wt.exports = Ji()), Wt.exports;
}
var P = Qi();
function dn(s, e) {
  if (typeof s == "function")
    return s(e);
  s != null && (s.current = e);
}
function Ki(...s) {
  return (e) => {
    let t = !1;
    const r = s.map((n) => {
      const i = dn(n, e);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const i = r[n];
          typeof i == "function" ? i() : dn(s[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function es(s) {
  const e = /* @__PURE__ */ ts(s), t = fe.forwardRef((r, n) => {
    const { children: i, ...o } = r, a = fe.Children.toArray(i), l = a.find(ns);
    if (l) {
      const c = l.props.children, u = a.map((f) => f === l ? fe.Children.count(c) > 1 ? fe.Children.only(null) : fe.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ P.jsx(e, { ...o, ref: n, children: fe.isValidElement(c) ? fe.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ P.jsx(e, { ...o, ref: n, children: i });
  });
  return t.displayName = `${s}.Slot`, t;
}
var ar = /* @__PURE__ */ es("Slot");
// @__NO_SIDE_EFFECTS__
function ts(s) {
  const e = fe.forwardRef((t, r) => {
    const { children: n, ...i } = t;
    if (fe.isValidElement(n)) {
      const o = ss(n), a = is(i, n.props);
      return n.type !== fe.Fragment && (a.ref = r ? Ki(r, o) : o), fe.cloneElement(n, a);
    }
    return fe.Children.count(n) > 1 ? fe.Children.only(null) : null;
  });
  return e.displayName = `${s}.SlotClone`, e;
}
var rs = Symbol("radix.slottable");
function ns(s) {
  return fe.isValidElement(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === rs;
}
function is(s, e) {
  const t = { ...e };
  for (const r in e) {
    const n = s[r], i = e[r];
    /^on[A-Z]/.test(r) ? n && i ? t[r] = (...a) => {
      const l = i(...a);
      return n(...a), l;
    } : n && (t[r] = n) : r === "style" ? t[r] = { ...n, ...i } : r === "className" && (t[r] = [n, i].filter(Boolean).join(" "));
  }
  return { ...s, ...t };
}
function ss(s) {
  let e = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? s.ref : (e = Object.getOwnPropertyDescriptor(s, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? s.props.ref : s.props.ref || s.ref);
}
function jn(s) {
  var e, t, r = "";
  if (typeof s == "string" || typeof s == "number") r += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var n = s.length;
    for (e = 0; e < n; e++) s[e] && (t = jn(s[e])) && (r && (r += " "), r += t);
  } else for (t in s) s[t] && (r && (r += " "), r += t);
  return r;
}
function In() {
  for (var s, e, t = 0, r = "", n = arguments.length; t < n; t++) (s = arguments[t]) && (e = jn(s)) && (r && (r += " "), r += e);
  return r;
}
const fn = (s) => typeof s == "boolean" ? `${s}` : s === 0 ? "0" : s, hn = In, De = (s, e) => (t) => {
  var r;
  if (e?.variants == null) return hn(s, t?.class, t?.className);
  const { variants: n, defaultVariants: i } = e, o = Object.keys(n).map((c) => {
    const u = t?.[c], f = i?.[c];
    if (u === null) return null;
    const h = fn(u) || fn(f);
    return n[c][h];
  }), a = t && Object.entries(t).reduce((c, u) => {
    let [f, h] = u;
    return h === void 0 || (c[f] = h), c;
  }, {}), l = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: f, className: h, ...p } = u;
    return Object.entries(p).every((m) => {
      let [d, _] = m;
      return Array.isArray(_) ? _.includes({
        ...i,
        ...a
      }[d]) : {
        ...i,
        ...a
      }[d] === _;
    }) ? [
      ...c,
      f,
      h
    ] : c;
  }, []);
  return hn(s, o, l, t?.class, t?.className);
}, Yr = "-", os = (s) => {
  const e = ls(s), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = s;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Yr);
      return a[0] === "" && a.length !== 1 && a.shift(), Ln(a, e) || as(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = t[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, Ln = (s, e) => {
  if (s.length === 0)
    return e.classGroupId;
  const t = s[0], r = e.nextPart.get(t), n = r ? Ln(s.slice(1), r) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const i = s.join(Yr);
  return e.validators.find(({
    validator: o
  }) => o(i))?.classGroupId;
}, pn = /^\[(.+)\]$/, as = (s) => {
  if (pn.test(s)) {
    const e = pn.exec(s)[1], t = e?.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, ls = (s) => {
  const {
    theme: e,
    classGroups: t
  } = s, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    kr(t[n], r, n, e);
  return r;
}, kr = (s, e, t, r) => {
  s.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? e : mn(e, n);
      i.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (cs(n)) {
        kr(n(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([i, o]) => {
      kr(o, mn(e, i), t, r);
    });
  });
}, mn = (s, e) => {
  let t = s;
  return e.split(Yr).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, cs = (s) => s.isThemeGetter, us = (s) => {
  if (s < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (i, o) => {
    t.set(i, o), e++, e > s && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let o = t.get(i);
      if (o !== void 0)
        return o;
      if ((o = r.get(i)) !== void 0)
        return n(i, o), o;
    },
    set(i, o) {
      t.has(i) ? t.set(i, o) : n(i, o);
    }
  };
}, Tr = "!", Sr = ":", ds = Sr.length, fs = (s) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = s;
  let r = (n) => {
    const i = [];
    let o = 0, a = 0, l = 0, c;
    for (let m = 0; m < n.length; m++) {
      let d = n[m];
      if (o === 0 && a === 0) {
        if (d === Sr) {
          i.push(n.slice(l, m)), l = m + ds;
          continue;
        }
        if (d === "/") {
          c = m;
          continue;
        }
      }
      d === "[" ? o++ : d === "]" ? o-- : d === "(" ? a++ : d === ")" && a--;
    }
    const u = i.length === 0 ? n : n.substring(l), f = hs(u), h = f !== u, p = c && c > l ? c - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: p
    };
  };
  if (e) {
    const n = e + Sr, i = r;
    r = (o) => o.startsWith(n) ? i(o.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const n = r;
    r = (i) => t({
      className: i,
      parseClassName: n
    });
  }
  return r;
}, hs = (s) => s.endsWith(Tr) ? s.substring(0, s.length - 1) : s.startsWith(Tr) ? s.substring(1) : s, ps = (s) => {
  const e = Object.fromEntries(s.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let i = [];
    return r.forEach((o) => {
      o[0] === "[" || e[o] ? (n.push(...i.sort(), o), i = []) : i.push(o);
    }), n.push(...i.sort()), n;
  };
}, ms = (s) => ({
  cache: us(s.cacheSize),
  parseClassName: fs(s),
  sortModifiers: ps(s),
  ...os(s)
}), _s = /\s+/, gs = (s, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = e, o = [], a = s.trim().split(_s);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: d
    } = t(u);
    if (f) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let _ = !!d, b = r(_ ? m.substring(0, d) : m);
    if (!b) {
      if (!_) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(m), !b) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      _ = !1;
    }
    const y = i(h).join(":"), w = p ? y + Tr : y, T = w + b;
    if (o.includes(T))
      continue;
    o.push(T);
    const g = n(b, _);
    for (let S = 0; S < g.length; ++S) {
      const C = g[S];
      o.push(w + C);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function bs() {
  let s = 0, e, t, r = "";
  for (; s < arguments.length; )
    (e = arguments[s++]) && (t = Fn(e)) && (r && (r += " "), r += t);
  return r;
}
const Fn = (s) => {
  if (typeof s == "string")
    return s;
  let e, t = "";
  for (let r = 0; r < s.length; r++)
    s[r] && (e = Fn(s[r])) && (t && (t += " "), t += e);
  return t;
};
function xs(s, ...e) {
  let t, r, n, i = o;
  function o(l) {
    const c = e.reduce((u, f) => f(u), s());
    return t = ms(c), r = t.cache.get, n = t.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = gs(l, t);
    return n(l, u), u;
  }
  return function() {
    return i(bs.apply(null, arguments));
  };
}
const ie = (s) => {
  const e = (t) => t[s] || [];
  return e.isThemeGetter = !0, e;
}, Vn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Bn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ys = /^\d+\/\d+$/, vs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ws = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ks = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ts = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ss = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ut = (s) => ys.test(s), A = (s) => !!s && !Number.isNaN(Number(s)), Ye = (s) => !!s && Number.isInteger(Number(s)), fr = (s) => s.endsWith("%") && A(s.slice(0, -1)), je = (s) => vs.test(s), Cs = () => !0, Ps = (s) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ws.test(s) && !ks.test(s)
), Yn = () => !1, Rs = (s) => Ts.test(s), Os = (s) => Ss.test(s), Es = (s) => !R(s) && !O(s), Ms = (s) => kt(s, Wn, Yn), R = (s) => Vn.test(s), Je = (s) => kt(s, qn, Ps), hr = (s) => kt(s, js, A), _n = (s) => kt(s, Un, Yn), As = (s) => kt(s, Gn, Os), qt = (s) => kt(s, $n, Rs), O = (s) => Bn.test(s), Rt = (s) => Tt(s, qn), zs = (s) => Tt(s, Is), gn = (s) => Tt(s, Un), Ns = (s) => Tt(s, Wn), Ds = (s) => Tt(s, Gn), $t = (s) => Tt(s, $n, !0), kt = (s, e, t) => {
  const r = Vn.exec(s);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, Tt = (s, e, t = !1) => {
  const r = Bn.exec(s);
  return r ? r[1] ? e(r[1]) : t : !1;
}, Un = (s) => s === "position" || s === "percentage", Gn = (s) => s === "image" || s === "url", Wn = (s) => s === "length" || s === "size" || s === "bg-size", qn = (s) => s === "length", js = (s) => s === "number", Is = (s) => s === "family-name", $n = (s) => s === "shadow", Ls = () => {
  const s = ie("color"), e = ie("font"), t = ie("text"), r = ie("font-weight"), n = ie("tracking"), i = ie("leading"), o = ie("breakpoint"), a = ie("container"), l = ie("spacing"), c = ie("radius"), u = ie("shadow"), f = ie("inset-shadow"), h = ie("text-shadow"), p = ie("drop-shadow"), m = ie("blur"), d = ie("perspective"), _ = ie("aspect"), b = ie("ease"), y = ie("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], g = () => [...T(), O, R], S = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], x = () => [O, R, l], k = () => [ut, "full", "auto", ...x()], z = () => [Ye, "none", "subgrid", O, R], B = () => ["auto", {
    span: ["full", Ye, O, R]
  }, Ye, O, R], I = () => [Ye, "auto", O, R], Y = () => ["auto", "min", "max", "fr", O, R], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...x()], U = () => [ut, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], E = () => [s, O, R], Oe = () => [...T(), gn, _n, {
    position: [O, R]
  }], v = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], M = () => ["auto", "cover", "contain", Ns, Ms, {
    size: [O, R]
  }], N = () => [fr, Rt, Je], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    O,
    R
  ], V = () => ["", A, Rt, Je], H = () => ["solid", "dashed", "dotted", "double"], ct = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [A, fr, gn, _n], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    O,
    R
  ], Re = () => ["none", A, O, R], Be = () => ["none", A, O, R], St = () => [A, O, R], Gt = () => [ut, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [je],
      breakpoint: [je],
      color: [Cs],
      container: [je],
      "drop-shadow": [je],
      ease: ["in", "out", "in-out"],
      font: [Es],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [je],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [je],
      shadow: [je],
      spacing: ["px", A],
      text: [je],
      "text-shadow": [je],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ut, R, O, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [A, R, O, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: g()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: k()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": k()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": k()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: k()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: k()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: k()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: k()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: k()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: k()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ye, "auto", O, R]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ut, "full", "auto", a, ...x()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [A, ut, "auto", "initial", "none", R]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", A, O, R]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", A, O, R]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ye, "first", "last", "none", O, R]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": x()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Rt, Je]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, O, hr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", fr, R]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zs, R, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, O, R]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [A, "none", O, hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, R]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", O, R]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [A, "from-font", "auto", O, Je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [A, "auto", O, R]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, R]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O, R]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Oe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: v()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: M()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ye, O, R],
          radial: ["", O, R],
          conic: [Ye, O, R]
        }, Ds, As]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": V()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...H(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...H(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [A, O, R]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", A, Rt, Je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          $t,
          qt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, $t, qt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [A, Je]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": V()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, $t, qt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A, O, R]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ct(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ct()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [A]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, R]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": T()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [A]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Oe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: v()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: M()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", O, R]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          R
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [A, O, R]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [A, O, R]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          $t,
          qt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", A, O, R]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [A, O, R]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", A, O, R]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [A, O, R]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", A, O, R]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          R
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [A, O, R]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [A, O, R]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", A, O, R]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [A, O, R]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", A, O, R]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A, O, R]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A, O, R]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", A, O, R]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, R]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [A, "initial", O, R]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, O, R]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [A, O, R]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, O, R]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [d, O, R]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": g()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Be()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Be()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Be()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Be()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: St()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": St()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": St()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, R, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: g()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Gt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Gt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Gt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Gt()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: E()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: E()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, R]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O, R]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [A, Rt, Je, hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Fs = /* @__PURE__ */ xs(Ls);
function se(...s) {
  return Fs(In(s));
}
function Ie(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Xn(s, e) {
  s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.__proto__ = e;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ve = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, gt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ur, ae, X, Se = 1e8, q = 1 / Se, Cr = Math.PI * 2, Vs = Cr / 4, Bs = 0, Hn = Math.sqrt, Ys = Math.cos, Us = Math.sin, oe = function(e) {
  return typeof e == "string";
}, K = function(e) {
  return typeof e == "function";
}, Fe = function(e) {
  return typeof e == "number";
}, Gr = function(e) {
  return typeof e > "u";
}, Ne = function(e) {
  return typeof e == "object";
}, he = function(e) {
  return e !== !1;
}, Wr = function() {
  return typeof window < "u";
}, Xt = function(e) {
  return K(e) || oe(e);
}, Zn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ce = Array.isArray, Pr = /(?:-?\.?\d|\.)+/gi, Jn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ft = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, pr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Qn = /[+-]=-?[.\d]+/, Kn = /[^,'"\[\]\s]+/gi, Gs = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Z, Ee, Rr, qr, we = {}, Qt = {}, ei, ti = function(e) {
  return (Qt = bt(e, we)) && ge;
}, $r = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Dt = function(e, t) {
  return !t && console.warn(e);
}, ri = function(e, t) {
  return e && (we[e] = t) && Qt && (Qt[e] = t) || we;
}, jt = function() {
  return 0;
}, Ws = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ht = {
  suppressEvents: !0,
  kill: !1
}, qs = {
  suppressEvents: !0
}, Xr = {}, qe = [], Or = {}, ni, be = {}, mr = {}, bn = 30, Zt = [], Hr = "", Zr = function(e) {
  var t = e[0], r, n;
  if (Ne(t) || K(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (n = Zt.length; n-- && !Zt[n].targetTest(t); )
      ;
    r = Zt[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new Pi(e[n], r))) || e.splice(n, 1);
  return e;
}, rt = function(e) {
  return e._gsap || Zr(Ce(e))[0]._gsap;
}, ii = function(e, t, r) {
  return (r = e[t]) && K(r) ? e[t]() : Gr(r) && e.getAttribute && e.getAttribute(t) || r;
}, pe = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ee = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, re = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, pt = function(e, t) {
  var r = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n;
}, $s = function(e, t) {
  for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, Kt = function() {
  var e = qe.length, t = qe.slice(0), r, n;
  for (Or = {}, qe.length = 0, r = 0; r < e; r++)
    n = t[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, Jr = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, si = function(e, t, r, n) {
  qe.length && !ae && Kt(), e.render(t, r, !!(ae && t < 0 && Jr(e))), qe.length && !ae && Kt();
}, oi = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Kn).length < 2 ? t : oe(e) ? e.trim() : e;
}, ai = function(e) {
  return e;
}, ke = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, Xs = function(e) {
  return function(t, r) {
    for (var n in r)
      n in t || n === "duration" && e || n === "ease" || (t[n] = r[n]);
  };
}, bt = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, xn = function s(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Ne(t[r]) ? s(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, er = function(e, t) {
  var r = {}, n;
  for (n in e)
    n in t || (r[n] = e[n]);
  return r;
}, At = function(e) {
  var t = e.parent || Z, r = e.keyframes ? Xs(ce(e.keyframes)) : ke;
  if (he(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Hs = function(e, t) {
  for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, li = function(e, t, r, n, i) {
  var o = e[n], a;
  if (i)
    for (a = t[i]; o && o[i] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t;
}, lr = function(e, t, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var i = t._prev, o = t._next;
  i ? i._next = o : e[r] === t && (e[r] = o), o ? o._prev = i : e[n] === t && (e[n] = i), t._next = t._prev = t.parent = null;
}, Xe = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, nt = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Zs = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Er = function(e, t, r, n) {
  return e._startAt && (ae ? e._startAt.revert(Ht) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, Js = function s(e) {
  return !e || e._ts && s(e.parent);
}, yn = function(e) {
  return e._repeat ? xt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, xt = function(e, t) {
  var r = Math.floor(e = re(e / t));
  return e && r === e ? r - 1 : r;
}, tr = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, cr = function(e) {
  return e._end = re(e._start + (e._tDur / Math.abs(e._ts || e._rts || q) || 0));
}, ur = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = re(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), cr(e), r._dirty || nt(r, e)), e;
}, ci = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = tr(e.rawTime(), t), (!t._dur || Yt(0, t.totalDuration(), r) - t._tTime > q) && t.render(r, !0)), nt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -q;
  }
}, Me = function(e, t, r, n) {
  return t.parent && Xe(t), t._start = re((Fe(r) ? r : r || e !== Z ? Te(e, r, t) : e._time) + t._delay), t._end = re(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), li(e, t, "_first", "_last", e._sort ? "_start" : 0), Mr(t) || (e._recent = t), n || ci(e, t), e._ts < 0 && ur(e, e._tTime), e;
}, ui = function(e, t) {
  return (we.ScrollTrigger || $r("scrollTrigger", t)) && we.ScrollTrigger.create(t, e);
}, di = function(e, t, r, n, i) {
  if (Kr(e, t, i), !e._initted)
    return 1;
  if (!r && e._pt && !ae && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ni !== xe.frame)
    return qe.push(e), e._lazy = [i, n], 1;
}, Qs = function s(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
}, Mr = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Ks = function(e, t, r, n) {
  var i = e.ratio, o = t < 0 || !t && (!e._start && Qs(e) && !(!e._initted && Mr(e)) || (e._ts < 0 || e._dp._ts < 0) && !Mr(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, f;
  if (a && e._repeat && (l = Yt(0, e._tDur, t), u = xt(l, a), e._yoyo && u & 1 && (o = 1 - o), u !== xt(e._tTime, a) && (i = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== i || ae || n || e._zTime === q || !t && e._zTime) {
    if (!e._initted && di(e, t, n, r, l))
      return;
    for (f = e._zTime, e._zTime = t || (r ? q : 0), r || (r = t && !f), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(o, c.d), c = c._next;
    t < 0 && Er(e, t, r, !0), e._onUpdate && !r && ye(e, "onUpdate"), l && e._repeat && !r && e.parent && ye(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Xe(e, 1), !r && !ae && (ye(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, eo = function(e, t, r) {
  var n;
  if (r > t)
    for (n = e._first; n && n._start <= r; ) {
      if (n.data === "isPause" && n._start > t)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= r; ) {
      if (n.data === "isPause" && n._start < t)
        return n;
      n = n._prev;
    }
}, yt = function(e, t, r, n) {
  var i = e._repeat, o = re(t) || 0, a = e._tTime / e._tDur;
  return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = i ? i < 0 ? 1e10 : re(o * (i + 1) + e._rDelay * i) : o, a > 0 && !n && ur(e, e._tTime = e._tDur * a), e.parent && cr(e), r || nt(e.parent, e), e;
}, vn = function(e) {
  return e instanceof ue ? nt(e) : yt(e, e._dur);
}, to = {
  _start: 0,
  endTime: jt,
  totalDuration: jt
}, Te = function s(e, t, r) {
  var n = e.labels, i = e._recent || to, o = e.duration() >= Se ? i.endTime(!1) : e._dur, a, l, c;
  return oe(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? i : r).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && r && (l = l / 100 * (ce(r) ? r[0] : r).totalDuration()), a > 1 ? s(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, zt = function(e, t, r) {
  var n = Fe(t[1]), i = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[i], a, l;
  if (n && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = he(l.vars.inherit) && l.parent;
    o.immediateRender = he(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[i - 1];
  }
  return new te(t[0], o, t[i + 1]);
}, Ze = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Yt = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, le = function(e, t) {
  return !oe(e) || !(t = Gs.exec(e)) ? "" : t[1];
}, ro = function(e, t, r) {
  return Ze(r, function(n) {
    return Yt(e, t, n);
  });
}, Ar = [].slice, fi = function(e, t) {
  return e && Ne(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Ne(e[0])) && !e.nodeType && e !== Ee;
}, no = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(n) {
    var i;
    return oe(n) && !t || fi(n, 1) ? (i = r).push.apply(i, Ce(n)) : r.push(n);
  }) || r;
}, Ce = function(e, t, r) {
  return X && !t && X.selector ? X.selector(e) : oe(e) && !r && (Rr || !vt()) ? Ar.call((t || qr).querySelectorAll(e), 0) : ce(e) ? no(e, r) : fi(e) ? Ar.call(e, 0) : e ? [e] : [];
}, zr = function(e) {
  return e = Ce(e)[0] || Dt("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Ce(t, r.querySelectorAll ? r : r === e ? Dt("Invalid scope") || qr.createElement("div") : e);
  };
}, hi = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, pi = function(e) {
  if (K(e))
    return e;
  var t = Ne(e) ? e : {
    each: e
  }, r = it(t.ease), n = t.from || 0, i = parseFloat(t.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, c = t.axis, u = n, f = n;
  return oe(n) ? u = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (u = n[0], f = n[1]), function(h, p, m) {
    var d = (m || t).length, _ = o[d], b, y, w, T, g, S, C, x, k;
    if (!_) {
      if (k = t.grid === "auto" ? 0 : (t.grid || [1, Se])[1], !k) {
        for (C = -Se; C < (C = m[k++].getBoundingClientRect().left) && k < d; )
          ;
        k < d && k--;
      }
      for (_ = o[d] = [], b = l ? Math.min(k, d) * u - 0.5 : n % k, y = k === Se ? 0 : l ? d * f / k - 0.5 : n / k | 0, C = 0, x = Se, S = 0; S < d; S++)
        w = S % k - b, T = y - (S / k | 0), _[S] = g = c ? Math.abs(c === "y" ? T : w) : Hn(w * w + T * T), g > C && (C = g), g < x && (x = g);
      n === "random" && hi(_), _.max = C - x, _.min = x, _.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (k > d ? d - 1 : c ? c === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (n === "edges" ? -1 : 1), _.b = d < 0 ? i - d : i, _.u = le(t.amount || t.each) || 0, r = r && d < 0 ? Ti(r) : r;
    }
    return d = (_[h] - _.min) / _.max || 0, re(_.b + (r ? r(d) : d) * _.v) + _.u;
  };
}, Nr = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var n = re(Math.round(parseFloat(r) / e) * e * t);
    return (n - n % 1) / t + (Fe(r) ? 0 : le(r));
  };
}, mi = function(e, t) {
  var r = ce(e), n, i;
  return !r && Ne(e) && (n = r = e.radius || Se, e.values ? (e = Ce(e.values), (i = !Fe(e[0])) && (n *= n)) : e = Nr(e.increment)), Ze(t, r ? K(e) ? function(o) {
    return i = e(o), Math.abs(i - o) <= n ? i : o;
  } : function(o) {
    for (var a = parseFloat(i ? o.x : o), l = parseFloat(i ? o.y : 0), c = Se, u = 0, f = e.length, h, p; f--; )
      i ? (h = e[f].x - a, p = e[f].y - l, h = h * h + p * p) : h = Math.abs(e[f] - a), h < c && (c = h, u = f);
    return u = !n || c <= n ? e[u] : o, i || u === o || Fe(o) ? u : u + le(o);
  } : Nr(e));
}, _i = function(e, t, r, n) {
  return Ze(ce(e) ? !t : r === !0 ? !!(r = 0) : !n, function() {
    return ce(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * n) / n;
  });
}, io = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduce(function(i, o) {
      return o(i);
    }, n);
  };
}, so = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || le(r));
  };
}, oo = function(e, t, r) {
  return bi(e, t, 0, 1, r);
}, gi = function(e, t, r) {
  return Ze(r, function(n) {
    return e[~~t(n)];
  });
}, ao = function s(e, t, r) {
  var n = t - e;
  return ce(e) ? gi(e, s(0, e.length), t) : Ze(r, function(i) {
    return (n + (i - e) % n) % n + e;
  });
}, lo = function s(e, t, r) {
  var n = t - e, i = n * 2;
  return ce(e) ? gi(e, s(0, e.length - 1), t) : Ze(r, function(o) {
    return o = (i + (o - e) % i) % i || 0, e + (o > n ? i - o : o);
  });
}, It = function(e) {
  for (var t = 0, r = "", n, i, o, a; ~(n = e.indexOf("random(", t)); )
    o = e.indexOf(")", n), a = e.charAt(n + 7) === "[", i = e.substr(n + 7, o - n - 7).match(a ? Kn : Pr), r += e.substr(t, n - t) + _i(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5), t = o + 1;
  return r + e.substr(t, e.length - t);
}, bi = function(e, t, r, n, i) {
  var o = t - e, a = n - r;
  return Ze(i, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, co = function s(e, t, r, n) {
  var i = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!i) {
    var o = oe(e), a = {}, l, c, u, f, h;
    if (r === !0 && (n = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (ce(e) && !ce(t)) {
      for (u = [], f = e.length, h = f - 2, c = 1; c < f; c++)
        u.push(s(e[c - 1], e[c]));
      f--, i = function(m) {
        m *= f;
        var d = Math.min(h, ~~m);
        return u[d](m - d);
      }, r = t;
    } else n || (e = bt(ce(e) ? [] : {}, e));
    if (!u) {
      for (l in t)
        Qr.call(a, e, l, "get", t[l]);
      i = function(m) {
        return rn(m, a) || (o ? e.p : e);
      };
    }
  }
  return Ze(r, i);
}, wn = function(e, t, r) {
  var n = e.labels, i = Se, o, a, l;
  for (o in n)
    a = n[o] - t, a < 0 == !!r && a && i > (a = Math.abs(a)) && (l = o, i = a);
  return l;
}, ye = function(e, t, r) {
  var n = e.vars, i = n[t], o = X, a = e._ctx, l, c, u;
  if (i)
    return l = n[t + "Params"], c = n.callbackScope || e, r && qe.length && Kt(), a && (X = a), u = l ? i.apply(c, l) : i.call(c), X = o, u;
}, Et = function(e) {
  return Xe(e), e.scrollTrigger && e.scrollTrigger.kill(!!ae), e.progress() < 1 && ye(e, "onInterrupt"), e;
}, ht, xi = [], yi = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Wr() || e.headless) {
      var t = e.name, r = K(e), n = t && !r && e.init ? function() {
        this._props = [];
      } : e, i = {
        init: jt,
        render: rn,
        add: Qr,
        kill: Co,
        modifier: So,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: tn,
        aliases: {},
        register: 0
      };
      if (vt(), e !== n) {
        if (be[t])
          return;
        ke(n, ke(er(e, i), o)), bt(n.prototype, bt(i, er(e, o))), be[n.prop = t] = n, e.targetTest && (Zt.push(n), Xr[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      ri(t, n), e.register && e.register(ge, n, me);
    } else
      xi.push(e);
}, W = 255, Mt = {
  aqua: [0, W, W],
  lime: [0, W, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, W],
  navy: [0, 0, 128],
  white: [W, W, W],
  olive: [128, 128, 0],
  yellow: [W, W, 0],
  orange: [W, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [W, 0, 0],
  pink: [W, 192, 203],
  cyan: [0, W, W],
  transparent: [W, W, W, 0]
}, _r = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * W + 0.5 | 0;
}, vi = function(e, t, r) {
  var n = e ? Fe(e) ? [e >> 16, e >> 8 & W, e & W] : 0 : Mt.black, i, o, a, l, c, u, f, h, p, m;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Mt[e])
      n = Mt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (i = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + i + i + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & W, n & W, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & W, e & W];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = m = e.match(Pr), !t)
        l = +n[0] % 360 / 360, c = +n[1] / 100, u = +n[2] / 100, o = u <= 0.5 ? u * (c + 1) : u + c - u * c, i = u * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = _r(l + 1 / 3, i, o), n[1] = _r(l, i, o), n[2] = _r(l - 1 / 3, i, o);
      else if (~e.indexOf("="))
        return n = e.match(Jn), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(Pr) || Mt.transparent;
    n = n.map(Number);
  }
  return t && !m && (i = n[0] / W, o = n[1] / W, a = n[2] / W, f = Math.max(i, o, a), h = Math.min(i, o, a), u = (f + h) / 2, f === h ? l = c = 0 : (p = f - h, c = u > 0.5 ? p / (2 - f - h) : p / (f + h), l = f === i ? (o - a) / p + (o < a ? 6 : 0) : f === o ? (a - i) / p + 2 : (i - o) / p + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(c * 100 + 0.5), n[2] = ~~(u * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, wi = function(e) {
  var t = [], r = [], n = -1;
  return e.split($e).forEach(function(i) {
    var o = i.match(ft) || [];
    t.push.apply(t, o), r.push(n += o.length + 1);
  }), t.c = r, t;
}, kn = function(e, t, r) {
  var n = "", i = (e + n).match($e), o = t ? "hsla(" : "rgba(", a = 0, l, c, u, f;
  if (!i)
    return e;
  if (i = i.map(function(h) {
    return (h = vi(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (u = wi(e), l = r.c, l.join(n) !== u.c.join(n)))
    for (c = e.replace($e, "1").split(ft), f = c.length - 1; a < f; a++)
      n += c[a] + (~l.indexOf(a) ? i.shift() || o + "0,0,0,0)" : (u.length ? u : i.length ? i : r).shift());
  if (!c)
    for (c = e.split($e), f = c.length - 1; a < f; a++)
      n += c[a] + i[a];
  return n + c[f];
}, $e = (function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Mt)
    s += "|" + e + "\\b";
  return new RegExp(s + ")", "gi");
})(), uo = /hsl[a]?\(/, ki = function(e) {
  var t = e.join(" "), r;
  if ($e.lastIndex = 0, $e.test(t))
    return r = uo.test(t), e[1] = kn(e[1], r), e[0] = kn(e[0], r, wi(e[1])), !0;
}, Lt, xe = (function() {
  var s = Date.now, e = 500, t = 33, r = s(), n = r, i = 1e3 / 240, o = i, a = [], l, c, u, f, h, p, m = function d(_) {
    var b = s() - n, y = _ === !0, w, T, g, S;
    if ((b > e || b < 0) && (r += b - t), n += b, g = n - r, w = g - o, (w > 0 || y) && (S = ++f.frame, h = g - f.time * 1e3, f.time = g = g / 1e3, o += w + (w >= i ? 4 : i - w), T = 1), y || (l = c(d)), T)
      for (p = 0; p < a.length; p++)
        a[p](g, h, S, _);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(_) {
      return h / (1e3 / (_ || 60));
    },
    wake: function() {
      ei && (!Rr && Wr() && (Ee = Rr = window, qr = Ee.document || {}, we.gsap = ge, (Ee.gsapVersions || (Ee.gsapVersions = [])).push(ge.version), ti(Qt || Ee.GreenSockGlobals || !Ee.gsap && Ee || {}), xi.forEach(yi)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && f.sleep(), c = u || function(_) {
        return setTimeout(_, o - f.time * 1e3 + 1 | 0);
      }, Lt = 1, m(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(l), Lt = 0, c = jt;
    },
    lagSmoothing: function(_, b) {
      e = _ || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(_) {
      i = 1e3 / (_ || 240), o = f.time * 1e3 + i;
    },
    add: function(_, b, y) {
      var w = b ? function(T, g, S, C) {
        _(T, g, S, C), f.remove(w);
      } : _;
      return f.remove(_), a[y ? "unshift" : "push"](w), vt(), w;
    },
    remove: function(_, b) {
      ~(b = a.indexOf(_)) && a.splice(b, 1) && p >= b && p--;
    },
    _listeners: a
  }, f;
})(), vt = function() {
  return !Lt && xe.wake();
}, j = {}, fo = /^[\d.\-M][\d.\-,\s]/, ho = /["']/g, po = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], i = 1, o = r.length, a, l, c; i < o; i++)
    l = r[i], a = i !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[n] = isNaN(c) ? c.replace(ho, "").trim() : +c, n = l.substr(a + 1).trim();
  return t;
}, mo = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
}, _o = function(e) {
  var t = (e + "").split("("), r = j[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [po(t[1])] : mo(e).split(",").map(oi)) : j._CE && fo.test(e) ? j._CE("", e) : r;
}, Ti = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Si = function s(e, t) {
  for (var r = e._first, n; r; )
    r instanceof ue ? s(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? s(r.timeline, t) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = t)), r = r._next;
}, it = function(e, t) {
  return e && (K(e) ? e : j[e] || _o(e)) || t;
}, lt = function(e, t, r, n) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var i = {
    easeIn: t,
    easeOut: r,
    easeInOut: n
  }, o;
  return pe(e, function(a) {
    j[a] = we[a] = i, j[o = a.toLowerCase()] = r;
    for (var l in i)
      j[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = j[a + "." + l] = i[l];
  }), i;
}, Ci = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, gr = function s(e, t, r) {
  var n = t >= 1 ? t : 1, i = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = i / Cr * (Math.asin(1 / n) || 0), a = function(u) {
    return u === 1 ? 1 : n * Math.pow(2, -10 * u) * Us((u - o) * i) + 1;
  }, l = e === "out" ? a : e === "in" ? function(c) {
    return 1 - a(1 - c);
  } : Ci(a);
  return i = Cr / i, l.config = function(c, u) {
    return s(e, c, u);
  }, l;
}, br = function s(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, n = e === "out" ? r : e === "in" ? function(i) {
    return 1 - r(1 - i);
  } : Ci(r);
  return n.config = function(i) {
    return s(e, i);
  }, n;
};
pe("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
  var t = e < 5 ? e + 1 : e;
  lt(s + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
j.Linear.easeNone = j.none = j.Linear.easeIn;
lt("Elastic", gr("in"), gr("out"), gr());
(function(s, e) {
  var t = 1 / e, r = 2 * t, n = 2.5 * t, i = function(a) {
    return a < t ? s * a * a : a < r ? s * Math.pow(a - 1.5 / e, 2) + 0.75 : a < n ? s * (a -= 2.25 / e) * a + 0.9375 : s * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  lt("Bounce", function(o) {
    return 1 - i(1 - o);
  }, i);
})(7.5625, 2.75);
lt("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
lt("Circ", function(s) {
  return -(Hn(1 - s * s) - 1);
});
lt("Sine", function(s) {
  return s === 1 ? 1 : -Ys(s * Vs) + 1;
});
lt("Back", br("in"), br("out"), br());
j.SteppedEase = j.steps = we.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, n = e + (t ? 0 : 1), i = t ? 1 : 0, o = 1 - q;
    return function(a) {
      return ((n * Yt(0, o, a) | 0) + i) * r;
    };
  }
};
gt.ease = j["quad.out"];
pe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Hr += s + "," + s + "Params,";
});
var Pi = function(e, t) {
  this.id = Bs++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ii, this.set = t ? t.getSetter : tn;
}, Ft = /* @__PURE__ */ (function() {
  function s(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, yt(this, +t.duration, 1, 1), this.data = t.data, X && (this._ctx = X, X.data.push(this)), Lt || xe.wake();
  }
  var e = s.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, yt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, n) {
    if (vt(), !arguments.length)
      return this._tTime;
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      for (ur(this, r), !i._dp || i.parent || ci(i, this); i && i.parent; )
        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Me(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === q || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), si(this, r, n)), this;
  }, e.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + yn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + yn(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, n) {
    var i = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * i, n) : this._repeat ? xt(this._tTime, i) + 1 : 1;
  }, e.timeScale = function(r, n) {
    if (!arguments.length)
      return this._rts === -q ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? tr(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -q ? 0 : this._rts, this.totalTime(Yt(-Math.abs(this._delay), this.totalDuration(), i), n !== !1), cr(this), Zs(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (vt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && Me(n, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (he(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tr(n.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = qs);
    var n = ae;
    return ae = r, Jr(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), ae = n, this;
  }, e.globalTime = function(r) {
    for (var n = this, i = arguments.length ? r : n.rawTime(); n; )
      i = n._start + i / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : i;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, vn(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, vn(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, n) {
    return this.totalTime(Te(this, r), he(n));
  }, e.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, he(n)), this._dur || (this._zTime = -q), this;
  }, e.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -q : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -q, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, n = this._start, i;
    return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= n && i < this.endTime(!0) - q);
  }, e.eventCallback = function(r, n, i) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, i && (o[r + "Params"] = i), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var n = this;
    return new Promise(function(i) {
      var o = K(r) ? r : ai, a = function() {
        var c = n.then;
        n.then = null, K(o) && (o = o(n)) && (o.then || o === n) && (n.then = c), i(o), n.then = c;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, e.kill = function() {
    Et(this);
  }, s;
})();
ke(Ft.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -q,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ue = /* @__PURE__ */ (function(s) {
  Xn(e, s);
  function e(r, n) {
    var i;
    return r === void 0 && (r = {}), i = s.call(this, r) || this, i.labels = {}, i.smoothChildTiming = !!r.smoothChildTiming, i.autoRemoveChildren = !!r.autoRemoveChildren, i._sort = he(r.sortChildren), Z && Me(r.parent || Z, Ie(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), r.scrollTrigger && ui(Ie(i), r.scrollTrigger), i;
  }
  var t = e.prototype;
  return t.to = function(n, i, o) {
    return zt(0, arguments, this), this;
  }, t.from = function(n, i, o) {
    return zt(1, arguments, this), this;
  }, t.fromTo = function(n, i, o, a) {
    return zt(2, arguments, this), this;
  }, t.set = function(n, i, o) {
    return i.duration = 0, i.parent = this, At(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new te(n, i, Te(this, o), 1), this;
  }, t.call = function(n, i, o) {
    return Me(this, te.delayedCall(0, n, i), o);
  }, t.staggerTo = function(n, i, o, a, l, c, u) {
    return o.duration = i, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new te(n, o, Te(this, l)), this;
  }, t.staggerFrom = function(n, i, o, a, l, c, u) {
    return o.runBackwards = 1, At(o).immediateRender = he(o.immediateRender), this.staggerTo(n, i, o, a, l, c, u);
  }, t.staggerFromTo = function(n, i, o, a, l, c, u, f) {
    return a.startAt = o, At(a).immediateRender = he(a.immediateRender), this.staggerTo(n, i, a, l, c, u, f);
  }, t.render = function(n, i, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = n <= 0 ? 0 : re(n), f = this._zTime < 0 != n < 0 && (this._initted || !c), h, p, m, d, _, b, y, w, T, g, S, C;
    if (this !== Z && u > l && n >= 0 && (u = l), u !== this._tTime || o || f) {
      if (a !== this._time && c && (u += this._time - a, n += this._time - a), h = u, T = this._start, w = this._ts, b = !w, f && (c || (a = this._zTime), (n || !i) && (this._zTime = n)), this._repeat) {
        if (S = this._yoyo, _ = c + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(_ * 100 + n, i, o);
        if (h = re(u % _), u === l ? (d = this._repeat, h = c) : (g = re(u / _), d = ~~g, d && d === g && (h = c, d--), h > c && (h = c)), g = xt(this._tTime, _), !a && this._tTime && g !== d && this._tTime - g * _ - this._dur <= 0 && (g = d), S && d & 1 && (h = c - h, C = 1), d !== g && !this._lock) {
          var x = S && g & 1, k = x === (S && d & 1);
          if (d < g && (x = !x), a = x ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (C ? 0 : re(d * _)), i, !c)._lock = 0, this._tTime = u, !i && this.parent && ye(this, "onRepeat"), this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, k && (this._lock = 2, a = x ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !C && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          Si(this, C);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = eo(this, re(a), re(h)), y && (u -= h - (h = y._start))), this._tTime = u, this._time = h, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && u && !i && !g && (ye(this, "onStart"), this._tTime !== u))
        return this;
      if (h >= a && n >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || h >= p._start) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(n, i, o);
            if (p.render(p._ts > 0 ? (h - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (h - p._start) * p._ts, i, o), h !== this._time || !this._ts && !b) {
              y = 0, m && (u += this._zTime = -q);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var z = n < 0 ? n : h; p; ) {
          if (m = p._prev, (p._act || z <= p._end) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(n, i, o);
            if (p.render(p._ts > 0 ? (z - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (z - p._start) * p._ts, i, o || ae && Jr(p)), h !== this._time || !this._ts && !b) {
              y = 0, m && (u += this._zTime = z ? -q : q);
              break;
            }
          }
          p = m;
        }
      }
      if (y && !i && (this.pause(), y.render(h >= a ? 0 : -q)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = T, cr(this), this.render(n, i, o);
      this._onUpdate && !i && ye(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (T === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((n || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Xe(this, 1), !i && !(n < 0 && !a) && (u || a || !l) && (ye(this, u === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, i) {
    var o = this;
    if (Fe(i) || (i = Te(this, i, n)), !(n instanceof Ft)) {
      if (ce(n))
        return n.forEach(function(a) {
          return o.add(a, i);
        }), this;
      if (oe(n))
        return this.addLabel(n, i);
      if (K(n))
        n = te.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? Me(this, n, i) : this;
  }, t.getChildren = function(n, i, o, a) {
    n === void 0 && (n = !0), i === void 0 && (i = !0), o === void 0 && (o = !0), a === void 0 && (a = -Se);
    for (var l = [], c = this._first; c; )
      c._start >= a && (c instanceof te ? i && l.push(c) : (o && l.push(c), n && l.push.apply(l, c.getChildren(!0, i, o)))), c = c._next;
    return l;
  }, t.getById = function(n) {
    for (var i = this.getChildren(1, 1, 1), o = i.length; o--; )
      if (i[o].vars.id === n)
        return i[o];
  }, t.remove = function(n) {
    return oe(n) ? this.removeLabel(n) : K(n) ? this.killTweensOf(n) : (n.parent === this && lr(this, n), n === this._recent && (this._recent = this._last), nt(this));
  }, t.totalTime = function(n, i) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = re(xe.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), s.prototype.totalTime.call(this, n, i), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, i) {
    return this.labels[n] = Te(this, i), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, i, o) {
    var a = te.delayedCall(0, i || jt, o);
    return a.data = "isPause", this._hasPause = 1, Me(this, a, Te(this, n));
  }, t.removePause = function(n) {
    var i = this._first;
    for (n = Te(this, n); i; )
      i._start === n && i.data === "isPause" && Xe(i), i = i._next;
  }, t.killTweensOf = function(n, i, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      Ue !== a[l] && a[l].kill(n, i);
    return this;
  }, t.getTweensOf = function(n, i) {
    for (var o = [], a = Ce(n), l = this._first, c = Fe(i), u; l; )
      l instanceof te ? $s(l._targets, a) && (c ? (!Ue || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, i)).length && o.push.apply(o, u), l = l._next;
    return o;
  }, t.tweenTo = function(n, i) {
    i = i || {};
    var o = this, a = Te(o, n), l = i, c = l.startAt, u = l.onStart, f = l.onStartParams, h = l.immediateRender, p, m = te.to(o, ke({
      ease: i.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: i.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || q,
      onStart: function() {
        if (o.pause(), !p) {
          var _ = i.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          m._dur !== _ && yt(m, _, 0, 1).render(m._time, !0, !0), p = 1;
        }
        u && u.apply(m, f || []);
      }
    }, i));
    return h ? m.render(0) : m;
  }, t.tweenFromTo = function(n, i, o) {
    return this.tweenTo(i, ke({
      startAt: {
        time: Te(this, n)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), wn(this, Te(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), wn(this, Te(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + q);
  }, t.shiftChildren = function(n, i, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, c; a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (i)
      for (c in l)
        l[c] >= o && (l[c] += n);
    return nt(this);
  }, t.invalidate = function(n) {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(n), i = i._next;
    return s.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var i = this._first, o; i; )
      o = i._next, this.remove(i), i = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), nt(this);
  }, t.totalDuration = function(n) {
    var i = 0, o = this, a = o._last, l = Se, c, u, f;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (f = o.parent; a; )
        c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Me(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (i -= u, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += u / o._ts, o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > i && a._ts && (i = a._end), a = c;
      yt(o, o === Z && o._time > i ? o._time : i, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(n) {
    if (Z._ts && (si(Z, tr(n, Z)), ni = xe.frame), xe.frame >= bn) {
      bn += ve.autoSleep || 120;
      var i = Z._first;
      if ((!i || !i._ts) && ve.autoSleep && xe._listeners.length < 2) {
        for (; i && !i._ts; )
          i = i._next;
        i || xe.sleep();
      }
    }
  }, e;
})(Ft);
ke(ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var go = function(e, t, r, n, i, o, a) {
  var l = new me(this._pt, e, t, 0, 1, zi, null, i), c = 0, u = 0, f, h, p, m, d, _, b, y;
  for (l.b = r, l.e = n, r += "", n += "", (b = ~n.indexOf("random(")) && (n = It(n)), o && (y = [r, n], o(y, e, t), r = y[0], n = y[1]), h = r.match(pr) || []; f = pr.exec(n); )
    m = f[0], d = n.substring(c, f.index), p ? p = (p + 1) % 5 : d.substr(-5) === "rgba(" && (p = 1), m !== h[u++] && (_ = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || u === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: _,
      c: m.charAt(1) === "=" ? pt(_, m) - _ : parseFloat(m) - _,
      m: p && p < 4 ? Math.round : 0
    }, c = pr.lastIndex);
  return l.c = c < n.length ? n.substring(c, n.length) : "", l.fp = a, (Qn.test(n) || b) && (l.e = 0), this._pt = l, l;
}, Qr = function(e, t, r, n, i, o, a, l, c, u) {
  K(n) && (n = n(i || 0, e, o));
  var f = e[t], h = r !== "get" ? r : K(f) ? c ? e[t.indexOf("set") || !K(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : f, p = K(f) ? c ? wo : Mi : en, m;
  if (oe(n) && (~n.indexOf("random(") && (n = It(n)), n.charAt(1) === "=" && (m = pt(h, n) + (le(h) || 0), (m || m === 0) && (n = m))), !u || h !== n || Dr)
    return !isNaN(h * n) && n !== "" ? (m = new me(this._pt, e, t, +h || 0, n - (h || 0), typeof f == "boolean" ? To : Ai, 0, p), c && (m.fp = c), a && m.modifier(a, this, e), this._pt = m) : (!f && !(t in e) && $r(t, n), go.call(this, e, t, h, n, p, l || ve.stringFilter, c));
}, bo = function(e, t, r, n, i) {
  if (K(e) && (e = Nt(e, i, t, r, n)), !Ne(e) || e.style && e.nodeType || ce(e) || Zn(e))
    return oe(e) ? Nt(e, i, t, r, n) : e;
  var o = {}, a;
  for (a in e)
    o[a] = Nt(e[a], i, t, r, n);
  return o;
}, Ri = function(e, t, r, n, i, o) {
  var a, l, c, u;
  if (be[e] && (a = new be[e]()).init(i, a.rawVars ? t[e] : bo(t[e], n, i, o, r), r, n, o) !== !1 && (r._pt = l = new me(r._pt, i, e, 0, 1, a.render, a, 0, a.priority), r !== ht))
    for (c = r._ptLookup[r._targets.indexOf(i)], u = a._props.length; u--; )
      c[a._props[u]] = l;
  return a;
}, Ue, Dr, Kr = function s(e, t, r) {
  var n = e.vars, i = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, c = n.onUpdate, u = n.runBackwards, f = n.yoyoEase, h = n.keyframes, p = n.autoRevert, m = e._dur, d = e._startAt, _ = e._targets, b = e.parent, y = b && b.data === "nested" ? b.vars.targets : _, w = e._overwrite === "auto" && !Ur, T = e.timeline, g, S, C, x, k, z, B, I, Y, $, G, L, U;
  if (T && (!h || !i) && (i = "none"), e._ease = it(i, gt.ease), e._yEase = f ? Ti(it(f === !0 ? i : f, gt.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !T && !!n.runBackwards, !T || h && !n.stagger) {
    if (I = _[0] ? rt(_[0]).harness : 0, L = I && n[I.prop], g = er(n, Xr), d && (d._zTime < 0 && d.progress(1), t < 0 && u && a && !p ? d.render(-1, !0) : d.revert(u && m ? Ht : Ws), d._lazy = 0), o) {
      if (Xe(e._startAt = te.set(_, ke({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !d && he(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return ye(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ae || !a && !p) && e._startAt.revert(Ht), a && m && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && m && !d) {
      if (t && (a = !1), C = ke({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && he(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), L && (C[I.prop] = L), Xe(e._startAt = te.set(_, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ae ? e._startAt.revert(Ht) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        s(e._startAt, q, q);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = m && he(l) || l && !m, S = 0; S < _.length; S++) {
      if (k = _[S], B = k._gsap || Zr(_)[S]._gsap, e._ptLookup[S] = $ = {}, Or[B.id] && qe.length && Kt(), G = y === _ ? S : y.indexOf(k), I && (Y = new I()).init(k, L || g, e, G, y) !== !1 && (e._pt = x = new me(e._pt, k, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(E) {
        $[E] = x;
      }), Y.priority && (z = 1)), !I || L)
        for (C in g)
          be[C] && (Y = Ri(C, g, e, G, k, y)) ? Y.priority && (z = 1) : $[C] = x = Qr.call(e, k, C, "get", g[C], G, y, 0, n.stringFilter);
      e._op && e._op[S] && e.kill(k, e._op[S]), w && e._pt && (Ue = e, Z.killTweensOf(k, $, e.globalTime(t)), U = !e.parent, Ue = 0), e._pt && l && (Or[B.id] = 1);
    }
    z && Ni(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !U, h && t <= 0 && T.render(Se, !0, !0);
}, xo = function(e, t, r, n, i, o, a, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, f, h, p;
  if (!c)
    for (c = e._ptCache[t] = [], h = e._ptLookup, p = e._targets.length; p--; ) {
      if (u = h[p][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return Dr = 1, e.vars[t] = "+=0", Kr(e, a), Dr = 0, l ? Dt(t + " not eligible for reset") : 1;
      c.push(u);
    }
  for (p = c.length; p--; )
    f = c[p], u = f._pt || f, u.s = (n || n === 0) && !i ? n : u.s + (n || 0) + o * u.c, u.c = r - u.s, f.e && (f.e = ee(r) + le(f.e)), f.b && (f.b = u.s + le(f.b));
}, yo = function(e, t) {
  var r = e[0] ? rt(e[0]).harness : 0, n = r && r.aliases, i, o, a, l;
  if (!n)
    return t;
  i = bt({}, t);
  for (o in n)
    if (o in i)
      for (l = n[o].split(","), a = l.length; a--; )
        i[l[a]] = i[o];
  return i;
}, vo = function(e, t, r, n) {
  var i = t.ease || n || "power1.inOut", o, a;
  if (ce(t))
    a = r[e] || (r[e] = []), t.forEach(function(l, c) {
      return a.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: i
      });
    });
  else
    for (o in t)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: i
      });
}, Nt = function(e, t, r, n, i) {
  return K(e) ? e.call(t, r, n, i) : oe(e) && ~e.indexOf("random(") ? It(e) : e;
}, Oi = Hr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ei = {};
pe(Oi + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Ei[s] = 1;
});
var te = /* @__PURE__ */ (function(s) {
  Xn(e, s);
  function e(r, n, i, o) {
    var a;
    typeof n == "number" && (i.duration = n, n = i, i = null), a = s.call(this, o ? n : At(n)) || this;
    var l = a.vars, c = l.duration, u = l.delay, f = l.immediateRender, h = l.stagger, p = l.overwrite, m = l.keyframes, d = l.defaults, _ = l.scrollTrigger, b = l.yoyoEase, y = n.parent || Z, w = (ce(r) || Zn(r) ? Fe(r[0]) : "length" in n) ? [r] : Ce(r), T, g, S, C, x, k, z, B;
    if (a._targets = w.length ? Zr(w) : Dt("GSAP target " + r + " not found. https://gsap.com", !ve.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || h || Xt(c) || Xt(u)) {
      if (n = a.vars, T = a.timeline = new ue({
        data: "nested",
        defaults: d || {},
        targets: y && y.data === "nested" ? y.vars.targets : w
      }), T.kill(), T.parent = T._dp = Ie(a), T._start = 0, h || Xt(c) || Xt(u)) {
        if (C = w.length, z = h && pi(h), Ne(h))
          for (x in h)
            ~Oi.indexOf(x) && (B || (B = {}), B[x] = h[x]);
        for (g = 0; g < C; g++)
          S = er(n, Ei), S.stagger = 0, b && (S.yoyoEase = b), B && bt(S, B), k = w[g], S.duration = +Nt(c, Ie(a), g, k, w), S.delay = (+Nt(u, Ie(a), g, k, w) || 0) - a._delay, !h && C === 1 && S.delay && (a._delay = u = S.delay, a._start += u, S.delay = 0), T.to(k, S, z ? z(g, k, w) : 0), T._ease = j.none;
        T.duration() ? c = u = 0 : a.timeline = 0;
      } else if (m) {
        At(ke(T.vars.defaults, {
          ease: "none"
        })), T._ease = it(m.ease || n.ease || "none");
        var I = 0, Y, $, G;
        if (ce(m))
          m.forEach(function(L) {
            return T.to(w, L, ">");
          }), T.duration();
        else {
          S = {};
          for (x in m)
            x === "ease" || x === "easeEach" || vo(x, m[x], S, m.easeEach);
          for (x in S)
            for (Y = S[x].sort(function(L, U) {
              return L.t - U.t;
            }), I = 0, g = 0; g < Y.length; g++)
              $ = Y[g], G = {
                ease: $.e,
                duration: ($.t - (g ? Y[g - 1].t : 0)) / 100 * c
              }, G[x] = $.v, T.to(w, G, I), I += G.duration;
          T.duration() < c && T.to({}, {
            duration: c - T.duration()
          });
        }
      }
      c || a.duration(c = T.duration());
    } else
      a.timeline = 0;
    return p === !0 && !Ur && (Ue = Ie(a), Z.killTweensOf(w), Ue = 0), Me(y, Ie(a), i), n.reversed && a.reverse(), n.paused && a.paused(!0), (f || !c && !m && a._start === re(y._time) && he(f) && Js(Ie(a)) && y.data !== "nested") && (a._tTime = -q, a.render(Math.max(0, -u) || 0)), _ && ui(Ie(a), _), a;
  }
  var t = e.prototype;
  return t.render = function(n, i, o) {
    var a = this._time, l = this._tDur, c = this._dur, u = n < 0, f = n > l - q && !u ? l : n < q ? 0 : n, h, p, m, d, _, b, y, w, T;
    if (!c)
      Ks(this, n, i, o);
    else if (f !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (h = f, w = this.timeline, this._repeat) {
        if (d = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(d * 100 + n, i, o);
        if (h = re(f % d), f === l ? (m = this._repeat, h = c) : (_ = re(f / d), m = ~~_, m && m === _ ? (h = c, m--) : h > c && (h = c)), b = this._yoyo && m & 1, b && (T = this._yEase, h = c - h), _ = xt(this._tTime, d), h === a && !o && this._initted && m === _)
          return this._tTime = f, this;
        m !== _ && (w && this._yEase && Si(w, b), this.vars.repeatRefresh && !b && !this._lock && h !== d && this._initted && (this._lock = o = 1, this.render(re(d * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (di(this, u ? n : h, o, i, f))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && m !== _))
          return this;
        if (c !== this._dur)
          return this.render(n, i, o);
      }
      if (this._tTime = f, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(h / c), this._from && (this.ratio = y = 1 - y), !a && f && !i && !_ && (ye(this, "onStart"), this._tTime !== f))
        return this;
      for (p = this._pt; p; )
        p.r(y, p.d), p = p._next;
      w && w.render(n < 0 ? n : w._dur * w._ease(h / this._dur), i, o) || this._startAt && (this._zTime = n), this._onUpdate && !i && (u && Er(this, n, i, o), ye(this, "onUpdate")), this._repeat && m !== _ && this.vars.onRepeat && !i && this.parent && ye(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && Er(this, n, !0, !0), (n || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Xe(this, 1), !i && !(u && !a) && (f || a || b) && (ye(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), s.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, i, o, a, l) {
    Lt || xe.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || Kr(this, c), u = this._ease(c / this._dur), xo(this, n, i, o, a, u, c, l) ? this.resetTo(n, i, o, a, 1) : (ur(this, 0), this.parent || li(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, i) {
    if (i === void 0 && (i = "all"), !n && (!i || i === "all"))
      return this._lazy = this._pt = 0, this.parent ? Et(this) : this.scrollTrigger && this.scrollTrigger.kill(!!ae), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, i, Ue && Ue.vars.overwrite !== !0)._first || Et(this), this.parent && o !== this.timeline.totalDuration() && yt(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? Ce(n) : a, c = this._ptLookup, u = this._pt, f, h, p, m, d, _, b;
    if ((!i || i === "all") && Hs(a, l))
      return i === "all" && (this._pt = 0), Et(this);
    for (f = this._op = this._op || [], i !== "all" && (oe(i) && (d = {}, pe(i, function(y) {
      return d[y] = 1;
    }), i = d), i = yo(a, i)), b = a.length; b--; )
      if (~l.indexOf(a[b])) {
        h = c[b], i === "all" ? (f[b] = i, m = h, p = {}) : (p = f[b] = f[b] || {}, m = i);
        for (d in m)
          _ = h && h[d], _ && ((!("kill" in _.d) || _.d.kill(d) === !0) && lr(this, _, "_pt"), delete h[d]), p !== "all" && (p[d] = 1);
      }
    return this._initted && !this._pt && u && Et(this), this;
  }, e.to = function(n, i) {
    return new e(n, i, arguments[2]);
  }, e.from = function(n, i) {
    return zt(1, arguments);
  }, e.delayedCall = function(n, i, o, a) {
    return new e(i, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(n, i, o) {
    return zt(2, arguments);
  }, e.set = function(n, i) {
    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(n, i);
  }, e.killTweensOf = function(n, i, o) {
    return Z.killTweensOf(n, i, o);
  }, e;
})(Ft);
ke(te.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
pe("staggerTo,staggerFrom,staggerFromTo", function(s) {
  te[s] = function() {
    var e = new ue(), t = Ar.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var en = function(e, t, r) {
  return e[t] = r;
}, Mi = function(e, t, r) {
  return e[t](r);
}, wo = function(e, t, r, n) {
  return e[t](n.fp, r);
}, ko = function(e, t, r) {
  return e.setAttribute(t, r);
}, tn = function(e, t) {
  return K(e[t]) ? Mi : Gr(e[t]) && e.setAttribute ? ko : en;
}, Ai = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, To = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, zi = function(e, t) {
  var r = t._pt, n = "";
  if (!e && t.b)
    n = t.b;
  else if (e === 1 && t.e)
    n = t.e;
  else {
    for (; r; )
      n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n, r = r._next;
    n += t.c;
  }
  t.set(t.t, t.p, n, t);
}, rn = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, So = function(e, t, r, n) {
  for (var i = this._pt, o; i; )
    o = i._next, i.p === n && i.modifier(e, t, r), i = o;
}, Co = function(e) {
  for (var t = this._pt, r, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? lr(this, t, "_pt") : t.dep || (r = 1), t = n;
  return !r;
}, Po = function(e, t, r, n) {
  n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
}, Ni = function(e) {
  for (var t = e._pt, r, n, i, o; t; ) {
    for (r = t._next, n = i; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : o) ? t._prev._next = t : i = t, (t._next = n) ? n._prev = t : o = t, t = r;
  }
  e._pt = i;
}, me = /* @__PURE__ */ (function() {
  function s(t, r, n, i, o, a, l, c, u) {
    this.t = r, this.s = i, this.c = o, this.p = n, this.r = a || Ai, this.d = l || this, this.set = c || en, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = s.prototype;
  return e.modifier = function(r, n, i) {
    this.mSet = this.mSet || this.set, this.set = Po, this.m = r, this.mt = i, this.tween = n;
  }, s;
})();
pe(Hr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return Xr[s] = 1;
});
we.TweenMax = we.TweenLite = te;
we.TimelineLite = we.TimelineMax = ue;
Z = new ue({
  sortChildren: !1,
  defaults: gt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ve.stringFilter = ki;
var st = [], Jt = {}, Ro = [], Tn = 0, Oo = 0, xr = function(e) {
  return (Jt[e] || Ro).map(function(t) {
    return t();
  });
}, jr = function() {
  var e = Date.now(), t = [];
  e - Tn > 2 && (xr("matchMediaInit"), st.forEach(function(r) {
    var n = r.queries, i = r.conditions, o, a, l, c;
    for (a in n)
      o = Ee.matchMedia(n[a]).matches, o && (l = 1), o !== i[a] && (i[a] = o, c = 1);
    c && (r.revert(), l && t.push(r));
  }), xr("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(n) {
      return r.add(null, n);
    });
  }), Tn = e, xr("matchMedia"));
}, Di = /* @__PURE__ */ (function() {
  function s(t, r) {
    this.selector = r && zr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Oo++, t && this.add(t);
  }
  var e = s.prototype;
  return e.add = function(r, n, i) {
    K(r) && (i = n, n = r, r = K);
    var o = this, a = function() {
      var c = X, u = o.selector, f;
      return c && c !== o && c.data.push(o), i && (o.selector = zr(i)), X = o, f = n.apply(o, arguments), K(f) && o._r.push(f), X = c, o.selector = u, o.isReverted = !1, f;
    };
    return o.last = a, r === K ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var n = X;
    X = null, r(this), X = n;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof s ? r.push.apply(r, n.getTweens()) : n instanceof te && !(n.parent && n.parent.data === "nested") && r.push(n);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, n) {
    var i = this;
    if (r ? (function() {
      for (var a = i.getTweens(), l = i.data.length, c; l--; )
        c = i.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
          return a.splice(a.indexOf(u), 1);
        }));
      for (a.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, f) {
        return f.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), l = i.data.length; l--; )
        c = i.data[l], c instanceof ue ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof te) && c.revert && c.revert(r);
      i._r.forEach(function(u) {
        return u(r, i);
      }), i.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), n)
      for (var o = st.length; o--; )
        st[o].id === this.id && st.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, s;
})(), Eo = /* @__PURE__ */ (function() {
  function s(t) {
    this.contexts = [], this.scope = t, X && X.data.push(this);
  }
  var e = s.prototype;
  return e.add = function(r, n, i) {
    Ne(r) || (r = {
      matches: r
    });
    var o = new Di(0, i || this.scope), a = o.conditions = {}, l, c, u;
    X && !o.selector && (o.selector = X.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (c in r)
      c === "all" ? u = 1 : (l = Ee.matchMedia(r[c]), l && (st.indexOf(o) < 0 && st.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(jr) : l.addEventListener("change", jr)));
    return u && n(o, function(f) {
      return o.add(null, f);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, s;
})(), rr = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(n) {
      return yi(n);
    });
  },
  timeline: function(e) {
    return new ue(e);
  },
  getTweensOf: function(e, t) {
    return Z.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, n) {
    oe(e) && (e = Ce(e)[0]);
    var i = rt(e || {}).get, o = r ? ai : oi;
    return r === "native" && (r = ""), e && (t ? o((be[t] && be[t].get || i)(e, t, r, n)) : function(a, l, c) {
      return o((be[a] && be[a].get || i)(e, a, l, c));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Ce(e), e.length > 1) {
      var n = e.map(function(u) {
        return ge.quickSetter(u, t, r);
      }), i = n.length;
      return function(u) {
        for (var f = i; f--; )
          n[f](u);
      };
    }
    e = e[0] || {};
    var o = be[t], a = rt(e), l = a.harness && (a.harness.aliases || {})[t] || t, c = o ? function(u) {
      var f = new o();
      ht._pt = 0, f.init(e, r ? u + r : u, ht, 0, [e]), f.render(1, f), ht._pt && rn(1, ht);
    } : a.set(e, l);
    return o ? c : function(u) {
      return c(e, l, r ? u + r : u, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var n, i = ge.to(e, ke((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})), o = function(l, c, u) {
      return i.resetTo(t, l, c, u);
    };
    return o.tween = i, o;
  },
  isTweening: function(e) {
    return Z.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = it(e.ease, gt.ease)), xn(gt, e || {});
  },
  config: function(e) {
    return xn(ve, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, n = e.plugins, i = e.defaults, o = e.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !be[a] && !we[a] && Dt(t + " effect requires " + a + " plugin.");
    }), mr[t] = function(a, l, c) {
      return r(Ce(a), ke(l || {}, i), c);
    }, o && (ue.prototype[t] = function(a, l, c) {
      return this.add(mr[t](a, Ne(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    j[e] = it(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? it(e, t) : j;
  },
  getById: function(e) {
    return Z.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new ue(e), n, i;
    for (r.smoothChildTiming = he(e.smoothChildTiming), Z.remove(r), r._dp = 0, r._time = r._tTime = Z._time, n = Z._first; n; )
      i = n._next, (t || !(!n._dur && n instanceof te && n.vars.onComplete === n._targets[0])) && Me(r, n, n._start - n._delay), n = i;
    return Me(Z, r, 0), r;
  },
  context: function(e, t) {
    return e ? new Di(e, t) : X;
  },
  matchMedia: function(e) {
    return new Eo(e);
  },
  matchMediaRefresh: function() {
    return st.forEach(function(e) {
      var t = e.conditions, r, n;
      for (n in t)
        t[n] && (t[n] = !1, r = 1);
      r && e.revert();
    }) || jr();
  },
  addEventListener: function(e, t) {
    var r = Jt[e] || (Jt[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = Jt[e], n = r && r.indexOf(t);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: ao,
    wrapYoyo: lo,
    distribute: pi,
    random: _i,
    snap: mi,
    normalize: oo,
    getUnit: le,
    clamp: ro,
    splitColor: vi,
    toArray: Ce,
    selector: zr,
    mapRange: bi,
    pipe: io,
    unitize: so,
    interpolate: co,
    shuffle: hi
  },
  install: ti,
  effects: mr,
  ticker: xe,
  updateRoot: ue.updateRoot,
  plugins: be,
  globalTimeline: Z,
  core: {
    PropTween: me,
    globals: ri,
    Tween: te,
    Timeline: ue,
    Animation: Ft,
    getCache: rt,
    _removeLinkedListItem: lr,
    reverting: function() {
      return ae;
    },
    context: function(e) {
      return e && X && (X.data.push(e), e._ctx = X), X;
    },
    suppressOverwrites: function(e) {
      return Ur = e;
    }
  }
};
pe("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return rr[s] = te[s];
});
xe.add(ue.updateRoot);
ht = rr.to({}, {
  duration: 0
});
var Mo = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, Ao = function(e, t) {
  var r = e._targets, n, i, o;
  for (n in t)
    for (i = r.length; i--; )
      o = e._ptLookup[i][n], o && (o = o.d) && (o._pt && (o = Mo(o, n)), o && o.modifier && o.modifier(t[n], e, r[i], n));
}, yr = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, i, o) {
      o._onInit = function(a) {
        var l, c;
        if (oe(i) && (l = {}, pe(i, function(u) {
          return l[u] = 1;
        }), i = l), t) {
          l = {};
          for (c in i)
            l[c] = t(i[c]);
          i = l;
        }
        Ao(a, i);
      };
    }
  };
}, ge = rr.registerPlugin({
  name: "attr",
  init: function(e, t, r, n, i) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, i, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      ae ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, yr("roundProps", Nr), yr("modifiers"), yr("snap", mi)) || rr;
te.version = ue.version = ge.version = "3.13.0";
ei = 1;
Wr() && vt();
j.Power0;
j.Power1;
j.Power2;
j.Power3;
j.Power4;
j.Linear;
j.Quad;
j.Cubic;
j.Quart;
j.Quint;
j.Strong;
j.Elastic;
j.Back;
j.SteppedEase;
j.Bounce;
j.Sine;
j.Expo;
j.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Sn, Ge, mt, nn, tt, Cn, sn, zo = function() {
  return typeof window < "u";
}, Ve = {}, et = 180 / Math.PI, _t = Math.PI / 180, dt = Math.atan2, Pn = 1e8, on = /([A-Z])/g, No = /(left|right|width|margin|padding|x)/i, Do = /[\s,\(]\S/, Ae = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ir = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, jo = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Io = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Lo = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, ji = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Ii = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Fo = function(e, t, r) {
  return e.style[t] = r;
}, Vo = function(e, t, r) {
  return e.style.setProperty(t, r);
}, Bo = function(e, t, r) {
  return e._gsap[t] = r;
}, Yo = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, Uo = function(e, t, r, n, i) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(i, o);
}, Go = function(e, t, r, n, i) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(i, o);
}, J = "transform", _e = J + "Origin", Wo = function s(e, t) {
  var r = this, n = this.target, i = n.style, o = n._gsap;
  if (e in Ve && i) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ae[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = Le(n, a);
      }) : this.tfm[e] = o.x ? o[e] : Le(n, e), e === _e && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ae.transform.split(",").forEach(function(a) {
        return s.call(r, a, t);
      });
    if (this.props.indexOf(J) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(_e, t, "")), e = J;
  }
  (i || t) && this.props.push(e, t, i[e]);
}, Li = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, qo = function() {
  var e = this.props, t = this.target, r = t.style, n = t._gsap, i, o;
  for (i = 0; i < e.length; i += 3)
    e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? r[e[i]] = e[i + 2] : r.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(on, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = sn(), (!i || !i.isStart) && !r[J] && (Li(r), n.zOrigin && r[_e] && (r[_e] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, Fi = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: qo,
    save: Wo
  };
  return e._gsap || ge.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, Vi, Lr = function(e, t) {
  var r = Ge.createElementNS ? Ge.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ge.createElement(e);
  return r && r.style ? r : Ge.createElement(e);
}, Pe = function s(e, t, r) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(on, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && s(e, wt(t) || t, 1) || "";
}, Rn = "O,Moz,ms,Ms,Webkit".split(","), wt = function(e, t, r) {
  var n = t || tt, i = n.style, o = 5;
  if (e in i && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Rn[o] + e in i); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Rn[o] : "") + e;
}, Fr = function() {
  zo() && window.document && (Sn = window, Ge = Sn.document, mt = Ge.documentElement, tt = Lr("div") || {
    style: {}
  }, Lr("div"), J = wt(J), _e = J + "Origin", tt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Vi = !!wt("perspective"), sn = ge.core.reverting, nn = 1);
}, On = function(e) {
  var t = e.ownerSVGElement, r = Lr("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), i;
  n.style.display = "block", r.appendChild(n), mt.appendChild(r);
  try {
    i = n.getBBox();
  } catch {
  }
  return r.removeChild(n), mt.removeChild(r), i;
}, En = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, Bi = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = On(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = On(e)), t && !t.width && !t.x && !t.y ? {
    x: +En(e, ["x", "cx", "x1"]) || 0,
    y: +En(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Yi = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Bi(e));
}, at = function(e, t) {
  if (t) {
    var r = e.style, n;
    t in Ve && t !== _e && (t = J), r.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(n === "--" ? t : t.replace(on, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, We = function(e, t, r, n, i, o) {
  var a = new me(e._pt, t, r, 0, 1, o ? Ii : ji);
  return e._pt = a, a.b = n, a.e = i, e._props.push(r), a;
}, Mn = {
  deg: 1,
  rad: 1,
  turn: 1
}, $o = {
  grid: 1,
  flex: 1
}, He = function s(e, t, r, n) {
  var i = parseFloat(r) || 0, o = (r + "").trim().substr((i + "").length) || "px", a = tt.style, l = No.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, h = n === "px", p = n === "%", m, d, _, b;
  if (n === o || !i || Mn[n] || Mn[o])
    return i;
  if (o !== "px" && !h && (i = s(e, t, r, "px")), b = e.getCTM && Yi(e), (p || o === "%") && (Ve[t] || ~t.indexOf("adius")))
    return m = b ? e.getBBox()[l ? "width" : "height"] : e[u], ee(p ? i / m * f : i / 100 * m);
  if (a[l ? "width" : "height"] = f + (h ? o : n), d = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !c ? e : e.parentNode, b && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === Ge || !d.appendChild) && (d = Ge.body), _ = d._gsap, _ && p && _.width && l && _.time === xe.time && !_.uncache)
    return ee(i / _.width * f);
  if (p && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = f + n, m = e[u], y ? e.style[t] = y : at(e, t);
  } else
    (p || o === "%") && !$o[Pe(d, "display")] && (a.position = Pe(e, "position")), d === e && (a.position = "static"), d.appendChild(tt), m = tt[u], d.removeChild(tt), a.position = "absolute";
  return l && p && (_ = rt(d), _.time = xe.time, _.width = d[u]), ee(h ? m * i / f : m && i ? f / m * i : 0);
}, Le = function(e, t, r, n) {
  var i;
  return nn || Fr(), t in Ae && t !== "transform" && (t = Ae[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ve[t] && t !== "transform" ? (i = Bt(e, n), i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : ir(Pe(e, _e)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || i === "auto" || n || ~(i + "").indexOf("calc(")) && (i = nr[t] && nr[t](e, t, r) || Pe(e, t) || ii(e, t) || (t === "opacity" ? 1 : 0))), r && !~(i + "").trim().indexOf(" ") ? He(e, t, i, r) + r : i;
}, Xo = function(e, t, r, n) {
  if (!r || r === "none") {
    var i = wt(t, e, 1), o = i && Pe(e, i, 1);
    o && o !== r ? (t = i, r = o) : t === "borderColor" && (r = Pe(e, "borderTopColor"));
  }
  var a = new me(this._pt, e.style, t, 0, 1, zi), l = 0, c = 0, u, f, h, p, m, d, _, b, y, w, T, g;
  if (a.b = r, a.e = n, r += "", n += "", n.substring(0, 6) === "var(--" && (n = Pe(e, n.substring(4, n.indexOf(")")))), n === "auto" && (d = e.style[t], e.style[t] = n, n = Pe(e, t) || n, d ? e.style[t] = d : at(e, t)), u = [r, n], ki(u), r = u[0], n = u[1], h = r.match(ft) || [], g = n.match(ft) || [], g.length) {
    for (; f = ft.exec(n); )
      _ = f[0], y = n.substring(l, f.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), _ !== (d = h[c++] || "") && (p = parseFloat(d) || 0, T = d.substr((p + "").length), _.charAt(1) === "=" && (_ = pt(p, _) + T), b = parseFloat(_), w = _.substr((b + "").length), l = ft.lastIndex - w.length, w || (w = w || ve.units[t] || T, l === n.length && (n += w, a.e += w)), T !== w && (p = He(e, t, d, w) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: b - p,
        m: m && m < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = t === "display" && n === "none" ? Ii : ji;
  return Qn.test(n) && (a.e = 0), this._pt = a, a;
}, An = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ho = function(e) {
  var t = e.split(" "), r = t[0], n = t[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r, r = n, n = e), t[0] = An[r] || r, t[1] = An[n] || n, t.join(" ");
}, Zo = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, n = r.style, i = t.u, o = r._gsap, a, l, c;
    if (i === "all" || i === !0)
      n.cssText = "", l = 1;
    else
      for (i = i.split(","), c = i.length; --c > -1; )
        a = i[c], Ve[a] && (l = 1, a = a === "transformOrigin" ? _e : J), at(r, a);
    l && (at(r, J), o && (o.svg && r.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", Bt(r, 1), o.uncache = 1, Li(n)));
  }
}, nr = {
  clearProps: function(e, t, r, n, i) {
    if (i.data !== "isFromStart") {
      var o = e._pt = new me(e._pt, t, r, 0, 0, Zo);
      return o.u = n, o.pr = -10, o.tween = i, e._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Vt = [1, 0, 0, 1, 0, 0], Ui = {}, Gi = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, zn = function(e) {
  var t = Pe(e, J);
  return Gi(t) ? Vt : t.substr(7).match(Jn).map(ee);
}, an = function(e, t) {
  var r = e._gsap || rt(e), n = e.style, i = zn(e), o, a, l, c;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, i = [l.a, l.b, l.c, l.d, l.e, l.f], i.join(",") === "1,0,0,1,0,0" ? Vt : i) : (i === Vt && !e.offsetParent && e !== mt && !r.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, a = e.nextElementSibling, mt.appendChild(e)), i = zn(e), l ? n.display = l : at(e, "display"), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : mt.removeChild(e))), t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
}, Vr = function(e, t, r, n, i, o) {
  var a = e._gsap, l = i || an(e, !0), c = a.xOrigin || 0, u = a.yOrigin || 0, f = a.xOffset || 0, h = a.yOffset || 0, p = l[0], m = l[1], d = l[2], _ = l[3], b = l[4], y = l[5], w = t.split(" "), T = parseFloat(w[0]) || 0, g = parseFloat(w[1]) || 0, S, C, x, k;
  r ? l !== Vt && (C = p * _ - m * d) && (x = T * (_ / C) + g * (-d / C) + (d * y - _ * b) / C, k = T * (-m / C) + g * (p / C) - (p * y - m * b) / C, T = x, g = k) : (S = Bi(e), T = S.x + (~w[0].indexOf("%") ? T / 100 * S.width : T), g = S.y + (~(w[1] || w[0]).indexOf("%") ? g / 100 * S.height : g)), n || n !== !1 && a.smooth ? (b = T - c, y = g - u, a.xOffset = f + (b * p + y * d) - b, a.yOffset = h + (b * m + y * _) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = g, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!r, e.style[_e] = "0px 0px", o && (We(o, a, "xOrigin", c, T), We(o, a, "yOrigin", u, g), We(o, a, "xOffset", f, a.xOffset), We(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", T + " " + g);
}, Bt = function(e, t) {
  var r = e._gsap || new Pi(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var n = e.style, i = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), c = Pe(e, _e) || "0", u, f, h, p, m, d, _, b, y, w, T, g, S, C, x, k, z, B, I, Y, $, G, L, U, E, Oe, v, M, N, D, V, H;
  return u = f = h = d = _ = b = y = w = T = 0, p = m = 1, r.svg = !!(e.getCTM && Yi(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[J] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[J] !== "none" ? l[J] : "")), n.scale = n.rotate = n.translate = "none"), C = an(e, r.svg), r.svg && (r.uncache ? (E = e.getBBox(), c = r.xOrigin - E.x + "px " + (r.yOrigin - E.y) + "px", U = "") : U = !t && e.getAttribute("data-svg-origin"), Vr(e, U || c, !!U || r.originIsAbsolute, r.smooth !== !1, C)), g = r.xOrigin || 0, S = r.yOrigin || 0, C !== Vt && (B = C[0], I = C[1], Y = C[2], $ = C[3], u = G = C[4], f = L = C[5], C.length === 6 ? (p = Math.sqrt(B * B + I * I), m = Math.sqrt($ * $ + Y * Y), d = B || I ? dt(I, B) * et : 0, y = Y || $ ? dt(Y, $) * et + d : 0, y && (m *= Math.abs(Math.cos(y * _t))), r.svg && (u -= g - (g * B + S * Y), f -= S - (g * I + S * $))) : (H = C[6], D = C[7], v = C[8], M = C[9], N = C[10], V = C[11], u = C[12], f = C[13], h = C[14], x = dt(H, N), _ = x * et, x && (k = Math.cos(-x), z = Math.sin(-x), U = G * k + v * z, E = L * k + M * z, Oe = H * k + N * z, v = G * -z + v * k, M = L * -z + M * k, N = H * -z + N * k, V = D * -z + V * k, G = U, L = E, H = Oe), x = dt(-Y, N), b = x * et, x && (k = Math.cos(-x), z = Math.sin(-x), U = B * k - v * z, E = I * k - M * z, Oe = Y * k - N * z, V = $ * z + V * k, B = U, I = E, Y = Oe), x = dt(I, B), d = x * et, x && (k = Math.cos(x), z = Math.sin(x), U = B * k + I * z, E = G * k + L * z, I = I * k - B * z, L = L * k - G * z, B = U, G = E), _ && Math.abs(_) + Math.abs(d) > 359.9 && (_ = d = 0, b = 180 - b), p = ee(Math.sqrt(B * B + I * I + Y * Y)), m = ee(Math.sqrt(L * L + H * H)), x = dt(G, L), y = Math.abs(x) > 2e-4 ? x * et : 0, T = V ? 1 / (V < 0 ? -V : V) : 0), r.svg && (U = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Gi(Pe(e, J)), U && e.setAttribute("transform", U))), Math.abs(y) > 90 && Math.abs(y) < 270 && (i ? (p *= -1, y += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), t = t || r.uncache, r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = f - ((r.yPercent = f && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = ee(p), r.scaleY = ee(m), r.rotation = ee(d) + a, r.rotationX = ee(_) + a, r.rotationY = ee(b) + a, r.skewX = y + a, r.skewY = w + a, r.transformPerspective = T + o, (r.zOrigin = parseFloat(c.split(" ")[2]) || !t && r.zOrigin || 0) && (n[_e] = ir(c)), r.xOffset = r.yOffset = 0, r.force3D = ve.force3D, r.renderTransform = r.svg ? Qo : Vi ? Wi : Jo, r.uncache = 0, r;
}, ir = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, vr = function(e, t, r) {
  var n = le(t);
  return ee(parseFloat(t) + parseFloat(He(e, "x", r + "px", n))) + n;
}, Jo = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Wi(e, t);
}, Qe = "0deg", Ot = "0px", Ke = ") ", Wi = function(e, t) {
  var r = t || this, n = r.xPercent, i = r.yPercent, o = r.x, a = r.y, l = r.z, c = r.rotation, u = r.rotationY, f = r.rotationX, h = r.skewX, p = r.skewY, m = r.scaleX, d = r.scaleY, _ = r.transformPerspective, b = r.force3D, y = r.target, w = r.zOrigin, T = "", g = b === "auto" && e && e !== 1 || b === !0;
  if (w && (f !== Qe || u !== Qe)) {
    var S = parseFloat(u) * _t, C = Math.sin(S), x = Math.cos(S), k;
    S = parseFloat(f) * _t, k = Math.cos(S), o = vr(y, o, C * k * -w), a = vr(y, a, -Math.sin(S) * -w), l = vr(y, l, x * k * -w + w);
  }
  _ !== Ot && (T += "perspective(" + _ + Ke), (n || i) && (T += "translate(" + n + "%, " + i + "%) "), (g || o !== Ot || a !== Ot || l !== Ot) && (T += l !== Ot || g ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ke), c !== Qe && (T += "rotate(" + c + Ke), u !== Qe && (T += "rotateY(" + u + Ke), f !== Qe && (T += "rotateX(" + f + Ke), (h !== Qe || p !== Qe) && (T += "skew(" + h + ", " + p + Ke), (m !== 1 || d !== 1) && (T += "scale(" + m + ", " + d + Ke), y.style[J] = T || "translate(0, 0)";
}, Qo = function(e, t) {
  var r = t || this, n = r.xPercent, i = r.yPercent, o = r.x, a = r.y, l = r.rotation, c = r.skewX, u = r.skewY, f = r.scaleX, h = r.scaleY, p = r.target, m = r.xOrigin, d = r.yOrigin, _ = r.xOffset, b = r.yOffset, y = r.forceCSS, w = parseFloat(o), T = parseFloat(a), g, S, C, x, k;
  l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= _t, c *= _t, g = Math.cos(l) * f, S = Math.sin(l) * f, C = Math.sin(l - c) * -h, x = Math.cos(l - c) * h, c && (u *= _t, k = Math.tan(c - u), k = Math.sqrt(1 + k * k), C *= k, x *= k, u && (k = Math.tan(u), k = Math.sqrt(1 + k * k), g *= k, S *= k)), g = ee(g), S = ee(S), C = ee(C), x = ee(x)) : (g = f, x = h, S = C = 0), (w && !~(o + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (w = He(p, "x", o, "px"), T = He(p, "y", a, "px")), (m || d || _ || b) && (w = ee(w + m - (m * g + d * C) + _), T = ee(T + d - (m * S + d * x) + b)), (n || i) && (k = p.getBBox(), w = ee(w + n / 100 * k.width), T = ee(T + i / 100 * k.height)), k = "matrix(" + g + "," + S + "," + C + "," + x + "," + w + "," + T + ")", p.setAttribute("transform", k), y && (p.style[J] = k);
}, Ko = function(e, t, r, n, i) {
  var o = 360, a = oe(i), l = parseFloat(i) * (a && ~i.indexOf("rad") ? et : 1), c = l - n, u = n + c + "deg", f, h;
  return a && (f = i.split("_")[1], f === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), f === "cw" && c < 0 ? c = (c + o * Pn) % o - ~~(c / o) * o : f === "ccw" && c > 0 && (c = (c - o * Pn) % o - ~~(c / o) * o)), e._pt = h = new me(e._pt, t, r, n, c, jo), h.e = u, h.u = "deg", e._props.push(r), h;
}, Nn = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, ea = function(e, t, r) {
  var n = Nn({}, r._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, c, u, f, h, p, m;
  n.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), o[J] = t, a = Bt(r, 1), at(r, J), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[J], o[J] = t, a = Bt(r, 1), o[J] = c);
  for (l in Ve)
    c = n[l], u = a[l], c !== u && i.indexOf(l) < 0 && (p = le(c), m = le(u), f = p !== m ? He(r, l, c, m) : parseFloat(c), h = parseFloat(u), e._pt = new me(e._pt, a, l, f, h - f, Ir), e._pt.u = m || 0, e._props.push(l));
  Nn(a, n);
};
pe("padding,margin,Width,Radius", function(s, e) {
  var t = "Top", r = "Right", n = "Bottom", i = "Left", o = (e < 3 ? [t, r, n, i] : [t + i, t + r, n + r, n + i]).map(function(a) {
    return e < 2 ? s + a : "border" + a + s;
  });
  nr[e > 1 ? "border" + s : s] = function(a, l, c, u, f) {
    var h, p;
    if (arguments.length < 4)
      return h = o.map(function(m) {
        return Le(a, m, c);
      }), p = h.join(" "), p.split(h[0]).length === 5 ? h[0] : p;
    h = (u + "").split(" "), p = {}, o.forEach(function(m, d) {
      return p[m] = h[d] = h[d] || h[(d - 1) / 2 | 0];
    }), a.init(l, p, f);
  };
});
var qi = {
  name: "css",
  register: Fr,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, n, i) {
    var o = this._props, a = e.style, l = r.vars.startAt, c, u, f, h, p, m, d, _, b, y, w, T, g, S, C, x;
    nn || Fr(), this.styles = this.styles || Fi(e), x = this.styles.props, this.tween = r;
    for (d in t)
      if (d !== "autoRound" && (u = t[d], !(be[d] && Ri(d, t, r, n, e, i)))) {
        if (p = typeof u, m = nr[d], p === "function" && (u = u.call(r, n, e, i), p = typeof u), p === "string" && ~u.indexOf("random(") && (u = It(u)), m)
          m(this, e, d, u, r) && (C = 1);
        else if (d.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(d) + "").trim(), u += "", $e.lastIndex = 0, $e.test(c) || (_ = le(c), b = le(u)), b ? _ !== b && (c = He(e, d, c, b) + b) : _ && (u += _), this.add(a, "setProperty", c, u, n, i, 0, 0, d), o.push(d), x.push(d, 0, a[d]);
        else if (p !== "undefined") {
          if (l && d in l ? (c = typeof l[d] == "function" ? l[d].call(r, n, e, i) : l[d], oe(c) && ~c.indexOf("random(") && (c = It(c)), le(c + "") || c === "auto" || (c += ve.units[d] || le(Le(e, d)) || ""), (c + "").charAt(1) === "=" && (c = Le(e, d))) : c = Le(e, d), h = parseFloat(c), y = p === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), f = parseFloat(u), d in Ae && (d === "autoAlpha" && (h === 1 && Le(e, "visibility") === "hidden" && f && (h = 0), x.push("visibility", 0, a.visibility), We(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), d !== "scale" && d !== "transform" && (d = Ae[d], ~d.indexOf(",") && (d = d.split(",")[0]))), w = d in Ve, w) {
            if (this.styles.save(d), p === "string" && u.substring(0, 6) === "var(--" && (u = Pe(e, u.substring(4, u.indexOf(")"))), f = parseFloat(u)), T || (g = e._gsap, g.renderTransform && !t.parseTransform || Bt(e, t.parseTransform), S = t.smoothOrigin !== !1 && g.smooth, T = this._pt = new me(this._pt, a, J, 0, 1, g.renderTransform, g, 0, -1), T.dep = 1), d === "scale")
              this._pt = new me(this._pt, g, "scaleY", g.scaleY, (y ? pt(g.scaleY, y + f) : f) - g.scaleY || 0, Ir), this._pt.u = 0, o.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              x.push(_e, 0, a[_e]), u = Ho(u), g.svg ? Vr(e, u, 0, S, 0, this) : (b = parseFloat(u.split(" ")[2]) || 0, b !== g.zOrigin && We(this, g, "zOrigin", g.zOrigin, b), We(this, a, d, ir(c), ir(u)));
              continue;
            } else if (d === "svgOrigin") {
              Vr(e, u, 1, S, 0, this);
              continue;
            } else if (d in Ui) {
              Ko(this, g, d, h, y ? pt(h, y + u) : u);
              continue;
            } else if (d === "smoothOrigin") {
              We(this, g, "smooth", g.smooth, u);
              continue;
            } else if (d === "force3D") {
              g[d] = u;
              continue;
            } else if (d === "transform") {
              ea(this, u, e);
              continue;
            }
          } else d in a || (d = wt(d) || d);
          if (w || (f || f === 0) && (h || h === 0) && !Do.test(u) && d in a)
            _ = (c + "").substr((h + "").length), f || (f = 0), b = le(u) || (d in ve.units ? ve.units[d] : _), _ !== b && (h = He(e, d, c, b)), this._pt = new me(this._pt, w ? g : a, d, h, (y ? pt(h, y + f) : f) - h, !w && (b === "px" || d === "zIndex") && t.autoRound !== !1 ? Lo : Ir), this._pt.u = b || 0, _ !== b && b !== "%" && (this._pt.b = c, this._pt.r = Io);
          else if (d in a)
            Xo.call(this, e, d, c, y ? y + u : u);
          else if (d in e)
            this.add(e, d, c || e[d], y ? y + u : u, n, i);
          else if (d !== "parseTransform") {
            $r(d, u);
            continue;
          }
          w || (d in a ? x.push(d, 0, a[d]) : typeof e[d] == "function" ? x.push(d, 2, e[d]()) : x.push(d, 1, c || e[d])), o.push(d);
        }
      }
    C && Ni(this);
  },
  render: function(e, t) {
    if (t.tween._time || !sn())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: Le,
  aliases: Ae,
  getSetter: function(e, t, r) {
    var n = Ae[t];
    return n && n.indexOf(",") < 0 && (t = n), t in Ve && t !== _e && (e._gsap.x || Le(e, "x")) ? r && Cn === r ? t === "scale" ? Yo : Bo : (Cn = r || {}) && (t === "scale" ? Uo : Go) : e.style && !Gr(e.style[t]) ? Fo : ~t.indexOf("-") ? Vo : tn(e, t);
  },
  core: {
    _removeProperty: at,
    _getMatrix: an
  }
};
ge.utils.checkPrefix = wt;
ge.core.getStyleSaver = Fi;
(function(s, e, t, r) {
  var n = pe(s + "," + e + "," + t, function(i) {
    Ve[i] = 1;
  });
  pe(e, function(i) {
    ve.units[i] = "deg", Ui[i] = 1;
  }), Ae[n[13]] = s + "," + e, pe(r, function(i) {
    var o = i.split(":");
    Ae[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
pe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ve.units[s] = "px";
});
ge.registerPlugin(qi);
var F = ge.registerPlugin(qi) || ge;
F.core.Tween;
const $i = {
  fadeIn: (s) => F.fromTo(s, { opacity: 0 }, { opacity: 1, duration: 0.8 }),
  scaleIn: (s) => F.fromTo(
    s,
    { scale: 0 },
    { scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  ),
  slideUp: (s) => F.fromTo(s, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }),
  bounceIn: (s) => F.fromTo(
    s,
    { scale: 0 },
    { scale: 1, duration: 0.8, ease: "bounce.out" }
  ),
  none: () => {
  }
}, sr = {
  jiggle: (s) => {
    F.killTweensOf(s), F.to(s, {
      keyframes: [
        { scale: 1.1, rotation: 2, duration: 0.15, ease: "power1.out" },
        { scale: 0.95, rotation: -2, duration: 0.15, ease: "power1.inOut" },
        { scale: 1.05, rotation: 1, duration: 0.15, ease: "power1.out" },
        { scale: 1, rotation: 0, duration: 0.2, ease: "back.out(2)" }
      ]
    });
  },
  scale: (s) => {
    F.to(s, { scale: 1.05, duration: 0.2, ease: "power1.out" });
  },
  bounce: (s) => {
    F.to(s, {
      y: -5,
      duration: 0.3,
      ease: "bounce.out",
      yoyo: !0,
      repeat: 1
    });
  },
  shadowPulse: (s) => {
    F.fromTo(
      s,
      { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
      {
        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power2.inOut"
      }
    );
  },
  float3D: (s) => {
    const e = s.querySelector("img"), t = s.querySelector("h3"), r = s.querySelector("p"), n = s.querySelector("div:last-child");
    F.to(s, {
      // y: -10,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      transformPerspective: 700,
      duration: 0.1,
      ease: "power3.out"
    }), F.to(e, { y: -10, scale: 1.05, duration: 0.5, ease: "power3.out" }), F.to(t, { y: -8, duration: 0.4, ease: "power3.out" }), F.to(r, { y: -6, duration: 0.4, ease: "power3.out" }), F.to(n, { y: -5, opacity: 1, duration: 0.4, ease: "power3.out" });
  },
  reset: (s) => {
    const e = s.querySelector("img"), t = s.querySelector("h3"), r = s.querySelector("p"), n = s.querySelector("div:last-child");
    F.to(s, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.1,
      ease: "power3.inOut"
    }), F.to([e, t, r, n], {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut"
    });
  },
  wobbleFollow: (s) => {
    const e = s.getBoundingClientRect(), t = (n) => {
      const i = n.clientX - e.left, o = n.clientY - e.top, a = e.width / 2, l = e.height / 2, c = (o - l) / l * 5, u = (i - a) / a * 5;
      F.to(s, {
        rotationX: c,
        rotationY: u,
        transformPerspective: 800,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.01
      });
    }, r = () => {
      F.to(s, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };
    return s.addEventListener("mousemove", t), s.addEventListener("mouseleave", r), () => {
      s.removeEventListener("mousemove", t), s.removeEventListener("mouseleave", r);
    };
  },
  none: () => {
  }
}, ta = De(
  "inline-flex items-center cursor-pointer justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // upgrading button colors so they look like a real design system instead of random hex codes
      variant: {
        dark: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-xs",
        primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs shadow-indigo-500/20",
        secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300 dark:hover:bg-indigo-900/60 border border-indigo-200/50 dark:border-indigo-800/40",
        destructive: "bg-rose-600 text-white hover:bg-rose-500 shadow-xs shadow-rose-500/20",
        ok: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-xs shadow-emerald-500/20",
        ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800",
        link: "text-indigo-600 hover:underline dark:text-indigo-400",
        outline: "bg-transparent hover:bg-gray-50 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 dark:hover:bg-zinc-800/60"
      },
      size: {
        default: "px-9 py-3",
        sm: "px-4 py-2",
        lg: "px-14 py-4",
        xl: "px-16 py-4",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
), Xi = de.forwardRef(
  ({
    className: s,
    variant: e,
    size: t,
    asChild: r = !1,
    animation: n = "fadeIn",
    hoverAnimation: i = "jiggle",
    ...o
  }, a) => {
    const l = r ? ar : "button", c = ze(null);
    ot(() => {
      const m = c.current;
      !m || n === "none" || $i[n]?.(m);
    }, [n]);
    const u = () => {
      const m = c.current;
      m && sr[i]?.(m);
    }, f = () => {
      F.to(c.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3
      });
    }, h = () => {
      F.to(c.current, { scale: 0.92, duration: 0.1 });
    }, p = () => {
      F.to(c.current, {
        scale: 1.05,
        duration: 0.15,
        ease: "back.out(2)"
      });
    };
    return /* @__PURE__ */ P.jsx(
      l,
      {
        ref: (m) => {
          c.current = m, typeof a == "function" ? a(m) : a && (a.current = m);
        },
        className: se(ta({ variant: e, size: t, className: s })),
        onMouseEnter: u,
        onMouseLeave: f,
        onMouseDown: h,
        onMouseUp: p,
        ...o
      }
    );
  }
);
Xi.displayName = "Button";
const ra = De(
  "rounded-lg transition-all duration-300 cursor-pointer overflow-hidden",
  {
    variants: {
      // cards looking sharp enough to cut butter
      variant: {
        light: "bg-white text-zinc-900 border border-gray-200/90 shadow-sm hover:shadow-md dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800",
        dark: "bg-zinc-900 text-white border border-zinc-800 shadow-md hover:shadow-lg",
        outline: "border border-gray-300 bg-transparent text-zinc-900 hover:border-gray-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600"
      },
      // hoverEffect: {
      //   none: "",
      //   scale: "hover:scale-[1.02]",
      //   shadow: "hover:shadow-xl",
      //   lift: "hover:-translate-y-1 hover:shadow-xl",
      //   rotate: "hover:rotate-1",
      // },
      size: {
        sm: "p-3 text-sm",
        md: "p-6 text-base",
        lg: "p-8 text-lg"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "md"
    }
  }
), na = de.forwardRef(
  ({
    asChild: s = !1,
    title: e,
    description: t,
    children: r,
    className: n,
    variant: i,
    image: o,
    ratio: a = "16:9",
    size: l,
    footer: c,
    animate: u = !0,
    hoverAnimation: f = "none",
    ...h
  }, p) => {
    const m = s ? ar : "div", d = ze(null), _ = () => {
      const g = d.current;
      g && sr[f]?.(g);
    }, b = () => {
      const g = d.current;
      g && sr.reset(g);
    }, y = () => {
      const g = d.current;
      g && F.to(g, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
    }, w = () => {
      const g = d.current;
      g && F.to(g, { scale: 1.05, duration: 0.1, ease: "back.out(2)" });
    }, T = a === "16:9" ? "aspect-video" : a === "4:3" ? "aspect-[4/3]" : "aspect-square";
    return /* @__PURE__ */ P.jsxs(
      m,
      {
        ref: (g) => {
          d.current = g, typeof p == "function" ? p(g) : p && (p.current = g);
        },
        onMouseEnter: _,
        onMouseLeave: b,
        onMouseDown: y,
        onMouseUp: w,
        className: se(ra({ variant: i, size: l }), n),
        role: "article",
        tabIndex: 0,
        ...h,
        children: [
          o && /* @__PURE__ */ P.jsx("div", { className: `${T} mb-4`, children: /* @__PURE__ */ P.jsx(
            "img",
            {
              src: o,
              alt: e || "Card image",
              className: "w-full h-full object-cover rounded-md"
            }
          ) }),
          e && /* @__PURE__ */ P.jsx("h3", { className: "font-semibold text-lg mb-2 text-[inherit]", children: e }),
          t && /* @__PURE__ */ P.jsx("p", { className: "text-gray-500 dark:text-zinc-400 mb-4 text-[inherit] text-sm leading-relaxed", children: t }),
          r,
          c && /* @__PURE__ */ P.jsx("div", { className: "mt-4", children: c })
        ]
      }
    );
  }
);
na.displayName = "Card";
const ia = De(
  "relative z-50 rounded-xl transition-all duration-300 shadow-2xl",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-900 shadow-2xl border border-gray-200 hover:shadow-xl",
        dark: "bg-slate-900 text-white shadow-lg border border-slate-700 hover:shadow-xl",
        outline: "bg-transparent border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-gray-100 backdrop-blur-md"
      },
      size: {
        sm: "w-[90%] max-w-sm p-4",
        md: "w-[90%] max-w-md p-6",
        lg: "w-[90%] max-w-lg p-8"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "md"
    }
  }
), sa = de.forwardRef(
  ({
    asChild: s = !1,
    title: e,
    description: t,
    children: r,
    className: n,
    isOpen: i = !1,
    onClose: o,
    onDone: a,
    doneText: l = "Done",
    closeText: c = "Close",
    variant: u,
    size: f,
    ...h
  }, p) => {
    if (!i) return null;
    const m = s ? ar : "div";
    return /* @__PURE__ */ P.jsxs("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: [
      /* @__PURE__ */ P.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          onClick: o
        }
      ),
      /* @__PURE__ */ P.jsx(
        m,
        {
          ref: p,
          className: se(
            ia({ variant: u, size: f }),
            "relative rounded-xl transform scale-100 transition-all duration-300 animate-fadeIn",
            n
          ),
          ...h,
          children: /* @__PURE__ */ P.jsxs("div", { children: [
            e && /* @__PURE__ */ P.jsx("h3", { className: "text-xl font-semibold mb-2 text-[inherit]", children: e }),
            t && /* @__PURE__ */ P.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4 text-[inherit]", children: t }),
            /* @__PURE__ */ P.jsx("div", { className: "mb-4", children: r }),
            /* @__PURE__ */ P.jsxs("div", { className: "flex justify-end gap-3 mt-6", children: [
              /* @__PURE__ */ P.jsx(
                "button",
                {
                  onClick: o,
                  className: se(
                    "px-4 py-2 rounded-md font-medium transition",
                    u === "dark" ? "border border-slate-600 hover:bg-slate-700" : "border border-gray-300 hover:bg-gray-100"
                  ),
                  children: c
                }
              ),
              /* @__PURE__ */ P.jsx(
                "button",
                {
                  onClick: a,
                  className: se(
                    "px-4 py-2 rounded-md text-white font-medium transition",
                    u === "dark" ? "bg-indigo-500 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700"
                  ),
                  children: l
                }
              )
            ] })
          ] })
        }
      )
    ] });
  }
);
sa.displayName = "Modal";
const oa = De(
  "w-full rounded-lg focus:outline-none shadow-xs transition-all duration-150 border bg-white dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg"
      },
      tone: {
        default: "border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400",
        error: "border-rose-400 dark:border-rose-600 focus:ring-2 focus:ring-rose-400/20 focus:border-rose-500",
        success: "border-emerald-400 dark:border-emerald-600 focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-500"
      },
      disabled: {
        true: "bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-zinc-500 cursor-not-allowed opacity-80"
      }
    },
    defaultVariants: {
      size: "md",
      tone: "default",
      disabled: !1
    }
  }
), Ut = de.forwardRef(
  ({
    label: s,
    hint: e,
    error: t,
    className: r,
    size: n = "md",
    tone: i,
    disabled: o,
    id: a,
    ...l
  }, c) => {
    const u = a || de.useId?.() || `input-${Math.random().toString(36).slice(2, 9)}`;
    return /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-1 w-full", children: [
      s && /* @__PURE__ */ P.jsx(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-gray-700 dark:text-zinc-300",
          children: s
        }
      ),
      /* @__PURE__ */ P.jsx(
        "input",
        {
          id: u,
          ref: c,
          className: se(oa({ size: n, tone: i, disabled: o }), r),
          disabled: o,
          ...l
        }
      ),
      t ? /* @__PURE__ */ P.jsx("p", { className: "text-xs text-rose-500 dark:text-rose-400 mt-0.5", children: t }) : e ? /* @__PURE__ */ P.jsx("p", { className: "text-xs text-gray-500 dark:text-zinc-400 mt-0.5", children: e }) : null
    ] });
  }
);
Ut.displayName = "Input";
const aa = de.forwardRef(
  ({ className: s, ...e }, t) => {
    const r = ze(null);
    return ot(() => {
      const n = r.current;
      if (!n) return;
      n.style.willChange = "box-shadow, transform";
      const i = () => {
        F.fromTo(
          n,
          { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          {
            boxShadow: "0 6px 20px rgba(59,130,246,0.12)",
            duration: 0.15,
            ease: "power2.inOut"
          }
        ), F.fromTo(
          n,
          { y: 0 },
          { y: -2, duration: 0.1, ease: "power2.out" }
        );
      }, o = () => {
        F.to(n, {
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      return n.addEventListener("focus", i), n.addEventListener("blur", o), () => {
        n.removeEventListener("focus", i), n.removeEventListener("blur", o);
      };
    }, []), /* @__PURE__ */ P.jsx(
      Ut,
      {
        ref: (n) => {
          r.current = n, typeof t == "function" ? t(n) : t && (t.current = n);
        },
        ...e,
        className: s
      }
    );
  }
);
aa.displayName = "AnimatedInput";
const la = De("relative w-full"), ca = De(
  "w-full bg-transparent border-b border-gray-300 dark:border-zinc-700 pb-2 pt-6 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-zinc-900 dark:text-zinc-100 transition-all",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: { size: "md" }
  }
), ua = de.forwardRef(({ label: s, size: e = "md", className: t, ...r }, n) => {
  const [i, o] = or(!1), a = !!(r.value ?? r.defaultValue), l = i || a;
  return /* @__PURE__ */ P.jsxs("div", { className: la(), children: [
    /* @__PURE__ */ P.jsx(
      "input",
      {
        ref: n,
        ...r,
        onFocus: (c) => {
          o(!0), r.onFocus?.(c);
        },
        onBlur: (c) => {
          o(!1), r.onBlur?.(c);
        },
        className: se(ca({ size: e }), t)
      }
    ),
    /* @__PURE__ */ P.jsx(
      "label",
      {
        className: se(
          "absolute left-0 top-2 origin-left text-gray-500 pointer-events-none transform transition-all",
          l ? "-translate-y-4 scale-75" : "translate-y-0 scale-100"
        ),
        children: s
      }
    )
  ] });
});
ua.displayName = "FloatingLabelInput";
const da = de.forwardRef(
  ({
    icon: s,
    iconPosition: e = "left",
    className: t,
    iconColor: r = "#9ca3af",
    animated: n = !0,
    ...i
  }, o) => {
    const a = ze(null), l = ze(null);
    ot(() => {
      if (!n || !l.current || !a.current) return;
      const u = a.current.querySelector("input"), f = () => {
        F.to(l.current, {
          scale: 1.15,
          y: 0,
          color: "#3b82f6",
          duration: 0.15,
          ease: "power2.out"
        });
      }, h = () => {
        F.to(l.current, {
          scale: 1,
          y: 0,
          color: r,
          duration: 0.25,
          ease: "power2.out"
        });
      };
      return u?.addEventListener("focus", f), u?.addEventListener("blur", h), () => {
        u?.removeEventListener("focus", f), u?.removeEventListener("blur", h);
      };
    }, [n, r]);
    const c = s ? e === "left" ? "pl-12" : "pr-12" : "";
    return /* @__PURE__ */ P.jsxs("div", { ref: a, className: "relative w-full", children: [
      s && e === "left" && /* @__PURE__ */ P.jsx(
        "div",
        {
          ref: l,
          className: se(
            "absolute left-4 top-11 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none",
            n && "will-change-transform will-change-color"
          ),
          style: { color: r },
          children: s
        }
      ),
      /* @__PURE__ */ P.jsx(
        Ut,
        {
          ref: o,
          ...i,
          className: se(
            "rounded-xl border border-gray-300 bg-white shadow-sm hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200",
            c,
            t
          )
        }
      ),
      s && e === "right" && /* @__PURE__ */ P.jsx(
        "div",
        {
          ref: l,
          className: se(
            "absolute right-1/2 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none",
            n && "will-change-transform will-change-color"
          ),
          style: { color: r },
          children: s
        }
      )
    ] });
  }
);
da.displayName = "InputWithIcon";
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ha = (s) => s.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Dn = (s) => {
  const e = ha(s);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Hi = (...s) => s.filter((e, t, r) => !!e && e.trim() !== "" && r.indexOf(e) === t).join(" ").trim(), pa = (s) => {
  for (const e in s)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ma = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = Br(
  ({
    color: s = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: n = "",
    children: i,
    iconNode: o,
    ...a
  }, l) => wr(
    "svg",
    {
      ref: l,
      ...ma,
      width: e,
      height: e,
      stroke: s,
      strokeWidth: r ? Number(t) * 24 / Number(e) : t,
      className: Hi("lucide", n),
      ...!i && !pa(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...o.map(([c, u]) => wr(c, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = (s, e) => {
  const t = Br(
    ({ className: r, ...n }, i) => wr(_a, {
      ref: i,
      iconNode: e,
      className: Hi(
        `lucide-${fa(Dn(s))}`,
        `lucide-${s}`,
        r
      ),
      ...n
    })
  );
  return t.displayName = Dn(s), t;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ba = dr("chevron-left", ga);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ya = dr("chevron-right", xa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], wa = dr("eye-off", va);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ka = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ta = dr("eye", ka), Sa = de.forwardRef(
  (s, e) => {
    const [t, r] = or(!1);
    return /* @__PURE__ */ P.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ P.jsx(
        Ut,
        {
          ...s,
          ref: e,
          type: t ? "text" : "password",
          className: se("pr-10", s.className)
        }
      ),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          type: "button",
          "aria-label": t ? "Hide password" : "Show password",
          onClick: () => r((n) => !n),
          className: "absolute right-2 top-11 -translate-y-1/2 p-1 rounded",
          children: t ? /* @__PURE__ */ P.jsx(wa, { size: 18 }) : /* @__PURE__ */ P.jsx(Ta, { size: 18 })
        }
      )
    ] });
  }
);
Sa.displayName = "PasswordInput";
const Ca = de.forwardRef(
  ({ onChange: s, step: e = 1, min: t, max: r, ...n }, i) => {
    const o = () => {
      const c = Number(i?.current?.value || n.value || 0) + e;
      r !== void 0 && c > r || s?.(c);
    }, a = () => {
      const c = Number(i?.current?.value || n.value || 0) - e;
      t !== void 0 && c < t || s?.(c);
    };
    return /* @__PURE__ */ P.jsxs("div", { className: "flex items-stretch gap-2", children: [
      /* @__PURE__ */ P.jsx("div", { className: "flex-1", children: /* @__PURE__ */ P.jsx(Ut, { ...n, ref: i, type: "number" }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            onClick: o,
            className: "px-3 py-1 bg-gray-100 rounded",
            children: "+"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            onClick: a,
            className: "px-3 py-1 bg-gray-100 rounded",
            children: "−"
          }
        )
      ] })
    ] });
  }
);
Ca.displayName = "NumberInput";
const Pa = De(
  "w-full rounded-md border px-3 py-2 resize-y focus:outline-none transition",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: { size: "md" }
  }
), Ra = de.forwardRef(
  ({ label: s, size: e, className: t, ...r }, n) => /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-1", children: [
    s && /* @__PURE__ */ P.jsx("label", { className: "text-sm font-medium text-gray-700", children: s }),
    /* @__PURE__ */ P.jsx(
      "textarea",
      {
        ref: n,
        className: se(Pa({ size: e }), t),
        ...r
      }
    )
  ] })
);
Ra.displayName = "Textarea";
const Oa = De(
  "w-full flex items-center justify-between px-6 py-4 rounded-md border border-gray-200 transition-all",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        light: "bg-white text-gray-800 shadow",
        primary: "bg-indigo-600 text-white",
        glass: "backdrop-blur-md bg-white/10 text-white border border-white/20"
      },
      size: {
        default: "h-16",
        sm: "h-12",
        lg: "h-20",
        xl: "h-24"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "default"
    }
  }
), Ea = Br(
  ({
    className: s,
    variant: e,
    size: t,
    asChild: r = !1,
    animation: n = "fadeIn",
    hoverAnimation: i = "none",
    children: o,
    ...a
  }, l) => {
    const c = r ? ar : "nav", u = ze(null);
    ot(() => {
      !u.current || n === "none" || $i[n]?.(u.current);
    }, [n]);
    const f = () => {
      sr[i]?.(u.current);
    }, h = () => {
      F.to(u.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.1
      });
    };
    return /* @__PURE__ */ P.jsx(
      c,
      {
        ref: (p) => {
          u.current = p, typeof l == "function" ? l(p) : l && (l.current = p);
        },
        className: se(Oa({ variant: e, size: t }), s),
        onMouseEnter: f,
        onMouseLeave: h,
        ...a,
        children: o || /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
          /* @__PURE__ */ P.jsx("h1", { className: "font-bold text-xl", children: "Logo" }),
          /* @__PURE__ */ P.jsxs("div", { className: "flex gap-5 font-medium", children: [
            /* @__PURE__ */ P.jsx("a", { href: "#home", className: "hover:opacity-80 transition", children: "Home" }),
            /* @__PURE__ */ P.jsx("a", { href: "#about", className: "hover:opacity-80 transition", children: "About" }),
            /* @__PURE__ */ P.jsx("a", { href: "#services", className: "hover:opacity-80 transition", children: "Services" })
          ] }),
          /* @__PURE__ */ P.jsx("div", { children: /* @__PURE__ */ P.jsx(Xi, { size: "sm", hoverAnimation: "none", children: "Action" }) })
        ] })
      }
    );
  }
);
Ea.displayName = "Navbar";
const Ma = De(
  "absolute z-50 px-3 py-1.5 text-xs font-medium rounded-md shadow-lg pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border border-slate-700",
        light: "bg-white text-gray-800 shadow-md border border-gray-200",
        primary: "bg-indigo-600 text-white"
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
      }
    },
    defaultVariants: {
      variant: "dark",
      position: "top"
    }
  }
), Aa = de.forwardRef(
  ({
    children: s,
    content: e,
    variant: t = "dark",
    position: r = "top",
    delay: n = 100,
    animated: i = !0,
    className: o,
    ...a
  }, l) => {
    const [c, u] = or(!1), f = ze(null), h = ze(null), p = () => {
      f.current = setTimeout(() => {
        u(!0);
      }, n);
    }, m = () => {
      f.current && clearTimeout(f.current), h.current && i ? F.to(h.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.15,
        onComplete: () => u(!1)
      }) : u(!1);
    };
    return ot(() => {
      c && h.current && i && F.fromTo(
        h.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.7)" }
      );
    }, [c, i]), /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: "relative inline-flex",
        onMouseEnter: p,
        onMouseLeave: m,
        onFocus: p,
        onBlur: m,
        children: [
          s,
          c && /* @__PURE__ */ P.jsx(
            "div",
            {
              ref: (d) => {
                h.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
              },
              className: se(Ma({ variant: t, position: r }), o),
              role: "tooltip",
              ...a,
              children: e
            }
          )
        ]
      }
    );
  }
);
Aa.displayName = "Tooltip";
const za = de.forwardRef(
  ({
    slides: s,
    autoPlay: e = !1,
    interval: t = 4e3,
    showControls: r = !0,
    showIndicators: n = !0,
    aspectRatio: i = "16/9",
    className: o,
    ...a
  }, l) => {
    const [c, u] = or(0), f = ze(null), h = ze(null), p = () => {
      u((y) => (y + 1) % s.length);
    }, m = () => {
      u((y) => (y - 1 + s.length) % s.length);
    }, d = (y) => {
      u(y);
    };
    ot(() => {
      if (!e || s.length <= 1) return;
      const y = setInterval(() => {
        p();
      }, t);
      return () => clearInterval(y);
    }, [e, t, s.length]), ot(() => {
      h.current && F.fromTo(
        h.current,
        { opacity: 0.6, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }, [c]);
    const _ = i === "16/9" ? "aspect-video" : i === "4/3" ? "aspect-[4/3]" : i === "square" ? "aspect-square" : "h-80", b = s[c];
    return !s || s.length === 0 ? /* @__PURE__ */ P.jsx("div", { className: "p-4 text-center text-gray-500", children: "No slides provided" }) : /* @__PURE__ */ P.jsxs(
      "div",
      {
        ref: (y) => {
          f.current = y, typeof l == "function" ? l(y) : l && (l.current = y);
        },
        className: se(
          "relative overflow-hidden rounded-xl bg-slate-900 text-white select-none w-full shadow-lg group",
          _,
          o
        ),
        ...a,
        children: [
          /* @__PURE__ */ P.jsxs("div", { ref: h, className: "relative w-full h-full", children: [
            b.image && /* @__PURE__ */ P.jsx(
              "img",
              {
                src: b.image,
                alt: b.title || `Slide ${c + 1}`,
                className: "w-full h-full object-cover"
              }
            ),
            (b.title || b.description || b.content) && /* @__PURE__ */ P.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8", children: [
              b.title && /* @__PURE__ */ P.jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: b.title }),
              b.description && /* @__PURE__ */ P.jsx("p", { className: "text-gray-200 text-sm sm:text-base max-w-xl", children: b.description }),
              b.content && /* @__PURE__ */ P.jsx("div", { className: "mt-3", children: b.content })
            ] })
          ] }),
          r && s.length > 1 && /* @__PURE__ */ P.jsx(
            "button",
            {
              onClick: m,
              "aria-label": "Previous slide",
              className: "absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110",
              children: /* @__PURE__ */ P.jsx(ba, { size: 22 })
            }
          ),
          r && s.length > 1 && /* @__PURE__ */ P.jsx(
            "button",
            {
              onClick: p,
              "aria-label": "Next slide",
              className: "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110",
              children: /* @__PURE__ */ P.jsx(ya, { size: 22 })
            }
          ),
          n && s.length > 1 && /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10", children: s.map((y, w) => /* @__PURE__ */ P.jsx(
            "button",
            {
              onClick: () => d(w),
              "aria-label": `Go to slide ${w + 1}`,
              className: se(
                "h-2 rounded-full transition-all duration-300",
                w === c ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              )
            },
            w
          )) })
        ]
      }
    );
  }
);
za.displayName = "Carousel";
const Na = De("w-full transition-all", {
  variants: {
    type: {
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      stack: "flex flex-col",
      row: "flex flex-row flex-wrap items-center",
      grid2: "grid grid-cols-1 sm:grid-cols-2",
      grid3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      grid4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      split: "flex flex-col md:flex-row items-center justify-between"
    },
    gap: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8"
    },
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8"
    }
  },
  defaultVariants: {
    type: "container",
    gap: "md",
    padding: "none"
  }
}), Da = de.forwardRef(
  ({ as: s = "div", type: e, gap: t, padding: r, className: n, children: i, ...o }, a) => /* @__PURE__ */ P.jsx(
    s,
    {
      ref: a,
      className: se(Na({ type: e, gap: t, padding: r }), n),
      ...o,
      children: i
    }
  )
);
Da.displayName = "Layout";
export {
  aa as AnimatedInput,
  Xi as Button,
  na as Card,
  za as Carousel,
  ua as FloatingLabelInput,
  Ut as Input,
  da as InputWithIcon,
  Da as Layout,
  sa as Modal,
  Ea as Navbar,
  Ca as NumberInput,
  Sa as PasswordInput,
  Ra as Textarea,
  Aa as Tooltip,
  ta as buttonVariants,
  ra as cardVariants,
  ia as modalVariants,
  Oa as navbarVariants
};
