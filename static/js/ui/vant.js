!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('vue'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'vue'], t)
    : t(((e = 'undefined' != typeof globalThis ? globalThis : e || self).vant = {}), e.Vue);
})(this, function (e, t) {
  'use strict';
  const o = (e) => null != e,
    n = (e) => 'function' == typeof e,
    a = (e) => null !== e && 'object' == typeof e,
    r = (e) => a(e) && n(e.then) && n(e.catch),
    l = (e) => '[object Date]' === Object.prototype.toString.call(e) && !Number.isNaN(e.getTime());
  function i(e) {
    return (
      (e = e.replace(/[^-|\d]/g, '')),
      /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
    );
  }
  const s = (e) => 'number' == typeof e || /^\d+(\.\d+)?$/.test(e);
  function c() {}
  const d = Object.assign,
    u = 'undefined' != typeof window;
  function p(e, t) {
    const o = t.split('.');
    let n = e;
    return (
      o.forEach((e) => {
        var t;
        n = a(n) && null != (t = n[e]) ? t : '';
      }),
      n
    );
  }
  function m(e, t, o) {
    return t.reduce((t, n) => ((o && void 0 === e[n]) || (t[n] = e[n]), t), {});
  }
  const f = (e, t) => JSON.stringify(e) === JSON.stringify(t),
    v = (e) => (Array.isArray(e) ? e : [e]),
    h = null,
    g = [Number, String],
    b = { type: Boolean, default: !0 },
    y = (e) => ({ type: e, required: !0 }),
    w = () => ({ type: Array, default: () => [] }),
    x = (e) => ({ type: Number, default: e }),
    V = (e) => ({ type: g, default: e }),
    N = (e) => ({ type: String, default: e });
  var C = 'undefined' != typeof window;
  function k(e) {
    return C ? requestAnimationFrame(e) : -1;
  }
  function S(e) {
    C && cancelAnimationFrame(e);
  }
  function T(e) {
    k(() => k(e));
  }
  var B = (e, t) => ({ top: 0, left: 0, right: e, bottom: t, width: e, height: t }),
    P = (e) => {
      const o = t.unref(e);
      if (o === window) {
        const e = o.innerWidth,
          t = o.innerHeight;
        return B(e, t);
      }
      return (null == o ? void 0 : o.getBoundingClientRect) ? o.getBoundingClientRect() : B(0, 0);
    };
  function D(e) {
    const o = t.inject(e, null);
    if (o) {
      const e = t.getCurrentInstance(),
        { link: n, unlink: a, internalChildren: r } = o;
      n(e), t.onUnmounted(() => a(e));
      return { parent: o, index: t.computed(() => r.indexOf(e)) };
    }
    return { parent: null, index: t.ref(-1) };
  }
  var O = (e, t) => {
    const o = e.indexOf(t);
    return -1 === o
      ? e.findIndex(
          (e) => void 0 !== t.key && null !== t.key && e.type === t.type && e.key === t.key,
        )
      : o;
  };
  function I(e, o, n) {
    const a = (function (e) {
      const o = [],
        n = (e) => {
          Array.isArray(e) &&
            e.forEach((e) => {
              var a;
              t.isVNode(e) &&
                (o.push(e),
                (null == (a = e.component) ? void 0 : a.subTree) &&
                  (o.push(e.component.subTree), n(e.component.subTree.children)),
                e.children && n(e.children));
            });
        };
      return n(e), o;
    })(e.subTree.children);
    n.sort((e, t) => O(a, e.vnode) - O(a, t.vnode));
    const r = n.map((e) => e.proxy);
    o.sort((e, t) => r.indexOf(e) - r.indexOf(t));
  }
  function A(e) {
    const o = t.reactive([]),
      n = t.reactive([]),
      a = t.getCurrentInstance();
    return {
      children: o,
      linkChildren: (r) => {
        t.provide(
          e,
          Object.assign(
            {
              link: (e) => {
                e.proxy && (n.push(e), o.push(e.proxy), I(a, o, n));
              },
              unlink: (e) => {
                const t = n.indexOf(e);
                o.splice(t, 1), n.splice(t, 1);
              },
              children: o,
              internalChildren: n,
            },
            r,
          ),
        );
      },
    };
  }
  var z,
    E,
    $ = 1e3,
    L = 6e4,
    M = 36e5,
    F = 24 * M;
  function R(e) {
    let o, n, a, r;
    const l = t.ref(e.time),
      i = t.computed(() => {
        return {
          total: (e = l.value),
          days: Math.floor(e / F),
          hours: Math.floor((e % F) / M),
          minutes: Math.floor((e % M) / L),
          seconds: Math.floor((e % L) / $),
          milliseconds: Math.floor(e % $),
        };
        var e;
      }),
      s = () => {
        (a = !1), S(o);
      },
      c = () => Math.max(n - Date.now(), 0),
      d = (t) => {
        var o, n;
        (l.value = t),
          null == (o = e.onChange) || o.call(e, i.value),
          0 === t && (s(), null == (n = e.onFinish) || n.call(e));
      },
      u = () => {
        o = k(() => {
          a && (d(c()), l.value > 0 && u());
        });
      },
      p = () => {
        o = k(() => {
          if (a) {
            const o = c();
            (e = o),
              (t = l.value),
              (Math.floor(e / 1e3) !== Math.floor(t / 1e3) || 0 === o) && d(o),
              l.value > 0 && p();
          }
          var e, t;
        });
      },
      m = () => {
        C && (e.millisecond ? u() : p());
      };
    return (
      t.onBeforeUnmount(s),
      t.onActivated(() => {
        r && ((a = !0), (r = !1), m());
      }),
      t.onDeactivated(() => {
        a && (s(), (r = !0));
      }),
      {
        start: () => {
          a || ((n = Date.now() + l.value), (a = !0), m());
        },
        pause: s,
        reset: (t = e.time) => {
          s(), (l.value = t);
        },
        current: i,
      }
    );
  }
  function H(e) {
    let o;
    t.onMounted(() => {
      e(),
        t.nextTick(() => {
          o = !0;
        });
    }),
      t.onActivated(() => {
        o && e();
      });
  }
  function j(e, o, n = {}) {
    if (!C) return;
    const { target: a = window, passive: r = !1, capture: l = !1 } = n;
    let i;
    const s = (n) => {
        const a = t.unref(n);
        a && !i && (a.addEventListener(e, o, { capture: l, passive: r }), (i = !0));
      },
      c = (n) => {
        const a = t.unref(n);
        a && i && (a.removeEventListener(e, o, l), (i = !1));
      };
    t.onUnmounted(() => c(a)),
      t.onDeactivated(() => c(a)),
      H(() => s(a)),
      t.isRef(a) &&
        t.watch(a, (e, t) => {
          c(t), s(e);
        });
  }
  function W(e, o, n = {}) {
    if (!C) return;
    const { eventName: a = 'click' } = n;
    j(
      a,
      (n) => {
        (Array.isArray(e) ? e : [e]).every((e) => {
          const o = t.unref(e);
          return o && !o.contains(n.target);
        }) && o(n);
      },
      { target: document },
    );
  }
  var U,
    q = /scroll|auto|overlay/i,
    Y = C ? window : void 0;
  function G(e) {
    return 'HTML' !== e.tagName && 'BODY' !== e.tagName && 1 === e.nodeType;
  }
  function X(e, t = Y) {
    let o = e;
    for (; o && o !== t && G(o); ) {
      const { overflowY: e } = window.getComputedStyle(o);
      if (q.test(e)) return o;
      o = o.parentNode;
    }
    return t;
  }
  function Z(e, o = Y) {
    const n = t.ref();
    return (
      t.onMounted(() => {
        e.value && (n.value = X(e.value, o));
      }),
      n
    );
  }
  var K = Symbol('van-field');
  function _(e) {
    const o = t.inject(K, null);
    o &&
      !o.customValue.value &&
      ((o.customValue.value = e),
      t.watch(e, () => {
        o.resetValidation(), o.validateWithTrigger('onChange');
      }));
  }
  function J(e) {
    const t = 'scrollTop' in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0);
  }
  function Q(e, t) {
    'scrollTop' in e ? (e.scrollTop = t) : e.scrollTo(e.scrollX, t);
  }
  function ee() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  function te(e) {
    Q(window, e), Q(document.body, e);
  }
  function oe(e, t) {
    if (e === window) return 0;
    const o = t ? J(t) : ee();
    return P(e).top + o;
  }
  const ne = !!u && /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
  function ae() {
    ne && te(ee());
  }
  const re = (e) => e.stopPropagation();
  function le(e, t) {
    ('boolean' != typeof e.cancelable || e.cancelable) && e.preventDefault(), t && re(e);
  }
  function ie(e) {
    const o = t.unref(e);
    if (!o) return !1;
    const n = window.getComputedStyle(o),
      a = 'none' === n.display,
      r = null === o.offsetParent && 'fixed' !== n.position;
    return a || r;
  }
  const { width: se, height: ce } = (function () {
    if (!z && ((z = t.ref(0)), (E = t.ref(0)), C)) {
      const e = () => {
        (z.value = window.innerWidth), (E.value = window.innerHeight);
      };
      e(),
        window.addEventListener('resize', e, { passive: !0 }),
        window.addEventListener('orientationchange', e, { passive: !0 });
    }
    return { width: z, height: E };
  })();
  function de(e) {
    if (o(e)) return s(e) ? `${e}px` : String(e);
  }
  function ue(e) {
    if (o(e)) {
      if (Array.isArray(e)) return { width: de(e[0]), height: de(e[1]) };
      const t = de(e);
      return { width: t, height: t };
    }
  }
  function pe(e) {
    const t = {};
    return void 0 !== e && (t.zIndex = +e), t;
  }
  let me;
  function fe(e) {
    return (
      +(e = e.replace(/rem/g, '')) *
      (function () {
        if (!me) {
          const e = document.documentElement,
            t = e.style.fontSize || window.getComputedStyle(e).fontSize;
          me = parseFloat(t);
        }
        return me;
      })()
    );
  }
  function ve(e) {
    if ('number' == typeof e) return e;
    if (u) {
      if (e.includes('rem')) return fe(e);
      if (e.includes('vw'))
        return (function (e) {
          return (+(e = e.replace(/vw/g, '')) * se.value) / 100;
        })(e);
      if (e.includes('vh'))
        return (function (e) {
          return (+(e = e.replace(/vh/g, '')) * ce.value) / 100;
        })(e);
    }
    return parseFloat(e);
  }
  const he = /-(\w)/g,
    ge = (e) => e.replace(he, (e, t) => t.toUpperCase());
  function be(e, t = 2) {
    let o = e + '';
    for (; o.length < t; ) o = '0' + o;
    return o;
  }
  const ye = (e, t, o) => Math.min(Math.max(e, t), o);
  function we(e, t, o) {
    const n = e.indexOf(t);
    return -1 === n
      ? e
      : '-' === t && 0 !== n
      ? e.slice(0, n)
      : e.slice(0, n + 1) + e.slice(n).replace(o, '');
  }
  function xe(e, t = !0, o = !0) {
    e = t ? we(e, '.', /\./g) : e.split('.')[0];
    const n = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return (e = o ? we(e, '-', /-/g) : e.replace(/-/, '')).replace(n, '');
  }
  function Ve(e, t) {
    const o = 10 ** 10;
    return Math.round((e + t) * o) / o;
  }
  const { hasOwnProperty: Ne } = Object.prototype;
  function Ce(e, t) {
    return (
      Object.keys(t).forEach((n) => {
        !(function (e, t, n) {
          const r = t[n];
          o(r) && (Ne.call(e, n) && a(r) ? (e[n] = Ce(Object(e[n]), r)) : (e[n] = r));
        })(e, t, n);
      }),
      e
    );
  }
  const ke = t.ref('zh-CN'),
    Se = t.reactive({
      'zh-CN': {
        name: '姓名',
        tel: '电话',
        save: '保存',
        confirm: '确认',
        cancel: '取消',
        delete: '删除',
        loading: '加载中...',
        noCoupon: '暂无优惠券',
        nameEmpty: '请填写姓名',
        addContact: '添加联系人',
        telInvalid: '请填写正确的电话',
        vanCalendar: {
          end: '结束',
          start: '开始',
          title: '日期选择',
          weekdays: ['日', '一', '二', '三', '四', '五', '六'],
          monthTitle: (e, t) => `${e}年${t}月`,
          rangePrompt: (e) => `最多选择 ${e} 天`,
        },
        vanCascader: { select: '请选择' },
        vanPagination: { prev: '上一页', next: '下一页' },
        vanPullRefresh: { pulling: '下拉即可刷新...', loosing: '释放即可刷新...' },
        vanSubmitBar: { label: '合计:' },
        vanCoupon: {
          unlimited: '无门槛',
          discount: (e) => `${e}折`,
          condition: (e) => `满${e}元可用`,
        },
        vanCouponCell: { title: '优惠券', count: (e) => `${e}张可用` },
        vanCouponList: {
          exchange: '兑换',
          close: '不使用',
          enable: '可用',
          disabled: '不可用',
          placeholder: '输入优惠码',
        },
        vanAddressEdit: {
          area: '地区',
          areaEmpty: '请选择地区',
          addressEmpty: '请填写详细地址',
          addressDetail: '详细地址',
          defaultAddress: '设为默认收货地址',
        },
        vanAddressList: { add: '新增地址' },
      },
    }),
    Te = {
      messages: () => Se[ke.value],
      use(e, t) {
        (ke.value = e), this.add({ [e]: t });
      },
      add(e = {}) {
        Ce(Se, e);
      },
    };
  var Be = Te;
  function Pe(e) {
    const t = ge(e) + '.';
    return (e, ...o) => {
      const a = Be.messages(),
        r = p(a, t + e) || p(a, e);
      return n(r) ? r(...o) : r;
    };
  }
  function De(e, t) {
    return t
      ? 'string' == typeof t
        ? ` ${e}--${t}`
        : Array.isArray(t)
        ? t.reduce((t, o) => t + De(e, o), '')
        : Object.keys(t).reduce((o, n) => o + (t[n] ? De(e, n) : ''), '')
      : '';
  }
  function Oe(e) {
    return (t, o) => (
      t && 'string' != typeof t && ((o = t), (t = '')), `${(t = t ? `${e}__${t}` : e)}${De(t, o)}`
    );
  }
  function Ie(e) {
    const t = `van-${e}`;
    return [t, Oe(t), Pe(t)];
  }
  const Ae = 'van-hairline',
    ze = `${Ae}--top`,
    Ee = `${Ae}--left`,
    $e = `${Ae}--bottom`,
    Le = `${Ae}--surround`,
    Me = `${Ae}--top-bottom`,
    Fe = `${Ae}-unset--top-bottom`,
    Re = 'van-haptics-feedback',
    He = Symbol('van-form');
  function je(e, { args: t = [], done: o, canceled: n }) {
    if (e) {
      const a = e.apply(null, t);
      r(a)
        ? a
            .then((e) => {
              e ? o() : n && n();
            })
            .catch(c)
        : a
        ? o()
        : n && n();
    } else o();
  }
  function We(e) {
    return (
      (e.install = (t) => {
        const { name: o } = e;
        o && (t.component(o, e), t.component(ge(`-${o}`), e));
      }),
      e
    );
  }
  const Ue = Symbol();
  function qe(e) {
    const o = t.inject(Ue, null);
    o &&
      t.watch(o, (t) => {
        t && e();
      });
  }
  const Ye = (e, o) => {
    const n = t.ref(),
      a = () => {
        n.value = P(e).height;
      };
    return (
      t.onMounted(() => {
        if ((t.nextTick(a), o)) for (let e = 1; e <= 3; e++) setTimeout(a, 100 * e);
      }),
      qe(() => t.nextTick(a)),
      t.watch([se, ce], a),
      n
    );
  };
  function Ge(e, o) {
    const n = Ye(e, !0);
    return (e) =>
      t.createVNode(
        'div',
        { class: o('placeholder'), style: { height: n.value ? `${n.value}px` : void 0 } },
        [e()],
      );
  }
  const [Xe, Ze] = Ie('action-bar'),
    Ke = Symbol(Xe),
    _e = { placeholder: Boolean, safeAreaInsetBottom: b };
  const Je = We(
    t.defineComponent({
      name: Xe,
      props: _e,
      setup(e, { slots: o }) {
        const n = t.ref(),
          a = Ge(n, Ze),
          { linkChildren: r } = A(Ke);
        r();
        const l = () => {
          var a;
          return t.createVNode(
            'div',
            { ref: n, class: [Ze(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] },
            [null == (a = o.default) ? void 0 : a.call(o)],
          );
        };
        return () => (e.placeholder ? a(l) : l());
      },
    }),
  );
  function Qe(e) {
    const o = t.getCurrentInstance();
    o && d(o.proxy, e);
  }
  const et = { to: [String, Object], url: String, replace: Boolean };
  function tt({ to: e, url: t, replace: o, $router: n }) {
    e && n ? n[o ? 'replace' : 'push'](e) : t && (o ? location.replace(t) : (location.href = t));
  }
  function ot() {
    const e = t.getCurrentInstance().proxy;
    return () => tt(e);
  }
  const [nt, at] = Ie('badge'),
    rt = {
      dot: Boolean,
      max: g,
      tag: N('div'),
      color: String,
      offset: Array,
      content: g,
      showZero: b,
      position: N('top-right'),
    };
  const lt = We(
    t.defineComponent({
      name: nt,
      props: rt,
      setup(e, { slots: n }) {
        const a = () => {
            if (n.content) return !0;
            const { content: t, showZero: a } = e;
            return o(t) && '' !== t && (a || (0 !== t && '0' !== t));
          },
          r = () => {
            const { dot: t, max: r, content: l } = e;
            if (!t && a()) return n.content ? n.content() : o(r) && s(l) && +l > r ? `${r}+` : l;
          },
          l = (e) => (e.startsWith('-') ? e.replace('-', '') : `-${e}`),
          i = t.computed(() => {
            const t = { background: e.color };
            if (e.offset) {
              const [o, a] = e.offset,
                { position: r } = e,
                [i, s] = r.split('-');
              n.default
                ? ((t[i] =
                    'number' == typeof a ? de('top' === i ? a : -a) : 'top' === i ? de(a) : l(a)),
                  (t[s] =
                    'number' == typeof o ? de('left' === s ? o : -o) : 'left' === s ? de(o) : l(o)))
                : ((t.marginTop = de(a)), (t.marginLeft = de(o)));
            }
            return t;
          }),
          c = () => {
            if (a() || e.dot)
              return t.createVNode(
                'div',
                { class: at([e.position, { dot: e.dot, fixed: !!n.default }]), style: i.value },
                [r()],
              );
          };
        return () => {
          if (n.default) {
            const { tag: o } = e;
            return t.createVNode(
              o,
              { class: at('wrapper') },
              { default: () => [n.default(), c()] },
            );
          }
          return c();
        };
      },
    }),
  );
  let it = 2e3;
  const [st, ct] = Ie('config-provider'),
    dt = Symbol(st),
    ut = {
      tag: N('div'),
      theme: N('light'),
      zIndex: Number,
      themeVars: Object,
      themeVarsDark: Object,
      themeVarsLight: Object,
      iconPrefix: String,
    };
  var pt = t.defineComponent({
    name: st,
    props: ut,
    setup(e, { slots: o }) {
      const n = t.computed(() =>
        (function (e) {
          const t = {};
          return (
            Object.keys(e).forEach((o) => {
              var n;
              t[
                `--van-${
                  ((n = o),
                  n
                    .replace(/([A-Z])/g, '-$1')
                    .toLowerCase()
                    .replace(/^-/, ''))
                }`
              ] = e[o];
            }),
            t
          );
        })(d({}, e.themeVars, 'dark' === e.theme ? e.themeVarsDark : e.themeVarsLight)),
      );
      if (u) {
        const o = () => {
            document.documentElement.classList.add(`van-theme-${e.theme}`);
          },
          n = (t = e.theme) => {
            document.documentElement.classList.remove(`van-theme-${t}`);
          };
        t.watch(
          () => e.theme,
          (e, t) => {
            t && n(t), o();
          },
          { immediate: !0 },
        ),
          t.onActivated(o),
          t.onDeactivated(n),
          t.onBeforeUnmount(n);
      }
      return (
        t.provide(dt, e),
        t.watchEffect(() => {
          var t;
          void 0 !== e.zIndex && ((t = e.zIndex), (it = t));
        }),
        () =>
          t.createVNode(
            e.tag,
            { class: ct(), style: n.value },
            {
              default: () => {
                var e;
                return [null == (e = o.default) ? void 0 : e.call(o)];
              },
            },
          )
      );
    },
  });
  const [mt, ft] = Ie('icon'),
    vt = {
      dot: Boolean,
      tag: N('i'),
      name: String,
      size: g,
      badge: g,
      color: String,
      badgeProps: Object,
      classPrefix: String,
    };
  const ht = We(
      t.defineComponent({
        name: mt,
        props: vt,
        setup(e, { slots: o }) {
          const n = t.inject(dt, null),
            a = t.computed(() => e.classPrefix || (null == n ? void 0 : n.iconPrefix) || ft());
          return () => {
            const { tag: n, dot: r, name: l, size: i, badge: s, color: c } = e,
              d = ((e) => (null == e ? void 0 : e.includes('/')))(l);
            return t.createVNode(
              lt,
              t.mergeProps(
                {
                  dot: r,
                  tag: n,
                  class: [a.value, d ? '' : `${a.value}-${l}`],
                  style: { color: c, fontSize: de(i) },
                  content: s,
                },
                e.badgeProps,
              ),
              {
                default: () => {
                  var e;
                  return [
                    null == (e = o.default) ? void 0 : e.call(o),
                    d && t.createVNode('img', { class: ft('image'), src: l }, null),
                  ];
                },
              },
            );
          };
        },
      }),
    ),
    [gt, bt] = Ie('loading'),
    yt = Array(12)
      .fill(null)
      .map((e, o) => t.createVNode('i', { class: bt('line', String(o + 1)) }, null)),
    wt = t.createVNode('svg', { class: bt('circular'), viewBox: '25 25 50 50' }, [
      t.createVNode('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null),
    ]),
    xt = {
      size: g,
      type: N('circular'),
      color: String,
      vertical: Boolean,
      textSize: g,
      textColor: String,
    };
  const Vt = We(
      t.defineComponent({
        name: gt,
        props: xt,
        setup(e, { slots: o }) {
          const n = t.computed(() => d({ color: e.color }, ue(e.size))),
            a = () => {
              const a = 'spinner' === e.type ? yt : wt;
              return t.createVNode('span', { class: bt('spinner', e.type), style: n.value }, [
                o.icon ? o.icon() : a,
              ]);
            },
            r = () => {
              var n;
              if (o.default)
                return t.createVNode(
                  'span',
                  {
                    class: bt('text'),
                    style: {
                      fontSize: de(e.textSize),
                      color: null != (n = e.textColor) ? n : e.color,
                    },
                  },
                  [o.default()],
                );
            };
          return () => {
            const { type: o, vertical: n } = e;
            return t.createVNode(
              'div',
              { class: bt([o, { vertical: n }]), 'aria-live': 'polite', 'aria-busy': !0 },
              [a(), r()],
            );
          };
        },
      }),
    ),
    [Nt, Ct] = Ie('button'),
    kt = d({}, et, {
      tag: N('button'),
      text: String,
      icon: String,
      type: N('default'),
      size: N('normal'),
      color: String,
      block: Boolean,
      plain: Boolean,
      round: Boolean,
      square: Boolean,
      loading: Boolean,
      hairline: Boolean,
      disabled: Boolean,
      iconPrefix: String,
      nativeType: N('button'),
      loadingSize: g,
      loadingText: String,
      loadingType: String,
      iconPosition: N('left'),
    });
  const St = We(
      t.defineComponent({
        name: Nt,
        props: kt,
        emits: ['click'],
        setup(e, { emit: o, slots: n }) {
          const a = ot(),
            r = () =>
              e.loading
                ? n.loading
                  ? n.loading()
                  : t.createVNode(
                      Vt,
                      { size: e.loadingSize, type: e.loadingType, class: Ct('loading') },
                      null,
                    )
                : n.icon
                ? t.createVNode('div', { class: Ct('icon') }, [n.icon()])
                : e.icon
                ? t.createVNode(
                    ht,
                    { name: e.icon, class: Ct('icon'), classPrefix: e.iconPrefix },
                    null,
                  )
                : void 0,
            l = () => {
              let o;
              if (((o = e.loading ? e.loadingText : n.default ? n.default() : e.text), o))
                return t.createVNode('span', { class: Ct('text') }, [o]);
            },
            i = () => {
              const { color: t, plain: o } = e;
              if (t) {
                const e = { color: o ? t : 'white' };
                return (
                  o || (e.background = t),
                  t.includes('gradient') ? (e.border = 0) : (e.borderColor = t),
                  e
                );
              }
            },
            s = (t) => {
              e.loading ? le(t) : e.disabled || (o('click', t), a());
            };
          return () => {
            const {
                tag: o,
                type: n,
                size: a,
                block: c,
                round: d,
                plain: u,
                square: p,
                loading: m,
                disabled: f,
                hairline: v,
                nativeType: h,
                iconPosition: g,
              } = e,
              b = [
                Ct([
                  n,
                  a,
                  { plain: u, block: c, round: d, square: p, loading: m, disabled: f, hairline: v },
                ]),
                { [Le]: v },
              ];
            return t.createVNode(
              o,
              { type: h, class: b, style: i(), disabled: f, onClick: s },
              {
                default: () => [
                  t.createVNode('div', { class: Ct('content') }, [
                    'left' === g && r(),
                    l(),
                    'right' === g && r(),
                  ]),
                ],
              },
            );
          };
        },
      }),
    ),
    [Tt, Bt] = Ie('action-bar-button'),
    Pt = d({}, et, {
      type: String,
      text: String,
      icon: String,
      color: String,
      loading: Boolean,
      disabled: Boolean,
    });
  const Dt = We(
      t.defineComponent({
        name: Tt,
        props: Pt,
        setup(e, { slots: o }) {
          const n = ot(),
            { parent: a, index: r } = D(Ke),
            l = t.computed(() => {
              if (a) {
                const e = a.children[r.value - 1];
                return !(e && 'isButton' in e);
              }
            }),
            i = t.computed(() => {
              if (a) {
                const e = a.children[r.value + 1];
                return !(e && 'isButton' in e);
              }
            });
          return (
            Qe({ isButton: !0 }),
            () => {
              const { type: a, icon: r, text: s, color: c, loading: d, disabled: u } = e;
              return t.createVNode(
                St,
                {
                  class: Bt([a, { last: i.value, first: l.value }]),
                  size: 'large',
                  type: a,
                  icon: r,
                  color: c,
                  loading: d,
                  disabled: u,
                  onClick: n,
                },
                { default: () => [o.default ? o.default() : s] },
              );
            }
          );
        },
      }),
    ),
    [Ot, It] = Ie('action-bar-icon'),
    At = d({}, et, {
      dot: Boolean,
      text: String,
      icon: String,
      color: String,
      badge: g,
      iconClass: h,
      badgeProps: Object,
      iconPrefix: String,
    });
  const zt = We(
      t.defineComponent({
        name: Ot,
        props: At,
        setup(e, { slots: o }) {
          const n = ot();
          D(Ke);
          const a = () => {
            const {
              dot: n,
              badge: a,
              icon: r,
              color: l,
              iconClass: i,
              badgeProps: s,
              iconPrefix: c,
            } = e;
            return o.icon
              ? t.createVNode(lt, t.mergeProps({ dot: n, class: It('icon'), content: a }, s), {
                  default: o.icon,
                })
              : t.createVNode(
                  ht,
                  {
                    tag: 'div',
                    dot: n,
                    name: r,
                    badge: a,
                    color: l,
                    class: [It('icon'), i],
                    badgeProps: s,
                    classPrefix: c,
                  },
                  null,
                );
          };
          return () =>
            t.createVNode('div', { role: 'button', class: It(), tabindex: 0, onClick: n }, [
              a(),
              o.default ? o.default() : e.text,
            ]);
        },
      }),
    ),
    Et = {
      show: Boolean,
      zIndex: g,
      overlay: b,
      duration: g,
      teleport: [String, Object],
      lockScroll: b,
      lazyRender: b,
      beforeClose: Function,
      overlayStyle: Object,
      overlayClass: h,
      transitionAppear: Boolean,
      closeOnClickOverlay: b,
    },
    $t = Object.keys(Et);
  function Lt() {
    const e = t.ref(0),
      o = t.ref(0),
      n = t.ref(0),
      a = t.ref(0),
      r = t.ref(0),
      l = t.ref(0),
      i = t.ref(''),
      s = () => {
        (n.value = 0), (a.value = 0), (r.value = 0), (l.value = 0), (i.value = '');
      };
    return {
      move: (t) => {
        const s = t.touches[0];
        (n.value = (s.clientX < 0 ? 0 : s.clientX) - e.value),
          (a.value = s.clientY - o.value),
          (r.value = Math.abs(n.value)),
          (l.value = Math.abs(a.value));
        var c, d;
        (!i.value || (r.value < 10 && l.value < 10)) &&
          (i.value =
            ((c = r.value), (d = l.value), c > d ? 'horizontal' : d > c ? 'vertical' : ''));
      },
      start: (t) => {
        s(), (e.value = t.touches[0].clientX), (o.value = t.touches[0].clientY);
      },
      reset: s,
      startX: e,
      startY: o,
      deltaX: n,
      deltaY: a,
      offsetX: r,
      offsetY: l,
      direction: i,
      isVertical: () => 'vertical' === i.value,
      isHorizontal: () => 'horizontal' === i.value,
    };
  }
  let Mt = 0;
  const Ft = 'van-overflow-hidden';
  function Rt(e) {
    const o = t.ref(!1);
    return (
      t.watch(
        e,
        (e) => {
          e && (o.value = e);
        },
        { immediate: !0 },
      ),
      (e) => () => o.value ? e() : null
    );
  }
  const [Ht, jt] = Ie('overlay'),
    Wt = {
      show: Boolean,
      zIndex: g,
      duration: g,
      className: h,
      lockScroll: b,
      lazyRender: b,
      customStyle: Object,
    };
  const Ut = We(
      t.defineComponent({
        name: Ht,
        props: Wt,
        setup(e, { slots: n }) {
          const a = t.ref(),
            r = Rt(() => e.show || !e.lazyRender)(() => {
              var r;
              const l = d(pe(e.zIndex), e.customStyle);
              return (
                o(e.duration) && (l.animationDuration = `${e.duration}s`),
                t.withDirectives(
                  t.createVNode('div', { ref: a, style: l, class: [jt(), e.className] }, [
                    null == (r = n.default) ? void 0 : r.call(n),
                  ]),
                  [[t.vShow, e.show]],
                )
              );
            });
          return (
            j(
              'touchmove',
              (t) => {
                e.lockScroll && le(t, !0);
              },
              { target: a },
            ),
            () => t.createVNode(t.Transition, { name: 'van-fade', appear: !0 }, { default: r })
          );
        },
      }),
    ),
    qt = d({}, Et, {
      round: Boolean,
      position: N('center'),
      closeIcon: N('cross'),
      closeable: Boolean,
      transition: String,
      iconPrefix: String,
      closeOnPopstate: Boolean,
      closeIconPosition: N('top-right'),
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: Boolean,
    }),
    [Yt, Gt] = Ie('popup');
  const Xt = We(
      t.defineComponent({
        name: Yt,
        inheritAttrs: !1,
        props: qt,
        emits: [
          'open',
          'close',
          'opened',
          'closed',
          'keydown',
          'update:show',
          'clickOverlay',
          'clickCloseIcon',
        ],
        setup(e, { emit: n, attrs: a, slots: r }) {
          let l, i;
          const s = t.ref(),
            c = t.ref(),
            d = Rt(() => e.show || !e.lazyRender),
            u = t.computed(() => {
              const t = { zIndex: s.value };
              if (o(e.duration)) {
                t[
                  'center' === e.position ? 'animationDuration' : 'transitionDuration'
                ] = `${e.duration}s`;
              }
              return t;
            }),
            p = () => {
              l || ((l = !0), (s.value = void 0 !== e.zIndex ? +e.zIndex : ++it), n('open'));
            },
            m = () => {
              l &&
                je(e.beforeClose, {
                  done() {
                    (l = !1), n('close'), n('update:show', !1);
                  },
                });
            },
            f = (t) => {
              n('clickOverlay', t), e.closeOnClickOverlay && m();
            },
            v = () => {
              if (e.overlay)
                return t.createVNode(
                  Ut,
                  {
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: s.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? 'button' : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0,
                    onClick: f,
                  },
                  { default: r['overlay-content'] },
                );
            },
            h = (e) => {
              n('clickCloseIcon', e), m();
            },
            g = () => {
              if (e.closeable)
                return t.createVNode(
                  ht,
                  {
                    role: 'button',
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [Gt('close-icon', e.closeIconPosition), Re],
                    classPrefix: e.iconPrefix,
                    onClick: h,
                  },
                  null,
                );
            },
            b = () => n('opened'),
            y = () => n('closed'),
            w = (e) => n('keydown', e),
            x = d(() => {
              var o;
              const { round: n, position: l, safeAreaInsetTop: i, safeAreaInsetBottom: s } = e;
              return t.withDirectives(
                t.createVNode(
                  'div',
                  t.mergeProps(
                    {
                      ref: c,
                      style: u.value,
                      role: 'dialog',
                      tabindex: 0,
                      class: [
                        Gt({ round: n, [l]: l }),
                        { 'van-safe-area-top': i, 'van-safe-area-bottom': s },
                      ],
                      onKeydown: w,
                    },
                    a,
                  ),
                  [null == (o = r.default) ? void 0 : o.call(r), g()],
                ),
                [[t.vShow, e.show]],
              );
            }),
            V = () => {
              const { position: o, transition: n, transitionAppear: a } = e,
                r = 'center' === o ? 'van-fade' : `van-popup-slide-${o}`;
              return t.createVNode(
                t.Transition,
                { name: n || r, appear: a, onAfterEnter: b, onAfterLeave: y },
                { default: x },
              );
            };
          return (
            t.watch(
              () => e.show,
              (e) => {
                e &&
                  !l &&
                  (p(),
                  0 === a.tabindex &&
                    t.nextTick(() => {
                      var e;
                      null == (e = c.value) || e.focus();
                    })),
                  !e && l && ((l = !1), n('close'));
              },
            ),
            Qe({ popupRef: c }),
            (function (e, o) {
              const n = Lt(),
                a = (t) => {
                  n.move(t);
                  const o = n.deltaY.value > 0 ? '10' : '01',
                    a = X(t.target, e.value),
                    { scrollHeight: r, offsetHeight: l, scrollTop: i } = a;
                  let s = '11';
                  0 === i ? (s = l >= r ? '00' : '01') : i + l >= r && (s = '10'),
                    '11' === s || !n.isVertical() || parseInt(s, 2) & parseInt(o, 2) || le(t, !0);
                },
                r = () => {
                  document.addEventListener('touchstart', n.start),
                    document.addEventListener('touchmove', a, { passive: !1 }),
                    Mt || document.body.classList.add(Ft),
                    Mt++;
                },
                l = () => {
                  Mt &&
                    (document.removeEventListener('touchstart', n.start),
                    document.removeEventListener('touchmove', a),
                    Mt--,
                    Mt || document.body.classList.remove(Ft));
                },
                i = () => o() && l();
              H(() => o() && r()),
                t.onDeactivated(i),
                t.onBeforeUnmount(i),
                t.watch(o, (e) => {
                  e ? r() : l();
                });
            })(c, () => e.show && e.lockScroll),
            j('popstate', () => {
              e.closeOnPopstate && (m(), (i = !1));
            }),
            t.onMounted(() => {
              e.show && p();
            }),
            t.onActivated(() => {
              i && (n('update:show', !0), (i = !1));
            }),
            t.onDeactivated(() => {
              e.show && e.teleport && (m(), (i = !0));
            }),
            t.provide(Ue, () => e.show),
            () =>
              e.teleport
                ? t.createVNode(t.Teleport, { to: e.teleport }, { default: () => [v(), V()] })
                : t.createVNode(t.Fragment, null, [v(), V()])
          );
        },
      }),
    ),
    [Zt, Kt] = Ie('action-sheet'),
    _t = d({}, Et, {
      title: String,
      round: b,
      actions: w(),
      closeIcon: N('cross'),
      closeable: b,
      cancelText: String,
      description: String,
      closeOnPopstate: b,
      closeOnClickAction: Boolean,
      safeAreaInsetBottom: b,
    }),
    Jt = [...$t, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];
  const Qt = We(
      t.defineComponent({
        name: Zt,
        props: _t,
        emits: ['select', 'cancel', 'update:show'],
        setup(e, { slots: o, emit: n }) {
          const a = (e) => n('update:show', e),
            r = () => {
              a(!1), n('cancel');
            },
            l = () => {
              if (e.title)
                return t.createVNode('div', { class: Kt('header') }, [
                  e.title,
                  e.closeable &&
                    t.createVNode(
                      ht,
                      { name: e.closeIcon, class: [Kt('close'), Re], onClick: r },
                      null,
                    ),
                ]);
            },
            i = () => {
              if (o.cancel || e.cancelText)
                return [
                  t.createVNode('div', { class: Kt('gap') }, null),
                  t.createVNode('button', { type: 'button', class: Kt('cancel'), onClick: r }, [
                    o.cancel ? o.cancel() : e.cancelText,
                  ]),
                ];
            },
            s = (e, n) =>
              e.loading
                ? t.createVNode(Vt, { class: Kt('loading-icon') }, null)
                : o.action
                ? o.action({ action: e, index: n })
                : [
                    t.createVNode('span', { class: Kt('name') }, [e.name]),
                    e.subname && t.createVNode('div', { class: Kt('subname') }, [e.subname]),
                  ],
            c = (o, r) => {
              const { color: l, loading: i, callback: c, disabled: d, className: u } = o;
              return t.createVNode(
                'button',
                {
                  type: 'button',
                  style: { color: l },
                  class: [Kt('item', { loading: i, disabled: d }), u],
                  onClick: () => {
                    d ||
                      i ||
                      (c && c(o),
                      e.closeOnClickAction && a(!1),
                      t.nextTick(() => n('select', o, r)));
                  },
                },
                [s(o, r)],
              );
            },
            d = () => {
              if (e.description || o.description) {
                const n = o.description ? o.description() : e.description;
                return t.createVNode('div', { class: Kt('description') }, [n]);
              }
            };
          return () =>
            t.createVNode(
              Xt,
              t.mergeProps({ class: Kt(), position: 'bottom', 'onUpdate:show': a }, m(e, Jt)),
              {
                default: () => {
                  var n;
                  return [
                    l(),
                    d(),
                    t.createVNode('div', { class: Kt('content') }, [
                      e.actions.map(c),
                      null == (n = o.default) ? void 0 : n.call(o),
                    ]),
                    i(),
                  ];
                },
              },
            );
        },
      }),
    ),
    [eo, to, oo] = Ie('picker'),
    no = (e) => e.find((e) => !e.disabled) || e[0];
  function ao(e, t) {
    for (let o = (t = ye(t, 0, e.length)); o < e.length; o++) if (!e[o].disabled) return o;
    for (let o = t - 1; o >= 0; o--) if (!e[o].disabled) return o;
    return 0;
  }
  const ro = (e, t, o) => void 0 !== t && !!e.find((e) => e[o.value] === t);
  function lo(e, t, o) {
    const n = e.findIndex((e) => e[o.value] === t);
    return e[ao(e, n)];
  }
  const [io, so] = Ie('picker-column'),
    co = Symbol(io);
  var uo = t.defineComponent({
    name: io,
    props: {
      value: g,
      fields: y(Object),
      options: w(),
      readonly: Boolean,
      allowHtml: Boolean,
      optionHeight: y(Number),
      swipeDuration: y(g),
      visibleOptionNum: y(g),
    },
    emits: ['change', 'clickOption'],
    setup(e, { emit: o, slots: n }) {
      let a, r, l, i, s;
      const c = t.ref(),
        d = t.ref(),
        u = t.ref(0),
        p = t.ref(0),
        m = Lt(),
        f = () => e.options.length,
        v = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
        h = (t) => {
          const n = ao(e.options, t),
            r = -n * e.optionHeight,
            l = () => {
              const t = e.options[n][e.fields.value];
              t !== e.value && o('change', t);
            };
          a && r !== u.value ? (s = l) : l(), (u.value = r);
        },
        g = () => e.readonly || !e.options.length,
        b = (t) => ye(Math.round(-t / e.optionHeight), 0, f() - 1),
        y = () => {
          (a = !1), (p.value = 0), s && (s(), (s = null));
        },
        w = (e) => {
          if (!g()) {
            if ((m.start(e), a)) {
              const e = (function (e) {
                const { transform: t } = window.getComputedStyle(e),
                  o = t.slice(7, t.length - 1).split(', ')[5];
                return Number(o);
              })(d.value);
              u.value = Math.min(0, e - v());
            }
            (p.value = 0), (r = u.value), (l = Date.now()), (i = r), (s = null);
          }
        },
        x = () => {
          if (g()) return;
          const t = u.value - i,
            o = Date.now() - l;
          if (o < 300 && Math.abs(t) > 15)
            return void ((t, o) => {
              const n = Math.abs(t / o);
              t = u.value + (n / 0.003) * (t < 0 ? -1 : 1);
              const a = b(t);
              (p.value = +e.swipeDuration), h(a);
            })(t, o);
          const n = b(u.value);
          (p.value = 200),
            h(n),
            setTimeout(() => {
              a = !1;
            }, 0);
        },
        V = () => {
          const r = { height: `${e.optionHeight}px` };
          return e.options.map((l, i) => {
            const c = l[e.fields.text],
              { disabled: d } = l,
              u = l[e.fields.value],
              m = {
                role: 'button',
                style: r,
                tabindex: d ? -1 : 0,
                class: [so('item', { disabled: d, selected: u === e.value }), l.className],
                onClick: () =>
                  ((t) => {
                    a || g() || ((s = null), (p.value = 200), h(t), o('clickOption', e.options[t]));
                  })(i),
              },
              f = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: c };
            return t.createVNode('li', m, [n.option ? n.option(l) : t.createVNode('div', f, null)]);
          });
        };
      return (
        D(co),
        Qe({ stopMomentum: y }),
        t.watchEffect(() => {
          const t = e.options.findIndex((t) => t[e.fields.value] === e.value),
            o = -ao(e.options, t) * e.optionHeight;
          u.value = o;
        }),
        j(
          'touchmove',
          (t) => {
            if (g()) return;
            m.move(t),
              m.isVertical() && ((a = !0), le(t, !0)),
              (u.value = ye(r + m.deltaY.value, -f() * e.optionHeight, e.optionHeight));
            const o = Date.now();
            o - l > 300 && ((l = o), (i = u.value));
          },
          { target: c },
        ),
        () =>
          t.createVNode(
            'div',
            { ref: c, class: so(), onTouchstartPassive: w, onTouchend: x, onTouchcancel: x },
            [
              t.createVNode(
                'ul',
                {
                  ref: d,
                  style: {
                    transform: `translate3d(0, ${u.value + v()}px, 0)`,
                    transitionDuration: `${p.value}ms`,
                    transitionProperty: p.value ? 'all' : 'none',
                  },
                  class: so('wrapper'),
                  onTransitionend: y,
                },
                [V()],
              ),
            ],
          )
      );
    },
  });
  const [po] = Ie('picker-toolbar'),
    mo = { title: String, cancelButtonText: String, confirmButtonText: String },
    fo = ['cancel', 'confirm', 'title', 'toolbar'],
    vo = Object.keys(mo);
  var ho = t.defineComponent({
    name: po,
    props: mo,
    emits: ['confirm', 'cancel'],
    setup(e, { emit: o, slots: n }) {
      const a = () => o('cancel'),
        r = () => o('confirm'),
        l = () => {
          const o = e.cancelButtonText || oo('cancel');
          return t.createVNode(
            'button',
            { type: 'button', class: [to('cancel'), Re], onClick: a },
            [n.cancel ? n.cancel() : o],
          );
        },
        i = () => {
          const o = e.confirmButtonText || oo('confirm');
          return t.createVNode(
            'button',
            { type: 'button', class: [to('confirm'), Re], onClick: r },
            [n.confirm ? n.confirm() : o],
          );
        };
      return () =>
        t.createVNode('div', { class: to('toolbar') }, [
          n.toolbar
            ? n.toolbar()
            : [
                l(),
                n.title
                  ? n.title()
                  : e.title
                  ? t.createVNode('div', { class: [to('title'), 'van-ellipsis'] }, [e.title])
                  : void 0,
                i(),
              ],
        ]);
    },
  });
  let go = 0;
  function bo() {
    const e = t.getCurrentInstance(),
      { name: o = 'unknown' } = (null == e ? void 0 : e.type) || {};
    return `${o}-${++go}`;
  }
  function yo() {
    const e = t.ref([]),
      o = [];
    t.onBeforeUpdate(() => {
      e.value = [];
    });
    return [
      e,
      (t) => (
        o[t] ||
          (o[t] = (o) => {
            e.value[t] = o;
          }),
        o[t]
      ),
    ];
  }
  const [wo, xo] = Ie('sticky'),
    Vo = { zIndex: g, position: N('top'), container: Object, offsetTop: V(0), offsetBottom: V(0) };
  const No = We(
      t.defineComponent({
        name: wo,
        props: Vo,
        emits: ['scroll', 'change'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(),
            r = Z(a),
            l = t.reactive({ fixed: !1, width: 0, height: 0, transform: 0 }),
            i = t.computed(() => ve('top' === e.position ? e.offsetTop : e.offsetBottom)),
            s = t.computed(() => {
              const { fixed: e, height: t, width: o } = l;
              if (e) return { width: `${o}px`, height: `${t}px` };
            }),
            c = t.computed(() => {
              if (!l.fixed) return;
              const t = d(pe(e.zIndex), {
                width: `${l.width}px`,
                height: `${l.height}px`,
                [e.position]: `${i.value}px`,
              });
              return l.transform && (t.transform = `translate3d(0, ${l.transform}px, 0)`), t;
            }),
            p = () => {
              if (!a.value || ie(a)) return;
              const { container: t, position: n } = e,
                r = P(a),
                s = J(window);
              if (((l.width = r.width), (l.height = r.height), 'top' === n))
                if (t) {
                  const e = P(t),
                    o = e.bottom - i.value - l.height;
                  (l.fixed = i.value > r.top && e.bottom > 0), (l.transform = o < 0 ? o : 0);
                } else l.fixed = i.value > r.top;
              else {
                const { clientHeight: e } = document.documentElement;
                if (t) {
                  const o = P(t),
                    n = e - o.top - i.value - l.height;
                  (l.fixed = e - i.value < r.bottom && e > o.top), (l.transform = n < 0 ? -n : 0);
                } else l.fixed = e - i.value < r.bottom;
              }
              ((e) => {
                o('scroll', { scrollTop: e, isFixed: l.fixed });
              })(s);
            };
          return (
            t.watch(
              () => l.fixed,
              (e) => o('change', e),
            ),
            j('scroll', p, { target: r, passive: !0 }),
            (function (e, o) {
              if (!u || !window.IntersectionObserver) return;
              const n = new IntersectionObserver(
                  (e) => {
                    o(e[0].intersectionRatio > 0);
                  },
                  { root: document.body },
                ),
                a = () => {
                  e.value && n.unobserve(e.value);
                };
              t.onDeactivated(a),
                t.onBeforeUnmount(a),
                H(() => {
                  e.value && n.observe(e.value);
                });
            })(a, p),
            () => {
              var e;
              return t.createVNode('div', { ref: a, style: s.value }, [
                t.createVNode('div', { class: xo({ fixed: l.fixed }), style: c.value }, [
                  null == (e = n.default) ? void 0 : e.call(n),
                ]),
              ]);
            }
          );
        },
      }),
    ),
    [Co, ko] = Ie('tab');
  var So = t.defineComponent({
    name: Co,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: g,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: b,
    },
    setup(e, { slots: n }) {
      const a = t.computed(() => {
          const t = {},
            { type: o, color: n, disabled: a, isActive: r, activeColor: l, inactiveColor: i } = e;
          n &&
            'card' === o &&
            ((t.borderColor = n), a || (r ? (t.backgroundColor = n) : (t.color = n)));
          const s = r ? l : i;
          return s && (t.color = s), t;
        }),
        r = () => {
          const a = t.createVNode('span', { class: ko('text', { ellipsis: !e.scrollable }) }, [
            n.title ? n.title() : e.title,
          ]);
          return e.dot || (o(e.badge) && '' !== e.badge)
            ? t.createVNode(
                lt,
                { dot: e.dot, content: e.badge, showZero: e.showZeroBadge },
                { default: () => [a] },
              )
            : a;
        };
      return () =>
        t.createVNode(
          'div',
          {
            id: e.id,
            role: 'tab',
            class: [
              ko([
                e.type,
                {
                  grow: e.scrollable && !e.shrink,
                  shrink: e.shrink,
                  active: e.isActive,
                  disabled: e.disabled,
                },
              ]),
            ],
            style: a.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            'aria-selected': e.isActive,
            'aria-disabled': e.disabled || void 0,
            'aria-controls': e.controls,
          },
          [r()],
        );
    },
  });
  const [To, Bo] = Ie('swipe'),
    Po = {
      loop: b,
      width: g,
      height: g,
      vertical: Boolean,
      autoplay: V(0),
      duration: V(500),
      touchable: b,
      lazyRender: Boolean,
      initialSwipe: V(0),
      indicatorColor: String,
      showIndicators: b,
      stopPropagation: b,
    },
    Do = Symbol(To);
  const Oo = We(
      t.defineComponent({
        name: To,
        props: Po,
        emits: ['change'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(),
            r = t.ref(),
            l = t.reactive({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 }),
            i = Lt(),
            { children: s, linkChildren: c } = A(Do),
            d = t.computed(() => s.length),
            u = t.computed(() => l[e.vertical ? 'height' : 'width']),
            p = t.computed(() => (e.vertical ? i.deltaY.value : i.deltaX.value)),
            m = t.computed(() => {
              if (l.rect) {
                return (e.vertical ? l.rect.height : l.rect.width) - u.value * d.value;
              }
              return 0;
            }),
            f = t.computed(() => (u.value ? Math.ceil(Math.abs(m.value) / u.value) : d.value)),
            v = t.computed(() => d.value * u.value),
            h = t.computed(() => (l.active + d.value) % d.value),
            g = t.computed(() => {
              const t = e.vertical ? 'vertical' : 'horizontal';
              return i.direction.value === t;
            }),
            b = t.computed(() => {
              const t = {
                transitionDuration: `${l.swiping ? 0 : e.duration}ms`,
                transform: `translate${e.vertical ? 'Y' : 'X'}(${l.offset}px)`,
              };
              if (u.value) {
                const o = e.vertical ? 'height' : 'width',
                  n = e.vertical ? 'width' : 'height';
                (t[o] = `${v.value}px`), (t[n] = e[n] ? `${e[n]}px` : '');
              }
              return t;
            }),
            y = (t, o = 0) => {
              let n = t * u.value;
              e.loop || (n = Math.min(n, -m.value));
              let a = o - n;
              return e.loop || (a = ye(a, m.value, 0)), a;
            },
            w = ({ pace: t = 0, offset: n = 0, emitChange: a }) => {
              if (d.value <= 1) return;
              const { active: r } = l,
                i = ((t) => {
                  const { active: o } = l;
                  return t ? (e.loop ? ye(o + t, -1, d.value) : ye(o + t, 0, f.value)) : o;
                })(t),
                c = y(i, n);
              if (e.loop) {
                if (s[0] && c !== m.value) {
                  const e = c < m.value;
                  s[0].setOffset(e ? v.value : 0);
                }
                if (s[d.value - 1] && 0 !== c) {
                  const e = c > 0;
                  s[d.value - 1].setOffset(e ? -v.value : 0);
                }
              }
              (l.active = i), (l.offset = c), a && i !== r && o('change', h.value);
            },
            x = () => {
              (l.swiping = !0),
                l.active <= -1
                  ? w({ pace: d.value })
                  : l.active >= d.value && w({ pace: -d.value });
            },
            V = () => {
              x(),
                i.reset(),
                T(() => {
                  (l.swiping = !1), w({ pace: 1, emitChange: !0 });
                });
            };
          let N;
          const k = () => clearTimeout(N),
            S = () => {
              k(),
                e.autoplay > 0 &&
                  d.value > 1 &&
                  (N = setTimeout(() => {
                    V(), S();
                  }, +e.autoplay));
            },
            B = (o = +e.initialSwipe) => {
              if (!a.value) return;
              const n = () => {
                var t, n;
                if (!ie(a)) {
                  const o = { width: a.value.offsetWidth, height: a.value.offsetHeight };
                  (l.rect = o),
                    (l.width = +(null != (t = e.width) ? t : o.width)),
                    (l.height = +(null != (n = e.height) ? n : o.height));
                }
                d.value && -1 === (o = Math.min(d.value - 1, o)) && (o = d.value - 1),
                  (l.active = o),
                  (l.swiping = !0),
                  (l.offset = y(o)),
                  s.forEach((e) => {
                    e.setOffset(0);
                  }),
                  S();
              };
              ie(a) ? t.nextTick().then(n) : n();
            },
            P = () => B(l.active);
          let D;
          const O = (t) => {
              e.touchable && (i.start(t), (D = Date.now()), k(), x());
            },
            I = () => {
              if (!e.touchable || !l.swiping) return;
              const t = Date.now() - D,
                o = p.value / t;
              if ((Math.abs(o) > 0.25 || Math.abs(p.value) > u.value / 2) && g.value) {
                const t = e.vertical ? i.offsetY.value : i.offsetX.value;
                let o = 0;
                (o = e.loop
                  ? t > 0
                    ? p.value > 0
                      ? -1
                      : 1
                    : 0
                  : -Math[p.value > 0 ? 'ceil' : 'floor'](p.value / u.value)),
                  w({ pace: o, emitChange: !0 });
              } else p.value && w({ pace: 0 });
              (l.swiping = !1), S();
            },
            z = (o, n) => {
              const a = n === h.value,
                r = a ? { backgroundColor: e.indicatorColor } : void 0;
              return t.createVNode('i', { style: r, class: Bo('indicator', { active: a }) }, null);
            };
          return (
            Qe({
              prev: () => {
                x(),
                  i.reset(),
                  T(() => {
                    (l.swiping = !1), w({ pace: -1, emitChange: !0 });
                  });
              },
              next: V,
              state: l,
              resize: P,
              swipeTo: (t, o = {}) => {
                x(),
                  i.reset(),
                  T(() => {
                    let n;
                    (n = e.loop && t === d.value ? (0 === l.active ? 0 : t) : t % d.value),
                      o.immediate
                        ? T(() => {
                            l.swiping = !1;
                          })
                        : (l.swiping = !1),
                      w({ pace: n - l.active, emitChange: !0 });
                  });
              },
            }),
            c({ size: u, props: e, count: d, activeIndicator: h }),
            t.watch(
              () => e.initialSwipe,
              (e) => B(+e),
            ),
            t.watch(d, () => B(l.active)),
            t.watch(() => e.autoplay, S),
            t.watch([se, ce], P),
            t.watch(
              (function () {
                if (!U && ((U = t.ref('visible')), C)) {
                  const e = () => {
                    U.value = document.hidden ? 'hidden' : 'visible';
                  };
                  e(), window.addEventListener('visibilitychange', e);
                }
                return U;
              })(),
              (e) => {
                'visible' === e ? S() : k();
              },
            ),
            t.onMounted(B),
            t.onActivated(() => B(l.active)),
            qe(() => B(l.active)),
            t.onDeactivated(k),
            t.onBeforeUnmount(k),
            j(
              'touchmove',
              (t) => {
                if (e.touchable && l.swiping && (i.move(t), g.value)) {
                  (!e.loop &&
                    ((0 === l.active && p.value > 0) ||
                      (l.active === d.value - 1 && p.value < 0))) ||
                    (le(t, e.stopPropagation), w({ offset: p.value }));
                }
              },
              { target: r },
            ),
            () => {
              var o;
              return t.createVNode('div', { ref: a, class: Bo() }, [
                t.createVNode(
                  'div',
                  {
                    ref: r,
                    style: b.value,
                    class: Bo('track', { vertical: e.vertical }),
                    onTouchstartPassive: O,
                    onTouchend: I,
                    onTouchcancel: I,
                  },
                  [null == (o = n.default) ? void 0 : o.call(n)],
                ),
                n.indicator
                  ? n.indicator({ active: h.value, total: d.value })
                  : e.showIndicators && d.value > 1
                  ? t.createVNode('div', { class: Bo('indicators', { vertical: e.vertical }) }, [
                      Array(d.value).fill('').map(z),
                    ])
                  : void 0,
              ]);
            }
          );
        },
      }),
    ),
    [Io, Ao] = Ie('tabs');
  var zo = t.defineComponent({
    name: Io,
    props: {
      count: y(Number),
      inited: Boolean,
      animated: Boolean,
      duration: y(g),
      swipeable: Boolean,
      lazyRender: Boolean,
      currentIndex: y(Number),
    },
    emits: ['change'],
    setup(e, { emit: o, slots: n }) {
      const a = t.ref(),
        r = (e) => o('change', e),
        l = () => {
          var o;
          const l = null == (o = n.default) ? void 0 : o.call(n);
          return e.animated || e.swipeable
            ? t.createVNode(
                Oo,
                {
                  ref: a,
                  loop: !1,
                  class: Ao('track'),
                  duration: 1e3 * +e.duration,
                  touchable: e.swipeable,
                  lazyRender: e.lazyRender,
                  showIndicators: !1,
                  onChange: r,
                },
                { default: () => [l] },
              )
            : l;
        },
        i = (t) => {
          const o = a.value;
          o && o.state.active !== t && o.swipeTo(t, { immediate: !e.inited });
        };
      return (
        t.watch(() => e.currentIndex, i),
        t.onMounted(() => {
          i(e.currentIndex);
        }),
        Qe({ swipeRef: a }),
        () =>
          t.createVNode('div', { class: Ao('content', { animated: e.animated || e.swipeable }) }, [
            l(),
          ])
      );
    },
  });
  const [Eo, $o] = Ie('tabs'),
    Lo = {
      type: N('line'),
      color: String,
      border: Boolean,
      sticky: Boolean,
      shrink: Boolean,
      active: V(0),
      duration: V(0.3),
      animated: Boolean,
      ellipsis: b,
      swipeable: Boolean,
      scrollspy: Boolean,
      offsetTop: V(0),
      background: String,
      lazyRender: b,
      lineWidth: g,
      lineHeight: g,
      beforeChange: Function,
      swipeThreshold: V(5),
      titleActiveColor: String,
      titleInactiveColor: String,
    },
    Mo = Symbol(Eo);
  var Fo = t.defineComponent({
    name: Eo,
    props: Lo,
    emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
    setup(e, { emit: n, slots: a }) {
      let r, l, i;
      const s = t.ref(),
        c = t.ref(),
        d = t.ref(),
        u = t.ref(),
        p = bo(),
        f = Z(s),
        [v, h] = yo(),
        { children: g, linkChildren: b } = A(Mo),
        y = t.reactive({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
        w = t.computed(() => g.length > e.swipeThreshold || !e.ellipsis || e.shrink),
        x = t.computed(() => ({ borderColor: e.color, background: e.background })),
        V = (e, t) => {
          var o;
          return null != (o = e.name) ? o : t;
        },
        N = t.computed(() => {
          const e = g[y.currentIndex];
          if (e) return V(e, y.currentIndex);
        }),
        C = t.computed(() => ve(e.offsetTop)),
        S = t.computed(() => (e.sticky ? C.value + r : 0)),
        T = (t) => {
          const o = c.value,
            n = v.value;
          if (!(w.value && o && n && n[y.currentIndex])) return;
          const a = n[y.currentIndex].$el;
          !(function (e, t, o) {
            let n = 0;
            const a = e.scrollLeft,
              r = 0 === o ? 1 : Math.round((1e3 * o) / 16);
            !(function o() {
              (e.scrollLeft += (t - a) / r), ++n < r && k(o);
            })();
          })(o, a.offsetLeft - (o.offsetWidth - a.offsetWidth) / 2, t ? 0 : +e.duration);
        },
        B = () => {
          const n = y.inited;
          t.nextTick(() => {
            const t = v.value;
            if (!t || !t[y.currentIndex] || 'line' !== e.type || ie(s.value)) return;
            const a = t[y.currentIndex].$el,
              { lineWidth: r, lineHeight: l } = e,
              i = a.offsetLeft + a.offsetWidth / 2,
              c = {
                width: de(r),
                backgroundColor: e.color,
                transform: `translateX(${i}px) translateX(-50%)`,
              };
            if ((n && (c.transitionDuration = `${e.duration}s`), o(l))) {
              const e = de(l);
              (c.height = e), (c.borderRadius = e);
            }
            y.lineStyle = c;
          });
        },
        D = (t, a) => {
          const r = ((e) => {
            const t = e < y.currentIndex ? -1 : 1;
            for (; e >= 0 && e < g.length; ) {
              if (!g[e].disabled) return e;
              e += t;
            }
          })(t);
          if (!o(r)) return;
          const l = g[r],
            c = V(l, r),
            d = null !== y.currentIndex;
          y.currentIndex !== r && ((y.currentIndex = r), a || T(), B()),
            c !== e.active && (n('update:active', c), d && n('change', c, l.title)),
            i && !e.scrollspy && te(Math.ceil(oe(s.value) - C.value));
        },
        O = (e, t) => {
          const o = g.find((t, o) => V(t, o) === e),
            n = o ? g.indexOf(o) : 0;
          D(n, t);
        },
        I = (t = !1) => {
          if (e.scrollspy) {
            const o = g[y.currentIndex].$el;
            if (o && f.value) {
              const n = oe(o, f.value) - S.value;
              (l = !0),
                (function (e, t, o, n) {
                  let a = J(e);
                  const r = a < t,
                    l = 0 === o ? 1 : Math.round((1e3 * o) / 16),
                    i = (t - a) / l;
                  !(function o() {
                    (a += i),
                      ((r && a > t) || (!r && a < t)) && (a = t),
                      Q(e, a),
                      (r && a < t) || (!r && a > t) ? k(o) : n && k(n);
                  })();
                })(f.value, n, t ? 0 : +e.duration, () => {
                  l = !1;
                });
            }
          }
        },
        z = (e) => {
          (i = e.isFixed), n('scroll', e);
        },
        E = () =>
          g.map((o, a) =>
            t.createVNode(
              So,
              t.mergeProps(
                {
                  key: o.id,
                  id: `${p}-${a}`,
                  ref: h(a),
                  type: e.type,
                  color: e.color,
                  style: o.titleStyle,
                  class: o.titleClass,
                  shrink: e.shrink,
                  isActive: a === y.currentIndex,
                  controls: o.id,
                  scrollable: w.value,
                  activeColor: e.titleActiveColor,
                  inactiveColor: e.titleInactiveColor,
                  onClick: (t) =>
                    ((t, o, a) => {
                      const { title: r, disabled: l } = g[o],
                        i = V(g[o], o);
                      l ||
                        (je(e.beforeChange, {
                          args: [i],
                          done: () => {
                            D(o), I();
                          },
                        }),
                        tt(t)),
                        n('clickTab', { name: i, title: r, event: a, disabled: l });
                    })(o, a, t),
                },
                m(o, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
              ),
              { title: o.$slots.title },
            ),
          ),
        $ = () => {
          if ('line' === e.type && g.length)
            return t.createVNode('div', { class: $o('line'), style: y.lineStyle }, null);
        },
        L = () => {
          var o, n, r;
          const { type: l, border: i, sticky: s } = e,
            u = [
              t.createVNode(
                'div',
                { ref: s ? void 0 : d, class: [$o('wrap'), { [Me]: 'line' === l && i }] },
                [
                  t.createVNode(
                    'div',
                    {
                      ref: c,
                      role: 'tablist',
                      class: $o('nav', [l, { shrink: e.shrink, complete: w.value }]),
                      style: x.value,
                      'aria-orientation': 'horizontal',
                    },
                    [
                      null == (o = a['nav-left']) ? void 0 : o.call(a),
                      E(),
                      $(),
                      null == (n = a['nav-right']) ? void 0 : n.call(a),
                    ],
                  ),
                ],
              ),
              null == (r = a['nav-bottom']) ? void 0 : r.call(a),
            ];
          return s ? t.createVNode('div', { ref: d }, [u]) : u;
        };
      t.watch([() => e.color, se], B),
        t.watch(
          () => e.active,
          (e) => {
            e !== N.value && O(e);
          },
        ),
        t.watch(
          () => g.length,
          () => {
            y.inited &&
              (O(e.active),
              B(),
              t.nextTick(() => {
                T(!0);
              }));
          },
        );
      return (
        Qe({
          resize: () => {
            B(),
              t.nextTick(() => {
                var e, t;
                return null == (t = null == (e = u.value) ? void 0 : e.swipeRef.value)
                  ? void 0
                  : t.resize();
              });
          },
          scrollTo: (e) => {
            t.nextTick(() => {
              O(e), I(!0);
            });
          },
        }),
        t.onActivated(B),
        qe(B),
        H(() => {
          O(e.active, !0),
            t.nextTick(() => {
              (y.inited = !0), d.value && (r = P(d.value).height), T(!0);
            });
        }),
        j(
          'scroll',
          () => {
            if (e.scrollspy && !l) {
              const e = (() => {
                for (let e = 0; e < g.length; e++) {
                  const { top: t } = P(g[e].$el);
                  if (t > S.value) return 0 === e ? 0 : e - 1;
                }
                return g.length - 1;
              })();
              D(e);
            }
          },
          { target: f, passive: !0 },
        ),
        b({
          id: p,
          props: e,
          setLine: B,
          onRendered: (e, t) => n('rendered', e, t),
          currentName: N,
          scrollIntoView: T,
        }),
        () =>
          t.createVNode('div', { ref: s, class: $o([e.type]) }, [
            e.sticky
              ? t.createVNode(
                  No,
                  { container: s.value, offsetTop: C.value, onScroll: z },
                  { default: () => [L()] },
                )
              : L(),
            t.createVNode(
              zo,
              {
                ref: u,
                count: g.length,
                inited: y.inited,
                animated: e.animated,
                duration: e.duration,
                swipeable: e.swipeable,
                lazyRender: e.lazyRender,
                currentIndex: y.currentIndex,
                onChange: D,
              },
              {
                default: () => {
                  var e;
                  return [null == (e = a.default) ? void 0 : e.call(a)];
                },
              },
            ),
          ])
      );
    },
  });
  const Ro = Symbol(),
    [Ho, jo] = Ie('swipe-item');
  const Wo = We(
      t.defineComponent({
        name: Ho,
        setup(e, { slots: o }) {
          let n;
          const a = t.reactive({ offset: 0, inited: !1, mounted: !1 }),
            { parent: r, index: l } = D(Do);
          if (!r) return;
          const i = t.computed(() => {
              const e = {},
                { vertical: t } = r.props;
              return (
                r.size.value && (e[t ? 'height' : 'width'] = `${r.size.value}px`),
                a.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${a.offset}px)`),
                e
              );
            }),
            s = t.computed(() => {
              const { loop: e, lazyRender: t } = r.props;
              if (!t || n) return !0;
              if (!a.mounted) return !1;
              const o = r.activeIndicator.value,
                i = r.count.value - 1,
                s = 0 === o && e ? i : o - 1,
                c = o === i && e ? 0 : o + 1;
              return (n = l.value === o || l.value === s || l.value === c), n;
            });
          return (
            t.onMounted(() => {
              t.nextTick(() => {
                a.mounted = !0;
              });
            }),
            Qe({
              setOffset: (e) => {
                a.offset = e;
              },
            }),
            () => {
              var e;
              return t.createVNode('div', { class: jo(), style: i.value }, [
                s.value ? (null == (e = o.default) ? void 0 : e.call(o)) : null,
              ]);
            }
          );
        },
      }),
    ),
    [Uo, qo] = Ie('tab'),
    Yo = d({}, et, {
      dot: Boolean,
      name: g,
      badge: g,
      title: String,
      disabled: Boolean,
      titleClass: h,
      titleStyle: [String, Object],
      showZeroBadge: b,
    });
  const Go = We(
      t.defineComponent({
        name: Uo,
        props: Yo,
        setup(e, { slots: o }) {
          const n = bo(),
            a = t.ref(!1),
            { parent: r, index: l } = D(Mo);
          if (!r) return;
          const i = () => {
              var t;
              return null != (t = e.name) ? t : l.value;
            },
            s = t.computed(() => {
              const o = i() === r.currentName.value;
              return (
                o &&
                  !a.value &&
                  ((a.value = !0),
                  r.props.lazyRender &&
                    t.nextTick(() => {
                      r.onRendered(i(), e.title);
                    })),
                o
              );
            }),
            c = t.ref(!s.value);
          return (
            t.watch(s, (e) => {
              e
                ? (c.value = !1)
                : T(() => {
                    c.value = !0;
                  });
            }),
            t.watch(
              () => e.title,
              () => {
                r.setLine(), r.scrollIntoView();
              },
            ),
            t.provide(Ro, s),
            () => {
              var e;
              const i = `${r.id}-${l.value}`,
                { animated: d, swipeable: u, scrollspy: p, lazyRender: m } = r.props;
              if (!o.default && !d) return;
              const f = p || s.value;
              if (d || u)
                return t.createVNode(
                  Wo,
                  {
                    id: n,
                    role: 'tabpanel',
                    class: qo('panel-wrapper', { inactive: c.value }),
                    tabindex: s.value ? 0 : -1,
                    'aria-hidden': !s.value,
                    'aria-labelledby': i,
                  },
                  {
                    default: () => {
                      var e;
                      return [
                        t.createVNode('div', { class: qo('panel') }, [
                          null == (e = o.default) ? void 0 : e.call(o),
                        ]),
                      ];
                    },
                  },
                );
              const v = a.value || p || !m ? (null == (e = o.default) ? void 0 : e.call(o)) : null;
              return (
                Qe({ id: n }),
                t.withDirectives(
                  t.createVNode(
                    'div',
                    {
                      id: n,
                      role: 'tabpanel',
                      class: qo('panel'),
                      tabindex: f ? 0 : -1,
                      'aria-labelledby': i,
                    },
                    [v],
                  ),
                  [[t.vShow, f]],
                )
              );
            }
          );
        },
      }),
    ),
    Xo = We(Fo),
    [Zo, Ko] = Ie('picker-group'),
    _o = Symbol(Zo),
    Jo = d({ tabs: w(), nextStepText: String }, mo);
  var Qo = t.defineComponent({
    name: Zo,
    props: Jo,
    emits: ['confirm', 'cancel'],
    setup(e, { emit: o, slots: n }) {
      const a = t.ref(0),
        { children: r, linkChildren: l } = A(_o);
      l();
      const i = () => a.value < e.tabs.length - 1 && e.nextStepText,
        s = () => {
          i()
            ? a.value++
            : o(
                'confirm',
                r.map((e) => e.confirm()),
              );
        },
        c = () => o('cancel');
      return () => {
        var o;
        const r = null == (o = n.default) ? void 0 : o.call(n),
          l = i() ? e.nextStepText : e.confirmButtonText;
        return t.createVNode('div', { class: Ko() }, [
          t.createVNode(
            ho,
            {
              title: e.title,
              cancelButtonText: e.cancelButtonText,
              confirmButtonText: l,
              onConfirm: s,
              onCancel: c,
            },
            null,
          ),
          t.createVNode(
            Xo,
            {
              active: a.value,
              'onUpdate:active': (e) => (a.value = e),
              class: Ko('tabs'),
              shrink: !0,
              animated: !0,
            },
            {
              default: () => [
                e.tabs.map((e, o) =>
                  t.createVNode(
                    Go,
                    { title: e, titleClass: Ko('tab-title') },
                    { default: () => [null == r ? void 0 : r[o]] },
                  ),
                ),
              ],
            },
          ),
        ]);
      };
    },
  });
  const en = d(
      {
        loading: Boolean,
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: V(44),
        showToolbar: b,
        swipeDuration: V(1e3),
        visibleOptionNum: V(6),
      },
      mo,
    ),
    tn = d({}, en, {
      columns: w(),
      modelValue: w(),
      toolbarPosition: N('top'),
      columnsFieldNames: Object,
    });
  var on = t.defineComponent({
    name: eo,
    props: tn,
    emits: ['confirm', 'cancel', 'change', 'clickOption', 'update:modelValue'],
    setup(e, { emit: n, slots: a }) {
      const r = t.ref(),
        l = t.ref(e.modelValue.slice(0)),
        { parent: i } = D(_o),
        { children: s, linkChildren: c } = A(co);
      c();
      const u = t.computed(() =>
          (function (e) {
            return d({ text: 'text', value: 'value', children: 'children' }, e);
          })(e.columnsFieldNames),
        ),
        p = t.computed(() => ve(e.optionHeight)),
        v = t.computed(() =>
          (function (e, t) {
            const o = e[0];
            if (o) {
              if (Array.isArray(o)) return 'multiple';
              if (t.children in o) return 'cascade';
            }
            return 'default';
          })(e.columns, u.value),
        ),
        h = t.computed(() => {
          const { columns: t } = e;
          switch (v.value) {
            case 'multiple':
              return t;
            case 'cascade':
              return (function (e, t, n) {
                const a = [];
                let r = { [t.children]: e },
                  l = 0;
                for (; r && r[t.children]; ) {
                  const e = r[t.children],
                    i = n.value[l];
                  (r = o(i) ? lo(e, i, t) : void 0),
                    !r && e.length && (r = lo(e, no(e)[t.value], t)),
                    l++,
                    a.push(e);
                }
                return a;
              })(t, u.value, l);
            default:
              return [t];
          }
        }),
        g = t.computed(() => h.value.some((e) => e.length)),
        b = t.computed(() => h.value.map((e, t) => lo(e, l.value[t], u.value))),
        y = t.computed(() =>
          h.value.map((e, t) => e.findIndex((e) => e[u.value.value] === l.value[t])),
        ),
        w = (e, t) => {
          if (l.value[e] !== t) {
            const o = l.value.slice(0);
            (o[e] = t), (l.value = o);
          }
        },
        x = () => ({
          selectedValues: l.value.slice(0),
          selectedOptions: b.value,
          selectedIndexes: y.value,
        }),
        V = () => {
          s.forEach((e) => e.stopMomentum());
          const e = x();
          return (
            t.nextTick(() => {
              n('confirm', e);
            }),
            e
          );
        },
        N = () => n('cancel', x()),
        C = () =>
          h.value.map((o, r) =>
            t.createVNode(
              uo,
              {
                value: l.value[r],
                fields: u.value,
                options: o,
                readonly: e.readonly,
                allowHtml: e.allowHtml,
                optionHeight: p.value,
                swipeDuration: e.swipeDuration,
                visibleOptionNum: e.visibleOptionNum,
                onChange: (e) =>
                  ((e, t) => {
                    w(t, e),
                      'cascade' === v.value &&
                        l.value.forEach((e, t) => {
                          const o = h.value[t];
                          ro(o, e, u.value) || w(t, o.length ? o[0][u.value.value] : void 0);
                        }),
                      n('change', d({ columnIndex: t }, x()));
                  })(e, r),
                onClickOption: (e) =>
                  ((e, t) => n('clickOption', d({ columnIndex: t, currentOption: e }, x())))(e, r),
              },
              { option: a.option },
            ),
          ),
        k = (e) => {
          if (g.value) {
            const o = { height: `${p.value}px` },
              n = { backgroundSize: `100% ${(e - p.value) / 2}px` };
            return [
              t.createVNode('div', { class: to('mask'), style: n }, null),
              t.createVNode('div', { class: [Fe, to('frame')], style: o }, null),
            ];
          }
        },
        S = () => {
          const o = p.value * +e.visibleOptionNum,
            n = { height: `${o}px` };
          return t.createVNode('div', { ref: r, class: to('columns'), style: n }, [C(), k(o)]);
        },
        T = () => {
          if (e.showToolbar && !i)
            return t.createVNode(
              ho,
              t.mergeProps(m(e, vo), { onConfirm: V, onCancel: N }),
              m(a, fo),
            );
        };
      let B;
      t.watch(
        h,
        (e) => {
          e.forEach((e, t) => {
            e.length && !ro(e, l.value[t], u.value) && w(t, no(e)[u.value.value]);
          });
        },
        { immediate: !0 },
      ),
        t.watch(
          () => e.modelValue,
          (e) => {
            f(e, l.value) || f(e, B) || (l.value = e.slice(0));
          },
          { deep: !0 },
        ),
        t.watch(
          l,
          (t) => {
            f(t, e.modelValue) || ((B = t.slice(0)), n('update:modelValue', B));
          },
          { immediate: !0 },
        ),
        j('touchmove', le, { target: r });
      return (
        Qe({ confirm: V, getSelectedOptions: () => b.value }),
        () => {
          var o, n;
          return t.createVNode('div', { class: to() }, [
            'top' === e.toolbarPosition ? T() : null,
            e.loading ? t.createVNode(Vt, { class: to('loading') }, null) : null,
            null == (o = a['columns-top']) ? void 0 : o.call(a),
            S(),
            null == (n = a['columns-bottom']) ? void 0 : n.call(a),
            'bottom' === e.toolbarPosition ? T() : null,
          ]);
        }
      );
    },
  });
  const nn = '000000',
    an = ['title', 'cancel', 'confirm', 'toolbar', 'columns-top', 'columns-bottom'],
    rn = [
      'title',
      'loading',
      'readonly',
      'optionHeight',
      'swipeDuration',
      'visibleOptionNum',
      'cancelButtonText',
      'confirmButtonText',
    ],
    ln = (e = '', t = nn, o) => ({ text: e, value: t, children: o });
  function sn({ areaList: e, columnsNum: t, columnsPlaceholder: o }) {
    const { city_list: n = {}, county_list: a = {}, province_list: r = {} } = e,
      l = t > 1,
      i = t > 2,
      s = new Map();
    Object.keys(r).forEach((e) => {
      s.set(
        e.slice(0, 2),
        ln(
          r[e],
          e,
          (() => {
            if (l) return o.length ? [ln(o[0], nn, i ? [] : void 0)] : [];
          })(),
        ),
      );
    });
    const c = new Map();
    if (l) {
      const e = () => {
        if (i) return o.length ? [ln(o[1])] : [];
      };
      Object.keys(n).forEach((t) => {
        const o = ln(n[t], t, e());
        c.set(t.slice(0, 4), o);
        const a = s.get(t.slice(0, 2));
        a && a.children.push(o);
      });
    }
    i &&
      Object.keys(a).forEach((e) => {
        const t = c.get(e.slice(0, 4));
        t && t.children.push(ln(a[e], e));
      });
    const d = Array.from(s.values());
    if (o.length) {
      const e = i ? [ln(o[2])] : void 0,
        t = l ? [ln(o[1], nn, e)] : void 0;
      d.unshift(ln(o[0], nn, t));
    }
    return d;
  }
  const cn = We(on),
    [dn, un] = Ie('area'),
    pn = d({}, en, {
      modelValue: String,
      columnsNum: V(3),
      columnsPlaceholder: w(),
      areaList: { type: Object, default: () => ({}) },
    });
  const mn = We(
      t.defineComponent({
        name: dn,
        props: pn,
        emits: ['change', 'confirm', 'cancel', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref([]),
            r = t.ref(),
            l = t.computed(() => sn(e)),
            i = (...e) => o('change', ...e),
            s = (...e) => o('cancel', ...e),
            c = (...e) => o('confirm', ...e);
          return (
            t.watch(
              a,
              (t) => {
                const n = t.length ? t[t.length - 1] : '';
                n && n !== e.modelValue && o('update:modelValue', n);
              },
              { deep: !0 },
            ),
            t.watch(
              () => e.modelValue,
              (t) => {
                if (t) {
                  t !== (a.value.length ? a.value[a.value.length - 1] : '') &&
                    (a.value = [`${t.slice(0, 2)}0000`, `${t.slice(0, 4)}00`, t].slice(
                      0,
                      +e.columnsNum,
                    ));
                } else a.value = [];
              },
              { immediate: !0 },
            ),
            Qe({
              confirm: () => {
                var e;
                return null == (e = r.value) ? void 0 : e.confirm();
              },
              getSelectedOptions: () => {
                var e;
                return (null == (e = r.value) ? void 0 : e.getSelectedOptions()) || [];
              },
            }),
            () =>
              t.createVNode(
                cn,
                t.mergeProps(
                  {
                    ref: r,
                    modelValue: a.value,
                    'onUpdate:modelValue': (e) => (a.value = e),
                    class: un(),
                    columns: l.value,
                    onChange: i,
                    onCancel: s,
                    onConfirm: c,
                  },
                  m(e, rn),
                ),
                m(n, an),
              )
          );
        },
      }),
    ),
    [fn, vn] = Ie('cell'),
    hn = {
      tag: N('div'),
      icon: String,
      size: String,
      title: g,
      value: g,
      label: g,
      center: Boolean,
      isLink: Boolean,
      border: b,
      required: Boolean,
      iconPrefix: String,
      valueClass: h,
      labelClass: h,
      titleClass: h,
      titleStyle: null,
      arrowDirection: String,
      clickable: { type: Boolean, default: null },
    },
    gn = d({}, hn, et);
  const bn = We(
      t.defineComponent({
        name: fn,
        props: gn,
        setup(e, { slots: n }) {
          const a = ot(),
            r = () => {
              if (n.label || o(e.label))
                return t.createVNode('div', { class: [vn('label'), e.labelClass] }, [
                  n.label ? n.label() : e.label,
                ]);
            },
            l = () => {
              var a;
              if (n.title || o(e.title)) {
                const o = null == (a = n.title) ? void 0 : a.call(n);
                if (Array.isArray(o) && 0 === o.length) return;
                return t.createVNode(
                  'div',
                  { class: [vn('title'), e.titleClass], style: e.titleStyle },
                  [o || t.createVNode('span', null, [e.title]), r()],
                );
              }
            },
            i = () => {
              const a = n.value || n.default;
              if (a || o(e.value))
                return t.createVNode('div', { class: [vn('value'), e.valueClass] }, [
                  a ? a() : t.createVNode('span', null, [e.value]),
                ]);
            },
            s = () => {
              if (n['right-icon']) return n['right-icon']();
              if (e.isLink) {
                const o =
                  e.arrowDirection && 'right' !== e.arrowDirection
                    ? `arrow-${e.arrowDirection}`
                    : 'arrow';
                return t.createVNode(ht, { name: o, class: vn('right-icon') }, null);
              }
            };
          return () => {
            var o;
            const { tag: r, size: c, center: d, border: u, isLink: p, required: m } = e,
              f = null != (o = e.clickable) ? o : p,
              v = { center: d, required: m, clickable: f, borderless: !u };
            return (
              c && (v[c] = !!c),
              t.createVNode(
                r,
                { class: vn(v), role: f ? 'button' : void 0, tabindex: f ? 0 : void 0, onClick: a },
                {
                  default: () => {
                    var o;
                    return [
                      n.icon
                        ? n.icon()
                        : e.icon
                        ? t.createVNode(
                            ht,
                            { name: e.icon, class: vn('left-icon'), classPrefix: e.iconPrefix },
                            null,
                          )
                        : void 0,
                      l(),
                      i(),
                      s(),
                      null == (o = n.extra) ? void 0 : o.call(n),
                    ];
                  },
                },
              )
            );
          };
        },
      }),
    ),
    [yn, wn] = Ie('form'),
    xn = {
      colon: Boolean,
      disabled: Boolean,
      readonly: Boolean,
      showError: Boolean,
      labelWidth: g,
      labelAlign: String,
      inputAlign: String,
      scrollToError: Boolean,
      validateFirst: Boolean,
      submitOnEnter: b,
      showErrorMessage: b,
      errorMessageAlign: String,
      validateTrigger: { type: [String, Array], default: 'onBlur' },
    };
  const Vn = We(
    t.defineComponent({
      name: yn,
      props: xn,
      emits: ['submit', 'failed'],
      setup(e, { emit: o, slots: n }) {
        const { children: a, linkChildren: r } = A(He),
          l = (e) => (e ? a.filter((t) => e.includes(t.name)) : a),
          i = (t) => {
            return 'string' == typeof t
              ? ((e) => {
                  const t = a.find((t) => t.name === e);
                  return t
                    ? new Promise((e, o) => {
                        t.validate().then((t) => {
                          t ? o(t) : e();
                        });
                      })
                    : Promise.reject();
                })(t)
              : e.validateFirst
              ? ((o = t),
                new Promise((e, t) => {
                  const n = [];
                  l(o)
                    .reduce(
                      (e, t) =>
                        e.then(() => {
                          if (!n.length)
                            return t.validate().then((e) => {
                              e && n.push(e);
                            });
                        }),
                      Promise.resolve(),
                    )
                    .then(() => {
                      n.length ? t(n) : e();
                    });
                }))
              : ((e) =>
                  new Promise((t, o) => {
                    const n = l(e);
                    Promise.all(n.map((e) => e.validate())).then((e) => {
                      (e = e.filter(Boolean)).length ? o(e) : t();
                    });
                  }))(t);
            var o;
          },
          s = (e, t) => {
            a.some((o) => o.name === e && (o.$el.scrollIntoView(t), !0));
          },
          c = () =>
            a.reduce((e, t) => (void 0 !== t.name && (e[t.name] = t.formValue.value), e), {}),
          d = () => {
            const t = c();
            i()
              .then(() => o('submit', t))
              .catch((n) => {
                o('failed', { values: t, errors: n }), e.scrollToError && n[0].name && s(n[0].name);
              });
          },
          u = (e) => {
            le(e), d();
          };
        return (
          r({ props: e }),
          Qe({
            submit: d,
            validate: i,
            getValues: c,
            scrollToField: s,
            resetValidation: (e) => {
              'string' == typeof e && (e = [e]);
              l(e).forEach((e) => {
                e.resetValidation();
              });
            },
            getValidationStatus: () =>
              a.reduce((e, t) => ((e[t.name] = t.getValidationStatus()), e), {}),
          }),
          () => {
            var e;
            return t.createVNode('form', { class: wn(), onSubmit: u }, [
              null == (e = n.default) ? void 0 : e.call(n),
            ]);
          }
        );
      },
    }),
  );
  function Nn(e) {
    return Array.isArray(e) ? !e.length : 0 !== e && !e;
  }
  function Cn(e, t) {
    const { message: o } = t;
    return n(o) ? o(e, t) : o || '';
  }
  function kn({ target: e }) {
    e.composing = !0;
  }
  function Sn({ target: e }) {
    e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
  }
  function Tn(e) {
    return [...e].length;
  }
  function Bn(e, t) {
    return [...e].slice(0, t).join('');
  }
  const [Pn, Dn] = Ie('field'),
    On = {
      id: String,
      name: String,
      leftIcon: String,
      rightIcon: String,
      autofocus: Boolean,
      clearable: Boolean,
      maxlength: g,
      formatter: Function,
      clearIcon: N('clear'),
      modelValue: V(''),
      inputAlign: String,
      placeholder: String,
      autocomplete: String,
      errorMessage: String,
      enterkeyhint: String,
      clearTrigger: N('focus'),
      formatTrigger: N('onChange'),
      error: { type: Boolean, default: null },
      disabled: { type: Boolean, default: null },
      readonly: { type: Boolean, default: null },
    },
    In = d({}, hn, On, {
      rows: g,
      type: N('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: g,
      labelClass: h,
      labelAlign: String,
      showWordLimit: Boolean,
      errorMessageAlign: String,
      colon: { type: Boolean, default: null },
    });
  const An = We(
    t.defineComponent({
      name: Pn,
      props: In,
      emits: [
        'blur',
        'focus',
        'clear',
        'keypress',
        'clickInput',
        'endValidate',
        'startValidate',
        'clickLeftIcon',
        'clickRightIcon',
        'update:modelValue',
      ],
      setup(e, { emit: n, slots: l }) {
        const i = bo(),
          s = t.reactive({ status: 'unvalidated', focused: !1, validateMessage: '' }),
          c = t.ref(),
          d = t.ref(),
          u = t.ref(),
          { parent: p } = D(He),
          m = () => {
            var t;
            return String(null != (t = e.modelValue) ? t : '');
          },
          f = (t) => (o(e[t]) ? e[t] : p && o(p.props[t]) ? p.props[t] : void 0),
          h = t.computed(() => {
            const t = f('readonly');
            if (e.clearable && !t) {
              const t = '' !== m(),
                o = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && s.focused);
              return t && o;
            }
            return !1;
          }),
          g = t.computed(() => (u.value && l.input ? u.value() : e.modelValue)),
          b = (e) =>
            e.reduce(
              (e, t) =>
                e.then(() => {
                  if ('failed' === s.status) return;
                  let { value: e } = g;
                  if (
                    (t.formatter && (e = t.formatter(e, t)),
                    !(function (e, t) {
                      if (Nn(e)) {
                        if (t.required) return !1;
                        if (!1 === t.validateEmpty) return !0;
                      }
                      return !(t.pattern && !t.pattern.test(String(e)));
                    })(e, t))
                  )
                    return (s.status = 'failed'), void (s.validateMessage = Cn(e, t));
                  if (t.validator) {
                    if (Nn(e) && !1 === t.validateEmpty) return;
                    return (function (e, t) {
                      return new Promise((o) => {
                        const n = t.validator(e, t);
                        r(n) ? n.then(o) : o(n);
                      });
                    })(e, t).then((o) => {
                      o && 'string' == typeof o
                        ? ((s.status = 'failed'), (s.validateMessage = o))
                        : !1 === o && ((s.status = 'failed'), (s.validateMessage = Cn(e, t)));
                    });
                  }
                }),
              Promise.resolve(),
            ),
          y = () => {
            (s.status = 'unvalidated'), (s.validateMessage = '');
          },
          w = () => n('endValidate', { status: s.status, message: s.validateMessage }),
          x = (t = e.rules) =>
            new Promise((o) => {
              y(),
                t
                  ? (n('startValidate'),
                    b(t).then(() => {
                      'failed' === s.status
                        ? (o({ name: e.name, message: s.validateMessage }), w())
                        : ((s.status = 'passed'), o(), w());
                    }))
                  : o();
            }),
          V = (t) => {
            if (p && e.rules) {
              const { validateTrigger: o } = p.props,
                n = v(o).includes(t),
                a = e.rules.filter((e) => (e.trigger ? v(e.trigger).includes(t) : n));
              a.length && x(a);
            }
          },
          N = (t, a = 'onChange') => {
            const r = t;
            t = ((t) => {
              var n;
              const { maxlength: a } = e;
              if (o(a) && Tn(t) > a) {
                const e = m();
                if (e && Tn(e) === +a) return e;
                const o = null == (n = c.value) ? void 0 : n.selectionEnd;
                if (s.focused && o) {
                  const e = [...t],
                    n = e.length - +a;
                  return e.splice(o - n, n), e.join('');
                }
                return Bn(t, +a);
              }
              return t;
            })(t);
            const l = Tn(r) - Tn(t);
            if ('number' === e.type || 'digit' === e.type) {
              const o = 'number' === e.type;
              t = xe(t, o, o);
            }
            let i = 0;
            if (e.formatter && a === e.formatTrigger) {
              const { formatter: n, maxlength: a } = e;
              if (((t = n(t)), o(a) && Tn(t) > a && (t = Bn(t, +a)), c.value && s.focused)) {
                const { selectionEnd: e } = c.value,
                  t = Bn(r, e);
                i = Tn(n(t)) - Tn(t);
              }
            }
            if (c.value && c.value.value !== t)
              if (s.focused) {
                let { selectionStart: e, selectionEnd: n } = c.value;
                if (((c.value.value = t), o(e) && o(n))) {
                  const o = Tn(t);
                  l ? ((e -= l), (n -= l)) : i && ((e += i), (n += i)),
                    c.value.setSelectionRange(Math.min(e, o), Math.min(n, o));
                }
              } else c.value.value = t;
            t !== e.modelValue && n('update:modelValue', t);
          },
          C = (e) => {
            e.target.composing || N(e.target.value);
          },
          k = () => {
            var e;
            return null == (e = c.value) ? void 0 : e.blur();
          },
          S = () => {
            const t = c.value;
            'textarea' === e.type &&
              e.autosize &&
              t &&
              (function (e, t) {
                const o = ee();
                e.style.height = 'auto';
                let n = e.scrollHeight;
                if (a(t)) {
                  const { maxHeight: e, minHeight: o } = t;
                  void 0 !== e && (n = Math.min(n, e)), void 0 !== o && (n = Math.max(n, o));
                }
                n && ((e.style.height = `${n}px`), te(o));
              })(t, e.autosize);
          },
          T = (e) => {
            (s.focused = !0), n('focus', e), t.nextTick(S), f('readonly') && k();
          },
          B = (e) => {
            f('readonly') ||
              ((s.focused = !1), N(m(), 'onBlur'), n('blur', e), V('onBlur'), t.nextTick(S), ae());
          },
          P = (e) => n('clickInput', e),
          O = (e) => n('clickLeftIcon', e),
          I = (e) => n('clickRightIcon', e),
          A = t.computed(() =>
            'boolean' == typeof e.error
              ? e.error
              : !(!p || !p.props.showError || 'failed' !== s.status) || void 0,
          ),
          z = t.computed(() => {
            const e = f('labelWidth');
            if (e) return { width: de(e) };
          }),
          E = (t) => {
            if (13 === t.keyCode) {
              (p && p.props.submitOnEnter) || 'textarea' === e.type || le(t),
                'search' === e.type && k();
            }
            n('keypress', t);
          },
          $ = () => e.id || `${i}-input`,
          L = () => {
            const o = Dn('control', [
              f('inputAlign'),
              {
                error: A.value,
                custom: !!l.input,
                'min-height': 'textarea' === e.type && !e.autosize,
              },
            ]);
            if (l.input) return t.createVNode('div', { class: o, onClick: P }, [l.input()]);
            const n = {
              id: $(),
              ref: c,
              name: e.name,
              rows: void 0 !== e.rows ? +e.rows : void 0,
              class: o,
              disabled: f('disabled'),
              readonly: f('readonly'),
              autofocus: e.autofocus,
              placeholder: e.placeholder,
              autocomplete: e.autocomplete,
              enterkeyhint: e.enterkeyhint,
              'aria-labelledby': e.label ? `${i}-label` : void 0,
              onBlur: B,
              onFocus: T,
              onInput: C,
              onClick: P,
              onChange: Sn,
              onKeypress: E,
              onCompositionend: Sn,
              onCompositionstart: kn,
            };
            return 'textarea' === e.type
              ? t.createVNode('textarea', n, null)
              : t.createVNode(
                  'input',
                  t.mergeProps(
                    'number' === (a = e.type)
                      ? { type: 'text', inputmode: 'decimal' }
                      : 'digit' === a
                      ? { type: 'tel', inputmode: 'numeric' }
                      : { type: a },
                    n,
                  ),
                  null,
                );
            var a;
          },
          M = () => {
            const o = l['right-icon'];
            if (e.rightIcon || o)
              return t.createVNode('div', { class: Dn('right-icon'), onClick: I }, [
                o ? o() : t.createVNode(ht, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
              ]);
          },
          F = () => {
            if (e.showWordLimit && e.maxlength) {
              const o = Tn(m());
              return t.createVNode('div', { class: Dn('word-limit') }, [
                t.createVNode('span', { class: Dn('word-num') }, [o]),
                t.createTextVNode('/'),
                e.maxlength,
              ]);
            }
          },
          R = () => {
            if (p && !1 === p.props.showErrorMessage) return;
            const o = e.errorMessage || s.validateMessage;
            if (o) {
              const e = l['error-message'],
                n = f('errorMessageAlign');
              return t.createVNode('div', { class: Dn('error-message', n) }, [
                e ? e({ message: o }) : o,
              ]);
            }
          },
          H = () => [
            t.createVNode('div', { class: Dn('body') }, [
              L(),
              h.value && t.createVNode(ht, { ref: d, name: e.clearIcon, class: Dn('clear') }, null),
              M(),
              l.button && t.createVNode('div', { class: Dn('button') }, [l.button()]),
            ]),
            F(),
            R(),
          ];
        return (
          Qe({
            blur: k,
            focus: () => {
              var e;
              return null == (e = c.value) ? void 0 : e.focus();
            },
            validate: x,
            formValue: g,
            resetValidation: y,
            getValidationStatus: () => s.status,
          }),
          t.provide(K, { customValue: u, resetValidation: y, validateWithTrigger: V }),
          t.watch(
            () => e.modelValue,
            () => {
              N(m()), y(), V('onChange'), t.nextTick(S);
            },
          ),
          t.onMounted(() => {
            N(m(), e.formatTrigger), t.nextTick(S);
          }),
          j(
            'touchstart',
            (e) => {
              le(e), n('update:modelValue', ''), n('clear', e);
            },
            {
              target: t.computed(() => {
                var e;
                return null == (e = d.value) ? void 0 : e.$el;
              }),
            },
          ),
          () => {
            const o = f('disabled'),
              n = f('labelAlign'),
              a = (() => {
                const o = l['left-icon'];
                if (e.leftIcon || o)
                  return t.createVNode('div', { class: Dn('left-icon'), onClick: O }, [
                    o
                      ? o()
                      : t.createVNode(ht, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                  ]);
              })();
            return t.createVNode(
              bn,
              {
                size: e.size,
                class: Dn({ error: A.value, disabled: o, [`label-${n}`]: n }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: z.value,
                valueClass: Dn('value'),
                titleClass: [Dn('label', [n, { required: e.required }]), e.labelClass],
                arrowDirection: e.arrowDirection,
              },
              {
                icon: a && 'top' !== n ? () => a : null,
                title: () => {
                  const o = (() => {
                    const o = f('colon') ? ':' : '';
                    return l.label
                      ? [l.label(), o]
                      : e.label
                      ? t.createVNode('label', { id: `${i}-label`, for: $() }, [e.label + o])
                      : void 0;
                  })();
                  return 'top' === n ? [a, o].filter(Boolean) : o || [];
                },
                value: H,
                extra: l.extra,
              },
            );
          }
        );
      },
    }),
  );
  let zn = 0;
  const [En, $n] = Ie('toast'),
    Ln = [
      'show',
      'overlay',
      'teleport',
      'transition',
      'overlayClass',
      'overlayStyle',
      'closeOnClickOverlay',
    ],
    Mn = {
      icon: String,
      show: Boolean,
      type: N('text'),
      overlay: Boolean,
      message: g,
      iconSize: g,
      duration: x(2e3),
      position: N('middle'),
      teleport: [String, Object],
      wordBreak: String,
      className: h,
      iconPrefix: String,
      transition: N('van-fade'),
      loadingType: String,
      forbidClick: Boolean,
      overlayClass: h,
      overlayStyle: Object,
      closeOnClick: Boolean,
      closeOnClickOverlay: Boolean,
    };
  var Fn = t.defineComponent({
    name: En,
    props: Mn,
    emits: ['update:show'],
    setup(e, { emit: n, slots: a }) {
      let r,
        l = !1;
      const i = () => {
          const t = e.show && e.forbidClick;
          l !== t &&
            ((l = t),
            l
              ? (zn || document.body.classList.add('van-toast--unclickable'), zn++)
              : zn && (zn--, zn || document.body.classList.remove('van-toast--unclickable')));
        },
        s = (e) => n('update:show', e),
        c = () => {
          e.closeOnClick && s(!1);
        },
        d = () => clearTimeout(r),
        u = () => {
          const { icon: o, type: n, iconSize: a, iconPrefix: r, loadingType: l } = e;
          return o || 'success' === n || 'fail' === n
            ? t.createVNode(ht, { name: o || n, size: a, class: $n('icon'), classPrefix: r }, null)
            : 'loading' === n
            ? t.createVNode(Vt, { class: $n('loading'), size: a, type: l }, null)
            : void 0;
        },
        p = () => {
          const { type: n, message: r } = e;
          return a.message
            ? t.createVNode('div', { class: $n('text') }, [a.message()])
            : o(r) && '' !== r
            ? 'html' === n
              ? t.createVNode('div', { key: 0, class: $n('text'), innerHTML: String(r) }, null)
              : t.createVNode('div', { class: $n('text') }, [r])
            : void 0;
        };
      return (
        t.watch(() => [e.show, e.forbidClick], i),
        t.watch(
          () => [e.show, e.type, e.message, e.duration],
          () => {
            d(),
              e.show &&
                e.duration > 0 &&
                (r = setTimeout(() => {
                  s(!1);
                }, e.duration));
          },
        ),
        t.onMounted(i),
        t.onUnmounted(i),
        () =>
          t.createVNode(
            Xt,
            t.mergeProps(
              {
                class: [
                  $n([
                    e.position,
                    'normal' === e.wordBreak ? 'break-normal' : e.wordBreak,
                    { [e.type]: !e.icon },
                  ]),
                  e.className,
                ],
                lockScroll: !1,
                onClick: c,
                onClosed: d,
                'onUpdate:show': s,
              },
              m(e, Ln),
            ),
            { default: () => [u(), p()] },
          )
      );
    },
  });
  function Rn() {
    const e = t.reactive({ show: !1 }),
      o = (t) => {
        e.show = t;
      },
      n = (t) => {
        d(e, t, { transitionAppear: !0 }), o(!0);
      },
      a = () => o(!1);
    return Qe({ open: n, close: a, toggle: o }), { open: n, close: a, state: e, toggle: o };
  }
  function Hn(e) {
    const o = t.createApp(e),
      n = document.createElement('div');
    return (
      document.body.appendChild(n),
      {
        instance: o.mount(n),
        unmount() {
          o.unmount(), document.body.removeChild(n);
        },
      }
    );
  }
  const jn = {
    icon: '',
    type: 'text',
    message: '',
    className: '',
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: 'body',
    iconSize: void 0,
    iconPrefix: void 0,
    position: 'middle',
    transition: 'van-fade',
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: '',
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1,
  };
  let Wn = [],
    Un = !1,
    qn = d({}, jn);
  const Yn = new Map();
  function Gn(e) {
    return a(e) ? e : { message: e };
  }
  function Xn() {
    if (!Wn.length || Un) {
      const e = (function () {
        const { instance: e, unmount: o } = Hn({
          setup() {
            const n = t.ref(''),
              { open: a, state: r, close: l, toggle: i } = Rn(),
              s = () => {
                Un && ((Wn = Wn.filter((t) => t !== e)), o());
              };
            return (
              t.watch(n, (e) => {
                r.message = e;
              }),
              (t.getCurrentInstance().render = () => {
                const e = { onClosed: s, 'onUpdate:show': i };
                return t.createVNode(Fn, t.mergeProps(r, e), null);
              }),
              { open: a, close: l, message: n }
            );
          },
        });
        return e;
      })();
      Wn.push(e);
    }
    return Wn[Wn.length - 1];
  }
  function Zn(e = {}) {
    if (!u) return {};
    const t = Xn(),
      o = Gn(e);
    return t.open(d({}, qn, Yn.get(o.type || qn.type), o)), t;
  }
  const Kn = (e) => (t) => Zn(d({ type: e }, Gn(t))),
    _n = Kn('loading'),
    Jn = Kn('success'),
    Qn = Kn('fail');
  const ea = We(Fn),
    [ta, oa] = Ie('switch'),
    na = {
      size: g,
      loading: Boolean,
      disabled: Boolean,
      modelValue: h,
      activeColor: String,
      inactiveColor: String,
      activeValue: { type: h, default: !0 },
      inactiveValue: { type: h, default: !1 },
    };
  const aa = We(
      t.defineComponent({
        name: ta,
        props: na,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const a = () => e.modelValue === e.activeValue,
            r = () => {
              if (!e.disabled && !e.loading) {
                const t = a() ? e.inactiveValue : e.activeValue;
                o('update:modelValue', t), o('change', t);
              }
            },
            l = () => {
              if (e.loading) {
                const o = a() ? e.activeColor : e.inactiveColor;
                return t.createVNode(Vt, { class: oa('loading'), color: o }, null);
              }
              if (n.node) return n.node();
            };
          return (
            _(() => e.modelValue),
            () => {
              var o;
              const { size: i, loading: s, disabled: c, activeColor: d, inactiveColor: u } = e,
                p = a(),
                m = { fontSize: de(i), backgroundColor: p ? d : u };
              return t.createVNode(
                'div',
                {
                  role: 'switch',
                  class: oa({ on: p, loading: s, disabled: c }),
                  style: m,
                  tabindex: c ? void 0 : 0,
                  'aria-checked': p,
                  onClick: r,
                },
                [
                  t.createVNode('div', { class: oa('node') }, [l()]),
                  null == (o = n.background) ? void 0 : o.call(n),
                ],
              );
            }
          );
        },
      }),
    ),
    [ra, la] = Ie('address-edit-detail'),
    ia = Ie('address-edit')[2];
  var sa = t.defineComponent({
    name: ra,
    props: {
      show: Boolean,
      rows: g,
      value: String,
      rules: Array,
      focused: Boolean,
      maxlength: g,
      searchResult: Array,
      showSearchResult: Boolean,
    },
    emits: ['blur', 'focus', 'input', 'selectSearch'],
    setup(e, { emit: o }) {
      const n = t.ref(),
        a = () => e.focused && e.searchResult && e.showSearchResult,
        r = () => {
          if (!a()) return;
          const { searchResult: n } = e;
          return n.map((e) =>
            t.createVNode(
              bn,
              {
                clickable: !0,
                key: (e.name || '') + (e.address || ''),
                icon: 'location-o',
                title: e.name,
                label: e.address,
                class: la('search-item'),
                border: !1,
                onClick: () =>
                  ((e) => {
                    o('selectSearch', e), o('input', `${e.address || ''} ${e.name || ''}`.trim());
                  })(e),
              },
              null,
            ),
          );
        },
        l = (e) => o('blur', e),
        i = (e) => o('focus', e),
        s = (e) => o('input', e);
      return () => {
        if (e.show)
          return t.createVNode(t.Fragment, null, [
            t.createVNode(
              An,
              {
                autosize: !0,
                clearable: !0,
                ref: n,
                class: la(),
                rows: e.rows,
                type: 'textarea',
                rules: e.rules,
                label: ia('addressDetail'),
                border: !a(),
                maxlength: e.maxlength,
                modelValue: e.value,
                placeholder: ia('addressDetail'),
                onBlur: l,
                onFocus: i,
                'onUpdate:modelValue': s,
              },
              null,
            ),
            r(),
          ]);
      };
    },
  });
  const [ca, da, ua] = Ie('address-edit'),
    pa = {
      name: '',
      tel: '',
      city: '',
      county: '',
      country: '',
      province: '',
      areaCode: '',
      isDefault: !1,
      addressDetail: '',
    },
    ma = {
      areaList: Object,
      isSaving: Boolean,
      isDeleting: Boolean,
      validator: Function,
      showArea: b,
      showDetail: b,
      showDelete: Boolean,
      disableArea: Boolean,
      searchResult: Array,
      telMaxlength: g,
      showSetDefault: Boolean,
      saveButtonText: String,
      areaPlaceholder: String,
      deleteButtonText: String,
      showSearchResult: Boolean,
      detailRows: V(1),
      detailMaxlength: V(200),
      areaColumnsPlaceholder: w(),
      addressInfo: { type: Object, default: () => d({}, pa) },
      telValidator: { type: Function, default: i },
    };
  const fa = We(
      t.defineComponent({
        name: ca,
        props: ma,
        emits: [
          'save',
          'focus',
          'delete',
          'clickArea',
          'changeArea',
          'changeDetail',
          'selectSearch',
          'changeDefault',
        ],
        setup(e, { emit: o, slots: n }) {
          const r = t.ref(),
            l = t.reactive({}),
            i = t.ref(!1),
            s = t.ref(!1),
            c = t.computed(() => a(e.areaList) && Object.keys(e.areaList).length),
            u = t.computed(() => {
              const { province: e, city: t, county: o, areaCode: n } = l;
              if (n) {
                const n = [e, t, o];
                return e && e === t && n.splice(1, 1), n.filter(Boolean).join('/');
              }
              return '';
            }),
            p = t.computed(() => {
              var t;
              return (null == (t = e.searchResult) ? void 0 : t.length) && s.value;
            }),
            m = (e) => {
              (s.value = 'addressDetail' === e), o('focus', e);
            },
            f = t.computed(() => {
              const { validator: t, telValidator: o } = e,
                n = (e, o) => ({
                  validator: (n) => {
                    if (t) {
                      const o = t(e, n);
                      if (o) return o;
                    }
                    return !!n || o;
                  },
                });
              return {
                name: [n('name', ua('nameEmpty'))],
                tel: [n('tel', ua('telInvalid')), { validator: o, message: ua('telInvalid') }],
                areaCode: [n('areaCode', ua('areaEmpty'))],
                addressDetail: [n('addressDetail', ua('addressEmpty'))],
              };
            }),
            v = () => o('save', l),
            h = (e) => {
              (l.addressDetail = e), o('changeDetail', e);
            },
            g = (e) => {
              (l.province = e[0].text), (l.city = e[1].text), (l.county = e[2].text);
            },
            b = ({ selectedValues: e, selectedOptions: t }) => {
              e.some((e) => e === nn)
                ? Zn(ua('areaEmpty'))
                : ((i.value = !1), g(t), o('changeArea', t));
            },
            y = () => o('delete', l),
            w = () => {
              setTimeout(() => {
                s.value = !1;
              });
            },
            x = () => {
              if (e.showSetDefault) {
                const e = {
                  'right-icon': () =>
                    t.createVNode(
                      aa,
                      {
                        modelValue: l.isDefault,
                        'onUpdate:modelValue': (e) => (l.isDefault = e),
                        onChange: (e) => o('changeDefault', e),
                      },
                      null,
                    ),
                };
                return t.withDirectives(
                  t.createVNode(
                    bn,
                    { center: !0, title: ua('defaultAddress'), class: da('default') },
                    e,
                  ),
                  [[t.vShow, !p.value]],
                );
              }
            };
          return (
            Qe({
              setAreaCode: (e) => {
                l.areaCode = e || '';
              },
              setAddressDetail: (e) => {
                l.addressDetail = e;
              },
            }),
            t.watch(
              () => e.addressInfo,
              (e) => {
                d(l, pa, e),
                  t.nextTick(() => {
                    var e;
                    const t = null == (e = r.value) ? void 0 : e.getSelectedOptions();
                    t && t.every((e) => e && e.value !== nn) && g(t);
                  });
              },
              { deep: !0, immediate: !0 },
            ),
            () => {
              const { disableArea: a } = e;
              return t.createVNode(
                Vn,
                { class: da(), onSubmit: v },
                {
                  default: () => {
                    var d;
                    return [
                      t.createVNode('div', { class: da('fields') }, [
                        t.createVNode(
                          An,
                          {
                            modelValue: l.name,
                            'onUpdate:modelValue': (e) => (l.name = e),
                            clearable: !0,
                            label: ua('name'),
                            rules: f.value.name,
                            placeholder: ua('name'),
                            onFocus: () => m('name'),
                          },
                          null,
                        ),
                        t.createVNode(
                          An,
                          {
                            modelValue: l.tel,
                            'onUpdate:modelValue': (e) => (l.tel = e),
                            clearable: !0,
                            type: 'tel',
                            label: ua('tel'),
                            rules: f.value.tel,
                            maxlength: e.telMaxlength,
                            placeholder: ua('tel'),
                            onFocus: () => m('tel'),
                          },
                          null,
                        ),
                        t.withDirectives(
                          t.createVNode(
                            An,
                            {
                              readonly: !0,
                              label: ua('area'),
                              'is-link': !a,
                              modelValue: u.value,
                              rules: f.value.areaCode,
                              placeholder: e.areaPlaceholder || ua('area'),
                              onFocus: () => m('areaCode'),
                              onClick: () => {
                                o('clickArea'), (i.value = !a);
                              },
                            },
                            null,
                          ),
                          [[t.vShow, e.showArea]],
                        ),
                        t.createVNode(
                          sa,
                          {
                            show: e.showDetail,
                            rows: e.detailRows,
                            rules: f.value.addressDetail,
                            value: l.addressDetail,
                            focused: s.value,
                            maxlength: e.detailMaxlength,
                            searchResult: e.searchResult,
                            showSearchResult: e.showSearchResult,
                            onBlur: w,
                            onFocus: () => m('addressDetail'),
                            onInput: h,
                            onSelectSearch: (e) => o('selectSearch', e),
                          },
                          null,
                        ),
                        null == (d = n.default) ? void 0 : d.call(n),
                      ]),
                      x(),
                      t.withDirectives(
                        t.createVNode('div', { class: da('buttons') }, [
                          t.createVNode(
                            St,
                            {
                              block: !0,
                              round: !0,
                              type: 'primary',
                              text: e.saveButtonText || ua('save'),
                              class: da('button'),
                              loading: e.isSaving,
                              nativeType: 'submit',
                            },
                            null,
                          ),
                          e.showDelete &&
                            t.createVNode(
                              St,
                              {
                                block: !0,
                                round: !0,
                                class: da('button'),
                                loading: e.isDeleting,
                                text: e.deleteButtonText || ua('delete'),
                                onClick: y,
                              },
                              null,
                            ),
                        ]),
                        [[t.vShow, !p.value]],
                      ),
                      t.createVNode(
                        Xt,
                        {
                          show: i.value,
                          'onUpdate:show': (e) => (i.value = e),
                          round: !0,
                          teleport: 'body',
                          position: 'bottom',
                          lazyRender: !1,
                        },
                        {
                          default: () => [
                            t.createVNode(
                              mn,
                              {
                                modelValue: l.areaCode,
                                'onUpdate:modelValue': (e) => (l.areaCode = e),
                                ref: r,
                                loading: !c.value,
                                areaList: e.areaList,
                                columnsPlaceholder: e.areaColumnsPlaceholder,
                                onConfirm: b,
                                onCancel: () => {
                                  i.value = !1;
                                },
                              },
                              null,
                            ),
                          ],
                        },
                      ),
                    ];
                  },
                },
              );
            }
          );
        },
      }),
    ),
    [va, ha] = Ie('radio-group'),
    ga = { disabled: Boolean, iconSize: g, direction: String, modelValue: h, checkedColor: String },
    ba = Symbol(va);
  const ya = We(
      t.defineComponent({
        name: va,
        props: ga,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const { linkChildren: a } = A(ba);
          return (
            t.watch(
              () => e.modelValue,
              (e) => o('change', e),
            ),
            a({ props: e, updateValue: (e) => o('update:modelValue', e) }),
            _(() => e.modelValue),
            () => {
              var o;
              return t.createVNode('div', { class: ha([e.direction]), role: 'radiogroup' }, [
                null == (o = n.default) ? void 0 : o.call(n),
              ]);
            }
          );
        },
      }),
    ),
    [wa, xa] = Ie('tag'),
    Va = {
      size: String,
      mark: Boolean,
      show: b,
      type: N('default'),
      color: String,
      plain: Boolean,
      round: Boolean,
      textColor: String,
      closeable: Boolean,
    };
  const Na = We(
      t.defineComponent({
        name: wa,
        props: Va,
        emits: ['close'],
        setup(e, { slots: o, emit: n }) {
          const a = (e) => {
              e.stopPropagation(), n('close', e);
            },
            r = () => {
              var n;
              const { type: r, mark: l, plain: i, round: s, size: c, closeable: d } = e,
                u = { mark: l, plain: i, round: s };
              c && (u[c] = c);
              const p =
                d &&
                t.createVNode(ht, { name: 'cross', class: [xa('close'), Re], onClick: a }, null);
              return t.createVNode(
                'span',
                {
                  style: e.plain
                    ? { color: e.textColor || e.color, borderColor: e.color }
                    : { color: e.textColor, background: e.color },
                  class: xa([u, r]),
                },
                [null == (n = o.default) ? void 0 : n.call(o), p],
              );
            };
          return () =>
            t.createVNode(
              t.Transition,
              { name: e.closeable ? 'van-fade' : void 0 },
              { default: () => [e.show ? r() : null] },
            );
        },
      }),
    ),
    Ca = {
      name: h,
      shape: N('round'),
      disabled: Boolean,
      iconSize: g,
      modelValue: h,
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
    };
  var ka = t.defineComponent({
    props: d({}, Ca, {
      bem: y(Function),
      role: String,
      parent: Object,
      checked: Boolean,
      bindGroup: b,
    }),
    emits: ['click', 'toggle'],
    setup(e, { emit: o, slots: n }) {
      const a = t.ref(),
        r = (t) => {
          if (e.parent && e.bindGroup) return e.parent.props[t];
        },
        l = t.computed(() => r('disabled') || e.disabled),
        i = t.computed(() => r('direction')),
        s = t.computed(() => {
          const t = e.checkedColor || r('checkedColor');
          if (t && e.checked && !l.value) return { borderColor: t, backgroundColor: t };
        }),
        c = (t) => {
          const { target: n } = t,
            r = a.value,
            i = r === n || (null == r ? void 0 : r.contains(n));
          l.value || (!i && e.labelDisabled) || o('toggle'), o('click', t);
        },
        d = () => {
          const { bem: o, shape: i, checked: c } = e,
            d = e.iconSize || r('iconSize');
          return t.createVNode(
            'div',
            {
              ref: a,
              class: o('icon', [i, { disabled: l.value, checked: c }]),
              style: { fontSize: de(d) },
            },
            [
              n.icon
                ? n.icon({ checked: c, disabled: l.value })
                : t.createVNode(ht, { name: 'success', style: s.value }, null),
            ],
          );
        },
        u = () => {
          if (n.default)
            return t.createVNode(
              'span',
              { class: e.bem('label', [e.labelPosition, { disabled: l.value }]) },
              [n.default()],
            );
        };
      return () => {
        const o = 'left' === e.labelPosition ? [u(), d()] : [d(), u()];
        return t.createVNode(
          'div',
          {
            role: e.role,
            class: e.bem([{ disabled: l.value, 'label-disabled': e.labelDisabled }, i.value]),
            tabindex: l.value ? void 0 : 0,
            'aria-checked': e.checked,
            onClick: c,
          },
          [o],
        );
      };
    },
  });
  const Sa = Ca,
    [Ta, Ba] = Ie('radio');
  const Pa = We(
      t.defineComponent({
        name: Ta,
        props: Ca,
        emits: ['update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const { parent: a } = D(ba),
            r = () => {
              a ? a.updateValue(e.name) : o('update:modelValue', e.name);
            };
          return () =>
            t.createVNode(
              ka,
              t.mergeProps(
                {
                  bem: Ba,
                  role: 'radio',
                  parent: a,
                  checked: (a ? a.props.modelValue : e.modelValue) === e.name,
                  onToggle: r,
                },
                e,
              ),
              m(n, ['default', 'icon']),
            );
        },
      }),
    ),
    [Da, Oa] = Ie('address-item');
  var Ia = t.defineComponent({
    name: Da,
    props: { address: y(Object), disabled: Boolean, switchable: Boolean, defaultTagText: String },
    emits: ['edit', 'click', 'select'],
    setup(e, { slots: o, emit: n }) {
      const a = () => {
          e.switchable && n('select'), n('click');
        },
        r = () =>
          t.createVNode(
            ht,
            {
              name: 'edit',
              class: Oa('edit'),
              onClick: (e) => {
                e.stopPropagation(), n('edit'), n('click');
              },
            },
            null,
          ),
        l = () => {
          const { address: n, disabled: a, switchable: r } = e,
            l = [
              t.createVNode('div', { class: Oa('name') }, [
                `${n.name} ${n.tel}`,
                o.tag
                  ? o.tag(e.address)
                  : e.address.isDefault && e.defaultTagText
                  ? t.createVNode(
                      Na,
                      { type: 'primary', round: !0, class: Oa('tag') },
                      { default: () => [e.defaultTagText] },
                    )
                  : void 0,
              ]),
              t.createVNode('div', { class: Oa('address') }, [n.address]),
            ];
          return r && !a
            ? t.createVNode(Pa, { name: n.id, iconSize: 18 }, { default: () => [l] })
            : l;
        };
      return () => {
        var n;
        const { disabled: i } = e;
        return t.createVNode('div', { class: Oa({ disabled: i }), onClick: a }, [
          t.createVNode(bn, { border: !1, titleClass: Oa('title') }, { title: l, 'right-icon': r }),
          null == (n = o.bottom) ? void 0 : n.call(o, d({}, e.address, { disabled: i })),
        ]);
      };
    },
  });
  const [Aa, za, Ea] = Ie('address-list'),
    $a = {
      list: w(),
      modelValue: g,
      switchable: b,
      disabledText: String,
      disabledList: w(),
      addButtonText: String,
      defaultTagText: String,
    };
  const La = We(
      t.defineComponent({
        name: Aa,
        props: $a,
        emits: [
          'add',
          'edit',
          'select',
          'clickItem',
          'editDisabled',
          'selectDisabled',
          'update:modelValue',
        ],
        setup(e, { slots: o, emit: n }) {
          const a = (a, r) => {
            if (a)
              return a.map((a, l) =>
                ((a, r, l) =>
                  t.createVNode(
                    Ia,
                    {
                      key: a.id,
                      address: a,
                      disabled: l,
                      switchable: e.switchable,
                      defaultTagText: e.defaultTagText,
                      onEdit: () => n(l ? 'editDisabled' : 'edit', a, r),
                      onClick: () => n('clickItem', a, r),
                      onSelect: () => {
                        n(l ? 'selectDisabled' : 'select', a, r), l || n('update:modelValue', a.id);
                      },
                    },
                    { bottom: o['item-bottom'], tag: o.tag },
                  ))(a, l, r),
              );
          };
          return () => {
            var r, l;
            const i = a(e.list),
              s = a(e.disabledList, !0),
              c =
                e.disabledText &&
                t.createVNode('div', { class: za('disabled-text') }, [e.disabledText]);
            return t.createVNode('div', { class: za() }, [
              null == (r = o.top) ? void 0 : r.call(o),
              t.createVNode(ya, { modelValue: e.modelValue }, { default: () => [i] }),
              c,
              s,
              null == (l = o.default) ? void 0 : l.call(o),
              t.createVNode('div', { class: [za('bottom'), 'van-safe-area-bottom'] }, [
                t.createVNode(
                  St,
                  {
                    round: !0,
                    block: !0,
                    type: 'primary',
                    text: e.addButtonText || Ea('add'),
                    class: za('add'),
                    onClick: () => n('add'),
                  },
                  null,
                ),
              ]),
            ]);
          };
        },
      }),
    ),
    Ma =
      C &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype,
    Fa = 'event',
    Ra = 'observer';
  function Ha(e, t) {
    if (!e.length) return;
    const o = e.indexOf(t);
    return o > -1 ? e.splice(o, 1) : void 0;
  }
  function ja(e, t) {
    if ('IMG' !== e.tagName || !e.getAttribute('data-srcset')) return;
    let o = e.getAttribute('data-srcset');
    const n = e.parentNode.offsetWidth * t;
    let a, r, l;
    o = o.trim().split(',');
    const i = o.map(
      (e) => (
        (e = e.trim()),
        (a = e.lastIndexOf(' ')),
        -1 === a
          ? ((r = e), (l = 999998))
          : ((r = e.substr(0, a)), (l = parseInt(e.substr(a + 1, e.length - a - 2), 10))),
        [l, r]
      ),
    );
    i.sort((e, t) => {
      if (e[0] < t[0]) return 1;
      if (e[0] > t[0]) return -1;
      if (e[0] === t[0]) {
        if (-1 !== t[1].indexOf('.webp', t[1].length - 5)) return 1;
        if (-1 !== e[1].indexOf('.webp', e[1].length - 5)) return -1;
      }
      return 0;
    });
    let s,
      c = '';
    for (let d = 0; d < i.length; d++) {
      (s = i[d]), (c = s[1]);
      const e = i[d + 1];
      if (e && e[0] < n) {
        c = s[1];
        break;
      }
      if (!e) {
        c = s[1];
        break;
      }
    }
    return c;
  }
  const Wa = (e = 1) => (C && window.devicePixelRatio) || e;
  function Ua() {
    if (!C) return !1;
    let e = !0;
    try {
      const t = document.createElement('canvas');
      t.getContext &&
        t.getContext('2d') &&
        (e = 0 === t.toDataURL('image/webp').indexOf('data:image/webp'));
    } catch (t) {
      e = !1;
    }
    return e;
  }
  function qa(e, t) {
    let o = null,
      n = 0;
    return function (...a) {
      if (o) return;
      const r = () => {
        (n = Date.now()), (o = !1), e.apply(this, a);
      };
      Date.now() - n >= t ? r() : (o = setTimeout(r, t));
    };
  }
  function Ya(e, t, o) {
    e.addEventListener(t, o, { capture: !1, passive: !0 });
  }
  function Ga(e, t, o) {
    e.removeEventListener(t, o, !1);
  }
  const Xa = (e, t, o) => {
    const n = new Image();
    if (!e || !e.src) return o(new Error('image src is required'));
    (n.src = e.src),
      e.cors && (n.crossOrigin = e.cors),
      (n.onload = () =>
        t({ naturalHeight: n.naturalHeight, naturalWidth: n.naturalWidth, src: n.src })),
      (n.onerror = (e) => o(e));
  };
  class Za {
    constructor({ max: e }) {
      (this.options = { max: e || 100 }), (this.caches = []);
    }
    has(e) {
      return this.caches.indexOf(e) > -1;
    }
    add(e) {
      this.has(e) || (this.caches.push(e), this.caches.length > this.options.max && this.free());
    }
    free() {
      this.caches.shift();
    }
  }
  const [Ka, _a] = Ie('back-top'),
    Ja = {
      right: g,
      bottom: g,
      target: [String, Object],
      offset: V(200),
      teleport: { type: [String, Object], default: 'body' },
    };
  const Qa = We(
      t.defineComponent({
        name: Ka,
        inheritAttrs: !1,
        props: Ja,
        emits: ['click'],
        setup(e, { emit: o, slots: n, attrs: a }) {
          const r = t.ref(!1),
            l = t.ref(),
            i = t.ref(),
            s = t.computed(() => ({ right: de(e.right), bottom: de(e.bottom) })),
            c = (e) => {
              var t;
              o('click', e), null == (t = i.value) || t.scrollTo({ top: 0, behavior: 'smooth' });
            },
            d = () => {
              r.value = !!i.value && J(i.value) >= e.offset;
            },
            p = () => {
              u &&
                t.nextTick(() => {
                  (i.value = e.target
                    ? (() => {
                        const { target: t } = e;
                        if ('string' != typeof t) return t;
                        {
                          const e = document.querySelector(t);
                          if (e) return e;
                        }
                      })()
                    : X(l.value)),
                    d();
                });
            };
          return (
            j('scroll', qa(d, 100), { target: i }),
            t.onMounted(p),
            t.watch(() => e.target, p),
            () => {
              const o = t.createVNode(
                'div',
                t.mergeProps(
                  { ref: l, class: _a({ active: r.value }), style: s.value, onClick: c },
                  a,
                ),
                [
                  n.default
                    ? n.default()
                    : t.createVNode(ht, { name: 'back-top', class: _a('icon') }, null),
                ],
              );
              return e.teleport
                ? t.createVNode(t.Teleport, { to: e.teleport }, { default: () => [o] })
                : o;
            }
          );
        },
      }),
    ),
    [er, tr, or] = Ie('calendar');
  function nr(e, t) {
    const o = e.getFullYear(),
      n = t.getFullYear();
    if (o === n) {
      const o = e.getMonth(),
        n = t.getMonth();
      return o === n ? 0 : o > n ? 1 : -1;
    }
    return o > n ? 1 : -1;
  }
  function ar(e, t) {
    const o = nr(e, t);
    if (0 === o) {
      const o = e.getDate(),
        n = t.getDate();
      return o === n ? 0 : o > n ? 1 : -1;
    }
    return o;
  }
  const rr = (e) => new Date(e),
    lr = (e) => (Array.isArray(e) ? e.map(rr) : rr(e));
  function ir(e, t) {
    const o = rr(e);
    return o.setDate(o.getDate() + t), o;
  }
  const sr = (e) => ir(e, -1),
    cr = (e) => ir(e, 1),
    dr = () => {
      const e = new Date();
      return e.setHours(0, 0, 0, 0), e;
    };
  const ur = d({}, en, {
      modelValue: w(),
      filter: Function,
      formatter: { type: Function, default: (e, t) => t },
    }),
    pr = Object.keys(en);
  const mr = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
    fr = (e, t, o, n, a) => {
      const r = (function (e, t) {
        if (e < 0) return [];
        const o = Array(e);
        let n = -1;
        for (; ++n < e; ) o[n] = t(n);
        return o;
      })(t - e + 1, (t) => {
        const a = be(e + t);
        return n(o, { text: a, value: a });
      });
      return a ? a(o, r) : r;
    },
    vr = (e, t) =>
      e.map((e, o) => {
        const n = t[o];
        if (n.length) {
          const t = +n[n.length - 1].value;
          if (+e > t) return String(t);
        }
        return e;
      }),
    [hr] = Ie('calendar-day');
  var gr = t.defineComponent({
    name: hr,
    props: { item: y(Object), color: String, index: Number, offset: x(0), rowHeight: String },
    emits: ['click'],
    setup(e, { emit: o, slots: n }) {
      const a = t.computed(() => {
          var t;
          const { item: o, index: n, color: a, offset: r, rowHeight: l } = e,
            i = { height: l };
          if ('placeholder' === o.type) return (i.width = '100%'), i;
          if ((0 === n && (i.marginLeft = (100 * r) / 7 + '%'), a))
            switch (o.type) {
              case 'end':
              case 'start':
              case 'start-end':
              case 'multiple-middle':
              case 'multiple-selected':
                i.background = a;
                break;
              case 'middle':
                i.color = a;
            }
          return (
            r + ((null == (t = o.date) ? void 0 : t.getDate()) || 1) > 28 && (i.marginBottom = 0), i
          );
        }),
        r = () => {
          'disabled' !== e.item.type && o('click', e.item);
        },
        l = () => {
          const { topInfo: o } = e.item;
          if (o || n['top-info'])
            return t.createVNode('div', { class: tr('top-info') }, [
              n['top-info'] ? n['top-info'](e.item) : o,
            ]);
        },
        i = () => {
          const { bottomInfo: o } = e.item;
          if (o || n['bottom-info'])
            return t.createVNode('div', { class: tr('bottom-info') }, [
              n['bottom-info'] ? n['bottom-info'](e.item) : o,
            ]);
        },
        s = () => {
          const { item: o, color: n, rowHeight: a } = e,
            { type: r, text: s } = o,
            c = [l(), s, i()];
          return 'selected' === r
            ? t.createVNode(
                'div',
                { class: tr('selected-day'), style: { width: a, height: a, background: n } },
                [c],
              )
            : c;
        };
      return () => {
        const { type: o, className: n } = e.item;
        return 'placeholder' === o
          ? t.createVNode('div', { class: tr('day'), style: a.value }, null)
          : t.createVNode(
              'div',
              {
                role: 'gridcell',
                style: a.value,
                class: [tr('day', o), n],
                tabindex: 'disabled' === o ? void 0 : -1,
                onClick: r,
              },
              [s()],
            );
      };
    },
  });
  const [br] = Ie('calendar-month'),
    yr = {
      date: y(Date),
      type: String,
      color: String,
      minDate: y(Date),
      maxDate: y(Date),
      showMark: Boolean,
      rowHeight: g,
      formatter: Function,
      lazyRender: Boolean,
      currentDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: Boolean,
      showMonthTitle: Boolean,
      firstDayOfWeek: Number,
    };
  var wr = t.defineComponent({
    name: br,
    props: yr,
    emits: ['click'],
    setup(e, { emit: o, slots: n }) {
      const [a, r] = (function (e = !1) {
          const o = t.ref(e);
          return [
            o,
            (e = !o.value) => {
              o.value = e;
            },
          ];
        })(),
        l = t.ref(),
        i = t.ref(),
        s = Ye(i),
        c = t.computed(() => {
          return (t = e.date), or('monthTitle', t.getFullYear(), t.getMonth() + 1);
          var t;
        }),
        d = t.computed(() => de(e.rowHeight)),
        u = t.computed(() => {
          const t = e.date.getDay();
          return e.firstDayOfWeek ? (t + 7 - e.firstDayOfWeek) % 7 : t;
        }),
        p = t.computed(() => mr(e.date.getFullYear(), e.date.getMonth() + 1)),
        f = t.computed(() => a.value || !e.lazyRender),
        v = (t) => {
          const { type: o, minDate: n, maxDate: a, currentDate: r } = e;
          if (ar(t, n) < 0 || ar(t, a) > 0) return 'disabled';
          if (null === r) return '';
          if (Array.isArray(r)) {
            if ('multiple' === o)
              return ((t) => {
                const o = (t) => e.currentDate.some((e) => 0 === ar(e, t));
                if (o(t)) {
                  const e = sr(t),
                    n = cr(t),
                    a = o(e),
                    r = o(n);
                  return a && r ? 'multiple-middle' : a ? 'end' : r ? 'start' : 'multiple-selected';
                }
                return '';
              })(t);
            if ('range' === o)
              return ((t) => {
                const [o, n] = e.currentDate;
                if (!o) return '';
                const a = ar(t, o);
                if (!n) return 0 === a ? 'start' : '';
                const r = ar(t, n);
                return e.allowSameDay && 0 === a && 0 === r
                  ? 'start-end'
                  : 0 === a
                  ? 'start'
                  : 0 === r
                  ? 'end'
                  : a > 0 && r < 0
                  ? 'middle'
                  : '';
              })(t);
          } else if ('single' === o) return 0 === ar(t, r) ? 'selected' : '';
          return '';
        },
        h = (t) => {
          if ('range' === e.type) {
            if ('start' === t || 'end' === t) return or(t);
            if ('start-end' === t) return `${or('start')}/${or('end')}`;
          }
        },
        g = () => {
          if (e.showMonthTitle)
            return t.createVNode('div', { class: tr('month-title') }, [c.value]);
        },
        b = () => {
          if (e.showMark && f.value)
            return t.createVNode('div', { class: tr('month-mark') }, [e.date.getMonth() + 1]);
        },
        y = t.computed(() => {
          const e = Math.ceil((p.value + u.value) / 7);
          return Array(e).fill({ type: 'placeholder' });
        }),
        w = t.computed(() => {
          const t = [],
            o = e.date.getFullYear(),
            n = e.date.getMonth();
          for (let a = 1; a <= p.value; a++) {
            const r = new Date(o, n, a),
              l = v(r);
            let i = { date: r, type: l, text: a, bottomInfo: h(l) };
            e.formatter && (i = e.formatter(i)), t.push(i);
          }
          return t;
        }),
        x = t.computed(() => w.value.filter((e) => 'disabled' === e.type)),
        V = (a, r) =>
          t.createVNode(
            gr,
            {
              item: a,
              index: r,
              color: e.color,
              offset: u.value,
              rowHeight: d.value,
              onClick: (e) => o('click', e),
            },
            m(n, ['top-info', 'bottom-info']),
          );
      return (
        Qe({
          getTitle: () => c.value,
          getHeight: () => s.value,
          setVisible: r,
          scrollToDate: (e, t) => {
            if (l.value) {
              const o = P(l.value),
                n = y.value.length,
                a = ((Math.ceil((t.getDate() + u.value) / 7) - 1) * o.height) / n;
              Q(e, o.top + a + e.scrollTop - P(e).top);
            }
          },
          disabledDays: x,
        }),
        () =>
          t.createVNode('div', { class: tr('month'), ref: i }, [
            g(),
            t.createVNode('div', { ref: l, role: 'grid', class: tr('days') }, [
              b(),
              (f.value ? w : y).value.map(V),
            ]),
          ])
      );
    },
  });
  const [xr] = Ie('calendar-header');
  var Vr = t.defineComponent({
    name: xr,
    props: {
      date: Date,
      title: String,
      subtitle: String,
      showTitle: Boolean,
      showSubtitle: Boolean,
      firstDayOfWeek: Number,
    },
    emits: ['clickSubtitle'],
    setup(e, { slots: o, emit: n }) {
      const a = () => {
          if (e.showTitle) {
            const n = e.title || or('title'),
              a = o.title ? o.title() : n;
            return t.createVNode('div', { class: tr('header-title') }, [a]);
          }
        },
        r = (e) => n('clickSubtitle', e),
        l = () => {
          if (e.showSubtitle) {
            const n = o.subtitle ? o.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle;
            return t.createVNode('div', { class: tr('header-subtitle'), onClick: r }, [n]);
          }
        },
        i = () => {
          const { firstDayOfWeek: o } = e,
            n = or('weekdays'),
            a = [...n.slice(o, 7), ...n.slice(0, o)];
          return t.createVNode('div', { class: tr('weekdays') }, [
            a.map((e) => t.createVNode('span', { class: tr('weekday') }, [e])),
          ]);
        };
      return () => t.createVNode('div', { class: tr('header') }, [a(), l(), i()]);
    },
  });
  const Nr = {
    show: Boolean,
    type: N('single'),
    title: String,
    color: String,
    round: b,
    readonly: Boolean,
    poppable: b,
    maxRange: V(null),
    position: N('bottom'),
    teleport: [String, Object],
    showMark: b,
    showTitle: b,
    formatter: Function,
    rowHeight: g,
    confirmText: String,
    rangePrompt: String,
    lazyRender: b,
    showConfirm: b,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: b,
    closeOnPopstate: b,
    showRangePrompt: b,
    confirmDisabledText: String,
    closeOnClickOverlay: b,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: b,
    minDate: { type: Date, validator: l, default: dr },
    maxDate: {
      type: Date,
      validator: l,
      default: () => {
        const e = dr();
        return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate());
      },
    },
    firstDayOfWeek: { type: g, default: 0, validator: (e) => e >= 0 && e <= 6 },
  };
  const Cr = We(
      t.defineComponent({
        name: er,
        props: Nr,
        emits: [
          'select',
          'confirm',
          'unselect',
          'monthShow',
          'overRange',
          'update:show',
          'clickSubtitle',
        ],
        setup(e, { emit: o, slots: n }) {
          const a = (t, o = e.minDate, n = e.maxDate) =>
              -1 === ar(t, o) ? o : 1 === ar(t, n) ? n : t,
            r = (t = e.defaultDate) => {
              const { type: o, minDate: n, maxDate: r, allowSameDay: l } = e;
              if (null === t) return t;
              const i = dr();
              if ('range' === o) {
                Array.isArray(t) || (t = []);
                return [a(t[0] || i, n, l ? r : sr(r)), a(t[1] || i, l ? n : cr(n))];
              }
              return 'multiple' === o
                ? Array.isArray(t)
                  ? t.map((e) => a(e))
                  : [a(i)]
                : ((t && !Array.isArray(t)) || (t = i), a(t));
            };
          let i;
          const s = t.ref(),
            c = t.ref({ text: '', date: void 0 }),
            d = t.ref(r()),
            [u, p] = yo(),
            f = t.computed(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
            v = t.computed(() => {
              const t = [],
                o = new Date(e.minDate);
              o.setDate(1);
              do {
                t.push(new Date(o)), o.setMonth(o.getMonth() + 1);
              } while (1 !== nr(o, e.maxDate));
              return t;
            }),
            h = t.computed(() => {
              if (d.value) {
                if ('range' === e.type) return !d.value[0] || !d.value[1];
                if ('multiple' === e.type) return !d.value.length;
              }
              return !d.value;
            }),
            g = () => {
              const e = J(s.value),
                t = e + i,
                n = v.value.map((e, t) => u.value[t].getHeight());
              if (t > n.reduce((e, t) => e + t, 0) && e > 0) return;
              let a,
                r = 0;
              const l = [-1, -1];
              for (let i = 0; i < v.value.length; i++) {
                const s = u.value[i];
                r <= t &&
                  r + n[i] >= e &&
                  ((l[1] = i),
                  a || ((a = s), (l[0] = i)),
                  u.value[i].showed ||
                    ((u.value[i].showed = !0),
                    o('monthShow', { date: s.date, title: s.getTitle() }))),
                  (r += n[i]);
              }
              v.value.forEach((e, t) => {
                const o = t >= l[0] - 1 && t <= l[1] + 1;
                u.value[t].setVisible(o);
              }),
                a && (c.value = { text: a.getTitle(), date: a.date });
            },
            b = (e) => {
              k(() => {
                v.value.some(
                  (t, o) => 0 === nr(t, e) && (s.value && u.value[o].scrollToDate(s.value, e), !0),
                ),
                  g();
              });
            },
            y = () => {
              if (!e.poppable || e.show)
                if (d.value) {
                  const t = 'single' === e.type ? d.value : d.value[0];
                  l(t) && b(t);
                } else k(g);
            },
            w = () => {
              (e.poppable && !e.show) ||
                (k(() => {
                  i = Math.floor(P(s).height);
                }),
                y());
            },
            x = (e = r()) => {
              (d.value = e), y();
            },
            V = () => {
              var e;
              return o('confirm', null != (e = d.value) ? e : lr(d.value));
            },
            N = (t, n) => {
              const a = (e) => {
                (d.value = e), o('select', lr(e));
              };
              if (n && 'range' === e.type) {
                const n = ((t) => {
                  const { maxRange: n, rangePrompt: a, showRangePrompt: r } = e;
                  return !(
                    n &&
                    (function (e) {
                      const t = e[0].getTime();
                      return (e[1].getTime() - t) / 864e5 + 1;
                    })(t) > n &&
                    (r && Zn(a || or('rangePrompt', n)), o('overRange'), 1)
                  );
                })(t);
                if (!n) return void a([t[0], ir(t[0], +e.maxRange - 1)]);
              }
              a(t), n && !e.showConfirm && V();
            },
            C = t.computed(() =>
              u.value.reduce((e, t) => {
                var o, n;
                return (
                  e.push(
                    ...(null != (n = null == (o = t.disabledDays) ? void 0 : o.value) ? n : []),
                  ),
                  e
                );
              }, []),
            ),
            S = (t) => {
              if (e.readonly || !t.date) return;
              const { date: n } = t,
                { type: a } = e;
              if ('range' === a) {
                if (!d.value) return void N([n]);
                const [t, o] = d.value;
                if (t && !o) {
                  const o = ar(n, t);
                  if (1 === o) {
                    const e = ((e, t, o) => {
                      var n;
                      return null ==
                        (n = e.find((e) => -1 === ar(t, e.date) && -1 === ar(e.date, o)))
                        ? void 0
                        : n.date;
                    })(C.value, t, n);
                    if (e) {
                      const o = sr(e);
                      -1 === ar(t, o) ? N([t, o]) : N([n]);
                    } else N([t, n], !0);
                  } else -1 === o ? N([n]) : e.allowSameDay && N([n, n], !0);
                } else N([n]);
              } else if ('multiple' === a) {
                if (!d.value) return void N([n]);
                const t = d.value,
                  a = t.findIndex((e) => 0 === ar(e, n));
                if (-1 !== a) {
                  const [e] = t.splice(a, 1);
                  o('unselect', rr(e));
                } else
                  e.maxRange && t.length >= e.maxRange
                    ? Zn(e.rangePrompt || or('rangePrompt', e.maxRange))
                    : N([...t, n]);
              } else N(n, !0);
            },
            T = (e) => o('update:show', e),
            B = (o, a) => {
              const r = 0 !== a || !e.showSubtitle;
              return t.createVNode(
                wr,
                t.mergeProps(
                  {
                    ref: p(a),
                    date: o,
                    currentDate: d.value,
                    showMonthTitle: r,
                    firstDayOfWeek: f.value,
                  },
                  m(e, [
                    'type',
                    'color',
                    'minDate',
                    'maxDate',
                    'showMark',
                    'formatter',
                    'rowHeight',
                    'lazyRender',
                    'showSubtitle',
                    'allowSameDay',
                  ]),
                  { onClick: S },
                ),
                m(n, ['top-info', 'bottom-info']),
              );
            },
            D = () => {
              if (n.footer) return n.footer();
              if (e.showConfirm) {
                const o = n['confirm-text'],
                  a = h.value,
                  r = a ? e.confirmDisabledText : e.confirmText;
                return t.createVNode(
                  St,
                  {
                    round: !0,
                    block: !0,
                    type: 'primary',
                    color: e.color,
                    class: tr('confirm'),
                    disabled: a,
                    nativeType: 'button',
                    onClick: V,
                  },
                  { default: () => [o ? o({ disabled: a }) : r || or('confirm')] },
                );
              }
            },
            O = () =>
              t.createVNode('div', { class: tr() }, [
                t.createVNode(
                  Vr,
                  {
                    date: c.value.date,
                    title: e.title,
                    subtitle: c.value.text,
                    showTitle: e.showTitle,
                    showSubtitle: e.showSubtitle,
                    firstDayOfWeek: f.value,
                    onClickSubtitle: (e) => o('clickSubtitle', e),
                  },
                  m(n, ['title', 'subtitle']),
                ),
                t.createVNode('div', { ref: s, class: tr('body'), onScroll: g }, [v.value.map(B)]),
                t.createVNode(
                  'div',
                  { class: [tr('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] },
                  [D()],
                ),
              ]);
          return (
            t.watch(() => e.show, w),
            t.watch(
              () => [e.type, e.minDate, e.maxDate],
              () => x(r(d.value)),
            ),
            t.watch(
              () => e.defaultDate,
              (e = null) => {
                (d.value = e), y();
              },
            ),
            Qe({ reset: x, scrollToDate: b, getSelectedDate: () => d.value }),
            H(w),
            () =>
              e.poppable
                ? t.createVNode(
                    Xt,
                    {
                      show: e.show,
                      class: tr('popup'),
                      round: e.round,
                      position: e.position,
                      closeable: e.showTitle || e.showSubtitle,
                      teleport: e.teleport,
                      closeOnPopstate: e.closeOnPopstate,
                      safeAreaInsetTop: e.safeAreaInsetTop,
                      closeOnClickOverlay: e.closeOnClickOverlay,
                      'onUpdate:show': T,
                    },
                    { default: O },
                  )
                : O()
          );
        },
      }),
    ),
    [kr, Sr] = Ie('image'),
    Tr = {
      src: String,
      alt: String,
      fit: String,
      position: String,
      round: Boolean,
      block: Boolean,
      width: g,
      height: g,
      radius: g,
      lazyLoad: Boolean,
      iconSize: g,
      showError: b,
      errorIcon: N('photo-fail'),
      iconPrefix: String,
      showLoading: b,
      loadingIcon: N('photo'),
    };
  const Br = We(
      t.defineComponent({
        name: kr,
        props: Tr,
        emits: ['load', 'error'],
        setup(e, { emit: n, slots: a }) {
          const r = t.ref(!1),
            l = t.ref(!0),
            i = t.ref(),
            { $Lazyload: s } = t.getCurrentInstance().proxy,
            c = t.computed(() => {
              const t = { width: de(e.width), height: de(e.height) };
              return o(e.radius) && ((t.overflow = 'hidden'), (t.borderRadius = de(e.radius))), t;
            });
          t.watch(
            () => e.src,
            () => {
              (r.value = !1), (l.value = !0);
            },
          );
          const d = (e) => {
              l.value && ((l.value = !1), n('load', e));
            },
            p = () => {
              const e = new Event('load');
              Object.defineProperty(e, 'target', { value: i.value, enumerable: !0 }), d(e);
            },
            m = (e) => {
              (r.value = !0), (l.value = !1), n('error', e);
            },
            f = (o, n, a) =>
              a
                ? a()
                : t.createVNode(
                    ht,
                    { name: o, size: e.iconSize, class: n, classPrefix: e.iconPrefix },
                    null,
                  ),
            v = () => {
              if (r.value || !e.src) return;
              const o = {
                alt: e.alt,
                class: Sr('img'),
                style: { objectFit: e.fit, objectPosition: e.position },
              };
              return e.lazyLoad
                ? t.withDirectives(t.createVNode('img', t.mergeProps({ ref: i }, o), null), [
                    [t.resolveDirective('lazy'), e.src],
                  ])
                : t.createVNode(
                    'img',
                    t.mergeProps({ ref: i, src: e.src, onLoad: d, onError: m }, o),
                    null,
                  );
            },
            h = ({ el: e }) => {
              const o = () => {
                e === i.value && l.value && p();
              };
              i.value ? o() : t.nextTick(o);
            },
            g = ({ el: e }) => {
              e !== i.value || r.value || m();
            };
          return (
            s &&
              u &&
              (s.$on('loaded', h),
              s.$on('error', g),
              t.onBeforeUnmount(() => {
                s.$off('loaded', h), s.$off('error', g);
              })),
            t.onMounted(() => {
              t.nextTick(() => {
                var e;
                (null == (e = i.value) ? void 0 : e.complete) && p();
              });
            }),
            () => {
              var o;
              return t.createVNode(
                'div',
                { class: Sr({ round: e.round, block: e.block }), style: c.value },
                [
                  v(),
                  l.value && e.showLoading
                    ? t.createVNode('div', { class: Sr('loading') }, [
                        f(e.loadingIcon, Sr('loading-icon'), a.loading),
                      ])
                    : r.value && e.showError
                    ? t.createVNode('div', { class: Sr('error') }, [
                        f(e.errorIcon, Sr('error-icon'), a.error),
                      ])
                    : void 0,
                  null == (o = a.default) ? void 0 : o.call(a),
                ],
              );
            }
          );
        },
      }),
    ),
    [Pr, Dr] = Ie('card'),
    Or = {
      tag: String,
      num: g,
      desc: String,
      thumb: String,
      title: String,
      price: g,
      centered: Boolean,
      lazyLoad: Boolean,
      currency: N('¥'),
      thumbLink: String,
      originPrice: g,
    };
  const Ir = We(
      t.defineComponent({
        name: Pr,
        props: Or,
        emits: ['clickThumb'],
        setup(e, { slots: n, emit: a }) {
          const r = () => {
              if (n.tag || e.tag)
                return t.createVNode('div', { class: Dr('tag') }, [
                  n.tag
                    ? n.tag()
                    : t.createVNode(Na, { mark: !0, type: 'primary' }, { default: () => [e.tag] }),
                ]);
            },
            l = () => {
              if (n.thumb || e.thumb)
                return t.createVNode(
                  'a',
                  { href: e.thumbLink, class: Dr('thumb'), onClick: (e) => a('clickThumb', e) },
                  [
                    n.thumb
                      ? n.thumb()
                      : t.createVNode(
                          Br,
                          {
                            src: e.thumb,
                            fit: 'cover',
                            width: '100%',
                            height: '100%',
                            lazyLoad: e.lazyLoad,
                          },
                          null,
                        ),
                    r(),
                  ],
                );
            },
            i = () => {
              const o = e.price.toString().split('.');
              return t.createVNode('div', null, [
                t.createVNode('span', { class: Dr('price-currency') }, [e.currency]),
                t.createVNode('span', { class: Dr('price-integer') }, [o[0]]),
                t.createTextVNode('.'),
                t.createVNode('span', { class: Dr('price-decimal') }, [o[1]]),
              ]);
            };
          return () => {
            var a, r, s;
            const c = n.num || o(e.num),
              d = n.price || o(e.price),
              u = n['origin-price'] || o(e.originPrice),
              p = c || d || u || n.bottom,
              m = d && t.createVNode('div', { class: Dr('price') }, [n.price ? n.price() : i()]),
              f =
                u &&
                t.createVNode('div', { class: Dr('origin-price') }, [
                  n['origin-price'] ? n['origin-price']() : `${e.currency} ${e.originPrice}`,
                ]),
              v = c && t.createVNode('div', { class: Dr('num') }, [n.num ? n.num() : `x${e.num}`]),
              h = n.footer && t.createVNode('div', { class: Dr('footer') }, [n.footer()]),
              g =
                p &&
                t.createVNode('div', { class: Dr('bottom') }, [
                  null == (a = n['price-top']) ? void 0 : a.call(n),
                  m,
                  f,
                  v,
                  null == (r = n.bottom) ? void 0 : r.call(n),
                ]);
            return t.createVNode('div', { class: Dr() }, [
              t.createVNode('div', { class: Dr('header') }, [
                l(),
                t.createVNode('div', { class: Dr('content', { centered: e.centered }) }, [
                  t.createVNode('div', null, [
                    n.title
                      ? n.title()
                      : e.title
                      ? t.createVNode('div', { class: [Dr('title'), 'van-multi-ellipsis--l2'] }, [
                          e.title,
                        ])
                      : void 0,
                    n.desc
                      ? n.desc()
                      : e.desc
                      ? t.createVNode('div', { class: [Dr('desc'), 'van-ellipsis'] }, [e.desc])
                      : void 0,
                    null == (s = n.tags) ? void 0 : s.call(n),
                  ]),
                  g,
                ]),
              ]),
              h,
            ]);
          };
        },
      }),
    ),
    [Ar, zr, Er] = Ie('cascader'),
    $r = {
      title: String,
      options: w(),
      closeable: b,
      swipeable: b,
      closeIcon: N('cross'),
      showHeader: b,
      modelValue: g,
      fieldNames: Object,
      placeholder: String,
      activeColor: String,
    };
  const Lr = We(
      t.defineComponent({
        name: Ar,
        props: $r,
        emits: ['close', 'change', 'finish', 'clickTab', 'update:modelValue'],
        setup(e, { slots: o, emit: n }) {
          const a = t.ref([]),
            r = t.ref(0),
            {
              text: l,
              value: i,
              children: s,
            } = d({ text: 'text', value: 'value', children: 'children' }, e.fieldNames),
            c = (e, t) => {
              for (const o of e) {
                if (o[i] === t) return [o];
                if (o[s]) {
                  const e = c(o[s], t);
                  if (e) return [o, ...e];
                }
              }
            },
            u = () => {
              const { options: o, modelValue: n } = e;
              if (void 0 !== n) {
                const e = c(o, n);
                if (e) {
                  let n = o;
                  return (
                    (a.value = e.map((e) => {
                      const t = { options: n, selected: e },
                        o = n.find((t) => t[i] === e[i]);
                      return o && (n = o[s]), t;
                    })),
                    n && a.value.push({ options: n, selected: null }),
                    void t.nextTick(() => {
                      r.value = a.value.length - 1;
                    })
                  );
                }
              }
              a.value = [{ options: o, selected: null }];
            },
            p = () => n('close'),
            m = ({ name: e, title: t }) => n('clickTab', e, t),
            f = (c, d, u) => {
              const { disabled: p } = c,
                m = !(!d || c[i] !== d[i]),
                f = c.color || (m ? e.activeColor : void 0),
                v = o.option
                  ? o.option({ option: c, selected: m })
                  : t.createVNode('span', null, [c[l]]);
              return t.createVNode(
                'li',
                {
                  role: 'menuitemradio',
                  class: [zr('option', { selected: m, disabled: p }), c.className],
                  style: { color: f },
                  tabindex: p ? void 0 : m ? 0 : -1,
                  'aria-checked': m,
                  'aria-disabled': p || void 0,
                  onClick: () =>
                    ((e, o) => {
                      if (e.disabled) return;
                      if (
                        ((a.value[o].selected = e),
                        a.value.length > o + 1 && (a.value = a.value.slice(0, o + 1)),
                        e[s])
                      ) {
                        const n = { options: e[s], selected: null };
                        a.value[o + 1] ? (a.value[o + 1] = n) : a.value.push(n),
                          t.nextTick(() => {
                            r.value++;
                          });
                      }
                      const l = a.value.map((e) => e.selected).filter(Boolean);
                      n('update:modelValue', e[i]);
                      const c = { value: e[i], tabIndex: o, selectedOptions: l };
                      n('change', c), e[s] || n('finish', c);
                    })(c, u),
                },
                [
                  v,
                  m
                    ? t.createVNode(ht, { name: 'success', class: zr('selected-icon') }, null)
                    : null,
                ],
              );
            },
            v = (e, o, n) =>
              t.createVNode('ul', { role: 'menu', class: zr('options') }, [
                e.map((e) => f(e, o, n)),
              ]),
            h = (n, a) => {
              const { options: r, selected: i } = n,
                s = e.placeholder || Er('select'),
                c = i ? i[l] : s;
              return t.createVNode(
                Go,
                { title: c, titleClass: zr('tab', { unselected: !i }) },
                {
                  default: () => {
                    var e, t;
                    return [
                      null == (e = o['options-top']) ? void 0 : e.call(o, { tabIndex: a }),
                      v(r, i, a),
                      null == (t = o['options-bottom']) ? void 0 : t.call(o, { tabIndex: a }),
                    ];
                  },
                },
              );
            };
          return (
            u(),
            t.watch(() => e.options, u, { deep: !0 }),
            t.watch(
              () => e.modelValue,
              (e) => {
                if (void 0 !== e) {
                  if (
                    a.value
                      .map((e) => {
                        var t;
                        return null == (t = e.selected) ? void 0 : t[i];
                      })
                      .includes(e)
                  )
                    return;
                }
                u();
              },
            ),
            () =>
              t.createVNode('div', { class: zr() }, [
                e.showHeader
                  ? t.createVNode('div', { class: zr('header') }, [
                      t.createVNode('h2', { class: zr('title') }, [o.title ? o.title() : e.title]),
                      e.closeable
                        ? t.createVNode(
                            ht,
                            { name: e.closeIcon, class: [zr('close-icon'), Re], onClick: p },
                            null,
                          )
                        : null,
                    ])
                  : null,
                t.createVNode(
                  Xo,
                  {
                    active: r.value,
                    'onUpdate:active': (e) => (r.value = e),
                    shrink: !0,
                    animated: !0,
                    class: zr('tabs'),
                    color: e.activeColor,
                    swipeable: e.swipeable,
                    onClickTab: m,
                  },
                  { default: () => [a.value.map(h)] },
                ),
              ])
          );
        },
      }),
    ),
    [Mr, Fr] = Ie('cell-group'),
    Rr = { title: String, inset: Boolean, border: b };
  const Hr = We(
      t.defineComponent({
        name: Mr,
        inheritAttrs: !1,
        props: Rr,
        setup(e, { slots: o, attrs: n }) {
          const a = () => {
            var a;
            return t.createVNode(
              'div',
              t.mergeProps({ class: [Fr({ inset: e.inset }), { [Me]: e.border && !e.inset }] }, n),
              [null == (a = o.default) ? void 0 : a.call(o)],
            );
          };
          return () =>
            e.title || o.title
              ? t.createVNode(t.Fragment, null, [
                  t.createVNode('div', { class: Fr('title', { inset: e.inset }) }, [
                    o.title ? o.title() : e.title,
                  ]),
                  a(),
                ])
              : a();
        },
      }),
    ),
    [jr, Wr] = Ie('checkbox-group'),
    Ur = {
      max: g,
      disabled: Boolean,
      iconSize: g,
      direction: String,
      modelValue: w(),
      checkedColor: String,
    },
    qr = Symbol(jr);
  var Yr = t.defineComponent({
    name: jr,
    props: Ur,
    emits: ['change', 'update:modelValue'],
    setup(e, { emit: o, slots: n }) {
      const { children: a, linkChildren: r } = A(qr),
        l = (e) => o('update:modelValue', e);
      return (
        t.watch(
          () => e.modelValue,
          (e) => o('change', e),
        ),
        Qe({
          toggleAll: (e = {}) => {
            'boolean' == typeof e && (e = { checked: e });
            const { checked: t, skipDisabled: o } = e,
              n = a
                .filter(
                  (e) =>
                    !!e.props.bindGroup &&
                    (e.props.disabled && o ? e.checked.value : null != t ? t : !e.checked.value),
                )
                .map((e) => e.name);
            l(n);
          },
        }),
        _(() => e.modelValue),
        r({ props: e, updateValue: l }),
        () => {
          var o;
          return t.createVNode('div', { class: Wr([e.direction]) }, [
            null == (o = n.default) ? void 0 : o.call(n),
          ]);
        }
      );
    },
  });
  const [Gr, Xr] = Ie('checkbox'),
    Zr = d({}, Ca, { bindGroup: b });
  const Kr = We(
      t.defineComponent({
        name: Gr,
        props: Zr,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const { parent: a } = D(qr),
            r = t.computed(() =>
              a && e.bindGroup ? -1 !== a.props.modelValue.indexOf(e.name) : !!e.modelValue,
            ),
            l = (t = !r.value) => {
              a && e.bindGroup
                ? ((t) => {
                    const { name: o } = e,
                      { max: n, modelValue: r } = a.props,
                      l = r.slice();
                    if (t)
                      (n && l.length >= n) ||
                        l.includes(o) ||
                        (l.push(o), e.bindGroup && a.updateValue(l));
                    else {
                      const t = l.indexOf(o);
                      -1 !== t && (l.splice(t, 1), e.bindGroup && a.updateValue(l));
                    }
                  })(t)
                : o('update:modelValue', t);
            };
          return (
            t.watch(
              () => e.modelValue,
              (e) => o('change', e),
            ),
            Qe({ toggle: l, props: e, checked: r }),
            _(() => e.modelValue),
            () =>
              t.createVNode(
                ka,
                t.mergeProps(
                  { bem: Xr, role: 'checkbox', parent: a, checked: r.value, onToggle: l },
                  e,
                ),
                m(n, ['default', 'icon']),
              )
          );
        },
      }),
    ),
    _r = We(Yr),
    [Jr, Qr] = Ie('circle');
  let el = 0;
  const tl = (e) => Math.min(Math.max(+e, 0), 100);
  const ol = {
    text: String,
    size: g,
    fill: N('none'),
    rate: V(100),
    speed: V(0),
    color: [String, Object],
    clockwise: b,
    layerColor: String,
    currentRate: x(0),
    strokeWidth: V(40),
    strokeLinecap: String,
    startPosition: N('top'),
  };
  const nl = We(
      t.defineComponent({
        name: Jr,
        props: ol,
        emits: ['update:currentRate'],
        setup(e, { emit: o, slots: n }) {
          const r = 'van-circle-' + el++,
            l = t.computed(() => +e.strokeWidth + 1e3),
            i = t.computed(() =>
              (function (e, t) {
                const o = e ? 1 : 0;
                return `M ${t / 2} ${
                  t / 2
                } m 0, -500 a 500, 500 0 1, ${o} 0, 1000 a 500, 500 0 1, ${o} 0, -1000`;
              })(e.clockwise, l.value),
            ),
            s = t.computed(() => {
              const t = { top: 0, right: 90, bottom: 180, left: 270 }[e.startPosition];
              if (t) return { transform: `rotate(${t}deg)` };
            });
          t.watch(
            () => e.rate,
            (t) => {
              let n;
              const a = Date.now(),
                r = e.currentRate,
                l = tl(t),
                i = Math.abs((1e3 * (r - l)) / +e.speed),
                s = () => {
                  const e = Date.now(),
                    t = Math.min((e - a) / i, 1) * (l - r) + r;
                  o('update:currentRate', tl(parseFloat(t.toFixed(1)))),
                    (l > r ? t < l : t > l) && (n = k(s));
                };
              e.speed ? (n && S(n), (n = k(s))) : o('update:currentRate', l);
            },
            { immediate: !0 },
          );
          const c = () => {
              const { strokeWidth: o, currentRate: n, strokeLinecap: l } = e,
                s = (3140 * n) / 100,
                c = a(e.color) ? `url(#${r})` : e.color,
                d = {
                  stroke: c,
                  strokeWidth: +o + 1 + 'px',
                  strokeLinecap: l,
                  strokeDasharray: `${s}px 3140px`,
                };
              return t.createVNode(
                'path',
                { d: i.value, style: d, class: Qr('hover'), stroke: c },
                null,
              );
            },
            d = () => {
              const o = { fill: e.fill, stroke: e.layerColor, strokeWidth: `${e.strokeWidth}px` };
              return t.createVNode('path', { class: Qr('layer'), style: o, d: i.value }, null);
            },
            u = () => {
              const { color: o } = e;
              if (!a(o)) return;
              const n = Object.keys(o)
                .sort((e, t) => parseFloat(e) - parseFloat(t))
                .map((e, n) =>
                  t.createVNode('stop', { key: n, offset: e, 'stop-color': o[e] }, null),
                );
              return t.createVNode('defs', null, [
                t.createVNode(
                  'linearGradient',
                  { id: r, x1: '100%', y1: '0%', x2: '0%', y2: '0%' },
                  [n],
                ),
              ]);
            };
          return () =>
            t.createVNode('div', { class: Qr(), style: ue(e.size) }, [
              t.createVNode('svg', { viewBox: `0 0 ${l.value} ${l.value}`, style: s.value }, [
                u(),
                d(),
                c(),
              ]),
              n.default
                ? n.default()
                : e.text
                ? t.createVNode('div', { class: Qr('text') }, [e.text])
                : void 0,
            ]);
        },
      }),
    ),
    [al, rl] = Ie('row'),
    ll = Symbol(al),
    il = { tag: N('div'), wrap: b, align: String, gutter: V(0), justify: String };
  var sl = t.defineComponent({
    name: al,
    props: il,
    setup(e, { slots: o }) {
      const { children: n, linkChildren: a } = A(ll),
        r = t.computed(() => {
          const e = [[]];
          let t = 0;
          return (
            n.forEach((o, n) => {
              (t += Number(o.span)), t > 24 ? (e.push([n]), (t -= 24)) : e[e.length - 1].push(n);
            }),
            e
          );
        });
      return (
        a({
          spaces: t.computed(() => {
            const t = Number(e.gutter),
              o = [];
            return t
              ? (r.value.forEach((e) => {
                  const n = (t * (e.length - 1)) / e.length;
                  e.forEach((e, a) => {
                    if (0 === a) o.push({ right: n });
                    else {
                      const a = t - o[e - 1].right,
                        r = n - a;
                      o.push({ left: a, right: r });
                    }
                  });
                }),
                o)
              : o;
          }),
        }),
        () => {
          const { tag: n, wrap: a, align: r, justify: l } = e;
          return t.createVNode(
            n,
            { class: rl({ [`align-${r}`]: r, [`justify-${l}`]: l, nowrap: !a }) },
            {
              default: () => {
                var e;
                return [null == (e = o.default) ? void 0 : e.call(o)];
              },
            },
          );
        }
      );
    },
  });
  const [cl, dl] = Ie('col'),
    ul = { tag: N('div'), span: V(0), offset: g };
  const pl = We(
      t.defineComponent({
        name: cl,
        props: ul,
        setup(e, { slots: o }) {
          const { parent: n, index: a } = D(ll),
            r = t.computed(() => {
              if (!n) return;
              const { spaces: e } = n;
              if (e && e.value && e.value[a.value]) {
                const { left: t, right: o } = e.value[a.value];
                return { paddingLeft: t ? `${t}px` : null, paddingRight: o ? `${o}px` : null };
              }
            });
          return () => {
            const { tag: n, span: a, offset: l } = e;
            return t.createVNode(
              n,
              { style: r.value, class: dl({ [a]: a, [`offset-${l}`]: l }) },
              {
                default: () => {
                  var e;
                  return [null == (e = o.default) ? void 0 : e.call(o)];
                },
              },
            );
          };
        },
      }),
    ),
    [ml, fl] = Ie('collapse'),
    vl = Symbol(ml),
    hl = {
      border: b,
      accordion: Boolean,
      modelValue: { type: [String, Number, Array], default: '' },
    };
  const gl = We(
      t.defineComponent({
        name: ml,
        props: hl,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const { linkChildren: a, children: r } = A(vl),
            l = (e) => {
              o('change', e), o('update:modelValue', e);
            };
          return (
            Qe({
              toggleAll: (t = {}) => {
                if (e.accordion) return;
                'boolean' == typeof t && (t = { expanded: t });
                const { expanded: o, skipDisabled: n } = t,
                  a = r
                    .filter((e) =>
                      e.disabled && n ? e.expanded.value : null != o ? o : !e.expanded.value,
                    )
                    .map((e) => e.itemName.value);
                l(a);
              },
            }),
            a({
              toggle: (t, o) => {
                const { accordion: n, modelValue: a } = e;
                l(n ? (t === a ? '' : t) : o ? a.concat(t) : a.filter((e) => e !== t));
              },
              isExpanded: (t) => {
                const { accordion: o, modelValue: n } = e;
                return o ? n === t : n.includes(t);
              },
            }),
            () => {
              var o;
              return t.createVNode('div', { class: [fl(), { [Me]: e.border }] }, [
                null == (o = n.default) ? void 0 : o.call(n),
              ]);
            }
          );
        },
      }),
    ),
    [bl, yl] = Ie('collapse-item'),
    wl = ['icon', 'title', 'value', 'label', 'right-icon'],
    xl = d({}, hn, { name: g, isLink: b, disabled: Boolean, readonly: Boolean, lazyRender: b });
  const Vl = We(
      t.defineComponent({
        name: bl,
        props: xl,
        setup(e, { slots: o }) {
          const n = t.ref(),
            a = t.ref(),
            { parent: r, index: l } = D(vl);
          if (!r) return;
          const i = t.computed(() => {
              var t;
              return null != (t = e.name) ? t : l.value;
            }),
            s = t.computed(() => r.isExpanded(i.value)),
            c = t.ref(s.value),
            d = Rt(() => c.value || !e.lazyRender),
            u = () => {
              s.value ? n.value && (n.value.style.height = '') : (c.value = !1);
            };
          t.watch(s, (e, o) => {
            if (null === o) return;
            e && (c.value = !0);
            (e ? t.nextTick : k)(() => {
              if (!a.value || !n.value) return;
              const { offsetHeight: t } = a.value;
              if (t) {
                const o = `${t}px`;
                (n.value.style.height = e ? '0' : o),
                  T(() => {
                    n.value && (n.value.style.height = e ? o : '0');
                  });
              } else u();
            });
          });
          const p = (e = !s.value) => {
              r.toggle(i.value, e);
            },
            f = () => {
              e.disabled || e.readonly || p();
            },
            v = () => {
              const { border: n, disabled: a, readonly: r } = e,
                l = m(e, Object.keys(hn));
              return (
                r && (l.isLink = !1),
                (a || r) && (l.clickable = !1),
                t.createVNode(
                  bn,
                  t.mergeProps(
                    {
                      role: 'button',
                      class: yl('title', { disabled: a, expanded: s.value, borderless: !n }),
                      'aria-expanded': String(s.value),
                      onClick: f,
                    },
                    l,
                  ),
                  m(o, wl),
                )
              );
            },
            h = d(() => {
              var e;
              return t.withDirectives(
                t.createVNode('div', { ref: n, class: yl('wrapper'), onTransitionend: u }, [
                  t.createVNode('div', { ref: a, class: yl('content') }, [
                    null == (e = o.default) ? void 0 : e.call(o),
                  ]),
                ]),
                [[t.vShow, c.value]],
              );
            });
          return (
            Qe({ toggle: p, expanded: s, itemName: i }),
            () => t.createVNode('div', { class: [yl({ border: l.value && e.border })] }, [v(), h()])
          );
        },
      }),
    ),
    Nl = We(pt),
    [Cl, kl, Sl] = Ie('contact-card'),
    Tl = { tel: String, name: String, type: N('add'), addText: String, editable: b };
  const Bl = We(
      t.defineComponent({
        name: Cl,
        props: Tl,
        emits: ['click'],
        setup(e, { emit: o }) {
          const n = (t) => {
              e.editable && o('click', t);
            },
            a = () =>
              'add' === e.type
                ? e.addText || Sl('addContact')
                : [
                    t.createVNode('div', null, [`${Sl('name')}：${e.name}`]),
                    t.createVNode('div', null, [`${Sl('tel')}：${e.tel}`]),
                  ];
          return () =>
            t.createVNode(
              bn,
              {
                center: !0,
                icon: 'edit' === e.type ? 'contact' : 'add-square',
                class: kl([e.type]),
                border: !1,
                isLink: e.editable,
                titleClass: kl('title'),
                onClick: n,
              },
              { title: a },
            );
        },
      }),
    ),
    [Pl, Dl, Ol] = Ie('contact-edit'),
    Il = { tel: '', name: '' },
    Al = {
      isEdit: Boolean,
      isSaving: Boolean,
      isDeleting: Boolean,
      showSetDefault: Boolean,
      setDefaultLabel: String,
      contactInfo: { type: Object, default: () => d({}, Il) },
      telValidator: { type: Function, default: i },
    };
  const zl = We(
      t.defineComponent({
        name: Pl,
        props: Al,
        emits: ['save', 'delete', 'changeDefault'],
        setup(e, { emit: o }) {
          const n = t.reactive(d({}, Il, e.contactInfo)),
            a = () => {
              e.isSaving || o('save', n);
            },
            r = () => o('delete', n),
            l = () =>
              t.createVNode(
                aa,
                {
                  modelValue: n.isDefault,
                  'onUpdate:modelValue': (e) => (n.isDefault = e),
                  onChange: (e) => o('changeDefault', e),
                },
                null,
              ),
            i = () => {
              if (e.showSetDefault)
                return t.createVNode(
                  bn,
                  { title: e.setDefaultLabel, class: Dl('switch-cell'), border: !1 },
                  { 'right-icon': l },
                );
            };
          return (
            t.watch(
              () => e.contactInfo,
              (e) => d(n, Il, e),
            ),
            () =>
              t.createVNode(
                Vn,
                { class: Dl(), onSubmit: a },
                {
                  default: () => [
                    t.createVNode('div', { class: Dl('fields') }, [
                      t.createVNode(
                        An,
                        {
                          modelValue: n.name,
                          'onUpdate:modelValue': (e) => (n.name = e),
                          clearable: !0,
                          label: Ol('name'),
                          rules: [{ required: !0, message: Ol('nameEmpty') }],
                          maxlength: '30',
                          placeholder: Ol('name'),
                        },
                        null,
                      ),
                      t.createVNode(
                        An,
                        {
                          modelValue: n.tel,
                          'onUpdate:modelValue': (e) => (n.tel = e),
                          clearable: !0,
                          type: 'tel',
                          label: Ol('tel'),
                          rules: [{ validator: e.telValidator, message: Ol('telInvalid') }],
                          placeholder: Ol('tel'),
                        },
                        null,
                      ),
                    ]),
                    i(),
                    t.createVNode('div', { class: Dl('buttons') }, [
                      t.createVNode(
                        St,
                        {
                          block: !0,
                          round: !0,
                          type: 'primary',
                          text: Ol('save'),
                          class: Dl('button'),
                          loading: e.isSaving,
                          nativeType: 'submit',
                        },
                        null,
                      ),
                      e.isEdit &&
                        t.createVNode(
                          St,
                          {
                            block: !0,
                            round: !0,
                            text: Ol('delete'),
                            class: Dl('button'),
                            loading: e.isDeleting,
                            onClick: r,
                          },
                          null,
                        ),
                    ]),
                  ],
                },
              )
          );
        },
      }),
    ),
    [El, $l, Ll] = Ie('contact-list'),
    Ml = { list: Array, addText: String, modelValue: h, defaultTagText: String };
  const Fl = We(
    t.defineComponent({
      name: El,
      props: Ml,
      emits: ['add', 'edit', 'select', 'update:modelValue'],
      setup(e, { emit: o }) {
        const n = (n, a) =>
          t.createVNode(
            bn,
            {
              key: n.id,
              isLink: !0,
              center: !0,
              class: $l('item'),
              titleClass: $l('item-title'),
              onClick: () => {
                o('update:modelValue', n.id), o('select', n, a);
              },
            },
            {
              icon: () =>
                t.createVNode(
                  ht,
                  {
                    name: 'edit',
                    class: $l('edit'),
                    onClick: (e) => {
                      e.stopPropagation(), o('edit', n, a);
                    },
                  },
                  null,
                ),
              title: () => {
                const o = [`${n.name}，${n.tel}`];
                return (
                  n.isDefault &&
                    e.defaultTagText &&
                    o.push(
                      t.createVNode(
                        Na,
                        { type: 'primary', round: !0, class: $l('item-tag') },
                        { default: () => [e.defaultTagText] },
                      ),
                    ),
                  o
                );
              },
              'right-icon': () =>
                t.createVNode(Pa, { class: $l('radio'), name: n.id, iconSize: 16 }, null),
            },
          );
        return () =>
          t.createVNode('div', { class: $l() }, [
            t.createVNode(
              ya,
              { modelValue: e.modelValue, class: $l('group') },
              { default: () => [e.list && e.list.map(n)] },
            ),
            t.createVNode('div', { class: [$l('bottom'), 'van-safe-area-bottom'] }, [
              t.createVNode(
                St,
                {
                  round: !0,
                  block: !0,
                  type: 'primary',
                  class: $l('add'),
                  text: e.addText || Ll('addContact'),
                  onClick: () => o('add'),
                },
                null,
              ),
            ]),
          ]);
      },
    }),
  );
  const [Rl, Hl] = Ie('count-down'),
    jl = { time: V(0), format: N('HH:mm:ss'), autoStart: b, millisecond: Boolean };
  const Wl = We(
    t.defineComponent({
      name: Rl,
      props: jl,
      emits: ['change', 'finish'],
      setup(e, { emit: o, slots: n }) {
        const {
            start: a,
            pause: r,
            reset: l,
            current: i,
          } = R({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: (e) => o('change', e),
            onFinish: () => o('finish'),
          }),
          s = t.computed(() =>
            (function (e, t) {
              const { days: o } = t;
              let { hours: n, minutes: a, seconds: r, milliseconds: l } = t;
              if (
                (e.includes('DD') ? (e = e.replace('DD', be(o))) : (n += 24 * o),
                e.includes('HH') ? (e = e.replace('HH', be(n))) : (a += 60 * n),
                e.includes('mm') ? (e = e.replace('mm', be(a))) : (r += 60 * a),
                e.includes('ss') ? (e = e.replace('ss', be(r))) : (l += 1e3 * r),
                e.includes('S'))
              ) {
                const t = be(l, 3);
                e = e.includes('SSS')
                  ? e.replace('SSS', t)
                  : e.includes('SS')
                  ? e.replace('SS', t.slice(0, 2))
                  : e.replace('S', t.charAt(0));
              }
              return e;
            })(e.format, i.value),
          ),
          c = () => {
            l(+e.time), e.autoStart && a();
          };
        return (
          t.watch(() => e.time, c, { immediate: !0 }),
          Qe({ start: a, pause: r, reset: c }),
          () =>
            t.createVNode('div', { role: 'timer', class: Hl() }, [
              n.default ? n.default(i.value) : s.value,
            ])
        );
      },
    }),
  );
  function Ul(e) {
    const t = new Date(1e3 * e);
    return `${t.getFullYear()}.${be(t.getMonth() + 1)}.${be(t.getDate())}`;
  }
  const ql = (e) => (e / 100).toFixed(e % 100 == 0 ? 0 : e % 10 == 0 ? 1 : 2),
    [Yl, Gl, Xl] = Ie('coupon');
  const Zl = We(
      t.defineComponent({
        name: Yl,
        props: { chosen: Boolean, coupon: y(Object), disabled: Boolean, currency: N('¥') },
        setup(e) {
          const o = t.computed(() => {
              const { startAt: t, endAt: o } = e.coupon;
              return `${Ul(t)} - ${Ul(o)}`;
            }),
            n = t.computed(() => {
              const { coupon: o, currency: n } = e;
              if (o.valueDesc)
                return [o.valueDesc, t.createVNode('span', null, [o.unitDesc || ''])];
              if (o.denominations) {
                const e = ql(o.denominations);
                return [t.createVNode('span', null, [n]), ` ${e}`];
              }
              return o.discount
                ? Xl('discount', ((a = o.discount) / 10).toFixed(a % 10 == 0 ? 0 : 1))
                : '';
              var a;
            }),
            a = t.computed(() => {
              const t = ql(e.coupon.originCondition || 0);
              return '0' === t ? Xl('unlimited') : Xl('condition', t);
            });
          return () => {
            const { chosen: r, coupon: l, disabled: i } = e,
              s = (i && l.reason) || l.description;
            return t.createVNode('div', { class: Gl({ disabled: i }) }, [
              t.createVNode('div', { class: Gl('content') }, [
                t.createVNode('div', { class: Gl('head') }, [
                  t.createVNode('h2', { class: Gl('amount') }, [n.value]),
                  t.createVNode('p', { class: Gl('condition') }, [l.condition || a.value]),
                ]),
                t.createVNode('div', { class: Gl('body') }, [
                  t.createVNode('p', { class: Gl('name') }, [l.name]),
                  t.createVNode('p', { class: Gl('valid') }, [o.value]),
                  !i && t.createVNode(Kr, { class: Gl('corner'), modelValue: r }, null),
                ]),
              ]),
              s && t.createVNode('p', { class: Gl('description') }, [s]),
            ]);
          };
        },
      }),
    ),
    [Kl, _l, Jl] = Ie('coupon-cell'),
    Ql = {
      title: String,
      border: b,
      editable: b,
      coupons: w(),
      currency: N('¥'),
      chosenCoupon: V(-1),
    };
  function ei({ coupons: e, chosenCoupon: t, currency: n }) {
    const a = e[+t];
    if (a) {
      let e = 0;
      return (
        o(a.value) ? ({ value: e } = a) : o(a.denominations) && (e = a.denominations),
        `-${n} ${(e / 100).toFixed(2)}`
      );
    }
    return 0 === e.length ? Jl('noCoupon') : Jl('count', e.length);
  }
  const ti = We(
      t.defineComponent({
        name: Kl,
        props: Ql,
        setup: (e) => () => {
          const o = e.coupons[+e.chosenCoupon];
          return t.createVNode(
            bn,
            {
              class: _l(),
              value: ei(e),
              title: e.title || Jl('title'),
              border: e.border,
              isLink: e.editable,
              valueClass: _l('value', { selected: o }),
            },
            null,
          );
        },
      }),
    ),
    [oi, ni] = Ie('empty'),
    ai = { image: N('default'), imageSize: [Number, String, Array], description: String };
  const ri = We(
      t.defineComponent({
        name: oi,
        props: ai,
        setup(e, { slots: o }) {
          const n = () => {
              const n = o.description ? o.description() : e.description;
              if (n) return t.createVNode('p', { class: ni('description') }, [n]);
            },
            a = () => {
              if (o.default) return t.createVNode('div', { class: ni('bottom') }, [o.default()]);
            },
            r = bo(),
            l = (e) => `${r}-${e}`,
            i = (e) => `url(#${l(e)})`,
            s = (e, o, n) =>
              t.createVNode('stop', { 'stop-color': e, offset: `${o}%`, 'stop-opacity': n }, null),
            c = (e, t) => [s(e, 0), s(t, 100)],
            d = (e) => [
              t.createVNode('defs', null, [
                t.createVNode(
                  'radialGradient',
                  {
                    id: l(e),
                    cx: '50%',
                    cy: '54%',
                    fx: '50%',
                    fy: '54%',
                    r: '297%',
                    gradientTransform: 'matrix(-.16 0 0 -.33 .58 .72)',
                  },
                  [s('#EBEDF0', 0), s('#F2F3F5', 100, 0.3)],
                ),
              ]),
              t.createVNode(
                'ellipse',
                { fill: i(e), opacity: '.8', cx: '80', cy: '140', rx: '46', ry: '8' },
                null,
              ),
            ],
            u = () => [
              t.createVNode('defs', null, [
                t.createVNode('linearGradient', { id: l('a'), x1: '64%', y1: '100%', x2: '64%' }, [
                  s('#FFF', 0, 0.5),
                  s('#F2F3F5', 100),
                ]),
              ]),
              t.createVNode('g', { opacity: '.8' }, [
                t.createVNode('path', { d: 'M36 131V53H16v20H2v58h34z', fill: i('a') }, null),
                t.createVNode('path', { d: 'M123 15h22v14h9v77h-31V15z', fill: i('a') }, null),
              ]),
            ],
            p = () => [
              t.createVNode('defs', null, [
                t.createVNode(
                  'linearGradient',
                  { id: l('b'), x1: '64%', y1: '97%', x2: '64%', y2: '0%' },
                  [s('#F2F3F5', 0, 0.3), s('#F2F3F5', 100)],
                ),
              ]),
              t.createVNode('g', { opacity: '.8' }, [
                t.createVNode(
                  'path',
                  {
                    d: 'M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z',
                    fill: i('b'),
                  },
                  null,
                ),
                t.createVNode(
                  'path',
                  {
                    d: 'M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z',
                    fill: i('b'),
                  },
                  null,
                ),
              ]),
            ],
            m = () =>
              t.createVNode('svg', { viewBox: '0 0 160 160' }, [
                t.createVNode('defs', null, [
                  t.createVNode('linearGradient', { id: l(1), x1: '64%', y1: '100%', x2: '64%' }, [
                    s('#FFF', 0, 0.5),
                    s('#F2F3F5', 100),
                  ]),
                  t.createVNode('linearGradient', { id: l(2), x1: '50%', x2: '50%', y2: '84%' }, [
                    s('#EBEDF0', 0),
                    s('#DCDEE0', 100, 0),
                  ]),
                  t.createVNode(
                    'linearGradient',
                    { id: l(3), x1: '100%', x2: '100%', y2: '100%' },
                    [c('#EAEDF0', '#DCDEE0')],
                  ),
                  t.createVNode(
                    'radialGradient',
                    {
                      id: l(4),
                      cx: '50%',
                      cy: '0%',
                      fx: '50%',
                      fy: '0%',
                      r: '100%',
                      gradientTransform: 'matrix(0 1 -.54 0 .5 -.5)',
                    },
                    [s('#EBEDF0', 0), s('#FFF', 100, 0)],
                  ),
                ]),
                t.createVNode('g', { fill: 'none' }, [
                  u(),
                  t.createVNode('path', { fill: i(4), d: 'M0 139h160v21H0z' }, null),
                  t.createVNode(
                    'path',
                    {
                      d: 'M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z',
                      fill: i(2),
                    },
                    null,
                  ),
                  t.createVNode(
                    'g',
                    { opacity: '.6', 'stroke-linecap': 'round', 'stroke-width': '7' },
                    [
                      t.createVNode(
                        'path',
                        { d: 'M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13', stroke: i(3) },
                        null,
                      ),
                      t.createVNode('path', { d: 'M53 36a34 34 0 0 0 0 48', stroke: i(3) }, null),
                      t.createVNode(
                        'path',
                        { d: 'M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13', stroke: i(3) },
                        null,
                      ),
                      t.createVNode('path', { d: 'M106 84a34 34 0 0 0 0-48', stroke: i(3) }, null),
                    ],
                  ),
                  t.createVNode('g', { transform: 'translate(31 105)' }, [
                    t.createVNode(
                      'rect',
                      { fill: '#EBEDF0', width: '98', height: '34', rx: '2' },
                      null,
                    ),
                    t.createVNode(
                      'rect',
                      { fill: '#FFF', x: '9', y: '8', width: '80', height: '18', rx: '1.1' },
                      null,
                    ),
                    t.createVNode(
                      'rect',
                      { fill: '#EBEDF0', x: '15', y: '12', width: '18', height: '6', rx: '1.1' },
                      null,
                    ),
                  ]),
                ]),
              ]),
            f = () =>
              t.createVNode('svg', { viewBox: '0 0 160 160' }, [
                t.createVNode('defs', null, [
                  t.createVNode('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: l(5) }, [
                    c('#F2F3F5', '#DCDEE0'),
                  ]),
                  t.createVNode(
                    'linearGradient',
                    { x1: '95%', y1: '48%', x2: '5.5%', y2: '51%', id: l(6) },
                    [c('#EAEDF1', '#DCDEE0')],
                  ),
                  t.createVNode('linearGradient', { y1: '45%', x2: '100%', y2: '54%', id: l(7) }, [
                    c('#EAEDF1', '#DCDEE0'),
                  ]),
                ]),
                u(),
                p(),
                t.createVNode('g', { transform: 'translate(36 50)', fill: 'none' }, [
                  t.createVNode('g', { transform: 'translate(8)' }, [
                    t.createVNode(
                      'rect',
                      {
                        fill: '#EBEDF0',
                        opacity: '.6',
                        x: '38',
                        y: '13',
                        width: '36',
                        height: '53',
                        rx: '2',
                      },
                      null,
                    ),
                    t.createVNode('rect', { fill: i(5), width: '64', height: '66', rx: '2' }, null),
                    t.createVNode(
                      'rect',
                      { fill: '#FFF', x: '6', y: '6', width: '52', height: '55', rx: '1' },
                      null,
                    ),
                    t.createVNode('g', { transform: 'translate(15 17)', fill: i(6) }, [
                      t.createVNode('rect', { width: '34', height: '6', rx: '1' }, null),
                      t.createVNode('path', { d: 'M0 14h34v6H0z' }, null),
                      t.createVNode('rect', { y: '28', width: '34', height: '6', rx: '1' }, null),
                    ]),
                  ]),
                  t.createVNode(
                    'rect',
                    { fill: i(7), y: '61', width: '88', height: '28', rx: '1' },
                    null,
                  ),
                  t.createVNode(
                    'rect',
                    { fill: '#F7F8FA', x: '29', y: '72', width: '30', height: '6', rx: '1' },
                    null,
                  ),
                ]),
              ]),
            v = () =>
              t.createVNode('svg', { viewBox: '0 0 160 160' }, [
                t.createVNode('defs', null, [
                  t.createVNode('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: l(8) }, [
                    c('#EAEDF1', '#DCDEE0'),
                  ]),
                ]),
                u(),
                p(),
                d('c'),
                t.createVNode(
                  'path',
                  {
                    d: 'm59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z',
                    fill: i(8),
                  },
                  null,
                ),
              ]),
            h = () =>
              t.createVNode('svg', { viewBox: '0 0 160 160' }, [
                t.createVNode('defs', null, [
                  t.createVNode('linearGradient', { x1: '50%', y1: '100%', x2: '50%', id: l(9) }, [
                    c('#EEE', '#D8D8D8'),
                  ]),
                  t.createVNode('linearGradient', { x1: '100%', y1: '50%', y2: '50%', id: l(10) }, [
                    c('#F2F3F5', '#DCDEE0'),
                  ]),
                  t.createVNode('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: l(11) }, [
                    c('#F2F3F5', '#DCDEE0'),
                  ]),
                  t.createVNode('linearGradient', { x1: '50%', x2: '50%', y2: '100%', id: l(12) }, [
                    c('#FFF', '#F7F8FA'),
                  ]),
                ]),
                u(),
                p(),
                d('d'),
                t.createVNode('g', { transform: 'rotate(-45 113 -4)', fill: 'none' }, [
                  t.createVNode(
                    'rect',
                    { fill: i(9), x: '24', y: '52.8', width: '5.8', height: '19', rx: '1' },
                    null,
                  ),
                  t.createVNode(
                    'rect',
                    { fill: i(10), x: '22.1', y: '67.3', width: '9.9', height: '28', rx: '1' },
                    null,
                  ),
                  t.createVNode(
                    'circle',
                    { stroke: i(11), 'stroke-width': '8', cx: '27', cy: '27', r: '27' },
                    null,
                  ),
                  t.createVNode('circle', { fill: i(12), cx: '27', cy: '27', r: '16' }, null),
                  t.createVNode(
                    'path',
                    {
                      d: 'M37 7c-8 0-15 5-16 12',
                      stroke: i(11),
                      'stroke-width': '3',
                      opacity: '.5',
                      'stroke-linecap': 'round',
                      transform: 'rotate(45 29 13)',
                    },
                    null,
                  ),
                ]),
              ]),
            g = () => {
              var n;
              if (o.image) return o.image();
              const a = { error: v, search: h, network: m, default: f };
              return (
                (null == (n = a[e.image]) ? void 0 : n.call(a)) ||
                t.createVNode('img', { src: e.image }, null)
              );
            };
          return () =>
            t.createVNode('div', { class: ni() }, [
              t.createVNode('div', { class: ni('image'), style: ue(e.imageSize) }, [g()]),
              n(),
              a(),
            ]);
        },
      }),
    ),
    [li, ii, si] = Ie('coupon-list'),
    ci = {
      code: N(''),
      coupons: w(),
      currency: N('¥'),
      showCount: b,
      emptyImage: String,
      chosenCoupon: x(-1),
      enabledTitle: String,
      disabledTitle: String,
      disabledCoupons: w(),
      showExchangeBar: b,
      showCloseButton: b,
      closeButtonText: String,
      inputPlaceholder: String,
      exchangeMinLength: x(1),
      exchangeButtonText: String,
      displayedCouponIndex: x(-1),
      exchangeButtonLoading: Boolean,
      exchangeButtonDisabled: Boolean,
    };
  const di = We(
      t.defineComponent({
        name: li,
        props: ci,
        emits: ['change', 'exchange', 'update:code'],
        setup(e, { emit: o, slots: n }) {
          const [a, r] = yo(),
            l = t.ref(),
            i = t.ref(),
            s = t.ref(0),
            c = t.ref(0),
            d = t.ref(e.code),
            u = t.computed(
              () =>
                !e.exchangeButtonLoading &&
                (e.exchangeButtonDisabled || !d.value || d.value.length < e.exchangeMinLength),
            ),
            p = () => {
              const e = P(l).height,
                t = P(i).height + 44;
              c.value = (e > t ? e : ce.value) - t;
            },
            m = () => {
              o('exchange', d.value), e.code || (d.value = '');
            },
            f = (e) => {
              t.nextTick(() => {
                var t;
                return null == (t = a.value[e]) ? void 0 : t.scrollIntoView();
              });
            },
            v = () =>
              t.createVNode(
                ri,
                { image: e.emptyImage },
                {
                  default: () => [t.createVNode('p', { class: ii('empty-tip') }, [si('noCoupon')])],
                },
              ),
            h = () => {
              if (e.showExchangeBar)
                return t.createVNode('div', { ref: i, class: ii('exchange-bar') }, [
                  t.createVNode(
                    An,
                    {
                      modelValue: d.value,
                      'onUpdate:modelValue': (e) => (d.value = e),
                      clearable: !0,
                      border: !1,
                      class: ii('field'),
                      placeholder: e.inputPlaceholder || si('placeholder'),
                      maxlength: '20',
                    },
                    null,
                  ),
                  t.createVNode(
                    St,
                    {
                      plain: !0,
                      type: 'primary',
                      class: ii('exchange'),
                      text: e.exchangeButtonText || si('exchange'),
                      loading: e.exchangeButtonLoading,
                      disabled: u.value,
                      onClick: m,
                    },
                    null,
                  ),
                ]);
            },
            g = () => {
              const { coupons: a } = e,
                l = e.showCount ? ` (${a.length})` : '',
                i = (e.enabledTitle || si('enable')) + l;
              return t.createVNode(
                Go,
                { title: i },
                {
                  default: () => {
                    var l;
                    return [
                      t.createVNode(
                        'div',
                        {
                          class: ii('list', { 'with-bottom': e.showCloseButton }),
                          style: { height: `${c.value}px` },
                        },
                        [
                          a.map((n, a) =>
                            t.createVNode(
                              Zl,
                              {
                                key: n.id,
                                ref: r(a),
                                coupon: n,
                                chosen: a === e.chosenCoupon,
                                currency: e.currency,
                                onClick: () => o('change', a),
                              },
                              null,
                            ),
                          ),
                          !a.length && v(),
                          null == (l = n['list-footer']) ? void 0 : l.call(n),
                        ],
                      ),
                    ];
                  },
                },
              );
            },
            b = () => {
              const { disabledCoupons: o } = e,
                a = e.showCount ? ` (${o.length})` : '',
                r = (e.disabledTitle || si('disabled')) + a;
              return t.createVNode(
                Go,
                { title: r },
                {
                  default: () => {
                    var a;
                    return [
                      t.createVNode(
                        'div',
                        {
                          class: ii('list', { 'with-bottom': e.showCloseButton }),
                          style: { height: `${c.value}px` },
                        },
                        [
                          o.map((o) =>
                            t.createVNode(
                              Zl,
                              { disabled: !0, key: o.id, coupon: o, currency: e.currency },
                              null,
                            ),
                          ),
                          !o.length && v(),
                          null == (a = n['disabled-list-footer']) ? void 0 : a.call(n),
                        ],
                      ),
                    ];
                  },
                },
              );
            };
          return (
            t.watch(
              () => e.code,
              (e) => {
                d.value = e;
              },
            ),
            t.watch(ce, p),
            t.watch(d, (e) => o('update:code', e)),
            t.watch(() => e.displayedCouponIndex, f),
            t.onMounted(() => {
              p(), f(e.displayedCouponIndex);
            }),
            () =>
              t.createVNode('div', { ref: l, class: ii() }, [
                h(),
                t.createVNode(
                  Xo,
                  { active: s.value, 'onUpdate:active': (e) => (s.value = e), class: ii('tab') },
                  { default: () => [g(), b()] },
                ),
                t.createVNode('div', { class: ii('bottom') }, [
                  t.withDirectives(
                    t.createVNode(
                      St,
                      {
                        round: !0,
                        block: !0,
                        type: 'primary',
                        class: ii('close'),
                        text: e.closeButtonText || si('close'),
                        onClick: () => o('change', -1),
                      },
                      null,
                    ),
                    [[t.vShow, e.showCloseButton]],
                  ),
                ]),
              ])
          );
        },
      }),
    ),
    ui = new Date().getFullYear(),
    [pi] = Ie('date-picker'),
    mi = d({}, ur, {
      columnsType: { type: Array, default: () => ['year', 'month', 'day'] },
      minDate: { type: Date, default: () => new Date(ui - 10, 0, 1), validator: l },
      maxDate: { type: Date, default: () => new Date(ui + 10, 11, 31), validator: l },
    });
  const fi = We(
      t.defineComponent({
        name: pi,
        props: mi,
        emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(e.modelValue),
            r = (t) => t === e.minDate.getFullYear(),
            l = (t) => t === e.maxDate.getFullYear(),
            i = (t) => {
              const { minDate: o, columnsType: n } = e,
                r = n.indexOf(t),
                l = a.value[r];
              if (l) return +l;
              switch (t) {
                case 'year':
                  return o.getFullYear();
                case 'month':
                  return o.getMonth() + 1;
                case 'day':
                  return o.getDate();
              }
            },
            s = () => {
              const t = i('year'),
                o = i('month'),
                n = r(t) && ((t) => t === e.minDate.getMonth() + 1)(o) ? e.minDate.getDate() : 1,
                a =
                  l(t) && ((t) => t === e.maxDate.getMonth() + 1)(o)
                    ? e.maxDate.getDate()
                    : mr(t, o);
              return fr(n, a, 'day', e.formatter, e.filter);
            },
            c = t.computed(() =>
              e.columnsType.map((t) => {
                switch (t) {
                  case 'year':
                    return (() => {
                      const t = e.minDate.getFullYear(),
                        o = e.maxDate.getFullYear();
                      return fr(t, o, 'year', e.formatter, e.filter);
                    })();
                  case 'month':
                    return (() => {
                      const t = i('year'),
                        o = r(t) ? e.minDate.getMonth() + 1 : 1,
                        n = l(t) ? e.maxDate.getMonth() + 1 : 12;
                      return fr(o, n, 'month', e.formatter, e.filter);
                    })();
                  case 'day':
                    return s();
                  default:
                    return [];
                }
              }),
            );
          t.watch(a, (t) => {
            f(t, e.modelValue) || o('update:modelValue', t);
          }),
            t.watch(
              () => e.modelValue,
              (e) => {
                (e = vr(e, c.value)), f(e, a.value) || (a.value = e);
              },
              { immediate: !0 },
            );
          const d = (...e) => o('change', ...e),
            u = (...e) => o('cancel', ...e),
            p = (...e) => o('confirm', ...e);
          return () =>
            t.createVNode(
              cn,
              t.mergeProps(
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': (e) => (a.value = e),
                  columns: c.value,
                  onChange: d,
                  onCancel: u,
                  onConfirm: p,
                },
                m(e, pr),
              ),
              n,
            );
        },
      }),
    ),
    [vi, hi, gi] = Ie('dialog'),
    bi = d({}, Et, {
      title: String,
      theme: String,
      width: g,
      message: [String, Function],
      callback: Function,
      allowHtml: Boolean,
      className: h,
      transition: N('van-dialog-bounce'),
      messageAlign: String,
      closeOnPopstate: b,
      showCancelButton: Boolean,
      cancelButtonText: String,
      cancelButtonColor: String,
      cancelButtonDisabled: Boolean,
      confirmButtonText: String,
      confirmButtonColor: String,
      confirmButtonDisabled: Boolean,
      showConfirmButton: b,
      closeOnClickOverlay: Boolean,
    }),
    yi = [...$t, 'transition', 'closeOnPopstate'];
  var wi = t.defineComponent({
    name: vi,
    props: bi,
    emits: ['confirm', 'cancel', 'keydown', 'update:show'],
    setup(e, { emit: o, slots: a }) {
      const r = t.ref(),
        l = t.reactive({ confirm: !1, cancel: !1 }),
        i = (e) => o('update:show', e),
        s = (t) => {
          var o;
          i(!1), null == (o = e.callback) || o.call(e, t);
        },
        d = (t) => () => {
          e.show &&
            (o(t),
            e.beforeClose
              ? ((l[t] = !0),
                je(e.beforeClose, {
                  args: [t],
                  done() {
                    s(t), (l[t] = !1);
                  },
                  canceled() {
                    l[t] = !1;
                  },
                }))
              : s(t));
        },
        u = d('cancel'),
        p = d('confirm'),
        f = t.withKeys(
          (t) => {
            var n, a;
            if (
              t.target !==
              (null == (a = null == (n = r.value) ? void 0 : n.popupRef) ? void 0 : a.value)
            )
              return;
            ({ Enter: e.showConfirmButton ? p : c, Escape: e.showCancelButton ? u : c }[t.key](),
              o('keydown', t));
          },
          ['enter', 'esc'],
        ),
        v = () => {
          const o = a.title ? a.title() : e.title;
          if (o)
            return t.createVNode(
              'div',
              { class: hi('header', { isolated: !e.message && !a.default }) },
              [o],
            );
        },
        h = (o) => {
          const { message: a, allowHtml: r, messageAlign: l } = e,
            i = hi('message', { 'has-title': o, [l]: l }),
            s = n(a) ? a() : a;
          return r && 'string' == typeof s
            ? t.createVNode('div', { class: i, innerHTML: s }, null)
            : t.createVNode('div', { class: i }, [s]);
        },
        g = () => {
          if (a.default) return t.createVNode('div', { class: hi('content') }, [a.default()]);
          const { title: o, message: n, allowHtml: r } = e;
          if (n) {
            const e = !(!o && !a.title);
            return t.createVNode(
              'div',
              { key: r ? 1 : 0, class: hi('content', { isolated: !e }) },
              [h(e)],
            );
          }
        },
        b = () =>
          a.footer
            ? a.footer()
            : 'round-button' === e.theme
            ? t.createVNode(
                Je,
                { class: hi('footer') },
                {
                  default: () => [
                    e.showCancelButton &&
                      t.createVNode(
                        Dt,
                        {
                          type: 'warning',
                          text: e.cancelButtonText || gi('cancel'),
                          class: hi('cancel'),
                          color: e.cancelButtonColor,
                          loading: l.cancel,
                          disabled: e.cancelButtonDisabled,
                          onClick: u,
                        },
                        null,
                      ),
                    e.showConfirmButton &&
                      t.createVNode(
                        Dt,
                        {
                          type: 'danger',
                          text: e.confirmButtonText || gi('confirm'),
                          class: hi('confirm'),
                          color: e.confirmButtonColor,
                          loading: l.confirm,
                          disabled: e.confirmButtonDisabled,
                          onClick: p,
                        },
                        null,
                      ),
                  ],
                },
              )
            : t.createVNode('div', { class: [ze, hi('footer')] }, [
                e.showCancelButton &&
                  t.createVNode(
                    St,
                    {
                      size: 'large',
                      text: e.cancelButtonText || gi('cancel'),
                      class: hi('cancel'),
                      style: { color: e.cancelButtonColor },
                      loading: l.cancel,
                      disabled: e.cancelButtonDisabled,
                      onClick: u,
                    },
                    null,
                  ),
                e.showConfirmButton &&
                  t.createVNode(
                    St,
                    {
                      size: 'large',
                      text: e.confirmButtonText || gi('confirm'),
                      class: [hi('confirm'), { [Ee]: e.showCancelButton }],
                      style: { color: e.confirmButtonColor },
                      loading: l.confirm,
                      disabled: e.confirmButtonDisabled,
                      onClick: p,
                    },
                    null,
                  ),
              ]);
      return () => {
        const { width: o, title: n, theme: a, message: l, className: s } = e;
        return t.createVNode(
          Xt,
          t.mergeProps(
            {
              ref: r,
              role: 'dialog',
              class: [hi([a]), s],
              style: { width: de(o) },
              tabindex: 0,
              'aria-labelledby': n || l,
              onKeydown: f,
              'onUpdate:show': i,
            },
            m(e, yi),
          ),
          { default: () => [v(), g(), b()] },
        );
      };
    },
  });
  let xi;
  const Vi = {
    title: '',
    width: '',
    theme: null,
    message: '',
    overlay: !0,
    callback: null,
    teleport: 'body',
    className: '',
    allowHtml: !1,
    lockScroll: !0,
    transition: void 0,
    beforeClose: null,
    overlayClass: '',
    overlayStyle: void 0,
    messageAlign: '',
    cancelButtonText: '',
    cancelButtonColor: null,
    cancelButtonDisabled: !1,
    confirmButtonText: '',
    confirmButtonColor: null,
    confirmButtonDisabled: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !1,
  };
  let Ni = d({}, Vi);
  function Ci(e) {
    return u
      ? new Promise((o, n) => {
          xi ||
            (function () {
              const e = {
                setup() {
                  const { state: e, toggle: o } = Rn();
                  return () => t.createVNode(wi, t.mergeProps(e, { 'onUpdate:show': o }), null);
                },
              };
              ({ instance: xi } = Hn(e));
            })(),
            xi.open(
              d({}, Ni, e, {
                callback: (e) => {
                  ('confirm' === e ? o : n)(e);
                },
              }),
            );
        })
      : Promise.resolve();
  }
  const ki = We(wi),
    [Si, Ti] = Ie('divider'),
    Bi = { dashed: Boolean, hairline: b, contentPosition: N('center') };
  const Pi = We(
      t.defineComponent({
        name: Si,
        props: Bi,
        setup:
          (e, { slots: o }) =>
          () => {
            var n;
            return t.createVNode(
              'div',
              {
                role: 'separator',
                class: Ti({
                  dashed: e.dashed,
                  hairline: e.hairline,
                  [`content-${e.contentPosition}`]: !!o.default,
                }),
              },
              [null == (n = o.default) ? void 0 : n.call(o)],
            );
          },
      }),
    ),
    [Di, Oi] = Ie('dropdown-menu'),
    Ii = {
      overlay: b,
      zIndex: g,
      duration: V(0.2),
      direction: N('down'),
      activeColor: String,
      closeOnClickOutside: b,
      closeOnClickOverlay: b,
    },
    Ai = Symbol(Di);
  var zi = t.defineComponent({
    name: Di,
    props: Ii,
    setup(e, { slots: n }) {
      const a = bo(),
        r = t.ref(),
        l = t.ref(),
        i = t.ref(0),
        { children: s, linkChildren: c } = A(Ai),
        d = Z(r),
        u = t.computed(() => s.some((e) => e.state.showWrapper)),
        p = t.computed(() => {
          if (u.value && o(e.zIndex)) return { zIndex: +e.zIndex + 1 };
        }),
        m = () => {
          if (l.value) {
            const t = P(l);
            'down' === e.direction ? (i.value = t.bottom) : (i.value = ce.value - t.top);
          }
        },
        f = (o, n) => {
          const { showPopup: r } = o.state,
            { disabled: l, titleClass: i } = o;
          return t.createVNode(
            'div',
            {
              id: `${a}-${n}`,
              role: 'button',
              tabindex: l ? void 0 : 0,
              class: [Oi('item', { disabled: l }), { [Re]: !l }],
              onClick: () => {
                var e;
                l ||
                  ((e = n),
                  s.forEach((t, o) => {
                    o === e
                      ? (m(), t.toggle())
                      : t.state.showPopup && t.toggle(!1, { immediate: !0 });
                  }));
              },
            },
            [
              t.createVNode(
                'span',
                {
                  class: [Oi('title', { down: r === ('down' === e.direction), active: r }), i],
                  style: { color: r ? e.activeColor : '' },
                },
                [t.createVNode('div', { class: 'van-ellipsis' }, [o.renderTitle()])],
              ),
            ],
          );
        };
      return (
        c({ id: a, props: e, offset: i }),
        W(r, () => {
          e.closeOnClickOutside &&
            s.forEach((e) => {
              e.toggle(!1);
            });
        }),
        j(
          'scroll',
          () => {
            u.value && m();
          },
          { target: d, passive: !0 },
        ),
        () => {
          var e;
          return t.createVNode('div', { ref: r, class: Oi() }, [
            t.createVNode(
              'div',
              { ref: l, style: p.value, class: Oi('bar', { opened: u.value }) },
              [s.map(f)],
            ),
            null == (e = n.default) ? void 0 : e.call(n),
          ]);
        }
      );
    },
  });
  const [Ei, $i] = Ie('dropdown-item'),
    Li = {
      title: String,
      options: w(),
      disabled: Boolean,
      teleport: [String, Object],
      lazyRender: b,
      modelValue: h,
      titleClass: h,
    };
  const Mi = We(
      t.defineComponent({
        name: Ei,
        inheritAttrs: !1,
        props: Li,
        emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],
        setup(e, { emit: o, slots: n, attrs: a }) {
          const r = t.reactive({ showPopup: !1, transition: !0, showWrapper: !1 }),
            { parent: l, index: i } = D(Ai);
          if (!l) return;
          const s = (e) => () => o(e),
            c = s('open'),
            d = s('close'),
            u = s('opened'),
            p = () => {
              (r.showWrapper = !1), o('closed');
            },
            m = (t) => {
              e.teleport && t.stopPropagation();
            },
            f = (n) => {
              const { activeColor: a } = l.props,
                i = n.value === e.modelValue;
              return t.createVNode(
                bn,
                {
                  role: 'menuitem',
                  key: n.value,
                  icon: n.icon,
                  title: n.text,
                  class: $i('option', { active: i }),
                  style: { color: i ? a : '' },
                  tabindex: i ? 0 : -1,
                  clickable: !0,
                  onClick: () => {
                    (r.showPopup = !1),
                      n.value !== e.modelValue &&
                        (o('update:modelValue', n.value), o('change', n.value));
                  },
                },
                {
                  value: () => {
                    if (i)
                      return t.createVNode(
                        ht,
                        { class: $i('icon'), color: a, name: 'success' },
                        null,
                      );
                  },
                },
              );
            },
            v = () => {
              const { offset: o } = l,
                {
                  zIndex: s,
                  overlay: v,
                  duration: h,
                  direction: g,
                  closeOnClickOverlay: b,
                } = l.props,
                y = pe(s);
              return (
                'down' === g ? (y.top = `${o.value}px`) : (y.bottom = `${o.value}px`),
                t.withDirectives(
                  t.createVNode('div', t.mergeProps({ style: y, class: $i([g]), onClick: m }, a), [
                    t.createVNode(
                      Xt,
                      {
                        show: r.showPopup,
                        'onUpdate:show': (e) => (r.showPopup = e),
                        role: 'menu',
                        class: $i('content'),
                        overlay: v,
                        position: 'down' === g ? 'top' : 'bottom',
                        duration: r.transition ? h : 0,
                        lazyRender: e.lazyRender,
                        overlayStyle: { position: 'absolute' },
                        'aria-labelledby': `${l.id}-${i.value}`,
                        closeOnClickOverlay: b,
                        onOpen: c,
                        onClose: d,
                        onOpened: u,
                        onClosed: p,
                      },
                      {
                        default: () => {
                          var t;
                          return [e.options.map(f), null == (t = n.default) ? void 0 : t.call(n)];
                        },
                      },
                    ),
                  ]),
                  [[t.vShow, r.showWrapper]],
                )
              );
            };
          return (
            Qe({
              state: r,
              toggle: (e = !r.showPopup, t = {}) => {
                e !== r.showPopup &&
                  ((r.showPopup = e), (r.transition = !t.immediate), e && (r.showWrapper = !0));
              },
              renderTitle: () => {
                if (n.title) return n.title();
                if (e.title) return e.title;
                const t = e.options.find((t) => t.value === e.modelValue);
                return t ? t.text : '';
              },
            }),
            () =>
              e.teleport
                ? t.createVNode(t.Teleport, { to: e.teleport }, { default: () => [v()] })
                : v()
          );
        },
      }),
    ),
    Fi = We(zi),
    [Ri, Hi] = Ie('grid'),
    ji = {
      square: Boolean,
      center: b,
      border: b,
      gutter: g,
      reverse: Boolean,
      iconSize: g,
      direction: String,
      clickable: Boolean,
      columnNum: V(4),
    },
    Wi = Symbol(Ri);
  const Ui = We(
      t.defineComponent({
        name: Ri,
        props: ji,
        setup(e, { slots: o }) {
          const { linkChildren: n } = A(Wi);
          return (
            n({ props: e }),
            () => {
              var n;
              return t.createVNode(
                'div',
                {
                  style: { paddingLeft: de(e.gutter) },
                  class: [Hi(), { [ze]: e.border && !e.gutter }],
                },
                [null == (n = o.default) ? void 0 : n.call(o)],
              );
            }
          );
        },
      }),
    ),
    [qi, Yi] = Ie('grid-item'),
    Gi = d({}, et, {
      dot: Boolean,
      text: String,
      icon: String,
      badge: g,
      iconColor: String,
      iconPrefix: String,
      badgeProps: Object,
    });
  const Xi = We(
      t.defineComponent({
        name: qi,
        props: Gi,
        setup(e, { slots: o }) {
          const { parent: n, index: a } = D(Wi),
            r = ot();
          if (!n) return;
          const l = t.computed(() => {
              const { square: e, gutter: t, columnNum: o } = n.props,
                r = 100 / +o + '%',
                l = { flexBasis: r };
              if (e) l.paddingTop = r;
              else if (t) {
                const e = de(t);
                (l.paddingRight = e), a.value >= o && (l.marginTop = e);
              }
              return l;
            }),
            i = t.computed(() => {
              const { square: e, gutter: t } = n.props;
              if (e && t) {
                const e = de(t);
                return { right: e, bottom: e, height: 'auto' };
              }
            });
          return () => {
            const {
                center: a,
                border: s,
                square: c,
                gutter: d,
                reverse: u,
                direction: p,
                clickable: m,
              } = n.props,
              f = [
                Yi('content', [
                  p,
                  { center: a, square: c, reverse: u, clickable: m, surround: s && d },
                ]),
                { [Ae]: s },
              ];
            return t.createVNode('div', { class: [Yi({ square: c })], style: l.value }, [
              t.createVNode(
                'div',
                {
                  role: m ? 'button' : void 0,
                  class: f,
                  style: i.value,
                  tabindex: m ? 0 : void 0,
                  onClick: r,
                },
                [
                  o.default
                    ? o.default()
                    : [
                        o.icon
                          ? t.createVNode(
                              lt,
                              t.mergeProps({ dot: e.dot, content: e.badge }, e.badgeProps),
                              { default: o.icon },
                            )
                          : e.icon
                          ? t.createVNode(
                              ht,
                              {
                                dot: e.dot,
                                name: e.icon,
                                size: n.props.iconSize,
                                badge: e.badge,
                                class: Yi('icon'),
                                color: e.iconColor,
                                badgeProps: e.badgeProps,
                                classPrefix: e.iconPrefix,
                              },
                              null,
                            )
                          : void 0,
                        o.text
                          ? o.text()
                          : e.text
                          ? t.createVNode('span', { class: Yi('text') }, [e.text])
                          : void 0,
                      ],
                ],
              ),
            ]);
          };
        },
      }),
    ),
    Zi = (e) => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
    Ki = Ie('image-preview')[1];
  var _i = t.defineComponent({
    props: {
      src: String,
      show: Boolean,
      active: Number,
      minZoom: y(g),
      maxZoom: y(g),
      rootWidth: y(Number),
      rootHeight: y(Number),
    },
    emits: ['scale', 'close', 'longPress'],
    setup(e, { emit: o, slots: n }) {
      const a = t.reactive({
          scale: 1,
          moveX: 0,
          moveY: 0,
          moving: !1,
          zooming: !1,
          imageRatio: 0,
          displayWidth: 0,
          displayHeight: 0,
        }),
        r = Lt(),
        l = t.ref(),
        i = t.computed(() => {
          const { rootWidth: t, rootHeight: o } = e,
            n = o / t;
          return a.imageRatio > n;
        }),
        s = t.computed(() => {
          const { scale: e, moveX: t, moveY: o, moving: n, zooming: r } = a,
            l = { transitionDuration: r || n ? '0s' : '.3s' };
          if (1 !== e) {
            const n = t / e,
              a = o / e;
            l.transform = `scale(${e}, ${e}) translate(${n}px, ${a}px)`;
          }
          return l;
        }),
        c = t.computed(() => {
          if (a.imageRatio) {
            const { rootWidth: t, rootHeight: o } = e,
              n = i.value ? o / a.imageRatio : t;
            return Math.max(0, (a.scale * n - t) / 2);
          }
          return 0;
        }),
        d = t.computed(() => {
          if (a.imageRatio) {
            const { rootWidth: t, rootHeight: o } = e,
              n = i.value ? o : t * a.imageRatio;
            return Math.max(0, (a.scale * n - o) / 2);
          }
          return 0;
        }),
        u = (t) => {
          (t = ye(t, +e.minZoom, +e.maxZoom + 1)) !== a.scale &&
            ((a.scale = t), o('scale', { scale: t, index: e.active }));
        },
        p = () => {
          u(1), (a.moveX = 0), (a.moveY = 0);
        };
      let m, f, v, h, g, b, y;
      const w = (e) => {
          const { touches: t } = e,
            { offsetX: o } = r;
          r.start(e),
            (m = t.length),
            (f = a.moveX),
            (v = a.moveY),
            (y = Date.now()),
            (a.moving = 1 === m && 1 !== a.scale),
            (a.zooming = 2 === m && !o.value),
            a.zooming && ((h = a.scale), (g = Zi(e.touches)));
        },
        x = () => {
          if (m > 1) return;
          const { offsetX: e, offsetY: t } = r,
            n = Date.now() - y;
          e.value < 5 &&
            t.value < 5 &&
            (n < 250
              ? b
                ? (clearTimeout(b),
                  (b = null),
                  (() => {
                    const e = a.scale > 1 ? 1 : 2;
                    u(e), (a.moveX = 0), (a.moveY = 0);
                  })())
                : (b = setTimeout(() => {
                    o('close'), (b = null);
                  }, 250))
              : n > 500 && o('longPress'));
        },
        V = (t) => {
          let o = !1;
          (a.moving || a.zooming) &&
            ((o = !0),
            a.moving && f === a.moveX && v === a.moveY && (o = !1),
            t.touches.length ||
              (a.zooming &&
                ((a.moveX = ye(a.moveX, -c.value, c.value)),
                (a.moveY = ye(a.moveY, -d.value, d.value)),
                (a.zooming = !1)),
              (a.moving = !1),
              (f = 0),
              (v = 0),
              (h = 1),
              a.scale < 1 && p(),
              a.scale > e.maxZoom && (a.scale = +e.maxZoom))),
            le(t, o),
            x(),
            r.reset();
        },
        N = (e) => {
          const { naturalWidth: t, naturalHeight: o } = e.target;
          a.imageRatio = o / t;
        };
      return (
        t.watch(() => e.active, p),
        t.watch(
          () => e.show,
          (e) => {
            e || p();
          },
        ),
        j(
          'touchmove',
          (e) => {
            const { touches: t } = e;
            if ((r.move(e), (a.moving || a.zooming) && le(e, !0), a.moving)) {
              const { deltaX: e, deltaY: t } = r,
                o = e.value + f,
                n = t.value + v;
              (a.moveX = ye(o, -c.value, c.value)), (a.moveY = ye(n, -d.value, d.value));
            }
            if (a.zooming && 2 === t.length) {
              const e = Zi(t);
              u((h * e) / g);
            }
          },
          {
            target: t.computed(() => {
              var e;
              return null == (e = l.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const o = { loading: () => t.createVNode(Vt, { type: 'spinner' }, null) };
          return t.createVNode(
            Wo,
            {
              ref: l,
              class: Ki('swipe-item'),
              onTouchstartPassive: w,
              onTouchend: V,
              onTouchcancel: V,
            },
            {
              default: () => [
                n.image
                  ? t.createVNode('div', { class: Ki('image-wrap') }, [n.image({ src: e.src })])
                  : t.createVNode(
                      Br,
                      {
                        src: e.src,
                        fit: 'contain',
                        class: Ki('image', { vertical: i.value }),
                        style: s.value,
                        onLoad: N,
                      },
                      o,
                    ),
              ],
            },
          );
        }
      );
    },
  });
  const [Ji, Qi] = Ie('image-preview'),
    es = ['show', 'transition', 'overlayStyle', 'closeOnPopstate', 'teleport'],
    ts = {
      show: Boolean,
      loop: b,
      images: w(),
      minZoom: V(1 / 3),
      maxZoom: V(3),
      overlay: b,
      closeable: Boolean,
      showIndex: b,
      className: h,
      closeIcon: N('clear'),
      transition: String,
      beforeClose: Function,
      overlayClass: h,
      overlayStyle: Object,
      swipeDuration: V(300),
      startPosition: V(0),
      showIndicators: Boolean,
      closeOnPopstate: b,
      closeIconPosition: N('top-right'),
      teleport: [String, Object],
    };
  var os = t.defineComponent({
    name: Ji,
    props: ts,
    emits: ['scale', 'close', 'closed', 'change', 'longPress', 'update:show'],
    setup(e, { emit: o, slots: n }) {
      const a = t.ref(),
        r = t.reactive({ active: 0, rootWidth: 0, rootHeight: 0 }),
        l = () => {
          if (a.value) {
            const e = P(a.value.$el);
            (r.rootWidth = e.width), (r.rootHeight = e.height), a.value.resize();
          }
        },
        i = (e) => o('scale', e),
        s = (e) => o('update:show', e),
        c = () => {
          je(e.beforeClose, { args: [r.active], done: () => s(!1) });
        },
        d = (e) => {
          e !== r.active && ((r.active = e), o('change', e));
        },
        u = () => {
          if (e.showIndex)
            return t.createVNode('div', { class: Qi('index') }, [
              n.index ? n.index({ index: r.active }) : `${r.active + 1} / ${e.images.length}`,
            ]);
        },
        p = () => {
          if (n.cover) return t.createVNode('div', { class: Qi('cover') }, [n.cover()]);
        },
        f = () => {
          if (e.closeable)
            return t.createVNode(
              ht,
              {
                role: 'button',
                name: e.closeIcon,
                class: [Qi('close-icon', e.closeIconPosition), Re],
                onClick: c,
              },
              null,
            );
        },
        v = () => o('closed'),
        h = (e, t) => {
          var o;
          return null == (o = a.value) ? void 0 : o.swipeTo(e, t);
        };
      return (
        Qe({ swipeTo: h }),
        t.onMounted(l),
        t.watch([se, ce], l),
        t.watch(
          () => e.startPosition,
          (e) => d(+e),
        ),
        t.watch(
          () => e.show,
          (n) => {
            const { images: a, startPosition: i } = e;
            n
              ? (d(+i),
                t.nextTick(() => {
                  l(), h(+i, { immediate: !0 });
                }))
              : o('close', { index: r.active, url: a[r.active] });
          },
        ),
        () =>
          t.createVNode(
            Xt,
            t.mergeProps(
              {
                class: [Qi(), e.className],
                overlayClass: [Qi('overlay'), e.overlayClass],
                onClosed: v,
                'onUpdate:show': s,
              },
              m(e, es),
            ),
            {
              default: () => [
                f(),
                t.createVNode(
                  Oo,
                  {
                    ref: a,
                    lazyRender: !0,
                    loop: e.loop,
                    class: Qi('swipe'),
                    duration: e.swipeDuration,
                    initialSwipe: e.startPosition,
                    showIndicators: e.showIndicators,
                    indicatorColor: 'white',
                    onChange: d,
                  },
                  {
                    default: () => [
                      e.images.map((a, l) =>
                        t.createVNode(
                          _i,
                          {
                            src: a,
                            show: e.show,
                            active: r.active,
                            maxZoom: e.maxZoom,
                            minZoom: e.minZoom,
                            rootWidth: r.rootWidth,
                            rootHeight: r.rootHeight,
                            onScale: i,
                            onClose: c,
                            onLongPress: () => o('longPress', { index: l }),
                          },
                          { image: n.image },
                        ),
                      ),
                    ],
                  },
                ),
                u(),
                p(),
              ],
            },
          )
      );
    },
  });
  let ns;
  const as = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    teleport: 'body',
    className: '',
    showIndex: !0,
    closeable: !1,
    closeIcon: 'clear',
    transition: void 0,
    beforeClose: void 0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeIconPosition: 'top-right',
  };
  const rs = (e, o = 0) => {
      if (u)
        return (
          ns ||
            ({ instance: ns } = Hn({
              setup() {
                const { state: e, toggle: o } = Rn(),
                  n = () => {
                    e.images = [];
                  };
                return () =>
                  t.createVNode(os, t.mergeProps(e, { onClosed: n, 'onUpdate:show': o }), null);
              },
            })),
          (e = Array.isArray(e) ? { images: e, startPosition: o } : e),
          ns.open(d({}, as, e)),
          ns
        );
    },
    ls = We(os);
  const [is, ss] = Ie('index-bar'),
    cs = {
      sticky: b,
      zIndex: g,
      teleport: [String, Object],
      highlightColor: String,
      stickyOffsetTop: x(0),
      indexList: {
        type: Array,
        default: function () {
          const e = 'A'.charCodeAt(0);
          return Array(26)
            .fill('')
            .map((t, o) => String.fromCharCode(e + o));
        },
      },
    },
    ds = Symbol(is);
  var us = t.defineComponent({
    name: is,
    props: cs,
    emits: ['select', 'change'],
    setup(e, { emit: n, slots: a }) {
      const r = t.ref(),
        l = t.ref(),
        i = t.ref(''),
        s = Lt(),
        c = Z(r),
        { children: d, linkChildren: u } = A(ds);
      let p;
      u({ props: e });
      const m = t.computed(() => {
          if (o(e.zIndex)) return { zIndex: +e.zIndex + 1 };
        }),
        f = t.computed(() => {
          if (e.highlightColor) return { color: e.highlightColor };
        }),
        v = (t, o) => {
          for (let n = d.length - 1; n >= 0; n--) {
            const a = n > 0 ? o[n - 1].height : 0;
            if (t + (e.sticky ? a + e.stickyOffsetTop : 0) >= o[n].top) return n;
          }
          return -1;
        },
        h = (e) => d.find((t) => String(t.index) === e),
        g = () => {
          if (ie(r)) return;
          const { sticky: t, indexList: o } = e,
            n = J(c.value),
            a = P(c),
            l = d.map((e) => e.getRect(c.value, a));
          let s = -1;
          if (p) {
            const e = h(p);
            if (e) {
              const t = e.getRect(c.value, a);
              s = v(t.top, l);
            }
          } else s = v(n, l);
          (i.value = o[s]),
            t &&
              d.forEach((t, o) => {
                const { state: r, $el: i } = t;
                if (o === s || o === s - 1) {
                  const e = i.getBoundingClientRect();
                  (r.left = e.left), (r.width = e.width);
                } else (r.left = null), (r.width = null);
                if (o === s)
                  (r.active = !0), (r.top = Math.max(e.stickyOffsetTop, l[o].top - n) + a.top);
                else if (o === s - 1 && '' === p) {
                  const e = l[s].top - n;
                  (r.active = e > 0), (r.top = e + a.top - l[o].height);
                } else r.active = !1;
              }),
            (p = '');
        },
        b = () => {
          t.nextTick(g);
        };
      j('scroll', g, { target: c, passive: !0 }),
        t.onMounted(b),
        t.watch(() => e.indexList, b),
        t.watch(i, (e) => {
          e && n('change', e);
        });
      const y = (t) => {
          p = String(t);
          const o = h(p);
          if (o) {
            const t = J(c.value),
              a = P(c),
              { offsetHeight: r } = document.documentElement;
            if ((o.$el.scrollIntoView(), t === r - a.height)) return void g();
            e.sticky && e.stickyOffsetTop && te(ee() - e.stickyOffsetTop), n('select', o.index);
          }
        },
        w = (e) => {
          const { index: t } = e.dataset;
          t && y(t);
        },
        x = (e) => {
          w(e.target);
        };
      let V;
      const N = () =>
        t.createVNode(
          'div',
          {
            ref: l,
            class: ss('sidebar'),
            style: m.value,
            onClick: x,
            onTouchstartPassive: s.start,
          },
          [
            e.indexList.map((e) => {
              const o = e === i.value;
              return t.createVNode(
                'span',
                { class: ss('index', { active: o }), style: o ? f.value : void 0, 'data-index': e },
                [e],
              );
            }),
          ],
        );
      return (
        Qe({ scrollTo: y }),
        j(
          'touchmove',
          (e) => {
            if ((s.move(e), s.isVertical())) {
              le(e);
              const { clientX: t, clientY: o } = e.touches[0],
                n = document.elementFromPoint(t, o);
              if (n) {
                const { index: e } = n.dataset;
                e && V !== e && ((V = e), w(n));
              }
            }
          },
          { target: l },
        ),
        () => {
          var o;
          return t.createVNode('div', { ref: r, class: ss() }, [
            e.teleport
              ? t.createVNode(t.Teleport, { to: e.teleport }, { default: () => [N()] })
              : N(),
            null == (o = a.default) ? void 0 : o.call(a),
          ]);
        }
      );
    },
  });
  const [ps, ms] = Ie('index-anchor'),
    fs = { index: g };
  const vs = We(
      t.defineComponent({
        name: ps,
        props: fs,
        setup(e, { slots: o }) {
          const n = t.reactive({
              top: 0,
              left: null,
              rect: { top: 0, height: 0 },
              width: null,
              active: !1,
            }),
            a = t.ref(),
            { parent: r } = D(ds);
          if (!r) return;
          const l = () => n.active && r.props.sticky,
            i = t.computed(() => {
              const { zIndex: e, highlightColor: t } = r.props;
              if (l())
                return d(pe(e), {
                  left: n.left ? `${n.left}px` : void 0,
                  width: n.width ? `${n.width}px` : void 0,
                  transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
                  color: t,
                });
            });
          return (
            Qe({
              state: n,
              getRect: (e, t) => {
                const o = P(a);
                return (
                  (n.rect.height = o.height),
                  e === window || e === document.body
                    ? (n.rect.top = o.top + ee())
                    : (n.rect.top = o.top + J(e) - t.top),
                  n.rect
                );
              },
            }),
            () => {
              const r = l();
              return t.createVNode(
                'div',
                { ref: a, style: { height: r ? `${n.rect.height}px` : void 0 } },
                [
                  t.createVNode(
                    'div',
                    { style: i.value, class: [ms({ sticky: r }), { [$e]: r }] },
                    [o.default ? o.default() : e.index],
                  ),
                ],
              );
            }
          );
        },
      }),
    ),
    hs = We(us),
    [gs, bs, ys] = Ie('list'),
    ws = {
      error: Boolean,
      offset: V(300),
      loading: Boolean,
      disabled: Boolean,
      finished: Boolean,
      errorText: String,
      direction: N('down'),
      loadingText: String,
      finishedText: String,
      immediateCheck: b,
    };
  const xs = We(
      t.defineComponent({
        name: gs,
        props: ws,
        emits: ['load', 'update:error', 'update:loading'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(e.loading),
            r = t.ref(),
            l = t.ref(),
            i = t.inject(Ro, null),
            s = Z(r),
            c = () => {
              t.nextTick(() => {
                if (
                  a.value ||
                  e.finished ||
                  e.disabled ||
                  e.error ||
                  !1 === (null == i ? void 0 : i.value)
                )
                  return;
                const { offset: t, direction: n } = e,
                  c = P(s);
                if (!c.height || ie(r)) return;
                let d = !1;
                const u = P(l);
                (d = 'up' === n ? c.top - u.top <= t : u.bottom - c.bottom <= t),
                  d && ((a.value = !0), o('update:loading', !0), o('load'));
              });
            },
            d = () => {
              if (e.finished) {
                const o = n.finished ? n.finished() : e.finishedText;
                if (o) return t.createVNode('div', { class: bs('finished-text') }, [o]);
              }
            },
            u = () => {
              o('update:error', !1), c();
            },
            p = () => {
              if (e.error) {
                const o = n.error ? n.error() : e.errorText;
                if (o)
                  return t.createVNode(
                    'div',
                    { role: 'button', class: bs('error-text'), tabindex: 0, onClick: u },
                    [o],
                  );
              }
            },
            m = () => {
              if (a.value && !e.finished && !e.disabled)
                return t.createVNode('div', { class: bs('loading') }, [
                  n.loading
                    ? n.loading()
                    : t.createVNode(
                        Vt,
                        { class: bs('loading-icon') },
                        { default: () => [e.loadingText || ys('loading')] },
                      ),
                ]);
            };
          return (
            t.watch(() => [e.loading, e.finished, e.error], c),
            i &&
              t.watch(i, (e) => {
                e && c();
              }),
            t.onUpdated(() => {
              a.value = e.loading;
            }),
            t.onMounted(() => {
              e.immediateCheck && c();
            }),
            Qe({ check: c }),
            j('scroll', c, { target: s, passive: !0 }),
            () => {
              var o;
              const i = null == (o = n.default) ? void 0 : o.call(n),
                s = t.createVNode('div', { ref: l, class: bs('placeholder') }, null);
              return t.createVNode(
                'div',
                { ref: r, role: 'feed', class: bs(), 'aria-busy': a.value },
                ['down' === e.direction ? i : s, m(), d(), p(), 'up' === e.direction ? i : s],
              );
            }
          );
        },
      }),
    ),
    [Vs, Ns] = Ie('nav-bar'),
    Cs = {
      title: String,
      fixed: Boolean,
      zIndex: g,
      border: b,
      leftText: String,
      rightText: String,
      leftArrow: Boolean,
      placeholder: Boolean,
      safeAreaInsetTop: Boolean,
      clickable: b,
    };
  const ks = We(
      t.defineComponent({
        name: Vs,
        props: Cs,
        emits: ['clickLeft', 'clickRight'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(),
            r = Ge(a, Ns),
            l = (e) => o('clickLeft', e),
            i = (e) => o('clickRight', e),
            s = () => {
              const { title: o, fixed: r, border: s, zIndex: c } = e,
                d = pe(c),
                u = e.leftArrow || e.leftText || n.left,
                p = e.rightText || n.right;
              return t.createVNode(
                'div',
                {
                  ref: a,
                  style: d,
                  class: [Ns({ fixed: r }), { [$e]: s, 'van-safe-area-top': e.safeAreaInsetTop }],
                },
                [
                  t.createVNode('div', { class: Ns('content') }, [
                    u &&
                      t.createVNode(
                        'div',
                        { class: [Ns('left'), e.clickable ? Re : ''], onClick: l },
                        [
                          n.left
                            ? n.left()
                            : [
                                e.leftArrow &&
                                  t.createVNode(
                                    ht,
                                    { class: Ns('arrow'), name: 'arrow-left' },
                                    null,
                                  ),
                                e.leftText &&
                                  t.createVNode('span', { class: Ns('text') }, [e.leftText]),
                              ],
                        ],
                      ),
                    t.createVNode('div', { class: [Ns('title'), 'van-ellipsis'] }, [
                      n.title ? n.title() : o,
                    ]),
                    p &&
                      t.createVNode(
                        'div',
                        { class: [Ns('right'), e.clickable ? Re : ''], onClick: i },
                        [
                          n.right
                            ? n.right()
                            : t.createVNode('span', { class: Ns('text') }, [e.rightText]),
                        ],
                      ),
                  ]),
                ],
              );
            };
          return () => (e.fixed && e.placeholder ? r(s) : s());
        },
      }),
    ),
    [Ss, Ts] = Ie('notice-bar'),
    Bs = {
      text: String,
      mode: String,
      color: String,
      delay: V(1),
      speed: V(60),
      leftIcon: String,
      wrapable: Boolean,
      background: String,
      scrollable: { type: Boolean, default: null },
    };
  const Ps = We(
      t.defineComponent({
        name: Ss,
        props: Bs,
        emits: ['close', 'replay'],
        setup(e, { emit: n, slots: a }) {
          let r,
            l = 0,
            i = 0;
          const s = t.ref(),
            c = t.ref(),
            d = t.reactive({ show: !0, offset: 0, duration: 0 }),
            u = (t) => {
              'closeable' === e.mode && ((d.show = !1), n('close', t));
            },
            p = () => {
              if (a['right-icon']) return a['right-icon']();
              const o = 'closeable' === e.mode ? 'cross' : 'link' === e.mode ? 'arrow' : void 0;
              return o
                ? t.createVNode(ht, { name: o, class: Ts('right-icon'), onClick: u }, null)
                : void 0;
            },
            m = () => {
              (d.offset = l),
                (d.duration = 0),
                k(() => {
                  T(() => {
                    (d.offset = -i), (d.duration = (i + l) / +e.speed), n('replay');
                  });
                });
            },
            f = () => {
              const o = !1 === e.scrollable && !e.wrapable,
                n = {
                  transform: d.offset ? `translateX(${d.offset}px)` : '',
                  transitionDuration: `${d.duration}s`,
                };
              return t.createVNode('div', { ref: s, role: 'marquee', class: Ts('wrap') }, [
                t.createVNode(
                  'div',
                  {
                    ref: c,
                    style: n,
                    class: [Ts('content'), { 'van-ellipsis': o }],
                    onTransitionend: m,
                  },
                  [a.default ? a.default() : e.text],
                ),
              ]);
            },
            v = () => {
              const { delay: t, speed: n, scrollable: a } = e,
                u = o(t) ? 1e3 * +t : 0;
              (l = 0),
                (i = 0),
                (d.offset = 0),
                (d.duration = 0),
                clearTimeout(r),
                (r = setTimeout(() => {
                  if (!s.value || !c.value || !1 === a) return;
                  const e = P(s).width,
                    t = P(c).width;
                  (a || t > e) &&
                    T(() => {
                      (l = e), (i = t), (d.offset = -i), (d.duration = i / +n);
                    });
                }, u));
            };
          return (
            qe(v),
            H(v),
            j('pageshow', v),
            Qe({ reset: v }),
            t.watch(() => [e.text, e.scrollable], v),
            () => {
              const { color: o, wrapable: n, background: r } = e;
              return t.withDirectives(
                t.createVNode(
                  'div',
                  { role: 'alert', class: Ts({ wrapable: n }), style: { color: o, background: r } },
                  [
                    a['left-icon']
                      ? a['left-icon']()
                      : e.leftIcon
                      ? t.createVNode(ht, { class: Ts('left-icon'), name: e.leftIcon }, null)
                      : void 0,
                    f(),
                    p(),
                  ],
                ),
                [[t.vShow, d.show]],
              );
            }
          );
        },
      }),
    ),
    [Ds, Os] = Ie('notify'),
    Is = d({}, Et, {
      type: N('danger'),
      color: String,
      message: g,
      position: N('top'),
      className: h,
      background: String,
      lockScroll: Boolean,
    });
  var As = t.defineComponent({
    name: Ds,
    props: Is,
    emits: ['update:show'],
    setup(e, { emit: o, slots: n }) {
      const a = (e) => o('update:show', e);
      return () =>
        t.createVNode(
          Xt,
          {
            show: e.show,
            class: [Os([e.type]), e.className],
            style: { color: e.color, background: e.background },
            overlay: !1,
            zIndex: e.zIndex,
            position: e.position,
            duration: 0.2,
            lockScroll: e.lockScroll,
            'onUpdate:show': a,
          },
          { default: () => [n.default ? n.default() : e.message] },
        );
    },
  });
  let zs, Es;
  let $s = {
    type: 'danger',
    color: void 0,
    message: '',
    onClose: void 0,
    onClick: void 0,
    onOpened: void 0,
    duration: 3e3,
    position: void 0,
    className: '',
    lockScroll: !1,
    background: void 0,
  };
  const Ls = () => {
    Es && Es.toggle(!1);
  };
  const Ms = We(As),
    [Fs, Rs] = Ie('key'),
    Hs = t.createVNode('svg', { class: Rs('collapse-icon'), viewBox: '0 0 30 24' }, [
      t.createVNode(
        'path',
        {
          d: 'M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z',
          fill: 'currentColor',
        },
        null,
      ),
    ]),
    js = t.createVNode('svg', { class: Rs('delete-icon'), viewBox: '0 0 32 22' }, [
      t.createVNode(
        'path',
        {
          d: 'M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z',
          fill: 'currentColor',
        },
        null,
      ),
    ]);
  var Ws = t.defineComponent({
    name: Fs,
    props: {
      type: String,
      text: g,
      color: String,
      wider: Boolean,
      large: Boolean,
      loading: Boolean,
    },
    emits: ['press'],
    setup(e, { emit: o, slots: n }) {
      const a = t.ref(!1),
        r = Lt(),
        l = (e) => {
          r.start(e), (a.value = !0);
        },
        i = (e) => {
          r.move(e), r.direction.value && (a.value = !1);
        },
        s = (t) => {
          a.value && (n.default || le(t), (a.value = !1), o('press', e.text, e.type));
        },
        c = () => {
          if (e.loading) return t.createVNode(Vt, { class: Rs('loading-icon') }, null);
          const o = n.default ? n.default() : e.text;
          switch (e.type) {
            case 'delete':
              return o || js;
            case 'extra':
              return o || Hs;
            default:
              return o;
          }
        };
      return () =>
        t.createVNode(
          'div',
          {
            class: Rs('wrapper', { wider: e.wider }),
            onTouchstartPassive: l,
            onTouchmovePassive: i,
            onTouchend: s,
            onTouchcancel: s,
          },
          [
            t.createVNode(
              'div',
              {
                role: 'button',
                tabindex: 0,
                class: Rs([
                  e.color,
                  { large: e.large, active: a.value, delete: 'delete' === e.type },
                ]),
              },
              [c()],
            ),
          ],
        );
    },
  });
  const [Us, qs] = Ie('number-keyboard'),
    Ys = {
      show: Boolean,
      title: String,
      theme: N('default'),
      zIndex: g,
      teleport: [String, Object],
      maxlength: V(1 / 0),
      modelValue: N(''),
      transition: b,
      blurOnClose: b,
      showDeleteKey: b,
      randomKeyOrder: Boolean,
      closeButtonText: String,
      deleteButtonText: String,
      closeButtonLoading: Boolean,
      hideOnClickOutside: b,
      safeAreaInsetBottom: b,
      extraKey: { type: [String, Array], default: '' },
    };
  const Gs = We(
      t.defineComponent({
        name: Us,
        inheritAttrs: !1,
        props: Ys,
        emits: ['show', 'hide', 'blur', 'input', 'close', 'delete', 'update:modelValue'],
        setup(e, { emit: o, slots: n, attrs: a }) {
          const r = t.ref(),
            l = () => {
              const t = Array(9)
                .fill('')
                .map((e, t) => ({ text: t + 1 }));
              return (
                e.randomKeyOrder &&
                  (function (e) {
                    for (let t = e.length - 1; t > 0; t--) {
                      const o = Math.floor(Math.random() * (t + 1)),
                        n = e[t];
                      (e[t] = e[o]), (e[o] = n);
                    }
                  })(t),
                t
              );
            },
            i = t.computed(() =>
              'custom' === e.theme
                ? (() => {
                    const t = l(),
                      { extraKey: o } = e,
                      n = Array.isArray(o) ? o : [o];
                    return (
                      1 === n.length
                        ? t.push({ text: 0, wider: !0 }, { text: n[0], type: 'extra' })
                        : 2 === n.length &&
                          t.push(
                            { text: n[0], type: 'extra' },
                            { text: 0 },
                            { text: n[1], type: 'extra' },
                          ),
                      t
                    );
                  })()
                : [
                    ...l(),
                    { text: e.extraKey, type: 'extra' },
                    { text: 0 },
                    {
                      text: e.showDeleteKey ? e.deleteButtonText : '',
                      type: e.showDeleteKey ? 'delete' : '',
                    },
                  ],
            ),
            s = () => {
              e.show && o('blur');
            },
            c = () => {
              o('close'), e.blurOnClose && s();
            },
            d = () => o(e.show ? 'show' : 'hide'),
            u = (t, n) => {
              if ('' === t) return void ('extra' === n && s());
              const a = e.modelValue;
              'delete' === n
                ? (o('delete'), o('update:modelValue', a.slice(0, a.length - 1)))
                : 'close' === n
                ? c()
                : a.length < e.maxlength && (o('input', t), o('update:modelValue', a + t));
            },
            p = () => {
              if ('custom' === e.theme)
                return t.createVNode('div', { class: qs('sidebar') }, [
                  e.showDeleteKey &&
                    t.createVNode(
                      Ws,
                      { large: !0, text: e.deleteButtonText, type: 'delete', onPress: u },
                      { delete: n.delete },
                    ),
                  t.createVNode(
                    Ws,
                    {
                      large: !0,
                      text: e.closeButtonText,
                      type: 'close',
                      color: 'blue',
                      loading: e.closeButtonLoading,
                      onPress: u,
                    },
                    null,
                  ),
                ]);
            };
          return (
            t.watch(
              () => e.show,
              (t) => {
                e.transition || o(t ? 'show' : 'hide');
              },
            ),
            e.hideOnClickOutside && W(r, s, { eventName: 'touchstart' }),
            () => {
              const o = (() => {
                  const { title: o, theme: a, closeButtonText: r } = e,
                    l = n['title-left'],
                    i = r && 'default' === a;
                  if (o || i || l)
                    return t.createVNode('div', { class: qs('header') }, [
                      l && t.createVNode('span', { class: qs('title-left') }, [l()]),
                      o && t.createVNode('h2', { class: qs('title') }, [o]),
                      i &&
                        t.createVNode(
                          'button',
                          { type: 'button', class: [qs('close'), Re], onClick: c },
                          [r],
                        ),
                    ]);
                })(),
                l = t.createVNode(
                  t.Transition,
                  { name: e.transition ? 'van-slide-up' : '' },
                  {
                    default: () => [
                      t.withDirectives(
                        t.createVNode(
                          'div',
                          t.mergeProps(
                            {
                              ref: r,
                              style: pe(e.zIndex),
                              class: qs({ unfit: !e.safeAreaInsetBottom, 'with-title': !!o }),
                              onAnimationend: d,
                              onTouchstartPassive: re,
                            },
                            a,
                          ),
                          [
                            o,
                            t.createVNode('div', { class: qs('body') }, [
                              t.createVNode('div', { class: qs('keys') }, [
                                i.value.map((e) => {
                                  const o = {};
                                  return (
                                    'delete' === e.type && (o.default = n.delete),
                                    'extra' === e.type && (o.default = n['extra-key']),
                                    t.createVNode(
                                      Ws,
                                      {
                                        key: e.text,
                                        text: e.text,
                                        type: e.type,
                                        wider: e.wider,
                                        color: e.color,
                                        onPress: u,
                                      },
                                      o,
                                    )
                                  );
                                }),
                              ]),
                              p(),
                            ]),
                          ],
                        ),
                        [[t.vShow, e.show]],
                      ),
                    ],
                  },
                );
              return e.teleport
                ? t.createVNode(t.Teleport, { to: e.teleport }, { default: () => [l] })
                : l;
            }
          );
        },
      }),
    ),
    [Xs, Zs, Ks] = Ie('pagination'),
    _s = (e, t, o) => ({ number: e, text: t, active: o }),
    Js = {
      mode: N('multi'),
      prevText: String,
      nextText: String,
      pageCount: V(0),
      modelValue: x(0),
      totalItems: V(0),
      showPageSize: V(5),
      itemsPerPage: V(10),
      forceEllipses: Boolean,
    };
  const Qs = We(
      t.defineComponent({
        name: Xs,
        props: Js,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const a = t.computed(() => {
              const { pageCount: t, totalItems: o, itemsPerPage: n } = e,
                a = +t || Math.ceil(+o / +n);
              return Math.max(1, a);
            }),
            r = t.computed(() => {
              const t = [],
                o = a.value,
                n = +e.showPageSize,
                { modelValue: r, forceEllipses: l } = e;
              let i = 1,
                s = o;
              const c = n < o;
              c &&
                ((i = Math.max(r - Math.floor(n / 2), 1)),
                (s = i + n - 1),
                s > o && ((s = o), (i = s - n + 1)));
              for (let e = i; e <= s; e++) {
                const o = _s(e, e, e === r);
                t.push(o);
              }
              if (c && n > 0 && l) {
                if (i > 1) {
                  const e = _s(i - 1, '...');
                  t.unshift(e);
                }
                if (s < o) {
                  const e = _s(s + 1, '...');
                  t.push(e);
                }
              }
              return t;
            }),
            l = (t, n) => {
              (t = ye(t, 1, a.value)),
                e.modelValue !== t && (o('update:modelValue', t), n && o('change', t));
            };
          t.watchEffect(() => l(e.modelValue));
          const i = () => {
              const { mode: o, modelValue: a } = e,
                r = n['prev-text'],
                i = 1 === a;
              return t.createVNode(
                'li',
                { class: [Zs('item', { disabled: i, border: 'simple' === o, prev: !0 }), Le] },
                [
                  t.createVNode(
                    'button',
                    { type: 'button', disabled: i, onClick: () => l(a - 1, !0) },
                    [r ? r() : e.prevText || Ks('prev')],
                  ),
                ],
              );
            },
            s = () => {
              const { mode: o, modelValue: r } = e,
                i = n['next-text'],
                s = r === a.value;
              return t.createVNode(
                'li',
                { class: [Zs('item', { disabled: s, border: 'simple' === o, next: !0 }), Le] },
                [
                  t.createVNode(
                    'button',
                    { type: 'button', disabled: s, onClick: () => l(r + 1, !0) },
                    [i ? i() : e.nextText || Ks('next')],
                  ),
                ],
              );
            };
          return () =>
            t.createVNode('nav', { role: 'navigation', class: Zs() }, [
              t.createVNode('ul', { class: Zs('items') }, [
                i(),
                'simple' === e.mode
                  ? t.createVNode('li', { class: Zs('page-desc') }, [
                      n.pageDesc ? n.pageDesc() : `${e.modelValue}/${a.value}`,
                    ])
                  : r.value.map((e) =>
                      t.createVNode(
                        'li',
                        { class: [Zs('item', { active: e.active, page: !0 }), Le] },
                        [
                          t.createVNode(
                            'button',
                            {
                              type: 'button',
                              'aria-current': e.active || void 0,
                              onClick: () => l(e.number, !0),
                            },
                            [n.page ? n.page(e) : e.text],
                          ),
                        ],
                      ),
                    ),
                s(),
              ]),
            ]);
        },
      }),
    ),
    [ec, tc] = Ie('password-input'),
    oc = {
      info: String,
      mask: b,
      value: N(''),
      gutter: g,
      length: V(6),
      focused: Boolean,
      errorInfo: String,
    };
  const nc = We(
      t.defineComponent({
        name: ec,
        props: oc,
        emits: ['focus'],
        setup(e, { emit: o }) {
          const n = (e) => {
              e.stopPropagation(), o('focus', e);
            },
            a = () => {
              const o = [],
                { mask: n, value: a, length: r, gutter: l, focused: i } = e;
              for (let e = 0; e < r; e++) {
                const r = a[e],
                  s = 0 !== e && !l,
                  c = i && e === a.length;
                let d;
                0 !== e && l && (d = { marginLeft: de(l) }),
                  o.push(
                    t.createVNode(
                      'li',
                      { class: [{ [Ee]: s }, tc('item', { focus: c })], style: d },
                      [
                        n
                          ? t.createVNode(
                              'i',
                              { style: { visibility: r ? 'visible' : 'hidden' } },
                              null,
                            )
                          : r,
                        c && t.createVNode('div', { class: tc('cursor') }, null),
                      ],
                    ),
                  );
              }
              return o;
            };
          return () => {
            const o = e.errorInfo || e.info;
            return t.createVNode('div', { class: tc() }, [
              t.createVNode(
                'ul',
                { class: [tc('security'), { [Le]: !e.gutter }], onTouchstartPassive: n },
                [a()],
              ),
              o && t.createVNode('div', { class: tc(e.errorInfo ? 'error-info' : 'info') }, [o]),
            ]);
          };
        },
      }),
    ),
    ac = We(Qo);
  function rc(e) {
    if (null == e) return window;
    if ('[object Window]' !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function lc(e) {
    return e instanceof rc(e).Element || e instanceof Element;
  }
  function ic(e) {
    return e instanceof rc(e).HTMLElement || e instanceof HTMLElement;
  }
  function sc(e) {
    return (
      'undefined' != typeof ShadowRoot && (e instanceof rc(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var cc = Math.round;
  function dc() {
    var e = navigator.userAgentData;
    return null != e && e.brands
      ? e.brands
          .map(function (e) {
            return e.brand + '/' + e.version;
          })
          .join(' ')
      : navigator.userAgent;
  }
  function uc(e, t, o) {
    void 0 === t && (t = !1), void 0 === o && (o = !1);
    var n = e.getBoundingClientRect(),
      a = 1,
      r = 1;
    t &&
      ic(e) &&
      ((a = (e.offsetWidth > 0 && cc(n.width) / e.offsetWidth) || 1),
      (r = (e.offsetHeight > 0 && cc(n.height) / e.offsetHeight) || 1));
    var l = (lc(e) ? rc(e) : window).visualViewport,
      i = !!/^((?!chrome|android).)*safari/i.test(dc()) && o,
      s = (n.left + (i && l ? l.offsetLeft : 0)) / a,
      c = (n.top + (i && l ? l.offsetTop : 0)) / r,
      d = n.width / a,
      u = n.height / r;
    return { width: d, height: u, top: c, right: s + d, bottom: c + u, left: s, x: s, y: c };
  }
  function pc(e) {
    var t = rc(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function mc(e) {
    return e ? (e.nodeName || '').toLowerCase() : null;
  }
  function fc(e) {
    return ((lc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function vc(e) {
    return rc(e).getComputedStyle(e);
  }
  function hc(e) {
    var t = vc(e),
      o = t.overflow,
      n = t.overflowX,
      a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(o + a + n);
  }
  function gc(e, t, o) {
    void 0 === o && (o = !1);
    var n,
      a,
      r = ic(t),
      l =
        ic(t) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            o = cc(t.width) / e.offsetWidth || 1,
            n = cc(t.height) / e.offsetHeight || 1;
          return 1 !== o || 1 !== n;
        })(t),
      i = fc(t),
      s = uc(e, l, o),
      c = { scrollLeft: 0, scrollTop: 0 },
      d = { x: 0, y: 0 };
    return (
      (r || (!r && !o)) &&
        (('body' !== mc(t) || hc(i)) &&
          (c =
            (n = t) !== rc(n) && ic(n)
              ? { scrollLeft: (a = n).scrollLeft, scrollTop: a.scrollTop }
              : pc(n)),
        ic(t)
          ? (((d = uc(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
          : i &&
            (d.x = (function (e) {
              return uc(fc(e)).left + pc(e).scrollLeft;
            })(i))),
      {
        x: s.left + c.scrollLeft - d.x,
        y: s.top + c.scrollTop - d.y,
        width: s.width,
        height: s.height,
      }
    );
  }
  function bc(e) {
    return 'html' === mc(e)
      ? e
      : e.assignedSlot || e.parentNode || (sc(e) ? e.host : null) || fc(e);
  }
  function yc(e) {
    return ['html', 'body', '#document'].indexOf(mc(e)) >= 0
      ? e.ownerDocument.body
      : ic(e) && hc(e)
      ? e
      : yc(bc(e));
  }
  function wc(e, t) {
    var o;
    void 0 === t && (t = []);
    var n = yc(e),
      a = n === (null == (o = e.ownerDocument) ? void 0 : o.body),
      r = rc(n),
      l = a ? [r].concat(r.visualViewport || [], hc(n) ? n : []) : n,
      i = t.concat(l);
    return a ? i : i.concat(wc(bc(l)));
  }
  function xc(e) {
    return ['table', 'td', 'th'].indexOf(mc(e)) >= 0;
  }
  function Vc(e) {
    return ic(e) && 'fixed' !== vc(e).position ? e.offsetParent : null;
  }
  function Nc(e) {
    for (var t = rc(e), o = Vc(e); o && xc(o) && 'static' === vc(o).position; ) o = Vc(o);
    return o && ('html' === mc(o) || ('body' === mc(o) && 'static' === vc(o).position))
      ? t
      : o ||
          (function (e) {
            var t = /firefox/i.test(dc());
            if (/Trident/i.test(dc()) && ic(e) && 'fixed' === vc(e).position) return null;
            var o = bc(e);
            for (sc(o) && (o = o.host); ic(o) && ['html', 'body'].indexOf(mc(o)) < 0; ) {
              var n = vc(o);
              if (
                'none' !== n.transform ||
                'none' !== n.perspective ||
                'paint' === n.contain ||
                -1 !== ['transform', 'perspective'].indexOf(n.willChange) ||
                (t && 'filter' === n.willChange) ||
                (t && n.filter && 'none' !== n.filter)
              )
                return o;
              o = o.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  var Cc = 'top',
    kc = 'bottom',
    Sc = 'right',
    Tc = 'left',
    Bc = 'auto',
    Pc = 'start',
    Dc = 'end',
    Oc = [].concat([Cc, kc, Sc, Tc], [Bc]).reduce(function (e, t) {
      return e.concat([t, t + '-' + Pc, t + '-' + Dc]);
    }, []),
    Ic = [
      'beforeRead',
      'read',
      'afterRead',
      'beforeMain',
      'main',
      'afterMain',
      'beforeWrite',
      'write',
      'afterWrite',
    ];
  function Ac(e) {
    var t = new Map(),
      o = new Set(),
      n = [];
    function a(e) {
      o.add(e.name),
        [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
          if (!o.has(e)) {
            var n = t.get(e);
            n && a(n);
          }
        }),
        n.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        o.has(e.name) || a(e);
      }),
      n
    );
  }
  function zc(e) {
    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      o[n - 1] = arguments[n];
    return [].concat(o).reduce(function (e, t) {
      return e.replace(/%s/, t);
    }, e);
  }
  var Ec = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    $c = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  function Lc(e) {
    return e.split('-')[0];
  }
  function Mc(e) {
    return e.split('-')[1];
  }
  var Fc =
      'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
    Rc = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function Hc() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return !t.some(function (e) {
      return !(e && 'function' == typeof e.getBoundingClientRect);
    });
  }
  function jc(e) {
    void 0 === e && (e = {});
    var t = e,
      o = t.defaultModifiers,
      n = void 0 === o ? [] : o,
      a = t.defaultOptions,
      r = void 0 === a ? Rc : a;
    return function (e, t, o) {
      void 0 === o && (o = r);
      var a,
        l,
        i = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Rc, r),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        s = [],
        c = !1,
        d = {
          state: i,
          setOptions: function (o) {
            var a = 'function' == typeof o ? o(i.options) : o;
            u(),
              (i.options = Object.assign({}, r, i.options, a)),
              (i.scrollParents = {
                reference: lc(e) ? wc(e) : e.contextElement ? wc(e.contextElement) : [],
                popper: wc(t),
              });
            var l = (function (e) {
              var t = Ac(e);
              return Ic.reduce(function (e, o) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === o;
                  }),
                );
              }, []);
            })(
              (function (e) {
                var t = e.reduce(function (e, t) {
                  var o = e[t.name];
                  return (
                    (e[t.name] = o
                      ? Object.assign({}, o, t, {
                          options: Object.assign({}, o.options, t.options),
                          data: Object.assign({}, o.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {});
                return Object.keys(t).map(function (e) {
                  return t[e];
                });
              })([].concat(n, i.options.modifiers)),
            );
            ((i.orderedModifiers = l.filter(function (e) {
              return e.enabled;
            })),
            (function (e) {
              e.forEach(function (t) {
                []
                  .concat(Object.keys(t), $c)
                  .filter(function (e, t, o) {
                    return o.indexOf(e) === t;
                  })
                  .forEach(function (o) {
                    switch (o) {
                      case 'name':
                        'string' != typeof t.name &&
                          console.error(
                            zc(
                              Ec,
                              String(t.name),
                              '"name"',
                              '"string"',
                              '"' + String(t.name) + '"',
                            ),
                          );
                        break;
                      case 'enabled':
                        'boolean' != typeof t.enabled &&
                          console.error(
                            zc(Ec, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'),
                          );
                        break;
                      case 'phase':
                        Ic.indexOf(t.phase) < 0 &&
                          console.error(
                            zc(
                              Ec,
                              t.name,
                              '"phase"',
                              'either ' + Ic.join(', '),
                              '"' + String(t.phase) + '"',
                            ),
                          );
                        break;
                      case 'fn':
                        'function' != typeof t.fn &&
                          console.error(
                            zc(Ec, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'),
                          );
                        break;
                      case 'effect':
                        null != t.effect &&
                          'function' != typeof t.effect &&
                          console.error(
                            zc(Ec, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'),
                          );
                        break;
                      case 'requires':
                        null == t.requires ||
                          Array.isArray(t.requires) ||
                          console.error(
                            zc(Ec, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'),
                          );
                        break;
                      case 'requiresIfExists':
                        Array.isArray(t.requiresIfExists) ||
                          console.error(
                            zc(
                              Ec,
                              t.name,
                              '"requiresIfExists"',
                              '"array"',
                              '"' + String(t.requiresIfExists) + '"',
                            ),
                          );
                        break;
                      case 'options':
                      case 'data':
                        break;
                      default:
                        console.error(
                          'PopperJS: an invalid property has been provided to the "' +
                            t.name +
                            '" modifier, valid properties are ' +
                            $c
                              .map(function (e) {
                                return '"' + e + '"';
                              })
                              .join(', ') +
                            '; but "' +
                            o +
                            '" was provided.',
                        );
                    }
                    t.requires &&
                      t.requires.forEach(function (o) {
                        null ==
                          e.find(function (e) {
                            return e.name === o;
                          }) &&
                          console.error(
                            zc(
                              'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
                              String(t.name),
                              o,
                              o,
                            ),
                          );
                      });
                  });
              });
            })(
              ((c = [].concat(l, i.options.modifiers)),
              (p = function (e) {
                return e.name;
              }),
              (m = new Set()),
              c.filter(function (e) {
                var t = p(e);
                if (!m.has(t)) return m.add(t), !0;
              })),
            ),
            Lc(i.options.placement) === Bc) &&
              (i.orderedModifiers.find(function (e) {
                return 'flip' === e.name;
              }) ||
                console.error(
                  [
                    'Popper: "auto" placements require the "flip" modifier be',
                    'present and enabled to work.',
                  ].join(' '),
                ));
            var c,
              p,
              m,
              f = vc(t);
            return (
              [f.marginTop, f.marginRight, f.marginBottom, f.marginLeft].some(function (e) {
                return parseFloat(e);
              }) &&
                console.warn(
                  [
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.',
                  ].join(' '),
                ),
              i.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  o = e.options,
                  n = void 0 === o ? {} : o,
                  a = e.effect;
                if ('function' == typeof a) {
                  var r = a({ state: i, name: t, instance: d, options: n }),
                    l = function () {};
                  s.push(r || l);
                }
              }),
              d.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var e = i.elements,
                t = e.reference,
                o = e.popper;
              if (Hc(t, o)) {
                var n, a, r, l;
                (i.rects = {
                  reference: gc(t, Nc(o), 'fixed' === i.options.strategy),
                  popper:
                    ((n = o),
                    (a = uc(n)),
                    (r = n.offsetWidth),
                    (l = n.offsetHeight),
                    Math.abs(a.width - r) <= 1 && (r = a.width),
                    Math.abs(a.height - l) <= 1 && (l = a.height),
                    { x: n.offsetLeft, y: n.offsetTop, width: r, height: l }),
                }),
                  (i.reset = !1),
                  (i.placement = i.options.placement),
                  i.orderedModifiers.forEach(function (e) {
                    return (i.modifiersData[e.name] = Object.assign({}, e.data));
                  });
                for (var s = 0, u = 0; u < i.orderedModifiers.length; u++) {
                  if ((s += 1) > 100) {
                    console.error(
                      'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
                    );
                    break;
                  }
                  if (!0 !== i.reset) {
                    var p = i.orderedModifiers[u],
                      m = p.fn,
                      f = p.options,
                      v = void 0 === f ? {} : f,
                      h = p.name;
                    'function' == typeof m &&
                      (i = m({ state: i, options: v, name: h, instance: d }) || i);
                  } else (i.reset = !1), (u = -1);
                }
              } else console.error(Fc);
            }
          },
          update:
            ((a = function () {
              return new Promise(function (e) {
                d.forceUpdate(), e(i);
              });
            }),
            function () {
              return (
                l ||
                  (l = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (l = void 0), e(a());
                    });
                  })),
                l
              );
            }),
          destroy: function () {
            u(), (c = !0);
          },
        };
      if (!Hc(e, t)) return console.error(Fc), d;
      function u() {
        s.forEach(function (e) {
          return e();
        }),
          (s = []);
      }
      return (
        d.setOptions(o).then(function (e) {
          !c && o.onFirstUpdate && o.onFirstUpdate(e);
        }),
        d
      );
    };
  }
  var Wc = { passive: !0 };
  var Uc = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function qc(e) {
    var t,
      o = e.popper,
      n = e.popperRect,
      a = e.placement,
      r = e.variation,
      l = e.offsets,
      i = e.position,
      s = e.gpuAcceleration,
      c = e.adaptive,
      d = e.roundOffsets,
      u = e.isFixed,
      p = l.x,
      m = void 0 === p ? 0 : p,
      f = l.y,
      v = void 0 === f ? 0 : f,
      h = 'function' == typeof d ? d({ x: m, y: v }) : { x: m, y: v };
    (m = h.x), (v = h.y);
    var g = l.hasOwnProperty('x'),
      b = l.hasOwnProperty('y'),
      y = Tc,
      w = Cc,
      x = window;
    if (c) {
      var V = Nc(o),
        N = 'clientHeight',
        C = 'clientWidth';
      if (
        (V === rc(o) &&
          'static' !== vc((V = fc(o))).position &&
          'absolute' === i &&
          ((N = 'scrollHeight'), (C = 'scrollWidth')),
        a === Cc || ((a === Tc || a === Sc) && r === Dc))
      )
        (w = kc),
          (v -= (u && V === x && x.visualViewport ? x.visualViewport.height : V[N]) - n.height),
          (v *= s ? 1 : -1);
      if (a === Tc || ((a === Cc || a === kc) && r === Dc))
        (y = Sc),
          (m -= (u && V === x && x.visualViewport ? x.visualViewport.width : V[C]) - n.width),
          (m *= s ? 1 : -1);
    }
    var k,
      S = Object.assign({ position: i }, c && Uc),
      T =
        !0 === d
          ? (function (e) {
              var t = e.x,
                o = e.y,
                n = window.devicePixelRatio || 1;
              return { x: cc(t * n) / n || 0, y: cc(o * n) / n || 0 };
            })({ x: m, y: v })
          : { x: m, y: v };
    return (
      (m = T.x),
      (v = T.y),
      s
        ? Object.assign(
            {},
            S,
            (((k = {})[w] = b ? '0' : ''),
            (k[y] = g ? '0' : ''),
            (k.transform =
              (x.devicePixelRatio || 1) <= 1
                ? 'translate(' + m + 'px, ' + v + 'px)'
                : 'translate3d(' + m + 'px, ' + v + 'px, 0)'),
            k),
          )
        : Object.assign(
            {},
            S,
            (((t = {})[w] = b ? v + 'px' : ''), (t[y] = g ? m + 'px' : ''), (t.transform = ''), t),
          )
    );
  }
  var Yc = jc({
    defaultModifiers: [
      {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            o = e.instance,
            n = e.options,
            a = n.scroll,
            r = void 0 === a || a,
            l = n.resize,
            i = void 0 === l || l,
            s = rc(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            r &&
              c.forEach(function (e) {
                e.addEventListener('scroll', o.update, Wc);
              }),
            i && s.addEventListener('resize', o.update, Wc),
            function () {
              r &&
                c.forEach(function (e) {
                  e.removeEventListener('scroll', o.update, Wc);
                }),
                i && s.removeEventListener('resize', o.update, Wc);
            }
          );
        },
        data: {},
      },
      {
        name: 'popperOffsets',
        enabled: !0,
        phase: 'read',
        fn: function (e) {
          var t = e.state,
            o = e.name;
          t.modifiersData[o] = (function (e) {
            var t,
              o = e.reference,
              n = e.element,
              a = e.placement,
              r = a ? Lc(a) : null,
              l = a ? Mc(a) : null,
              i = o.x + o.width / 2 - n.width / 2,
              s = o.y + o.height / 2 - n.height / 2;
            switch (r) {
              case Cc:
                t = { x: i, y: o.y - n.height };
                break;
              case kc:
                t = { x: i, y: o.y + o.height };
                break;
              case Sc:
                t = { x: o.x + o.width, y: s };
                break;
              case Tc:
                t = { x: o.x - n.width, y: s };
                break;
              default:
                t = { x: o.x, y: o.y };
            }
            var c = r
              ? (function (e) {
                  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
                })(r)
              : null;
            if (null != c) {
              var d = 'y' === c ? 'height' : 'width';
              switch (l) {
                case Pc:
                  t[c] = t[c] - (o[d] / 2 - n[d] / 2);
                  break;
                case Dc:
                  t[c] = t[c] + (o[d] / 2 - n[d] / 2);
              }
            }
            return t;
          })({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: 'absolute',
            placement: t.placement,
          });
        },
        data: {},
      },
      {
        name: 'computeStyles',
        enabled: !0,
        phase: 'beforeWrite',
        fn: function (e) {
          var t = e.state,
            o = e.options,
            n = o.gpuAcceleration,
            a = void 0 === n || n,
            r = o.adaptive,
            l = void 0 === r || r,
            i = o.roundOffsets,
            s = void 0 === i || i,
            c = vc(t.elements.popper).transitionProperty || '';
          l &&
            ['transform', 'top', 'right', 'bottom', 'left'].some(function (e) {
              return c.indexOf(e) >= 0;
            }) &&
            console.warn(
              [
                'Popper: Detected CSS transitions on at least one of the following',
                'CSS properties: "transform", "top", "right", "bottom", "left".',
                '\n\n',
                'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
                'for smooth transitions, or remove these properties from the CSS',
                'transition declaration on the popper element if only transitioning',
                'opacity or background-color for example.',
                '\n\n',
                'We recommend using the popper element as a wrapper around an inner',
                'element that can have any CSS property transitioned for animations.',
              ].join(' '),
            );
          var d = {
            placement: Lc(t.placement),
            variation: Mc(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: a,
            isFixed: 'fixed' === t.options.strategy,
          };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              qc(
                Object.assign({}, d, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: l,
                  roundOffsets: s,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                qc(
                  Object.assign({}, d, {
                    offsets: t.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: !1,
                    roundOffsets: s,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              'data-popper-placement': t.placement,
            }));
        },
        data: {},
      },
      {
        name: 'applyStyles',
        enabled: !0,
        phase: 'write',
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var o = t.styles[e] || {},
              n = t.attributes[e] || {},
              a = t.elements[e];
            ic(a) &&
              mc(a) &&
              (Object.assign(a.style, o),
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? '' : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            o = {
              popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
              arrow: { position: 'absolute' },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, o.popper),
            (t.styles = o),
            t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var n = t.elements[e],
                  a = t.attributes[e] || {},
                  r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : o[e]).reduce(function (
                    e,
                    t,
                  ) {
                    return (e[t] = ''), e;
                  },
                  {});
                ic(n) &&
                  mc(n) &&
                  (Object.assign(n.style, r),
                  Object.keys(a).forEach(function (e) {
                    n.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ['computeStyles'],
      },
    ],
  });
  var Gc = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: function (e) {
      var t = e.state,
        o = e.options,
        n = e.name,
        a = o.offset,
        r = void 0 === a ? [0, 0] : a,
        l = Oc.reduce(function (e, o) {
          return (
            (e[o] = (function (e, t, o) {
              var n = Lc(e),
                a = [Tc, Cc].indexOf(n) >= 0 ? -1 : 1,
                r = 'function' == typeof o ? o(Object.assign({}, t, { placement: e })) : o,
                l = r[0],
                i = r[1];
              return (
                (l = l || 0),
                (i = (i || 0) * a),
                [Tc, Sc].indexOf(n) >= 0 ? { x: i, y: l } : { x: l, y: i }
              );
            })(o, t.rects, r)),
            e
          );
        }, {}),
        i = l[t.placement],
        s = i.x,
        c = i.y;
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
        (t.modifiersData[n] = l);
    },
  };
  const [Xc, Zc] = Ie('popover'),
    Kc = ['overlay', 'duration', 'teleport', 'overlayStyle', 'overlayClass', 'closeOnClickOverlay'],
    _c = {
      show: Boolean,
      theme: N('light'),
      overlay: Boolean,
      actions: w(),
      trigger: N('click'),
      duration: g,
      showArrow: b,
      placement: N('bottom'),
      iconPrefix: String,
      overlayClass: h,
      overlayStyle: Object,
      closeOnClickAction: b,
      closeOnClickOverlay: b,
      closeOnClickOutside: b,
      offset: { type: Array, default: () => [0, 8] },
      teleport: { type: [String, Object], default: 'body' },
    };
  const Jc = We(
      t.defineComponent({
        name: Xc,
        props: _c,
        emits: ['select', 'touchstart', 'update:show'],
        setup(e, { emit: o, slots: n, attrs: a }) {
          let r;
          const l = t.ref(),
            i = t.ref(),
            s = t.ref(),
            c = ((e, o) => {
              const n = t.ref(e());
              return (
                t.watch(e, (e) => {
                  e !== n.value && (n.value = e);
                }),
                t.watch(n, (t) => {
                  t !== e() && o(t);
                }),
                n
              );
            })(
              () => e.show,
              (e) => o('update:show', e),
            ),
            u = () => ({
              placement: e.placement,
              modifiers: [
                { name: 'computeStyles', options: { adaptive: !1, gpuAcceleration: !1 } },
                d({}, Gc, { options: { offset: e.offset } }),
              ],
            }),
            p = () => {
              t.nextTick(() => {
                c.value &&
                  (r
                    ? r.setOptions(u())
                    : (r = i.value && s.value ? Yc(i.value, s.value.popupRef.value, u()) : null));
              });
            },
            f = (e) => {
              c.value = e;
            },
            v = () => {
              'click' === e.trigger && (c.value = !c.value);
            },
            h = (o, a) =>
              n.action
                ? n.action({ action: o, index: a })
                : [
                    o.icon &&
                      t.createVNode(
                        ht,
                        { name: o.icon, classPrefix: e.iconPrefix, class: Zc('action-icon') },
                        null,
                      ),
                    t.createVNode('div', { class: [Zc('action-text'), $e] }, [o.text]),
                  ],
            g = (n, a) => {
              const { icon: r, color: l, disabled: i, className: s } = n;
              return t.createVNode(
                'div',
                {
                  role: 'menuitem',
                  class: [Zc('action', { disabled: i, 'with-icon': r }), s],
                  style: { color: l },
                  tabindex: i ? void 0 : 0,
                  'aria-disabled': i || void 0,
                  onClick: () =>
                    ((t, n) => {
                      t.disabled || (o('select', t, n), e.closeOnClickAction && (c.value = !1));
                    })(n, a),
                },
                [h(n, a)],
              );
            };
          return (
            t.onMounted(() => {
              p(),
                t.watchEffect(() => {
                  var e;
                  l.value = null == (e = s.value) ? void 0 : e.popupRef.value;
                });
            }),
            t.onBeforeUnmount(() => {
              r && (r.destroy(), (r = null));
            }),
            t.watch(() => [c.value, e.offset, e.placement], p),
            W(
              [i, l],
              () => {
                c.value &&
                  e.closeOnClickOutside &&
                  (!e.overlay || e.closeOnClickOverlay) &&
                  (c.value = !1);
              },
              { eventName: 'touchstart' },
            ),
            () => {
              var o;
              return t.createVNode(t.Fragment, null, [
                t.createVNode('span', { ref: i, class: Zc('wrapper'), onClick: v }, [
                  null == (o = n.reference) ? void 0 : o.call(n),
                ]),
                t.createVNode(
                  Xt,
                  t.mergeProps(
                    {
                      ref: s,
                      show: c.value,
                      class: Zc([e.theme]),
                      position: '',
                      transition: 'van-popover-zoom',
                      lockScroll: !1,
                      'onUpdate:show': f,
                    },
                    a,
                    m(e, Kc),
                  ),
                  {
                    default: () => [
                      e.showArrow && t.createVNode('div', { class: Zc('arrow') }, null),
                      t.createVNode('div', { role: 'menu', class: Zc('content') }, [
                        n.default ? n.default() : e.actions.map(g),
                      ]),
                    ],
                  },
                ),
              ]);
            }
          );
        },
      }),
    ),
    [Qc, ed] = Ie('progress'),
    td = {
      color: String,
      inactive: Boolean,
      pivotText: String,
      textColor: String,
      showPivot: b,
      pivotColor: String,
      trackColor: String,
      strokeWidth: g,
      percentage: { type: g, default: 0, validator: (e) => e >= 0 && e <= 100 },
    };
  const od = We(
      t.defineComponent({
        name: Qc,
        props: td,
        setup(e) {
          const o = t.computed(() => (e.inactive ? void 0 : e.color)),
            n = () => {
              const { textColor: n, pivotText: a, pivotColor: r, percentage: l } = e,
                i = null != a ? a : `${l}%`;
              if (e.showPivot && i) {
                const a = {
                  color: n,
                  left: +l + '%',
                  transform: `translate(-${+l}%,-50%)`,
                  background: r || o.value,
                };
                return t.createVNode(
                  'span',
                  { style: a, class: ed('pivot', { inactive: e.inactive }) },
                  [i],
                );
              }
            };
          return () => {
            const { trackColor: a, percentage: r, strokeWidth: l } = e,
              i = { background: a, height: de(l) },
              s = { width: `${r}%`, background: o.value };
            return t.createVNode('div', { class: ed(), style: i }, [
              t.createVNode(
                'span',
                { class: ed('portion', { inactive: e.inactive }), style: s },
                null,
              ),
              n(),
            ]);
          };
        },
      }),
    ),
    [nd, ad, rd] = Ie('pull-refresh'),
    ld = ['pulling', 'loosing', 'success'],
    id = {
      disabled: Boolean,
      modelValue: Boolean,
      headHeight: V(50),
      successText: String,
      pullingText: String,
      loosingText: String,
      loadingText: String,
      pullDistance: g,
      successDuration: V(500),
      animationDuration: V(300),
    };
  const sd = We(
      t.defineComponent({
        name: nd,
        props: id,
        emits: ['change', 'refresh', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          let a;
          const r = t.ref(),
            l = t.ref(),
            i = Z(r),
            s = t.reactive({ status: 'normal', distance: 0, duration: 0 }),
            c = Lt(),
            d = () => {
              if (50 !== e.headHeight) return { height: `${e.headHeight}px` };
            },
            u = () => 'loading' !== s.status && 'success' !== s.status && !e.disabled,
            p = (t, n) => {
              const a = +(e.pullDistance || e.headHeight);
              (s.distance = t),
                (s.status = n ? 'loading' : 0 === t ? 'normal' : t < a ? 'pulling' : 'loosing'),
                o('change', { status: s.status, distance: t });
            },
            m = () => {
              const { status: t } = s;
              return 'normal' === t ? '' : e[`${t}Text`] || rd(t);
            },
            f = () => {
              const { status: e, distance: o } = s;
              if (n[e]) return n[e]({ distance: o });
              const a = [];
              return (
                ld.includes(e) && a.push(t.createVNode('div', { class: ad('text') }, [m()])),
                'loading' === e &&
                  a.push(t.createVNode(Vt, { class: ad('loading') }, { default: m })),
                a
              );
            },
            v = (e) => {
              (a = 0 === J(i.value)), a && ((s.duration = 0), c.start(e));
            },
            h = (e) => {
              u() && v(e);
            },
            g = () => {
              a &&
                c.deltaY.value &&
                u() &&
                ((s.duration = +e.animationDuration),
                'loosing' === s.status
                  ? (p(+e.headHeight, !0),
                    o('update:modelValue', !0),
                    t.nextTick(() => o('refresh')))
                  : p(0));
            };
          return (
            t.watch(
              () => e.modelValue,
              (t) => {
                (s.duration = +e.animationDuration),
                  t
                    ? p(+e.headHeight, !0)
                    : n.success || e.successText
                    ? ((s.status = 'success'),
                      setTimeout(() => {
                        p(0);
                      }, +e.successDuration))
                    : p(0, !1);
              },
            ),
            j(
              'touchmove',
              (t) => {
                if (u()) {
                  a || v(t);
                  const { deltaY: o } = c;
                  c.move(t),
                    a &&
                      o.value >= 0 &&
                      c.isVertical() &&
                      (le(t),
                      p(
                        ((t) => {
                          const o = +(e.pullDistance || e.headHeight);
                          return (
                            t > o && (t = t < 2 * o ? o + (t - o) / 2 : 1.5 * o + (t - 2 * o) / 4),
                            Math.round(t)
                          );
                        })(o.value),
                      ));
                }
              },
              { target: l },
            ),
            () => {
              var e;
              const o = {
                transitionDuration: `${s.duration}ms`,
                transform: s.distance ? `translate3d(0,${s.distance}px, 0)` : '',
              };
              return t.createVNode('div', { ref: r, class: ad() }, [
                t.createVNode(
                  'div',
                  {
                    ref: l,
                    class: ad('track'),
                    style: o,
                    onTouchstartPassive: h,
                    onTouchend: g,
                    onTouchcancel: g,
                  },
                  [
                    t.createVNode('div', { class: ad('head'), style: d() }, [f()]),
                    null == (e = n.default) ? void 0 : e.call(n),
                  ],
                ),
              ]);
            }
          );
        },
      }),
    ),
    [cd, dd] = Ie('rate');
  const ud = {
    size: g,
    icon: N('star'),
    color: String,
    count: V(5),
    gutter: g,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: N('star-o'),
    allowHalf: Boolean,
    voidColor: String,
    touchable: b,
    iconPrefix: String,
    modelValue: x(0),
    disabledColor: String,
  };
  const pd = We(
      t.defineComponent({
        name: cd,
        props: ud,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o }) {
          const n = Lt(),
            [a, r] = yo(),
            l = t.ref(),
            i = () => e.readonly || e.disabled || !e.touchable,
            s = t.computed(() =>
              Array(+e.count)
                .fill('')
                .map((t, o) =>
                  (function (e, t, o, n) {
                    if (e >= t) return { status: 'full', value: 1 };
                    if (e + 0.5 >= t && o && !n) return { status: 'half', value: 0.5 };
                    if (e + 1 >= t && o && n) {
                      const o = 10 ** 10;
                      return { status: 'half', value: Math.round((e - t + 1) * o) / o };
                    }
                    return { status: 'void', value: 0 };
                  })(e.modelValue, o + 1, e.allowHalf, e.readonly),
                ),
            );
          let c,
            d,
            u = Number.MAX_SAFE_INTEGER,
            p = Number.MIN_SAFE_INTEGER;
          const m = () => {
              d = P(l);
              const t = a.value.map(P);
              (c = []),
                t.forEach((t, o) => {
                  (u = Math.min(t.top, u)),
                    (p = Math.max(t.top, p)),
                    e.allowHalf
                      ? c.push(
                          { score: o + 0.5, left: t.left, top: t.top, height: t.height },
                          {
                            score: o + 1,
                            left: t.left + t.width / 2,
                            top: t.top,
                            height: t.height,
                          },
                        )
                      : c.push({ score: o + 1, left: t.left, top: t.top, height: t.height });
                });
            },
            f = (t, o) => {
              for (let e = c.length - 1; e > 0; e--)
                if (o >= d.top && o <= d.bottom) {
                  if (t > c[e].left && o >= c[e].top && o <= c[e].top + c[e].height)
                    return c[e].score;
                } else {
                  const n = o < d.top ? u : p;
                  if (t > c[e].left && c[e].top === n) return c[e].score;
                }
              return e.allowHalf ? 0.5 : 1;
            },
            v = (t) => {
              e.disabled ||
                e.readonly ||
                t === e.modelValue ||
                (o('update:modelValue', t), o('change', t));
            },
            h = (e) => {
              i() || (n.start(e), m());
            },
            g = (o, n) => {
              const {
                  icon: a,
                  size: l,
                  color: i,
                  count: s,
                  gutter: c,
                  voidIcon: d,
                  disabled: u,
                  voidColor: p,
                  allowHalf: h,
                  iconPrefix: g,
                  disabledColor: b,
                } = e,
                y = n + 1,
                w = 'full' === o.status,
                x = 'void' === o.status,
                V = h && o.value > 0 && o.value < 1;
              let N;
              c && y !== +s && (N = { paddingRight: de(c) });
              return t.createVNode(
                'div',
                {
                  key: n,
                  ref: r(n),
                  role: 'radio',
                  style: N,
                  class: dd('item'),
                  tabindex: u ? void 0 : 0,
                  'aria-setsize': s,
                  'aria-posinset': y,
                  'aria-checked': !x,
                  onClick: (e) => {
                    m(), v(h ? f(e.clientX, e.clientY) : y);
                  },
                },
                [
                  t.createVNode(
                    ht,
                    {
                      size: l,
                      name: w ? a : d,
                      class: dd('icon', { disabled: u, full: w }),
                      color: u ? b : w ? i : p,
                      classPrefix: g,
                    },
                    null,
                  ),
                  V &&
                    t.createVNode(
                      ht,
                      {
                        size: l,
                        style: { width: o.value + 'em' },
                        name: x ? d : a,
                        class: dd('icon', ['half', { disabled: u, full: !x }]),
                        color: u ? b : x ? p : i,
                        classPrefix: g,
                      },
                      null,
                    ),
                ],
              );
            };
          return (
            _(() => e.modelValue),
            j(
              'touchmove',
              (e) => {
                if (!i() && (n.move(e), n.isHorizontal())) {
                  const { clientX: t, clientY: o } = e.touches[0];
                  le(e), v(f(t, o));
                }
              },
              { target: l },
            ),
            () =>
              t.createVNode(
                'div',
                {
                  ref: l,
                  role: 'radiogroup',
                  class: dd({ readonly: e.readonly, disabled: e.disabled }),
                  tabindex: e.disabled ? void 0 : 0,
                  'aria-disabled': e.disabled,
                  'aria-readonly': e.readonly,
                  onTouchstartPassive: h,
                },
                [s.value.map(g)],
              )
          );
        },
      }),
    ),
    md = We(sl),
    [fd, vd, hd] = Ie('search'),
    gd = d({}, On, {
      label: String,
      shape: N('square'),
      leftIcon: N('search'),
      clearable: b,
      actionText: String,
      background: String,
      showAction: Boolean,
    });
  const bd = We(
      t.defineComponent({
        name: fd,
        props: gd,
        emits: [
          'blur',
          'focus',
          'clear',
          'search',
          'cancel',
          'clickInput',
          'clickLeftIcon',
          'clickRightIcon',
          'update:modelValue',
        ],
        setup(e, { emit: o, slots: n, attrs: a }) {
          const r = bo(),
            l = t.ref(),
            i = () => {
              n.action || (o('update:modelValue', ''), o('cancel'));
            },
            s = (t) => {
              13 === t.keyCode && (le(t), o('search', e.modelValue));
            },
            c = () => e.id || `${r}-input`,
            u = () => {
              if (n.label || e.label)
                return t.createVNode('label', { class: vd('label'), for: c() }, [
                  n.label ? n.label() : e.label,
                ]);
            },
            p = () => {
              if (e.showAction) {
                const o = e.actionText || hd('cancel');
                return t.createVNode(
                  'div',
                  { class: vd('action'), role: 'button', tabindex: 0, onClick: i },
                  [n.action ? n.action() : o],
                );
              }
            },
            f = (e) => o('blur', e),
            v = (e) => o('focus', e),
            h = (e) => o('clear', e),
            g = (e) => o('clickInput', e),
            b = (e) => o('clickLeftIcon', e),
            y = (e) => o('clickRightIcon', e),
            w = Object.keys(On),
            x = () => {
              const r = d({}, a, m(e, w), { id: c() });
              return t.createVNode(
                An,
                t.mergeProps(
                  {
                    ref: l,
                    type: 'search',
                    class: vd('field'),
                    border: !1,
                    onBlur: f,
                    onFocus: v,
                    onClear: h,
                    onKeypress: s,
                    onClickInput: g,
                    onClickLeftIcon: b,
                    onClickRightIcon: y,
                    'onUpdate:modelValue': (e) => o('update:modelValue', e),
                  },
                  r,
                ),
                m(n, ['left-icon', 'right-icon']),
              );
            };
          return (
            Qe({
              focus: () => {
                var e;
                return null == (e = l.value) ? void 0 : e.focus();
              },
              blur: () => {
                var e;
                return null == (e = l.value) ? void 0 : e.blur();
              },
            }),
            () => {
              var o;
              return t.createVNode(
                'div',
                { class: vd({ 'show-action': e.showAction }), style: { background: e.background } },
                [
                  null == (o = n.left) ? void 0 : o.call(n),
                  t.createVNode('div', { class: vd('content', e.shape) }, [u(), x()]),
                  p(),
                ],
              );
            }
          );
        },
      }),
    ),
    yd = [...$t, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'],
    wd = {
      qq: 'qq',
      link: 'link-o',
      weibo: 'weibo',
      qrcode: 'qr',
      poster: 'photo-o',
      wechat: 'wechat',
      'weapp-qrcode': 'miniprogram-o',
      'wechat-moments': 'wechat-moments',
    },
    [xd, Vd, Nd] = Ie('share-sheet'),
    Cd = d({}, Et, {
      title: String,
      round: b,
      options: w(),
      cancelText: String,
      description: String,
      closeOnPopstate: b,
      safeAreaInsetBottom: b,
    });
  const kd = We(
      t.defineComponent({
        name: xd,
        props: Cd,
        emits: ['cancel', 'select', 'update:show'],
        setup(e, { emit: o, slots: n }) {
          const a = (e) => o('update:show', e),
            r = () => {
              a(!1), o('cancel');
            },
            l = () => {
              const o = n.title ? n.title() : e.title,
                a = n.description ? n.description() : e.description;
              if (o || a)
                return t.createVNode('div', { class: Vd('header') }, [
                  o && t.createVNode('h2', { class: Vd('title') }, [o]),
                  a && t.createVNode('span', { class: Vd('description') }, [a]),
                ]);
            },
            i = (e) =>
              wd[e]
                ? t.createVNode('div', { class: Vd('icon', [e]) }, [
                    t.createVNode(ht, { name: wd[e] || e }, null),
                  ])
                : t.createVNode('img', { src: e, class: Vd('image-icon') }, null),
            s = (e, n) => {
              const { name: a, icon: r, className: l, description: s } = e;
              return t.createVNode(
                'div',
                {
                  role: 'button',
                  tabindex: 0,
                  class: [Vd('option'), l, Re],
                  onClick: () => ((e, t) => o('select', e, t))(e, n),
                },
                [
                  i(r),
                  a && t.createVNode('span', { class: Vd('name') }, [a]),
                  s && t.createVNode('span', { class: Vd('option-description') }, [s]),
                ],
              );
            },
            c = (e, o) => t.createVNode('div', { class: Vd('options', { border: o }) }, [e.map(s)]),
            d = () => {
              const { options: t } = e;
              return Array.isArray(t[0]) ? t.map((e, t) => c(e, 0 !== t)) : c(t);
            },
            u = () => {
              var o;
              const a = null != (o = e.cancelText) ? o : Nd('cancel');
              if (n.cancel || a)
                return t.createVNode(
                  'button',
                  { type: 'button', class: Vd('cancel'), onClick: r },
                  [n.cancel ? n.cancel() : a],
                );
            };
          return () =>
            t.createVNode(
              Xt,
              t.mergeProps({ class: Vd(), position: 'bottom', 'onUpdate:show': a }, m(e, yd)),
              { default: () => [l(), d(), u()] },
            );
        },
      }),
    ),
    [Sd, Td] = Ie('sidebar'),
    Bd = Symbol(Sd),
    Pd = { modelValue: V(0) };
  const Dd = We(
      t.defineComponent({
        name: Sd,
        props: Pd,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const { linkChildren: a } = A(Bd),
            r = () => +e.modelValue;
          return (
            a({
              getActive: r,
              setActive: (e) => {
                e !== r() && (o('update:modelValue', e), o('change', e));
              },
            }),
            () => {
              var e;
              return t.createVNode('div', { role: 'tablist', class: Td() }, [
                null == (e = n.default) ? void 0 : e.call(n),
              ]);
            }
          );
        },
      }),
    ),
    [Od, Id] = Ie('sidebar-item'),
    Ad = d({}, et, {
      dot: Boolean,
      title: String,
      badge: g,
      disabled: Boolean,
      badgeProps: Object,
    });
  const zd = We(
      t.defineComponent({
        name: Od,
        props: Ad,
        emits: ['click'],
        setup(e, { emit: o, slots: n }) {
          const a = ot(),
            { parent: r, index: l } = D(Bd);
          if (!r) return;
          const i = () => {
            e.disabled || (o('click', l.value), r.setActive(l.value), a());
          };
          return () => {
            const { dot: o, badge: a, title: s, disabled: c } = e,
              d = l.value === r.getActive();
            return t.createVNode(
              'div',
              {
                role: 'tab',
                class: Id({ select: d, disabled: c }),
                tabindex: c ? void 0 : 0,
                'aria-selected': d,
                onClick: i,
              },
              [
                t.createVNode(
                  lt,
                  t.mergeProps({ dot: o, class: Id('text'), content: a }, e.badgeProps),
                  { default: () => [n.title ? n.title() : s] },
                ),
              ],
            );
          };
        },
      }),
    ),
    [Ed, $d] = Ie('skeleton-title'),
    Ld = { round: Boolean, titleWidth: g };
  const Md = We(
    t.defineComponent({
      name: Ed,
      props: Ld,
      setup: (e) => () =>
        t.createVNode(
          'h3',
          { class: $d([{ round: e.round }]), style: { width: de(e.titleWidth) } },
          null,
        ),
    }),
  );
  var Fd = Md;
  const [Rd, Hd] = Ie('skeleton-avatar'),
    jd = { avatarSize: g, avatarShape: N('round') };
  const Wd = We(
    t.defineComponent({
      name: Rd,
      props: jd,
      setup: (e) => () =>
        t.createVNode('div', { class: Hd([e.avatarShape]), style: ue(e.avatarSize) }, null),
    }),
  );
  var Ud = Wd;
  const qd = '100%',
    Yd = { round: Boolean, rowWidth: { type: g, default: qd } },
    [Gd, Xd] = Ie('skeleton-paragraph');
  const Zd = We(
    t.defineComponent({
      name: Gd,
      props: Yd,
      setup: (e) => () =>
        t.createVNode(
          'div',
          { class: Xd([{ round: e.round }]), style: { width: e.rowWidth } },
          null,
        ),
    }),
  );
  var Kd = Zd;
  const [_d, Jd] = Ie('skeleton'),
    Qd = {
      row: V(0),
      round: Boolean,
      title: Boolean,
      titleWidth: g,
      avatar: Boolean,
      avatarSize: g,
      avatarShape: N('round'),
      loading: b,
      animate: b,
      rowWidth: { type: [Number, String, Array], default: qd },
    };
  const eu = We(
      t.defineComponent({
        name: _d,
        inheritAttrs: !1,
        props: Qd,
        setup(e, { slots: o, attrs: n }) {
          const a = () => {
              if (e.avatar)
                return t.createVNode(
                  Ud,
                  { avatarShape: e.avatarShape, avatarSize: e.avatarSize },
                  null,
                );
            },
            r = () => {
              if (e.title)
                return t.createVNode(Fd, { round: e.round, titleWidth: e.titleWidth }, null);
            },
            l = (t) => {
              const { rowWidth: o } = e;
              return o === qd && t === +e.row - 1 ? '60%' : Array.isArray(o) ? o[t] : o;
            };
          return () => {
            var i;
            return e.loading
              ? t.createVNode(
                  'div',
                  t.mergeProps({ class: Jd({ animate: e.animate, round: e.round }) }, n),
                  [
                    o.template
                      ? o.template()
                      : t.createVNode(t.Fragment, null, [
                          a(),
                          t.createVNode('div', { class: Jd('content') }, [
                            r(),
                            Array(+e.row)
                              .fill('')
                              .map((o, n) =>
                                t.createVNode(
                                  Kd,
                                  { key: n, round: e.round, rowWidth: de(l(n)) },
                                  null,
                                ),
                              ),
                          ]),
                        ]),
                  ],
                )
              : null == (i = o.default)
              ? void 0
              : i.call(o);
          };
        },
      }),
    ),
    [tu, ou] = Ie('skeleton-image'),
    nu = { imageSize: g, imageShape: N('square') };
  const au = We(
      t.defineComponent({
        name: tu,
        props: nu,
        setup: (e) => () =>
          t.createVNode('div', { class: ou([e.imageShape]), style: ue(e.imageSize) }, [
            t.createVNode(ht, { name: 'photo', class: ou('icon') }, null),
          ]),
      }),
    ),
    [ru, lu] = Ie('slider'),
    iu = {
      min: V(0),
      max: V(100),
      step: V(1),
      range: Boolean,
      reverse: Boolean,
      disabled: Boolean,
      readonly: Boolean,
      vertical: Boolean,
      barHeight: g,
      buttonSize: g,
      activeColor: String,
      inactiveColor: String,
      modelValue: { type: [Number, Array], default: 0 },
    };
  const su = We(
      t.defineComponent({
        name: ru,
        props: iu,
        emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          let a, r, l;
          const i = t.ref(),
            s = t.ref(),
            c = t.ref(),
            d = Lt(),
            u = t.computed(() => Number(e.max) - Number(e.min)),
            p = t.computed(() => {
              const t = e.vertical ? 'width' : 'height';
              return { background: e.inactiveColor, [t]: de(e.barHeight) };
            }),
            m = (t) => e.range && Array.isArray(t),
            v = () => {
              const { modelValue: t, min: o } = e;
              return m(t)
                ? (100 * (t[1] - t[0])) / u.value + '%'
                : (100 * (t - Number(o))) / u.value + '%';
            },
            h = t.computed(() => {
              const t = { [e.vertical ? 'height' : 'width']: v(), background: e.activeColor };
              c.value && (t.transition = 'none');
              return (
                (t[e.vertical ? (e.reverse ? 'bottom' : 'top') : e.reverse ? 'right' : 'left'] =
                  (() => {
                    const { modelValue: t, min: o } = e;
                    return m(t) ? (100 * (t[0] - Number(o))) / u.value + '%' : '0%';
                  })()),
                t
              );
            }),
            g = (t) => {
              const o = +e.min,
                n = +e.max,
                a = +e.step;
              t = ye(t, o, n);
              return Ve(o, Math.round((t - o) / a) * a);
            },
            b = (t, n) => {
              (t = m(t)
                ? ((t) => {
                    var o, n;
                    const a = null != (o = t[0]) ? o : Number(e.min),
                      r = null != (n = t[1]) ? n : Number(e.max);
                    return a > r ? [r, a] : [a, r];
                  })(t).map(g)
                : g(t)),
                f(t, e.modelValue) || o('update:modelValue', t),
                n && !f(t, l) && o('change', t);
            },
            y = (t) => {
              if ((t.stopPropagation(), e.disabled || e.readonly)) return;
              const { min: o, reverse: n, vertical: a, modelValue: r } = e,
                l = P(i),
                s = a ? l.height : l.width,
                c =
                  Number(o) +
                  ((a
                    ? n
                      ? l.bottom - t.clientY
                      : t.clientY - l.top
                    : n
                    ? l.right - t.clientX
                    : t.clientX - l.left) /
                    s) *
                    u.value;
              if (m(r)) {
                const [e, t] = r;
                b(c <= (e + t) / 2 ? [c, t] : [e, c], !0);
              } else b(c, !0);
            },
            w = (t) => {
              e.disabled ||
                e.readonly ||
                ('dragging' === c.value && (b(r, !0), o('dragEnd', t)), (c.value = ''));
            },
            x = (t) => {
              if ('number' == typeof t) {
                return lu('button-wrapper', ['left', 'right'][t]);
              }
              return lu('button-wrapper', e.reverse ? 'left' : 'right');
            },
            V = (o, a) => {
              if ('number' == typeof a) {
                const e = n[0 === a ? 'left-button' : 'right-button'];
                if (e) return e({ value: o });
              }
              return n.button
                ? n.button({ value: o })
                : t.createVNode('div', { class: lu('button'), style: ue(e.buttonSize) }, null);
            },
            N = (o) => {
              const n = 'number' == typeof o ? e.modelValue[o] : e.modelValue;
              return t.createVNode(
                'div',
                {
                  ref: s,
                  role: 'slider',
                  class: x(o),
                  tabindex: e.disabled ? void 0 : 0,
                  'aria-valuemin': e.min,
                  'aria-valuenow': n,
                  'aria-valuemax': e.max,
                  'aria-disabled': e.disabled || void 0,
                  'aria-readonly': e.readonly || void 0,
                  'aria-orientation': e.vertical ? 'vertical' : 'horizontal',
                  onTouchstartPassive: (t) => {
                    'number' == typeof o && (a = o),
                      ((t) => {
                        e.disabled ||
                          e.readonly ||
                          (d.start(t),
                          (r = e.modelValue),
                          (l = m(r) ? r.map(g) : g(r)),
                          (c.value = 'start'));
                      })(t);
                  },
                  onTouchend: w,
                  onTouchcancel: w,
                  onClick: re,
                },
                [V(n, o)],
              );
            };
          return (
            b(e.modelValue),
            _(() => e.modelValue),
            j(
              'touchmove',
              (t) => {
                if (e.disabled || e.readonly) return;
                'start' === c.value && o('dragStart', t),
                  le(t, !0),
                  d.move(t),
                  (c.value = 'dragging');
                const n = P(i);
                let s =
                  ((e.vertical ? d.deltaY.value : d.deltaX.value) /
                    (e.vertical ? n.height : n.width)) *
                  u.value;
                if ((e.reverse && (s = -s), m(l))) {
                  const t = e.reverse ? 1 - a : a;
                  r[t] = l[t] + s;
                } else r = l + s;
                b(r);
              },
              { target: s },
            ),
            () =>
              t.createVNode(
                'div',
                {
                  ref: i,
                  style: p.value,
                  class: lu({ vertical: e.vertical, disabled: e.disabled }),
                  onClick: y,
                },
                [
                  t.createVNode('div', { class: lu('bar'), style: h.value }, [
                    e.range ? [N(0), N(1)] : N(),
                  ]),
                ],
              )
          );
        },
      }),
    ),
    [cu, du] = Ie('space'),
    uu = {
      align: String,
      direction: { type: String, default: 'horizontal' },
      size: { type: [Number, String, Array], default: 8 },
      wrap: Boolean,
      fill: Boolean,
    };
  function pu(e = []) {
    const o = [];
    return (
      e.forEach((e) => {
        Array.isArray(e)
          ? o.push(...e)
          : e.type === t.Fragment
          ? o.push(...pu(e.children))
          : o.push(e);
      }),
      o.filter((e) => {
        var o;
        return !(
          e &&
          (('undefined' != typeof Comment && e.type === Comment) ||
            (e.type === t.Fragment && 0 === (null == (o = e.children) ? void 0 : o.length)) ||
            (e.type === Text && '' === e.children.trim()))
        );
      })
    );
  }
  const mu = We(
      t.defineComponent({
        name: cu,
        props: uu,
        setup(e, { slots: o }) {
          const n = t.computed(() => {
              var t;
              return null != (t = e.align) ? t : 'horizontal' === e.direction ? 'center' : '';
            }),
            a = (e) => ('number' == typeof e ? e + 'px' : e),
            r = (t) => {
              const o = {},
                n = `${a(Array.isArray(e.size) ? e.size[0] : e.size)}`,
                r = `${a(Array.isArray(e.size) ? e.size[1] : e.size)}`;
              return t
                ? e.wrap
                  ? { marginBottom: r }
                  : {}
                : ('horizontal' === e.direction && (o.marginRight = n),
                  ('vertical' === e.direction || e.wrap) && (o.marginBottom = r),
                  o);
            };
          return () => {
            var a;
            const l = pu(null == (a = o.default) ? void 0 : a.call(o));
            return t.createVNode(
              'div',
              {
                class: [
                  du({
                    [e.direction]: e.direction,
                    [`align-${n.value}`]: n.value,
                    wrap: e.wrap,
                    fill: e.fill,
                  }),
                ],
              },
              [
                l.map((e, o) =>
                  t.createVNode(
                    'div',
                    { key: `item-${o}`, class: `${cu}-item`, style: r(o === l.length - 1) },
                    [e],
                  ),
                ),
              ],
            );
          };
        },
      }),
    ),
    [fu, vu] = Ie('steps'),
    hu = {
      active: V(0),
      direction: N('horizontal'),
      activeIcon: N('checked'),
      iconPrefix: String,
      finishIcon: String,
      activeColor: String,
      inactiveIcon: String,
      inactiveColor: String,
    },
    gu = Symbol(fu);
  var bu = t.defineComponent({
    name: fu,
    props: hu,
    emits: ['clickStep'],
    setup(e, { emit: o, slots: n }) {
      const { linkChildren: a } = A(gu);
      return (
        a({ props: e, onClickStep: (e) => o('clickStep', e) }),
        () => {
          var o;
          return t.createVNode('div', { class: vu([e.direction]) }, [
            t.createVNode('div', { class: vu('items') }, [
              null == (o = n.default) ? void 0 : o.call(n),
            ]),
          ]);
        }
      );
    },
  });
  const [yu, wu] = Ie('step');
  const xu = We(
      t.defineComponent({
        name: yu,
        setup(e, { slots: o }) {
          const { parent: n, index: a } = D(gu);
          if (!n) return;
          const r = n.props,
            l = () => {
              const e = +r.active;
              return a.value < e ? 'finish' : a.value === e ? 'process' : 'waiting';
            },
            i = () => 'process' === l(),
            s = t.computed(() => ({
              background: 'finish' === l() ? r.activeColor : r.inactiveColor,
            })),
            c = t.computed(() =>
              i()
                ? { color: r.activeColor }
                : 'waiting' === l()
                ? { color: r.inactiveColor }
                : void 0,
            ),
            d = () => n.onClickStep(a.value),
            u = () => {
              const {
                iconPrefix: e,
                finishIcon: n,
                activeIcon: a,
                activeColor: c,
                inactiveIcon: d,
              } = r;
              return i()
                ? o['active-icon']
                  ? o['active-icon']()
                  : t.createVNode(
                      ht,
                      { class: wu('icon', 'active'), name: a, color: c, classPrefix: e },
                      null,
                    )
                : 'finish' === l() && (n || o['finish-icon'])
                ? o['finish-icon']
                  ? o['finish-icon']()
                  : t.createVNode(
                      ht,
                      { class: wu('icon', 'finish'), name: n, color: c, classPrefix: e },
                      null,
                    )
                : o['inactive-icon']
                ? o['inactive-icon']()
                : d
                ? t.createVNode(ht, { class: wu('icon'), name: d, classPrefix: e }, null)
                : t.createVNode('i', { class: wu('circle'), style: s.value }, null);
            };
          return () => {
            var e;
            const n = l();
            return t.createVNode('div', { class: [Ae, wu([r.direction, { [n]: n }])] }, [
              t.createVNode(
                'div',
                { class: wu('title', { active: i() }), style: c.value, onClick: d },
                [null == (e = o.default) ? void 0 : e.call(o)],
              ),
              t.createVNode('div', { class: wu('circle-container'), onClick: d }, [u()]),
              t.createVNode('div', { class: wu('line'), style: s.value }, null),
            ]);
          };
        },
      }),
    ),
    [Vu, Nu] = Ie('stepper'),
    Cu = (e, t) => String(e) === String(t),
    ku = {
      min: V(1),
      max: V(1 / 0),
      name: V(''),
      step: V(1),
      theme: String,
      integer: Boolean,
      disabled: Boolean,
      showPlus: b,
      showMinus: b,
      showInput: b,
      longPress: b,
      autoFixed: b,
      allowEmpty: Boolean,
      modelValue: g,
      inputWidth: g,
      buttonSize: g,
      placeholder: String,
      disablePlus: Boolean,
      disableMinus: Boolean,
      disableInput: Boolean,
      beforeChange: Function,
      defaultValue: V(1),
      decimalLength: g,
    };
  const Su = We(
      t.defineComponent({
        name: Vu,
        props: ku,
        emits: ['plus', 'blur', 'minus', 'focus', 'change', 'overlimit', 'update:modelValue'],
        setup(e, { emit: n }) {
          const a = (t, n = !0) => {
            const { min: a, max: r, allowEmpty: l, decimalLength: i } = e;
            return (
              (l && '' === t) ||
                ((t = '' === (t = xe(String(t), !e.integer)) ? 0 : +t),
                (t = Number.isNaN(t) ? +a : t),
                (t = n ? Math.max(Math.min(+r, t), +a) : t),
                o(i) && (t = t.toFixed(+i))),
              t
            );
          };
          let r;
          const l = t.ref(),
            i = t.ref(
              (() => {
                var t;
                const o = null != (t = e.modelValue) ? t : e.defaultValue,
                  r = a(o);
                return Cu(r, e.modelValue) || n('update:modelValue', r), r;
              })(),
            ),
            s = t.computed(() => e.disabled || e.disableMinus || i.value <= +e.min),
            c = t.computed(() => e.disabled || e.disablePlus || i.value >= +e.max),
            d = t.computed(() => ({ width: de(e.inputWidth), height: de(e.buttonSize) })),
            u = t.computed(() => ue(e.buttonSize)),
            p = (t) => {
              e.beforeChange
                ? je(e.beforeChange, {
                    args: [t],
                    done() {
                      i.value = t;
                    },
                  })
                : (i.value = t);
            },
            m = () => {
              if (('plus' === r && c.value) || ('minus' === r && s.value))
                return void n('overlimit', r);
              const t = 'minus' === r ? -e.step : +e.step,
                o = a(Ve(+i.value, t));
              p(o), n(r);
            },
            f = (t) => {
              const n = t.target,
                { value: a } = n,
                { decimalLength: r } = e;
              let l = xe(String(a), !e.integer);
              if (o(r) && l.includes('.')) {
                const e = l.split('.');
                l = `${e[0]}.${e[1].slice(0, +r)}`;
              }
              e.beforeChange ? (n.value = String(i.value)) : Cu(a, l) || (n.value = l);
              const s = l === String(+l);
              p(s ? +l : l);
            },
            v = (t) => {
              var o;
              e.disableInput ? null == (o = l.value) || o.blur() : n('focus', t);
            },
            h = (o) => {
              const r = o.target,
                l = a(r.value, e.autoFixed);
              (r.value = String(l)),
                (i.value = l),
                t.nextTick(() => {
                  n('blur', o), ae();
                });
            };
          let g, b;
          const y = () => {
              b = setTimeout(() => {
                m(), y();
              }, 200);
            },
            w = (t) => {
              e.longPress && (clearTimeout(b), g && le(t));
            },
            x = (t) => {
              e.disableInput && le(t);
            },
            V = (t) => ({
              onClick: (e) => {
                le(e), (r = t), m();
              },
              onTouchstartPassive: () => {
                (r = t),
                  e.longPress &&
                    ((g = !1),
                    clearTimeout(b),
                    (b = setTimeout(() => {
                      (g = !0), m(), y();
                    }, 500)));
              },
              onTouchend: w,
              onTouchcancel: w,
            });
          return (
            t.watch(
              () => [e.max, e.min, e.integer, e.decimalLength],
              () => {
                const e = a(i.value);
                Cu(e, i.value) || (i.value = e);
              },
            ),
            t.watch(
              () => e.modelValue,
              (e) => {
                Cu(e, i.value) || (i.value = a(e));
              },
            ),
            t.watch(i, (t) => {
              n('update:modelValue', t), n('change', t, { name: e.name });
            }),
            _(() => e.modelValue),
            () =>
              t.createVNode('div', { role: 'group', class: Nu([e.theme]) }, [
                t.withDirectives(
                  t.createVNode(
                    'button',
                    t.mergeProps(
                      {
                        type: 'button',
                        style: u.value,
                        class: [Nu('minus', { disabled: s.value }), { [Re]: !s.value }],
                        'aria-disabled': s.value || void 0,
                      },
                      V('minus'),
                    ),
                    null,
                  ),
                  [[t.vShow, e.showMinus]],
                ),
                t.withDirectives(
                  t.createVNode(
                    'input',
                    {
                      ref: l,
                      type: e.integer ? 'tel' : 'text',
                      role: 'spinbutton',
                      class: Nu('input'),
                      value: i.value,
                      style: d.value,
                      disabled: e.disabled,
                      readonly: e.disableInput,
                      inputmode: e.integer ? 'numeric' : 'decimal',
                      placeholder: e.placeholder,
                      'aria-valuemax': e.max,
                      'aria-valuemin': e.min,
                      'aria-valuenow': i.value,
                      onBlur: h,
                      onInput: f,
                      onFocus: v,
                      onMousedown: x,
                    },
                    null,
                  ),
                  [[t.vShow, e.showInput]],
                ),
                t.withDirectives(
                  t.createVNode(
                    'button',
                    t.mergeProps(
                      {
                        type: 'button',
                        style: u.value,
                        class: [Nu('plus', { disabled: c.value }), { [Re]: !c.value }],
                        'aria-disabled': c.value || void 0,
                      },
                      V('plus'),
                    ),
                    null,
                  ),
                  [[t.vShow, e.showPlus]],
                ),
              ])
          );
        },
      }),
    ),
    Tu = We(bu),
    [Bu, Pu, Du] = Ie('submit-bar'),
    Ou = {
      tip: String,
      label: String,
      price: Number,
      tipIcon: String,
      loading: Boolean,
      currency: N('¥'),
      disabled: Boolean,
      textAlign: String,
      buttonText: String,
      buttonType: N('danger'),
      buttonColor: String,
      suffixLabel: String,
      placeholder: Boolean,
      decimalLength: V(2),
      safeAreaInsetBottom: b,
    };
  const Iu = We(
      t.defineComponent({
        name: Bu,
        props: Ou,
        emits: ['submit'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(),
            r = Ge(a, Pu),
            l = () => {
              const {
                price: o,
                label: n,
                currency: a,
                textAlign: r,
                suffixLabel: l,
                decimalLength: i,
              } = e;
              if ('number' == typeof o) {
                const e = (o / 100).toFixed(+i).split('.'),
                  s = i ? `.${e[1]}` : '';
                return t.createVNode('div', { class: Pu('text'), style: { textAlign: r } }, [
                  t.createVNode('span', null, [n || Du('label')]),
                  t.createVNode('span', { class: Pu('price') }, [
                    a,
                    t.createVNode('span', { class: Pu('price-integer') }, [e[0]]),
                    s,
                  ]),
                  l && t.createVNode('span', { class: Pu('suffix-label') }, [l]),
                ]);
              }
            },
            i = () => {
              var o;
              const { tip: a, tipIcon: r } = e;
              if (n.tip || a)
                return t.createVNode('div', { class: Pu('tip') }, [
                  r && t.createVNode(ht, { class: Pu('tip-icon'), name: r }, null),
                  a && t.createVNode('span', { class: Pu('tip-text') }, [a]),
                  null == (o = n.tip) ? void 0 : o.call(n),
                ]);
            },
            s = () => o('submit'),
            c = () => {
              var o, r;
              return t.createVNode(
                'div',
                { ref: a, class: [Pu(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] },
                [
                  null == (o = n.top) ? void 0 : o.call(n),
                  i(),
                  t.createVNode('div', { class: Pu('bar') }, [
                    null == (r = n.default) ? void 0 : r.call(n),
                    l(),
                    n.button
                      ? n.button()
                      : t.createVNode(
                          St,
                          {
                            round: !0,
                            type: e.buttonType,
                            text: e.buttonText,
                            class: Pu('button', e.buttonType),
                            color: e.buttonColor,
                            loading: e.loading,
                            disabled: e.disabled,
                            onClick: s,
                          },
                          null,
                        ),
                  ]),
                ],
              );
            };
          return () => (e.placeholder ? r(c) : c());
        },
      }),
    ),
    [Au, zu] = Ie('swipe-cell'),
    Eu = {
      name: V(''),
      disabled: Boolean,
      leftWidth: g,
      rightWidth: g,
      beforeClose: Function,
      stopPropagation: Boolean,
    };
  const $u = We(
      t.defineComponent({
        name: Au,
        props: Eu,
        emits: ['open', 'close', 'click'],
        setup(e, { emit: n, slots: a }) {
          let r, l, i;
          const s = t.ref(),
            c = t.ref(),
            d = t.ref(),
            u = t.reactive({ offset: 0, dragging: !1 }),
            p = Lt(),
            m = (e) => (e.value ? P(e).width : 0),
            f = t.computed(() => (o(e.leftWidth) ? +e.leftWidth : m(c))),
            v = t.computed(() => (o(e.rightWidth) ? +e.rightWidth : m(d))),
            h = (t) => {
              (u.offset = 'left' === t ? f.value : -v.value),
                r || ((r = !0), n('open', { name: e.name, position: t }));
            },
            g = (t) => {
              (u.offset = 0), r && ((r = !1), n('close', { name: e.name, position: t }));
            },
            b = (t) => {
              e.disabled || ((i = u.offset), p.start(t));
            },
            y = () => {
              u.dragging &&
                ((u.dragging = !1),
                ((e) => {
                  const t = Math.abs(u.offset),
                    o = r ? 0.85 : 0.15,
                    n = 'left' === e ? f.value : v.value;
                  n && t > n * o ? h(e) : g(e);
                })(u.offset > 0 ? 'left' : 'right'),
                setTimeout(() => {
                  l = !1;
                }, 0));
            },
            w = (t = 'outside') => {
              n('click', t),
                r &&
                  !l &&
                  je(e.beforeClose, { args: [{ name: e.name, position: t }], done: () => g(t) });
            },
            x = (e, t) => (o) => {
              t && o.stopPropagation(), w(e);
            },
            V = (e, o) => {
              const n = a[e];
              if (n)
                return t.createVNode('div', { ref: o, class: zu(e), onClick: x(e, !0) }, [n()]);
            };
          return (
            Qe({ open: h, close: g }),
            W(s, () => w('outside'), { eventName: 'touchstart' }),
            j(
              'touchmove',
              (t) => {
                if (e.disabled) return;
                const { deltaX: o } = p;
                if ((p.move(t), p.isHorizontal())) {
                  (l = !0), (u.dragging = !0);
                  (!r || o.value * i < 0) && le(t, e.stopPropagation),
                    (u.offset = ye(o.value + i, -v.value, f.value));
                }
              },
              { target: s },
            ),
            () => {
              var e;
              const o = {
                transform: `translate3d(${u.offset}px, 0, 0)`,
                transitionDuration: u.dragging ? '0s' : '.6s',
              };
              return t.createVNode(
                'div',
                {
                  ref: s,
                  class: zu(),
                  onClick: x('cell', l),
                  onTouchstartPassive: b,
                  onTouchend: y,
                  onTouchcancel: y,
                },
                [
                  t.createVNode('div', { class: zu('wrapper'), style: o }, [
                    V('left', c),
                    null == (e = a.default) ? void 0 : e.call(a),
                    V('right', d),
                  ]),
                ],
              );
            }
          );
        },
      }),
    ),
    [Lu, Mu] = Ie('tabbar'),
    Fu = {
      route: Boolean,
      fixed: b,
      border: b,
      zIndex: g,
      placeholder: Boolean,
      activeColor: String,
      beforeChange: Function,
      inactiveColor: String,
      modelValue: V(0),
      safeAreaInsetBottom: { type: Boolean, default: null },
    },
    Ru = Symbol(Lu);
  const Hu = We(
      t.defineComponent({
        name: Lu,
        props: Fu,
        emits: ['change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(),
            { linkChildren: r } = A(Ru),
            l = Ge(a, Mu),
            i = () => {
              var t;
              return null != (t = e.safeAreaInsetBottom) ? t : e.fixed;
            },
            s = () => {
              var o;
              const { fixed: r, zIndex: l, border: s } = e;
              return t.createVNode(
                'div',
                {
                  ref: a,
                  role: 'tablist',
                  style: pe(l),
                  class: [Mu({ fixed: r }), { [Me]: s, 'van-safe-area-bottom': i() }],
                },
                [null == (o = n.default) ? void 0 : o.call(n)],
              );
            };
          return (
            r({
              props: e,
              setActive: (t, n) => {
                je(e.beforeChange, {
                  args: [t],
                  done() {
                    o('update:modelValue', t), o('change', t), n();
                  },
                });
              },
            }),
            () => (e.fixed && e.placeholder ? l(s) : s())
          );
        },
      }),
    ),
    [ju, Wu] = Ie('tabbar-item'),
    Uu = d({}, et, {
      dot: Boolean,
      icon: String,
      name: g,
      badge: g,
      badgeProps: Object,
      iconPrefix: String,
    });
  const qu = We(
      t.defineComponent({
        name: ju,
        props: Uu,
        emits: ['click'],
        setup(e, { emit: o, slots: n }) {
          const r = ot(),
            l = t.getCurrentInstance().proxy,
            { parent: i, index: s } = D(Ru);
          if (!i) return;
          const c = t.computed(() => {
              var t;
              const { route: o, modelValue: n } = i.props;
              if (o && '$route' in l) {
                const { $route: t } = l,
                  { to: o } = e,
                  n = a(o) ? o : { path: o };
                return !!t.matched.find((e) => {
                  const t = 'path' in n && n.path === e.path,
                    o = 'name' in n && n.name === e.name;
                  return t || o;
                });
              }
              return (null != (t = e.name) ? t : s.value) === n;
            }),
            d = (t) => {
              var n;
              c.value || i.setActive(null != (n = e.name) ? n : s.value, r), o('click', t);
            },
            u = () =>
              n.icon
                ? n.icon({ active: c.value })
                : e.icon
                ? t.createVNode(ht, { name: e.icon, classPrefix: e.iconPrefix }, null)
                : void 0;
          return () => {
            var o;
            const { dot: a, badge: r } = e,
              { activeColor: l, inactiveColor: s } = i.props,
              p = c.value ? l : s;
            return t.createVNode(
              'div',
              {
                role: 'tab',
                class: Wu({ active: c.value }),
                style: { color: p },
                tabindex: 0,
                'aria-selected': c.value,
                onClick: d,
              },
              [
                t.createVNode(
                  lt,
                  t.mergeProps({ dot: a, class: Wu('icon'), content: r }, e.badgeProps),
                  { default: u },
                ),
                t.createVNode('div', { class: Wu('text') }, [
                  null == (o = n.default) ? void 0 : o.call(n, { active: c.value }),
                ]),
              ],
            );
          };
        },
      }),
    ),
    [Yu] = Ie('time-picker'),
    Gu = d({}, ur, {
      minHour: V(0),
      maxHour: V(23),
      minMinute: V(0),
      maxMinute: V(59),
      minSecond: V(0),
      maxSecond: V(59),
      columnsType: { type: Array, default: () => ['hour', 'minute'] },
    });
  const Xu = We(
      t.defineComponent({
        name: Yu,
        props: Gu,
        emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
        setup(e, { emit: o, slots: n }) {
          const a = t.ref(e.modelValue),
            r = t.computed(() =>
              e.columnsType.map((t) => {
                const { filter: o, formatter: n } = e;
                switch (t) {
                  case 'hour':
                    return fr(+e.minHour, +e.maxHour, t, n, o);
                  case 'minute':
                    return fr(+e.minMinute, +e.maxMinute, t, n, o);
                  case 'second':
                    return fr(+e.minSecond, +e.maxSecond, t, n, o);
                  default:
                    return [];
                }
              }),
            );
          t.watch(a, (t) => {
            f(t, e.modelValue) || o('update:modelValue', t);
          }),
            t.watch(
              () => e.modelValue,
              (e) => {
                (e = vr(e, r.value)), f(e, a.value) || (a.value = e);
              },
              { immediate: !0 },
            );
          const l = (...e) => o('change', ...e),
            i = (...e) => o('cancel', ...e),
            s = (...e) => o('confirm', ...e);
          return () =>
            t.createVNode(
              cn,
              t.mergeProps(
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': (e) => (a.value = e),
                  columns: r.value,
                  onChange: l,
                  onCancel: i,
                  onConfirm: s,
                },
                m(e, pr),
              ),
              n,
            );
        },
      }),
    ),
    [Zu, Ku] = Ie('tree-select'),
    _u = {
      max: V(1 / 0),
      items: w(),
      height: V(300),
      selectedIcon: N('success'),
      mainActiveIndex: V(0),
      activeId: { type: [Number, String, Array], default: 0 },
    };
  const Ju = We(
      t.defineComponent({
        name: Zu,
        props: _u,
        emits: ['clickNav', 'clickItem', 'update:activeId', 'update:mainActiveIndex'],
        setup(e, { emit: o, slots: n }) {
          const a = (t) => (Array.isArray(e.activeId) ? e.activeId.includes(t) : e.activeId === t),
            r = (n) =>
              t.createVNode(
                'div',
                {
                  key: n.id,
                  class: ['van-ellipsis', Ku('item', { active: a(n.id), disabled: n.disabled })],
                  onClick: () => {
                    if (n.disabled) return;
                    let t;
                    if (Array.isArray(e.activeId)) {
                      t = e.activeId.slice();
                      const o = t.indexOf(n.id);
                      -1 !== o ? t.splice(o, 1) : t.length < e.max && t.push(n.id);
                    } else t = n.id;
                    o('update:activeId', t), o('clickItem', n);
                  },
                },
                [
                  n.text,
                  a(n.id) &&
                    t.createVNode(ht, { name: e.selectedIcon, class: Ku('selected') }, null),
                ],
              ),
            l = (e) => {
              o('update:mainActiveIndex', e);
            },
            i = (e) => o('clickNav', e),
            s = () => {
              const o = e.items.map((e) =>
                t.createVNode(
                  zd,
                  {
                    dot: e.dot,
                    title: e.text,
                    badge: e.badge,
                    class: [Ku('nav-item'), e.className],
                    disabled: e.disabled,
                    onClick: i,
                  },
                  null,
                ),
              );
              return t.createVNode(
                Dd,
                { class: Ku('nav'), modelValue: e.mainActiveIndex, onChange: l },
                { default: () => [o] },
              );
            },
            c = () => {
              if (n.content) return n.content();
              const t = e.items[+e.mainActiveIndex] || {};
              return t.children ? t.children.map(r) : void 0;
            };
          return () =>
            t.createVNode('div', { class: Ku(), style: { height: de(e.height) } }, [
              s(),
              t.createVNode('div', { class: Ku('content') }, [c()]),
            ]);
        },
      }),
    ),
    [Qu, ep, tp] = Ie('uploader');
  function op(e, t) {
    return new Promise((o) => {
      if ('file' === t) return void o();
      const n = new FileReader();
      (n.onload = (e) => {
        o(e.target.result);
      }),
        'dataUrl' === t ? n.readAsDataURL(e) : 'text' === t && n.readAsText(e);
    });
  }
  function np(e, t) {
    return v(e).some((e) => !!e.file && (n(t) ? t(e.file) : e.file.size > t));
  }
  const ap = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  function rp(e) {
    return (
      !!e.isImage ||
      (e.file && e.file.type
        ? 0 === e.file.type.indexOf('image')
        : e.url
        ? ((t = e.url), ap.test(t))
        : 'string' == typeof e.content && 0 === e.content.indexOf('data:image'))
    );
    var t;
  }
  var lp = t.defineComponent({
    props: {
      name: g,
      item: y(Object),
      index: Number,
      imageFit: String,
      lazyLoad: Boolean,
      deletable: Boolean,
      previewSize: [Number, String, Array],
      beforeDelete: Function,
    },
    emits: ['delete', 'preview'],
    setup(e, { emit: n, slots: a }) {
      const r = () => {
          const { status: n, message: a } = e.item;
          if ('uploading' === n || 'failed' === n) {
            const e =
                'failed' === n
                  ? t.createVNode(ht, { name: 'close', class: ep('mask-icon') }, null)
                  : t.createVNode(Vt, { class: ep('loading') }, null),
              r = o(a) && '' !== a;
            return t.createVNode('div', { class: ep('mask') }, [
              e,
              r && t.createVNode('div', { class: ep('mask-message') }, [a]),
            ]);
          }
        },
        l = (t) => {
          const { name: o, item: a, index: r, beforeDelete: l } = e;
          t.stopPropagation(), je(l, { args: [a, { name: o, index: r }], done: () => n('delete') });
        },
        i = () => n('preview'),
        s = () => {
          if (e.deletable && 'uploading' !== e.item.status) {
            const e = a['preview-delete'];
            return t.createVNode(
              'div',
              {
                role: 'button',
                class: ep('preview-delete', { shadow: !e }),
                tabindex: 0,
                'aria-label': tp('delete'),
                onClick: l,
              },
              [
                e
                  ? e()
                  : t.createVNode(ht, { name: 'cross', class: ep('preview-delete-icon') }, null),
              ],
            );
          }
        },
        c = () => {
          if (a['preview-cover']) {
            const { index: o, item: n } = e;
            return t.createVNode('div', { class: ep('preview-cover') }, [
              a['preview-cover'](d({ index: o }, n)),
            ]);
          }
        },
        u = () => {
          const { item: o, lazyLoad: n, imageFit: a, previewSize: r } = e;
          return rp(o)
            ? t.createVNode(
                Br,
                {
                  fit: a,
                  src: o.content || o.url,
                  class: ep('preview-image'),
                  width: Array.isArray(r) ? r[0] : r,
                  height: Array.isArray(r) ? r[1] : r,
                  lazyLoad: n,
                  onClick: i,
                },
                { default: c },
              )
            : t.createVNode('div', { class: ep('file'), style: ue(e.previewSize) }, [
                t.createVNode(ht, { class: ep('file-icon'), name: 'description' }, null),
                t.createVNode('div', { class: [ep('file-name'), 'van-ellipsis'] }, [
                  o.file ? o.file.name : o.url,
                ]),
                c(),
              ]);
        };
      return () => t.createVNode('div', { class: ep('preview') }, [u(), r(), s()]);
    },
  });
  const ip = {
    name: V(''),
    accept: N('image/*'),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: V(1 / 0),
    imageFit: N('cover'),
    resultType: N('dataUrl'),
    uploadIcon: N('photograph'),
    uploadText: String,
    deletable: b,
    afterRead: Function,
    showUpload: b,
    modelValue: w(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: b,
    previewOptions: Object,
    previewFullImage: b,
    maxSize: { type: [Number, String, Function], default: 1 / 0 },
  };
  const sp = We(
    t.defineComponent({
      name: Qu,
      props: ip,
      emits: [
        'delete',
        'oversize',
        'clickUpload',
        'closePreview',
        'clickPreview',
        'update:modelValue',
      ],
      setup(e, { emit: o, slots: n }) {
        const a = t.ref(),
          l = [],
          i = (t = e.modelValue.length) => ({ name: e.name, index: t }),
          s = () => {
            a.value && (a.value.value = '');
          },
          c = (n) => {
            if ((s(), np(n, e.maxSize))) {
              if (!Array.isArray(n)) return void o('oversize', n, i());
              {
                const t = (function (e, t) {
                  const o = [],
                    n = [];
                  return (
                    e.forEach((e) => {
                      np(e, t) ? n.push(e) : o.push(e);
                    }),
                    { valid: o, invalid: n }
                  );
                })(n, e.maxSize);
                if (((n = t.valid), o('oversize', t.invalid, i()), !n.length)) return;
              }
            }
            (n = t.reactive(n)),
              o('update:modelValue', [...e.modelValue, ...v(n)]),
              e.afterRead && e.afterRead(n, i());
          },
          u = (t) => {
            const { maxCount: o, modelValue: n, resultType: a } = e;
            if (Array.isArray(t)) {
              const e = +o - n.length;
              t.length > e && (t = t.slice(0, e)),
                Promise.all(t.map((e) => op(e, a))).then((e) => {
                  const o = t.map((t, o) => {
                    const n = { file: t, status: '', message: '' };
                    return e[o] && (n.content = e[o]), n;
                  });
                  c(o);
                });
            } else
              op(t, a).then((e) => {
                const o = { file: t, status: '', message: '' };
                e && (o.content = e), c(o);
              });
          },
          p = (t) => {
            const { files: o } = t.target;
            if (e.disabled || !o || !o.length) return;
            const n = 1 === o.length ? o[0] : [].slice.call(o);
            if (e.beforeRead) {
              const t = e.beforeRead(n, i());
              if (!t) return void s();
              if (r(t))
                return void t
                  .then((e) => {
                    u(e || n);
                  })
                  .catch(s);
            }
            u(n);
          };
        let f;
        const h = () => o('closePreview'),
          g = (a, r) => {
            const s = ['imageFit', 'deletable', 'previewSize', 'beforeDelete'],
              c = d(m(e, s), m(a, s, !0));
            return t.createVNode(
              lp,
              t.mergeProps(
                {
                  item: a,
                  index: r,
                  onClick: () => o('clickPreview', a, i(r)),
                  onDelete: () =>
                    ((t, n) => {
                      const a = e.modelValue.slice(0);
                      a.splice(n, 1), o('update:modelValue', a), o('delete', t, i(n));
                    })(a, r),
                  onPreview: () =>
                    ((t) => {
                      if (e.previewFullImage) {
                        const o = e.modelValue.filter(rp),
                          n = o
                            .map(
                              (e) => (
                                e.file &&
                                  !e.url &&
                                  'failed' !== e.status &&
                                  ((e.url = URL.createObjectURL(e.file)), l.push(e.url)),
                                e.url
                              ),
                            )
                            .filter(Boolean);
                        f = rs(
                          d(
                            { images: n, startPosition: o.indexOf(t), onClose: h },
                            e.previewOptions,
                          ),
                        );
                      }
                    })(a),
                },
                m(e, ['name', 'lazyLoad']),
                c,
              ),
              m(n, ['preview-cover', 'preview-delete']),
            );
          },
          b = () => {
            if (e.previewImage) return e.modelValue.map(g);
          },
          y = (e) => o('clickUpload', e),
          w = () => {
            if (e.modelValue.length >= e.maxCount) return;
            const o = e.readonly
              ? null
              : t.createVNode(
                  'input',
                  {
                    ref: a,
                    type: 'file',
                    class: ep('input'),
                    accept: e.accept,
                    capture: e.capture,
                    multiple: e.multiple,
                    disabled: e.disabled,
                    onChange: p,
                  },
                  null,
                );
            return n.default
              ? t.createVNode('div', { class: ep('input-wrapper'), onClick: y }, [n.default(), o])
              : t.withDirectives(
                  t.createVNode(
                    'div',
                    {
                      class: ep('upload', { readonly: e.readonly }),
                      style: ue(e.previewSize),
                      onClick: y,
                    },
                    [
                      t.createVNode(ht, { name: e.uploadIcon, class: ep('upload-icon') }, null),
                      e.uploadText &&
                        t.createVNode('span', { class: ep('upload-text') }, [e.uploadText]),
                      o,
                    ],
                  ),
                  [[t.vShow, e.showUpload]],
                );
          };
        return (
          t.onBeforeUnmount(() => {
            l.forEach((e) => URL.revokeObjectURL(e));
          }),
          Qe({
            chooseFile: () => {
              a.value && !e.disabled && a.value.click();
            },
            closeImagePreview: () => {
              f && f.close();
            },
          }),
          _(() => e.modelValue),
          () =>
            t.createVNode('div', { class: ep() }, [
              t.createVNode('div', { class: ep('wrapper', { disabled: e.disabled }) }, [b(), w()]),
            ])
        );
      },
    }),
  );
  class cp {
    constructor({
      el: e,
      src: t,
      error: o,
      loading: n,
      bindType: a,
      $parent: r,
      options: l,
      cors: i,
      elRenderer: s,
      imageCache: c,
    }) {
      (this.el = e),
        (this.src = t),
        (this.error = o),
        (this.loading = n),
        (this.bindType = a),
        (this.attempt = 0),
        (this.cors = i),
        (this.naturalHeight = 0),
        (this.naturalWidth = 0),
        (this.options = l),
        (this.$parent = r),
        (this.elRenderer = s),
        (this.imageCache = c),
        (this.performanceData = { loadStart: 0, loadEnd: 0 }),
        this.filter(),
        this.initState(),
        this.render('loading', !1);
    }
    initState() {
      'dataset' in this.el
        ? (this.el.dataset.src = this.src)
        : this.el.setAttribute('data-src', this.src),
        (this.state = { loading: !1, error: !1, loaded: !1, rendered: !1 });
    }
    record(e) {
      this.performanceData[e] = Date.now();
    }
    update({ src: e, loading: t, error: o }) {
      const n = this.src;
      (this.src = e),
        (this.loading = t),
        (this.error = o),
        this.filter(),
        n !== this.src && ((this.attempt = 0), this.initState());
    }
    checkInView() {
      const e = P(this.el);
      return (
        e.top < window.innerHeight * this.options.preLoad &&
        e.bottom > this.options.preLoadTop &&
        e.left < window.innerWidth * this.options.preLoad &&
        e.right > 0
      );
    }
    filter() {
      Object.keys(this.options.filter).forEach((e) => {
        this.options.filter[e](this, this.options);
      });
    }
    renderLoading(e) {
      (this.state.loading = !0),
        Xa(
          { src: this.loading, cors: this.cors },
          () => {
            this.render('loading', !1), (this.state.loading = !1), e();
          },
          () => {
            e(), (this.state.loading = !1);
          },
        );
    }
    load(e = c) {
      if (this.attempt > this.options.attempt - 1 && this.state.error) e();
      else if (!this.state.rendered || !this.state.loaded)
        return this.imageCache.has(this.src)
          ? ((this.state.loaded = !0), this.render('loaded', !0), (this.state.rendered = !0), e())
          : void this.renderLoading(() => {
              var t, o;
              this.attempt++,
                null == (o = (t = this.options.adapter).beforeLoad) ||
                  o.call(t, this, this.options),
                this.record('loadStart'),
                Xa(
                  { src: this.src, cors: this.cors },
                  (t) => {
                    (this.naturalHeight = t.naturalHeight),
                      (this.naturalWidth = t.naturalWidth),
                      (this.state.loaded = !0),
                      (this.state.error = !1),
                      this.record('loadEnd'),
                      this.render('loaded', !1),
                      (this.state.rendered = !0),
                      this.imageCache.add(this.src),
                      e();
                  },
                  (e) => {
                    !this.options.silent && console.error(e),
                      (this.state.error = !0),
                      (this.state.loaded = !1),
                      this.render('error', !1);
                  },
                );
            });
    }
    render(e, t) {
      this.elRenderer(this, e, t);
    }
    performance() {
      let e = 'loading',
        t = 0;
      return (
        this.state.loaded &&
          ((e = 'loaded'),
          (t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3)),
        this.state.error && (e = 'error'),
        { src: this.src, state: e, time: t }
      );
    }
    $destroy() {
      (this.el = null),
        (this.src = null),
        (this.error = null),
        (this.loading = null),
        (this.bindType = null),
        (this.attempt = 0);
    }
  }
  const dp = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    up = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'],
    pp = { rootMargin: '0px', threshold: 0 };
  var mp = (e) => ({
    props: { tag: { type: String, default: 'div' } },
    emits: ['show'],
    render() {
      return t.h(this.tag, this.show && this.$slots.default ? this.$slots.default() : null);
    },
    data: () => ({ el: null, state: { loaded: !1 }, show: !1 }),
    mounted() {
      (this.el = this.$el), e.addLazyBox(this), e.lazyLoadHandler();
    },
    beforeUnmount() {
      e.removeComponent(this);
    },
    methods: {
      checkInView() {
        const t = P(this.$el);
        return (
          C &&
          t.top < window.innerHeight * e.options.preLoad &&
          t.bottom > 0 &&
          t.left < window.innerWidth * e.options.preLoad &&
          t.right > 0
        );
      },
      load() {
        (this.show = !0), (this.state.loaded = !0), this.$emit('show', this);
      },
      destroy() {
        return this.$destroy;
      },
    },
  });
  const fp = { selector: 'img' };
  class vp {
    constructor({ el: e, binding: t, vnode: o, lazy: n }) {
      (this.el = null),
        (this.vnode = o),
        (this.binding = t),
        (this.options = {}),
        (this.lazy = n),
        (this.queue = []),
        this.update({ el: e, binding: t });
    }
    update({ el: e, binding: t }) {
      (this.el = e), (this.options = Object.assign({}, fp, t.value));
      this.getImgs().forEach((e) => {
        this.lazy.add(
          e,
          Object.assign({}, this.binding, {
            value: {
              src: 'dataset' in e ? e.dataset.src : e.getAttribute('data-src'),
              error:
                ('dataset' in e ? e.dataset.error : e.getAttribute('data-error')) ||
                this.options.error,
              loading:
                ('dataset' in e ? e.dataset.loading : e.getAttribute('data-loading')) ||
                this.options.loading,
            },
          }),
          this.vnode,
        );
      });
    }
    getImgs() {
      return Array.from(this.el.querySelectorAll(this.options.selector));
    }
    clear() {
      this.getImgs().forEach((e) => this.lazy.remove(e)),
        (this.vnode = null),
        (this.binding = null),
        (this.lazy = null);
    }
  }
  class hp {
    constructor({ lazy: e }) {
      (this.lazy = e), (this.queue = []);
    }
    bind(e, t, o) {
      const n = new vp({ el: e, binding: t, vnode: o, lazy: this.lazy });
      this.queue.push(n);
    }
    update(e, t, o) {
      const n = this.queue.find((t) => t.el === e);
      n && n.update({ el: e, binding: t, vnode: o });
    }
    unbind(e) {
      const t = this.queue.find((t) => t.el === e);
      t && (t.clear(), Ha(this.queue, t));
    }
  }
  var gp = (e) => ({
    props: { src: [String, Object], tag: { type: String, default: 'img' } },
    render() {
      var e, o;
      return t.h(
        this.tag,
        { src: this.renderSrc },
        null == (o = (e = this.$slots).default) ? void 0 : o.call(e),
      );
    },
    data: () => ({
      el: null,
      options: { src: '', error: '', loading: '', attempt: e.options.attempt },
      state: { loaded: !1, error: !1, attempt: 0 },
      renderSrc: '',
    }),
    watch: {
      src() {
        this.init(), e.addLazyBox(this), e.lazyLoadHandler();
      },
    },
    created() {
      this.init(), (this.renderSrc = this.options.loading);
    },
    mounted() {
      (this.el = this.$el), e.addLazyBox(this), e.lazyLoadHandler();
    },
    beforeUnmount() {
      e.removeComponent(this);
    },
    methods: {
      init() {
        const { src: t, loading: o, error: n } = e.valueFormatter(this.src);
        (this.state.loaded = !1),
          (this.options.src = t),
          (this.options.error = n),
          (this.options.loading = o),
          (this.renderSrc = this.options.loading);
      },
      checkInView() {
        const t = P(this.$el);
        return (
          t.top < window.innerHeight * e.options.preLoad &&
          t.bottom > 0 &&
          t.left < window.innerWidth * e.options.preLoad &&
          t.right > 0
        );
      },
      load(e = c) {
        if (this.state.attempt > this.options.attempt - 1 && this.state.error) return void e();
        const { src: t } = this.options;
        Xa(
          { src: t },
          ({ src: e }) => {
            (this.renderSrc = e), (this.state.loaded = !0);
          },
          () => {
            this.state.attempt++, (this.renderSrc = this.options.error), (this.state.error = !0);
          },
        );
      },
    },
  });
  const bp = {
      install(e, o = {}) {
        const n = class {
            constructor({
              preLoad: e,
              error: t,
              throttleWait: o,
              preLoadTop: n,
              dispatchEvent: a,
              loading: r,
              attempt: l,
              silent: i = !0,
              scale: s,
              listenEvents: c,
              filter: d,
              adapter: u,
              observer: p,
              observerOptions: m,
            }) {
              (this.mode = Fa),
                (this.listeners = []),
                (this.targetIndex = 0),
                (this.targets = []),
                (this.options = {
                  silent: i,
                  dispatchEvent: !!a,
                  throttleWait: o || 200,
                  preLoad: e || 1.3,
                  preLoadTop: n || 0,
                  error: t || dp,
                  loading: r || dp,
                  attempt: l || 3,
                  scale: s || Wa(s),
                  ListenEvents: c || up,
                  supportWebp: Ua(),
                  filter: d || {},
                  adapter: u || {},
                  observer: !!p,
                  observerOptions: m || pp,
                }),
                this.initEvent(),
                (this.imageCache = new Za({ max: 200 })),
                (this.lazyLoadHandler = qa(
                  this.lazyLoadHandler.bind(this),
                  this.options.throttleWait,
                )),
                this.setMode(this.options.observer ? Ra : Fa);
            }
            config(e = {}) {
              Object.assign(this.options, e);
            }
            performance() {
              return this.listeners.map((e) => e.performance());
            }
            addLazyBox(e) {
              this.listeners.push(e),
                C &&
                  (this.addListenerTarget(window),
                  this.observer && this.observer.observe(e.el),
                  e.$el && e.$el.parentNode && this.addListenerTarget(e.$el.parentNode));
            }
            add(e, o, n) {
              if (this.listeners.some((t) => t.el === e))
                return this.update(e, o), t.nextTick(this.lazyLoadHandler);
              const a = this.valueFormatter(o.value);
              let { src: r } = a;
              t.nextTick(() => {
                (r = ja(e, this.options.scale) || r), this.observer && this.observer.observe(e);
                const l = Object.keys(o.modifiers)[0];
                let i;
                l && ((i = n.context.$refs[l]), (i = i ? i.$el || i : document.getElementById(l))),
                  i || (i = X(e));
                const s = new cp({
                  bindType: o.arg,
                  $parent: i,
                  el: e,
                  src: r,
                  loading: a.loading,
                  error: a.error,
                  cors: a.cors,
                  elRenderer: this.elRenderer.bind(this),
                  options: this.options,
                  imageCache: this.imageCache,
                });
                this.listeners.push(s),
                  C && (this.addListenerTarget(window), this.addListenerTarget(i)),
                  this.lazyLoadHandler(),
                  t.nextTick(() => this.lazyLoadHandler());
              });
            }
            update(e, o, n) {
              const a = this.valueFormatter(o.value);
              let { src: r } = a;
              r = ja(e, this.options.scale) || r;
              const l = this.listeners.find((t) => t.el === e);
              l ? l.update({ src: r, error: a.error, loading: a.loading }) : this.add(e, o, n),
                this.observer && (this.observer.unobserve(e), this.observer.observe(e)),
                this.lazyLoadHandler(),
                t.nextTick(() => this.lazyLoadHandler());
            }
            remove(e) {
              if (!e) return;
              this.observer && this.observer.unobserve(e);
              const t = this.listeners.find((t) => t.el === e);
              t &&
                (this.removeListenerTarget(t.$parent),
                this.removeListenerTarget(window),
                Ha(this.listeners, t),
                t.$destroy());
            }
            removeComponent(e) {
              e &&
                (Ha(this.listeners, e),
                this.observer && this.observer.unobserve(e.el),
                e.$parent && e.$el.parentNode && this.removeListenerTarget(e.$el.parentNode),
                this.removeListenerTarget(window));
            }
            setMode(e) {
              Ma || e !== Ra || (e = Fa),
                (this.mode = e),
                e === Fa
                  ? (this.observer &&
                      (this.listeners.forEach((e) => {
                        this.observer.unobserve(e.el);
                      }),
                      (this.observer = null)),
                    this.targets.forEach((e) => {
                      this.initListen(e.el, !0);
                    }))
                  : (this.targets.forEach((e) => {
                      this.initListen(e.el, !1);
                    }),
                    this.initIntersectionObserver());
            }
            addListenerTarget(e) {
              if (!e) return;
              let t = this.targets.find((t) => t.el === e);
              return (
                t
                  ? t.childrenCount++
                  : ((t = { el: e, id: ++this.targetIndex, childrenCount: 1, listened: !0 }),
                    this.mode === Fa && this.initListen(t.el, !0),
                    this.targets.push(t)),
                this.targetIndex
              );
            }
            removeListenerTarget(e) {
              this.targets.forEach((t, o) => {
                t.el === e &&
                  (t.childrenCount--,
                  t.childrenCount ||
                    (this.initListen(t.el, !1), this.targets.splice(o, 1), (t = null)));
              });
            }
            initListen(e, t) {
              this.options.ListenEvents.forEach((o) => (t ? Ya : Ga)(e, o, this.lazyLoadHandler));
            }
            initEvent() {
              (this.Event = { listeners: { loading: [], loaded: [], error: [] } }),
                (this.$on = (e, t) => {
                  this.Event.listeners[e] || (this.Event.listeners[e] = []),
                    this.Event.listeners[e].push(t);
                }),
                (this.$once = (e, t) => {
                  const o = (...n) => {
                    this.$off(e, o), t.apply(this, n);
                  };
                  this.$on(e, o);
                }),
                (this.$off = (e, t) => {
                  if (t) Ha(this.Event.listeners[e], t);
                  else {
                    if (!this.Event.listeners[e]) return;
                    this.Event.listeners[e].length = 0;
                  }
                }),
                (this.$emit = (e, t, o) => {
                  this.Event.listeners[e] && this.Event.listeners[e].forEach((e) => e(t, o));
                });
            }
            lazyLoadHandler() {
              const e = [];
              this.listeners.forEach((t) => {
                (t.el && t.el.parentNode) || e.push(t), t.checkInView() && t.load();
              }),
                e.forEach((e) => {
                  Ha(this.listeners, e), e.$destroy();
                });
            }
            initIntersectionObserver() {
              Ma &&
                ((this.observer = new IntersectionObserver(
                  this.observerHandler.bind(this),
                  this.options.observerOptions,
                )),
                this.listeners.length &&
                  this.listeners.forEach((e) => {
                    this.observer.observe(e.el);
                  }));
            }
            observerHandler(e) {
              e.forEach((e) => {
                e.isIntersecting &&
                  this.listeners.forEach((t) => {
                    if (t.el === e.target) {
                      if (t.state.loaded) return this.observer.unobserve(t.el);
                      t.load();
                    }
                  });
              });
            }
            elRenderer(e, t, o) {
              if (!e.el) return;
              const { el: n, bindType: a } = e;
              let r;
              switch (t) {
                case 'loading':
                  r = e.loading;
                  break;
                case 'error':
                  r = e.error;
                  break;
                default:
                  ({ src: r } = e);
              }
              if (
                (a
                  ? (n.style[a] = 'url("' + r + '")')
                  : n.getAttribute('src') !== r && n.setAttribute('src', r),
                n.setAttribute('lazy', t),
                this.$emit(t, e, o),
                this.options.adapter[t] && this.options.adapter[t](e, this.options),
                this.options.dispatchEvent)
              ) {
                const o = new CustomEvent(t, { detail: e });
                n.dispatchEvent(o);
              }
            }
            valueFormatter(e) {
              let t = e,
                { loading: o, error: n } = this.options;
              return (
                a(e) &&
                  (({ src: t } = e),
                  (o = e.loading || this.options.loading),
                  (n = e.error || this.options.error)),
                { src: t, loading: o, error: n }
              );
            }
          },
          r = new n(o),
          l = new hp({ lazy: r });
        (e.config.globalProperties.$Lazyload = r),
          o.lazyComponent && e.component('LazyComponent', mp(r)),
          o.lazyImage && e.component('LazyImage', gp(r)),
          e.directive('lazy', {
            beforeMount: r.add.bind(r),
            updated: r.update.bind(r),
            unmounted: r.remove.bind(r),
          }),
          e.directive('lazy-container', {
            beforeMount: l.bind.bind(l),
            updated: l.update.bind(l),
            unmounted: l.unbind.bind(l),
          });
      },
    },
    yp = '4.0.8';
  function wp(e) {
    [
      Je,
      Dt,
      zt,
      Qt,
      fa,
      La,
      mn,
      Qa,
      lt,
      St,
      Cr,
      Ir,
      Lr,
      bn,
      Hr,
      Kr,
      _r,
      nl,
      pl,
      gl,
      Vl,
      Nl,
      Bl,
      zl,
      Fl,
      Wl,
      Zl,
      ti,
      di,
      fi,
      ki,
      Pi,
      Mi,
      Fi,
      ri,
      An,
      Vn,
      Ui,
      Xi,
      ht,
      Br,
      ls,
      vs,
      hs,
      xs,
      Vt,
      Te,
      ks,
      Ps,
      Ms,
      Gs,
      Ut,
      Qs,
      nc,
      cn,
      ac,
      Jc,
      Xt,
      od,
      sd,
      Pa,
      ya,
      pd,
      md,
      bd,
      kd,
      Dd,
      zd,
      eu,
      Wd,
      au,
      Zd,
      Md,
      su,
      mu,
      xu,
      Su,
      Tu,
      No,
      Iu,
      Oo,
      $u,
      Wo,
      aa,
      Go,
      Hu,
      qu,
      Xo,
      Na,
      Xu,
      ea,
      Ju,
      sp,
    ].forEach((t) => {
      t.install ? e.use(t) : t.name && e.component(t.name, t);
    });
  }
  var xp = { install: wp, version: yp };
  (e.ActionBar = Je),
    (e.ActionBarButton = Dt),
    (e.ActionBarIcon = zt),
    (e.ActionSheet = Qt),
    (e.AddressEdit = fa),
    (e.AddressList = La),
    (e.Area = mn),
    (e.BackTop = Qa),
    (e.Badge = lt),
    (e.Button = St),
    (e.Calendar = Cr),
    (e.Card = Ir),
    (e.Cascader = Lr),
    (e.Cell = bn),
    (e.CellGroup = Hr),
    (e.Checkbox = Kr),
    (e.CheckboxGroup = _r),
    (e.Circle = nl),
    (e.Col = pl),
    (e.Collapse = gl),
    (e.CollapseItem = Vl),
    (e.ConfigProvider = Nl),
    (e.ContactCard = Bl),
    (e.ContactEdit = zl),
    (e.ContactList = Fl),
    (e.CountDown = Wl),
    (e.Coupon = Zl),
    (e.CouponCell = ti),
    (e.CouponList = di),
    (e.DEFAULT_ROW_WIDTH = qd),
    (e.DatePicker = fi),
    (e.Dialog = ki),
    (e.Divider = Pi),
    (e.DropdownItem = Mi),
    (e.DropdownMenu = Fi),
    (e.Empty = ri),
    (e.Field = An),
    (e.Form = Vn),
    (e.Grid = Ui),
    (e.GridItem = Xi),
    (e.Icon = ht),
    (e.Image = Br),
    (e.ImagePreview = ls),
    (e.IndexAnchor = vs),
    (e.IndexBar = hs),
    (e.Lazyload = bp),
    (e.List = xs),
    (e.Loading = Vt),
    (e.Locale = Te),
    (e.NavBar = ks),
    (e.NoticeBar = Ps),
    (e.Notify = Ms),
    (e.NumberKeyboard = Gs),
    (e.Overlay = Ut),
    (e.Pagination = Qs),
    (e.PasswordInput = nc),
    (e.Picker = cn),
    (e.PickerGroup = ac),
    (e.Popover = Jc),
    (e.Popup = Xt),
    (e.Progress = od),
    (e.PullRefresh = sd),
    (e.Radio = Pa),
    (e.RadioGroup = ya),
    (e.Rate = pd),
    (e.Row = md),
    (e.Search = bd),
    (e.ShareSheet = kd),
    (e.Sidebar = Dd),
    (e.SidebarItem = zd),
    (e.Skeleton = eu),
    (e.SkeletonAvatar = Wd),
    (e.SkeletonImage = au),
    (e.SkeletonParagraph = Zd),
    (e.SkeletonTitle = Md),
    (e.Slider = su),
    (e.Space = mu),
    (e.Step = xu),
    (e.Stepper = Su),
    (e.Steps = Tu),
    (e.Sticky = No),
    (e.SubmitBar = Iu),
    (e.Swipe = Oo),
    (e.SwipeCell = $u),
    (e.SwipeItem = Wo),
    (e.Switch = aa),
    (e.Tab = Go),
    (e.Tabbar = Hu),
    (e.TabbarItem = qu),
    (e.Tabs = Xo),
    (e.Tag = Na),
    (e.TimePicker = Xu),
    (e.Toast = ea),
    (e.TreeSelect = Ju),
    (e.Uploader = sp),
    (e.actionBarButtonProps = Pt),
    (e.actionBarIconProps = At),
    (e.actionBarProps = _e),
    (e.actionSheetProps = _t),
    (e.addressEditProps = ma),
    (e.addressListProps = $a),
    (e.allowMultipleToast = (e = !0) => {
      Un = e;
    }),
    (e.areaProps = pn),
    (e.backTopProps = Ja),
    (e.badgeProps = rt),
    (e.buttonProps = kt),
    (e.calendarProps = Nr),
    (e.cardProps = Or),
    (e.cascaderProps = $r),
    (e.cellGroupProps = Rr),
    (e.cellProps = gn),
    (e.checkboxGroupProps = Ur),
    (e.checkboxProps = Zr),
    (e.circleProps = ol),
    (e.closeDialog = () => {
      xi && xi.toggle(!1);
    }),
    (e.closeNotify = Ls),
    (e.closeToast = (e) => {
      var t;
      Wn.length &&
        (e
          ? (Wn.forEach((e) => {
              e.close();
            }),
            (Wn = []))
          : Un
          ? null == (t = Wn.shift()) || t.close()
          : Wn[0].close());
    }),
    (e.colProps = ul),
    (e.collapseItemProps = xl),
    (e.collapseProps = hl),
    (e.configProviderProps = ut),
    (e.contactCardProps = Tl),
    (e.contactEditProps = Al),
    (e.contactListProps = Ml),
    (e.countDownProps = jl),
    (e.couponCellProps = Ql),
    (e.couponListProps = ci),
    (e.datePickerProps = mi),
    (e.default = xp),
    (e.dialogProps = bi),
    (e.dividerProps = Bi),
    (e.dropdownItemProps = Li),
    (e.dropdownMenuProps = Ii),
    (e.emptyProps = ai),
    (e.fieldProps = In),
    (e.formProps = xn),
    (e.gridItemProps = Gi),
    (e.gridProps = ji),
    (e.iconProps = vt),
    (e.imagePreviewProps = ts),
    (e.imageProps = Tr),
    (e.indexAnchorProps = fs),
    (e.indexBarProps = cs),
    (e.install = wp),
    (e.listProps = ws),
    (e.loadingProps = xt),
    (e.navBarProps = Cs),
    (e.noticeBarProps = Bs),
    (e.notifyProps = Is),
    (e.numberKeyboardProps = Ys),
    (e.overlayProps = Wt),
    (e.paginationProps = Js),
    (e.passwordInputProps = oc),
    (e.pickerGroupProps = Jo),
    (e.pickerProps = tn),
    (e.popoverProps = _c),
    (e.popupProps = qt),
    (e.progressProps = td),
    (e.pullRefreshProps = id),
    (e.radioGroupProps = ga),
    (e.radioProps = Sa),
    (e.rateProps = ud),
    (e.resetDialogDefaultOptions = () => {
      Ni = d({}, Vi);
    }),
    (e.resetNotifyDefaultOptions = () => {
      $s = {
        type: 'danger',
        color: void 0,
        message: '',
        onClose: void 0,
        onClick: void 0,
        onOpened: void 0,
        duration: 3e3,
        position: void 0,
        className: '',
        lockScroll: !1,
        background: void 0,
      };
    }),
    (e.resetToastDefaultOptions = (e) => {
      'string' == typeof e ? Yn.delete(e) : ((qn = d({}, jn)), Yn.clear());
    }),
    (e.rowProps = il),
    (e.searchProps = gd),
    (e.setDialogDefaultOptions = (e) => {
      d(Ni, e);
    }),
    (e.setNotifyDefaultOptions = (e) => d($s, e)),
    (e.setToastDefaultOptions = function (e, t) {
      'string' == typeof e ? Yn.set(e, t) : d(qn, e);
    }),
    (e.shareSheetProps = Cd),
    (e.showConfirmDialog = (e) => Ci(d({ showCancelButton: !0 }, e))),
    (e.showDialog = Ci),
    (e.showFailToast = Qn),
    (e.showImagePreview = rs),
    (e.showLoadingToast = _n),
    (e.showNotify = function (e) {
      var o;
      if (u)
        return (
          Es ||
            ({ instance: Es } = Hn({
              setup() {
                const { state: e, toggle: o } = Rn();
                return () => t.createVNode(As, t.mergeProps(e, { 'onUpdate:show': o }), null);
              },
            })),
          (e = d({}, $s, a((o = e)) ? o : { message: o })),
          Es.open(e),
          clearTimeout(zs),
          e.duration > 0 && (zs = setTimeout(Ls, e.duration)),
          Es
        );
    }),
    (e.showSuccessToast = Jn),
    (e.showToast = Zn),
    (e.sidebarItemProps = Ad),
    (e.sidebarProps = Pd),
    (e.skeletonAvatarProps = jd),
    (e.skeletonImageProps = nu),
    (e.skeletonParagraphProps = Yd),
    (e.skeletonProps = Qd),
    (e.skeletonTitleProps = Ld),
    (e.sliderProps = iu),
    (e.spaceProps = uu),
    (e.stepperProps = ku),
    (e.stepsProps = hu),
    (e.stickyProps = Vo),
    (e.submitBarProps = Ou),
    (e.swipeCellProps = Eu),
    (e.swipeProps = Po),
    (e.switchProps = na),
    (e.tabProps = Yo),
    (e.tabbarItemProps = Uu),
    (e.tabbarProps = Fu),
    (e.tabsProps = Lo),
    (e.tagProps = Va),
    (e.timePickerProps = Gu),
    (e.toastProps = Mn),
    (e.treeSelectProps = _u),
    (e.uploaderProps = ip),
    (e.version = yp),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' },
    });
});
