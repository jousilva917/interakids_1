// Automatically generated file.  Do not edit!
var d, g = this;

function aa(a) {
    return void 0 !== a
}

function q(a) {
    return "string" == typeof a
}

function v(a) {
    return "number" == typeof a
}

function ba(a, b) {
    a = a.split(".");
    var c = g;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift());) !a.length && aa(b) ? c[e] = b : c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {}
}

function ca() {}

function da(a) {
    a.Pm = void 0;
    a.Id = function () {
        return a.Pm ? a.Pm : a.Pm = new a
    }
}

function ea(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function w(a) {
    return "array" == ea(a)
}

function fa(a) {
    var b = ea(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function y(a) {
    return "function" == ea(a)
}

function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ja(a) {
    return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0),
    la = 0;

function ma(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function na(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, e);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}

function oa(a, b, c) {
    oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
    return oa.apply(null, arguments)
}

function pa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function z(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.m = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.aA = function (a, c, h) {
        for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
        return b.prototype[c].apply(a, e)
    }
};
var qa;
var ra = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    sa = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++) h in f && b.call(c, f[h], h, a)
    },
    ta = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
        for (var c =
                a.length, e = [], f = 0, h = q(a) ? a.split("") : a, k = 0; k < c; k++)
            if (k in h) {
                var l = h[k];
                b.call(void 0, l, k, a) && (e[f++] = l)
            }
        return e
    },
    ua = Array.prototype.map ? function (a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function (a, b, c) {
        for (var e = a.length, f = Array(e), h = q(a) ? a.split("") : a, k = 0; k < e; k++) k in h && (f[k] = b.call(c, h[k], k, a));
        return f
    },
    va = Array.prototype.every ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, e = q(a) ? a.split("") : a, f = 0; f < c; f++)
            if (f in e && !b.call(void 0, e[f],
                    f, a)) return !1;
        return !0
    };

function wa(a, b, c) {
    a: {
        for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++)
            if (h in f && b.call(c, f[h], h, a)) {
                b = h;
                break a
            }
        b = -1
    }
    return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
}

function xa(a, b) {
    return 0 <= ra(a, b)
}

function ya(a, b) {
    b = ra(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c
}

function za(a) {
    return Array.prototype.concat.apply([], arguments)
}

function Aa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
        return c
    }
    return []
}

function Ba(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var e = arguments[c];
        if (fa(e)) {
            var f = a.length || 0,
                h = e.length || 0;
            a.length = f + h;
            for (var k = 0; k < h; k++) a[f + k] = e[k]
        } else a.push(e)
    }
}

function Ca(a, b, c, e) {
    Array.prototype.splice.apply(a, Da(arguments, 1))
}

function Da(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function A(a, b) {
    this.x = aa(a) ? a : 0;
    this.y = aa(b) ? b : 0
}
d = A.prototype;
d.clone = function () {
    return new A(this.x, this.y)
};

function Ea(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function Fa(a, b) {
    var c = a.x - b.x;
    a = a.y - b.y;
    return Math.sqrt(c * c + a * a)
}

function Ga(a, b) {
    return new A(a.x - b.x, a.y - b.y)
}

function Ha(a, b) {
    return new A(a.x + b.x, a.y + b.y)
}
d.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
d.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
d.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
d.translate = function (a, b) {
    a instanceof A ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), v(b) && (this.y += b));
    return this
};
d.scale = function (a, b) {
    b = v(b) ? b : a;
    this.x *= a;
    this.y *= b;
    return this
};
// Copyright 2016 Google Inc.  Apache License 2.0
var B = {
    i: {}
};
B.i.zk = "";
B.i.Rb = !0;
B.i.lm = 0;
B.i.Bj = "create";
B.i.Bw = B.i.Bj;
B.i.Fl = "delete";
B.i.Cw = B.i.Fl;
B.i.Dg = "change";
B.i.Aw = B.i.Dg;
B.i.Oh = "move";
B.i.Dw = B.i.Oh;
B.i.Mo = "var_create";
B.i.No = "var_delete";
B.i.Oo = "var_rename";
B.i.Ij = "ui";
B.i.ro = "comment_create";
B.i.so = "comment_delete";
B.i.qo = "comment_change";
B.i.to = "comment_move";
B.i.Mh = [];
B.i.M = function (a) {
    B.i.isEnabled() && (B.i.Mh.length || setTimeout(B.i.du, 0), B.i.Mh.push(a))
};
B.i.du = function () {
    for (var a = B.i.filter(B.i.Mh, !0), b = B.i.Mh.length = 0, c; c = a[b]; b++) {
        var e = Ia[c.hc] || null;
        if (e) {
            var f = c;
            f.Rb && (e.yg.push(f), e.aj.length = 0, e.yg.length > e.zs && e.yg.unshift());
            for (var h = 0; c = e.dc[h]; h++) c(f)
        }
    }
};
B.i.filter = function (a, b) {
    a = Aa(a);
    b || a.reverse();
    for (var c = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.gh()) {
            var k = [h.type, h.Jb, h.hc].join(" "),
                l = e[k],
                m = l ? l.event : null;
            l ? h.type == B.i.Oh && l.index == f - 1 ? (m.ag = h.ag, m.$f = h.$f, m.ef = h.ef, l.index = f) : h.type == B.i.Dg && h.element == m.element && h.name == m.name ? m.newValue = h.newValue : h.type != B.i.Ij || "click" != h.element || "commentOpen" != m.element && "mutatorOpen" != m.element && "warningOpen" != m.element ? (e[k] = {
                event: h,
                index: 1
            }, c.push(h)) : m.newValue = h.newValue : (e[k] = {
                event: h,
                index: f
            }, c.push(h))
        }
    a = c.filter(function (a) {
        return !a.gh()
    });
    b || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == B.i.Dg && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
B.i.tt = function () {
    for (var a = 0, b; b = B.i.Mh[a]; a++) b.Rb = !1
};
B.i.disable = function () {
    B.i.lm++
};
B.i.enable = function () {
    B.i.lm--
};
B.i.isEnabled = function () {
    return 0 == B.i.lm
};
B.i.Zb = function () {
    return B.i.zk
};
B.i.T = function (a) {
    B.i.zk = "boolean" == typeof a ? a ? B.h.Fd() : "" : a
};
B.i.fq = function (a) {
    var b = [];
    a = Ja(a, !1);
    for (var c = 0, e; e = a[c]; c++) b[c] = e.id;
    return b
};
B.i.Z = function (a, b) {
    switch (a.type) {
        case B.i.Bj:
            var c = new Ka(null);
            break;
        case B.i.Fl:
            c = new La(null);
            break;
        case B.i.Dg:
            c = new Ma(null, "", "", "", "");
            break;
        case B.i.Oh:
            c = new Na(null);
            break;
        case B.i.Mo:
            c = new Oa(null);
            break;
        case B.i.No:
            c = new Pa(null);
            break;
        case B.i.Oo:
            c = new Qa(null, "");
            break;
        case B.i.Ij:
            c = new Ra(null);
            break;
        case B.i.ro:
            c = new Sa(null);
            break;
        case B.i.qo:
            c = new Ta(null);
            break;
        case B.i.to:
            c = new Ua(null);
            break;
        case B.i.so:
            c = new Va(null);
            break;
        default:
            throw "Unknown event type.";
    }
    c.Z(a);
    c.hc = b.id;
    return c
};
B.i.lA = function (a) {
    if (a.type == B.i.Oh || a.type == B.i.Bj) {
        var b = Ia[a.hc] || null;
        if (a = Wa(b, a.Jb))
            if (a.getParent() && !a.getParent().disabled) {
                b = Ja(a, !1);
                a = 0;
                for (var c; c = b[a]; a++) c.mf(!1)
            } else if ((a.S || a.V) && !b.lb()) {
            do a.mf(!0), a = Xa(a); while (a)
        }
    }
};
// Copyright 2018 Google Inc.  Apache License 2.0
function Ya() {
    this.hc = void 0;
    this.group = B.i.zk;
    this.Rb = B.i.Rb
}
Ya.prototype.ua = function () {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    return a
};
Ya.prototype.Z = function (a) {
    this.group = a.group
};
Ya.prototype.gh = function () {
    return !1
};
Ya.prototype.run = function () {};

function Za(a) {
    a = Ia[a.hc] || null;
    if (!a) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return a
};

function $a(a) {
    $a.m.constructor.call(this);
    this.Jb = a.id;
    this.hc = a.o.id
}
z($a, Ya);
$a.prototype.ua = function () {
    var a = $a.m.ua.call(this);
    a.blockId = this.Jb;
    return a
};
$a.prototype.Z = function (a) {
    $a.m.ua.call(this);
    this.Jb = a.blockId
};

function Ma(a, b, c, e, f) {
    a && (Ma.m.constructor.call(this, a), this.element = b, this.name = c, this.oldValue = e, this.newValue = f)
}
z(Ma, $a);
B.i.ic = Ma;
d = Ma.prototype;
d.type = B.i.Dg;
d.ua = function () {
    var a = Ma.m.ua.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue;
    return a
};
d.Z = function (a) {
    Ma.m.Z.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue
};
d.gh = function () {
    return this.oldValue == this.newValue
};
d.run = function (a) {
    var b = Wa(Za(this), this.Jb);
    if (b) switch (b.re && b.re.ka(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (b = ab(b, this.name)) ? (bb(b, a), b.setValue(a)) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            b.dj(a || null);
            break;
        case "collapsed":
            b.lg(a);
            break;
        case "disabled":
            b.mf(a);
            break;
        case "inline":
            b.yh(a);
            break;
        case "mutation":
            var c = "";
            b.ad && (c = (c = b.ad()) && B.D.pc(c));
            if (b.Oe) {
                a = a || "<mutation></mutation>";
                var e = B.D.Kc("<xml>" + a + "</xml>");
                b.Oe(e.firstChild)
            }
            B.i.M(new Ma(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.Jb)
};

function Ka(a) {
    a && (Ka.m.constructor.call(this, a), this.xml = a.o.R ? B.D.Tl(a) : B.D.Le(a), this.Tf = B.i.fq(a))
}
z(Ka, $a);
B.i.Aj = Ka;
Ka.prototype.type = B.i.Bj;
Ka.prototype.ua = function () {
    var a = Ka.m.ua.call(this);
    a.xml = B.D.pc(this.xml);
    a.ids = this.Tf;
    return a
};
Ka.prototype.Z = function (a) {
    Ka.m.Z.call(this, a);
    this.xml = B.D.Kc("<xml>" + a.xml + "</xml>").firstChild;
    this.Tf = a.ids
};
Ka.prototype.run = function (a) {
    var b = Za(this);
    if (a) a = C("xml"), a.appendChild(this.xml), B.D.ie(a, b);
    else {
        a = 0;
        for (var c; c = this.Tf[a]; a++) {
            var e = Wa(b, c);
            e ? e.v(!1, !1) : c == this.Jb && console.warn("Can't uncreate non-existent block: " + c)
        }
    }
};

function La(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        La.m.constructor.call(this, a);
        this.iv = a.o.R ? B.D.Tl(a) : B.D.Le(a);
        this.Tf = B.i.fq(a)
    }
}
z(La, $a);
B.i.js = La;
La.prototype.type = B.i.Fl;
La.prototype.ua = function () {
    var a = La.m.ua.call(this);
    a.ids = this.Tf;
    return a
};
La.prototype.Z = function (a) {
    La.m.Z.call(this, a);
    this.Tf = a.ids
};
La.prototype.run = function (a) {
    var b = Za(this);
    if (a) {
        a = 0;
        for (var c; c = this.Tf[a]; a++) {
            var e = Wa(b, c);
            e ? e.v(!1, !1) : c == this.Jb && console.warn("Can't delete non-existent block: " + c)
        }
    } else a = C("xml"), a.appendChild(this.iv), B.D.ie(a, b)
};

function Na(a) {
    a && (Na.m.constructor.call(this, a), a = cb(this), this.Vq = a.kr, this.Uq = a.xq, this.fn = a.sp)
}
z(Na, $a);
B.i.Lh = Na;
d = Na.prototype;
d.type = B.i.Oh;
d.ua = function () {
    var a = Na.m.ua.call(this);
    this.ag && (a.newParentId = this.ag);
    this.$f && (a.newInputName = this.$f);
    this.ef && (a.newCoordinate = Math.round(this.ef.x) + "," + Math.round(this.ef.y));
    return a
};
d.Z = function (a) {
    Na.m.Z.call(this, a);
    this.ag = a.newParentId;
    this.$f = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.ef = new A(parseFloat(a[0]), parseFloat(a[1])))
};
d.ue = function () {
    var a = cb(this);
    this.ag = a.kr;
    this.$f = a.xq;
    this.ef = a.sp
};

function cb(a) {
    var b = Wa(Ia[a.hc] || null, a.Jb);
    a = {};
    var c = b.getParent();
    if (c) {
        a.kr = c.id;
        a: {
            for (var e = 0, f; f = c.X[e]; e++)
                if (f.connection && D(f.connection) == b) {
                    b = f;
                    break a
                }
            b = null
        }
        b && (a.xq = b.name)
    } else a.sp = b.ia();
    return a
}
d.gh = function () {
    return this.Vq == this.ag && this.Uq == this.$f && Ea(this.fn, this.ef)
};
d.run = function (a) {
    var b = Za(this),
        c = Wa(b, this.Jb);
    if (c) {
        var e = a ? this.ag : this.Vq,
            f = a ? this.$f : this.Uq;
        a = a ? this.ef : this.fn;
        var h = null;
        if (e && (h = Wa(b, e), !h)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        c.getParent() && db(c);
        if (a) f = c.ia(), c.moveBy(a.x - f.x, a.y - f.y);
        else {
            c = c.S || c.V;
            if (f) {
                if (b = eb(h, f)) var k = b.connection
            } else c.type == B.He && (k = h.P);
            k ? c.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.Jb)
};
B.ya = {};
B.ya.nm = 0;
B.ya.bk = null;
B.ya.Ut = function (a) {
    var b = a.o,
        c = a.N();
    b.mc.play("delete");
    a = gb(b, c);
    c = c.cloneNode(!0);
    c.bw = a.x;
    c.cw = a.y;
    c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    E(b).appendChild(c);
    c.Wo = c.getBBox();
    B.ya.Sp(c, b.s, new Date, b.scale)
};
B.ya.Sp = function (a, b, c, e) {
    var f = (new Date - c) / 150;
    1 < f ? F(a) : (a.setAttribute("transform", "translate(" + (a.bw + (b ? -1 : 1) * a.Wo.width * e / 2 * f) + "," + (a.cw + a.Wo.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(B.ya.Sp, 10, a, b, c, e))
};
B.ya.zt = function (a) {
    var b = a.o,
        c = b.scale;
    b.mc.play("click");
    if (!(1 > c)) {
        var e = gb(b, a.N());
        a.S ? (e.x += (a.s ? 3 : -3) * c, e.y += 13 * c) : a.V && (e.x += (a.s ? -23 : 23) * c, e.y += 3 * c);
        a = B.h.A("circle", {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, E(b));
        B.ya.qp(a, new Date, c)
    }
};
B.ya.qp = function (a, b, c) {
    var e = (new Date - b) / 150;
    1 < e ? F(a) : (a.setAttribute("r", 25 * e * c), a.style.opacity = 1 - e, B.ya.nm = setTimeout(B.ya.qp, 10, a, b, c))
};
B.ya.Tt = function (a) {
    a.o.mc.play("disconnect");
    if (!(1 > a.o.scale)) {
        var b = a.sb().height;
        b = Math.atan(10 / b) / Math.PI * 180;
        a.s || (b *= -1);
        B.ya.Rp(a.N(), b, new Date)
    }
};
B.ya.Rp = function (a, b, c) {
    var e = (new Date - c) / 200;
    1 < e ? a.rg = "" : (a.rg = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")", B.ya.bk = a, B.ya.nm = setTimeout(B.ya.Rp, 10, a, b, c));
    a.setAttribute("transform", a.De + a.rg)
};
B.ya.om = function () {
    if (B.ya.bk) {
        clearTimeout(B.ya.nm);
        var a = B.ya.bk;
        a.rg = "";
        a.setAttribute("transform", a.De);
        B.ya.bk = null
    }
};

function hb(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}

function ib(a) {
    return /^[\s\xa0]*$/.test(a)
}

function jb(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var kb = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function lb(a) {
    if (!mb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(nb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ob, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(pb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(qb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(rb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(sb, "&#0;"));
    return a
}
var nb = /&/g,
    ob = /</g,
    pb = />/g,
    qb = /"/g,
    rb = /'/g,
    sb = /\x00/g,
    mb = /[\x00&<>"']/;

function tb(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var c = g.document.createElement("div");
    return a.replace(ub, function (a, f) {
        var e = b[a];
        if (e) return e;
        "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (e = String.fromCharCode(f)));
        e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = e
    })
}

function vb(a) {
    return a.replace(/&([^;]+);/g, function (a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
        }
    })
}
var ub = /&([^;\s<&]+);?/g;

function wb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function xb() {
    return "background-color".replace(/\-([a-z])/g, function (a, b) {
        return b.toUpperCase()
    })
}

function yb(a) {
    var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, f) {
        return b + f.toUpperCase()
    })
};
var zb;
a: {
    var Ab = g.navigator;
    if (Ab) {
        var Bb = Ab.userAgent;
        if (Bb) {
            zb = Bb;
            break a
        }
    }
    zb = ""
}

function Cb(a) {
    return -1 != zb.indexOf(a)
};

function Db(a, b, c) {
    for (var e in a) b.call(c, a[e], e, a)
}
var Eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Fb(a, b) {
    for (var c, e, f = 1; f < arguments.length; f++) {
        e = arguments[f];
        for (c in e) a[c] = e[c];
        for (var h = 0; h < Eb.length; h++) c = Eb[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
    }
}

function Gb(a) {
    var b = arguments.length;
    if (1 == b && w(arguments[0])) return Gb.apply(null, arguments[0]);
    for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
    return c
};

function Hb(a) {
    Hb[" "](a);
    return a
}
Hb[" "] = ca;

function Ib(a, b) {
    var c = Jb;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var Kb = Cb("Opera"),
    G = Cb("Trident") || Cb("MSIE"),
    Lb = Cb("Edge"),
    Mb = Cb("Gecko") && !(-1 != zb.toLowerCase().indexOf("webkit") && !Cb("Edge")) && !(Cb("Trident") || Cb("MSIE")) && !Cb("Edge"),
    H = -1 != zb.toLowerCase().indexOf("webkit") && !Cb("Edge"),
    Nb = H && Cb("Mobile"),
    Ob = Cb("Macintosh"),
    Pb = Cb("Android"),
    Qb = Cb("iPhone") && !Cb("iPod") && !Cb("iPad"),
    Rb = Cb("iPad");

function Sb() {
    var a = g.document;
    return a ? a.documentMode : void 0
}
var Tb;
a: {
    var Ub = "",
        Vb = function () {
            var a = zb;
            if (Mb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Lb) return /Edge\/([\d\.]+)/.exec(a);
            if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (H) return /WebKit\/(\S+)/.exec(a);
            if (Kb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();Vb && (Ub = Vb ? Vb[1] : "");
    if (G) {
        var Wb = Sb();
        if (null != Wb && Wb > parseFloat(Ub)) {
            Tb = String(Wb);
            break a
        }
    }
    Tb = Ub
}
var Jb = {};

function Xb(a) {
    return Ib(a, function () {
        for (var b = 0, c = kb(String(Tb)).split("."), e = kb(String(a)).split("."), f = Math.max(c.length, e.length), h = 0; 0 == b && h < f; h++) {
            var k = c[h] || "",
                l = e[h] || "";
            do {
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                if (0 == k[0].length && 0 == l[0].length) break;
                b = wb(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || wb(0 == k[2].length, 0 == l[2].length) || wb(k[2], l[2]);
                k = k[3];
                l = l[3]
            } while (0 == b)
        }
        return 0 <= b
    })
}
var Yb;
var Zb = g.document;
Yb = Zb && G ? Sb() || ("CSS1Compat" == Zb.compatMode ? parseInt(Tb, 10) : 5) : void 0;
var $b = !G || 9 <= Number(Yb),
    ac = !Mb && !G || G && 9 <= Number(Yb) || Mb && Xb("1.9.1"),
    bc = G && !Xb("9");
var cc = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};

function dc() {
    this.fo = "";
    this.Ms = ec
}
dc.prototype.Ue = !0;
dc.prototype.Kd = function () {
    return this.fo
};
dc.prototype.toString = function () {
    return "Const{" + this.fo + "}"
};

function fc(a) {
    return a instanceof dc && a.constructor === dc && a.Ms === ec ? a.fo : "type_error:Const"
}
var ec = {};

function gc() {
    this.pr = "";
    this.Ns = hc
}
gc.prototype.Ue = !0;
gc.prototype.Kd = function () {
    return this.pr
};
gc.prototype.Mm = !0;
gc.prototype.Wg = function () {
    return 1
};
var hc = {};

function ic() {
    this.gg = "";
    this.Ks = jc
}
ic.prototype.Ue = !0;
ic.prototype.Kd = function () {
    return this.gg
};
ic.prototype.Mm = !0;
ic.prototype.Wg = function () {
    return 1
};

function kc(a) {
    if (a instanceof ic && a.constructor === ic && a.Ks === jc) return a.gg;
    ea(a);
    return "type_error:SafeUrl"
}
var lc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function mc(a) {
    if (a instanceof ic) return a;
    a = a.Ue ? a.Kd() : String(a);
    lc.test(a) || (a = "about:invalid#zClosurez");
    return nc(a)
}
var jc = {};

function nc(a) {
    var b = new ic;
    b.gg = a;
    return b
}
nc("about:blank");

function oc() {
    this.yn = "";
    this.Js = pc
}
oc.prototype.Ue = !0;
var pc = {};
oc.prototype.Kd = function () {
    return this.yn
};
oc.prototype.Fk = function (a) {
    this.yn = a;
    return this
};
var qc = (new oc).Fk("");

function rc(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var e = a[c];
        null != e && (e = w(e) ? ua(e, sc).join(" ") : sc(e), b += c + ":" + e + ";")
    }
    return b ? (new oc).Fk(b) : qc
}

function sc(a) {
    if (a instanceof ic) a = 'url("' + kc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    else if (a instanceof dc) a = fc(a);
    else {
        a = String(a);
        var b = a.replace(tc, "$1").replace(uc, "url");
        if (b = vc.test(b)) {
            for (var c = b = !0, e = 0; e < a.length; e++) {
                var f = a.charAt(e);
                "'" == f && c ? b = !b : '"' == f && b && (c = !c)
            }
            b = b && c
        }
        a = b ? wc(a) : "zClosurez"
    }
    return a
}
var vc = /^[-,."'%_!# a-zA-Z0-9]+$/,
    uc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    tc = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function wc(a) {
    return a.replace(uc, function (a, c, e, f) {
        var b = "";
        e = e.replace(/^(['"])(.*)\1$/, function (a, c, e) {
            b = c;
            return e
        });
        a = mc(e).Kd();
        return c + b + a + b + f
    })
};

function xc() {
    this.gg = "";
    this.Is = yc;
    this.Qp = null
}
xc.prototype.Mm = !0;
xc.prototype.Wg = function () {
    return this.Qp
};
xc.prototype.Ue = !0;
xc.prototype.Kd = function () {
    return this.gg
};

function zc(a) {
    if (a instanceof xc && a.constructor === xc && a.Is === yc) return a.gg;
    ea(a);
    return "type_error:SafeHtml"
}

function Ac(a) {
    if (a instanceof xc) return a;
    var b = null;
    a.Mm && (b = a.Wg());
    return Bc(lb(a.Ue ? a.Kd() : String(a)), b)
}
var Cc = /^[a-zA-Z0-9-]+$/,
    Dc = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Ec = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function Fc(a, b, c) {
    var e = String(a);
    if (!Cc.test(e)) throw Error("Invalid tag name <" + e + ">.");
    if (e.toUpperCase() in Ec) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
    a = String(a);
    e = null;
    var f = "<" + a,
        h = "";
    if (b)
        for (n in b) {
            if (!Cc.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var k = b[n];
            if (null != k) {
                var l = a;
                var m = n;
                if (k instanceof dc) k = fc(k);
                else if ("style" == m.toLowerCase()) {
                    if (!ia(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k +
                        " given: " + k);
                    k instanceof oc || (k = rc(k));
                    k instanceof oc && k.constructor === oc && k.Js === pc ? k = k.yn : (ea(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(m)) throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + k + '" given.');
                    if (m.toLowerCase() in Dc)
                        if (k instanceof gc) k instanceof gc && k.constructor === gc && k.Ns === hc ? k = k.pr : (ea(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof ic) k = kc(k);
                    else if (q(k)) k = mc(k).Kd();
                    else throw Error('Attribute "' + m + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        k + '" given.');
                }
                k.Ue && (k = k.Kd());
                m = m + '="' + lb(String(k)) + '"';
                h += " " + m
            }
        }
    var n = f + h;
    null != c ? w(c) || (c = [c]) : c = [];
    !0 === cc[a.toLowerCase()] ? n += ">" : (c = Gc(c), n += ">" + zc(c) + "</" + a + ">", e = c.Wg());
    (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return Bc(n, e)
}

function Gc(a) {
    function b(a) {
        w(a) ? sa(a, b) : (a = Ac(a), e += zc(a), a = a.Wg(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        e = "";
    sa(arguments, b);
    return Bc(e, c)
}
var yc = {};

function Bc(a, b) {
    return (new xc).Fk(a, b)
}
xc.prototype.Fk = function (a, b) {
    this.gg = a;
    this.Qp = b;
    return this
};
Bc("<!DOCTYPE html>", 0);
var Hc = Bc("", 0),
    Ic = Bc("<br>", 0);

function Jc(a, b) {
    a.innerHTML = zc(b)
};

function Kc(a, b) {
    this.width = a;
    this.height = b
}
d = Kc.prototype;
d.clone = function () {
    return new Kc(this.width, this.height)
};
d.$s = function () {
    return this.width * this.height
};
d.aspectRatio = function () {
    return this.width / this.height
};
d.Bq = function () {
    return !this.$s()
};
d.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
d.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
d.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
d.scale = function (a, b) {
    b = v(b) ? b : a;
    this.width *= a;
    this.height *= b;
    return this
};

function Lc(a) {
    return a ? new Mc(Nc(a)) : qa || (qa = new Mc)
}

function Oc(a, b) {
    var c = document;
    b = b || c;
    if (b.querySelectorAll && b.querySelector) return b.querySelectorAll("TBODY" + (a ? "." + a : ""));
    if (a && b.getElementsByClassName) {
        b = b.getElementsByClassName(a);
        c = {};
        for (var e = 0, f = 0, h; h = b[f]; f++) "TBODY" == h.nodeName && (c[e++] = h);
        c.length = e;
        return c
    }
    b = b.getElementsByTagName("TBODY");
    if (a) {
        c = {};
        for (f = e = 0; h = b[f]; f++) {
            var k = h.className;
            "function" == typeof k.split && xa(k.split(/\s+/), a) && (c[e++] = h)
        }
        c.length = e;
        return c
    }
    return b
}

function Pc(a, b) {
    Db(b, function (b, e) {
        b && b.Ue && (b = b.Kd());
        "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : Qc.hasOwnProperty(e) ? a.setAttribute(Qc[e], b) : hb(e, "aria-") || hb(e, "data-") ? a.setAttribute(e, b) : a[e] = b
    })
}
var Qc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Rc() {
    var a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Kc(a.clientWidth, a.clientHeight)
}

function Sc(a) {
    var b = Tc(a);
    a = a.parentWindow || a.defaultView;
    return G && Xb("10") && a.pageYOffset != b.scrollTop ? new A(b.scrollLeft, b.scrollTop) : new A(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function Tc(a) {
    return a.scrollingElement ? a.scrollingElement : H || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function C(a, b, c) {
    return Uc(document, arguments)
}

function Uc(a, b) {
    var c = String(b[0]),
        e = b[1];
    if (!$b && e && (e.name || e.type)) {
        c = ["<", c];
        e.name && c.push(' name="', lb(e.name), '"');
        if (e.type) {
            c.push(' type="', lb(e.type), '"');
            var f = {};
            Fb(f, e);
            delete f.type;
            e = f
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    e && (q(e) ? c.className = e : w(e) ? c.className = e.join(" ") : Pc(c, e));
    2 < b.length && Vc(a, c, b, 2);
    return c
}

function Vc(a, b, c, e) {
    function f(c) {
        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
    }
    for (; e < c.length; e++) {
        var h = c[e];
        !fa(h) || ia(h) && 0 < h.nodeType ? f(h) : sa(Wc(h) ? Aa(h) : h, f)
    }
}

function Xc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function Yc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function F(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}

function Zc(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Nc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function $c(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b)
    } else Xc(a), a.appendChild(Nc(a).createTextNode(String(b)))
}
var ad = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    bd = {
        IMG: " ",
        BR: "\n"
    };

function cd(a) {
    return G && !Xb("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
}

function dd(a) {
    a = a.tabIndex;
    return v(a) && 0 <= a && 32768 > a
}

function ed(a) {
    if (bc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        fd(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    bc || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function gd(a) {
    var b = [];
    fd(a, b, !1);
    return b.join("")
}

function fd(a, b, c) {
    if (!(a.nodeName in ad))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in bd) b.push(bd[a.nodeName]);
    else
        for (a = a.firstChild; a;) fd(a, b, c), a = a.nextSibling
}

function Wc(a) {
    if (a && "number" == typeof a.length) {
        if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (y(a)) return "function" == typeof a.item
    }
    return !1
}

function Mc(a) {
    this.kd = a || g.document || document
}
d = Mc.prototype;
d.Xb = Lc;
d.F = function (a) {
    return q(a) ? this.kd.getElementById(a) : a
};
d.getElementsByTagName = function (a, b) {
    return (b || this.kd).getElementsByTagName(String(a))
};
d.setProperties = Pc;
d.O = function (a, b, c) {
    return Uc(this.kd, arguments)
};
d.createElement = function (a) {
    return this.kd.createElement(String(a))
};
d.createTextNode = function (a) {
    return this.kd.createTextNode(String(a))
};
d.tp = function (a, b) {
    for (var c = this.kd, e = c.createElement("TABLE"), f = e.appendChild(c.createElement("TBODY")), h = 0; h < a; h++) {
        for (var k = c.createElement("TR"), l = 0; l < b; l++) k.appendChild(c.createElement("TD"));
        f.appendChild(k)
    }
    return e
};
d.appendChild = function (a, b) {
    a.appendChild(b)
};
d.append = function (a, b) {
    Vc(Nc(a), a, arguments, 1)
};
d.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
    }
    return !0
};
d.xr = Xc;
d.removeNode = F;
d.le = function (a) {
    return ac && void 0 != a.children ? a.children : ta(a.childNodes, function (a) {
        return 1 == a.nodeType
    })
};
d.contains = Zc;
d.qe = function (a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!cd(a) || dd(a)) : cd(a) && dd(a)) && G ? (a = !y(a.getBoundingClientRect) || G && null == a.parentElement ? {
        height: a.offsetHeight,
        width: a.offsetWidth
    } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};
// Copyright 2011 Google Inc.  Apache License 2.0
function hd(a, b) {
    this.w = a;
    this.type = b;
    a.o.$l && (this.Wc = a.o.$l[b], this.Wj = a.o.$l[B.Ig[b]], this.Km = !this.Wc)
}
d = hd.prototype;
d.yb = null;
d.ce = null;
d.Sd = null;
d.xc = 0;
d.Fa = 0;
d.Ve = !1;
d.Wc = null;
d.Wj = null;
d.Km = null;
d.Sj = function (a) {
    var b = this,
        c = b.w,
        e = a.w;
    a.isConnected() && a.disconnect();
    if (b.isConnected()) {
        var f = D(b),
            h = b.Sd;
        b.Sd = null;
        if (f.Va) h = B.D.Le(f), f.v(), f = null;
        else if (b.type == B.ab) {
            if (!f.S) throw "Orphan block does not have an output connection.";
            var k = id(e, f);
            k && (f.S.connect(k), f = null)
        } else if (b.type == B.Ka) {
            if (!f.V) throw "Orphan block does not have a previous connection.";
            for (k = e; k.P;) {
                var l = Xa(k);
                if (l && !l.Va) k = l;
                else {
                    jd(f.V, k.P) && (k.P.connect(f.V), f = null);
                    break
                }
            }
        }
        if (f && (b.disconnect(), B.i.Rb)) {
            var m = B.i.Zb();
            setTimeout(function () {
                f.o && !f.getParent() && (B.i.T(m), f.S ? kd(f.S, b) : f.V && kd(f.V, b), B.i.T(!1))
            }, B.zj)
        }
        b.Sd = h
    }
    var n;
    B.i.isEnabled() && (n = new B.i.Lh(e));
    ld(b, a);
    e.og(c);
    n && (n.ue(), B.i.M(n))
};
d.v = function () {
    if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.Ve && md(this.Wc, this);
    this.Wj = this.Wc = null
};

function nd(a) {
    return a.type == B.ab || a.type == B.Ka
}
d.isConnected = function () {
    return !!this.yb
};

function od(a, b) {
    if (!b) return 3;
    if (nd(a)) var c = a.w,
        e = b.w;
    else e = a.w, c = b.w;
    return c && c == e ? 1 : b.type != B.Ig[a.type] ? 2 : c && e && c.o !== e.o ? 5 : jd(a, b) ? c.Va && !e.Va ? 6 : 0 : 4
}
d.Gk = function (a) {
    if (0 != od(this, a)) return !1;
    if (a.type == B.Jg || a.type == B.He)
        if (a.isConnected() || this.isConnected()) return !1;
    return a.type == B.ab && a.isConnected() && !D(a).Nd() && !D(a).Va || this.type == B.He && a.isConnected() && !this.w.P && !D(a).Va && D(a).P || -1 != B.ek.indexOf(a) ? !1 : !0
};
d.connect = function (a) {
    if (this.yb != a) {
        switch (od(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed. " + (this + " expected " + this.ce + ", found " + a.ce);
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        nd(this) ? this.Sj(a) : a.Sj(this)
    }
};

function ld(a, b) {
    a.yb = b;
    b.yb = a
}

function pd(a, b) {
    for (var c = !1, e = 0; e < a.X.length; e++) {
        var f = a.X[e].connection;
        if (f && f.type == B.ab && jd(b.S, f)) {
            if (c) return null;
            c = f
        }
    }
    return c
}

function id(a, b) {
    for (var c; c = pd(a, b);)
        if (a = D(c), !a || a.Va) return c;
    return null
}
d.disconnect = function () {
    var a = this.yb;
    if (nd(this)) {
        var b = this.w;
        var c = a.w;
        a = this
    } else b = a.w, c = this.w;
    this.mm(b, c);
    a.Hn()
};
d.mm = function (a, b) {
    var c;
    B.i.isEnabled() && (c = new B.i.Lh(b));
    this.yb = this.yb.yb = null;
    b.og(null);
    c && (c.ue(), B.i.M(c))
};
d.Hn = function () {
    var a = this.w,
        b = this.Sd;
    if (a.o && b && B.i.Rb)
        if (a = B.D.Rg(b, a.o), a.S) this.connect(a.S);
        else if (a.V) this.connect(a.V);
    else throw "Child block does not have output or previous statement.";
};

function D(a) {
    return a.isConnected() ? a.yb.w : null
}

function jd(a, b) {
    if (!a.ce || !b.ce) return !0;
    for (var c = 0; c < a.ce.length; c++)
        if (-1 != b.ce.indexOf(a.ce[c])) return !0;
    return !1
}
d.Xq = function () {
    this.isConnected() && !jd(this, this.yb) && db(nd(this) ? D(this) : this.w)
};
d.xh = function (a) {
    a ? (w(a) || (a = [a]), this.ce = a, this.Xq()) : this.ce = null
};
d.Rq = function () {
    return []
};
d.toString = function () {
    var a = this.w;
    if (a)
        if (a.S == this) var b = "Output Connection of ";
        else if (a.V == this) b = "Previous Connection of ";
    else if (a.P == this) b = "Next Connection of ";
    else if (b = wa(a.X, function (a) {
            return a.connection == this
        }, this)) b = 'Input "' + b.name + '" connection on ';
    else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
    else return "Orphan Connection";
    return b + qd(a)
};

function rd(a, b) {
    rd.m.constructor.call(this, a, b);
    this.al = new A(0, 0)
}
z(rd, hd);

function sd(a, b) {
    var c = a.xc - b.xc;
    a = a.Fa - b.Fa;
    return Math.sqrt(c * c + a * a)
}

function kd(a, b) {
    if (!a.w.o.lb()) {
        var c = td(a.w);
        if (!c.rc) {
            var e = !1;
            if (!c.Nd()) {
                c = td(b.w);
                if (!c.Nd()) return;
                b = a;
                e = !0
            }
            var f = B.selected == c;
            f || c.Lg();
            var h = b.xc + B.yc - a.xc;
            a = b.Fa + B.yc - a.Fa;
            e && (a = -a);
            c.s && (h = -h);
            c.moveBy(h, a);
            f || c.ig()
        }
    }
}
d = rd.prototype;
d.moveTo = function (a, b) {
    this.Ve && md(this.Wc, this);
    this.xc = a;
    this.Fa = b;
    this.Km || ud(this.Wc, this)
};
d.moveBy = function (a, b) {
    this.moveTo(this.xc + a, this.Fa + b)
};

function vd(a, b) {
    a.moveTo(b.x + a.al.x, b.y + a.al.y)
}

function wd(a, b, c) {
    a.al.x = b;
    a.al.y = c
}

function xd(a) {
    var b = a.yb.xc - a.xc,
        c = a.yb.Fa - a.Fa;
    if (0 != b || 0 != c) {
        a = D(a);
        var e = a.N();
        if (!e) throw "block is not rendered.";
        e = B.h.$b(e);
        a.N().setAttribute("transform", "translate(" + (e.x - b) + "," + (e.y - c) + ")");
        yd(a, -b, -c)
    }
}
d.closest = function (a, b) {
    var c = this.Wj;
    if (c.length) {
        var e = this.Fa,
            f = this.xc;
        this.xc = f + b.x;
        this.Fa = e + b.y;
        var h = zd(c, this);
        b = null;
        for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Fa - this.Fa) <= a;) l = c[m], this.Gk(l, k) && (b = l, k = sd(l, this)), m--;
        for (; h < c.length && Math.abs(c[h].Fa - this.Fa) <= a;) l = c[h], this.Gk(l, k) && (b = l, k = sd(l, this)), h++;
        this.xc = f;
        this.Fa = e;
        a = {
            connection: b,
            vr: k
        }
    } else a = {
        connection: null,
        vr: a
    };
    return a
};
d.Dk = function () {
    var a = this.type == B.ab || this.type == B.Jg ? "m 0,0 " + Ad + " v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.w.ia();
    hd.uq = B.h.A("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.xc - b.x) + "," + (this.Fa - b.y) + ")" + (this.w.s ? " scale(-1 1)" : "")
    }, this.w.N())
};

function Bd(a) {
    Cd(a, !1);
    var b = [];
    if (a.type != B.ab && a.type != B.Ka) return b;
    if (a = D(a)) {
        if (a.isCollapsed()) {
            var c = [];
            a.S && c.push(a.S);
            a.P && c.push(a.P);
            a.V && c.push(a.V)
        } else c = a.Gd(!0);
        for (var e = 0; e < c.length; e++) b.push.apply(b, Bd(c[e]));
        b.length || (b[0] = a)
    }
    return b
}

function Dd() {
    F(hd.uq);
    delete hd.uq
}

function Cd(a, b) {
    (a.Km = b) && a.Ve ? md(a.Wc, a) : b || a.Ve || ud(a.Wc, a)
}
d.Gk = function (a, b) {
    return sd(this, a) > b ? !1 : rd.m.Gk.call(this, a)
};
d.mm = function (a, b) {
    rd.m.mm.call(this, a, b);
    a.R && a.Y();
    b.R && (Ed(b), b.Y())
};
d.Hn = function () {
    var a = this.w,
        b = this.Sd;
    if (a.o && b && B.i.Rb) {
        rd.m.Hn.call(this);
        b = D(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.We();
        b.Y(!1);
        a.R && a.Y()
    }
};
d.Rq = function (a) {
    return Fd(this.Wj, this, a)
};
d.Sj = function (a) {
    rd.m.Sj.call(this, a);
    var b = this.w;
    a = a.w;
    b.R && Ed(b);
    a.R && Ed(a);
    b.R && a.R && (this.type == B.Ka || this.type == B.He ? a.Y() : b.Y())
};
d.Xq = function () {
    this.isConnected() && !jd(this, this.yb) && (db(nd(this) ? D(this) : this.w), this.w.Ub())
};
// Copyright 2017 Google Inc.  Apache License 2.0
function Gd(a) {
    this.tf = B.selected = a;
    this.j = a.o;
    a = this.tf.Gd(!1);
    var b;
    a: {
        for (b = this.tf.P; b;) {
            var c = D(b);
            if (!c) break a;
            b = c.P
        }
        b = null
    }
    b && b != this.tf.P && a.push(b);
    this.Rl = a;
    this.kh = this.Ab = null;
    this.zn = 0;
    this.zf = !1
}
Gd.prototype.v = function () {
    this.j = this.tf = null;
    this.Rl.length = 0;
    this.kh = this.Ab = null
};
Gd.prototype.update = function (a, b) {
    var c = this.Ab,
        e = this.Ab;
    this.kh = this.Ab = null;
    this.zn = B.yc;
    for (var f = 0; f < this.Rl.length; f++) {
        var h = this.Rl[f],
            k = h.closest(this.zn, a);
        k.connection && (this.Ab = k.connection, this.kh = h, this.zn = k.vr)
    }(a = e != this.Ab) && c && Dd();
    c = !!this.Ab && b != B.vo;
    this.zf = (b = !!b && !this.tf.getParent() && this.tf.Ob()) && !c;
    b && this.Ab && (Dd(), this.Ab = null);
    !this.zf && a && this.Ab && this.Ab && this.Ab.Dk()
};

function Hd(a, b) {
    this.Qa = a;
    this.j = b;
    this.Kf = new Gd(this.Qa);
    this.Hf = null;
    this.zf = !1;
    this.Td = this.Qa.ia();
    b = [];
    a = Ja(a, !1);
    for (var c = 0, e; e = a[c]; c++) {
        e = Id(e);
        for (var f = 0; f < e.length; f++) b.push({
            location: e[f].eh,
            icon: e[f]
        })
    }
    this.dk = b
}
Hd.prototype.v = function () {
    this.Ra = this.j = this.Qa = null;
    this.dk.length = 0;
    this.Kf && (this.Kf.v(), this.Kf = null)
};

function Jd(a, b, c) {
    c = a.ph(c);
    a.Qa.Wk(Ha(a.Td, c));
    for (var e = 0; e < a.dk.length; e++) {
        var f = a.dk[e];
        Kd(f.icon, Ha(f.location, c))
    }
    a.Hf = Ld(a.j, b);
    a.Kf.update(c, a.Hf);
    a.zf = a.Kf.zf;
    b = a.j.vc;
    a.zf ? (a.Qa.fj(!0), a.Hf == B.Gl && b && Md(b, !0)) : (a.Qa.fj(!1), b && Md(b, !1))
}

function Nd(a, b, c) {
    Jd(a, b, c);
    a.dk = [];
    B.ya.om();
    b = a.ph(c);
    a.Qa.Oq(Ha(a.Td, b));
    c = a.j.vc;
    a.zf ? (c && setTimeout(c.close.bind(c), 100), a.ji(), a.Qa.v(!1, !0)) : c && c.close();
    a.zf || (yd(a.Qa, b.x, b.y), a.Qa.nf(!1), a.ji(), a.Kf.Ab ? (b = a.Kf, b.Ab && (b.kh.connect(b.Ab), b.tf.R && (B.ya.zt((nd(b.kh) ? b.Ab : b.kh).w), Od(td(b.tf))), b.Ab && Dd())) : a.Qa.Y(), Pd(a.Qa));
    a.j.wb(!0);
    (b = a.j.W) && B.h.vb(b.jc, a.Qa.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    B.i.T(!1)
}
Hd.prototype.ji = function () {
    var a = new B.i.Lh(this.Qa);
    a.fn = this.Td;
    a.ue();
    B.i.M(a)
};
Hd.prototype.ph = function (a) {
    a = new A(a.x / this.j.scale, a.y / this.j.scale);
    this.j.Ni && (a = a.scale(1 / this.j.options.Gc.scale));
    return a
};
var Qd = !G || 9 <= Number(Yb),
    Rd = !G || 9 <= Number(Yb),
    Sd = G && !Xb("9"),
    Td = "ontouchstart" in g || !!(g.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.navigator || !g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints),
    Ud = "PointerEvent" in g,
    Vd = "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
    Wd = function () {
        if (!g.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        g.addEventListener("test",
            ca, b);
        g.removeEventListener("test", ca, b);
        return a
    }();

function Xd() {
    0 != Yd && (Zd[ja(this)] = this);
    this.Qg = this.Qg;
    this.se = this.se
}
var Yd = 0,
    Zd = {};
Xd.prototype.Qg = !1;
Xd.prototype.v = function () {
    if (!this.Qg && (this.Qg = !0, this.Ia(), 0 != Yd)) {
        var a = ja(this);
        if (0 != Yd && this.se && 0 < this.se.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Zd[a]
    }
};

function $d(a, b) {
    a.Qg ? aa(void 0) ? b.call(void 0) : b() : (a.se || (a.se = []), a.se.push(aa(void 0) ? oa(b, void 0) : b))
}
Xd.prototype.Ia = function () {
    if (this.se)
        for (; this.se.length;) this.se.shift()()
};

function ae(a) {
    a && "function" == typeof a.v && a.v()
};

function be(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.hg = !1;
    this.zr = !0
}
be.prototype.stopPropagation = function () {
    this.hg = !0
};
be.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.zr = !1
};

function ce(a) {
    return H ? "webkit" + a : Kb ? "o" + a.toLowerCase() : a.toLowerCase()
}
var de = {
        Hw: "click",
        pz: "rightclick",
        Rw: "dblclick",
        Gg: "mousedown",
        Hg: "mouseup",
        Es: "mouseover",
        Ds: "mouseout",
        Cs: "mousemove",
        As: "mouseenter",
        Bs: "mouseleave",
        Fg: "mousecancel",
        vz: "selectionchange",
        wz: "selectstart",
        Xz: "wheel",
        Jx: "keypress",
        Ix: "keydown",
        Kx: "keyup",
        Ew: "blur",
        zx: "focus",
        Sw: "deactivate",
        Ax: "focusin",
        Bx: "focusout",
        Dg: "change",
        mz: "reset",
        uz: "select",
        Ez: "submit",
        Gx: "input",
        iz: "propertychange",
        lx: "dragstart",
        gx: "drag",
        ix: "dragenter",
        kx: "dragover",
        jx: "dragleave",
        qx: "drop",
        hx: "dragend",
        Mz: "touchstart",
        Lz: "touchmove",
        Kz: "touchend",
        Jz: "touchcancel",
        zw: "beforeunload",
        Mw: "consolemessage",
        Nw: "contextmenu",
        Tw: "devicechange",
        Uw: "devicemotion",
        Vw: "deviceorientation",
        Yw: "DOMContentLoaded",
        wx: "error",
        Fx: "help",
        Lx: "load",
        Tx: "losecapture",
        Ty: "orientationchange",
        kz: "readystatechange",
        nz: "resize",
        qz: "scroll",
        Oz: "unload",
        Fw: "canplay",
        Gw: "canplaythrough",
        tx: "durationchange",
        ux: "emptied",
        vx: "ended",
        Ox: "loadeddata",
        Px: "loadedmetadata",
        Xy: "pause",
        Yy: "play",
        Zy: "playing",
        jz: "ratechange",
        rz: "seeked",
        sz: "seeking",
        Bz: "stalled",
        Fz: "suspend",
        Iz: "timeupdate",
        Vz: "volumechange",
        Wz: "waiting",
        Az: "sourceopen",
        zz: "sourceended",
        yz: "sourceclosed",
        lw: "abort",
        Qz: "update",
        Tz: "updatestart",
        Rz: "updateend",
        Ex: "hashchange",
        Uy: "pagehide",
        Vy: "pageshow",
        hz: "popstate",
        Pw: "copy",
        Wy: "paste",
        Qw: "cut",
        tw: "beforecopy",
        uw: "beforecut",
        xw: "beforepaste",
        ty: "online",
        sy: "offline",
        Vx: "message",
        Lw: "connect",
        Hx: "install",
        mw: "activate",
        yx: "fetch",
        Cx: "foreignfetch",
        Wx: "messageerror",
        Cz: "statechange",
        Sz: "updatefound",
        Ow: "controllerchange",
        rw: ce("AnimationStart"),
        pw: ce("AnimationEnd"),
        qw: ce("AnimationIteration"),
        Nz: ce("TransitionEnd"),
        az: "pointerdown",
        gz: "pointerup",
        $y: "pointercancel",
        dz: "pointermove",
        fz: "pointerover",
        ez: "pointerout",
        bz: "pointerenter",
        cz: "pointerleave",
        Dx: "gotpointercapture",
        Ux: "lostpointercapture",
        Xx: "MSGestureChange",
        Yx: "MSGestureEnd",
        Zx: "MSGestureHold",
        $x: "MSGestureStart",
        ay: "MSGestureTap",
        by: "MSGotPointerCapture",
        ey: "MSInertiaStart",
        gy: "MSLostPointerCapture",
        hy: "MSPointerCancel",
        iy: "MSPointerDown",
        jy: "MSPointerEnter",
        ky: "MSPointerHover",
        ly: "MSPointerLeave",
        ny: "MSPointerMove",
        oy: "MSPointerOut",
        py: "MSPointerOver",
        qy: "MSPointerUp",
        Gz: "text",
        Hz: G ? "textinput" : "textInput",
        Jw: "compositionstart",
        Kw: "compositionupdate",
        Iw: "compositionend",
        vw: "beforeinput",
        xx: "exit",
        Mx: "loadabort",
        Nx: "loadcommit",
        Qx: "loadredirect",
        Rx: "loadstart",
        Sx: "loadstop",
        oz: "responsive",
        xz: "sizechanged",
        Pz: "unresponsive",
        Uz: "visibilitychange",
        Dz: "storage",
        ex: "DOMSubtreeModified",
        Zw: "DOMNodeInserted",
        ax: "DOMNodeRemoved",
        bx: "DOMNodeRemovedFromDocument",
        $w: "DOMNodeInsertedIntoDocument",
        Ww: "DOMAttrModified",
        Xw: "DOMCharacterDataModified",
        yw: "beforeprint",
        ow: "afterprint",
        ww: "beforeinstallprompt",
        sw: "appinstalled"
    },
    ee = {
        Gg: Ud ? "pointerdown" : Vd ? "MSPointerDown" : "mousedown",
        Hg: Ud ? "pointerup" : Vd ? "MSPointerUp" : "mouseup",
        Fg: Ud ? "pointercancel" : Vd ? "MSPointerCancel" : "mousecancel",
        Cs: Ud ? "pointermove" : Vd ? "MSPointerMove" : "mousemove",
        Es: Ud ? "pointerover" : Vd ? "MSPointerOver" : "mouseover",
        Ds: Ud ? "pointerout" : Vd ? "MSPointerOut" : "mouseout",
        As: Ud ? "pointerenter" : Vd ? "MSPointerEnter" : "mouseenter",
        Bs: Ud ? "pointerleave" : Vd ? "MSPointerLeave" : "mouseleave"
    };

function fe(a, b) {
    be.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.sn = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.Dd = null;
    a && this.$(a, b)
}
z(fe, be);
var ge = [1, 4, 2],
    he = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
fe.prototype.$ = function (a, b) {
    var c = this.type = a.type,
        e = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) {
        if (Mb) {
            a: {
                try {
                    Hb(b.nodeName);
                    var f = !0;
                    break a
                } catch (h) {}
                f = !1
            }
            f || (b = null)
        }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === e ? (this.offsetX = H || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = H || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.sn = Ob ? a.metaKey : a.ctrlKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = q(a.pointerType) ? a.pointerType : he[a.pointerType] || "";
    this.state = a.state;
    this.Dd = a;
    a.defaultPrevented && this.preventDefault()
};

function ie(a) {
    return Qd ? 0 == a.Dd.button : "click" == a.type ? !0 : !!(a.Dd.button & ge[0])
}
fe.prototype.stopPropagation = function () {
    fe.m.stopPropagation.call(this);
    this.Dd.stopPropagation ? this.Dd.stopPropagation() : this.Dd.cancelBubble = !0
};
fe.prototype.preventDefault = function () {
    fe.m.preventDefault.call(this);
    var a = this.Dd;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Sd) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var je = "closure_listenable_" + (1E6 * Math.random() | 0);

function ke(a) {
    return !(!a || !a[je])
}
var le = 0;

function me(a, b, c, e, f) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!e;
    this.Ck = f;
    this.key = ++le;
    this.vh = this.Lj = !1
}

function ne(a) {
    a.vh = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ck = null
};

function oe(a) {
    this.src = a;
    this.cc = {};
    this.rj = 0
}
oe.prototype.add = function (a, b, c, e, f) {
    var h = a.toString();
    a = this.cc[h];
    a || (a = this.cc[h] = [], this.rj++);
    var k = pe(a, b, e, f); - 1 < k ? (b = a[k], c || (b.Lj = !1)) : (b = new me(b, this.src, h, !!e, f), b.Lj = c, a.push(b));
    return b
};
oe.prototype.remove = function (a, b, c, e) {
    a = a.toString();
    if (!(a in this.cc)) return !1;
    var f = this.cc[a];
    b = pe(f, b, c, e);
    return -1 < b ? (ne(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.cc[a], this.rj--), !0) : !1
};

function qe(a, b) {
    var c = b.type;
    c in a.cc && ya(a.cc[c], b) && (ne(b), 0 == a.cc[c].length && (delete a.cc[c], a.rj--))
}
oe.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
        c;
    for (c in this.cc)
        if (!a || c == a) {
            for (var e = this.cc[c], f = 0; f < e.length; f++) ++b, ne(e[f]);
            delete this.cc[c];
            this.rj--
        }
    return b
};
oe.prototype.oi = function (a, b, c, e) {
    a = this.cc[a.toString()];
    var f = -1;
    a && (f = pe(a, b, c, e));
    return -1 < f ? a[f] : null
};

function pe(a, b, c, e) {
    for (var f = 0; f < a.length; ++f) {
        var h = a[f];
        if (!h.vh && h.listener == b && h.capture == !!c && h.Ck == e) return f
    }
    return -1
};
var re = "closure_lm_" + (1E6 * Math.random() | 0),
    se = {},
    te = 0;

function ue(a, b, c, e, f) {
    if (e && e.once) return ve(a, b, c, e, f);
    if (w(b)) {
        for (var h = 0; h < b.length; h++) ue(a, b[h], c, e, f);
        return null
    }
    c = we(c);
    return ke(a) ? a.ma(b, c, ia(e) ? !!e.capture : !!e, f) : xe(a, b, c, !1, e, f)
}

function xe(a, b, c, e, f, h) {
    if (!b) throw Error("Invalid event type");
    var k = ia(f) ? !!f.capture : !!f,
        l = ye(a);
    l || (a[re] = l = new oe(a));
    c = l.add(b, c, e, k, h);
    if (c.proxy) return c;
    e = ze();
    c.proxy = e;
    e.src = a;
    e.listener = c;
    if (a.addEventListener) Wd || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
    else if (a.attachEvent) a.attachEvent(Ae(b.toString()), e);
    else if (a.addListener && a.removeListener) a.addListener(e);
    else throw Error("addEventListener and attachEvent are unavailable.");
    te++;
    return c
}

function ze() {
    var a = Be,
        b = Rd ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function ve(a, b, c, e, f) {
    if (w(b)) {
        for (var h = 0; h < b.length; h++) ve(a, b[h], c, e, f);
        return null
    }
    c = we(c);
    return ke(a) ? a.Hq(b, c, ia(e) ? !!e.capture : !!e, f) : xe(a, b, c, !0, e, f)
}

function Ce(a, b, c, e, f) {
    if (w(b))
        for (var h = 0; h < b.length; h++) Ce(a, b[h], c, e, f);
    else e = ia(e) ? !!e.capture : !!e, c = we(c), ke(a) ? a.Nc(b, c, e, f) : a && (a = ye(a)) && (b = a.oi(b, c, e, f)) && De(b)
}

function De(a) {
    if (!v(a) && a && !a.vh) {
        var b = a.src;
        if (ke(b)) qe(b.je, a);
        else {
            var c = a.type,
                e = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(Ae(c), e) : b.addListener && b.removeListener && b.removeListener(e);
            te--;
            (c = ye(b)) ? (qe(c, a), 0 == c.rj && (c.src = null, b[re] = null)) : ne(a)
        }
    }
}

function Ae(a) {
    return a in se ? se[a] : se[a] = "on" + a
}

function Ee(a, b, c, e) {
    var f = !0;
    if (a = ye(a))
        if (b = a.cc[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var h = b[a];
                h && h.capture == c && !h.vh && (h = Fe(h, e), f = f && !1 !== h)
            }
    return f
}

function Fe(a, b) {
    var c = a.listener,
        e = a.Ck || a.src;
    a.Lj && De(a);
    return c.call(e, b)
}

function Be(a, b) {
    if (a.vh) return !0;
    if (!Rd) {
        if (!b) a: {
            b = ["window", "event"];
            for (var c = g, e = 0; e < b.length; e++)
                if (c = c[b[e]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        e = b;
        b = new fe(e, this);
        c = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (k) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = b.currentTarget; f; f = f.parentNode) e.push(f);a = a.type;
            for (f = e.length - 1; !b.hg && 0 <= f; f--) {
                b.currentTarget = e[f];
                var h = Ee(e[f], a, !0, b);
                c = c && h
            }
            for (f = 0; !b.hg && f < e.length; f++) b.currentTarget =
                e[f],
            h = Ee(e[f], a, !1, b),
            c = c && h
        }
        return c
    }
    return Fe(a, new fe(b, this))
}

function ye(a) {
    a = a[re];
    return a instanceof oe ? a : null
}
var Ge = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function we(a) {
    if (y(a)) return a;
    a[Ge] || (a[Ge] = function (b) {
        return a.handleEvent(b)
    });
    return a[Ge]
};
B.Touch = {};
B.Touch.pj = null;
B.Touch.yd = {};
g.PointerEvent ? B.Touch.yd = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : Td && (B.Touch.yd = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
B.Qk = 0;
B.av = function (a, b) {
    B.cf();
    a.changedTouches && 1 != a.changedTouches.length || (B.Qk = setTimeout(function () {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        b && He(b, a)
    }, B.ys))
};
B.cf = function () {
    B.Qk && (clearTimeout(B.Qk), B.Qk = 0)
};
B.Touch.ge = function () {
    B.Touch.pj = null
};
B.Touch.$n = function (a) {
    return !B.Touch.Ru(a) || B.Touch.rt(a)
};
B.Touch.yk = function (a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 != a.changedTouches[0].identifier && null != a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
B.Touch.rt = function (a) {
    var b = B.Touch.yk(a);
    return void 0 != B.Touch.pj && null != B.Touch.pj ? B.Touch.pj == b : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (B.Touch.pj = b, !0) : !1
};
B.Touch.Nv = function (a) {
    if (hb(a.type, "touch")) {
        var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY
    }
};
B.Touch.Ru = function (a) {
    return hb(a.type, "touch") || hb(a.type, "mouse") || hb(a.type, "pointer")
};
B.Touch.Mk = function (a) {
    return hb(a.type, "touch") || hb(a.type, "pointer")
};
B.Touch.Qv = function (a) {
    var b = [];
    if (a.changedTouches)
        for (var c = 0; c < a.changedTouches.length; c++) b[c] = {
            type: a.type,
            changedTouches: [a.changedTouches[c]],
            target: a.target,
            stopPropagation: function () {
                a.stopPropagation()
            },
            preventDefault: function () {
                a.preventDefault()
            }
        };
    else b.push(a);
    return b
};

function Ie(a) {
    Ie.m.constructor.call(this);
    this.xf = a.ga();
    this.hc = a.o.id
}
z(Ie, Ya);
Ie.prototype.ua = function () {
    var a = Ie.m.ua.call(this);
    a.varId = this.xf;
    return a
};
Ie.prototype.Z = function (a) {
    Ie.m.ua.call(this);
    this.xf = a.varId
};

function Oa(a) {
    a && (Oa.m.constructor.call(this, a), this.Ag = a.type, this.zg = a.name)
}
z(Oa, Ie);
Oa.prototype.type = B.i.Mo;
Oa.prototype.ua = function () {
    var a = Oa.m.ua.call(this);
    a.varType = this.Ag;
    a.varName = this.zg;
    return a
};
Oa.prototype.Z = function (a) {
    Oa.m.Z.call(this, a);
    this.Ag = a.varType;
    this.zg = a.varName
};
Oa.prototype.run = function (a) {
    var b = Za(this);
    a ? b.Vc(this.zg, this.Ag, this.xf) : b.If(this.xf)
};

function Pa(a) {
    a && (Pa.m.constructor.call(this, a), this.Ag = a.type, this.zg = a.name)
}
z(Pa, Ie);
Pa.prototype.type = B.i.No;
Pa.prototype.ua = function () {
    var a = Pa.m.ua.call(this);
    a.varType = this.Ag;
    a.varName = this.zg;
    return a
};
Pa.prototype.Z = function (a) {
    Pa.m.Z.call(this, a);
    this.Ag = a.varType;
    this.zg = a.varName
};
Pa.prototype.run = function (a) {
    var b = Za(this);
    a ? b.If(this.xf) : b.Vc(this.zg, this.Ag, this.xf)
};

function Qa(a, b) {
    a && (Qa.m.constructor.call(this, a), this.hn = a.name, this.dn = b)
}
z(Qa, Ie);
Qa.prototype.type = B.i.Oo;
Qa.prototype.ua = function () {
    var a = Qa.m.ua.call(this);
    a.oldName = this.hn;
    a.newName = this.dn;
    return a
};
Qa.prototype.Z = function (a) {
    Qa.m.Z.call(this, a);
    this.hn = a.oldName;
    this.dn = a.newName
};
Qa.prototype.run = function (a) {
    var b = Za(this);
    a ? b.jg(this.xf, this.dn) : b.jg(this.xf, this.hn)
};

function Je(a) {
    this.na = {};
    this.o = a
}
d = Je.prototype;
d.clear = function () {
    this.na = Object(null)
};
d.Cn = function (a, b) {
    var c = this.md(b, a.type),
        e = Ke(this.o);
    B.i.T(!0);
    try {
        if (c && c.ga() != a.ga()) {
            var f = a.type;
            b != c.name && Le(c, b, e);
            for (b = 0; b < e.length; b++)
                for (var h = void 0, k = e[b], l = a.ga(), m = c.ga(), n = 0; h = k.X[n]; n++)
                    for (var u = 0, p; p = h.Na[u]; u++) p.sh() && l == p.getValue() && p.setValue(m);
            B.i.M(new Pa(a));
            this.na[f].splice(this.ti(f).indexOf(a), 1)
        } else Le(a, b, e)
    } finally {
        B.i.T(!1)
    }
};
d.jg = function (a, b) {
    var c = this.oe(a);
    if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.Cn(c, b)
};

function Le(a, b, c) {
    B.i.M(new Qa(a, b));
    a.name = b;
    for (b = 0; b < c.length; b++)
        for (var e, f = c[b], h = a, k = 0; e = f.X[k]; k++)
            for (var l = 0, m; m = e.Na[l]; l++) m.sh() && h.ga() == m.getValue() && m.xb(h.name)
}
d.Vc = function (a, b, c) {
    var e = this.md(a, b);
    if (e) {
        if (c && e.ga() != c) throw Error('Variable "' + a + '" is already in use and its id is "' + e.ga() + '" which conflicts with the passed in id, "' + c + '".');
        return e
    }
    if (c && this.oe(c)) throw Error('Variable id, "' + c + '", is already in use.');
    c = c || B.h.Fd();
    b = b || "";
    e = new Me(this.o, a, b, c);
    this.na[b] ? this.na[b].push(e) : this.na[b] = [e];
    return e
};
d.If = function (a) {
    var b = this.oe(a);
    if (b) {
        var c = b.name,
            e = this.Dm(a);
        a = 0;
        for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
                a = Ne(f, "NAME");
                c = B.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace("%2", a);
                B.alert(c);
                return
            }
        var h = this;
        1 < e.length ? (c = B.g.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", c), B.confirm(c, function (a) {
            a && h.Zj(b, e)
        })) : h.Zj(b, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};
d.Zj = function (a, b) {
    var c = B.i.Zb();
    c || B.i.T(!0);
    try {
        for (var e = 0; e < b.length; e++) b[e].v(!0, !1);
        var f = this.na[a.type];
        b = 0;
        for (var h; h = f[b]; b++)
            if (h.ga() == a.ga()) {
                f.splice(b, 1);
                B.i.M(new Pa(a));
                break
            }
    } finally {
        c || B.i.T(!1)
    }
};
d.md = function (a, b) {
    if (b = this.na[b || ""])
        for (var c = 0, e; e = b[c]; c++)
            if (e.name.toLowerCase() == a.toLowerCase()) return e;
    return null
};
d.oe = function (a) {
    for (var b = Object.keys(this.na), c = 0; c < b.length; c++)
        for (var e = b[c], f = 0, h; h = this.na[e][f]; f++)
            if (h.ga() == a) return h;
    return null
};
d.ti = function (a) {
    return (a = this.na[a || ""]) ? a.slice() : []
};
d.Cm = function () {
    for (var a = Object.keys(this.na), b = !1, c = 0; c < a.length; c++) "" == a[c] && (b = !0);
    b || a.push("");
    return a
};
d.ke = function () {
    for (var a = [], b = Object.keys(this.na), c = 0; c < b.length; c++) a = a.concat(this.na[b[c]]);
    return a
};
d.Dm = function (a) {
    for (var b = [], c = Ke(this.o), e = 0; e < c.length; e++) {
        var f = Oe(c[e]);
        if (f)
            for (var h = 0; h < f.length; h++) f[h].ga() == a && b.push(c[e])
    }
    return b
};

function Pe(a) {
    this.jd = a.id;
    this.hc = a.o.id;
    this.group = B.i.zk;
    this.Rb = B.i.Rb
}
z(Pe, Ya);
Pe.prototype.ua = function () {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    this.jd && (a.commentId = this.jd);
    return a
};
Pe.prototype.Z = function (a) {
    this.jd = a.commentId;
    this.group = a.group
};

function Ta(a, b, c) {
    a && (Ta.m.constructor.call(this, a), this.Tq = b, this.Yk = c)
}
z(Ta, Pe);
d = Ta.prototype;
d.type = B.i.qo;
d.ua = function () {
    var a = Ta.m.ua.call(this);
    a.newContents = this.Yk;
    return a
};
d.Z = function (a) {
    Ta.m.Z.call(this, a);
    this.Yk = a.newValue
};
d.gh = function () {
    return this.Tq == this.Yk
};
d.run = function (a) {
    var b = Qe(Za(this), this.jd);
    b ? b.cd(a ? this.Yk : this.Tq) : console.warn("Can't change non-existent comment: " + this.jd)
};

function Sa(a) {
    a && (Sa.m.constructor.call(this, a), this.xml = a.oj())
}
z(Sa, Pe);
Sa.prototype.type = B.i.ro;
Sa.prototype.ua = function () {
    var a = Sa.m.ua.call(this);
    a.xml = B.D.pc(this.xml);
    return a
};
Sa.prototype.Z = function (a) {
    Sa.m.Z.call(this, a);
    this.xml = B.D.Kc("<xml>" + a.xml + "</xml>").firstChild
};
Sa.prototype.run = function (a) {
    var b = Za(this);
    a ? (a = C("xml"), a.appendChild(this.xml), B.D.ie(a, b)) : (b = Qe(b, this.jd)) ? b.v(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.jd)
};

function Va(a) {
    a && (Va.m.constructor.call(this, a), this.xml = a.oj())
}
z(Va, Pe);
Va.prototype.type = B.i.so;
Va.prototype.ua = function () {
    return Va.m.ua.call(this)
};
Va.prototype.Z = function (a) {
    Va.m.Z.call(this, a)
};
Va.prototype.run = function (a) {
    var b = Za(this);
    a ? (b = Qe(b, this.jd)) ? b.v(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.jd) : (a = C("xml"), a.appendChild(this.xml), B.D.ie(a, b))
};

function Ua(a) {
    a && (Ua.m.constructor.call(this, a), this.Zl = a, this.gn = a.Pc.clone(), this.Zf = null)
}
z(Ua, Pe);
d = Ua.prototype;
d.ue = function () {
    if (!this.Zl) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.Zf = this.Zl.Pc.clone();
    this.Zl = null
};
d.type = B.i.to;
d.ua = function () {
    var a = Ua.m.ua.call(this);
    this.Zf && (a.newCoordinate = Math.round(this.Zf.x) + "," + Math.round(this.Zf.y));
    return a
};
d.Z = function (a) {
    Ua.m.Z.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Zf = new A(parseFloat(a[0]), parseFloat(a[1])))
};
d.gh = function () {
    return Ea(this.gn, this.Zf)
};
d.run = function (a) {
    var b = Qe(Za(this), this.jd);
    if (b) {
        a = a ? this.Zf : this.gn;
        var c = b.Pc.clone();
        b.moveBy(a.x - c.x, a.y - c.y)
    } else console.warn("Can't move non-existent comment: " + this.jd)
};

function Re(a, b, c, e, f) {
    this.id = f && !Qe(a, f) ? f : B.h.Fd();
    a.Fh.push(this);
    a.Qj[this.id] && console.warn('Overriding an existing comment on this workspace, with id "' + this.id + '"');
    a.Qj[this.id] = this;
    this.Pc = new A(0, 0);
    this.xa = c;
    this.aa = e;
    this.o = a;
    this.s = a.s;
    this.Xi = this.ci = !0;
    this.Bc = b;
    this.zq = !0;
    Se(this)
}
d = Re.prototype;
d.v = function () {
    if (this.o) {
        B.i.isEnabled() && B.i.M(new Va(this));
        var a = this.o;
        if (!ya(a.Fh, this)) throw "Comment not present in workspace's list of top-most comments.";
        delete a.Qj[this.id];
        this.o = null
    }
};
d.Xg = function () {
    return this.xa
};
d.Ec = function () {
    return this.aa
};
d.moveBy = function (a, b) {
    var c = new Ua(this);
    this.Pc.translate(a, b);
    c.ue();
    B.i.M(c)
};
d.Ob = function () {
    return this.ci && !(this.o && this.o.options.readOnly)
};
d.Rn = function (a) {
    this.ci = a
};
d.Nd = function () {
    return this.Xi && !(this.o && this.o.options.readOnly)
};
d.ng = function (a) {
    this.Xi = a
};
d.qc = function () {
    return this.Bc
};
d.cd = function (a) {
    this.Bc != a && (B.i.M(new Ta(this, this.Bc, a)), this.Bc = a)
};
d.oj = function (a) {
    a = Te(this, a);
    a.setAttribute("x", Math.round(this.Pc.x));
    a.setAttribute("y", Math.round(this.Pc.y));
    a.setAttribute("h", this.xa);
    a.setAttribute("w", this.aa);
    return a
};

function Te(a, b) {
    var c = C("comment");
    b || c.setAttribute("id", a.id);
    c.textContent = a.qc();
    return c
}

function Se(a) {
    if (B.i.isEnabled()) {
        var b = B.i.Zb();
        b || B.i.T(!0);
        try {
            B.i.M(new Sa(a))
        } finally {
            b || B.i.T(!1)
        }
    }
}

function Ue(a) {
    var b = a.getAttribute("h"),
        c = a.getAttribute("w");
    return {
        id: a.getAttribute("id"),
        lq: b ? parseInt(b, 10) : 100,
        bs: c ? parseInt(c, 10) : 100,
        x: parseInt(a.getAttribute("x"), 10),
        y: parseInt(a.getAttribute("y"), 10),
        content: a.textContent
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function Ve(a) {
    this.id = B.h.Fd();
    Ia[this.id] = this;
    this.options = a || {};
    this.s = !!this.options.s;
    this.Ld = !!this.options.Ld;
    this.wa = this.options.wa;
    this.Eh = [];
    this.Fh = [];
    this.Qj = Object.create(null);
    this.dc = [];
    this.yg = [];
    this.aj = [];
    this.Sl = Object.create(null);
    this.na = new Je(this);
    this.rh = null
}
d = Ve.prototype;
d.R = !1;
d.Qm = !1;
d.zs = 1024;
d.v = function () {
    this.dc.length = 0;
    this.clear();
    delete Ia[this.id]
};

function We(a, b) {
    if (!ya(a.Eh, b)) throw "Block not present in workspace's list of top-most blocks.";
}

function I(a, b) {
    var c = [].concat(a.Eh);
    if (b && 1 < c.length) {
        var e = Math.sin(3 * Math.PI / 180);
        a.s && (e *= -1);
        c.sort(function (a, b) {
            a = a.ia();
            b = b.ia();
            return a.y + e * a.x - (b.y + e * b.x)
        })
    }
    return c
}

function Xe(a, b) {
    var c = [].concat(a.Fh);
    if (b && 1 < c.length) {
        var e = Math.sin(3 * Math.PI / 180);
        a.s && (e *= -1);
        c.sort(function (a, b) {
            a = a.ia();
            b = b.ia();
            return a.y + e * a.x - (b.y + e * b.x)
        })
    }
    return c
}

function Ke(a) {
    var b = I(a, !1);
    for (a = 0; a < b.length; a++) b.push.apply(b, b[a].le(!1));
    return b
}
d.clear = function () {
    this.Qm = !0;
    try {
        var a = B.i.Zb();
        for (a || B.i.T(!0); this.Eh.length;) this.Eh[0].v();
        for (; this.Fh.length;) this.Fh[this.Fh.length - 1].v();
        a || B.i.T(!1);
        this.na.clear();
        this.rh && this.rh.clear()
    } finally {
        this.Qm = !1
    }
};
d.jg = function (a, b) {
    this.na.jg(a, b)
};
d.Vc = function (a, b, c) {
    return this.na.Vc(a, b, c)
};
d.Dm = function (a) {
    return this.na.Dm(a)
};
d.If = function (a) {
    this.na.If(a)
};
d.Zj = function (a, b) {
    this.na.Zj(a, b)
};
d.md = function (a, b) {
    return this.na.md(a, b)
};
d.oe = function (a) {
    return this.na.oe(a)
};
d.ti = function (a) {
    return this.na.ti(a)
};
d.Cm = function () {
    return this.na.Cm()
};
d.ke = function () {
    return this.na.ke()
};
d.Ec = function () {
    return 0
};
d.Sq = function (a, b) {
    return new Ye(this, a, b)
};

function Ze(a) {
    return isNaN(a.options.Iq) ? Infinity : a.options.Iq - Ke(a).length
}
d.no = function (a) {
    var b = a ? this.aj : this.yg,
        c = a ? this.yg : this.aj,
        e = b.pop();
    if (e) {
        for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group;) f.push(b.pop());
        for (b = 0; e = f[b]; b++) c.push(e);
        f = B.i.filter(f, a);
        B.i.Rb = !1;
        try {
            for (b = 0; e = f[b]; b++) e.run(a)
        } finally {
            B.i.Rb = !0
        }
    }
};
d.hp = function () {
    this.yg.length = 0;
    this.aj.length = 0;
    B.i.tt()
};
d.lc = function (a) {
    this.dc.push(a);
    return a
};
d.hf = function (a) {
    ya(this.dc, a)
};

function Wa(a, b) {
    return a.Sl[b] || null
}

function Qe(a, b) {
    return a.Qj[b] || null
}
var Ia = Object.create(null);
Ve.prototype.clear = Ve.prototype.clear;
Ve.prototype.clearUndo = Ve.prototype.hp;
Ve.prototype.addChangeListener = Ve.prototype.lc;
Ve.prototype.removeChangeListener = Ve.prototype.hf;

function $e(a, b, c, e, f, h) {
    this.j = a;
    this.Bc = b;
    this.Hr = c;
    c = af;
    this.j.s && (c = -c);
    this.at = c * Math.PI / 180;
    a.vd.appendChild(this.Zh(b, !(!f || !h)));
    this.gd = e;
    this.kg && bf(this);
    f && h || (b = this.Bc.getBBox(), f = b.width + 2 * cf, h = b.height + 2 * cf);
    this.lf(f, h);
    bf(this);
    df(this);
    this.kg = !0;
    a.options.readOnly || (B.J(this.Th, "mousedown", this, this.gt), this.pb && B.J(this.pb, "mousedown", this, this.En))
}
var cf = 6,
    af = 20,
    ef = null,
    ff = null;
d = $e.prototype;
d.Dn = null;

function gf() {
    ef && (B.Aa(ef), ef = null);
    ff && (B.Aa(ff), ff = null)
}

function hf() {
    B.Touch.ge();
    gf()
}
d.kg = !1;
d.gd = null;
d.uh = 0;
d.bj = 0;
d.aa = 0;
d.xa = 0;
d.Kj = !0;
d.Zh = function (a, b) {
    this.zc = B.h.A("g", {}, null);
    var c = {
        filter: "url(#" + this.j.options.Yp + ")"
    }; - 1 != zb.indexOf("JavaFX") && (c = {});
    c = B.h.A("g", c, this.zc);
    this.Ul = B.h.A("path", {}, c);
    this.Th = B.h.A("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: cf,
        ry: cf
    }, c);
    b ? (this.pb = B.h.A("g", {
        "class": this.j.s ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.zc), b = 2 * cf, B.h.A("polygon", {
        points: "0,x x,x x,0".replace(/x/g, b.toString())
    }, this.pb), B.h.A("line", {
        "class": "blocklyResizeLine",
        x1: b / 3,
        y1: b - 1,
        x2: b - 1,
        y2: b / 3
    }, this.pb), B.h.A("line", {
        "class": "blocklyResizeLine",
        x1: 2 * b / 3,
        y1: b - 1,
        x2: b - 1,
        y2: 2 * b / 3
    }, this.pb)) : this.pb = null;
    this.zc.appendChild(a);
    return this.zc
};
d.N = function () {
    return this.zc
};

function jf(a, b) {
    a.zc.dataset && (a.zc.dataset.Jb = b)
}
d.gt = function (a) {
    var b = this.j.Hd(a);
    b && (b.gc || (b.gc = this), b.tc = a)
};
d.Ah = function () {};
d.Ob = function () {
    return !1
};
d.En = function (a) {
    kf(this);
    gf();
    B.h.$e(a) || (this.j.xl(a, new A(this.j.s ? -this.aa : this.aa, this.xa)), ef = B.J(document, "mouseup", this, hf), ff = B.J(document, "mousemove", this, this.Fn), B.Bb());
    a.stopPropagation()
};
d.Fn = function (a) {
    this.Kj = !1;
    a = lf(this.j, a);
    this.lf(this.j.s ? -a.x : a.x, a.y);
    this.j.s && bf(this)
};

function kf(a) {
    var b = a.zc.parentNode;
    return b.lastChild !== a.zc ? (b.appendChild(a.zc), !0) : !1
}

function bf(a) {
    var b = a.gd.x;
    b = a.j.s ? b - (a.uh + a.aa) : b + a.uh;
    a.moveTo(b, a.bj + a.gd.y)
}
d.moveTo = function (a, b) {
    this.zc.setAttribute("transform", "translate(" + a + "," + b + ")")
};
d.Of = function () {
    return {
        width: this.aa,
        height: this.xa
    }
};
d.lf = function (a, b) {
    var c = 2 * cf;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 20);
    this.aa = a;
    this.xa = b;
    this.Th.setAttribute("width", a);
    this.Th.setAttribute("height", b);
    this.pb && (this.j.s ? this.pb.setAttribute("transform", "translate(" + 2 * cf + "," + (b - c) + ") scale(-1 1)") : this.pb.setAttribute("transform", "translate(" + (a - c) + "," + (b - c) + ")"));
    if (this.kg) {
        if (this.Kj) {
            a = -this.aa / 4;
            b = -this.xa - 25;
            c = this.j.eb();
            c.va /= this.j.scale;
            c.gb /= this.j.scale;
            var e = this.gd.x;
            this.j.s ? e - c.gb - a - this.aa < J ? a = e - c.gb - this.aa - J : e - c.gb - a > c.va && (a =
                e - c.gb - c.va) : e + a < c.gb ? a = c.gb - e : c.gb + c.va < e + a + this.aa + 10 + J && (a = c.gb + c.va - e - this.aa - J);
            this.gd.y + b < c.Xd && (b = this.Hr.getBBox().height);
            this.uh = a;
            this.bj = b
        }
        bf(this);
        df(this)
    }
    this.Dn && this.Dn()
};

function df(a) {
    var b = [],
        c = a.aa / 2,
        e = a.xa / 2,
        f = -a.uh,
        h = -a.bj;
    if (c == f && e == h) b.push("M " + c + "," + e);
    else {
        h -= e;
        f -= c;
        a.j.s && (f *= -1);
        var k = Math.sqrt(h * h + f * f),
            l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            u = Math.cos(m),
            p = a.Of();
        m = (p.width + p.height) / 5;
        m = Math.min(m, p.width, p.height) / 4;
        p = 1 - 8 / k;
        f = c + p * f;
        h = e + p * h;
        p = c + m * u;
        var t = e + m * n;
        c -= m * u;
        e -= m * n;
        n = l + a.at;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + p + "," + t);
        b.push("C" + (p + k) + "," +
            (t + l) + " " + f + "," + h + " " + f + "," + h);
        b.push("C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e)
    }
    b.push("z");
    a.Ul.setAttribute("d", b.join(" "))
}
d.we = function (a) {
    this.Th.setAttribute("fill", a);
    this.Ul.setAttribute("fill", a)
};
d.v = function () {
    gf();
    F(this.zc);
    this.Hr = this.Bc = this.j = this.pb = this.Th = this.Ul = this.zc = null
};
d.Wk = function (a, b) {
    a ? a.Ce(b.x, b.y) : this.moveTo(b.x, b.y);
    this.uh = this.j.s ? this.gd.x - b.x - this.aa : b.x - this.gd.x;
    this.bj = b.y - this.gd.y;
    df(this)
};
d.ia = function () {
    return new A(this.gd.x + this.uh, this.gd.y + this.bj)
};
d.Dr = function (a) {
    this.Kj = a
};

function mf(a, b, c, e, f) {
    this.u = B.h.A("g", {
        "class": "blocklyComment"
    }, null);
    this.u.De = "";
    this.nj = B.h.A("rect", {
        "class": "blocklyCommentRect",
        x: 0,
        y: 0,
        rx: 3,
        ry: 3
    });
    this.u.appendChild(this.nj);
    this.kg = !1;
    this.Wd = B.h.Ze() && !!a.cb;
    mf.m.constructor.call(this, a, b, c, e, f);
    this.Y()
}
z(mf, Re);
d = mf.prototype;
d.v = function () {
    if (this.o) {
        if (B.selected == this) {
            this.vf();
            var a = this.o;
            a.ib && a.ib.cancel()
        }
        B.i.isEnabled() && B.i.M(new Va(this));
        F(this.u);
        this.vg = this.sf = this.Cc = this.Za = this.nj = this.u = null;
        B.i.disable();
        mf.m.v.call(this);
        B.i.enable()
    }
};
d.We = function () {
    this.o.options.readOnly || this.sm || (B.J(this.sf, "mousedown", this, this.lr), B.J(this.vg, "mousedown", this, this.lr));
    this.sm = !0;
    nf(this);
    this.N().parentNode || this.o.vd.appendChild(this.N())
};
d.lr = function (a) {
    var b = this.o.Hd(a);
    b && (b.gc || (b.gc = this), b.tc = a)
};
d.Ah = function (a) {
    if (!this.o.options.readOnly) {
        var b = [];
        this.Ob() && this.Nd() && (b.push(B.ca.wt(this)), b.push(B.ca.vt(this)));
        B.ca.show(a, b, this.s)
    }
};
d.select = function () {
    if (B.selected != this) {
        var a = null;
        if (B.selected) {
            a = B.selected.id;
            B.i.disable();
            try {
                B.selected.vf()
            } finally {
                B.i.enable()
            }
        }
        a = new Ra(null, "selected", a, this.id);
        a.hc = this.o.id;
        B.i.M(a);
        B.selected = this;
        this.Lg()
    }
};
d.vf = function () {
    if (B.selected == this) {
        var a = new Ra(null, "selected", this.id, null);
        a.hc = this.o.id;
        B.i.M(a);
        B.selected = null;
        this.ig(); of (this)
    }
};
d.Lg = function () {
    B.h.Ua(this.u, "blocklySelected");
    this.Tn()
};
d.ig = function () {
    B.h.vb(this.u, "blocklySelected"); of (this)
};
d.ia = function () {
    var a = 0,
        b = 0,
        c = this.Wd ? this.o.cb.Zb() : null,
        e = this.N();
    if (e) {
        do {
            var f = B.h.$b(e);
            a += f.x;
            b += f.y;
            this.Wd && this.o.cb.Cd.firstChild == e && (f = this.o.cb.xk(), a += f.x, b += f.y);
            e = e.parentNode
        } while (e && e != this.o.vd && e != c)
    }
    return this.Pc = new A(a, b)
};
d.moveBy = function (a, b) {
    var c = new Ua(this),
        e = this.ia();
    this.translate(e.x + a, e.y + b);
    this.Pc = new A(e.x + a, e.y + b);
    c.ue();
    B.i.M(c);
    pf(this.o)
};
d.translate = function (a, b) {
    this.Pc = new A(a, b);
    this.N().setAttribute("transform", "translate(" + a + "," + b + ")")
};
d.Xk = function () {
    if (this.Wd) {
        var a = this.ia();
        B.h.removeAttribute(this.N(), "transform");
        this.o.cb.Ce(a.x, a.y);
        qf(this.o.cb, this.N())
    }
};
d.Oq = function (a) {
    this.Wd && (this.translate(a.x, a.y), this.o.cb.Vh(this.o.Da))
};
d.Wk = function (a, b) {
    a ? a.Ce(b.x, b.y) : (this.u.De = "translate(" + b.x + "," + b.y + ")", this.u.setAttribute("transform", this.u.De + this.u.rg))
};
d.moveTo = function (a, b) {
    this.translate(a, b)
};
d.xm = function () {
    var a = this.ia(),
        b = this.sb();
    if (this.s) {
        var c = new A(a.x - b.width, a.y);
        a = new A(a.x, a.y + b.height)
    } else c = new A(a.x, a.y), a = new A(a.x + b.width, a.y + b.height);
    return {
        Mc: c,
        hd: a
    }
};

function nf(a) {
    a.Nd() ? B.h.Ua(a.u, "blocklyDraggable") : B.h.vb(a.u, "blocklyDraggable")
}
d.ng = function (a) {
    mf.m.ng.call(this, a);
    nf(this)
};
d.nf = function (a) {
    a ? (a = this.N(), a.De = "", a.rg = "", B.h.Ua(this.u, "blocklyDragging")) : B.h.vb(this.u, "blocklyDragging")
};
d.N = function () {
    return this.u
};
d.qc = function () {
    return this.Za ? this.Za.value : this.Bc
};
d.cd = function (a) {
    mf.m.cd.call(this, a);
    this.Za && (this.Za.value = a)
};
d.fj = function (a) {
    a ? B.h.Ua(this.u, "blocklyDraggingDelete") : B.h.vb(this.u, "blocklyDraggingDelete")
};
d.Dr = function () {};

function rf(a, b, c) {
    B.i.disable();
    try {
        var e = Ue(a),
            f = new mf(b, e.content, e.lq, e.bs, e.id);
        b.R && (f.We(), f.Y(!1));
        if (!isNaN(e.x) && !isNaN(e.y))
            if (b.s) {
                var h = c || b.Ec();
                f.moveBy(h - e.x, e.y)
            } else f.moveBy(e.x, e.y)
    } finally {
        B.i.enable()
    }
    Se(f);
    return f
}
d.oj = function (a) {
    var b;
    this.o.s && (b = this.o.Ec());
    a = Te(this, a);
    var c = this.ia();
    a.setAttribute("x", Math.round(this.o.s ? b - c.x : c.x));
    a.setAttribute("y", Math.round(c.y));
    a.setAttribute("h", this.Xg());
    a.setAttribute("w", this.Ec());
    return a
};

function sf(a, b) {
    this.jb = a;
    this.j = b;
    this.Hf = null;
    this.Dl = !1;
    this.Td = this.jb.ia();
    this.Jf = B.h.Ze() && b.cb ? b.cb : null
}
sf.prototype.v = function () {
    this.Jf = this.j = this.jb = null
};

function tf(a, b, c) {
    c = a.ph(c);
    a.jb.Wk(a.Jf, Ha(a.Td, c));
    a.jb.Ob() && (a.Hf = Ld(a.j, b), a.Dl = a.Hf != B.uo, b = a.j.vc, a.Dl ? (a.jb.fj(!0), a.Hf == B.Gl && b && Md(b, !0)) : (a.jb.fj(!1), b && Md(b, !1)))
}

function uf(a, b, c) {
    tf(a, b, c);
    b = a.ph(c);
    b = Ha(a.Td, b);
    a.jb.moveTo(b.x, b.y);
    b = a.j.vc;
    a.Dl ? (b && setTimeout(b.close.bind(b), 100), a.ji(), a.jb.v(!1, !0)) : b && b.close();
    a.Dl || (a.Jf && a.Jf.Vh(a.j.vd), a.jb.nf && a.jb.nf(!1), a.ji());
    a.j.wb(!0);
    a.j.W && B.h.vb(a.j.W.jc, a.jb.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    B.i.T(!1)
}
sf.prototype.ji = function () {
    if (this.jb.zq) {
        var a = new Ua(this.jb);
        a.gn = this.Td;
        a.ue();
        B.i.M(a)
    }
};
sf.prototype.ph = function (a) {
    a = new A(a.x / this.j.scale, a.y / this.j.scale);
    this.j.Ni && (a = a.scale(1 / this.j.options.Gc.scale));
    return a
};
sf.prototype.Xk = function () {
    this.jb.moveTo(0, 0);
    this.Jf.Ce(this.Td.x, this.Td.y);
    qf(this.Jf, this.jb.N())
};
B.iA = {};
B.xo = 5;
B.ps = 10;
B.yc = 20;
B.zj = 250;
B.ks = 30;
B.ys = 750;
B.Ls = 100;
B.os = !0;
B.us = .45;
B.vs = .65;
B.Tb = {
    width: 96,
    height: 124,
    url: "sprites.png"
};
B.kc = "http://www.w3.org/2000/svg";
B.Ge = "http://www.w3.org/1999/xhtml";
B.ab = 1;
B.Jg = 2;
B.Ka = 3;
B.He = 4;
B.Yd = 5;
B.Kh = -1;
B.wj = 0;
B.xj = 1;
B.ox = 0;
B.px = 1;
B.mx = 1;
B.nx = 2;
B.Ig = [];
B.Ig[B.ab] = B.Jg;
B.Ig[B.Jg] = B.ab;
B.Ig[B.Ka] = B.He;
B.Ig[B.He] = B.Ka;
B.Je = 0;
B.Cf = 1;
B.Ie = 2;
B.xd = 3;
B.uo = null;
B.Gl = 1;
B.vo = 2;
B.Lo = "VARIABLE";
B.Os = "VARIABLE_DYNAMIC";
B.Io = "PROCEDURE";
B.Jo = "RENAME_VARIABLE_ID";
B.wo = "DELETE_VARIABLE_ID";

function Ra(a, b, c, e) {
    Ra.m.constructor.call(this);
    this.Jb = a ? a.id : null;
    this.hc = a ? a.o.id : null;
    this.element = b;
    this.oldValue = c;
    this.newValue = e;
    this.Rb = !1
}
z(Ra, Ya);
Ra.prototype.type = B.i.Ij;
Ra.prototype.ua = function () {
    var a = Ra.m.ua.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.Jb && (a.blockId = this.Jb);
    return a
};
Ra.prototype.Z = function (a) {
    Ra.m.Z.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.Jb = a.blockId
};

function vf(a) {
    this.j = a;
    this.Sv = a.eb();
    this.Uv = new A(a.scrollX, a.scrollY)
}
vf.prototype.v = function () {
    this.j = null
};
vf.prototype.xl = function () {
    B.selected && B.selected.vf();
    wf(this.j)
};

function xf(a, b) {
    var c = a.Sv,
        e = Ha(a.Uv, b);
    b = Math.min(e.x, -c.Ac);
    e = Math.min(e.y, -c.nc);
    b = Math.max(b, c.va - c.Ac - c.oc);
    e = Math.max(e, c.Sa - c.nc - c.Vb);
    b = -b - c.Ac;
    e = -e - c.nc;
    a.Yr(b, e)
}
vf.prototype.Yr = function (a, b) {
    this.j.Xa.set(a, b)
};

function yf(a) {
    yf.m.constructor.call(this, a.ui());
    this.Eb = a.Eb;
    this.od = a.od
}
z(yf, vf);
yf.prototype.Yr = function (a, b) {
    this.od ? this.Eb.set(a) : this.Eb.set(b)
};
B.B = {};
B.B.visible = !1;
B.B.Ng = !1;
B.B.xs = 50;
B.B.Nq = 0;
B.B.jj = 0;
B.B.Vm = 0;
B.B.Wm = 0;
B.B.K = null;
B.B.dl = null;
B.B.Ao = 0;
B.B.Bo = 10;
B.B.Hs = 10;
B.B.ts = 750;
B.B.Hl = 5;
B.B.ba = null;
B.B.O = function () {
    B.B.ba || (B.B.ba = C("DIV", "blocklyTooltipDiv"), document.body.appendChild(B.B.ba))
};
B.B.Ef = function (a) {
    B.qb(a, "mouseover", null, B.B.Av);
    B.qb(a, "mouseout", null, B.B.zv);
    a.addEventListener("mousemove", B.B.yv, !1)
};
B.B.Av = function (a) {
    if (!B.B.Ng) {
        for (a = a.target; !q(a.Lc) && !y(a.Lc);) a = a.Lc;
        B.B.K != a && (B.B.Ca(), B.B.dl = null, B.B.K = a);
        clearTimeout(B.B.Nq)
    }
};
B.B.zv = function () {
    B.B.Ng || (B.B.Nq = setTimeout(function () {
        B.B.K = null;
        B.B.dl = null;
        B.B.Ca()
    }, 1), clearTimeout(B.B.jj))
};
B.B.yv = function (a) {
    if (B.B.K && B.B.K.Lc && !B.H.U() && !B.B.Ng)
        if (B.B.visible) {
            var b = B.B.Vm - a.pageX;
            a = B.B.Wm - a.pageY;
            Math.sqrt(b * b + a * a) > B.B.Hs && B.B.Ca()
        } else B.B.dl != B.B.K && (clearTimeout(B.B.jj), B.B.Vm = a.pageX, B.B.Wm = a.pageY, B.B.jj = setTimeout(B.B.Ov, B.B.ts))
};
B.B.Ca = function () {
    B.B.visible && (B.B.visible = !1, B.B.ba && (B.B.ba.style.display = "none"));
    B.B.jj && clearTimeout(B.B.jj)
};
B.B.block = function () {
    B.B.Ca();
    B.B.Ng = !0
};
B.B.dw = function () {
    B.B.Ng = !1
};
B.B.Ov = function () {
    if (!B.B.Ng && (B.B.dl = B.B.K, B.B.ba)) {
        Xc(B.B.ba);
        for (var a = B.B.K.Lc; y(a);) a = a();
        a = B.h.gs(a, B.B.xs);
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) {
            var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            B.B.ba.appendChild(c)
        }
        a = B.B.K.s;
        b = Rc();
        B.B.ba.style.direction = a ? "rtl" : "ltr";
        B.B.ba.style.display = "block";
        B.B.visible = !0;
        c = B.B.Vm;
        c = a ? c - (B.B.Ao + B.B.ba.offsetWidth) : c + B.B.Ao;
        var e = B.B.Wm + B.B.Bo;
        e + B.B.ba.offsetHeight > b.height + window.scrollY && (e -= B.B.ba.offsetHeight +
            2 * B.B.Bo);
        a ? c = Math.max(B.B.Hl - window.scrollX, c) : c + B.B.ba.offsetWidth > b.width + window.scrollX - 2 * B.B.Hl && (c = b.width - B.B.ba.offsetWidth - 2 * B.B.Hl);
        B.B.ba.style.top = e + "px";
        B.B.ba.style.left = c + "px"
    }
};

function zf(a, b) {
    this.Ra = this.Hb = this.sg = this.tg = this.gc = this.Wb = this.Mq = null;
    this.Ct = b;
    this.Li = this.Wf = this.Mi = this.Rf = !1;
    this.tc = a;
    this.G = this.yf = this.$d = this.ae = this.cl = this.bl = null;
    this.Ik = this.qq = !1;
    this.rq = !B.os
}
d = zf.prototype;
d.v = function () {
    B.Touch.ge();
    B.B.dw();
    this.Ct.ib = null;
    this.bl && B.Aa(this.bl);
    this.cl && B.Aa(this.cl);
    this.G = this.Ra = this.Hb = this.sg = this.tg = null;
    this.$d && (this.$d.v(), this.$d = null);
    this.yf && (this.yf.v(), this.yf = null);
    this.ae && (this.ae.v(), this.ae = null)
};

function Af(a, b) {
    a.Wb = Ga(new A(b.clientX, b.clientY), a.Mq);
    if (a.Rf) var c = !1;
    else c = a.Wb, a.Rf = Math.sqrt(c.x * c.x + c.y * c.y) > (a.G ? B.ps : B.xo), c = a.Rf;
    if (c) {
        if (a.gc) {
            a.Li = !0;
            a.ae = new sf(a.gc, a.Ra);
            c = a.ae;
            B.i.Zb() || B.i.T(!0);
            c.j.wb(!1);
            c.jb.Dr(!1);
            c.Jf && c.Xk();
            c.jb.nf && c.jb.nf(!0);
            var e = c.j.W;
            e && B.h.Ua(e.jc, c.jb.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            tf(a.ae, a.tc, a.Wb);
            c = !0
        } else c = !1;
        if (!c) {
            if (a.Hb)
                if (a.G ? (a.Hb.disabled ? c = !1 : !Bf(a.G) || a.G.Aq(a.Wb) ? (a.Ra = a.G.pa, Cf(a.Ra), B.i.Zb() || B.i.T(!0), a.sg = null,
                        a.Hb = Df(a.G, a.Hb), a.Hb.select(), c = !0) : c = !1, a.Wf = c) : a.Hb.Nd() && (a.Wf = !0), a.Wf) {
                    a.$d = new Hd(a.Hb, a.Ra);
                    c = a.$d;
                    e = a.Wb;
                    var f = a.rq;
                    B.i.Zb() || B.i.T(!0);
                    c.j.wb(!1);
                    B.ya.om();
                    if (c.Qa.getParent() || f && c.Qa.P && D(c.Qa.P)) db(c.Qa, f), e = c.ph(e), e = Ha(c.Td, e), c.Qa.translate(e.x, e.y), B.ya.Tt(c.Qa);
                    c.Qa.nf(!0);
                    c.Qa.Xk();
                    (e = c.j.W) && B.h.Ua(e.jc, c.Qa.Ob() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                    Jd(a.$d, a.tc, a.Wb);
                    c = !0
                } else c = !1;
            else c = !1;
            !c && (a.G ? Bf(a.G) : a.Ra && a.Ra.Xa) && (a.yf = a.G ? new yf(a.G) : new vf(a.Ra), a.Mi = !0,
                a.yf.xl())
        }
        B.cf()
    }
    a.tc = b
}
d.ei = function (a) {
    B.h.Lk(a) ? this.cancel() : (this.qq = !0, B.ya.om(), Cf(this.Ra), this.Ra.Ni && this.Ra.resize(), Ef(this.Ra), this.tc = a, B.Bb(!!this.G), B.B.block(), this.Hb && this.Hb.select(), B.h.$e(a) ? He(this, a) : (("touchstart" == a.type.toLowerCase() || "pointerdown" == a.type.toLowerCase() && "mouse" != a.pointerType) && B.av(a, this), this.Mq = new A(a.clientX, a.clientY), this.rq = a.altKey || a.ctrlKey || a.metaKey, this.Ef(a)))
};
d.Ef = function (a) {
    this.bl = B.J(document, "mousemove", null, this.Ai.bind(this));
    this.cl = B.J(document, "mouseup", null, this.Bk.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
d.Ai = function (a) {
    Af(this, a);
    this.Mi ? xf(this.yf, this.Wb) : this.Wf ? Jd(this.$d, this.tc, this.Wb) : this.Li && tf(this.ae, this.tc, this.Wb);
    a.preventDefault();
    a.stopPropagation()
};
d.Bk = function (a) {
    Af(this, a);
    B.cf();
    if (this.Ik) console.log("Trying to end a gesture recursively.");
    else {
        this.Ik = !0;
        if (this.Li) uf(this.ae, a, this.Wb);
        else if (this.Wf) Nd(this.$d, a, this.Wb);
        else if (this.Mi) {
            var b = this.yf;
            xf(b, this.Wb);
            Ff(b.j)
        } else this.gc && !this.Rf ? (this.gc.Tn && this.gc.Tn(), this.gc.select && this.gc.select()) : Gf(this) ? (this.tg.qf(), Hf(this)) : !this.sg || this.Rf || Gf(this) ? this.sg || this.gc || this.tg || this.Rf || B.selected && B.selected.vf() : (this.G && this.G.Mg ? this.Hb.disabled || (B.i.Zb() || B.i.T(!0),
            Pd(Df(this.G, this.Hb))) : B.i.M(new Ra(this.sg, "click", void 0, void 0)), Hf(this), B.i.T(!1));
        a.preventDefault();
        a.stopPropagation();
        this.v()
    }
};
d.cancel = function () {
    if (!this.Ik) {
        B.cf();
        if (this.Li) uf(this.ae, this.tc, this.Wb);
        else if (this.Wf) Nd(this.$d, this.tc, this.Wb);
        else if (this.Mi) {
            var a = this.yf;
            xf(a, this.Wb);
            Ff(a.j)
        }
        this.v()
    }
};

function He(a, b) {
    a.Hb ? (Hf(a), B.Bb(a.G), a.Hb.Ah(b)) : a.gc ? a.gc.Ah(b) : a.Ra && !a.G && (B.Bb(), a.Ra.Ah(b));
    b.preventDefault();
    b.stopPropagation();
    a.v()
}

function Hf(a) {
    a.Hb && !a.G && Od(a.Hb)
}

function If(a, b) {
    a.sg || a.gc || (a.sg = b, b.rc && b != td(b) ? Jf(a, td(b)) : Jf(a, b))
}

function Jf(a, b) {
    b.Va ? Jf(a, b.getParent()) : a.Hb = b
}

function Gf(a) {
    if (a.tg) {
        var b = a.tg;
        b = b.Af && !!b.w && Kf(b.w)
    } else b = !1;
    return b && !a.Rf && (!a.G || !a.G.Mg)
}
d.lb = function () {
    return this.Mi || this.Wf || this.Li
};

function Lf(a, b, c, e) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e
}
d = Lf.prototype;
d.Ec = function () {
    return this.right - this.left
};
d.Xg = function () {
    return this.bottom - this.top
};
d.clone = function () {
    return new Lf(this.top, this.right, this.bottom, this.left)
};
d.contains = function (a) {
    return this && a ? a instanceof Lf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
d.expand = function (a, b, c, e) {
    ia(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(e));
    return this
};
d.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
d.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
d.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
d.translate = function (a, b) {
    a instanceof A ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, v(b) && (this.top += b, this.bottom += b));
    return this
};
d.scale = function (a, b) {
    b = v(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this
};

function Mf(a, b, c, e) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = e
}
d = Mf.prototype;
d.clone = function () {
    return new Mf(this.left, this.top, this.width, this.height)
};
d.contains = function (a) {
    return a instanceof A ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
d.ne = function () {
    return new Kc(this.width, this.height)
};
d.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
d.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
d.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
d.translate = function (a, b) {
    a instanceof A ? (this.left += a.x, this.top += a.y) : (this.left += a, v(b) && (this.top += b));
    return this
};
d.scale = function (a, b) {
    b = v(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this
};
var Nf = {};

function Of(a, b) {
    var c = Nc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
}

function Pf(a, b) {
    return Of(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Qf() {
    var a = document,
        b = a.body;
    a = a.documentElement;
    return new A(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function Rf(a) {
    try {
        var b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function Sf(a) {
    var b = Nc(a),
        c = new A(0, 0);
    var e = b ? Nc(b) : document;
    e = !G || 9 <= Number(Yb) || "CSS1Compat" == Lc(e).kd.compatMode ? e.documentElement : e.body;
    if (a == e) return c;
    a = Rf(a);
    b = Sc(Lc(b).kd);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function Tf(a) {
    "number" == typeof a && (a += "px");
    return a
}

function Uf(a) {
    var b = Vf;
    if ("none" != Pf(a, "display")) return b(a);
    var c = a.style,
        e = c.display,
        f = c.visibility,
        h = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = e;
    c.position = h;
    c.visibility = f;
    return a
}

function Vf(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        e = H && !b && !c;
    return aa(b) && !e || !a.getBoundingClientRect ? new Kc(b, c) : (a = Rf(a), new Kc(a.right - a.left, a.bottom - a.top))
}

function Wf(a, b) {
    a.style.display = b ? "" : "none"
}
var Xf = Mb ? "MozUserSelect" : H || Lb ? "WebkitUserSelect" : null;

function Yf(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (Xf) {
        if (b = b ? "none" : "", a.style && (a.style[Xf] = b), c) {
            a = 0;
            for (var e; e = c[a]; a++) e.style && (e.style[Xf] = b)
        }
    } else if (G || Kb)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; e = c[a]; a++) e.setAttribute("unselectable", b)
}
var Zf = {
    thin: 2,
    medium: 4,
    thick: 6
};

function $f(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    if (c in Zf) a = Zf[c];
    else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
    else {
        b = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = e;
        a = +c
    }
    return a
};

function ag(a, b) {
    this.oa = new Kc(0, 25);
    this.setValue(a);
    this.Cl = b
}
var bg = {};

function cg(a, b) {
    if (!q(a) || ib(a)) throw Error('Invalid field type "' + a + '"');
    if (!ia(b) || !y(b.Z)) throw Error('Field "' + b + '" must have a fromJson function');
    bg[a] = b
}
var dg = null,
    eg = 0;
d = ag.prototype;
d.name = void 0;
d.Jq = 50;
d.ra = "";
d.w = null;
d.Ea = !0;
d.Cl = null;
d.Af = !0;
d.Yn = function (a) {
    this.w = a
};
d.$ = function () {
    this.Ja || (this.Ja = B.h.A("g", {}, null), this.Ea || (this.Ja.style.display = "none"), this.Tc = B.h.A("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.Ja), this.ta = B.h.A("text", {
        "class": "blocklyText",
        y: this.oa.height - 12.5
    }, this.Ja), this.Fe(), this.w.N().appendChild(this.Ja), this.Vk = B.J(this.Ja, "mousedown", this, this.te), this.Rd())
};
d.Uf = function () {};
d.v = function () {
    this.Vk && (B.Aa(this.Vk), this.Vk = null);
    this.w = null;
    F(this.Ja);
    this.Cl = this.Tc = this.ta = this.Ja = null
};
d.Fe = function () {
    var a = this.Ja;
    this.Af && a && (Kf(this.w) ? (B.h.Ua(a, "blocklyEditableText"), B.h.vb(a, "blocklyNonEditableText"), this.Ja.style.cursor = this.Cj) : (B.h.Ua(a, "blocklyNonEditableText"), B.h.vb(a, "blocklyEditableText"), this.Ja.style.cursor = ""))
};
d.U = function () {
    return this.Ea
};
d.ka = function (a) {
    if (this.Ea != a) {
        this.Ea = a;
        var b = this.N();
        b && (b.style.display = a ? "block" : "none", this.Rd())
    }
};
d.Xl = function (a) {
    return a
};

function bb(a, b) {
    var c = a.Xl(b);
    if (null === c) return null;
    void 0 !== c && (b = c);
    if (c = a.Cl) {
        a = c.call(a, b);
        if (null === a) return null;
        void 0 !== a && (b = a)
    }
    return b
}
d.N = function () {
    return this.Ja
};
d.Rd = function () {
    this.Ea ? (this.ta.textContent = fg(this), this.tj()) : this.oa.width = 0
};
d.tj = function () {
    var a = gg(this.ta);
    this.Tc && this.Tc.setAttribute("width", a + 10);
    this.oa.width = a
};

function gg(a) {
    var b = a.textContent + "\n" + a.className.baseVal,
        c;
    if (dg && (c = dg[b])) return c;
    try {
        c = G || Lb ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    dg && (dg[b] = c);
    return c
}

function hg() {
    eg++;
    dg || (dg = {})
}

function ig() {
    eg--;
    eg || (dg = null)
}
d.ne = function () {
    this.oa.width || this.Rd();
    return this.oa
};

function jg(a) {
    var b = a.Tc.getBBox(),
        c = b.height * a.w.o.scale;
    b = b.width * a.w.o.scale;
    a = Sf(a.Tc);
    return {
        top: a.y,
        bottom: a.y + c,
        left: a.x,
        right: a.x + b
    }
}

function fg(a) {
    var b = a.ra;
    if (!b) return "\u00a0";
    b.length > a.Jq && (b = b.substring(0, a.Jq - 2) + "\u2026");
    b = b.replace(/\s/g, "\u00a0");
    a.w.s && (b += "\u200f");
    return b
}
d.ub = function () {
    return this.ra
};
d.xb = function (a) {
    null !== a && (a = String(a), a !== this.ra && (this.ra = a, this.li()))
};
d.li = function () {
    this.oa.width = 0;
    this.w && this.w.R && (this.w.Y(), this.w.Ub())
};
d.getValue = function () {
    return this.ub()
};
d.setValue = function (a) {
    if (null !== a) {
        var b = this.getValue();
        b != a && (this.w && B.i.isEnabled() && B.i.M(new B.i.ic(this.w, "field", this.name, b, a)), this.xb(a))
    }
};
d.te = function (a) {
    this.w && this.w.o && (a = this.w.o.Hd(a)) && !a.tg && (a.tg = this)
};
d.dd = function () {};
d.sh = function () {
    return !1
};
B.h = {};
B.h.removeAttribute = function (a, b) {
    G && Xb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b)
};
B.h.Ua = function (a, b) {
    var c = a.getAttribute("class") || "";
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c && (c += " ");
    a.setAttribute("class", c + b);
    return !0
};
B.h.vb = function (a, b) {
    var c = a.getAttribute("class");
    if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c = c.split(/\s+/);
    for (var e = 0; e < c.length; e++) c[e] && c[e] != b || (c.splice(e, 1), e--);
    c.length ? a.setAttribute("class", c.join(" ")) : B.h.removeAttribute(a, "class");
    return !0
};
B.h.oq = function (a, b) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ")
};
B.h.hv = function (a) {
    a.preventDefault();
    a.stopPropagation()
};
B.h.Lk = function (a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
};
B.h.$b = function (a) {
    var b = new A(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (c = (c = a.getAttribute("transform")) && c.match(B.h.$b.Rs)) b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && ((c = a.match(B.h.$b.Ps)) || (c = a.match(B.h.$b.Qs)), c && (b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]))));
    return b
};
B.h.qk = function (a) {
    for (var b = 0, c = 0; a;) {
        var e = B.h.$b(a);
        b += e.x;
        c += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new A(b, c)
};
B.h.$b.Rs = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
B.h.$b.Qs = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
B.h.$b.Ps = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
B.h.A = function (a, b, c) {
    a = document.createElementNS(B.kc, a);
    for (var e in b) a.setAttribute(e, b[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
};
B.h.$e = function (a) {
    return a.ctrlKey && Ob ? !0 : 2 == a.button
};
B.h.Wi = function (a, b, c) {
    var e = b.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    c || (c = b.getScreenCTM().inverse());
    return e.matrixTransform(c)
};
B.h.Zn = function (a) {
    return a.length ? a.reduce(function (a, c) {
        return a.length < c.length ? a : c
    }).length : 0
};
B.h.mp = function (a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var c = 0;
    b = b || B.h.Zn(a);
    for (var e = 0; e < b; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c;
        " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c;
    return b
};
B.h.np = function (a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var c = 0;
    b = b || B.h.Zn(a);
    for (var e = 0; e < b; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c;
        " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
    return b
};
B.h.Zv = function (a) {
    return B.h.mo(a, !0)
};
B.h.Db = function (a) {
    if (!q(a)) return a;
    a = B.h.mo(a, !1);
    return a.length ? a[0] : ""
};
B.h.bp = function (a) {
    for (var b = B.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e;) {
        var f = e[1];
        f = f.toUpperCase();
        "BKY_" != f.substr(0, 4) ? console.log("WARNING: Unsupported message table prefix in %{" + e[1] + "}.") : void 0 == b[f.substr(4)] && console.log("WARNING: No message string for %{" + e[1] + "}.");
        a = a.substring(e.index + f.length + 1);
        e = c.exec(a)
    }
};
B.h.mo = function (a, b) {
    var c = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && c.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : b && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && c.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (c.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[a-zA-Z][a-zA-Z0-9_]*/.test(f) ? (l = f.toUpperCase(), (l = hb(l, "BKY_") ?
            l.substring(4) : null) && l in B.g ? (f = B.g[l], q(f) ? Array.prototype.push.apply(c, B.h.mo(f, b)) : b ? c.push(String(f)) : c.push(f)) : c.push("%{" + f + "}")) : c.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && c.push(l);
    b = [];
    for (k = a.length = 0; k < c.length; ++k) "string" == typeof c[k] ? a.push(c[k]) : ((l = a.join("")) && b.push(l), a.length = 0, b.push(c[k]));
    (l = a.join("")) && b.push(l);
    a.length = 0;
    return b
};
B.h.Fd = function () {
    for (var a = B.h.Fd.Jr.length, b = [], c = 0; 20 > c; c++) b[c] = B.h.Fd.Jr.charAt(Math.random() * a);
    return b.join("")
};
B.h.Fd.Jr = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
B.h.gs = function (a, b) {
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) a[c] = B.h.jw(a[c], b);
    return a.join("\n")
};
B.h.jw = function (a, b) {
    if (a.length <= b) return a;
    for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++) c[e].length > b && (b = c[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var h = e;
        var k = a;
        a = [];
        var l = c.length / f,
            m = 1;
        for (e = 0; e < c.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = B.h.hs(c, a, b);
        e = B.h.po(c, a, b);
        a = B.h.kw(c, a);
        f++
    } while (e > h);
    return k
};
B.h.po = function (a, b, c) {
    for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === b[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === b[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (h = b = 0; h < e.length; h++) b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5), b -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? b += c / 3 : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += .5);
    return b
};
B.h.hs = function (a, b, c) {
    for (var e = B.h.po(a, b, c), f, h = 0; h < b.length - 1; h++)
        if (b[h] != b[h + 1]) {
            var k = [].concat(b);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1];
            var l = B.h.po(a, k, c);
            l > e && (e = l, f = k)
        }
    return f ? B.h.hs(a, f, c) : b
};
B.h.kw = function (a, b) {
    for (var c = [], e = 0; e < a.length; e++) c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " ");
    return c.join("")
};
B.h.Ze = function () {
    if (void 0 !== B.h.Ze.Vl) return B.h.Ze.Vl;
    if (!g.getComputedStyle) return !1;
    var a = document.createElement("p"),
        b = "none",
        c = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
    document.body.insertBefore(a, null);
    for (var e in c)
        if (void 0 !== a.style[e]) {
            a.style[e] = "translate3d(1px,1px,1px)";
            b = g.getComputedStyle(a);
            if (!b) return document.body.removeChild(a), !1;
            b = b.getPropertyValue(c[e])
        }
    document.body.removeChild(a);
    B.h.Ze.Vl = "none" !== b;
    return B.h.Ze.Vl
};
B.h.Ji = function (a, b) {
    var c = b.nextSibling;
    b = b.parentNode;
    if (!b) throw "Reference node has no parent.";
    c ? b.insertBefore(a, c) : b.appendChild(a)
};
B.h.Ar = function (a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" === document.readyState) a();
    else var b = setInterval(function () {
        "complete" === document.readyState && (clearInterval(b), a())
    }, 10)
};
B.h.ej = function (a, b) {
    a.style.transform = b;
    a.style["-webkit-transform"] = b
};
B.h.Em = function () {
    var a = Rc(),
        b = Qf();
    return {
        right: a.width + b.x,
        bottom: a.height + b.y,
        top: b.y,
        left: b.x
    }
};
B.h.Gh = {};
B.h.Gh.ne = function (a) {
    a = a.F();
    var b = Uf(a);
    b.height = a.scrollHeight;
    return b
};
B.h.Gh.So = function (a, b, c) {
    b.left += c.width;
    b.right += c.width;
    a.left += c.width;
    a.right += c.width
};

function kg(a) {
    Xd.call(this);
    this.bh = a;
    this.jh = {}
}
z(kg, Xd);
var lg = [];
d = kg.prototype;
d.ma = function (a, b, c, e) {
    w(b) || (b && (lg[0] = b.toString()), b = lg);
    for (var f = 0; f < b.length; f++) {
        var h = ue(a, b[f], c || this.handleEvent, e || !1, this.bh || this);
        if (!h) break;
        this.jh[h.key] = h
    }
    return this
};
d.Hq = function (a, b, c, e) {
    return mg(this, a, b, c, e)
};

function mg(a, b, c, e, f, h) {
    if (w(c))
        for (var k = 0; k < c.length; k++) mg(a, b, c[k], e, f, h);
    else {
        b = ve(b, c, e || a.handleEvent, f, h || a.bh || a);
        if (!b) return a;
        a.jh[b.key] = b
    }
    return a
}
d.Nc = function (a, b, c, e, f) {
    if (w(b))
        for (var h = 0; h < b.length; h++) this.Nc(a, b[h], c, e, f);
    else c = c || this.handleEvent, e = ia(e) ? !!e.capture : !!e, f = f || this.bh || this, c = we(c), e = !!e, b = ke(a) ? a.oi(b, c, e, f) : a ? (a = ye(a)) ? a.oi(b, c, e, f) : null : null, b && (De(b), delete this.jh[b.key]);
    return this
};
d.removeAll = function () {
    Db(this.jh, function (a, b) {
        this.jh.hasOwnProperty(b) && De(a)
    }, this);
    this.jh = {}
};
d.Ia = function () {
    kg.m.Ia.call(this);
    this.removeAll()
};
d.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};

function ng() {
    Xd.call(this);
    this.je = new oe(this);
    this.Ts = this;
    this.on = null
}
z(ng, Xd);
ng.prototype[je] = !0;
d = ng.prototype;
d.vk = function () {
    return this.on
};
d.rl = function (a) {
    this.on = a
};
d.addEventListener = function (a, b, c, e) {
    ue(this, a, b, c, e)
};
d.removeEventListener = function (a, b, c, e) {
    Ce(this, a, b, c, e)
};
d.dispatchEvent = function (a) {
    var b, c = this.vk();
    if (c)
        for (b = []; c; c = c.vk()) b.push(c);
    c = this.Ts;
    var e = a.type || a;
    if (q(a)) a = new be(a, c);
    else if (a instanceof be) a.target = a.target || c;
    else {
        var f = a;
        a = new be(e, c);
        Fb(a, f)
    }
    f = !0;
    if (b)
        for (var h = b.length - 1; !a.hg && 0 <= h; h--) {
            var k = a.currentTarget = b[h];
            f = og(k, e, !0, a) && f
        }
    a.hg || (k = a.currentTarget = c, f = og(k, e, !0, a) && f, a.hg || (f = og(k, e, !1, a) && f));
    if (b)
        for (h = 0; !a.hg && h < b.length; h++) k = a.currentTarget = b[h], f = og(k, e, !1, a) && f;
    return f
};
d.Ia = function () {
    ng.m.Ia.call(this);
    this.removeAllListeners();
    this.on = null
};
d.ma = function (a, b, c, e) {
    return this.je.add(String(a), b, !1, c, e)
};
d.Hq = function (a, b, c, e) {
    return this.je.add(String(a), b, !0, c, e)
};
d.Nc = function (a, b, c, e) {
    return this.je.remove(String(a), b, c, e)
};
d.removeAllListeners = function (a) {
    return this.je ? this.je.removeAll(a) : 0
};

function og(a, b, c, e) {
    b = a.je.cc[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var f = !0, h = 0; h < b.length; ++h) {
        var k = b[h];
        if (k && !k.vh && k.capture == c) {
            var l = k.listener,
                m = k.Ck || k.src;
            k.Lj && qe(a.je, k);
            f = !1 !== l.call(m, e) && f
        }
    }
    return f && 0 != e.zr
}
d.oi = function (a, b, c, e) {
    return this.je.oi(String(a), b, c, e)
};

function pg() {}
da(pg);
pg.prototype.gv = 0;

function qg(a) {
    ng.call(this);
    this.ck = a || Lc();
    this.wh = rg;
    this.fh = null;
    this.sa = !1;
    this.K = null;
    this.Qe = void 0;
    this.Me = this.Mb = this.Qd = this.cn = null;
    this.qh = this.gw = !1
}
z(qg, ng);
qg.prototype.Ju = pg.Id();
var rg = null;

function sg(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}
d = qg.prototype;
d.ga = function () {
    return this.fh || (this.fh = ":" + (this.Ju.gv++).toString(36))
};
d.F = function () {
    return this.K
};

function tg(a) {
    a.Qe || (a.Qe = new kg(a));
    return a.Qe
}
d.og = function (a) {
    if (this == a) throw Error("Unable to set parent component");
    if (a && this.Qd && this.fh && ug(this.Qd, this.fh) && this.Qd != a) throw Error("Unable to set parent component");
    this.Qd = a;
    qg.m.rl.call(this, a)
};
d.getParent = function () {
    return this.Qd
};
d.rl = function (a) {
    if (this.Qd && this.Qd != a) throw Error("Method not supported");
    qg.m.rl.call(this, a)
};
d.Xb = function () {
    return this.ck
};
d.O = function () {
    this.K = this.ck.createElement("DIV")
};
d.Y = function (a) {
    this.Rd(a)
};
d.Rd = function (a, b) {
    if (this.sa) throw Error("Component already rendered");
    this.K || this.O();
    a ? a.insertBefore(this.K, b || null) : this.ck.kd.body.appendChild(this.K);
    this.Qd && !this.Qd.sa || this.kb()
};
d.kb = function () {
    this.sa = !0;
    vg(this, function (a) {
        !a.sa && a.F() && a.kb()
    })
};
d.Yc = function () {
    vg(this, function (a) {
        a.sa && a.Yc()
    });
    this.Qe && this.Qe.removeAll();
    this.sa = !1
};
d.Ia = function () {
    this.sa && this.Yc();
    this.Qe && (this.Qe.v(), delete this.Qe);
    vg(this, function (a) {
        a.v()
    });
    !this.gw && this.K && F(this.K);
    this.Qd = this.cn = this.K = this.Me = this.Mb = null;
    qg.m.Ia.call(this)
};
d.Rh = function (a, b) {
    this.Kg(a, wg(this), b)
};
d.Kg = function (a, b, c) {
    if (a.sa && (c || !this.sa)) throw Error("Component already rendered");
    if (0 > b || b > wg(this)) throw Error("Child component index out of bounds");
    this.Me && this.Mb || (this.Me = {}, this.Mb = []);
    if (a.getParent() == this) {
        var e = a.ga();
        this.Me[e] = a;
        ya(this.Mb, a)
    } else {
        e = this.Me;
        var f = a.ga();
        if (null !== e && f in e) throw Error('The object already contains the key "' + f + '"');
        e[f] = a
    }
    a.og(this);
    Ca(this.Mb, b, 0, a);
    a.sa && this.sa && a.getParent() == this ? (c = this.Dc(), b = c.childNodes[b] || null, b != a.F() && c.insertBefore(a.F(),
        b)) : c ? (this.K || this.O(), b = L(this, b + 1), a.Rd(this.Dc(), b ? b.K : null)) : this.sa && !a.sa && a.K && a.K.parentNode && 1 == a.K.parentNode.nodeType && a.kb()
};
d.Dc = function () {
    return this.K
};

function xg(a) {
    null == a.wh && (a.wh = "rtl" == Pf(a.sa ? a.K : a.ck.kd.body, "direction"));
    return a.wh
}
d.ye = function (a) {
    if (this.sa) throw Error("Component already rendered");
    this.wh = a
};

function yg(a) {
    return !!a.Mb && 0 != a.Mb.length
}

function wg(a) {
    return a.Mb ? a.Mb.length : 0
}

function ug(a, b) {
    a.Me && b ? (a = a.Me, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
    return b
}

function L(a, b) {
    return a.Mb ? a.Mb[b] || null : null
}

function vg(a, b, c) {
    a.Mb && sa(a.Mb, b, c)
}

function zg(a, b) {
    return a.Mb && b ? ra(a.Mb, b) : -1
}
d.removeChild = function (a, b) {
    if (a) {
        var c = q(a) ? a : a.ga();
        a = ug(this, c);
        if (c && a) {
            var e = this.Me;
            c in e && delete e[c];
            ya(this.Mb, a);
            b && (a.Yc(), a.K && F(a.K));
            a.og(null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
d.xr = function (a) {
    for (var b = []; yg(this);) b.push(this.removeChild(L(this, 0), a));
    return b
};
var Ag;
Gb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function Bg(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function M(a, b, c) {
    w(c) && (c = c.join(" "));
    var e = "aria-" + b;
    "" === c || void 0 == c ? (Ag || (Ag = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = Ag, b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e)) : a.setAttribute(e, c)
}

function Cg(a, b) {
    a = a.getAttribute("aria-" + b);
    return null == a || void 0 == a ? "" : String(a)
};

function Dg(a, b, c, e, f, h) {
    if (!(G || Lb || H && Xb("525"))) return !0;
    if (Ob && f) return Eg(a);
    if (f && !e) return !1;
    v(b) && (b = Fg(b));
    f = 17 == b || 18 == b || Ob && 91 == b;
    if ((!c || Ob) && f || Ob && 16 == b && (e || h)) return !1;
    if ((H || Lb) && e && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (G && e && b == a) return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !(H || Lb)
    }
    return Eg(a)
}

function Eg(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (H || Lb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function Fg(a) {
    if (Mb) a = Gg(a);
    else if (Ob && H) switch (a) {
        case 93:
            a = 91
    }
    return a
}

function Gg(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function Hg(a, b) {
    ng.call(this);
    a && Ig(this, a, b)
}
z(Hg, ng);
d = Hg.prototype;
d.K = null;
d.Nk = null;
d.Rm = null;
d.Ok = null;
d.Fc = -1;
d.af = -1;
d.Ol = !1;
var Jg = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Kg = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Lg = G || Lb || H && Xb("525"),
    Mg = Ob && Mb;
d = Hg.prototype;
d.vu = function (a) {
    if (H || Lb)
        if (17 == this.Fc && !a.ctrlKey || 18 == this.Fc && !a.altKey || Ob && 91 == this.Fc && !a.metaKey) this.af = this.Fc = -1; - 1 == this.Fc && (a.ctrlKey && 17 != a.keyCode ? this.Fc = 17 : a.altKey && 18 != a.keyCode ? this.Fc = 18 : a.metaKey && 91 != a.keyCode && (this.Fc = 91));
    Lg && !Dg(a.keyCode, this.Fc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.af = Fg(a.keyCode), Mg && (this.Ol = a.altKey))
};
d.wu = function (a) {
    this.af = this.Fc = -1;
    this.Ol = a.altKey
};
d.handleEvent = function (a) {
    var b = a.Dd,
        c = b.altKey;
    if (G && "keypress" == a.type) {
        var e = this.af;
        var f = 13 != e && 27 != e ? b.keyCode : 0
    } else(H || Lb) && "keypress" == a.type ? (e = this.af, f = 0 <= b.charCode && 63232 > b.charCode && Eg(e) ? b.charCode : 0) : Kb && !H ? (e = this.af, f = Eg(e) ? b.keyCode : 0) : (e = b.keyCode || this.af, f = b.charCode || 0, Mg && (c = this.Ol), Ob && 63 == f && 224 == e && (e = 191));
    var h = e = Fg(e);
    e ? 63232 <= e && e in Jg ? h = Jg[e] : 25 == e && a.shiftKey && (h = 9) : b.keyIdentifier && b.keyIdentifier in Kg && (h = Kg[b.keyIdentifier]);
    a = h == this.Fc;
    this.Fc = h;
    b = new Ng(h,
        f, a, b);
    b.altKey = c;
    this.dispatchEvent(b)
};
d.F = function () {
    return this.K
};

function Ig(a, b, c) {
    a.Ok && a.detach();
    a.K = b;
    a.Nk = ue(a.K, "keypress", a, c);
    a.Rm = ue(a.K, "keydown", a.vu, c, a);
    a.Ok = ue(a.K, "keyup", a.wu, c, a)
}
d.detach = function () {
    this.Nk && (De(this.Nk), De(this.Rm), De(this.Ok), this.Ok = this.Rm = this.Nk = null);
    this.K = null;
    this.af = this.Fc = -1
};
d.Ia = function () {
    Hg.m.Ia.call(this);
    this.detach()
};

function Ng(a, b, c, e) {
    fe.call(this, e);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
}
z(Ng, fe);

function Og(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
}

function Pg(a, b) {
    return a.classList ? a.classList.contains(b) : xa(Og(a), b)
}

function Qg(a, b) {
    a.classList ? a.classList.add(b) : Pg(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function Rg(a, b) {
    if (a.classList) sa(b, function (b) {
        Qg(a, b)
    });
    else {
        var c = {};
        sa(Og(a), function (a) {
            c[a] = !0
        });
        sa(b, function (a) {
            c[a] = !0
        });
        a.className = "";
        for (var e in c) a.className += 0 < a.className.length ? " " + e : e
    }
}

function Sg(a, b) {
    a.classList ? a.classList.remove(b) : Pg(a, b) && (a.className = ta(Og(a), function (a) {
        return a != b
    }).join(" "))
}

function Tg(a, b) {
    a.classList ? sa(b, function (b) {
        Sg(a, b)
    }) : a.className = ta(Og(a), function (a) {
        return !xa(b, a)
    }).join(" ")
};

function Ug(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!y(b)) throw Error("Invalid decorator function " + b);
}
var Vg = {};

function Wg(a) {
    this.Vo = a
}
da(Wg);
d = Wg.prototype;
d.ik = function () {
    return this.Vo
};

function Xg(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
d.O = function (a) {
    return a.Xb().O("DIV", this.ni(a).join(" "))
};
d.Dc = function (a) {
    return a
};
d.Ii = function (a) {
    a = a.F();
    Yf(a, !0, Mb);
    G && (a.hideFocus = !0);
    var b = this.ik();
    b && Bg(a, b)
};
d.tb = function (a) {
    return a.F()
};
d.Ba = function () {
    return "goog-container"
};
d.ni = function (a) {
    var b = this.Ba(),
        c = [b, a.eg == Yg ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};

function Zg() {}
var $g;
da(Zg);
var ah = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
d = Zg.prototype;
d.ik = function () {};
d.O = function (a) {
    return a.Xb().O("DIV", this.ni(a).join(" "), a.qc())
};
d.Dc = function (a) {
    return a
};
d.gi = function (a, b, c) {
    if (a = a.F ? a.F() : a) {
        var e = [b];
        G && !Xb("7") && (e = bh(Og(a), b), e.push(b));
        (c ? Rg : Tg)(a, e)
    }
};
d.Ii = function (a) {
    xg(a) && this.ye(a.F(), !0);
    a.isEnabled() && this.xe(a, a.U())
};

function ch(a, b, c) {
    if (a = c || a.ik()) c = b.getAttribute("role") || null, a != c && Bg(b, a)
}

function dh(a, b, c) {
    var e = b.Uo;
    null != e && a.On(c, e);
    b.U() || M(c, "hidden", !b.U());
    b.isEnabled() || eh(c, 1, !b.isEnabled());
    b.fb & 8 && eh(c, 8, b.Kk());
    b.fb & 16 && eh(c, 16, !!(b.za & 16));
    b.fb & 64 && eh(c, 64, b.hh())
}
d.On = function (a, b) {
    M(a, "label", b)
};
d.Nn = function (a, b) {
    Yf(a, !b, !G && !Kb)
};
d.ye = function (a, b) {
    this.gi(a, this.Ba() + "-rtl", b)
};
d.qe = function (a) {
    var b;
    return a.fb & 32 && (b = a.tb()) ? cd(b) && dd(b) : !1
};
d.xe = function (a, b) {
    var c;
    if (a.fb & 32 && (c = a.tb())) {
        if (!b && a.za & 32) {
            try {
                c.blur()
            } catch (e) {}
            a.za & 32 && a.xi(null)
        }(cd(c) && dd(c)) != b && (a = c, b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex")))
    }
};
d.ka = function (a, b) {
    Wf(a, b);
    a && M(a, "hidden", !b)
};
d.ud = function (a, b, c) {
    var e = a.F();
    if (e) {
        var f = this.lk(b);
        f && this.gi(a, f, c);
        eh(e, b, c)
    }
};

function eh(a, b, c) {
    $g || ($g = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = $g[b];
    var e = a.getAttribute("role") || null;
    e && (e = ah[e] || b, b = "checked" == b || "selected" == b ? e : b);
    b && M(a, b, c)
}
d.cd = function (a, b) {
    var c = this.Dc(a);
    c && (Xc(c), b && (q(b) ? $c(c, b) : (a = function (a) {
        if (a) {
            var b = Nc(c);
            c.appendChild(q(a) ? b.createTextNode(a) : a)
        }
    }, w(b) ? sa(b, a) : !fa(b) || "nodeType" in b ? a(b) : sa(Aa(b), a))))
};
d.tb = function (a) {
    return a.F()
};
d.Ba = function () {
    return "goog-control"
};
d.ni = function (a) {
    var b = this.Ba(),
        c = [b],
        e = this.Ba();
    e != b && c.push(e);
    b = a.getState();
    for (e = []; b;) {
        var f = b & -b;
        e.push(this.lk(f));
        b &= ~f
    }
    c.push.apply(c, e);
    (a = a.Ed) && c.push.apply(c, a);
    G && !Xb("7") && c.push.apply(c, bh(c));
    return c
};

function bh(a, b) {
    var c = [];
    b && (a = za(a, [b]));
    sa([], function (e) {
        !va(e, pa(xa, a)) || b && !xa(e, b) || c.push(e.join("_"))
    });
    return c
}
d.lk = function (a) {
    if (!this.ep) {
        var b = this.Ba();
        b.replace(/\xa0|\s/g, " ");
        this.ep = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.ep[a]
};

function N(a, b, c) {
    qg.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var e; b;) {
            e = ja(b);
            if (e = Vg[e]) break;
            b = b.m ? b.m.constructor : null
        }
        b = e ? y(e.Id) ? e.Id() : new e : null
    }
    this.ea = b;
    this.ol(aa(a) ? a : null);
    this.Uo = null
}
z(N, qg);
d = N.prototype;
d.Bc = null;
d.za = 0;
d.fb = 39;
d.Ql = 255;
d.ug = 0;
d.Ea = !0;
d.Ed = null;
d.yi = !0;
d.Nl = !1;
d.Gv = null;
d.tb = function () {
    return this.ea.tb(this)
};
d.rk = function () {
    return this.Pb || (this.Pb = new Hg)
};
d.gi = function (a, b) {
    b ? a && (this.Ed ? xa(this.Ed, a) || this.Ed.push(a) : this.Ed = [a], this.ea.gi(this, a, !0)) : a && this.Ed && ya(this.Ed, a) && (0 == this.Ed.length && (this.Ed = null), this.ea.gi(this, a, !1))
};
d.O = function () {
    var a = this.ea.O(this);
    this.K = a;
    ch(this.ea, a, this.wk());
    this.Nl || this.ea.Nn(a, !1);
    this.U() || this.ea.ka(a, !1)
};
d.wk = function () {
    return this.Gv
};
d.On = function (a) {
    this.Uo = a;
    var b = this.F();
    b && this.ea.On(b, a)
};
d.Dc = function () {
    return this.ea.Dc(this.F())
};
d.kb = function () {
    N.m.kb.call(this);
    dh(this.ea, this, this.K);
    this.ea.Ii(this);
    if (this.fb & -2 && (this.yi && fh(this, !0), this.fb & 32)) {
        var a = this.tb();
        if (a) {
            var b = this.rk();
            Ig(b, a);
            tg(this).ma(b, "key", this.$c).ma(a, "focus", this.Ak).ma(a, "blur", this.xi)
        }
    }
};

function fh(a, b) {
    var c = a.qh ? ee : de,
        e = tg(a),
        f = a.F();
    b ? (e.ma(f, c.Gg, a.Te).ma(f, [c.Hg, c.Fg], a.ah).ma(f, "mouseover", a.zi).ma(f, "mouseout", a.Hm), a.qh && e.ma(f, "gotpointercapture", a.hl), a.$g != ca && e.ma(f, "contextmenu", a.$g), G && (Xb(9) || e.ma(f, "dblclick", a.mq), a.Gi || (a.Gi = new gh(a), $d(a, pa(ae, a.Gi))))) : (e.Nc(f, c.Gg, a.Te).Nc(f, [c.Hg, c.Fg], a.ah).Nc(f, "mouseover", a.zi).Nc(f, "mouseout", a.Hm), a.qh && e.Nc(f, "gotpointercapture", a.hl), a.$g != ca && e.Nc(f, "contextmenu", a.$g), G && (Xb(9) || e.Nc(f, "dblclick", a.mq), ae(a.Gi), a.Gi =
        null))
}
d.Yc = function () {
    N.m.Yc.call(this);
    this.Pb && this.Pb.detach();
    this.U() && this.isEnabled() && this.ea.xe(this, !1)
};
d.Ia = function () {
    N.m.Ia.call(this);
    this.Pb && (this.Pb.v(), delete this.Pb);
    delete this.ea;
    this.Gi = this.Ed = this.Bc = null
};
d.qc = function () {
    return this.Bc
};
d.cd = function (a) {
    this.ea.cd(this.F(), a);
    this.ol(a)
};
d.ol = function (a) {
    this.Bc = a
};
d.kk = function () {
    var a = this.qc();
    if (!a) return "";
    a = q(a) ? a : w(a) ? ua(a, gd).join("") : ed(a);
    return jb(a)
};
d.ye = function (a) {
    N.m.ye.call(this, a);
    var b = this.F();
    b && this.ea.ye(b, a)
};
d.Nn = function (a) {
    this.Nl = a;
    var b = this.F();
    b && this.ea.Nn(b, a)
};
d.U = function () {
    return this.Ea
};
d.ka = function (a, b) {
    return b || this.Ea != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.F()) && this.ea.ka(b, a), this.isEnabled() && this.ea.xe(this, a), this.Ea = a, !0) : !1
};
d.isEnabled = function () {
    return !(this.za & 1)
};
d.gj = function (a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !hh(this, 1, !a) || (a || (this.setActive(!1), this.Gb(!1)), this.U() && this.ea.xe(this, a), this.ud(1, !a, !0))
};
d.Gb = function (a) {
    hh(this, 2, a) && this.ud(2, a)
};
d.setActive = function (a) {
    hh(this, 4, a) && this.ud(4, a)
};
d.Kk = function () {
    return !!(this.za & 8)
};
d.Vn = function (a) {
    hh(this, 8, a) && this.ud(8, a)
};

function ih(a, b) {
    hh(a, 16, b) && a.ud(16, b)
}
d.hh = function () {
    return !!(this.za & 64)
};

function jh(a, b) {
    hh(a, 64, b) && a.ud(64, b)
}
d.getState = function () {
    return this.za
};
d.ud = function (a, b, c) {
    c || 1 != a ? this.fb & a && b != !!(this.za & a) && (this.ea.ud(this, a, b), this.za = b ? this.za | a : this.za & ~a) : this.gj(!b)
};
d.fc = function (a, b) {
    if (this.sa && this.za & a && !b) throw Error("Component already rendered");
    !b && this.za & a && this.ud(a, !1);
    this.fb = b ? this.fb | a : this.fb & ~a
};

function kh(a, b) {
    return !!(a.Ql & b) && !!(a.fb & b)
}

function hh(a, b, c) {
    return !!(a.fb & b) && !!(a.za & b) != c && (!(a.ug & b) || a.dispatchEvent(sg(b, c))) && !a.Qg
}
d.zi = function (a) {
    !lh(a, this.F()) && this.dispatchEvent("enter") && this.isEnabled() && kh(this, 2) && this.Gb(!0)
};
d.Hm = function (a) {
    !lh(a, this.F()) && this.dispatchEvent("leave") && (kh(this, 4) && this.setActive(!1), kh(this, 2) && this.Gb(!1))
};
d.hl = function (a) {
    var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId)
};
d.$g = ca;

function lh(a, b) {
    return !!a.relatedTarget && Zc(b, a.relatedTarget)
}
d.Te = function (a) {
    this.isEnabled() && (kh(this, 2) && this.Gb(!0), !ie(a) || H && Ob && a.ctrlKey || (kh(this, 4) && this.setActive(!0), this.ea && this.ea.qe(this) && this.tb().focus()));
    this.Nl || !ie(a) || H && Ob && a.ctrlKey || a.preventDefault()
};
d.ah = function (a) {
    this.isEnabled() && (kh(this, 2) && this.Gb(!0), this.za & 4 && this.fg(a) && kh(this, 4) && this.setActive(!1))
};
d.mq = function (a) {
    this.isEnabled() && this.fg(a)
};
d.fg = function (a) {
    kh(this, 16) && ih(this, !(this.za & 16));
    kh(this, 8) && this.Vn(!0);
    kh(this, 64) && jh(this, !this.hh());
    var b = new be("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.sn = a.sn);
    return this.dispatchEvent(b)
};
d.Ak = function () {
    kh(this, 32) && hh(this, 32, !0) && this.ud(32, !0)
};
d.xi = function () {
    kh(this, 4) && this.setActive(!1);
    kh(this, 32) && hh(this, 32, !1) && this.ud(32, !1)
};
d.$c = function (a) {
    return this.U() && this.isEnabled() && this.Qf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
d.Qf = function (a) {
    return 13 == a.keyCode && this.fg(a)
};
if (!y(N)) throw Error("Invalid component class " + N);
if (!y(Zg)) throw Error("Invalid renderer class " + Zg);
var mh = ja(N);
Vg[mh] = Zg;
Ug("goog-control", function () {
    return new N(null)
});

function gh(a) {
    Xd.call(this);
    this.Tj = a;
    this.Nj = !1;
    this.bh = new kg(this);
    $d(this, pa(ae, this.bh));
    a = this.Tj.K;
    this.bh.ma(a, "mousedown", this.xu).ma(a, "mouseup", this.yu).ma(a, "click", this.pu)
}
z(gh, Xd);
var nh = !G || 9 <= Number(Yb);
gh.prototype.xu = function () {
    this.Nj = !1
};
gh.prototype.yu = function () {
    this.Nj = !0
};

function oh(a, b) {
    if (!nh) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
gh.prototype.pu = function (a) {
    if (this.Nj) this.Nj = !1;
    else {
        var b = a.Dd,
            c = b.button,
            e = b.type,
            f = oh(b, "mousedown");
        this.Tj.Te(new fe(f, a.currentTarget));
        f = oh(b, "mouseup");
        this.Tj.ah(new fe(f, a.currentTarget));
        nh || (b.button = c, b.type = e)
    }
};
gh.prototype.Ia = function () {
    this.Tj = null;
    gh.m.Ia.call(this)
};

function ph(a, b, c) {
    qg.call(this, c);
    this.ea = b || Wg.Id();
    this.eg = a || qh
}
z(ph, qg);
var Yg = "horizontal",
    qh = "vertical";
d = ph.prototype;
d.Sm = null;
d.Pb = null;
d.ea = null;
d.eg = null;
d.Ea = !0;
d.Lf = !0;
d.Nf = !0;
d.qa = -1;
d.ob = null;
d.mh = !1;
d.Ys = !1;
d.Fv = !0;
d.fe = null;
d.tb = function () {
    return this.Sm || this.ea.tb(this)
};
d.rk = function () {
    return this.Pb || (this.Pb = new Hg(this.tb()))
};
d.O = function () {
    this.K = this.ea.O(this)
};
d.Dc = function () {
    return this.ea.Dc(this.F())
};
d.kb = function () {
    ph.m.kb.call(this);
    vg(this, function (a) {
        a.sa && rh(this, a)
    }, this);
    var a = this.F();
    this.ea.Ii(this);
    this.ka(this.Ea, !0);
    var b = this.qh ? ee : de;
    tg(this).ma(this, "enter", this.Fm).ma(this, "highlight", this.uu).ma(this, "unhighlight", this.Du).ma(this, "open", this.zu).ma(this, "close", this.qu).ma(a, b.Gg, this.Te).ma(Nc(a), [b.Hg, b.Fg], this.su).ma(a, [b.Gg, b.Hg, b.Fg, "mouseover", "mouseout", "contextmenu"], this.ou);
    this.qh && tg(this).ma(a, "gotpointercapture", this.hl);
    this.qe() && sh(this, !0)
};
d.hl = function (a) {
    var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId)
};

function sh(a, b) {
    var c = tg(a),
        e = a.tb();
    b ? c.ma(e, "focus", a.Ak).ma(e, "blur", a.xi).ma(a.rk(), "key", a.$c) : c.Nc(e, "focus", a.Ak).Nc(e, "blur", a.xi).Nc(a.rk(), "key", a.$c)
}
d.Yc = function () {
    this.Sb(-1);
    this.ob && jh(this.ob, !1);
    this.mh = !1;
    ph.m.Yc.call(this)
};
d.Ia = function () {
    ph.m.Ia.call(this);
    this.Pb && (this.Pb.v(), this.Pb = null);
    this.ea = this.ob = this.fe = this.Sm = null
};
d.Fm = function () {
    return !0
};
d.uu = function (a) {
    var b = zg(this, a.target);
    if (-1 < b && b != this.qa) {
        var c = L(this, this.qa);
        c && c.Gb(!1);
        this.qa = b;
        c = L(this, this.qa);
        this.mh && c.setActive(!0);
        this.Fv && this.ob && c != this.ob && (c.fb & 64 ? jh(c, !0) : jh(this.ob, !1))
    }
    b = this.F();
    null != a.target.F() && M(b, "activedescendant", a.target.F().id)
};
d.Du = function (a) {
    a.target == L(this, this.qa) && (this.qa = -1);
    this.F().removeAttribute("aria-activedescendant")
};
d.zu = function (a) {
    (a = a.target) && a != this.ob && a.getParent() == this && (this.ob && jh(this.ob, !1), this.ob = a)
};
d.qu = function (a) {
    a.target == this.ob && (this.ob = null);
    var b = this.F(),
        c = a.target.F();
    b && a.target.za & 2 && c && (a = "", c && (a = c.id), M(b, "activedescendant", a))
};
d.Te = function (a) {
    this.Lf && (this.mh = !0);
    var b = this.tb();
    b && cd(b) && dd(b) ? b.focus() : a.preventDefault()
};
d.su = function () {
    this.mh = !1
};
d.ou = function (a) {
    var b = this.qh ? ee : de;
    a: {
        var c = a.target;
        if (this.fe)
            for (var e = this.F(); c && c !== e;) {
                var f = c.id;
                if (f in this.fe) {
                    c = this.fe[f];
                    break a
                }
                c = c.parentNode
            }
        c = null
    }
    if (c) switch (a.type) {
        case b.Gg:
            c.Te(a);
            break;
        case b.Hg:
        case b.Fg:
            c.ah(a);
            break;
        case "mouseover":
            c.zi(a);
            break;
        case "mouseout":
            c.Hm(a);
            break;
        case "contextmenu":
            c.$g(a)
    }
};
d.Ak = function () {};
d.xi = function () {
    this.Sb(-1);
    this.mh = !1;
    this.ob && jh(this.ob, !1)
};
d.$c = function (a) {
    return this.isEnabled() && this.U() && (0 != wg(this) || this.Sm) && this.Qf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
d.Qf = function (a) {
    var b = L(this, this.qa);
    if (b && "function" == typeof b.$c && b.$c(a) || this.ob && this.ob != b && "function" == typeof this.ob.$c && this.ob.$c(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.qe()) this.tb().blur();
            else return !1;
            break;
        case 36:
            th(this);
            break;
        case 35:
            uh(this);
            break;
        case 38:
            if (this.eg == qh) vh(this);
            else return !1;
            break;
        case 37:
            if (this.eg == Yg) xg(this) ? wh(this) : vh(this);
            else return !1;
            break;
        case 40:
            if (this.eg == qh) wh(this);
            else return !1;
            break;
        case 39:
            if (this.eg == Yg) xg(this) ? vh(this) : wh(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function rh(a, b) {
    var c = b.F();
    c = c.id || (c.id = b.ga());
    a.fe || (a.fe = {});
    a.fe[c] = b
}
d.Rh = function (a, b) {
    ph.m.Rh.call(this, a, b)
};
d.Kg = function (a, b, c) {
    a.ug |= 2;
    a.ug |= 64;
    !this.qe() && this.Ys || a.fc(32, !1);
    a.sa && 0 != a.yi && fh(a, !1);
    a.yi = !1;
    var e = a.getParent() == this ? zg(this, a) : -1;
    ph.m.Kg.call(this, a, b, c);
    a.sa && this.sa && rh(this, a);
    a = e; - 1 == a && (a = wg(this));
    a == this.qa ? this.qa = Math.min(wg(this) - 1, b) : a > this.qa && b <= this.qa ? this.qa++ : a < this.qa && b > this.qa && this.qa--
};
d.removeChild = function (a, b) {
    if (a = q(a) ? ug(this, a) : a) {
        var c = zg(this, a); - 1 != c && (c == this.qa ? (a.Gb(!1), this.qa = -1) : c < this.qa && this.qa--);
        var e = a.F();
        e && e.id && this.fe && (c = this.fe, e = e.id, e in c && delete c[e])
    }
    b = a = ph.m.removeChild.call(this, a, b);
    b.sa && 1 != b.yi && fh(b, !0);
    b.yi = !0;
    return a
};
d.setOrientation = function (a) {
    if (this.F()) throw Error("Component already rendered");
    this.eg = a
};
d.U = function () {
    return this.Ea
};
d.ka = function (a, b) {
    if (b || this.Ea != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Ea = a;
        var c = this.F();
        c && (Wf(c, a), this.qe() && Xg(this.tb(), this.Lf && this.Ea), b || this.dispatchEvent(this.Ea ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
d.isEnabled = function () {
    return this.Lf
};
d.gj = function (a) {
    this.Lf != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Lf = !0, vg(this, function (a) {
        a.ds ? delete a.ds : a.gj(!0)
    })) : (vg(this, function (a) {
        a.isEnabled() ? a.gj(!1) : a.ds = !0
    }), this.mh = this.Lf = !1), this.qe() && Xg(this.tb(), a && this.Ea))
};
d.qe = function () {
    return this.Nf
};
d.xe = function (a) {
    a != this.Nf && this.sa && sh(this, a);
    this.Nf = a;
    this.Lf && this.Ea && Xg(this.tb(), a)
};
d.Sb = function (a) {
    (a = L(this, a)) ? a.Gb(!0): -1 < this.qa && L(this, this.qa).Gb(!1)
};
d.Gb = function (a) {
    this.Sb(zg(this, a))
};

function th(a) {
    xh(a, function (a, c) {
        return (a + 1) % c
    }, wg(a) - 1)
}

function uh(a) {
    xh(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function wh(a) {
    xh(a, function (a, c) {
        return (a + 1) % c
    }, a.qa)
}

function vh(a) {
    xh(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.qa)
}

function xh(a, b, c) {
    c = 0 > c ? zg(a, a.ob) : c;
    var e = wg(a);
    c = b.call(a, c, e);
    for (var f = 0; f <= e;) {
        var h = L(a, c);
        if (h && a.$o(h)) {
            a.Sb(c);
            break
        }
        f++;
        c = b.call(a, c, e)
    }
}
d.$o = function (a) {
    return a.U() && a.isEnabled() && !!(a.fb & 2)
};

function yh() {}
z(yh, Zg);
da(yh);
yh.prototype.Ba = function () {
    return "goog-menuheader"
};

function zh(a, b, c) {
    N.call(this, a, c || yh.Id(), b);
    this.fc(1, !1);
    this.fc(2, !1);
    this.fc(4, !1);
    this.fc(32, !1);
    this.za = 1
}
z(zh, N);
Ug("goog-menuheader", function () {
    return new zh(null)
});

function Ah() {
    this.fp = []
}
z(Ah, Zg);
da(Ah);

function Bh(a, b) {
    var c = a.fp[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.Ba() + "-highlight";
                break;
            case 1:
                c = a.Ba() + "-checkbox";
                break;
            case 2:
                c = a.Ba() + "-content"
        }
        a.fp[b] = c
    }
    return c
}
d = Ah.prototype;
d.ik = function () {
    return "menuitem"
};
d.O = function (a) {
    var b = a.Xb().O("DIV", this.ni(a).join(" "), Ch(this, a.qc(), a.Xb()));
    Dh(this, a, b, !!(a.fb & 8) || !!(a.fb & 16));
    return b
};
d.Dc = function (a) {
    return a && a.firstChild
};
d.cd = function (a, b) {
    var c = this.Dc(a),
        e = Eh(this, a) ? c.firstChild : null;
    Ah.m.cd.call(this, a, b);
    e && !Eh(this, a) && c.insertBefore(e, c.firstChild || null)
};

function Ch(a, b, c) {
    a = Bh(a, 2);
    return c.O("DIV", a, b)
}
d.Gr = function (a, b, c) {
    a && b && Dh(this, a, b, c)
};
d.Qn = function (a, b, c) {
    a && b && Dh(this, a, b, c)
};

function Eh(a, b) {
    return (b = a.Dc(b)) ? (b = b.firstChild, a = Bh(a, 1), !!b && ia(b) && 1 == b.nodeType && Pg(b, a)) : !1
}

function Dh(a, b, c, e) {
    ch(a, c, b.wk());
    dh(a, b, c);
    e != Eh(a, c) && (e ? Qg(c, "goog-option") : Sg(c, "goog-option"), c = a.Dc(c), e ? (a = Bh(a, 1), c.insertBefore(b.Xb().O("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
d.lk = function (a) {
    switch (a) {
        case 2:
            return Bh(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Ah.m.lk.call(this, a)
    }
};
d.Ba = function () {
    return "goog-menuitem"
};

function Fh(a, b, c, e) {
    N.call(this, a, e || Ah.Id(), c);
    this.setValue(b)
}
z(Fh, N);
d = Fh.prototype;
d.getValue = function () {
    var a = this.cn;
    return null != a ? a : this.kk()
};
d.setValue = function (a) {
    this.cn = a
};
d.fc = function (a, b) {
    Fh.m.fc.call(this, a, b);
    switch (a) {
        case 8:
            this.za & 16 && !b && ih(this, !1);
            (a = this.F()) && this.ea.Gr(this, a, b);
            break;
        case 16:
            (a = this.F()) && this.ea.Qn(this, a, b)
    }
};
d.Gr = function (a) {
    this.fc(8, a)
};
d.Qn = function (a) {
    this.fc(16, a)
};
d.kk = function () {
    var a = this.qc();
    return w(a) ? (a = ua(a, function (a) {
        return ia(a) && 1 == a.nodeType && (Pg(a, "goog-menuitem-accel") || Pg(a, "goog-menuitem-mnemonic-separator")) ? "" : gd(a)
    }).join(""), jb(a)) : Fh.m.kk.call(this)
};
d.ah = function (a) {
    var b = this.getParent();
    if (b) {
        var c = b.jr;
        b.jr = null;
        if (c && v(a.clientX) && Ea(c, new A(a.clientX, a.clientY))) return
    }
    Fh.m.ah.call(this, a)
};
d.Qf = function (a) {
    return a.keyCode == this.Lq && this.fg(a) ? !0 : Fh.m.Qf.call(this, a)
};
d.lu = function () {
    return this.Lq
};
Ug("goog-menuitem", function () {
    return new Fh(null)
});
Fh.prototype.wk = function () {
    return this.fb & 16 ? "menuitemcheckbox" : this.fb & 8 ? "menuitemradio" : Fh.m.wk.call(this)
};
Fh.prototype.getParent = function () {
    return N.prototype.getParent.call(this)
};
Fh.prototype.vk = function () {
    return N.prototype.vk.call(this)
};

function Gh() {}
z(Gh, Zg);
da(Gh);
Gh.prototype.O = function (a) {
    return a.Xb().O("DIV", this.Ba())
};
Gh.prototype.cd = function () {};
Gh.prototype.Ba = function () {
    return "goog-menuseparator"
};

function Hh(a, b) {
    N.call(this, null, a || Gh.Id(), b);
    this.fc(1, !1);
    this.fc(2, !1);
    this.fc(4, !1);
    this.fc(32, !1);
    this.za = 1
}
z(Hh, N);
Hh.prototype.kb = function () {
    Hh.m.kb.call(this);
    var a = this.F();
    Bg(a, "separator")
};
Ug("goog-menuseparator", function () {
    return new Hh
});

function Ih(a) {
    this.Vo = a || "menu"
}
z(Ih, Wg);
da(Ih);
Ih.prototype.Ba = function () {
    return "goog-menu"
};
Ih.prototype.Ii = function (a) {
    Ih.m.Ii.call(this, a);
    a = a.F();
    M(a, "haspopup", "true")
};
Ug("goog-menuseparator", function () {
    return new Hh
});

function Jh(a, b) {
    ph.call(this, qh, b || Ih.Id(), a);
    this.xe(!1)
}
z(Jh, ph);
d = Jh.prototype;
d.Jj = !0;
d.Zs = !1;
d.Ba = function () {
    return this.ea.Ba()
};
d.removeItem = function (a) {
    (a = this.removeChild(a, !0)) && a.v()
};
d.gq = function (a) {
    return L(this, a)
};
d.setPosition = function (a, b) {
    var c = this.U();
    c || Wf(this.F(), !0);
    var e = this.F(),
        f = a;
    a = Sf(e);
    f instanceof A && (b = f.y, f = f.x);
    var h = e.offsetLeft + (f - a.x);
    h instanceof A ? (f = h.x, b = h.y) : (f = h, b = e.offsetTop + (Number(b) - a.y));
    e.style.left = Tf(f);
    e.style.top = Tf(b);
    c || Wf(this.F(), !1)
};
d.iq = function () {
    return this.U() ? Sf(this.F()) : null
};
d.ka = function (a, b, c) {
    (b = Jh.m.ka.call(this, a, b)) && a && this.sa && this.Jj && this.tb().focus();
    this.jr = a && c && v(c.clientX) ? new A(c.clientX, c.clientY) : null;
    return b
};
d.Fm = function (a) {
    this.Jj && this.tb().focus();
    return Jh.m.Fm.call(this, a)
};
d.$o = function (a) {
    return (this.Zs || a.isEnabled()) && a.U() && !!(a.fb & 2)
};
d.Qf = function (a) {
    var b = Jh.m.Qf.call(this, a);
    b || vg(this, function (c) {
        !b && c.lu && c.Lq == a.keyCode && (this.isEnabled() && this.Gb(c), b = c.$c(a))
    }, this);
    return b
};
d.Sb = function (a) {
    Jh.m.Sb.call(this, a);
    if (a = L(this, a)) {
        var b = a.F();
        a = this.F() || Tc(document);
        var c = a || Tc(document);
        var e = Sf(b),
            f = Sf(c);
        if (!G || 9 <= Number(Yb)) {
            k = Of(c, "borderLeftWidth");
            var h = Of(c, "borderRightWidth");
            l = Of(c, "borderTopWidth");
            m = Of(c, "borderBottomWidth");
            h = new Lf(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k))
        } else {
            var k = $f(c, "borderLeft");
            h = $f(c, "borderRight");
            var l = $f(c, "borderTop"),
                m = $f(c, "borderBottom");
            h = new Lf(l, h, m, k)
        }
        c == Tc(document) ? (k = e.x - c.scrollLeft, e = e.y - c.scrollTop, !G || 10 <= Number(Yb) || (k += h.left, e += h.top)) : (k = e.x - f.x - h.left, e = e.y - f.y - h.top);
        b = Vf(b);
        f = c.clientHeight - b.height;
        h = c.scrollLeft;
        l = c.scrollTop;
        h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
        l += Math.min(e, Math.max(e - f, 0));
        c = new A(h, l);
        a.scrollLeft = c.x;
        a.scrollTop = c.y
    }
};

function Kh(a, b) {
    y(a) || Lh(a);
    this.Yf = a;
    this.ho = this.vn = null;
    a = this.Yf;
    if (w(a)) {
        for (var c = !1, e = 0; e < a.length; e++) {
            var f = a[e][0];
            "string" == typeof f ? a[e][0] = B.h.Db(f) : (null != f.alt && (a[e][0].alt = B.h.Db(f.alt)), c = !0)
        }
        if (!(c || 2 > a.length)) {
            f = [];
            for (e = 0; e < a.length; e++) f.push(a[e][0]);
            var h = B.h.Zn(f);
            e = B.h.mp(f, h);
            c = B.h.np(f, h);
            if ((e || c) && !(h <= e + c)) {
                e && (this.vn = f[0].substring(0, e - 1));
                c && (this.ho = f[0].substr(1 - c));
                f = [];
                for (h = 0; h < a.length; h++) {
                    var k = a[h][0],
                        l = a[h][1];
                    k = k.substring(e, k.length - c);
                    f[h] = [k, l]
                }
                this.Yf =
                    f
            }
        }
    }
    a = this.getOptions()[0];
    Kh.m.constructor.call(this, a[1], b)
}
z(Kh, ag);
Kh.Z = function (a) {
    return new Kh(a.options)
};
var Mh = Pb ? "\u25bc" : "\u25be";
d = Kh.prototype;
d.Cj = "default";
d.zb = "";
d.pd = null;
d.Md = null;
d.$ = function () {
    this.Ja || (this.Ke = B.h.A("tspan", {}, null), this.Ke.appendChild(document.createTextNode(this.w.s ? Mh + " " : " " + Mh)), Kh.m.$.call(this))
};
d.qf = function () {
    B.H.show(this, this.w.s, null);
    var a = new Jh;
    a.ye(this.w.s);
    for (var b = this.getOptions(), c = 0; c < b.length; c++) {
        var e = b[c][0],
            f = b[c][1];
        if ("object" == typeof e) {
            var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h
        }
        e = new Fh(e);
        e.ye(this.w.s);
        e.setValue(f);
        e.Qn(!0);
        a.Rh(e, !0);
        ih(e, f == this.zb)
    }
    Nh(this, a);
    b = B.h.Em();
    c = jg(this);
    this.w.s ? c.right += 25 : c.left -= 25;
    this.ai(a);
    f = B.h.Gh.ne(a);
    e = .45 * document.documentElement.clientHeight;
    f.height > e && (f.height = e);
    this.w.s && B.h.Gh.So(b, c, f);
    B.H.tn(b,
        c, f, this.w.s);
    a.F().focus()
};

function Nh(a, b) {
    ue(b, "action", function (b) {
        (b = b.target) && a.$q(b);
        B.H.Di(a);
        B.i.T(!1)
    })
}
d.ai = function (a) {
    a.Y(B.H.ba);
    B.h.Ua(a.F(), "blocklyDropdownMenu");
    a.Jj = !0;
    a.xe(!0)
};
d.$q = function (a) {
    a = a.getValue();
    this.w && (a = bb(this, a));
    null !== a && this.setValue(a)
};
d.getOptions = function () {
    if (y(this.Yf)) {
        var a = this.Yf.call(this);
        Lh(a);
        return a
    }
    return this.Yf
};
d.getValue = function () {
    return this.zb
};
d.setValue = function (a) {
    if (null !== a && a !== this.zb) {
        this.w && B.i.isEnabled() && B.i.M(new B.i.ic(this.w, "field", this.name, this.zb, a));
        this.zb = a;
        for (var b = this.getOptions(), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                a = b[c][0];
                "object" == typeof a ? (this.Md = a, this.ra = a.alt) : (this.Md = null, this.ra = a);
                this.li();
                return
            }
        this.ra = a;
        this.li()
    }
};
d.Rd = function () {
    if (this.Ea) {
        this.w && this.Ke && (this.Ke.style.fill = this.w.Bd);
        Xc(this.ta);
        F(this.pd);
        this.pd = null;
        if (this.Md) {
            this.pd = B.h.A("image", {
                y: 5,
                height: this.Md.height + "px",
                width: this.Md.width + "px"
            }, this.Ja);
            this.pd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.Md.src);
            this.ta.appendChild(this.Ke);
            var a = gg(this.Ke);
            this.oa.height = Number(this.Md.height) + 19;
            this.oa.width = Number(this.Md.width) + a;
            this.w.s ? (this.pd.setAttribute("x", a), this.ta.setAttribute("x", -1)) : (this.ta.setAttribute("text-anchor",
                "end"), this.ta.setAttribute("x", this.oa.width + 1))
        } else a = document.createTextNode(fg(this)), this.ta.appendChild(a), this.w.s ? this.ta.insertBefore(this.Ke, this.ta.firstChild) : this.ta.appendChild(this.Ke), this.ta.setAttribute("text-anchor", "start"), this.ta.setAttribute("x", 0), this.oa.height = 25, this.oa.width = gg(this.ta);
        this.Tc.setAttribute("height", this.oa.height - 9);
        this.Tc.setAttribute("width", this.oa.width + 10)
    } else this.oa.width = 0
};
d.tj = function () {
    if (this.Md && (G || Lb)) {
        var a = gg(this.Ke);
        a = Number(this.Md.width) + a + 10;
        this.Tc && this.Tc.setAttribute("width", a);
        this.oa.width = a
    } else ag.prototype.tj.call(this)
};
d.v = function () {
    B.H.Di(this);
    Kh.m.v.call(this)
};

function Lh(a) {
    if (!w(a)) throw "FieldDropdown options must be an array.";
    for (var b = !1, c = 0; c < a.length; ++c) {
        var e = a[c];
        w(a) ? q(e[1]) ? q(e[0]) || q(e[0].src) || (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must be an array. Found: ",
            e))
    }
    if (b) throw "Found invalid FieldDropdown options.";
}
cg("field_dropdown", Kh);
// Copyright 2013 Google Inc.  Apache License 2.0
B.$a = Object(null);

function Oh(a) {
    this.L = a
}
d = Oh.prototype;
d.kp = !0;
d.Kl = 17;
d.Pa = null;
d.eh = null;

function Ph(a) {
    a.bc || (a.bc = B.h.A("g", {
        "class": "blocklyIconGroup"
    }, null), a.L.rc && B.h.Ua(a.bc, "blocklyIconGroupReadonly"), a.qm(a.bc), a.L.N().appendChild(a.bc), B.J(a.bc, "mouseup", a, a.Lm), a.Fe())
}
d.v = function () {
    F(this.bc);
    this.bc = null;
    this.ka(!1);
    this.L = null
};
d.Fe = function () {};
d.U = function () {
    return !!this.Pa
};
d.Lm = function (a) {
    this.L.o.lb() || this.L.rc || B.h.$e(a) || this.ka(!this.U())
};
d.Ee = function () {
    this.U() && this.Pa.we(this.L.Bd)
};

function Kd(a, b) {
    a.eh = b;
    a.U() && (a = a.Pa, a.gd = b, a.kg && bf(a))
}

function Qh(a) {
    var b = a.L.ia(),
        c = B.h.$b(a.bc);
    b = new A(b.x + c.x + a.Kl / 2, b.y + c.y + a.Kl / 2);
    Ea(a.eh, b) || Kd(a, b)
};

function Rh(a) {
    Rh.m.constructor.call(this, a);
    Ph(this)
}
z(Rh, Oh);
d = Rh.prototype;
d.ra = "";
d.aa = 160;
d.xa = 80;
d.qm = function (a) {
    B.h.A("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    B.h.A("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    B.h.A("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};
d.$h = function () {
    this.Cc = B.h.A("foreignObject", {
        x: cf,
        y: cf
    }, null);
    var a = document.createElementNS(B.Ge, "body");
    a.setAttribute("xmlns", B.Ge);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(B.Ge, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.L.s ? "RTL" : "LTR");
    a.appendChild(b);
    this.Za = b;
    this.Cc.appendChild(a);
    B.J(b, "mouseup", this, this.Yv, !0, !0);
    B.J(b, "wheel", this, function (a) {
        a.stopPropagation()
    });
    B.J(b, "change", this, function () {
        this.ra != b.value && (B.i.M(new B.i.ic(this.L,
            "comment", null, this.ra, b.value)), this.ra = b.value)
    });
    setTimeout(function () {
        b.focus()
    }, 0);
    return this.Cc
};
d.Fe = function () {
    this.U() && (this.ka(!1), this.ka(!0));
    Oh.prototype.Fe.call(this)
};
d.jl = function () {
    if (this.U()) {
        var a = this.Pa.Of(),
            b = 2 * cf;
        this.Cc.setAttribute("width", a.width - b);
        this.Cc.setAttribute("height", a.height - b);
        this.Za.style.width = a.width - b - 4 + "px";
        this.Za.style.height = a.height - b - 4 + "px"
    }
};
d.ka = function (a) {
    if (a != this.U())
        if (B.i.M(new Ra(this.L, "commentOpen", !a, a)), !Kf(this.L) && !this.Za || G) Sh.prototype.ka.call(this, a);
        else {
            var b = this.ub(),
                c = this.Of();
            a ? (this.Pa = new $e(this.L.o, this.$h(), this.L.ed, this.eh, this.aa, this.xa), jf(this.Pa, this.L.id), a = this.jl.bind(this), this.Pa.Dn = a, this.Ee()) : (this.Pa.v(), this.Cc = this.Za = this.Pa = null);
            this.xb(b);
            this.lf(c.width, c.height)
        }
};
d.Yv = function () {
    kf(this.Pa) && this.Za.focus()
};
d.Of = function () {
    return this.U() ? this.Pa.Of() : {
        width: this.aa,
        height: this.xa
    }
};
d.lf = function (a, b) {
    this.Za ? this.Pa.lf(a, b) : (this.aa = a, this.xa = b)
};
d.ub = function () {
    return this.Za ? this.Za.value : this.ra
};
d.xb = function (a) {
    this.ra != a && (B.i.M(new B.i.ic(this.L, "comment", null, this.ra, a)), this.ra = a);
    this.Za && (this.Za.value = a)
};
d.v = function () {
    B.i.isEnabled() && this.xb("");
    this.L.Ha = null;
    Oh.prototype.v.call(this)
};

function Th() {}
Th.prototype = [];

function ud(a, b) {
    if (b.Ve) throw "Connection already in database.";
    b.w.rc || (a.splice(zd(a, b), 0, b), b.Ve = !0)
}

function Uh(a, b) {
    if (!a.length) return -1;
    var c = zd(a, b);
    if (c >= a.length) return -1;
    for (var e = b.Fa, f = c; 0 <= f && a[f].Fa == e;) {
        if (a[f] == b) return f;
        f--
    }
    for (; c < a.length && a[c].Fa == e;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function zd(a, b) {
    if (!a.length) return 0;
    for (var c = 0, e = a.length; c < e;) {
        var f = Math.floor((c + e) / 2);
        if (a[f].Fa < b.Fa) c = f + 1;
        else if (a[f].Fa > b.Fa) e = f;
        else {
            c = f;
            break
        }
    }
    return c
}

function md(a, b) {
    if (!b.Ve) throw "Connection not in database.";
    var c = Uh(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Ve = !1;
    a.splice(c, 1)
}

function Fd(a, b, c) {
    function e(a) {
        var b = h - f[a].xc,
            e = k - f[a].Fa;
        Math.sqrt(b * b + e * e) <= c && m.push(f[a]);
        return e < c
    }
    var f = a,
        h = b.xc,
        k = b.Fa;
    a = 0;
    for (var l = b = f.length - 2; a < l;) f[l].Fa < k ? a = l : b = l, l = Math.floor((a + b) / 2);
    var m = [];
    b = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do b++; while (b < f.length && e(b))
    }
    return m
};

function Vh(a, b) {
    this.Zg = a;
    this.co = b.spacing;
    this.Fq = b.length;
    this.Wu = (this.Ym = a.firstChild) && this.Ym.nextSibling;
    this.Pv = b.snap
}
Vh.prototype.kf = 1;
Vh.prototype.v = function () {
    this.Zg = null
};
Vh.prototype.update = function (a) {
    this.kf = a;
    var b = this.co * a || 100;
    this.Zg.setAttribute("width", b);
    this.Zg.setAttribute("height", b);
    b = Math.floor(this.co / 2) + .5;
    var c = b - this.Fq / 2,
        e = b + this.Fq / 2;
    b *= a;
    c *= a;
    e *= a;
    Wh(this.Ym, a, c, e, b, b);
    Wh(this.Wu, a, b, b, c, e)
};

function Wh(a, b, c, e, f, h) {
    a && (a.setAttribute("stroke-width", b), a.setAttribute("x1", c), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h))
}
Vh.prototype.moveTo = function (a, b) {
    this.Zg.setAttribute("x", a);
    this.Zg.setAttribute("y", b);
    (G || Lb) && this.update(this.kf)
};

function Xh(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else c = Yh(a.toolbox), e = !(!c || !c.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), h = a.collapse, void 0 === h && (h = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl,
        u = a.horizontalLayout;
    void 0 === u && (u = !1);
    var p = a.toolboxPosition;
    p = "end" === p ? !1 : !0;
    p = u ? p ? B.Je : B.Cf : p == n ? B.xd : B.Ie;
    var t = a.scrollbars;
    void 0 === t && (t = e);
    var r = a.css;
    void 0 === r && (r = !0);
    var x = "https://blockly-demo.appspot.com/static/media/";
    a.media ? x = a.media : a.path && (x = a.path + "media/");
    var K = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
    this.s = n;
    this.nh = K;
    this.collapse = h;
    this.xt = k;
    this.disable = l;
    this.readOnly = b;
    this.Iq = a.maxBlocks || Infinity;
    this.rd = x;
    this.nq = e;
    this.pq = t;
    this.Gu = f;
    this.Fu = m;
    this.Eu = r;
    this.Ld = u;
    this.Od = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.hA = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.AA = 0 < c.spacing && !!b.snap;
    this.jq = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.hw = void 0 === a.wheel ? !1 : !!a.wheel;
    b.Qr = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Ui = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Vi = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Mv = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.Ib = b;
    this.wa = p
}
Xh.prototype.Gc = null;
Xh.prototype.pf = null;
Xh.prototype.eb = null;

function Yh(a) {
    a ? ("string" != typeof a && ("undefined" == typeof XSLTProcessor && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = B.D.Kc(a))) : a = null;
    return a
};

function Zh(a) {
    this.j = a;
    this.Re = new $h(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.wf = new $h(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.Yh = B.h.A("rect", {
        height: J,
        width: J,
        "class": "blocklyScrollbarBackground"
    }, null);
    B.h.Ji(this.Yh, a.vd)
}
Zh.prototype.Oa = null;
Zh.prototype.v = function () {
    F(this.Yh);
    this.Oa = this.j = this.Yh = null;
    this.Re.v();
    this.Re = null;
    this.wf.v();
    this.wf = null
};
Zh.prototype.resize = function () {
    var a = this.j.eb();
    if (a) {
        var b = !1,
            c = !1;
        this.Oa && this.Oa.va == a.va && this.Oa.Sa == a.Sa && this.Oa.bb == a.bb && this.Oa.Ta == a.Ta ? (this.Oa && this.Oa.oc == a.oc && this.Oa.gb == a.gb && this.Oa.Ac == a.Ac || (b = !0), this.Oa && this.Oa.Vb == a.Vb && this.Oa.Xd == a.Xd && this.Oa.nc == a.nc || (c = !0)) : c = b = !0;
        b && this.Re.resize(a);
        c && this.wf.resize(a);
        this.Oa && this.Oa.va == a.va && this.Oa.Ta == a.Ta || this.Yh.setAttribute("x", this.wf.uc.x);
        this.Oa && this.Oa.Sa == a.Sa && this.Oa.bb == a.bb || this.Yh.setAttribute("y", this.Re.uc.y);
        this.Oa = a
    }
};
Zh.prototype.set = function (a, b) {
    var c = {};
    a *= this.Re.Qb;
    b *= this.wf.Qb;
    var e = this.wf.bd,
        f = a / this.Re.bd;
    c.x = isNaN(f) ? 0 : f;
    e = b / e;
    c.y = isNaN(e) ? 0 : e;
    this.j.pf(c);
    ai(this.Re, a);
    ai(this.wf, b)
};

function $h(a, b, c, e) {
    this.j = a;
    this.oh = c || !1;
    this.Sf = b;
    this.Oa = null;
    this.Zh(e);
    this.uc = new A(0, 0);
    a = J;
    b ? (this.Jc.setAttribute("height", a), this.Pd.setAttribute("height", a), this.Vd.setAttribute("height", a - 5), this.Vd.setAttribute("y", 2.5), this.Ri = "width", this.mr = "x") : (this.Jc.setAttribute("width", a), this.Pd.setAttribute("width", a), this.Vd.setAttribute("width", a - 5), this.Vd.setAttribute("x", 2.5), this.Ri = "height", this.mr = "y");
    this.dr = B.J(this.Jc, "mousedown", this, this.vv);
    this.er = B.J(this.Vd, "mousedown",
        this, this.wv)
}
var bi, ci;
d = $h.prototype;
d.nn = new A(0, 0);
d.Or = 0;
d.bd = 0;
d.Se = 0;
d.Bi = 0;
d.Pi = !0;
d.Ff = !0;
var J = 15;
Td && (J = 25);
$h.prototype.v = function () {
    di();
    B.Aa(this.dr);
    this.dr = null;
    B.Aa(this.er);
    this.er = null;
    F(this.Pd);
    this.j = this.Vd = this.Jc = this.u = this.Pd = null
};

function ai(a, b) {
    a.Bi = b;
    a.Vd.setAttribute(a.mr, a.Bi)
}

function ei(a, b) {
    a.bd = b;
    a.Pd.setAttribute(a.Ri, a.bd);
    a.Jc.setAttribute(a.Ri, a.bd)
}
Zh.prototype.mg = function (a) {
    this.Re.mg(a);
    this.wf.mg(a)
};

function fi(a, b, c) {
    a.uc.x = b;
    a.uc.y = c;
    B.h.ej(a.Pd, "translate(" + (a.uc.x + a.nn.x) + "px," + (a.uc.y + a.nn.y) + "px)")
}
d = $h.prototype;
d.resize = function (a) {
    if (!a && (a = this.j.eb(), !a)) return;
    var b = this.Oa;
    if (!a || !b || a.va != b.va || a.Sa != b.Sa || a.gb != b.gb || a.Xd != b.Xd || a.bb != b.bb || a.Ta != b.Ta || a.oc != b.oc || a.Vb != b.Vb || a.Ac != b.Ac || a.nc != b.nc) {
        this.Oa = a;
        if (this.Sf) {
            b = a.va - 1;
            this.oh && (b -= J);
            ei(this, Math.max(0, b));
            b = a.Ta + .5;
            this.oh && this.j.s && (b += J);
            fi(this, b, a.bb + a.Sa - J - .5);
            this.oh || this.ka(this.bd < a.oc);
            this.Qb = this.bd / a.oc;
            if (-Infinity == this.Qb || Infinity == this.Qb || isNaN(this.Qb)) this.Qb = 0;
            this.Se = Math.max(0, a.va * this.Qb);
            this.Vd.setAttribute(this.Ri,
                this.Se);
            ai(this, gi(this, (a.gb - a.Ac) * this.Qb))
        } else {
            b = a.Sa - 1;
            this.oh && (b -= J);
            ei(this, Math.max(0, b));
            b = a.Ta + .5;
            this.j.s || (b += a.va - J - 1);
            fi(this, b, a.bb + .5);
            this.oh || this.ka(this.bd < a.Vb);
            this.Qb = this.bd / a.Vb;
            if (-Infinity == this.Qb || Infinity == this.Qb || isNaN(this.Qb)) this.Qb = 0;
            this.Se = Math.max(0, a.Sa * this.Qb);
            this.Vd.setAttribute(this.Ri, this.Se);
            ai(this, gi(this, (a.Xd - a.nc) * this.Qb))
        }
        hi(this)
    }
};
d.Zh = function (a) {
    var b = "blocklyScrollbar" + (this.Sf ? "Horizontal" : "Vertical");
    a && (b += " " + a);
    this.Pd = B.h.A("svg", {
        "class": b
    }, null);
    this.u = B.h.A("g", {}, this.Pd);
    this.Jc = B.h.A("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.u);
    a = Math.floor((J - 5) / 2);
    this.Vd = B.h.A("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.u);
    B.h.Ji(this.Pd, E(this.j))
};
d.U = function () {
    return this.Pi
};
d.mg = function (a) {
    var b = a != this.Ff;
    this.Ff = a;
    b && this.sj()
};
d.ka = function (a) {
    var b = a != this.U();
    if (this.oh) throw "Unable to toggle visibility of paired scrollbars.";
    this.Pi = a;
    b && this.sj()
};
d.sj = function () {
    this.Ff && this.U() ? this.Pd.setAttribute("display", "block") : this.Pd.setAttribute("display", "none")
};
d.vv = function (a) {
    Ef(this.j);
    B.Touch.ge();
    di();
    if (B.h.$e(a)) a.stopPropagation();
    else {
        var b = B.h.Wi(a, E(this.j), ii(this.j));
        b = this.Sf ? b.x : b.y;
        var c = B.h.qk(this.Vd);
        c = this.Sf ? c.x : c.y;
        var e = this.Bi,
            f = .95 * this.Se;
        b <= c ? e -= f : b >= c + this.Se && (e += f);
        ai(this, gi(this, e));
        hi(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
d.wv = function (a) {
    Ef(this.j);
    di();
    B.h.$e(a) ? a.stopPropagation() : (this.Rv = this.Bi, wf(this.j), this.Or = this.Sf ? a.clientX : a.clientY, bi = B.J(document, "mouseup", this, this.Bv), ci = B.J(document, "mousemove", this, this.xv), a.stopPropagation(), a.preventDefault())
};
d.xv = function (a) {
    ai(this, gi(this, this.Rv + ((this.Sf ? a.clientX : a.clientY) - this.Or)));
    hi(this)
};
d.Bv = function () {
    Ff(this.j);
    B.Touch.ge();
    di()
};

function di() {
    B.Bb(!0);
    bi && (B.Aa(bi), bi = null);
    ci && (B.Aa(ci), ci = null)
}

function gi(a, b) {
    return b = 0 >= b || isNaN(b) || a.bd < a.Se ? 0 : Math.min(b, a.bd - a.Se)
}

function hi(a) {
    var b = a.Bi / a.bd;
    isNaN(b) && (b = 0);
    var c = {};
    a.Sf ? c.x = b : c.y = b;
    a.j.pf(c)
}
d.set = function (a) {
    ai(this, gi(this, a * this.Qb));
    hi(this)
};

function ji(a, b) {
    ji.m.constructor.call(this, a, b);
    this.Jk = !1;
    this.Uc = {};
    this.Nr = this.$i = 0;
    this.mn = null
}
z(ji, zf);
d = ji.prototype;
d.ei = function (a) {
    ji.m.ei.call(this, a);
    !this.Ik && B.Touch.Mk(a) && ki(this, a)
};
d.Ef = function (a) {
    this.mn = B.J(document, "mousedown", null, this.Bu.bind(this), !0);
    this.bl = B.J(document, "mousemove", null, this.Ai.bind(this), !0);
    this.cl = B.J(document, "mouseup", null, this.Bk.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
d.Bu = function (a) {
    !this.lb() && B.Touch.Mk(a) && (ki(this, a), this.Jk && B.cf())
};
d.Ai = function (a) {
    if (this.lb()) B.Touch.$n(a) && ji.m.Ai.call(this, a);
    else if (this.Jk) {
        if (B.Touch.Mk(a)) {
            this.Uc[B.Touch.yk(a)] = li(this, a);
            var b = Object.keys(this.Uc);
            if (2 == b.length) {
                b = Fa(this.Uc[b[0]], this.Uc[b[1]]) / this.Nr;
                if (0 < this.$i && Infinity > this.$i) {
                    var c = b - this.$i;
                    c = 0 < c ? 5 * c : 6 * c;
                    var e = this.Ra,
                        f = B.h.Wi(a, E(e), ii(e));
                    e.zoom(f.x, f.y, c)
                }
                this.$i = b;
                a.preventDefault()
            }
        }
        B.cf()
    } else ji.m.Ai.call(this, a)
};
d.Bk = function (a) {
    if (B.Touch.Mk(a) && !this.lb()) {
        var b = B.Touch.yk(a);
        this.Uc[b] && delete this.Uc[b];
        2 > Object.keys(this.Uc).length && (this.Uc = {}, this.$i = 0)
    }!this.Jk || this.lb() ? B.Touch.$n(a) && ji.m.Bk.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.v())
};
d.v = function () {
    ji.m.v.call(this);
    this.mn && B.Aa(this.mn)
};

function ki(a, b) {
    a.Uc[B.Touch.yk(b)] = li(a, b);
    var c = Object.keys(a.Uc);
    2 == c.length && (a.Nr = Fa(a.Uc[c[0]], a.Uc[c[1]]), a.Jk = !0, b.preventDefault())
}

function li(a, b) {
    return a.Ra ? new A(b.pageX ? b.pageX : b.changedTouches[0].pageX, b.pageY ? b.pageY : b.changedTouches[0].pageY) : null
};

function mi(a) {
    this.j = a
}
d = mi.prototype;
d.Df = 47;
d.yj = 44;
d.Eg = 16;
d.Il = 20;
d.Nh = 20;
d.Dj = 10;
d.Ll = 0;
d.Ml = 32;
d.hh = !1;
d.u = null;
d.zl = null;
d.Xm = 0;
d.bf = 0;
d.mb = 0;
d.Be = 0;
d.O = function () {
    this.u = B.h.A("g", {
        "class": "blocklyTrash"
    }, null);
    var a = String(Math.random()).substring(2);
    var b = B.h.A("clipPath", {
        id: "blocklyTrashBodyClipPath" + a
    }, this.u);
    B.h.A("rect", {
        width: this.Df,
        height: this.yj,
        y: this.Eg
    }, b);
    B.h.A("image", {
        width: B.Tb.width,
        x: -this.Ll,
        height: B.Tb.height,
        y: -this.Ml,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.u).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.j.options.rd + B.Tb.url);
    b = B.h.A("clipPath", {
        id: "blocklyTrashLidClipPath" + a
    }, this.u);
    B.h.A("rect", {
        width: this.Df,
        height: this.Eg
    }, b);
    this.zl = B.h.A("image", {
        width: B.Tb.width,
        x: -this.Ll,
        height: B.Tb.height,
        y: -this.Ml,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.u);
    this.zl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.j.options.rd + B.Tb.url);
    B.J(this.u, "mouseup", this, this.click);
    this.Pl();
    return this.u
};
d.$ = function (a) {
    this.Sh = this.Il + a;
    Md(this, !1);
    return this.Sh + this.yj + this.Eg
};
d.v = function () {
    this.u && (F(this.u), this.u = null);
    this.j = this.zl = null;
    clearTimeout(this.Xm)
};
d.position = function () {
    var a = this.j.eb();
    a && (this.j.s ? (this.mb = this.Nh + J, a.wa == B.Ie && (this.mb += a.hk, this.j.W && (this.mb += a.Ta))) : (this.mb = a.va + a.Ta - this.Df - this.Nh - J, a.wa == B.xd && (this.mb -= a.hk)), this.Be = a.Sa + a.bb - (this.yj + this.Eg) - this.Sh, a.wa == B.Cf && (this.Be -= a.aq), this.u.setAttribute("transform", "translate(" + this.mb + "," + this.Be + ")"))
};
d.Ug = function () {
    if (!this.u) return null;
    var a = this.u.getBoundingClientRect();
    return new Mf(a.left + this.Ll - this.Dj, a.top + this.Ml - this.Dj, this.Df + 2 * this.Dj, this.Eg + this.yj + 2 * this.Dj)
};

function Md(a, b) {
    a.hh != b && (clearTimeout(a.Xm), a.hh = b, a.Pl())
}
d.Pl = function () {
    this.bf += this.hh ? .2 : -.2;
    this.bf = Math.min(Math.max(this.bf, 0), 1);
    var a = 45 * this.bf;
    this.zl.setAttribute("transform", "rotate(" + (this.j.s ? -a : a) + "," + (this.j.s ? 4 : this.Df - 4) + "," + (this.Eg - 2) + ")");
    this.u.style.opacity = .4 + .4 * this.bf;
    0 < this.bf && 1 > this.bf && (this.Xm = setTimeout(this.Pl.bind(this), 20))
};
d.close = function () {
    Md(this, !1)
};
d.click = function () {
    var a = this.j.Tv - this.j.scrollX,
        b = this.j.Vv - this.j.scrollY;
    Math.sqrt(a * a + b * b) > B.xo || console.log("TODO: Inspect trash.")
};

function Me(a, b, c, e) {
    this.o = a;
    this.name = b;
    this.type = c || "";
    this.fh = e || B.h.Fd();
    B.i.M(new Oa(this))
}
Me.prototype.ga = function () {
    return this.fh
};

function ni(a, b) {
    a = String(a.name).toLowerCase();
    b = String(b.name).toLowerCase();
    return a < b ? -1 : a == b ? 0 : 1
};
B.I = {};
B.I.Ph = B.Lo;
B.I.To = function (a) {
    var b = Ke(a);
    a = Object.create(null);
    for (var c = 0; c < b.length; c++) {
        var e = Oe(b[c]);
        if (e)
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                h.ga() && (a[h.ga()] = h)
            }
    }
    b = [];
    for (var k in a) b.push(a[k]);
    return b
};
B.I.Zz = function () {
    console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.")
};
B.I.Vs = function (a) {
    var b = Ke(a);
    a = {};
    for (var c = 0; c < b.length; c++) {
        var e = b[c];
        if (e.ju) {
            e = e.ju();
            for (var f = 0; f < e.length; f++) a[e[f]] = e[f]
        }
    }
    b = [];
    for (var h in a) b.push(a[h]);
    return b
};
B.I.Pe = function (a) {
    var b = [],
        c = C("button");
    c.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    c.setAttribute("callbackKey", "CREATE_VARIABLE");
    oi(a, function (a) {
        B.I.Og(a.pa)
    });
    b.push(c);
    a = B.I.um(a);
    return b = b.concat(a)
};
B.I.um = function (a) {
    a = a.ti("");
    a.sort(ni);
    var b = [];
    if (0 < a.length) {
        var c = a[0];
        if (B.$a.variables_set) {
            var e = B.$a.math_change ? 8 : 24;
            e = '<xml><block type="variables_set" gap="' + e + '">' + B.I.Tg(c) + "</block></xml>";
            e = B.D.Kc(e).firstChild;
            b.push(e)
        }
        B.$a.math_change && (e = B.$a.variables_get ? 20 : 8, e = '<xml><block type="math_change" gap="' + e + '">' + B.I.Tg(c) + '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>', e = B.D.Kc(e).firstChild, b.push(e));
        for (c = 0; e = a[c]; c++) B.$a.variables_get &&
            (e = '<xml><block type="variables_get" gap="8">' + B.I.Tg(e) + "</block></xml>", e = B.D.Kc(e).firstChild, b.push(e))
    }
    return b
};
B.I.gu = function (a) {
    a = a.ke();
    var b = "";
    if (a.length)
        for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b;) {
            for (var h = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) {
                    h = !0;
                    break
                }
            h ? (e++, 25 == e && (e = 0, c++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < c && (f += c)) : b = f
        } else b = "i";
    return b
};
B.I.Og = function (a, b, c) {
    function e(c) {
        B.I.rr(B.g.NEW_VARIABLE_TITLE, c, function (c) {
            if (c) {
                var h = B.I.ev(c, a);
                if (h) {
                    var k = c.toLowerCase();
                    if (h.type == f) var n = B.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
                    else n = B.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", k).replace("%2", h.type);
                    B.alert(n, function () {
                        e(c)
                    })
                } else a.Vc(c, f), b && b(c)
            } else b && b(null)
        })
    }
    var f = c || "";
    e("")
};
ba("Blockly.Variables.createVariableButtonHandler", B.I.Og);
B.I.Vc = B.I.Og;
ba("Blockly.Variables.createVariable", B.I.Vc);
B.I.Cn = function (a, b) {
    function c(e) {
        var f = B.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
        B.I.rr(f, e, function (e) {
            if (e) {
                var f = B.I.fv(e, b.type, a);
                f ? (f = B.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", e.toLowerCase()).replace("%2", f.type), B.alert(f, function () {
                    c(e)
                })) : a.jg(b.ga(), e)
            }
        })
    }
    c("")
};
B.I.rr = function (a, b, c) {
    B.prompt(a, b, function (a) {
        a && (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), a == B.g.RENAME_VARIABLE || a == B.g.NEW_VARIABLE) && (a = null);
        c(a)
    })
};
B.I.fv = function (a, b, c) {
    c = c.na.ke();
    a = a.toLowerCase();
    for (var e = 0, f; f = c[e]; e++)
        if (f.name.toLowerCase() == a && f.type != b) return f;
    return null
};
B.I.ev = function (a, b) {
    b = b.na.ke();
    a = a.toLowerCase();
    for (var c = 0, e; e = b[c]; c++)
        if (e.name.toLowerCase() == a) return e;
    return null
};
B.I.Tg = function (a) {
    var b = a.type;
    "" == b && (b = "''");
    return '<field name="VAR" id="' + a.ga() + '" variabletype="' + lb(b) + '">' + lb(a.name) + "</field>"
};
B.I.nA = function (a) {
    a = "<xml>" + B.I.Tg(a) + "</xml>";
    return B.D.Kc(a).firstChild
};
B.I.hq = function (a, b, c, e) {
    var f = B.I.md(a, b, c, e);
    f || (f = B.I.Bt(a, b, c, e));
    return f
};
B.I.md = function (a, b, c, e) {
    var f = a.rh;
    if (b) {
        var h = a.oe(b);
        !h && f && (h = f.oe(b))
    } else if (c) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.md(c, e);
        !h && f && (h = f.md(c, e))
    }
    return h
};
B.I.Bt = function (a, b, c, e) {
    var f = a.rh;
    c || (c = B.I.gu(a.pe ? a.xg : a));
    return f ? f.Vc(c, e, b) : a.Vc(c, e, b)
};
B.I.cq = function (a, b) {
    a = a.ke();
    var c = [];
    if (b.length != a.length)
        for (var e = 0; e < a.length; e++) {
            var f = a[e]; - 1 == b.indexOf(f) && c.push(f)
        }
    return c
};
B.Sc = {};
B.Sc.nv = function (a) {
    B.I.Og(a.pa, null, "String")
};
B.Sc.mv = function (a) {
    B.I.Og(a.pa, null, "Number")
};
B.Sc.kv = function (a) {
    B.I.Og(a.pa, null, "Colour")
};
B.Sc.Pe = function (a) {
    var b = [],
        c = C("button");
    c.setAttribute("text", B.g.NEW_STRING_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
    b.push(c);
    c = C("button");
    c.setAttribute("text", B.g.NEW_NUMBER_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
    b.push(c);
    c = C("button");
    c.setAttribute("text", B.g.NEW_COLOUR_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
    b.push(c);
    a.Mf.CREATE_VARIABLE_STRING = B.Sc.nv;
    a.Mf.CREATE_VARIABLE_NUMBER = B.Sc.mv;
    a.Mf.CREATE_VARIABLE_COLOUR =
        B.Sc.kv;
    a = B.Sc.um(a);
    return b = b.concat(a)
};
B.Sc.um = function (a) {
    a = a.ke();
    a.sort(ni);
    var b = [];
    if (0 < a.length) {
        if (B.$a.variables_set_dynamic) {
            var c = '<xml><block type="variables_set_dynamic" gap="24">' + B.I.Tg(a[0]) + "</block></xml>";
            c = B.D.Kc(c).firstChild;
            b.push(c)
        }
        if (B.$a.variables_get_dynamic)
            for (var e = 0; c = a[e]; e++) c = '<xml><block type="variables_get_dynamic" gap="8">' + B.I.Tg(c) + "</block></xml>", c = B.D.Kc(c).firstChild, b.push(c)
    }
    return b
};

function pi(a) {
    this.pn = a;
    this.Qh = Object.create(null)
}
d = pi.prototype;
d.Um = null;
d.v = function () {
    this.Qh = this.pn = null
};
d.load = function (a, b) {
    if (a.length) {
        try {
            var c = new window.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var h = a[f],
                k = h.match(/\.(\w+)$/);
            if (k && c.canPlayType("audio/" + k[1])) {
                e = new window.Audio(h);
                break
            }
        }
        e && e.play && (this.Qh[b] = e)
    }
};
d.preload = function () {
    for (var a in this.Qh) {
        var b = this.Qh[a];
        b.volume = .01;
        b.play();
        b.pause();
        if (Rb || Qb) break
    }
};
d.play = function (a, b) {
    var c = this.Qh[a];
    c ? (a = new Date, null != this.Um && a - this.Um < B.Ls || (this.Um = a, c = Yb && 9 === Yb || Rb || Pb ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())) : this.pn && this.pn.mc.play(a, b)
};
d = mf.prototype;
d.sb = function () {
    return {
        width: this.Ec(),
        height: this.Xg()
    }
};
d.Y = function () {
    if (!this.kg) {
        var a = this.sb();
        this.$h();
        this.u.appendChild(this.Cc);
        this.vg = B.h.A("rect", {
            "class": "blocklyCommentHandleTarget",
            x: 0,
            y: 0
        });
        this.u.appendChild(this.vg);
        this.sf = B.h.A("rect", {
            "class": "blocklyCommentTarget",
            x: 0,
            y: 0,
            rx: 3,
            ry: 3
        });
        this.u.appendChild(this.sf);
        this.pb = B.h.A("g", {
            "class": this.s ? "blocklyResizeSW" : "blocklyResizeSE"
        }, this.u);
        B.h.A("polygon", {
            points: "0,x x,x x,0".replace(/x/g, (8).toString())
        }, this.pb);
        B.h.A("line", {
                "class": "blocklyResizeLine",
                x1: 8 / 3,
                y1: 7,
                x2: 7,
                y2: 8 / 3
            },
            this.pb);
        B.h.A("line", {
            "class": "blocklyResizeLine",
            x1: 16 / 3,
            y1: 7,
            x2: 7,
            y2: 16 / 3
        }, this.pb);
        this.Ob() && (this.Ne = B.h.A("g", {
            "class": "blocklyCommentDeleteIcon"
        }, this.u), this.Lp = B.h.A("circle", {
            "class": "blocklyDeleteIconShape",
            r: "7",
            cx: "7.5",
            cy: "7.5"
        }, this.Ne), B.h.A("line", {
            x1: "5",
            y1: "10",
            x2: "10",
            y2: "5",
            stroke: "#fff",
            "stroke-width": "2"
        }, this.Ne), B.h.A("line", {
            x1: "5",
            y1: "5",
            x2: "10",
            y2: "10",
            stroke: "#fff",
            "stroke-width": "2"
        }, this.Ne));
        qi(this, a.width, a.height);
        this.Za.value = this.Bc;
        this.kg = !0;
        this.pb && B.J(this.pb,
            "mousedown", this, this.En);
        this.Ob() && (B.J(this.Ne, "mousedown", this, this.Nt), B.J(this.Ne, "mouseout", this, this.Ot), B.J(this.Ne, "mouseup", this, this.Pt))
    }
};
d.$h = function () {
    this.Cc = B.h.A("foreignObject", {
        x: 0,
        y: 10,
        "class": "blocklyCommentForeignObject"
    }, null);
    var a = document.createElementNS(B.Ge, "body");
    a.setAttribute("xmlns", B.Ge);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(B.Ge, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.s ? "RTL" : "LTR");
    a.appendChild(b);
    this.Za = b;
    this.Cc.appendChild(a);
    B.J(b, "wheel", this, function (a) {
        a.stopPropagation()
    });
    B.J(b, "change", this, function () {
        this.cd(b.value)
    });
    return this.Cc
};
d.En = function (a) {
    ri(this);
    B.h.$e(a) || (this.o.xl(a, new A(this.o.s ? -this.aa : this.aa, this.xa)), this.dg = B.J(document, "mouseup", this, this.Jv), this.ln = B.J(document, "mousemove", this, this.Fn), B.Bb());
    a.stopPropagation()
};
d.Nt = function (a) {
    B.h.Ua(this.Lp, "blocklyDeleteIconHighlighted");
    a.stopPropagation()
};
d.Ot = function () {
    B.h.vb(this.Lp, "blocklyDeleteIconHighlighted")
};
d.Pt = function (a) {
    this.v(!0, !0);
    a.stopPropagation()
};

function ri(a) {
    a.dg && (B.Aa(a.dg), a.dg = null);
    a.ln && (B.Aa(a.ln), a.ln = null)
}
d.Jv = function () {
    B.Touch.ge();
    ri(this)
};
d.Fn = function (a) {
    this.Kj = !1;
    a = lf(this.o, a);
    qi(this, this.s ? -a.x : a.x, a.y)
};

function qi(a, b, c) {
    b = Math.max(b, 45);
    c = Math.max(c, 30);
    a.aa = b;
    a.xa = c;
    a.nj.setAttribute("width", b);
    a.nj.setAttribute("height", c);
    a.sf.setAttribute("width", b);
    a.sf.setAttribute("height", c);
    a.vg.setAttribute("width", b);
    a.vg.setAttribute("height", 10);
    a.s && (a.nj.setAttribute("transform", "scale(-1 1)"), a.sf.setAttribute("transform", "scale(-1 1)"));
    a.pb && (a.s ? (a.pb.setAttribute("transform", "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"), a.Ne.setAttribute("transform", "translate(" + (-b + 8) + ",-8) scale(-1 1)")) :
        (a.pb.setAttribute("transform", "translate(" + (b - 8) + "," + (c - 8) + ")"), a.Ne.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
    b = a.sb();
    a.Cc.setAttribute("width", b.width);
    a.Cc.setAttribute("height", b.height - 10);
    a.s && a.Cc.setAttribute("x", -b.width);
    a.Za.style.width = b.width - 4 + "px";
    a.Za.style.height = b.height - 4 - 10 + "px"
}
d.Tn = function () {
    var a = this;
    this.ki = !0;
    setTimeout(function () {
        a.Za.focus();
        B.h.Ua(a.u, "blocklyFocused");
        B.h.Ua(a.sf, "blocklyCommentTargetFocused");
        B.h.Ua(a.vg, "blocklyCommentHandleTargetFocused")
    }, 0)
};

function of (a) {
    a.ki = !1;
    setTimeout(function () {
        a.Za.blur();
        B.h.vb(a.u, "blocklyFocused");
        B.h.vb(a.sf, "blocklyCommentTargetFocused");
        B.h.vb(a.vg, "blocklyCommentHandleTargetFocused")
    }, 0)
};

function si(a) {
    this.Xh = a;
    this.O()
}
d = si.prototype;
d.La = null;
d.Cd = null;
d.Xh = null;
d.O = function () {
    this.La || (this.La = B.h.A("svg", {
        xmlns: B.kc,
        "xmlns:html": B.Ge,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.Xh.appendChild(this.La))
};
d.Ce = function (a, b) {
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.La.style.display = "block";
    B.h.ej(this.La, "translate3d(" + a + "px, " + b + "px, 0px)")
};
d.xk = function () {
    return B.h.$b(this.La)
};
d.Vh = function (a) {
    if (!a) throw "Couldn't clear and hide the drag surface: missing new surface.";
    var b = this.La.childNodes[0],
        c = this.La.childNodes[1];
    if (!(b && c && B.h.oq(b, "blocklyBlockCanvas") && B.h.oq(c, "blocklyBubbleCanvas"))) throw "Couldn't clear and hide the drag surface.  A node was missing.";
    null != this.sd ? B.h.Ji(b, this.sd) : a.insertBefore(b, a.firstChild);
    B.h.Ji(c, b);
    this.La.style.display = "none";
    B.h.ej(this.La, "");
    this.sd = null
};
B.D = {};
B.D.vj = function (a, b) {
    var c = C("xml");
    c.appendChild(B.D.fw(B.I.To(a)));
    for (var e = Xe(a, !0), f = 0, h; h = e[f]; f++) c.appendChild(h.oj(b));
    a = I(a, !0);
    for (f = 0; e = a[f]; f++) c.appendChild(B.D.Tl(e, b));
    return c
};
B.D.fw = function (a) {
    for (var b = C("variables"), c = 0, e; e = a[c]; c++) {
        var f = C("variable", null, e.name);
        f.setAttribute("type", e.type);
        f.setAttribute("id", e.ga());
        b.appendChild(f)
    }
    return b
};
B.D.Tl = function (a, b) {
    var c;
    a.o.s && (c = a.o.Ec());
    b = B.D.Le(a, b);
    var e = a.ia();
    b.setAttribute("x", Math.round(a.o.s ? c - e.x : e.x));
    b.setAttribute("y", Math.round(e.y));
    return b
};
B.D.au = function (a) {
    null == a.getValue() && (a.Uf(), a.getValue());
    var b = a.md();
    if (!b) throw Error("Tried to serialize a variable field with no variable.");
    var c = C("field", null, b.name);
    c.setAttribute("name", a.name);
    c.setAttribute("id", b.ga());
    c.setAttribute("variabletype", b.type);
    return c
};
B.D.bu = function (a) {
    if (a.name && a.Af) {
        if (a.sh()) return B.D.au(a);
        var b = C("field", null, a.getValue());
        b.setAttribute("name", a.name);
        return b
    }
    return null
};
B.D.Ws = function (a, b) {
    for (var c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.Na[f]; f++)(h = B.D.bu(h)) && b.appendChild(h)
};
B.D.Le = function (a, b) {
    var c = C(a.Va ? "shadow" : "block");
    c.setAttribute("type", a.type);
    b || c.setAttribute("id", a.id);
    if (a.ad) {
        var e = a.ad();
        e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e)
    }
    B.D.Ws(a, c);
    if (e = a.mk()) {
        e = C("comment", null, e);
        if ("object" == typeof a.Ha) {
            e.setAttribute("pinned", a.Ha.U());
            var f = a.Ha.Of();
            e.setAttribute("h", f.height);
            e.setAttribute("w", f.width)
        }
        c.appendChild(e)
    }
    a.data && (e = C("data", null, a.data), c.appendChild(e));
    f = 0;
    for (var h; h = a.X[f]; f++) {
        var k, l = !0;
        if (h.type != B.Yd) {
            var m =
                D(h.connection);
            h.type == B.ab ? k = C("value") : h.type == B.Ka && (k = C("statement"));
            e = h.connection.Sd;
            !e || m && m.Va || k.appendChild(B.D.jp(e));
            m && (k.appendChild(B.D.Le(m, b)), l = !1);
            k.setAttribute("name", h.name);
            l || c.appendChild(k)
        }
    }
    a.Pu != a.Ye && c.setAttribute("inline", a.Ye);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.Ob() || a.Va || c.setAttribute("deletable", !1);
    a.Nd() || a.Va || c.setAttribute("movable", !1);
    Kf(a) || c.setAttribute("editable", !1);
    if (f = Xa(a)) k = C("next", null,
        B.D.Le(f, b)), c.appendChild(k);
    e = a.P && a.P.Sd;
    !e || f && f.Va || k.appendChild(B.D.jp(e));
    return c
};
B.D.jp = function (a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && F(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && F(c))
        }
    return a
};
B.D.pc = function (a) {
    return (new XMLSerializer).serializeToString(a)
};
B.D.mA = function (a) {
    a = B.D.pc(a).split("<");
    for (var b = "", c = 1; c < a.length; c++) {
        var e = a[c];
        "/" == e[0] && (b = b.substring(2));
        a[c] = b + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (b += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
B.D.Xv = function (a) {
    return (new DOMParser).parseFromString(a, "text/xml")
};
B.D.Kc = function (a) {
    a = B.D.Xv(a);
    if (!a || !a.documentElement || "xml" != a.documentElement.nodeName.toLowerCase()) throw Error("Blockly.Xml.textToDom expected an <xml> document.");
    return a.documentElement
};
B.D.gA = function (a, b) {
    b.wb(!1);
    b.clear();
    a = B.D.ie(a, b);
    b.wb(!0);
    return a
};
B.D.ie = function (a, b) {
    if (a instanceof Ve) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    b.s && (e = b.Ec());
    c = [];
    hg();
    var f = a.childNodes.length,
        h = B.i.Zb();
    h || B.i.T(!0);
    b.wb && b.wb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !B.i.Rb) {
                var u = B.D.Rg(m, b);
                c.push(u.id);
                var p = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    t = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(p) || isNaN(t) || u.moveBy(b.s ? e - p : p, t);
                k = !1
            } else {
                if ("shadow" == n) throw Error("Shadow block cannot be a top-level block.");
                if ("comment" == n)
                    if (b.R) rf(m, b, e);
                    else {
                        var r = m,
                            x = b,
                            K = Ue(r),
                            ha = new Re(x, K.content, K.lq, K.bs, K.id),
                            Y = parseInt(r.getAttribute("x"), 10),
                            fb = parseInt(r.getAttribute("y"), 10);
                        isNaN(Y) || isNaN(fb) || ha.moveBy(Y, fb);
                        Se(ha)
                    }
                else if ("variables" == n) {
                    if (k) B.D.Yt(m, b);
                    else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    k = !1
                }
            }
        }
    } finally {
        h || B.i.T(!1), ig()
    }
    b.wb && b.wb(!0);
    return c
};
B.D.$z = function (a, b) {
    if (b.hasOwnProperty("scale")) {
        var c = O;
        try {
            O = 0;
            var e = ti(b)
        } finally {
            O = c
        }
    }
    a = B.D.ie(a, b);
    if (e && e.height) {
        c = e.y + e.height;
        var f = e.x;
        var h = Infinity,
            k = Infinity;
        for (e = 0; e < a.length; e++) {
            var l = Wa(b, a[e]).ia();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x)
        }
        c = c - k + 10;
        f -= h;
        var m;
        b.s && (m = b.Ec());
        for (e = 0; e < a.length; e++) Wa(b, a[e]).moveBy(b.s ? m - f : f, c)
    }
    return a
};
B.D.Rg = function (a, b) {
    if (a instanceof Ve) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    B.i.disable();
    c = b.ke();
    try {
        var e = B.D.pm(a, b),
            f = Ja(e, !1);
        if (b.R) {
            ui(e, !0);
            for (var h = f.length - 1; 0 <= h; h--) f[h].We();
            for (h = f.length - 1; 0 <= h; h--) f[h].Y(!1);
            setTimeout(function () {
                e.o && ui(e, !1)
            }, 1);
            Ed(e);
            pf(b)
        } else
            for (h = f.length - 1; 0 <= h; h--) f[h].Uf()
    } finally {
        B.i.enable()
    }
    if (B.i.isEnabled()) {
        a = B.I.cq(b, c);
        for (h = 0; h < a.length; h++) B.i.M(new Oa(a[h]));
        B.i.M(new B.i.Aj(e))
    }
    return e
};
B.D.Yt = function (a, b) {
    for (var c = 0, e; e = a.children[c]; c++) {
        var f = e.getAttribute("type"),
            h = e.getAttribute("id");
        e = e.textContent;
        if (null == f) throw Error("Variable with id, " + h + " is without a type");
        b.Vc(e, f, h)
    }
};
B.D.pm = function (a, b) {
    var c = null,
        e = a.getAttribute("type");
    if (!e) throw Error("Block type unspecified: " + a.outerHTML);
    var f = a.getAttribute("id");
    c = b.Sq(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (3 != k.nodeType) {
            for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !h && l && (h = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.Oe && (c.Oe(k), c.We && c.We());
                    break;
                case "comment":
                    c.dj(k.textContent);
                    var u = k.getAttribute("pinned");
                    u && !c.rc && setTimeout(function () {
                        c.Ha && c.Ha.ka && c.Ha.ka("true" == u)
                    }, 1);
                    h = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(h) && !isNaN(k) && c.Ha && c.Ha.ka && c.Ha.lf(h, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    B.D.Xt(c, m, k);
                    break;
                case "value":
                case "statement":
                    k = eb(c, m);
                    if (!k) {
                        console.warn("Ignoring non-existent input " + m + " in block " + e);
                        break
                    }
                    l && (k.connection.Sd = l);
                    if (h)
                        if (h = B.D.pm(h, b), h.S) k.connection.connect(h.S);
                        else if (h.V) k.connection.connect(h.V);
                    else throw Error("Child block does not have output or previous statement.");
                    break;
                case "next":
                    l && c.P && (c.P.Sd = l);
                    if (h) {
                        if (!c.P) throw Error("Next statement does not exist.");
                        if (c.P.isConnected()) throw Error("Next statement is already connected.");
                        h = B.D.pm(h, b);
                        if (!h.V) throw Error("Next block does not have previous statement.");
                        c.P.connect(h.V)
                    }
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(f = a.getAttribute("inline")) && c.yh("true" == f);
    (f = a.getAttribute("disabled")) &&
    c.mf("true" == f || "disabled" == f);
    (f = a.getAttribute("deletable")) && c.Rn("true" == f);
    (f = a.getAttribute("movable")) && c.ng("true" == f);
    (f = a.getAttribute("editable")) && c.Sn("true" == f);
    (f = a.getAttribute("collapsed")) && c.lg("true" == f);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = c.le(!1);
        for (f = 0; b = a[f]; f++)
            if (b.Va) throw Error("Shadow block not allowed non-shadow child.");
        if (Oe(c).length) throw Error("Shadow blocks cannot have variable references.");
        c.Xn(!0)
    }
    return c
};
B.D.Wt = function (a, b, c, e) {
    var f = b.getAttribute("variabletype") || "";
    "''" == f && (f = "");
    a = B.I.hq(a, b.id, c, f);
    if (null != f && f !== a.type) throw Error("Serialized variable type with id '" + a.ga() + "' had type " + a.type + ", and does not match variable field that references it: " + B.D.pc(b) + ".");
    e.setValue(a.ga())
};
B.D.Xt = function (a, b, c) {
    var e = ab(a, b);
    e ? (a = a.o, b = c.textContent, e.sh() ? B.D.Wt(a, c, b, e) : e.setValue(b)) : console.warn("Ignoring non-existent field " + b + " in block " + a.type)
};
B.D.Qt = function (a) {
    for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) {
            a.removeChild(c);
            break
        }
};
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = B.D.pc;
g.Blockly.Xml.domToWorkspace = B.D.ie;
g.Blockly.Xml.textToDom = B.D.Kc;
g.Blockly.Xml.workspaceToDom = B.D.vj;
// Copyright 2015 Google Inc.  Apache License 2.0
function vi(a) {
    this.j = a
}
d = vi.prototype;
d.Df = 32;
d.yo = 110;
d.Il = 20;
d.Nh = 20;
d.u = null;
d.mb = 0;
d.Be = 0;
d.O = function () {
    this.u = B.h.A("g", {
        "class": "blocklyZoom"
    }, null);
    var a = String(Math.random()).substring(2);
    wi(this, a);
    xi(this, a);
    yi(this, a);
    return this.u
};
d.$ = function (a) {
    this.Sh = this.Il + a;
    return this.Sh + this.yo
};
d.v = function () {
    this.u && (F(this.u), this.u = null);
    this.j = null
};
d.position = function () {
    var a = this.j.eb();
    a && (this.j.s ? (this.mb = this.Nh + J, a.wa == B.Ie && (this.mb += a.hk, this.j.W && (this.mb += a.Ta))) : (this.mb = a.va + a.Ta - this.Df - this.Nh - J, a.wa == B.xd && (this.mb -= a.hk)), this.Be = a.Sa + a.bb - this.yo - this.Sh, a.wa == B.Cf && (this.Be -= a.aq), this.u.setAttribute("transform", "translate(" + this.mb + "," + this.Be + ")"))
};

function wi(a, b) {
    var c = a.j,
        e = B.h.A("clipPath", {
            id: "blocklyZoomoutClipPath" + b
        }, a.u);
    B.h.A("rect", {
        width: 32,
        height: 32,
        y: 77
    }, e);
    a = B.h.A("image", {
        width: B.Tb.width,
        height: B.Tb.height,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + b + ")"
    }, a.u);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.rd + B.Tb.url);
    B.J(a, "mousedown", null, function (a) {
        Ef(c);
        zi(c, -1);
        B.Touch.ge();
        a.stopPropagation();
        a.preventDefault()
    })
}

function xi(a, b) {
    var c = a.j,
        e = B.h.A("clipPath", {
            id: "blocklyZoominClipPath" + b
        }, a.u);
    B.h.A("rect", {
        width: 32,
        height: 32,
        y: 43
    }, e);
    a = B.h.A("image", {
        width: B.Tb.width,
        height: B.Tb.height,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + b + ")"
    }, a.u);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.rd + B.Tb.url);
    B.J(a, "mousedown", null, function (a) {
        Ef(c);
        zi(c, 1);
        B.Touch.ge();
        a.stopPropagation();
        a.preventDefault()
    })
}

function yi(a, b) {
    var c = a.j,
        e = B.h.A("clipPath", {
            id: "blocklyZoomresetClipPath" + b
        }, a.u);
    B.h.A("rect", {
        width: 32,
        height: 32
    }, e);
    a = B.h.A("image", {
        width: B.Tb.width,
        height: B.Tb.height,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + b + ")"
    }, a.u);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.rd + B.Tb.url);
    B.J(a, "mousedown", null, function (a) {
        Ef(c);
        c.setScale(c.options.Ib.Qr);
        if (c.Xa) {
            var b = c.eb(),
                e = (b.oc - b.va) / 2;
            c.G && (e -= c.G.aa / 2);
            c.Xa.set(e, (b.Vb - b.Sa) / 2)
        } else console.warn("Tried to scroll a non-scrollable workspace.");
        B.Touch.ge();
        a.stopPropagation();
        a.preventDefault()
    })
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Ai(a, b, c) {
    Ai.m.constructor.call(this, a);
    this.eb = a.eb || Bi;
    this.pf = a.pf || Ci;
    var e = [];
    e[B.ab] = new Th;
    e[B.Jg] = new Th;
    e[B.Ka] = new Th;
    e[B.He] = new Th;
    this.$l = e;
    b && (this.cb = b);
    c && (this.Bg = c);
    this.Bl = this.Bg && B.h.Ze();
    this.Ei = [];
    this.mc = new pi(a.Gc);
    this.Zc = this.options.kq ? new Vh(a.kq, a.jq) : null;
    B.I && B.I.Pe && (this.Dh[B.Lo] = B.I.Pe);
    B.Sc && B.Sc.Pe && (this.Dh[B.Os] = B.Sc.Pe);
    B.Wa && B.Wa.Pe && (this.Dh[B.Io] = B.Wa.Pe)
}
z(Ai, Ve);
d = Ai.prototype;
d.ll = null;
d.R = !0;
d.pe = !1;
d.Ni = !1;
d.Gn = !0;
d.scrollX = 0;
d.scrollY = 0;
d.Tv = 0;
d.Vv = 0;
d.Vp = null;
d.scale = 1;
d.vc = null;
d.Xa = null;
d.ib = null;
d.cb = null;
d.Bg = null;
d.Bl = !1;
d.Hk = !1;
d.Om = null;
d.Dq = null;
d.Mf = {};
d.Dh = {};
d.op = null;
d.xg = null;
d.yq = null;
d.Ki = !0;

function ii(a) {
    if (a.Ki) {
        var b = E(a).getScreenCTM();
        b && (a.yq = b.inverse(), a.Ki = !1)
    }
    return a.yq
}

function gb(a, b) {
    var c = 0,
        e = 0,
        f = 1;
    if (Zc(a.Da, b) || Zc(a.vd, b)) f = a.scale;
    do {
        var h = B.h.$b(b);
        if (b == a.Da || b == a.vd) f = 1;
        c += h.x * f;
        e += h.y * f;
        b = b.parentNode
    } while (b && b != E(a));
    return new A(c, e)
}
d.O = function (a) {
    this.u = B.h.A("g", {
        "class": "blocklyWorkspace"
    }, null);
    a && (this.Jc = B.h.A("rect", {
        height: "100%",
        width: "100%",
        "class": a
    }, this.u), "blocklyMainBackground" == a && this.Zc && (this.Jc.style.fill = "url(#" + this.Zc.Zg.id + ")"));
    this.Da = B.h.A("g", {
        "class": "blocklyBlockCanvas"
    }, this.u);
    this.vd = B.h.A("g", {
        "class": "blocklyBubbleCanvas"
    }, this.u);
    a = J;
    if (this.options.Gu) {
        this.vc = new mi(this);
        var b = this.vc.O();
        this.u.insertBefore(b, this.Da);
        a = this.vc.$(a)
    }
    this.options.Ib && this.options.Ib.controls && (this.Cg =
        new vi(this), b = this.Cg.O(), this.u.appendChild(b), this.Cg.$(a));
    this.pe || (B.J(this.u, "mousedown", this, this.te, !1, !0), this.options.Ib && this.options.Ib.hw && B.J(this.u, "wheel", this, this.Dv));
    this.options.nq && (this.W = new Di(this));
    this.Zc && this.Zc.update(this.scale);
    Ei(this);
    return this.u
};
d.v = function () {
    this.R = !1;
    this.ib && this.ib.cancel();
    Ai.m.v.call(this);
    this.u && (F(this.u), this.u = null);
    this.vd = this.Da = null;
    this.W && (this.W.v(), this.W = null);
    this.G && (this.G.v(), this.G = null);
    this.vc && (this.vc.v(), this.vc = null);
    this.Xa && (this.Xa.v(), this.Xa = null);
    this.Cg && (this.Cg.v(), this.Cg = null);
    this.mc && (this.mc.v(), this.mc = null);
    this.Zc && (this.Zc.v(), this.Zc = null);
    this.Dh && (this.Dh = null);
    this.Mf && (this.Mf = null);
    this.options.Gc || F(E(this).parentNode);
    this.ll && (B.Aa(this.ll), this.ll = null)
};
d.Sq = function (a, b) {
    return new P(this, a, b)
};

function Fi(a, b) {
    var c = {
        di: a.options.di,
        Gc: a,
        s: a.s,
        nh: a.options.nh,
        Ld: a.Ld,
        wa: a.options.wa
    };
    a.G = null;
    a.G = a.Ld ? new Gi(c) : new Hi(c);
    a.G.Mg = !1;
    return a.G.O(b)
}

function pf(a) {
    a.Gn && a.R && (a.Xa && a.Xa.resize(), a.Ki = !0)
}
d.resize = function () {
    this.W && this.W.position();
    this.G && this.G.position();
    this.vc && this.vc.position();
    this.Cg && this.Cg.position();
    this.Xa && this.Xa.resize();
    this.Ki = !0;
    Ei(this)
};

function Cf(a) {
    var b = Sc(document);
    Ea(a.Dq, b) || (a.Dq = b, a.Ki = !0, Ei(a))
}

function E(a) {
    if (a.Yo) return a.Yo;
    for (var b = a.u; b;) {
        if ("svg" == b.tagName) return a.Yo = b;
        b = b.parentNode
    }
    return null
}
d.translate = function (a, b) {
    if (this.Bl && this.Hk) this.Bg.Ce(a, b);
    else {
        var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
        this.Da.setAttribute("transform", c);
        this.vd.setAttribute("transform", c)
    }
    if (this.cb) {
        c = this.cb;
        var e = this.scale;
        c.kf = e;
        c.Cd.setAttribute("transform", "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")")
    }
};

function Ff(a) {
    if (a.Bl) {
        a.Hk = !1;
        var b = a.Bg.xk();
        a.Bg.Vh(a.u);
        b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
        a.Da.setAttribute("transform", b);
        a.vd.setAttribute("transform", b)
    }
}

function wf(a) {
    if (a.Bl && !a.Hk) {
        a.Hk = !0;
        var b = a.Da.previousSibling,
            c = parseInt(E(a).getAttribute("width"), 10),
            e = parseInt(E(a).getAttribute("height"), 10),
            f = B.h.$b(a.Da),
            h = a.Bg,
            k = a.Da,
            l = a.vd,
            m = a.scale;
        h.sd = b;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.La.setAttribute("width", c);
        h.La.setAttribute("height", e);
        h.La.appendChild(k);
        h.La.appendChild(l);
        h.La.style.display = "block";
        a.Bg.Ce(f.x, f.y)
    }
}
d.Ec = function () {
    var a = this.eb();
    return a ? a.va / this.scale : 0
};
d.ka = function (a) {
    this.Xa && this.Xa.mg(a);
    (this.G || this.W && this.W.G) && (this.G ? this.G : this.W ? this.W.G : null).mg(a);
    E(this).style.display = a ? "block" : "none";
    this.W && (this.W.jc.style.display = a ? "block" : "none");
    a ? (this.Y(), this.W && this.W.position()) : B.Bb(!0)
};
d.Y = function () {
    for (var a = Ke(this), b = a.length - 1; 0 <= b; b--) a[b].Y(!1)
};

function Ii(a, b) {
    var c = Q;
    if (void 0 === b) {
        for (var e = 0, f; f = c.Ei[e]; e++) f.Gb(!1);
        c.Ei.length = 0
    }
    if (f = a ? Wa(c, a) : null)(a = void 0 === b || b) ? -1 == c.Ei.indexOf(f) && c.Ei.push(f) : ya(c.Ei, f), f.Gb(a)
}

function Ji(a) {
    var b = B.Wh;
    if (a.R && !(b.getElementsByTagName("block").length >= Ze(a)))
        if (a.ib && a.ib.cancel(), "comment" == b.tagName.toLowerCase()) {
            B.i.disable();
            try {
                var c = rf(b, a),
                    e = parseInt(b.getAttribute("x"), 10),
                    f = parseInt(b.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.s && (e = -e), c.moveBy(e + 50, f + 50))
            } finally {
                B.i.enable()
            }
            c.select()
        } else {
            B.i.disable();
            try {
                var h = B.D.Rg(b, a),
                    k = parseInt(b.getAttribute("x"), 10),
                    l = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(k) && !isNaN(l)) {
                    a.s && (k = -k);
                    do {
                        b = !1;
                        var m = Ke(a);
                        c = 0;
                        for (var n; n = m[c]; c++) {
                            var u = n.ia();
                            if (1 >= Math.abs(k - u.x) && 1 >= Math.abs(l - u.y)) {
                                b = !0;
                                break
                            }
                        }
                        if (!b) {
                            var p = h.Gd(!1);
                            c = 0;
                            for (var t; t = p[c]; c++)
                                if (t.closest(B.yc, new A(k, l)).connection) {
                                    b = !0;
                                    break
                                }
                        }
                        b && (k = a.s ? k - B.yc : k + B.yc, l += 2 * B.yc)
                    } while (b);
                    h.moveBy(k, l)
                }
            } finally {
                B.i.enable()
            }
            B.i.isEnabled() && !h.Va && B.i.M(new B.i.Aj(h));
            h.select()
        }
}

function Ki(a) {
    if ((a = a.pe ? a.xg : a) && !a.ib && a.W && a.W.G) {
        a = a.W;
        var b = a.fd.Jd();
        b && b.zd && a.G.show(b.zd)
    }
}
d.jg = function (a, b) {
    Ai.m.jg.call(this, a, b);
    Ki(this)
};
d.If = function (a) {
    Ai.m.If.call(this, a);
    Ki(this)
};
d.Vc = function (a, b, c) {
    a = Ai.m.Vc.call(this, a, b, c);
    Ki(this);
    return a
};

function Ei(a) {
    a.Kp = a.vc && a.u.parentNode ? a.vc.Ug() : null;
    a.Jp = a.G ? a.G.Ug() : a.W ? a.W.Ug() : null
}

function Ld(a, b) {
    b = new A(b.clientX, b.clientY);
    return a.Kp && a.Kp.contains(b) ? B.Gl : a.Jp && a.Jp.contains(b) ? B.vo : B.uo
}
d.te = function (a) {
    var b = this.Hd(a);
    b && (b.Ra || (b.Ra = this), b.tc = a, b.ei(a))
};
d.xl = function (a, b) {
    a = B.h.Wi(a, E(this), ii(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.Vp = Ga(b, a)
};

function lf(a, b) {
    b = B.h.Wi(b, E(a), ii(a));
    b.x /= a.scale;
    b.y /= a.scale;
    return Ha(a.Vp, b)
}
d.lb = function () {
    return null != this.ib && this.ib.lb()
};
d.Dv = function (a) {
    this.ib && this.ib.cancel();
    var b = -a.deltaY / 50,
        c = B.h.Wi(a, E(this), ii(this));
    this.zoom(c.x, c.y, b);
    a.preventDefault()
};

function ti(a) {
    var b = I(a, !1);
    a = Xe(a, !1);
    b = b.concat(a);
    if (!b.length) return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    a = b[0].xm();
    for (var c = 1; c < b.length; c++) {
        var e = b[c].xm();
        e.Mc.x < a.Mc.x && (a.Mc.x = e.Mc.x);
        e.hd.x > a.hd.x && (a.hd.x = e.hd.x);
        e.Mc.y < a.Mc.y && (a.Mc.y = e.Mc.y);
        e.hd.y > a.hd.y && (a.hd.y = e.hd.y)
    }
    return {
        x: a.Mc.x,
        y: a.Mc.y,
        width: a.hd.x - a.Mc.x,
        height: a.hd.y - a.Mc.y
    }
}
d.st = function () {
    this.wb(!1);
    B.i.T(!0);
    for (var a = I(this, !0), b = 0, c = 0, e; e = a[c]; c++) {
        var f = e.ia();
        e.moveBy(-f.x, b - f.y);
        Li(e);
        b = e.ia().y + e.sb().height + 25
    }
    B.i.T(!1);
    this.wb(!0)
};
d.Ah = function (a) {
    function b(a) {
        if (a.Ob()) t = t.concat(Ja(a, !1));
        else {
            a = a.le(!1);
            for (var c = 0; c < a.length; c++) b(a[c])
        }
    }

    function c() {
        B.i.T(h);
        var a = t.shift();
        a && (a.o ? (a.v(!1, !0), setTimeout(c, 10)) : c());
        B.i.T(!1)
    }
    if (!this.options.readOnly && !this.pe) {
        var e = [],
            f = I(this, !0),
            h = B.h.Fd(),
            k = this,
            l = {};
        l.text = B.g.UNDO;
        l.enabled = 0 < this.yg.length;
        l.rb = this.no.bind(this, !1);
        e.push(l);
        l = {};
        l.text = B.g.REDO;
        l.enabled = 0 < this.aj.length;
        l.rb = this.no.bind(this, !0);
        e.push(l);
        this.Xa && (l = {}, l.text = B.g.CLEAN_UP, l.enabled = 1 < f.length,
            l.rb = this.st.bind(this), e.push(l));
        if (this.options.collapse) {
            for (var m = l = !1, n = 0; n < f.length; n++)
                for (var u = f[n]; u;) u.isCollapsed() ? l = !0 : m = !0, u = Xa(u);
            var p = function (a) {
                for (var b = 0, c = 0; c < f.length; c++)
                    for (var e = f[c]; e;) setTimeout(e.lg.bind(e, a), b), e = Xa(e), b += 10
            };
            m = {
                enabled: m
            };
            m.text = B.g.COLLAPSE_ALL;
            m.rb = function () {
                p(!0)
            };
            e.push(m);
            l = {
                enabled: l
            };
            l.text = B.g.EXPAND_ALL;
            l.rb = function () {
                p(!1)
            };
            e.push(l)
        }
        var t = [];
        for (n = 0; n < f.length; n++) b(f[n]);
        l = {
            text: 1 == t.length ? B.g.DELETE_BLOCK : B.g.DELETE_X_BLOCKS.replace("%1",
                String(t.length)),
            enabled: 0 < t.length,
            rb: function () {
                k.ib && k.ib.cancel();
                2 > t.length ? c() : B.confirm(B.g.DELETE_ALL_BLOCKS.replace("%1", t.length), function (a) {
                    a && c()
                })
            }
        };
        e.push(l);
        this.op && this.op(e);
        B.ca.show(a, e, this.s)
    }
};
d.Zr = function (a) {
    if (a = Yh(a)) {
        if (!this.options.Od) throw "Existing toolbox is null.  Can't create new toolbox.";
        if (a.getElementsByTagName("category").length) {
            if (!this.W) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.Od = a;
            this.W.fl(a);
            Mi(this.W)
        } else {
            if (!this.G) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.Od = a;
            this.G.show(a.childNodes)
        }
    } else if (this.options.Od) throw "Can't nullify an existing toolbox.";
};

function Ef(a) {
    if (a.options.Gc) Ef(a.options.Gc);
    else {
        B.df = a;
        document.activeElement && document.activeElement.blur();
        try {
            E(a).focus()
        } catch (b) {
            try {
                E(a).parentNode.setActive()
            } catch (c) {
                E(a).parentNode.focus()
            }
        }
    }
}
d.zoom = function (a, b, c) {
    var e = this.options.Ib.Mv,
        f = this.eb(),
        h = E(this).createSVGPoint();
    h.x = a;
    h.y = b;
    h = h.matrixTransform(this.Da.getCTM().inverse());
    a = h.x;
    b = h.y;
    h = this.Da;
    e = Math.pow(e, c);
    c = this.scale * e;
    c > this.options.Ib.Ui ? e = this.options.Ib.Ui / this.scale : c < this.options.Ib.Vi && (e = this.options.Ib.Vi / this.scale);
    this.scale != c && (this.Xa && (a = h.getCTM().translate(a * (1 - e), b * (1 - e)).scale(e), this.scrollX = a.e - f.Ta, this.scrollY = a.f - f.bb), this.setScale(c))
};

function zi(a, b) {
    var c = a.eb();
    a.zoom(c.va / 2, c.Sa / 2, b)
}
d.setScale = function (a) {
    this.options.Ib.Ui && a > this.options.Ib.Ui ? a = this.options.Ib.Ui : this.options.Ib.Vi && a < this.options.Ib.Vi && (a = this.options.Ib.Vi);
    this.scale = a;
    this.Zc && this.Zc.update(this.scale);
    this.Xa ? this.Xa.resize() : this.translate(this.scrollX, this.scrollY);
    B.Bb(!1);
    this.G && this.G.An()
};

function Ni(a) {
    var b = 0,
        c = 0;
    a && (b = a.Ec(), c = a.Xg());
    return {
        width: b,
        height: c
    }
}

function Oi(a) {
    var b = ti(a),
        c = a.scale;
    a = b.width * c;
    var e = b.height * c,
        f = b.x * c;
    b = b.y * c;
    return {
        left: f,
        top: b,
        right: f + a,
        bottom: b + e,
        width: a,
        height: e
    }
}

function Bi() {
    var a = Ni(this.W),
        b = Ni(this.G),
        c = B.Vr(E(this));
    if (this.W)
        if (this.wa == B.Je || this.wa == B.Cf) c.height -= a.height;
        else if (this.wa == B.Ie || this.wa == B.xd) c.width -= a.width;
    if (this.Xa) {
        var e = Oi(this);
        var f = c.width,
            h = c.height,
            k = f / 2,
            l = h / 2,
            m = Math.min(e.left - k, e.right - f),
            n = Math.min(e.top - l, e.bottom - h);
        e = {
            left: m,
            top: n,
            height: Math.max(e.bottom + l, e.top + h) - n,
            width: Math.max(e.right + k, e.left + f) - m
        }
    } else e = Oi(this);
    f = 0;
    this.W && this.wa == B.Ie && (f = a.width);
    h = 0;
    this.W && this.wa == B.Je && (h = a.height);
    return {
        Vb: e.height,
        oc: e.width,
        nc: e.top,
        Ac: e.left,
        Sa: c.height,
        va: c.width,
        Xd: -this.scrollY,
        gb: -this.scrollX,
        bb: h,
        Ta: f,
        CA: a.width,
        BA: a.height,
        hk: b.width,
        aq: b.height,
        wa: this.wa
    }
}

function Ci(a) {
    if (!this.Xa) throw "Attempt to set top level workspace scroll without scrollbars.";
    var b = this.eb();
    v(a.x) && (this.scrollX = -b.oc * a.x - b.Ac);
    v(a.y) && (this.scrollY = -b.Vb * a.y - b.nc);
    a = this.scrollX + b.Ta;
    b = this.scrollY + b.bb;
    this.translate(a, b);
    this.Zc && this.Zc.moveTo(a, b)
}
d.wb = function (a) {
    var b = !this.Gn && a;
    this.Gn = a;
    b && pf(this)
};
d.clear = function () {
    this.wb(!1);
    Ai.m.clear.call(this);
    this.wb(!0)
};

function oi(a, b) {
    a.Mf.CREATE_VARIABLE = b
}

function Pi(a, b) {
    return (a = a.Mf[b]) ? a : null
}

function Qi(a, b) {
    return (a = a.Dh[b]) ? a : null
}
d.Hd = function (a) {
    var b = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        c = this.ib;
    return c ? b && c.qq ? (console.warn("tried to start the same gesture twice"), c.cancel(), null) : c : b ? this.ib = new ji(a, this) : null
};
Ai.prototype.setVisible = Ai.prototype.ka;

function Ri(a) {
    Ri.m.constructor.call(this, null);
    this.ur = a
}
z(Ri, Oh);
d = Ri.prototype;
d.Jh = 0;
d.uj = 0;
d.qm = function (a) {
    B.h.A("rect", {
        "class": "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16"
    }, a);
    B.h.A("path", {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    B.h.A("circle", {
        "class": "blocklyIconShape",
        r: "2.7",
        cx: "8",
        cy: "8"
    }, a)
};
d.Lm = function (a) {
    Kf(this.L) && Oh.prototype.Lm.call(this, a)
};
d.$h = function () {
    this.lj = B.h.A("svg", {
        x: cf,
        y: cf
    }, null);
    if (this.ur.length)
        for (var a = C("xml"), b = 0, c; c = this.ur[b]; b++) a.appendChild(C("block", {
            type: c
        }));
    else a = null;
    a = {
        Od: a,
        Gc: this.L.o,
        rd: this.L.o.options.rd,
        s: this.L.s,
        wa: this.L.s ? B.xd : B.Ie,
        Ld: !1,
        eb: this.ku.bind(this),
        pf: null
    };
    this.j = new Ai(a);
    this.j.Ni = !0;
    a = Fi(this.j, "g");
    b = this.j.O("blocklyMutatorBackground");
    b.insertBefore(a, this.j.Da);
    this.lj.appendChild(b);
    return this.lj
};
d.Fe = function () {
    this.L.rc || (Kf(this.L) ? this.bc && B.h.vb(this.bc, "blocklyIconGroupReadonly") : (this.ka(!1), this.bc && B.h.Ua(this.bc, "blocklyIconGroupReadonly")));
    Oh.prototype.Fe.call(this)
};
d.jl = function () {
    var a = 2 * cf,
        b = this.j.Da.getBBox();
    var c = this.L.s ? -b.x : b.width + b.x;
    b = b.height + 3 * a;
    if (this.j.G) {
        var e = this.j.G.me();
        b = Math.max(b, e.Vb + 20)
    }
    c += 3 * a;
    if (Math.abs(this.Jh - c) > a || Math.abs(this.uj - b) > a) this.Jh = c, this.uj = b, this.Pa.lf(c + a, b + a), this.lj.setAttribute("width", this.Jh), this.lj.setAttribute("height", this.uj);
    this.L.s && this.j.Da.setAttribute("transform", "translate(" + this.Jh + ",0)");
    this.j.resize()
};
d.ka = function (a) {
    if (a != this.U())
        if (B.i.M(new Ra(this.L, "mutatorOpen", !a, a)), a) {
            this.Pa = new $e(this.L.o, this.$h(), this.L.ed, this.eh, null, null);
            jf(this.Pa, this.L.id);
            if (a = this.j.options.Od) this.j.G.$(this.j), this.j.G.show(a.childNodes);
            this.ve = this.L.Xj(this.j);
            a = Ja(this.ve, !1);
            for (var b = 0, c; c = a[b]; b++) c.Y();
            this.ve.ng(!1);
            this.ve.Rn(!1);
            this.j.G ? (a = 2 * this.j.G.ha, b = this.j.G.aa + a) : b = a = 16;
            this.L.s && (b = -b);
            this.ve.moveBy(b, a);
            if (this.L.Br) {
                var e = this;
                this.L.Br(this.ve);
                this.vl = function () {
                    e.L.Br(e.ve)
                };
                this.L.o.lc(this.vl)
            }
            this.jl();
            this.j.lc(this.iw.bind(this));
            this.Ee()
        } else this.lj = null, this.j.v(), this.ve = this.j = null, this.Pa.v(), this.Pa = null, this.uj = this.Jh = 0, this.vl && (this.L.o.hf(this.vl), this.vl = null)
};
d.iw = function () {
    if (!this.j.lb())
        for (var a = I(this.j, !1), b = 0, c; c = a[b]; b++) {
            var e = c.ia(),
                f = c.sb();
            20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y)
        }
    if (this.ve.o == this.j) {
        B.i.T(!0);
        c = this.L;
        a = (a = c.ad()) && B.D.pc(a);
        b = c.R;
        c.R = !1;
        c.Rj(this.ve);
        c.R = b;
        c.We();
        b = (b = c.ad()) && B.D.pc(b);
        if (a != b) {
            B.i.M(new B.i.ic(c, "mutation", null, a, b));
            var h = B.i.Zb();
            setTimeout(function () {
                B.i.T(h);
                c.Ub();
                B.i.T(!1)
            }, B.zj)
        }
        c.R && c.Y();
        this.j.lb() || this.jl();
        B.i.T(!1)
    }
};
d.ku = function () {
    return {
        Sa: this.uj,
        va: this.Jh,
        bb: 0,
        Ta: 0
    }
};
d.v = function () {
    this.L.re = null;
    Oh.prototype.v.call(this)
};
g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = function (a, b, c) {
    if (!a || !a.w.o) return !1;
    c = eb(b, c).connection;
    var e = D(a);
    return e && e != b || c.yb == a ? !1 : (c.isConnected() && c.disconnect(), c.connect(a), !0)
};
B.la = {};
B.la.El = {};
B.la.register = function (a, b) {
    if (!q(a) || ib(a)) throw Error('Error: Invalid extension name "' + a + '"');
    if (B.la.El[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if (!y(b)) throw Error('Error: Extension "' + a + '" must be a function');
    B.la.El[a] = b
};
B.la.vA = function (a, b) {
    if (!ia(b)) throw Error('Error: Mixin "' + a + '" must be a object');
    B.la.register(a, function () {
        Si(this, b)
    })
};
B.la.wA = function (a, b, c, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    B.la.ap(f, b.Oe, "domToMutation");
    B.la.ap(f, b.ad, "mutationToDom");
    var h = B.la.cp(b, f);
    if (c && !y(c)) throw Error('Extension "' + a + '" is not a function');
    B.la.register(a, function () {
        h && this.Fr(new Ri(e));
        Si(this, b);
        c && c.apply(this)
    })
};
B.la.apply = function (a, b, c) {
    var e = B.la.El[a];
    if (!y(e)) throw Error('Error: Extension "' + a + '" not found.');
    if (c) B.la.qt(a, b);
    else var f = B.la.Am(b);
    e.apply(b);
    if (c) B.la.nt('Error after applying mutator "' + a + '": ', b);
    else if (!B.la.dv(f, b)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
B.la.ap = function (a, b, c) {
    if (!b) throw Error(a + 'missing required property "' + c + '"');
    if ("function" != typeof b) throw Error(a + '" required property "' + c + '" must be a function');
};
B.la.qt = function (a, b) {
    if (B.la.Am(b).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + b.id);
};
B.la.cp = function (a, b) {
    var c = void 0 !== a.Rj,
        e = void 0 !== a.Xj;
    if (c && e) {
        if ("function" != typeof a.Rj) throw Error(b + "compose must be a function.");
        if ("function" != typeof a.Xj) throw Error(b + "decompose must be a function.");
        return !0
    }
    if (c || e) throw Error(b + 'Must have both or neither of "compose" and "decompose"');
    return !1
};
B.la.nt = function (a, b) {
    if ("function" != typeof b.Oe) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof b.ad) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    B.la.cp(b, a)
};
B.la.Am = function (a) {
    var b = [];
    void 0 !== a.Oe && b.push(a.Oe);
    void 0 !== a.ad && b.push(a.ad);
    void 0 !== a.Rj && b.push(a.Rj);
    void 0 !== a.Xj && b.push(a.Xj);
    return b
};
B.la.dv = function (a, b) {
    b = B.la.Am(b);
    if (b.length != a.length) return !1;
    for (var c = 0; c < b.length; c++)
        if (a[c] != b[c]) return !1;
    return !0
};
B.la.cA = function (a, b) {
    var c = [];
    "object" == typeof document && B.h.Ar(function () {
        for (var a in b) B.h.bp(b[a])
    });
    return function () {
        this.type && -1 === c.indexOf(this.type) && (B.la.ot(this, a, b), c.push(this.type));
        this.dd(function () {
            var e = Ne(this, a),
                f = b[e];
            null == f ? -1 === c.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = B.h.Db(f);
            return f
        }.bind(this))
    }
};
B.la.ot = function (a, b, c) {
    var e = ab(a, b);
    if (!y(e.Yf)) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var h = e[f][1];
            null == c[h] && console.warn("No tooltip mapping for value " + h + " of field " + b + " of block type " + a.type)
        }
    }
};
B.la.dA = function (a, b) {
    "object" == typeof document && B.h.Ar(function () {
        B.h.bp(a)
    });
    return function () {
        this.dd(function () {
            var c = ab(this, b);
            return B.h.Db(a).replace("%1", c ? c.ub() : "")
        }.bind(this))
    }
};
B.la.$t = function () {
    this.aw = this.Lc;
    this.dd(function () {
        var a = this.getParent();
        return a && Ti(a) && a.Lc || this.aw
    }.bind(this))
};
B.la.register("parent_tooltip_when_inline", B.la.$t);

function Ui(a, b) {
    this.oa = new Kc(0, 17.5);
    this.gp = b;
    this.setValue(a)
}
z(Ui, ag);
Ui.Z = function (a) {
    var b = B.h.Db(a.text);
    return new Ui(b, a["class"])
};
d = Ui.prototype;
d.Af = !1;
d.$ = function () {
    this.ta || (this.ta = B.h.A("text", {
        "class": "blocklyText",
        y: this.oa.height - 5
    }, null), this.gp && B.h.Ua(this.ta, this.gp), this.Ea || (this.ta.style.display = "none"), this.w.N().appendChild(this.ta), this.ta.Lc = this.w, B.B.Ef(this.ta), this.Rd())
};
d.v = function () {
    F(this.ta);
    this.ta = null
};
d.N = function () {
    return this.ta
};
d.dd = function (a) {
    this.ta.Lc = a
};
cg("field_label", Ui);

function Vi(a, b, c, e) {
    if (a != B.Yd && !b) throw "Value inputs and statement inputs must have non-empty name.";
    this.type = a;
    this.name = b;
    this.w = c;
    this.connection = e;
    this.Na = []
}
d = Vi.prototype;
d.align = B.Kh;
d.Ea = !0;

function Wi(a, b, c) {
    Xi(a, a.Na.length, b, c);
    return a
}

function Xi(a, b, c, e) {
    if (0 > b || b > a.Na.length) throw Error("index " + b + " out of bounds.");
    if (!c && !e) return b;
    q(c) && (c = new Ui(c));
    c.Yn(a.w);
    a.w.R && c.$();
    c.name = e;
    c.vn && (b = Xi(a, b, c.vn));
    a.Na.splice(b, 0, c);
    ++b;
    c.ho && (b = Xi(a, b, c.ho));
    a.w.R && (a.w.Y(), a.w.Ub());
    return b
}
d.U = function () {
    return this.Ea
};
d.ka = function (a) {
    var b = [];
    if (this.Ea == a) return b;
    for (var c = (this.Ea = a) ? "block" : "none", e = 0, f; f = this.Na[e]; e++) f.ka(a);
    if (this.connection) {
        if (a) b = Bd(this.connection);
        else if (e = this.connection, Cd(e, !0), e.yb)
            for (e = Ja(D(e), !1), f = 0; f < e.length; f++) {
                for (var h = e[f], k = h.Gd(!0), l = 0; l < k.length; l++) Cd(k[l], !0);
                h = Id(h);
                for (l = 0; l < h.length; l++) h[l].ka(!1)
            }
        if (e = D(this.connection)) e.N().style.display = c, a || (e.R = !1)
    }
    return b
};
d.xh = function (a) {
    if (!this.connection) throw "This input does not have a connection.";
    this.connection.xh(a)
};
d.$ = function () {
    if (this.w.o.R)
        for (var a = 0; a < this.Na.length; a++) this.Na[a].$()
};
d.v = function () {
    for (var a = 0, b; b = this.Na[a]; a++) b.v();
    this.connection && this.connection.v();
    this.w = null
};

function Sh(a) {
    Sh.m.constructor.call(this, a);
    Ph(this);
    this.ra = {}
}
z(Sh, Oh);
d = Sh.prototype;
d.kp = !1;
d.qm = function (a) {
    B.h.A("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    B.h.A("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    B.h.A("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
d.ka = function (a) {
    if (a != this.U())
        if (B.i.M(new Ra(this.L, "warningOpen", !a, a)), a) {
            var b = this.ub();
            a = B.h.A("text", {
                "class": "blocklyText blocklyBubbleText",
                y: cf
            }, null);
            b = b.split("\n");
            for (var c = 0; c < b.length; c++) B.h.A("tspan", {
                dy: "1em",
                x: cf
            }, a).appendChild(document.createTextNode(b[c]));
            this.Pa = new $e(this.L.o, a, this.L.ed, this.eh, null, null);
            jf(this.Pa, this.L.id);
            if (this.L.s) {
                b = a.getBBox().width;
                c = 0;
                for (var e; e = a.childNodes[c]; c++) e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + cf)
            }
            this.Ee();
            a =
                this.Pa.Of();
            this.Pa.lf(a.width, a.height)
        } else this.Pa.v(), this.Pa = null
};
d.xb = function (a, b) {
    this.ra[b] != a && (a ? this.ra[b] = a : delete this.ra[b], this.U() && (this.ka(!1), this.ka(!0)))
};
d.ub = function () {
    var a = [],
        b;
    for (b in this.ra) a.push(this.ra[b]);
    return a.join("\n")
};
d.v = function () {
    this.L.Oc = null;
    Oh.prototype.v.call(this)
};

function Ye(a, b, c) {
    "undefined" !== typeof Yi.prototype[b] && console.warn('FUTURE ERROR: Block prototypeName "' + b + '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.');
    this.id = c && !Wa(a, c) ? c : B.h.Fd();
    a.Sl[this.id] = this;
    this.V = this.P = this.S = null;
    this.X = [];
    this.Ye = void 0;
    this.disabled = !1;
    this.Lc = "";
    this.contextMenu = !0;
    this.ff = null;
    this.ee = [];
    this.Xp = this.Xi = this.ci = !0;
    this.Ad =
        this.Va = !1;
    this.Ha = null;
    this.Pc = new A(0, 0);
    this.o = a;
    this.rc = a.pe;
    this.s = a.s;
    if (b) {
        this.type = b;
        b = B.$a[b];
        for (var e in b) this[e] = b[e]
    }
    a.Eh.push(this);
    y(this.$) && this.$();
    this.Pu = this.Ye;
    if (B.i.isEnabled()) {
        (a = B.i.Zb()) || B.i.T(!0);
        try {
            B.i.M(new B.i.Aj(this))
        } finally {
            a || B.i.T(!1)
        }
    }
    if (y(this.onchange)) {
        if ((a = this.onchange) && !y(a)) throw Error("onchange must be a function.");
        this.Yi && this.o.hf(this.Yi);
        if (this.onchange = a) this.Yi = a.bind(this), this.o.lc(this.Yi)
    }
}
d = Ye.prototype;
d.data = null;
d.Bd = "#000000";
d.v = function (a) {
    if (this.o) {
        this.Yi && this.o.hf(this.Yi);
        db(this, a);
        B.i.isEnabled() && B.i.M(new B.i.js(this));
        B.i.disable();
        try {
            this.o && (We(this.o, this), delete this.o.Sl[this.id], this.o = null);
            B.selected == this && (B.selected = null);
            for (var b = this.ee.length - 1; 0 <= b; b--) this.ee[b].v(!1);
            b = 0;
            for (var c; c = this.X[b]; b++) c.v();
            this.X.length = 0;
            var e = this.Gd(!0);
            for (b = 0; b < e.length; b++) {
                var f = e[b];
                f.isConnected() && f.disconnect();
                e[b].v()
            }
        } finally {
            B.i.enable()
        }
    }
};
d.Uf = function () {
    for (var a = 0, b; b = this.X[a]; a++)
        for (var c = 0, e; e = b.Na[c]; c++) e.Uf && e.Uf()
};

function db(a, b) {
    if (a.S) a.S.isConnected() && a.S.disconnect();
    else if (a.V) {
        var c = null;
        a.V.isConnected() && (c = a.V.yb, a.V.disconnect());
        var e = Xa(a);
        b && e && (a = a.P.yb, a.disconnect(), c && jd(c, a) && c.connect(a))
    }
}
d.Gd = function () {
    var a = [];
    this.S && a.push(this.S);
    this.V && a.push(this.V);
    this.P && a.push(this.P);
    for (var b = 0, c; c = this.X[b]; b++) c.connection && a.push(c.connection);
    return a
};
d.Ub = function () {
    console.warn("Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead.")
};
d.getParent = function () {
    return this.ff
};

function Zi(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (Xa(a) == b);
    return a
}

function Xa(a) {
    return a.P && D(a.P)
}

function td(a) {
    var b = a;
    do a = b, b = a.ff; while (b);
    return a
}
d.le = function (a) {
    if (!a) return this.ee;
    a = [];
    for (var b = 0, c; c = this.X[b]; b++) c.connection && (c = D(c.connection)) && a.push(c);
    (b = Xa(this)) && a.push(b);
    return a
};
d.og = function (a) {
    if (a != this.ff) {
        if (this.ff) {
            ya(this.ff.ee, this);
            if (this.V && this.V.isConnected()) throw "Still connected to previous block.";
            if (this.S && this.S.isConnected()) throw "Still connected to parent block.";
            this.ff = null
        } else We(this.o, this);
        (this.ff = a) ? a.ee.push(this): this.o.Eh.push(this)
    }
};

function Ja(a, b) {
    var c = [a];
    a = a.le(b);
    for (var e, f = 0; e = a[f]; f++) c.push.apply(c, Ja(e, b));
    return c
}
d.Ob = function () {
    return this.ci && !this.Va && !(this.o && this.o.options.readOnly)
};
d.Rn = function (a) {
    this.ci = a
};
d.Nd = function () {
    return this.Xi && !this.Va && !(this.o && this.o.options.readOnly)
};
d.ng = function (a) {
    this.Xi = a
};
d.Xn = function (a) {
    this.Va = a
};

function Kf(a) {
    return a.Xp && !(a.o && a.o.options.readOnly)
}
d.Sn = function (a) {
    this.Xp = a;
    a = 0;
    for (var b; b = this.X[a]; a++)
        for (var c = 0, e; e = b.Na[c]; c++) e.Fe()
};

function ui(a, b) {
    if (!b && a.isCollapsed()) {
        if (a.S && Cd(a.S, b), a.V && Cd(a.V, b), a.P) {
            Cd(a.P, b);
            var c = D(a.P);
            c && ui(c, b)
        }
    } else {
        a = a.Gd(!0);
        for (var e = 0; c = a[e]; e++) Cd(c, b), nd(c) && (c = D(c)) && ui(c, b)
    }
}
d.dd = function (a) {
    this.Lc = a
};
d.we = function (a) {
    var b = q(a) ? B.h.Db(a) : a,
        c = Number(b);
    if (!isNaN(c) && 0 <= c && 360 >= c) this.Bd = B.vq(c);
    else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.Bd = b;
    else throw c = 'Invalid colour: "' + b + '"', a != b && (c += ' (from "' + a + '")'), c;
};

function ab(a, b) {
    for (var c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.Na[f]; f++)
            if (h.name === b) return h;
    return null
}

function Oe(a) {
    for (var b = [], c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.Na[f]; f++) h.sh() && (h = a.o.oe(h.getValue())) && b.push(h);
    return b
}

function Ne(a, b) {
    return (a = ab(a, b)) ? a.getValue() : null
}
d.pg = function (a, b) {
    a ? (void 0 === b && (b = null), this.V || (this.V = this.Si(B.He)), this.V.xh(b)) : this.V && (this.V.v(), this.V = null)
};
d.zh = function (a, b) {
    a ? (void 0 === b && (b = null), this.P || (this.P = this.Si(B.Ka)), this.P.xh(b)) : this.P && (this.P.v(), this.P = null)
};
d.Un = function (a, b) {
    a ? (void 0 === b && (b = null), this.S || (this.S = this.Si(B.Jg)), this.S.xh(b)) : this.S && (this.S.v(), this.S = null)
};
d.yh = function (a) {
    this.Ye != a && (B.i.M(new B.i.ic(this, "inline", null, this.Ye, a)), this.Ye = a)
};

function Ti(a) {
    if (void 0 != a.Ye) return a.Ye;
    for (var b = 1; b < a.X.length; b++)
        if (a.X[b - 1].type == B.Yd && a.X[b].type == B.Yd) return !1;
    for (b = 1; b < a.X.length; b++)
        if (a.X[b - 1].type == B.ab && a.X[b].type == B.Yd) return !0;
    return !1
}
d.mf = function (a) {
    this.disabled != a && (B.i.M(new B.i.ic(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function $i(a) {
    for (a = Zi(a); a;) {
        if (a.disabled) return !0;
        a = Zi(a)
    }
    return !1
}
d.isCollapsed = function () {
    return this.Ad
};
d.lg = function (a) {
    this.Ad != a && (B.i.M(new B.i.ic(this, "collapsed", null, this.Ad, a)), this.Ad = a)
};
d.toString = function (a, b) {
    var c = [],
        e = b || "?";
    if (this.Ad) c.push(eb(this, "_TEMP_COLLAPSED_INPUT").Na[0].ra);
    else
        for (var f = 0, h; h = this.X[f]; f++) {
            for (var k = 0, l; l = h.Na[k]; k++) l instanceof Kh && !l.getValue() ? c.push(e) : c.push(l.ub());
            h.connection && ((h = D(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e))
        }
    c = kb(c.join(" ")) || "???";
    a && (b = c, b.length > a && (b = b.substring(0, a - 3) + "..."), c = b);
    return c
};

function aj(a, b) {
    return a.Zd(B.Yd, b || "")
}

function bj(a, b) {
    var c = b.type ? 'Block "' + b.type + '": ' : "";
    if ("colour" in b)
        if (void 0 === b.colour) console.warn(c + "Undefined color value.");
        else {
            var e = b.colour;
            try {
                a.we(e)
            } catch (r) {
                console.warn(c + "Illegal color value: ", e)
            }
        }
    for (e = 0; void 0 !== b["message" + e];) {
        for (var f = a, h = b["args" + e] || [], k = b["lastDummyAlign" + e], l = B.h.Zv(b["message" + e]), m = [], n = 0, u = [], p = 0; p < l.length; p++) {
            var t = l[p];
            if ("number" == typeof t) {
                if (0 >= t || t > h.length) throw Error('Block "' + f.type + '": Message index %' + t + " out of range.");
                if (m[t]) throw Error('Block "' +
                    f.type + '": Message index %' + t + " duplicated.");
                m[t] = !0;
                n++;
                u.push(h[t - 1])
            } else(t = t.trim()) && u.push(t)
        }
        if (n != h.length) throw Error('Block "' + f.type + '": Message does not reference all ' + h.length + " arg(s).");
        u.length && ("string" == typeof u[u.length - 1] || hb(u[u.length - 1].type, "field_")) && (p = {
            type: "input_dummy"
        }, k && (p.align = k), u.push(p));
        k = {
            LEFT: B.Kh,
            RIGHT: B.xj,
            CENTRE: B.wj
        };
        h = [];
        for (p = 0; p < u.length; p++)
            if (m = u[p], "string" == typeof m) h.push([m, void 0]);
            else {
                l = t = null;
                do
                    if (n = !1, "string" == typeof m) t = new Ui(m);
                    else switch (m.type) {
                        case "input_value":
                            l =
                                f.Zd(B.ab, m.name);
                            break;
                        case "input_statement":
                            l = f.Zd(B.Ka, m.name);
                            break;
                        case "input_dummy":
                            l = aj(f, m.name);
                            break;
                        default:
                            t = (t = bg[m.type]) ? t.Z(m) : null, t || (m.alt ? (m = m.alt, n = !0) : console.warn("Blockly could not create a field of type " + m.type + ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"))
                    }
                while (n);
                if (t) h.push([t, m.name]);
                else if (l) {
                    m.check && l.xh(m.check);
                    m.align && (n = l, n.align = k[m.align], n.w.R && n.w.Y());
                    for (m = 0; m < h.length; m++) Wi(l, h[m][0], h[m][1]);
                    h.length =
                        0
                }
            }
        e++
    }
    void 0 !== b.inputsInline && a.yh(b.inputsInline);
    void 0 !== b.output && a.Un(!0, b.output);
    void 0 !== b.previousStatement && a.pg(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.zh(!0, b.nextStatement);
    void 0 !== b.tooltip && (e = b.tooltip, e = B.h.Db(e), a.dd(e));
    void 0 !== b.enableContextMenu && (e = b.enableContextMenu, a.contextMenu = !!e);
    void 0 !== b.helpUrl && (e = b.helpUrl, e = B.h.Db(e), a.dh = e);
    q(b.extensions) && (console.warn(c + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        b.type + "' block."), b.extensions = [b.extensions]);
    void 0 !== b.mutator && B.la.apply(b.mutator, a, !0);
    if (Array.isArray(b.extensions))
        for (b = b.extensions, c = 0; c < b.length; ++c) B.la.apply(b[c], a, !1)
}

function Si(a, b) {
    if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided");
    var c = [],
        e;
    for (e in b) void 0 !== a[e] && c.push(e);
    if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    for (var f in b) a[f] = b[f]
}
d.Zd = function (a, b) {
    var c = null;
    if (a == B.ab || a == B.Ka) c = this.Si(a);
    a = new Vi(a, b, this, c);
    this.X.push(a);
    return a
};
d.Bn = function (a) {
    for (var b = 0, c; c = this.X[b]; b++)
        if (c.name == a) {
            c.connection && c.connection.isConnected() && (c.connection.Sd = null, a = D(c.connection), a.Va ? a.v() : db(a));
            c.v();
            this.X.splice(b, 1);
            break
        }
};

function eb(a, b) {
    for (var c = 0, e; e = a.X[c]; c++)
        if (e.name == b) return e;
    return null
}

function cj(a, b) {
    return (a = eb(a, b)) && a.connection && D(a.connection)
}
d.mk = function () {
    return this.Ha || ""
};
d.dj = function (a) {
    this.Ha != a && (B.i.M(new B.i.ic(this, "comment", null, this.Ha, a || "")), this.Ha = a)
};
d.ul = function () {};
d.Fr = function () {};
d.ia = function () {
    return this.Pc
};
d.moveBy = function (a, b) {
    var c = new B.i.Lh(this);
    this.Pc.translate(a, b);
    c.ue();
    B.i.M(c)
};
d.Si = function (a) {
    return new hd(this, a)
};

function qd(a) {
    var b = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (b += ' (id="' + a.id + '")');
    return b
};
B.ca = {};
B.ca.Vj = null;
B.ca.Zp = null;
B.ca.show = function (a, b, c) {
    B.H.show(B.ca, c, null);
    if (b.length) {
        var e = B.ca.fl(b, c);
        ue(e, "action", B.ca.Ca);
        B.ca.uc(e, a, c);
        setTimeout(function () {
            e.F().focus()
        }, 1);
        B.ca.Vj = null
    } else B.ca.Ca()
};
B.ca.fl = function (a, b) {
    var c = new Jh;
    c.ye(b);
    for (var e = 0, f; f = a[e]; e++) {
        var h = new Fh(f.text);
        h.ye(b);
        c.Rh(h, !0);
        h.gj(f.enabled);
        f.enabled && (ue(h, "action", f.rb), h.$g = function () {
            this.dispatchEvent("action")
        })
    }
    return c
};
B.ca.uc = function (a, b, c) {
    var e = B.h.Em();
    b = {
        top: b.clientY + e.top,
        bottom: b.clientY + e.top,
        left: b.clientX + e.left,
        right: b.clientX + e.left
    };
    B.ca.ai(a);
    var f = B.h.Gh.ne(a);
    c && B.h.Gh.So(e, b, f);
    B.H.tn(e, b, f, c);
    a.F().focus()
};
B.ca.ai = function (a) {
    a.Y(B.H.ba);
    var b = a.F();
    B.h.Ua(b, "blocklyContextMenu");
    B.J(b, "contextmenu", null, B.h.hv);
    a.Jj = !0;
    a.xe(!0)
};
B.ca.Ca = function () {
    B.H.Di(B.ca);
    B.ca.Vj = null;
    B.ca.Zp && B.Aa(B.ca.Zp)
};
B.ca.fA = function (a, b) {
    return function () {
        B.i.disable();
        try {
            var c = B.D.Rg(b, a.o),
                e = a.ia();
            e.x = a.s ? e.x - B.yc : e.x + B.yc;
            e.y += 2 * B.yc;
            c.moveBy(e.x, e.y)
        } finally {
            B.i.enable()
        }
        B.i.isEnabled() && !c.Va && B.i.M(new B.i.Aj(c));
        c.select()
    }
};
B.ca.dt = function (a) {
    var b = Ja(a, !1).length,
        c = Xa(a);
    c && (b -= Ja(c, !1).length);
    return {
        text: 1 == b ? B.g.DELETE_BLOCK : B.g.DELETE_X_BLOCKS.replace("%1", String(b)),
        enabled: !0,
        rb: function () {
            B.i.T(!0);
            a.v(!0, !0);
            B.i.T(!1)
        }
    }
};
B.ca.ft = function (a) {
    return {
        enabled: !(y(a.dh) ? !a.dh() : !a.dh),
        text: B.g.HELP,
        rb: function () {
            var b = y(a.dh) ? a.dh() : a.dh;
            b && window.open(b)
        }
    }
};
B.ca.et = function (a) {
    var b = !0;
    Ja(a, !1).length > Ze(a.o) && (b = !1);
    return {
        text: B.g.DUPLICATE_BLOCK,
        enabled: b,
        rb: function () {
            B.Wp(a)
        }
    }
};
B.ca.ct = function (a) {
    var b = {
        enabled: !G
    };
    a.Ha ? (b.text = B.g.REMOVE_COMMENT, b.rb = function () {
        a.dj(null)
    }) : (b.text = B.g.ADD_COMMENT, b.rb = function () {
        a.dj("")
    });
    return b
};
B.ca.vt = function (a) {
    return {
        text: B.g.lz,
        enabled: !0,
        rb: function () {
            B.i.T(!0);
            a.v(!0, !0);
            B.i.T(!1)
        }
    }
};
B.ca.wt = function (a) {
    return {
        text: B.g.sx,
        enabled: !0,
        rb: function () {
            B.Wp(a)
        }
    }
};
B.ca.DA = function (a, b) {
    var c = {
        enabled: !G
    };
    c.text = B.g.nw;
    c.rb = function () {
        var c = new mf(a, B.g.Yz, 100, 100);
        if (!a.Om)
            for (var f = a.u; f;) {
                if (-1 != (" " + (f.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                    a.Om = f;
                    break
                }
                f = f.parentNode
            }
        f = a.Om.getBoundingClientRect();
        f = new A(b.clientX - f.left, b.clientY - f.top);
        var h = B.h.qk(a.Da);
        f = Ga(f, h).scale(1 / a.scale);
        c.moveBy(f.x, f.y);
        a.R && (c.We(), c.Y(!1), c.select())
    };
    return c
};

function P(a, b, c) {
    this.u = B.h.A("g", {}, null);
    this.u.De = "";
    this.mj = B.h.A("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.u);
    this.ed = B.h.A("path", {
        "class": "blocklyPath"
    }, this.u);
    this.rf = B.h.A("path", {
        "class": "blocklyPathLight"
    }, this.u);
    this.ed.Lc = this;
    this.R = !1;
    this.Wd = B.h.Ze() && !!a.cb;
    B.B.Ef(this.ed);
    P.m.constructor.call(this, a, b, c);
    this.u.dataset && (this.u.dataset.id = this.id)
}
z(P, Ye);
d = P.prototype;
d.height = 0;
d.width = 0;
d.wc = null;
d.We = function () {
    for (var a = 0, b; b = this.X[a]; a++) b.$();
    b = Id(this);
    for (a = 0; a < b.length; a++) Ph(b[a]);
    this.Ee();
    nf(this);
    this.o.options.readOnly || this.sm || B.J(this.N(), "mousedown", this, this.te);
    this.sm = !0;
    this.N().parentNode || this.o.Da.appendChild(this.N())
};
d.select = function () {
    if (this.Va && this.getParent()) this.getParent().select();
    else if (B.selected != this) {
        var a = null;
        if (B.selected) {
            a = B.selected.id;
            B.i.disable();
            try {
                B.selected.vf()
            } finally {
                B.i.enable()
            }
        }
        a = new Ra(null, "selected", a, this.id);
        a.hc = this.o.id;
        B.i.M(a);
        B.selected = this;
        this.Lg()
    }
};
d.vf = function () {
    if (B.selected == this) {
        var a = new Ra(null, "selected", this.id, null);
        a.hc = this.o.id;
        B.i.M(a);
        B.selected = null;
        this.ig()
    }
};
d.re = null;
d.Ha = null;
d.Oc = null;

function Id(a) {
    var b = [];
    a.re && b.push(a.re);
    a.Ha && b.push(a.Ha);
    a.Oc && b.push(a.Oc);
    return b
}
d.og = function (a) {
    var b = this.ff;
    if (a != b) {
        hg();
        P.m.og.call(this, a);
        ig();
        var c = this.N();
        if (!this.o.Qm && c) {
            var e = this.ia();
            a ? (a.N().appendChild(c), a = this.ia(), yd(this, a.x - e.x, a.y - e.y)) : b && (this.o.Da.appendChild(c), this.translate(e.x, e.y))
        }
    }
};
d.ia = function () {
    var a = 0,
        b = 0,
        c = this.Wd ? this.o.cb.Zb() : null,
        e = this.N();
    if (e) {
        do {
            var f = B.h.$b(e);
            a += f.x;
            b += f.y;
            this.Wd && this.o.cb.Cd.firstChild == e && (f = this.o.cb.xk(), a += f.x, b += f.y);
            e = e.parentNode
        } while (e && e != this.o.Da && e != c)
    }
    return new A(a, b)
};
d.moveBy = function (a, b) {
    var c = B.i.isEnabled();
    if (c) var e = new B.i.Lh(this);
    var f = this.ia();
    this.translate(f.x + a, f.y + b);
    yd(this, a, b);
    c && (e.ue(), B.i.M(e));
    pf(this.o)
};
d.translate = function (a, b) {
    this.N().setAttribute("transform", "translate(" + a + "," + b + ")")
};
d.Xk = function () {
    if (this.Wd) {
        var a = this.ia();
        B.h.removeAttribute(this.N(), "transform");
        this.o.cb.Ce(a.x, a.y);
        qf(this.o.cb, this.N())
    }
};
d.Oq = function (a) {
    this.Wd && (this.translate(a.x, a.y), this.o.cb.Vh(this.o.Da))
};
d.Wk = function (a) {
    this.Wd ? this.o.cb.Ce(a.x, a.y) : (this.u.De = "translate(" + a.x + "," + a.y + ")", this.u.setAttribute("transform", this.u.De + this.u.rg))
};

function Li(a) {
    if (a.o && !a.o.lb() && !a.getParent() && !a.rc) {
        var b = a.o.Zc;
        if (b && b.Pv) {
            var c = b.co,
                e = c / 2,
                f = a.ia();
            b = Math.round((f.x - e) / c) * c + e - f.x;
            c = Math.round((f.y - e) / c) * c + e - f.y;
            b = Math.round(b);
            c = Math.round(c);
            0 == b && 0 == c || a.moveBy(b, c)
        }
    }
}
d.xm = function () {
    var a = this.ia(),
        b = this.S ? O : 0,
        c = this.sb();
    if (this.s) {
        var e = new A(a.x - (c.width - b), a.y);
        a = new A(a.x + b, a.y + c.height)
    } else e = new A(a.x - b, a.y), a = new A(a.x + c.width - b, a.y + c.height);
    return {
        Mc: e,
        hd: a
    }
};
d.lg = function (a) {
    if (this.Ad != a) {
        for (var b = [], c = 0, e; e = this.X[c]; c++) b.push.apply(b, e.ka(!a));
        if (a) {
            e = Id(this);
            for (c = 0; c < e.length; c++) e[c].ka(!1);
            c = this.toString(B.ks);
            Wi(aj(this, "_TEMP_COLLAPSED_INPUT"), c).$()
        } else this.Bn("_TEMP_COLLAPSED_INPUT"), this.ul(null);
        P.m.lg.call(this, a);
        b.length || (b[0] = this);
        if (this.R)
            for (c = 0; a = b[c]; c++) a.Y()
    }
};
d.jo = function (a, b) {
    for (var c = [], e = 0, f; f = this.X[e]; e++) {
        for (var h = 0, k; k = f.Na[h]; h++) k instanceof dj && c.push(k);
        f.connection && (f = D(f.connection)) && c.push(f)
    }
    a = c.indexOf(a); - 1 == a && (a = b ? -1 : c.length);
    (c = c[b ? a + 1 : a - 1]) ? c instanceof ag ? c.qf() : c.jo(null, b): (c = this.getParent()) && c.jo(this, b)
};
d.te = function (a) {
    var b = this.o && this.o.Hd(a);
    b && (If(b, this), b.tc = a)
};
d.Ah = function (a) {
    if (!this.o.options.readOnly && this.contextMenu) {
        var b = this,
            c = [];
        if (this.Ob() && this.Nd() && !b.rc) {
            c.push(B.ca.et(b));
            Kf(this) && !this.Ad && this.o.options.xt && c.push(B.ca.ct(b));
            if (!this.Ad)
                for (var e = 1; e < this.X.length; e++)
                    if (this.X[e - 1].type != B.Ka && this.X[e].type != B.Ka) {
                        e = {
                            enabled: !0
                        };
                        var f = Ti(this);
                        e.text = f ? B.g.EXTERNAL_INPUTS : B.g.INLINE_INPUTS;
                        e.rb = function () {
                            b.yh(!f)
                        };
                        c.push(e);
                        break
                    }
            this.o.options.collapse && (this.Ad ? (e = {
                    enabled: !0
                }, e.text = B.g.EXPAND_BLOCK, e.rb = function () {
                    b.lg(!1)
                },
                c.push(e)) : (e = {
                enabled: !0
            }, e.text = B.g.COLLAPSE_BLOCK, e.rb = function () {
                b.lg(!0)
            }, c.push(e)));
            this.o.options.disable && (e = {
                text: this.disabled ? B.g.ENABLE_BLOCK : B.g.DISABLE_BLOCK,
                enabled: !$i(this),
                rb: function () {
                    b.mf(!b.disabled)
                }
            }, c.push(e));
            c.push(B.ca.dt(b))
        }
        c.push(B.ca.ft(b));
        this.Kt && this.Kt(c);
        B.ca.show(a, c, this.s);
        B.ca.Vj = this
    }
};

function yd(a, b, c) {
    if (a.R) {
        for (var e = a.Gd(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
        e = Id(a);
        for (f = 0; f < e.length; f++) Qh(e[f]);
        for (f = 0; f < a.ee.length; f++) yd(a.ee[f], b, c)
    }
}
d.nf = function (a) {
    if (a) {
        var b = this.N();
        b.De = "";
        b.rg = "";
        B.ek = B.ek.concat(this.Gd(!0));
        B.h.Ua(this.u, "blocklyDragging")
    } else B.ek = [], B.h.vb(this.u, "blocklyDragging");
    for (b = 0; b < this.ee.length; b++) this.ee[b].nf(a)
};
d.ng = function (a) {
    P.m.ng.call(this, a);
    nf(this)
};
d.Sn = function (a) {
    P.m.Sn.call(this, a);
    a = Id(this);
    for (var b = 0; b < a.length; b++) a[b].Fe()
};
d.Xn = function (a) {
    P.m.Xn.call(this, a);
    this.Ee()
};
d.N = function () {
    return this.u
};
d.v = function (a, b) {
    if (this.o) {
        B.B.Ca();
        hg();
        var c = this.o;
        if (B.selected == this) {
            this.vf();
            var e = this.o;
            e.ib && e.ib.cancel()
        }
        B.ca.Vj == this && B.ca.Ca();
        b && this.R && (db(this, a), B.ya.Ut(this));
        this.R = !1;
        if (this.wc) {
            for (var f in this.wc) clearTimeout(this.wc[f]);
            this.wc = null
        }
        B.i.disable();
        try {
            var h = Id(this);
            for (b = 0; b < h.length; b++) h[b].v()
        } finally {
            B.i.enable()
        }
        P.m.v.call(this, a);
        F(this.u);
        pf(c);
        this.mj = this.rf = this.ed = this.u = null;
        ig()
    }
};
d.Ee = function () {
    if (!this.disabled) {
        var a = this.Bd,
            b = ej(a);
        if (this.Va) b = fj([255, 255, 255], b, .6), a = gj(b), this.rf.style.display = "none", this.mj.setAttribute("fill", a);
        else {
            this.rf.style.display = "";
            var c = gj(fj([255, 255, 255], b, .3));
            b = gj(fj([0, 0, 0], b, .2));
            this.rf.setAttribute("stroke", c);
            this.mj.setAttribute("fill", b)
        }
        this.ed.setAttribute("fill", a);
        a = Id(this);
        for (c = 0; c < a.length; c++) a[c].Ee();
        for (a = 0; c = this.X[a]; a++) {
            b = 0;
            for (var e; e = c.Na[b]; b++) e.li()
        }
    }
};

function Ed(a) {
    a.disabled || $i(a) ? B.h.Ua(a.u, "blocklyDisabled") && a.ed.setAttribute("fill", "url(#" + a.o.options.di + ")") : B.h.vb(a.u, "blocklyDisabled") && a.Ee();
    a = a.le(!1);
    for (var b = 0, c; c = a[b]; b++) Ed(c)
}
d.mk = function () {
    return this.Ha ? this.Ha.ub().replace(/\s+$/, "").replace(/ +\n/g, "\n") : ""
};
d.dj = function (a) {
    var b = !1;
    q(a) ? (this.Ha || (this.Ha = new Rh(this), b = !0), this.Ha.xb(a)) : this.Ha && (this.Ha.v(), b = !0);
    b && this.R && (this.Y(), this.Ub())
};
d.ul = function (a, b) {
    this.wc || (this.wc = Object.create(null));
    var c = b || "";
    if (c) this.wc[c] && (clearTimeout(this.wc[c]), delete this.wc[c]);
    else
        for (var e in this.wc) clearTimeout(this.wc[e]), delete this.wc[e];
    if (this.o.lb()) {
        var f = this;
        this.wc[c] = setTimeout(function () {
            f.o && (delete f.wc[c], f.ul(a, c))
        }, 100)
    } else {
        this.rc && (a = null);
        b = Zi(this);
        for (e = null; b;) b.isCollapsed() && (e = b), b = Zi(b);
        e && e.ul(a, "collapsed " + this.id + " " + c);
        b = !1;
        q(a) ? (this.Oc || (this.Oc = new Sh(this), b = !0), this.Oc.xb(a, c)) : this.Oc && !c ? (this.Oc.v(),
            b = !0) : this.Oc && (b = this.Oc.ub(), this.Oc.xb("", c), (e = this.Oc.ub()) || this.Oc.v(), b = b != e);
        b && this.R && (this.Y(), this.Ub())
    }
};
d.Fr = function (a) {
    this.re && this.re !== a && this.re.v();
    a && (a.L = this, this.re = a, Ph(a))
};
d.mf = function (a) {
    this.disabled != a && (P.m.mf.call(this, a), this.R && Ed(this))
};
d.Gb = function (a) {
    this.R && (a ? (this.ed.setAttribute("filter", "url(#" + this.o.options.Yp + ")"), this.rf.style.display = "none") : (B.h.removeAttribute(this.ed, "filter"), delete this.rf.style.display))
};
d.Lg = function () {
    B.h.Ua(this.u, "blocklySelected")
};
d.ig = function () {
    B.h.vb(this.u, "blocklySelected")
};
d.fj = function (a) {
    a ? B.h.Ua(this.u, "blocklyDraggingDelete") : B.h.vb(this.u, "blocklyDraggingDelete")
};
d.we = function (a) {
    P.m.we.call(this, a);
    this.R && this.Ee()
};

function Od(a) {
    do {
        var b = a.N();
        b.parentNode.appendChild(b);
        a = a.getParent()
    } while (a)
}
d.pg = function (a, b) {
    P.m.pg.call(this, a, b);
    this.R && (this.Y(), this.Ub())
};
d.zh = function (a, b) {
    P.m.zh.call(this, a, b);
    this.R && (this.Y(), this.Ub())
};
d.Un = function (a, b) {
    P.m.Un.call(this, a, b);
    this.R && (this.Y(), this.Ub())
};
d.yh = function (a) {
    P.m.yh.call(this, a);
    this.R && (this.Y(), this.Ub())
};
d.Bn = function (a, b) {
    P.m.Bn.call(this, a, b);
    this.R && (this.Y(), this.Ub())
};
d.Zd = function (a, b) {
    a = P.m.Zd.call(this, a, b);
    this.R && (this.Y(), this.Ub());
    return a
};
d.Gd = function (a) {
    var b = [];
    if (a || this.R)
        if (this.S && b.push(this.S), this.V && b.push(this.V), this.P && b.push(this.P), a || !this.Ad) {
            a = 0;
            for (var c; c = this.X[a]; a++) c.connection && b.push(c.connection)
        }
    return b
};
d.Si = function (a) {
    return new rd(this, a)
};
d.Ub = function () {
    if (this.o && !this.o.lb()) {
        var a = td(this);
        if (!a.rc)
            for (var b = this.Gd(!1), c = 0, e; e = b[c]; c++) {
                e.isConnected() && nd(e) && D(e).Ub();
                for (var f = e.Rq(B.yc), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || td(k.w) != a && (nd(e) ? kd(k, e) : kd(e, k))
            }
    }
};

function Pd(a) {
    var b = B.i.Zb();
    setTimeout(function () {
        B.i.T(b);
        Li(a);
        B.i.T(!1)
    }, B.zj / 2);
    setTimeout(function () {
        B.i.T(b);
        a.Ub();
        B.i.T(!1)
    }, B.zj)
};

function hj() {
    this.Ud = [];
    this.nd = [];
    this.wq = [];
    this.tq = []
}
var O = 8,
    ij = 7.5 * (1 - Math.SQRT1_2) + .5,
    jj = 8.5 * (1 - Math.SQRT1_2) - .5,
    Ad = "v 5 c 0,10 -" + O + ",-8 -" + O + ",7.5 s " + O + ",-2.5 " + O + ",7.5",
    kj = "v 6.5 m -" + .97 * O + ",3 q -" + .05 * O + ",10 " + .3 * O + ",9.5 m " + .67 * O + ",-1.9 v 1.4",
    lj = "m " + ij + "," + ij,
    mj = "a 8,8 0 0,0 " + (-jj - .5) + "," + (8 - jj),
    nj = "a 8.5,8.5 0 0,0 " + (8 - jj) + "," + (jj + .5);
P.prototype.sb = function () {
    var a = this.height,
        b = this.width,
        c = Xa(this);
    c ? (c = c.sb(), a += c.height - 4, b = Math.max(b, c.width)) : this.P || this.S || (a += 2);
    return {
        height: a,
        width: b
    }
};
P.prototype.Y = function (a) {
    hg();
    this.R = !0;
    var b = 10;
    this.s && (b = -b);
    for (var c = Id(this), e = 0; e < c.length; e++) {
        var f = c[e];
        if (f.kp && f.L.isCollapsed()) f.bc.setAttribute("display", "none");
        else {
            f.bc.setAttribute("display", "block");
            var h = f.Kl;
            f.L.s && (b -= h);
            f.bc.setAttribute("transform", "translate(" + b + ",5)");
            Qh(f);
            b = f.L.s ? b - 10 : b + (h + 10)
        }
    }
    var k = b += this.s ? 10 : -10,
        l = this.X;
    c = [];
    c.ec = k + 20;
    if (this.V || this.P) c.ec = Math.max(c.ec, 40);
    f = e = 0;
    for (var m = h = !1, n = !1, u = void 0, p = Ti(this) && !this.isCollapsed(), t = 0, r; r = l[t]; t++)
        if (r.U()) {
            if (p &&
                u && u != B.Ka && r.type != B.Ka) var x = c[c.length - 1];
            else u = r.type, x = [], x.type = p && r.type != B.Ka ? -1 : r.type, x.height = 0, c.push(x);
            x.push(r);
            r.jf = 25;
            r.Cb = p && r.type == B.ab ? O + 12.5 : 0;
            if (r.connection && r.connection.isConnected()) {
                var K = D(r.connection).sb();
                r.jf = Math.max(r.jf, K.height);
                r.Cb = Math.max(r.Cb, K.width)
            }
            p || t != l.length - 1 ? !p && r.type == B.ab && l[t + 1] && l[t + 1].type == B.Ka && r.jf-- : r.jf--;
            x.height = Math.max(x.height, r.jf);
            r.ld = 0;
            1 == c.length && (r.ld += this.s ? -k : k);
            K = !1;
            for (var ha = 0, Y; Y = r.Na[ha]; ha++) {
                0 != ha && (r.ld += 10);
                var fb =
                    Y.ne();
                Y.Cb = fb.width;
                Y.il = K && Y.Af ? 10 : 0;
                r.ld += Y.Cb + Y.il;
                x.height = Math.max(x.height, fb.height);
                K = Y.Af
            } - 1 != x.type && (x.type == B.Ka ? (m = !0, f = Math.max(f, r.ld)) : (x.type == B.ab ? h = !0 : x.type == B.Yd && (n = !0), e = Math.max(e, r.ld)))
        }
    for (k = 0; x = c[k]; k++)
        if (x.Wr = !1, -1 == x.type)
            for (l = 0; r = x[l]; l++)
                if (r.type == B.ab) {
                    x.height += 10;
                    x.Wr = !0;
                    break
                }
    c.yl = 20 + f;
    m && (c.ec = Math.max(c.ec, c.yl + 30));
    h ? c.ec = Math.max(c.ec, e + 20 + O) : n && (c.ec = Math.max(c.ec, e + 20));
    c.Hu = h;
    c.rA = m;
    c.qA = n;
    e = b;
    this.Pr = !1;
    this.height = 0;
    this.S ? this.eo = this.wl = !0 : (this.eo =
        this.wl = !1, this.V && (b = D(this.V)) && Xa(b) == this && (this.wl = !0), Xa(this) && (this.eo = !0));
    b = new hj;
    f = c.ec;
    h = b.Ud;
    m = b.nd;
    this.wl ? (h.push("m 0,0"), m.push("m 0.5,0.5"), this.Pr && (h.push("c 30,-15 70,-15 100,0"), m.push(this.s ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (h.push("m 0,8"), m.push(this.s ? lj : "m 0.5,7.5"), h.push("A 8,8 0 0,1 8,0"), m.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.V && (h.push("H", 15), m.push("H", 15), h.push("l 6,4 3,0 6,-4"), m.push("l 6,4 3,0 6,-4"), wd(this.V,
        this.s ? -30 : 30, 0));
    h.push("H", f);
    m.push("H", f - .5);
    this.width = f;
    f = {
        x: 0,
        y: 0
    };
    h = {
        x: 0,
        y: 0
    };
    for (m = 0; n = c[m]; m++) {
        f.x = 10;
        0 == m && (f.x += this.s ? -e : e);
        b.nd.push("M", c.ec - .5 + "," + (f.y + .5));
        if (this.isCollapsed()) k = n, r = b.Ud, x = b.nd, oj(this, k[0].Na, f.x, f.y), r.push("l 8,0 0,4 8,4 -16,8 8,4"), x.push("h 8"), k = k.height - 20, r.push("v", k), this.s && (x.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), x.push("v", k - .7)), this.width += 15;
        else if (-1 == n.type) {
            x = n;
            k = f;
            l = h;
            u = c.ec;
            p = b.wq;
            t = b.tq;
            K = b.Ud;
            ha = b.nd;
            for (Y = 0; r = x[Y]; Y++) {
                fb = k.x;
                var uj =
                    k.y;
                x.Wr && (uj += 5);
                k.x = oj(this, r.Na, fb, uj);
                r.type != B.Yd && (k.x += r.Cb + 10);
                r.type == B.ab && (p.push("M", k.x - 10 + "," + (k.y + 5)), p.push("h", O - 2 - r.Cb), p.push(Ad), p.push("v", r.jf + 1 - 20), p.push("h", r.Cb + 2 - O), p.push("z"), this.s ? (t.push("M", k.x - 10 - 2.5 + O - r.Cb + "," + (k.y + 5 + .5)), t.push(kj), t.push("v", r.jf - 20 + 2.5), t.push("h", r.Cb - O + 2)) : (t.push("M", k.x - 10 + .5 + "," + (k.y + 5 + .5)), t.push("v", r.jf + 1), t.push("h", O - 2 - r.Cb), t.push("M", k.x - r.Cb - 10 + .9 + "," + (k.y + 5 + 20 - .7)), t.push("l", .46 * O + ",-2.1")), l.x = this.s ? -k.x - O + 10 + r.Cb + 1 : k.x + O - 10 -
                    r.Cb - 1, l.y = k.y + 5 + 1, wd(r.connection, l.x, l.y))
            }
            k.x = Math.max(k.x, u);
            this.width = Math.max(this.width, k.x);
            K.push("H", k.x);
            ha.push("H", k.x - .5);
            K.push("v", x.height);
            this.s && ha.push("v", x.height - 1)
        } else n.type == B.ab ? (t = n, r = f, x = h, k = c.ec, l = b.Ud, u = b.nd, p = t[0], K = r.x, ha = r.y, p.align != B.Kh && (Y = k - p.ld - O - 20, p.align == B.xj ? K += Y : p.align == B.wj && (K += Y / 2)), oj(this, p.Na, K, ha), l.push(Ad), t = t.height - 20, l.push("v", t), this.s ? (u.push(kj), u.push("v", t + .5)) : (u.push("M", k - 5 + "," + (r.y + 20 - .7)), u.push("l", .46 * O + ",-2.1")), x.x = this.s ?
            -k - 1 : k + 1, wd(p.connection, x.x, r.y), p.connection.isConnected() && (this.width = Math.max(this.width, k + D(p.connection).sb().width - O + 1))) : n.type == B.Yd ? (r = n, x = b.Ud, k = b.nd, l = r[0], u = f.x, p = f.y, l.align != B.Kh && (t = c.ec - l.ld - 20, c.Hu && (t -= O), l.align == B.xj ? u += t : l.align == B.wj && (u += t / 2)), oj(this, l.Na, u, p), x.push("v", r.height), this.s && k.push("v", r.height - 1)) : n.type == B.Ka && (r = n, x = f, k = h, l = c, u = m, p = b.Ud, t = b.nd, K = r[0], 0 == u && (p.push("v", 10), this.s && t.push("v", 9), x.y += 10), ha = x.x, Y = x.y, K.align != B.Kh && (fb = l.yl - K.ld - 20, K.align ==
            B.xj ? ha += fb : K.align == B.wj && (ha += fb / 2)), oj(this, K.Na, ha, Y), x.x = l.yl + 30, p.push("H", x.x), p.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), p.push("v", r.height - 16), p.push("a 8,8 0 0,0 8,8"), p.push("H", l.ec), this.s ? (t.push("M", x.x - 30 + jj + "," + (x.y + jj)), t.push(mj), t.push("v", r.height - 16), t.push("a 8.5,8.5 0 0,0 8.5,8.5")) : (t.push("M", x.x - 30 + jj + "," + (x.y + r.height - jj)), t.push(nj)), t.push("H", l.ec - .5), k.x = this.s ? -x.x : x.x + 1, wd(K.connection, k.x, x.y + 1), K.connection.isConnected() && (this.width = Math.max(this.width,
            l.yl + D(K.connection).sb().width)), u == l.length - 1 || l[u + 1].type == B.Ka) && (p.push("v", 10), this.s && t.push("v", 9), x.y += 10);
        f.y += n.height
    }
    c.length || (f.y = 25, b.Ud.push("V", f.y), this.s && b.nd.push("V", f.y - 1));
    c = f.y;
    e = b.Ud;
    f = b.nd;
    this.height += c + 1;
    this.P && (e.push("H", 30 + (this.s ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), wd(this.P, this.s ? -30 : 30, c + 1), this.height += 4);
    this.eo ? (e.push("H 0"), this.s || f.push("M", "0.5," + (c - .5))) : (e.push("H", 8), e.push("a", "8,8 0 0,1 -8,-8"), this.s || (f.push("M", ij + "," + (c - ij)), f.push("A", "7.5,7.5 0 0,1 0.5," +
        (c - 8))));
    c = b.Ud;
    e = b.nd;
    this.S ? (wd(this.S, 0, 0), c.push("V", 20), c.push("c 0,-10 -" + O + ",8 -" + O + ",-7.5 s " + O + ",2.5 " + O + ",-7.5"), this.s ? (e.push("M", -.25 * O + ",8.4"), e.push("l", -.45 * O + ",-2.1")) : (e.push("V", 18.5), e.push("m", -.92 * O + ",-0.5 q " + -.19 * O + ",-5.5 0,-11"), e.push("m", .92 * O + ",1 V 0.5 H 1")), this.width += O) : this.s || (this.wl ? e.push("V", .5) : e.push("V", 8));
    c.push("z");
    c = b.Ud.join(" ") + "\n" + b.wq.join(" ");
    this.ed.setAttribute("d", c);
    this.mj.setAttribute("d", c);
    c = b.nd.join(" ") + "\n" + b.tq.join(" ");
    this.rf.setAttribute("d",
        c);
    this.s && (this.ed.setAttribute("transform", "scale(-1 1)"), this.rf.setAttribute("transform", "scale(-1 1)"), this.mj.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    c = this.ia();
    this.V && vd(this.V, c);
    this.S && vd(this.S, c);
    for (b = 0; b < this.X.length; b++)
        if (e = this.X[b].connection) vd(e, c), e.isConnected() && xd(e);
    this.P && (vd(this.P, c), this.P.isConnected() && xd(this.P));
    !1 !== a && ((a = this.getParent()) ? a.Y(!0) : pf(this.o));
    ig()
};

function oj(a, b, c, e) {
    e += 5;
    a.s && (c = -c);
    for (var f = 0, h; h = b[f]; f++) {
        var k = h.N();
        k && (a.s ? (c -= h.il + h.Cb, k.setAttribute("transform", "translate(" + c + "," + e + ")"), h.Cb && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + h.il) + "," + e + ")"), h.Cb && (c += h.il + h.Cb + 10)))
    }
    return a.s ? -c : c
};
B.g = {};

function dj(a, b) {
    dj.m.constructor.call(this, a, b)
}
z(dj, ag);
dj.Z = function (a) {
    var b = B.h.Db(a.text);
    b = new dj(b, a["class"]);
    "boolean" === typeof a.spellcheck && (b.Kr = a.spellcheck);
    return b
};
var pj = null;
d = dj.prototype;
d.Cj = "text";
d.Kr = !0;
d.v = function () {
    B.H.Di(this);
    dj.m.v.call(this)
};
d.setValue = function (a) {
    if (null !== a) {
        if (this.w) {
            var b = bb(this, a);
            null !== b && (a = b)
        }
        ag.prototype.setValue.call(this, a)
    }
};
d.xb = function (a) {
    null !== a && (a = String(a), a !== this.ra && (this.w && B.i.isEnabled() && B.i.M(new B.i.ic(this.w, "field", this.name, this.ra, a)), ag.prototype.xb.call(this, a)))
};
d.qf = function (a) {
    this.j = this.w.o;
    a = a || !1;
    if (!a && (Nb || Pb || Rb)) qj(this);
    else {
        B.H.show(this, this.w.s, rj(this));
        var b = B.H.ba,
            c = C("INPUT", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.Kr);
        var e = 11 * this.j.scale + "pt";
        b.style.fontSize = e;
        c.style.fontSize = e;
        pj = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.ra;
        c.Wq = null;
        sj(this);
        this.kl();
        a || (c.focus(), c.select());
        c.qv = B.J(c, "keydown", this, this.pv);
        c.uv = B.J(c, "keyup", this, this.Zq);
        c.tv = B.J(c, "keypress", this, this.Zq);
        c.ir = this.kl.bind(this);
        this.j.lc(c.ir)
    }
};

function qj(a) {
    B.prompt(B.g.CHANGE_VALUE_TITLE, a.ra, function (b) {
        a.w && (b = bb(a, b));
        a.setValue(b)
    })
}
d.pv = function (a) {
    var b = pj;
    13 == a.keyCode ? B.H.Ca() : 27 == a.keyCode ? (b.value = b.defaultValue, B.H.Ca()) : 9 == a.keyCode && (B.H.Ca(), this.w.jo(this, !a.shiftKey), a.preventDefault())
};
d.Zq = function () {
    var a = pj,
        b = a.value;
    b !== a.Wq ? (a.Wq = b, this.setValue(b), sj(this)) : H && this.w.Y();
    this.kl();
    B.wg(this.w.o)
};

function sj(a) {
    var b = !0,
        c = pj;
    a.w && (b = bb(a, c.value));
    null === b ? B.h.Ua(c, "blocklyInvalidInput") : B.h.vb(c, "blocklyInvalidInput")
}
d.kl = function () {
    var a = B.H.ba,
        b = jg(this);
    a.style.width = b.right - b.left + "px";
    a.style.height = b.bottom - b.top + "px";
    b = new A(this.w.s ? b.right - a.offsetWidth : b.left, b.top);
    b.y += 1;
    Mb && B.H.ba.style.top && (--b.x, --b.y);
    H && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px"
};

function rj(a) {
    return function () {
        var b = pj,
            c = pj,
            e = c.value;
        a.w && (e = bb(a, e), null === e ? e = c.defaultValue : a.ov && a.ov(e));
        a.xb(e);
        a.w.R && a.w.Y();
        B.Aa(b.qv);
        B.Aa(b.uv);
        B.Aa(b.tv);
        a.j.hf(b.ir);
        pj = null;
        B.i.T(!1);
        b = B.H.ba.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = ""
    }
}
cg("field_input", dj);

function tj(a, b) {
    this.io = B.h.A("tspan", {}, null);
    this.io.appendChild(document.createTextNode("\u00b0"));
    a = a && !isNaN(a) ? String(a) : "0";
    tj.m.constructor.call(this, a, b)
}
z(tj, dj);
tj.Z = function (a) {
    return new tj(a.angle)
};
d = tj.prototype;
d.Rd = function () {
    this.Ea ? (this.ta.textContent = fg(this), this.w.s ? this.ta.insertBefore(this.io, this.ta.firstChild) : this.ta.appendChild(this.io), this.tj()) : this.oa.width = 0
};
d.Pg = function () {
    var a = this;
    return function () {
        tj.m.Pg.call(a)();
        a.mi = null;
        a.ip && B.Aa(a.ip);
        a.Pq && B.Aa(a.Pq);
        a.Qq && B.Aa(a.Qq)
    }
};
d.qf = function () {
    tj.m.qf.call(this, Nb || Pb || Rb);
    var a = B.H.ba;
    if (a.firstChild) {
        a = B.h.A("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:html": "http://www.w3.org/1999/xhtml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: "1.1",
            height: "100px",
            width: "100px"
        }, a);
        var b = B.h.A("circle", {
            cx: 50,
            cy: 50,
            r: 49,
            "class": "blocklyAngleCircle"
        }, a);
        this.mi = B.h.A("path", {
            "class": "blocklyAngleGauge"
        }, a);
        this.Gq = B.h.A("line", {
            x1: 50,
            y1: 50,
            "class": "blocklyAngleLine"
        }, a);
        for (var c = 0; 360 > c; c += 15) B.h.A("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ? 10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        this.ip = B.qb(a, "click", this, B.H.Ca);
        this.Pq = B.qb(b, "mousemove", this, this.gr);
        this.Qq = B.qb(this.mi, "mousemove", this, this.gr);
        vj(this)
    }
};
d.gr = function (a) {
    var b = this.mi.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = bb(this, b), pj.value = b, this.setValue(b), sj(this), this.kl())
};
d.xb = function (a) {
    tj.m.xb.call(this, a);
    this.ta && (vj(this), this.oa.width = 0)
};

function vj(a) {
    if (a.mi) {
        var b = (Number(a.ub()) + 0) * Math.PI / 180,
            c = ["M ", 50, ",", 50],
            e = 50,
            f = 50;
        if (!isNaN(b)) {
            var h = 0 * Math.PI / 180,
                k = 49 * Math.cos(h),
                l = -49 * Math.sin(h);
            e += 49 * Math.cos(b);
            f -= 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - h) / Math.PI) % 2), " ", Number(!1), " ", e, ",", f, " z")
        }
        a.mi.setAttribute("d", c.join(""));
        a.Gq.setAttribute("x2", e);
        a.Gq.setAttribute("y2", f)
    }
}
d.Xl = function (a) {
    if (null === a) return null;
    a = parseFloat(a || 0);
    if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360);
    return String(a)
};
cg("field_angle", tj);

function wj(a, b) {
    wj.m.constructor.call(this, "", b);
    this.setValue(a)
}
z(wj, ag);
wj.Z = function (a) {
    return new wj(a.checked ? "TRUE" : "FALSE")
};
d = wj.prototype;
d.Cj = "default";
d.$ = function () {
    this.Ja || (wj.m.$.call(this), this.Mj = B.h.A("text", {
        "class": "blocklyText blocklyCheckbox",
        x: -3,
        y: 14
    }, this.Ja), this.Mj.appendChild(document.createTextNode("\u2713")), this.Mj.style.display = this.za ? "block" : "none")
};
d.getValue = function () {
    return String(this.za).toUpperCase()
};
d.setValue = function (a) {
    a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
    this.za !== a && (this.w && B.i.isEnabled() && B.i.M(new B.i.ic(this.w, "field", this.name, this.za, a)), this.za = a, this.Mj && (this.Mj.style.display = a ? "block" : "none"))
};
d.qf = function () {
    var a = !this.za;
    this.w && (a = bb(this, a));
    null !== a && this.setValue(String(a).toUpperCase())
};
cg("field_checkbox", wj);
var xj = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function yj(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (zj.test(c)) return b.Jm = Aj(c), b.type = "hex", b;
    a: {
        var e = a.match(Bj);
        if (e) {
            c = Number(e[1]);
            var f = Number(e[2]);
            e = Number(e[3]);
            if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) {
                c = [c, f, e];
                break a
            }
        }
        c = []
    }
    if (c.length) return b.Jm = gj(c), b.type = "rgb", b;
    if (xj && (c = xj[a.toLowerCase()])) return b.Jm = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}
var Cj = /#(.)(.)(.)/;

function Aj(a) {
    if (!zj.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Cj, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function ej(a) {
    a = Aj(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function gj(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Dj(b.toString(16));
    c = Dj(c.toString(16));
    a = Dj(a.toString(16));
    return "#" + b + c + a
}
var zj = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Bj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Dj(a) {
    return 1 == a.length ? "0" + a : a
}

function fj(a, b, c) {
    c = Math.min(Math.max(c, 0), 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};
var Ej = "StopIteration" in g ? g.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function Fj() {}
Fj.prototype.next = function () {
    throw Ej;
};
Fj.prototype.Po = function () {
    return this
};

function Gj(a) {
    if (a instanceof Fj) return a;
    if ("function" == typeof a.Po) return a.Po();
    if (fa(a)) {
        var b = 0,
            c = new Fj;
        c.next = function () {
            for (;;) {
                if (b >= a.length) throw Ej;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function Hj(a) {
    try {
        return Gj(a).next()
    } catch (b) {
        if (b != Ej) throw b;
        return null
    }
};

function Ij(a, b, c, e, f) {
    this.Hc = !!b;
    this.node = null;
    this.ze = 0;
    this.Rr = !1;
    this.rp = !c;
    a && this.setPosition(a, e);
    this.depth = void 0 != f ? f : this.ze || 0;
    this.Hc && (this.depth *= -1)
}
z(Ij, Fj);
Ij.prototype.setPosition = function (a, b, c) {
    if (this.node = a) this.ze = v(b) ? b : 1 != this.node.nodeType ? 0 : this.Hc ? -1 : 1;
    v(c) && (this.depth = c)
};
Ij.prototype.clone = function () {
    return new Ij(this.node, this.Hc, !this.rp, this.ze, this.depth)
};
Ij.prototype.next = function () {
    if (this.Rr) {
        if (!this.node || this.rp && 0 == this.depth) throw Ej;
        var a = this.node;
        var b = this.Hc ? -1 : 1;
        if (this.ze == b) {
            var c = this.Hc ? a.lastChild : a.firstChild;
            c ? this.setPosition(c) : this.setPosition(a, -1 * b)
        } else(c = this.Hc ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
        this.depth += this.ze * (this.Hc ? -1 : 1)
    } else this.Rr = !0;
    a = this.node;
    if (!this.node) throw Ej;
    return a
};
Ij.prototype.splice = function (a) {
    var b = this.node,
        c = this.Hc ? 1 : -1;
    this.ze == c && (this.ze = -1 * c, this.depth += this.ze * (this.Hc ? -1 : 1));
    this.Hc = !this.Hc;
    Ij.prototype.next.call(this);
    this.Hc = !this.Hc;
    c = fa(arguments[0]) ? arguments[0] : arguments;
    for (var e = c.length - 1; 0 <= e; e--) Yc(c[e], b);
    F(b)
};

function Jj(a, b, c, e) {
    Ij.call(this, a, b, c, null, e)
}
z(Jj, Ij);
Jj.prototype.next = function () {
    do Jj.m.next.call(this); while (-1 == this.ze);
    return this.node
};

function Kj() {}
z(Kj, Zg);
da(Kj);
var Lj = 0;
Kj.prototype.O = function (a) {
    var b = this.ni(a);
    a = a.Xb().O("DIV", b, Mj(this, a.qc(), a.ne(), a.Xb()));
    Bg(a, "grid");
    return a
};

function Mj(a, b, c, e) {
    for (var f = [], h = 0, k = 0; h < c.height; h++) {
        for (var l = [], m = 0; m < c.width; m++) {
            var n = b && b[k++];
            l.push(Nj(a, n, e))
        }
        f.push(Oj(a, l, e))
    }
    return a.tp(f, e)
}
Kj.prototype.tp = function (a, b) {
    a = b.O("TABLE", this.Ba() + "-table", b.O("TBODY", this.Ba() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0";
    return a
};

function Oj(a, b, c) {
    a = c.O("TR", a.Ba() + "-row", b);
    Bg(a, "row");
    return a
}

function Nj(a, b, c) {
    a = c.O("TD", {
        "class": a.Ba() + "-cell",
        id: a.Ba() + "-cell-" + Lj++
    }, b);
    Bg(a, "gridcell");
    M(a, "selected", !1);
    if (!ed(a) && !Cg(a, "label")) {
        var e;
        b = new Jj(a);
        for (c = ""; !c && (e = Hj(b));) 1 == e.nodeType && (c = Cg(e, "label") || e.title);
        (e = c) && M(a, "label", e)
    }
    return a
}
Kj.prototype.cd = function (a, b) {
    if (a) {
        var c = Oc(this.Ba() + "-body", a)[0];
        if (c) {
            var e = 0;
            sa(c.rows, function (a) {
                sa(a.cells, function (a) {
                    Xc(a);
                    if (b) {
                        var c = b[e++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (e < b.length) {
                for (var f = [], h = Lc(a), k = c.rows[0].cells.length; e < b.length;) {
                    var l = b[e++];
                    f.push(Nj(this, l, h));
                    f.length == k && (l = Oj(this, f, h), c.appendChild(l), f.length = 0)
                }
                if (0 < f.length) {
                    for (; f.length < k;) f.push(Nj(this, "", h));
                    l = Oj(this, f, h);
                    c.appendChild(l)
                }
            }
        }
        Yf(a, !0, Mb)
    }
};

function Pj(a, b, c) {
    for (b = b.F(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && Pg(c, a.Ba() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return null
}
Kj.prototype.Ba = function () {
    return "goog-palette"
};

function Qj(a) {
    ng.call(this);
    this.ih = [];
    Rj(this, a)
}
z(Qj, ng);
d = Qj.prototype;
d.Ya = null;
d.Mn = null;
d.gq = function (a) {
    return this.ih[a] || null
};

function Rj(a, b) {
    b && (sa(b, function (a) {
        this.cj(a, !1)
    }, a), Ba(a.ih, b))
}
d.removeItem = function (a) {
    a && ya(this.ih, a) && a == this.Ya && (this.Ya = null, this.dispatchEvent("select"))
};
d.Jd = function () {
    return this.Ya
};
d.Ic = function (a) {
    a != this.Ya && (this.cj(this.Ya, !1), this.Ya = a, this.cj(a, !0));
    this.dispatchEvent("select")
};
d.ri = function () {
    var a = this.Ya;
    return a ? ra(this.ih, a) : -1
};
d.hj = function (a) {
    this.Ic(this.gq(a))
};
d.clear = function () {
    var a = this.ih;
    if (!w(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.Ya = null
};
d.Ia = function () {
    Qj.m.Ia.call(this);
    delete this.ih;
    this.Ya = null
};
d.cj = function (a, b) {
    a && ("function" == typeof this.Mn ? this.Mn(a, b) : "function" == typeof a.Vn && a.Vn(b))
};

function Sj(a, b, c) {
    N.call(this, a, b || Kj.Id(), c);
    this.Ql &= -89;
    this.bi = new Tj;
    this.bi.rl(this);
    this.Tm = -1
}
z(Sj, N);
d = Sj.prototype;
d.oa = null;
d.qa = -1;
d.Fb = null;
d.Ia = function () {
    Sj.m.Ia.call(this);
    this.Fb && (this.Fb.v(), this.Fb = null);
    this.oa = null;
    this.bi.v()
};
d.ol = function (a) {
    Sj.m.ol.call(this, a);
    Uj(this);
    this.Fb ? (this.Fb.clear(), Rj(this.Fb, a)) : (this.Fb = new Qj(a), a = oa(this.cj, this), this.Fb.Mn = a, tg(this).ma(this.Fb, "select", this.Au));
    this.qa = -1
};
d.kk = function () {
    return ""
};
d.zi = function (a) {
    Sj.m.zi.call(this, a);
    var b = Pj(this.ea, this, a.target);
    b && a.relatedTarget && Zc(b, a.relatedTarget) || b != Vj(this) && Wj(this, b)
};
d.Te = function (a) {
    Sj.m.Te.call(this, a);
    this.za & 4 && (a = Pj(this.ea, this, a.target), a != Vj(this) && Wj(this, a))
};
d.fg = function (a) {
    var b = Vj(this);
    return b ? (a && (this.Jd() ? "mouseup" != a.type || Pj(this.ea, this, a.target) : 1) && this.Ic(b), Sj.m.fg.call(this, a)) : !1
};
d.$c = function (a) {
    var b = this.qc();
    b = b ? b.length : 0;
    var c = this.oa.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.fg(a);
    if (36 == a.keyCode) return this.Sb(0), !0;
    if (35 == a.keyCode) return this.Sb(b - 1), !0;
    var e = 0 > this.qa ? this.ri() : this.qa;
    switch (a.keyCode) {
        case 37:
            if (-1 == e || 0 == e) e = b;
            this.Sb(e - 1);
            a.preventDefault();
            return !0;
        case 39:
            return e == b - 1 && (e = -1), this.Sb(e + 1), a.preventDefault(), !0;
        case 38:
            -1 == e && (e = b + c - 1);
            if (e >= c) return this.Sb(e - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                e && (e = -c), e < b - c) return this.Sb(e + c), a.preventDefault(), !0
    }
    return !1
};
d.Au = function () {};
d.ne = function () {
    return this.oa
};
d.tl = function (a) {
    if (this.F()) throw Error("Component already rendered");
    this.oa = v(a) ? new Kc(a, void 0) : a;
    Uj(this)
};

function Vj(a) {
    var b = a.qc();
    return b && b[a.qa]
}
d.Sb = function (a) {
    a != this.qa && (Xj(this, this.qa, !1), this.Tm = this.qa, this.qa = a, Xj(this, a, !0), this.dispatchEvent("a"))
};

function Wj(a, b) {
    var c = a.qc();
    a.Sb(c && b ? ra(c, b) : -1)
}
d.ri = function () {
    return this.Fb ? this.Fb.ri() : -1
};
d.Jd = function () {
    return this.Fb ? this.Fb.Jd() : null
};
d.hj = function (a) {
    this.Fb && this.Fb.hj(a)
};
d.Ic = function (a) {
    this.Fb && this.Fb.Ic(a)
};

function Xj(a, b, c) {
    if (a.F()) {
        var e = a.qc();
        if (e && 0 <= b && b < e.length) {
            var f = (f = Vj(a)) ? f.parentNode : null;
            a.bi.F() != f && (a.bi.K = f);
            f = a.bi;
            f.Gb(c);
            !!(f.za & 2) == c && (f = a.ea, b = e[b]) && (b = b ? b.parentNode : null, e = f.Ba() + "-cell-hover", c ? Qg(b, e) : Sg(b, e), c ? M(a.K, "activedescendant", b.id) : b.id == Cg(a.K, "activedescendant") && a.K.removeAttribute("aria-activedescendant"))
        }
    }
}
d.Gb = function (a) {
    a && -1 == this.qa ? this.Sb(-1 < this.Tm ? this.Tm : 0) : a || this.Sb(-1);
    Sj.m.Gb.call(this, a)
};
d.cj = function (a, b) {
    if (this.F() && a) {
        a = a.parentNode;
        var c = this.ea.Ba() + "-cell-selected";
        b ? Qg(a, c) : Sg(a, c);
        M(a, "selected", b)
    }
};

function Uj(a) {
    var b = a.qc();
    if (b)
        if (a.oa && a.oa.width) {
            if (b = Math.ceil(b.length / a.oa.width), !v(a.oa.height) || a.oa.height < b) a.oa.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.oa = new Kc(b, b);
    else a.oa = new Kc(0, 0)
}

function Tj() {
    N.call(this, null);
    this.ug |= 2
}
z(Tj, N);

function Yj(a, b, c) {
    this.Pj = a || [];
    Sj.call(this, null, b || Kj.Id(), c);
    this.ml(this.Pj)
}
z(Yj, Sj);
d = Yj.prototype;
d.$k = null;
d.Pk = null;
d.ml = function (a) {
    this.Pj = a;
    this.$k = this.Pk = null;
    this.cd(Zj(this))
};
d.Bm = function () {
    var a = this.Jd();
    if (a) {
        var b = a.style[xb()];
        if ("undefined" !== typeof b) a = b;
        else {
            b = a.style;
            var c = Nf["background-color"];
            if (!c) {
                var e = xb();
                c = e;
                void 0 === a.style[e] && (e = (H ? "Webkit" : Mb ? "Moz" : G ? "ms" : Kb ? "O" : null) + yb(e), void 0 !== a.style[e] && (c = e));
                Nf["background-color"] = c
            }
            a = b[c] || ""
        }
        return ak(a)
    }
    return null
};
d.Wn = function (a) {
    a = ak(a);
    this.$k || (this.$k = ua(this.Pj, function (a) {
        return ak(a)
    }));
    this.hj(a ? ra(this.$k, a) : -1)
};

function Zj(a) {
    return ua(a.Pj, function (a, c) {
        var b = this.Xb().O("DIV", {
            "class": this.ea.Ba() + "-colorswatch",
            style: "background-color:" + a
        });
        b.title = this.Pk && this.Pk[c] ? this.Pk[c] : "#" == a.charAt(0) ? "RGB (" + ej(a).join(", ") + ")" : a;
        return b
    }, a)
}

function ak(a) {
    if (a) try {
        return yj(a).Jm
    } catch (b) {}
    return null
};

function bk(a, b) {
    qg.call(this, a);
    this.Ga = b || null;
    tg(this).ma(this, "action", this.jv)
}
z(bk, qg);
d = bk.prototype;
d.Nf = !0;
d.ml = function (a) {
    this.Ga ? this.Ga.ml(a) : ck(this, a)
};
d.tl = function (a) {
    this.Ga || ck(this, []);
    this.Ga.tl(a)
};
d.ne = function () {
    return this.Ga ? this.Ga.ne() : null
};
d.ri = function () {
    return this.Ga ? this.Ga.ri() : -1
};
d.hj = function (a) {
    this.Ga && this.Ga.hj(a)
};
d.Bm = function () {
    return this.Ga ? this.Ga.Bm() : null
};
d.Wn = function (a) {
    this.Ga && this.Ga.Wn(a)
};
d.qe = function () {
    return this.Nf
};
d.xe = function (a) {
    this.Nf = a;
    this.Ga && this.Ga.fc(32, a)
};
d.kb = function () {
    bk.m.kb.call(this);
    this.Ga && this.Ga.Y(this.F());
    this.F().unselectable = "on"
};
d.Ia = function () {
    bk.m.Ia.call(this);
    this.Ga && (this.Ga.v(), this.Ga = null)
};
d.focus = function () {
    this.Ga && this.Ga.F().focus()
};
d.jv = function (a) {
    a.stopPropagation();
    this.dispatchEvent("change")
};

function ck(a, b) {
    b = new Yj(b, null, a.Xb());
    b.tl(5);
    b.fc(32, a.Nf);
    a.Rh(b);
    a.Ga = b;
    a.sa && a.Ga.Y(a.F())
}
var dk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function ek(a, b) {
    ek.m.constructor.call(this, a, b);
    this.xb("\u00a0\u00a0\u00a0")
}
var fk;
z(ek, ag);
ek.Z = function (a) {
    return new ek(a.colour)
};
d = ek.prototype;
d.ut = null;
d.lp = 0;
d.$ = function () {
    ek.m.$.call(this);
    this.Tc.style.fillOpacity = 1;
    this.setValue(this.getValue())
};
d.Cj = "default";
d.v = function () {
    B.H.Di(this);
    ek.m.v.call(this)
};
d.getValue = function () {
    return this.Bd
};
d.setValue = function (a) {
    this.w && B.i.isEnabled() && this.Bd != a && B.i.M(new B.i.ic(this.w, "field", this.name, this.Bd, a));
    this.Bd = a;
    this.Tc && (this.Tc.style.fill = a)
};
d.ub = function () {
    var a = this.Bd,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]);
    return a
};
d.setColumns = function (a) {
    this.lp = a;
    return this
};
d.qf = function () {
    B.H.show(this, this.w.s, gk);
    var a = B.h.Em(),
        b = jg(this),
        c = this.ai(),
        e = Uf(c.F());
    B.H.tn(a, b, e, this.w.s);
    var f = this;
    fk = ue(c, "change", function (a) {
        a = a.target.Bm() || "#000000";
        B.H.Ca();
        f.w && (a = bb(f, a));
        null !== a && f.setValue(a)
    })
};
d.ai = function () {
    var a = new bk;
    a.tl(this.lp || 7);
    a.ml(this.ut || dk);
    a.Y(B.H.ba);
    a.Wn(this.getValue());
    return a
};

function gk() {
    fk && De(fk);
    B.i.T(!1)
}
cg("field_colour", ek);

function hk(a, b, c, e, f) {
    this.w = null;
    this.xa = Number(c);
    this.aa = Number(b);
    this.oa = new Kc(this.aa, this.xa + 10);
    this.ra = e || "";
    this.setValue(a);
    "function" == typeof f && (this.Yl = f)
}
z(hk, ag);
hk.Z = function (a) {
    var b = B.h.Db(a.src),
        c = Number(B.h.Db(a.width)),
        e = Number(B.h.Db(a.height));
    a = B.h.Db(a.alt);
    return new hk(b, c, e, a)
};
d = hk.prototype;
d.Af = !1;
d.$ = function () {
    this.Ja || (this.Ja = B.h.A("g", {}, null), this.Ea || (this.Ja.style.display = "none"), this.pd = B.h.A("image", {
        height: this.xa + "px",
        width: this.aa + "px"
    }, this.Ja), this.setValue(this.Lr), this.w.N().appendChild(this.Ja), this.dd(this.w), B.B.Ef(this.pd), this.Yl && (this.Vk = B.J(this.Ja, "mousedown", this, this.te)))
};
d.v = function () {
    F(this.Ja);
    this.pd = this.Ja = null
};
d.dd = function (a) {
    this.pd.Lc = a
};
d.getValue = function () {
    return this.Lr
};
d.setValue = function (a) {
    null !== a && (this.Lr = a, this.pd && this.pd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a || ""))
};
d.xb = function (a) {
    null !== a && (this.ra = a)
};
d.Rd = function () {};
d.li = function () {};
d.tj = function () {};
d.qf = function () {
    this.Yl && this.Yl(this)
};
cg("field_image", hk);

function ik(a, b, c, e, f) {
    a = a && !isNaN(a) ? String(a) : "0";
    ik.m.constructor.call(this, a, f);
    a = parseFloat(e);
    this.un = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.cv = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.bv = isNaN(c) ? Infinity : c;
    this.setValue(bb(this, this.getValue()))
}
z(ik, dj);
ik.Z = function (a) {
    return new ik(a.value, a.min, a.max, a.precision)
};
ik.prototype.Xl = function (a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0);
    if (isNaN(a)) return null;
    this.un && isFinite(a) && (a = Math.round(a / this.un) * this.un);
    a = Math.min(Math.max(a, this.cv), this.bv);
    return String(a)
};
cg("field_number", ik);

function jk(a, b, c, e) {
    this.Yf = kk;
    this.oa = new Kc(0, 25);
    this.Cl = b;
    this.Mt = a || "";
    a = e || "";
    if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) {
        b = !1;
        for (e = 0; e < c.length; e++) c[e] == a && (b = !0);
        if (!b) throw Error("Invalid default type '" + a + "' in the definition of a FieldVariable");
    } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    this.Lt = a;
    this.ew = c;
    this.zb = null
}
z(jk, Kh);
jk.Z = function (a) {
    var b = B.h.Db(a.variable);
    return new jk(b, null, a.variableTypes, a.defaultType)
};
d = jk.prototype;
d.$ = function () {
    this.Ja || (jk.m.$.call(this), this.Uf())
};
d.Uf = function () {
    if (!this.wd) {
        this.j = this.w.o;
        var a = B.I.hq(this.j, null, this.Mt, this.Lt);
        B.i.disable();
        try {
            this.setValue(a.ga())
        } finally {
            B.i.enable()
        }
    }
};
d.v = function () {
    jk.m.v.call(this);
    this.na = this.j = null
};
d.Yn = function (a) {
    jk.m.Yn.call(this, a)
};
d.getValue = function () {
    return this.wd ? this.wd.ga() : null
};
d.ub = function () {
    return this.wd ? this.wd.name : ""
};
d.md = function () {
    return this.wd
};
d.setValue = function (a) {
    var b = B.I.md(this.w.o, a);
    if (!b) throw Error("Variable id doesn't point to a real variable!  ID was " + a);
    var c = b.type,
        e;
    a: if (e = lk(this)) {
        for (var f = 0; f < e.length; f++)
            if (c == e[f]) {
                e = !0;
                break a
            }
        e = !1
    } else e = !0;
    if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
    this.w && B.i.isEnabled() && (c = this.wd ? this.wd.ga() : null, B.i.M(new B.i.ic(this.w, "field", this.name, c, a)));
    this.wd = b;
    this.zb = a;
    this.xb(b.name)
};

function lk(a) {
    var b = a.ew;
    if (null === b && a.w) return a.w.o.Cm();
    b = b || [""];
    if (0 == b.length) throw a = a.ub(), Error("'variableTypes' of field variable " + a + " was an empty list");
    return b
}

function kk() {
    if (!this.wd) throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
    var a = this.ub(),
        b = null;
    this.w && (b = this.w.o);
    var c = [];
    if (b)
        for (var e = lk(this), f = 0; f < e.length; f++) c = c.concat(b.ti(e[f]));
    c.sort(ni);
    b = [];
    for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].ga()];
    b.push([B.g.RENAME_VARIABLE, B.Jo]);
    B.g.DELETE_VARIABLE && b.push([B.g.DELETE_VARIABLE.replace("%1", a), B.wo]);
    return b
}
d.$q = function (a) {
    a = a.getValue();
    if (this.w && this.w.o) {
        var b = this.w.o;
        if (a == B.Jo) {
            B.I.Cn(b, this.wd);
            return
        }
        if (a == B.wo) {
            b.If(this.wd.ga());
            return
        }
    }
    this.setValue(a)
};
d.sh = function () {
    return !0
};
cg("field_variable", jk);

function Yi() {}
d = Yi.prototype;
d.zo = null;
d.Ko = null;
d.ws = "  ";
d.ls = 60;
d.Hj = [];

function mk() {
    var a = B.C,
        b = Q;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = B.Yg());
    var c = [];
    a.$(b);
    b = I(b, !0);
    for (var e = 0, f; f = b[e]; e++) {
        var h = nk(a, f);
        w(h) && (h = h[0]);
        h && (f.S && (h = a.Cr(h)), c.push(h))
    }
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n");
    return c = c.replace(/[ \t]+\n/g, "\n")
}

function ok(a, b) {
    return b + a.replace(/(?!\n$)\n/g, "\n" + b)
}

function nk(a, b) {
    if (!b) return "";
    if (b.disabled) return nk(a, Xa(b));
    var c = a[b.type].call(b, b);
    if (w(c)) return [a.Kn(b, c[0]), c[1]];
    if (q(c)) {
        var e = b.id.replace(/\$/g, "$$$$");
        a.Ko && (c = a.Ko.replace(/%1/g, "'" + e + "'") + c);
        return a.Kn(b, c)
    }
    if (null === c) return ""
}

function pk(a, b, c) {
    var e = B.C;
    a = cj(a, b);
    if (!a) return "";
    b = nk(e, a);
    if ("" === b) return "";
    a = b[0];
    b = b[1];
    if (!a) return "";
    var f = !1,
        h = Math.floor(c),
        k = Math.floor(b);
    if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0, h = 0; h < e.Hj.length; h++)
            if (e.Hj[h][0] == c && e.Hj[h][1] == b) {
                f = !1;
                break
            }
    f && (a = "(" + a + ")");
    return a
}

function qk(a, b) {
    var c = B.C;
    a = cj(a, b);
    (a = nk(c, a)) && (a = ok(a, c.ws));
    return a
}
d.Jl = "";

function rk(a) {
    var b = B.C;
    b.Jl += a + ","
}
d.$ = function () {};
d.Kn = function (a, b) {
    return b
};
d.finish = function (a) {
    return a
};
d.Cr = function (a) {
    return a
};

function sk() {
    var a = B.C.Jl;
    this.$r = "";
    this.yr = Object.create(null);
    if (a) {
        a = a.split(",");
        for (var b = 0; b < a.length; b++) this.yr[a[b]] = !0
    }
    this.reset()
}
sk.prototype.reset = function () {
    this.Wc = Object.create(null);
    this.Ip = Object.create(null);
    this.na = null
};
sk.prototype.getName = function (a, b) {
    if (b == B.I.Ph) {
        var c = a;
        this.na ? c = (c = this.na.oe(c)) ? c.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), c = null);
        c && (a = c)
    }
    c = a.toLowerCase() + "_" + b;
    var e = b == B.I.Ph || "DEVELOPER_VARIABLE" == b ? this.$r : "";
    if (c in this.Wc) return e + this.Wc[c];
    a ? (a = encodeURI(a.replace(/ /g,
        "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(a[0]) && (a = "my_" + a)) : a = "unnamed";
    for (var f = ""; this.Ip[a + f] || a + f in this.yr;) f = f ? f + 1 : 2;
    a += f;
    this.Ip[a] = !0;
    b = (b == B.I.Ph || "DEVELOPER_VARIABLE" == b ? this.$r : "") + a;
    this.Wc[c] = b.substr(e.length);
    return b
};
B.Wa = {};
B.Wa.Ph = B.Io;
B.Wa.Xs = function (a) {
    a = Ke(a);
    for (var b = [], c = [], e = 0; e < a.length; e++)
        if (a[e].Pf) {
            var f = a[e].Pf();
            f && (f[2] ? b.push(f) : c.push(f))
        }
    c.sort(B.Wa.qr);
    b.sort(B.Wa.qr);
    return [c, b]
};
B.Wa.qr = function (a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
};
B.Wa.cu = function (a, b) {
    if (b.rc) return a;
    for (; !B.Wa.Qu(a, b.o, b);) {
        var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2"
    }
    return a
};
B.Wa.Qu = function (a, b, c) {
    return !B.Wa.Su(a, b, c)
};
B.Wa.Su = function (a, b, c) {
    b = Ke(b);
    for (var e = 0; e < b.length; e++)
        if (b[e] != c && b[e].Pf && b[e].Pf()[0].toLowerCase() == a.toLowerCase()) return !0;
    return !1
};
B.Wa.xA = function (a) {
    a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    var b = B.Wa.cu(a, this.w),
        c = this.ra;
    if (c != a && c != b) {
        a = Ke(this.w.o);
        for (var e = 0; e < a.length; e++) a[e].Iv && a[e].Iv(c, b)
    }
    return b
};
B.Wa.Pe = function (a) {
    function b(a, b) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e][0],
                h = a[e][1],
                k = C("block");
            k.setAttribute("type", b);
            k.setAttribute("gap", 16);
            var p = C("mutation");
            p.setAttribute("name", f);
            k.appendChild(p);
            for (f = 0; f < h.length; f++) {
                var t = C("arg");
                t.setAttribute("name", h[f]);
                p.appendChild(t)
            }
            c.push(k)
        }
    }
    var c = [];
    if (B.$a.procedures_defnoreturn) {
        var e = C("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap", 16);
        var f = C("field", null, B.g.PROCEDURES_DEFNORETURN_PROCEDURE);
        f.setAttribute("name",
            "NAME");
        e.appendChild(f);
        c.push(e)
    }
    B.$a.procedures_defreturn && (e = C("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = C("field", null, B.g.PROCEDURES_DEFRETURN_PROCEDURE), f.setAttribute("name", "NAME"), e.appendChild(f), c.push(e));
    B.$a.procedures_ifreturn && (e = C("block"), e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), c.push(e));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = B.Wa.Xs(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};
B.Wa.iu = function (a, b) {
    var c = [];
    b = Ke(b);
    for (var e = 0; e < b.length; e++)
        if (b[e].mu) {
            var f = b[e].mu();
            f && f.toLowerCase() == a.toLowerCase() && c.push(b[e])
        }
    return c
};
B.Wa.sA = function (a) {
    var b = B.i.Rb,
        c = a.Pf()[0],
        e = a.ad(!0);
    a = B.Wa.iu(c, a.o);
    c = 0;
    for (var f; f = a[c]; c++) {
        var h = f.ad();
        h = h && B.D.pc(h);
        f.Oe(e);
        var k = f.ad();
        k = k && B.D.pc(k);
        h != k && (B.i.Rb = !1, B.i.M(new B.i.ic(f, "mutation", null, h, k)), B.i.Rb = b)
    }
};
B.Wa.pA = function (a, b) {
    b = I(b, !1);
    for (var c = 0; c < b.length; c++)
        if (b[c].Pf) {
            var e = b[c].Pf();
            if (e && e[0].toLowerCase() == a.toLowerCase()) return b[c]
        }
    return null
};

function tk(a, b, c, e) {
    this.j = a;
    this.pa = b;
    this.ra = c.getAttribute("text");
    this.uc = new A(0, 0);
    this.Xf = e;
    this.Wl = null;
    a = c.getAttribute("callbackKey");
    this.Xf && a ? console.warn("Labels should not have callbacks. Label text: " + this.ra) : this.Xf || a && Pi(b, a) ? this.Wl = Pi(b, a) : console.warn("Buttons should have callbacks. Button text: " + this.ra);
    this.wp = c.getAttribute("web-class") || null
}
d = tk.prototype;
d.width = 0;
d.height = 0;
d.dg = null;
d.O = function () {
    var a = this.Xf ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.wp && (a += " " + this.wp);
    this.u = B.h.A("g", {
        "class": a
    }, this.j.Da);
    if (!this.Xf) var b = B.h.A("rect", {
        "class": "blocklyFlyoutButtonShadow",
        rx: 4,
        ry: 4,
        x: 1,
        y: 1
    }, this.u);
    a = B.h.A("rect", {
        "class": this.Xf ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground",
        rx: 4,
        ry: 4
    }, this.u);
    var c = B.h.A("text", {
        "class": this.Xf ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle"
    }, this.u);
    c.textContent = B.h.Db(this.ra);
    this.width =
        gg(c);
    this.height = 20;
    this.Xf || (this.width += 10, b.setAttribute("width", this.width), b.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    c.setAttribute("x", this.width / 2);
    c.setAttribute("y", this.height - 5);
    uk(this);
    this.dg = B.J(this.u, "mouseup", this, this.Cv);
    return this.u
};
d.show = function () {
    uk(this);
    this.u.setAttribute("display", "block")
};

function uk(a) {
    a.u.setAttribute("transform", "translate(" + a.uc.x + "," + a.uc.y + ")")
}
d.moveTo = function (a, b) {
    this.uc.x = a;
    this.uc.y = b;
    uk(this)
};
d.iq = function () {
    return this.uc
};
d.v = function () {
    this.dg && B.Aa(this.dg);
    this.u && (F(this.u), this.u = null);
    this.pa = this.j = null
};
d.Cv = function (a) {
    (a = this.pa.Hd(a)) && a.cancel();
    this.Wl && this.Wl(this)
};

function vk(a) {
    a.eb = this.me.bind(this);
    a.pf = this.ql.bind(this);
    this.j = new Ai(a);
    this.j.pe = !0;
    this.s = !!a.s;
    this.Ae = a.wa;
    this.rm = [];
    this.Uk = [];
    this.Uh = [];
    this.dc = [];
    this.rn = []
}
d = vk.prototype;
d.Mg = !0;
d.Pi = !1;
d.Ff = !0;
d.ha = 8;
d.Rc = vk.prototype.ha;
d.rs = 3 * vk.prototype.Rc;
d.ss = 3 * vk.prototype.Rc;
d.Bf = 2;
d.aa = 0;
d.xa = 0;
d.Tp = 70;
d.O = function (a) {
    this.u = B.h.A(a, {
        "class": "blocklyFlyout",
        style: "display: none"
    }, null);
    this.Jc = B.h.A("path", {
        "class": "blocklyFlyoutBackground"
    }, this.u);
    this.u.appendChild(this.j.O());
    return this.u
};
d.$ = function (a) {
    this.pa = a;
    this.j.xg = a;
    this.Eb = new $h(this.j, this.od, !1, "blocklyFlyoutScrollbar");
    this.Ca();
    Array.prototype.push.apply(this.rm, B.J(this.u, "wheel", this, this.fs));
    this.Mg || (this.fk = this.tm.bind(this), this.pa.lc(this.fk));
    Array.prototype.push.apply(this.rm, B.J(this.Jc, "mousedown", this, this.te));
    this.j.Hd = this.pa.Hd.bind(this.pa);
    this.j.na = this.pa.na;
    a = this.j;
    a.rh = new Je(a)
};
d.v = function () {
    this.Ca();
    B.Aa(this.rm);
    this.fk && (this.pa.hf(this.fk), this.fk = null);
    this.Eb && (this.Eb.v(), this.Eb = null);
    this.j && (this.j.xg = null, this.j.v(), this.j = null);
    this.u && (F(this.u), this.u = null);
    this.pa = this.Jc = null
};
d.Ec = function () {
    return this.aa
};
d.Xg = function () {
    return this.xa
};
d.ui = function () {
    return this.j
};
d.U = function () {
    return this.Pi
};
d.ka = function (a) {
    var b = a != this.U();
    this.Pi = a;
    b && this.sj()
};
d.mg = function (a) {
    var b = a != this.Ff;
    this.Ff = a;
    b && this.sj()
};
d.sj = function () {
    var a = this.Ff ? this.U() : !1;
    this.u.style.display = a ? "block" : "none";
    this.Eb.mg(a)
};

function wk(a, b, c, e, f) {
    a.u.setAttribute("width", b);
    a.u.setAttribute("height", c);
    "svg" == a.u.tagName ? B.h.ej(a.u, "translate(" + e + "px," + f + "px)") : a.u.setAttribute("transform", "translate(" + e + "," + f + ")");
    a.Eb && (a.Eb.nn = new A(e, f), a.Eb.resize())
}
d.Ca = function () {
    if (this.U()) {
        this.ka(!1);
        for (var a = 0, b; b = this.dc[a]; a++) B.Aa(b);
        this.dc.length = 0;
        this.gf && (this.j.hf(this.gf), this.gf = null)
    }
};
d.show = function (a) {
    this.j.wb(!1);
    this.Ca();
    xk(this);
    "string" == typeof a && (a = Qi(this.j.xg, a)(this.j.xg));
    this.ka(!0);
    for (var b = [], c = [], e = this.rn.length = 0, f; f = a[e]; e++)
        if (f.tagName) {
            var h = f.tagName.toUpperCase(),
                k = this.od ? this.rs : this.ss;
            if ("BLOCK" == h) h = B.D.Rg(f, this.j), h.disabled && this.rn.push(h), b.push({
                type: "block",
                block: h
            }), f = parseInt(f.getAttribute("gap"), 10), c.push(isNaN(f) ? k : f);
            else if ("SEP" == f.tagName.toUpperCase()) f = parseInt(f.getAttribute("gap"), 10), !isNaN(f) && 0 < c.length ? c[c.length - 1] = f : c.push(k);
            else if ("BUTTON" == h || "LABEL" == h) f = new tk(this.j, this.pa, f, "LABEL" == h), b.push({
                type: "button",
                button: f
            }), c.push(k)
        }
    this.Eq(b, c);
    this.dc.push(B.J(this.Jc, "mouseover", this, function () {
        for (var a = I(this.j, !1), b = 0, c; c = a[b]; b++) c.ig()
    }));
    this.od ? this.xa = 0 : this.aa = 0;
    this.j.wb(!0);
    this.An();
    this.tm();
    this.position();
    this.gf = this.An.bind(this);
    this.j.lc(this.gf)
};

function xk(a) {
    for (var b = I(a.j, !1), c = 0, e; e = b[c]; c++) e.o == a.j && e.v(!1, !1);
    for (c = 0; c < a.Uk.length; c++)(b = a.Uk[c]) && F(b);
    for (c = a.Uk.length = 0; b = a.Uh[c]; c++) b.v();
    a.Uh.length = 0;
    a.j.rh.clear()
}

function yk(a, b, c, e) {
    a.dc.push(B.J(b, "mousedown", null, zk(a, c)));
    a.dc.push(B.J(e, "mousedown", null, zk(a, c)));
    a.dc.push(B.qb(b, "mouseover", c, c.Lg));
    a.dc.push(B.qb(b, "mouseout", c, c.ig));
    a.dc.push(B.qb(e, "mouseover", c, c.Lg));
    a.dc.push(B.qb(e, "mouseout", c, c.ig))
}

function zk(a, b) {
    return function (c) {
        var e = a.pa.Hd(c);
        e && (If(e, b), e.G || (e.G = a), e.Ra || (e.Ra = a.ui()), e.tc = c, e.ei(c))
    }
}
d.te = function (a) {
    var b = this.pa.Hd(a);
    b && (b.G || (b.G = this), b.Ra || (b.Ra = this.ui()), b.tc = a, b.ei(a))
};

function Df(a, b) {
    var c = null;
    B.i.disable();
    var e = a.pa.ke();
    a.pa.wb(!1);
    try {
        var f = a.pa;
        if (!b.N()) throw "oldBlock is not rendered.";
        var h = B.D.Le(b);
        f.wb(!1);
        var k = B.D.Rg(h, f);
        if (!k.N()) throw "block is not rendered.";
        var l = B.h.qk(f.Da),
            m = B.h.qk(a.j.Da),
            n = b.ia().scale(a.j.scale),
            u = Ga(Ha(m, n), l).scale(1 / f.scale);
        k.moveBy(u.x, u.y);
        c = k;
        B.Bb()
    } finally {
        B.i.enable()
    }
    b = B.I.cq(a.pa, e);
    if (B.i.isEnabled())
        for (B.i.T(!0), B.i.M(new Ka(c)), e = 0; e < b.length; e++) B.i.M(new Oa(b[e]));
    a.Mg ? a.Ca() : a.tm();
    return c
}

function Ak(a, b, c, e) {
    var f = b.O();
    b.moveTo(c, e);
    b.show();
    a.dc.push(B.J(f, "mousedown", a, a.te));
    a.Uh.push(b)
}

function Bk(a, b, c, e, f, h) {
    c = B.h.A("rect", {
        "fill-opacity": 0,
        x: c,
        y: e,
        height: f.height,
        width: f.width
    }, null);
    c.Lc = b;
    B.B.Ef(c);
    a.j.Da.insertBefore(c, b.N());
    b.gk = c;
    return a.Uk[h] = c
}

function Ck(a, b, c) {
    var e = c.sb();
    b.setAttribute("width", e.width);
    b.setAttribute("height", e.height);
    var f = c.Pr ? 15 : 0;
    f && c.moveBy(0, f);
    f = c.S ? O : 0;
    c = c.ia();
    b.setAttribute("y", c.y);
    b.setAttribute("x", a.s ? c.x - e.width + f : c.x - f)
}
d.tm = function () {
    for (var a = Ze(this.pa), b = I(this.j, !1), c = 0, e; e = b[c]; c++)
        if (-1 == this.rn.indexOf(e)) {
            var f = Ja(e, !1);
            e.mf(f.length > a)
        }
};
d.An = function () {
    this.gf && this.j.hf(this.gf);
    this.wr();
    this.gf && this.j.lc(this.gf)
};

function Bf(a) {
    return a.Eb ? a.Eb.U() : !1
};

function Gi(a) {
    a.eb = this.me.bind(this);
    a.pf = this.ql.bind(this);
    Gi.m.constructor.call(this, a);
    this.od = !0
}
z(Gi, vk);
d = Gi.prototype;
d.me = function () {
    if (!this.U()) return null;
    try {
        var a = this.j.Da.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = this.Bf,
        c = this.Bf;
    this.Ae == B.Cf && (b = 0);
    var e = this.xa;
    this.Ae == B.Je && (e -= this.Bf);
    return {
        Sa: e,
        va: this.aa - 2 * this.Bf,
        Vb: (a.height + 2 * this.Rc) * this.j.scale,
        oc: (a.width + 2 * this.Rc) * this.j.scale,
        Xd: -this.j.scrollY,
        gb: -this.j.scrollX,
        nc: a.y,
        Ac: a.x,
        bb: b,
        Ta: c
    }
};
d.ql = function (a) {
    var b = this.me();
    b && (v(a.x) && (this.j.scrollX = -b.oc * a.x), this.j.translate(this.j.scrollX + b.Ta, this.j.scrollY + b.bb))
};
d.position = function () {
    if (this.U()) {
        var a = this.pa.eb();
        if (a) {
            this.aa = a.va;
            this.Pn(a.va - 2 * this.ha, this.xa - this.ha);
            var b = a.Ta,
                c = a.bb;
            this.Ae == B.Cf && (c += a.Sa - this.xa);
            wk(this, this.aa, this.xa, b, c)
        }
    }
};
d.Pn = function (a, b) {
    var c = this.Ae == B.Je,
        e = ["M 0," + (c ? 0 : this.ha)];
    c ? (e.push("h", a + 2 * this.ha), e.push("v", b), e.push("a", this.ha, this.ha, 0, 0, 1, -this.ha, this.ha), e.push("h", -1 * a), e.push("a", this.ha, this.ha, 0, 0, 1, -this.ha, -this.ha)) : (e.push("a", this.ha, this.ha, 0, 0, 1, this.ha, -this.ha), e.push("h", a), e.push("a", this.ha, this.ha, 0, 0, 1, this.ha, this.ha), e.push("v", b), e.push("h", -a - 2 * this.ha));
    e.push("z");
    this.Jc.setAttribute("d", e.join(" "))
};
d.Jn = function () {
    this.Eb.set(this.s ? Infinity : 0)
};
d.fs = function (a) {
    var b = a.deltaX;
    if (b) {
        Mb && 1 === a.deltaMode && (b *= 10);
        var c = this.me();
        b = c.gb + b;
        b = Math.min(b, c.oc - c.va);
        b = Math.max(b, 0);
        this.Eb.set(b);
        B.H.Ca()
    }
    a.preventDefault();
    a.stopPropagation()
};
d.Eq = function (a, b) {
    this.j.scale = this.pa.scale;
    var c = this.Rc,
        e = this.s ? c : c + O;
    this.s && (a = a.reverse());
    for (var f = 0, h; h = a[f]; f++)
        if ("block" == h.type) {
            h = h.block;
            for (var k = Ja(h, !1), l = 0, m; m = k[l]; l++) m.rc = !0;
            h.Y();
            k = h.N();
            l = h.sb();
            m = h.S ? O : 0;
            m = this.s ? e + l.width : e + m;
            h.moveBy(m, c);
            m = Bk(this, h, m, c, l, f);
            e += l.width + b[f];
            yk(this, k, h, m)
        } else "button" == h.type && (Ak(this, h.button, e, c), e += h.button.width + b[f])
};
d.Aq = function (a) {
    a = Math.atan2(a.y, a.x) / Math.PI * 180;
    var b = this.Tp;
    return a < 90 + b && a > 90 - b || a > -90 - b && a < -90 + b ? !0 : !1
};
d.Ug = function () {
    if (!this.u) return null;
    var a = this.u.getBoundingClientRect(),
        b = a.top;
    a = a.height;
    if (this.Ae == B.Je) return new Mf(-1E9, b - 1E9, 2E9, 1E9 + a);
    if (this.Ae == B.Cf) return new Mf(-1E9, b, 2E9, 1E9 + a)
};
d.wr = function () {
    this.j.scale = this.pa.scale;
    for (var a = 0, b = I(this.j, !1), c = 0, e; e = b[c]; c++) a = Math.max(a, e.sb().height);
    a += 1.5 * this.Rc;
    a *= this.j.scale;
    a += J;
    if (this.xa != a) {
        for (c = 0; e = b[c]; c++) e.gk && Ck(this, e.gk, e);
        this.xa = a;
        this.pa.resize()
    }
};

function Hi(a) {
    a.eb = this.me.bind(this);
    a.pf = this.ql.bind(this);
    Hi.m.constructor.call(this, a);
    this.od = !1
}
z(Hi, vk);
d = Hi.prototype;
d.me = function () {
    if (!this.U()) return null;
    try {
        var a = this.j.Da.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = this.Bf,
        c = this.xa - 2 * this.Bf,
        e = this.aa;
    this.s || (e -= this.Bf);
    return {
        Sa: c,
        va: e,
        Vb: a.height * this.j.scale + 2 * this.Rc,
        oc: a.width * this.j.scale + 2 * this.Rc,
        Xd: -this.j.scrollY + a.y,
        gb: -this.j.scrollX,
        nc: a.y,
        Ac: a.x,
        bb: b,
        Ta: 0
    }
};
d.ql = function (a) {
    var b = this.me();
    b && (v(a.y) && (this.j.scrollY = -b.Vb * a.y), this.j.translate(this.j.scrollX + b.Ta, this.j.scrollY + b.bb))
};
d.position = function () {
    if (this.U()) {
        var a = this.pa.eb();
        if (a) {
            this.xa = a.Sa;
            this.Pn(this.aa - this.ha, a.Sa - 2 * this.ha);
            var b = a.bb,
                c = a.Ta;
            this.Ae == B.xd && (this.Vu = c += a.va - this.aa);
            wk(this, this.aa, this.xa, c, b)
        }
    }
};
d.Pn = function (a, b) {
    var c = this.Ae == B.xd,
        e = a + this.ha;
    e = ["M " + (c ? e : 0) + ",0"];
    e.push("h", c ? -a : a);
    e.push("a", this.ha, this.ha, 0, 0, c ? 0 : 1, c ? -this.ha : this.ha, this.ha);
    e.push("v", Math.max(0, b));
    e.push("a", this.ha, this.ha, 0, 0, c ? 0 : 1, c ? this.ha : -this.ha, this.ha);
    e.push("h", c ? a : -a);
    e.push("z");
    this.Jc.setAttribute("d", e.join(" "))
};
d.Jn = function () {
    this.Eb.set(0)
};
d.fs = function (a) {
    var b = a.deltaY;
    if (b) {
        Mb && 1 === a.deltaMode && (b *= 10);
        var c = this.me();
        b = c.Xd - c.nc + b;
        b = Math.min(b, c.Vb - c.Sa);
        b = Math.max(b, 0);
        this.Eb.set(b);
        B.H.Ca()
    }
    a.preventDefault();
    a.stopPropagation()
};
d.Eq = function (a, b) {
    this.j.scale = this.pa.scale;
    for (var c = this.Rc, e = this.s ? c : c + O, f = 0, h; h = a[f]; f++)
        if ("block" == h.type) {
            h = h.block;
            for (var k = Ja(h, !1), l = 0, m; m = k[l]; l++) m.rc = !0;
            h.Y();
            k = h.N();
            l = h.sb();
            h.moveBy(e, c);
            m = Bk(this, h, this.s ? e - l.width : e, c, l, f);
            yk(this, k, h, m);
            c += l.height + b[f]
        } else "button" == h.type && (Ak(this, h.button, e, c), c += h.button.height + b[f])
};
d.Aq = function (a) {
    a = Math.atan2(a.y, a.x) / Math.PI * 180;
    var b = this.Tp;
    return a < b && a > -b || a < -180 + b || a > 180 - b ? !0 : !1
};
d.Ug = function () {
    if (!this.u) return null;
    var a = this.u.getBoundingClientRect(),
        b = a.left;
    a = a.width;
    if (this.Ae == B.Ie) return new Mf(b - 1E9, -1E9, 1E9 + a, 2E9);
    if (Mb && this.pa && this.pa.Ni) {
        var c = this.pa.u.getBoundingClientRect().x;
        10 > Math.abs(c - b) && (b += this.Vu * this.pa.options.Gc.scale)
    }
    return new Mf(b, -1E9, 1E9 + a, 2E9)
};
d.wr = function () {
    this.j.scale = this.pa.scale;
    for (var a = 0, b = I(this.j, !1), c = 0, e; e = b[c]; c++) {
        var f = e.sb().width;
        e.S && (f -= O);
        a = Math.max(a, f)
    }
    for (c = 0; e = this.Uh[c]; c++) a = Math.max(a, e.width);
    a += 1.5 * this.Rc + O;
    a *= this.j.scale;
    a += J;
    if (this.aa != a) {
        for (c = 0; e = b[c]; c++) this.s && (f = e.ia().x, e.moveBy(a / this.j.scale - this.Rc - O - f, 0)), e.gk && Ck(this, e.gk, e);
        if (this.s)
            for (c = 0; e = this.Uh[c]; c++) b = e.iq().y, e.moveTo(a / this.j.scale - e.width - this.Rc - O, b);
        this.aa = a;
        this.pa.resize()
    }
};

function Dk(a) {
    ng.call(this);
    this.K = a;
    a = G ? "focusout" : "blur";
    this.Xu = ue(this.K, G ? "focusin" : "focus", this, !G);
    this.Yu = ue(this.K, a, this, !G)
}
z(Dk, ng);
Dk.prototype.handleEvent = function (a) {
    var b = new fe(a.Dd);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
Dk.prototype.Ia = function () {
    Dk.m.Ia.call(this);
    De(this.Xu);
    De(this.Yu);
    delete this.K
};

function Ek(a, b) {
    null != a && this.append.apply(this, arguments)
}
d = Ek.prototype;
d.hb = "";
d.set = function (a) {
    this.hb = "" + a
};
d.append = function (a, b, c) {
    this.hb += String(a);
    if (null != b)
        for (var e = 1; e < arguments.length; e++) this.hb += arguments[e];
    return this
};
d.clear = function () {
    this.hb = ""
};
d.toString = function () {
    return this.hb
};

function Fk(a, b, c) {
    qg.call(this, c);
    this.Ma = b || Gk;
    a instanceof xc || (a = Ac(a), a = Bc(zc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Wg()));
    this.Fi = a;
    this.ii = this.Ln = !1;
    this.$v = null;
    this.Us = Hc;
    this.Oi = !0;
    this.$j = -1
}
z(Fk, qg);
var Hk = {};
d = Fk.prototype;
d.Ia = function () {
    Fk.m.Ia.call(this);
    this.uf && (this.uf.removeNode(this), this.uf = null);
    this.K = null
};
d.Ek = function () {
    var a = this.F();
    if (a) {
        var b = Ik(this);
        b && !b.id && (b.id = this.ga() + ".label");
        Bg(a, "treeitem");
        M(a, "selected", !1);
        M(a, "level", this.Vg());
        b && M(a, "labelledby", b.id);
        (b = this.pk()) && Bg(b, "presentation");
        (b = this.nk()) && Bg(b, "presentation");
        if (b = Jk(this))
            if (Bg(b, "group"), b.hasChildNodes())
                for (M(a, "expanded", !1), a = wg(this), b = 1; b <= a; b++) {
                    var c = L(this, b - 1).F();
                    M(c, "setsize", a);
                    M(c, "posinset", b)
                }
    }
};
d.O = function () {
    var a = this.Xb();
    var b = this.Al();
    var c = a.kd;
    a = c.createElement("DIV");
    G ? (Jc(a, Gc(Ic, b)), a.removeChild(a.firstChild)) : Jc(a, b);
    if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.K = b
};
d.kb = function () {
    Fk.m.kb.call(this);
    Hk[this.ga()] = this;
    this.Ek()
};
d.Yc = function () {
    Fk.m.Yc.call(this);
    delete Hk[this.ga()]
};
d.Kg = function (a, b) {
    var c = L(this, b - 1),
        e = L(this, b);
    Fk.m.Kg.call(this, a, b);
    a.sd = c;
    a.qd = e;
    c ? c.qd = a : this.$p = a;
    e ? e.sd = a : this.Cq = a;
    (b = this.ac()) && Kk(a, b);
    Lk(a, this.Vg() + 1);
    if (b = this.F())
        if (this.Hh(), M(b, "expanded", this.Yb()), this.Yb()) {
            b = Jk(this);
            a.F() || a.O();
            var f = a.F(),
                h = e && e.F();
            b.insertBefore(f, h);
            this.sa && a.kb();
            e || (c ? c.Hh() : (Wf(b, !0), this.td(this.Yb())))
        }
};
d.add = function (a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.Kg(a, b ? zg(this, b) : wg(this));
    return a
};
d.removeChild = function (a) {
    var b = this.ac(),
        c = b ? b.Jd() : null;
    if (c == a || a.contains(c))
        if (b.hasFocus()) {
            this.select();
            c = this.Ev;
            if (y(c)) this && (c = oa(c, this));
            else if (c && "function" == typeof c.handleEvent) c = oa(c.handleEvent, c);
            else throw Error("Invalid listener argument");
            2147483647 < Number(10) || g.setTimeout(c, 10)
        } else this.select();
    Fk.m.removeChild.call(this, a);
    this.Cq == a && (this.Cq = a.sd);
    this.$p == a && (this.$p = a.qd);
    a.sd && (a.sd.qd = a.qd);
    a.qd && (a.qd.sd = a.sd);
    c = !a.qd;
    a.uf = null;
    a.$j = -1;
    if (b && (b.removeNode(a), this.sa)) {
        b =
            Jk(this);
        if (a.sa) {
            var e = a.F();
            b.removeChild(e);
            a.Yc()
        }
        c && (c = L(this, wg(this) - 1)) && c.Hh();
        yg(this) || (b.style.display = "none", this.Hh(), this.pk().className = this.jk(), (b = this.F()) && b.removeAttribute("aria-expanded"))
    }
    return a
};
d.remove = Fk.prototype.removeChild;
d.Ev = function () {
    this.select()
};
d.Vg = function () {
    var a = this.$j;
    0 > a && (a = (a = this.getParent()) ? a.Vg() + 1 : 0, Lk(this, a));
    return a
};

function Lk(a, b) {
    if (b != a.$j) {
        a.$j = b;
        var c = Mk(a);
        if (c) {
            var e = Nk(a) + "px";
            xg(a) ? c.style.paddingRight = e : c.style.paddingLeft = e
        }
        vg(a, function (a) {
            Lk(a, b + 1)
        })
    }
}
d.contains = function (a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
d.le = function () {
    var a = [];
    vg(this, function (b) {
        a.push(b)
    });
    return a
};
d.Kk = function () {
    return this.Ln
};
d.select = function () {
    var a = this.ac();
    a && a.Ic(this)
};

function Ok(a, b) {
    if (a.Ln != b) {
        a.Ln = b;
        Pk(a);
        var c = a.F();
        c && (M(c, "selected", b), b && (b = a.ac().F(), M(b, "activedescendant", a.ga())))
    }
}
d.Yb = function () {
    return this.ii
};
d.td = function (a) {
    var b = a != this.ii;
    if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
        this.ii = a;
        var c = this.ac();
        var e = this.F();
        if (yg(this)) {
            if (!a && c && this.contains(c.Jd()) && this.select(), e) {
                if (c = Jk(this))
                    if (Wf(c, a), M(e, "expanded", a), a && this.sa && !c.hasChildNodes()) {
                        var f = [];
                        vg(this, function (a) {
                            f.push(a.Al())
                        });
                        Jc(c, Gc(f));
                        vg(this, function (a) {
                            a.kb()
                        })
                    }
                this.Hh()
            }
        } else(c = Jk(this)) && Wf(c, !1);
        e && (this.pk().className = this.jk());
        b && this.dispatchEvent(a ? "expand" : "collapse")
    }
};
d.toggle = function () {
    this.td(!this.Yb())
};
d.expand = function () {
    this.td(!0)
};
d.collapse = function () {
    this.td(!1)
};
d.In = function () {
    var a = this.getParent();
    a && (a.td(!0), a.In())
};
d.Al = function () {
    var a = this.ac(),
        b = !a.ij || a == this.getParent() && !a.bo ? this.Ma.vp : this.Ma.up;
    a = this.Yb() && yg(this);
    b = {
        "class": b,
        style: Qk(this)
    };
    var c = [];
    a && vg(this, function (a) {
        c.push(a.Al())
    });
    a = Fc("div", b, c);
    return Fc("div", {
        "class": this.Ma.Ep,
        id: this.ga()
    }, [Rk(this), a])
};

function Nk(a) {
    return Math.max(0, (a.Vg() - 1) * a.Ma.Nm)
}

function Rk(a) {
    var b = {};
    b["padding-" + (xg(a) ? "right" : "left")] = Nk(a) + "px";
    b = {
        "class": a.pi(),
        style: b
    };
    var c = a.zm(),
        e = Fc("span", {
            style: {
                display: "inline-block"
            },
            "class": a.jk()
        }),
        f = Fc("span", {
            "class": a.Ma.Fp,
            title: a.$v || null
        }, a.Fi);
    a = Gc(f, Fc("span", {}, a.Us));
    return Fc("div", b, [c, e, a])
}
d.pi = function () {
    return this.Ma.gm + (this.Kk() ? " " + this.Ma.Hp : "")
};
d.zm = function () {
    return Fc("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": Sk(this)
    })
};

function Sk(a) {
    var b = a.ac(),
        c = !b.ij || b == a.getParent() && !b.bo,
        e = a.Ma,
        f = new Ek;
    f.append(e.Gf, " ", e.Dt, " ");
    if (yg(a)) {
        var h = 0;
        b.ao && a.Oi && (h = a.Yb() ? 2 : 1);
        c || (h = a.qd ? h + 8 : h + 4);
        switch (h) {
            case 1:
                f.append(e.Ht);
                break;
            case 2:
                f.append(e.Gt);
                break;
            case 4:
                f.append(e.Ap);
                break;
            case 5:
                f.append(e.Ft);
                break;
            case 6:
                f.append(e.Et);
                break;
            case 8:
                f.append(e.Bp);
                break;
            case 9:
                f.append(e.Jt);
                break;
            case 10:
                f.append(e.It);
                break;
            default:
                f.append(e.zp)
        }
    } else c ? f.append(e.zp) : a.qd ? f.append(e.Bp) : f.append(e.Ap);
    return f.toString()
}

function Qk(a) {
    var b = a.Yb() && yg(a);
    return rc({
        "background-position": Tk(a),
        display: b ? null : "none"
    })
}

function Tk(a) {
    return (a.qd ? (a.Vg() - 1) * a.Ma.Nm : "-100") + "px 0"
}
d.F = function () {
    var a = Fk.m.F.call(this);
    a || (this.K = a = this.Xb().F(this.ga()));
    return a
};

function Mk(a) {
    return (a = a.F()) ? a.firstChild : null
}
d.nk = function () {
    var a = Mk(this);
    return a ? a.firstChild : null
};
d.pk = function () {
    var a = Mk(this);
    return a ? a.childNodes[1] : null
};

function Ik(a) {
    return (a = Mk(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function Jk(a) {
    return (a = a.F()) ? a.lastChild : null
}
d.xb = function (a) {
    this.Fi = a = Ac(a);
    var b = Ik(this);
    b && Jc(b, a);
    (a = this.ac()) && Uk(a, this)
};
d.ub = function () {
    var a = zc(this.Fi);
    return -1 != a.indexOf("&") ? "document" in g ? tb(a) : vb(a) : a
};

function Pk(a) {
    var b = Mk(a);
    b && (b.className = a.pi())
}
d.Hh = function () {
    var a = this.nk();
    a && (a.className = Sk(this));
    if (a = Jk(this)) a.style.backgroundPosition = Tk(this)
};
d.cr = function (a) {
    "expand" == a.target.getAttribute("type") && yg(this) ? this.Oi && this.toggle() : (this.select(), Pk(this))
};
d.jn = function (a) {
    a.preventDefault()
};
d.Yq = function (a) {
    "expand" == a.target.getAttribute("type") && yg(this) || this.Oi && this.toggle()
};
d.kn = function (a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            yg(this) && (this.Yb() ? L(this, 0).select() : this.td(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (yg(this) && this.Yb() && this.Oi) this.td(!1);
            else {
                var c = this.getParent(),
                    e = this.ac();
                c && (e.qg || c != e) && c.select()
            }
            break;
        case 40:
            a: if (yg(this) && this.Yb()) c = L(this, 0);
                else {
                    for (c = this; c != this.ac();) {
                        e = c.qd;
                        if (null != e) {
                            c = e;
                            break a
                        }
                        c = c.getParent()
                    }
                    c = null
                }
            c && c.select();
            break;
        case 38:
            c = this.sd;
            null != c ? c = Vk(c) : (c = this.getParent(), e = this.ac(), c = !e.qg && c ==
                e || this == e ? null : c);
            c && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (e = this.ac()) && e.qj.clear());
    return b
};

function Vk(a) {
    return a.Yb() && yg(a) ? Vk(L(a, wg(a) - 1)) : a
}

function Kk(a, b) {
    a.uf != b && (a.uf = b, Uk(b, a), vg(a, function (a) {
        Kk(a, b)
    }))
}
var Gk = {
    Nm: 19,
    Gp: "goog-tree-root goog-tree-item",
    Dp: "goog-tree-hide-root",
    Ep: "goog-tree-item",
    up: "goog-tree-children",
    vp: "goog-tree-children-nolines",
    gm: "goog-tree-row",
    Fp: "goog-tree-item-label",
    Gf: "goog-tree-icon",
    Dt: "goog-tree-expand-icon",
    Ht: "goog-tree-expand-icon-plus",
    Gt: "goog-tree-expand-icon-minus",
    Jt: "goog-tree-expand-icon-tplus",
    It: "goog-tree-expand-icon-tminus",
    Ft: "goog-tree-expand-icon-lplus",
    Et: "goog-tree-expand-icon-lminus",
    Bp: "goog-tree-expand-icon-t",
    Ap: "goog-tree-expand-icon-l",
    zp: "goog-tree-expand-icon-blank",
    em: "goog-tree-expanded-folder-icon",
    xp: "goog-tree-collapsed-folder-icon",
    fm: "goog-tree-file-icon",
    Cp: "goog-tree-expanded-folder-icon",
    yp: "goog-tree-collapsed-folder-icon",
    Hp: "selected"
};

function Wk(a, b, c) {
    Fk.call(this, a, b, c)
}
z(Wk, Fk);
Wk.prototype.ac = function () {
    if (this.uf) return this.uf;
    var a = this.getParent();
    return a && (a = a.ac()) ? (Kk(this, a), a) : null
};
Wk.prototype.jk = function () {
    var a = this.Yb(),
        b = this.Zt;
    if (a && b) return b;
    b = this.Iu;
    if (!a && b) return b;
    b = this.Ma;
    if (yg(this)) {
        if (a && b.em) return b.Gf + " " + b.em;
        if (!a && b.xp) return b.Gf + " " + b.xp
    } else if (b.fm) return b.Gf + " " + b.fm;
    return ""
};

function Xk(a) {
    if (a.si && "function" == typeof a.si) return a.si();
    if (q(a)) return a.split("");
    if (fa(a)) {
        for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
        return b
    }
    b = [];
    c = 0;
    for (e in a) b[c++] = a[e];
    return b
};

function Yk(a) {
    this.zb = void 0;
    this.Lb = {};
    if (a) {
        if (a.tk && "function" == typeof a.tk) var b = a.tk();
        else if (a.si && "function" == typeof a.si) b = void 0;
        else if (fa(a) || q(a)) {
            b = [];
            for (var c = a.length, e = 0; e < c; e++) b.push(e)
        } else
            for (e in b = [], c = 0, a) b[c++] = e;
        a = Xk(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
d = Yk.prototype;
d.set = function (a, b) {
    Zk(this, a, b, !1)
};
d.add = function (a, b) {
    Zk(this, a, b, !0)
};

function Zk(a, b, c, e) {
    for (var f = 0; f < b.length; f++) {
        var h = b.charAt(f);
        a.Lb[h] || (a.Lb[h] = new Yk);
        a = a.Lb[h]
    }
    if (e && void 0 !== a.zb) throw Error('The collection already contains the key "' + b + '"');
    a.zb = c
}
d.get = function (a) {
    a: {
        for (var b = this, c = 0; c < a.length; c++)
            if (b = b.Lb[a.charAt(c)], !b) {
                a = void 0;
                break a
            }
        a = b
    }
    return a ? a.zb : void 0
};
d.si = function () {
    var a = [];
    $k(this, a);
    return a
};

function $k(a, b) {
    void 0 !== a.zb && b.push(a.zb);
    for (var c in a.Lb) $k(a.Lb[c], b)
}
d.tk = function (a) {
    var b = [];
    if (a) {
        for (var c = this, e = 0; e < a.length; e++) {
            var f = a.charAt(e);
            if (!c.Lb[f]) return [];
            c = c.Lb[f]
        }
        al(c, a, b)
    } else al(this, "", b);
    return b
};

function al(a, b, c) {
    void 0 !== a.zb && c.push(b);
    for (var e in a.Lb) al(a.Lb[e], b + e, c)
}
d.clear = function () {
    this.Lb = {};
    this.zb = void 0
};
d.remove = function (a) {
    for (var b = this, c = [], e = 0; e < a.length; e++) {
        var f = a.charAt(e);
        if (!b.Lb[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.Lb[f]
    }
    a = b.zb;
    for (delete b.zb; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.Lb[f].Bq()) delete b.Lb[f];
        else break;
    return a
};
d.clone = function () {
    return new Yk(this)
};
d.Bq = function () {
    var a;
    if (a = void 0 === this.zb) a: {
        for (var b in this.Lb) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function bl() {
    this.cg = new Yk;
    this.hb = "";
    this.Tk = this.an = null;
    this.lh = this.Ti = 0
}

function cl(a, b) {
    var c = b.ub();
    if (c && !ib(null == c ? "" : String(c))) {
        c = c.toLowerCase();
        var e = a.cg.get(c);
        if (e) {
            for (var f = wg(b), h = 0; h < f; h++) cl(a, L(b, h));
            ya(e, b);
            e.length || a.cg.remove(c)
        }
    }
}

function dl(a, b) {
    var c = !1;
    (b = a.cg.tk(b)) && b.length && (a.lh = 0, a.Ti = 0, c = a.cg.get(b[0]), c = el(a, c)) && (a.an = b);
    return c
}

function el(a, b) {
    if (b) {
        if (a.lh < b.length) {
            var c = b[a.lh];
            a.Tk = b
        }
        c && (c.In(), c.select())
    }
    return !!c
}
bl.prototype.clear = function () {
    this.hb = ""
};

function fl(a, b, c) {
    Fk.call(this, a, b, c);
    this.ii = !0;
    Ok(this, !0);
    this.Ya = this;
    this.qj = new bl;
    this.vm = this.Pb = null;
    this.ki = !1;
    this.eu = null;
    this.bo = this.qg = this.ao = this.ij = !0;
    if (G) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
}
z(fl, Fk);
d = fl.prototype;
d.ac = function () {
    return this
};
d.Vg = function () {
    return 0
};
d.In = function () {};
d.tu = function () {
    this.ki = !0;
    Qg(this.F(), "focused");
    this.Ya && this.Ya.select()
};
d.nu = function () {
    this.ki = !1;
    Sg(this.F(), "focused")
};
d.hasFocus = function () {
    return this.ki
};
d.Yb = function () {
    return !this.qg || fl.m.Yb.call(this)
};
d.td = function (a) {
    this.qg ? fl.m.td.call(this, a) : this.ii = a
};
d.zm = function () {
    return Hc
};
d.pk = function () {
    var a = Mk(this);
    return a ? a.firstChild : null
};
d.nk = function () {
    return null
};
d.Hh = function () {};
d.pi = function () {
    return fl.m.pi.call(this) + (this.qg ? "" : " " + this.Ma.Dp)
};
d.jk = function () {
    var a = this.Yb(),
        b = this.Zt;
    if (a && b) return b;
    b = this.Iu;
    if (!a && b) return b;
    b = this.Ma;
    return a && b.Cp ? b.Gf + " " + b.Cp : !a && b.yp ? b.Gf + " " + b.yp : ""
};
d.Ic = function (a) {
    if (this.Ya != a) {
        var b = !1;
        this.Ya && (b = this.Ya == this.eu, Ok(this.Ya, !1));
        if (this.Ya = a) Ok(a, !0), b && a.select();
        this.dispatchEvent("change")
    }
};
d.Jd = function () {
    return this.Ya
};

function gl(a) {
    0 != a.ij && (a.ij = !1, a.sa && hl(a))
}

function hl(a) {
    function b(a) {
        var h = Jk(a);
        if (h) {
            var l = !e || c == a.getParent() && !f ? a.Ma.vp : a.Ma.up;
            h.className = l;
            if (h = a.nk()) h.className = Sk(a)
        }
        vg(a, b)
    }
    var c = a,
        e = c.ij,
        f = c.bo;
    b(a)
}

function il(a) {
    0 != a.ao && (a.ao = !1, a.sa && hl(a))
}

function jl(a) {
    if (0 != a.qg) {
        a.qg = !1;
        if (a.sa) {
            var b = Mk(a);
            b && (b.className = a.pi())
        }
        a.Jd() == a && L(a, 0) && a.Ic(L(a, 0))
    }
}
d.Ek = function () {
    fl.m.Ek.call(this);
    var a = this.F();
    Bg(a, "tree");
    M(a, "labelledby", Ik(this).id)
};
d.kb = function () {
    fl.m.kb.call(this);
    var a = this.F();
    a.className = this.Ma.Gp;
    a.setAttribute("hideFocus", "true");
    a = this.F();
    a.tabIndex = 0;
    var b = this.Pb = new Hg(a),
        c = this.vm = new Dk(a);
    tg(this).ma(c, "focusout", this.nu).ma(c, "focusin", this.tu).ma(b, "key", this.$c).ma(a, "mousedown", this.Gm).ma(a, "click", this.Gm).ma(a, "dblclick", this.Gm);
    this.Ek()
};
d.Yc = function () {
    fl.m.Yc.call(this);
    this.Pb.v();
    this.Pb = null;
    this.vm.v();
    this.vm = null
};
d.Gm = function (a) {
    var b = kl(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.cr(a);
            break;
        case "click":
            b.jn(a);
            break;
        case "dblclick":
            b.Yq(a)
    }
};
d.$c = function (a) {
    var b = this.qj;
    var c = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                c = 40 == a.keyCode ? 1 : -1;
                var e = b.an;
                if (e) {
                    var f = null,
                        h = !1;
                    if (b.Tk) {
                        var k = b.lh + c;
                        0 <= k && k < b.Tk.length ? (b.lh = k, f = b.Tk) : h = !0
                    }
                    f || (k = b.Ti + c, 0 <= k && k < e.length && (b.Ti = k), e.length > b.Ti && (f = b.cg.get(e[b.Ti])), f && f.length && h && (b.lh = -1 == c ? f.length - 1 : 0));
                    el(b, f) && (b.an = e)
                }
                c = !0
            }
            break;
        case 8:
            e = b.hb.length - 1;
            c = !0;
            0 < e ? (b.hb = b.hb.substring(0, e), dl(b, b.hb)) : 0 == e ? b.hb = "" : c = !1;
            break;
        case 27:
            b.hb = "", c = !0
    }(b = c || this.Ya && this.Ya.kn(a)) || (b =
        this.qj, c = !1, a.ctrlKey || a.altKey || (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.hb) && (b.hb += e, c = dl(b, b.hb))), b = c);
    b && a.preventDefault();
    return b
};

function kl(a, b) {
    for (var c = b.target; null != c;) {
        if (b = Hk[c.id]) return b;
        if (c == a.F()) break;
        c = c.parentNode
    }
    return null
}
d.createNode = function (a) {
    return new Wk(a || Hc, this.Ma, this.Xb())
};

function Uk(a, b) {
    a = a.qj;
    var c = b.ub();
    if (c && !ib(null == c ? "" : String(c))) {
        c = c.toLowerCase();
        var e = a.cg.get(c);
        e ? e.push(b) : a.cg.set(c, [b])
    }
}
d.removeNode = function (a) {
    cl(this.qj, a)
};

function Di(a) {
    this.j = a;
    this.s = a.options.s;
    this.od = a.options.Ld;
    this.wa = a.options.wa;
    this.Ma = {
        Nm: 19,
        Gp: "blocklyTreeRoot",
        Dp: "blocklyHidden",
        Ep: "",
        gm: "blocklyTreeRow",
        Fp: "blocklyTreeLabel",
        Gf: "blocklyTreeIcon",
        em: "blocklyTreeIconOpen",
        fm: "blocklyTreeIconNone",
        Hp: "blocklyTreeSelected"
    };
    this.Xr = {
        gm: "blocklyTreeSeparator"
    };
    this.od && (this.Ma.cssTreeRow += a.s ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.Xr.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.s ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.Ma.cssTreeIcon = "")
}
d = Di.prototype;
d.width = 0;
d.height = 0;
d.Qi = null;
d.$ = function () {
    var a = this.j,
        b = E(this.j);
    this.jc = C("DIV", "blocklyToolboxDiv");
    this.jc.setAttribute("dir", a.s ? "RTL" : "LTR");
    b.parentNode.insertBefore(this.jc, b);
    B.J(this.jc, "mousedown", this, function (a) {
        B.h.$e(a) || a.target == this.jc ? B.Bb(!1) : B.Bb(!0);
        B.Touch.ge()
    }, !1, !0);
    b = {
        di: a.options.di,
        Gc: a,
        s: a.s,
        nh: a.options.nh,
        Ld: a.Ld,
        wa: a.options.wa
    };
    this.G = null;
    this.G = a.Ld ? new Gi(b) : new Hi(b);
    Yc(this.G.O("svg"), E(this.j));
    this.G.$(a);
    this.Ma.cleardotPath = a.options.rd + "1x1.gif";
    this.Ma.cssCollapsedFolderIcon = "blocklyTreeIconClosed" +
        (a.s ? "Rtl" : "Ltr");
    this.fd = b = new ll(this, this.Ma);
    jl(b);
    gl(b);
    il(b);
    b.Ic(null);
    a = this.fl(a.options.Od);
    b.Y(this.jc);
    a && b.Ic(a);
    Mi(this);
    this.position()
};
d.v = function () {
    this.G.v();
    this.fd.v();
    F(this.jc);
    this.Qi = this.j = null
};
d.Ec = function () {
    return this.width
};
d.Xg = function () {
    return this.height
};
d.position = function () {
    var a = this.jc;
    if (a) {
        var b = E(this.j);
        b = B.Vr(b);
        this.od ? (a.style.left = "0", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, this.wa == B.Je ? a.style.top = "0" : a.style.bottom = "0") : (this.wa == B.xd ? a.style.right = "0" : a.style.left = "0", a.style.height = b.height + "px", this.width = a.offsetWidth);
        this.G.position()
    }
};
d.fl = function (a) {
    this.fd.xr();
    this.fd.zd = [];
    this.Im = !1;
    a = ml(this, a, this.fd, this.j.options.rd);
    if (this.fd.zd.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    pf(this.j);
    return a
};

function ml(a, b, c, e) {
    for (var f = null, h = null, k = 0, l; l = b.childNodes[k]; k++)
        if (l.tagName) switch (l.tagName.toUpperCase()) {
            case "CATEGORY":
                h = B.h.Db(l.getAttribute("name"));
                var m = a.fd.createNode(h);
                m.zd = [];
                c.add(m);
                var n = l.getAttribute("custom");
                n ? m.zd = n : (n = ml(a, l, m, e)) && (f = n);
                n = B.h.Db(l.getAttribute("colour"));
                null === n || "" === n ? m.Ci = "" : /^#[0-9a-fA-F]{6}$/.test(n) ? (m.Ci = n, a.Im = !0) : "number" === typeof n || "string" === typeof n && !isNaN(Number(n)) ? (m.Ci = B.vq(Number(n)), a.Im = !0) : (m.Ci = "", console.warn('Toolbox category "' +
                    h + '" has unrecognized colour attribute: ' + n));
                "true" == l.getAttribute("expanded") ? (m.zd.length && (f = m), m.td(!0)) : m.td(!1);
                h = l;
                break;
            case "SEP":
                h && ("CATEGORY" == h.tagName.toUpperCase() ? c.add(new nl(a.Xr)) : (l = parseFloat(l.getAttribute("gap")), !isNaN(l) && h && h.setAttribute("gap", l)));
                break;
            case "BLOCK":
            case "SHADOW":
            case "LABEL":
            case "BUTTON":
                c.zd.push(l), h = l
        }
    return f
}

function Mi(a, b) {
    b = (b || a.fd).le(!1);
    for (var c = 0, e; e = b[c]; c++) {
        var f = Mk(e);
        if (f) {
            var h = a.Im ? "8px solid " + (e.Ci || "#ddd") : "none";
            a.j.s ? f.style.borderRight = h : f.style.borderLeft = h
        }
        Mi(a, e)
    }
}
d.Ug = function () {
    if (!this.jc) return null;
    var a = this.jc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        e = a.width;
    a = a.height;
    return this.wa == B.Ie ? new Mf(-1E7, -1E7, 1E7 + b + e, 2E7) : this.wa == B.xd ? new Mf(b, -1E7, 1E7 + e, 2E7) : this.wa == B.Je ? new Mf(-1E7, -1E7, 2E7, 1E7 + c + a) : new Mf(0, c, 2E7, 1E7 + e)
};

function ll(a, b) {
    this.W = a;
    fl.call(this, Hc, b)
}
z(ll, fl);
ll.prototype.kb = function () {
    ll.m.kb.call(this);
    if (Td) {
        var a = this.F();
        B.J(a, "touchend", this, this.Cu)
    }
};
ll.prototype.Cu = function (a) {
    var b = kl(this, a);
    b && "touchend" === a.type && setTimeout(function () {
        b.jn(a)
    }, 1)
};
ll.prototype.createNode = function (a) {
    a = a ? Ac(a) : Hc;
    return new ol(this.W, a, this.Ma, this.Xb())
};
ll.prototype.Ic = function (a) {
    var b = this.W;
    if (a != this.Ya && a != b.fd) {
        b.Qi && (Mk(b.Qi).style.backgroundColor = "");
        if (a) {
            var c = a.Ci || "#57e";
            Mk(a).style.backgroundColor = c;
            Mi(b, a)
        }
        c = this.Jd();
        fl.prototype.Ic.call(this, a);
        a && a.zd && a.zd.length ? (b.G.show(a.zd), b.Qi != a && b.G.Jn()) : b.G.Ca();
        c != a && c != this && (c = new Ra(null, "category", c && zc(c.Fi), a && zc(a.Fi)), c.hc = b.j.id, B.i.M(c));
        a && (b.Qi = a)
    }
};

function ol(a, b, c, e) {
    Fk.call(this, b, c, e);
    a && (b = function () {
        B.wg(a.j)
    }, ue(a.fd, "expand", b), ue(a.fd, "collapse", b))
}
z(ol, Wk);
d = ol.prototype;
d.zm = function () {
    return Fc("span")
};
d.jn = function () {
    yg(this) && this.Oi ? (this.toggle(), this.select()) : this.Kk() ? this.ac().Ic(null) : this.select();
    Pk(this)
};
d.cr = function () {};
d.Yq = function () {};
d.kn = function (a) {
    if (this.uf.W.od) {
        var b = {};
        b[39] = this.wh ? 38 : 40;
        b[37] = this.wh ? 40 : 38;
        b[38] = 37;
        b[40] = 39;
        a.keyCode = b[a.keyCode] || a.keyCode
    }
    return ol.m.kn.call(this, a)
};

function nl(a) {
    ol.call(this, null, Hc, a)
}
z(nl, ol);
B.Qc = {};
B.Qc.jA = "";
B.Qc.Ur = null;
B.Qc.Kq = "";
B.Qc.Xe = function (a, b) {
    if (!B.Qc.Ur) {
        var c = ".blocklyDraggable {}\n";
        a && (c += B.Qc.ns.join("\n"), B.qs && (c += B.qs.CSS.join("\n")));
        B.Qc.Kq = b.replace(/[\\\/]$/, "");
        c = c.replace(/<<<PATH>>>/g, B.Qc.Kq);
        a = document.createElement("style");
        document.head.insertBefore(a, document.head.firstChild);
        a.appendChild(document.createTextNode(c));
        B.Qc.Ur = a.sheet
    }
};
B.Qc.zA = function () {
    console.warn("Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context")
};
B.Qc.ns = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
    "top: 0;", "left: 0;", "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: .9;", "padding: 2px;", "position: absolute;",
    "z-index: 100000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;",
    "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxGrab {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {",
    "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {",
    "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyFlyoutButton {", "fill: #888;", "cursor: default;", "}", ".blocklyFlyoutButtonShadow {", "fill: #666;", "}", ".blocklyFlyoutButton:hover {", "fill: #aaa;", "}", ".blocklyFlyoutLabel {", "cursor: default;", "}", ".blocklyFlyoutLabelBackground {", "opacity: 0;", "}", ".blocklyFlyoutLabelText {", "fill: #000;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {", "user-select: none;",
    "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;",
    "}", ".blocklyCommentForeignObject {", "position: relative;", "z-index: 0;", "}", ".blocklyCommentRect {", "fill: #E7DE8E;", "stroke: #bcA903;", "stroke-width: 1px", "}", ".blocklyCommentTarget {", "fill: transparent;", "stroke: #bcA903;", "}", ".blocklyCommentTargetFocused {", "fill: none;", "}", ".blocklyCommentHandleTarget {", "fill: none;", "}", ".blocklyCommentHandleTargetFocused {", "fill: transparent;", "}", ".blocklyFocused>.blocklyCommentRect {", "fill: #B9B272;", "stroke: #B9B272;", "}", ".blocklySelected>.blocklyCommentTarget {",
    "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklyCommentTextarea {", "background-color: #fef49c;", "border: 0;", "outline: 0;", "margin: 0;", "padding: 3px;", "resize: none;", "display: block;", "overflow: hidden;", "}", ".blocklyCommentDeleteIcon {", "cursor: pointer;", "fill: #000;", "display: none", "}", ".blocklySelected > .blocklyCommentDeleteIcon {", "display: block", "}", ".blocklyDeleteIconShape {", "fill: #000;", "stroke: #000;", "stroke-width: 1px;", "}", ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
    "stroke: #fc3;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyTransparentBackground {", "opacity: 0;", "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;",
    "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;", "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}",
    ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;", "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;",
    "stroke-width: 2;", "stroke-linecap: round;", "pointer-events: none;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;", "overflow-x: visible;", "overflow-y: auto;", "position: absolute;",
    "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "z-index: 70;", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;",
    "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;", "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;",
    "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "background-position: 0 -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0 -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {",
    "background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyToolboxDelete .blocklyTreeLabel {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;",
    "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;", "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {",
    "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;",
    "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",
    ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {",
    "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;",
    "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;", "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {",
    "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];
B.H = {};
B.H.ba = null;
B.H.Zi = null;
B.H.Pg = null;
B.H.O = function () {
    B.H.ba || (B.H.ba = C("DIV", "blocklyWidgetDiv"), document.body.appendChild(B.H.ba))
};
B.H.show = function (a, b, c) {
    B.H.Ca();
    B.H.Zi = a;
    B.H.Pg = c;
    B.H.ba.style.top = Qf().y + "px";
    B.H.ba.style.direction = b ? "rtl" : "ltr";
    B.H.ba.style.display = "block"
};
B.H.Ca = function () {
    B.H.Zi && (B.H.Zi = null, B.H.ba.style.display = "none", B.H.ba.style.left = "", B.H.ba.style.top = "", B.H.Pg && B.H.Pg(), B.H.Pg = null, Xc(B.H.ba))
};
B.H.U = function () {
    return !!B.H.Zi
};
B.H.Di = function (a) {
    B.H.Zi == a && B.H.Ca()
};
B.H.position = function (a, b, c, e, f) {
    b < e.y && (b = e.y);
    f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
    B.H.nr(a, b, c.height)
};
B.H.nr = function (a, b, c) {
    B.H.ba.style.left = a + "px";
    B.H.ba.style.top = b + "px";
    B.H.ba.style.height = c + "px"
};
B.H.tn = function (a, b, c, e) {
    B.H.nr(B.H.ht(a, b, c, e), B.H.jt(a, b, c), c.height)
};
B.H.ht = function (a, b, c, e) {
    if (e) return b = Math.max(b.right - c.width, a.left), Math.min(b, a.right - c.width);
    b = Math.min(b.left, a.right - c.width);
    return Math.max(b, a.left)
};
B.H.jt = function (a, b, c) {
    return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom
};

function pl(a) {
    this.Xh = a;
    this.O()
}
d = pl.prototype;
d.La = null;
d.Cd = null;
d.Xh = null;
d.kf = 1;
d.kj = null;
d.O = function () {
    this.La || (this.La = B.h.A("svg", {
        xmlns: B.kc,
        "xmlns:html": B.Ge,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.Xh), this.Cd = B.h.A("g", {}, this.La))
};

function qf(a, b) {
    a.Cd.appendChild(b);
    a.La.style.display = "block";
    a.kj = new A(0, 0)
}
d.Ce = function (a, b) {
    this.kj = new A(a * this.kf, b * this.kf);
    a = this.kj.x;
    b = this.kj.y;
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.La.style.display = "block";
    B.h.ej(this.La, "translate3d(" + a + "px, " + b + "px, 0px)")
};
d.xk = function () {
    var a = B.h.$b(this.La);
    return new A(a.x / this.kf, a.y / this.kf)
};
d.Zb = function () {
    return this.Cd
};
d.Vh = function (a) {
    a ? a.appendChild(this.Cd.firstChild) : this.Cd.removeChild(this.Cd.firstChild);
    this.La.style.display = "none";
    this.kj = null
};
B.Xe = function (a, b) {
    B.mt();
    q(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!Zc(document, a)) throw "Error: container is not in current document.";
    b = new Xh(b || {});
    var c = C("DIV", "injectionDiv");
    a.appendChild(c);
    a = B.Zh(c, b);
    var e = new pl(c);
    c = new si(c);
    b = B.At(a, b, e, c);
    B.Mu(b);
    B.df = b;
    B.wg(b);
    return b
};
B.Zh = function (a, b) {
    a.setAttribute("dir", "LTR");
    rg = b.s;
    B.Qc.Xe(b.Eu, b.rd);
    a = B.h.A("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, a);
    var c = B.h.A("defs", {}, a),
        e = String(Math.random()).substring(2),
        f = B.h.A("filter", {
            id: "blocklyEmbossFilter" + e
        }, c);
    B.h.A("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var h = B.h.A("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, f);
    B.h.A("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, h);
    B.h.A("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    B.h.A("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    b.Yp = f.id;
    f = B.h.A("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, c);
    B.h.A("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    B.h.A("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    b.di = f.id;
    f = b.jq;
    c = B.h.A("pattern", {
        id: "blocklyGridPattern" + e,
        patternUnits: "userSpaceOnUse"
    }, c);
    0 < f.length && 0 < f.spacing ? (B.h.A("line", {
        stroke: f.colour
    }, c), 1 < f.length && B.h.A("line", {
        stroke: f.colour
    }, c)) : B.h.A("line", {}, c);
    b.kq = c;
    return a
};
B.At = function (a, b, c, e) {
    b.Gc = null;
    var f = new Ai(b, c, e);
    f.scale = b.Ib.Qr;
    a.appendChild(f.O("blocklyMainBackground"));
    !b.nq && b.Od && (c = Fi(f, "svg"), B.h.Ji(c, a));
    f.translate(0, 0);
    B.df = f;
    b.readOnly || b.pq || f.lc(function () {
        if (!f.lb()) {
            var a = f.eb(),
                c = a.gb + a.Ta,
                e = a.Xd + a.bb;
            if (a.nc < e || a.nc + a.Vb > a.Sa + e || a.Ac < (b.s ? a.gb : c) || a.Ac + a.oc > (b.s ? a.va : a.va + c))
                for (var m = I(f, !1), n = 0, u; u = m[n]; n++) {
                    var p = u.ia(),
                        t = u.sb(),
                        r = e + 25 - t.height - p.y;
                    0 < r && u.moveBy(0, r);
                    r = e + a.Sa - 25 - p.y;
                    0 > r && u.moveBy(0, r);
                    r = 25 + c - p.x - (b.s ? 0 : t.width);
                    0 < r &&
                        u.moveBy(r, 0);
                    p = c + a.va - 25 - p.x + (b.s ? t.width : 0);
                    0 > p && u.moveBy(p, 0)
                }
        }
    });
    B.wg(f);
    B.H.O();
    B.B.O();
    return f
};
B.Mu = function (a) {
    var b = a.options,
        c = E(a);
    B.J(c.parentNode, "contextmenu", null, function (a) {
        B.h.Lk(a) || a.preventDefault()
    });
    c = B.J(window, "resize", null, function () {
        B.Bb(!0);
        B.wg(a)
    });
    a.ll = c;
    B.Xe.bt();
    b.Od && (a.W ? a.W.$(a) : a.G && (a.G.$(a), a.G.show(b.Od.childNodes), a.G.Jn(), a.scrollX = a.G.aa, b.wa == B.xd && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.pq && (a.Xa = new Zh(a), a.Xa.resize());
    b.Fu && B.Xe.$u(b.rd, a)
};
B.Xe.bt = function () {
    B.Vt || (B.J(document, "keydown", null, B.rv), B.qb(document, "touchend", null, B.cf), B.qb(document, "touchcancel", null, B.cf), Rb && B.J(window, "orientationchange", document, function () {
        B.wg(B.Yg())
    }));
    B.Vt = !0
};
B.Xe.$u = function (a, b) {
    function c() {
        for (; f.length;) B.Aa(f.pop());
        e.preload()
    }
    var e = b.mc;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(B.J(document, "mousemove", null, c, !0));
    f.push(B.J(document, "touchstart", null, c, !0))
};
B.Zr = function (a) {
    console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.");
    B.Yg().Zr(a)
};
B.df = null;
B.selected = null;
B.ek = [];
B.Wh = null;
B.Oj = null;
B.eA = null;
B.vq = function (a) {
    var b = B.us,
        c = 255 * B.vs,
        e = 0,
        f = 0,
        h = 0;
    if (0 == b) h = f = e = c;
    else {
        var k = Math.floor(a / 60),
            l = a / 60 - k;
        a = c * (1 - b);
        var m = c * (1 - b * l);
        b = c * (1 - b * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = c;
                h = a;
                break;
            case 2:
                e = a;
                f = c;
                h = b;
                break;
            case 3:
                e = a;
                f = m;
                h = c;
                break;
            case 4:
                e = b;
                f = a;
                h = c;
                break;
            case 5:
                e = c;
                f = a;
                h = m;
                break;
            case 6:
            case 0:
                e = c, f = b, h = a
        }
    }
    return gj([Math.floor(e), Math.floor(f), Math.floor(h)])
};
B.Vr = function (a) {
    return {
        width: a.Zo,
        height: a.Xo
    }
};
B.yA = function (a) {
    pf(a)
};
B.wg = function (a) {
    for (; a.options.Gc;) a = a.options.Gc;
    var b = E(a),
        c = b.parentNode;
    if (c) {
        var e = c.offsetWidth;
        c = c.offsetHeight;
        b.Zo != e && (b.setAttribute("width", e + "px"), b.Zo = e);
        b.Xo != c && (b.setAttribute("height", c + "px"), b.Xo = c);
        a.resize()
    }
};
B.rv = function (a) {
    if (!B.df.options.readOnly && !B.h.Lk(a)) {
        var b = !1;
        if (27 == a.keyCode) B.Bb();
        else if (8 == a.keyCode || 46 == a.keyCode) {
            a.preventDefault();
            if (B.df.lb()) return;
            B.selected && B.selected.Ob() && (b = !0)
        } else if (a.altKey || a.ctrlKey || a.metaKey) {
            if (B.df.lb()) return;
            B.selected && B.selected.Ob() && B.selected.Nd() && (67 == a.keyCode ? (B.Bb(), B.cm(B.selected)) : 88 != a.keyCode || B.selected.o.pe || (B.cm(B.selected), b = !0));
            86 == a.keyCode ? B.Wh && (B.i.T(!0), a = B.Oj, a.pe && (a = a.xg), Ji(a), B.i.T(!1)) : 90 == a.keyCode && (B.Bb(), B.df.no(a.shiftKey))
        }
        b &&
            !B.selected.o.pe && (B.i.T(!0), B.Bb(), B.selected.v(!0, !0), B.i.T(!1))
    }
};
B.cm = function (a) {
    if (a.zq) var b = a.oj();
    else {
        b = B.D.Le(a);
        B.D.Qt(b);
        var c = a.ia();
        b.setAttribute("x", a.s ? -c.x : c.x);
        b.setAttribute("y", c.y)
    }
    B.Wh = b;
    B.Oj = a.o
};
B.Wp = function (a) {
    var b = B.Wh,
        c = B.Oj;
    B.cm(a);
    Ji(a.o);
    B.Wh = b;
    B.Oj = c
};
B.tA = function (a) {
    B.h.Lk(a) || a.preventDefault()
};
B.Bb = function (a) {
    B.B.Ca();
    B.H.Ca();
    a || (a = B.Yg(), a.W && a.W.G && a.W.G.Mg && a.W.fd.Ic(null))
};
B.lc = function (a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return B.Yg().lc(a)
};
B.Yg = function () {
    return B.df
};
B.alert = function (a, b) {
    window.alert(a);
    b && b()
};
B.confirm = function (a, b) {
    b(window.confirm(a))
};
B.prompt = function (a, b, c) {
    c(window.prompt(a, b))
};
B.Uu = function (a) {
    return function () {
        bj(this, a)
    }
};
B.kA = function (a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c) {
            var e = c.type;
            null == e || "" === e ? console.warn("Block definition #" + b + " in JSON array is missing a type attribute. Skipping.") : (B.$a[e] && console.warn("Block definition #" + b + ' in JSON array overwrites prior definition of "' + e + '".'), B.$a[e] = {
                $: B.Uu(c)
            })
        } else console.warn("Block definition #" + b + " in JSON array is " + c + ". Skipping.")
    }
};
B.J = function (a, b, c, e, f, h) {
    function k(a) {
        var b = !f;
        a = B.Touch.Qv(a);
        for (var h = 0, k; k = a[h]; h++)
            if (!b || B.Touch.$n(k)) B.Touch.Nv(k), c ? e.call(c, k) : e(k), l = !0
    }
    var l = !1,
        m = [];
    if (g.PointerEvent && b in B.Touch.yd)
        for (var n = 0, u; u = B.Touch.yd[b][n]; n++) a.addEventListener(u, k, !1), m.push([a, u, k]);
    else if (a.addEventListener(b, k, !1), m.push([a, b, k]), b in B.Touch.yd) {
        var p = function (a) {
            k(a);
            var b = !h;
            l && b && a.preventDefault()
        };
        for (n = 0; u = B.Touch.yd[b][n]; n++) a.addEventListener(u, p, !1), m.push([a, u, p])
    }
    return m
};
B.qb = function (a, b, c, e) {
    function f(a) {
        c ? e.call(c, a) : e(a)
    }
    var h = [],
        k = g.window;
    if (k && k.PointerEvent && b in B.Touch.yd) {
        k = 0;
        for (var l; l = B.Touch.yd[b][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f])
    } else if (a.addEventListener(b, f, !1), h.push([a, b, f]), b in B.Touch.yd) {
        var m = function (a) {
            if (a.changedTouches && 1 == a.changedTouches.length) {
                var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY
            }
            f(a);
            a.preventDefault()
        };
        for (k = 0; l = B.Touch.yd[b][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m])
    }
    return h
};
B.Aa = function (a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
};
B.Tu = function (a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
B.mt = function () {
    B.Kb("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    B.Kb("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    B.Kb("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    B.Kb("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    B.Kb("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    B.Kb("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    B.Kb("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    B.Kb("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    B.Kb("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    B.Kb("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    B.Kb("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    B.Kb("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    B.Kb("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    B.Kb("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    B.Kb("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    B.Kb("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
B.Kb = function (a, b, c) {
    for (var e = "Blockly", f = B, h = 0; h < b.length; ++h) e += "." + b[h], f && (f = f[b[h]]);
    f && f !== c && (a = (void 0 === c ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
g.console || (g.console = {
    log: function () {},
    warn: function () {}
});
g.Blockly || (g.Blockly = {});
g.Blockly.getMainWorkspace = B.Yg;
g.Blockly.addChangeListener = B.lc;

function ql(a, b) {
    var c = a.className;
    c = q(c) && c.match(/\S+/g) || [];
    for (var e = Da(arguments, 1), f = 0; f < e.length; f++) xa(c, e[f]) || c.push(e[f]);
    c = c.join(" ");
    a.className = c
};
var rl = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    sl = "ace ar fa he mzn ps".split(" "),
    tl = window.BlocklyGamesLang,
    ul = window.BlocklyGamesLanguages,
    vl = !!window.location.pathname.match(/\.html$/),
    Q = null;

function wl(a, b, c) {
    var e = Number;
    a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)"))) ? decodeURIComponent(a[1].replace(/\+/g, "%20")) : "NaN";
    e = e(a);
    return isNaN(e) ? b : Math.min(Math.max(b, e), c)
}
var R = wl("level", 1, 10);

function xl() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != sl.indexOf(tl) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", tl);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < ul.length; c++) {
            var e = ul[c];
            b.push([rl[e], e])
        }
        b.sort(function (a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var f = b[c];
            e = f[1];
            f = new Option(f[0], e);
            e == tl && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!yl(c), a && b && ql(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(zl, 1)
}

function yl(a) {
    var b = Al;
    try {
        var c = window.localStorage[b + a]
    } catch (e) {}
    return c
}

function S(a) {
    var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    return null === b ? "[Unknown message: " + a + "]" : b
}

function Bl(a, b) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function zl() {
    if (!vl) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function (b) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
B.g.Hv = {};
B.g.Hv.bA = {};
B.g.ADD_COMMENT = "Adicionar coment\u00e1rio";
B.g.CANNOT_DELETE_VARIABLE_PROCEDURE = "N\u00e3o se pode deletar a vari\u00e1vel '%1' porque \u00e9 parte da defini\u00e7\u00e3o da fun\u00e7\u00e3o '%2'";
B.g.CHANGE_VALUE_TITLE = "Mudar valor:";
B.g.CLEAN_UP = "Limpar blocos";
B.g.COLLAPSE_ALL = "Colapsar Blocos";
B.g.COLLAPSE_BLOCK = "Colapsar Bloco";
B.g.COLOUR_BLEND_COLOUR1 = "cor 1";
B.g.COLOUR_BLEND_COLOUR2 = "cor 2";
B.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
B.g.COLOUR_BLEND_RATIO = "propor\u00e7\u00e3o";
B.g.COLOUR_BLEND_TITLE = "misturar";
B.g.COLOUR_BLEND_TOOLTIP = "Mistura duas cores em uma dada propor\u00e7\u00e3o (0,0 - 1,0).";
B.g.COLOUR_PICKER_HELPURL = "https://pt.wikipedia.org/wiki/Cor";
B.g.COLOUR_PICKER_TOOLTIP = "Escolher uma cor da palheta de cores.";
B.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
B.g.COLOUR_RANDOM_TITLE = "cor aleat\u00f3ria";
B.g.COLOUR_RANDOM_TOOLTIP = "Escolher cor de forma aleat\u00f3ria.";
B.g.COLOUR_RGB_BLUE = "azul";
B.g.COLOUR_RGB_GREEN = "verde";
B.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
B.g.COLOUR_RGB_RED = "vermelho";
B.g.COLOUR_RGB_TITLE = "colorir com";
B.g.COLOUR_RGB_TOOLTIP = "Criar uma cor com a quantidade especificada de vermelho, verde e azul. Todos os valores devem estar entre 0 e 100.";
B.g.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
B.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "encerra o la\u00e7o";
B.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continua com a pr\u00f3xima itera\u00e7\u00e3o do la\u00e7o";
B.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Encerra o la\u00e7o.";
B.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Ignora o resto deste la\u00e7o, e continua com a pr\u00f3xima itera\u00e7\u00e3o.";
B.g.CONTROLS_FLOW_STATEMENTS_WARNING = "Aten\u00e7\u00e3o: Este bloco s\u00f3 pode ser usado dentro de um la\u00e7o.";
B.g.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
B.g.CONTROLS_FOREACH_TITLE = "para cada item %1 na lista %2";
B.g.CONTROLS_FOREACH_TOOLTIP = "Para cada item em uma lista, atribua o item \u00e0 vari\u00e1vel '%1' e ent\u00e3o realize algumas instru\u00e7\u00f5es.";
B.g.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
B.g.CONTROLS_FOR_TITLE = "contar com %1 de %2 at\u00e9 %3 por %4";
B.g.CONTROLS_FOR_TOOLTIP = "Fa\u00e7a com que a vari\u00e1vel '%1' assuma os valores do n\u00famero inicial ao n\u00famero final, contando de acordo com o intervalo especificado e execute os blocos especificados.";
B.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Acrescente uma condi\u00e7\u00e3o para o bloco se.";
B.g.CONTROLS_IF_ELSE_TOOLTIP = "Acrescente uma condi\u00e7\u00e3o final para o bloco se.";
B.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
B.g.CONTROLS_IF_IF_TOOLTIP = "Acrescente, remova ou reordene se\u00e7\u00f5es para reconfigurar este bloco.";
B.g.CONTROLS_IF_MSG_ELSE = "sen\u00e3o";
B.g.CONTROLS_IF_MSG_ELSEIF = "sen\u00e3o se";
B.g.CONTROLS_IF_MSG_IF = "se";
B.g.CONTROLS_IF_TOOLTIP_1 = "Se um valor for verdadeiro, ent\u00e3o realize algumas instru\u00e7\u00f5es.";
B.g.CONTROLS_IF_TOOLTIP_2 = "Se um valor for verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es. Sen\u00e3o, realize o segundo bloco de instru\u00e7\u00f5es.";
B.g.CONTROLS_IF_TOOLTIP_3 = "Se o primeiro valor \u00e9 verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es.  Sen\u00e3o, se o segundo valor \u00e9 verdadeiro, realize o segundo bloco de instru\u00e7\u00f5es.";
B.g.CONTROLS_IF_TOOLTIP_4 = "Se o primeiro valor for verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es. Sen\u00e3o, se o segundo valor \u00e9 verdadeiro, realize o segundo bloco de instru\u00e7\u00f5es. Se nenhum dos blocos for verdadeiro, realize o \u00faltimo bloco de instru\u00e7\u00f5es.";
B.g.CONTROLS_REPEAT_HELPURL = "https://pt.wikipedia.org/wiki/Estrutura_de_repeti%C3%A7%C3%A3o#Repeti.C3.A7.C3.A3o_com_vari.C3.A1vel_de_controle";
B.g.CONTROLS_REPEAT_INPUT_DO = "fa\u00e7a";
B.g.CONTROLS_REPEAT_TITLE = "repita %1 vezes";
B.g.CONTROLS_REPEAT_TOOLTIP = "Fa\u00e7a algumas instru\u00e7\u00f5es v\u00e1rias vezes.";
B.g.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
B.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repita at\u00e9";
B.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repita enquanto";
B.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Enquanto um valor for falso, ent\u00e3o fa\u00e7a algumas instru\u00e7\u00f5es.";
B.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Enquanto um valor for verdadeiro, ent\u00e3o fa\u00e7a algumas instru\u00e7\u00f5es.";
B.g.DELETE_ALL_BLOCKS = "Deletar todos os blocos %1?";
B.g.DELETE_BLOCK = "Deletar bloco";
B.g.DELETE_VARIABLE = "Deletar a vari\u00e1vel '%1'";
B.g.DELETE_VARIABLE_CONFIRMATION = "Deletar %1 usos da vari\u00e1vel '%2'?";
B.g.DELETE_X_BLOCKS = "Deletar %1 blocos";
B.g.DISABLE_BLOCK = "Desabilitar bloco";
B.g.DUPLICATE_BLOCK = "Duplicar";
B.g.DUPLICATE_COMMENT = "Duplicar coment\u00e1rio";
B.g.ENABLE_BLOCK = "Habilitar bloco";
B.g.EXPAND_ALL = "Expandir blocos";
B.g.EXPAND_BLOCK = "Expandir bloco";
B.g.EXTERNAL_INPUTS = "Entradas externas";
B.g.HELP = "Ajuda";
B.g.INLINE_INPUTS = "Entradas incorporadas";
B.g.IOS_CANCEL = "blockly:IOS Cancelar/pt-br";
B.g.IOS_ERROR = "Erro";
B.g.IOS_OK = "Ok";
B.g.IOS_PROCEDURES_ADD_INPUT = "+ Adicionar Entrada";
B.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Permitir declara\u00e7\u00f5es";
B.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "Essa fun\u00e7\u00e3o tem entradas duplicadas.";
B.g.IOS_PROCEDURES_INPUTS = "ENTRADAS";
B.g.IOS_VARIABLES_ADD_BUTTON = "Adicionar";
B.g.IOS_VARIABLES_ADD_VARIABLE = "+ Adicionar Vari\u00e1vel";
B.g.IOS_VARIABLES_DELETE_BUTTON = "Deletar";
B.g.IOS_VARIABLES_EMPTY_NAME_ERROR = "Voc\u00ea n\u00e3o pode usar um nome de vari\u00e1vel vazio.";
B.g.IOS_VARIABLES_RENAME_BUTTON = "Blockly:Renomear varioas botoens/pt-br";
B.g.IOS_VARIABLES_VARIABLE_NAME = "Nome variavel";
B.g.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
B.g.LISTS_CREATE_EMPTY_TITLE = "criar lista vazia";
B.g.LISTS_CREATE_EMPTY_TOOLTIP = "Retorna uma lista, de tamanho 0, contendo nenhum registro";
B.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
B.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Acrescenta, remove ou reordena se\u00e7\u00f5es para reconfigurar este bloco de lista.";
B.g.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
B.g.LISTS_CREATE_WITH_INPUT_WITH = "criar lista com";
B.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Acrescenta um item \u00e0 lista.";
B.g.LISTS_CREATE_WITH_TOOLTIP = "Cria uma lista com a quantidade de itens informada.";
B.g.LISTS_GET_INDEX_FIRST = "primeiro";
B.g.LISTS_GET_INDEX_FROM_END = "n\u00ba a partir do final";
B.g.LISTS_GET_INDEX_FROM_START = "n\u00ba";
B.g.LISTS_GET_INDEX_GET = "obter";
B.g.LISTS_GET_INDEX_GET_REMOVE = "obter e remover";
B.g.LISTS_GET_INDEX_LAST = "\u00faltimo";
B.g.LISTS_GET_INDEX_RANDOM = "aleat\u00f3rio";
B.g.LISTS_GET_INDEX_REMOVE = "remover";
B.g.LISTS_GET_INDEX_TAIL = "";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Retorna o primeiro item em uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Retorna o item da lista na posi\u00e7\u00e3o especificada.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Retorna o \u00faltimo item em uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Retorna um item aleat\u00f3rio de uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Remove e retorna o primeiro item de uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Remove e retorna o item na posi\u00e7\u00e3o especificada em uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Remove e retorna o \u00faltimo item de uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Remove e retorna um item aleat\u00f3rio de uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Remove o primeiro item de uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Remove o item na posi\u00e7\u00e3o especificada em uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Remove o \u00faltimo item de uma lista.";
B.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Remove um item aleat\u00f3rio de uma lista.";
B.g.LISTS_GET_SUBLIST_END_FROM_END = "at\u00e9 n\u00ba a partir do final";
B.g.LISTS_GET_SUBLIST_END_FROM_START = "at\u00e9 n\u00ba";
B.g.LISTS_GET_SUBLIST_END_LAST = "at\u00e9 \u00faltimo";
B.g.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
B.g.LISTS_GET_SUBLIST_START_FIRST = "obt\u00e9m sublista a partir do primeiro";
B.g.LISTS_GET_SUBLIST_START_FROM_END = "obt\u00e9m sublista de n\u00ba a partir do final";
B.g.LISTS_GET_SUBLIST_START_FROM_START = "obt\u00e9m sublista de n\u00ba";
B.g.LISTS_GET_SUBLIST_TAIL = "";
B.g.LISTS_GET_SUBLIST_TOOLTIP = "Cria uma c\u00f3pia da por\u00e7\u00e3o especificada de uma lista.";
B.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 \u00e9 o \u00faltimo item.";
B.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 \u00e9 o primeiro item.";
B.g.LISTS_INDEX_OF_FIRST = "encontre a primeira ocorr\u00eancia do item";
B.g.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
B.g.LISTS_INDEX_OF_LAST = "encontre a \u00faltima ocorr\u00eancia do item";
B.g.LISTS_INDEX_OF_TOOLTIP = "Retorna o \u00edndice da primeira/\u00faltima ocorr\u00eancia do item na lista.  Retorna %1 se o item n\u00e3o for encontrado.";
B.g.LISTS_INLIST = "na lista";
B.g.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
B.g.LISTS_ISEMPTY_TITLE = "%1 \u00e9 vazia";
B.g.LISTS_ISEMPTY_TOOLTIP = "Retorna ao verdadeiro se a lista estiver vazia.";
B.g.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
B.g.LISTS_LENGTH_TITLE = "tamanho de %1";
B.g.LISTS_LENGTH_TOOLTIP = "Retorna o tamanho de uma lista.";
B.g.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
B.g.LISTS_REPEAT_TITLE = "criar lista com item %1 repetido %2 vezes";
B.g.LISTS_REPEAT_TOOLTIP = "Cria uma lista consistindo no valor informado repetido o n\u00famero de vezes especificado.";
B.g.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Listas#invertendo-uma-lista";
B.g.LISTS_REVERSE_MESSAGE0 = "inverter %1";
B.g.LISTS_REVERSE_TOOLTIP = "Inverter uma c\u00f3pia da lista.";
B.g.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
B.g.LISTS_SET_INDEX_INPUT_TO = "como";
B.g.LISTS_SET_INDEX_INSERT = "inserir em";
B.g.LISTS_SET_INDEX_SET = "definir";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Insere o item no in\u00edcio de uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Insere o item na posi\u00e7\u00e3o especificada em uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Insere o item no final de uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Insere o item em uma posi\u00e7\u00e3o qualquer de uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Define o primeiro item de uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Define o item da posi\u00e7\u00e3o especificada de uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Define o \u00faltimo item de uma lista.";
B.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Define um item aleat\u00f3rio de uma lista.";
B.g.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
B.g.LISTS_SORT_ORDER_ASCENDING = "ascendente";
B.g.LISTS_SORT_ORDER_DESCENDING = "descendente";
B.g.LISTS_SORT_TITLE = "ordenar %1 %2 %3";
B.g.LISTS_SORT_TOOLTIP = "Ordenar uma c\u00f3pia de uma lista.";
B.g.LISTS_SORT_TYPE_IGNORECASE = "alfab\u00e9tico, ignorar mai\u00fascula/min\u00fascula";
B.g.LISTS_SORT_TYPE_NUMERIC = "num\u00e9rico";
B.g.LISTS_SORT_TYPE_TEXT = "alfab\u00e9tico";
B.g.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
B.g.LISTS_SPLIT_LIST_FROM_TEXT = "Fazer uma lista a partir do texto";
B.g.LISTS_SPLIT_TEXT_FROM_LIST = "fazer um texto a partir da lista";
B.g.LISTS_SPLIT_TOOLTIP_JOIN = "Juntar uma lista de textos em um \u00fanico texto, separado por um delimitador.";
B.g.LISTS_SPLIT_TOOLTIP_SPLIT = "Dividir o texto em uma lista de textos, separando-o em cada delimitador.";
B.g.LISTS_SPLIT_WITH_DELIMITER = "com delimitador";
B.g.LOGIC_BOOLEAN_FALSE = "falso";
B.g.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
B.g.LOGIC_BOOLEAN_TOOLTIP = "Retorna verdadeiro ou falso.";
B.g.LOGIC_BOOLEAN_TRUE = "verdadeiro";
B.g.LOGIC_COMPARE_HELPURL = "https://pt.wikipedia.org/wiki/Inequa%C3%A7%C3%A3o";
B.g.LOGIC_COMPARE_TOOLTIP_EQ = "Retorna verdadeiro se ambas as entradas forem iguais.";
B.g.LOGIC_COMPARE_TOOLTIP_GT = "Retorna verdadeiro se a primeira entrada for maior que a segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_GTE = "Retorna verdadeiro se a primeira entrada for maior ou igual \u00e0 segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_LT = "Retorna verdadeiro se a primeira entrada for menor que a segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_LTE = "Retorna verdadeiro se a primeira entrada for menor ou igual \u00e0 segunda entrada.";
B.g.LOGIC_COMPARE_TOOLTIP_NEQ = "Retorna verdadeiro se ambas as entradas forem diferentes.";
B.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
B.g.LOGIC_NEGATE_TITLE = "n\u00e3o %1";
B.g.LOGIC_NEGATE_TOOLTIP = "Retorna verdadeiro se a entrada for falsa.  Retorna falsa se a entrada for verdadeira.";
B.g.LOGIC_NULL = "nulo";
B.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
B.g.LOGIC_NULL_TOOLTIP = "Retorna nulo.";
B.g.LOGIC_OPERATION_AND = "e";
B.g.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
B.g.LOGIC_OPERATION_OR = "ou";
B.g.LOGIC_OPERATION_TOOLTIP_AND = "Retorna verdadeiro se ambas as entradas forem verdadeiras.";
B.g.LOGIC_OPERATION_TOOLTIP_OR = "Retorna verdadeiro se uma das estradas for verdadeira.";
B.g.LOGIC_TERNARY_CONDITION = "teste";
B.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
B.g.LOGIC_TERNARY_IF_FALSE = "se falso";
B.g.LOGIC_TERNARY_IF_TRUE = "se verdadeiro";
B.g.LOGIC_TERNARY_TOOLTIP = 'Avalia a condi\u00e7\u00e3o em "teste". Se a condi\u00e7\u00e3o for verdadeira retorna o valor "se verdadeiro", sen\u00e3o retorna o valor "se falso".';
B.g.MATH_ADDITION_SYMBOL = "+";
B.g.MATH_ARITHMETIC_HELPURL = "https://pt.wikipedia.org/wiki/Aritm%C3%A9tica";
B.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Retorna a soma dos dois n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Retorna o quociente da divis\u00e3o dos dois n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_MINUS = "Retorna a diferen\u00e7a entre os dois n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Retorna o produto dos dois n\u00fameros.";
B.g.MATH_ARITHMETIC_TOOLTIP_POWER = "Retorna o primeiro n\u00famero elevado \u00e0 pot\u00eancia do segundo n\u00famero.";
B.g.MATH_CHANGE_HELPURL = "https://pt.wikipedia.org/wiki/Adi%C3%A7%C3%A3o";
B.g.MATH_CHANGE_TITLE = "alterar %1 por %2";
B.g.MATH_CHANGE_TOOLTIP = 'Soma um n\u00famero \u00e0 vari\u00e1vel "%1".';
B.g.MATH_CONSTANT_HELPURL = "https://pt.wikipedia.org/wiki/Anexo:Lista_de_constantes_matem%C3%A1ticas";
B.g.MATH_CONSTANT_TOOLTIP = "Retorna uma das constantes comuns: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), ou \u221e (infinito).";
B.g.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
B.g.MATH_CONSTRAIN_TITLE = "restringe %1 inferior %2 superior %3";
B.g.MATH_CONSTRAIN_TOOLTIP = "Restringe um n\u00famero entre os limites especificados (inclusivo).";
B.g.MATH_DIVISION_SYMBOL = "\u00f7";
B.g.MATH_IS_DIVISIBLE_BY = "\u00e9 divis\u00edvel por";
B.g.MATH_IS_EVEN = "\u00e9 par";
B.g.MATH_IS_NEGATIVE = "\u00e9 negativo";
B.g.MATH_IS_ODD = "\u00e9 \u00edmpar";
B.g.MATH_IS_POSITIVE = "\u00e9 positivo";
B.g.MATH_IS_PRIME = "\u00e9 primo";
B.g.MATH_IS_TOOLTIP = "Verifica se um n\u00famero \u00e9 par, \u00edmpar, inteiro, positivo, negativo, ou se \u00e9 divis\u00edvel por outro n\u00famero.  Retorna verdadeiro ou falso.";
B.g.MATH_IS_WHOLE = "\u00e9 inteiro";
B.g.MATH_MODULO_HELPURL = "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_m%C3%B3dulo";
B.g.MATH_MODULO_TITLE = "resto da divis\u00e3o de %1 \u00f7 %2";
B.g.MATH_MODULO_TOOLTIP = "Retorna o resto da divis\u00e3o de dois n\u00fameros.";
B.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
B.g.MATH_NUMBER_HELPURL = "https://pt.wikipedia.org/wiki/N%C3%BAmero";
B.g.MATH_NUMBER_TOOLTIP = "Um n\u00famero.";
B.g.MATH_ONLIST_HELPURL = "";
B.g.MATH_ONLIST_OPERATOR_AVERAGE = "m\u00e9dia da lista";
B.g.MATH_ONLIST_OPERATOR_MAX = "maior da lista";
B.g.MATH_ONLIST_OPERATOR_MEDIAN = "mediana da lista";
B.g.MATH_ONLIST_OPERATOR_MIN = "menor da lista";
B.g.MATH_ONLIST_OPERATOR_MODE = "moda da lista";
B.g.MATH_ONLIST_OPERATOR_RANDOM = "item aleat\u00f3rio da lista";
B.g.MATH_ONLIST_OPERATOR_STD_DEV = "desvio padr\u00e3o da lista";
B.g.MATH_ONLIST_OPERATOR_SUM = "soma de uma lista";
B.g.MATH_ONLIST_TOOLTIP_AVERAGE = "Retorna a m\u00e9dia aritm\u00e9tica dos n\u00fameros da lista.";
B.g.MATH_ONLIST_TOOLTIP_MAX = "Retorna o maior n\u00famero da lista.";
B.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Retorna a mediana dos n\u00fameros da lista.";
B.g.MATH_ONLIST_TOOLTIP_MIN = "Retorna o menor n\u00famero da lista.";
B.g.MATH_ONLIST_TOOLTIP_MODE = "Retorna uma lista do(s) item(ns) mais comum(ns) da lista.";
B.g.MATH_ONLIST_TOOLTIP_RANDOM = "Retorna um elemento aleat\u00f3rio da lista.";
B.g.MATH_ONLIST_TOOLTIP_STD_DEV = "Retorna o desvio padr\u00e3o dos n\u00fameros da lista.";
B.g.MATH_ONLIST_TOOLTIP_SUM = "Retorna a soma de todos os n\u00fameros na lista.";
B.g.MATH_POWER_SYMBOL = "^";
B.g.MATH_RANDOM_FLOAT_HELPURL = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
B.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fra\u00e7\u00e3o aleat\u00f3ria";
B.g.MATH_RANDOM_FLOAT_TOOLTIP = "Retorna uma fra\u00e7\u00e3o aleat\u00f3ria entre 0.0 (inclusivo) e 1.0 (exclusivo).";
B.g.MATH_RANDOM_INT_HELPURL = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
B.g.MATH_RANDOM_INT_TITLE = "inteiro aleat\u00f3rio entre %1 e %2";
B.g.MATH_RANDOM_INT_TOOLTIP = "Retorna um n\u00famero inteiro entre os dois limites informados, inclusivo.";
B.g.MATH_ROUND_HELPURL = "https://pt.wikipedia.org/wiki/Arredondamento";
B.g.MATH_ROUND_OPERATOR_ROUND = "arredonda";
B.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "arredonda para baixo";
B.g.MATH_ROUND_OPERATOR_ROUNDUP = "arredonda para cima";
B.g.MATH_ROUND_TOOLTIP = "Arredonda um n\u00famero para cima ou para baixo.";
B.g.MATH_SINGLE_HELPURL = "https://pt.wikipedia.org/wiki/Raiz_quadrada";
B.g.MATH_SINGLE_OP_ABSOLUTE = "absoluto";
B.g.MATH_SINGLE_OP_ROOT = "raiz quadrada";
B.g.MATH_SINGLE_TOOLTIP_ABS = "Retorna o valor absoluto de um n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_EXP = "Retorna o n\u00famero e elevado \u00e0 pot\u00eancia de um n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_LN = "Retorna o logaritmo natural de um n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_LOG10 = "Retorna o logaritmo em base 10 de um n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_NEG = "Retorna o oposto de um n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_POW10 = "Retorna 10 elevado \u00e0 pot\u00eancia de um n\u00famero.";
B.g.MATH_SINGLE_TOOLTIP_ROOT = "Retorna a raiz quadrada de um n\u00famero.";
B.g.MATH_SUBTRACTION_SYMBOL = "-";
B.g.MATH_TRIG_ACOS = "acos";
B.g.MATH_TRIG_ASIN = "asin";
B.g.MATH_TRIG_ATAN = "atan";
B.g.MATH_TRIG_COS = "cos";
B.g.MATH_TRIG_HELPURL = "https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_trigonom%C3%A9trica";
B.g.MATH_TRIG_SIN = "sin";
B.g.MATH_TRIG_TAN = "tan";
B.g.MATH_TRIG_TOOLTIP_ACOS = "Retorna o arco cosseno de um n\u00famero.";
B.g.MATH_TRIG_TOOLTIP_ASIN = "Retorna o arco seno de um n\u00famero.";
B.g.MATH_TRIG_TOOLTIP_ATAN = "Retorna o arco tangente de um n\u00famero.";
B.g.MATH_TRIG_TOOLTIP_COS = "Retorna o cosseno de um grau (n\u00e3o radiano).";
B.g.MATH_TRIG_TOOLTIP_SIN = "Retorna o seno de um grau (n\u00e3o radiano).";
B.g.MATH_TRIG_TOOLTIP_TAN = "Retorna a tangente de um grau (n\u00e3o radiano).";
B.g.NEW_COLOUR_VARIABLE = "Criar vari\u00e1vel colorida...";
B.g.NEW_NUMBER_VARIABLE = "Criar vari\u00e1vel num\u00e9rica...";
B.g.NEW_STRING_VARIABLE = "Criar vari\u00e1vel de segmentos de texto...";
B.g.NEW_VARIABLE = "Criar vari\u00e1vel...";
B.g.NEW_VARIABLE_TITLE = "Nome da nova vari\u00e1vel:";
B.g.NEW_VARIABLE_TYPE_TITLE = "Tipo da nova vari\u00e1vel:";
B.g.ORDINAL_NUMBER_SUFFIX = "";
B.g.PROCEDURES_ALLOW_STATEMENTS = "permitir declara\u00e7\u00f5es";
B.g.PROCEDURES_BEFORE_PARAMS = "com:";
B.g.PROCEDURES_CALLNORETURN_HELPURL = "https://pt.wikipedia.org/wiki/Sub-rotina";
B.g.PROCEDURES_CALLNORETURN_TOOLTIP = 'Executa a fun\u00e7\u00e3o definida pelo usu\u00e1rio "%1".';
B.g.PROCEDURES_CALLRETURN_HELPURL = "https://pt.wikipedia.org/wiki/Sub-rotina";
B.g.PROCEDURES_CALLRETURN_TOOLTIP = 'Executa a fun\u00e7\u00e3o definida pelo usu\u00e1rio "%1" e usa seu retorno.';
B.g.PROCEDURES_CALL_BEFORE_PARAMS = "com:";
B.g.PROCEDURES_CREATE_DO = 'Criar "%1"';
B.g.PROCEDURES_DEFNORETURN_COMMENT = "Descreva esta fun\u00e7\u00e3o...";
B.g.PROCEDURES_DEFNORETURN_DO = "";
B.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
B.g.PROCEDURES_DEFNORETURN_PROCEDURE = "fa\u00e7a algo";
B.g.PROCEDURES_DEFNORETURN_TITLE = "para";
B.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Cria uma fun\u00e7\u00e3o que n\u00e3o tem retorno.";
B.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
B.g.PROCEDURES_DEFRETURN_RETURN = "retorna";
B.g.PROCEDURES_DEFRETURN_TOOLTIP = "Cria uma fun\u00e7\u00e3o que possui um valor de retorno.";
B.g.PROCEDURES_DEF_DUPLICATE_WARNING = "Aten\u00e7\u00e3o: Esta fun\u00e7\u00e3o tem par\u00e2metros duplicados.";
B.g.PROCEDURES_HIGHLIGHT_DEF = "Destacar defini\u00e7\u00e3o da fun\u00e7\u00e3o";
B.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
B.g.PROCEDURES_IFRETURN_TOOLTIP = "Se um valor \u00e9 verdadeiro, ent\u00e3o retorna um valor.";
B.g.PROCEDURES_IFRETURN_WARNING = "Aten\u00e7\u00e3o: Este bloco s\u00f3 pode ser utilizado dentro da defini\u00e7\u00e3o de uma fun\u00e7\u00e3o.";
B.g.PROCEDURES_MUTATORARG_TITLE = "nome da entrada:";
B.g.PROCEDURES_MUTATORARG_TOOLTIP = "Adiciona uma entrada para esta fun\u00e7\u00e3o";
B.g.PROCEDURES_MUTATORCONTAINER_TITLE = "entradas";
B.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Adiciona, remove, ou reordena as entradas para esta fun\u00e7\u00e3o.";
B.g.REDO = "Refazer";
B.g.REMOVE_COMMENT = "Remover coment\u00e1rio";
B.g.RENAME_VARIABLE = "Renomear vari\u00e1vel...";
B.g.RENAME_VARIABLE_TITLE = "Renomear todas as vari\u00e1veis '%1' para:";
B.g.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
B.g.TEXT_APPEND_TITLE = "para %1 anexar texto %2";
B.g.TEXT_APPEND_TOOLTIP = 'Acrescentar um peda\u00e7o de texto \u00e0 vari\u00e1vel "%1".';
B.g.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
B.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "para min\u00fasculas";
B.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "para Nomes Pr\u00f3prios";
B.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "para MAI\u00daSCULAS";
B.g.TEXT_CHANGECASE_TOOLTIP = "Retorna uma c\u00f3pia do texto em um formato diferente.";
B.g.TEXT_CHARAT_FIRST = "obter primeira letra";
B.g.TEXT_CHARAT_FROM_END = "obter letra # a partir do final";
B.g.TEXT_CHARAT_FROM_START = "obter letra n\u00ba";
B.g.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
B.g.TEXT_CHARAT_LAST = "obter \u00faltima letra";
B.g.TEXT_CHARAT_RANDOM = "obter letra aleat\u00f3ria";
B.g.TEXT_CHARAT_TAIL = "";
B.g.TEXT_CHARAT_TITLE = "no texto %1 %2";
B.g.TEXT_CHARAT_TOOLTIP = "Retorna a letra na posi\u00e7\u00e3o especificada.";
B.g.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
B.g.TEXT_COUNT_MESSAGE0 = "Contar %1 em %2";
B.g.TEXT_COUNT_TOOLTIP = "Calcule quantas vezes algum texto aparece centro de algum outro texto.";
B.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Acrescentar um item ao texto.";
B.g.TEXT_CREATE_JOIN_TITLE_JOIN = "unir";
B.g.TEXT_CREATE_JOIN_TOOLTIP = "Acrescenta, remove ou reordena se\u00e7\u00f5es para reconfigurar este bloco de texto.";
B.g.TEXT_GET_SUBSTRING_END_FROM_END = "at\u00e9 letra n\u00ba a partir do final";
B.g.TEXT_GET_SUBSTRING_END_FROM_START = "at\u00e9 letra n\u00ba";
B.g.TEXT_GET_SUBSTRING_END_LAST = "at\u00e9 \u00faltima letra";
B.g.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
B.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "no texto";
B.g.TEXT_GET_SUBSTRING_START_FIRST = "obter trecho de primeira letra";
B.g.TEXT_GET_SUBSTRING_START_FROM_END = "obter trecho de letra n\u00ba a partir do final";
B.g.TEXT_GET_SUBSTRING_START_FROM_START = "obter trecho de letra n\u00ba";
B.g.TEXT_GET_SUBSTRING_TAIL = "";
B.g.TEXT_GET_SUBSTRING_TOOLTIP = "Retorna o trecho de texto especificado.";
B.g.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
B.g.TEXT_INDEXOF_OPERATOR_FIRST = "encontre a primeira ocorr\u00eancia do item";
B.g.TEXT_INDEXOF_OPERATOR_LAST = "encontre a \u00faltima ocorr\u00eancia do texto";
B.g.TEXT_INDEXOF_TITLE = "no texto %1 %2 %3";
B.g.TEXT_INDEXOF_TOOLTIP = "Retorna a posi\u00e7\u00e3o da primeira/\u00faltima ocorr\u00eancia do primeiro texto no segundo texto.  Retorna %1 se o texto n\u00e3o for encontrado.";
B.g.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
B.g.TEXT_ISEMPTY_TITLE = "%1 \u00e9 vazio";
B.g.TEXT_ISEMPTY_TOOLTIP = "Retorna verdadeiro se o texto fornecido for vazio.";
B.g.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
B.g.TEXT_JOIN_TITLE_CREATEWITH = "criar texto com";
B.g.TEXT_JOIN_TOOLTIP = "Criar um peda\u00e7o de texto juntando qualquer n\u00famero de itens.";
B.g.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
B.g.TEXT_LENGTH_TITLE = "tamanho de %1";
B.g.TEXT_LENGTH_TOOLTIP = "Retorna o n\u00famero de letras (incluindo espa\u00e7os) no texto fornecido.";
B.g.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
B.g.TEXT_PRINT_TITLE = "imprime %1";
B.g.TEXT_PRINT_TOOLTIP = "Imprime o texto, n\u00famero ou valor especificado.";
B.g.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
B.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Pede ao usu\u00e1rio um n\u00famero.";
B.g.TEXT_PROMPT_TOOLTIP_TEXT = "Pede ao usu\u00e1rio um texto.";
B.g.TEXT_PROMPT_TYPE_NUMBER = "Pede um n\u00famero com uma mensagem";
B.g.TEXT_PROMPT_TYPE_TEXT = "Pede um texto com uma mensagem";
B.g.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Texto#substituindo-substrings";
B.g.TEXT_REPLACE_MESSAGE0 = "substituir %1 por %2 em %3";
B.g.TEXT_REPLACE_TOOLTIP = "Substitua todas as ocorr\u00eancias de algum texto dentro de algum outro texto.";
B.g.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Texto#invertendo-texto";
B.g.TEXT_REVERSE_MESSAGE0 = "inverter %1";
B.g.TEXT_REVERSE_TOOLTIP = "Inverter a ordem dos caracteres no texto.";
B.g.TEXT_TEXT_HELPURL = "https://pt.wikipedia.org/wiki/Cadeia_de_caracteres";
B.g.TEXT_TEXT_TOOLTIP = "Uma letra, palavra ou linha de texto.";
B.g.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
B.g.TEXT_TRIM_OPERATOR_BOTH = "remover espa\u00e7os de ambos os lados de";
B.g.TEXT_TRIM_OPERATOR_LEFT = "remover espa\u00e7os \u00e0 esquerda de";
B.g.TEXT_TRIM_OPERATOR_RIGHT = "remover espa\u00e7os \u00e0 direita de";
B.g.TEXT_TRIM_TOOLTIP = "Retorna uma c\u00f3pia do texto com os espa\u00e7os removidos de uma ou ambas extremidades.";
B.g.TODAY = "Hoje";
B.g.UNDO = "Desfazer";
B.g.VARIABLES_DEFAULT_NAME = "item";
B.g.VARIABLES_GET_CREATE_SET = 'Criar "definir %1"';
B.g.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
B.g.VARIABLES_GET_TOOLTIP = "Retorna o valor desta vari\u00e1vel.";
B.g.VARIABLES_SET = "definir %1 para %2";
B.g.VARIABLES_SET_CREATE_GET = 'Criar "obter %1"';
B.g.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
B.g.VARIABLES_SET_TOOLTIP = "Define esta vari\u00e1vel para o valor da entrada.";
B.g.VARIABLE_ALREADY_EXISTS = "A vari\u00e1vel chamada '%1' j\u00e1 existe.";
B.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "J\u00e1 existe uma vari\u00e1vel chamada '%1' para outra do tipo: '%2'.";
B.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Diz algo...";
B.g.PROCEDURES_DEFRETURN_TITLE = B.g.PROCEDURES_DEFNORETURN_TITLE;
B.g.CONTROLS_IF_IF_TITLE_IF = B.g.CONTROLS_IF_MSG_IF;
B.g.CONTROLS_WHILEUNTIL_INPUT_DO = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.CONTROLS_IF_MSG_THEN = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.CONTROLS_IF_ELSE_TITLE_ELSE = B.g.CONTROLS_IF_MSG_ELSE;
B.g.PROCEDURES_DEFRETURN_PROCEDURE = B.g.PROCEDURES_DEFNORETURN_PROCEDURE;
B.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.LISTS_GET_INDEX_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.MATH_CHANGE_TITLE_ITEM = B.g.VARIABLES_DEFAULT_NAME;
B.g.PROCEDURES_DEFRETURN_DO = B.g.PROCEDURES_DEFNORETURN_DO;
B.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = B.g.CONTROLS_IF_MSG_ELSEIF;
B.g.LISTS_GET_INDEX_HELPURL = B.g.LISTS_INDEX_OF_HELPURL;
B.g.CONTROLS_FOREACH_INPUT_DO = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.LISTS_SET_INDEX_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.CONTROLS_FOR_INPUT_DO = B.g.CONTROLS_REPEAT_INPUT_DO;
B.g.LISTS_CREATE_WITH_ITEM_TITLE = B.g.VARIABLES_DEFAULT_NAME;
B.g.TEXT_APPEND_VARIABLE = B.g.VARIABLES_DEFAULT_NAME;
B.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = B.g.VARIABLES_DEFAULT_NAME;
B.g.LISTS_INDEX_OF_INPUT_IN_LIST = B.g.LISTS_INLIST;
B.g.PROCEDURES_DEFRETURN_COMMENT = B.g.PROCEDURES_DEFNORETURN_COMMENT;
B.g.MATH_HUE = "230";
B.g.LOOPS_HUE = "120";
B.g.LISTS_HUE = "260";
B.g.LOGIC_HUE = "210";
B.g.VARIABLES_HUE = "330";
B.g.TEXTS_HUE = "160";
B.g.PROCEDURES_HUE = "290";
B.g.COLOUR_HUE = "20";
B.g.VARIABLES_DYNAMIC_HUE = "310";
var U = {
    Sg: null,
    $: function () {
        xl();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = S("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = S("Games_linkAlert"), BlocklyStorage.HASH_ERROR = S("Games_hashError"), BlocklyStorage.XML_ERROR = S("Games_xmlError"), BlocklyStorage.alert = T.Tr.bind(T, a), a && Bl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", U.kt, !0);
        B.$a && (B.$a.Fs = !1);
        B.C &&
            (B.C.Fs = !1)
    },
    Zu: function (a, b) {
        if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.Zm
            } catch (h) {}
            c && delete window.sessionStorage.Zm;
            var e = yl(R),
                f = b && yl(R - 1);
            f && "function" == typeof b && (f = b(f));
            (a = c || e || f || a) && U.Er(a)
        }
    },
    Er: function (a) {
        U.Sg ? U.Sg.setValue(a, -1) : (a = B.D.Kc(a), Q.clear(), B.D.ie(a, Q), Q.hp())
    },
    ym: function () {
        if (U.Sg) var a = U.Sg.getValue();
        else {
            a = B.D.vj(Q, !0);
            if (1 == I(Q, !1).length && a.querySelector) {
                var b =
                    a.querySelector("block");
                b && (b.removeAttribute("x"), b.removeAttribute("y"))
            }
            a = B.D.pc(a)
        }
        return a
    },
    ui: function () {
        return Q
    },
    Lv: function () {
        window.localStorage && (window.localStorage[Al + R] = U.ym())
    },
    Hi: function () {
        window.location = (vl ? "index.html" : "./") + "?lang=" + tl
    },
    kt: function () {
        if (window.sessionStorage) {
            if (U.Sg) var a = U.Sg.getValue();
            else a = B.D.vj(Q), a = B.D.pc(a);
            window.sessionStorage.Zm = a
        }
        a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var b = window.location.search;
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    Zk: function () {
        10 > R ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + tl + "&level=" + (R + 1) : U.Hi()
    },
    Dk: function (a, b) {
        if (a) {
            var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1])
        }
        Ii(a, b)
    },
    Ou: function (a, b) {
        a = document.getElementById(a);
        a.firstChild ||
            (a = B.Xe(a, {
                rtl: -1 != sl.indexOf(tl),
                readOnly: !0
            }), "string" != typeof b && (b = b.join("")), B.D.ie(B.D.Kc(b), a))
    },
    Wv: function (a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    Xc: function (a) {
        if ("click" == a.type && "touchend" == U.Xc.xn && U.Xc.wn + 2E3 > Date.now() || U.Xc.xn == a.type && U.Xc.wn + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        U.Xc.xn = a.type;
        U.Xc.wn = Date.now();
        return !1
    }
};
U.Xc.xn = null;
U.Xc.wn = 0;
U.Ku = function () {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
U.Lu = function () {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = U;
U.setCode = U.Er;
U.getCode = U.ym;
U.getWorkspace = U.ui;
var T = {
    Vf: !1,
    Np: null,
    ak: null,
    Bh: function (a, b, c, e, f, h) {
        function k() {
            T.Vf && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }
        if (!a) throw TypeError("Content not found: " + a);
        T.Vf && T.Nb(!1);
        B.Bb(!0);
        T.Vf = !0;
        T.Np = b;
        T.ak = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), T.hm = B.qb(e, "mousedown", null, T.Rt));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (T.Sk(b, !1, .2), T.Sk(l, !0, .8), setTimeout(k, 175)) : k()
    },
    Op: 0,
    Pp: 0,
    Rt: function (a) {
        T.km();
        if (!B.h.$e(a)) {
            var b = document.getElementById("dialog");
            T.Op = b.offsetLeft - a.clientX;
            T.Pp = b.offsetTop - a.clientY;
            T.jm = B.qb(document, "mouseup", null, T.km);
            T.im = B.qb(document, "mousemove", null, T.St);
            a.stopPropagation()
        }
    },
    St: function (a) {
        var b = document.getElementById("dialog"),
            c = T.Op + a.clientX;
        a = T.Pp + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    km: function () {
        T.jm && (B.Aa(T.jm), T.jm = null);
        T.im && (B.Aa(T.im), T.im = null)
    },
    Nb: function (a) {
        function b() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (T.Vf) {
            T.km();
            T.hm && (B.Aa(T.hm), T.hm = null);
            T.Vf = !1;
            T.ak && T.ak();
            T.ak = null;
            var c = !1 === a ?
                null : T.Np;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            c && a ? (T.Sk(a, !1, .8), T.Sk(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    Sk: function (a, b, c) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = c
        }
        if (a) {
            var f = document.getElementById("dialogBorder"),
                h = T.eq(a);
            b ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible"
        }
    },
    eq: function (a) {
        var b = Sf(a);
        b = {
            x: b.x,
            y: b.y
        };
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    Tr: function (a, b) {
        var c = document.getElementById("containerStorage");
        c.textContent = "";
        b = b.split("\n");
        for (var e = 0; e < b.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(b[e]));
            c.appendChild(f)
        }
        c = document.getElementById("dialogStorage");
        T.Bh(c, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, T.Sr);
        T.Mr()
    },
    Ro: function () {
        if (!yl(R))
            if (T.Vf || Q.lb()) setTimeout(T.Ro, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", T.Nb, !0);
                b.addEventListener("touchend", T.Nb, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", U.Hi, !0);
                b.addEventListener("touchend", U.Hi, !0);
                T.Bh(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function () {
                    document.body.removeEventListener("keydown", T.Qo, !0)
                });
                document.body.addEventListener("keydown", T.Qo, !0)
            }
    },
    Ir: function () {
        document.getElementById("galleryXml").value = U.ym();
        var a = document.getElementById("galleryDialog");
        if (!T.Ir.Kv) {
            var b = document.getElementById("galleryCancel");
            b.addEventListener("click", T.Nb, !0);
            b.addEventListener("touchend", T.Nb, !0);
            b = document.getElementById("galleryOk");
            b.addEventListener("click", T.wm, !0);
            b.addEventListener("touchend",
                T.wm, !0);
            T.Ir.Kv = !0
        }
        b = document.getElementById("submitButton");
        T.Bh(a, b, !0, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function () {
            document.body.removeEventListener("keydown", T.bq, !0)
        });
        document.body.addEventListener("keydown", T.bq, !0);
        setTimeout(function () {
            document.getElementById("galleryTitle").focus()
        }, 250)
    },
    yt: function () {
        var a = document.getElementById("dialogDone");
        if (Q) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = mk();
            c = U.Wv(c);
            var e = c.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g,
                "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = c;
            "function" == typeof prettyPrintOne && (c = f.innerHTML, c = prettyPrintOne(c, "js"), f.innerHTML = c);
            c = 1 == e ? S("Games_linesOfCode1") : S("Games_linesOfCode2").replace("%1", String(e));
            b.appendChild(document.createTextNode(c))
        }
        c = 10 > R ? S("Games_nextLevel").replace("%1", String(R + 1)) : S("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click",
            T.Nb, !0);
        b.addEventListener("touchend", T.Nb, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", U.Zk, !0);
        b.addEventListener("touchend", U.Zk, !0);
        T.Bh(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function () {
            document.body.removeEventListener("keydown", T.pp, !0)
        });
        document.body.addEventListener("keydown", T.pp, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    Mp: function (a) {
        !T.Vf || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (T.Nb(!0), a.stopPropagation(), a.preventDefault())
    },
    Mr: function () {
        document.body.addEventListener("keydown", T.Mp, !0)
    },
    Sr: function () {
        document.body.removeEventListener("keydown", T.Mp, !0)
    },
    pp: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) T.Nb(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && U.Zk()
    },
    Qo: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) T.Nb(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && U.Hi()
    },
    bq: function (a) {
        27 == a.keyCode ? T.Nb(!0) : 13 == a.keyCode && T.wm()
    },
    wm: function () {
        var a = document.getElementById("galleryTitle");
        if (a.value.trim()) {
            a = document.getElementById("galleryForm");
            for (var b = [], c = 0, e; e = a.elements[c]; c++) e.name && (b[c] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
            var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function () {
                if (4 == f.readyState) {
                    var a = 200 == f.status ? S("Games_submitted") : S("Games_httpRequestError") + "\nStatus: " + f.status;
                    T.Tr(null, a)
                }
            };
            f.send(b.join("&"));
            T.Nb(!0)
        } else a.value = "", a.focus()
    }
};
window.BlocklyDialogs = T;
T.hideDialog = T.Nb;
// Copyright 2012 Google Inc.  Apache License 2.0
B.C = new Yi;
rk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
B.C.vy = 0;
B.C.Ny = 1.1;
B.C.Gj = 1.2;
B.C.Fj = 2;
B.C.Ky = 3;
B.C.Ey = 3;
B.C.yy = 4.1;
B.C.Qy = 4.2;
B.C.Ho = 4.3;
B.C.Do = 4.4;
B.C.Py = 4.5;
B.C.Ry = 4.6;
B.C.Fy = 4.7;
B.C.wy = 4.8;
B.C.Iy = 5;
B.C.Fo = 5.1;
B.C.Gy = 5.2;
B.C.My = 5.3;
B.C.Go = 6.1;
B.C.Ej = 6.2;
B.C.Ay = 7;
B.C.Oy = 8;
B.C.Jy = 8;
B.C.Ly = 8;
B.C.Hy = 9;
B.C.xy = 10;
B.C.By = 11;
B.C.zy = 12;
B.C.Co = 13;
B.C.Eo = 14;
B.C.Dy = 15;
B.C.uy = 16;
B.C.Sy = 17;
B.C.Cy = 18;
B.C.Gs = 99;
B.C.Hj = [
    [B.C.Fj, B.C.Gj],
    [B.C.Fj, B.C.Fj],
    [B.C.Gj, B.C.Gj],
    [B.C.Gj, B.C.Fj],
    [B.C.Do, B.C.Do],
    [B.C.Fo, B.C.Fo],
    [B.C.Ej, B.C.Ej],
    [B.C.Co, B.C.Co],
    [B.C.Eo, B.C.Eo]
];
B.C.$ = function (a) {
    B.C.Yj = Object.create(null);
    B.C.fu = Object.create(null);
    B.C.Ih ? B.C.Ih.reset() : B.C.Ih = new sk;
    B.C.Ih.na = a.na;
    for (var b = [], c = B.I.Vs(a), e = 0; e < c.length; e++) b.push(B.C.Ih.getName(c[e], "DEVELOPER_VARIABLE"));
    a = B.I.To(a);
    for (e = 0; e < a.length; e++) b.push(B.C.Ih.getName(a[e].ga(), B.I.Ph));
    b.length && (B.C.Yj.variables = "var " + b.join(", ") + ";")
};
B.C.finish = function (a) {
    var b = [],
        c;
    for (c in B.C.Yj) b.push(B.C.Yj[c]);
    delete B.C.Yj;
    delete B.C.fu;
    B.C.Ih.reset();
    return b.join("\n\n") + "\n\n\n" + a
};
B.C.Cr = function (a) {
    return a + ";\n"
};
B.C.uA = function (a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
B.C.Kn = function (a, b) {
    var c = "";
    if (!a.S || !a.S.yb) {
        var e = a.mk();
        (e = B.h.gs(e, B.C.ls - 3)) && (c = a.Pf ? c + ("/**\n" + ok(e + "\n", " * ") + " */\n") : c + ok(e + "\n", "// "));
        for (var f = 0; f < a.X.length; f++)
            if (a.X[f].type == B.ab) {
                var h = D(a.X[f].connection);
                if (h) {
                    e = [];
                    h = Ja(h, !0);
                    for (var k = 0; k < h.length; k++) {
                        var l = h[k].mk();
                        l && e.push(l)
                    }
                    e.length && e.push("");
                    (e = e.join("\n")) && (c += ok(e, "// "))
                }
            }
    }
    a = a.P && D(a.P);
    a = nk(B.C, a);
    return c + b + a
};
B.C.oA = function (a, b, c, e, f) {
    c = c || 0;
    f = f || B.C.Gs;
    a.o.options.nh && c--;
    var h = a.o.options.nh ? "1" : "0";
    a = 0 < c ? pk(a, b, B.C.Ej) || h : 0 > c ? pk(a, b, B.C.Go) || h : e ? pk(a, b, B.C.Ho) || h : pk(a, b, f) || h;
    if (B.Tu(a)) a = parseFloat(a) + c, e && (a = -a);
    else {
        if (0 < c) {
            a = a + " + " + c;
            var k = B.C.Ej
        } else 0 > c && (a = a + " - " + -c, k = B.C.Go);
        e && (a = c ? "-(" + a + ")" : "-" + a, k = B.C.Ho);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
};
var Cl = {},
    V, Dl, El, W, X, Z, Fl;
B.$a.maze_moveForward = {
    $: function () {
        bj(this, {
            message0: S("Maze_moveForward"),
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: S("Maze_moveForwardTooltip")
        })
    }
};
B.C.maze_moveForward = function (a) {
    return "moveForward('block_id_" + a.id + "');\n"
};
B.$a.maze_turn = {
    $: function () {
        var a = [
            [S("Maze_turnLeft"), "turnLeft"],
            [S("Maze_turnRight"), "turnRight"]
        ];
        a[0][0] += " \u21ba";
        a[1][0] += " \u21bb";
        this.we(290);
        Wi(aj(this), new Kh(a), "DIR");
        this.pg(!0);
        this.zh(!0);
        this.dd(S("Maze_turnTooltip"))
    }
};
B.C.maze_turn = function (a) {
    return Ne(a, "DIR") + "('block_id_" + a.id + "');\n"
};
B.$a.maze_if = {
    $: function () {
        var a = [
            [S("Maze_pathAhead"), "isPathForward"],
            [S("Maze_pathLeft"), "isPathLeft"],
            [S("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.we(210);
        Wi(aj(this), new Kh(a), "DIR");
        Wi(this.Zd(B.Ka, "DO"), S("Maze_doCode"));
        this.dd(S("Maze_ifTooltip"));
        this.pg(!0);
        this.zh(!0)
    }
};
B.C.maze_if = function (a) {
    var b = Ne(a, "DIR") + "('block_id_" + a.id + "')";
    a = qk(a, "DO");
    return "if (" + b + ") {\n" + a + "}\n"
};
B.$a.maze_ifElse = {
    $: function () {
        var a = [
            [S("Maze_pathAhead"), "isPathForward"],
            [S("Maze_pathLeft"), "isPathLeft"],
            [S("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.we(210);
        Wi(aj(this), new Kh(a), "DIR");
        Wi(this.Zd(B.Ka, "DO"), S("Maze_doCode"));
        Wi(this.Zd(B.Ka, "ELSE"), S("Maze_elseCode"));
        this.dd(S("Maze_ifelseTooltip"));
        this.pg(!0);
        this.zh(!0)
    }
};
B.C.maze_ifElse = function (a) {
    var b = Ne(a, "DIR") + "('block_id_" + a.id + "')",
        c = qk(a, "DO");
    a = qk(a, "ELSE");
    return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n"
};
B.$a.maze_forever = {
    $: function () {
        this.we(120);
        Wi(Wi(aj(this), S("Maze_repeatUntil")), new hk(Gl.Rk, 12, 16));
        Wi(this.Zd(B.Ka, "DO"), S("Maze_doCode"));
        this.pg(!0);
        this.dd(S("Maze_whileTooltip"))
    }
};
B.C.maze_forever = function (a) {
    var b = qk(a, "DO");
    B.C.zo && (b = B.C.zo.replace(/%1/g, "'block_id_" + a.id + "'") + b);
    return "while (notDone()) {\n" + b + "}\n"
};
var Hl = {},
    Il = {};

function Jl() {
    throw Error("Do not instantiate directly");
}
Jl.prototype.am = null;
Jl.prototype.qc = function () {
    return this.content
};
Jl.prototype.toString = function () {
    return this.content
};
Jl.prototype.Al = function () {
    if (this.bm === Il) return Ac(this.toString());
    if (this.bm !== Hl) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return Bc(this.toString(), this.am || null)
};

function Kl(a) {
    if (null != a) switch (a.am) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Ll() {
    Jl.call(this)
}
z(Ll, Jl);
Ll.prototype.bm = Hl;

function Ml(a) {
    return null != a && a.bm === Hl ? a : Nl(String(String(a)).replace(Ol, Pl), Kl(a))
}
var Nl = function (a) {
        function b() {}
        b.prototype = a.prototype;
        return function (a, e) {
            var c = new b;
            c.content = String(a);
            void 0 !== e && (c.am = e);
            return c
        }
    }(Ll),
    Ql = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

function Pl(a) {
    return Ql[a]
}
var Ol = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Rl() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};

function Sl() {
    var a = Tl,
        b = '<div style="display: none"><span id="Games_name">Jogos do Blockly</span><span id="Games_puzzle">Quebra-Cabe\u00e7a</span><span id="Games_maze">Labirinto</span><span id="Games_bird">P\u00e1ssaro</span><span id="Games_turtle">Tartaruga</span><span id="Games_movie">Filme</span><span id="Games_music">M\u00fasica</span><span id="Games_pondTutor">Tutor de libras</span><span id="Games_pond">Lagoa</span><span id="Games_genetics">Gen\u00e9ticas</span><span id="Games_linesOfCode1">Voc\u00ea solucionou esse n\u00edvel com uma linha de JavaScript:</span><span id="Games_linesOfCode2">Voc\u00ea solucionou esse n\u00edvel com %1 linhas de JavaScript:</span><span id="Games_nextLevel">Voc\u00ea esta preparado para o n\u00edvel %1?</span><span id="Games_finalLevel">Voc\u00ea esta preparado para o pr\u00f3ximo desafio?</span><span id="Games_submitTitle">T\u00edtulo:</span><span id="Games_linkTooltip">Salvar e ligar aos blocos.</span><span id="Games_runTooltip">Rodar o programa que voc\u00ea escreveu.</span><span id="Games_runProgram">Executar o programa</span><span id="Games_resetTooltip">Parar a execu\u00e7\u00e3o do programa e resetar o nivel.</span><span id="Games_resetProgram">Reiniciar</span><span id="Games_help">Ajuda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00f3gica</span><span id="Games_catLoops">La\u00e7os</span><span id="Games_catMath">Matem\u00e1tica</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Cor</span><span id="Games_catVariables">Vari\u00e1veis</span><span id="Games_catProcedures">Fun\u00e7\u00f5es</span><span id="Games_httpRequestError">Houve um problema com a requisi\u00e7\u00e3o.</span><span id="Games_linkAlert">Compartilhe seus blocos com este link:\n\n%1</span><span id="Games_hashError">Desculpe, \'%1\' n\u00e3o corresponde a um programa salvo.</span><span id="Games_xmlError">N\u00e3o foi poss\u00edvel carregar seu arquivo salvo. Talvez ele tenha sido criado com uma vers\u00e3o diferente do Blockly?</span><span id="Games_submitted">Agradecemos pelo programa! Se a nossa equipa gostar dele, este ser\u00e1 publicado na galeria por n\u00f3s dentro de alguns dias.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Quando voc\u00ea come\u00e7ar a editar o JavaScript, voc\u00ea n\u00e3o poder\u00e1 mais voltar a editar os blocos. Voc\u00ea tem certeza?</span><span id="Games_blocks">Blocos</div></div><div style="display: none"><span id="Maze_moveForward">avan\u00e7ar</span><span id="Maze_turnLeft">vire \u00e0 esquerda</span><span id="Maze_turnRight">vire \u00e0 direita</span><span id="Maze_doCode">fa\u00e7a</span><span id="Maze_elseCode">sen\u00e3o</span><span id="Maze_helpIfElse">Blocos se-sen\u00e3o far\u00e3o uma coisa ou outra.</span><span id="Maze_pathAhead">se caminho \u00e0 frente</span><span id="Maze_pathLeft">se caminho \u00e0 esquerda</span><span id="Maze_pathRight">se caminho \u00e0 direita</span><span id="Maze_repeatUntil">repetir at\u00e9</span><span id="Maze_moveForwardTooltip">Move o jogador um espa\u00e7o para frente.</span><span id="Maze_turnTooltip">Vira o jogador 90 graus para esquerda ou direita.</span><span id="Maze_ifTooltip">Se h\u00e1 um caminho na dire\u00e7\u00e3o especificada, \\nent\u00e3o fa\u00e7a algumas a\u00e7\u00f5es. </span><span id="Maze_ifelseTooltip">Se h\u00e1 um caminho na dire\u00e7\u00e3o especificada, \\nent\u00e3o fa\u00e7a o primeiro bloco de a\u00e7\u00f5es. \\nCaso contr\u00e1rio, fa\u00e7a o segundo bloco de \\na\u00e7\u00f5es. </span><span id="Maze_whileTooltip">Repetir as a\u00e7\u00f5es inclusas at\u00e9 que o ponto final \\nseja alcan\u00e7ado. </span><span id="Maze_capacity0">Restam %0 blocos.</span><span id="Maze_capacity1">Resta %1 bloco.</span><span id="Maze_capacity2">Restam %2 blocos.</span></div><table width="100%"><tr><td><h1>' +
        ('<span id="title">' + (vl ? '<a href="index.html?lang=' + Ml(tl) + '">' : '<a href="./?lang=' + Ml(tl) + '">') + "Jogos do Blockly</a> : " + Ml({
            appName: "Labirinto"
        }.appName) + "</span>");
    a = "&skin=" + Ml(a);
    for (var c = " &nbsp; ", e = 1; 11 > e; e++) c += " " + (e == R ? '<span class="level_number level_done" id="level' + Ml(e) + '">' + Ml(e) + "</span>" : 10 == e ? '<a class="level_number" id="level' + Ml(e) + '" href="?lang=' + Ml(tl) + "&level=" + Ml(e) + Ml(a) + '">' + Ml(e) + "</a>" : '<a class="level_dot" id="level' + Ml(e) + '" href="?lang=' + Ml(tl) + "&level=" + Ml(e) +
        Ml(a) + '"></a>');
    return b + c + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salvar e ligar aos blocos."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Faz o jogador executar o que os blocos dizem."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Coloca o jogador de volta ao in\u00edcio do labirinto."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table>' +
        ('<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + (2 < R ? '<block type="maze_forever"></block>' + (6 == R ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < R ? '<block type="maze_if"></block>' + (8 < R ? '<block type="maze_ifElse"></block>' : "") : "") : "") + "</xml>") + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Parab\u00e9ns!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Este n\u00edvel \u00e9 extremamente dif\u00edcil. Voc\u00ea deseja pul\u00e1-lo e ir ao pr\u00f3ximo jogo? Voc\u00ea sempre pode voltar mais tarde.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">OK</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + Rl() + "</div>") + (1 == R ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Empilhe alguns blocos \'avan\u00e7ar\' juntos para me ajudar a alcan\u00e7ar o objetivo.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Neste n\u00edvel, voc\u00ea deve empilhar todos os blocos na \u00e1rea de trabalho branca.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Execute seu programa para ver o que acontece.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            2 == R ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Seu programa n\u00e3o resolveu o labirinto. Aperte \'Reiniciar\' e tente novamente.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : 3 == R || 4 == R ? (3 == R ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Alcance o fim deste caminho usando apenas dois blocos. Use \'repetir\' para executar um bloco mais de uma vez.</td><td><img src="common/help.png"></td></tr></table></div>' :
                "") + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00ea usou todos os blocos para este n\u00edvel. Para criar um novo bloco, voc\u00ea primeiro deve deletar um bloco existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Voc\u00ea pode encaixar mais de um bloco dentro de um bloco \'repetir\'.</td><td><img src="common/help.png"></td></tr></table></div>' :
            5 == R ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Escolha o seu jogador favorito neste menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : 6 == R ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Um bloco \'se\' far\u00e1 alguma coisa apenas se a condi\u00e7\u00e3o for verdadeira. Tente virar \u00e0 esquerda se houver um caminho para a esquerda.</td><td><img src="common/help.png"></td></tr></table></div>' :
            7 == R ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Clique em %1 no bloco \'se\' para mudar sua condi\u00e7\u00e3o.</td><td><img src="common/help.png"></td></tr></table></div>' : 9 == R ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blocos se-sen\u00e3o far\u00e3o uma coisa ou outra.</td><td><img src="common/help.png"></td></tr></table></div>' : 10 == R ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00ea consegue resolver este labirinto complicado? Tente seguir a parede da m\u00e3o esquerda. Apenas para programadores avan\u00e7ados!' +
            Rl() + "</td></tr></table></div>" : "")
};
var Al = "maze";
U.Zk = function () {
    10 > R ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + tl + "&level=" + (R + 1) + "&skin=" + Tl : U.Hi()
};
var Ul = [void 0, Infinity, Infinity, 2, 5, 5, 5, 5, 10, 7, 10][R],
    Vl = [{
        Ch: "maze/pegman.png",
        lo: "maze/tiles_pegman.png",
        Rk: "maze/marker.png",
        background: !1,
        wi: !1,
        $m: "#000",
        oo: ["maze/win.mp3", "maze/win.ogg"],
        dm: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
        Uj: 1
    }, {
        Ch: "maze/astro.png",
        lo: "maze/tiles_astro.png",
        Rk: "maze/marker.png",
        background: "maze/bg_astro.jpg",
        wi: !1,
        $m: "#fff",
        oo: ["maze/win.mp3", "maze/win.ogg"],
        dm: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
        Uj: 2
    }, {
        Ch: "maze/panda.png",
        lo: "maze/tiles_panda.png",
        Rk: "maze/marker.png",
        background: "maze/bg_panda.jpg",
        wi: !1,
        $m: "#000",
        oo: ["maze/win.mp3", "maze/win.ogg"],
        dm: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
        Uj: 3
    }],
    Tl = wl("skin", 0, Vl.length),
    Gl = Vl[Tl],
    Wl = [void 0, [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 1, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 3, 0, 0, 0],
            [0, 0, 2, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 1, 1, 1, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 3, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 2, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 2, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0],
            [0, 1, 1, 3, 0, 1, 0, 0],
            [0, 0, 0, 0,
                0, 1, 0, 0
            ],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 3, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0],
            [0, 2, 1, 1, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [3, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 2, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 3, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0],
            [0, 2, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ][R],
    Xl = Wl.length,
    Yl = Wl[0].length,
    Zl = 50 * Yl,
    $l = 50 * Xl,
    am = 0,
    bm = [],
    cm = {
        10010: [4, 0],
        10001: [3, 3],
        11E3: [0, 1],
        10100: [0, 2],
        11010: [4, 1],
        10101: [3, 2],
        10110: [0, 0],
        10011: [2, 0],
        11001: [4, 2],
        11100: [2, 3],
        11110: [1, 1],
        10111: [1, 0],
        11011: [2, 1],
        11101: [1, 2],
        11111: [2, 2],
        null0: [4, 3],
        null1: [3, 0],
        null2: [3, 1],
        null3: [0, 3],
        null4: [1, 3]
    };

function dm() {
    function a(a, b) {
        return 0 > a || a >= Yl || 0 > b || b >= Xl ? "0" : 0 == Wl[b][a] ? "0" : "1"
    }
    var b = document.getElementById("svgMaze"),
        c = 50 * Math.max(Xl, Yl);
    b.setAttribute("viewBox", "0 0 " + c + " " + c);
    c = document.createElementNS(B.kc, "rect");
    c.setAttribute("width", Zl);
    c.setAttribute("height", $l);
    c.setAttribute("fill", "#F1EEE7");
    c.setAttribute("stroke-width", 1);
    c.setAttribute("stroke", "#CCB");
    b.appendChild(c);
    if (Gl.background) {
        var e = document.createElementNS(B.kc, "image");
        e.setAttributeNS("http://www.w3.org/1999/xlink",
            "xlink:href", Gl.background);
        e.setAttribute("height", $l);
        e.setAttribute("width", Zl);
        e.setAttribute("x", 0);
        e.setAttribute("y", 0);
        b.appendChild(e)
    }
    if (Gl.wi) {
        for (c = 0; c < Xl; c++) {
            var f = document.createElementNS(B.kc, "line");
            f.setAttribute("y1", 50 * c + 25.5);
            f.setAttribute("x2", Zl);
            f.setAttribute("y2", 50 * c + 25.5);
            f.setAttribute("stroke", Gl.wi);
            f.setAttribute("stroke-width", 1);
            b.appendChild(f)
        }
        for (c = 0; c < Yl; c++) f = document.createElementNS(B.kc, "line"), f.setAttribute("x1", 50 * c + 25.5), f.setAttribute("x2", 50 * c + 25.5),
            f.setAttribute("y2", $l), f.setAttribute("stroke", Gl.wi), f.setAttribute("stroke-width", 1), b.appendChild(f)
    }
    for (f = c = 0; f < Xl; f++)
        for (var h = 0; h < Yl; h++) {
            var k = a(h, f) + a(h, f - 1) + a(h + 1, f) + a(h, f + 1) + a(h - 1, f);
            cm[k] || (k = "00000" == k && .3 < Math.random() ? "null0" : "null" + Math.floor(1 + 4 * Math.random()));
            var l = cm[k][0];
            k = cm[k][1];
            var m = document.createElementNS(B.kc, "clipPath");
            m.setAttribute("id", "tileClipPath" + c);
            e = document.createElementNS(B.kc, "rect");
            e.setAttribute("width", 50);
            e.setAttribute("height", 50);
            e.setAttribute("x",
                50 * h);
            e.setAttribute("y", 50 * f);
            m.appendChild(e);
            b.appendChild(m);
            e = document.createElementNS(B.kc, "image");
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Gl.lo);
            e.setAttribute("height", 200);
            e.setAttribute("width", 250);
            e.setAttribute("clip-path", "url(#tileClipPath" + c + ")");
            e.setAttribute("x", 50 * (h - l));
            e.setAttribute("y", 50 * (f - k));
            b.appendChild(e);
            c++
        }
    c = document.createElementNS(B.kc, "image");
    c.setAttribute("id", "finish");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Gl.Rk);
    c.setAttribute("height", 34);
    c.setAttribute("width", 20);
    b.appendChild(c);
    c = document.createElementNS(B.kc, "clipPath");
    c.setAttribute("id", "pegmanClipPath");
    e = document.createElementNS(B.kc, "rect");
    e.setAttribute("id", "clipRect");
    e.setAttribute("width", 49);
    e.setAttribute("height", 52);
    c.appendChild(e);
    b.appendChild(c);
    c = document.createElementNS(B.kc, "image");
    c.setAttribute("id", "pegman");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Gl.Ch);
    c.setAttribute("height", 52);
    c.setAttribute("width",
        1029);
    c.setAttribute("clip-path", "url(#pegmanClipPath)");
    b.appendChild(c)
}

function em(a) {
    if (!(a && a.type == B.i.Ij || Q.lb() || 1 == am || yl(R))) {
        a = -1 != sl.indexOf(tl);
        var b = B.D.pc(B.D.vj(Q)),
            c = I(Q.G.j, !0),
            e = null,
            f = null,
            h = null;
        if (1 == R) 2 > Ke(Q).length ? (e = document.getElementById("dialogHelpStack"), h = {
            width: "370px",
            top: "130px"
        }, h[a ? "right" : "left"] = "215px", f = c[0].N()) : (c = I(Q, !0), 1 < c.length ? (U.Ou("sampleOneTopBlock", '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(";")), e = document.getElementById("dialogHelpOneTopBlock"),
            h = {
                width: "360px",
                top: "120px"
            }, h[a ? "right" : "left"] = "225px", f = c[0].N()) : 0 == am && (e = document.getElementById("dialogHelpRun"), h = {
            width: "360px",
            top: "410px"
        }, h[a ? "right" : "left"] = "400px", f = document.getElementById("runButton")));
        else if (2 == R) 0 != am && "none" == document.getElementById("runButton").style.display && (e = document.getElementById("dialogHelpReset"), h = {
            width: "360px",
            top: "410px"
        }, h[a ? "right" : "left"] = "400px", f = document.getElementById("resetButton"));
        else if (3 == R) - 1 == b.indexOf("maze_forever") && (0 == Ze(Q) ? (e =
            document.getElementById("dialogHelpCapacity"), h = {
                width: "430px",
                top: "310px"
            }, h[a ? "right" : "left"] = "50px", f = document.getElementById("capacityBubble")) : (e = document.getElementById("dialogHelpRepeat"), h = {
            width: "360px",
            top: "360px"
        }, h[a ? "right" : "left"] = "425px", f = c[3].N()));
        else if (4 == R)
            if (0 == Ze(Q) && (-1 == b.indexOf("maze_forever") || 1 < I(Q, !1).length)) e = document.getElementById("dialogHelpCapacity"), h = {
                width: "430px",
                top: "310px"
            }, h[a ? "right" : "left"] = "50px", f = document.getElementById("capacityBubble");
            else {
                b = !0;
                for (var k = Ke(Q), l = 0; l < k.length; l++) {
                    var m = k[l];
                    if ("maze_forever" == m.type) {
                        for (var n = 0; m;) m = m.le(), m = m.length ? m[0] : null, n++;
                        if (2 < n) {
                            b = !1;
                            break
                        }
                    }
                }
                b && (e = document.getElementById("dialogHelpRepeatMany"), h = {
                    width: "360px",
                    top: "360px"
                }, h[a ? "right" : "left"] = "425px", f = c[3].N())
            }
        else if (5 == R) 0 != Tl || fm.Ss || (e = document.getElementById("dialogHelpSkins"), h = {
            width: "360px",
            top: "60px"
        }, h[a ? "left" : "right"] = "20px", f = document.getElementById("pegmanButton"));
        else if (6 == R) - 1 == b.indexOf("maze_if") && (e = document.getElementById("dialogHelpIf"),
            h = {
                width: "360px",
                top: "430px"
            }, h[a ? "right" : "left"] = "425px", f = c[4].N());
        else if (7 == R) {
            if (!em.Nu) {
                k = document.createElement("span");
                k.className = "helpMenuFake";
                l = [S("Maze_pathAhead"), S("Maze_pathLeft"), S("Maze_pathRight")];
                n = B.h.mp(l);
                m = B.h.np(l);
                k.textContent = (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + Mh;
                n = document.getElementById("helpMenuText");
                l = n.textContent;
                n.textContent = "";
                m = l.split(/%\d/);
                for (l = 0; l < m.length; l++) n.appendChild(document.createTextNode(m[l])), l != m.length - 1 && n.appendChild(k.cloneNode(!0));
                em.Nu = !0
            } - 1 == b.indexOf("isPathRight") && (e = document.getElementById("dialogHelpMenu"), h = {
                width: "360px",
                top: "430px"
            }, h[a ? "right" : "left"] = "425px", f = c[4].N())
        } else 9 == R && -1 == b.indexOf("maze_ifElse") && (e = document.getElementById("dialogHelpIfElse"), h = {
            width: "360px",
            top: "305px"
        }, h[a ? "right" : "left"] = "425px", f = c[5].N());
        e ? e.parentNode != document.getElementById("dialog") && T.Bh(e, f, !0, !1, h, null) : T.Nb(!1)
    }
}

function fm(a) {
    var b = document.getElementById("pegmanMenu");
    "block" == b.style.display ? gm(a) : U.Xc(a) || (a = document.getElementById("pegmanButton"), a.classList.add("buttonHover"), b.style.top = a.offsetTop + a.offsetHeight + "px", b.style.left = a.offsetLeft + "px", b.style.display = "block", Cl.qn = B.qb(document.body, "mousedown", null, gm), (b = document.getElementById("dialogHelpSkins")) && "dialogHiddenContent" != b.className && T.Nb(!1), fm.Ss = !0)
}

function gm(a) {
    U.Xc(a) || (document.getElementById("pegmanMenu").style.display = "none", document.getElementById("pegmanButton").classList.remove("buttonHover"), Cl.qn && (B.Aa(Cl.qn), delete Cl.qn))
}

function hm(a) {
    for (var b = 0; b < bm.length; b++) window.clearTimeout(bm[b]);
    bm = [];
    W = Dl.x;
    X = Dl.y;
    a ? (Z = 2, im(!1), bm.push(setTimeout(function () {
        V = 100;
        jm([W, X, 4 * Z - 4]);
        Z++
    }, 5 * V))) : (Z = 1, km(W, X, 4 * Z));
    b = document.getElementById("finish");
    b.setAttribute("x", 50 * (El.x + .5) - b.getAttribute("width") / 2);
    b.setAttribute("y", 50 * (El.y + .6) - b.getAttribute("height"));
    b = document.getElementById("look");
    b.style.display = "none";
    b.parentNode.appendChild(b);
    a = b.getElementsByTagName("path");
    b = 0;
    for (var c; c = a[b]; b++) c.setAttribute("stroke",
        Gl.$m)
}

function lm(a) {
    if (!U.Xc(a))
        if (T.Nb(!1), 1 == R && 1 < I(Q, !1).length && 1 != am && !yl(R)) em();
        else {
            a = document.getElementById("runButton");
            var b = document.getElementById("resetButton");
            b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
            a.style.display = "none";
            b.style.display = "inline";
            hm(!1);
            mm()
        }
}

function nm(a) {
    U.Xc(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", Ii(null), hm(!1), em())
}

function om(a, b) {
    var c = function (a) {
        pm(0, a)
    };
    a.setProperty(b, "moveForward", a.createNativeFunction(c));
    c = function (a) {
        pm(2, a)
    };
    a.setProperty(b, "moveBackward", a.createNativeFunction(c));
    c = function (a) {
        qm(0, a)
    };
    a.setProperty(b, "turnLeft", a.createNativeFunction(c));
    c = function (a) {
        qm(1, a)
    };
    a.setProperty(b, "turnRight", a.createNativeFunction(c));
    c = function (a) {
        return rm(0, a)
    };
    a.setProperty(b, "isPathForward", a.createNativeFunction(c));
    c = function (a) {
        return rm(1, a)
    };
    a.setProperty(b, "isPathRight", a.createNativeFunction(c));
    c = function (a) {
        return rm(2, a)
    };
    a.setProperty(b, "isPathBackward", a.createNativeFunction(c));
    c = function (a) {
        return rm(3, a)
    };
    a.setProperty(b, "isPathLeft", a.createNativeFunction(c));
    a.setProperty(b, "notDone", a.createNativeFunction(function () {
        return W != El.x || X != El.y
    }))
}

function mm() {
    if ("Interpreter" in window) {
        Fl = [];
        B.selected && B.selected.vf();
        var a = mk();
        am = 0;
        a = new Interpreter(a, om);
        try {
            for (var b = 1E4; a.step();)
                if (0 == b--) throw Infinity;
            am = W != El.x || X != El.y ? -1 : 1
        } catch (c) {
            Infinity === c ? am = 2 : !1 === c ? am = -2 : (am = -2, alert(c))
        }
        1 == am ? (V = 100, Fl.push(["finish", null])) : V = 150;
        hm(!1);
        bm.push(setTimeout(sm, 100))
    } else setTimeout(mm, 250)
}

function sm() {
    var a = Fl.shift();
    if (a) {
        U.Dk(a[1]);
        switch (a[0]) {
            case "north":
                jm([W, X - 1, 4 * Z]);
                X--;
                break;
            case "east":
                jm([W + 1, X, 4 * Z]);
                W++;
                break;
            case "south":
                jm([W, X + 1, 4 * Z]);
                X++;
                break;
            case "west":
                jm([W - 1, X, 4 * Z]);
                W--;
                break;
            case "look_north":
                tm(0);
                break;
            case "look_east":
                tm(1);
                break;
            case "look_south":
                tm(2);
                break;
            case "look_west":
                tm(3);
                break;
            case "fail_forward":
                um(!0);
                break;
            case "fail_backward":
                um(!1);
                break;
            case "left":
                jm([W, X, 4 * Z - 4]);
                Z = vm(Z - 1);
                break;
            case "right":
                jm([W, X, 4 * Z + 4]);
                Z = vm(Z + 1);
                break;
            case "finish":
                im(!0),
                    U.Lv(), setTimeout(T.yt, 1E3)
        }
        bm.push(setTimeout(sm, 5 * V))
    } else U.Dk(null), em()
}

function wm(a) {
    if ("dialogHiddenContent" != document.getElementById("dialogDone").className) {
        var b = document.getElementById("pegSpin"),
            c = T.eq(b),
            e = a.clientX - (c.x + c.width / 2 - window.pageXOffset);
        a = Math.atan((a.clientY - (c.y + c.height / 2 - window.pageYOffset)) / e);
        a = a / Math.PI * 180;
        e = Math.round((0 < e ? a + 90 : a + 270) / 360 * 16);
        16 == e && (e = 15);
        b.style.backgroundPosition = 49 * -e + "px 0px"
    }
}

function jm(a) {
    var b = [W, X, 4 * Z],
        c = [(a[0] - b[0]) / 4, (a[1] - b[1]) / 4, (a[2] - b[2]) / 4];
    km(b[0] + c[0], b[1] + c[1], xm(b[2] + c[2]));
    bm.push(setTimeout(function () {
        km(b[0] + 2 * c[0], b[1] + 2 * c[1], xm(b[2] + 2 * c[2]))
    }, V));
    bm.push(setTimeout(function () {
        km(b[0] + 3 * c[0], b[1] + 3 * c[1], xm(b[2] + 3 * c[2]))
    }, 2 * V));
    bm.push(setTimeout(function () {
        km(a[0], a[1], xm(a[2]))
    }, 3 * V))
}

function um(a) {
    var b = 0,
        c = 0;
    switch (Z) {
        case 0:
            c = -1;
            break;
        case 1:
            b = 1;
            break;
        case 2:
            c = 1;
            break;
        case 3:
            b = -1
    }
    a || (b = -b, c = -c);
    if (1 == Gl.Uj) {
        b /= 4;
        c /= 4;
        var e = xm(4 * Z);
        km(W + b, X + c, e);
        Q.mc.play("fail", .5);
        bm.push(setTimeout(function () {
            km(W, X, e)
        }, V));
        bm.push(setTimeout(function () {
            km(W + b, X + c, e);
            Q.mc.play("fail", .5)
        }, 2 * V));
        bm.push(setTimeout(function () {
            km(W, X, e)
        }, 3 * V))
    } else {
        var f = 10 * (Math.random() - .5),
            h = (Math.random() - .5) / 2;
        b += (Math.random() - .5) / 4;
        c += (Math.random() - .5) / 4;
        b /= 8;
        c /= 8;
        var k = 0;
        3 == Gl.Uj && (k = .01);
        bm.push(setTimeout(function () {
            Q.mc.play("fail",
                .5)
        }, 2 * V));
        a = function (a) {
            return function () {
                km(W + b * a, X + c * a, xm(4 * Z + h * a), f * a);
                c += k
            }
        };
        for (var l = 1; 100 > l; l++) bm.push(setTimeout(a(l), V * l / 2))
    }
}

function im(a) {
    var b = xm(4 * Z);
    km(W, X, 16);
    a && Q.mc.play("win", .5);
    V = 150;
    bm.push(setTimeout(function () {
        km(W, X, 18)
    }, V));
    bm.push(setTimeout(function () {
        km(W, X, 16)
    }, 2 * V));
    bm.push(setTimeout(function () {
        km(W, X, b)
    }, 3 * V))
}

function km(a, b, c, e) {
    var f = document.getElementById("pegman");
    f.setAttribute("x", 50 * a - 49 * c + 1);
    f.setAttribute("y", 50 * (b + .5) - 26 - 8);
    e ? f.setAttribute("transform", "rotate(" + e + ", " + (50 * a + 25) + ", " + (50 * b + 25) + ")") : f.setAttribute("transform", "rotate(0, 0, 0)");
    b = document.getElementById("clipRect");
    b.setAttribute("x", 50 * a + 1);
    b.setAttribute("y", f.getAttribute("y"))
}

function tm(a) {
    var b = W,
        c = X;
    switch (a) {
        case 0:
            b += .5;
            break;
        case 1:
            b += 1;
            c += .5;
            break;
        case 2:
            b += .5;
            c += 1;
            break;
        case 3:
            c += .5
    }
    b *= 50;
    c *= 50;
    var e = 90 * a - 45;
    a = document.getElementById("look");
    a.setAttribute("transform", "translate(" + b + ", " + c + ") rotate(" + e + " 0 0) scale(.4)");
    b = a.getElementsByTagName("path");
    a.style.display = "inline";
    for (c = 0; a = b[c]; c++) ym(a, V * c)
}

function ym(a, b) {
    bm.push(setTimeout(function () {
        a.style.display = "inline";
        setTimeout(function () {
            a.style.display = "none"
        }, 2 * V)
    }, b))
}

function vm(a) {
    a = Math.round(a) % 4;
    0 > a && (a += 4);
    return a
}

function xm(a) {
    a = Math.round(a) % 16;
    0 > a && (a += 16);
    return a
}

function pm(a, b) {
    if (!rm(a, null)) throw Fl.push(["fail_" + (a ? "backward" : "forward"), b]), !1;
    switch (vm(Z + a)) {
        case 0:
            X--;
            var c = "north";
            break;
        case 1:
            W++;
            c = "east";
            break;
        case 2:
            X++;
            c = "south";
            break;
        case 3:
            W--, c = "west"
    }
    Fl.push([c, b])
}

function qm(a, b) {
    a ? (Z++, Fl.push(["right", b])) : (Z--, Fl.push(["left", b]));
    Z = vm(Z)
}

function rm(a, b) {
    switch (vm(Z + a)) {
        case 0:
            var c = Wl[X - 1] && Wl[X - 1][W];
            var e = "look_north";
            break;
        case 1:
            c = Wl[X][W + 1];
            e = "look_east";
            break;
        case 2:
            c = Wl[X + 1] && Wl[X + 1][W];
            e = "look_south";
            break;
        case 3:
            c = Wl[X][W - 1], e = "look_west"
    }
    b && Fl.push([e, b]);
    return 0 !== c && void 0 !== c
}
window.addEventListener("load", function () {
    function a() {
        l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
        l.style.left = k ? "10px" : "420px";
        l.style.width = window.innerWidth - 440 + "px"
    }

    function b(a) {
        return function () {
            if (window.sessionStorage) {
                var b = B.D.vj(Q);
                b = B.D.pc(b);
                window.sessionStorage.Zm = b
            }
            window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + tl + "&level=" + R + "&skin=" + a
        }
    }
    document.body.innerHTML = Sl();
    U.$();
    document.querySelector("#pegmanButton>img").style.backgroundImage =
        "url(" + Gl.Ch + ")";
    for (var c = document.getElementById("pegmanMenu"), e = 0; e < Vl.length; e++)
        if (e != Tl) {
            var f = document.createElement("div"),
                h = document.createElement("img");
            h.src = "common/1x1.gif";
            h.style.backgroundImage = "url(" + Vl[e].Ch + ")";
            f.appendChild(h);
            c.appendChild(f);
            B.qb(f, "mousedown", null, b(e))
        }
    B.qb(window, "resize", null, gm);
    c = document.getElementById("pegmanButton");
    B.qb(c, "mousedown", null, fm);
    document.getElementById("pegmanButtonArrow").appendChild(document.createTextNode(Mh));
    var k = -1 != sl.indexOf(tl),
        l = document.getElementById("blockly"),
        m = document.getElementById("visualization");
    window.addEventListener("scroll", function () {
        a(null);
        B.wg(Q)
    });
    window.addEventListener("resize", a);
    a(null);
    c = document.getElementById("toolbox");
    Q = B.Xe("blockly", {
        media: "third-party/blockly/media/",
        maxBlocks: Ul,
        rtl: k,
        toolbox: c,
        trashcan: !0,
        zoom: {
            startScale: 1 + (1 - R / 10) / 3
        }
    });
    Q.mc.load(Gl.oo, "win");
    Q.mc.load(Gl.dm, "fail");
    rk("moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");
    dm();
    U.Zu('<xml>  <block movable="' + (1 != R) + '" type="maze_moveForward" x="70" y="70"></block></xml>', !1);
    for (c = 0; c < Xl; c++)
        for (e = 0; e < Yl; e++) 2 == Wl[c][e] ? Dl = {
            x: e,
            y: c
        } : 3 == Wl[c][e] && (El = {
            x: e,
            y: c
        });
    hm(!0);
    Q.lc(function () {
        var a = Ze(Q),
            b = document.getElementById("capacity");
        if (Infinity == a) b.style.display = "none";
        else {
            b.style.display = "inline";
            b.innerHTML = "";
            a = Number(a);
            var c = document.createElement("span");
            c.className = "capacityNumber";
            c.appendChild(document.createTextNode(a));
            a = (0 == a ? S("Maze_capacity0") : 1 == a ? S("Maze_capacity1") :
                S("Maze_capacity2")).split(/%\d/);
            for (var e = 0; e < a.length; e++) b.appendChild(document.createTextNode(a[e])), e != a.length - 1 && b.appendChild(c.cloneNode(!0))
        }
    });
    document.body.addEventListener("mousemove", wm, !0);
    Bl("runButton", lm);
    Bl("resetButton", nm);
    1 == R && (B.yc *= 2);
    10 == R ? yl(R) || (c = document.getElementById("dialogHelpWallFollow"), T.Bh(c, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, T.Sr), T.Mr(), setTimeout(T.Ro, 3E5)) : setTimeout(function () {
        Q.lc(em);
        em()
    }, 5E3);
    c = document.getElementById("dialogDoneButtons");
    e = document.createElement("img");
    e.id = "pegSpin";
    e.src = "common/1x1.gif";
    e.style.backgroundImage = "url(" + Gl.Ch + ")";
    c.parentNode.insertBefore(e, c);
    setTimeout(U.Ku, 1);
    setTimeout(U.Lu, 1)
});