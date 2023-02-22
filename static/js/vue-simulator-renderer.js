!(function e(t, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define([], n)
    : 'object' == typeof exports
    ? (exports.LCVueSimulatorRenderer = n())
    : (t.LCVueSimulatorRenderer = n());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function t() {
                return e.default;
              }
            : function t() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = '/'),
      n((n.s = 49))
    );
  })([
    function (e, t) {
      e.exports = window.Vue;
    },
    function (e, t, n) {
      'use strict';
      var r = n(17);
      n.o(r, 'AssetLevel') &&
        n.d(t, 'AssetLevel', function () {
          return r.AssetLevel;
        }),
        n.o(r, 'AssetLevels') &&
          n.d(t, 'AssetLevels', function () {
            return r.AssetLevels;
          }),
        n.o(r, 'AssetType') &&
          n.d(t, 'AssetType', function () {
            return r.AssetType;
          }),
        n.o(r, 'TransformStage') &&
          n.d(t, 'TransformStage', function () {
            return r.TransformStage;
          }),
        n.o(r, 'isDOMText') &&
          n.d(t, 'isDOMText', function () {
            return r.isDOMText;
          }),
        n.o(r, 'isI18nData') &&
          n.d(t, 'isI18nData', function () {
            return r.isI18nData;
          }),
        n.o(r, 'isJSExpression') &&
          n.d(t, 'isJSExpression', function () {
            return r.isJSExpression;
          }),
        n.o(r, 'isJSFunction') &&
          n.d(t, 'isJSFunction', function () {
            return r.isJSFunction;
          }),
        n.o(r, 'isJSSlot') &&
          n.d(t, 'isJSSlot', function () {
            return r.isJSSlot;
          }),
        n.o(r, 'isNodeSchema') &&
          n.d(t, 'isNodeSchema', function () {
            return r.isNodeSchema;
          });
      var o = n(22),
        i = n(23),
        a = n(8);
      n.d(t, 'isI18nData', function () {
        return a.a;
      });
      var u = n(24),
        c = n(25),
        s = n(26),
        l = n(27),
        f = n(28);
      n.d(t, 'isDOMText', function () {
        return f.a;
      }),
        n.d(t, 'isNodeSchema', function () {
          return f.b;
        });
      var h = n(29),
        p = n(30),
        d = n(31),
        v = n(32),
        m = n(33);
      n.d(t, 'isJSExpression', function () {
        return m.a;
      }),
        n.d(t, 'isJSFunction', function () {
          return m.b;
        }),
        n.d(t, 'isJSSlot', function () {
          return m.c;
        });
      var y = n(34),
        b = n(35),
        g = n(36),
        _ = n(37);
      n.d(t, 'TransformStage', function () {
        return _.a;
      });
      var O = n(38),
        E = n(39),
        w = n(40);
      n.d(t, 'AssetLevel', function () {
        return w.a;
      }),
        n.d(t, 'AssetLevels', function () {
          return w.b;
        }),
        n.d(t, 'AssetType', function () {
          return w.c;
        });
      var S = n(43),
        j = n(41);
    },
    function (e, t, n) {
      'use strict';
      var r = n(10),
        o = 'object' == typeof self && self && self.Object === Object && self,
        i = r.a || o || Function('return this')();
      t.a = i;
    },
    function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n.apply(this, arguments)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(52)();
      e.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (e) {
        'object' == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function('r', 'regeneratorRuntime = r')(r);
      }
    },
    function (e, t) {
      function n(e, t, n, r, o, i, a) {
        try {
          var u = e[i](a),
            c = u.value;
        } catch (e) {
          return void n(e);
        }
        u.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function r(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(t, r);
            function u(e) {
              n(a, o, i, u, c, 'next', e);
            }
            function c(e) {
              n(a, o, i, u, c, 'throw', e);
            }
            u(void 0);
          });
        };
      }
      (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        var r = n(2),
          o = n(46),
          i = 'object' == typeof exports && exports && !exports.nodeType && exports,
          a = i && 'object' == typeof e && e && !e.nodeType && e,
          u,
          c = a && a.exports === i ? r.a.Buffer : void 0,
          s,
          l = (c ? c.isBuffer : void 0) || o.a;
        t.a = l;
      }.call(this, n(42)(e)));
    },
    ,
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && 'i18n' === e.type;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        let r, o;
        function i() {
          var t;
          return (
            void 0 !== r ||
              ('undefined' != typeof window && window.performance
                ? ((r = !0), (o = window.performance))
                : void 0 !== e &&
                  (null === (t = e.perf_hooks) || void 0 === t ? void 0 : t.performance)
                ? ((r = !0), (o = e.perf_hooks.performance))
                : (r = !1)),
            r
          );
        }
        function a() {
          return i() ? o.now() : Date.now();
        }
        n.d(t, 'a', function () {
          return a;
        });
      }.call(this, n(12)));
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        var n = 'object' == typeof e && e && e.Object === Object && e;
        t.a = n;
      }.call(this, n(12)));
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        function r() {
          return o().__VUE_DEVTOOLS_GLOBAL_HOOK__;
        }
        function o() {
          return 'undefined' != typeof navigator && 'undefined' != typeof window
            ? window
            : void 0 !== e
            ? e
            : {};
        }
        n.d(t, 'a', function () {
          return r;
        }),
          n.d(t, 'b', function () {
            return o;
          }),
          n.d(t, 'c', function () {
            return i;
          });
        const i = 'function' == typeof Proxy;
      }.call(this, n(12)));
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (e) {
        'object' == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function e(t, n) {
                  return (t.__proto__ = n), t;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t, r)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(50);
    },
    function (e, t) {
      function n(e, t) {
        if (null == e) return {};
        var n = {},
          r = Object.keys(e),
          o,
          i;
        for (i = 0; i < r.length; i++) (o = r[i]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        var r = n(10),
          o = 'object' == typeof exports && exports && !exports.nodeType && exports,
          i = o && 'object' == typeof e && e && !e.nodeType && e,
          a,
          u = i && i.exports === o && r.a.process,
          c = (function () {
            try {
              var e = i && i.require && i.require('util').types;
              return e || (u && u.binding && u.binding('util'));
            } catch (e) {}
          })();
        t.a = c;
      }.call(this, n(42)(e)));
    },
    function (e, t, n) {
      'use strict';
      var r = n(18),
        o = n(19),
        i = n.n(o);
      n.o(o, 'AssetLevel') &&
        n.d(t, 'AssetLevel', function () {
          return o.AssetLevel;
        }),
        n.o(o, 'AssetLevels') &&
          n.d(t, 'AssetLevels', function () {
            return o.AssetLevels;
          }),
        n.o(o, 'AssetType') &&
          n.d(t, 'AssetType', function () {
            return o.AssetType;
          }),
        n.o(o, 'TransformStage') &&
          n.d(t, 'TransformStage', function () {
            return o.TransformStage;
          }),
        n.o(o, 'isDOMText') &&
          n.d(t, 'isDOMText', function () {
            return o.isDOMText;
          }),
        n.o(o, 'isI18nData') &&
          n.d(t, 'isI18nData', function () {
            return o.isI18nData;
          }),
        n.o(o, 'isJSExpression') &&
          n.d(t, 'isJSExpression', function () {
            return o.isJSExpression;
          }),
        n.o(o, 'isJSFunction') &&
          n.d(t, 'isJSFunction', function () {
            return o.isJSFunction;
          }),
        n.o(o, 'isJSSlot') &&
          n.d(t, 'isJSSlot', function () {
            return o.isJSSlot;
          }),
        n.o(o, 'isNodeSchema') &&
          n.d(t, 'isNodeSchema', function () {
            return o.isNodeSchema;
          });
      var a = n(20),
        u = n.n(a);
      n.o(a, 'AssetLevel') &&
        n.d(t, 'AssetLevel', function () {
          return a.AssetLevel;
        }),
        n.o(a, 'AssetLevels') &&
          n.d(t, 'AssetLevels', function () {
            return a.AssetLevels;
          }),
        n.o(a, 'AssetType') &&
          n.d(t, 'AssetType', function () {
            return a.AssetType;
          }),
        n.o(a, 'TransformStage') &&
          n.d(t, 'TransformStage', function () {
            return a.TransformStage;
          }),
        n.o(a, 'isDOMText') &&
          n.d(t, 'isDOMText', function () {
            return a.isDOMText;
          }),
        n.o(a, 'isI18nData') &&
          n.d(t, 'isI18nData', function () {
            return a.isI18nData;
          }),
        n.o(a, 'isJSExpression') &&
          n.d(t, 'isJSExpression', function () {
            return a.isJSExpression;
          }),
        n.o(a, 'isJSFunction') &&
          n.d(t, 'isJSFunction', function () {
            return a.isJSFunction;
          }),
        n.o(a, 'isJSSlot') &&
          n.d(t, 'isJSSlot', function () {
            return a.isJSSlot;
          }),
        n.o(a, 'isNodeSchema') &&
          n.d(t, 'isNodeSchema', function () {
            return a.isNodeSchema;
          });
      var c = n(21),
        s = n.n(c);
      n.o(c, 'AssetLevel') &&
        n.d(t, 'AssetLevel', function () {
          return c.AssetLevel;
        }),
        n.o(c, 'AssetLevels') &&
          n.d(t, 'AssetLevels', function () {
            return c.AssetLevels;
          }),
        n.o(c, 'AssetType') &&
          n.d(t, 'AssetType', function () {
            return c.AssetType;
          }),
        n.o(c, 'TransformStage') &&
          n.d(t, 'TransformStage', function () {
            return c.TransformStage;
          }),
        n.o(c, 'isDOMText') &&
          n.d(t, 'isDOMText', function () {
            return c.isDOMText;
          }),
        n.o(c, 'isI18nData') &&
          n.d(t, 'isI18nData', function () {
            return c.isI18nData;
          }),
        n.o(c, 'isJSExpression') &&
          n.d(t, 'isJSExpression', function () {
            return c.isJSExpression;
          }),
        n.o(c, 'isJSFunction') &&
          n.d(t, 'isJSFunction', function () {
            return c.isJSFunction;
          }),
        n.o(c, 'isJSSlot') &&
          n.d(t, 'isJSSlot', function () {
            return c.isJSSlot;
          }),
        n.o(c, 'isNodeSchema') &&
          n.d(t, 'isNodeSchema', function () {
            return c.isNodeSchema;
          });
    },
    function (e, t, n) {
      'use strict';
      var r;
      !(function (e) {
        (e.Initial = 'init'), (e.Loading = 'loading'), (e.Loaded = 'loaded'), (e.Error = 'error');
      })(r || (r = {}));
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && 'object' == typeof e;
      }
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return 'package' in e;
      }
      function o(e) {
        return !r(e);
      }
    },
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      function r(e) {
        return 'string' == typeof e;
      }
      function o(e) {
        return e && e.componentName;
      }
      function i(e) {
        return e && e.componentsTree;
      }
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return o;
        });
    },
    function (e, t, n) {
      'use strict';
      var r;
      !(function (e) {
        (e.ADDED = 'added'),
          (e.DELETED = 'deleted'),
          (e.MODIFIED = 'modified'),
          (e.COMPOSITE = 'composite');
      })(r || (r = {}));
    },
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      var r = n(8);
      function o(e) {
        if ('object' != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t || null === Object.getPrototypeOf(t);
      }
      function i(e) {
        return o(e) && !Object(r.a)(e);
      }
    },
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && 'JSExpression' === e.type;
      }
      function o(e) {
        return 'object' == typeof e && e && 'JSFunction' === e.type;
      }
      function i(e) {
        return e && 'JSSlot' === e.type;
      }
      function a(e) {
        return e && 'JSBlock' === e.type;
      }
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return o;
        }),
        n.d(t, 'c', function () {
          return i;
        });
    },
    function (e, t, n) {
      'use strict';
      var r = n(14),
        o = n.n(r);
      function i(e) {
        return (
          e && e.prototype && (e.prototype.isReactComponent || e.prototype instanceof r.Component)
        );
      }
      function a(e) {
        return e && (i(e) || 'function' == typeof e);
      }
      function u(e) {
        return e && 'object' == typeof e && 'componentName' in e && !c(e);
      }
      function c(e) {
        return e && (Object(r.isValidElement)(e) || a(e));
      }
      function s(e) {
        return e && 'function' == typeof e && !i(e);
      }
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e.Render = 'render'),
            (e.Serilize = 'serilize'),
            (e.Save = 'save'),
            (e.Clone = 'clone'),
            (e.Init = 'init'),
            (e.Upgrade = 'upgrade');
        })(r || (r = {}));
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return o;
        }),
        n.d(t, 'c', function () {
          return i;
        }),
        (function (e) {
          (e[(e.Environment = 1)] = 'Environment'),
            (e[(e.Library = 2)] = 'Library'),
            (e[(e.Theme = 3)] = 'Theme'),
            (e[(e.Runtime = 4)] = 'Runtime'),
            (e[(e.Components = 5)] = 'Components'),
            (e[(e.App = 6)] = 'App');
        })(r || (r = {}));
      var o = [r.Environment, r.Library, r.Theme, r.Runtime, r.Components, r.App],
        i;
      !(function (e) {
        (e.JSUrl = 'jsUrl'),
          (e.CSSUrl = 'cssUrl'),
          (e.CSSText = 'cssText'),
          (e.JSText = 'jsText'),
          (e.Bundle = 'bundle');
      })(i || (i = {}));
    },
    function (e, t, n) {},
    function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    function (e, t, n) {
      'use strict';
      var r = 'node.prop.change',
        o = 'node.innerProp.change',
        i = 'node.edit.rerender.time';
    },
    function (e, t, n) {
      var r = n(13);
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(54),
        o = n(13),
        i = n(55),
        a = n(56);
      function u(t) {
        var n = 'function' == typeof Map ? new Map() : void 0;
        return (
          (e.exports = u =
            function e(t) {
              if (null === t || !i(t)) return t;
              if ('function' != typeof t)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, u);
              }
              function u() {
                return a(t, arguments, r(this).constructor);
              }
              return (
                (u.prototype = Object.create(t.prototype, {
                  constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
                })),
                o(u, t)
              );
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          u(t)
        );
      }
      (e.exports = u), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      'use strict';
      function r() {
        return !1;
      }
      t.a = r;
    },
    ,
    ,
    function (e, t, n) {
      e.exports = n(59);
    },
    function (e, t, n) {
      'use strict';
      /** @license React v16.14.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(51),
        o = 'function' == typeof Symbol && Symbol.for,
        i = o ? Symbol.for('react.element') : 60103,
        a = o ? Symbol.for('react.portal') : 60106,
        u = o ? Symbol.for('react.fragment') : 60107,
        c = o ? Symbol.for('react.strict_mode') : 60108,
        s = o ? Symbol.for('react.profiler') : 60114,
        l = o ? Symbol.for('react.provider') : 60109,
        f = o ? Symbol.for('react.context') : 60110,
        h = o ? Symbol.for('react.forward_ref') : 60112,
        p = o ? Symbol.for('react.suspense') : 60113,
        d = o ? Symbol.for('react.memo') : 60115,
        v = o ? Symbol.for('react.lazy') : 60116,
        m = 'function' == typeof Symbol && Symbol.iterator;
      function y(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
          n < arguments.length;
          n++
        )
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var b = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = {};
      function _(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || b);
      }
      function O() {}
      function E(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || b);
      }
      (_.prototype.isReactComponent = {}),
        (_.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e) throw Error(y(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (_.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (O.prototype = _.prototype);
      var w = (E.prototype = new O());
      (w.constructor = E), r(w, _.prototype), (w.isPureReactComponent = !0);
      var S = { current: null },
        j = Object.prototype.hasOwnProperty,
        A = { key: !0, ref: !0, __self: !0, __source: !0 };
      function x(e, t, n) {
        var r,
          o = {},
          a = null,
          u = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            j.call(t, r) && !A.hasOwnProperty(r) && (o[r] = t[r]);
        var c = arguments.length - 2;
        if (1 === c) o.children = n;
        else if (1 < c) {
          for (var s = Array(c), l = 0; l < c; l++) s[l] = arguments[l + 2];
          o.children = s;
        }
        if (e && e.defaultProps) for (r in (c = e.defaultProps)) void 0 === o[r] && (o[r] = c[r]);
        return { $$typeof: i, type: e, key: a, ref: u, props: o, _owner: S.current };
      }
      function T(e, t) {
        return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
      }
      function P(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === i;
      }
      function L(e) {
        var t = { '=': '=0', ':': '=2' };
        return (
          '$' +
          ('' + e).replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      }
      var C = /\/+/g,
        R = [];
      function I(e, t, n, r) {
        if (R.length) {
          var o = R.pop();
          return (o.result = e), (o.keyPrefix = t), (o.func = n), (o.context = r), (o.count = 0), o;
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function N(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > R.length && R.push(e);
      }
      function B(e, t, n, r) {
        var o = typeof e;
        ('undefined' !== o && 'boolean' !== o) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (o) {
            case 'string':
            case 'number':
              u = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case i:
                case a:
                  u = !0;
              }
          }
        if (u) return n(r, e, '' === t ? '.' + k(e, 0) : t), 1;
        if (((u = 0), (t = '' === t ? '.' : t + ':'), Array.isArray(e)))
          for (var c = 0; c < e.length; c++) {
            var s = t + k((o = e[c]), c);
            u += B(o, s, n, r);
          }
        else if (
          (null === e || 'object' != typeof e
            ? (s = null)
            : (s = 'function' == typeof (s = (m && e[m]) || e['@@iterator']) ? s : null),
          'function' == typeof s)
        )
          for (e = s.call(e), c = 0; !(o = e.next()).done; )
            u += B((o = o.value), (s = t + k(o, c++)), n, r);
        else if ('object' === o)
          throw (
            ((n = '' + e),
            Error(
              y(
                31,
                '[object Object]' === n
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : n,
                '',
              ),
            ))
          );
        return u;
      }
      function H(e, t, n) {
        return null == e ? 0 : B(e, '', t, n);
      }
      function k(e, t) {
        return 'object' == typeof e && null !== e && null != e.key ? L(e.key) : t.toString(36);
      }
      function M(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function D(e, t, n) {
        var r = e.result,
          o = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? U(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (P(e) &&
                (e = T(
                  e,
                  o +
                    (!e.key || (t && t.key === e.key) ? '' : ('' + e.key).replace(C, '$&/') + '/') +
                    n,
                )),
              r.push(e));
      }
      function U(e, t, n, r, o) {
        var i = '';
        null != n && (i = ('' + n).replace(C, '$&/') + '/'), H(e, D, (t = I(t, i, r, o))), N(t);
      }
      var G = { current: null };
      function F() {
        var e = G.current;
        if (null === e) throw Error(y(321));
        return e;
      }
      var $ = {
        ReactCurrentDispatcher: G,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: S,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: function (e, t, n) {
          if (null == e) return e;
          var r = [];
          return U(e, r, null, t, n), r;
        },
        forEach: function (e, t, n) {
          if (null == e) return e;
          H(e, M, (t = I(null, null, t, n))), N(t);
        },
        count: function (e) {
          return H(
            e,
            function () {
              return null;
            },
            null,
          );
        },
        toArray: function (e) {
          var t = [];
          return (
            U(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (!P(e)) throw Error(y(143));
          return e;
        },
      }),
        (t.Component = _),
        (t.Fragment = u),
        (t.Profiler = s),
        (t.PureComponent = E),
        (t.StrictMode = c),
        (t.Suspense = p),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(y(267, e));
          var o = r({}, e.props),
            a = e.key,
            u = e.ref,
            c = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((u = t.ref), (c = S.current)),
              void 0 !== t.key && (a = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (l in t)
              j.call(t, l) &&
                !A.hasOwnProperty(l) &&
                (o[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) o.children = n;
          else if (1 < l) {
            s = Array(l);
            for (var f = 0; f < l; f++) s[f] = arguments[f + 2];
            o.children = s;
          }
          return { $$typeof: i, type: e.type, key: a, ref: u, props: o, _owner: c };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: f,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = x),
        (t.createFactory = function (e) {
          var t = x.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: h, render: e };
        }),
        (t.isValidElement = P),
        (t.lazy = function (e) {
          return { $$typeof: v, _ctor: e, _status: -1, _result: null };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return F().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return F().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return F().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return F().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return F().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return F().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return F().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return F().useRef(e);
        }),
        (t.useState = function (e) {
          return F().useState(e);
        }),
        (t.version = '16.14.0');
    },
    function (e, t, n) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(e);
      }
      function u() {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc'),
            t;
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
          for (var n = {}, r = 0; r < 10; r++) n['_' + String.fromCharCode(r)] = r;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(n)
              .map(function (e) {
                return n[e];
              })
              .join('')
          )
            return !1;
          var o = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              o[e] = e;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
          );
        } catch (e) {
          return !1;
        }
      }
      e.exports = u()
        ? Object.assign
        : function (e, t) {
            for (var n, u = a(e), c, s = 1; s < arguments.length; s++) {
              for (var l in (n = Object(arguments[s]))) o.call(n, l) && (u[l] = n[l]);
              if (r) {
                c = r(n);
                for (var f = 0; f < c.length; f++) i.call(n, c[f]) && (u[c[f]] = n[c[f]]);
              }
            }
            return u;
          };
    },
    function (e, t, n) {
      var r = n(53).default;
      function o() {
        'use strict';
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (e.exports =
          o =
            function e() {
              return t;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
        var t = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          a = 'function' == typeof Symbol ? Symbol : {},
          u = a.iterator || '@@iterator',
          c = a.asyncIterator || '@@asyncIterator',
          s = a.toStringTag || '@@toStringTag';
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (e) {
          l = function e(t, n, r) {
            return (t[n] = r);
          };
        }
        function f(e, t, n, r) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            a = new A(r || []);
          return (
            (i._invoke = (function (e, t, n) {
              var r = 'suspendedStart';
              return function (o, i) {
                if ('executing' === r) throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === o) throw i;
                  return T();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var u = w(a, n);
                    if (u) {
                      if (u === p) continue;
                      return u;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = 'executing';
                  var c = h(e, t, n);
                  if ('normal' === c.type) {
                    if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === p)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  'throw' === c.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
                }
              };
            })(e, n, a)),
            i
          );
        }
        function h(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        t.wrap = f;
        var p = {};
        function d() {}
        function v() {}
        function m() {}
        var y = {};
        l(y, u, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          g = b && b(b(x([])));
        g && g !== n && i.call(g, u) && (y = g);
        var _ = (m.prototype = d.prototype = Object.create(y));
        function O(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, a, u, c) {
            var s = h(e[o], e, a);
            if ('throw' !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && 'object' == r(f) && i.call(f, '__await')
                ? t.resolve(f.__await).then(
                    function (e) {
                      n('next', e, u, c);
                    },
                    function (e) {
                      n('throw', e, u, c);
                    },
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), u(l);
                    },
                    function (e) {
                      return n('throw', e, u, c);
                    },
                  );
            }
            c(s.arg);
          }
          var o;
          this._invoke = function (e, r) {
            function i() {
              return new t(function (t, o) {
                n(e, r, t, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function w(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), w(e, t), 'throw' === t.method)
              )
                return p;
              (t.method = 'throw'),
                (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return p;
          }
          var r = h(n, e.iterator, t.arg);
          if ('throw' === r.type)
            return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), p;
          var o = r.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              p);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(S, this), this.reset(!0);
        }
        function x(e) {
          if (e) {
            var t = e[u];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                r = function t() {
                  for (; ++n < e.length; )
                    if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = m),
          l(_, 'constructor', m),
          l(m, 'constructor', v),
          (v.displayName = l(m, s, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === v || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(E.prototype),
          l(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(f(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          O(_),
          l(_, s, 'Generator'),
          l(_, u, function () {
            return this;
          }),
          l(_, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = x),
          (A.prototype = {
            constructor: A,
            reset: function e(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function e() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function e(t) {
              if (this.done) throw t;
              var n = this;
              function r(e, r) {
                return (
                  (u.type = 'throw'),
                  (u.arg = t),
                  (n.next = e),
                  r && ((n.method = 'next'), (n.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  u = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, 'catchLoc'),
                    s = i.call(a, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s) throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function e(t, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && i.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var u = a ? a.completion : {};
              return (
                (u.type = t),
                (u.arg = n),
                a ? ((this.method = 'next'), (this.next = a.finallyLoc), p) : this.complete(u)
              );
            },
            complete: function e(t, n) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === t.type && n && (this.next = n),
                p
              );
            },
            finish: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p;
              }
            },
            catch: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc === t) {
                  var o = r.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    j(r);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function e(t, n, r) {
              return (
                (this.delegate = { iterator: x(t), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function e(t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t) {
      function n(e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(13),
        o = n(57);
      function i(t, n, a) {
        return (
          o()
            ? ((e.exports = i = Reflect.construct.bind()),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports))
            : ((e.exports = i =
                function e(t, n, o) {
                  var i = [null];
                  i.push.apply(i, n);
                  var a,
                    u = new (Function.bind.apply(t, i))();
                  return o && r(u, o.prototype), u;
                }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports)),
          i.apply(null, arguments)
        );
      }
      (e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t) {
      function n() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'rendererProps', function () {
          return i;
        }),
        n.d(t, 'baseRendererPropKeys', function () {
          return a;
        }),
        n.d(t, 'leafProps', function () {
          return u;
        }),
        n.d(t, 'leafPropKeys', function () {
          return c;
        }),
        n.d(t, 'useRenderer', function () {
          return nh;
        }),
        n.d(t, 'useLeaf', function () {
          return th;
        }),
        n.d(t, 'useRootScope', function () {
          return rh;
        }),
        n.d(t, 'config', function () {
          return ch;
        }),
        n.d(t, 'vueRendererConfig', function () {
          return ch;
        }),
        n.d(t, 'VueRenderer', function () {
          return sh;
        });
      var r = n(1),
        o = n(0),
        i = {
          __scope: { type: Object, default: void 0 },
          __schema: { type: Object, required: !0 },
          __designMode: { type: String, default: 'live' },
          __components: { type: Object, required: !0 },
          __locale: { type: String, default: void 0 },
          __messages: {
            type: Object,
            default: function e() {
              return {};
            },
          },
          __getNode: { type: Function, required: !0 },
          __triggerCompGetCtx: { type: Function, required: !0 },
        },
        a = Object.keys(i),
        u = {
          comp: { type: Object, default: void 0 },
          scope: {
            type: Object,
            default: function e() {
              return {};
            },
          },
          schema: {
            type: Object,
            default: function e() {
              return {};
            },
          },
        },
        c = Object.keys(i),
        s = n(3),
        l = n.n(s),
        f = n(2),
        h,
        p = f.a.Symbol,
        d = Object.prototype,
        v = d.hasOwnProperty,
        m = d.toString,
        y = p ? p.toStringTag : void 0;
      function b(e) {
        var t = v.call(e, y),
          n = e[y];
        try {
          e[y] = void 0;
          var r = !0;
        } catch (e) {}
        var o = m.call(e);
        return r && (t ? (e[y] = n) : delete e[y]), o;
      }
      var g = b,
        _,
        O = Object.prototype.toString;
      function E(e) {
        return O.call(e);
      }
      var w = E,
        S = '[object Null]',
        j = '[object Undefined]',
        A = p ? p.toStringTag : void 0;
      function x(e) {
        return null == e ? (void 0 === e ? j : S) : A && A in Object(e) ? g(e) : w(e);
      }
      var T = x;
      function P(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      }
      var L = P,
        C = '[object AsyncFunction]',
        R = '[object Function]',
        I = '[object GeneratorFunction]',
        N = '[object Proxy]';
      function B(e) {
        if (!L(e)) return !1;
        var t = T(e);
        return t == R || t == I || t == C || t == N;
      }
      var H = B,
        k,
        M = Array.isArray;
      function D(e) {
        return null != e && 'object' == typeof e;
      }
      var U = D,
        G = '[object String]';
      function F(e) {
        return 'string' == typeof e || (!M(e) && U(e) && T(e) == G);
      }
      var $ = F;
      function V(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
          o[n] = t(e[n], n, e);
        return o;
      }
      var J = V;
      function z() {
        (this.__data__ = []), (this.size = 0);
      }
      var q = z;
      function K(e, t) {
        return e === t || (e != e && t != t);
      }
      var X = K;
      function W(e, t) {
        for (var n = e.length; n--; ) if (X(e[n][0], t)) return n;
        return -1;
      }
      var Y = W,
        Z,
        Q = Array.prototype.splice;
      function ee(e) {
        var t = this.__data__,
          n = Y(t, e),
          r;
        return !(n < 0) && (n == t.length - 1 ? t.pop() : Q.call(t, n, 1), --this.size, !0);
      }
      var te = ee;
      function ne(e) {
        var t = this.__data__,
          n = Y(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      var re = ne;
      function oe(e) {
        return Y(this.__data__, e) > -1;
      }
      var ie = oe;
      function ae(e, t) {
        var n = this.__data__,
          r = Y(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      }
      var ue = ae;
      function ce(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (ce.prototype.clear = q),
        (ce.prototype.delete = te),
        (ce.prototype.get = re),
        (ce.prototype.has = ie),
        (ce.prototype.set = ue);
      var se = ce;
      function le() {
        (this.__data__ = new se()), (this.size = 0);
      }
      var fe = le;
      function he(e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      }
      var pe = he;
      function de(e) {
        return this.__data__.get(e);
      }
      var ve = de;
      function me(e) {
        return this.__data__.has(e);
      }
      var ye = me,
        be,
        ge = f.a['__core-js_shared__'],
        _e = (Oe = /[^.]+$/.exec((ge && ge.keys && ge.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + Oe
          : '',
        Oe;
      function Ee(e) {
        return !!_e && _e in e;
      }
      var we = Ee,
        Se,
        je = Function.prototype.toString;
      function Ae(e) {
        if (null != e) {
          try {
            return je.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      }
      var xe = Ae,
        Te = /[\\^$.*+?()[\]{}|]/g,
        Pe = /^\[object .+?Constructor\]$/,
        Le = Function.prototype,
        Ce = Object.prototype,
        Re = Le.toString,
        Ie = Ce.hasOwnProperty,
        Ne = RegExp(
          '^' +
            Re.call(Ie)
              .replace(Te, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        );
      function Be(e) {
        return !(!L(e) || we(e)) && (H(e) ? Ne : Pe).test(xe(e));
        var t;
      }
      var He = Be;
      function ke(e, t) {
        return null == e ? void 0 : e[t];
      }
      var Me = ke;
      function De(e, t) {
        var n = Me(e, t);
        return He(n) ? n : void 0;
      }
      var Ue = De,
        Ge,
        Fe = Ue(f.a, 'Map'),
        $e,
        Ve = Ue(Object, 'create');
      function Je() {
        (this.__data__ = Ve ? Ve(null) : {}), (this.size = 0);
      }
      var ze = Je;
      function qe(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      var Ke = qe,
        Xe = '__lodash_hash_undefined__',
        We,
        Ye = Object.prototype.hasOwnProperty;
      function Ze(e) {
        var t = this.__data__;
        if (Ve) {
          var n = t[e];
          return n === Xe ? void 0 : n;
        }
        return Ye.call(t, e) ? t[e] : void 0;
      }
      var Qe = Ze,
        et,
        tt = Object.prototype.hasOwnProperty;
      function nt(e) {
        var t = this.__data__;
        return Ve ? void 0 !== t[e] : tt.call(t, e);
      }
      var rt = nt,
        ot = '__lodash_hash_undefined__';
      function it(e, t) {
        var n = this.__data__;
        return (this.size += this.has(e) ? 0 : 1), (n[e] = Ve && void 0 === t ? ot : t), this;
      }
      var at = it;
      function ut(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (ut.prototype.clear = ze),
        (ut.prototype.delete = Ke),
        (ut.prototype.get = Qe),
        (ut.prototype.has = rt),
        (ut.prototype.set = at);
      var ct = ut;
      function st() {
        (this.size = 0),
          (this.__data__ = { hash: new ct(), map: new (Fe || se)(), string: new ct() });
      }
      var lt = st;
      function ft(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e;
      }
      var ht = ft;
      function pt(e, t) {
        var n = e.__data__;
        return ht(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
      }
      var dt = pt;
      function vt(e) {
        var t = dt(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      }
      var mt = vt;
      function yt(e) {
        return dt(this, e).get(e);
      }
      var bt = yt;
      function gt(e) {
        return dt(this, e).has(e);
      }
      var _t = gt;
      function Ot(e, t) {
        var n = dt(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      }
      var Et = Ot;
      function wt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (wt.prototype.clear = lt),
        (wt.prototype.delete = mt),
        (wt.prototype.get = bt),
        (wt.prototype.has = _t),
        (wt.prototype.set = Et);
      var St = wt,
        jt = 200;
      function At(e, t) {
        var n = this.__data__;
        if (n instanceof se) {
          var r = n.__data__;
          if (!Fe || r.length < 199) return r.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new St(r);
        }
        return n.set(e, t), (this.size = n.size), this;
      }
      var xt = At;
      function Tt(e) {
        var t = (this.__data__ = new se(e));
        this.size = t.size;
      }
      (Tt.prototype.clear = fe),
        (Tt.prototype.delete = pe),
        (Tt.prototype.get = ve),
        (Tt.prototype.has = ye),
        (Tt.prototype.set = xt);
      var Pt = Tt,
        Lt = '__lodash_hash_undefined__';
      function Ct(e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this;
      }
      var Rt = Ct;
      function It(e) {
        return this.__data__.has(e);
      }
      var Nt = It;
      function Bt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new St(); ++t < n; ) this.add(e[t]);
      }
      (Bt.prototype.add = Bt.prototype.push = Rt), (Bt.prototype.has = Nt);
      var Ht = Bt;
      function kt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
        return !1;
      }
      var Mt = kt;
      function Dt(e, t) {
        return e.has(t);
      }
      var Ut = Dt,
        Gt = 1,
        Ft = 2;
      function $t(e, t, n, r, o, i) {
        var a = 1 & n,
          u = e.length,
          c = t.length;
        if (u != c && !(a && c > u)) return !1;
        var s = i.get(e),
          l = i.get(t);
        if (s && l) return s == t && l == e;
        var f = -1,
          h = !0,
          p = 2 & n ? new Ht() : void 0;
        for (i.set(e, t), i.set(t, e); ++f < u; ) {
          var d = e[f],
            v = t[f];
          if (r) var m = a ? r(v, d, f, t, e, i) : r(d, v, f, e, t, i);
          if (void 0 !== m) {
            if (m) continue;
            h = !1;
            break;
          }
          if (p) {
            if (
              !Mt(t, function (e, t) {
                if (!Ut(p, t) && (d === e || o(d, e, n, r, i))) return p.push(t);
              })
            ) {
              h = !1;
              break;
            }
          } else if (d !== v && !o(d, v, n, r, i)) {
            h = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), h;
      }
      var Vt = $t,
        Jt,
        zt = f.a.Uint8Array;
      function qt(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      var Kt = qt;
      function Xt(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      var Wt = Xt,
        Yt = 1,
        Zt = 2,
        Qt = '[object Boolean]',
        en = '[object Date]',
        tn = '[object Error]',
        nn = '[object Map]',
        rn = '[object Number]',
        on = '[object RegExp]',
        an = '[object Set]',
        un = '[object String]',
        cn = '[object Symbol]',
        sn = '[object ArrayBuffer]',
        ln = '[object DataView]',
        fn = p ? p.prototype : void 0,
        hn = fn ? fn.valueOf : void 0;
      function pn(e, t, n, r, o, i, a) {
        switch (n) {
          case ln:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            (e = e.buffer), (t = t.buffer);
          case sn:
            return !(e.byteLength != t.byteLength || !i(new zt(e), new zt(t)));
          case Qt:
          case en:
          case rn:
            return X(+e, +t);
          case tn:
            return e.name == t.name && e.message == t.message;
          case on:
          case '[object String]':
            return e == t + '';
          case nn:
            var u = Kt;
          case an:
            var c = 1 & r;
            if ((u || (u = Wt), e.size != t.size && !c)) return !1;
            var s = a.get(e);
            if (s) return s == t;
            (r |= 2), a.set(e, t);
            var l = Vt(u(e), u(t), r, o, i, a);
            return a.delete(e), l;
          case cn:
            if (hn) return hn.call(e) == hn.call(t);
        }
        return !1;
      }
      var dn = pn;
      function vn(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
        return e;
      }
      var mn = vn;
      function yn(e, t, n) {
        var r = t(e);
        return M(e) ? r : mn(r, n(e));
      }
      var bn = yn;
      function gn(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r; ) {
          var a = e[n];
          t(a, n, e) && (i[o++] = a);
        }
        return i;
      }
      var _n = gn;
      function On() {
        return [];
      }
      var En = On,
        wn,
        Sn = Object.prototype.propertyIsEnumerable,
        jn = Object.getOwnPropertySymbols,
        An,
        xn = jn
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  _n(jn(e), function (t) {
                    return Sn.call(e, t);
                  }));
            }
          : En;
      function Tn(e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      }
      var Pn = Tn,
        Ln = '[object Arguments]';
      function Cn(e) {
        return U(e) && T(e) == Ln;
      }
      var Rn = Cn,
        In = Object.prototype,
        Nn = In.hasOwnProperty,
        Bn = In.propertyIsEnumerable,
        Hn,
        kn = Rn(
          (function () {
            return arguments;
          })(),
        )
          ? Rn
          : function (e) {
              return U(e) && Nn.call(e, 'callee') && !Bn.call(e, 'callee');
            },
        Mn = n(6),
        Dn = 9007199254740991,
        Un = /^(?:0|[1-9]\d*)$/;
      function Gn(e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ('number' == n || ('symbol' != n && Un.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      var Fn = Gn,
        $n = 9007199254740991;
      function Vn(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      }
      var Jn = Vn,
        zn = '[object Arguments]',
        qn = '[object Array]',
        Kn = '[object Boolean]',
        Xn = '[object Date]',
        Wn = '[object Error]',
        Yn = '[object Function]',
        Zn = '[object Map]',
        Qn = '[object Number]',
        er = '[object Object]',
        tr = '[object RegExp]',
        nr = '[object Set]',
        rr = '[object String]',
        or = '[object WeakMap]',
        ir = '[object ArrayBuffer]',
        ar = '[object DataView]',
        ur,
        cr = '[object Float64Array]',
        sr = '[object Int8Array]',
        lr = '[object Int16Array]',
        fr = '[object Int32Array]',
        hr = '[object Uint8Array]',
        pr = '[object Uint8ClampedArray]',
        dr = '[object Uint16Array]',
        vr = '[object Uint32Array]',
        mr = {};
      function yr(e) {
        return U(e) && Jn(e.length) && !!mr[T(e)];
      }
      (mr['[object Float32Array]'] =
        mr[cr] =
        mr[sr] =
        mr[lr] =
        mr[fr] =
        mr[hr] =
        mr[pr] =
        mr[dr] =
        mr[vr] =
          !0),
        (mr['[object Arguments]'] =
          mr[qn] =
          mr['[object ArrayBuffer]'] =
          mr['[object Boolean]'] =
          mr['[object DataView]'] =
          mr['[object Date]'] =
          mr['[object Error]'] =
          mr['[object Function]'] =
          mr['[object Map]'] =
          mr['[object Number]'] =
          mr[er] =
          mr['[object RegExp]'] =
          mr['[object Set]'] =
          mr['[object String]'] =
          mr[or] =
            !1);
      var br = yr;
      function gr(e) {
        return function (t) {
          return e(t);
        };
      }
      var _r = gr,
        Or = n(16),
        Er = Or.a && Or.a.isTypedArray,
        wr,
        Sr = Er ? _r(Er) : br,
        jr,
        Ar = Object.prototype.hasOwnProperty;
      function xr(e, t) {
        var n = M(e),
          r = !n && kn(e),
          o = !n && !r && Object(Mn.a)(e),
          i = !n && !r && !o && Sr(e),
          a = n || r || o || i,
          u = a ? Pn(e.length, String) : [],
          c = u.length;
        for (var s in e)
          (!t && !Ar.call(e, s)) ||
            (a &&
              ('length' == s ||
                (o && ('offset' == s || 'parent' == s)) ||
                (i && ('buffer' == s || 'byteLength' == s || 'byteOffset' == s)) ||
                Fn(s, c))) ||
            u.push(s);
        return u;
      }
      var Tr = xr,
        Pr = Object.prototype;
      function Lr(e) {
        var t = e && e.constructor,
          n;
        return e === (('function' == typeof t && t.prototype) || Pr);
      }
      var Cr = Lr;
      function Rr(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      var Ir = Rr,
        Nr,
        Br = Ir(Object.keys, Object),
        Hr,
        kr = Object.prototype.hasOwnProperty;
      function Mr(e) {
        if (!Cr(e)) return Br(e);
        var t = [];
        for (var n in Object(e)) kr.call(e, n) && 'constructor' != n && t.push(n);
        return t;
      }
      var Dr = Mr;
      function Ur(e) {
        return null != e && Jn(e.length) && !H(e);
      }
      var Gr = Ur;
      function Fr(e) {
        return Gr(e) ? Tr(e) : Dr(e);
      }
      var $r = Fr;
      function Vr(e) {
        return bn(e, $r, xn);
      }
      var Jr = Vr,
        zr = 1,
        qr,
        Kr = Object.prototype.hasOwnProperty;
      function Xr(e, t, n, r, o, i) {
        var a = 1 & n,
          u = Jr(e),
          c = u.length,
          s,
          l;
        if (c != Jr(t).length && !a) return !1;
        for (var f = c; f--; ) {
          var h = u[f];
          if (!(a ? h in t : Kr.call(t, h))) return !1;
        }
        var p = i.get(e),
          d = i.get(t);
        if (p && d) return p == t && d == e;
        var v = !0;
        i.set(e, t), i.set(t, e);
        for (var m = a; ++f < c; ) {
          var y = e[(h = u[f])],
            b = t[h];
          if (r) var g = a ? r(b, y, h, t, e, i) : r(y, b, h, e, t, i);
          if (!(void 0 === g ? y === b || o(y, b, n, r, i) : g)) {
            v = !1;
            break;
          }
          m || (m = 'constructor' == h);
        }
        if (v && !m) {
          var _ = e.constructor,
            O = t.constructor;
          _ == O ||
            !('constructor' in e) ||
            !('constructor' in t) ||
            ('function' == typeof _ &&
              _ instanceof _ &&
              'function' == typeof O &&
              O instanceof O) ||
            (v = !1);
        }
        return i.delete(e), i.delete(t), v;
      }
      var Wr = Xr,
        Yr,
        Zr = Ue(f.a, 'DataView'),
        Qr,
        eo = Ue(f.a, 'Promise'),
        to,
        no = Ue(f.a, 'Set'),
        ro,
        oo = Ue(f.a, 'WeakMap'),
        io = '[object Map]',
        ao = '[object Object]',
        uo = '[object Promise]',
        co = '[object Set]',
        so = '[object WeakMap]',
        lo = '[object DataView]',
        fo = xe(Zr),
        ho = xe(Fe),
        po = xe(eo),
        vo = xe(no),
        mo = xe(oo),
        yo = T;
      ((Zr && '[object DataView]' != yo(new Zr(new ArrayBuffer(1)))) ||
        (Fe && '[object Map]' != yo(new Fe())) ||
        (eo && yo(eo.resolve()) != uo) ||
        (no && '[object Set]' != yo(new no())) ||
        (oo && '[object WeakMap]' != yo(new oo()))) &&
        (yo = function (e) {
          var t = T(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? xe(n) : '';
          if (r)
            switch (r) {
              case fo:
                return '[object DataView]';
              case ho:
                return '[object Map]';
              case po:
                return uo;
              case vo:
                return '[object Set]';
              case mo:
                return '[object WeakMap]';
            }
          return t;
        });
      var bo = yo,
        go = 1,
        _o = '[object Arguments]',
        Oo = '[object Array]',
        Eo = '[object Object]',
        wo,
        So = Object.prototype.hasOwnProperty;
      function jo(e, t, n, r, o, i) {
        var a = M(e),
          u = M(t),
          c = a ? '[object Array]' : bo(e),
          s = u ? '[object Array]' : bo(t),
          l = '[object Object]' == (c = '[object Arguments]' == c ? '[object Object]' : c),
          f = '[object Object]' == (s = '[object Arguments]' == s ? '[object Object]' : s),
          h = c == s;
        if (h && Object(Mn.a)(e)) {
          if (!Object(Mn.a)(t)) return !1;
          (a = !0), (l = !1);
        }
        if (h && !l)
          return i || (i = new Pt()), a || Sr(e) ? Vt(e, t, n, r, o, i) : dn(e, t, c, n, r, o, i);
        if (!(1 & n)) {
          var p = l && So.call(e, '__wrapped__'),
            d = f && So.call(t, '__wrapped__');
          if (p || d) {
            var v = p ? e.value() : e,
              m = d ? t.value() : t;
            return i || (i = new Pt()), o(v, m, n, r, i);
          }
        }
        return !!h && (i || (i = new Pt()), Wr(e, t, n, r, o, i));
      }
      var Ao = jo;
      function xo(e, t, n, r, o) {
        return (
          e === t ||
          (null == e || null == t || (!U(e) && !U(t)) ? e != e && t != t : Ao(e, t, n, r, xo, o))
        );
      }
      var To = xo,
        Po = 1,
        Lo = 2;
      function Co(e, t, n, r) {
        var o = n.length,
          i = o,
          a = !r;
        if (null == e) return !i;
        for (e = Object(e); o--; ) {
          var u = n[o];
          if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++o < i; ) {
          var c = (u = n[o])[0],
            s = e[c],
            l = u[1];
          if (a && u[2]) {
            if (void 0 === s && !(c in e)) return !1;
          } else {
            var f = new Pt();
            if (r) var h = r(s, l, c, e, t, f);
            if (!(void 0 === h ? To(l, s, 3, r, f) : h)) return !1;
          }
        }
        return !0;
      }
      var Ro = Co;
      function Io(e) {
        return e == e && !L(e);
      }
      var No = Io;
      function Bo(e) {
        for (var t = $r(e), n = t.length; n--; ) {
          var r = t[n],
            o = e[r];
          t[n] = [r, o, No(o)];
        }
        return t;
      }
      var Ho = Bo;
      function ko(e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      }
      var Mo = ko;
      function Do(e) {
        var t = Ho(e);
        return 1 == t.length && t[0][2]
          ? Mo(t[0][0], t[0][1])
          : function (n) {
              return n === e || Ro(n, e, t);
            };
      }
      var Uo = Do,
        Go = '[object Symbol]';
      function Fo(e) {
        return 'symbol' == typeof e || (U(e) && '[object Symbol]' == T(e));
      }
      var $o = Fo,
        Vo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Jo = /^\w*$/;
      function zo(e, t) {
        if (M(e)) return !1;
        var n = typeof e;
        return (
          !('number' != n && 'symbol' != n && 'boolean' != n && null != e && !$o(e)) ||
          Jo.test(e) ||
          !Vo.test(e) ||
          (null != t && e in Object(t))
        );
      }
      var qo = zo,
        Ko = 'Expected a function';
      function Xo(e, t) {
        if ('function' != typeof e || (null != t && 'function' != typeof t))
          throw new TypeError(Ko);
        var n = function () {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var a = e.apply(this, r);
          return (n.cache = i.set(o, a) || i), a;
        };
        return (n.cache = new (Xo.Cache || St)()), n;
      }
      Xo.Cache = St;
      var Wo = Xo,
        Yo = 500;
      function Zo(e) {
        var t = Wo(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      }
      var Qo,
        ei =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ti = /\\(\\)?/g,
        ni,
        ri = Zo(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(''),
            e.replace(ei, function (e, n, r, o) {
              t.push(r ? o.replace(ti, '$1') : n || e);
            }),
            t
          );
        }),
        oi = 1 / 0,
        ii = p ? p.prototype : void 0,
        ai = ii ? ii.toString : void 0;
      function ui(e) {
        if ('string' == typeof e) return e;
        if (M(e)) return J(e, ui) + '';
        if ($o(e)) return ai ? ai.call(e) : '';
        var t = e + '';
        return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
      }
      var ci = ui;
      function si(e) {
        return null == e ? '' : ci(e);
      }
      var li = si;
      function fi(e, t) {
        return M(e) ? e : qo(e, t) ? [e] : ri(li(e));
      }
      var hi = fi,
        pi = 1 / 0;
      function di(e) {
        if ('string' == typeof e || $o(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
      }
      var vi = di;
      function mi(e, t) {
        for (var n = 0, r = (t = hi(t, e)).length; null != e && n < r; ) e = e[vi(t[n++])];
        return n && n == r ? e : void 0;
      }
      var yi = mi;
      function bi(e, t, n) {
        var r = null == e ? void 0 : yi(e, t);
        return void 0 === r ? n : r;
      }
      var gi = bi;
      function _i(e, t) {
        return null != e && t in Object(e);
      }
      var Oi = _i;
      function Ei(e, t, n) {
        for (var r = -1, o = (t = hi(t, e)).length, i = !1; ++r < o; ) {
          var a = vi(t[r]);
          if (!(i = null != e && n(e, a))) break;
          e = e[a];
        }
        return i || ++r != o
          ? i
          : !!(o = null == e ? 0 : e.length) && Jn(o) && Fn(a, o) && (M(e) || kn(e));
      }
      var wi = Ei;
      function Si(e, t) {
        return null != e && wi(e, t, Oi);
      }
      var ji = Si,
        Ai = 1,
        xi = 2;
      function Ti(e, t) {
        return qo(e) && No(t)
          ? Mo(vi(e), t)
          : function (n) {
              var r = gi(n, e);
              return void 0 === r && r === t ? ji(n, e) : To(t, r, 3);
            };
      }
      var Pi = Ti;
      function Li(e) {
        return e;
      }
      var Ci = Li;
      function Ri(e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      }
      var Ii = Ri;
      function Ni(e) {
        return function (t) {
          return yi(t, e);
        };
      }
      var Bi = Ni;
      function Hi(e) {
        return qo(e) ? Ii(vi(e)) : Bi(e);
      }
      var ki = Hi;
      function Mi(e) {
        return 'function' == typeof e
          ? e
          : null == e
          ? Ci
          : 'object' == typeof e
          ? M(e)
            ? Pi(e[0], e[1])
            : Uo(e)
          : ki(e);
      }
      var Di = Mi,
        Ui,
        Gi = (function () {
          try {
            var e = Ue(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch (e) {}
        })();
      function Fi(e, t, n) {
        '__proto__' == t && Gi
          ? Gi(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
          : (e[t] = n);
      }
      var $i = Fi,
        Vi,
        Ji = Object.prototype.hasOwnProperty;
      function zi(e, t, n) {
        var r = e[t];
        (Ji.call(e, t) && X(r, n) && (void 0 !== n || t in e)) || $i(e, t, n);
      }
      var qi = zi;
      function Ki(e, t, n, r) {
        if (!L(e)) return e;
        for (var o = -1, i = (t = hi(t, e)).length, a = i - 1, u = e; null != u && ++o < i; ) {
          var c = vi(t[o]),
            s = n;
          if ('__proto__' === c || 'constructor' === c || 'prototype' === c) return e;
          if (o != a) {
            var l = u[c];
            void 0 === (s = r ? r(l, c, u) : void 0) && (s = L(l) ? l : Fn(t[o + 1]) ? [] : {});
          }
          qi(u, c, s), (u = u[c]);
        }
        return e;
      }
      var Xi = Ki;
      function Wi(e, t, n) {
        for (var r = -1, o = t.length, i = {}; ++r < o; ) {
          var a = t[r],
            u = yi(e, a);
          n(u, a) && Xi(i, hi(a, e), u);
        }
        return i;
      }
      var Yi = Wi,
        Zi,
        Qi = Ir(Object.getPrototypeOf, Object),
        ea,
        ta,
        na = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) mn(t, xn(e)), (e = Qi(e));
              return t;
            }
          : En;
      function ra(e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      }
      var oa = ra,
        ia,
        aa = Object.prototype.hasOwnProperty;
      function ua(e) {
        if (!L(e)) return oa(e);
        var t = Cr(e),
          n = [];
        for (var r in e) ('constructor' != r || (!t && aa.call(e, r))) && n.push(r);
        return n;
      }
      var ca = ua;
      function sa(e) {
        return Gr(e) ? Tr(e, !0) : ca(e);
      }
      var la = sa;
      function fa(e) {
        return bn(e, la, na);
      }
      var ha = fa;
      function pa(e, t) {
        if (null == e) return {};
        var n = J(ha(e), function (e) {
          return [e];
        });
        return (
          (t = Di(t)),
          Yi(e, n, function (e, n) {
            return t(e, n[0]);
          })
        );
      }
      var da = pa;
      function va(e) {
        return null == e;
      }
      var ma = va;
      function ya(e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      }
      var ba = ya;
      function ga(e, t, n) {
        var r = e.length;
        return (n = void 0 === n ? r : n), !t && n >= r ? e : ba(e, t, n);
      }
      var _a = ga,
        Oa,
        Ea = '\\u0300-\\u036f',
        wa = '\\ufe20-\\ufe2f',
        Sa = '\\u20d0-\\u20ff',
        ja,
        Aa,
        xa,
        Ta = RegExp(
          '[' +
            '\\u200d' +
            '\\ud800-\\udfff' +
            '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' +
            '\\ufe0e\\ufe0f' +
            ']',
        );
      function Pa(e) {
        return Ta.test(e);
      }
      var La = Pa;
      function Ca(e) {
        return e.split('');
      }
      var Ra = Ca,
        Ia = '\\ud800-\\udfff',
        Na = '\\u0300-\\u036f',
        Ba = '\\ufe20-\\ufe2f',
        Ha = '\\u20d0-\\u20ff',
        ka,
        Ma = '\\ufe0e\\ufe0f',
        Da = '[\\ud800-\\udfff]',
        Ua = '[' + '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' + ']',
        Ga = '\\ud83c[\\udffb-\\udfff]',
        Fa,
        $a = '[^\\ud800-\\udfff]',
        Va = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        Ja = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        za = '\\u200d',
        qa = '(?:' + Ua + '|' + Ga + ')' + '?',
        Ka = '[\\ufe0e\\ufe0f]?',
        Xa,
        Wa = Ka + qa + ('(?:\\u200d(?:' + [$a, Va, Ja].join('|') + ')' + Ka + qa + ')*'),
        Ya = '(?:' + [$a + Ua + '?', Ua, Va, Ja, Da].join('|') + ')',
        Za = RegExp(Ga + '(?=' + Ga + ')|' + Ya + Wa, 'g');
      function Qa(e) {
        return e.match(Za) || [];
      }
      var eu = Qa;
      function tu(e) {
        return La(e) ? eu(e) : Ra(e);
      }
      var nu = tu;
      function ru(e) {
        return function (t) {
          t = li(t);
          var n = La(t) ? nu(t) : void 0,
            r = n ? n[0] : t.charAt(0),
            o = n ? _a(n, 1).join('') : t.slice(1);
          return r[e]() + o;
        };
      }
      var ou,
        iu,
        au = ru('toUpperCase');
      function uu(e) {
        return au(li(e).toLowerCase());
      }
      var cu = uu;
      function su(e, t, n, r) {
        var o = -1,
          i = null == e ? 0 : e.length;
        for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
        return n;
      }
      var lu = su;
      function fu(e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      }
      var hu,
        pu,
        du,
        vu = fu({
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
        mu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        yu = '\\u0300-\\u036f',
        bu = '\\ufe20-\\ufe2f',
        gu = '\\u20d0-\\u20ff',
        _u,
        Ou,
        Eu = RegExp('[' + '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' + ']', 'g');
      function wu(e) {
        return (e = li(e)) && e.replace(mu, vu).replace(Eu, '');
      }
      var Su = wu,
        ju = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function Au(e) {
        return e.match(ju) || [];
      }
      var xu = Au,
        Tu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function Pu(e) {
        return Tu.test(e);
      }
      var Lu = Pu,
        Cu = '\\ud800-\\udfff',
        Ru = '\\u0300-\\u036f',
        Iu = '\\ufe20-\\ufe2f',
        Nu = '\\u20d0-\\u20ff',
        Bu,
        Hu = '\\u2700-\\u27bf',
        ku = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        Mu,
        Du,
        Uu = '\\u2000-\\u206f',
        Gu,
        Fu = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        $u = '\\ufe0e\\ufe0f',
        Vu =
          '\\xac\\xb1\\xd7\\xf7' +
          '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf' +
          '\\u2000-\\u206f' +
          ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        Ju = "['\u2019]",
        zu = '[' + Vu + ']',
        qu,
        Ku = '\\d+',
        Xu = '[' + Hu + ']',
        Wu = '[' + ku + ']',
        Yu = '[^\\ud800-\\udfff' + Vu + Ku + Hu + ku + Fu + ']',
        Zu,
        Qu,
        ec,
        tc = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        nc = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        rc = '[' + Fu + ']',
        oc = '\\u200d',
        ic = '(?:' + Wu + '|' + Yu + ')',
        ac = '(?:' + rc + '|' + Yu + ')',
        uc = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
        cc = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
        sc =
          '(?:' +
          ('[' + '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff' + ']') +
          '|' +
          '\\ud83c[\\udffb-\\udfff]' +
          ')' +
          '?',
        lc = '[\\ufe0e\\ufe0f]?',
        fc,
        hc = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        pc = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        dc =
          '[\\ufe0e\\ufe0f]?' +
          sc +
          ('(?:\\u200d(?:' +
            ['[^\\ud800-\\udfff]', tc, nc].join('|') +
            ')[\\ufe0e\\ufe0f]?' +
            sc +
            ')*'),
        vc = '(?:' + [Xu, tc, nc].join('|') + ')' + dc,
        mc = RegExp(
          [
            rc + '?' + Wu + '+' + uc + '(?=' + [zu, rc, '$'].join('|') + ')',
            ac + '+' + cc + '(?=' + [zu, rc + ic, '$'].join('|') + ')',
            rc + '?' + ic + '+' + uc,
            rc + '+' + cc,
            pc,
            hc,
            Ku,
            vc,
          ].join('|'),
          'g',
        );
      function yc(e) {
        return e.match(mc) || [];
      }
      var bc = yc;
      function gc(e, t, n) {
        return (
          (e = li(e)), void 0 === (t = n ? void 0 : t) ? (Lu(e) ? bc(e) : xu(e)) : e.match(t) || []
        );
      }
      var _c = gc,
        Oc = "['\u2019]",
        Ec = RegExp("['\u2019]", 'g');
      function wc(e) {
        return function (t) {
          return lu(_c(Su(t).replace(Ec, '')), e, '');
        };
      }
      var Sc,
        jc,
        Ac = wc(function (e, t, n) {
          return (t = t.toLowerCase()), e + (n ? cu(t) : t);
        });
      function xc() {
        var e = window.__currentNode;
        return e || ((e = Symbol('__currentNode')), (window.__currentNode = e)), e;
      }
      function Tc() {
        var e = xc();
        return Object(o.inject)(
          e,
          function () {
            return { mode: 'live', node: null, isDesignerEnv: !1 };
          },
          !0,
        );
      }
      function Pc() {
        var e = window.__rendererContext;
        return e || ((e = Symbol('__rendererContext')), (window.__rendererContext = e)), e;
      }
      function Lc() {
        var e = Pc();
        return Object(o.inject)(
          e,
          function () {
            var e,
              t,
              n =
                null !==
                  (e =
                    null === (t = Object(o.getCurrentInstance)()) || void 0 === t
                      ? void 0
                      : t.props) && void 0 !== e
                  ? e
                  : {};
            return {
              components: Cc(n, 'components', {}),
              designMode: Cc(n, 'designMode', 'live'),
              getNode: Cc(n, 'getNode', function () {
                return null;
              }),
              triggerCompGetCtx: Cc(n, 'triggerCompGetCtx', function () {}),
            };
          },
          !0,
        );
      }
      function Cc(e, t, n) {
        return e[t] || e['__' + t] || n;
      }
      var Rc = function (e, t) {
        return (Rc =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function Ic(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
        function n() {
          this.constructor = e;
        }
        Rc(e, t),
          (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var Nc = function () {
        return (Nc =
          Object.assign ||
          function e(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++)
              for (var i in (n = arguments[r]))
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t;
          }).apply(this, arguments);
      };
      function Bc(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function Hc(e, t, n, r) {
        var o = arguments.length,
          i = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
          a;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (a = e[u]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
        return o > 3 && i && Object.defineProperty(t, n, i), i;
      }
      function kc(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function Mc(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function Dc(e, t, n, r) {
        function o(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function (n, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : o(e.value).then(a, u);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function Uc(e, t) {
        var n = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          r,
          o,
          i,
          a;
        return (
          (a = { next: u(0), throw: u(1), return: u(2) }),
          'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function u(e) {
          return function (t) {
            return c([e, t]);
          };
        }
        function c(a) {
          if (r) throw new TypeError('Generator is already executing.');
          for (; n; )
            try {
              if (
                ((r = 1),
                o &&
                  (i =
                    2 & a[0]
                      ? o.return
                      : a[0]
                      ? o.throw || ((i = o.return) && i.call(o), 0)
                      : o.next) &&
                  !(i = i.call(o, a[1])).done)
              )
                return i;
              switch (((o = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return n.label++, { value: a[1], done: !1 };
                case 5:
                  n.label++, (o = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = n.ops.pop()), n.trys.pop();
                  continue;
                default:
                  if (
                    !((i = n.trys),
                    (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))
                  ) {
                    n = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                    n.label = a[1];
                    break;
                  }
                  if (6 === a[0] && n.label < i[1]) {
                    (n.label = i[1]), (i = a);
                    break;
                  }
                  if (i && n.label < i[2]) {
                    (n.label = i[2]), n.ops.push(a);
                    break;
                  }
                  i[2] && n.ops.pop(), n.trys.pop();
                  continue;
              }
              a = t.call(e, n);
            } catch (e) {
              (a = [6, e]), (o = 0);
            } finally {
              r = i = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        }
      }
      var Gc = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (o && !('get' in o ? !t.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function Fc(e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || Gc(t, e, n);
      }
      function $c(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function Vc(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
          o,
          i = [],
          a;
        try {
          for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      }
      function Jc() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Vc(arguments[t]));
        return e;
      }
      function zc() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
        return r;
      }
      function qc(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r = 0, o = t.length, i; r < o; r++)
            (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
        return e.concat(i || Array.prototype.slice.call(t));
      }
      function Kc(e) {
        return this instanceof Kc ? ((this.v = e), this) : new Kc(e);
      }
      function Xc(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var r = n.apply(e, t || []),
          o,
          i = [];
        return (
          (o = {}),
          a('next'),
          a('throw'),
          a('return'),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function a(e) {
          r[e] &&
            (o[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || u(e, t);
              });
            });
        }
        function u(e, t) {
          try {
            c(r[e](t));
          } catch (e) {
            f(i[0][3], e);
          }
        }
        function c(e) {
          e.value instanceof Kc ? Promise.resolve(e.value.v).then(s, l) : f(i[0][2], e);
        }
        function s(e) {
          u('next', e);
        }
        function l(e) {
          u('throw', e);
        }
        function f(e, t) {
          e(t), i.shift(), i.length && u(i[0][0], i[0][1]);
        }
      }
      function Wc(e) {
        var t, n;
        return (
          (t = {}),
          r('next'),
          r('throw', function (e) {
            throw e;
          }),
          r('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n) ? { value: Kc(e[r](t)), done: 'return' === r } : o ? o(t) : t;
              }
            : o;
        }
      }
      function Yc(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var t = e[Symbol.asyncIterator],
          n;
        return t
          ? t.call(e)
          : ((e = $c(e)),
            (n = {}),
            r('next'),
            r('throw'),
            r('return'),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function r(t) {
          n[t] =
            e[t] &&
            function (n) {
              return new Promise(function (r, i) {
                o(r, i, (n = e[t](n)).done, n.value);
              });
            };
        }
        function o(e, t, n, r) {
          Promise.resolve(r).then(function (t) {
            e({ value: t, done: n });
          }, t);
        }
      }
      function Zc(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      var Qc = Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        es,
        ts,
        ns;
      function rs(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && Gc(t, e, n);
        return Qc(t, e), t;
      }
      function os(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function is(e, t, n, r) {
        if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !r : !t.has(e))
          throw new TypeError(
            'Cannot read private member from an object whose class did not declare it',
          );
        return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function as(e, t, n, r, o) {
        if ('m' === r) throw new TypeError('Private method is not writable');
        if ('a' === r && !o) throw new TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            'Cannot write private member to an object whose class did not declare it',
          );
        return 'a' === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function us(e, t) {
        if (null === t || ('object' != typeof t && 'function' != typeof t))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return 'function' == typeof e ? t === e : e.has(t);
      }
      function cs(e) {
        return e.type === ts.literal;
      }
      function ss(e) {
        return e.type === ts.argument;
      }
      function ls(e) {
        return e.type === ts.number;
      }
      function fs(e) {
        return e.type === ts.date;
      }
      function hs(e) {
        return e.type === ts.time;
      }
      function ps(e) {
        return e.type === ts.select;
      }
      function ds(e) {
        return e.type === ts.plural;
      }
      function vs(e) {
        return e.type === ts.pound;
      }
      function ms(e) {
        return e.type === ts.tag;
      }
      function ys(e) {
        return !(!e || 'object' != typeof e || e.type !== ns.number);
      }
      function bs(e) {
        return !(!e || 'object' != typeof e || e.type !== ns.dateTime);
      }
      function gs(e) {
        return { type: ts.literal, value: e };
      }
      function _s(e, t) {
        return { type: ts.number, value: e, style: t };
      }
      !(function (e) {
        (e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = 'EXPECT_ARGUMENT_CLOSING_BRACE'),
          (e[(e.EMPTY_ARGUMENT = 2)] = 'EMPTY_ARGUMENT'),
          (e[(e.MALFORMED_ARGUMENT = 3)] = 'MALFORMED_ARGUMENT'),
          (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = 'EXPECT_ARGUMENT_TYPE'),
          (e[(e.INVALID_ARGUMENT_TYPE = 5)] = 'INVALID_ARGUMENT_TYPE'),
          (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = 'EXPECT_ARGUMENT_STYLE'),
          (e[(e.INVALID_NUMBER_SKELETON = 7)] = 'INVALID_NUMBER_SKELETON'),
          (e[(e.INVALID_DATE_TIME_SKELETON = 8)] = 'INVALID_DATE_TIME_SKELETON'),
          (e[(e.EXPECT_NUMBER_SKELETON = 9)] = 'EXPECT_NUMBER_SKELETON'),
          (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = 'EXPECT_DATE_TIME_SKELETON'),
          (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = 'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
          (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = 'EXPECT_SELECT_ARGUMENT_OPTIONS'),
          (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] = 'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
          (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
            'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = 'EXPECT_SELECT_ARGUMENT_SELECTOR'),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
            'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
            'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
          (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = 'INVALID_PLURAL_ARGUMENT_SELECTOR'),
          (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = 'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
          (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = 'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
          (e[(e.MISSING_OTHER_CLAUSE = 22)] = 'MISSING_OTHER_CLAUSE'),
          (e[(e.INVALID_TAG = 23)] = 'INVALID_TAG'),
          (e[(e.INVALID_TAG_NAME = 25)] = 'INVALID_TAG_NAME'),
          (e[(e.UNMATCHED_CLOSING_TAG = 26)] = 'UNMATCHED_CLOSING_TAG'),
          (e[(e.UNCLOSED_TAG = 27)] = 'UNCLOSED_TAG');
      })(es || (es = {})),
        (function (e) {
          (e[(e.literal = 0)] = 'literal'),
            (e[(e.argument = 1)] = 'argument'),
            (e[(e.number = 2)] = 'number'),
            (e[(e.date = 3)] = 'date'),
            (e[(e.time = 4)] = 'time'),
            (e[(e.select = 5)] = 'select'),
            (e[(e.plural = 6)] = 'plural'),
            (e[(e.pound = 7)] = 'pound'),
            (e[(e.tag = 8)] = 'tag');
        })(ts || (ts = {})),
        (function (e) {
          (e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime');
        })(ns || (ns = {}));
      var Os = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Es = /[\t-\r \x85\u200E\u200F\u2028\u2029]/,
        ws =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function Ss(e) {
        var t = {};
        return (
          e.replace(ws, function (e) {
            var n = e.length;
            switch (e[0]) {
              case 'G':
                t.era = 4 === n ? 'long' : 5 === n ? 'narrow' : 'short';
                break;
              case 'y':
                t.year = 2 === n ? '2-digit' : 'numeric';
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
                t.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][n - 1];
                break;
              case 'w':
              case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
              case 'd':
                t.day = ['numeric', '2-digit'][n - 1];
                break;
              case 'D':
              case 'F':
              case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
              case 'E':
                t.weekday = 4 === n ? 'short' : 5 === n ? 'narrow' : 'short';
                break;
              case 'e':
                if (n < 4) throw new RangeError('`e..eee` (weekday) patterns are not supported');
                t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
                break;
              case 'c':
                if (n < 4) throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
                break;
              case 'a':
                t.hour12 = !0;
                break;
              case 'b':
              case 'B':
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
              case 'h':
                (t.hourCycle = 'h12'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'H':
                (t.hourCycle = 'h23'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'K':
                (t.hourCycle = 'h11'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'k':
                (t.hourCycle = 'h24'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'j':
              case 'J':
              case 'C':
                throw new RangeError(
                  '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead',
                );
              case 'm':
                t.minute = ['numeric', '2-digit'][n - 1];
                break;
              case 's':
                t.second = ['numeric', '2-digit'][n - 1];
                break;
              case 'S':
              case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
              case 'z':
                t.timeZoneName = n < 4 ? 'short' : 'long';
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
          t
        );
      }
      var js = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      function As(e) {
        if (0 === e.length) throw new Error('Number skeleton cannot be empty');
        for (
          var t,
            n = [],
            r = 0,
            o = e.split(js).filter(function (e) {
              return e.length > 0;
            });
          r < o.length;
          r++
        ) {
          var i,
            a = o[r].split('/');
          if (0 === a.length) throw new Error('Invalid number skeleton');
          for (var u = a[0], c = a.slice(1), s = 0, l = c; s < l.length; s++) {
            var f;
            if (0 === l[s].length) throw new Error('Invalid number skeleton');
          }
          n.push({ stem: u, options: c });
        }
        return n;
      }
      function xs(e) {
        return e.replace(/^(.*?)-/, '');
      }
      var Ts = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ps = /^(@+)?(\+|#+)?[rs]?$/g,
        Ls = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Cs = /^(0+)$/;
      function Rs(e) {
        var t = {};
        return (
          'r' === e[e.length - 1]
            ? (t.roundingPriority = 'morePrecision')
            : 's' === e[e.length - 1] && (t.roundingPriority = 'lessPrecision'),
          e.replace(Ps, function (e, n, r) {
            return (
              'string' != typeof r
                ? ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length))
                : '+' === r
                ? (t.minimumSignificantDigits = n.length)
                : '#' === n[0]
                ? (t.maximumSignificantDigits = n.length)
                : ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits = n.length + ('string' == typeof r ? r.length : 0))),
              ''
            );
          }),
          t
        );
      }
      function Is(e) {
        switch (e) {
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
      function Ns(e) {
        var t;
        if (
          ('E' === e[0] && 'E' === e[1]
            ? ((t = { notation: 'engineering' }), (e = e.slice(2)))
            : 'E' === e[0] && ((t = { notation: 'scientific' }), (e = e.slice(1))),
          t)
        ) {
          var n = e.slice(0, 2);
          if (
            ('+!' === n
              ? ((t.signDisplay = 'always'), (e = e.slice(2)))
              : '+?' === n && ((t.signDisplay = 'exceptZero'), (e = e.slice(2))),
            !Cs.test(e))
          )
            throw new Error('Malformed concise eng/scientific notation');
          t.minimumIntegerDigits = e.length;
        }
        return t;
      }
      function Bs(e) {
        var t = {},
          n = Is(e);
        return n || t;
      }
      function Hs(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
          switch (o.stem) {
            case 'percent':
            case '%':
              t.style = 'percent';
              continue;
            case '%x100':
              (t.style = 'percent'), (t.scale = 100);
              continue;
            case 'currency':
              (t.style = 'currency'), (t.currency = o.options[0]);
              continue;
            case 'group-off':
            case ',_':
              t.useGrouping = !1;
              continue;
            case 'precision-integer':
            case '.':
              t.maximumFractionDigits = 0;
              continue;
            case 'measure-unit':
            case 'unit':
              (t.style = 'unit'), (t.unit = xs(o.options[0]));
              continue;
            case 'compact-short':
            case 'K':
              (t.notation = 'compact'), (t.compactDisplay = 'short');
              continue;
            case 'compact-long':
            case 'KK':
              (t.notation = 'compact'), (t.compactDisplay = 'long');
              continue;
            case 'scientific':
              t = Nc(
                Nc(Nc({}, t), { notation: 'scientific' }),
                o.options.reduce(function (e, t) {
                  return Nc(Nc({}, e), Bs(t));
                }, {}),
              );
              continue;
            case 'engineering':
              t = Nc(
                Nc(Nc({}, t), { notation: 'engineering' }),
                o.options.reduce(function (e, t) {
                  return Nc(Nc({}, e), Bs(t));
                }, {}),
              );
              continue;
            case 'notation-simple':
              t.notation = 'standard';
              continue;
            case 'unit-width-narrow':
              (t.currencyDisplay = 'narrowSymbol'), (t.unitDisplay = 'narrow');
              continue;
            case 'unit-width-short':
              (t.currencyDisplay = 'code'), (t.unitDisplay = 'short');
              continue;
            case 'unit-width-full-name':
              (t.currencyDisplay = 'name'), (t.unitDisplay = 'long');
              continue;
            case 'unit-width-iso-code':
              t.currencyDisplay = 'symbol';
              continue;
            case 'scale':
              t.scale = parseFloat(o.options[0]);
              continue;
            case 'integer-width':
              if (o.options.length > 1)
                throw new RangeError('integer-width stems only accept a single optional option');
              o.options[0].replace(Ls, function (e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error('We currently do not support maximum integer digits');
                  if (a) throw new Error('We currently do not support exact integer digits');
                }
                return '';
              });
              continue;
          }
          if (Cs.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Ts.test(o.stem)) {
            if (o.options.length > 1)
              throw new RangeError('Fraction-precision stems only accept a single optional option');
            o.stem.replace(Ts, function (e, n, r, o, i, a) {
              return (
                '*' === r
                  ? (t.minimumFractionDigits = n.length)
                  : o && '#' === o[0]
                  ? (t.maximumFractionDigits = o.length)
                  : i && a
                  ? ((t.minimumFractionDigits = i.length),
                    (t.maximumFractionDigits = i.length + a.length))
                  : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)),
                ''
              );
            });
            var i = o.options[0];
            'w' === i
              ? (t = Nc(Nc({}, t), { trailingZeroDisplay: 'stripIfInteger' }))
              : i && (t = Nc(Nc({}, t), Rs(i)));
          } else if (Ps.test(o.stem)) t = Nc(Nc({}, t), Rs(o.stem));
          else {
            var a = Is(o.stem);
            a && (t = Nc(Nc({}, t), a));
            var u = Ns(o.stem);
            u && (t = Nc(Nc({}, t), u));
          }
        }
        return t;
      }
      var ks = {
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
        Ms;
      function Ds(e, t) {
        for (var n = '', r = 0; r < e.length; r++) {
          var o = e.charAt(r);
          if ('j' === o) {
            for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o; ) i++, r++;
            var a = 1 + (1 & i),
              u = i < 2 ? 1 : 3 + (i >> 1),
              c = 'a',
              s = Us(t);
            for (('H' != s && 'k' != s) || (u = 0); u-- > 0; ) n += 'a';
            for (; a-- > 0; ) n = s + n;
          } else n += 'J' === o ? 'H' : o;
        }
        return n;
      }
      function Us(e) {
        var t = e.hourCycle;
        if ((void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t))
          switch (t) {
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
        var n = e.language,
          r,
          o;
        return (
          'root' !== n && (r = e.maximize().region),
          (ks[r || ''] || ks[n || ''] || ks[''.concat(n, '-001')] || ks['001'])[0]
        );
      }
      var Gs = new RegExp('^'.concat(Os.source, '*')),
        Fs = new RegExp(''.concat(Os.source, '*$'));
      function $s(e, t) {
        return { start: e, end: t };
      }
      var Vs = !!String.prototype.startsWith,
        Js = !!String.fromCodePoint,
        zs = !!Object.fromEntries,
        qs = !!String.prototype.codePointAt,
        Ks = !!String.prototype.trimStart,
        Xs = !!String.prototype.trimEnd,
        Ws,
        Ys = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                'number' == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                Math.abs(e) <= 9007199254740991
              );
            },
        Zs = !0;
      try {
        var Qs;
        Zs =
          'a' ===
          (null === (Ms = ul('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu').exec('a')) ||
          void 0 === Ms
            ? void 0
            : Ms[0]);
      } catch (e) {
        Zs = !1;
      }
      var el = Vs
          ? function e(t, n, r) {
              return t.startsWith(n, r);
            }
          : function e(t, n, r) {
              return t.slice(r, r + n.length) === n;
            },
        tl = Js
          ? String.fromCodePoint
          : function e() {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              for (var r = '', o = t.length, i = 0, a; o > i; ) {
                if ((a = t[i++]) > 1114111) throw RangeError(a + ' is not a valid code point');
                r +=
                  a < 65536
                    ? String.fromCharCode(a)
                    : String.fromCharCode(55296 + ((a -= 65536) >> 10), (a % 1024) + 56320);
              }
              return r;
            },
        nl = zs
          ? Object.fromEntries
          : function e(t) {
              for (var n = {}, r = 0, o = t; r < o.length; r++) {
                var i = o[r],
                  a = i[0],
                  u = i[1];
                n[a] = u;
              }
              return n;
            },
        rl = qs
          ? function e(t, n) {
              return t.codePointAt(n);
            }
          : function e(t, n) {
              var r = t.length;
              if (!(n < 0 || n >= r)) {
                var o = t.charCodeAt(n),
                  i;
                return o < 55296 ||
                  o > 56319 ||
                  n + 1 === r ||
                  (i = t.charCodeAt(n + 1)) < 56320 ||
                  i > 57343
                  ? o
                  : i - 56320 + ((o - 55296) << 10) + 65536;
              }
            },
        ol = Ks
          ? function e(t) {
              return t.trimStart();
            }
          : function e(t) {
              return t.replace(Gs, '');
            },
        il = Xs
          ? function e(t) {
              return t.trimEnd();
            }
          : function e(t) {
              return t.replace(Fs, '');
            },
        al;
      function ul(e, t) {
        return new RegExp(e, t);
      }
      if (Zs) {
        var cl = ul('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
        al = function e(t, n) {
          var r, o;
          return (cl.lastIndex = n), null !== (r = cl.exec(t)[1]) && void 0 !== r ? r : '';
        };
      } else
        al = function e(t, n) {
          for (var r = []; ; ) {
            var o = rl(t, n);
            if (void 0 === o || pl(o) || dl(o)) break;
            r.push(o), (n += o >= 65536 ? 2 : 1);
          }
          return tl.apply(void 0, r);
        };
      var sl = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset()) throw Error('parser can only be used once');
            return this.parseMessage(0, '', !1);
          }),
          (e.prototype.parseMessage = function (e, t, n) {
            for (var r = []; !this.isEOF(); ) {
              var o = this.char();
              if (123 === o) {
                var i;
                if ((i = this.parseArgument(e, n)).err) return i;
                r.push(i.val);
              } else {
                if (125 === o && e > 0) break;
                if (35 !== o || ('plural' !== t && 'selectordinal' !== t)) {
                  if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                    if (n) break;
                    return this.error(
                      es.UNMATCHED_CLOSING_TAG,
                      $s(this.clonePosition(), this.clonePosition()),
                    );
                  }
                  if (60 === o && !this.ignoreTag && ll(this.peek() || 0)) {
                    var i;
                    if ((i = this.parseTag(e, t)).err) return i;
                    r.push(i.val);
                  } else {
                    var i;
                    if ((i = this.parseLiteral(e, t)).err) return i;
                    r.push(i.val);
                  }
                } else {
                  var a = this.clonePosition();
                  this.bump(), r.push({ type: ts.pound, location: $s(a, this.clonePosition()) });
                }
              }
            }
            return { val: r, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var n = this.clonePosition();
            this.bump();
            var r = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf('/>')))
              return {
                val: {
                  type: ts.literal,
                  value: '<'.concat(r, '/>'),
                  location: $s(n, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf('>')) {
              var o = this.parseMessage(e + 1, t, !0);
              if (o.err) return o;
              var i = o.val,
                a = this.clonePosition();
              if (this.bumpIf('</')) {
                if (this.isEOF() || !ll(this.char()))
                  return this.error(es.INVALID_TAG, $s(a, this.clonePosition()));
                var u = this.clonePosition(),
                  c;
                return r !== this.parseTagName()
                  ? this.error(es.UNMATCHED_CLOSING_TAG, $s(u, this.clonePosition()))
                  : (this.bumpSpace(),
                    this.bumpIf('>')
                      ? {
                          val: {
                            type: ts.tag,
                            value: r,
                            children: i,
                            location: $s(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(es.INVALID_TAG, $s(a, this.clonePosition())));
              }
              return this.error(es.UNCLOSED_TAG, $s(n, this.clonePosition()));
            }
            return this.error(es.INVALID_TAG, $s(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && hl(this.char()); ) this.bump();
            return this.message.slice(e, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var n = this.clonePosition(), r = ''; ; ) {
              var o = this.tryParseQuote(t);
              if (o) r += o;
              else {
                var i = this.tryParseUnquoted(e, t);
                if (i) r += i;
                else {
                  var a = this.tryParseLeftAngleBracket();
                  if (!a) break;
                  r += a;
                }
              }
            }
            var u = $s(n, this.clonePosition());
            return { val: { type: ts.literal, value: r, location: u }, err: null };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() || 60 !== this.char() || (!this.ignoreTag && fl(this.peek() || 0))
              ? null
              : (this.bump(), '<');
          }),
          (e.prototype.tryParseQuote = function (e) {
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
                if ('plural' === e || 'selectordinal' === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var n = this.char();
              if (39 === n) {
                if (39 !== this.peek()) {
                  this.bump();
                  break;
                }
                t.push(39), this.bump();
              } else t.push(n);
              this.bump();
            }
            return tl.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n ||
              123 === n ||
              (35 === n && ('plural' === t || 'selectordinal' === t)) ||
              (125 === n && e > 0)
              ? null
              : (this.bump(), tl(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(es.EXPECT_ARGUMENT_CLOSING_BRACE, $s(n, this.clonePosition()));
            if (125 === this.char())
              return this.bump(), this.error(es.EMPTY_ARGUMENT, $s(n, this.clonePosition()));
            var r = this.parseIdentifierIfPossible().value;
            if (!r) return this.error(es.MALFORMED_ARGUMENT, $s(n, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(es.EXPECT_ARGUMENT_CLOSING_BRACE, $s(n, this.clonePosition()));
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: { type: ts.argument, value: r, location: $s(n, this.clonePosition()) },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(es.EXPECT_ARGUMENT_CLOSING_BRACE, $s(n, this.clonePosition()))
                    : this.parseArgumentOptions(e, t, r, n)
                );
              default:
                return this.error(es.MALFORMED_ARGUMENT, $s(n, this.clonePosition()));
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = al(this.message, t),
              r = t + n.length,
              o,
              i;
            return this.bumpTo(r), { value: n, location: $s(e, this.clonePosition()) };
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var o,
              i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              u = this.clonePosition();
            switch (a) {
              case '':
                return this.error(es.EXPECT_ARGUMENT_TYPE, $s(i, u));
              case 'number':
              case 'date':
              case 'time':
                this.bumpSpace();
                var c = null,
                  s;
                if (this.bumpIf(',')) {
                  this.bumpSpace();
                  var l = this.clonePosition(),
                    f,
                    h,
                    p;
                  if ((f = this.parseSimpleArgStyleIfPossible()).err) return f;
                  if (0 === (h = il(f.val)).length)
                    return this.error(
                      es.EXPECT_ARGUMENT_STYLE,
                      $s(this.clonePosition(), this.clonePosition()),
                    );
                  c = { style: h, styleLocation: $s(l, this.clonePosition()) };
                }
                if ((s = this.tryParseArgumentClose(r)).err) return s;
                var d = $s(r, this.clonePosition());
                if (c && el(null == c ? void 0 : c.style, '::', 0)) {
                  var v = ol(c.style.slice(2)),
                    f;
                  if ('number' === a)
                    return (f = this.parseNumberSkeletonFromString(v, c.styleLocation)).err
                      ? f
                      : {
                          val: { type: ts.number, value: n, location: d, style: f.val },
                          err: null,
                        };
                  if (0 === v.length) return this.error(es.EXPECT_DATE_TIME_SKELETON, d);
                  var m = v;
                  this.locale && (m = Ds(v, this.locale));
                  var h = {
                      type: ns.dateTime,
                      pattern: m,
                      location: c.styleLocation,
                      parsedOptions: this.shouldParseSkeletons ? Ss(m) : {},
                    },
                    y;
                  return {
                    val: {
                      type: 'date' === a ? ts.date : ts.time,
                      value: n,
                      location: d,
                      style: h,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type: 'number' === a ? ts.number : 'date' === a ? ts.date : ts.time,
                    value: n,
                    location: d,
                    style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null,
                  },
                  err: null,
                };
              case 'plural':
              case 'selectordinal':
              case 'select':
                var b = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(',')))
                  return this.error(es.EXPECT_SELECT_ARGUMENT_OPTIONS, $s(b, Nc({}, b)));
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  _ = 0;
                if ('select' !== a && 'offset' === g.value) {
                  if (!this.bumpIf(':'))
                    return this.error(
                      es.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      $s(this.clonePosition(), this.clonePosition()),
                    );
                  var f;
                  if (
                    (this.bumpSpace(),
                    (f = this.tryParseDecimalInteger(
                      es.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      es.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                    )).err)
                  )
                    return f;
                  this.bumpSpace(), (g = this.parseIdentifierIfPossible()), (_ = f.val);
                }
                var O = this.tryParsePluralOrSelectOptions(e, a, t, g),
                  s;
                if (O.err) return O;
                if ((s = this.tryParseArgumentClose(r)).err) return s;
                var E = $s(r, this.clonePosition());
                return 'select' === a
                  ? {
                      val: { type: ts.select, value: n, options: nl(O.val), location: E },
                      err: null,
                    }
                  : {
                      val: {
                        type: ts.plural,
                        value: n,
                        options: nl(O.val),
                        offset: _,
                        pluralType: 'plural' === a ? 'cardinal' : 'ordinal',
                        location: E,
                      },
                      err: null,
                    };
              default:
                return this.error(es.INVALID_ARGUMENT_TYPE, $s(i, u));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(es.EXPECT_ARGUMENT_CLOSING_BRACE, $s(e, this.clonePosition()))
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) {
              var n;
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      es.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      $s(r, this.clonePosition()),
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return { val: this.message.slice(t.offset, this.offset()), err: null };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            }
            return { val: this.message.slice(t.offset, this.offset()), err: null };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = As(e);
            } catch (e) {
              return this.error(es.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: ns.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? Hs(n) : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
            for (var o, i = !1, a = [], u = new Set(), c = r.value, s = r.location; ; ) {
              if (0 === c.length) {
                var l = this.clonePosition();
                if ('select' === t || !this.bumpIf('=')) break;
                var f = this.tryParseDecimalInteger(
                  es.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  es.INVALID_PLURAL_ARGUMENT_SELECTOR,
                );
                if (f.err) return f;
                (s = $s(l, this.clonePosition())),
                  (c = this.message.slice(l.offset, this.offset()));
              }
              if (u.has(c))
                return this.error(
                  'select' === t
                    ? es.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : es.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  s,
                );
              'other' === c && (i = !0), this.bumpSpace();
              var h = this.clonePosition();
              if (!this.bumpIf('{'))
                return this.error(
                  'select' === t
                    ? es.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : es.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  $s(this.clonePosition(), this.clonePosition()),
                );
              var p = this.parseMessage(e + 1, t, n);
              if (p.err) return p;
              var d = this.tryParseArgumentClose(h);
              if (d.err) return d;
              a.push([c, { value: p.val, location: $s(h, this.clonePosition()) }]),
                u.add(c),
                this.bumpSpace(),
                (c = (o = this.parseIdentifierIfPossible()).value),
                (s = o.location);
            }
            return 0 === a.length
              ? this.error(
                  'select' === t
                    ? es.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : es.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  $s(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !i
              ? this.error(es.MISSING_OTHER_CLAUSE, $s(this.clonePosition(), this.clonePosition()))
              : { val: a, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var n = 1,
              r = this.clonePosition();
            this.bumpIf('+') || (this.bumpIf('-') && (n = -1));
            for (var o = !1, i = 0; !this.isEOF(); ) {
              var a = this.char();
              if (!(a >= 48 && a <= 57)) break;
              (o = !0), (i = 10 * i + (a - 48)), this.bump();
            }
            var u = $s(r, this.clonePosition());
            return o ? (Ys((i *= n)) ? { val: i, err: null } : this.error(t, u)) : this.error(e, u);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error('out of bound');
            var t = rl(this.message, e);
            if (void 0 === t)
              throw Error('Offset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return { val: null, err: { kind: e, message: this.message, location: t } };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1), (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (el(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              n = this.message.indexOf(e, t);
            return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                'targetOffset '
                  .concat(e, ' must be greater than or equal to the current offset ')
                  .concat(this.offset()),
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error('targetOffset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && pl(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != n ? n : null;
          }),
          e
        );
      })();
      function ll(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function fl(e) {
        return ll(e) || 47 === e;
      }
      function hl(e) {
        return (
          45 === e ||
          46 === e ||
          (e >= 48 && e <= 57) ||
          95 === e ||
          (e >= 97 && e <= 122) ||
          (e >= 65 && e <= 90) ||
          183 == e ||
          (e >= 192 && e <= 214) ||
          (e >= 216 && e <= 246) ||
          (e >= 248 && e <= 893) ||
          (e >= 895 && e <= 8191) ||
          (e >= 8204 && e <= 8205) ||
          (e >= 8255 && e <= 8256) ||
          (e >= 8304 && e <= 8591) ||
          (e >= 11264 && e <= 12271) ||
          (e >= 12289 && e <= 55295) ||
          (e >= 63744 && e <= 64975) ||
          (e >= 65008 && e <= 65533) ||
          (e >= 65536 && e <= 983039)
        );
      }
      function pl(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function dl(e) {
        return (
          (e >= 33 && e <= 35) ||
          36 === e ||
          (e >= 37 && e <= 39) ||
          40 === e ||
          41 === e ||
          42 === e ||
          43 === e ||
          44 === e ||
          45 === e ||
          (e >= 46 && e <= 47) ||
          (e >= 58 && e <= 59) ||
          (e >= 60 && e <= 62) ||
          (e >= 63 && e <= 64) ||
          91 === e ||
          92 === e ||
          93 === e ||
          94 === e ||
          96 === e ||
          123 === e ||
          124 === e ||
          125 === e ||
          126 === e ||
          161 === e ||
          (e >= 162 && e <= 165) ||
          166 === e ||
          167 === e ||
          169 === e ||
          171 === e ||
          172 === e ||
          174 === e ||
          176 === e ||
          177 === e ||
          182 === e ||
          187 === e ||
          191 === e ||
          215 === e ||
          247 === e ||
          (e >= 8208 && e <= 8213) ||
          (e >= 8214 && e <= 8215) ||
          8216 === e ||
          8217 === e ||
          8218 === e ||
          (e >= 8219 && e <= 8220) ||
          8221 === e ||
          8222 === e ||
          8223 === e ||
          (e >= 8224 && e <= 8231) ||
          (e >= 8240 && e <= 8248) ||
          8249 === e ||
          8250 === e ||
          (e >= 8251 && e <= 8254) ||
          (e >= 8257 && e <= 8259) ||
          8260 === e ||
          8261 === e ||
          8262 === e ||
          (e >= 8263 && e <= 8273) ||
          8274 === e ||
          8275 === e ||
          (e >= 8277 && e <= 8286) ||
          (e >= 8592 && e <= 8596) ||
          (e >= 8597 && e <= 8601) ||
          (e >= 8602 && e <= 8603) ||
          (e >= 8604 && e <= 8607) ||
          8608 === e ||
          (e >= 8609 && e <= 8610) ||
          8611 === e ||
          (e >= 8612 && e <= 8613) ||
          8614 === e ||
          (e >= 8615 && e <= 8621) ||
          8622 === e ||
          (e >= 8623 && e <= 8653) ||
          (e >= 8654 && e <= 8655) ||
          (e >= 8656 && e <= 8657) ||
          8658 === e ||
          8659 === e ||
          8660 === e ||
          (e >= 8661 && e <= 8691) ||
          (e >= 8692 && e <= 8959) ||
          (e >= 8960 && e <= 8967) ||
          8968 === e ||
          8969 === e ||
          8970 === e ||
          8971 === e ||
          (e >= 8972 && e <= 8991) ||
          (e >= 8992 && e <= 8993) ||
          (e >= 8994 && e <= 9e3) ||
          9001 === e ||
          9002 === e ||
          (e >= 9003 && e <= 9083) ||
          9084 === e ||
          (e >= 9085 && e <= 9114) ||
          (e >= 9115 && e <= 9139) ||
          (e >= 9140 && e <= 9179) ||
          (e >= 9180 && e <= 9185) ||
          (e >= 9186 && e <= 9254) ||
          (e >= 9255 && e <= 9279) ||
          (e >= 9280 && e <= 9290) ||
          (e >= 9291 && e <= 9311) ||
          (e >= 9472 && e <= 9654) ||
          9655 === e ||
          (e >= 9656 && e <= 9664) ||
          9665 === e ||
          (e >= 9666 && e <= 9719) ||
          (e >= 9720 && e <= 9727) ||
          (e >= 9728 && e <= 9838) ||
          9839 === e ||
          (e >= 9840 && e <= 10087) ||
          10088 === e ||
          10089 === e ||
          10090 === e ||
          10091 === e ||
          10092 === e ||
          10093 === e ||
          10094 === e ||
          10095 === e ||
          10096 === e ||
          10097 === e ||
          10098 === e ||
          10099 === e ||
          10100 === e ||
          10101 === e ||
          (e >= 10132 && e <= 10175) ||
          (e >= 10176 && e <= 10180) ||
          10181 === e ||
          10182 === e ||
          (e >= 10183 && e <= 10213) ||
          10214 === e ||
          10215 === e ||
          10216 === e ||
          10217 === e ||
          10218 === e ||
          10219 === e ||
          10220 === e ||
          10221 === e ||
          10222 === e ||
          10223 === e ||
          (e >= 10224 && e <= 10239) ||
          (e >= 10240 && e <= 10495) ||
          (e >= 10496 && e <= 10626) ||
          10627 === e ||
          10628 === e ||
          10629 === e ||
          10630 === e ||
          10631 === e ||
          10632 === e ||
          10633 === e ||
          10634 === e ||
          10635 === e ||
          10636 === e ||
          10637 === e ||
          10638 === e ||
          10639 === e ||
          10640 === e ||
          10641 === e ||
          10642 === e ||
          10643 === e ||
          10644 === e ||
          10645 === e ||
          10646 === e ||
          10647 === e ||
          10648 === e ||
          (e >= 10649 && e <= 10711) ||
          10712 === e ||
          10713 === e ||
          10714 === e ||
          10715 === e ||
          (e >= 10716 && e <= 10747) ||
          10748 === e ||
          10749 === e ||
          (e >= 10750 && e <= 11007) ||
          (e >= 11008 && e <= 11055) ||
          (e >= 11056 && e <= 11076) ||
          (e >= 11077 && e <= 11078) ||
          (e >= 11079 && e <= 11084) ||
          (e >= 11085 && e <= 11123) ||
          (e >= 11124 && e <= 11125) ||
          (e >= 11126 && e <= 11157) ||
          11158 === e ||
          (e >= 11159 && e <= 11263) ||
          (e >= 11776 && e <= 11777) ||
          11778 === e ||
          11779 === e ||
          11780 === e ||
          11781 === e ||
          (e >= 11782 && e <= 11784) ||
          11785 === e ||
          11786 === e ||
          11787 === e ||
          11788 === e ||
          11789 === e ||
          (e >= 11790 && e <= 11798) ||
          11799 === e ||
          (e >= 11800 && e <= 11801) ||
          11802 === e ||
          11803 === e ||
          11804 === e ||
          11805 === e ||
          (e >= 11806 && e <= 11807) ||
          11808 === e ||
          11809 === e ||
          11810 === e ||
          11811 === e ||
          11812 === e ||
          11813 === e ||
          11814 === e ||
          11815 === e ||
          11816 === e ||
          11817 === e ||
          (e >= 11818 && e <= 11822) ||
          11823 === e ||
          (e >= 11824 && e <= 11833) ||
          (e >= 11834 && e <= 11835) ||
          (e >= 11836 && e <= 11839) ||
          11840 === e ||
          11841 === e ||
          11842 === e ||
          (e >= 11843 && e <= 11855) ||
          (e >= 11856 && e <= 11857) ||
          11858 === e ||
          (e >= 11859 && e <= 11903) ||
          (e >= 12289 && e <= 12291) ||
          12296 === e ||
          12297 === e ||
          12298 === e ||
          12299 === e ||
          12300 === e ||
          12301 === e ||
          12302 === e ||
          12303 === e ||
          12304 === e ||
          12305 === e ||
          (e >= 12306 && e <= 12307) ||
          12308 === e ||
          12309 === e ||
          12310 === e ||
          12311 === e ||
          12312 === e ||
          12313 === e ||
          12314 === e ||
          12315 === e ||
          12316 === e ||
          12317 === e ||
          (e >= 12318 && e <= 12319) ||
          12320 === e ||
          12336 === e ||
          64830 === e ||
          64831 === e ||
          (e >= 65093 && e <= 65094)
        );
      }
      function vl(e) {
        e.forEach(function (e) {
          if ((delete e.location, ps(e) || ds(e)))
            for (var t in e.options) delete e.options[t].location, vl(e.options[t].value);
          else
            (ls(e) && ys(e.style)) || ((fs(e) || hs(e)) && bs(e.style))
              ? delete e.style.location
              : ms(e) && vl(e.children);
        });
      }
      function ml(e, t) {
        void 0 === t && (t = {}),
          (t = Nc({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t));
        var n = new sl(e, t).parse();
        if (n.err) {
          var r = SyntaxError(es[n.err.kind]);
          throw ((r.location = n.err.location), (r.originalMessage = n.err.message), r);
        }
        return (null == t ? void 0 : t.captureLocation) || vl(n.val), n.val;
      }
      function yl(e, t) {
        var n = t && t.cache ? t.cache : xl,
          r = t && t.serializer ? t.serializer : jl,
          o;
        return (t && t.strategy ? t.strategy : El)(e, { cache: n, serializer: r });
      }
      function bl(e) {
        return null == e || 'number' == typeof e || 'boolean' == typeof e;
      }
      function gl(e, t, n, r) {
        var o = bl(r) ? r : n(r),
          i = t.get(o);
        return void 0 === i && ((i = e.call(this, r)), t.set(o, i)), i;
      }
      function _l(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && ((i = e.apply(this, r)), t.set(o, i)), i;
      }
      function Ol(e, t, n, r, o) {
        return n.bind(t, e, r, o);
      }
      function El(e, t) {
        var n;
        return Ol(e, this, 1 === e.length ? gl : _l, t.cache.create(), t.serializer);
      }
      function wl(e, t) {
        return Ol(e, this, _l, t.cache.create(), t.serializer);
      }
      function Sl(e, t) {
        return Ol(e, this, gl, t.cache.create(), t.serializer);
      }
      var jl = function () {
        return JSON.stringify(arguments);
      };
      function Al() {
        this.cache = Object.create(null);
      }
      (Al.prototype.get = function (e) {
        return this.cache[e];
      }),
        (Al.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var xl = {
          create: function e() {
            return new Al();
          },
        },
        Tl = { variadic: wl, monadic: Sl },
        Pl;
      !(function (e) {
        (e.MISSING_VALUE = 'MISSING_VALUE'),
          (e.INVALID_VALUE = 'INVALID_VALUE'),
          (e.MISSING_INTL_API = 'MISSING_INTL_API');
      })(Pl || (Pl = {}));
      var Ll = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.code = n), (o.originalMessage = r), o;
          }
          return (
            Ic(t, e),
            (t.prototype.toString = function () {
              return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
            }),
            t
          );
        })(Error),
        Cl = (function (e) {
          function t(t, n, r, o) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(n, '". Options are "')
                  .concat(Object.keys(r).join('", "'), '"'),
                Pl.INVALID_VALUE,
                o,
              ) || this
            );
          }
          return Ic(t, e), t;
        })(Ll),
        Rl = (function (e) {
          function t(t, n, r) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(n),
                Pl.INVALID_VALUE,
                r,
              ) || this
            );
          }
          return Ic(t, e), t;
        })(Ll),
        Il = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(n, '"'),
                Pl.MISSING_VALUE,
                n,
              ) || this
            );
          }
          return Ic(t, e), t;
        })(Ll),
        Nl;
      function Bl(e) {
        return e.length < 2
          ? e
          : e.reduce(function (e, t) {
              var n = e[e.length - 1];
              return (
                n && n.type === Nl.literal && t.type === Nl.literal
                  ? (n.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function Hl(e) {
        return 'function' == typeof e;
      }
      function kl(e, t, n, r, o, i, a) {
        if (1 === e.length && cs(e[0])) return [{ type: Nl.literal, value: e[0].value }];
        for (var u = [], c = 0, s = e; c < s.length; c++) {
          var l = s[c];
          if (cs(l)) u.push({ type: Nl.literal, value: l.value });
          else if (vs(l))
            'number' == typeof i &&
              u.push({ type: Nl.literal, value: n.getNumberFormat(t).format(i) });
          else {
            var f = l.value;
            if (!o || !(f in o)) throw new Il(f, a);
            var h = o[f];
            if (ss(l))
              (h && 'string' != typeof h && 'number' != typeof h) ||
                (h = 'string' == typeof h || 'number' == typeof h ? String(h) : ''),
                u.push({ type: 'string' == typeof h ? Nl.literal : Nl.object, value: h });
            else if (fs(l)) {
              var p =
                'string' == typeof l.style
                  ? r.date[l.style]
                  : bs(l.style)
                  ? l.style.parsedOptions
                  : void 0;
              u.push({ type: Nl.literal, value: n.getDateTimeFormat(t, p).format(h) });
            } else if (hs(l)) {
              var p =
                'string' == typeof l.style
                  ? r.time[l.style]
                  : bs(l.style)
                  ? l.style.parsedOptions
                  : r.time.medium;
              u.push({ type: Nl.literal, value: n.getDateTimeFormat(t, p).format(h) });
            } else if (ls(l)) {
              var p;
              (p =
                'string' == typeof l.style
                  ? r.number[l.style]
                  : ys(l.style)
                  ? l.style.parsedOptions
                  : void 0) &&
                p.scale &&
                (h *= p.scale || 1),
                u.push({ type: Nl.literal, value: n.getNumberFormat(t, p).format(h) });
            } else {
              if (ms(l)) {
                var d = l.children,
                  v = l.value,
                  m = o[v];
                if (!Hl(m)) throw new Rl(v, 'function', a);
                var y,
                  b = m(
                    kl(d, t, n, r, o, i).map(function (e) {
                      return e.value;
                    }),
                  );
                Array.isArray(b) || (b = [b]),
                  u.push.apply(
                    u,
                    b.map(function (e) {
                      return { type: 'string' == typeof e ? Nl.literal : Nl.object, value: e };
                    }),
                  );
              }
              if (ps(l)) {
                var g;
                if (!(g = l.options[h] || l.options.other))
                  throw new Cl(l.value, h, Object.keys(l.options), a);
                u.push.apply(u, kl(g.value, t, n, r, o));
              } else if (ds(l)) {
                var g;
                if (!(g = l.options['='.concat(h)])) {
                  if (!Intl.PluralRules)
                    throw new Ll(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      Pl.MISSING_INTL_API,
                      a,
                    );
                  var _ = n.getPluralRules(t, { type: l.pluralType }).select(h - (l.offset || 0));
                  g = l.options[_] || l.options.other;
                }
                if (!g) throw new Cl(l.value, h, Object.keys(l.options), a);
                u.push.apply(u, kl(g.value, t, n, r, o, h - (l.offset || 0)));
              } else;
            }
          }
        }
        return Bl(u);
      }
      function Ml(e, t) {
        return t
          ? Nc(
              Nc(Nc({}, e || {}), t || {}),
              Object.keys(e).reduce(function (n, r) {
                return (n[r] = Nc(Nc({}, e[r]), t[r] || {})), n;
              }, {}),
            )
          : e;
      }
      function Dl(e, t) {
        return t
          ? Object.keys(e).reduce(function (n, r) {
              return (n[r] = Ml(e[r], t[r])), n;
            }, Nc({}, e))
          : e;
      }
      function Ul(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      function Gl(e) {
        return (
          void 0 === e && (e = { number: {}, dateTime: {}, pluralRules: {} }),
          {
            getNumberFormat: yl(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new ((e = Intl.NumberFormat).bind.apply(e, qc([void 0], t, !1)))();
              },
              { cache: Ul(e.number), strategy: Tl.variadic },
            ),
            getDateTimeFormat: yl(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new ((e = Intl.DateTimeFormat).bind.apply(e, qc([void 0], t, !1)))();
              },
              { cache: Ul(e.dateTime), strategy: Tl.variadic },
            ),
            getPluralRules: yl(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new ((e = Intl.PluralRules).bind.apply(e, qc([void 0], t, !1)))();
              },
              { cache: Ul(e.pluralRules), strategy: Tl.variadic },
            ),
          }
        );
      }
      !(function (e) {
        (e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object');
      })(Nl || (Nl = {}));
      var Fl,
        $l = (function () {
          function e(t, n, r, o) {
            void 0 === n && (n = e.defaultLocale);
            var i = this;
            if (
              ((this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
              (this.format = function (e) {
                var t = i.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var n = t.reduce(function (e, t) {
                  return (
                    e.length && t.type === Nl.literal && 'string' == typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return n.length <= 1 ? n[0] || '' : n;
              }),
              (this.formatToParts = function (e) {
                return kl(i.ast, i.locales, i.formatters, i.formats, e, void 0, i.message);
              }),
              (this.resolvedOptions = function () {
                var e;
                return {
                  locale:
                    (null === (e = i.resolvedLocale) || void 0 === e ? void 0 : e.toString()) ||
                    Intl.NumberFormat.supportedLocalesOf(i.locales)[0],
                };
              }),
              (this.getAst = function () {
                return i.ast;
              }),
              (this.locales = n),
              (this.resolvedLocale = e.resolveLocale(n)),
              'string' == typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw new TypeError(
                  'IntlMessageFormat.__parse must be set to process `message` of type `string`',
                );
              this.ast = e.__parse(t, {
                ignoreTag: null == o ? void 0 : o.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw new TypeError('A message must be provided as a String or AST.');
            (this.formats = Dl(e.formats, r)),
              (this.formatters = (o && o.formatters) || Gl(this.formatterCache));
          }
          return (
            Object.defineProperty(e, 'defaultLocale', {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              if (void 0 !== Intl.Locale) {
                var t = Intl.NumberFormat.supportedLocalesOf(e);
                return t.length > 0
                  ? new Intl.Locale(t[0])
                  : new Intl.Locale('string' == typeof e ? e : e[0]);
              }
            }),
            (e.__parse = ml),
            (e.formats = {
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
            e
          );
        })();
      function Vl(e, t, n, r) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = 'zh-CN'),
          void 0 === r && (r = {}),
          r && r[n] && r[n][e] ? new $l(r[n][e], n).format(t) : ''
        );
        var o;
      }
      function Jl(e) {
        return (Jl =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function zl(e) {
        return !ma(e) && 'object' === Jl(e);
      }
      function ql(e) {
        return !ma(e) && '[object Object]' === Object.prototype.toString.call(e);
      }
      function Kl(e) {
        return '$' in e;
      }
      function Xl(e) {
        return !(!e || !zl(e)) && (!!Kl(e) || Object.keys(e).length > 0);
      }
      function Wl() {
        for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        if (
          (n.flat().forEach(function (t) {
            Xl(t) && e.push(t);
          }),
          e.length <= 1)
        )
          return e[0];
        var i = e[0],
          a = e.slice(1);
        return a.reduce(function (e, t) {
          if (Kl(t)) {
            if (Kl(e)) return t;
            var n = e;
            (e = t), (t = n);
          }
          var r = Object.getOwnPropertyDescriptors(t);
          return (e = Object.create(e, r)), Object(o.isProxy)(t) ? Object(o.reactive)(e) : e;
        }, i);
      }
      function Yl(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var Zl = 'JSExpression',
        Ql = 'JSFunction',
        ef = 'JSSlot',
        tf = 'JSBlock',
        nf = 'i18n';
      function rf() {
        try {
          return window.parent !== window && window.parent.location.host === window.location.host;
        } catch (e) {
          return !1;
        }
      }
      function of(e, t) {
        return af({ type: Zl, value: "this.i18n('" + e.key + "')" }, t);
      }
      function af(e, t) {
        try {
          var n = ['"use strict";', 'var __self = arguments[0];'],
            r;
          return (
            n.push('return '),
            (r = (r = (e.value || '').trim()).replace(/this(\W|$)/g, function (e, t) {
              return '__self' + t;
            })),
            (r = n.join('\n') + r),
            rf() && window.parent.__newFunc
              ? window.parent.__newFunc(r)(self)
              : new Function('$scope', 'with($scope || {}) { ' + r + ' }')(t)
          );
        } catch (t) {
          return void console.warn('parseExpression.error', t, e, self);
        }
      }
      function uf(e, t) {
        if (Object(r.isJSExpression)(e) || Object(r.isJSFunction)(e)) return af(e, t);
        if (Object(r.isI18nData)(e)) return of(e, t);
        if ($(e)) return e.trim();
        if (Array.isArray(e))
          return e.map(function (e) {
            return uf(e, t);
          });
        if (H(e)) return e.bind(t);
        if (ql(e)) {
          if (!e) return e;
          var n = {};
          return (
            Object.keys(e).forEach(function (r) {
              r.startsWith('__') || (n[r] = uf(e[r], t));
            }),
            n
          );
        }
        return e;
      }
      function cf(e, t) {
        var n = {};
        return (
          Yl(t).forEach(function (t, r) {
            n[t] = e[r];
          }),
          n
        );
      }
      var sf = Object(o.defineComponent)({
          name: 'Hoc',
          props: u,
          setup: function e(t) {
            var n,
              i = Lc().triggerCompGetCtx,
              a = th(t),
              u = a.node,
              c = a.locked,
              s = a.buildSchema,
              l = a.buildProps,
              f = a.buildSlots,
              h = a.buildLoop,
              p,
              d = (0, a.buildShow)(t.schema),
              v = d.show,
              m = d.hidden,
              y = d.condition,
              b = h(t.schema),
              g = b.loop,
              _ = b.updateLoop,
              O = b.updateLoopArg,
              E = b.buildLoopScope,
              w = Object(o.reactive)({}),
              S = Object(o.reactive)({}),
              j = s(),
              A;
            if ((Object.assign(w, j.props), Object.assign(S, j.slots), u)) {
              var x = [];
              Object(o.onUnmounted)(function () {
                return x.forEach(function (e) {
                  return null == e ? void 0 : e();
                });
              }),
                x.push(
                  u.onChildrenChange(function () {
                    var e = u.export(r.TransformStage.Render);
                    S.default = Yl(e.children);
                  }),
                ),
                x.push(
                  u.onPropChange(function (e) {
                    var t = e.key,
                      n = e.prop,
                      o = e.newValue,
                      i = e.oldValue,
                      a = 1 === n.path.length,
                      s = n.path[0];
                    if (a && t)
                      if ('___isLocked___' === t) c.value = o;
                      else if ('___hidden___' === t) m(o);
                      else if ('___condition___' === t) y(o);
                      else if ('___loop___' === t) _(o);
                      else if ('___loopArgs___' === t) O(o);
                      else if ('children' === t)
                        if (Object(r.isJSSlot)(o)) {
                          var l,
                            f = n.slotNode.export(r.TransformStage.Render);
                          S.default = f;
                        } else ma(o) ? delete S.default : (S.default = Yl(o));
                      else if (Object(r.isJSSlot)(o)) {
                        var h,
                          p = n.slotNode.export(r.TransformStage.Render);
                        S[t] = p;
                      } else ma(o) && Object(r.isJSSlot)(i) ? delete S[t] : (w[t] = o);
                    else '___loopArgs___' === s ? O(o, t) : s && (w[s] = u.getPropValue(s));
                  }),
                );
            }
            return {
              show: v,
              loop: g,
              compSlots: S,
              compProps: w,
              getRef: function e(n) {
                i(t.schema, n);
              },
              buildSlots: f,
              buildProps: l,
              buildLoopScope: E,
            };
          },
          render: function e() {
            var t = this.comp,
              n = this.show,
              r = this.loop,
              i = this.compProps,
              a = this.compSlots,
              u = this.getRef,
              c = this.buildSlots,
              s = this.buildProps,
              l = this.buildLoopScope;
            if (!n) return null;
            if (!t) return Object(o.h)('div', 'component not found');
            if (!r) {
              var f = s(i, null, { ref: u }),
                h = c(a);
              return Object(o.h)(t, f, h);
            }
            return Array.isArray(r)
              ? Object(o.h)(
                  o.Fragment,
                  r.map(function (e, n, r) {
                    var f = l(e, n, r.length),
                      h = s(i, f, { ref: u }),
                      p = c(a, f);
                    return Object(o.h)(t, h, p);
                  }),
                )
              : (console.warn('[vue-renderer]: loop must be array', r), null);
          },
        }),
        lf = Object(o.defineComponent)({
          props: u,
          setup: function e(t) {
            var n = th(t),
              r = n.buildSchema,
              o = n.buildProps,
              i = n.buildLoop,
              a = n.buildSlots,
              u,
              c,
              s = (0, n.buildShow)(t.schema).show,
              l = i(t.schema),
              f = l.loop,
              h = l.loopArgs,
              p = r(),
              d,
              v;
            return {
              show: s,
              loop: f,
              loopArgs: h,
              compProps: p.props,
              compSlots: p.slots,
              buildSlots: a,
              buildProps: o,
            };
          },
          render: function e() {
            var t = this.show,
              n = this.comp,
              r = this.loop,
              i = this.loopArgs,
              a = this.compProps,
              u = this.compSlots,
              c = this.buildProps,
              s = this.buildSlots;
            return t
              ? n
                ? r
                  ? Array.isArray(r)
                    ? Object(o.h)(
                        o.Fragment,
                        r.map(function (e, t) {
                          var r,
                            l = (((r = {})[i[0]] = e), (r[i[1]] = t), r);
                          return Object(o.h)(n, c(a, l), s(u, l));
                        }),
                      )
                    : (console.warn('[vue-renderer]: loop must be array', r), null)
                  : Object(o.h)(n, c(a), s(u))
                : Object(o.h)('div', 'component not found')
              : null;
          },
        }),
        ff = n(15),
        hf = n.n(ff),
        pf = n(5),
        df = n.n(pf),
        vf = n(4),
        mf = n.n(vf),
        yf = '[object Boolean]';
      function bf(e) {
        return !0 === e || !1 === e || (U(e) && T(e) == yf);
      }
      var gf = bf;
      function _f(e) {
        return void 0 === e;
      }
      var Of = _f,
        Ef = n(44),
        wf = n.n(Ef),
        Sf = n(45),
        jf;
      function Af(e) {
        return (Af =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function xf(e) {
        var t = [];
        return (
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            null != r &&
              '' !== r &&
              ('object' === Af(r)
                ? t.push(n + '=' + encodeURIComponent(JSON.stringify(r)))
                : t.push(n + '=' + encodeURIComponent(String(r))));
          }),
          t.join('&')
        );
      }
      function Tf(e, t) {
        if (!t) return e;
        var n = xf(t);
        return n ? (e.indexOf('?') > 0 ? e + '&' + n : e + '?' + n) : e;
      }
      function Pf(e, t) {
        for (var n in e) if (n.toLowerCase() === t) return [e[n], n];
        return [];
      }
      function Lf(e) {
        return ['arrayBuffer', 'blob', 'formData', 'json', 'text'].includes(e);
      }
      function Cf(e) {
        var t = new FormData();
        for (var n in e) {
          var r = e[n];
          r instanceof Blob ? t.append(n, r) : t.append(n, String(r));
        }
        return t;
      }
      var Rf = {
        'application/json': function e(t) {
          return JSON.stringify(t);
        },
        'multipart/form-data': function e(t) {
          return ql(t) ? Cf(t) : t;
        },
        'application/x-www-form-urlencoded': function e(t) {
          return xf(t);
        },
      };
      function If(e, t) {
        var n = Object.keys(Rf).find(function (t) {
          return e.includes(t);
        });
        return n ? Rf[n](t) : t;
      }
      var Nf = (function (e) {
          function t(t, n, r) {
            var o;
            return ((o = e.call(this, t) || this).code = n), (o.data = r), o;
          }
          return wf()(t, e), t;
        })(n.n(Sf)()(Error)),
        Bf = function e(t, n) {
          (this.code = t), (this.data = n);
        },
        Hf;
      function kf(e) {
        return Mf.apply(this, arguments);
      }
      function Mf() {
        return (Mf = df()(
          mf.a.mark(function e(t) {
            var n, r, o, i, a, u, c, s, f, h, p, d, v, m, y, b, g, _, O;
            return mf.a.wrap(
              function e(E) {
                for (;;)
                  switch ((E.prev = E.next)) {
                    case 0:
                      return (
                        (n = t.uri),
                        (r = t.method),
                        (o = t.timeout),
                        (i = t.params),
                        (a = void 0 === i ? {} : i),
                        (u = t.headers),
                        (c = void 0 === u ? {} : u),
                        (s = t.responseType),
                        (f = void 0 === s ? 'json' : s),
                        (p = l()({ Accept: 'application/json' }, c)),
                        (d = { method: r, headers: p }),
                        'GET' === r || 'DELETE' === r || 'OPTIONS' === r
                          ? (h = Tf(n, a))
                          : ((h = n),
                            (v = Pf(p, 'content-type')),
                            (m = v[0]),
                            (y = v[1]),
                            (d.body = If(null != m ? m : 'application/json', a)),
                            'multipart/form-data' === m && y && delete p[y]),
                        o &&
                          ((b = new AbortController()),
                          (d.signal = b.signal),
                          setTimeout(function () {
                            return b.abort();
                          }, o)),
                        (E.next = 7),
                        fetch(h, d)
                      );
                    case 7:
                      if (((g = E.sent), !((_ = g.status) >= 200 && _ < 300))) {
                        E.next = 28;
                        break;
                      }
                      if (204 !== _) {
                        E.next = 18;
                        break;
                      }
                      if ('DELETE' !== r) {
                        E.next = 15;
                        break;
                      }
                      return E.abrupt('return', new Bf(_, null));
                    case 15:
                      throw new Nf(g.statusText, _);
                    case 16:
                      E.next = 26;
                      break;
                    case 18:
                      if (Lf(f)) {
                        E.next = 20;
                        break;
                      }
                      throw new Nf('invalid response type: ' + f, -1);
                    case 20:
                      return (E.t0 = Bf), (E.t1 = _), (E.next = 24), g[f]();
                    case 24:
                      return (E.t2 = E.sent), E.abrupt('return', new E.t0(E.t1, E.t2));
                    case 26:
                      E.next = 39;
                      break;
                    case 28:
                      if (!(_ >= 400)) {
                        E.next = 39;
                        break;
                      }
                      return (E.prev = 29), (E.next = 32), g.json();
                    case 32:
                      throw ((O = E.sent), new Nf(g.statusText, _, O));
                    case 36:
                      throw ((E.prev = 36), (E.t3 = E.catch(29)), new Nf(g.statusText, _));
                    case 39:
                      throw new Nf(g.statusText, _);
                    case 40:
                    case 'end':
                      return E.stop();
                  }
              },
              e,
              null,
              [[29, 36]],
            );
          }),
        )).apply(this, arguments);
      }
      !(function (e) {
        (e.Initial = 'init'), (e.Loading = 'loading'), (e.Loaded = 'loaded'), (e.Error = 'error');
      })(Hf || (Hf = {}));
      var Df = ['headers', 'assignToScope'],
        Uf = ['params', 'headers'],
        Gf = function e(t) {
          return t;
        },
        Ff = function e() {},
        $f = function e() {
          return !0;
        };
      function Vf(e, t, n) {
        var r = Object(o.shallowRef)(),
          i = Object(o.shallowRef)(),
          a = Object(o.ref)(Hf.Initial),
          u = Object(o.computed)(function () {
            return a.value === Hf.Loading;
          }),
          c = Object(o.computed)(function () {
            return !!uf(e.isInit, n);
          }),
          s = e.willFetch,
          f = e.shouldFetch,
          h = e.dataHandler,
          p = e.errorHandler,
          d = {
            willFetch: s ? uf(s, n) : Gf,
            shouldFetch: f ? uf(f, n) : $f,
            dataHandler: h
              ? uf(h, n)
              : function (e) {
                  return e.data;
                },
            errorHandler: p ? uf(p, n) : Ff,
          },
          v = (function () {
            var o = df()(
              mf.a.mark(function o(u, c) {
                var s, f, h, p, v, m, y, b, g, _, O, E, w, S, j;
                return mf.a.wrap(
                  function o(A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          if (
                            (void 0 === c && (c = {}),
                            (A.prev = 1),
                            (s = e.type),
                            (f = e.options),
                            (h = e.id),
                            (v = (p = c).headers),
                            (m = p.assignToScope),
                            (y = void 0 === m || m),
                            (b = hf()(p, Df)),
                            t)
                          ) {
                            A.next = 6;
                            break;
                          }
                          throw new Error('unsupport fetch type: ' + s);
                        case 6:
                          if (
                            (g = H(d.shouldFetch)
                              ? d.shouldFetch()
                              : !gf(d.shouldFetch) || d.shouldFetch)
                          ) {
                            A.next = 10;
                            break;
                          }
                          throw (
                            ((a.value = Hf.Error),
                            new Error(
                              'the ' + h + ' request should not fetch, please check the condition',
                            ))
                          );
                        case 10:
                          return (
                            (_ = uf(null != f ? f : {}, n)),
                            (O = _.params),
                            (E = _.headers),
                            (w = hf()(_, Uf)),
                            (a.value = Hf.Loading),
                            (A.next = 14),
                            t(
                              d.willFetch(
                                l()({}, w, b, {
                                  headers: l()({}, E, v),
                                  params: ql(O) && ql(u) ? l()({}, O, u) : null != u ? u : O,
                                }),
                              ),
                            )
                          );
                        case 14:
                          return (
                            (S = A.sent),
                            (a.value = Hf.Loaded),
                            (j = r.value = d.dataHandler(S)),
                            !Of(r) && y && (n[h] = j),
                            A.abrupt('return', j)
                          );
                        case 21:
                          throw (
                            ((A.prev = 21),
                            (A.t0 = A.catch(1)),
                            (a.value = Hf.Error),
                            (i.value = A.t0),
                            d.errorHandler(A.t0),
                            A.t0)
                          );
                        case 27:
                        case 'end':
                          return A.stop();
                      }
                  },
                  o,
                  null,
                  [[1, 21]],
                );
              }),
            );
            return function e(t, n) {
              return o.apply(this, arguments);
            };
          })();
        return Object(o.reactive)({ data: r, error: i, loading: u, status: a, isInit: c, load: v });
      }
      function Jf(e, t) {
        var n = e.list,
          r = e.dataHandler,
          o = {},
          i = {},
          a;
        return (
          n.forEach(function (e) {
            var n,
              a = Vf(l()({ dataHandler: r }, e), kf, t),
              u = function e(t, n) {
                var r = l()({ assignToScope: !1 }, n);
                return a.load(t, r);
              };
            (o[e.id] = u), (i[e.id] = a);
          }),
          {
            dataSource: o,
            dataSourceMap: i,
            reloadDataSource: function e(t, n, r) {
              if (t) {
                var o = i[t];
                if (!o) throw new Error('dataSource not found, id: ' + t);
                return o.load(n, r);
              }
              var a = Object.keys(i)
                .map(function (e) {
                  return i[e];
                })
                .filter(function (e) {
                  return e.isInit;
                })
                .map(function (e) {
                  return e.load();
                });
              return Promise.all(a);
            },
          }
        );
      }
      var zf = xc(),
        qf = {
          beforeMount: o.onBeforeMount,
          mounted: o.onMounted,
          beforeUpdate: o.onBeforeUpdate,
          updated: o.onUpdated,
          beforeUnmount: o.onBeforeUnmount,
          unmounted: o.onUnmounted,
          errorCaptured: o.onErrorCaptured,
        },
        Kf = {
          componentDidMount: o.onMounted,
          componentDidCatch: o.onErrorCaptured,
          shouldComponentUpdate: o.onBeforeUpdate,
          componentWillUnmount: o.onBeforeUnmount,
        },
        Xf = l()({}, qf, Kf);
      function Wf(e) {
        return e in Xf;
      }
      function Yf(e) {
        return Array.isArray(e)
          ? e.every(function (e) {
              return Yf(e);
            })
          : Object(r.isDOMText)(e) || Object(r.isNodeSchema)(e) || Object(r.isJSExpression)(e);
      }
      function Zf(e) {
        return !!H(e) || !(!zl(e) || (!('render' in e) && !('setup' in e)));
      }
      var Qf = Symbol('IS_LOCKED');
      function eh(e) {
        var t = Object(o.ref)(e),
          n = Object(o.inject)(Qf, null),
          r = Object(o.computed)({
            get: function e() {
              return (null == n ? void 0 : n.value) || t.value;
            },
            set: function e(n) {
              return (t.value = n);
            },
          });
        return Object(o.provide)(Qf, r), r;
      }
      function th(e) {
        var t = Lc(),
          n = t.components,
          i = t.getNode,
          a = t.designMode,
          u = e.schema.id ? i(e.schema.id) : null,
          c = u ? eh(u.isLocked) : Object(o.ref)(!1),
          s = 'design' === a;
        Object(o.provide)(zf, { mode: a, node: u, isDesignerEnv: s });
        var l = function t(i, a, u, c) {
            var s = Wl(e.scope, u);
            if ($(i)) return Object(o.createTextVNode)(i);
            if (Object(r.isJSExpression)(i)) {
              var l = af(i, s);
              return Object(o.createTextVNode)(Object(o.toDisplayString)(l));
            }
            if (!c) {
              var f = i.componentName;
              c = n[f];
            }
            if (!c) return Object(o.h)('div', 'component not found');
            var h = da(c, function (e, t) {
              return !!t.match(/^__[\s\S]+__/);
            });
            return (
              Object.keys(h).length > 0 &&
                (a = Object.create(a, Object.getOwnPropertyDescriptors(h))),
              Object(o.h)(a, { key: i.id, comp: c, scope: s, schema: i })
            );
          },
          f,
          h,
          p = s
            ? function e(t, n, r) {
                return l(t, sf, n, r);
              }
            : function e(t, n, r) {
                return l(t, lf, n, r);
              },
          d = function t() {
            var n,
              o = u ? u.export(r.TransformStage.Render) : e.schema,
              i = {},
              a = {};
            return (
              (i.default = Yl(o.children)),
              Object.entries(null !== (n = o.props) && void 0 !== n ? n : {}).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                if (Object(r.isJSSlot)(n)) {
                  var o = null == u ? void 0 : u.getProp(t);
                  if (o && o.slotNode) {
                    var c = o.slotNode.export(r.TransformStage.Render);
                    i[t] = c;
                  } else
                    n.value &&
                      (i[t] = { componentName: 'Slot', params: n.params, children: n.value });
                } else 'className' === t ? (a.class = n) : 'children' === t && Yf(n) ? (i.default = Yl(n)) : (a[t] = n);
              }),
              { props: a, slots: i }
            );
          },
          v = function e(t, n, o, i) {
            if (Object(r.isJSExpression)(t) || Object(r.isJSFunction)(t)) return af(t, n);
            if (Object(r.isJSSlot)(t)) {
              var a, u, c, s;
              if (null != i && i.slotNode)
                (u = i.slotNode.export(r.TransformStage.Render)),
                  (a = null !== (c = u.params) && void 0 !== c ? c : []);
              else (u = Yl(t.value)), (a = null !== (s = t.params) && void 0 !== s ? s : []);
              return function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                var r = cf(t, a),
                  i = [];
                return (
                  Yl(u).forEach(function (e) {
                    var t = p(e, [o, r]);
                    t && i.push(t);
                  }),
                  i
                );
              };
            }
            if (Array.isArray(t))
              return t.map(function (t, r) {
                return e(t, n, o, null == i ? void 0 : i.get(r));
              });
            if (t && zl(t)) {
              var l = {};
              return (
                Object.keys(t).forEach(function (r) {
                  if (!r.startsWith('__')) {
                    var a = t[r],
                      u = null == i ? void 0 : i.get(r);
                    l[r] = e(a, n, o, u);
                  }
                }),
                l
              );
            }
            return t;
          },
          m = function e(t, n, r, i) {
            if ($(t)) {
              var a = t,
                u = null;
              return function (e) {
                var t = n.$.refs;
                if ((0 === Object.keys(t).length && (t = n.$.refs = {}), ma(n.__loopRefIndex)))
                  (t[a] = e), a in n && (n[a] = e);
                else {
                  var r = t[a];
                  if (Array.isArray(r)) {
                    if (a in n) {
                      var i = n[a];
                      r = Array.isArray(i) && Object(o.toRaw)(i) === r ? i : (n[a] = r);
                    }
                  } else (r = t[a] = []), a in n && (r = n[a] = r);
                  if (ma(e)) {
                    var c = r.indexOf(u);
                    c >= 0 && r.splice(c, 1);
                  } else r[n.__loopRefIndex] = e;
                }
                u = e;
              };
            }
            var c = v(t, n, r, i);
            return $(c) ? e(c, n, r, i) : c;
          },
          y = function e(t, n, o) {
            if (n.startsWith('v-model')) {
              var i,
                a = n.match(/v-model(?::(\w+))?$/);
              if (!a) return t;
              var u = Ac(null !== (i = a[1]) && void 0 !== i ? i : 'modelValue'),
                c = 'onUpdate:' + u;
              if (Object(r.isJSExpression)(o)) {
                var s = {
                  type: 'JSFunction',
                  value: 'function ($event) {' + o.value + ' = $event}',
                };
                t[c] = c in t ? Yl(t[c]).concat(s) : s;
              }
              t[u] = o;
            } else if (n.startsWith('v-') && Object(r.isJSExpression)(o));
            else if (n.match(/^on[A-Z]/) && Object(r.isJSFunction)(o)) {
              var l = n.match(/onUpdate(?::?(\w+))$/);
              l && (n = 'onUpdate:' + Ac(l[1])), (t[n] = n in t ? Yl(t[n]).concat(o) : o);
            } else if ('ref' === n && 'ref' in t) {
              var f = o,
                h = t.ref;
              H(h) && H(f)
                ? (t.ref = function () {
                    f.apply(void 0, arguments), h.apply(void 0, arguments);
                  })
                : (t.ref = [h, f].filter(H).pop());
            } else t[n] = o;
          },
          b = function t(n, r, o) {
            var i = {};
            Object.keys(n).forEach(function (e) {
              y(i, e, n[e]);
            });
            var a = {},
              c = r ? Wl(e.scope, r) : e.scope;
            return (
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                a[e] =
                  'ref' === e
                    ? m(t, c, r, null == u ? void 0 : u.getProp(e))
                    : v(t, c, r, null == u ? void 0 : u.getProp(e));
              }),
              o &&
                Object.keys(o).forEach(function (e) {
                  y(a, e, o[e]);
                }),
              a
            );
          },
          g,
          _,
          O = function e(t) {
            return function () {
              var e = t.apply(void 0, arguments);
              if (!e.length) {
                var n = c.value,
                  r = { 'lc-container-locked': n, 'lc-container-placeholder': !0 },
                  i = n
                    ? '\u9501\u5b9a\u5143\u7d20\u53ca\u5b50\u5143\u7d20\u65e0\u6cd5\u7f16\u8f91'
                    : '\u62d6\u62fd\u7ec4\u4ef6\u6216\u6a21\u677f\u5230\u8fd9\u91cc';
                e.push(Object(o.h)('div', { class: r }, i));
              }
              return e;
            };
          },
          E = function e(t, n) {
            return Object.keys(t).reduce(function (e, r) {
              var o = t[r],
                i = 'default' === r,
                a;
              return ma(o)
                ? e
                : !i || (null != u && u.isContainer()) || !Array.isArray(o) || 0 !== o.length
                ? ((a = Array.isArray(o)
                    ? function e() {
                        return o
                          .map(function (e) {
                            return p(e, n);
                          })
                          .filter(function (e) {
                            return !ma(e);
                          });
                      }
                    : o.id
                    ? function e() {
                        for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                          i[a] = arguments[a];
                        var u = p(o, [n, cf(i, null !== (t = o.params) && void 0 !== t ? t : [])]);
                        return ma(u) ? [] : [u];
                      }
                    : function e() {
                        for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                          i[a] = arguments[a];
                        var u = cf(i, null !== (t = o.params) && void 0 !== t ? t : []);
                        return Yl(o.children)
                          .map(function (e) {
                            return p(e, [n, u]);
                          })
                          .filter(function (e) {
                            return !ma(e);
                          });
                      }),
                  (e[r] = i && s && null != u && u.isContainer() ? O(a) : a),
                  e)
                : e;
            }, {});
          };
        return {
          node: u,
          locked: c,
          buildShow: function t(n) {
            var r,
              i,
              a = s
                ? Object(o.ref)(null !== (r = n.hidden) && void 0 !== r && r)
                : Object(o.ref)(!1),
              u = Object(o.ref)(null === (i = n.condition) || void 0 === i || i),
              c;
            return {
              show: Object(o.computed)(function () {
                if (a.value) return !1;
                var t = u.value;
                return 'boolean' == typeof t ? t : !!uf(t, e.scope);
              }),
              hidden: function e(t) {
                a.value = t;
              },
              condition: function e(t) {
                u.value = t;
              },
            };
          },
          renderComp: p,
          buildLoop: function t(n) {
            var r = Object(o.ref)(),
              i = Object(o.ref)(['item', 'index']);
            return (
              n.loop && (r.value = n.loop),
              n.loopArgs &&
                n.loopArgs.forEach(function (e, t) {
                  i.value[t] = e;
                }),
              {
                loop: Object(o.computed)(function () {
                  return r.value ? uf(r.value, e.scope) : null;
                }),
                loopArgs: i,
                updateLoop: function e(t) {
                  r.value = t;
                },
                updateLoopArg: function e(t, n) {
                  Array.isArray(t)
                    ? t.forEach(function (e, t) {
                        i.value[t] = e;
                      })
                    : ma(n) || (i.value[n] = t);
                },
                buildLoopScope: function t(n, r, o) {
                  var a,
                    u,
                    c,
                    s = null !== (a = e.scope.__loopRefOffset) && void 0 !== a ? a : 0,
                    l = i.value,
                    f = l[0],
                    h = l[1];
                  return (
                    ((u = {})[f] = n),
                    (u[h] = r),
                    (u.__loopScope = !0),
                    (u.__loopRefIndex = s + r),
                    (u.__loopRefOffset = o * r),
                    u
                  );
                },
              }
            );
          },
          buildProps: b,
          buildSlots: E,
          buildSchema: d,
        };
      }
      function nh(e) {
        var t,
          n = rh(e).scope,
          r = Object(o.reactive)({
            comp: null,
            scope: n,
            schema: Object(o.computed)(function () {
              return e.__schema;
            }),
          }),
          i = Pc(),
          a = Object(o.computed)(function () {
            return e.__designMode;
          }),
          u = Object(o.computed)(function () {
            return e.__components;
          });
        return (
          Object(o.provide)(
            i,
            Object(o.reactive)({
              designMode: a,
              components: u,
              getNode: function t(n) {
                var r, o;
                return null !==
                  (r = null === (o = e.__getNode) || void 0 === o ? void 0 : o.call(e, n)) &&
                  void 0 !== r
                  ? r
                  : null;
              },
              triggerCompGetCtx: Object(o.computed)(function () {
                return e.__triggerCompGetCtx;
              }),
            }),
          ),
          l()({ scope: n, designModeRef: a, componentsRef: u }, th(r))
        );
      }
      function rh(e) {
        var t,
          n,
          r,
          i,
          a = e.__schema,
          u = e.__scope,
          c = null != a ? a : {},
          s = c.props,
          l = c.state,
          f = c.methods,
          h = c.lifeCycles,
          p = Object(o.getCurrentInstance)(),
          d = p.proxy,
          v = (p.data = Object(o.reactive)({})),
          m = null !== (t = uf(s)) && void 0 !== t ? t : {};
        Object.assign(p.props, m);
        var y = null !== (n = uf(l)) && void 0 !== n ? n : {};
        Object.assign(v, y);
        var b = null !== (r = uf(f, d)) && void 0 !== r ? r : {};
        Object.assign(d, b);
        var g = uf(h, d);
        zl(g) &&
          Object.keys(g).forEach(function (e) {
            if (Wf(e)) {
              var t = g[e],
                n = Xf[e];
              H(t) && n(t, p);
            }
          });
        var _ = null;
        if ((a.id && (_ = document.querySelector('style[data-id="' + a.id + '"]')), a.css)) {
          var O;
          if (!_)
            (_ = document.createElement('style')),
              a.id && _.setAttribute('data-id', a.id),
              (document.head || document.getElementsByTagName('head')[0]).appendChild(_);
          _.innerHTML !== a.css && (_.innerHTML = a.css);
        } else if (_) {
          var E;
          null === (E = _.parentElement) || void 0 === E || E.removeChild(_);
        }
        var w = function e(t) {
            Object.keys(t).forEach(function (e) {
              var n = t[e],
                r = Object(o.isRef)(n) ? v : d;
              Reflect.set(r, e, n);
            });
          },
          S,
          j;
        u && w(u),
          w({
            i18n: function t(n, r) {
              var o, i;
              return Vl(n, r, e.__locale, e.__messages);
            },
            currentLocale: Object(o.computed)(function () {
              return e.__locale;
            }),
          });
        var A = Jf(
            null !== (i = a.dataSource) && void 0 !== i ? i : { list: [], dataHandler: void 0 },
            d,
          ),
          x = A.dataSource,
          T = A.dataSourceMap,
          P = A.reloadDataSource;
        return (
          w({ dataSource: x, dataSourceMap: T, reloadDataSource: P }),
          P(),
          { scope: d, addToScope: w }
        );
      }
      var oh = Object(o.defineComponent)(function (e, t) {
          var n = t.slots;
          return function () {
            return Object(o.h)('div', l()({ class: 'lc-page' }, e), n);
          };
        }),
        ih,
        ah = {
          PageRenderer: Object(o.defineComponent)({
            props: i,
            __renderer__: !0,
            setup: function e(t) {
              var n = nh(t),
                r = n.renderComp,
                o = n.componentsRef;
              return function () {
                var e = t.__schema,
                  n = o.value;
                return r(e, null, n.Page || oh);
              };
            },
          }),
        },
        uh,
        ch = new ((function () {
          function e() {
            (this.renderers = l()({}, ah)), (this.configProvider = null);
          }
          var t = e.prototype;
          return (
            (t.setConfigProvider = function e(t) {
              this.configProvider = t;
            }),
            (t.getConfigProvider = function e() {
              return this.configProvider;
            }),
            (t.setRenderers = function e(t) {
              this.renderers = t;
            }),
            (t.getRenderers = function e() {
              return this.renderers;
            }),
            e
          );
        })())(),
        sh = Object(o.defineComponent)({
          props: {
            scope: { type: Object, default: void 0 },
            schema: { type: Object, required: !0 },
            components: { type: Object, required: !0 },
            designMode: { type: String, default: 'live' },
            device: { type: String, default: void 0 },
            locale: { type: String, default: void 0 },
            messages: {
              type: Object,
              default: function e() {
                return {};
              },
            },
            getNode: { type: Function, default: void 0 },
            onCompGetCtx: { type: Function, default: void 0 },
          },
          setup: function e(t) {
            var n = function e(n, r) {
                var o;
                r && (null === (o = t.onCompGetCtx) || void 0 === o || o.call(t, n, r));
              },
              r = function e(n) {
                var r, o;
                return null !==
                  (r = null === (o = t.getNode) || void 0 === o ? void 0 : o.call(t, n)) &&
                  void 0 !== r
                  ? r
                  : null;
              },
              i = Object(o.computed)(function () {
                return l()({}, ch.getRenderers(), t.components);
              }),
              a = function e() {
                var a = i.value,
                  u = t.schema,
                  c = t.scope,
                  s = t.locale,
                  l = t.messages,
                  f = t.designMode;
                if (!u) return null;
                var h,
                  p = u.componentName,
                  d = a[p] || a[p + 'Renderer'];
                return (
                  d && !d.__renderer__ && (d = ah[p + 'Renderer']),
                  d
                    ? Object(o.h)(d, {
                        key: u.__ctx ? u.__ctx.lceKey + '_' + (u.__ctx.idx || '0') : u.id,
                        __scope: c,
                        __schema: u,
                        __locale: s,
                        __messages: l,
                        __components: a,
                        __designMode: f,
                        __getNode: r,
                        __triggerCompGetCtx: n,
                      })
                    : null
                );
              };
            return function () {
              var e = t.device,
                n = t.locale,
                r = ch.getConfigProvider();
              return r ? Object(o.h)(r, { device: e, locale: n }, { default: a }) : a();
            };
          },
        });
      function lh(e) {
        return (lh =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function fh(e) {
        return null != e;
      }
      function hh(e) {
        return !fh(e) && 'object' === lh(e);
      }
      function ph(e) {
        return 'function' == typeof e;
      }
      function dh(e) {
        return hh(e) && !!e.__esModule;
      }
      function vh(e) {
        return /\.css$/.test(e);
      }
      function mh(e) {
        return hh(e) && e.nodeType === Node.ELEMENT_NODE;
      }
      function yh(e) {
        return !!ph(e) || !(!hh(e) || (!('render' in e) && !('setup' in e)));
      }
      function bh(e) {
        return hh(e) && 'Component' === e.componentName;
      }
      function gh(e) {
        return 'string' != typeof e ? e : window[e] || _h(e);
      }
      function _h(e) {
        if (['a', 'img', 'div', 'span', 'svg'].includes(e))
          return Object(o.defineComponent)(function (t, n) {
            var r = n.attrs,
              i = n.slots;
            return function () {
              return Object(o.h)(e, r, i);
            };
          });
      }
      function Oh(e, t) {
        var n = t.length;
        if (n < 1 || !e) return e;
        for (var r = 0, o; r < n; ) {
          var i = t[r],
            a = void 0;
          try {
            o = e[i];
          } catch (e) {
            (a = e), (o = null);
          }
          if (0 === r && null == o && 'default' === i) {
            if (a) return 1 === n ? e : null;
            o = e;
          } else if (null == o) return null;
          (e = o), r++;
        }
        return o;
      }
      function Eh(e, t, n) {
        if (!n) return gh(t);
        var r = n.exportName || n.componentName || t,
          o,
          i = gh(e[n.package] || r),
          a = n.exportName && n.subName ? n.subName.split('.') : [];
        return n.destructuring ? a.unshift(r) : dh(i) && a.unshift('default'), Oh(i, a);
      }
      function wh(e, t, n) {
        var r = {};
        return (
          Object.keys(t).forEach(function (o) {
            var i = t[o];
            bh(i) ? n && (r[o] = n(i)) : (yh(i) || (i = Eh(e, o, i))) && (r[o] = i);
          }),
          r
        );
      }
      function Sh() {
        var e = {},
          t = new Promise(function (t, n) {
            (e.resolve = t), (e.reject = n);
          });
        return (
          (e.promise = function () {
            return t;
          }),
          e
        );
      }
      function jh(e) {
        var t = document.createElement('script');
        (t.text = e), document.head.appendChild(t), document.head.removeChild(t);
      }
      function Ah(e) {
        var t = document.createElement('script');
        (t.onload = r), (t.onerror = r);
        var n = Sh();
        function r(e) {
          (t.onload = null), (t.onerror = null), 'load' === e.type ? n.resolve() : n.reject();
        }
        return (t.src = e), (t.async = !1), document.head.appendChild(t), n.promise();
      }
      function xh(e) {
        return new Function(e)();
      }
      function Th(e, t) {
        try {
          return new Function(e, t);
        } catch (e) {
          return console.warn('Caught error, Cant init func'), null;
        }
      }
      function Ph(e, t) {
        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (n) return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = Lh(e)) || (t && e && 'number' == typeof e.length)) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function Lh(e, t) {
        if (e) {
          if ('string' == typeof e) return Ch(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ch(e, t)
              : void 0
          );
        }
      }
      function Ch(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Rh(e) {
        return e && e.type;
      }
      function Ih(e) {
        return e && e.type === r.AssetType.Bundle;
      }
      function Nh(e, t, n, r) {
        return t ? { type: e, content: t, level: n, id: r } : null;
      }
      function Bh(e, t, n, r) {
        for (var o = Ph(n), i; !(i = o()).done; ) {
          var a;
          Hh(e, t, i.value, r);
        }
      }
      function Hh(e, t, n, o) {
        if (n) {
          if (Array.isArray(n)) return Bh(e, t, n, o);
          if (Ih(n))
            return n.assets
              ? void (Array.isArray(n.assets)
                  ? Bh(e, t, n.assets, n.level || o)
                  : Hh(e, t, n.assets, n.level || o))
              : void 0;
          Rh(n) || (n = Nh(vh(n) ? r.AssetType.CSSUrl : r.AssetType.JSUrl, n, o));
          var i = n.level || o;
          (i && null != r.AssetLevel[i]) || (i = r.AssetLevel.App),
            (n.level = i),
            n.type === r.AssetType.CSSUrl || n.type == r.AssetType.CSSText
              ? t[i].push(n)
              : e[i].push(n);
        }
      }
      var kh = (function () {
          function e(e, t) {
            var n;
            if (
              ((this.lastContent = void 0),
              (this.lastUrl = void 0),
              (this.placeholder = void 0),
              (this.id = void 0),
              (this.level = void 0),
              (this.level = e),
              t && (this.id = t),
              t && (n = document.head.querySelector('style[data-id="' + t + '"]')),
              !n)
            ) {
              n = document.createTextNode('');
              var r = document.head.querySelector('meta[level="' + e + '"]');
              r ? document.head.insertBefore(n, r) : document.head.appendChild(n);
            }
            this.placeholder = n;
          }
          var t = e.prototype;
          return (
            (t.applyText = function e(t) {
              if (this.lastContent !== t) {
                (this.lastContent = t), (this.lastUrl = void 0);
                var n = document.createElement('style');
                n.setAttribute('type', 'text/css'),
                  this.id && n.setAttribute('data-id', this.id),
                  n.appendChild(document.createTextNode(t)),
                  document.head.insertBefore(
                    n,
                    this.placeholder.parentNode === document.head
                      ? this.placeholder.nextSibling
                      : null,
                  ),
                  document.head.removeChild(this.placeholder),
                  (this.placeholder = n);
              }
            }),
            (t.applyUrl = function e(t) {
              if (this.lastUrl !== t) {
                (this.lastContent = void 0), (this.lastUrl = t);
                var n = document.createElement('link');
                (n.onload = o), (n.onerror = o);
                var r = Sh();
                return (
                  (n.href = t),
                  (n.rel = 'stylesheet'),
                  this.id && n.setAttribute('data-id', this.id),
                  document.head.insertBefore(
                    n,
                    this.placeholder.parentNode === document.head
                      ? this.placeholder.nextSibling
                      : null,
                  ),
                  document.head.removeChild(this.placeholder),
                  (this.placeholder = n),
                  r.promise()
                );
              }
              function o(e) {
                (n.onload = null), (n.onerror = null), 'load' === e.type ? r.resolve() : r.reject();
              }
            }),
            e
          );
        })(),
        Mh = (function () {
          function e() {
            this.stylePoints = new Map();
          }
          var t = e.prototype;
          return (
            (t.load = (function () {
              var e = df()(
                mf.a.mark(function e(t) {
                  var n = this,
                    o,
                    i,
                    a,
                    u;
                  return mf.a.wrap(function e(c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (o = {}),
                            (i = {}),
                            r.AssetLevels.forEach(function (e) {
                              (o[e] = []), (i[e] = []);
                            }),
                            Hh(i, o, t),
                            (a = o[r.AssetLevel.Environment].concat(
                              o[r.AssetLevel.Library],
                              o[r.AssetLevel.Theme],
                              o[r.AssetLevel.Runtime],
                              o[r.AssetLevel.App],
                            )),
                            (u = i[r.AssetLevel.Environment].concat(
                              i[r.AssetLevel.Library],
                              i[r.AssetLevel.Theme],
                              i[r.AssetLevel.Runtime],
                              i[r.AssetLevel.App],
                            )),
                            (c.next = 8),
                            Promise.all(
                              a.map(function (e) {
                                var t = e.content,
                                  o = e.level,
                                  i = e.type,
                                  a = e.id;
                                return n.loadStyle(t, o, i === r.AssetType.CSSUrl, a);
                              }),
                            )
                          );
                        case 8:
                          return (
                            (c.next = 10),
                            Promise.all(
                              u.map(function (e) {
                                var t = e.content,
                                  o = e.type;
                                return n.loadScript(t, o === r.AssetType.JSUrl);
                              }),
                            )
                          );
                        case 10:
                        case 'end':
                          return c.stop();
                      }
                  }, e);
                }),
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })()),
            (t.loadStyle = function e(t, n, r, o) {
              var i;
              if (t)
                return (
                  o
                    ? (i = this.stylePoints.get(o)) ||
                      ((i = new kh(n, o)), this.stylePoints.set(o, i))
                    : (i = new kh(n)),
                  r ? i.applyUrl(t) : i.applyText(t)
                );
            }),
            (t.loadScript = function e(t, n) {
              if (t) return n ? Ah(t) : jh(t);
            }),
            (t.loadAsyncLibrary = (function () {
              var e = df()(
                mf.a.mark(function e(t) {
                  var n, r, o;
                  return mf.a.wrap(function e(i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          for (o in ((n = []), (r = []), t))
                            t[o].async && (n.push(window[t[o].library]), r.push(t[o].library));
                          return (
                            (i.next = 5),
                            Promise.all(n).then(function (e) {
                              e.length > 0 &&
                                e.map(function (e, t) {
                                  return (window[r[t]] = e), e;
                                });
                            })
                          );
                        case 5:
                        case 'end':
                          return i.stop();
                      }
                  }, e);
                }),
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })()),
            e
          );
        })();
      function Dh(e, t) {
        e.onSimulatorHostReady(function (e) {
          e.set('environment', [
            Nh(
              r.AssetType.JSText,
              'window.__is_simulator_env__=true;window.__VUE_DEVTOOLS_GLOBAL_HOOK__=window.parent.__VUE_DEVTOOLS_GLOBAL_HOOK__;',
            ),
            Nh(r.AssetType.JSUrl, t, void 0, 'vue'),
          ]);
        });
      }
      var Uh = n(11);
      const Gh = 'devtools-plugin:setup',
        Fh = 'plugin:settings:set';
      var $h = n(9);
      class Vh {
        constructor(e, t) {
          (this.target = null),
            (this.targetQueue = []),
            (this.onQueue = []),
            (this.plugin = e),
            (this.hook = t);
          const n = {};
          if (e.settings)
            for (const t in e.settings) {
              const r = e.settings[t];
              n[t] = r.defaultValue;
            }
          const r = '__vue-devtools-plugin-settings__' + e.id;
          let o = Object.assign({}, n);
          try {
            const e = localStorage.getItem(r),
              t = JSON.parse(e);
            Object.assign(o, t);
          } catch (e) {}
          (this.fallbacks = {
            getSettings: () => o,
            setSettings(e) {
              try {
                localStorage.setItem(r, JSON.stringify(e));
              } catch (e) {}
              o = e;
            },
            now: () => Object($h.a)(),
          }),
            t &&
              t.on('plugin:settings:set', (e, t) => {
                e === this.plugin.id && this.fallbacks.setSettings(t);
              }),
            (this.proxiedOn = new Proxy(
              {},
              {
                get: (e, t) =>
                  this.target
                    ? this.target.on[t]
                    : (...e) => {
                        this.onQueue.push({ method: t, args: e });
                      },
              },
            )),
            (this.proxiedTarget = new Proxy(
              {},
              {
                get: (e, t) =>
                  this.target
                    ? this.target[t]
                    : 'on' === t
                    ? this.proxiedOn
                    : Object.keys(this.fallbacks).includes(t)
                    ? (...e) => (
                        this.targetQueue.push({ method: t, args: e, resolve: () => {} }),
                        this.fallbacks[t](...e)
                      )
                    : (...e) =>
                        new Promise((n) => {
                          this.targetQueue.push({ method: t, args: e, resolve: n });
                        }),
              },
            ));
        }
        async setRealTarget(e) {
          this.target = e;
          for (const e of this.onQueue) this.target.on[e.method](...e.args);
          for (const e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
        }
      }
      function Jh(e, t) {
        const n = e,
          r = Object(Uh.b)(),
          o = Object(Uh.a)(),
          i = Uh.c && n.enableEarlyProxy;
        if (!o || (!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ && i)) {
          const e = i ? new Vh(n, o) : null,
            a = undefined;
          (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: n,
            setupFn: t,
            proxy: e,
          }),
            e && t(e.proxiedTarget);
        } else o.emit(Gh, e, t);
      }
      /*!
       * vue-router v4.1.5
       * (c) 2022 Eduardo San Martin Morote
       * @license MIT
       */ const zh = 'undefined' != typeof window;
      function qh(e) {
        return e.__esModule || 'Module' === e[Symbol.toStringTag];
      }
      const Kh = Object.assign;
      function Xh(e, t) {
        const n = {};
        for (const r in t) {
          const o = t[r];
          n[r] = Yh(o) ? o.map(e) : e(o);
        }
        return n;
      }
      const Wh = () => {},
        Yh = Array.isArray;
      function Zh(e) {
        const t = Array.from(arguments).slice(1);
        console.warn.apply(console, ['[Vue Router warn]: ' + e].concat(t));
      }
      const Qh = /\/$/,
        ep = (e) => e.replace(Qh, '');
      function tp(e, t, n = '/') {
        let r,
          o = {},
          i = '',
          a = '';
        const u = t.indexOf('#');
        let c = t.indexOf('?');
        return (
          u < c && u >= 0 && (c = -1),
          c > -1 && ((r = t.slice(0, c)), (i = t.slice(c + 1, u > -1 ? u : t.length)), (o = e(i))),
          u > -1 && ((r = r || t.slice(0, u)), (a = t.slice(u, t.length))),
          (r = sp(null != r ? r : t, n)),
          { fullPath: r + (i && '?') + i + a, path: r, query: o, hash: a }
        );
      }
      function np(e, t) {
        const n = t.query ? e(t.query) : '';
        return t.path + (n && '?') + n + (t.hash || '');
      }
      function rp(e, t) {
        return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || '/' : e;
      }
      function op(e, t, n) {
        const r = t.matched.length - 1,
          o = n.matched.length - 1;
        return (
          r > -1 &&
          r === o &&
          ip(t.matched[r], n.matched[o]) &&
          ap(t.params, n.params) &&
          e(t.query) === e(n.query) &&
          t.hash === n.hash
        );
      }
      function ip(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t);
      }
      function ap(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const n in e) if (!up(e[n], t[n])) return !1;
        return !0;
      }
      function up(e, t) {
        return Yh(e) ? cp(e, t) : Yh(t) ? cp(t, e) : e === t;
      }
      function cp(e, t) {
        return Yh(t)
          ? e.length === t.length && e.every((e, n) => e === t[n])
          : 1 === e.length && e[0] === t;
      }
      function sp(e, t) {
        if (e.startsWith('/')) return e;
        if (!e) return t;
        const n = t.split('/'),
          r = e.split('/');
        let o = n.length - 1,
          i,
          a;
        for (i = 0; i < r.length; i++)
          if (((a = r[i]), '.' !== a)) {
            if ('..' !== a) break;
            o > 1 && o--;
          }
        return n.slice(0, o).join('/') + '/' + r.slice(i - (i === r.length ? 1 : 0)).join('/');
      }
      var lp, fp;
      !(function (e) {
        (e.pop = 'pop'), (e.push = 'push');
      })(lp || (lp = {})),
        (function (e) {
          (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
        })(fp || (fp = {}));
      const hp = '';
      function pp(e) {
        if (!e)
          if (zh) {
            const t = document.querySelector('base');
            e = (e = (t && t.getAttribute('href')) || '/').replace(/^\w+:\/\/[^\/]+/, '');
          } else e = '/';
        return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), ep(e);
      }
      const dp = /^[^#]+#/;
      function vp(e, t) {
        return e.replace(dp, '#') + t;
      }
      function mp(e, t) {
        const n = document.documentElement.getBoundingClientRect(),
          r = e.getBoundingClientRect();
        return {
          behavior: t.behavior,
          left: r.left - n.left - (t.left || 0),
          top: r.top - n.top - (t.top || 0),
        };
      }
      const yp = () => ({ left: window.pageXOffset, top: window.pageYOffset });
      function bp(e) {
        let t;
        if ('el' in e) {
          const n = e.el,
            r = 'string' == typeof n && n.startsWith('#');
          0;
          const o =
            'string' == typeof n
              ? r
                ? document.getElementById(n.slice(1))
                : document.querySelector(n)
              : n;
          if (!o) return;
          t = mp(o, e);
        } else t = e;
        'scrollBehavior' in document.documentElement.style
          ? window.scrollTo(t)
          : window.scrollTo(
              null != t.left ? t.left : window.pageXOffset,
              null != t.top ? t.top : window.pageYOffset,
            );
      }
      function gp(e, t) {
        const n = undefined;
        return (history.state ? history.state.position - t : -1) + e;
      }
      const _p = new Map();
      function Op(e, t) {
        _p.set(e, t);
      }
      function Ep(e) {
        const t = _p.get(e);
        return _p.delete(e), t;
      }
      let wp = () => location.protocol + '//' + location.host;
      function Sp(e, t) {
        const { pathname: n, search: r, hash: o } = t,
          i = e.indexOf('#');
        if (i > -1) {
          let t = o.includes(e.slice(i)) ? e.slice(i).length : 1,
            n = o.slice(t);
          return '/' !== n[0] && (n = '/' + n), rp(n, '');
        }
        const a = undefined;
        return rp(n, e) + r + o;
      }
      function jp(e, t, n, r) {
        let o = [],
          i = [],
          a = null;
        const u = ({ state: i }) => {
          const u = Sp(e, location),
            c = n.value,
            s = t.value;
          let l = 0;
          if (i) {
            if (((n.value = u), (t.value = i), a && a === c)) return void (a = null);
            l = s ? i.position - s.position : 0;
          } else r(u);
          o.forEach((e) => {
            e(n.value, c, {
              delta: l,
              type: lp.pop,
              direction: l ? (l > 0 ? fp.forward : fp.back) : fp.unknown,
            });
          });
        };
        function c() {
          a = n.value;
        }
        function s(e) {
          o.push(e);
          const t = () => {
            const t = o.indexOf(e);
            t > -1 && o.splice(t, 1);
          };
          return i.push(t), t;
        }
        function l() {
          const { history: e } = window;
          e.state && e.replaceState(Kh({}, e.state, { scroll: yp() }), '');
        }
        function f() {
          for (const e of i) e();
          (i = []),
            window.removeEventListener('popstate', u),
            window.removeEventListener('beforeunload', l);
        }
        return (
          window.addEventListener('popstate', u),
          window.addEventListener('beforeunload', l),
          { pauseListeners: c, listen: s, destroy: f }
        );
      }
      function Ap(e, t, n, r = !1, o = !1) {
        return {
          back: e,
          current: t,
          forward: n,
          replaced: r,
          position: window.history.length,
          scroll: o ? yp() : null,
        };
      }
      function xp(e) {
        const { history: t, location: n } = window,
          r = { value: Sp(e, n) },
          o = { value: t.state };
        function i(r, i, a) {
          const u = e.indexOf('#'),
            c =
              u > -1
                ? (n.host && document.querySelector('base') ? e : e.slice(u)) + r
                : wp() + e + r;
          try {
            t[a ? 'replaceState' : 'pushState'](i, '', c), (o.value = i);
          } catch (e) {
            console.error(e), n[a ? 'replace' : 'assign'](c);
          }
        }
        function a(e, n) {
          const a = undefined;
          i(
            e,
            Kh({}, t.state, Ap(o.value.back, e, o.value.forward, !0), n, {
              position: o.value.position,
            }),
            !0,
          ),
            (r.value = e);
        }
        function u(e, n) {
          const a = Kh({}, o.value, t.state, { forward: e, scroll: yp() });
          i(a.current, a, !0);
          const u = undefined;
          i(e, Kh({}, Ap(r.value, e, null), { position: a.position + 1 }, n), !1), (r.value = e);
        }
        return (
          o.value ||
            i(
              r.value,
              {
                back: null,
                current: r.value,
                forward: null,
                position: t.length - 1,
                replaced: !0,
                scroll: null,
              },
              !0,
            ),
          { location: r, state: o, push: u, replace: a }
        );
      }
      function Tp(e) {
        const t = xp((e = pp(e))),
          n = jp(e, t.state, t.location, t.replace);
        function r(e, t = !0) {
          t || n.pauseListeners(), history.go(e);
        }
        const o = Kh({ location: '', base: e, go: r, createHref: vp.bind(null, e) }, t, n);
        return (
          Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
          Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
          o
        );
      }
      function Pp(e = '') {
        let t = [],
          n = [''],
          r = 0;
        function o(e) {
          r++, r === n.length || n.splice(r), n.push(e);
        }
        function i(e, n, { direction: r, delta: o }) {
          const i = { direction: r, delta: o, type: lp.pop };
          for (const r of t) r(e, n, i);
        }
        const a = {
          location: '',
          state: {},
          base: (e = pp(e)),
          createHref: vp.bind(null, e),
          replace(e) {
            n.splice(r--, 1), o(e);
          },
          push(e, t) {
            o(e);
          },
          listen: (e) => (
            t.push(e),
            () => {
              const n = t.indexOf(e);
              n > -1 && t.splice(n, 1);
            }
          ),
          destroy() {
            (t = []), (n = ['']), (r = 0);
          },
          go(e, t = !0) {
            const o = this.location,
              a = e < 0 ? fp.back : fp.forward;
            (r = Math.max(0, Math.min(r + e, n.length - 1))),
              t && i(this.location, o, { direction: a, delta: e });
          },
        };
        return Object.defineProperty(a, 'location', { enumerable: !0, get: () => n[r] }), a;
      }
      function Lp(e) {
        return (
          (e = location.host ? e || location.pathname + location.search : '').includes('#') ||
            (e += '#'),
          Tp(e)
        );
      }
      function Cp(e) {
        return 'string' == typeof e || (e && 'object' == typeof e);
      }
      function Rp(e) {
        return 'string' == typeof e || 'symbol' == typeof e;
      }
      const Ip = {
          path: '/',
          name: void 0,
          params: {},
          query: {},
          hash: '',
          fullPath: '/',
          matched: [],
          meta: {},
          redirectedFrom: void 0,
        },
        Np = Symbol('');
      var Bp;
      !(function (e) {
        (e[(e.aborted = 4)] = 'aborted'),
          (e[(e.cancelled = 8)] = 'cancelled'),
          (e[(e.duplicated = 16)] = 'duplicated');
      })(Bp || (Bp = {}));
      const Hp = {
        1: ({ location: e, currentLocation: t }) =>
          `No match for\n ${JSON.stringify(e)}${t ? '\nwhile being at\n' + JSON.stringify(t) : ''}`,
        2: ({ from: e, to: t }) =>
          `Redirected from "${e.fullPath}" to "${Up(t)}" via a navigation guard.`,
        4: ({ from: e, to: t }) =>
          `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`,
        8: ({ from: e, to: t }) =>
          `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`,
        16: ({ from: e, to: t }) =>
          `Avoided redundant navigation to current location: "${e.fullPath}".`,
      };
      function kp(e, t) {
        return Kh(new Error(), { type: e, [Np]: !0 }, t);
      }
      function Mp(e, t) {
        return e instanceof Error && Np in e && (null == t || !!(e.type & t));
      }
      const Dp = ['params', 'query', 'hash'];
      function Up(e) {
        if ('string' == typeof e) return e;
        if ('path' in e) return e.path;
        const t = {};
        for (const n of Dp) n in e && (t[n] = e[n]);
        return JSON.stringify(t, null, 2);
      }
      const Gp = '[^/]+?',
        Fp = { sensitive: !1, strict: !1, start: !0, end: !0 },
        $p = /[.+*?^${}()[\]/\\]/g;
      function Vp(e, t) {
        const n = Kh({}, Fp, t),
          r = [];
        let o = n.start ? '^' : '';
        const i = [];
        for (const t of e) {
          const e = t.length ? [] : [90];
          n.strict && !t.length && (o += '/');
          for (let r = 0; r < t.length; r++) {
            const a = t[r];
            let u = 40 + (n.sensitive ? 0.25 : 0);
            if (0 === a.type) r || (o += '/'), (o += a.value.replace($p, '\\$&')), (u += 40);
            else if (1 === a.type) {
              const { value: e, repeatable: n, optional: c, regexp: s } = a;
              i.push({ name: e, repeatable: n, optional: c });
              const l = s || '[^/]+?';
              if ('[^/]+?' !== l) {
                u += 10;
                try {
                  new RegExp(`(${l})`);
                } catch (t) {
                  throw new Error(`Invalid custom RegExp for param "${e}" (${l}): ` + t.message);
                }
              }
              let f = n ? `((?:${l})(?:/(?:${l}))*)` : `(${l})`;
              r || (f = c && t.length < 2 ? `(?:/${f})` : '/' + f),
                c && (f += '?'),
                (o += f),
                (u += 20),
                c && (u += -8),
                n && (u += -20),
                '.*' === l && (u += -50);
            }
            e.push(u);
          }
          r.push(e);
        }
        if (n.strict && n.end) {
          const e = r.length - 1;
          r[e][r[e].length - 1] += 0.7000000000000001;
        }
        n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
        const a = new RegExp(o, n.sensitive ? '' : 'i');
        function u(e) {
          const t = e.match(a),
            n = {};
          if (!t) return null;
          for (let e = 1; e < t.length; e++) {
            const r = t[e] || '',
              o = i[e - 1];
            n[o.name] = r && o.repeatable ? r.split('/') : r;
          }
          return n;
        }
        function c(t) {
          let n = '',
            r = !1;
          for (const o of e) {
            (r && n.endsWith('/')) || (n += '/'), (r = !1);
            for (const e of o)
              if (0 === e.type) n += e.value;
              else if (1 === e.type) {
                const { value: i, repeatable: a, optional: u } = e,
                  c = i in t ? t[i] : '';
                if (Yh(c) && !a)
                  throw new Error(
                    `Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`,
                  );
                const s = Yh(c) ? c.join('/') : c;
                if (!s) {
                  if (!u) throw new Error(`Missing required param "${i}"`);
                  o.length < 2 && (n.endsWith('/') ? (n = n.slice(0, -1)) : (r = !0));
                }
                n += s;
              }
          }
          return n || '/';
        }
        return { re: a, score: r, keys: i, parse: u, stringify: c };
      }
      function Jp(e, t) {
        let n = 0;
        for (; n < e.length && n < t.length; ) {
          const r = t[n] - e[n];
          if (r) return r;
          n++;
        }
        return e.length < t.length
          ? 1 === e.length && 80 === e[0]
            ? -1
            : 1
          : e.length > t.length
          ? 1 === t.length && 80 === t[0]
            ? 1
            : -1
          : 0;
      }
      function zp(e, t) {
        let n = 0;
        const r = e.score,
          o = t.score;
        for (; n < r.length && n < o.length; ) {
          const e = Jp(r[n], o[n]);
          if (e) return e;
          n++;
        }
        if (1 === Math.abs(o.length - r.length)) {
          if (qp(r)) return 1;
          if (qp(o)) return -1;
        }
        return o.length - r.length;
      }
      function qp(e) {
        const t = e[e.length - 1];
        return e.length > 0 && t[t.length - 1] < 0;
      }
      const Kp = { type: 0, value: '' },
        Xp = /[a-zA-Z0-9_]/;
      function Wp(e) {
        if (!e) return [[]];
        if ('/' === e) return [[Kp]];
        if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
        function t(e) {
          throw new Error(`ERR (${n})/"${s}": ${e}`);
        }
        let n = 0,
          r = n;
        const o = [];
        let i;
        function a() {
          i && o.push(i), (i = []);
        }
        let u = 0,
          c,
          s = '',
          l = '';
        function f() {
          s &&
            (0 === n
              ? i.push({ type: 0, value: s })
              : 1 === n || 2 === n || 3 === n
              ? (i.length > 1 &&
                  ('*' === c || '+' === c) &&
                  t(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),
                i.push({
                  type: 1,
                  value: s,
                  regexp: l,
                  repeatable: '*' === c || '+' === c,
                  optional: '*' === c || '?' === c,
                }))
              : t('Invalid state to consume buffer'),
            (s = ''));
        }
        function h() {
          s += c;
        }
        for (; u < e.length; )
          if (((c = e[u++]), '\\' !== c || 2 === n))
            switch (n) {
              case 0:
                '/' === c ? (s && f(), a()) : ':' === c ? (f(), (n = 1)) : h();
                break;
              case 4:
                h(), (n = r);
                break;
              case 1:
                '(' === c
                  ? (n = 2)
                  : Xp.test(c)
                  ? h()
                  : (f(), (n = 0), '*' !== c && '?' !== c && '+' !== c && u--);
                break;
              case 2:
                ')' === c
                  ? '\\' == l[l.length - 1]
                    ? (l = l.slice(0, -1) + c)
                    : (n = 3)
                  : (l += c);
                break;
              case 3:
                f(), (n = 0), '*' !== c && '?' !== c && '+' !== c && u--, (l = '');
                break;
              default:
                t('Unknown state');
            }
          else (r = n), (n = 4);
        return 2 === n && t(`Unfinished custom RegExp for param "${s}"`), f(), a(), o;
      }
      function Yp(e, t, n) {
        const r = Vp(Wp(e.path), n);
        const o = Kh(r, { record: e, parent: t, children: [], alias: [] });
        return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
      }
      function Zp(e, t) {
        const n = [],
          r = new Map();
        function o(e) {
          return r.get(e);
        }
        function i(e, n, r) {
          const o = !r,
            u = ed(e);
          u.aliasOf = r && r.record;
          const s = od(t, e),
            l = [u];
          if ('alias' in e) {
            const t = 'string' == typeof e.alias ? [e.alias] : e.alias;
            for (const e of t)
              l.push(
                Kh({}, u, {
                  components: r ? r.record.components : u.components,
                  path: e,
                  aliasOf: r ? r.record : u,
                }),
              );
          }
          let f, h;
          for (const t of l) {
            const { path: l } = t;
            if (n && '/' !== l[0]) {
              const e = n.record.path,
                r = '/' === e[e.length - 1] ? '' : '/';
              t.path = n.record.path + (l && r + l);
            }
            if (
              ((f = Yp(t, n, s)),
              r
                ? r.alias.push(f)
                : ((h = h || f), h !== f && h.alias.push(f), o && e.name && !nd(f) && a(e.name)),
              u.children)
            ) {
              const e = u.children;
              for (let t = 0; t < e.length; t++) i(e[t], f, r && r.children[t]);
            }
            (r = r || f), c(f);
          }
          return h
            ? () => {
                a(h);
              }
            : Wh;
        }
        function a(e) {
          if (Rp(e)) {
            const t = r.get(e);
            t &&
              (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(a), t.alias.forEach(a));
          } else {
            const t = n.indexOf(e);
            t > -1 &&
              (n.splice(t, 1),
              e.record.name && r.delete(e.record.name),
              e.children.forEach(a),
              e.alias.forEach(a));
          }
        }
        function u() {
          return n;
        }
        function c(e) {
          let t = 0;
          for (
            ;
            t < n.length &&
            zp(e, n[t]) >= 0 &&
            (e.record.path !== n[t].record.path || !sd(e, n[t]));

          )
            t++;
          n.splice(t, 0, e), e.record.name && !nd(e) && r.set(e.record.name, e);
        }
        function s(e, t) {
          let o,
            i = {},
            a,
            u;
          if ('name' in e && e.name) {
            if (((o = r.get(e.name)), !o)) throw kp(1, { location: e });
            0,
              (u = o.record.name),
              (i = Kh(
                Qp(
                  t.params,
                  o.keys.filter((e) => !e.optional).map((e) => e.name),
                ),
                e.params &&
                  Qp(
                    e.params,
                    o.keys.map((e) => e.name),
                  ),
              )),
              (a = o.stringify(i));
          } else if ('path' in e)
            (a = e.path),
              (o = n.find((e) => e.re.test(a))),
              o && ((i = o.parse(a)), (u = o.record.name));
          else {
            if (((o = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))), !o))
              throw kp(1, { location: e, currentLocation: t });
            (u = o.record.name), (i = Kh({}, t.params, e.params)), (a = o.stringify(i));
          }
          const c = [];
          let s = o;
          for (; s; ) c.unshift(s.record), (s = s.parent);
          return { name: u, path: a, params: i, matched: c, meta: rd(c) };
        }
        return (
          (t = od({ strict: !1, end: !0, sensitive: !1 }, t)),
          e.forEach((e) => i(e)),
          { addRoute: i, resolve: s, removeRoute: a, getRoutes: u, getRecordMatcher: o }
        );
      }
      function Qp(e, t) {
        const n = {};
        for (const r of t) r in e && (n[r] = e[r]);
        return n;
      }
      function ed(e) {
        return {
          path: e.path,
          redirect: e.redirect,
          name: e.name,
          meta: e.meta || {},
          aliasOf: void 0,
          beforeEnter: e.beforeEnter,
          props: td(e),
          children: e.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            'components' in e ? e.components || null : e.component && { default: e.component },
        };
      }
      function td(e) {
        const t = {},
          n = e.props || !1;
        if ('component' in e) t.default = n;
        else for (const r in e.components) t[r] = 'boolean' == typeof n ? n : n[r];
        return t;
      }
      function nd(e) {
        for (; e; ) {
          if (e.record.aliasOf) return !0;
          e = e.parent;
        }
        return !1;
      }
      function rd(e) {
        return e.reduce((e, t) => Kh(e, t.meta), {});
      }
      function od(e, t) {
        const n = {};
        for (const r in e) n[r] = r in t ? t[r] : e[r];
        return n;
      }
      function id(e, t) {
        return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
      }
      function ad(e, t) {
        for (const n of e.keys)
          if (!n.optional && !t.keys.find(id.bind(null, n)))
            return Zh(
              `Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`,
            );
        for (const n of t.keys)
          if (!n.optional && !e.keys.find(id.bind(null, n)))
            return Zh(
              `Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`,
            );
      }
      function ud(e, t) {
        t &&
          t.record.name &&
          !e.name &&
          !e.path &&
          Zh(
            `The route named "${String(
              t.record.name,
            )}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`,
          );
      }
      function cd(e, t) {
        for (const n of t.keys)
          if (!e.keys.find(id.bind(null, n)))
            return Zh(
              `Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`,
            );
      }
      function sd(e, t) {
        return t.children.some((t) => t === e || sd(e, t));
      }
      const ld = /#/g,
        fd = /&/g,
        hd = /\//g,
        pd = /=/g,
        dd = /\?/g,
        vd = /\+/g,
        md = /%5B/g,
        yd = /%5D/g,
        bd = /%5E/g,
        gd = /%60/g,
        _d = /%7B/g,
        Od = /%7C/g,
        Ed = /%7D/g,
        wd = /%20/g;
      function Sd(e) {
        return encodeURI('' + e)
          .replace(Od, '|')
          .replace(md, '[')
          .replace(yd, ']');
      }
      function jd(e) {
        return Sd(e).replace(_d, '{').replace(Ed, '}').replace(bd, '^');
      }
      function Ad(e) {
        return Sd(e)
          .replace(vd, '%2B')
          .replace(wd, '+')
          .replace(ld, '%23')
          .replace(fd, '%26')
          .replace(gd, '`')
          .replace(_d, '{')
          .replace(Ed, '}')
          .replace(bd, '^');
      }
      function xd(e) {
        return Ad(e).replace(pd, '%3D');
      }
      function Td(e) {
        return Sd(e).replace(ld, '%23').replace(dd, '%3F');
      }
      function Pd(e) {
        return null == e ? '' : Td(e).replace(hd, '%2F');
      }
      function Ld(e) {
        try {
          return decodeURIComponent('' + e);
        } catch (e) {}
        return '' + e;
      }
      function Cd(e) {
        const t = {};
        if ('' === e || '?' === e) return t;
        const n = undefined,
          r = ('?' === e[0] ? e.slice(1) : e).split('&');
        for (let e = 0; e < r.length; ++e) {
          const n = r[e].replace(vd, ' '),
            o = n.indexOf('='),
            i = Ld(o < 0 ? n : n.slice(0, o)),
            a = o < 0 ? null : Ld(n.slice(o + 1));
          if (i in t) {
            let e = t[i];
            Yh(e) || (e = t[i] = [e]), e.push(a);
          } else t[i] = a;
        }
        return t;
      }
      function Rd(e) {
        let t = '';
        for (let n in e) {
          const r = e[n];
          if (((n = xd(n)), null == r)) {
            void 0 !== r && (t += (t.length ? '&' : '') + n);
            continue;
          }
          const o = undefined;
          (Yh(r) ? r.map((e) => e && Ad(e)) : [r && Ad(r)]).forEach((e) => {
            void 0 !== e && ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e));
          });
        }
        return t;
      }
      function Id(e) {
        const t = {};
        for (const n in e) {
          const r = e[n];
          void 0 !== r &&
            (t[n] = Yh(r) ? r.map((e) => (null == e ? null : '' + e)) : null == r ? r : '' + r);
        }
        return t;
      }
      const Nd = Symbol(''),
        Bd = Symbol(''),
        Hd = Symbol(''),
        kd = Symbol(''),
        Md = Symbol('');
      function Dd() {
        let e = [];
        function t(t) {
          return (
            e.push(t),
            () => {
              const n = e.indexOf(t);
              n > -1 && e.splice(n, 1);
            }
          );
        }
        function n() {
          e = [];
        }
        return { add: t, list: () => e, reset: n };
      }
      function Ud(e, t, n) {
        const r = () => {
          e[t].delete(n);
        };
        Object(o.onUnmounted)(r),
          Object(o.onDeactivated)(r),
          Object(o.onActivated)(() => {
            e[t].add(n);
          }),
          e[t].add(n);
      }
      function Gd(e) {
        const t = Object(o.inject)(Nd, {}).value;
        t && Ud(t, 'leaveGuards', e);
      }
      function Fd(e) {
        const t = Object(o.inject)(Nd, {}).value;
        t && Ud(t, 'updateGuards', e);
      }
      function $d(e, t, n, r, o) {
        const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
        return () =>
          new Promise((a, u) => {
            const c = (e) => {
                !1 === e
                  ? u(kp(4, { from: n, to: t }))
                  : e instanceof Error
                  ? u(e)
                  : Cp(e)
                  ? u(kp(2, { from: t, to: e }))
                  : (i && r.enterCallbacks[o] === i && 'function' == typeof e && i.push(e), a());
              },
              s = e.call(r && r.instances[o], t, n, c);
            let l = Promise.resolve(s);
            e.length < 3 && (l = l.then(c)), l.catch((e) => u(e));
          });
      }
      function Vd(e, t, n) {
        let r = 0;
        return function () {
          1 == r++ &&
            Zh(
              `The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`,
            ),
            (e._called = !0),
            1 === r && e.apply(null, arguments);
        };
      }
      function Jd(e, t, n, r) {
        const o = [];
        for (const i of e) {
          0;
          for (const e in i.components) {
            let a = i.components[e];
            if ('beforeRouteEnter' === t || i.instances[e])
              if (zd(a)) {
                const u = undefined,
                  c = (a.__vccOpts || a)[t];
                c && o.push($d(c, n, r, i, e));
              } else {
                let u = a();
                0,
                  o.push(() =>
                    u.then((o) => {
                      if (!o)
                        return Promise.reject(
                          new Error(`Couldn't resolve component "${e}" at "${i.path}"`),
                        );
                      const a = qh(o) ? o.default : o;
                      i.components[e] = a;
                      const u = undefined,
                        c = (a.__vccOpts || a)[t];
                      return c && $d(c, n, r, i, e)();
                    }),
                  );
              }
          }
        }
        return o;
      }
      function zd(e) {
        return 'object' == typeof e || 'displayName' in e || 'props' in e || '__vccOpts' in e;
      }
      function qd(e) {
        return e.matched.every((e) => e.redirect)
          ? Promise.reject(new Error('Cannot load a route that redirects.'))
          : Promise.all(
              e.matched.map(
                (e) =>
                  e.components &&
                  Promise.all(
                    Object.keys(e.components).reduce((t, n) => {
                      const r = e.components[n];
                      return (
                        'function' != typeof r ||
                          'displayName' in r ||
                          t.push(
                            r().then((t) => {
                              if (!t)
                                return Promise.reject(
                                  new Error(
                                    `Couldn't resolve component "${n}" at "${e.path}". Ensure you passed a function that returns a promise.`,
                                  ),
                                );
                              const r = qh(t) ? t.default : t;
                              e.components[n] = r;
                            }),
                          ),
                        t
                      );
                    }, []),
                  ),
              ),
            ).then(() => e);
      }
      function Kd(e) {
        const t = Object(o.inject)(Hd),
          n = Object(o.inject)(kd),
          r = Object(o.computed)(() => t.resolve(Object(o.unref)(e.to))),
          i = Object(o.computed)(() => {
            const { matched: e } = r.value,
              { length: t } = e,
              o = e[t - 1],
              i = n.matched;
            if (!o || !i.length) return -1;
            const a = i.findIndex(ip.bind(null, o));
            if (a > -1) return a;
            const u = Qd(e[t - 2]);
            return t > 1 && Qd(o) === u && i[i.length - 1].path !== u
              ? i.findIndex(ip.bind(null, e[t - 2]))
              : a;
          }),
          a = Object(o.computed)(() => i.value > -1 && Zd(n.params, r.value.params)),
          u = Object(o.computed)(
            () => i.value > -1 && i.value === n.matched.length - 1 && ap(n.params, r.value.params),
          );
        function c(n = {}) {
          return Yd(n)
            ? t[Object(o.unref)(e.replace) ? 'replace' : 'push'](Object(o.unref)(e.to)).catch(Wh)
            : Promise.resolve();
        }
        if (zh) {
          const e = Object(o.getCurrentInstance)();
          if (e) {
            const t = { route: r.value, isActive: a.value, isExactActive: u.value };
            (e.__vrl_devtools = e.__vrl_devtools || []),
              e.__vrl_devtools.push(t),
              Object(o.watchEffect)(
                () => {
                  (t.route = r.value), (t.isActive = a.value), (t.isExactActive = u.value);
                },
                { flush: 'post' },
              );
          }
        }
        return {
          route: r,
          href: Object(o.computed)(() => r.value.href),
          isActive: a,
          isExactActive: u,
          navigate: c,
        };
      }
      const Xd = undefined,
        Wd = Object(o.defineComponent)({
          name: 'RouterLink',
          compatConfig: { MODE: 3 },
          props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: 'page' },
          },
          useLink: Kd,
          setup(e, { slots: t }) {
            const n = Object(o.reactive)(Kd(e)),
              { options: r } = Object(o.inject)(Hd),
              i = Object(o.computed)(() => ({
                [ev(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
                [ev(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
                  n.isExactActive,
              }));
            return () => {
              const r = t.default && t.default(n);
              return e.custom
                ? r
                : Object(o.h)(
                    'a',
                    {
                      'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                      href: n.href,
                      onClick: n.navigate,
                      class: i.value,
                    },
                    r,
                  );
            };
          },
        });
      function Yd(e) {
        if (
          !(
            e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.defaultPrevented ||
            (void 0 !== e.button && 0 !== e.button)
          )
        ) {
          if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
          }
          return e.preventDefault && e.preventDefault(), !0;
        }
      }
      function Zd(e, t) {
        for (const n in t) {
          const r = t[n],
            o = e[n];
          if ('string' == typeof r) {
            if (r !== o) return !1;
          } else if (!Yh(o) || o.length !== r.length || r.some((e, t) => e !== o[t])) return !1;
        }
        return !0;
      }
      function Qd(e) {
        return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
      }
      const ev = (e, t, n) => (null != e ? e : null != t ? t : n),
        tv = undefined;
      function nv(e, t) {
        if (!e) return null;
        const n = e(t);
        return 1 === n.length ? n[0] : n;
      }
      const rv = Object(o.defineComponent)({
        name: 'RouterView',
        inheritAttrs: !1,
        props: { name: { type: String, default: 'default' }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: n }) {
          const r = Object(o.inject)(Md),
            i = Object(o.computed)(() => e.route || r.value),
            a = Object(o.inject)(Bd, 0),
            u = Object(o.computed)(() => {
              let e = Object(o.unref)(a);
              const { matched: t } = i.value;
              let n;
              for (; (n = t[e]) && !n.components; ) e++;
              return e;
            }),
            c = Object(o.computed)(() => i.value.matched[u.value]);
          Object(o.provide)(
            Bd,
            Object(o.computed)(() => u.value + 1),
          ),
            Object(o.provide)(Nd, c),
            Object(o.provide)(Md, i);
          const s = Object(o.ref)();
          return (
            Object(o.watch)(
              () => [s.value, c.value, e.name],
              ([e, t, n], [r, o, i]) => {
                t &&
                  ((t.instances[n] = e),
                  o &&
                    o !== t &&
                    e &&
                    e === r &&
                    (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards),
                    t.updateGuards.size || (t.updateGuards = o.updateGuards))),
                  !e ||
                    !t ||
                    (o && ip(t, o) && r) ||
                    (t.enterCallbacks[n] || []).forEach((t) => t(e));
              },
              { flush: 'post' },
            ),
            () => {
              const r = i.value,
                a = e.name,
                l = c.value,
                f = l && l.components[a];
              if (!f) return nv(n.default, { Component: f, route: r });
              const h = l.props[a],
                p = h ? (!0 === h ? r.params : 'function' == typeof h ? h(r) : h) : null,
                d = (e) => {
                  e.component.isUnmounted && (l.instances[a] = null);
                },
                v = Object(o.h)(f, Kh({}, p, t, { onVnodeUnmounted: d, ref: s }));
              if (zh && v.ref) {
                const e = { depth: u.value, name: l.name, path: l.path, meta: l.meta },
                  t = undefined;
                (Yh(v.ref) ? v.ref.map((e) => e.i) : [v.ref.i]).forEach((t) => {
                  t.__vrv_devtools = e;
                });
              }
              return nv(n.default, { Component: v, route: r }) || v;
            }
          );
        },
      });
      function ov() {
        const e = Object(o.getCurrentInstance)(),
          t = e.parent && e.parent.type.name;
        if (t && ('KeepAlive' === t || t.includes('Transition'))) {
          const e = 'KeepAlive' === t ? 'keep-alive' : 'transition';
          Zh(
            `<router-view> can no longer be used directly inside <transition> or <keep-alive>.\nUse slot props instead:\n\n<router-view v-slot="{ Component }">\n  <${e}>\n    <component :is="Component" />\n  </${e}>\n</router-view>`,
          );
        }
      }
      function iv(e, t) {
        const n = Kh({}, e, {
          matched: e.matched.map((e) => wv(e, ['instances', 'children', 'aliasOf'])),
        });
        return { _custom: { type: null, readOnly: !0, display: e.fullPath, tooltip: t, value: n } };
      }
      function av(e) {
        return { _custom: { display: e } };
      }
      let uv = 0;
      function cv(e, t, n) {
        if (t.__hasDevtools) return;
        t.__hasDevtools = !0;
        const r = uv++;
        Jh(
          {
            id: 'org.vuejs.router' + (r ? '.' + r : ''),
            label: 'Vue Router',
            packageName: 'vue-router',
            homepage: 'https://router.vuejs.org',
            logo: 'https://router.vuejs.org/logo.png',
            componentStateTypes: ['Routing'],
            app: e,
          },
          (i) => {
            'function' != typeof i.now &&
              console.warn(
                '[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.',
              ),
              i.on.inspectComponent((e, n) => {
                e.instanceData &&
                  e.instanceData.state.push({
                    type: 'Routing',
                    key: '$route',
                    editable: !1,
                    value: iv(t.currentRoute.value, 'Current Route'),
                  });
              }),
              i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
                if (t.__vrv_devtools) {
                  const n = t.__vrv_devtools;
                  e.tags.push({
                    label: (n.name ? n.name.toString() + ': ' : '') + n.path,
                    textColor: 0,
                    tooltip: 'This component is rendered by &lt;router-view&gt;',
                    backgroundColor: fv,
                  });
                }
                Yh(t.__vrl_devtools) &&
                  ((t.__devtoolsApi = i),
                  t.__vrl_devtools.forEach((t) => {
                    let n = vv,
                      r = '';
                    t.isExactActive
                      ? ((n = pv), (r = 'This is exactly active'))
                      : t.isActive && ((n = hv), (r = 'This link is active')),
                      e.tags.push({
                        label: t.route.path,
                        textColor: 0,
                        tooltip: r,
                        backgroundColor: n,
                      });
                  }));
              }),
              Object(o.watch)(t.currentRoute, () => {
                s(), i.notifyComponentUpdate(), i.sendInspectorTree(c), i.sendInspectorState(c);
              });
            const a = 'router:navigations:' + r;
            i.addTimelineLayer({
              id: a,
              label: `Router${r ? ' ' + r : ''} Navigations`,
              color: 4237508,
            }),
              t.onError((e, t) => {
                i.addTimelineEvent({
                  layerId: a,
                  event: {
                    title: 'Error during Navigation',
                    subtitle: t.fullPath,
                    logType: 'error',
                    time: i.now(),
                    data: { error: e },
                    groupId: t.meta.__navigationId,
                  },
                });
              });
            let u = 0;
            t.beforeEach((e, t) => {
              const n = {
                guard: av('beforeEach'),
                from: iv(t, 'Current Location during this navigation'),
                to: iv(e, 'Target location'),
              };
              Object.defineProperty(e.meta, '__navigationId', { value: u++ }),
                i.addTimelineEvent({
                  layerId: a,
                  event: {
                    time: i.now(),
                    title: 'Start of navigation',
                    subtitle: e.fullPath,
                    data: n,
                    groupId: e.meta.__navigationId,
                  },
                });
            }),
              t.afterEach((e, t, n) => {
                const r = { guard: av('afterEach') };
                n
                  ? ((r.failure = {
                      _custom: {
                        type: Error,
                        readOnly: !0,
                        display: n ? n.message : '',
                        tooltip: 'Navigation Failure',
                        value: n,
                      },
                    }),
                    (r.status = av('\u274c')))
                  : (r.status = av('\u2705')),
                  (r.from = iv(t, 'Current Location during this navigation')),
                  (r.to = iv(e, 'Target location')),
                  i.addTimelineEvent({
                    layerId: a,
                    event: {
                      title: 'End of navigation',
                      subtitle: e.fullPath,
                      time: i.now(),
                      data: r,
                      logType: n ? 'warning' : 'default',
                      groupId: e.meta.__navigationId,
                    },
                  });
              });
            const c = 'router-inspector:' + r;
            function s() {
              if (!l) return;
              const e = l;
              let r = n.getRoutes().filter((e) => !e.parent);
              r.forEach(Ov),
                e.filter && (r = r.filter((t) => Ev(t, e.filter.toLowerCase()))),
                r.forEach((e) => _v(e, t.currentRoute.value)),
                (e.rootNodes = r.map(yv));
            }
            let l;
            i.addInspector({
              id: c,
              label: 'Routes' + (r ? ' ' + r : ''),
              icon: 'book',
              treeFilterPlaceholder: 'Search routes',
            }),
              i.on.getInspectorTree((t) => {
                (l = t), t.app === e && t.inspectorId === c && s();
              }),
              i.on.getInspectorState((t) => {
                if (t.app === e && t.inspectorId === c) {
                  const e = undefined,
                    r = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
                  r && (t.state = { options: lv(r) });
                }
              }),
              i.sendInspectorTree(c),
              i.sendInspectorState(c);
          },
        );
      }
      function sv(e) {
        return e.optional ? (e.repeatable ? '*' : '?') : e.repeatable ? '+' : '';
      }
      function lv(e) {
        const { record: t } = e,
          n = [{ editable: !1, key: 'path', value: t.path }];
        return (
          null != t.name && n.push({ editable: !1, key: 'name', value: t.name }),
          n.push({ editable: !1, key: 'regexp', value: e.re }),
          e.keys.length &&
            n.push({
              editable: !1,
              key: 'keys',
              value: {
                _custom: {
                  type: null,
                  readOnly: !0,
                  display: e.keys.map((e) => `${e.name}${sv(e)}`).join(' '),
                  tooltip: 'Param keys',
                  value: e.keys,
                },
              },
            }),
          null != t.redirect && n.push({ editable: !1, key: 'redirect', value: t.redirect }),
          e.alias.length &&
            n.push({ editable: !1, key: 'aliases', value: e.alias.map((e) => e.record.path) }),
          Object.keys(e.record.meta).length &&
            n.push({ editable: !1, key: 'meta', value: e.record.meta }),
          n.push({
            key: 'score',
            editable: !1,
            value: {
              _custom: {
                type: null,
                readOnly: !0,
                display: e.score.map((e) => e.join(', ')).join(' | '),
                tooltip: 'Score used to sort routes',
                value: e.score,
              },
            },
          }),
          n
        );
      }
      const fv = 15485081,
        hv = 2450411,
        pv = 8702998,
        dv = 2282478,
        vv = 16486972,
        mv = 6710886;
      function yv(e) {
        const t = [],
          { record: n } = e;
        null != n.name && t.push({ label: String(n.name), textColor: 0, backgroundColor: 2282478 }),
          n.aliasOf && t.push({ label: 'alias', textColor: 0, backgroundColor: vv }),
          e.__vd_match && t.push({ label: 'matches', textColor: 0, backgroundColor: fv }),
          e.__vd_exactActive && t.push({ label: 'exact', textColor: 0, backgroundColor: pv }),
          e.__vd_active && t.push({ label: 'active', textColor: 0, backgroundColor: hv }),
          n.redirect &&
            t.push({
              label: 'string' == typeof n.redirect ? 'redirect: ' + n.redirect : 'redirects',
              textColor: 16777215,
              backgroundColor: mv,
            });
        let r = n.__vd_id;
        return (
          null == r && ((r = String(bv++)), (n.__vd_id = r)),
          { id: r, label: n.path, tags: t, children: e.children.map(yv) }
        );
      }
      let bv = 0;
      const gv = /^\/(.*)\/([a-z]*)$/;
      function _v(e, t) {
        const n = t.matched.length && ip(t.matched[t.matched.length - 1], e.record);
        (e.__vd_exactActive = e.__vd_active = n),
          n || (e.__vd_active = t.matched.some((t) => ip(t, e.record))),
          e.children.forEach((e) => _v(e, t));
      }
      function Ov(e) {
        (e.__vd_match = !1), e.children.forEach(Ov);
      }
      function Ev(e, t) {
        const n = String(e.re).match(gv);
        if (((e.__vd_match = !1), !n || n.length < 3)) return !1;
        const r = undefined;
        if (new RegExp(n[1].replace(/\$$/, ''), n[2]).test(t))
          return (
            e.children.forEach((e) => Ev(e, t)),
            ('/' !== e.record.path || '/' === t) && ((e.__vd_match = e.re.test(t)), !0)
          );
        const o = e.record.path.toLowerCase(),
          i = Ld(o);
        return (
          !(t.startsWith('/') || (!i.includes(t) && !o.includes(t))) ||
          !(!i.startsWith(t) && !o.startsWith(t)) ||
          !(!e.record.name || !String(e.record.name).includes(t)) ||
          e.children.some((e) => Ev(e, t))
        );
      }
      function wv(e, t) {
        const n = {};
        for (const r in e) t.includes(r) || (n[r] = e[r]);
        return n;
      }
      function Sv(e) {
        const t = Zp(e.routes, e),
          n = e.parseQuery || Cd,
          r = e.stringifyQuery || Rd,
          i = e.history;
        const a = Dd(),
          u = Dd(),
          c = Dd(),
          s = Object(o.shallowRef)(Ip);
        let l = Ip;
        zh &&
          e.scrollBehavior &&
          'scrollRestoration' in history &&
          (history.scrollRestoration = 'manual');
        const f = Xh.bind(null, (e) => '' + e),
          h = Xh.bind(null, Pd),
          p = Xh.bind(null, Ld);
        function d(e, n) {
          let r, o;
          return Rp(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e), t.addRoute(o, r);
        }
        function v(e) {
          const n = t.getRecordMatcher(e);
          n && t.removeRoute(n);
        }
        function m() {
          return t.getRoutes().map((e) => e.record);
        }
        function y(e) {
          return !!t.getRecordMatcher(e);
        }
        function b(e, o) {
          if (((o = Kh({}, o || s.value)), 'string' == typeof e)) {
            const r = tp(n, e, o.path),
              a = t.resolve({ path: r.path }, o),
              u = i.createHref(r.fullPath);
            return Kh(r, a, {
              params: p(a.params),
              hash: Ld(r.hash),
              redirectedFrom: void 0,
              href: u,
            });
          }
          let a;
          if ('path' in e) a = Kh({}, e, { path: tp(n, e.path, o.path).path });
          else {
            const t = Kh({}, e.params);
            for (const e in t) null == t[e] && delete t[e];
            (a = Kh({}, e, { params: h(e.params) })), (o.params = h(o.params));
          }
          const u = t.resolve(a, o),
            c = e.hash || '';
          u.params = f(p(u.params));
          const l = np(r, Kh({}, e, { hash: jd(c), path: u.path })),
            d = i.createHref(l);
          return Kh({ fullPath: l, hash: c, query: r === Rd ? Id(e.query) : e.query || {} }, u, {
            redirectedFrom: void 0,
            href: d,
          });
        }
        function g(e) {
          return 'string' == typeof e ? tp(n, e, s.value.path) : Kh({}, e);
        }
        function _(e, t) {
          if (l !== e) return kp(8, { from: t, to: e });
        }
        function O(e) {
          return S(e);
        }
        function E(e) {
          return O(Kh(g(e), { replace: !0 }));
        }
        function w(e) {
          const t = e.matched[e.matched.length - 1];
          if (t && t.redirect) {
            const { redirect: n } = t;
            let r = 'function' == typeof n ? n(e) : n;
            return (
              'string' == typeof r &&
                ((r = r.includes('?') || r.includes('#') ? (r = g(r)) : { path: r }),
                (r.params = {})),
              Kh({ query: e.query, hash: e.hash, params: 'path' in r ? {} : e.params }, r)
            );
          }
        }
        function S(e, t) {
          const n = (l = b(e)),
            o = s.value,
            i = e.state,
            a = e.force,
            u = !0 === e.replace,
            c = w(n);
          if (c)
            return S(
              Kh(g(c), {
                state: 'object' == typeof c ? Kh({}, i, c.state) : i,
                force: a,
                replace: u,
              }),
              t || n,
            );
          const f = n;
          let h;
          return (
            (f.redirectedFrom = t),
            !a && op(r, o, n) && ((h = kp(16, { to: f, from: o })), k(o, o, !0, !1)),
            (h ? Promise.resolve(h) : A(f, o))
              .catch((e) => (Mp(e) ? (Mp(e, 2) ? e : H(e)) : N(e, f, o)))
              .then((e) => {
                if (e) {
                  if (Mp(e, 2))
                    return S(
                      Kh({ replace: u }, g(e.to), {
                        state: 'object' == typeof e.to ? Kh({}, i, e.to.state) : i,
                        force: a,
                      }),
                      t || f,
                    );
                } else e = T(f, o, !0, u, i);
                return x(f, o, e), e;
              })
          );
        }
        function j(e, t) {
          const n = _(e, t);
          return n ? Promise.reject(n) : Promise.resolve();
        }
        function A(e, t) {
          let n;
          const [r, o, i] = Av(e, t);
          n = Jd(r.reverse(), 'beforeRouteLeave', e, t);
          for (const o of r)
            o.leaveGuards.forEach((r) => {
              n.push($d(r, e, t));
            });
          const c = j.bind(null, e, t);
          return (
            n.push(c),
            jv(n)
              .then(() => {
                n = [];
                for (const r of a.list()) n.push($d(r, e, t));
                return n.push(c), jv(n);
              })
              .then(() => {
                n = Jd(o, 'beforeRouteUpdate', e, t);
                for (const r of o)
                  r.updateGuards.forEach((r) => {
                    n.push($d(r, e, t));
                  });
                return n.push(c), jv(n);
              })
              .then(() => {
                n = [];
                for (const r of e.matched)
                  if (r.beforeEnter && !t.matched.includes(r))
                    if (Yh(r.beforeEnter)) for (const o of r.beforeEnter) n.push($d(o, e, t));
                    else n.push($d(r.beforeEnter, e, t));
                return n.push(c), jv(n);
              })
              .then(
                () => (
                  e.matched.forEach((e) => (e.enterCallbacks = {})),
                  (n = Jd(i, 'beforeRouteEnter', e, t)),
                  n.push(c),
                  jv(n)
                ),
              )
              .then(() => {
                n = [];
                for (const r of u.list()) n.push($d(r, e, t));
                return n.push(c), jv(n);
              })
              .catch((e) => (Mp(e, 8) ? e : Promise.reject(e)))
          );
        }
        function x(e, t, n) {
          for (const r of c.list()) r(e, t, n);
        }
        function T(e, t, n, r, o) {
          const a = _(e, t);
          if (a) return a;
          const u = t === Ip,
            c = zh ? history.state : {};
          n &&
            (r || u
              ? i.replace(e.fullPath, Kh({ scroll: u && c && c.scroll }, o))
              : i.push(e.fullPath, o)),
            (s.value = e),
            k(e, t, n, u),
            H();
        }
        let P;
        function L() {
          P ||
            (P = i.listen((e, t, n) => {
              if (!G.listening) return;
              const r = b(e),
                o = w(r);
              if (o) return void S(Kh(o, { replace: !0 }), r).catch(Wh);
              l = r;
              const a = s.value;
              zh && Op(gp(a.fullPath, n.delta), yp()),
                A(r, a)
                  .catch((e) =>
                    Mp(e, 12)
                      ? e
                      : Mp(e, 2)
                      ? (S(e.to, r)
                          .then((e) => {
                            Mp(e, 20) && !n.delta && n.type === lp.pop && i.go(-1, !1);
                          })
                          .catch(Wh),
                        Promise.reject())
                      : (n.delta && i.go(-n.delta, !1), N(e, r, a)),
                  )
                  .then((e) => {
                    (e = e || T(r, a, !1)) &&
                      (n.delta && !Mp(e, 8)
                        ? i.go(-n.delta, !1)
                        : n.type === lp.pop && Mp(e, 20) && i.go(-1, !1)),
                      x(r, a, e);
                  })
                  .catch(Wh);
            }));
        }
        let C = Dd(),
          R = Dd(),
          I;
        function N(e, t, n) {
          H(e);
          const r = R.list();
          return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
        }
        function B() {
          return I && s.value !== Ip
            ? Promise.resolve()
            : new Promise((e, t) => {
                C.add([e, t]);
              });
        }
        function H(e) {
          return I || ((I = !e), L(), C.list().forEach(([t, n]) => (e ? n(e) : t())), C.reset()), e;
        }
        function k(t, n, r, i) {
          const { scrollBehavior: a } = e;
          if (!zh || !a) return Promise.resolve();
          const u =
            (!r && Ep(gp(t.fullPath, 0))) ||
            ((i || !r) && history.state && history.state.scroll) ||
            null;
          return Object(o.nextTick)()
            .then(() => a(t, n, u))
            .then((e) => e && bp(e))
            .catch((e) => N(e, t, n));
        }
        const M = (e) => i.go(e);
        let D;
        const U = new Set(),
          G = {
            currentRoute: s,
            listening: !0,
            addRoute: d,
            removeRoute: v,
            hasRoute: y,
            getRoutes: m,
            resolve: b,
            options: e,
            push: O,
            replace: E,
            go: M,
            back: () => M(-1),
            forward: () => M(1),
            beforeEach: a.add,
            beforeResolve: u.add,
            afterEach: c.add,
            onError: R.add,
            isReady: B,
            install(e) {
              const n = this;
              e.component('RouterLink', Wd),
                e.component('RouterView', rv),
                (e.config.globalProperties.$router = n),
                Object.defineProperty(e.config.globalProperties, '$route', {
                  enumerable: !0,
                  get: () => Object(o.unref)(s),
                }),
                zh &&
                  !D &&
                  s.value === Ip &&
                  ((D = !0),
                  O(i.location).catch((e) => {
                    0;
                  }));
              const r = {};
              for (const e in Ip) r[e] = Object(o.computed)(() => s.value[e]);
              e.provide(Hd, n), e.provide(kd, Object(o.reactive)(r)), e.provide(Md, s);
              const a = e.unmount;
              U.add(e),
                (e.unmount = function () {
                  U.delete(e),
                    U.size < 1 &&
                      ((l = Ip), P && P(), (P = null), (s.value = Ip), (D = !1), (I = !1)),
                    a();
                }),
                zh && cv(e, n, t);
            },
          };
        return G;
      }
      function jv(e) {
        return e.reduce((e, t) => e.then(() => t()), Promise.resolve());
      }
      function Av(e, t) {
        const n = [],
          r = [],
          o = [],
          i = Math.max(t.matched.length, e.matched.length);
        for (let a = 0; a < i; a++) {
          const i = t.matched[a];
          i && (e.matched.find((e) => ip(e, i)) ? r.push(i) : n.push(i));
          const u = e.matched[a];
          u && (t.matched.find((e) => ip(e, u)) || o.push(u));
        }
        return [n, r, o];
      }
      function xv() {
        return Object(o.inject)(Hd);
      }
      function Tv() {
        return Object(o.inject)(kd);
      }
      function Pv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Lv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pv(Object(n), !0).forEach(function (t) {
                Cv(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pv(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Cv(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Rv = Object(o.defineComponent)({
          props: { simulator: { type: Object, required: !0 } },
          render: function e() {
            var t = this.simulator,
              n = this.$slots,
              r = t.layout,
              i = t.getComponent;
            if (r) {
              var a = r.Component,
                u = r.props,
                c = void 0 === u ? {} : u,
                s = r.componentName;
              if (a) return Object(o.h)(a, Lv(Lv({}, c), {}, { key: 'layout', simulator: t }), n);
              var l = s && i(s);
              if (l) return Object(o.h)(l, Lv(Lv({}, c), {}, { key: 'layout', simulator: t }), n);
            }
            return Object(o.renderSlot)(n, 'default');
          },
        }),
        Iv = Object(o.defineComponent)({
          props: { simulator: { type: Object, required: !0 } },
          render: function e() {
            var t = this.simulator;
            return Object(o.h)(
              Rv,
              { simulator: t },
              {
                default: function e() {
                  return Object(o.h)(rv);
                },
              },
            );
          },
        }),
        Nv = Object(o.defineComponent)({
          props: {
            simulator: { type: Object, required: !0 },
            documentInstance: { type: Object, required: !0 },
          },
          render: function e() {
            var t = this.documentInstance,
              n = this.simulator,
              r = t.schema,
              i = n.designMode,
              a = n.device,
              u = n.locale,
              c = n.components;
            return n.autoRender
              ? Object(o.h)(sh, {
                  schema: r,
                  components: c,
                  locale: u,
                  messages: {},
                  designMode: i,
                  device: a,
                  getNode: function e(n) {
                    return t.getNode(n);
                  },
                  onCompGetCtx: function e(n, r) {
                    return t.mountInstance(n.id, r);
                  },
                })
              : null;
          },
        }),
        Bv = Object(o.defineComponent)({
          name: 'Leaf',
          render: function e() {
            return Object(o.renderSlot)(this.$slots, 'default');
          },
        });
      Object.assign(Bv, {
        displayName: 'Leaf',
        componentMetadata: {
          componentName: 'Leaf',
          configure: { props: [{ name: 'children', setter: 'StringSetter' }], supports: !1 },
        },
      });
      var Hv = Bv,
        kv = Object(o.defineComponent)({
          render: function e() {
            return Object(o.h)('div', { class: 'lc-container' }, this.$slots);
          },
        });
      Object.assign(kv, {
        displayName: 'Slot',
        componentMetadata: {
          componentName: 'Slot',
          configure: {
            props: [
              {
                name: '___title',
                title: '\u63d2\u69fd\u6807\u9898',
                setter: 'StringSetter',
                defaultValue: '\u63d2\u69fd\u5bb9\u5668',
              },
              {
                name: '___params',
                title: '\u63d2\u69fd\u5165\u53c2',
                setter: {
                  componentName: 'ArraySetter',
                  props: {
                    itemSetter: {
                      componentName: 'StringSetter',
                      props: { placeholder: '\u53c2\u6570\u540d\u79f0' },
                    },
                  },
                },
              },
            ],
            component: { isContainer: !0, disableBehaviors: '*' },
            supports: !1,
          },
        },
      });
      var Mv = kv;
      function Dv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Uv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Dv(Object(n), !0).forEach(function (t) {
                Gv(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Dv(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Gv(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Fv = Object(o.defineComponent)(function (e, t) {
        var n = t.slots;
        return function () {
          return Object(o.h)('div', Uv({ class: 'lc-page' }, e), n);
        };
      });
      Object.assign(Fv, {
        displayName: 'Page',
        componentMetadata: {
          componentName: 'Page',
          configure: {
            supports: { style: !0, className: !0 },
            component: { isContainer: !0, disableBehaviors: '*' },
          },
        },
      });
      var $v = Fv,
        Vv = window.LCSimulatorHost,
        Jv = document.createRange();
      function zv(e) {
        return e.parentNode
          ? mh(e)
            ? [e.getBoundingClientRect()]
            : (Jv.selectNode(e), Array.from(Jv.getClientRects()))
          : [];
      }
      function qv(e) {
        return (qv =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Kv(e) {
        return null != e;
      }
      function Xv(e) {
        return Kv(e) && 'object' === qv(e);
      }
      function Wv(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Yv(e, t, n) {
        return (
          t && Wv(e.prototype, t),
          n && Wv(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function Zv(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function Qv(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var em = Symbol('_LCDocId'),
        tm = Symbol('_LCNodeId'),
        nm = Symbol('_LCVueInstance'),
        rm = Symbol('_LCVueCompRecord'),
        om = Yv(function e(t, n, r) {
          Zv(this, e), Qv(this, rm, !0), (this.did = t), (this.nid = n), (this.cid = r);
        });
      function im(e) {
        return Xv(e) && fh(e.__vueParentComponent);
      }
      function am(e) {
        return Xv(e) && em in e;
      }
      function um(e) {
        return Xv(e) && rm in e;
      }
      function cm(e) {
        return Xv(e) && Object(o.isProxy)(e.proxy);
      }
      function sm(e) {
        return { docId: e[em], nodeId: e[tm], instance: e[nm] };
      }
      function lm(e, t) {
        (e[em] = t.docId), (e[tm] = t.nodeId), (e[nm] = t.instance);
      }
      function fm(e) {
        return 8 === e.nodeType;
      }
      function hm(e) {
        return 3 === e.nodeType;
      }
      function pm(e) {
        return fm(e) || (hm(e) && '' === e.nodeValue);
      }
      function dm() {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e = console).warn.apply(e, ['[vue-simulator-renderer]:'].concat(n));
      }
      function vm(e, t) {
        return document.contains(e)
          ? im(e)
            ? mm(e.__vueParentComponent, t)
            : (fm(e) ||
                '__vue_app__' in e ||
                (dm(
                  '__vnode \u6ca1\u6709\u627e\u5230\uff0c\u8bf7\u4f7f\u7528 vue \u975e\u751f\u4ea7\u73af\u5883\u7248\u672c',
                ),
                dm('https://unpkg.com/vue/dist/vue.runtime.global.js')),
              ym(e, t))
          : null;
        var n;
      }
      function mm(e, t) {
        for (; e; ) {
          var n = e.vnode.el;
          if (n && am(n)) {
            var r = sm(n),
              o = r.nodeId,
              i = r.docId,
              a = r.instance;
            if (!t || t === o) return { docId: i, nodeId: o, instance: new om(i, o, a.$.uid) };
          }
          e = e.parent;
        }
        return null;
      }
      function ym(e, t) {
        for (; e; ) {
          if (am(e)) {
            var n = sm(e),
              r = n.nodeId,
              o = n.docId,
              i = n.instance;
            if (!t || t === r) return { docId: o, nodeId: r, instance: new om(o, r, i.$.uid) };
          }
          e = e.parentElement;
        }
        return null;
      }
      function bm(e) {
        var t = [],
          n = e.$el;
        return (
          pm(n)
            ? (gm(t, e.$, n, function (e) {
                return e.previousSibling;
              }),
              gm(t, e.$, n, function (e) {
                return e.nextSibling;
              }))
            : t.push(n),
          t
        );
      }
      function gm(e, t, n, r) {
        for (var o = r(n); o; ) {
          if (!pm(o)) {
            var i;
            if (im(o))
              if (_m(t, o.__vueParentComponent)) {
                e.unshift(o), (o = r(o));
                continue;
              }
            break;
          }
          o = r(o);
        }
      }
      function _m(e, t) {
        return null != t && !(e.uid > t.uid) && (e.uid === t.uid || _m(e, t.parent));
      }
      function Om(e, t) {
        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (!n) {
          if (Array.isArray(e) || (n = Em(e)) || (t && e && 'number' == typeof e.length)) {
            n && (e = n);
            var r = 0,
              o = function e() {};
            return {
              s: o,
              n: function t() {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
              },
              e: function e(t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i = !0,
          a = !1,
          u;
        return {
          s: function t() {
            n = n.call(e);
          },
          n: function e() {
            var t = n.next();
            return (i = t.done), t;
          },
          e: function e(t) {
            (a = !0), (u = t);
          },
          f: function e() {
            try {
              i || null == n.return || n.return();
            } finally {
              if (a) throw u;
            }
          },
        };
      }
      function Em(e, t) {
        if (e) {
          if ('string' == typeof e) return wm(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? wm(e, t)
              : void 0
          );
        }
      }
      function wm(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Sm(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function jm(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Am(e, t, n) {
        return (
          t && jm(e.prototype, t),
          n && jm(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function xm(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Tm,
        Pm = new ((function () {
          function e() {
            Sm(this, e), xm(this, 'states', new Set());
          }
          return (
            Am(e, [
              {
                key: 'setDragging',
                value: function e(t) {
                  t ? this.addState('dragging') : this.removeState('dragging');
                },
              },
              {
                key: 'setXResizing',
                value: function e(t) {
                  t ? this.addState('x-resizing') : this.removeState('x-resizing');
                },
              },
              {
                key: 'setYResizing',
                value: function e(t) {
                  t ? this.addState('y-resizing') : this.removeState('y-resizing');
                },
              },
              {
                key: 'setCopy',
                value: function e(t) {
                  t ? this.addState('copy') : this.removeState('copy');
                },
              },
              {
                key: 'isCopy',
                value: function e() {
                  return this.states.has('copy');
                },
              },
              {
                key: 'release',
                value: function e() {
                  var t = Om(this.states),
                    n;
                  try {
                    for (t.s(); !(n = t.n()).done; ) {
                      var r = n.value;
                      this.removeState(r);
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                },
              },
              {
                key: 'addState',
                value: function e(t) {
                  this.states.has(t) ||
                    (this.states.add(t),
                    document.documentElement.classList.add('lc-cursor-'.concat(t)));
                },
              },
              {
                key: 'removeState',
                value: function e(t) {
                  this.states.has(t) &&
                    (this.states.delete(t),
                    document.documentElement.classList.remove('lc-cursor-'.concat(t)));
                },
              },
            ]),
            e
          );
        })())(),
        Lm = !0,
        Cm = function e(t) {
          return Lm ? null : (t.preventDefault(), t.stopPropagation(), !1);
        };
      function Rm(e) {
        Lm = e;
      }
      function Im(e) {
        return (Im =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Nm() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Nm =
          function t() {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = 'function' == typeof Symbol ? Symbol : {},
          o = r.iterator || '@@iterator',
          i = r.asyncIterator || '@@asyncIterator',
          a = r.toStringTag || '@@toStringTag';
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, '');
        } catch (e) {
          u = function e(t, n, r) {
            return (t[n] = r);
          };
        }
        function c(e, t, n, r) {
          var o = t && t.prototype instanceof f ? t : f,
            i = Object.create(o.prototype),
            a = new w(r || []);
          return (
            (i._invoke = (function (e, t, n) {
              var r = 'suspendedStart';
              return function (o, i) {
                if ('executing' === r) throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === o) throw i;
                  return j();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var u = _(a, n);
                    if (u) {
                      if (u === l) continue;
                      return u;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = 'executing';
                  var c = s(e, t, n);
                  if ('normal' === c.type) {
                    if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === l)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  'throw' === c.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
                }
              };
            })(e, n, a)),
            i
          );
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = c;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        u(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])));
        m && m !== t && n.call(m, o) && (d = m);
        var y = (p.prototype = f.prototype = Object.create(d));
        function b(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function g(e, t) {
          function r(o, i, a, u) {
            var c = s(e[o], e, i);
            if ('throw' !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && 'object' == Im(f) && n.call(f, '__await')
                ? t.resolve(f.__await).then(
                    function (e) {
                      r('next', e, a, u);
                    },
                    function (e) {
                      r('throw', e, a, u);
                    },
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), a(l);
                    },
                    function (e) {
                      return r('throw', e, a, u);
                    },
                  );
            }
            u(c.arg);
          }
          var o;
          this._invoke = function (e, n) {
            function i() {
              return new t(function (t, o) {
                r(e, n, t, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function _(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), _(e, t), 'throw' === t.method)
              )
                return l;
              (t.method = 'throw'),
                (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return l;
          }
          var r = s(n, e.iterator, t.arg);
          if ('throw' === r.type)
            return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), l;
          var o = r.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function w(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(O, this), this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
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
          u(y, 'constructor', p),
          u(p, 'constructor', h),
          (h.displayName = u(p, a, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === h || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), u(e, a, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(g.prototype),
          u(g.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new g(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(y),
          u(y, a, 'Generator'),
          u(y, o, function () {
            return this;
          }),
          u(y, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = S),
          (w.prototype = {
            constructor: w,
            reset: function e(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = void 0);
            },
            stop: function e() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function e(t) {
              if (this.done) throw t;
              var r = this;
              function o(e, n) {
                return (
                  (u.type = 'throw'),
                  (u.arg = t),
                  (r.next = e),
                  n && ((r.method = 'next'), (r.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, 'catchLoc'),
                    s = n.call(a, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s) throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function e(t, r) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o];
                if (i.tryLoc <= this.prev && n.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var a = i;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= r &&
                r <= a.finallyLoc &&
                (a = null);
              var u = a ? a.completion : {};
              return (
                (u.type = t),
                (u.arg = r),
                a ? ((this.method = 'next'), (this.next = a.finallyLoc), l) : this.complete(u)
              );
            },
            complete: function e(t, n) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === t.type && n && (this.next = n),
                l
              );
            },
            finish: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc === t) {
                  var o = r.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    E(r);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function e(t, n, r) {
              return (
                (this.delegate = { iterator: S(t), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      function Bm(e, t, n, r, o, i, a) {
        try {
          var u = e[i](a),
            c = u.value;
        } catch (e) {
          return void n(e);
        }
        u.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function Hm(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              Bm(i, r, o, a, u, 'next', e);
            }
            function u(e) {
              Bm(i, r, o, a, u, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      function km(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Mm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? km(Object(n), !0).forEach(function (t) {
                Dm(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : km(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Dm(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Um(e, t) {
        return Jm(e) || Vm(e, t) || Fm(e, t) || Gm();
      }
      function Gm() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function Fm(e, t) {
        if (e) {
          if ('string' == typeof e) return $m(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? $m(e, t)
              : void 0
          );
        }
      }
      function $m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Vm(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r = [],
            o = !0,
            i = !1,
            a,
            u;
          try {
            for (
              n = n.call(e);
              !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t);
              o = !0
            );
          } catch (e) {
            (i = !0), (u = e);
          } finally {
            try {
              o || null == n.return || n.return();
            } finally {
              if (i) throw u;
            }
          }
          return r;
        }
      }
      function Jm(e) {
        if (Array.isArray(e)) return e;
      }
      document.addEventListener('selectstart', Cm, !0),
        document.addEventListener('dragstart', Cm, !0);
      var zm = new Mh(),
        qm = { Slot: Mv, Leaf: Hv, Page: $v };
      function Km(e) {
        var t = new Map(),
          n = new Map(),
          i = Object(o.ref)(Date.now()),
          a = function e(t) {
            return t.$.isMounted;
          },
          u = function e(t, n, r) {
            var o = r
              ? r.map(function (e) {
                  return new om(t, n, e.$.uid);
                })
              : null;
            Vv.setInstance(t, n, o);
          },
          c = function e(t) {
            return n.get(t);
          },
          s = function r(i, c) {
            var s = e.id;
            if (null != c) {
              var f = c.$el,
                h = sm(f).nodeId;
              h && h !== i && l(h, c),
                Object(o.onUnmounted)(function () {
                  return l(i, c);
                }, c.$),
                lm(f, { nodeId: i, docId: s, instance: c });
              var p = t.get(i);
              if (p) {
                var d = p.length,
                  v = (p = p.filter(a)).length !== d;
                if ((p.includes(c) || (p.push(c), (v = !0)), !v)) return;
              } else p = [c];
              n.set(c.$.uid, c), t.set(i, p), u(s, i, p);
            } else {
              var m = t.get(i);
              m &&
                ((m = m.filter(a)).length > 0
                  ? (t.set(i, m), u(s, i, m))
                  : (t.delete(i), u(s, i, null)));
            }
          },
          l = function r(o, i) {
            var a = t.get(o);
            if (a) {
              var c = a.indexOf(i);
              if (c > -1) {
                var s,
                  l,
                  f = Um(a.splice(c, 1), 1)[0];
                n.delete(f.$.uid), u(e.id, o, a);
              }
            }
          },
          f = function t(n) {
            return n ? e.getNode(n) : null;
          };
        return Object(o.reactive)({
          id: Object(o.computed)(function () {
            return e.id;
          }),
          path: Object(o.computed)(function () {
            var t = e.fileName;
            return t.startsWith('/') ? t : '/'.concat(t);
          }),
          key: Object(o.computed)(function () {
            return ''.concat(e.id, ':').concat(i.value);
          }),
          schema: Object(o.computed)(function () {
            return e.export(r.TransformStage.Render);
          }),
          document: Object(o.computed)(function () {
            return e;
          }),
          instancesMap: Object(o.computed)(function () {
            return t;
          }),
          getNode: f,
          mountInstance: s,
          unmountIntance: l,
          getComponentInstance: c,
          rerender: function e() {
            i.value = Date.now();
          },
        });
      }
      function Xm() {
        var e = Object(o.shallowRef)({}),
          t = Object(o.shallowRef)('default'),
          n = Object(o.shallowRef)(),
          r = Object(o.shallowRef)(Vv.autoRender),
          i = Object(o.shallowRef)('design'),
          a = Object(o.shallowRef)({}),
          u = Object(o.shallowRef)({}),
          c = Object(o.shallowRef)({}),
          s = Object(o.shallowRef)({}),
          l = Object(o.shallowRef)([]),
          f = [],
          h = new Map();
        function p() {
          u.value = Mm(Mm({}, qm), wh(a.value, c.value, d.createComponent));
        }
        var d = Object(o.reactive)({
          config: Object(o.markRaw)(ch),
          layout: e,
          device: t,
          designMode: i,
          libraryMap: a,
          components: u,
          autoRender: r,
          componentsMap: c,
          documentInstances: l,
          requestHandlersMap: s,
          isSimulatorRenderer: !0,
        });
        (d.app = Object(o.markRaw)(Object(o.createApp)(Iv, { simulator: d }))),
          (d.router = Object(o.markRaw)(Sv({ history: Pp('/'), routes: [] }))),
          (d.getComponent = function (e) {
            for (var t = e.split('.'), n = []; t.length > 0; ) {
              var r = u.value[e];
              if (r) return Oh(r, n);
              var o = t.pop();
              if (!o) break;
              n.unshift(o), (e = t.join('.'));
            }
            return null;
          }),
          (d.getClosestNodeInstance = function (e, t) {
            if (um(e)) {
              var n,
                r = e.cid,
                o = e.did,
                i = h.get(o),
                a =
                  null !== (n = null == i ? void 0 : i.getComponentInstance(r)) && void 0 !== n
                    ? n
                    : null;
              return a && mm(a.$, t);
            }
            return vm(e, t);
          }),
          (d.findDOMNodes = function (e) {
            if (e) {
              var t = e.did,
                n = e.cid,
                r = h.get(t),
                o = null == r ? void 0 : r.getComponentInstance(n);
              return o ? bm(o) : null;
            }
            return null;
          }),
          (d.getClientRects = function (e) {
            return zv(e);
          }),
          (d.setNativeSelection = function (e) {
            return Rm(e);
          }),
          (d.setDraggingState = function (e) {
            return Pm.setDragging(e);
          }),
          (d.setCopyState = function (e) {
            return Pm.setCopy(e);
          }),
          (d.clearState = function () {
            return Pm.release();
          }),
          (d.createComponent = function () {
            return null;
          }),
          (d.rerender = function () {
            return l.value.forEach(function (e) {
              return e.rerender();
            });
          }),
          (d.dispose = function () {
            d.app.unmount(),
              f.forEach(function (e) {
                return e();
              });
          }),
          (d.getCurrentDocument = function () {
            var e = Vv.project.currentDocument,
              t;
            return l.value.find(function (t) {
              return t.id === e.id;
            });
          });
        var v = !1;
        return (
          (d.run = function () {
            if (!v) {
              v = !0;
              var e = 'app',
                t = document.getElementById('app');
              t ||
                ((t = document.createElement('div')), document.body.appendChild(t), (t.id = 'app')),
                document.documentElement.classList.add('engine-page'),
                document.body.classList.add('engine-document'),
                d.app.use(d.router).mount(t),
                Vv.project.setRendererReady(d);
            }
          }),
          f.push(
            Vv.connect(d, function () {
              (e.value = Vv.project.get('config').layout),
                (a.value === Vv.libraryMap && c.value === Vv.designer.componentsMap) ||
                  ((a.value = Vv.libraryMap || {}), (c.value = Vv.designer.componentsMap), p()),
                (n.value = Vv.locale),
                (t.value = Vv.device),
                (i.value = Vv.designMode),
                (s.value = Vv.requestHandlersMap);
            }),
          ),
          f.push(
            Vv.autorun(function () {
              var e = d.router;
              (l.value = Vv.project.documents.map(function (t) {
                var n = h.get(t.id);
                return (
                  n ||
                    ((n = Km(t)),
                    h.set(t.id, n),
                    e.addRoute({
                      name: n.id,
                      path: n.path,
                      component: Nv,
                      props: function e() {
                        var t;
                        return {
                          key: null === (t = n) || void 0 === t ? void 0 : t.key,
                          documentInstance: n,
                          simulator: d,
                        };
                      },
                    })),
                  n
                );
              })),
                e.getRoutes().forEach(function (t) {
                  var n = t.name,
                    r;
                  l.value.some(function (e) {
                    return e.id === n;
                  }) || (e.removeRoute(n), h.delete(n));
                });
              var t = d.getCurrentDocument();
              t && t.id !== e.currentRoute.value.name && e.replace({ name: t.id });
            }),
          ),
          Vv.componentsConsumer.consume(
            (function () {
              var e = Hm(
                Nm().mark(function e(t) {
                  return Nm().wrap(function e(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (!t) {
                            n.next = 4;
                            break;
                          }
                          return (n.next = 3), zm.load(t);
                        case 3:
                          p();
                        case 4:
                        case 'end':
                          return n.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
          Vv.injectionConsumer.consume(function () {}),
          d
        );
      }
      var Wm = Xm(),
        Ym = n(58),
        Zm = window;
      void 0 !== Zm && (Zm.SimulatorRenderer = Wm),
        Zm.addEventListener('beforeunload', function () {
          (Zm.LCSimulatorHost = null), (Zm.SimulatorRenderer = null), Wm.dispose();
        });
      var Qm = (t.default = Wm);
    },
  ]);
});
