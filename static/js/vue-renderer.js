!(function t(e, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define([], r)
    : 'object' == typeof exports
    ? (exports.LCVueRenderer = r())
    : (e.LCVueRenderer = r());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o),
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function e() {
                return t.default;
              }
            : function e() {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = '/'),
      r((r.s = 37))
    );
  })([
    function (t, e) {
      t.exports = window.Vue;
    },
    function (t, e, r) {
      'use strict';
      var n = r(9);
      r.o(n, 'TransformStage') &&
        r.d(e, 'TransformStage', function () {
          return n.TransformStage;
        }),
        r.o(n, 'isDOMText') &&
          r.d(e, 'isDOMText', function () {
            return n.isDOMText;
          }),
        r.o(n, 'isI18nData') &&
          r.d(e, 'isI18nData', function () {
            return n.isI18nData;
          }),
        r.o(n, 'isJSExpression') &&
          r.d(e, 'isJSExpression', function () {
            return n.isJSExpression;
          }),
        r.o(n, 'isJSFunction') &&
          r.d(e, 'isJSFunction', function () {
            return n.isJSFunction;
          }),
        r.o(n, 'isJSSlot') &&
          r.d(e, 'isJSSlot', function () {
            return n.isJSSlot;
          }),
        r.o(n, 'isNodeSchema') &&
          r.d(e, 'isNodeSchema', function () {
            return n.isNodeSchema;
          });
      var o = r(14),
        i = r(15),
        u = r(5);
      r.d(e, 'isI18nData', function () {
        return u.a;
      });
      var a = r(16),
        c = r(17),
        s = r(18),
        f = r(19),
        l = r(20);
      r.d(e, 'isDOMText', function () {
        return l.a;
      }),
        r.d(e, 'isNodeSchema', function () {
          return l.b;
        });
      var h = r(21),
        p = r(22),
        d = r(23),
        v = r(24),
        y = r(25);
      r.d(e, 'isJSExpression', function () {
        return y.a;
      }),
        r.d(e, 'isJSFunction', function () {
          return y.b;
        }),
        r.d(e, 'isJSSlot', function () {
          return y.c;
        });
      var b = r(26),
        m = r(27),
        g = r(28),
        _ = r(29);
      r.d(e, 'TransformStage', function () {
        return _.a;
      });
      var E = r(30),
        O = r(31),
        S = r(32),
        w = r(35),
        j = r(33);
    },
    function (t, e, r) {
      'use strict';
      var n = r(6),
        o = 'object' == typeof self && self && self.Object === Object && self,
        i = n.a || o || Function('return this')();
      e.a = i;
    },
    function (t, e, r) {
      'use strict';
      (function (t) {
        var n = r(2),
          o = r(36),
          i = 'object' == typeof exports && exports && !exports.nodeType && exports,
          u = i && 'object' == typeof t && t && !t.nodeType && t,
          a,
          c = u && u.exports === i ? n.a.Buffer : void 0,
          s,
          f = (c ? c.isBuffer : void 0) || o.a;
        e.a = f;
      }.call(this, r(34)(t)));
    },
    ,
    function (t, e, r) {
      'use strict';
      function n(t) {
        return t && 'i18n' === t.type;
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    function (t, e, r) {
      'use strict';
      (function (t) {
        var r = 'object' == typeof t && t && t.Object === Object && t;
        e.a = r;
      }.call(this, r(40)));
    },
    function (t, e, r) {
      'use strict';
      t.exports = r(38);
    },
    function (t, e, r) {
      'use strict';
      (function (t) {
        var n = r(6),
          o = 'object' == typeof exports && exports && !exports.nodeType && exports,
          i = o && 'object' == typeof t && t && !t.nodeType && t,
          u,
          a = i && i.exports === o && n.a.process,
          c = (function () {
            try {
              var t = i && i.require && i.require('util').types;
              return t || (a && a.binding && a.binding('util'));
            } catch (t) {}
          })();
        e.a = c;
      }.call(this, r(34)(t)));
    },
    function (t, e, r) {
      'use strict';
      var n = r(10),
        o = r(11),
        i = r.n(o);
      r.o(o, 'TransformStage') &&
        r.d(e, 'TransformStage', function () {
          return o.TransformStage;
        }),
        r.o(o, 'isDOMText') &&
          r.d(e, 'isDOMText', function () {
            return o.isDOMText;
          }),
        r.o(o, 'isI18nData') &&
          r.d(e, 'isI18nData', function () {
            return o.isI18nData;
          }),
        r.o(o, 'isJSExpression') &&
          r.d(e, 'isJSExpression', function () {
            return o.isJSExpression;
          }),
        r.o(o, 'isJSFunction') &&
          r.d(e, 'isJSFunction', function () {
            return o.isJSFunction;
          }),
        r.o(o, 'isJSSlot') &&
          r.d(e, 'isJSSlot', function () {
            return o.isJSSlot;
          }),
        r.o(o, 'isNodeSchema') &&
          r.d(e, 'isNodeSchema', function () {
            return o.isNodeSchema;
          });
      var u = r(12),
        a = r.n(u);
      r.o(u, 'TransformStage') &&
        r.d(e, 'TransformStage', function () {
          return u.TransformStage;
        }),
        r.o(u, 'isDOMText') &&
          r.d(e, 'isDOMText', function () {
            return u.isDOMText;
          }),
        r.o(u, 'isI18nData') &&
          r.d(e, 'isI18nData', function () {
            return u.isI18nData;
          }),
        r.o(u, 'isJSExpression') &&
          r.d(e, 'isJSExpression', function () {
            return u.isJSExpression;
          }),
        r.o(u, 'isJSFunction') &&
          r.d(e, 'isJSFunction', function () {
            return u.isJSFunction;
          }),
        r.o(u, 'isJSSlot') &&
          r.d(e, 'isJSSlot', function () {
            return u.isJSSlot;
          }),
        r.o(u, 'isNodeSchema') &&
          r.d(e, 'isNodeSchema', function () {
            return u.isNodeSchema;
          });
      var c = r(13),
        s = r.n(c);
      r.o(c, 'TransformStage') &&
        r.d(e, 'TransformStage', function () {
          return c.TransformStage;
        }),
        r.o(c, 'isDOMText') &&
          r.d(e, 'isDOMText', function () {
            return c.isDOMText;
          }),
        r.o(c, 'isI18nData') &&
          r.d(e, 'isI18nData', function () {
            return c.isI18nData;
          }),
        r.o(c, 'isJSExpression') &&
          r.d(e, 'isJSExpression', function () {
            return c.isJSExpression;
          }),
        r.o(c, 'isJSFunction') &&
          r.d(e, 'isJSFunction', function () {
            return c.isJSFunction;
          }),
        r.o(c, 'isJSSlot') &&
          r.d(e, 'isJSSlot', function () {
            return c.isJSSlot;
          }),
        r.o(c, 'isNodeSchema') &&
          r.d(e, 'isNodeSchema', function () {
            return c.isNodeSchema;
          });
    },
    function (t, e, r) {
      'use strict';
      var n;
      !(function (t) {
        (t.Initial = 'init'), (t.Loading = 'loading'), (t.Loaded = 'loaded'), (t.Error = 'error');
      })(n || (n = {}));
    },
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e, r) {},
    function (t, e, r) {},
    function (t, e, r) {},
    function (t, e, r) {
      'use strict';
      function n(t) {
        return t && 'object' == typeof t;
      }
    },
    function (t, e, r) {
      'use strict';
      function n(t) {
        return 'package' in t;
      }
      function o(t) {
        return !n(t);
      }
    },
    function (t, e, r) {},
    function (t, e, r) {
      'use strict';
      function n(t) {
        return 'string' == typeof t;
      }
      function o(t) {
        return t && t.componentName;
      }
      function i(t) {
        return t && t.componentsTree;
      }
      r.d(e, 'a', function () {
        return n;
      }),
        r.d(e, 'b', function () {
          return o;
        });
    },
    function (t, e, r) {
      'use strict';
      var n;
      !(function (t) {
        (t.ADDED = 'added'),
          (t.DELETED = 'deleted'),
          (t.MODIFIED = 'modified'),
          (t.COMPOSITE = 'composite');
      })(n || (n = {}));
    },
    function (t, e, r) {},
    function (t, e, r) {
      'use strict';
      var n = r(5);
      function o(t) {
        if ('object' != typeof t) return !1;
        var e = Object.getPrototypeOf(t);
        return e === Object.prototype || null === e || null === Object.getPrototypeOf(e);
      }
      function i(t) {
        return o(t) && !Object(n.a)(t);
      }
    },
    function (t, e, r) {},
    function (t, e, r) {
      'use strict';
      function n(t) {
        return t && 'JSExpression' === t.type;
      }
      function o(t) {
        return 'object' == typeof t && t && 'JSFunction' === t.type;
      }
      function i(t) {
        return t && 'JSSlot' === t.type;
      }
      function u(t) {
        return t && 'JSBlock' === t.type;
      }
      r.d(e, 'a', function () {
        return n;
      }),
        r.d(e, 'b', function () {
          return o;
        }),
        r.d(e, 'c', function () {
          return i;
        });
    },
    function (t, e, r) {
      'use strict';
      var n = r(7),
        o = r.n(n);
      function i(t) {
        return (
          t && t.prototype && (t.prototype.isReactComponent || t.prototype instanceof n.Component)
        );
      }
      function u(t) {
        return t && (i(t) || 'function' == typeof t);
      }
      function a(t) {
        return t && 'object' == typeof t && 'componentName' in t && !c(t);
      }
      function c(t) {
        return t && (Object(n.isValidElement)(t) || u(t));
      }
      function s(t) {
        return t && 'function' == typeof t && !i(t);
      }
    },
    function (t, e, r) {},
    function (t, e, r) {},
    function (t, e, r) {
      'use strict';
      var n;
      r.d(e, 'a', function () {
        return n;
      }),
        (function (t) {
          (t.Render = 'render'),
            (t.Serilize = 'serilize'),
            (t.Save = 'save'),
            (t.Clone = 'clone'),
            (t.Init = 'init'),
            (t.Upgrade = 'upgrade');
        })(n || (n = {}));
    },
    function (t, e, r) {},
    function (t, e, r) {},
    function (t, e, r) {
      'use strict';
      var n;
      !(function (t) {
        (t[(t.Environment = 1)] = 'Environment'),
          (t[(t.Library = 2)] = 'Library'),
          (t[(t.Theme = 3)] = 'Theme'),
          (t[(t.Runtime = 4)] = 'Runtime'),
          (t[(t.Components = 5)] = 'Components'),
          (t[(t.App = 6)] = 'App');
      })(n || (n = {}));
      var o = [n.Environment, n.Library, n.Theme, n.Runtime, n.Components, n.App],
        i;
      !(function (t) {
        (t.JSUrl = 'jsUrl'),
          (t.CSSUrl = 'cssUrl'),
          (t.CSSText = 'cssText'),
          (t.JSText = 'jsText'),
          (t.Bundle = 'bundle');
      })(i || (i = {}));
    },
    function (t, e, r) {},
    function (t, e) {
      t.exports = function (t) {
        if (!t.webpackPolyfill) {
          var e = Object.create(t);
          e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            Object.defineProperty(e, 'exports', { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    function (t, e, r) {
      'use strict';
      var n = 'node.prop.change',
        o = 'node.innerProp.change',
        i = 'node.edit.rerender.time';
    },
    function (t, e, r) {
      'use strict';
      function n() {
        return !1;
      }
      e.a = n;
    },
    function (t, e, r) {
      t.exports = r(41);
    },
    function (t, e, r) {
      'use strict';
      /** @license React v16.14.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(39),
        o = 'function' == typeof Symbol && Symbol.for,
        i = o ? Symbol.for('react.element') : 60103,
        u = o ? Symbol.for('react.portal') : 60106,
        a = o ? Symbol.for('react.fragment') : 60107,
        c = o ? Symbol.for('react.strict_mode') : 60108,
        s = o ? Symbol.for('react.profiler') : 60114,
        f = o ? Symbol.for('react.provider') : 60109,
        l = o ? Symbol.for('react.context') : 60110,
        h = o ? Symbol.for('react.forward_ref') : 60112,
        p = o ? Symbol.for('react.suspense') : 60113,
        d = o ? Symbol.for('react.memo') : 60115,
        v = o ? Symbol.for('react.lazy') : 60116,
        y = 'function' == typeof Symbol && Symbol.iterator;
      function b(t) {
        for (
          var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, r = 1;
          r < arguments.length;
          r++
        )
          e += '&args[]=' + encodeURIComponent(arguments[r]);
        return (
          'Minified React error #' +
          t +
          '; visit ' +
          e +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = {};
      function _(t, e, r) {
        (this.props = t), (this.context = e), (this.refs = g), (this.updater = r || m);
      }
      function E() {}
      function O(t, e, r) {
        (this.props = t), (this.context = e), (this.refs = g), (this.updater = r || m);
      }
      (_.prototype.isReactComponent = {}),
        (_.prototype.setState = function (t, e) {
          if ('object' != typeof t && 'function' != typeof t && null != t) throw Error(b(85));
          this.updater.enqueueSetState(this, t, e, 'setState');
        }),
        (_.prototype.forceUpdate = function (t) {
          this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
        }),
        (E.prototype = _.prototype);
      var S = (O.prototype = new E());
      (S.constructor = O), n(S, _.prototype), (S.isPureReactComponent = !0);
      var w = { current: null },
        j = Object.prototype.hasOwnProperty,
        P = { key: !0, ref: !0, __self: !0, __source: !0 };
      function T(t, e, r) {
        var n,
          o = {},
          u = null,
          a = null;
        if (null != e)
          for (n in (void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (u = '' + e.key), e))
            j.call(e, n) && !P.hasOwnProperty(n) && (o[n] = e[n]);
        var c = arguments.length - 2;
        if (1 === c) o.children = r;
        else if (1 < c) {
          for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
          o.children = s;
        }
        if (t && t.defaultProps) for (n in (c = t.defaultProps)) void 0 === o[n] && (o[n] = c[n]);
        return { $$typeof: i, type: t, key: u, ref: a, props: o, _owner: w.current };
      }
      function A(t, e) {
        return { $$typeof: i, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
      }
      function L(t) {
        return 'object' == typeof t && null !== t && t.$$typeof === i;
      }
      function H(t) {
        var e = { '=': '=0', ':': '=2' };
        return (
          '$' +
          ('' + t).replace(/[=:]/g, function (t) {
            return e[t];
          })
        );
      }
      var x = /\/+/g,
        B = [];
      function C(t, e, r, n) {
        if (B.length) {
          var o = B.pop();
          return (o.result = t), (o.keyPrefix = e), (o.func = r), (o.context = n), (o.count = 0), o;
        }
        return { result: t, keyPrefix: e, func: r, context: n, count: 0 };
      }
      function N(t) {
        (t.result = null),
          (t.keyPrefix = null),
          (t.func = null),
          (t.context = null),
          (t.count = 0),
          10 > B.length && B.push(t);
      }
      function I(t, e, r, n) {
        var o = typeof t;
        ('undefined' !== o && 'boolean' !== o) || (t = null);
        var a = !1;
        if (null === t) a = !0;
        else
          switch (o) {
            case 'string':
            case 'number':
              a = !0;
              break;
            case 'object':
              switch (t.$$typeof) {
                case i:
                case u:
                  a = !0;
              }
          }
        if (a) return r(n, t, '' === e ? '.' + D(t, 0) : e), 1;
        if (((a = 0), (e = '' === e ? '.' : e + ':'), Array.isArray(t)))
          for (var c = 0; c < t.length; c++) {
            var s = e + D((o = t[c]), c);
            a += I(o, s, r, n);
          }
        else if (
          (null === t || 'object' != typeof t
            ? (s = null)
            : (s = 'function' == typeof (s = (y && t[y]) || t['@@iterator']) ? s : null),
          'function' == typeof s)
        )
          for (t = s.call(t), c = 0; !(o = t.next()).done; )
            a += I((o = o.value), (s = e + D(o, c++)), r, n);
        else if ('object' === o)
          throw (
            ((r = '' + t),
            Error(
              b(
                31,
                '[object Object]' === r
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : r,
                '',
              ),
            ))
          );
        return a;
      }
      function R(t, e, r) {
        return null == t ? 0 : I(t, '', e, r);
      }
      function D(t, e) {
        return 'object' == typeof t && null !== t && null != t.key ? H(t.key) : e.toString(36);
      }
      function M(t, e) {
        t.func.call(t.context, e, t.count++);
      }
      function U(t, e, r) {
        var n = t.result,
          o = t.keyPrefix;
        (t = t.func.call(t.context, e, t.count++)),
          Array.isArray(t)
            ? k(t, n, r, function (t) {
                return t;
              })
            : null != t &&
              (L(t) &&
                (t = A(
                  t,
                  o +
                    (!t.key || (e && e.key === t.key) ? '' : ('' + t.key).replace(x, '$&/') + '/') +
                    r,
                )),
              n.push(t));
      }
      function k(t, e, r, n, o) {
        var i = '';
        null != r && (i = ('' + r).replace(x, '$&/') + '/'), R(t, U, (e = C(e, i, n, o))), N(e);
      }
      var G = { current: null };
      function F() {
        var t = G.current;
        if (null === t) throw Error(b(321));
        return t;
      }
      var J = {
        ReactCurrentDispatcher: G,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: w,
        IsSomeRendererActing: { current: !1 },
        assign: n,
      };
      (e.Children = {
        map: function (t, e, r) {
          if (null == t) return t;
          var n = [];
          return k(t, n, null, e, r), n;
        },
        forEach: function (t, e, r) {
          if (null == t) return t;
          R(t, M, (e = C(null, null, e, r))), N(e);
        },
        count: function (t) {
          return R(
            t,
            function () {
              return null;
            },
            null,
          );
        },
        toArray: function (t) {
          var e = [];
          return (
            k(t, e, null, function (t) {
              return t;
            }),
            e
          );
        },
        only: function (t) {
          if (!L(t)) throw Error(b(143));
          return t;
        },
      }),
        (e.Component = _),
        (e.Fragment = a),
        (e.Profiler = s),
        (e.PureComponent = O),
        (e.StrictMode = c),
        (e.Suspense = p),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
        (e.cloneElement = function (t, e, r) {
          if (null == t) throw Error(b(267, t));
          var o = n({}, t.props),
            u = t.key,
            a = t.ref,
            c = t._owner;
          if (null != e) {
            if (
              (void 0 !== e.ref && ((a = e.ref), (c = w.current)),
              void 0 !== e.key && (u = '' + e.key),
              t.type && t.type.defaultProps)
            )
              var s = t.type.defaultProps;
            for (f in e)
              j.call(e, f) &&
                !P.hasOwnProperty(f) &&
                (o[f] = void 0 === e[f] && void 0 !== s ? s[f] : e[f]);
          }
          var f = arguments.length - 2;
          if (1 === f) o.children = r;
          else if (1 < f) {
            s = Array(f);
            for (var l = 0; l < f; l++) s[l] = arguments[l + 2];
            o.children = s;
          }
          return { $$typeof: i, type: t.type, key: u, ref: a, props: o, _owner: c };
        }),
        (e.createContext = function (t, e) {
          return (
            void 0 === e && (e = null),
            ((t = {
              $$typeof: l,
              _calculateChangedBits: e,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: f, _context: t }),
            (t.Consumer = t)
          );
        }),
        (e.createElement = T),
        (e.createFactory = function (t) {
          var e = T.bind(null, t);
          return (e.type = t), e;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (t) {
          return { $$typeof: h, render: t };
        }),
        (e.isValidElement = L),
        (e.lazy = function (t) {
          return { $$typeof: v, _ctor: t, _status: -1, _result: null };
        }),
        (e.memo = function (t, e) {
          return { $$typeof: d, type: t, compare: void 0 === e ? null : e };
        }),
        (e.useCallback = function (t, e) {
          return F().useCallback(t, e);
        }),
        (e.useContext = function (t, e) {
          return F().useContext(t, e);
        }),
        (e.useDebugValue = function () {}),
        (e.useEffect = function (t, e) {
          return F().useEffect(t, e);
        }),
        (e.useImperativeHandle = function (t, e, r) {
          return F().useImperativeHandle(t, e, r);
        }),
        (e.useLayoutEffect = function (t, e) {
          return F().useLayoutEffect(t, e);
        }),
        (e.useMemo = function (t, e) {
          return F().useMemo(t, e);
        }),
        (e.useReducer = function (t, e, r) {
          return F().useReducer(t, e, r);
        }),
        (e.useRef = function (t) {
          return F().useRef(t);
        }),
        (e.useState = function (t) {
          return F().useState(t);
        }),
        (e.version = '16.14.0');
    },
    function (t, e, r) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function u(t) {
        if (null == t) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(t);
      }
      function a() {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc'),
            e;
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
          for (var r = {}, n = 0; n < 10; n++) r['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(r)
              .map(function (t) {
                return r[t];
              })
              .join('')
          )
            return !1;
          var o = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (t) {
              o[t] = t;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
          );
        } catch (t) {
          return !1;
        }
      }
      t.exports = a()
        ? Object.assign
        : function (t, e) {
            for (var r, a = u(t), c, s = 1; s < arguments.length; s++) {
              for (var f in (r = Object(arguments[s]))) o.call(r, f) && (a[f] = r[f]);
              if (n) {
                c = n(r);
                for (var l = 0; l < c.length; l++) i.call(r, c[l]) && (a[c[l]] = r[c[l]]);
              }
            }
            return a;
          };
    },
    function (t, e) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (r = window);
      }
      t.exports = r;
    },
    function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, 'rendererProps', function () {
          return n;
        }),
        r.d(e, 'baseRendererPropKeys', function () {
          return o;
        }),
        r.d(e, 'leafProps', function () {
          return i;
        }),
        r.d(e, 'leafPropKeys', function () {
          return u;
        }),
        r.d(e, 'useRenderer', function () {
          return Nh;
        }),
        r.d(e, 'useLeaf', function () {
          return Ch;
        }),
        r.d(e, 'useRootScope', function () {
          return Ih;
        }),
        r.d(e, 'config', function () {
          return Yh;
        }),
        r.d(e, 'default', function () {
          return Qh;
        });
      var n = {
          __scope: { type: Object, default: void 0 },
          __schema: { type: Object, required: !0 },
          __designMode: { type: String, default: 'live' },
          __components: { type: Object, required: !0 },
          __locale: { type: String, default: void 0 },
          __messages: {
            type: Object,
            default: function t() {
              return {};
            },
          },
          __getNode: { type: Function, required: !0 },
          __triggerCompGetCtx: { type: Function, required: !0 },
        },
        o = Object.keys(n),
        i = {
          comp: { type: Object, default: void 0 },
          scope: {
            type: Object,
            default: function t() {
              return {};
            },
          },
          schema: {
            type: Object,
            default: function t() {
              return {};
            },
          },
        },
        u = Object.keys(n),
        a = r(0),
        c = r(1),
        s = r(2),
        f,
        l = s.a.Symbol,
        h = Object.prototype,
        p = h.hasOwnProperty,
        d = h.toString,
        v = l ? l.toStringTag : void 0;
      function y(t) {
        var e = p.call(t, v),
          r = t[v];
        try {
          t[v] = void 0;
          var n = !0;
        } catch (t) {}
        var o = d.call(t);
        return n && (e ? (t[v] = r) : delete t[v]), o;
      }
      var b = y,
        m,
        g = Object.prototype.toString;
      function _(t) {
        return g.call(t);
      }
      var E = _,
        O = '[object Null]',
        S = '[object Undefined]',
        w = l ? l.toStringTag : void 0;
      function j(t) {
        return null == t ? (void 0 === t ? S : O) : w && w in Object(t) ? b(t) : E(t);
      }
      var P = j;
      function T(t) {
        var e = typeof t;
        return null != t && ('object' == e || 'function' == e);
      }
      var A = T,
        L = '[object AsyncFunction]',
        H = '[object Function]',
        x = '[object GeneratorFunction]',
        B = '[object Proxy]';
      function C(t) {
        if (!A(t)) return !1;
        var e = P(t);
        return e == H || e == x || e == L || e == B;
      }
      var N = C,
        I,
        R = Array.isArray;
      function D(t) {
        return null != t && 'object' == typeof t;
      }
      var M = D,
        U = '[object String]';
      function k(t) {
        return 'string' == typeof t || (!R(t) && M(t) && P(t) == U);
      }
      var G = k;
      function F(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
          o[r] = e(t[r], r, t);
        return o;
      }
      var J = F;
      function V() {
        (this.__data__ = []), (this.size = 0);
      }
      var z = V;
      function $(t, e) {
        return t === e || (t != t && e != e);
      }
      var X = $;
      function K(t, e) {
        for (var r = t.length; r--; ) if (X(t[r][0], e)) return r;
        return -1;
      }
      var Y = K,
        Z,
        W = Array.prototype.splice;
      function q(t) {
        var e = this.__data__,
          r = Y(e, t),
          n;
        return !(r < 0) && (r == e.length - 1 ? e.pop() : W.call(e, r, 1), --this.size, !0);
      }
      var Q = q;
      function tt(t) {
        var e = this.__data__,
          r = Y(e, t);
        return r < 0 ? void 0 : e[r][1];
      }
      var et = tt;
      function rt(t) {
        return Y(this.__data__, t) > -1;
      }
      var nt = rt;
      function ot(t, e) {
        var r = this.__data__,
          n = Y(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
      }
      var it = ot;
      function ut(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (ut.prototype.clear = z),
        (ut.prototype.delete = Q),
        (ut.prototype.get = et),
        (ut.prototype.has = nt),
        (ut.prototype.set = it);
      var at = ut;
      function ct() {
        (this.__data__ = new at()), (this.size = 0);
      }
      var st = ct;
      function ft(t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      }
      var lt = ft;
      function ht(t) {
        return this.__data__.get(t);
      }
      var pt = ht;
      function dt(t) {
        return this.__data__.has(t);
      }
      var vt = dt,
        yt,
        bt = s.a['__core-js_shared__'],
        mt = (gt = /[^.]+$/.exec((bt && bt.keys && bt.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + gt
          : '',
        gt;
      function _t(t) {
        return !!mt && mt in t;
      }
      var Et = _t,
        Ot,
        St = Function.prototype.toString;
      function wt(t) {
        if (null != t) {
          try {
            return St.call(t);
          } catch (t) {}
          try {
            return t + '';
          } catch (t) {}
        }
        return '';
      }
      var jt = wt,
        Pt = /[\\^$.*+?()[\]{}|]/g,
        Tt = /^\[object .+?Constructor\]$/,
        At = Function.prototype,
        Lt = Object.prototype,
        Ht = At.toString,
        xt = Lt.hasOwnProperty,
        Bt = RegExp(
          '^' +
            Ht.call(xt)
              .replace(Pt, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        );
      function Ct(t) {
        return !(!A(t) || Et(t)) && (N(t) ? Bt : Tt).test(jt(t));
        var e;
      }
      var Nt = Ct;
      function It(t, e) {
        return null == t ? void 0 : t[e];
      }
      var Rt = It;
      function Dt(t, e) {
        var r = Rt(t, e);
        return Nt(r) ? r : void 0;
      }
      var Mt = Dt,
        Ut,
        kt = Mt(s.a, 'Map'),
        Gt,
        Ft = Mt(Object, 'create');
      function Jt() {
        (this.__data__ = Ft ? Ft(null) : {}), (this.size = 0);
      }
      var Vt = Jt;
      function zt(t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      }
      var $t = zt,
        Xt = '__lodash_hash_undefined__',
        Kt,
        Yt = Object.prototype.hasOwnProperty;
      function Zt(t) {
        var e = this.__data__;
        if (Ft) {
          var r = e[t];
          return r === Xt ? void 0 : r;
        }
        return Yt.call(e, t) ? e[t] : void 0;
      }
      var Wt = Zt,
        qt,
        Qt = Object.prototype.hasOwnProperty;
      function te(t) {
        var e = this.__data__;
        return Ft ? void 0 !== e[t] : Qt.call(e, t);
      }
      var ee = te,
        re = '__lodash_hash_undefined__';
      function ne(t, e) {
        var r = this.__data__;
        return (this.size += this.has(t) ? 0 : 1), (r[t] = Ft && void 0 === e ? re : e), this;
      }
      var oe = ne;
      function ie(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (ie.prototype.clear = Vt),
        (ie.prototype.delete = $t),
        (ie.prototype.get = Wt),
        (ie.prototype.has = ee),
        (ie.prototype.set = oe);
      var ue = ie;
      function ae() {
        (this.size = 0),
          (this.__data__ = { hash: new ue(), map: new (kt || at)(), string: new ue() });
      }
      var ce = ae;
      function se(t) {
        var e = typeof t;
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
          ? '__proto__' !== t
          : null === t;
      }
      var fe = se;
      function le(t, e) {
        var r = t.__data__;
        return fe(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
      }
      var he = le;
      function pe(t) {
        var e = he(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      }
      var de = pe;
      function ve(t) {
        return he(this, t).get(t);
      }
      var ye = ve;
      function be(t) {
        return he(this, t).has(t);
      }
      var me = be;
      function ge(t, e) {
        var r = he(this, t),
          n = r.size;
        return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
      }
      var _e = ge;
      function Ee(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (Ee.prototype.clear = ce),
        (Ee.prototype.delete = de),
        (Ee.prototype.get = ye),
        (Ee.prototype.has = me),
        (Ee.prototype.set = _e);
      var Oe = Ee,
        Se = 200;
      function we(t, e) {
        var r = this.__data__;
        if (r instanceof at) {
          var n = r.__data__;
          if (!kt || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new Oe(n);
        }
        return r.set(t, e), (this.size = r.size), this;
      }
      var je = we;
      function Pe(t) {
        var e = (this.__data__ = new at(t));
        this.size = e.size;
      }
      (Pe.prototype.clear = st),
        (Pe.prototype.delete = lt),
        (Pe.prototype.get = pt),
        (Pe.prototype.has = vt),
        (Pe.prototype.set = je);
      var Te = Pe,
        Ae = '__lodash_hash_undefined__';
      function Le(t) {
        return this.__data__.set(t, '__lodash_hash_undefined__'), this;
      }
      var He = Le;
      function xe(t) {
        return this.__data__.has(t);
      }
      var Be = xe;
      function Ce(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new Oe(); ++e < r; ) this.add(t[e]);
      }
      (Ce.prototype.add = Ce.prototype.push = He), (Ce.prototype.has = Be);
      var Ne = Ce;
      function Ie(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
        return !1;
      }
      var Re = Ie;
      function De(t, e) {
        return t.has(e);
      }
      var Me = De,
        Ue = 1,
        ke = 2;
      function Ge(t, e, r, n, o, i) {
        var u = 1 & r,
          a = t.length,
          c = e.length;
        if (a != c && !(u && c > a)) return !1;
        var s = i.get(t),
          f = i.get(e);
        if (s && f) return s == e && f == t;
        var l = -1,
          h = !0,
          p = 2 & r ? new Ne() : void 0;
        for (i.set(t, e), i.set(e, t); ++l < a; ) {
          var d = t[l],
            v = e[l];
          if (n) var y = u ? n(v, d, l, e, t, i) : n(d, v, l, t, e, i);
          if (void 0 !== y) {
            if (y) continue;
            h = !1;
            break;
          }
          if (p) {
            if (
              !Re(e, function (t, e) {
                if (!Me(p, e) && (d === t || o(d, t, r, n, i))) return p.push(e);
              })
            ) {
              h = !1;
              break;
            }
          } else if (d !== v && !o(d, v, r, n, i)) {
            h = !1;
            break;
          }
        }
        return i.delete(t), i.delete(e), h;
      }
      var Fe = Ge,
        Je,
        Ve = s.a.Uint8Array;
      function ze(t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      }
      var $e = ze;
      function Xe(t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t) {
            r[++e] = t;
          }),
          r
        );
      }
      var Ke = Xe,
        Ye = 1,
        Ze = 2,
        We = '[object Boolean]',
        qe = '[object Date]',
        Qe = '[object Error]',
        tr = '[object Map]',
        er = '[object Number]',
        rr = '[object RegExp]',
        nr = '[object Set]',
        or = '[object String]',
        ir = '[object Symbol]',
        ur = '[object ArrayBuffer]',
        ar = '[object DataView]',
        cr = l ? l.prototype : void 0,
        sr = cr ? cr.valueOf : void 0;
      function fr(t, e, r, n, o, i, u) {
        switch (r) {
          case ar:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
            (t = t.buffer), (e = e.buffer);
          case ur:
            return !(t.byteLength != e.byteLength || !i(new Ve(t), new Ve(e)));
          case We:
          case qe:
          case er:
            return X(+t, +e);
          case Qe:
            return t.name == e.name && t.message == e.message;
          case rr:
          case '[object String]':
            return t == e + '';
          case tr:
            var a = $e;
          case nr:
            var c = 1 & n;
            if ((a || (a = Ke), t.size != e.size && !c)) return !1;
            var s = u.get(t);
            if (s) return s == e;
            (n |= 2), u.set(t, e);
            var f = Fe(a(t), a(e), n, o, i, u);
            return u.delete(t), f;
          case ir:
            if (sr) return sr.call(t) == sr.call(e);
        }
        return !1;
      }
      var lr = fr;
      function hr(t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
        return t;
      }
      var pr = hr;
      function dr(t, e, r) {
        var n = e(t);
        return R(t) ? n : pr(n, r(t));
      }
      var vr = dr;
      function yr(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n; ) {
          var u = t[r];
          e(u, r, t) && (i[o++] = u);
        }
        return i;
      }
      var br = yr;
      function mr() {
        return [];
      }
      var gr = mr,
        _r,
        Er = Object.prototype.propertyIsEnumerable,
        Or = Object.getOwnPropertySymbols,
        Sr,
        wr = Or
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  br(Or(t), function (e) {
                    return Er.call(t, e);
                  }));
            }
          : gr;
      function jr(t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      }
      var Pr = jr,
        Tr = '[object Arguments]';
      function Ar(t) {
        return M(t) && P(t) == Tr;
      }
      var Lr = Ar,
        Hr = Object.prototype,
        xr = Hr.hasOwnProperty,
        Br = Hr.propertyIsEnumerable,
        Cr,
        Nr = Lr(
          (function () {
            return arguments;
          })(),
        )
          ? Lr
          : function (t) {
              return M(t) && xr.call(t, 'callee') && !Br.call(t, 'callee');
            },
        Ir = r(3),
        Rr = 9007199254740991,
        Dr = /^(?:0|[1-9]\d*)$/;
      function Mr(t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ('number' == r || ('symbol' != r && Dr.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      var Ur = Mr,
        kr = 9007199254740991;
      function Gr(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
      }
      var Fr = Gr,
        Jr = '[object Arguments]',
        Vr = '[object Array]',
        zr = '[object Boolean]',
        $r = '[object Date]',
        Xr = '[object Error]',
        Kr = '[object Function]',
        Yr = '[object Map]',
        Zr = '[object Number]',
        Wr = '[object Object]',
        qr = '[object RegExp]',
        Qr = '[object Set]',
        tn = '[object String]',
        en = '[object WeakMap]',
        rn = '[object ArrayBuffer]',
        nn = '[object DataView]',
        on,
        un = '[object Float64Array]',
        an = '[object Int8Array]',
        cn = '[object Int16Array]',
        sn = '[object Int32Array]',
        fn = '[object Uint8Array]',
        ln = '[object Uint8ClampedArray]',
        hn = '[object Uint16Array]',
        pn = '[object Uint32Array]',
        dn = {};
      function vn(t) {
        return M(t) && Fr(t.length) && !!dn[P(t)];
      }
      (dn['[object Float32Array]'] =
        dn[un] =
        dn[an] =
        dn[cn] =
        dn[sn] =
        dn[fn] =
        dn[ln] =
        dn[hn] =
        dn[pn] =
          !0),
        (dn['[object Arguments]'] =
          dn[Vr] =
          dn['[object ArrayBuffer]'] =
          dn['[object Boolean]'] =
          dn['[object DataView]'] =
          dn['[object Date]'] =
          dn['[object Error]'] =
          dn['[object Function]'] =
          dn['[object Map]'] =
          dn['[object Number]'] =
          dn[Wr] =
          dn['[object RegExp]'] =
          dn['[object Set]'] =
          dn['[object String]'] =
          dn[en] =
            !1);
      var yn = vn;
      function bn(t) {
        return function (e) {
          return t(e);
        };
      }
      var mn = bn,
        gn = r(8),
        _n = gn.a && gn.a.isTypedArray,
        En,
        On = _n ? mn(_n) : yn,
        Sn,
        wn = Object.prototype.hasOwnProperty;
      function jn(t, e) {
        var r = R(t),
          n = !r && Nr(t),
          o = !r && !n && Object(Ir.a)(t),
          i = !r && !n && !o && On(t),
          u = r || n || o || i,
          a = u ? Pr(t.length, String) : [],
          c = a.length;
        for (var s in t)
          (!e && !wn.call(t, s)) ||
            (u &&
              ('length' == s ||
                (o && ('offset' == s || 'parent' == s)) ||
                (i && ('buffer' == s || 'byteLength' == s || 'byteOffset' == s)) ||
                Ur(s, c))) ||
            a.push(s);
        return a;
      }
      var Pn = jn,
        Tn = Object.prototype;
      function An(t) {
        var e = t && t.constructor,
          r;
        return t === (('function' == typeof e && e.prototype) || Tn);
      }
      var Ln = An;
      function Hn(t, e) {
        return function (r) {
          return t(e(r));
        };
      }
      var xn = Hn,
        Bn,
        Cn = xn(Object.keys, Object),
        Nn,
        In = Object.prototype.hasOwnProperty;
      function Rn(t) {
        if (!Ln(t)) return Cn(t);
        var e = [];
        for (var r in Object(t)) In.call(t, r) && 'constructor' != r && e.push(r);
        return e;
      }
      var Dn = Rn;
      function Mn(t) {
        return null != t && Fr(t.length) && !N(t);
      }
      var Un = Mn;
      function kn(t) {
        return Un(t) ? Pn(t) : Dn(t);
      }
      var Gn = kn;
      function Fn(t) {
        return vr(t, Gn, wr);
      }
      var Jn = Fn,
        Vn = 1,
        zn,
        $n = Object.prototype.hasOwnProperty;
      function Xn(t, e, r, n, o, i) {
        var u = 1 & r,
          a = Jn(t),
          c = a.length,
          s,
          f;
        if (c != Jn(e).length && !u) return !1;
        for (var l = c; l--; ) {
          var h = a[l];
          if (!(u ? h in e : $n.call(e, h))) return !1;
        }
        var p = i.get(t),
          d = i.get(e);
        if (p && d) return p == e && d == t;
        var v = !0;
        i.set(t, e), i.set(e, t);
        for (var y = u; ++l < c; ) {
          var b = t[(h = a[l])],
            m = e[h];
          if (n) var g = u ? n(m, b, h, e, t, i) : n(b, m, h, t, e, i);
          if (!(void 0 === g ? b === m || o(b, m, r, n, i) : g)) {
            v = !1;
            break;
          }
          y || (y = 'constructor' == h);
        }
        if (v && !y) {
          var _ = t.constructor,
            E = e.constructor;
          _ == E ||
            !('constructor' in t) ||
            !('constructor' in e) ||
            ('function' == typeof _ &&
              _ instanceof _ &&
              'function' == typeof E &&
              E instanceof E) ||
            (v = !1);
        }
        return i.delete(t), i.delete(e), v;
      }
      var Kn = Xn,
        Yn,
        Zn = Mt(s.a, 'DataView'),
        Wn,
        qn = Mt(s.a, 'Promise'),
        Qn,
        to = Mt(s.a, 'Set'),
        eo,
        ro = Mt(s.a, 'WeakMap'),
        no = '[object Map]',
        oo = '[object Object]',
        io = '[object Promise]',
        uo = '[object Set]',
        ao = '[object WeakMap]',
        co = '[object DataView]',
        so = jt(Zn),
        fo = jt(kt),
        lo = jt(qn),
        ho = jt(to),
        po = jt(ro),
        vo = P;
      ((Zn && '[object DataView]' != vo(new Zn(new ArrayBuffer(1)))) ||
        (kt && '[object Map]' != vo(new kt())) ||
        (qn && vo(qn.resolve()) != io) ||
        (to && '[object Set]' != vo(new to())) ||
        (ro && '[object WeakMap]' != vo(new ro()))) &&
        (vo = function (t) {
          var e = P(t),
            r = '[object Object]' == e ? t.constructor : void 0,
            n = r ? jt(r) : '';
          if (n)
            switch (n) {
              case so:
                return '[object DataView]';
              case fo:
                return '[object Map]';
              case lo:
                return io;
              case ho:
                return '[object Set]';
              case po:
                return '[object WeakMap]';
            }
          return e;
        });
      var yo = vo,
        bo = 1,
        mo = '[object Arguments]',
        go = '[object Array]',
        _o = '[object Object]',
        Eo,
        Oo = Object.prototype.hasOwnProperty;
      function So(t, e, r, n, o, i) {
        var u = R(t),
          a = R(e),
          c = u ? '[object Array]' : yo(t),
          s = a ? '[object Array]' : yo(e),
          f = '[object Object]' == (c = '[object Arguments]' == c ? '[object Object]' : c),
          l = '[object Object]' == (s = '[object Arguments]' == s ? '[object Object]' : s),
          h = c == s;
        if (h && Object(Ir.a)(t)) {
          if (!Object(Ir.a)(e)) return !1;
          (u = !0), (f = !1);
        }
        if (h && !f)
          return i || (i = new Te()), u || On(t) ? Fe(t, e, r, n, o, i) : lr(t, e, c, r, n, o, i);
        if (!(1 & r)) {
          var p = f && Oo.call(t, '__wrapped__'),
            d = l && Oo.call(e, '__wrapped__');
          if (p || d) {
            var v = p ? t.value() : t,
              y = d ? e.value() : e;
            return i || (i = new Te()), o(v, y, r, n, i);
          }
        }
        return !!h && (i || (i = new Te()), Kn(t, e, r, n, o, i));
      }
      var wo = So;
      function jo(t, e, r, n, o) {
        return (
          t === e ||
          (null == t || null == e || (!M(t) && !M(e)) ? t != t && e != e : wo(t, e, r, n, jo, o))
        );
      }
      var Po = jo,
        To = 1,
        Ao = 2;
      function Lo(t, e, r, n) {
        var o = r.length,
          i = o,
          u = !n;
        if (null == t) return !i;
        for (t = Object(t); o--; ) {
          var a = r[o];
          if (u && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1;
        }
        for (; ++o < i; ) {
          var c = (a = r[o])[0],
            s = t[c],
            f = a[1];
          if (u && a[2]) {
            if (void 0 === s && !(c in t)) return !1;
          } else {
            var l = new Te();
            if (n) var h = n(s, f, c, t, e, l);
            if (!(void 0 === h ? Po(f, s, 3, n, l) : h)) return !1;
          }
        }
        return !0;
      }
      var Ho = Lo;
      function xo(t) {
        return t == t && !A(t);
      }
      var Bo = xo;
      function Co(t) {
        for (var e = Gn(t), r = e.length; r--; ) {
          var n = e[r],
            o = t[n];
          e[r] = [n, o, Bo(o)];
        }
        return e;
      }
      var No = Co;
      function Io(t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      }
      var Ro = Io;
      function Do(t) {
        var e = No(t);
        return 1 == e.length && e[0][2]
          ? Ro(e[0][0], e[0][1])
          : function (r) {
              return r === t || Ho(r, t, e);
            };
      }
      var Mo = Do,
        Uo = '[object Symbol]';
      function ko(t) {
        return 'symbol' == typeof t || (M(t) && '[object Symbol]' == P(t));
      }
      var Go = ko,
        Fo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Jo = /^\w*$/;
      function Vo(t, e) {
        if (R(t)) return !1;
        var r = typeof t;
        return (
          !('number' != r && 'symbol' != r && 'boolean' != r && null != t && !Go(t)) ||
          Jo.test(t) ||
          !Fo.test(t) ||
          (null != e && t in Object(e))
        );
      }
      var zo = Vo,
        $o = 'Expected a function';
      function Xo(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw new TypeError($o);
        var r = function () {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(o)) return i.get(o);
          var u = t.apply(this, n);
          return (r.cache = i.set(o, u) || i), u;
        };
        return (r.cache = new (Xo.Cache || Oe)()), r;
      }
      Xo.Cache = Oe;
      var Ko = Xo,
        Yo = 500;
      function Zo(t) {
        var e = Ko(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      }
      var Wo,
        qo =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Qo = /\\(\\)?/g,
        ti,
        ei = Zo(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(qo, function (t, r, n, o) {
              e.push(n ? o.replace(Qo, '$1') : r || t);
            }),
            e
          );
        }),
        ri = 1 / 0,
        ni = l ? l.prototype : void 0,
        oi = ni ? ni.toString : void 0;
      function ii(t) {
        if ('string' == typeof t) return t;
        if (R(t)) return J(t, ii) + '';
        if (Go(t)) return oi ? oi.call(t) : '';
        var e = t + '';
        return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
      }
      var ui = ii;
      function ai(t) {
        return null == t ? '' : ui(t);
      }
      var ci = ai;
      function si(t, e) {
        return R(t) ? t : zo(t, e) ? [t] : ei(ci(t));
      }
      var fi = si,
        li = 1 / 0;
      function hi(t) {
        if ('string' == typeof t || Go(t)) return t;
        var e = t + '';
        return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
      }
      var pi = hi;
      function di(t, e) {
        for (var r = 0, n = (e = fi(e, t)).length; null != t && r < n; ) t = t[pi(e[r++])];
        return r && r == n ? t : void 0;
      }
      var vi = di;
      function yi(t, e, r) {
        var n = null == t ? void 0 : vi(t, e);
        return void 0 === n ? r : n;
      }
      var bi = yi;
      function mi(t, e) {
        return null != t && e in Object(t);
      }
      var gi = mi;
      function _i(t, e, r) {
        for (var n = -1, o = (e = fi(e, t)).length, i = !1; ++n < o; ) {
          var u = pi(e[n]);
          if (!(i = null != t && r(t, u))) break;
          t = t[u];
        }
        return i || ++n != o
          ? i
          : !!(o = null == t ? 0 : t.length) && Fr(o) && Ur(u, o) && (R(t) || Nr(t));
      }
      var Ei = _i;
      function Oi(t, e) {
        return null != t && Ei(t, e, gi);
      }
      var Si = Oi,
        wi = 1,
        ji = 2;
      function Pi(t, e) {
        return zo(t) && Bo(e)
          ? Ro(pi(t), e)
          : function (r) {
              var n = bi(r, t);
              return void 0 === n && n === e ? Si(r, t) : Po(e, n, 3);
            };
      }
      var Ti = Pi;
      function Ai(t) {
        return t;
      }
      var Li = Ai;
      function Hi(t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      }
      var xi = Hi;
      function Bi(t) {
        return function (e) {
          return vi(e, t);
        };
      }
      var Ci = Bi;
      function Ni(t) {
        return zo(t) ? xi(pi(t)) : Ci(t);
      }
      var Ii = Ni;
      function Ri(t) {
        return 'function' == typeof t
          ? t
          : null == t
          ? Li
          : 'object' == typeof t
          ? R(t)
            ? Ti(t[0], t[1])
            : Mo(t)
          : Ii(t);
      }
      var Di = Ri,
        Mi,
        Ui = (function () {
          try {
            var t = Mt(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (t) {}
        })();
      function ki(t, e, r) {
        '__proto__' == e && Ui
          ? Ui(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
          : (t[e] = r);
      }
      var Gi = ki,
        Fi,
        Ji = Object.prototype.hasOwnProperty;
      function Vi(t, e, r) {
        var n = t[e];
        (Ji.call(t, e) && X(n, r) && (void 0 !== r || e in t)) || Gi(t, e, r);
      }
      var zi = Vi;
      function $i(t, e, r, n) {
        if (!A(t)) return t;
        for (var o = -1, i = (e = fi(e, t)).length, u = i - 1, a = t; null != a && ++o < i; ) {
          var c = pi(e[o]),
            s = r;
          if ('__proto__' === c || 'constructor' === c || 'prototype' === c) return t;
          if (o != u) {
            var f = a[c];
            void 0 === (s = n ? n(f, c, a) : void 0) && (s = A(f) ? f : Ur(e[o + 1]) ? [] : {});
          }
          zi(a, c, s), (a = a[c]);
        }
        return t;
      }
      var Xi = $i;
      function Ki(t, e, r) {
        for (var n = -1, o = e.length, i = {}; ++n < o; ) {
          var u = e[n],
            a = vi(t, u);
          r(a, u) && Xi(i, fi(u, t), a);
        }
        return i;
      }
      var Yi = Ki,
        Zi,
        Wi = xn(Object.getPrototypeOf, Object),
        qi,
        Qi,
        tu = Object.getOwnPropertySymbols
          ? function (t) {
              for (var e = []; t; ) pr(e, wr(t)), (t = Wi(t));
              return e;
            }
          : gr;
      function eu(t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      }
      var ru = eu,
        nu,
        ou = Object.prototype.hasOwnProperty;
      function iu(t) {
        if (!A(t)) return ru(t);
        var e = Ln(t),
          r = [];
        for (var n in t) ('constructor' != n || (!e && ou.call(t, n))) && r.push(n);
        return r;
      }
      var uu = iu;
      function au(t) {
        return Un(t) ? Pn(t, !0) : uu(t);
      }
      var cu = au;
      function su(t) {
        return vr(t, cu, tu);
      }
      var fu = su;
      function lu(t, e) {
        if (null == t) return {};
        var r = J(fu(t), function (t) {
          return [t];
        });
        return (
          (e = Di(e)),
          Yi(t, r, function (t, r) {
            return e(t, r[0]);
          })
        );
      }
      var hu = lu;
      function pu(t) {
        return null == t;
      }
      var du = pu;
      function vu(t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (r = r > o ? o : r) < 0 && (r += o),
          (o = e > r ? 0 : (r - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
        return i;
      }
      var yu = vu;
      function bu(t, e, r) {
        var n = t.length;
        return (r = void 0 === r ? n : r), !e && r >= n ? t : yu(t, e, r);
      }
      var mu = bu,
        gu,
        _u = '\\u0300-\\u036f',
        Eu = '\\ufe20-\\ufe2f',
        Ou = '\\u20d0-\\u20ff',
        Su,
        wu,
        ju,
        Pu = RegExp(
          '[' +
            '\\u200d' +
            '\\ud800-\\udfff' +
            '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' +
            '\\ufe0e\\ufe0f' +
            ']',
        );
      function Tu(t) {
        return Pu.test(t);
      }
      var Au = Tu;
      function Lu(t) {
        return t.split('');
      }
      var Hu = Lu,
        xu = '\\ud800-\\udfff',
        Bu = '\\u0300-\\u036f',
        Cu = '\\ufe20-\\ufe2f',
        Nu = '\\u20d0-\\u20ff',
        Iu,
        Ru = '\\ufe0e\\ufe0f',
        Du = '[\\ud800-\\udfff]',
        Mu = '[' + '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' + ']',
        Uu = '\\ud83c[\\udffb-\\udfff]',
        ku,
        Gu = '[^\\ud800-\\udfff]',
        Fu = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        Ju = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        Vu = '\\u200d',
        zu = '(?:' + Mu + '|' + Uu + ')' + '?',
        $u = '[\\ufe0e\\ufe0f]?',
        Xu,
        Ku = $u + zu + ('(?:\\u200d(?:' + [Gu, Fu, Ju].join('|') + ')' + $u + zu + ')*'),
        Yu = '(?:' + [Gu + Mu + '?', Mu, Fu, Ju, Du].join('|') + ')',
        Zu = RegExp(Uu + '(?=' + Uu + ')|' + Yu + Ku, 'g');
      function Wu(t) {
        return t.match(Zu) || [];
      }
      var qu = Wu;
      function Qu(t) {
        return Au(t) ? qu(t) : Hu(t);
      }
      var ta = Qu;
      function ea(t) {
        return function (e) {
          e = ci(e);
          var r = Au(e) ? ta(e) : void 0,
            n = r ? r[0] : e.charAt(0),
            o = r ? mu(r, 1).join('') : e.slice(1);
          return n[t]() + o;
        };
      }
      var ra,
        na,
        oa = ea('toUpperCase');
      function ia(t) {
        return oa(ci(t).toLowerCase());
      }
      var ua = ia;
      function aa(t, e, r, n) {
        var o = -1,
          i = null == t ? 0 : t.length;
        for (n && i && (r = t[++o]); ++o < i; ) r = e(r, t[o], o, t);
        return r;
      }
      var ca = aa;
      function sa(t) {
        return function (e) {
          return null == t ? void 0 : t[e];
        };
      }
      var fa,
        la,
        ha,
        pa = sa({
          '\xc0': 'A',
          '\xc1': 'A',
          '\xc2': 'A',
          '\xc3': 'A',
          '\xc4': 'A',
          '\xc5': 'A',
          '\xe0': 'a',
          '\xe1': 'a',
          '\xe2': 'a',
          '\xe3': 'a',
          '\xe4': 'a',
          '\xe5': 'a',
          '\xc7': 'C',
          '\xe7': 'c',
          '\xd0': 'D',
          '\xf0': 'd',
          '\xc8': 'E',
          '\xc9': 'E',
          '\xca': 'E',
          '\xcb': 'E',
          '\xe8': 'e',
          '\xe9': 'e',
          '\xea': 'e',
          '\xeb': 'e',
          '\xcc': 'I',
          '\xcd': 'I',
          '\xce': 'I',
          '\xcf': 'I',
          '\xec': 'i',
          '\xed': 'i',
          '\xee': 'i',
          '\xef': 'i',
          '\xd1': 'N',
          '\xf1': 'n',
          '\xd2': 'O',
          '\xd3': 'O',
          '\xd4': 'O',
          '\xd5': 'O',
          '\xd6': 'O',
          '\xd8': 'O',
          '\xf2': 'o',
          '\xf3': 'o',
          '\xf4': 'o',
          '\xf5': 'o',
          '\xf6': 'o',
          '\xf8': 'o',
          '\xd9': 'U',
          '\xda': 'U',
          '\xdb': 'U',
          '\xdc': 'U',
          '\xf9': 'u',
          '\xfa': 'u',
          '\xfb': 'u',
          '\xfc': 'u',
          '\xdd': 'Y',
          '\xfd': 'y',
          '\xff': 'y',
          '\xc6': 'Ae',
          '\xe6': 'ae',
          '\xde': 'Th',
          '\xfe': 'th',
          '\xdf': 'ss',
          '\u0100': 'A',
          '\u0102': 'A',
          '\u0104': 'A',
          '\u0101': 'a',
          '\u0103': 'a',
          '\u0105': 'a',
          '\u0106': 'C',
          '\u0108': 'C',
          '\u010a': 'C',
          '\u010c': 'C',
          '\u0107': 'c',
          '\u0109': 'c',
          '\u010b': 'c',
          '\u010d': 'c',
          '\u010e': 'D',
          '\u0110': 'D',
          '\u010f': 'd',
          '\u0111': 'd',
          '\u0112': 'E',
          '\u0114': 'E',
          '\u0116': 'E',
          '\u0118': 'E',
          '\u011a': 'E',
          '\u0113': 'e',
          '\u0115': 'e',
          '\u0117': 'e',
          '\u0119': 'e',
          '\u011b': 'e',
          '\u011c': 'G',
          '\u011e': 'G',
          '\u0120': 'G',
          '\u0122': 'G',
          '\u011d': 'g',
          '\u011f': 'g',
          '\u0121': 'g',
          '\u0123': 'g',
          '\u0124': 'H',
          '\u0126': 'H',
          '\u0125': 'h',
          '\u0127': 'h',
          '\u0128': 'I',
          '\u012a': 'I',
          '\u012c': 'I',
          '\u012e': 'I',
          '\u0130': 'I',
          '\u0129': 'i',
          '\u012b': 'i',
          '\u012d': 'i',
          '\u012f': 'i',
          '\u0131': 'i',
          '\u0134': 'J',
          '\u0135': 'j',
          '\u0136': 'K',
          '\u0137': 'k',
          '\u0138': 'k',
          '\u0139': 'L',
          '\u013b': 'L',
          '\u013d': 'L',
          '\u013f': 'L',
          '\u0141': 'L',
          '\u013a': 'l',
          '\u013c': 'l',
          '\u013e': 'l',
          '\u0140': 'l',
          '\u0142': 'l',
          '\u0143': 'N',
          '\u0145': 'N',
          '\u0147': 'N',
          '\u014a': 'N',
          '\u0144': 'n',
          '\u0146': 'n',
          '\u0148': 'n',
          '\u014b': 'n',
          '\u014c': 'O',
          '\u014e': 'O',
          '\u0150': 'O',
          '\u014d': 'o',
          '\u014f': 'o',
          '\u0151': 'o',
          '\u0154': 'R',
          '\u0156': 'R',
          '\u0158': 'R',
          '\u0155': 'r',
          '\u0157': 'r',
          '\u0159': 'r',
          '\u015a': 'S',
          '\u015c': 'S',
          '\u015e': 'S',
          '\u0160': 'S',
          '\u015b': 's',
          '\u015d': 's',
          '\u015f': 's',
          '\u0161': 's',
          '\u0162': 'T',
          '\u0164': 'T',
          '\u0166': 'T',
          '\u0163': 't',
          '\u0165': 't',
          '\u0167': 't',
          '\u0168': 'U',
          '\u016a': 'U',
          '\u016c': 'U',
          '\u016e': 'U',
          '\u0170': 'U',
          '\u0172': 'U',
          '\u0169': 'u',
          '\u016b': 'u',
          '\u016d': 'u',
          '\u016f': 'u',
          '\u0171': 'u',
          '\u0173': 'u',
          '\u0174': 'W',
          '\u0175': 'w',
          '\u0176': 'Y',
          '\u0177': 'y',
          '\u0178': 'Y',
          '\u0179': 'Z',
          '\u017b': 'Z',
          '\u017d': 'Z',
          '\u017a': 'z',
          '\u017c': 'z',
          '\u017e': 'z',
          '\u0132': 'IJ',
          '\u0133': 'ij',
          '\u0152': 'Oe',
          '\u0153': 'oe',
          '\u0149': "'n",
          '\u017f': 's',
        }),
        da = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        va = '\\u0300-\\u036f',
        ya = '\\ufe20-\\ufe2f',
        ba = '\\u20d0-\\u20ff',
        ma,
        ga,
        _a = RegExp('[' + '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' + ']', 'g');
      function Ea(t) {
        return (t = ci(t)) && t.replace(da, pa).replace(_a, '');
      }
      var Oa = Ea,
        Sa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function wa(t) {
        return t.match(Sa) || [];
      }
      var ja = wa,
        Pa = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function Ta(t) {
        return Pa.test(t);
      }
      var Aa = Ta,
        La = '\\ud800-\\udfff',
        Ha = '\\u0300-\\u036f',
        xa = '\\ufe20-\\ufe2f',
        Ba = '\\u20d0-\\u20ff',
        Ca,
        Na = '\\u2700-\\u27bf',
        Ia = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        Ra,
        Da,
        Ma = '\\u2000-\\u206f',
        Ua,
        ka = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        Ga = '\\ufe0e\\ufe0f',
        Fa =
          '\\xac\\xb1\\xd7\\xf7' +
          '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf' +
          '\\u2000-\\u206f' +
          ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        Ja = "['\u2019]",
        Va = '[' + Fa + ']',
        za,
        $a = '\\d+',
        Xa = '[' + Na + ']',
        Ka = '[' + Ia + ']',
        Ya = '[^\\ud800-\\udfff' + Fa + $a + Na + Ia + ka + ']',
        Za,
        Wa,
        qa,
        Qa = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        tc = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        ec = '[' + ka + ']',
        rc = '\\u200d',
        nc = '(?:' + Ka + '|' + Ya + ')',
        oc = '(?:' + ec + '|' + Ya + ')',
        ic = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
        uc = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
        ac =
          '(?:' +
          ('[' + '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' + ']') +
          '|' +
          '\\ud83c[\\udffb-\\udfff]' +
          ')' +
          '?',
        cc = '[\\ufe0e\\ufe0f]?',
        sc,
        fc = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        lc = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        hc =
          '[\\ufe0e\\ufe0f]?' +
          ac +
          ('(?:\\u200d(?:' +
            ['[^\\ud800-\\udfff]', Qa, tc].join('|') +
            ')[\\ufe0e\\ufe0f]?' +
            ac +
            ')*'),
        pc = '(?:' + [Xa, Qa, tc].join('|') + ')' + hc,
        dc = RegExp(
          [
            ec + '?' + Ka + '+' + ic + '(?=' + [Va, ec, '$'].join('|') + ')',
            oc + '+' + uc + '(?=' + [Va, ec + nc, '$'].join('|') + ')',
            ec + '?' + nc + '+' + ic,
            ec + '+' + uc,
            lc,
            fc,
            $a,
            pc,
          ].join('|'),
          'g',
        );
      function vc(t) {
        return t.match(dc) || [];
      }
      var yc = vc;
      function bc(t, e, r) {
        return (
          (t = ci(t)), void 0 === (e = r ? void 0 : e) ? (Aa(t) ? yc(t) : ja(t)) : t.match(e) || []
        );
      }
      var mc = bc,
        gc = "['\u2019]",
        _c = RegExp("['\u2019]", 'g');
      function Ec(t) {
        return function (e) {
          return ca(mc(Oa(e).replace(_c, '')), t, '');
        };
      }
      var Oc,
        Sc,
        wc = Ec(function (t, e, r) {
          return (e = e.toLowerCase()), t + (r ? ua(e) : e);
        });
      function jc() {
        var t = window.__currentNode;
        return t || ((t = Symbol('__currentNode')), (window.__currentNode = t)), t;
      }
      function Pc() {
        var t = jc();
        return Object(a.inject)(
          t,
          function () {
            return { mode: 'live', node: null, isDesignerEnv: !1 };
          },
          !0,
        );
      }
      function Tc() {
        var t = window.__rendererContext;
        return t || ((t = Symbol('__rendererContext')), (window.__rendererContext = t)), t;
      }
      function Ac() {
        var t = Tc();
        return Object(a.inject)(
          t,
          function () {
            var t,
              e,
              r =
                null !==
                  (t =
                    null === (e = Object(a.getCurrentInstance)()) || void 0 === e
                      ? void 0
                      : e.props) && void 0 !== t
                  ? t
                  : {};
            return {
              components: Lc(r, 'components', {}),
              designMode: Lc(r, 'designMode', 'live'),
              getNode: Lc(r, 'getNode', function () {
                return null;
              }),
              triggerCompGetCtx: Lc(r, 'triggerCompGetCtx', function () {}),
            };
          },
          !0,
        );
      }
      function Lc(t, e, r) {
        return t[e] || t['__' + e] || r;
      }
      var Hc = function (t, e) {
        return (Hc =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          })(t, e);
      };
      function xc(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
        function r() {
          this.constructor = t;
        }
        Hc(t, e),
          (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
      }
      var Bc = function () {
        return (Bc =
          Object.assign ||
          function t(e) {
            for (var r, n = 1, o = arguments.length; n < o; n++)
              for (var i in (r = arguments[n]))
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e;
          }).apply(this, arguments);
      };
      function Cc(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
          for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
            e.indexOf(n[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
              (r[n[o]] = t[n[o]]);
        return r;
      }
      function Nc(t, e, r, n) {
        var o = arguments.length,
          i = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n,
          u;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(t, e, r, n);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (u = t[a]) && (i = (o < 3 ? u(i) : o > 3 ? u(e, r, i) : u(e, r)) || i);
        return o > 3 && i && Object.defineProperty(e, r, i), i;
      }
      function Ic(t, e) {
        return function (r, n) {
          e(r, n, t);
        };
      }
      function Rc(t, e) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(t, e);
      }
      function Dc(t, e, r, n) {
        function o(t) {
          return t instanceof r
            ? t
            : new r(function (e) {
                e(t);
              });
        }
        return new (r || (r = Promise))(function (r, i) {
          function u(t) {
            try {
              c(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            t.done ? r(t.value) : o(t.value).then(u, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      }
      function Mc(t, e) {
        var r = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          n,
          o,
          i,
          u;
        return (
          (u = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (u[Symbol.iterator] = function () {
              return this;
            }),
          u
        );
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(u) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; r; )
            try {
              if (
                ((n = 1),
                o &&
                  (i =
                    2 & u[0]
                      ? o.return
                      : u[0]
                      ? o.throw || ((i = o.return) && i.call(o), 0)
                      : o.next) &&
                  !(i = i.call(o, u[1])).done)
              )
                return i;
              switch (((o = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                case 0:
                case 1:
                  i = u;
                  break;
                case 4:
                  return r.label++, { value: u[1], done: !1 };
                case 5:
                  r.label++, (o = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = r.ops.pop()), r.trys.pop();
                  continue;
                default:
                  if (
                    !((i = r.trys),
                    (i = i.length > 0 && i[i.length - 1]) || (6 !== u[0] && 2 !== u[0]))
                  ) {
                    r = 0;
                    continue;
                  }
                  if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                    r.label = u[1];
                    break;
                  }
                  if (6 === u[0] && r.label < i[1]) {
                    (r.label = i[1]), (i = u);
                    break;
                  }
                  if (i && r.label < i[2]) {
                    (r.label = i[2]), r.ops.push(u);
                    break;
                  }
                  i[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              u = e.call(t, r);
            } catch (t) {
              (u = [6, t]), (o = 0);
            } finally {
              n = i = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        }
      }
      var Uc = Object.create
        ? function (t, e, r, n) {
            void 0 === n && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            (o && !('get' in o ? !e.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o);
          }
        : function (t, e, r, n) {
            void 0 === n && (n = r), (t[n] = e[r]);
          };
      function kc(t, e) {
        for (var r in t)
          'default' === r || Object.prototype.hasOwnProperty.call(e, r) || Uc(e, t, r);
      }
      function Gc(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
          r = e && t[e],
          n = 0;
        if (r) return r.call(t);
        if (t && 'number' == typeof t.length)
          return {
            next: function () {
              return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
            },
          };
        throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function Fc(t, e) {
        var r = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n = r.call(t),
          o,
          i = [],
          u;
        try {
          for (; (void 0 === e || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
        } catch (t) {
          u = { error: t };
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n);
          } finally {
            if (u) throw u.error;
          }
        }
        return i;
      }
      function Jc() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Fc(arguments[e]));
        return t;
      }
      function Vc() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        for (var n = Array(t), o = 0, e = 0; e < r; e++)
          for (var i = arguments[e], u = 0, a = i.length; u < a; u++, o++) n[o] = i[u];
        return n;
      }
      function zc(t, e, r) {
        if (r || 2 === arguments.length)
          for (var n = 0, o = e.length, i; n < o; n++)
            (!i && n in e) || (i || (i = Array.prototype.slice.call(e, 0, n)), (i[n] = e[n]));
        return t.concat(i || Array.prototype.slice.call(e));
      }
      function $c(t) {
        return this instanceof $c ? ((this.v = t), this) : new $c(t);
      }
      function Xc(t, e, r) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var n = r.apply(t, e || []),
          o,
          i = [];
        return (
          (o = {}),
          u('next'),
          u('throw'),
          u('return'),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function u(t) {
          n[t] &&
            (o[t] = function (e) {
              return new Promise(function (r, n) {
                i.push([t, e, r, n]) > 1 || a(t, e);
              });
            });
        }
        function a(t, e) {
          try {
            c(n[t](e));
          } catch (t) {
            l(i[0][3], t);
          }
        }
        function c(t) {
          t.value instanceof $c ? Promise.resolve(t.value.v).then(s, f) : l(i[0][2], t);
        }
        function s(t) {
          a('next', t);
        }
        function f(t) {
          a('throw', t);
        }
        function l(t, e) {
          t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function Kc(t) {
        var e, r;
        return (
          (e = {}),
          n('next'),
          n('throw', function (t) {
            throw t;
          }),
          n('return'),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function n(n, o) {
          e[n] = t[n]
            ? function (e) {
                return (r = !r) ? { value: $c(t[n](e)), done: 'return' === n } : o ? o(e) : e;
              }
            : o;
        }
      }
      function Yc(t) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var e = t[Symbol.asyncIterator],
          r;
        return e
          ? e.call(t)
          : ((t = Gc(t)),
            (r = {}),
            n('next'),
            n('throw'),
            n('return'),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r);
        function n(e) {
          r[e] =
            t[e] &&
            function (r) {
              return new Promise(function (n, i) {
                o(n, i, (r = t[e](r)).done, r.value);
              });
            };
        }
        function o(t, e, r, n) {
          Promise.resolve(n).then(function (e) {
            t({ value: e, done: r });
          }, e);
        }
      }
      function Zc(t, e) {
        return (
          Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t
        );
      }
      var Wc = Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e });
            }
          : function (t, e) {
              t.default = e;
            },
        qc,
        Qc,
        ts;
      function es(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t)
            'default' !== r && Object.prototype.hasOwnProperty.call(t, r) && Uc(e, t, r);
        return Wc(e, t), e;
      }
      function rs(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function ns(t, e, r, n) {
        if ('a' === r && !n) throw new TypeError('Private accessor was defined without a getter');
        if ('function' == typeof e ? t !== e || !n : !e.has(t))
          throw new TypeError(
            'Cannot read private member from an object whose class did not declare it',
          );
        return 'm' === r ? n : 'a' === r ? n.call(t) : n ? n.value : e.get(t);
      }
      function os(t, e, r, n, o) {
        if ('m' === n) throw new TypeError('Private method is not writable');
        if ('a' === n && !o) throw new TypeError('Private accessor was defined without a setter');
        if ('function' == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            'Cannot write private member to an object whose class did not declare it',
          );
        return 'a' === n ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r;
      }
      function is(t, e) {
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return 'function' == typeof t ? e === t : t.has(e);
      }
      function us(t) {
        return t.type === Qc.literal;
      }
      function as(t) {
        return t.type === Qc.argument;
      }
      function cs(t) {
        return t.type === Qc.number;
      }
      function ss(t) {
        return t.type === Qc.date;
      }
      function fs(t) {
        return t.type === Qc.time;
      }
      function ls(t) {
        return t.type === Qc.select;
      }
      function hs(t) {
        return t.type === Qc.plural;
      }
      function ps(t) {
        return t.type === Qc.pound;
      }
      function ds(t) {
        return t.type === Qc.tag;
      }
      function vs(t) {
        return !(!t || 'object' != typeof t || t.type !== ts.number);
      }
      function ys(t) {
        return !(!t || 'object' != typeof t || t.type !== ts.dateTime);
      }
      function bs(t) {
        return { type: Qc.literal, value: t };
      }
      function ms(t, e) {
        return { type: Qc.number, value: t, style: e };
      }
      !(function (t) {
        (t[(t.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = 'EXPECT_ARGUMENT_CLOSING_BRACE'),
          (t[(t.EMPTY_ARGUMENT = 2)] = 'EMPTY_ARGUMENT'),
          (t[(t.MALFORMED_ARGUMENT = 3)] = 'MALFORMED_ARGUMENT'),
          (t[(t.EXPECT_ARGUMENT_TYPE = 4)] = 'EXPECT_ARGUMENT_TYPE'),
          (t[(t.INVALID_ARGUMENT_TYPE = 5)] = 'INVALID_ARGUMENT_TYPE'),
          (t[(t.EXPECT_ARGUMENT_STYLE = 6)] = 'EXPECT_ARGUMENT_STYLE'),
          (t[(t.INVALID_NUMBER_SKELETON = 7)] = 'INVALID_NUMBER_SKELETON'),
          (t[(t.INVALID_DATE_TIME_SKELETON = 8)] = 'INVALID_DATE_TIME_SKELETON'),
          (t[(t.EXPECT_NUMBER_SKELETON = 9)] = 'EXPECT_NUMBER_SKELETON'),
          (t[(t.EXPECT_DATE_TIME_SKELETON = 10)] = 'EXPECT_DATE_TIME_SKELETON'),
          (t[(t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = 'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
          (t[(t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = 'EXPECT_SELECT_ARGUMENT_OPTIONS'),
          (t[(t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] = 'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
          (t[(t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
            'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
          (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = 'EXPECT_SELECT_ARGUMENT_SELECTOR'),
          (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
          (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
            'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
          (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
            'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
          (t[(t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = 'INVALID_PLURAL_ARGUMENT_SELECTOR'),
          (t[(t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = 'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
          (t[(t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = 'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
          (t[(t.MISSING_OTHER_CLAUSE = 22)] = 'MISSING_OTHER_CLAUSE'),
          (t[(t.INVALID_TAG = 23)] = 'INVALID_TAG'),
          (t[(t.INVALID_TAG_NAME = 25)] = 'INVALID_TAG_NAME'),
          (t[(t.UNMATCHED_CLOSING_TAG = 26)] = 'UNMATCHED_CLOSING_TAG'),
          (t[(t.UNCLOSED_TAG = 27)] = 'UNCLOSED_TAG');
      })(qc || (qc = {})),
        (function (t) {
          (t[(t.literal = 0)] = 'literal'),
            (t[(t.argument = 1)] = 'argument'),
            (t[(t.number = 2)] = 'number'),
            (t[(t.date = 3)] = 'date'),
            (t[(t.time = 4)] = 'time'),
            (t[(t.select = 5)] = 'select'),
            (t[(t.plural = 6)] = 'plural'),
            (t[(t.pound = 7)] = 'pound'),
            (t[(t.tag = 8)] = 'tag');
        })(Qc || (Qc = {})),
        (function (t) {
          (t[(t.number = 0)] = 'number'), (t[(t.dateTime = 1)] = 'dateTime');
        })(ts || (ts = {}));
      var gs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        _s = /[\t-\r \x85\u200E\u200F\u2028\u2029]/,
        Es =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function Os(t) {
        var e = {};
        return (
          t.replace(Es, function (t) {
            var r = t.length;
            switch (t[0]) {
              case 'G':
                e.era = 4 === r ? 'long' : 5 === r ? 'narrow' : 'short';
                break;
              case 'y':
                e.year = 2 === r ? '2-digit' : 'numeric';
                break;
              case 'Y':
              case 'u':
              case 'U':
              case 'r':
                throw new RangeError(
                  '`Y/u/U/r` (year) patterns are not supported, use `y` instead',
                );
              case 'q':
              case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
              case 'M':
              case 'L':
                e.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][r - 1];
                break;
              case 'w':
              case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
              case 'd':
                e.day = ['numeric', '2-digit'][r - 1];
                break;
              case 'D':
              case 'F':
              case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
              case 'E':
                e.weekday = 4 === r ? 'short' : 5 === r ? 'narrow' : 'short';
                break;
              case 'e':
                if (r < 4) throw new RangeError('`e..eee` (weekday) patterns are not supported');
                e.weekday = ['short', 'long', 'narrow', 'short'][r - 4];
                break;
              case 'c':
                if (r < 4) throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                e.weekday = ['short', 'long', 'narrow', 'short'][r - 4];
                break;
              case 'a':
                e.hour12 = !0;
                break;
              case 'b':
              case 'B':
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
              case 'h':
                (e.hourCycle = 'h12'), (e.hour = ['numeric', '2-digit'][r - 1]);
                break;
              case 'H':
                (e.hourCycle = 'h23'), (e.hour = ['numeric', '2-digit'][r - 1]);
                break;
              case 'K':
                (e.hourCycle = 'h11'), (e.hour = ['numeric', '2-digit'][r - 1]);
                break;
              case 'k':
                (e.hourCycle = 'h24'), (e.hour = ['numeric', '2-digit'][r - 1]);
                break;
              case 'j':
              case 'J':
              case 'C':
                throw new RangeError(
                  '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead',
                );
              case 'm':
                e.minute = ['numeric', '2-digit'][r - 1];
                break;
              case 's':
                e.second = ['numeric', '2-digit'][r - 1];
                break;
              case 'S':
              case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
              case 'z':
                e.timeZoneName = r < 4 ? 'short' : 'long';
                break;
              case 'Z':
              case 'O':
              case 'v':
              case 'V':
              case 'X':
              case 'x':
                throw new RangeError(
                  '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead',
                );
            }
            return '';
          }),
          e
        );
      }
      var Ss = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      function ws(t) {
        if (0 === t.length) throw new Error('Number skeleton cannot be empty');
        for (
          var e,
            r = [],
            n = 0,
            o = t.split(Ss).filter(function (t) {
              return t.length > 0;
            });
          n < o.length;
          n++
        ) {
          var i,
            u = o[n].split('/');
          if (0 === u.length) throw new Error('Invalid number skeleton');
          for (var a = u[0], c = u.slice(1), s = 0, f = c; s < f.length; s++) {
            var l;
            if (0 === f[s].length) throw new Error('Invalid number skeleton');
          }
          r.push({ stem: a, options: c });
        }
        return r;
      }
      function js(t) {
        return t.replace(/^(.*?)-/, '');
      }
      var Ps = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ts = /^(@+)?(\+|#+)?[rs]?$/g,
        As = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Ls = /^(0+)$/;
      function Hs(t) {
        var e = {};
        return (
          'r' === t[t.length - 1]
            ? (e.roundingPriority = 'morePrecision')
            : 's' === t[t.length - 1] && (e.roundingPriority = 'lessPrecision'),
          t.replace(Ts, function (t, r, n) {
            return (
              'string' != typeof n
                ? ((e.minimumSignificantDigits = r.length), (e.maximumSignificantDigits = r.length))
                : '+' === n
                ? (e.minimumSignificantDigits = r.length)
                : '#' === r[0]
                ? (e.maximumSignificantDigits = r.length)
                : ((e.minimumSignificantDigits = r.length),
                  (e.maximumSignificantDigits = r.length + ('string' == typeof n ? n.length : 0))),
              ''
            );
          }),
          e
        );
      }
      function xs(t) {
        switch (t) {
          case 'sign-auto':
            return { signDisplay: 'auto' };
          case 'sign-accounting':
          case '()':
            return { currencySign: 'accounting' };
          case 'sign-always':
          case '+!':
            return { signDisplay: 'always' };
          case 'sign-accounting-always':
          case '()!':
            return { signDisplay: 'always', currencySign: 'accounting' };
          case 'sign-except-zero':
          case '+?':
            return { signDisplay: 'exceptZero' };
          case 'sign-accounting-except-zero':
          case '()?':
            return { signDisplay: 'exceptZero', currencySign: 'accounting' };
          case 'sign-never':
          case '+_':
            return { signDisplay: 'never' };
        }
      }
      function Bs(t) {
        var e;
        if (
          ('E' === t[0] && 'E' === t[1]
            ? ((e = { notation: 'engineering' }), (t = t.slice(2)))
            : 'E' === t[0] && ((e = { notation: 'scientific' }), (t = t.slice(1))),
          e)
        ) {
          var r = t.slice(0, 2);
          if (
            ('+!' === r
              ? ((e.signDisplay = 'always'), (t = t.slice(2)))
              : '+?' === r && ((e.signDisplay = 'exceptZero'), (t = t.slice(2))),
            !Ls.test(t))
          )
            throw new Error('Malformed concise eng/scientific notation');
          e.minimumIntegerDigits = t.length;
        }
        return e;
      }
      function Cs(t) {
        var e = {},
          r = xs(t);
        return r || e;
      }
      function Ns(t) {
        for (var e = {}, r = 0, n = t; r < n.length; r++) {
          var o = n[r];
          switch (o.stem) {
            case 'percent':
            case '%':
              e.style = 'percent';
              continue;
            case '%x100':
              (e.style = 'percent'), (e.scale = 100);
              continue;
            case 'currency':
              (e.style = 'currency'), (e.currency = o.options[0]);
              continue;
            case 'group-off':
            case ',_':
              e.useGrouping = !1;
              continue;
            case 'precision-integer':
            case '.':
              e.maximumFractionDigits = 0;
              continue;
            case 'measure-unit':
            case 'unit':
              (e.style = 'unit'), (e.unit = js(o.options[0]));
              continue;
            case 'compact-short':
            case 'K':
              (e.notation = 'compact'), (e.compactDisplay = 'short');
              continue;
            case 'compact-long':
            case 'KK':
              (e.notation = 'compact'), (e.compactDisplay = 'long');
              continue;
            case 'scientific':
              e = Bc(
                Bc(Bc({}, e), { notation: 'scientific' }),
                o.options.reduce(function (t, e) {
                  return Bc(Bc({}, t), Cs(e));
                }, {}),
              );
              continue;
            case 'engineering':
              e = Bc(
                Bc(Bc({}, e), { notation: 'engineering' }),
                o.options.reduce(function (t, e) {
                  return Bc(Bc({}, t), Cs(e));
                }, {}),
              );
              continue;
            case 'notation-simple':
              e.notation = 'standard';
              continue;
            case 'unit-width-narrow':
              (e.currencyDisplay = 'narrowSymbol'), (e.unitDisplay = 'narrow');
              continue;
            case 'unit-width-short':
              (e.currencyDisplay = 'code'), (e.unitDisplay = 'short');
              continue;
            case 'unit-width-full-name':
              (e.currencyDisplay = 'name'), (e.unitDisplay = 'long');
              continue;
            case 'unit-width-iso-code':
              e.currencyDisplay = 'symbol';
              continue;
            case 'scale':
              e.scale = parseFloat(o.options[0]);
              continue;
            case 'integer-width':
              if (o.options.length > 1)
                throw new RangeError('integer-width stems only accept a single optional option');
              o.options[0].replace(As, function (t, r, n, o, i, u) {
                if (r) e.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error('We currently do not support maximum integer digits');
                  if (u) throw new Error('We currently do not support exact integer digits');
                }
                return '';
              });
              continue;
          }
          if (Ls.test(o.stem)) e.minimumIntegerDigits = o.stem.length;
          else if (Ps.test(o.stem)) {
            if (o.options.length > 1)
              throw new RangeError('Fraction-precision stems only accept a single optional option');
            o.stem.replace(Ps, function (t, r, n, o, i, u) {
              return (
                '*' === n
                  ? (e.minimumFractionDigits = r.length)
                  : o && '#' === o[0]
                  ? (e.maximumFractionDigits = o.length)
                  : i && u
                  ? ((e.minimumFractionDigits = i.length),
                    (e.maximumFractionDigits = i.length + u.length))
                  : ((e.minimumFractionDigits = r.length), (e.maximumFractionDigits = r.length)),
                ''
              );
            });
            var i = o.options[0];
            'w' === i
              ? (e = Bc(Bc({}, e), { trailingZeroDisplay: 'stripIfInteger' }))
              : i && (e = Bc(Bc({}, e), Hs(i)));
          } else if (Ts.test(o.stem)) e = Bc(Bc({}, e), Hs(o.stem));
          else {
            var u = xs(o.stem);
            u && (e = Bc(Bc({}, e), u));
            var a = Bs(o.stem);
            a && (e = Bc(Bc({}, e), a));
          }
        }
        return e;
      }
      var Is = {
          AX: ['H'],
          BQ: ['H'],
          CP: ['H'],
          CZ: ['H'],
          DK: ['H'],
          FI: ['H'],
          ID: ['H'],
          IS: ['H'],
          ML: ['H'],
          NE: ['H'],
          RU: ['H'],
          SE: ['H'],
          SJ: ['H'],
          SK: ['H'],
          AS: ['h', 'H'],
          BT: ['h', 'H'],
          DJ: ['h', 'H'],
          ER: ['h', 'H'],
          GH: ['h', 'H'],
          IN: ['h', 'H'],
          LS: ['h', 'H'],
          PG: ['h', 'H'],
          PW: ['h', 'H'],
          SO: ['h', 'H'],
          TO: ['h', 'H'],
          VU: ['h', 'H'],
          WS: ['h', 'H'],
          '001': ['H', 'h'],
          AL: ['h', 'H', 'hB'],
          TD: ['h', 'H', 'hB'],
          'ca-ES': ['H', 'h', 'hB'],
          CF: ['H', 'h', 'hB'],
          CM: ['H', 'h', 'hB'],
          'fr-CA': ['H', 'h', 'hB'],
          'gl-ES': ['H', 'h', 'hB'],
          'it-CH': ['H', 'h', 'hB'],
          'it-IT': ['H', 'h', 'hB'],
          LU: ['H', 'h', 'hB'],
          NP: ['H', 'h', 'hB'],
          PF: ['H', 'h', 'hB'],
          SC: ['H', 'h', 'hB'],
          SM: ['H', 'h', 'hB'],
          SN: ['H', 'h', 'hB'],
          TF: ['H', 'h', 'hB'],
          VA: ['H', 'h', 'hB'],
          CY: ['h', 'H', 'hb', 'hB'],
          GR: ['h', 'H', 'hb', 'hB'],
          CO: ['h', 'H', 'hB', 'hb'],
          DO: ['h', 'H', 'hB', 'hb'],
          KP: ['h', 'H', 'hB', 'hb'],
          KR: ['h', 'H', 'hB', 'hb'],
          NA: ['h', 'H', 'hB', 'hb'],
          PA: ['h', 'H', 'hB', 'hb'],
          PR: ['h', 'H', 'hB', 'hb'],
          VE: ['h', 'H', 'hB', 'hb'],
          AC: ['H', 'h', 'hb', 'hB'],
          AI: ['H', 'h', 'hb', 'hB'],
          BW: ['H', 'h', 'hb', 'hB'],
          BZ: ['H', 'h', 'hb', 'hB'],
          CC: ['H', 'h', 'hb', 'hB'],
          CK: ['H', 'h', 'hb', 'hB'],
          CX: ['H', 'h', 'hb', 'hB'],
          DG: ['H', 'h', 'hb', 'hB'],
          FK: ['H', 'h', 'hb', 'hB'],
          GB: ['H', 'h', 'hb', 'hB'],
          GG: ['H', 'h', 'hb', 'hB'],
          GI: ['H', 'h', 'hb', 'hB'],
          IE: ['H', 'h', 'hb', 'hB'],
          IM: ['H', 'h', 'hb', 'hB'],
          IO: ['H', 'h', 'hb', 'hB'],
          JE: ['H', 'h', 'hb', 'hB'],
          LT: ['H', 'h', 'hb', 'hB'],
          MK: ['H', 'h', 'hb', 'hB'],
          MN: ['H', 'h', 'hb', 'hB'],
          MS: ['H', 'h', 'hb', 'hB'],
          NF: ['H', 'h', 'hb', 'hB'],
          NG: ['H', 'h', 'hb', 'hB'],
          NR: ['H', 'h', 'hb', 'hB'],
          NU: ['H', 'h', 'hb', 'hB'],
          PN: ['H', 'h', 'hb', 'hB'],
          SH: ['H', 'h', 'hb', 'hB'],
          SX: ['H', 'h', 'hb', 'hB'],
          TA: ['H', 'h', 'hb', 'hB'],
          ZA: ['H', 'h', 'hb', 'hB'],
          'af-ZA': ['H', 'h', 'hB', 'hb'],
          AR: ['H', 'h', 'hB', 'hb'],
          CL: ['H', 'h', 'hB', 'hb'],
          CR: ['H', 'h', 'hB', 'hb'],
          CU: ['H', 'h', 'hB', 'hb'],
          EA: ['H', 'h', 'hB', 'hb'],
          'es-BO': ['H', 'h', 'hB', 'hb'],
          'es-BR': ['H', 'h', 'hB', 'hb'],
          'es-EC': ['H', 'h', 'hB', 'hb'],
          'es-ES': ['H', 'h', 'hB', 'hb'],
          'es-GQ': ['H', 'h', 'hB', 'hb'],
          'es-PE': ['H', 'h', 'hB', 'hb'],
          GT: ['H', 'h', 'hB', 'hb'],
          HN: ['H', 'h', 'hB', 'hb'],
          IC: ['H', 'h', 'hB', 'hb'],
          KG: ['H', 'h', 'hB', 'hb'],
          KM: ['H', 'h', 'hB', 'hb'],
          LK: ['H', 'h', 'hB', 'hb'],
          MA: ['H', 'h', 'hB', 'hb'],
          MX: ['H', 'h', 'hB', 'hb'],
          NI: ['H', 'h', 'hB', 'hb'],
          PY: ['H', 'h', 'hB', 'hb'],
          SV: ['H', 'h', 'hB', 'hb'],
          UY: ['H', 'h', 'hB', 'hb'],
          JP: ['H', 'h', 'K'],
          AD: ['H', 'hB'],
          AM: ['H', 'hB'],
          AO: ['H', 'hB'],
          AT: ['H', 'hB'],
          AW: ['H', 'hB'],
          BE: ['H', 'hB'],
          BF: ['H', 'hB'],
          BJ: ['H', 'hB'],
          BL: ['H', 'hB'],
          BR: ['H', 'hB'],
          CG: ['H', 'hB'],
          CI: ['H', 'hB'],
          CV: ['H', 'hB'],
          DE: ['H', 'hB'],
          EE: ['H', 'hB'],
          FR: ['H', 'hB'],
          GA: ['H', 'hB'],
          GF: ['H', 'hB'],
          GN: ['H', 'hB'],
          GP: ['H', 'hB'],
          GW: ['H', 'hB'],
          HR: ['H', 'hB'],
          IL: ['H', 'hB'],
          IT: ['H', 'hB'],
          KZ: ['H', 'hB'],
          MC: ['H', 'hB'],
          MD: ['H', 'hB'],
          MF: ['H', 'hB'],
          MQ: ['H', 'hB'],
          MZ: ['H', 'hB'],
          NC: ['H', 'hB'],
          NL: ['H', 'hB'],
          PM: ['H', 'hB'],
          PT: ['H', 'hB'],
          RE: ['H', 'hB'],
          RO: ['H', 'hB'],
          SI: ['H', 'hB'],
          SR: ['H', 'hB'],
          ST: ['H', 'hB'],
          TG: ['H', 'hB'],
          TR: ['H', 'hB'],
          WF: ['H', 'hB'],
          YT: ['H', 'hB'],
          BD: ['h', 'hB', 'H'],
          PK: ['h', 'hB', 'H'],
          AZ: ['H', 'hB', 'h'],
          BA: ['H', 'hB', 'h'],
          BG: ['H', 'hB', 'h'],
          CH: ['H', 'hB', 'h'],
          GE: ['H', 'hB', 'h'],
          LI: ['H', 'hB', 'h'],
          ME: ['H', 'hB', 'h'],
          RS: ['H', 'hB', 'h'],
          UA: ['H', 'hB', 'h'],
          UZ: ['H', 'hB', 'h'],
          XK: ['H', 'hB', 'h'],
          AG: ['h', 'hb', 'H', 'hB'],
          AU: ['h', 'hb', 'H', 'hB'],
          BB: ['h', 'hb', 'H', 'hB'],
          BM: ['h', 'hb', 'H', 'hB'],
          BS: ['h', 'hb', 'H', 'hB'],
          CA: ['h', 'hb', 'H', 'hB'],
          DM: ['h', 'hb', 'H', 'hB'],
          'en-001': ['h', 'hb', 'H', 'hB'],
          FJ: ['h', 'hb', 'H', 'hB'],
          FM: ['h', 'hb', 'H', 'hB'],
          GD: ['h', 'hb', 'H', 'hB'],
          GM: ['h', 'hb', 'H', 'hB'],
          GU: ['h', 'hb', 'H', 'hB'],
          GY: ['h', 'hb', 'H', 'hB'],
          JM: ['h', 'hb', 'H', 'hB'],
          KI: ['h', 'hb', 'H', 'hB'],
          KN: ['h', 'hb', 'H', 'hB'],
          KY: ['h', 'hb', 'H', 'hB'],
          LC: ['h', 'hb', 'H', 'hB'],
          LR: ['h', 'hb', 'H', 'hB'],
          MH: ['h', 'hb', 'H', 'hB'],
          MP: ['h', 'hb', 'H', 'hB'],
          MW: ['h', 'hb', 'H', 'hB'],
          NZ: ['h', 'hb', 'H', 'hB'],
          SB: ['h', 'hb', 'H', 'hB'],
          SG: ['h', 'hb', 'H', 'hB'],
          SL: ['h', 'hb', 'H', 'hB'],
          SS: ['h', 'hb', 'H', 'hB'],
          SZ: ['h', 'hb', 'H', 'hB'],
          TC: ['h', 'hb', 'H', 'hB'],
          TT: ['h', 'hb', 'H', 'hB'],
          UM: ['h', 'hb', 'H', 'hB'],
          US: ['h', 'hb', 'H', 'hB'],
          VC: ['h', 'hb', 'H', 'hB'],
          VG: ['h', 'hb', 'H', 'hB'],
          VI: ['h', 'hb', 'H', 'hB'],
          ZM: ['h', 'hb', 'H', 'hB'],
          BO: ['H', 'hB', 'h', 'hb'],
          EC: ['H', 'hB', 'h', 'hb'],
          ES: ['H', 'hB', 'h', 'hb'],
          GQ: ['H', 'hB', 'h', 'hb'],
          PE: ['H', 'hB', 'h', 'hb'],
          AE: ['h', 'hB', 'hb', 'H'],
          'ar-001': ['h', 'hB', 'hb', 'H'],
          BH: ['h', 'hB', 'hb', 'H'],
          DZ: ['h', 'hB', 'hb', 'H'],
          EG: ['h', 'hB', 'hb', 'H'],
          EH: ['h', 'hB', 'hb', 'H'],
          HK: ['h', 'hB', 'hb', 'H'],
          IQ: ['h', 'hB', 'hb', 'H'],
          JO: ['h', 'hB', 'hb', 'H'],
          KW: ['h', 'hB', 'hb', 'H'],
          LB: ['h', 'hB', 'hb', 'H'],
          LY: ['h', 'hB', 'hb', 'H'],
          MO: ['h', 'hB', 'hb', 'H'],
          MR: ['h', 'hB', 'hb', 'H'],
          OM: ['h', 'hB', 'hb', 'H'],
          PH: ['h', 'hB', 'hb', 'H'],
          PS: ['h', 'hB', 'hb', 'H'],
          QA: ['h', 'hB', 'hb', 'H'],
          SA: ['h', 'hB', 'hb', 'H'],
          SD: ['h', 'hB', 'hb', 'H'],
          SY: ['h', 'hB', 'hb', 'H'],
          TN: ['h', 'hB', 'hb', 'H'],
          YE: ['h', 'hB', 'hb', 'H'],
          AF: ['H', 'hb', 'hB', 'h'],
          LA: ['H', 'hb', 'hB', 'h'],
          CN: ['H', 'hB', 'hb', 'h'],
          LV: ['H', 'hB', 'hb', 'h'],
          TL: ['H', 'hB', 'hb', 'h'],
          'zu-ZA': ['H', 'hB', 'hb', 'h'],
          CD: ['hB', 'H'],
          IR: ['hB', 'H'],
          'hi-IN': ['hB', 'h', 'H'],
          'kn-IN': ['hB', 'h', 'H'],
          'ml-IN': ['hB', 'h', 'H'],
          'te-IN': ['hB', 'h', 'H'],
          KH: ['hB', 'h', 'H', 'hb'],
          'ta-IN': ['hB', 'h', 'hb', 'H'],
          BN: ['hb', 'hB', 'h', 'H'],
          MY: ['hb', 'hB', 'h', 'H'],
          ET: ['hB', 'hb', 'h', 'H'],
          'gu-IN': ['hB', 'hb', 'h', 'H'],
          'mr-IN': ['hB', 'hb', 'h', 'H'],
          'pa-IN': ['hB', 'hb', 'h', 'H'],
          TW: ['hB', 'hb', 'h', 'H'],
          KE: ['hB', 'hb', 'H', 'h'],
          MM: ['hB', 'hb', 'H', 'h'],
          TZ: ['hB', 'hb', 'H', 'h'],
          UG: ['hB', 'hb', 'H', 'h'],
        },
        Rs;
      function Ds(t, e) {
        for (var r = '', n = 0; n < t.length; n++) {
          var o = t.charAt(n);
          if ('j' === o) {
            for (var i = 0; n + 1 < t.length && t.charAt(n + 1) === o; ) i++, n++;
            var u = 1 + (1 & i),
              a = i < 2 ? 1 : 3 + (i >> 1),
              c = 'a',
              s = Ms(e);
            for (('H' != s && 'k' != s) || (a = 0); a-- > 0; ) r += 'a';
            for (; u-- > 0; ) r = s + r;
          } else r += 'J' === o ? 'H' : o;
        }
        return r;
      }
      function Ms(t) {
        var e = t.hourCycle;
        if ((void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e))
          switch (e) {
            case 'h24':
              return 'k';
            case 'h23':
              return 'H';
            case 'h12':
              return 'h';
            case 'h11':
              return 'K';
            default:
              throw new Error('Invalid hourCycle');
          }
        var r = t.language,
          n,
          o;
        return (
          'root' !== r && (n = t.maximize().region),
          (Is[n || ''] || Is[r || ''] || Is[''.concat(r, '-001')] || Is['001'])[0]
        );
      }
      var Us = new RegExp('^'.concat(gs.source, '*')),
        ks = new RegExp(''.concat(gs.source, '*$'));
      function Gs(t, e) {
        return { start: t, end: e };
      }
      var Fs = !!String.prototype.startsWith,
        Js = !!String.fromCodePoint,
        Vs = !!Object.fromEntries,
        zs = !!String.prototype.codePointAt,
        $s = !!String.prototype.trimStart,
        Xs = !!String.prototype.trimEnd,
        Ks,
        Ys = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (t) {
              return (
                'number' == typeof t &&
                isFinite(t) &&
                Math.floor(t) === t &&
                Math.abs(t) <= 9007199254740991
              );
            },
        Zs = !0;
      try {
        var Ws;
        Zs =
          'a' ===
          (null === (Rs = uf('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu').exec('a')) ||
          void 0 === Rs
            ? void 0
            : Rs[0]);
      } catch (t) {
        Zs = !1;
      }
      var qs = Fs
          ? function t(e, r, n) {
              return e.startsWith(r, n);
            }
          : function t(e, r, n) {
              return e.slice(n, n + r.length) === r;
            },
        Qs = Js
          ? String.fromCodePoint
          : function t() {
              for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              for (var n = '', o = e.length, i = 0, u; o > i; ) {
                if ((u = e[i++]) > 1114111) throw RangeError(u + ' is not a valid code point');
                n +=
                  u < 65536
                    ? String.fromCharCode(u)
                    : String.fromCharCode(55296 + ((u -= 65536) >> 10), (u % 1024) + 56320);
              }
              return n;
            },
        tf = Vs
          ? Object.fromEntries
          : function t(e) {
              for (var r = {}, n = 0, o = e; n < o.length; n++) {
                var i = o[n],
                  u = i[0],
                  a = i[1];
                r[u] = a;
              }
              return r;
            },
        ef = zs
          ? function t(e, r) {
              return e.codePointAt(r);
            }
          : function t(e, r) {
              var n = e.length;
              if (!(r < 0 || r >= n)) {
                var o = e.charCodeAt(r),
                  i;
                return o < 55296 ||
                  o > 56319 ||
                  r + 1 === n ||
                  (i = e.charCodeAt(r + 1)) < 56320 ||
                  i > 57343
                  ? o
                  : i - 56320 + ((o - 55296) << 10) + 65536;
              }
            },
        rf = $s
          ? function t(e) {
              return e.trimStart();
            }
          : function t(e) {
              return e.replace(Us, '');
            },
        nf = Xs
          ? function t(e) {
              return e.trimEnd();
            }
          : function t(e) {
              return e.replace(ks, '');
            },
        of;
      function uf(t, e) {
        return new RegExp(t, e);
      }
      if (Zs) {
        var af = uf('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
        of = function t(e, r) {
          var n, o;
          return (af.lastIndex = r), null !== (n = af.exec(e)[1]) && void 0 !== n ? n : '';
        };
      } else
        of = function t(e, r) {
          for (var n = []; ; ) {
            var o = ef(e, r);
            if (void 0 === o || hf(o) || pf(o)) break;
            n.push(o), (r += o >= 65536 ? 2 : 1);
          }
          return Qs.apply(void 0, n);
        };
      var cf = (function () {
        function t(t, e) {
          void 0 === e && (e = {}),
            (this.message = t),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!e.ignoreTag),
            (this.locale = e.locale),
            (this.requiresOtherClause = !!e.requiresOtherClause),
            (this.shouldParseSkeletons = !!e.shouldParseSkeletons);
        }
        return (
          (t.prototype.parse = function () {
            if (0 !== this.offset()) throw Error('parser can only be used once');
            return this.parseMessage(0, '', !1);
          }),
          (t.prototype.parseMessage = function (t, e, r) {
            for (var n = []; !this.isEOF(); ) {
              var o = this.char();
              if (123 === o) {
                var i;
                if ((i = this.parseArgument(t, r)).err) return i;
                n.push(i.val);
              } else {
                if (125 === o && t > 0) break;
                if (35 !== o || ('plural' !== e && 'selectordinal' !== e)) {
                  if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                    if (r) break;
                    return this.error(
                      qc.UNMATCHED_CLOSING_TAG,
                      Gs(this.clonePosition(), this.clonePosition()),
                    );
                  }
                  if (60 === o && !this.ignoreTag && sf(this.peek() || 0)) {
                    var i;
                    if ((i = this.parseTag(t, e)).err) return i;
                    n.push(i.val);
                  } else {
                    var i;
                    if ((i = this.parseLiteral(t, e)).err) return i;
                    n.push(i.val);
                  }
                } else {
                  var u = this.clonePosition();
                  this.bump(), n.push({ type: Qc.pound, location: Gs(u, this.clonePosition()) });
                }
              }
            }
            return { val: n, err: null };
          }),
          (t.prototype.parseTag = function (t, e) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf('/>')))
              return {
                val: {
                  type: Qc.literal,
                  value: '<'.concat(n, '/>'),
                  location: Gs(r, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf('>')) {
              var o = this.parseMessage(t + 1, e, !0);
              if (o.err) return o;
              var i = o.val,
                u = this.clonePosition();
              if (this.bumpIf('</')) {
                if (this.isEOF() || !sf(this.char()))
                  return this.error(qc.INVALID_TAG, Gs(u, this.clonePosition()));
                var a = this.clonePosition(),
                  c;
                return n !== this.parseTagName()
                  ? this.error(qc.UNMATCHED_CLOSING_TAG, Gs(a, this.clonePosition()))
                  : (this.bumpSpace(),
                    this.bumpIf('>')
                      ? {
                          val: {
                            type: Qc.tag,
                            value: n,
                            children: i,
                            location: Gs(r, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(qc.INVALID_TAG, Gs(u, this.clonePosition())));
              }
              return this.error(qc.UNCLOSED_TAG, Gs(r, this.clonePosition()));
            }
            return this.error(qc.INVALID_TAG, Gs(r, this.clonePosition()));
          }),
          (t.prototype.parseTagName = function () {
            var t = this.offset();
            for (this.bump(); !this.isEOF() && lf(this.char()); ) this.bump();
            return this.message.slice(t, this.offset());
          }),
          (t.prototype.parseLiteral = function (t, e) {
            for (var r = this.clonePosition(), n = ''; ; ) {
              var o = this.tryParseQuote(e);
              if (o) n += o;
              else {
                var i = this.tryParseUnquoted(t, e);
                if (i) n += i;
                else {
                  var u = this.tryParseLeftAngleBracket();
                  if (!u) break;
                  n += u;
                }
              }
            }
            var a = Gs(r, this.clonePosition());
            return { val: { type: Qc.literal, value: n, location: a }, err: null };
          }),
          (t.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() || 60 !== this.char() || (!this.ignoreTag && ff(this.peek() || 0))
              ? null
              : (this.bump(), '<');
          }),
          (t.prototype.tryParseQuote = function (t) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ('plural' === t || 'selectordinal' === t) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var e = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 !== this.peek()) {
                  this.bump();
                  break;
                }
                e.push(39), this.bump();
              } else e.push(r);
              this.bump();
            }
            return Qs.apply(void 0, e);
          }),
          (t.prototype.tryParseUnquoted = function (t, e) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ('plural' === e || 'selectordinal' === e)) ||
              (125 === r && t > 0)
              ? null
              : (this.bump(), Qs(r));
          }),
          (t.prototype.parseArgument = function (t, e) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(qc.EXPECT_ARGUMENT_CLOSING_BRACE, Gs(r, this.clonePosition()));
            if (125 === this.char())
              return this.bump(), this.error(qc.EMPTY_ARGUMENT, Gs(r, this.clonePosition()));
            var n = this.parseIdentifierIfPossible().value;
            if (!n) return this.error(qc.MALFORMED_ARGUMENT, Gs(r, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(qc.EXPECT_ARGUMENT_CLOSING_BRACE, Gs(r, this.clonePosition()));
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: { type: Qc.argument, value: n, location: Gs(r, this.clonePosition()) },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(qc.EXPECT_ARGUMENT_CLOSING_BRACE, Gs(r, this.clonePosition()))
                    : this.parseArgumentOptions(t, e, n, r)
                );
              default:
                return this.error(qc.MALFORMED_ARGUMENT, Gs(r, this.clonePosition()));
            }
          }),
          (t.prototype.parseIdentifierIfPossible = function () {
            var t = this.clonePosition(),
              e = this.offset(),
              r = of(this.message, e),
              n = e + r.length,
              o,
              i;
            return this.bumpTo(n), { value: r, location: Gs(t, this.clonePosition()) };
          }),
          (t.prototype.parseArgumentOptions = function (t, e, r, n) {
            var o,
              i = this.clonePosition(),
              u = this.parseIdentifierIfPossible().value,
              a = this.clonePosition();
            switch (u) {
              case '':
                return this.error(qc.EXPECT_ARGUMENT_TYPE, Gs(i, a));
              case 'number':
              case 'date':
              case 'time':
                this.bumpSpace();
                var c = null,
                  s;
                if (this.bumpIf(',')) {
                  this.bumpSpace();
                  var f = this.clonePosition(),
                    l,
                    h,
                    p;
                  if ((l = this.parseSimpleArgStyleIfPossible()).err) return l;
                  if (0 === (h = nf(l.val)).length)
                    return this.error(
                      qc.EXPECT_ARGUMENT_STYLE,
                      Gs(this.clonePosition(), this.clonePosition()),
                    );
                  c = { style: h, styleLocation: Gs(f, this.clonePosition()) };
                }
                if ((s = this.tryParseArgumentClose(n)).err) return s;
                var d = Gs(n, this.clonePosition());
                if (c && qs(null == c ? void 0 : c.style, '::', 0)) {
                  var v = rf(c.style.slice(2)),
                    l;
                  if ('number' === u)
                    return (l = this.parseNumberSkeletonFromString(v, c.styleLocation)).err
                      ? l
                      : {
                          val: { type: Qc.number, value: r, location: d, style: l.val },
                          err: null,
                        };
                  if (0 === v.length) return this.error(qc.EXPECT_DATE_TIME_SKELETON, d);
                  var y = v;
                  this.locale && (y = Ds(v, this.locale));
                  var h = {
                      type: ts.dateTime,
                      pattern: y,
                      location: c.styleLocation,
                      parsedOptions: this.shouldParseSkeletons ? Os(y) : {},
                    },
                    b;
                  return {
                    val: {
                      type: 'date' === u ? Qc.date : Qc.time,
                      value: r,
                      location: d,
                      style: h,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type: 'number' === u ? Qc.number : 'date' === u ? Qc.date : Qc.time,
                    value: r,
                    location: d,
                    style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null,
                  },
                  err: null,
                };
              case 'plural':
              case 'selectordinal':
              case 'select':
                var m = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(',')))
                  return this.error(qc.EXPECT_SELECT_ARGUMENT_OPTIONS, Gs(m, Bc({}, m)));
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  _ = 0;
                if ('select' !== u && 'offset' === g.value) {
                  if (!this.bumpIf(':'))
                    return this.error(
                      qc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      Gs(this.clonePosition(), this.clonePosition()),
                    );
                  var l;
                  if (
                    (this.bumpSpace(),
                    (l = this.tryParseDecimalInteger(
                      qc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      qc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                    )).err)
                  )
                    return l;
                  this.bumpSpace(), (g = this.parseIdentifierIfPossible()), (_ = l.val);
                }
                var E = this.tryParsePluralOrSelectOptions(t, u, e, g),
                  s;
                if (E.err) return E;
                if ((s = this.tryParseArgumentClose(n)).err) return s;
                var O = Gs(n, this.clonePosition());
                return 'select' === u
                  ? {
                      val: { type: Qc.select, value: r, options: tf(E.val), location: O },
                      err: null,
                    }
                  : {
                      val: {
                        type: Qc.plural,
                        value: r,
                        options: tf(E.val),
                        offset: _,
                        pluralType: 'plural' === u ? 'cardinal' : 'ordinal',
                        location: O,
                      },
                      err: null,
                    };
              default:
                return this.error(qc.INVALID_ARGUMENT_TYPE, Gs(i, a));
            }
          }),
          (t.prototype.tryParseArgumentClose = function (t) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(qc.EXPECT_ARGUMENT_CLOSING_BRACE, Gs(t, this.clonePosition()))
              : (this.bump(), { val: !0, err: null });
          }),
          (t.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var t = 0, e = this.clonePosition(); !this.isEOF(); ) {
              var r;
              switch (this.char()) {
                case 39:
                  this.bump();
                  var n = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      qc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      Gs(n, this.clonePosition()),
                    );
                  this.bump();
                  break;
                case 123:
                  (t += 1), this.bump();
                  break;
                case 125:
                  if (!(t > 0))
                    return { val: this.message.slice(e.offset, this.offset()), err: null };
                  t -= 1;
                  break;
                default:
                  this.bump();
              }
            }
            return { val: this.message.slice(e.offset, this.offset()), err: null };
          }),
          (t.prototype.parseNumberSkeletonFromString = function (t, e) {
            var r = [];
            try {
              r = ws(t);
            } catch (t) {
              return this.error(qc.INVALID_NUMBER_SKELETON, e);
            }
            return {
              val: {
                type: ts.number,
                tokens: r,
                location: e,
                parsedOptions: this.shouldParseSkeletons ? Ns(r) : {},
              },
              err: null,
            };
          }),
          (t.prototype.tryParsePluralOrSelectOptions = function (t, e, r, n) {
            for (var o, i = !1, u = [], a = new Set(), c = n.value, s = n.location; ; ) {
              if (0 === c.length) {
                var f = this.clonePosition();
                if ('select' === e || !this.bumpIf('=')) break;
                var l = this.tryParseDecimalInteger(
                  qc.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  qc.INVALID_PLURAL_ARGUMENT_SELECTOR,
                );
                if (l.err) return l;
                (s = Gs(f, this.clonePosition())),
                  (c = this.message.slice(f.offset, this.offset()));
              }
              if (a.has(c))
                return this.error(
                  'select' === e
                    ? qc.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : qc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  s,
                );
              'other' === c && (i = !0), this.bumpSpace();
              var h = this.clonePosition();
              if (!this.bumpIf('{'))
                return this.error(
                  'select' === e
                    ? qc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : qc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  Gs(this.clonePosition(), this.clonePosition()),
                );
              var p = this.parseMessage(t + 1, e, r);
              if (p.err) return p;
              var d = this.tryParseArgumentClose(h);
              if (d.err) return d;
              u.push([c, { value: p.val, location: Gs(h, this.clonePosition()) }]),
                a.add(c),
                this.bumpSpace(),
                (c = (o = this.parseIdentifierIfPossible()).value),
                (s = o.location);
            }
            return 0 === u.length
              ? this.error(
                  'select' === e
                    ? qc.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : qc.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  Gs(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !i
              ? this.error(qc.MISSING_OTHER_CLAUSE, Gs(this.clonePosition(), this.clonePosition()))
              : { val: u, err: null };
          }),
          (t.prototype.tryParseDecimalInteger = function (t, e) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf('+') || (this.bumpIf('-') && (r = -1));
            for (var o = !1, i = 0; !this.isEOF(); ) {
              var u = this.char();
              if (!(u >= 48 && u <= 57)) break;
              (o = !0), (i = 10 * i + (u - 48)), this.bump();
            }
            var a = Gs(n, this.clonePosition());
            return o ? (Ys((i *= r)) ? { val: i, err: null } : this.error(e, a)) : this.error(t, a);
          }),
          (t.prototype.offset = function () {
            return this.position.offset;
          }),
          (t.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (t.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (t.prototype.char = function () {
            var t = this.position.offset;
            if (t >= this.message.length) throw Error('out of bound');
            var e = ef(this.message, t);
            if (void 0 === e)
              throw Error('Offset '.concat(t, ' is at invalid UTF-16 code unit boundary'));
            return e;
          }),
          (t.prototype.error = function (t, e) {
            return { val: null, err: { kind: t, message: this.message, location: e } };
          }),
          (t.prototype.bump = function () {
            if (!this.isEOF()) {
              var t = this.char();
              10 === t
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1), (this.position.offset += t < 65536 ? 1 : 2));
            }
          }),
          (t.prototype.bumpIf = function (t) {
            if (qs(this.message, t, this.offset())) {
              for (var e = 0; e < t.length; e++) this.bump();
              return !0;
            }
            return !1;
          }),
          (t.prototype.bumpUntil = function (t) {
            var e = this.offset(),
              r = this.message.indexOf(t, e);
            return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
          }),
          (t.prototype.bumpTo = function (t) {
            if (this.offset() > t)
              throw Error(
                'targetOffset '
                  .concat(t, ' must be greater than or equal to the current offset ')
                  .concat(this.offset()),
              );
            for (t = Math.min(t, this.message.length); ; ) {
              var e = this.offset();
              if (e === t) break;
              if (e > t)
                throw Error('targetOffset '.concat(t, ' is at invalid UTF-16 code unit boundary'));
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (t.prototype.bumpSpace = function () {
            for (; !this.isEOF() && hf(this.char()); ) this.bump();
          }),
          (t.prototype.peek = function () {
            if (this.isEOF()) return null;
            var t = this.char(),
              e = this.offset(),
              r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          t
        );
      })();
      function sf(t) {
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      }
      function ff(t) {
        return sf(t) || 47 === t;
      }
      function lf(t) {
        return (
          45 === t ||
          46 === t ||
          (t >= 48 && t <= 57) ||
          95 === t ||
          (t >= 97 && t <= 122) ||
          (t >= 65 && t <= 90) ||
          183 == t ||
          (t >= 192 && t <= 214) ||
          (t >= 216 && t <= 246) ||
          (t >= 248 && t <= 893) ||
          (t >= 895 && t <= 8191) ||
          (t >= 8204 && t <= 8205) ||
          (t >= 8255 && t <= 8256) ||
          (t >= 8304 && t <= 8591) ||
          (t >= 11264 && t <= 12271) ||
          (t >= 12289 && t <= 55295) ||
          (t >= 63744 && t <= 64975) ||
          (t >= 65008 && t <= 65533) ||
          (t >= 65536 && t <= 983039)
        );
      }
      function hf(t) {
        return (
          (t >= 9 && t <= 13) ||
          32 === t ||
          133 === t ||
          (t >= 8206 && t <= 8207) ||
          8232 === t ||
          8233 === t
        );
      }
      function pf(t) {
        return (
          (t >= 33 && t <= 35) ||
          36 === t ||
          (t >= 37 && t <= 39) ||
          40 === t ||
          41 === t ||
          42 === t ||
          43 === t ||
          44 === t ||
          45 === t ||
          (t >= 46 && t <= 47) ||
          (t >= 58 && t <= 59) ||
          (t >= 60 && t <= 62) ||
          (t >= 63 && t <= 64) ||
          91 === t ||
          92 === t ||
          93 === t ||
          94 === t ||
          96 === t ||
          123 === t ||
          124 === t ||
          125 === t ||
          126 === t ||
          161 === t ||
          (t >= 162 && t <= 165) ||
          166 === t ||
          167 === t ||
          169 === t ||
          171 === t ||
          172 === t ||
          174 === t ||
          176 === t ||
          177 === t ||
          182 === t ||
          187 === t ||
          191 === t ||
          215 === t ||
          247 === t ||
          (t >= 8208 && t <= 8213) ||
          (t >= 8214 && t <= 8215) ||
          8216 === t ||
          8217 === t ||
          8218 === t ||
          (t >= 8219 && t <= 8220) ||
          8221 === t ||
          8222 === t ||
          8223 === t ||
          (t >= 8224 && t <= 8231) ||
          (t >= 8240 && t <= 8248) ||
          8249 === t ||
          8250 === t ||
          (t >= 8251 && t <= 8254) ||
          (t >= 8257 && t <= 8259) ||
          8260 === t ||
          8261 === t ||
          8262 === t ||
          (t >= 8263 && t <= 8273) ||
          8274 === t ||
          8275 === t ||
          (t >= 8277 && t <= 8286) ||
          (t >= 8592 && t <= 8596) ||
          (t >= 8597 && t <= 8601) ||
          (t >= 8602 && t <= 8603) ||
          (t >= 8604 && t <= 8607) ||
          8608 === t ||
          (t >= 8609 && t <= 8610) ||
          8611 === t ||
          (t >= 8612 && t <= 8613) ||
          8614 === t ||
          (t >= 8615 && t <= 8621) ||
          8622 === t ||
          (t >= 8623 && t <= 8653) ||
          (t >= 8654 && t <= 8655) ||
          (t >= 8656 && t <= 8657) ||
          8658 === t ||
          8659 === t ||
          8660 === t ||
          (t >= 8661 && t <= 8691) ||
          (t >= 8692 && t <= 8959) ||
          (t >= 8960 && t <= 8967) ||
          8968 === t ||
          8969 === t ||
          8970 === t ||
          8971 === t ||
          (t >= 8972 && t <= 8991) ||
          (t >= 8992 && t <= 8993) ||
          (t >= 8994 && t <= 9e3) ||
          9001 === t ||
          9002 === t ||
          (t >= 9003 && t <= 9083) ||
          9084 === t ||
          (t >= 9085 && t <= 9114) ||
          (t >= 9115 && t <= 9139) ||
          (t >= 9140 && t <= 9179) ||
          (t >= 9180 && t <= 9185) ||
          (t >= 9186 && t <= 9254) ||
          (t >= 9255 && t <= 9279) ||
          (t >= 9280 && t <= 9290) ||
          (t >= 9291 && t <= 9311) ||
          (t >= 9472 && t <= 9654) ||
          9655 === t ||
          (t >= 9656 && t <= 9664) ||
          9665 === t ||
          (t >= 9666 && t <= 9719) ||
          (t >= 9720 && t <= 9727) ||
          (t >= 9728 && t <= 9838) ||
          9839 === t ||
          (t >= 9840 && t <= 10087) ||
          10088 === t ||
          10089 === t ||
          10090 === t ||
          10091 === t ||
          10092 === t ||
          10093 === t ||
          10094 === t ||
          10095 === t ||
          10096 === t ||
          10097 === t ||
          10098 === t ||
          10099 === t ||
          10100 === t ||
          10101 === t ||
          (t >= 10132 && t <= 10175) ||
          (t >= 10176 && t <= 10180) ||
          10181 === t ||
          10182 === t ||
          (t >= 10183 && t <= 10213) ||
          10214 === t ||
          10215 === t ||
          10216 === t ||
          10217 === t ||
          10218 === t ||
          10219 === t ||
          10220 === t ||
          10221 === t ||
          10222 === t ||
          10223 === t ||
          (t >= 10224 && t <= 10239) ||
          (t >= 10240 && t <= 10495) ||
          (t >= 10496 && t <= 10626) ||
          10627 === t ||
          10628 === t ||
          10629 === t ||
          10630 === t ||
          10631 === t ||
          10632 === t ||
          10633 === t ||
          10634 === t ||
          10635 === t ||
          10636 === t ||
          10637 === t ||
          10638 === t ||
          10639 === t ||
          10640 === t ||
          10641 === t ||
          10642 === t ||
          10643 === t ||
          10644 === t ||
          10645 === t ||
          10646 === t ||
          10647 === t ||
          10648 === t ||
          (t >= 10649 && t <= 10711) ||
          10712 === t ||
          10713 === t ||
          10714 === t ||
          10715 === t ||
          (t >= 10716 && t <= 10747) ||
          10748 === t ||
          10749 === t ||
          (t >= 10750 && t <= 11007) ||
          (t >= 11008 && t <= 11055) ||
          (t >= 11056 && t <= 11076) ||
          (t >= 11077 && t <= 11078) ||
          (t >= 11079 && t <= 11084) ||
          (t >= 11085 && t <= 11123) ||
          (t >= 11124 && t <= 11125) ||
          (t >= 11126 && t <= 11157) ||
          11158 === t ||
          (t >= 11159 && t <= 11263) ||
          (t >= 11776 && t <= 11777) ||
          11778 === t ||
          11779 === t ||
          11780 === t ||
          11781 === t ||
          (t >= 11782 && t <= 11784) ||
          11785 === t ||
          11786 === t ||
          11787 === t ||
          11788 === t ||
          11789 === t ||
          (t >= 11790 && t <= 11798) ||
          11799 === t ||
          (t >= 11800 && t <= 11801) ||
          11802 === t ||
          11803 === t ||
          11804 === t ||
          11805 === t ||
          (t >= 11806 && t <= 11807) ||
          11808 === t ||
          11809 === t ||
          11810 === t ||
          11811 === t ||
          11812 === t ||
          11813 === t ||
          11814 === t ||
          11815 === t ||
          11816 === t ||
          11817 === t ||
          (t >= 11818 && t <= 11822) ||
          11823 === t ||
          (t >= 11824 && t <= 11833) ||
          (t >= 11834 && t <= 11835) ||
          (t >= 11836 && t <= 11839) ||
          11840 === t ||
          11841 === t ||
          11842 === t ||
          (t >= 11843 && t <= 11855) ||
          (t >= 11856 && t <= 11857) ||
          11858 === t ||
          (t >= 11859 && t <= 11903) ||
          (t >= 12289 && t <= 12291) ||
          12296 === t ||
          12297 === t ||
          12298 === t ||
          12299 === t ||
          12300 === t ||
          12301 === t ||
          12302 === t ||
          12303 === t ||
          12304 === t ||
          12305 === t ||
          (t >= 12306 && t <= 12307) ||
          12308 === t ||
          12309 === t ||
          12310 === t ||
          12311 === t ||
          12312 === t ||
          12313 === t ||
          12314 === t ||
          12315 === t ||
          12316 === t ||
          12317 === t ||
          (t >= 12318 && t <= 12319) ||
          12320 === t ||
          12336 === t ||
          64830 === t ||
          64831 === t ||
          (t >= 65093 && t <= 65094)
        );
      }
      function df(t) {
        t.forEach(function (t) {
          if ((delete t.location, ls(t) || hs(t)))
            for (var e in t.options) delete t.options[e].location, df(t.options[e].value);
          else
            (cs(t) && vs(t.style)) || ((ss(t) || fs(t)) && ys(t.style))
              ? delete t.style.location
              : ds(t) && df(t.children);
        });
      }
      function vf(t, e) {
        void 0 === e && (e = {}),
          (e = Bc({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e));
        var r = new cf(t, e).parse();
        if (r.err) {
          var n = SyntaxError(qc[r.err.kind]);
          throw ((n.location = r.err.location), (n.originalMessage = r.err.message), n);
        }
        return (null == e ? void 0 : e.captureLocation) || df(r.val), r.val;
      }
      function yf(t, e) {
        var r = e && e.cache ? e.cache : Pf,
          n = e && e.serializer ? e.serializer : wf,
          o;
        return (e && e.strategy ? e.strategy : Ef)(t, { cache: r, serializer: n });
      }
      function bf(t) {
        return null == t || 'number' == typeof t || 'boolean' == typeof t;
      }
      function mf(t, e, r, n) {
        var o = bf(n) ? n : r(n),
          i = e.get(o);
        return void 0 === i && ((i = t.call(this, n)), e.set(o, i)), i;
      }
      function gf(t, e, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = e.get(o);
        return void 0 === i && ((i = t.apply(this, n)), e.set(o, i)), i;
      }
      function _f(t, e, r, n, o) {
        return r.bind(e, t, n, o);
      }
      function Ef(t, e) {
        var r;
        return _f(t, this, 1 === t.length ? mf : gf, e.cache.create(), e.serializer);
      }
      function Of(t, e) {
        return _f(t, this, gf, e.cache.create(), e.serializer);
      }
      function Sf(t, e) {
        return _f(t, this, mf, e.cache.create(), e.serializer);
      }
      var wf = function () {
        return JSON.stringify(arguments);
      };
      function jf() {
        this.cache = Object.create(null);
      }
      (jf.prototype.get = function (t) {
        return this.cache[t];
      }),
        (jf.prototype.set = function (t, e) {
          this.cache[t] = e;
        });
      var Pf = {
          create: function t() {
            return new jf();
          },
        },
        Tf = { variadic: Of, monadic: Sf },
        Af;
      !(function (t) {
        (t.MISSING_VALUE = 'MISSING_VALUE'),
          (t.INVALID_VALUE = 'INVALID_VALUE'),
          (t.MISSING_INTL_API = 'MISSING_INTL_API');
      })(Af || (Af = {}));
      var Lf = (function (t) {
          function e(e, r, n) {
            var o = t.call(this, e) || this;
            return (o.code = r), (o.originalMessage = n), o;
          }
          return (
            xc(e, t),
            (e.prototype.toString = function () {
              return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
            }),
            e
          );
        })(Error),
        Hf = (function (t) {
          function e(e, r, n, o) {
            return (
              t.call(
                this,
                'Invalid values for "'
                  .concat(e, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                Af.INVALID_VALUE,
                o,
              ) || this
            );
          }
          return xc(e, t), e;
        })(Lf),
        xf = (function (t) {
          function e(e, r, n) {
            return (
              t.call(
                this,
                'Value for "'.concat(e, '" must be of type ').concat(r),
                Af.INVALID_VALUE,
                n,
              ) || this
            );
          }
          return xc(e, t), e;
        })(Lf),
        Bf = (function (t) {
          function e(e, r) {
            return (
              t.call(
                this,
                'The intl string context variable "'
                  .concat(e, '" was not provided to the string "')
                  .concat(r, '"'),
                Af.MISSING_VALUE,
                r,
              ) || this
            );
          }
          return xc(e, t), e;
        })(Lf),
        Cf;
      function Nf(t) {
        return t.length < 2
          ? t
          : t.reduce(function (t, e) {
              var r = t[t.length - 1];
              return (
                r && r.type === Cf.literal && e.type === Cf.literal
                  ? (r.value += e.value)
                  : t.push(e),
                t
              );
            }, []);
      }
      function If(t) {
        return 'function' == typeof t;
      }
      function Rf(t, e, r, n, o, i, u) {
        if (1 === t.length && us(t[0])) return [{ type: Cf.literal, value: t[0].value }];
        for (var a = [], c = 0, s = t; c < s.length; c++) {
          var f = s[c];
          if (us(f)) a.push({ type: Cf.literal, value: f.value });
          else if (ps(f))
            'number' == typeof i &&
              a.push({ type: Cf.literal, value: r.getNumberFormat(e).format(i) });
          else {
            var l = f.value;
            if (!o || !(l in o)) throw new Bf(l, u);
            var h = o[l];
            if (as(f))
              (h && 'string' != typeof h && 'number' != typeof h) ||
                (h = 'string' == typeof h || 'number' == typeof h ? String(h) : ''),
                a.push({ type: 'string' == typeof h ? Cf.literal : Cf.object, value: h });
            else if (ss(f)) {
              var p =
                'string' == typeof f.style
                  ? n.date[f.style]
                  : ys(f.style)
                  ? f.style.parsedOptions
                  : void 0;
              a.push({ type: Cf.literal, value: r.getDateTimeFormat(e, p).format(h) });
            } else if (fs(f)) {
              var p =
                'string' == typeof f.style
                  ? n.time[f.style]
                  : ys(f.style)
                  ? f.style.parsedOptions
                  : n.time.medium;
              a.push({ type: Cf.literal, value: r.getDateTimeFormat(e, p).format(h) });
            } else if (cs(f)) {
              var p;
              (p =
                'string' == typeof f.style
                  ? n.number[f.style]
                  : vs(f.style)
                  ? f.style.parsedOptions
                  : void 0) &&
                p.scale &&
                (h *= p.scale || 1),
                a.push({ type: Cf.literal, value: r.getNumberFormat(e, p).format(h) });
            } else {
              if (ds(f)) {
                var d = f.children,
                  v = f.value,
                  y = o[v];
                if (!If(y)) throw new xf(v, 'function', u);
                var b,
                  m = y(
                    Rf(d, e, r, n, o, i).map(function (t) {
                      return t.value;
                    }),
                  );
                Array.isArray(m) || (m = [m]),
                  a.push.apply(
                    a,
                    m.map(function (t) {
                      return { type: 'string' == typeof t ? Cf.literal : Cf.object, value: t };
                    }),
                  );
              }
              if (ls(f)) {
                var g;
                if (!(g = f.options[h] || f.options.other))
                  throw new Hf(f.value, h, Object.keys(f.options), u);
                a.push.apply(a, Rf(g.value, e, r, n, o));
              } else if (hs(f)) {
                var g;
                if (!(g = f.options['='.concat(h)])) {
                  if (!Intl.PluralRules)
                    throw new Lf(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      Af.MISSING_INTL_API,
                      u,
                    );
                  var _ = r.getPluralRules(e, { type: f.pluralType }).select(h - (f.offset || 0));
                  g = f.options[_] || f.options.other;
                }
                if (!g) throw new Hf(f.value, h, Object.keys(f.options), u);
                a.push.apply(a, Rf(g.value, e, r, n, o, h - (f.offset || 0)));
              } else;
            }
          }
        }
        return Nf(a);
      }
      function Df(t, e) {
        return e
          ? Bc(
              Bc(Bc({}, t || {}), e || {}),
              Object.keys(t).reduce(function (r, n) {
                return (r[n] = Bc(Bc({}, t[n]), e[n] || {})), r;
              }, {}),
            )
          : t;
      }
      function Mf(t, e) {
        return e
          ? Object.keys(t).reduce(function (r, n) {
              return (r[n] = Df(t[n], e[n])), r;
            }, Bc({}, t))
          : t;
      }
      function Uf(t) {
        return {
          create: function () {
            return {
              get: function (e) {
                return t[e];
              },
              set: function (e, r) {
                t[e] = r;
              },
            };
          },
        };
      }
      function kf(t) {
        return (
          void 0 === t && (t = { number: {}, dateTime: {}, pluralRules: {} }),
          {
            getNumberFormat: yf(
              function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new ((t = Intl.NumberFormat).bind.apply(t, zc([void 0], e, !1)))();
              },
              { cache: Uf(t.number), strategy: Tf.variadic },
            ),
            getDateTimeFormat: yf(
              function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new ((t = Intl.DateTimeFormat).bind.apply(t, zc([void 0], e, !1)))();
              },
              { cache: Uf(t.dateTime), strategy: Tf.variadic },
            ),
            getPluralRules: yf(
              function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new ((t = Intl.PluralRules).bind.apply(t, zc([void 0], e, !1)))();
              },
              { cache: Uf(t.pluralRules), strategy: Tf.variadic },
            ),
          }
        );
      }
      !(function (t) {
        (t[(t.literal = 0)] = 'literal'), (t[(t.object = 1)] = 'object');
      })(Cf || (Cf = {}));
      var Gf,
        Ff = (function () {
          function t(e, r, n, o) {
            void 0 === r && (r = t.defaultLocale);
            var i = this;
            if (
              ((this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
              (this.format = function (t) {
                var e = i.formatToParts(t);
                if (1 === e.length) return e[0].value;
                var r = e.reduce(function (t, e) {
                  return (
                    t.length && e.type === Cf.literal && 'string' == typeof t[t.length - 1]
                      ? (t[t.length - 1] += e.value)
                      : t.push(e.value),
                    t
                  );
                }, []);
                return r.length <= 1 ? r[0] || '' : r;
              }),
              (this.formatToParts = function (t) {
                return Rf(i.ast, i.locales, i.formatters, i.formats, t, void 0, i.message);
              }),
              (this.resolvedOptions = function () {
                var t;
                return {
                  locale:
                    (null === (t = i.resolvedLocale) || void 0 === t ? void 0 : t.toString()) ||
                    Intl.NumberFormat.supportedLocalesOf(i.locales)[0],
                };
              }),
              (this.getAst = function () {
                return i.ast;
              }),
              (this.locales = r),
              (this.resolvedLocale = t.resolveLocale(r)),
              'string' == typeof e)
            ) {
              if (((this.message = e), !t.__parse))
                throw new TypeError(
                  'IntlMessageFormat.__parse must be set to process `message` of type `string`',
                );
              this.ast = t.__parse(e, {
                ignoreTag: null == o ? void 0 : o.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = e;
            if (!Array.isArray(this.ast))
              throw new TypeError('A message must be provided as a String or AST.');
            (this.formats = Mf(t.formats, n)),
              (this.formatters = (o && o.formatters) || kf(this.formatterCache));
          }
          return (
            Object.defineProperty(t, 'defaultLocale', {
              get: function () {
                return (
                  t.memoizedDefaultLocale ||
                    (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                  t.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.memoizedDefaultLocale = null),
            (t.resolveLocale = function (t) {
              if (void 0 !== Intl.Locale) {
                var e = Intl.NumberFormat.supportedLocalesOf(t);
                return e.length > 0
                  ? new Intl.Locale(e[0])
                  : new Intl.Locale('string' == typeof t ? t : t[0]);
              }
            }),
            (t.__parse = vf),
            (t.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: 'currency' },
                percent: { style: 'percent' },
              },
              date: {
                short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                medium: { month: 'short', day: 'numeric', year: 'numeric' },
                long: { month: 'long', day: 'numeric', year: 'numeric' },
                full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
              },
              time: {
                short: { hour: 'numeric', minute: 'numeric' },
                medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                long: {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  timeZoneName: 'short',
                },
                full: {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  timeZoneName: 'short',
                },
              },
            }),
            t
          );
        })();
      function Jf(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'zh-CN',
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (!n || !n[r] || !n[r][t]) return '';
        var o = new Ff(n[r][t], r);
        return o.format(e);
      }
      function Vf(t) {
        return (Vf =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function zf(t) {
        return !du(t) && 'object' === Vf(t);
      }
      function $f(t) {
        return !du(t) && '[object Object]' === Object.prototype.toString.call(t);
      }
      function Xf(t) {
        return '$' in t;
      }
      function Kf(t) {
        return !(!t || !zf(t)) && (!!Xf(t) || Object.keys(t).length > 0);
      }
      function Yf() {
        for (var t = [], e = arguments.length, r = new Array(e), n = 0; n < e; n++)
          r[n] = arguments[n];
        if (
          (r.flat().forEach(function (e) {
            Kf(e) && t.push(e);
          }),
          t.length <= 1)
        )
          return t[0];
        var o = t[0],
          i = t.slice(1);
        return i.reduce(function (t, e) {
          if (Xf(e)) {
            if (Xf(t)) return e;
            var r = t;
            (t = e), (e = r);
          }
          var n = Object.getOwnPropertyDescriptors(e);
          return (t = Object.create(t, n)), Object(a.isProxy)(e) ? Object(a.reactive)(t) : t;
        }, o);
      }
      function Zf(t) {
        return t ? (Array.isArray(t) ? t : [t]) : [];
      }
      var Wf = 'JSExpression',
        qf = 'JSFunction',
        Qf = 'JSSlot',
        tl = 'JSBlock',
        el = 'i18n';
      function rl() {
        try {
          return window.parent !== window && window.parent.location.host === window.location.host;
        } catch (t) {
          return !1;
        }
      }
      function nl(t, e) {
        return ol({ type: Wf, value: "this.i18n('".concat(t.key, "')") }, e);
      }
      function ol(t, e) {
        try {
          var r = ['"use strict";', 'var __self = arguments[0];'],
            n;
          return (
            r.push('return '),
            (n = (n = (t.value || '').trim()).replace(/this(\W|$)/g, function (t, e) {
              return '__self'.concat(e);
            })),
            (n = r.join('\n') + n),
            rl() && window.parent.__newFunc
              ? window.parent.__newFunc(n)(self)
              : new Function('$scope', 'with($scope || {}) { '.concat(n, ' }'))(e)
          );
        } catch (e) {
          return void console.warn('parseExpression.error', e, t, self);
        }
      }
      function il(t, e) {
        if (Object(c.isJSExpression)(t) || Object(c.isJSFunction)(t)) return ol(t, e);
        if (Object(c.isI18nData)(t)) return nl(t, e);
        if (G(t)) return t.trim();
        if (Array.isArray(t))
          return t.map(function (t) {
            return il(t, e);
          });
        if (N(t)) return t.bind(e);
        if ($f(t)) {
          if (!t) return t;
          var r = {};
          return (
            Object.keys(t).forEach(function (n) {
              n.startsWith('__') || (r[n] = il(t[n], e));
            }),
            r
          );
        }
        return t;
      }
      function ul(t, e) {
        var r = {};
        return (
          Zf(e).forEach(function (e, n) {
            r[e] = t[n];
          }),
          r
        );
      }
      var al = Object(a.defineComponent)({
        name: 'Hoc',
        props: i,
        setup: function t(e) {
          var r,
            n = Ac().triggerCompGetCtx,
            o = Ch(e),
            i = o.node,
            u = o.locked,
            s = o.buildSchema,
            f = o.buildProps,
            l = o.buildSlots,
            h = o.buildLoop,
            p,
            d = (0, o.buildShow)(e.schema),
            v = d.show,
            y = d.hidden,
            b = d.condition,
            m = h(e.schema),
            g = m.loop,
            _ = m.updateLoop,
            E = m.updateLoopArg,
            O = m.buildLoopScope,
            S = Object(a.reactive)({}),
            w = Object(a.reactive)({}),
            j = s(),
            P;
          if ((Object.assign(S, j.props), Object.assign(w, j.slots), i)) {
            var T = [];
            Object(a.onUnmounted)(function () {
              return T.forEach(function (t) {
                return null == t ? void 0 : t();
              });
            }),
              T.push(
                i.onChildrenChange(function () {
                  var t = i.export(c.TransformStage.Render);
                  w.default = Zf(t.children);
                }),
              ),
              T.push(
                i.onPropChange(function (t) {
                  var e = t.key,
                    r = t.prop,
                    n = t.newValue,
                    o = t.oldValue,
                    a = 1 === r.path.length,
                    s = r.path[0];
                  if (a && e)
                    if ('___isLocked___' === e) u.value = n;
                    else if ('___hidden___' === e) y(n);
                    else if ('___condition___' === e) b(n);
                    else if ('___loop___' === e) _(n);
                    else if ('___loopArgs___' === e) E(n);
                    else if ('children' === e)
                      if (Object(c.isJSSlot)(n)) {
                        var f,
                          l = r.slotNode.export(c.TransformStage.Render);
                        w.default = l;
                      } else du(n) ? delete w.default : (w.default = Zf(n));
                    else if (Object(c.isJSSlot)(n)) {
                      var h,
                        p = r.slotNode.export(c.TransformStage.Render);
                      w[e] = p;
                    } else du(n) && Object(c.isJSSlot)(o) ? delete w[e] : (S[e] = n);
                  else '___loopArgs___' === s ? E(n, e) : s && (S[s] = i.getPropValue(s));
                }),
              );
          }
          return {
            show: v,
            loop: g,
            compSlots: w,
            compProps: S,
            getRef: function t(r) {
              n(e.schema, r);
            },
            buildSlots: l,
            buildProps: f,
            buildLoopScope: O,
          };
        },
        render: function t() {
          var e = this.comp,
            r = this.show,
            n = this.loop,
            o = this.compProps,
            i = this.compSlots,
            u = this.getRef,
            c = this.buildSlots,
            s = this.buildProps,
            f = this.buildLoopScope;
          if (!r) return null;
          if (!e) return Object(a.h)('div', 'component not found');
          if (!n) {
            var l = s(o, null, { ref: u }),
              h = c(i);
            return Object(a.h)(e, l, h);
          }
          return Array.isArray(n)
            ? Object(a.h)(
                a.Fragment,
                n.map(function (t, r, n) {
                  var l = f(t, r, n.length),
                    h = s(o, l, { ref: u }),
                    p = c(i, l);
                  return Object(a.h)(e, h, p);
                }),
              )
            : (console.warn('[vue-renderer]: loop must be array', n), null);
        },
      });
      function cl(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var sl = Object(a.defineComponent)({
          props: i,
          setup: function t(e) {
            var r = Ch(e),
              n = r.buildSchema,
              o = r.buildProps,
              i = r.buildLoop,
              u = r.buildSlots,
              a,
              c,
              s = (0, r.buildShow)(e.schema).show,
              f = i(e.schema),
              l = f.loop,
              h = f.loopArgs,
              p = n(),
              d,
              v;
            return {
              show: s,
              loop: l,
              loopArgs: h,
              compProps: p.props,
              compSlots: p.slots,
              buildSlots: u,
              buildProps: o,
            };
          },
          render: function t() {
            var e = this.show,
              r = this.comp,
              n = this.loop,
              o = this.loopArgs,
              i = this.compProps,
              u = this.compSlots,
              c = this.buildProps,
              s = this.buildSlots;
            return e
              ? r
                ? n
                  ? Array.isArray(n)
                    ? Object(a.h)(
                        a.Fragment,
                        n.map(function (t, e) {
                          var n,
                            f = (cl((n = {}), o[0], t), cl(n, o[1], e), n);
                          return Object(a.h)(r, c(i, f), s(u, f));
                        }),
                      )
                    : (console.warn('[vue-renderer]: loop must be array', n), null)
                  : Object(a.h)(r, c(i), s(u))
                : Object(a.h)('div', 'component not found')
              : null;
          },
        }),
        fl = '[object Boolean]';
      function ll(t) {
        return !0 === t || !1 === t || (M(t) && P(t) == fl);
      }
      var hl = ll;
      function pl(t) {
        return void 0 === t;
      }
      var dl = pl;
      function vl() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ vl =
          function e() {
            return t;
          };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = 'function' == typeof Symbol ? Symbol : {},
          o = n.iterator || '@@iterator',
          i = n.asyncIterator || '@@asyncIterator',
          u = n.toStringTag || '@@toStringTag';
        function a(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          a({}, '');
        } catch (t) {
          a = function t(e, r, n) {
            return (e[r] = n);
          };
        }
        function c(t, e, r, n) {
          var o = e && e.prototype instanceof l ? e : l,
            i = Object.create(o.prototype),
            u = new S(n || []);
          return (
            (i._invoke = (function (t, e, r) {
              var n = 'suspendedStart';
              return function (o, i) {
                if ('executing' === n) throw new Error('Generator is already running');
                if ('completed' === n) {
                  if ('throw' === o) throw i;
                  return j();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var u = r.delegate;
                  if (u) {
                    var a = _(u, r);
                    if (a) {
                      if (a === f) continue;
                      return a;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = 'executing';
                  var c = s(t, e, r);
                  if ('normal' === c.type) {
                    if (((n = r.done ? 'completed' : 'suspendedYield'), c.arg === f)) continue;
                    return { value: c.arg, done: r.done };
                  }
                  'throw' === c.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = c.arg));
                }
              };
            })(t, r, u)),
            i
          );
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = c;
        var f = {};
        function l() {}
        function h() {}
        function p() {}
        var d = {};
        a(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(w([])));
        y && y !== e && r.call(y, o) && (d = y);
        var b = (p.prototype = l.prototype = Object.create(d));
        function m(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            a(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function g(t, e) {
          function n(o, i, u, a) {
            var c = s(t[o], t, i);
            if ('throw' !== c.type) {
              var f = c.arg,
                l = f.value;
              return l && 'object' == kl(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, u, a);
                    },
                    function (t) {
                      n('throw', t, u, a);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (f.value = t), u(f);
                    },
                    function (t) {
                      return n('throw', t, u, a);
                    },
                  );
            }
            a(c.arg);
          }
          var o;
          this._invoke = function (t, r) {
            function i() {
              return new e(function (e, o) {
                n(t, r, e, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function _(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'), (e.arg = void 0), _(t, e), 'throw' === e.method)
              )
                return f;
              (e.method = 'throw'),
                (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ('throw' === n.type)
            return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), f;
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              f);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function S(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(E, this), this.reset(!0);
        }
        function w(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = p),
          a(b, 'constructor', p),
          a(p, 'constructor', h),
          (h.displayName = a(p, u, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === h || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), a(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          m(g.prototype),
          a(g.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = g),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var u = new g(c(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? u
              : u.next().then(function (t) {
                  return t.done ? t.value : u.next();
                });
          }),
          m(b),
          a(b, u, 'Generator'),
          a(b, o, function () {
            return this;
          }),
          a(b, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = w),
          (S.prototype = {
            constructor: S,
            reset: function t(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function t() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function t(e) {
              if (this.done) throw e;
              var n = this;
              function o(t, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (n.next = t),
                  r && ((n.method = 'next'), (n.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  a = u.completion;
                if ('root' === u.tryLoc) return o('end');
                if (u.tryLoc <= this.prev) {
                  var c = r.call(u, 'catchLoc'),
                    s = r.call(u, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return o(u.finallyLoc);
                  } else if (c) {
                    if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                  } else {
                    if (!s) throw new Error('try statement without catch or finally');
                    if (this.prev < u.finallyLoc) return o(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function t(e, n) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var u = i;
                  break;
                }
              }
              u &&
                ('break' === e || 'continue' === e) &&
                u.tryLoc <= n &&
                n <= u.finallyLoc &&
                (u = null);
              var a = u ? u.completion : {};
              return (
                (a.type = e),
                (a.arg = n),
                u ? ((this.method = 'next'), (this.next = u.finallyLoc), f) : this.complete(a)
              );
            },
            complete: function t(e, r) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === e.type && r && (this.next = r),
                f
              );
            },
            finish: function t(e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), f;
              }
            },
            catch: function t(e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function t(e, r, n) {
              return (
                (this.delegate = { iterator: w(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      function yl(t, e) {
        return El(t) || _l(t, e) || ml(t, e) || bl();
      }
      function bl() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function ml(t, e) {
        if (t) {
          if ('string' == typeof t) return gl(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? gl(t, e)
              : void 0
          );
        }
      }
      function gl(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function _l(t, e) {
        var r =
          null == t
            ? null
            : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (null != r) {
          var n = [],
            o = !0,
            i = !1,
            u,
            a;
          try {
            for (
              r = r.call(t);
              !(o = (u = r.next()).done) && (n.push(u.value), !e || n.length !== e);
              o = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              o || null == r.return || r.return();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        }
      }
      function El(t) {
        if (Array.isArray(t)) return t;
      }
      function Ol(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Sl(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ol(Object(r), !0).forEach(function (e) {
                wl(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ol(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function wl(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function jl(t, e, r, n, o, i, u) {
        try {
          var a = t[i](u),
            c = a.value;
        } catch (t) {
          return void r(t);
        }
        a.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function Pl(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(e, r);
            function u(t) {
              jl(i, n, o, u, a, 'next', t);
            }
            function a(t) {
              jl(i, n, o, u, a, 'throw', t);
            }
            u(void 0);
          });
        };
      }
      function Tl(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function Al(t, e, r) {
        return (
          e && Tl(t.prototype, e),
          r && Tl(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }
      function Ll(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function Hl(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e && Ml(t, e);
      }
      function xl(t) {
        var e = Rl();
        return function r() {
          var n = Ul(t),
            o;
          if (e) {
            var i = Ul(this).constructor;
            o = Reflect.construct(n, arguments, i);
          } else o = n.apply(this, arguments);
          return Bl(this, o);
        };
      }
      function Bl(t, e) {
        if (e && ('object' === kl(e) || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError('Derived constructors may only return object or undefined');
        return Cl(t);
      }
      function Cl(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function Nl(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (Nl = function t(r) {
          if (null === r || !Dl(r)) return r;
          if ('function' != typeof r)
            throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== e) {
            if (e.has(r)) return e.get(r);
            e.set(r, n);
          }
          function n() {
            return Il(r, arguments, Ul(this).constructor);
          }
          return (
            (n.prototype = Object.create(r.prototype, {
              constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
            })),
            Ml(n, r)
          );
        })(t);
      }
      function Il(t, e, r) {
        return (Il = Rl()
          ? Reflect.construct.bind()
          : function t(e, r, n) {
              var o = [null];
              o.push.apply(o, r);
              var i,
                u = new (Function.bind.apply(e, o))();
              return n && Ml(u, n.prototype), u;
            }).apply(null, arguments);
      }
      function Rl() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function Dl(t) {
        return -1 !== Function.toString.call(t).indexOf('[native code]');
      }
      function Ml(t, e) {
        return (Ml = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function t(e, r) {
              return (e.__proto__ = r), e;
            })(t, e);
      }
      function Ul(t) {
        return (Ul = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function t(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(t);
      }
      function kl(t) {
        return (kl =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Gl(t) {
        var e = [];
        return (
          Object.keys(t).forEach(function (r) {
            var n = t[r];
            null != n &&
              '' !== n &&
              ('object' === kl(n)
                ? e.push(''.concat(r, '=').concat(encodeURIComponent(JSON.stringify(n))))
                : e.push(''.concat(r, '=').concat(encodeURIComponent(String(n)))));
          }),
          e.join('&')
        );
      }
      function Fl(t, e) {
        if (!e) return t;
        var r = Gl(e);
        return r
          ? t.indexOf('?') > 0
            ? ''.concat(t, '&').concat(r)
            : ''.concat(t, '?').concat(r)
          : t;
      }
      function Jl(t, e) {
        for (var r in t) if (r.toLowerCase() === e) return [t[r], r];
        return [];
      }
      function Vl(t) {
        return ['arrayBuffer', 'blob', 'formData', 'json', 'text'].includes(t);
      }
      function zl(t) {
        var e = new FormData();
        for (var r in t) {
          var n = t[r];
          n instanceof Blob ? e.append(r, n) : e.append(r, String(n));
        }
        return e;
      }
      var $l = {
        'application/json': function t(e) {
          return JSON.stringify(e);
        },
        'multipart/form-data': function t(e) {
          return $f(e) ? zl(e) : e;
        },
        'application/x-www-form-urlencoded': function t(e) {
          return Gl(e);
        },
      };
      function Xl(t, e) {
        var r = Object.keys($l).find(function (e) {
          return t.includes(e);
        });
        return r ? $l[r](e) : e;
      }
      var Kl = (function (t) {
          Hl(r, t);
          var e = xl(r);
          function r(t, n, o) {
            var i;
            return Ll(this, r), ((i = e.call(this, t)).code = n), (i.data = o), i;
          }
          return Al(r);
        })(Nl(Error)),
        Yl = Al(function t(e, r) {
          Ll(this, t), (this.code = e), (this.data = r);
        }),
        Zl;
      function Wl(t) {
        return ql.apply(this, arguments);
      }
      function ql() {
        return (ql = Pl(
          vl().mark(function t(e) {
            var r, n, o, i, u, a, c, s, f, l, h, p, d, v, y, b, m, g, _, E;
            return vl().wrap(
              function t(O) {
                for (;;)
                  switch ((O.prev = O.next)) {
                    case 0:
                      return (
                        (r = e.uri),
                        (n = e.method),
                        (o = e.timeout),
                        (i = e.params),
                        (u = void 0 === i ? {} : i),
                        (a = e.headers),
                        (c = void 0 === a ? {} : a),
                        (s = e.responseType),
                        (f = void 0 === s ? 'json' : s),
                        (h = Sl({ Accept: 'application/json' }, c)),
                        (p = { method: n, headers: h }),
                        'GET' === n || 'DELETE' === n || 'OPTIONS' === n
                          ? (l = Fl(r, u))
                          : ((l = r),
                            (d = Jl(h, 'content-type')),
                            (v = yl(d, 2)),
                            (y = v[0]),
                            (b = v[1]),
                            (p.body = Xl(null != y ? y : 'application/json', u)),
                            'multipart/form-data' === y && b && delete h[b]),
                        o &&
                          ((m = new AbortController()),
                          (p.signal = m.signal),
                          setTimeout(function () {
                            return m.abort();
                          }, o)),
                        (O.next = 7),
                        fetch(l, p)
                      );
                    case 7:
                      if (((g = O.sent), !((_ = g.status) >= 200 && _ < 300))) {
                        O.next = 28;
                        break;
                      }
                      if (204 !== _) {
                        O.next = 18;
                        break;
                      }
                      if ('DELETE' !== n) {
                        O.next = 15;
                        break;
                      }
                      return O.abrupt('return', new Yl(_, null));
                    case 15:
                      throw new Kl(g.statusText, _);
                    case 16:
                      O.next = 26;
                      break;
                    case 18:
                      if (Vl(f)) {
                        O.next = 20;
                        break;
                      }
                      throw new Kl('invalid response type: '.concat(f), -1);
                    case 20:
                      return (O.t0 = Yl), (O.t1 = _), (O.next = 24), g[f]();
                    case 24:
                      return (O.t2 = O.sent), O.abrupt('return', new O.t0(O.t1, O.t2));
                    case 26:
                      O.next = 39;
                      break;
                    case 28:
                      if (!(_ >= 400)) {
                        O.next = 39;
                        break;
                      }
                      return (O.prev = 29), (O.next = 32), g.json();
                    case 32:
                      throw ((E = O.sent), new Kl(g.statusText, _, E));
                    case 36:
                      throw ((O.prev = 36), (O.t3 = O.catch(29)), new Kl(g.statusText, _));
                    case 39:
                      throw new Kl(g.statusText, _);
                    case 40:
                    case 'end':
                      return O.stop();
                  }
              },
              t,
              null,
              [[29, 36]],
            );
          }),
        )).apply(this, arguments);
      }
      function Ql(t) {
        return (Ql =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      !(function (t) {
        (t.Initial = 'init'), (t.Loading = 'loading'), (t.Loaded = 'loaded'), (t.Error = 'error');
      })(Zl || (Zl = {}));
      var th = ['headers', 'assignToScope'],
        eh = ['params', 'headers'];
      function rh() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ rh =
          function e() {
            return t;
          };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = 'function' == typeof Symbol ? Symbol : {},
          o = n.iterator || '@@iterator',
          i = n.asyncIterator || '@@asyncIterator',
          u = n.toStringTag || '@@toStringTag';
        function a(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          a({}, '');
        } catch (t) {
          a = function t(e, r, n) {
            return (e[r] = n);
          };
        }
        function c(t, e, r, n) {
          var o = e && e.prototype instanceof l ? e : l,
            i = Object.create(o.prototype),
            u = new S(n || []);
          return (
            (i._invoke = (function (t, e, r) {
              var n = 'suspendedStart';
              return function (o, i) {
                if ('executing' === n) throw new Error('Generator is already running');
                if ('completed' === n) {
                  if ('throw' === o) throw i;
                  return j();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var u = r.delegate;
                  if (u) {
                    var a = _(u, r);
                    if (a) {
                      if (a === f) continue;
                      return a;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = 'executing';
                  var c = s(t, e, r);
                  if ('normal' === c.type) {
                    if (((n = r.done ? 'completed' : 'suspendedYield'), c.arg === f)) continue;
                    return { value: c.arg, done: r.done };
                  }
                  'throw' === c.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = c.arg));
                }
              };
            })(t, r, u)),
            i
          );
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = c;
        var f = {};
        function l() {}
        function h() {}
        function p() {}
        var d = {};
        a(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(w([])));
        y && y !== e && r.call(y, o) && (d = y);
        var b = (p.prototype = l.prototype = Object.create(d));
        function m(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            a(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function g(t, e) {
          function n(o, i, u, a) {
            var c = s(t[o], t, i);
            if ('throw' !== c.type) {
              var f = c.arg,
                l = f.value;
              return l && 'object' == Ql(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, u, a);
                    },
                    function (t) {
                      n('throw', t, u, a);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (f.value = t), u(f);
                    },
                    function (t) {
                      return n('throw', t, u, a);
                    },
                  );
            }
            a(c.arg);
          }
          var o;
          this._invoke = function (t, r) {
            function i() {
              return new e(function (e, o) {
                n(t, r, e, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function _(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'), (e.arg = void 0), _(t, e), 'throw' === e.method)
              )
                return f;
              (e.method = 'throw'),
                (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ('throw' === n.type)
            return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), f;
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              f);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function S(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(E, this), this.reset(!0);
        }
        function w(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = p),
          a(b, 'constructor', p),
          a(p, 'constructor', h),
          (h.displayName = a(p, u, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === h || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), a(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          m(g.prototype),
          a(g.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = g),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var u = new g(c(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? u
              : u.next().then(function (t) {
                  return t.done ? t.value : u.next();
                });
          }),
          m(b),
          a(b, u, 'Generator'),
          a(b, o, function () {
            return this;
          }),
          a(b, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = w),
          (S.prototype = {
            constructor: S,
            reset: function t(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function t() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function t(e) {
              if (this.done) throw e;
              var n = this;
              function o(t, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (n.next = t),
                  r && ((n.method = 'next'), (n.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  a = u.completion;
                if ('root' === u.tryLoc) return o('end');
                if (u.tryLoc <= this.prev) {
                  var c = r.call(u, 'catchLoc'),
                    s = r.call(u, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return o(u.finallyLoc);
                  } else if (c) {
                    if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                  } else {
                    if (!s) throw new Error('try statement without catch or finally');
                    if (this.prev < u.finallyLoc) return o(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function t(e, n) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var u = i;
                  break;
                }
              }
              u &&
                ('break' === e || 'continue' === e) &&
                u.tryLoc <= n &&
                n <= u.finallyLoc &&
                (u = null);
              var a = u ? u.completion : {};
              return (
                (a.type = e),
                (a.arg = n),
                u ? ((this.method = 'next'), (this.next = u.finallyLoc), f) : this.complete(a)
              );
            },
            complete: function t(e, r) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === e.type && r && (this.next = r),
                f
              );
            },
            finish: function t(e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), f;
              }
            },
            catch: function t(e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function t(e, r, n) {
              return (
                (this.delegate = { iterator: w(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      function nh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function oh(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nh(Object(r), !0).forEach(function (e) {
                ih(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : nh(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function ih(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function uh(t, e) {
        if (null == t) return {};
        var r = ah(t, e),
          n,
          o;
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
        }
        return r;
      }
      function ah(t, e) {
        if (null == t) return {};
        var r = {},
          n = Object.keys(t),
          o,
          i;
        for (i = 0; i < n.length; i++) (o = n[i]), e.indexOf(o) >= 0 || (r[o] = t[o]);
        return r;
      }
      function ch(t, e, r, n, o, i, u) {
        try {
          var a = t[i](u),
            c = a.value;
        } catch (t) {
          return void r(t);
        }
        a.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function sh(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(e, r);
            function u(t) {
              ch(i, n, o, u, a, 'next', t);
            }
            function a(t) {
              ch(i, n, o, u, a, 'throw', t);
            }
            u(void 0);
          });
        };
      }
      var fh = function t(e) {
          return e;
        },
        lh = function t() {},
        hh = function t() {
          return !0;
        };
      function ph(t, e, r) {
        var n = Object(a.shallowRef)(),
          o = Object(a.shallowRef)(),
          i = Object(a.ref)(Zl.Initial),
          u = Object(a.computed)(function () {
            return i.value === Zl.Loading;
          }),
          c = Object(a.computed)(function () {
            return !!il(t.isInit, r);
          }),
          s = t.willFetch,
          f = t.shouldFetch,
          l = t.dataHandler,
          h = t.errorHandler,
          p = {
            willFetch: s ? il(s, r) : fh,
            shouldFetch: f ? il(f, r) : hh,
            dataHandler: l
              ? il(l, r)
              : function (t) {
                  return t.data;
                },
            errorHandler: h ? il(h, r) : lh,
          },
          d = (function () {
            var u = sh(
              rh().mark(function u(a) {
                var c,
                  s,
                  f,
                  l,
                  h,
                  d,
                  v,
                  y,
                  b,
                  m,
                  g,
                  _,
                  E,
                  O,
                  S,
                  w = arguments;
                return rh().wrap(
                  function u(j) {
                    for (;;)
                      switch ((j.prev = j.next)) {
                        case 0:
                          if (
                            ((c = w.length > 1 && void 0 !== w[1] ? w[1] : {}),
                            (j.prev = 1),
                            (s = t.type),
                            (f = t.options),
                            (l = t.id),
                            (h = c.headers),
                            (d = c.assignToScope),
                            (v = void 0 === d || d),
                            (y = uh(c, th)),
                            e)
                          ) {
                            j.next = 6;
                            break;
                          }
                          throw new Error('unsupport fetch type: ' + s);
                        case 6:
                          if (
                            (b = N(p.shouldFetch)
                              ? p.shouldFetch()
                              : !hl(p.shouldFetch) || p.shouldFetch)
                          ) {
                            j.next = 10;
                            break;
                          }
                          throw (
                            ((i.value = Zl.Error),
                            new Error(
                              'the '.concat(
                                l,
                                ' request should not fetch, please check the condition',
                              ),
                            ))
                          );
                        case 10:
                          return (
                            (m = il(null != f ? f : {}, r)),
                            (g = m.params),
                            (_ = m.headers),
                            (E = uh(m, eh)),
                            (i.value = Zl.Loading),
                            (j.next = 14),
                            e(
                              p.willFetch(
                                oh(
                                  oh(oh({}, E), y),
                                  {},
                                  {
                                    headers: oh(oh({}, _), h),
                                    params: $f(g) && $f(a) ? oh(oh({}, g), a) : null != a ? a : g,
                                  },
                                ),
                              ),
                            )
                          );
                        case 14:
                          return (
                            (O = j.sent),
                            (i.value = Zl.Loaded),
                            (S = n.value = p.dataHandler(O)),
                            !dl(n) && v && (r[l] = S),
                            j.abrupt('return', S)
                          );
                        case 21:
                          throw (
                            ((j.prev = 21),
                            (j.t0 = j.catch(1)),
                            (i.value = Zl.Error),
                            (o.value = j.t0),
                            p.errorHandler(j.t0),
                            j.t0)
                          );
                        case 27:
                        case 'end':
                          return j.stop();
                      }
                  },
                  u,
                  null,
                  [[1, 21]],
                );
              }),
            );
            return function t(e) {
              return u.apply(this, arguments);
            };
          })();
        return Object(a.reactive)({ data: n, error: o, loading: u, status: i, isInit: c, load: d });
      }
      function dh(t, e) {
        var r = t.list,
          n = t.dataHandler,
          o = {},
          i = {},
          u;
        return (
          r.forEach(function (t) {
            var r,
              u = ph(oh({ dataHandler: n }, t), Wl, e),
              a = function t(e, r) {
                var n = oh({ assignToScope: !1 }, r);
                return u.load(e, n);
              };
            (o[t.id] = a), (i[t.id] = u);
          }),
          {
            dataSource: o,
            dataSourceMap: i,
            reloadDataSource: function t(e, r, n) {
              if (e) {
                var o = i[e];
                if (!o) throw new Error('dataSource not found, id: ' + e);
                return o.load(r, n);
              }
              var u = Object.keys(i)
                .map(function (t) {
                  return i[t];
                })
                .filter(function (t) {
                  return t.isInit;
                })
                .map(function (t) {
                  return t.load();
                });
              return Promise.all(u);
            },
          }
        );
      }
      function vh(t, e) {
        return _h(t) || gh(t, e) || bh(t, e) || yh();
      }
      function yh() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function bh(t, e) {
        if (t) {
          if ('string' == typeof t) return mh(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? mh(t, e)
              : void 0
          );
        }
      }
      function mh(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function gh(t, e) {
        var r =
          null == t
            ? null
            : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (null != r) {
          var n = [],
            o = !0,
            i = !1,
            u,
            a;
          try {
            for (
              r = r.call(t);
              !(o = (u = r.next()).done) && (n.push(u.value), !e || n.length !== e);
              o = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              o || null == r.return || r.return();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        }
      }
      function _h(t) {
        if (Array.isArray(t)) return t;
      }
      function Eh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Oh(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Eh(Object(r), !0).forEach(function (e) {
                Sh(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Eh(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function Sh(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var wh = jc(),
        jh = {
          beforeMount: a.onBeforeMount,
          mounted: a.onMounted,
          beforeUpdate: a.onBeforeUpdate,
          updated: a.onUpdated,
          beforeUnmount: a.onBeforeUnmount,
          unmounted: a.onUnmounted,
          errorCaptured: a.onErrorCaptured,
        },
        Ph = {
          componentDidMount: a.onMounted,
          componentDidCatch: a.onErrorCaptured,
          shouldComponentUpdate: a.onBeforeUpdate,
          componentWillUnmount: a.onBeforeUnmount,
        },
        Th = Oh(Oh({}, jh), Ph);
      function Ah(t) {
        return t in Th;
      }
      function Lh(t) {
        return Array.isArray(t)
          ? t.every(function (t) {
              return Lh(t);
            })
          : Object(c.isDOMText)(t) || Object(c.isNodeSchema)(t) || Object(c.isJSExpression)(t);
      }
      function Hh(t) {
        return !!N(t) || !(!zf(t) || (!('render' in t) && !('setup' in t)));
      }
      var xh = Symbol('IS_LOCKED');
      function Bh(t) {
        var e = Object(a.ref)(t),
          r = Object(a.inject)(xh, null),
          n = Object(a.computed)({
            get: function t() {
              return (null == r ? void 0 : r.value) || e.value;
            },
            set: function t(r) {
              return (e.value = r);
            },
          });
        return Object(a.provide)(xh, n), n;
      }
      function Ch(t) {
        var e = Ac(),
          r = e.components,
          n = e.getNode,
          o = e.designMode,
          i = t.schema.id ? n(t.schema.id) : null,
          u = i ? Bh(i.isLocked) : Object(a.ref)(!1),
          s = 'design' === o;
        Object(a.provide)(wh, { mode: o, node: i, isDesignerEnv: s });
        var f = function e(n, o, i, u) {
            var s = Yf(t.scope, i);
            if (G(n)) return Object(a.createTextVNode)(n);
            if (Object(c.isJSExpression)(n)) {
              var f = ol(n, s);
              return Object(a.createTextVNode)(Object(a.toDisplayString)(f));
            }
            if (!u) {
              var l = n.componentName;
              u = r[l];
            }
            if (!u) return Object(a.h)('div', 'component not found');
            var h = hu(u, function (t, e) {
              return !!e.match(/^__[\s\S]+__/);
            });
            return (
              Object.keys(h).length > 0 &&
                (o = Object.create(o, Object.getOwnPropertyDescriptors(h))),
              Object(a.h)(o, { key: n.id, comp: u, scope: s, schema: n })
            );
          },
          l,
          h,
          p = s
            ? function t(e, r, n) {
                return f(e, al, r, n);
              }
            : function t(e, r, n) {
                return f(e, sl, r, n);
              },
          d = function e() {
            var r,
              n = i ? i.export(c.TransformStage.Render) : t.schema,
              o = {},
              u = {};
            return (
              (o.default = Zf(n.children)),
              Object.entries(null !== (r = n.props) && void 0 !== r ? r : {}).forEach(function (t) {
                var e = vh(t, 2),
                  r = e[0],
                  n = e[1];
                if (Object(c.isJSSlot)(n)) {
                  var a = null == i ? void 0 : i.getProp(r);
                  if (a && a.slotNode) {
                    var s = a.slotNode.export(c.TransformStage.Render);
                    o[r] = s;
                  } else
                    n.value &&
                      (o[r] = { componentName: 'Slot', params: n.params, children: n.value });
                } else 'className' === r ? (u.class = n) : 'children' === r && Lh(n) ? (o.default = Zf(n)) : (u[r] = n);
              }),
              { props: u, slots: o }
            );
          },
          v = function t(e, r, n, o) {
            if (Object(c.isJSExpression)(e) || Object(c.isJSFunction)(e)) return ol(e, r);
            if (Object(c.isJSSlot)(e)) {
              var i, u, a, s;
              if (null != o && o.slotNode)
                (u = o.slotNode.export(c.TransformStage.Render)),
                  (i = null !== (a = u.params) && void 0 !== a ? a : []);
              else (u = Zf(e.value)), (i = null !== (s = e.params) && void 0 !== s ? s : []);
              return function () {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                  e[r] = arguments[r];
                var o = ul(e, i),
                  a = [];
                return (
                  Zf(u).forEach(function (t) {
                    var e = p(t, [n, o]);
                    e && a.push(e);
                  }),
                  a
                );
              };
            }
            if (Array.isArray(e))
              return e.map(function (e, i) {
                return t(e, r, n, null == o ? void 0 : o.get(i));
              });
            if (e && zf(e)) {
              var f = {};
              return (
                Object.keys(e).forEach(function (i) {
                  if (!i.startsWith('__')) {
                    var u = e[i],
                      a = null == o ? void 0 : o.get(i);
                    f[i] = t(u, r, n, a);
                  }
                }),
                f
              );
            }
            return e;
          },
          y = function t(e, r, n, o) {
            if (G(e)) {
              var i = e,
                u = null;
              return function (t) {
                var e = r.$.refs;
                if ((0 === Object.keys(e).length && (e = r.$.refs = {}), du(r.__loopRefIndex)))
                  (e[i] = t), i in r && (r[i] = t);
                else {
                  var n = e[i];
                  if (Array.isArray(n)) {
                    if (i in r) {
                      var o = r[i];
                      n = Array.isArray(o) && Object(a.toRaw)(o) === n ? o : (r[i] = n);
                    }
                  } else (n = e[i] = []), i in r && (n = r[i] = n);
                  if (du(t)) {
                    var c = n.indexOf(u);
                    c >= 0 && n.splice(c, 1);
                  } else n[r.__loopRefIndex] = t;
                }
                u = t;
              };
            }
            var c = v(e, r, n, o);
            return G(c) ? t(c, r, n, o) : c;
          },
          b = function t(e, r, n) {
            if (r.startsWith('v-model')) {
              var o,
                i = r.match(/v-model(?::(\w+))?$/);
              if (!i) return e;
              var u = wc(null !== (o = i[1]) && void 0 !== o ? o : 'modelValue'),
                a = 'onUpdate:'.concat(u);
              if (Object(c.isJSExpression)(n)) {
                var s = {
                  type: 'JSFunction',
                  value: 'function ($event) {'.concat(n.value, ' = $event}'),
                };
                e[a] = a in e ? Zf(e[a]).concat(s) : s;
              }
              e[u] = n;
            } else if (r.startsWith('v-') && Object(c.isJSExpression)(n));
            else if (r.match(/^on[A-Z]/) && Object(c.isJSFunction)(n)) {
              var f = r.match(/onUpdate(?::?(\w+))$/);
              f && (r = 'onUpdate:'.concat(wc(f[1]))), (e[r] = r in e ? Zf(e[r]).concat(n) : n);
            } else if ('ref' === r && 'ref' in e) {
              var l = n,
                h = e.ref;
              N(h) && N(l)
                ? (e.ref = function () {
                    l.apply(void 0, arguments), h.apply(void 0, arguments);
                  })
                : (e.ref = [h, l].filter(N).pop());
            } else e[r] = n;
          },
          m = function e(r, n, o) {
            var u = {};
            Object.keys(r).forEach(function (t) {
              b(u, t, r[t]);
            });
            var a = {},
              c = n ? Yf(t.scope, n) : t.scope;
            return (
              Object.keys(u).forEach(function (t) {
                var e = u[t];
                a[t] =
                  'ref' === t
                    ? y(e, c, n, null == i ? void 0 : i.getProp(t))
                    : v(e, c, n, null == i ? void 0 : i.getProp(t));
              }),
              o &&
                Object.keys(o).forEach(function (t) {
                  b(a, t, o[t]);
                }),
              a
            );
          },
          g,
          _,
          E = function t(e) {
            return function () {
              var t = e.apply(void 0, arguments);
              if (!t.length) {
                var r = u.value,
                  n = { 'lc-container-locked': r, 'lc-container-placeholder': !0 },
                  o = r
                    ? '\u9501\u5b9a\u5143\u7d20\u53ca\u5b50\u5143\u7d20\u65e0\u6cd5\u7f16\u8f91'
                    : '\u62d6\u62fd\u7ec4\u4ef6\u6216\u6a21\u677f\u5230\u8fd9\u91cc';
                t.push(Object(a.h)('div', { class: n }, o));
              }
              return t;
            };
          },
          O = function t(e, r) {
            return Object.keys(e).reduce(function (t, n) {
              var o = e[n],
                u = 'default' === n,
                a;
              return du(o)
                ? t
                : !u || (null != i && i.isContainer()) || !Array.isArray(o) || 0 !== o.length
                ? ((a = Array.isArray(o)
                    ? function t() {
                        return o
                          .map(function (t) {
                            return p(t, r);
                          })
                          .filter(function (t) {
                            return !du(t);
                          });
                      }
                    : o.id
                    ? function t() {
                        for (var e, n = arguments.length, i = new Array(n), u = 0; u < n; u++)
                          i[u] = arguments[u];
                        var a = p(o, [r, ul(i, null !== (e = o.params) && void 0 !== e ? e : [])]);
                        return du(a) ? [] : [a];
                      }
                    : function t() {
                        for (var e, n = arguments.length, i = new Array(n), u = 0; u < n; u++)
                          i[u] = arguments[u];
                        var a = ul(i, null !== (e = o.params) && void 0 !== e ? e : []);
                        return Zf(o.children)
                          .map(function (t) {
                            return p(t, [r, a]);
                          })
                          .filter(function (t) {
                            return !du(t);
                          });
                      }),
                  (t[n] = u && s && null != i && i.isContainer() ? E(a) : a),
                  t)
                : t;
            }, {});
          };
        return {
          node: i,
          locked: u,
          buildShow: function e(r) {
            var n,
              o,
              i = s
                ? Object(a.ref)(null !== (n = r.hidden) && void 0 !== n && n)
                : Object(a.ref)(!1),
              u = Object(a.ref)(null === (o = r.condition) || void 0 === o || o),
              c;
            return {
              show: Object(a.computed)(function () {
                if (i.value) return !1;
                var e = u.value;
                return 'boolean' == typeof e ? e : !!il(e, t.scope);
              }),
              hidden: function t(e) {
                i.value = e;
              },
              condition: function t(e) {
                u.value = e;
              },
            };
          },
          renderComp: p,
          buildLoop: function e(r) {
            var n = Object(a.ref)(),
              o = Object(a.ref)(['item', 'index']);
            return (
              r.loop && (n.value = r.loop),
              r.loopArgs &&
                r.loopArgs.forEach(function (t, e) {
                  o.value[e] = t;
                }),
              {
                loop: Object(a.computed)(function () {
                  return n.value ? il(n.value, t.scope) : null;
                }),
                loopArgs: o,
                updateLoop: function t(e) {
                  n.value = e;
                },
                updateLoopArg: function t(e, r) {
                  Array.isArray(e)
                    ? e.forEach(function (t, e) {
                        o.value[e] = t;
                      })
                    : du(r) || (o.value[r] = e);
                },
                buildLoopScope: function e(r, n, i) {
                  var u,
                    a,
                    c,
                    s = null !== (u = t.scope.__loopRefOffset) && void 0 !== u ? u : 0,
                    f = vh(o.value, 2),
                    l = f[0],
                    h = f[1];
                  return (
                    Sh((a = {}), l, r),
                    Sh(a, h, n),
                    Sh(a, '__loopScope', !0),
                    Sh(a, '__loopRefIndex', s + n),
                    Sh(a, '__loopRefOffset', i * n),
                    a
                  );
                },
              }
            );
          },
          buildProps: m,
          buildSlots: O,
          buildSchema: d,
        };
      }
      function Nh(t) {
        var e,
          r = Ih(t).scope,
          n = Object(a.reactive)({
            comp: null,
            scope: r,
            schema: Object(a.computed)(function () {
              return t.__schema;
            }),
          }),
          o = Tc(),
          i = Object(a.computed)(function () {
            return t.__designMode;
          }),
          u = Object(a.computed)(function () {
            return t.__components;
          });
        return (
          Object(a.provide)(
            o,
            Object(a.reactive)({
              designMode: i,
              components: u,
              getNode: function e(r) {
                var n, o;
                return null !==
                  (n = null === (o = t.__getNode) || void 0 === o ? void 0 : o.call(t, r)) &&
                  void 0 !== n
                  ? n
                  : null;
              },
              triggerCompGetCtx: Object(a.computed)(function () {
                return t.__triggerCompGetCtx;
              }),
            }),
          ),
          Oh({ scope: r, designModeRef: i, componentsRef: u }, Ch(n))
        );
      }
      function Ih(t) {
        var e,
          r,
          n,
          o,
          i = t.__schema,
          u = t.__scope,
          c = null != i ? i : {},
          s = c.props,
          f = c.state,
          l = c.methods,
          h = c.lifeCycles,
          p = Object(a.getCurrentInstance)(),
          d = p.proxy,
          v = (p.data = Object(a.reactive)({})),
          y = null !== (e = il(s)) && void 0 !== e ? e : {};
        Object.assign(p.props, y);
        var b = null !== (r = il(f)) && void 0 !== r ? r : {};
        Object.assign(v, b);
        var m = null !== (n = il(l, d)) && void 0 !== n ? n : {};
        Object.assign(d, m);
        var g = il(h, d);
        zf(g) &&
          Object.keys(g).forEach(function (t) {
            if (Ah(t)) {
              var e = g[t],
                r = Th[t];
              N(e) && r(e, p);
            }
          });
        var _ = null;
        if ((i.id && (_ = document.querySelector('style[data-id="'.concat(i.id, '"]'))), i.css)) {
          var E;
          if (!_)
            (_ = document.createElement('style')),
              i.id && _.setAttribute('data-id', i.id),
              (document.head || document.getElementsByTagName('head')[0]).appendChild(_);
          _.innerHTML !== i.css && (_.innerHTML = i.css);
        } else if (_) {
          var O;
          null === (O = _.parentElement) || void 0 === O || O.removeChild(_);
        }
        var S = function t(e) {
            Object.keys(e).forEach(function (t) {
              var r = e[t],
                n = Object(a.isRef)(r) ? v : d;
              Reflect.set(n, t, r);
            });
          },
          w,
          j;
        u && S(u),
          S({
            i18n: function e(r, n) {
              var o, i;
              return Jf(r, n, t.__locale, t.__messages);
            },
            currentLocale: Object(a.computed)(function () {
              return t.__locale;
            }),
          });
        var P = dh(
            null !== (o = i.dataSource) && void 0 !== o ? o : { list: [], dataHandler: void 0 },
            d,
          ),
          T = P.dataSource,
          A = P.dataSourceMap,
          L = P.reloadDataSource;
        return (
          S({ dataSource: T, dataSourceMap: A, reloadDataSource: L }),
          L(),
          { scope: d, addToScope: S }
        );
      }
      function Rh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Dh(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Rh(Object(r), !0).forEach(function (e) {
                Mh(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Rh(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function Mh(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Uh = Object(a.defineComponent)(function (t, e) {
          var r = e.slots;
          return function () {
            return Object(a.h)('div', Dh({ class: 'lc-page' }, t), r);
          };
        }),
        kh,
        Gh = {
          PageRenderer: Object(a.defineComponent)({
            props: n,
            __renderer__: !0,
            setup: function t(e) {
              var r = Nh(e),
                n = r.renderComp,
                o = r.componentsRef;
              return function () {
                var t = e.__schema,
                  r = o.value;
                return n(t, null, r.Page || Uh);
              };
            },
          }),
        };
      function Fh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Jh(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Fh(Object(r), !0).forEach(function (e) {
                Xh(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Fh(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function Vh(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function zh(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function $h(t, e, r) {
        return (
          e && zh(t.prototype, e),
          r && zh(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }
      function Xh(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Kh,
        Yh = new ((function () {
          function t() {
            Vh(this, t), Xh(this, 'renderers', Jh({}, Gh)), Xh(this, 'configProvider', null);
          }
          return (
            $h(t, [
              {
                key: 'setConfigProvider',
                value: function t(e) {
                  this.configProvider = e;
                },
              },
              {
                key: 'getConfigProvider',
                value: function t() {
                  return this.configProvider;
                },
              },
              {
                key: 'setRenderers',
                value: function t(e) {
                  this.renderers = e;
                },
              },
              {
                key: 'getRenderers',
                value: function t() {
                  return this.renderers;
                },
              },
            ]),
            t
          );
        })())();
      function Zh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Wh(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Zh(Object(r), !0).forEach(function (e) {
                qh(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Zh(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function qh(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Qh = Object(a.defineComponent)({
        props: {
          scope: { type: Object, default: void 0 },
          schema: { type: Object, required: !0 },
          components: { type: Object, required: !0 },
          designMode: { type: String, default: 'live' },
          device: { type: String, default: void 0 },
          locale: { type: String, default: void 0 },
          messages: {
            type: Object,
            default: function t() {
              return {};
            },
          },
          getNode: { type: Function, default: void 0 },
          onCompGetCtx: { type: Function, default: void 0 },
        },
        setup: function t(e) {
          var r = function t(r, n) {
              var o;
              n && (null === (o = e.onCompGetCtx) || void 0 === o || o.call(e, r, n));
            },
            n = function t(r) {
              var n, o;
              return null !==
                (n = null === (o = e.getNode) || void 0 === o ? void 0 : o.call(e, r)) &&
                void 0 !== n
                ? n
                : null;
            },
            o = Object(a.computed)(function () {
              return Wh(Wh({}, Yh.getRenderers()), e.components);
            }),
            i = function t() {
              var i = o.value,
                u = e.schema,
                c = e.scope,
                s = e.locale,
                f = e.messages,
                l = e.designMode;
              if (!u) return null;
              var h = u.componentName,
                p = i[h] || i[''.concat(h, 'Renderer')];
              return (
                p && !p.__renderer__ && (p = Gh[''.concat(h, 'Renderer')]),
                p
                  ? Object(a.h)(p, {
                      key: u.__ctx
                        ? ''.concat(u.__ctx.lceKey, '_').concat(u.__ctx.idx || '0')
                        : u.id,
                      __scope: c,
                      __schema: u,
                      __locale: s,
                      __messages: f,
                      __components: i,
                      __designMode: l,
                      __getNode: n,
                      __triggerCompGetCtx: r,
                    })
                  : null
              );
            };
          return function () {
            var t = e.device,
              r = e.locale,
              n = Yh.getConfigProvider();
            return n ? Object(a.h)(n, { device: t, locale: r }, { default: i }) : i();
          };
        },
      });
    },
  ]);
});
