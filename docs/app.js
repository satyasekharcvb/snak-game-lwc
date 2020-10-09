!(function (e) {
    function t(t) {
        for (
            var i, o, n = t[0], h = t[1], d = t[2], c = 0, p = [];
            c < n.length;
            c++
        )
            (o = n[c]),
                Object.prototype.hasOwnProperty.call(a, o) &&
                    a[o] &&
                    p.push(a[o][0]),
                (a[o] = 0);
        for (i in h)
            Object.prototype.hasOwnProperty.call(h, i) && (e[i] = h[i]);
        for (l && l(t); p.length; ) p.shift()();
        return r.push.apply(r, d || []), s();
    }
    function s() {
        for (var e, t = 0; t < r.length; t++) {
            for (var s = r[t], i = !0, n = 1; n < s.length; n++) {
                var h = s[n];
                0 !== a[h] && (i = !1);
            }
            i && (r.splice(t--, 1), (e = o((o.s = s[0]))));
        }
        return e;
    }
    var i = {},
        a = { 1: 0 },
        r = [];
    function o(t) {
        if (i[t]) return i[t].exports;
        var s = (i[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
    }
    (o.m = e),
        (o.c = i),
        (o.d = function (e, t, s) {
            o.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (o.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (o.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var i in e)
                    o.d(
                        s,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return s;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, 'a', t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = './');
    var n = (window.webpackJsonp = window.webpackJsonp || []),
        h = n.push.bind(n);
    (n.push = t), (n = n.slice());
    for (var d = 0; d < n.length; d++) t(n[d]);
    var l = h;
    r.push([1, 0]), s();
})([
    ,
    function (e, t, s) {
        e.exports = s(3);
    },
    function (e, t) {
        var s;
        s = (function () {
            return this;
        })();
        try {
            s = s || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (s = window);
        }
        e.exports = s;
    },
    function (e, t, s) {
        'use strict';
        s.r(t);
        var i = s(0);
        var a = [
            function (e, t, s) {
                return [
                    '.container',
                    t,
                    '{width:70vw;margin:1rem auto}header',
                    t,
                    '{line-height:30px}'
                ].join('');
            }
        ];
        var r = [
            function (e, t, s) {
                return [
                    '.header',
                    t,
                    '{background:#a0f;color:#fff;font-size:1rem}.game-container',
                    t,
                    '{width:100%;height:60vh;background:#c1ff46;text-align:center}.game-container',
                    t,
                    ' div',
                    t,
                    '{width:20px;height:20px;background:#e6fabe;display:inline-block}.snake',
                    t,
                    '{background:green!important}.food',
                    t,
                    '{background:red!important;border-radius:50%}'
                ].join('');
            }
        ];
        function o(e, t, s, i) {
            const { t: a, d: r, h: o, k: n, i: h } = e;
            return [
                o('div', { classMap: { header: !0 }, key: 0 }, [
                    a('Score: '),
                    r(t.score)
                ]),
                o(
                    'div',
                    { classMap: { 'game-container': !0 }, key: 2 },
                    h(t.gameBlocks, function (e) {
                        return o(
                            'div',
                            { className: e.class, key: n(1, e.id) },
                            [a(' ')]
                        );
                    })
                )
            ];
        }
        var n = Object(i.registerTemplate)(o);
        (o.stylesheets = []),
            r && o.stylesheets.push.apply(o.stylesheets, r),
            (o.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
            });
        class h extends i.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.blockSize = 20),
                    (this.gameBlocks = []),
                    (this.score = 0),
                    (this.renderComplete = !1),
                    (this.xSpeed = 1),
                    (this.ySpeed = 0),
                    (this.xHead = 0),
                    (this.yHead = 0),
                    (this.xMax = void 0),
                    (this.yMax = void 0),
                    (this.tail = []);
            }
            startGame() {
                setInterval(() => {
                    this.move();
                }, 300);
            }
            move() {
                const e = `${this.xHead}:${this.yHead}`;
                (this.xHead += this.xSpeed),
                    (this.yHead += this.ySpeed),
                    this.xHead >= this.xMax && (this.xHead = 0),
                    this.xHead < 0 && (this.xHead = this.xMax - 1),
                    this.yHead >= this.yMax && (this.yHead = 0),
                    this.yHead < 0 && (this.yHead = this.yMax - 1);
                let t = this.gameBlocks.findIndex(
                    (e) => e.id === `${this.xHead}:${this.yHead}`
                );
                if (
                    ((this.gameBlocks[t].snake = !0),
                    (this.gameBlocks[t].class = 'snake'),
                    this.gameBlocks[t].food)
                )
                    this.score++,
                        this.tail.unshift(e),
                        (this.gameBlocks[t].food = !1),
                        this.generateFood();
                else {
                    this.tail.unshift(e);
                    const t = this.tail.pop(),
                        s = this.gameBlocks.findIndex((e) => e.id === t);
                    (this.gameBlocks[s].snake = !1),
                        (this.gameBlocks[s].class = '');
                }
                this.tail.includes(`${this.xHead}:${this.yHead}`) &&
                    (alert('game over'),
                    (this.score = 0),
                    (this.tail = []),
                    (this.xHead = 0),
                    (this.yHead = 0));
            }
            addKeyboardControls() {
                window.addEventListener('keydown', (e) => {
                    switch ((e.preventDefault(), e.key)) {
                        case 'ArrowUp':
                            (this.xSpeed = 0), (this.ySpeed = -1);
                            break;
                        case 'ArrowDown':
                            (this.xSpeed = 0), (this.ySpeed = 1);
                            break;
                        case 'ArrowLeft':
                            (this.xSpeed = -1), (this.ySpeed = 0);
                            break;
                        case 'ArrowRight':
                            (this.xSpeed = 1), (this.ySpeed = 0);
                    }
                });
            }
            generateFood() {
                const e = Math.floor(Math.random() * (this.xMax - 1)),
                    t = Math.floor(Math.random() * (this.yMax - 1)),
                    s = this.gameBlocks.findIndex((s) => s.id === `${e}:${t}`);
                (this.gameBlocks[s].food = !0),
                    (this.gameBlocks[s].class = 'food');
            }
            renderedCallback() {
                if (!this.renderComplete) {
                    let e = this.template.querySelector('.game-container')
                            .clientWidth,
                        t = this.template.querySelector('.game-container')
                            .clientHeight;
                    (this.xMax = Math.floor(e / this.blockSize)),
                        (this.yMax = Math.floor(t / this.blockSize));
                    let s = [];
                    for (let e = 0; e < this.yMax; e++)
                        for (let t = 0; t < this.xMax; t++) {
                            let i;
                            (i =
                                0 === t && 0 === e
                                    ? {
                                          id: `${t}:${e}`,
                                          snake: !0,
                                          food: !1,
                                          class: 'snake'
                                      }
                                    : {
                                          id: `${t}:${e}`,
                                          snake: !1,
                                          food: !1,
                                          class: ''
                                      }),
                                s.push(i);
                        }
                    (this.gameBlocks = s),
                        (this.renderComplete = !0),
                        this.addKeyboardControls(),
                        this.generateFood(),
                        this.startGame();
                }
            }
        }
        Object(i.registerDecorators)(h, {
            track: { gameBlocks: 1 },
            fields: [
                'blockSize',
                'score',
                'renderComplete',
                'xSpeed',
                'ySpeed',
                'xHead',
                'yHead',
                'xMax',
                'yMax',
                'tail'
            ]
        });
        var d = Object(i.registerComponent)(h, { tmpl: n });
        function l(e, t, s, i) {
            const { c: a } = e;
            return [a('my-game', d, { key: 0 }, [])];
        }
        var c = Object(i.registerTemplate)(l);
        (l.stylesheets = []),
            a && l.stylesheets.push.apply(l.stylesheets, a),
            (l.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        class p extends i.LightningElement {}
        var u = Object(i.registerComponent)(p, { tmpl: c });
        const f = Object(i.createElement)('my-app', { is: u });
        document.querySelector('#main').appendChild(f);
    }
]);
