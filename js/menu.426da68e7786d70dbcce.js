atwpjp([0], {
  10: function(e, t, n) {
    function r(e) {
      return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)
    }

    function o(e) {
      if (2 != e.split("@").length || -1 == e.indexOf(".") || e.length > 256) return !1;
      var t = new RegExp("^[a-z0-9,!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9,!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*.([a-z]{2,})$");
      return -1 != String(e.toLowerCase()).search(t)
    }

    function s(e) {
      var t = new Array;
      e: for (var n = 0; n < e.length; n++) {
        for (var r = 0; r < t.length; r++)
          if (t[r] == e[n]) continue e;
        t[t.length] = e[n]
      }
      return t
    }

    function c(e) {
      var t, n = window,
        r = document,
        a = n.onkeydown || function() {},
        i = function(t) {
          e(t), a(t)
        };
      W.msi ? (t = r.onkeydown, r.onkeydown = function() {
        i(), null != t && t()
      }) : (t = n.onkeydown, n.onkeydown = function(e) {
        i(e), null != t && t()
      })
    }

    function u() {
      return W.ie6 ? ' style="cursor:hand;"' : ""
    }

    function l(e) {
      if (h(e)) {
        var t = I(!0),
          n = D();
        x(e), O(e, t[0] - n), A(e, t[1] - n)
      }
    }

    function d(e, t) {
      e && e.value && e.value.length > t && (e.value = e.value.substring(0, t))
    }

    function f(e, t, n) {
      return e.length > t && (e = e.slice(0, t - 1), n && e[e.length - 1] != n && e.push(n)), e
    }

    function p(e) {
      if (e._e) return !0;
      for (var t in e)
        if ("_e" != t && e.hasOwnProperty(t)) return delete e._e, !1;
      return e._e = 1, !0
    }

    function h(e) {
      return "string" == typeof e && (e = document.getElementById(e)), e
    }

    function m(e) {
      return '<a name="' + e + '"></a>'
    }

    function _(e, t, n, r) {
      return "<div " + (1 === n ? "class" : "id") + '="' + e + '"' + (0 === t ? ' style="display:none"' : "") + (r ? r : "") + ">"
    }

    function g(e, t, n) {
      return "<span " + (t === !0 ? "class" : "id") + '="' + e + '"' + (n ? n : "") + ">"
    }

    function b(e, t, n) {
      return t || (t = ""), '<label for="' + t + '">' + e + ":" + (n ? "  <span>(" + n + ")</span>" : "") + "</label>"
    }

    function v(e, t, n) {
      e = h(e), e && e.style && (e.style[t] = n)
    }

    function w(e, t, n) {
      n || v(e, "display", "none"), t && v(e, "visibility", "hidden")
    }

    function x(e, t, n) {
      n || v(e, "display", "block"), t && v(e, "visibility", "visible")
    }

    function k(e, t) {
      e = h(e), e && (e.className ? -1 == e.className.indexOf(t) && (e.className += " " + t) : e.className = t)
    }

    function y(e, t) {
      if (e = h(e)) {
        if (!e.className) return; - 1 != e.className.indexOf(t) && (e.className = e.className.split(t).join(" "))
      }
    }

    function C(e, t) {
      return e = h(e), e ? e.className ? -1 != e.className.indexOf(t) : !1 : void 0
    }

    function j(e, t) {
      return e = h(e), e && e.parentNode && (e.parentNode.className || "").indexOf(t) > -1
    }

    function O(e, t) {
      v(e, "width", t + "px")
    }

    function A(e, t) {
      v(e, "height", t + "px")
    }

    function T(e) {
      return e = h(e), e ? "block" == e.style.display : !1
    }

    function I(e) {
      var t = K.documentElement,
        n = K.body,
        r = 0,
        a = 0,
        i = 0,
        o = 0;
      return e && (Z.innerHeight && Z.scrollMaxY ? (r = n.scrollWidth, a = Z.innerHeight + Z.scrollMaxY) : n.scrollHeight > n.offsetHeight ? (r = n.scrollWidth, a = n.scrollHeight) : (r = n.offsetWidth, a = n.offsetHeight)), Z.self && Z.self.innerHeight ? (i = Z.self.innerWidth, o = Z.self.innerHeight) : t && t.clientHeight ? (i = t.clientWidth, o = t.clientHeight) : n && (n.clientWidth || n.clientHeight) ? (i = n.clientWidth, o = n.clientHeight) : n && (i = n.clientWidth, o = n.clientHeight), [e !== !0 || i > r ? i : r, e !== !0 || o > a ? o : a]
    }

    function N() {
      var e = K.documentElement,
        t = K.body;
      return "number" == typeof Z.pageYOffset ? [Z.pageXOffset, Z.pageYOffset] : t && (t.scrollLeft || t.scrollTop) ? [t.scrollLeft, t.scrollTop] : e && (e.scrollLeft || e.scrollTop) ? [e.scrollLeft, e.scrollTop] : [0, 0]
    }

    function S(e) {
      var t = document.documentElement,
        n = 0,
        r = 0,
        a = 0,
        i = 0;
      do a = /fixed/.test(e.style.position), i |= a, n += e.offsetTop || 0, r += e.offsetLeft || 0, a && e && (n += e.scrollTop, r += e.scrollLeft), e = e.offsetParent; while (e);
      return !W.ie6 && t.scrollTop && i && (n += t.scrollTop, r += t.scrollLeft), [r, n]
    }

    function D() {
      if (Q) return Q;
      try {
        var e = document,
          t = e.ce("div"),
          n = e.ce("div"),
          r = e.getElementsByTagName("body")[0],
          a = t.style;
        a.width = "50px", a.height = "50px", a.overflow = "hidden", a.position = "absolute", a.top = "-200px", a.left = "-200px", n.style.height = "100px", r.appendChild(t), t.appendChild(n);
        var i = n.innerWidth;
        t.style.overflow = "scroll";
        var o = n.innerWidth;
        t.removeChild(n), r.removeChild(t), Q = i && o ? i - o : 20
      } catch (s) {
        Q = 20
      }
      return Q
    }

    function L(e) {
      e && (e.cancelBubble = !0, e.preventDefault && e.preventDefault())
    }
    var E, z, U = n(59),
      M = n(23),
      R = n(49),
      B = n(1),
      P = n(81),
      F = n(139),
      H = n(20),
      W = n(2),
      $ = n(21),
      q = n(84),
      V = n(9),
      Z = window,
      Y = M();
    _ate.maf = _ate.maf || {}, _ate.maf.fnc = 'onkeypress="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}" onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}" onblur="if(_ate.maf.key==9){_ate.maf.key=null;}else{_ate.maf.key=null;addthis_close();}"';
    var G, Q = W.msi ? 20 : void 0;
    if (!window._atw) {
      var X = "twitter,facebook,email,print,gmail,favorites,google,pinterest_share,gmail,tumblr,mailto,linkedin,blogger,delicious,yahoomail,livejournal,wordpress,aim,meneame,vk",
        J = X,
        K = document;
      ! function() {
        var e, t = document.compatMode,
          n = 1,
          r = window;
        t && ("BackCompat" == t ? n = 2 : "CSS1Compat" == t && (n = 0), W.mode = n, W.msi && (W.mod = n, 2 != n && !W.ie6 || window.addthis_do_ab || (e = r.onscroll ? r.onscroll : function() {}, window.onscroll = function() {
          _atw && _atw.fpf(), e()
        })))
      }(), window._atw = {
          ver: 300,
          show: 1,
          uus: function() {
            _atw.uusf || (_ate.track.cev("uus", 1), _atw.uusf = 1)
          },
          ujq: function() {
            return !W.ie6 && !W.ie7 && !W.ie8 && "function" == typeof window.jQuery
          },
          css: {},
          conf: {},
          data: {
            auth: {},
            contacts: {
              all: {},
              origin: {}
            }
          },
          fe: null,
          plo: [],
          pla: function() {
            for (; _atw.plo.length > 0;) {
              var e = _atw.plo.pop();
              addthis_open(e[1], e[2], e[3], e[4], e[5], e[6])
            }
          },
          gps: function(e) {
            _atw.evar();
            var t = window.addthis_options;
            e(t ? t.replace(",more", "").split(",") : [])
          },
          ibt: function() {
            if (_atw.bti) return _atw.bti;
            var e = (window.addthis_product || "men").substr(0, 3),
              t = "bkm" == e || "bmt" == e || "fct" == e || "fxe" == e;
            return t && (_atw.bti = t), t
          },
          lfy: 0,
          fpf: function() {
            if (W.ie6 || W.msi && 2 == W.mod) {
              var e = document,
                t = e.documentElement,
                n = e.body,
                r = _atw,
                a = h(r.did),
                i = h("at16p"),
                o = t && "undefined" != typeof t.scrollTop,
                s = n && "undefined" != typeof n.scrollTop,
                c = !1,
                u = h("atie6ifh"),
                l = o && s ? Math.max(t.scrollTop, n.scrollTop) : o ? t.scrollTop : n.scrollTop;
              if (l += 10, l != r.lfy) {
                if (r.lfy = l, i && (i.style.top = l + "px"), a && a.className && a.className.indexOf("mmborder") > -1) {
                  var d = 0,
                    f = I();
                  d = i && "" != i.style.marginTop ? i.style.marginTop.split("px").shift() : Math.max(0, f[1] / 2 - 222.5), a.style.top = l - 10 + d + "px", c = !0
                }
                u && W.ie6 && (u.style.top = (c ? 0 : 290) + l + "px")
              }
            }
          },
          rev: "$Rev$",
          lang: function(e, t) {
            var n = W.msi ? navigator.userLanguage : navigator.language,
              r = e || n,
              a = _atw,
              i = a.conf.ui_localize || window.addthis_localize,
              o = window.addthis_translations || [];
            if (i) switch (t) {
              case 1:
                i = i.share_caption;
                break;
              case 2:
                i = i.more;
                break;
              case 3:
                i = i.email_caption;
                break;
              case 4:
                i = i.email;
                break;
              case 5:
                i = i.favorites;
                break;
              case 6:
                i = i.email_instructions;
                break;
              case 7:
                i = i.email_to;
                break;
              case 8:
                i = i.email_from;
                break;
              case 9:
                i = i.email_message;
                break;
              case 10:
                i = i.email_privacy;
                break;
              case 11:
                i = i.email_send;
                break;
              case 12:
                i = i.email_valid;
                break;
              case 13:
                i = i.email_sent;
                break;
              case 14:
                i = i.rss_caption;
                break;
              case 15:
                i = i.rss_instructions;
                break;
              case 16:
                i = i.rss_remember;
                break;
              case 17:
                i = i.done;
                break;
              case 18:
                i = i.get_your_own;
                break;
              case 19:
                i = i.email_address;
                break;
              case 20:
                i = i.optional;
                break;
              case 21:
                i = i.max_characters;
                break;
              case 22:
                i = i.print;
                break;
              case 23:
                i = i.whats_this;
                break;
              case 24:
                i = i.privacy;
                break;
              case 25:
                i = i.use_address_book;
                break;
              case 26:
                i = i.cancel;
                break;
              case 27:
                i = i.sign_in_contacts;
                break;
              case 28:
                i = i.username;
                break;
              case 29:
                i = i.password;
                break;
              case 30:
                i = i.remember_me;
                break;
              case 31:
                i = i.sign_in;
                break;
              case 32:
                i = i.select_address_book;
                break;
              case 33:
                i = i.error_auth;
                break;
              case 34:
                i = i.email_recipients;
                break;
              case 35:
                i = i.find_a_service;
                break;
              case 36:
                i = i.no_services;
                break;
              case 37:
                i = i.share_again;
                break;
              case 38:
                i = i.sign_out;
                break;
              case 39:
                i = i.getting_contacts;
                break;
              case 40:
                i = i.suggest_a_service;
                break;
              case 41:
                i = i.share_successful;
                break;
              case 42:
                i = i.toolbar_promo;
                break;
              case 43:
                i = i.download;
                break;
              case 44:
                i = i.dont_show_these;
                break;
              case 45:
                i = i.sending;
                break;
              case 46:
                i = i.captcha;
                break;
              case 47:
                i = i.settings;
                break;
              case 48:
                i = i.email_error;
                break;
              case 49:
                i = i.captcha_header;
                break;
              case 50:
                i = i.captcha_instr;
                break;
              case 51:
                i = i.captcha_missing;
                break;
              case 52:
                i = i.captcha_error;
                break;
              case 53:
                i = i.signin_customize
            }
            if (i) return i;
            for (var s in o)
              if (o.hasOwnProperty(s))
                for (var c in o[s][0])
                  if (o[s][0].hasOwnProperty(c) && o[s][0][c] === r && o[s].length > t && o[s][t]) return o[s][t];
            return ["Bookmark &amp; Share", "More...", "Email a Friend", "Email", "Favorites", "Multiple emails? Use commas.", "To", "From", "Note", "Privacy Policy: We never share your personal information.", "Send", "Please enter a valid email address.", "Message sent!", "Subscribe to Feed", "Select from these web-based feed readers:", "Please don't ask me again; send me directly to my favorite feed reader.", "Done", "Get your own button!", "email address", "optional", "255 character limit", "Print", "What's this?", "Privacy", "Use Address Book", "Cancel", "Sign in to use your contacts", "Username", "Password", "Remember me", "Sign In", "Select address book", "Error signing in.", "Please limit to 5 recipients.", "Find a service", "No matching services.", "Share again.", "Sign out", "Getting contacts", "Suggest a service", "Share successful!", "Make sharing easier with AddThis for Firefox.", "Download", "Don't show these", "Sending message...", 'We hate spam too! Please <a id="at16ecmc" href="#" onclick="_atw.rse();_atw.cef();return true" target="_blank">click here</a> to confirm you are a real-live person.', "Settings", "Sorry, we couldn't send this message. Please try again in a few minutes.", "Please help us prevent spam.", "Type the two words:", "Please enter a valid response.", "Sorry, your response was incorrect.", "Sign in to customize"][t - 1]
          },
          rss: {
            aol: "AOL",
            bloglines: "Bloglines",
            google: "Google Reader",
            mymsn: "My MSN",
            netvibes: "Netvibes",
            newsisfree: "Newsisfree",
            pageflakes: "Pageflakes",
            yahoo: "Yahoo"
          },
          lsv: {
            de: "misterwong"
          },
          emb: {
            igoogle: "iGoogle",
            dashboard: "Dashboard",
            windows: "Windows"
          },
          loc: (window.addthis_services_loc || X).replace(W.xp || W.mob ? /,mailto,/ : /,,/, ","),
          list: H($.list),
          ibm: function() {
            var e = _atw,
              t = (e.conf || {}).product || window.addthis_product || "";
            return C(e.did, "mmborder") || t.indexOf("bkm") > -1
          },
          ics: function(e, t) {
            var n, r, a, i, o = _atw;
            if (o.custom_list) return o.custom_list[e];
            if (t.services_custom) {
              o.custom_list = {}, n = t.services_custom;
              for (a in n) r = n[a], o.custom_list[r.code] = r, e === r.code && (i = r);
              return i
            }
            return !1
          },
          sag: function() {
            _ate.as(_atw.ibm() ? "bkmore" : "more")
          },
          hkd: function(e) {
            "undefined" == typeof e && (e = window.event);
            var t = _atw;
            e && 27 == e.keyCode && (t.clb(), L(e))
          },
          filt: function(e, t, n, r, a, i) {
            var o, s, c = 0,
              u = (_atw, r || "ati_"),
              l = a || "at16nms",
              d = i || "div",
              f = "" != e ? e.replace(/\W+/g, "").replace(/ /g, "").toLowerCase() : "";
            w(l), n && x(n);
            for (o in t)
              if ("string" == typeof t[o]) {
                var p = h(u + o.replace("@", "_")),
                  m = o.toLowerCase(),
                  _ = t[o].toLowerCase(),
                  g = 0;
                (m.indexOf(e) > -1 || m.indexOf(f) > -1 || _.indexOf(f) > -1 || _.indexOf(e) > -1) && (g = 1, c++), !s && p && (s = p.parentNode), g ? x(p) : w(p)
              }
            if (c && s) {
              c = 0;
              var b = s.getElementsByTagName(d);
              for (o in b) b[o].style && "block" == b[o].style.display && c++
            }
            0 === c && (x(l), n && w(n)), "" == e.replace(/ /g, "") && n && w(n)
          },
          div: null,
          xwa: function() {
            null !== _atw.cwa && clearTimeout(_atw.cwa)
          },
          cwa: null,
          xhwa: function() {
            null !== _atw.hwa && clearTimeout(_atw.hwa)
          },
          hwa: null,
          ost: !1,
          get: function(e) {
            return "string" == typeof e && (e = document.getElementById(e)), e
          },
          did: "at15s",
          rhv: function(e) {
            e && e.className && (e.className = e.className.replace("athov", ""))
          },
          shv: function(e) {
            e && -1 == e.className.indexOf("athov") && (e.className += " athov")
          },
          addImg: function(e) {
            if (e = e.getElementsByTagName("div")[0], e && !(e.getElementsByTagName("img").length > 0)) {
              a = _ate;
              var t = document.createElement("img");
              t.align = "left", t.src = "//s7.addthis.com/images/60x60_at_" + (a.bro.ffx ? "firefox_toolbar.jpg" : a.bro.msi ? "ie_toolbar.gif" : a.bro.chr ? "ch_extension.gif" : "sf_extension.gif"), e.insertBefore(t, e.firstChild)
            }
          },
          eok: function(e) {
            var t = _atw,
              n = _atw.ver >= 200,
              r = h("at_" + (n ? "success" : "send")),
              a = n ? h("at_promo") : r;
            if (w("at_sending"), n) e ? (t.err(t.lang(t.conf.ui_language, 48), null, "at_error"), x("at_email", 1)) : addthis_do_ab ? (t.ppr = !0, t.cle(), a && !_ate.dbm && (_atw.addImg(a), x(a)), x(r), w("at_email")) : (a && !_ate.dbm && (_atw.addImg(a), x(a)), x(r), w("at_captcha"), w("at_email"), t.cle());
            else {
              var i = t.lang(Y, 13); - 1 == i.indexOf("&") && (r.value = i)
            }
            t.cwa = setTimeout(_atw.clo, 1200), _ate.gat && _ate.gat("email", null, t.conf, t.share)
          },
          roe: function(e) {
            var t = _atw;
            w("at_sending"), t.cle(), _atw.ver >= 200 && t.err(t.lang(t.conf.ui_language, 46).replace('href="#"', 'href="' + e + '"'), null, "at_error")
          },
          ert: function(e, t, n) {
            n || (n = "at_error");
            var r = _atw,
              a = h(n);
            a.innerHTML = e || r.lang(r.conf.ui_language, 33), x(a), t && (t.style.borderColor = "#dd0000")
          },
          err: function(e, t, n) {
            var r = _atw,
              a = _atw.ver >= 200;
            null === r.fe && t && (r.fe = t, t.focus(), a ? (t.style.outlineStyle = "none", t.style.outlineWidth = "0px") : alert(e)), a && setTimeout(function() {
              r.ert(e, t, n)
            }, 50)
          },
          mck: 0,
          cef: function() {
            var e = _atw,
              t = _ate,
              n = e.mck < 2 || e.ibm();
            return addthis_do_ab ? n ? t.com("cef") : t.com("cle") : n ? e.clb() : t.as("more"), !1
          },
          cle: function() {
            var e = _atw,
              t = _atw.ver >= 200 ? "" : "15",
              n = h("at_msg" + t),
              r = h("at_to" + t);
            n && (n.value = addthis_email_note || e.conf.ui_email_note || ""), r && (r.value = e.conf.ui_email_to || ""), w("at16pit")
          },
          rse: function(e) {
            var t = _atw,
              n = _atw.ver,
              r = "at_from" + (200 > n ? "15" : ""),
              a = "at_to" + (200 > n ? "15" : ""),
              i = h(a),
              o = "at_" + (200 > n ? "send" : "success"),
              s = t.lang(t.conf.ui_language, 11),
              c = function(e) {
                e = h(e), e && (e.style.borderColor = e.style.outlineWidth = e.style.outlineStyle = "")
              };
            200 > n && -1 == s.indexOf("&") && (h(o).value = s), i && ", " == i.value.substr(i.value.length - 2) && (i.value = i.value.substr(0, i.value.length - 2)), c("at_ab_user"), c("at_ab_pass"), w("at_ab_error"), w("at_error"), w("at16eatdr"), w("at_captcha"), e || (c(r), c(a), w(o), w("at_promo"), x("at_email", 1))
          },
          lml: d,
          clo: function() {
            var e = _atw,
              t = h(e.did),
              n = _atw.ver,
              r = document.gn("embed");
            if (t && (200 > n && w("at_email15"), w(t), W.ie6 && w("atie6cmifh"), w("at_pspromo", 1)), r && e.conf && e.conf.ui_hide_embed)
              for (i = 0; i < r.length; i++) r[i].addthis_hidden && (r[i].style.visibility = "visible");
            return e.sta && "compact" == e.sta && (_ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: e.sta
            }), e.sta = null), !1
          },
          hash: window.location.hash,
          psp: function() {
            if ((W.msi || W.ffx || W.chr || W.saf || _atc.sjp) && !W.ipa) {
              var e = (window, window._atab, _atw);
              if (!e.addthis_popup_mode) {
                if (e.mck < 1) {
                  var t = h("at15ptc"),
                    n = h(e.did),
                    r = h("at15s_brand");
                  if (w("at_hover"), !(_ate.sau || {}).gat) {
                    var a = (document.getElementById("at_testpromo_bg") || {}).style;
                    a && (a.background = "url(//s7.addthis.com/images/btn_" + (W.saf ? "saf_dl120.gif" : W.chr ? "ch_dl120.gif" : W.msi ? "ie_dl129x51.jpg" : "ff_dl120.jpg") + ")", W.saf ? (a.width = "120px", a.height = "47px") : W.msi && (a.marginBottom = "-12px"))
                  }
                  x("at_pspromo", 1), x(n), l("at16lb"), _atw.ver < 300 && (k("at15s_head", "at15s_head_success"), t && (t.innerHTML = e.lang(addthis_language, 41)), r && !e.conf.ui_use_close_control && (r.innerHTML = '<a href="#" onclick="return _atw.clb();" tabindex="9000"  >X</a>'))
                } else _atw.ver >= 200 && e.clb();
                W.msi && "BackCompat" == document.compatMode ? w("atic_auth", !0, !0) : w("atic_auth"), y("at15s", "at-menu-auth")
              }
            }
          },
          clb: function() {
            var e = window,
              t = (window._atab, _atw);
            return t.mck = 0, t.addthis_popup_mode ? e.close() : e.addthis_do_ab ? _ate.com("clb") : (w("at_complete"), w("at16lb"), w("at_email"), w("at_promo"), w("at_pspromo", 1), w("at16p"), w("at15s"), y("at15s_head", "at15s_head_success"), w("atie6ifh"), w("atie6cmifh"), w("at15s"), (_ate.maf || {}).pre && _ate.maf.pre.focus()), t.sta && "compact" !== t.sta && (_ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: t.sta
            }), t.sta = null), !1
          },
          sho: function(e, t) {
            var n = (_ate, _atw),
              r = _atw.ver,
              a = (n.conf.ui_language.split("-").shift(), r >= 200 || "bkemail" == e || n.ibm()),
              i = "at16lb",
              o = "at_hover",
              s = "at_feed",
              c = "at_share",
              u = "at16psf",
              d = "at_email" + (a ? "" : 15),
              f = h("at16pit"),
              p = h(_atw.did),
              m = h("atie6ifh"),
              _ = h("at16p"),
              g = h("at_to"),
              b = h("at" + (a ? 16 : 15) + "ptc"),
              v = !1,
              C = !1;
            if (w(c), w(s), w(u, 1), w(d, 1), w("at_copylink", 1), w("at16abifc"), w("at_error"), w(o), a && (w(p), w(f, 1), w("at_promo"), w("at_success"), w("at_pspromo", 1), y("at15s_head", "at15s_head_success")), "feed" == e) w(c), k(s, "atused"), x(s), b.innerHTML = addthis_caption_feed, v = !0;
            else if ("share" == e || "" === e || "bkmore" == e) "bkmore" == e ? (v = C = !0, k(n.did, "mmborder")) : (e = "share", p.style.display = "", y(n.did, "mmborder")), w(_), W.ie6 && (w(m), x("atie6cmifh")), n.conf.ui_use_vertical_menu && w("at15s_head"), x(o), W.ipa && l("at16lb"), b && (b.innerHTML = addthis_caption_share);
            else {
              if (_atw.mck++, "link" == e) {
                b && (b.innerHTML = "Permalink");
                var j = document.createElement("iframe");
                j.src = t, j.frameBorder = "0", j.height = "353px", j.width = "295px", h("at_copylink").innerHTML = "", h("at_copylink").appendChild(j), x("at_copylink", 1)
              } else if ("more" !== e) {
                if ("bkemail" == e || n.ibm() ? (k(n.did, "mmborder"), w("at_use_addr"), w(f, 1), C = !0) : a && x("at_use_addr"), -1 == e.indexOf("email") && (e = "email"), n.rse(), r >= 200 && (x("at16abifc"), window._atab && (_atab.plda(), n.ppr && (n.ppr = !1, n.conf.ui_use_addressbook && (_atab.opp(), _atab.opp())))), x(d, 1), r >= 200 && (w(c), C || x(f, 1), window._atab)) {
                  var T = _atab.ipo();
                  f && (f.innerHTML = "&" + (T ? "l" : "r") + "aquo;")
                }
                b.innerHTML = addthis_caption_email, "emailab" == e && _atab.opp()
              } else w("at_captcha"), x(c), x(u, 1), b && (b.innerHTML = addthis_caption_share);
              v = !0
            }
            if (v && r >= 200 || C) {
              var N = "bkmore" == e || "link" == e;
              if (x(i), addthis_do_ab) _.style.marginTop = 0, _.style.marginLeft = 0, _.style.top = 0, _.style.left = 0;
              else {
                var S = I(!0),
                  L = I(),
                  E = D();
                O(i, S[0] - E), A(i, S[1] - E), !N || a ? _.style.marginTop = Math.max(0, L[1] / 2 - 222.5) + "px" : p.style.display = ""
              }
              if (!N && (W.ie6 && x(m), x(_), window.addthis_do_ab || n.fpf(), "more" == e)) {
                O(_, 300), O("at16abifc", 300);
                var z = h("at16filt");
                z && "none" != z.style.display && z.focus()
              }
              "email" == e && g && g.focus()
            }
            if (n.show-- > 0 && !_atc.abf) {
              var U, M = n.conf.services_compact_org || "",
                R = M.split(",").length,
                P = 0,
                H = 0,
                $ = window.addthis_ssh;
              $ && n.csl && ($ = $.split(n.csl).shift().replace(/,$/, "")), $ || n.crs || !M || M === addthis_options_default ? $ && $ !== n.crs && (P = window.addthis_ssh) : H = R, U = P ? P.split(",") : [], B(U, function(e, t) {
                F.loadIcon(t, 32, "color")
              }), _ate.ed.fire("addthis-internal.compact", window.addthis || {}, {
                svc: e,
                cmo: H,
                cso: P,
                crs: n.crs,
                pco: n.conf.product || addthis_product
              })
            }
          },
          dut: function(e, t) {
            var n = document,
              r = (e || "").toLowerCase(),
              a = (t || "").toLowerCase();
            return addthis_url = e, addthis_title = t, ("" === r || "[url]" === r || "<data:post.url/>" === r) && (addthis_url = location.href), ("" === a || "[title]" === a || "<data:post.title/>" === a) && (addthis_title = n.title), [addthis_url, addthis_title]
          },
          menu: function(e, t, n, r) {
            var a = _ate,
              i = _atw,
              o = document,
              l = (n || i.share.url || "").toLowerCase();
            (r || i.share.title || "").toLowerCase(), V();
            if ("feed" == t && l.length && (i.share.url = "feed://" + (n || i.share.url)), i.ost) {
              var d = h("at15s_brand"),
                p = h("at16_brand"),
                x = i.conf.ui_cobrand,
                O = h("at15ptc"),
                A = i.conf.ui_header_color,
                T = i.conf.ui_header_background;
              d && (d.innerHTML = x), p && (p.innerHTML = x), O && (O.innerHTML = window.addthis_caption_share), v("at15s_head", "backgroundColor", T), v("at16pt", "backgroundColor", T), v("at16ptx", "color", A), v("at16pt", "color", A), v("at16ptc", "color", A), v("at15s_brand", "color", A), v("at16ptc", "color", A), i.conf.ui_use_close_control ? (k("at15s_brand", "at15s_brandx"), y("at15sptx", "at15dn")) : (y("at15s_brand", "at15s_brandx"), k("at15sptx", "at15dn"))
            } else {
              var D = window;
              i.conf.product || D.addthis_product;
              if (c(_atw.hkd), !_atc.ostm) {
                if (!D.addthis_product || 0 !== D.addthis_product.indexOf("f"))
                  for (le in D.addthis_conf) _atc[le] = D.addthis_conf[le];
                for (le in D.addthis_config) "product" != le && "services_compact" != le && (i.conf[le] = D.addthis_config[le]);
                _atc.ostm = 1
              }
              i.ti = 1;
              var L = "</span>",
                U = "</div>",
                M = "</a>",
                B = '<div style="clear:both;">' + U,
                F = i.conf.ui_language || "en",
                H = function(e, t, n, r) {
                  return '<input id="' + e + '" ' + (addthis_do_ab ? 'class="abif" ' : W.ffx && 2 == W.mode ? 'class="atfxmode2"' : "") + 'name="' + e + '" type="text" tabindex="' + _atw.ti++ + '" ' + (n ? 'value="' + n + '" ' : "") + 'size="' + (r ? r : 30) + '"' + t + "/>"
                },
                $ = function(e) {
                  return 'onfocus="_atw.rse();' + (e || "") + '"'
                },
                Z = window.addthis_feed || (i.share.url ? i.share.url.indexOf("feed://") > -1 : !1) || i.hf,
                Y = i.conf.ui_header_background,
                G = "" != Y ? ' style="background-color:' + Y + '"' : "",
                Q = i.conf.ui_header_color,
                X = (window.addthis_ssh ? addthis_ssh.split(",") : [], "" != Q ? ' style="color:' + Q + '"' : ""),
                J = window.addthis_caption_share,
                K = (i.conf.services_exclude || "").replace(/\s/g, "").replace(/\*/, ""),
                ee = i.conf.product || window.addthis_product,
                te = _ate.cookie.rck("_atfrom"),
                ne = {},
                re = q,
                ae = '<div id="at16lb"' + (W.msi ? ' style="filter:alpha(opacity=0.01);"' : "") + ' onclick="return _atw.clb()">' + U;
              if (K)
                for (var ie = K.split(","), oe = 0; oe < ie.length; oe++) ne[ie[oe]] = 1;
              _atw.excluded = ne;
              var se = (i.conf.services_compact || addthis_options_default).replace(/\s/g, "").replace(/\*/, ""),
                ce = _ate.gvl(F);
              if (ce && i.lsv[ce])
                for (var ue = i.lsv[ce].split(","), le = 0; le < ue.length; le++) {
                  var de = ue[le],
                    fe = new RegExp("(?:^|,)(" + de + ")(?:$|,)"),
                    pe = se.search(fe);
                  i.list[de + "_" + ce] = i.list[de], delete i.list[de], pe > -1 && (se = (0 == pe ? "" : se.substr(0, pe) + ",") + de + "_" + ce + (0 == pe ? "," : "") + se.substr(pe + de.length + 1))
                }
              "" === V() && -1 == ee.indexOf("ffext") && -1 == ee.indexOf("fxe") && (se = se.replace(/^email(?:,)|,email/g, "")), se = se.split(",");
              for (var le = 0; le < se.length; le++)
                if (le < se.length - 1 && "more" == se[le]) {
                  var he = se.splice(le, 1);
                  se.push(he[0]);
                  break
                }
              se = s(se), ae += [W.ie6 ? '<iframe id="atie6ifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe><iframe id="atie6cmifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe>' : "", _("at16pcc"), _("at16p", !Z && _atw.ver >= 200 ? 1 : 0), m("atpro"), m("atclb"), m("atopp"), m("atcle"), m("atcef"), _("at16pib"), _("at16pi")].join(""), ae += !addthis_do_ab && i.conf.ui_use_addressbook ? '<a id="at16pit" href="#" onclick="if (window._atab) return _atab.opp()" style="display:none">&raquo;' + M : "", ae += _("at16pp", 0) + U, ae += _("at16pm", 1, 0, 2 == W.mod ? 'style="width:299px"' : 0 == W.mod ? 'style="width:300px"' : ""), ae += _("at16pt", 1, 0, G), J == i.lang(F, 1) && "feed" == t && (J = i.lang(F, 14)), ae += '<h4><span id="at16ptc"' + X + ">" + J + L + '</h4><span id="at16_brand"' + X + ">" + i.conf.ui_cobrand + L, ae += '<a id="at16ptx" href="#" tabindex="9000" onclick="return _atw.clb()"' + X + '>X<span class="at_a11y">Close AddThis Expanded Menu</span></a>', ae += U, ae += _("at16pc", 1, "at_default");
              var me = i.rss;
              ae += _("at_feed", 0), ae += '<span style="display:block">' + i.lang(F, 15) + L + "<br/>";
              var le = 1;
              for (var _e in me) ne[_e] || "string" == typeof me[_e] && (ae += "<div" + u() + (le % 2 === 0 ? ' class="at_litem"' : "") + (" onclick=\"return addthis_sendto('" + _e + "');\">") + '<a class="fbtn at_baa ' + _e + '">' + me[_e] + "</a>" + U, le++);
              ae += U, ae += _("at_share"), ae += _("at16psf"), ae += '<label for="at16filt" class="at_a11y">Sharing Service Filter</label>', ae += H("at16filt", "maxlength=\"50\" onkeyup=\"_atw.filt(this.value,_atw.list,false,'ati_','at16nms','a');_atw.uus()\"" + (W.msi ? "" : ' style="padding:2px 0 0"'), ""), ae += U, ae += _("at16ps", 1, 0, 'class="addthis_32x32_style" ' + (2 == W.mod ? 'style="height:292px"' : "")), ae += _("at16nms", 0) + (i.lang(F, 36) || "") + U, me = i.list;
              var ge = i.conf.services_expanded || [],
                be = 0;
              if (i.conf.services_expanded) ge = ge.replace(/ /g, "").split(",");
              else
                for (var _e in me) "string" != typeof _e || ne[_e] || ge.push(_e);
              for (ge.sort(function(e, t) {
                  if ("string" == typeof me[e] && "string" == typeof me[t]) {
                    var n = (me[e] || "").toLowerCase(),
                      r = (me[t] || "").toLowerCase();
                    return (n > r ? 1 : n == r ? 0 : -1) || 0
                  }
                  return 0
                }), le = 0; le < ge.length; le++) {
                var _e = ge[le],
                  ve = i.css[_e] ? ' style="' + i.css[_e] + '"' : "";
                if ("string" == typeof me[_e] && !ne[_e]) {
                  var we = R.isTop(_e),
                    xe = P ? "at4-icon aticon-" + _e : we ? "at16nc at16t_" + _e + " at16t" : "at15t at15t_" + _e;
                  W.ie9 && "link" == _e || "more" === _e || "email" === _e && "" === V() && -1 == ee.indexOf("ffext") && -1 == ee.indexOf("fxe") || (be++, ae += "<a " + u() + ' id="ati_' + _e + '" class="at_item"' + ve + 'tabindex="' + _atw.ti++ + '" ' + (a.bro.ffx && 2 != W.mode ? "" : ' onmouseover="_atw.shv(this)" onmouseout="_atw.rhv(this)"   ') + ("favorites" == _e && a.bro.opr ? ' rel="sidebar" href="' + l + '"' : " onclick=\"return addthis_sendto('" + _e + "');\" href=\"javascript:return addthis_sendto('" + _e + "');\"  >") + g(xe, !0, ve) + me[_e] + L + M)
                }
              }
              if (ae += U, ae += B + U, ae += _("at_complete", 0), ae += '<button onclick="_atw.clb()">' + i.lang(F, 17) + "</button>", ae += U, ae += _("at_success", 0) + i.lang(F, 13) + ' <a href="#" onclick="' + (addthis_do_ab ? "_ate.com('cle');_atw.rse()" : "_atw.get('at16filt').value='';_atw.filt('',_atw.list);_atw.sag()") + ';return false">' + _atw.lang(F, 37) + "</a>" + U, ae += _("at_sending", 0) + '<div class="at16c"><div class="at_redloading"></div><br/>' + i.lang(F, 45) + U + U, ae += _("at_error", 0, null, 'class="at_error"') + U, ae += _("at_copylink", 0), ae += U, ae += _("at_captcha", 0) + U, (a.bro.ffx || a.bro.msi || a.bro.chr || a.bro.saf) && (!F || F.indexOf("en") > -1))
                if (ae += _("at_promo"), (a.sau || {}).gat) {
                  var ke = "?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPE" + (a.bro.ffx ? "FF" : a.bro.msi ? "IE" : a.bro.chr ? "CR" : "SF") + "_DL";
                  ae += '<div style="float:left; text-align:center; margin-top:40px; width:100%"><span style="font-size:20px; color:#4c4c4c; font-weight:normal; line-height:24px;">Know what your users are<br>sharing, in real time.</span>', ae += '<a href="http://www.addthis.com/analytics' + ke + '" target="_blank"><img src="//s7.addthis.com/static/t00/ata_72.png" style="border:none; display:block;margin:25px 0 0 ' + (a.bro.msi && "BackCompat" == document.compatMode ? "" : "60") + 'px;" /></a>', ae += U + U
                } else a.bro.ffx ? (ae += '<div class="at-promo-content">', ae += "<h4>AddThis for Firefox</h4>", ae += "<span>" + _atw.lang(F, 42) + L, ae += '<div class="at-promo-btn"><a href="http://' + _atd + 'landing/?to=ffext&utm_source=el&utm_medium=link&utm_content=ATTool_orig&utm_campaign=AT_tooldl" target="_blank">' + _atw.lang(F, 43) + "</a>") : a.bro.chr ? (ae += '<div class="at-promo-content">', ae += "<h4>AddThis for Chrome</h4>", ae += "<span>" + _atw.lang(F, 42).replace("Firefox", "Chrome") + L, ae += '<div class="at-promo-btn at-promo-btm-ch"><a href="http://' + _atd + 'landing?to=chrome&utm_source=Promo&utm_medium=img&utm_content=ATCHPromo_orig&utm_campaign=AT_CHLP" target="_blank">' + _atw.lang(F, 43) + "</a>") : a.bro.saf ? (ae += '<div class="at-promo-content">', ae += "<h4>AddThis for Safari</h4>", ae += "<span>" + _atw.lang(F, 42).replace("Firefox", "Safari") + L, ae += '<div class="at-promo-btn at-promo-btm-ch"><a href="http://' + _atd + 'tools/safari?utm_source=Promo&utm_medium=img&utm_content=ATSFPromo_orig&utm_campaign=AT_SFLP" target="_blank">' + _atw.lang(F, 43) + "</a>") : (ae += '<div class="at-promo-content">', ae += "<h4>AddThis for Internet Explorer</h4>", ae += "<span>" + _atw.lang(F, 42).replace("Firefox", "Internet Explorer") + L, ae += '<div class="at-promo-btn at-promo-btm-ie"><a href="http://' + _atd + 'tools/internet-explorer?utm_source=Promo&utm_medium=img&utm_content=ATIEPromo_orig&utm_campaign=AT_IELP" target="_blank">' + _atw.lang(F, 43) + "</a>"), ae += a.bro.ff2 || W.ie6 || W.ie7 ? "" : '<br/><br/><br/><a target="_blank" href="http://' + _atd + 'pages/toolbar-preferences" style="padding-top:10px;font-size:10px">' + _atw.lang(F, 44) + "</a>", ae += U + U + U;
              else ae += _("at_promo", 0) + U;
              ae += _("at_email", 0), i.conf.ui_use_addressbook && (ae += '<div id="at_head" class="tmsg"><a id="at_use_addr" href="#" onclick="' + (addthis_do_ab ? "_ate.com('opp');_atab.abtd()" : "_atab.opp()") + ';return false">' + i.lang(F, 25) + "</a>" + U), ae += '<form onsubmit="addthis_send();return false;">', ae += b(i.lang(F, 7), "at_to", i.lang(F, 19)), ae += '<textarea id="at_to" ' + (addthis_do_ab ? 'class="abif" ' : W.ffx && 2 == W.mode ? 'class="atfxmode2"' : "") + 'cols="30" rows="4" ' + (W.ffx ? "" : 'style="resize:none"') + " onkey" + (a.bro.ffx ? "press" : "down") + "=\"if (window._atab) _atab.htkd(this, event)\" onkeyup=\"_atw.filt(this.value.replace(/[;\\n]/g,',').replace(/ /g,'').split(',').pop(), _atw.data.contacts.all, 'at16eatdr', '_ataddr', null, 'a')\" tabindex=\"" + i.ti++ + '" ' + $() + " >" + (addthis_do_ab ? addthis_eto : i.conf.ui_email_to || "") + "</textarea>", ae += _("at16eatdr", 0, 0, addthis_do_ab ? ' class="abif"' : "") + U, ae += b(i.lang(F, 8), "at_from", i.lang(F, 19)) + H("at_from", $(), "", 0), ae += b(i.lang(F, 9), "at_msg", i.lang(F, 20)), ae += '<textarea id="at_msg" style="resize:none" ' + (addthis_do_ab ? 'class="abif" ' : W.ffx && 2 == W.mode ? 'class="atfxmode2"' : "") + 'cols="30" rows="4" tabindex="' + i.ti++ + '" onkeyup="return _atw.lml(this,255);" ' + $() + '">' + (addthis_do_ab ? addthis_enote : i.conf.ui_email_note) + "</textarea>", ae += '<div id="ateml"><small>' + i.lang(F, 21) + "</small>" + U;
              var ye = i.lang(F, 10),
                Ce = ye.indexOf(":"),
                je = "";
              Ce > 0 && (je = ye.substr(Ce + 1), ye = ye.substr(0, Ce)), ae += "<div>", ae += '<input id="at16sub" class="atbtn" type="submit" tabindex="' + i.ti++ + '" value="' + i.lang(F, 11) + '" onclick="return addthis_send();"/>', ae += '<input class="atbtn atrse" type="reset" tabindex="' + i.ti++ + '" value="' + i.lang(F, 26) + '" onclick="return _atw.cef()"/>', ae += U, ae += "</form>", ae += '<div id="at16meo">', ae += "<span>" + _atw.list.more.replace("...", "") + ":" + L;
              var Oe = {
                gmail: 1,
                yahoomail: 1,
                hotmail: 1,
                aolmail: 1,
                mailto: !W.xp
              };
              for (var _e in Oe) Oe[_e] && (ae += '<a class="at15t at15t_' + _e + '" tabindex="' + i.ti++ + '" href="#" onclick="_ate.as(\'' + _e + '\'); return false" alt="' + _atw.list[_e] + '"></a>');
              ae += U, ae += U, ae += U;
              var Ae = !W.ipa && i.conf.ui_use_vertical_menu;
              ae += (addthis_do_ab ? "" : E) + U + U + U + U + U, Ae && (z = z.replace('id="', 'class="atm-f' + (W.msi && W.mod ? " atm-f-iemode2" : "") + '" id="')), ae += '<div id="' + i.did + '" class="' + (W.ie6 ? i.did + (Ae ? "atm" : "") + "ie6" : W.msi && W.mod && !Ae ? "atiemode2" : "") + (Ae ? " atm" : "") + '"onmouseover="_atw.xwa()" onmouseout="if (this.className.indexOf(\'border\')==-1) addthis_close()" style="z-index:1000000;position:' + (_atw.ver >= 250 && window.addthis && addthis.bar && addthis.bar.selects && (!W.msi || "BackCompat" != document.compatMode) ? "fixed;" : "absolute;") + 'display:none;visibility:hidden;top:0px;left:0px">', ae += Ae ? '<div class="atm-i">' : '<div id="' + i.did + '_inner">', ae += _("at15s_head", 1, 0, G) + '<span id="at15ptc"' + X + ">" + addthis_caption_share + "</span><span " + (i.conf.ui_use_close_control ? 'class="at15s_brandx" ' : "") + 'id="at15s_brand"' + X + ">" + i.conf.ui_cobrand + '</span><a id="at15sptx" ' + (i.conf.ui_use_close_control ? "" : 'class="at15dn" ') + 'href="#" onclick="return _atw.clb()"' + X + ' onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null" tabindex="9000" >X</a>' + U;
              var Te = a.bro.msi,
                Ie = a.bro.chr,
                Ne = a.bro.saf,
                Se = Te ? "Internet&nbsp;Explorer" : Ie ? "Chrome" : Ne ? "Safari" : "Firefox",
                De = function(e) {
                  return "http://" + _atd + (Ne ? "tools/safari?" : Te ? "tools/internet-explorer?" : "landing?" + (Ie ? "to=chrome&amp;" : "to=ffext&amp;")) + "utm_source=ps&amp;utm_medium=" + (e ? e : "link") + "&amp;utm_content=AT" + (Te ? "IE" : Ie ? "CH" : Ne ? "SF" : "FF") + "&amp;utm_campaign=ATSP" + (Te ? "I" : Ie ? "C" : Ne ? "S" : "F") + "4_DL"
                };
              if (ae += _("at_pspromo", 0), (a.sau || {}).gat) {
                var ke = "?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPS" + (a.bro.ffx ? "FF" : a.bro.msi ? "IE" : a.bro.chr ? "CR" : "SF") + "_DL";
                _atw.ver < 300 ? (ae += '<div style="float:left; text-align:center; margin-top:0px; width:235px"><span style="font-size:18px; color:#4c4c4c; font-weight:normal; line-height:24px;">Know what your users are<br>sharing, in real time.</span>', ae += '<a href="http://www.addthis.com/analytics' + ke + '" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 ' + (a.bro.msi && "BackCompat" == document.compatMode ? "0" : "44") + 'px;" /></a>', ae += U) : (ae += '<div style="float:left; text-align:center; margin:20px 0 0 -1px; width:150px"><span style="font-size:12px; color:#4c4c4c; font-weight:normal; line-height:16px;">Know what your users are<br>sharing, in real time.</span>', ae += '<a href="http://www.addthis.com/analytics' + ke + '" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 0" /></a>', ae += U)
              } else ae += '<div style="position:absolute;display:block;border:0">    <div id="at_testpromo" style="display:block"><div class="at-promo-single" align="center">    <h4>' + i.lang(F, 42).replace("Firefox", Se) + '</h4>    <div align="center"><a target="_blank" href="' + De("img") + '">      <div id="at_testpromo_bg" class="at-promo-single-dl-' + (Ne ? "sa" : Ie ? "ch" : Te ? "ie" : "ff") + '" border="0" alt="' + _atw.lang(F, 43) + '"></div></a>' + (a.bro.ie6 || a.bro.ie7 || a.bro.ff2 ? "" : (_atw.ver < 300 ? "<br>" : "") + '<a target="_blank" href="http://' + _atd + 'pages/toolbar-preferences" style="' + (Te && 2 == a.bro.mod && Ae ? "position:absolute;left:35px;top:125px" : "padding-top:10px") + ';font-size:10px">' + _atw.lang(F, 44) + "</a>") + "</div></div>    </div></div>";
              if (ae += U, _atw.ver < 200) {
                var Le = '<div class="at15e_row"',
                  Ee = Le + '><label for="">',
                  ze = '</label><input class="at15ti" type="text" size="20" maxlength="80" value=" email address" onfocus="this.style.color=\'#000000\';if (this.value==\' email address\') this.value =\'\';" ';
                ae += _("at_email15", 0), ae += Ee + i.lang(F, 7) + ":" + ze + ' id="at_to15" value="' + (i.conf.ui_email_to || "") + '"/>' + U, ae += Ee + i.lang(F, 8) + ":" + ze + ' id="at_from15" value="' + (te || i.conf.ui_email_from || "") + '"/>' + U, ae += Le + ' style="height:60px;"><label for="at_msg15">' + i.lang(F, 9) + ':</label><textarea id="at_msg15" name="" cols="30" rows="3" style="width:150px;">' + i.conf.ui_email_note + "</textarea>" + U,
                  ae += Ee + '&nbsp;</label><input id="at_send" onclick="return addthis_send()" type="button" value="' + i.lang(F, 11) + '"/>' + U, ae += B + U
              }
              var Ue = "ja,fr,he,it,af,ga,el,tl,ro,ru,ms,mk,az,zh,sq,te,be,ta,uk,ml,eu,se,su,aze,gre,tra,fre,gdh,jpn,mac,mak,msa,may,ron,rum,rus,tam,tgl,ukr,zho",
                Me = (window.addthis_ssh || "").split(","),
                Re = {},
                Ae = !W.ipa && i.conf.ui_use_vertical_menu;
              ae += _("at_hover", 0, 0, Ae ? 'class="atm-s"' : "");
              for (var le = 0; le < Me.length; le++) Re[Me[le]] = 1;
              se = W.ipa ? f(se, 7, "more") : Ae ? f(se, 8, "more") : f(se, 12, "more");
              for (var le = 0; le < se.length; le++) {
                var _e = se[le],
                  me = i.list,
                  Be = F.split("-").shift(),
                  Pe = _e.split("_").shift(),
                  Fe = (_e.indexOf("facebook_") > -1 ? _e.split("_").pop() : 0, Re[Pe] || Re[_e]),
                  ve = ' style="' + (i.css[_e] ? i.css[_e] : "") + (P && re ? " background-color:" + re(_e) + ";)" : "") + '"';
                if (_e in me) {
                  if (ne[_e]) continue;
                  if ("string" != typeof me[_e]) continue;
                  var He = R.isTop(_e);
                  if (xe = P ? "at4-icon aticon-" + _e + " at-size-16" : He ? "at16nc at16t_" + _e + " at16t" : "at15t at15t_" + _e, "email" !== _e || "" !== V() || ee.indexOf("ffext") > -1 || ee.indexOf("fxe") > -1) {
                    if (Ae) ae += '<a id="atic_' + _e + '" href="#" ' + _ate.maf.fnc + " onclick=\"return addthis_sendto('" + _e + '\');"><span class="' + xe + " " + (Fe ? " at_bold" : "") + '"' + ve + ">" + me[_e] + ("more" === _e && -1 == Ue.indexOf(Be) ? " (" + be + ")" : "") + L + "</a>";
                    else {
                      if ("link" == _e && W.ie9) continue;
                      ae += "<a" + u() + ' id="atic_' + _e + '" tabindex="' + le + '2" ' + (W.ie6 || W.msi && 2 == W.mode ? "" : ' href="#" ') + ' class="at_item ' + (W.ipa ? "addthis_16x16_style " : "") + (a.bro.mod && a.bro.msi && !Ae ? " atiemode2" : "") + (Fe ? " at_bold" : "") + " at_col" + le % 2 + '"' + ve + (a.bro.ffx && 2 != a.bro.mode || a.bro.ipa ? "" : ' onmouseover="_atw.shv(this)" onmouseout="_atw.rhv(this)" ') + " onclick=\"return addthis_sendto('" + _e + '\');"><span class="' + xe + '"' + ve + ">" + me[_e] + ("more" === _e && -1 == Ue.indexOf(Be) ? " (" + be + ")" : "") + L + M
                    }
                    0 == le && (_ate.maf.firstCompact = "atic_" + _e)
                  }
                }
              }
              if (ae += B + U, ae += z.replace("mm", "hm"), ae += U, i.div = o.ce("div"), i.div.id = "at20mc", i.div.innerHTML = ae, W.ipa && (i.div.className = "ipad"), o.body.appendChild(i.div), i.div.style.zIndex = 1e6, i.div = null, _atw.ver < 200) {
                var le = h("at_from15");
                le && (le.value = te || i.conf.ui_email_from || "")
              } else {
                var le = h("at_from");
                le && (le.value = addthis_do_ab ? addthis_efrom || te || "" : te || i.conf.ui_email_from || "")
              }
            }
            i.xwa(), i.dut(n, r), _atw.ver < 200 && (t && "share" != t ? "email" == t && (e = i.elt || e) : i.elt = e);
            var We, $e, qe, Ve = 16;
            e.getElementsByTagName && (We = e.getElementsByTagName("img"), $e = e.getElementsByTagName("span")), qe = _atw.ver > 200 && j(e, "addthis_counter") && $e && $e[0], We && We[0] ? (e = We[0], Ve = 0) : qe || _atw.ver > 200 && C(e, "addthis_button") && $e && $e[0] ? (e = $e[0], Ve = 0) : (a.bro.saf || a.bro.chr) && e.childNodes && 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType && (Ve = 0);
            var Ze = offLeft = void 0;
            if (Ze = "undefined" != typeof(window.addthis_config || {}).ui_offset_top ? (window.addthis_config || {}).ui_offset_top || 0 : i.conf.ui_offset_top || 0, "undefined" != typeof(window.addthis_config || {}).ui_offset_left ? offLeft = (window.addthis_config || {}).ui_offset_left || 0 : offLeft = i.conf.ui_offset_left || 0, i.sho(t, n), (_atw.ver < 200 || "email" != t && "feed" != t && "more" != t) && "bkemail" != t && ("email" != t || !C(i.did, "mmborder"))) {
              var Ye = (S(e), void 0 != offLeft ? offLeft : i.conf.ui_offset_left),
                Ge = void 0 != Ze ? Ze : i.conf.ui_offset_top,
                Qe = 0,
                Xe = 0,
                Je = I(),
                Ke = N(),
                et = h(i.did) || {
                  style: 0
                },
                tt = et.style,
                nt = W.ie6 ? h("atie6cmifh").style : null,
                rt = i.conf.ui_hover_direction || 0,
                at = i.conf.ui_compact_direction || -1,
                it = "bkmore" == t || C(i.did, "mmborder"),
                ot = -1 != at && 1 & at,
                st = -1 != at && 2 & at,
                ct = -1 != at && 4 & at,
                ut = -1 != at && 8 & at;
              if (0 === tt) return i.ost = !0, !1;
              tt.display = "";
              var lt = et.clientWidth,
                dt = et.clientHeight;
              if (it) {
                var ft = h("at16p");
                Qe = Je[0] / 2 - lt / 2, Xe = ft && "" != ft.style.marginTop ? ft.style.marginTop : Math.max(0, Je[1] / 2 - 222.5) + "px", Xe = Xe.split("px").shift() - 8
              } else {
                var pt = e.getBoundingClientRect(),
                  ht = window.scrollY || document.documentElement.scrollTop,
                  mt = window.scrollX || document.documentElement.scrollLeft,
                  _t = window.innerHeight || document.documentElement.clientHeight;
                (0 === pt.height || 0 === pt.width) && (pt = e.parentElement.getBoundingClientRect());
                var gt = pt.top > .66 * _t,
                  bt = -1 !== rt && !ut,
                  vt = gt && bt;
                if (ct || 1 === rt || vt) {
                  var wt = et.getBoundingClientRect(),
                    xt = wt.bottom - wt.top;
                  Qe = mt + pt.left, Xe = ht + pt.top - xt
                } else Qe = mt + pt.left, Xe = ht + pt.bottom;
                var kt = Qe - Ke[0] + lt + 20 > Je[0];
                (ot || !st && kt) && (Qe = Qe - lt + (e.clientWidth || 50))
              }
              if ((qe && ((e.parentNode.parentNode.parentNode.parentNode || {}).className || "").indexOf("bar_vertical") > -1 || !qe && ((e.parentNode.parentNode.parentNode || {}).className || "").indexOf("bar_vertical") > -1) && (Xe += Ke[1] + (qe ? 16 : 0)), i.conf.ui_hide_embed) {
                var yt = Qe + lt,
                  Ct = Xe + dt,
                  jt = o.gn("embed"),
                  Ot = 0,
                  At = 0,
                  Tt = 0;
                for (le = 0; le < jt.length; le++) Ot = S(jt[le]), At = Ot[0], Tt = Ot[1], Qe < At + jt[le].clientWidth && Xe < Tt + jt[le].clientHeight && yt > At && Ct > Tt && "hidden" != jt[le].style.visibility && (jt[le].addthis_hidden = !0, jt[le].style.visibility = "hidden")
              }
              y("at15s_head", "at15s_head_success"), w("at_pspromo", 1);
              var It = _ate.util.parent(e, ".addthis_bar"),
                Nt = _ate.util.parent(e, ".addthis_toolbox"),
                St = function(e) {
                  return window.getComputedStyle && null != e && e != document ? "fixed" === window.getComputedStyle(e).position : !1
                };
              Qe += parseInt(Ye, 10), Xe += parseInt(Ge, 10), tt.left = Qe + "px", St(Nt) || St(It) ? tt.top = Xe + Ke[1] + "px" : tt.top = Xe + "px", tt.visibility = "visible", nt && (nt.left = tt.left, nt.top = tt.top), it && i.fpf()
            }
            if (_atw.ver >= 300) {
              _ate.maf.key = "9", _ate.maf && _ate.maf.sib && (_ate.maf.sib.tabIndex = "1000");
              try {
                h("at_hover").getElementsByTagName("a")[0].focus()
              } catch (jt) {}
            }
            i.ost = !0
          },
          nuc: function(e, t, n) {
            w("at_error"), _atw.hsr(n, "nucaptcha")
          },
          hsr: function(e, t) {
            var n, r = "",
              a = _atw.share && _atw.share.email_vars ? _atw.share.email_vars : addthis_share && addthis_share.email_vars ? addthis_share.email_vars : {};
            if (_atw.ver < 200 || !window.postMessage) return void _atw.roe(e);
            if (w("at_sending"), w("at_email"), (n = h("at16recapframe")) || (h("at_captcha").innerHTML = "", n = document.createElement("iframe"), n.id = "at16recapframe", n.scrolling = "no", n.width = "298px", n.height = "315px", n.frameBorder = "0", h("at_captcha").appendChild(n)), a && "object" == typeof a)
              for (var i in a) "string" == typeof a[i] && (r += ("" === r ? "" : "&") + _euc(i) + "=" + _euc(a[i]));
            !addthis_share.email_template && _atw.share.email_template && (addthis_share.email_template = _atw.share.email_template);
            var o = _euc(_ate.share.geneurl(addthis_share, {
              from: h("at_from").value,
              to: h("at_to").value,
              vars: r,
              note: h("at_msg").value
            }, this.mck > 1 ? {
              product: "max-" + _atw.ver
            } : null));
            W.msi && (t = "recaptcha"), n.src = _atr + ("nucaptcha" == t ? "nucaptcha.html" : "recaptcha.html") + "#lng=" + _euc(M()) + "&tellfriend=" + _euc(o), x("at_captcha"), window._atab && (_atab.ipo() && _atab.opp(!0), w("at16pit", 1), window.addthis_do_ab && _ate.com("hip"))
          },
          cpmh: function(e) {
            if (e && e.origin && ".addthis.com" == e.origin.substr(e.origin.length - 12)) {
              var t = h("at16recapframe");
              switch (e.data) {
                case "reclb":
                  t && t.parentNode.removeChild(t), _atw.clb();
                  break;
                case "rerse":
                  w("at_error");
                  break;
                case "ncr":
                  _atw.err(_atw.lang(_atw.conf.ui_language, 51), h("at16recapframe")), _atw.cle();
                  break;
                case "cpe":
                  _atw.err(_atw.lang(_atw.conf.ui_language, 52), h("at16recapframe")), _atw.cle();
                  break;
                case "eok":
                  t && t.parentNode.removeChild(t), _atw.eok()
              }
            }
          },
          evar: function() {
            try {
              var e, t, n, a = _atw,
                i = function(e, t, n) {
                  return n || (n = window), (void 0 === n[e] || "" === n[e]) && (n[e] = t), n[e]
                },
                o = "addthis_",
                s = _ate,
                c = "services_",
                u = o + "logo",
                l = o + "header",
                d = o + "caption_",
                f = s.gvl((_atw.conf || {}).ui_language || s.lng()),
                h = V(),
                m = _atw.loc,
                _ = a.conf && !p(a.conf) ? a.conf : window.addthis_config || {},
                g = a.share || window.addthis_share || {},
                b = _.services_custom,
                v = _atw.ibt();
              if ((s.bro.xp || s.bro.mob) && delete a.list.mailto, _atw.ver < 200 && delete a.list.link, window[o + "language"] = f, i("ui_use_vertical_menu", _atw.ver >= 300, _), n = !W.ipa && _.ui_use_vertical_menu, (n || "en" != f || !window.addthis_ssh && !(b || []).length) && n && (m = _atw.loc = J), i(o + "localize", 0), i(o + "feed", ""), i(o + "wpl"), a.hf = addthis_feed.length > 0, i(d + "email", a.lang(f, 3)), i(o + "caption", a.lang(f, 1)), i(o + "use_addressbook", !1), i(o + "do_ab", !1), i(o + "product", "men-" + _atw.ver), _atw.ver >= 300 && (a.list.settings = a.lang(f, 47) + "..."), a.list.more = a.lang(f, 2), a.list.email = a.lang(f, 4), a.list.favorites = a.lang(f, 5), a.list.print = a.lang(f, 22), i(o + "popup", !1), i(o + "popup_mode", !1), i(o + "url", ""), i(o + "append_data", !h || "addthis" == h.toLowerCase()), i(o + "brand", ""), i(o + "title", ""), i(o + "content", ""), i(o + "email_note", _atc.enote ? _atc.enote : ""), i(o + "email_from", ""), i(o + "email_to", ""), i(o + "use_personalization", !0), i(o + "options_default", m.split(",").slice(0, 11).join(",") + ",more"), i(o + "options_rank", m.split(",").join(",")), i(o + "options", addthis_options_default), i(o + "exclude", ""), i(o + "ssh", ""), i(u, ""), i(u + "_background", ""), i(u + "_color", ""), i(l + "_background", ""), i(l + "_color", ""), i(d + "share", addthis_caption), i(d + "feed", a.lang(f, 14)), i(o + "hide_embed", !1), i(o + "share", {}), W.ipa && (addthis_exclude && -1 == addthis_exclude.indexOf("print") && (addthis_exclude += ","), addthis_exclude += "print"), i("type", "link", g), i("url", addthis_url, g), i("title", addthis_title, g), i("description", "", g), i("swfurl", "", g), i("modules", {}, g), i("feed", addthis_feed, g), i("screenshot", "", g), i("author", "", g), i("email_template", window.addthis_email_template || "", g), i("email_vars", window.addthis_email_vars ? "string" == typeof addthis_email_vars ? _ate.util.fromKV(addthis_email_vars) : addthis_email_vars : {}, g), i("ui_cobrand", addthis_brand, _), i("ui_508_compliant", !1, _), i("ui_window_panes", !1, _), i("ui_close_control", !_.ui_cobrand && (_.ui_click || _atw.ver >= 200), _), i("ui_click", _.ui_window_panes, _), i("ui_email_note", addthis_email_note, _), i("ui_email_from", _ate.cookie.rck("_atfrom") || addthis_email_from || "", _), i("ui_email_to", addthis_email_to, _), i("ui_hover_direction", 0, _), i("ui_compact_direction", -1, _), i("ui_delay", window.addthis_hover_delay, _), i("ui_language", addthis_language, _), i("ui_hide_embed", addthis_hide_embed, _), i("ui_localize", addthis_localize, _), i("ui_header_color", addthis_header_color, _), i("ui_header_background", addthis_header_background, _), i("ui_icons", !0, _), i("ui_use_embeddable_services_beta", !1, _), i("ui_use_embeddable_services", _.ui_use_embeddable_services_beta, _), i("ui_use_mailto", !1, _), i("ui_use_addressbook", addthis_use_addressbook || v, _), i("ui_use_close_control", _.ui_close_control, _), i("ui_open_windows", !1, _), i("ui_show_promo", !0, _), i("data_ga_tracker", null, _), i("data_ga_property", null, _), i("data_omniture_collector", "", _), i("pubid", window.addthis_pub, _), i("username", _.pubid, _), i("product", addthis_product, _), i("data_track_clickback", addthis_append_data || _.data_track_linkback || _ate.track.ctp(_.product, _), _), i(c + "custom", [], _), i(c + "localize", f, _), i(c + "expanded", "", _), i(c + "compact_org", _.services_compact, _), i(c + "exclude", addthis_exclude, _), _.services_exclude = _.services_exclude.replace(/\s/g, ""), i(c + "exclude_natural", _.services_exclude, _), _atw.ver >= 300 && a.conf.parentServices && B(a.conf.parentServices, function(e) {
                  _.services_exclude += (_.services_exclude.length > 1 ? "," : "") + e
                }), 0 == _.ui_show_promo && (_ate.dbm = 1), _.ui_use_embeddable_services || g.swfurl || g.swfurl_secure || g.iframeurl || (!g.url || g.url == window.location.href) && (_ate.share.links.iframe_src || _ate.share.links.video_src))
                for (t in a.emb) a.list[t] = a.emb[t];
              else
                for (t in a.emb) g.modules[t] && (a.list[t] = a.emb[t]);
              if ((!W.win || W.xp) && delete a.list.windows, W.osx || delete a.list.dashboard, b)
                for (a.custom_list = a.custom_list || {}, b instanceof Array || (b = [b]), e = 0; e < b.length; e++) {
                  var w = b[e];
                  w.name && w.icon && w.url && r(w.url) && (w.code = w.url = w.url.replace(/ /g, ""), 0 === w.code.indexOf("http") && (w.code = w.code.substr(0 === w.code.indexOf("https") ? 8 : 7)), w.code = w.code.split("?").shift().split("/").shift().toLowerCase(), a.custom_list[w.code] = w, a.list[w.code] = w.name, a.css[w.code] = "background-image:url(" + w.icon + "); background-repeat: no-repeat;background-position: top left;background-color: transparent !important;", b[e] = w)
                } else b = [];
              var x = _ate.share.services.init(_) || {};
              if (a.crs = x.crs, a.csl = x.csl, _.services_compact = (x.conf || {}).services_compact, i(c + "compact", addthis_options, _), a.conf = _, a.share = g, _.ui_use_addressbook && !_atw.mab && (_atw.mab = _ate.ajs("menu-ab.js"), _atc.abf)) return !0
            } catch (s) {
              window.console && console.log("evar", s)
            }
            return !1
          }
        },
        function() {
          var e = n(320).getMixin({
              campaign: "AddThis compact menu"
            }),
            t = n(82).isBrandingReduced();
          z = _("at15pf") + e.generateBranding(t).element.innerHTML + "</div>", E = z.replace(/15/g, "16").replace(/compact/, "expanded")
        }(), _ate.menu = {
          open: function(e, t, n, r) {
            t = t || {}, _atw.conf = _atw.conf || {}, _ate = _ate || {};
            var a, i, o = _ate && _ate.menu && _ate.menu._menuConfig,
              s = _ate && _ate.menu && _ate.menu._menuShare,
              c = t.ui_language || _atw.conf.ui_language || M(),
              u = function(e) {
                return K.getElementById(e)
              },
              l = function(e, t) {
                u("at3winheader").getElementsByTagName("span")[0].className = "at-logo-bg-orange at3winheadersvc at300bs at15nc at15t_" + (e || "more"), u("at3winheader").getElementsByTagName("h3")[0].innerHTML = t || _atw.lang(c, 91)
              },
              d = function(e) {
                var t = u("at3wincontent").childNodes;
                for (var n in t) 3 != t[n].nodeType && ((t[n].style || {}).display = "none");
                if ("undefined" != typeof e) {
                  var r = u(e);
                  r && ((r.style || {}).display = "block")
                }
              };
            if (_ate.xf.listen(), _ate.menu._menuShare = H(addthis_share), _ate.menu._menuConfig = H(addthis_config), _ate.menu._previous = e, _ate.util.mrg(_ate.menu._menuConfig, t), "undefined" != typeof n && (_ate.menu._menuShare.url = n.url || _ate.menu._menuShare.url, _ate.menu._menuShare.title = n.title || _ate.menu._menuShare.title, _ate.menu._menuShare.url_transforms = n.url_transforms || _ate.menu._menuShare.url_transforms || {}), _ate.menu._menuConfig.ui_pane = (t || {}).ui_pane || null, _ate.menu._menuConfig.ui_lightbox = (t || {}).ui_lightbox || (addthis_config || {}).ui_lightbox || "light", _ate.menu._menuConfig.image_service = (t || {}).image_service || null, _ate.menu._menuConfig.image_container = (t || {}).image_container || null, _ate.menu._menuConfig.image_include = (t || {}).image_include || null, _ate.menu._menuConfig.image_exclude = (t || {}).image_exclude || null, _ate.menu._menuConfig.ui_language = c, _ate.menu._menuConfig.ui_508_compliant) {
              switch (_ate.menu._menuConfig.ui_pane) {
                case null:
                  a = _ate.share.genurl("bookmark", 0, _ate.menu._menuShare, _ate.menu._menuConfig)
              }
              if (a) return a += window.location.href.search(/(\#|\?)/) > -1 ? "&" : "?", i = _ate.share.onw(a, "_blank", ""), void _ate.menu.close()
            }
            if (_ate.share.inBm() && "email" == _ate.menu._menuConfig.ui_pane ? window.location.href = _ate.share.genurl("email", 0, _ate.menu._menuShare, _ate.menu._menuConfig) + (window.location.href.search(/(\#|\?)/) > -1 ? "&" : "?") + "at3frame=true" : _ate.share.inBm() && "link" == _ate.menu._menuConfig.ui_pane && (window.location.href = _atr + "static/link.html#url=" + _euc(_euc(_ate.menu._menuShare.url)) + "&ats=" + _euc(U(_ate.menu._menuShare)) + "&atc=" + _euc(U(U(_ate.menu._menuConfig)))), !u("at3win")) {
              var f = document.createElement("div");
              f.innerHTML = E;
              var p = f.childNodes[0],
                h = _ate.util.json2html({
                  "div#at3win": {
                    "div.at3winwrapper": [{
                      "div#at3winheader": [{
                        "span.at3winheadersvc": [{
                          "span.at4-icon.aticon-compact": ""
                        }]
                      }, {
                        "h3#at3winheadermsg": _atw.lang(c, 91)
                      }, {
                        "div#at3winssi": ""
                      }, {
                        "a#at3winheaderclose": {
                          href: "#",
                          title: "Close"
                        }
                      }]
                    }, {
                      "div#at3wincontent": ""
                    }, {
                      "div.ab-branding-footer": p
                    }]
                  }
                }),
                m = _ate.util.json2html({
                  "div#at3lb": ""
                });
              if (m.onclick = function() {
                  return addthis.menu.close(), !1
                }, W.msi && "BackCompat" == document.compatMode) {
                var _ = "";
                switch ((_ate.menu._menuConfig.ui_lightbox || "").toLowerCase()) {
                  case "dark":
                    _ = "url('//s7.addthis.com/static/t00/bg-at3lb-black.png') repeat";
                    break;
                  case "none":
                    _ = "none";
                    break;
                  default:
                    _ = "url('//s7.addthis.com/static/t00/bg-at3lb-white.png') repeat"
                }
                m.style.position = "absolute", m.style.background = _, m.style.height = K.body.scrollHeight, m.style.width = K.body.scrollWidth
              }
              K.body.appendChild(m), K.body.appendChild(h), u("at3winheaderclose").onclick = function() {
                return _ate.menu.close(), !1
              }
            }
            switch ((_ate.menu._menuConfig.ui_lightbox || "").toLowerCase()) {
              case "dark":
                u("at3lb").className = "at3lbdark";
                break;
              case "none":
                u("at3lb").className = "at3lbnone";
                break;
              default:
                u("at3lb").className = "at3lblight"
            }
            switch (_ate.menu._menuConfig.ui_pane) {
              case "email":
                l("email", _atw.lang(c, 4)), u("at3winemail") && u("at3wincontent").removeChild(u("at3winemail")), _ate.xf.upm || (_ate.menu._menuShare.url = _euc(_ate.menu._menuShare.url), _ate.menu._menuShare.title = _euc(_ate.menu._menuShare.title));
                var g = _ate.util.json2html({
                  "div#at3winemail": [{
                    iframe: {
                      src: _ate.share.genurl("email", 0, _ate.menu._menuShare, _ate.menu._menuConfig) + "&at3frame=true",
                      height: "100%",
                      width: "100%",
                      frameBorder: "0"
                    }
                  }]
                });
                u("at3wincontent").appendChild(g), d("at3winemail");
                break;
              case "link":
                l("link", "Copy"), u("at3wincopy") && u("at3wincontent").removeChild(u("at3wincopy"));
                var g = _ate.util.json2html({
                  "div#at3wincopy": [{
                    iframe: {
                      src: _atr + "static/link.html#url=" + _euc(_euc(_ate.menu._menuShare.url)) + "&ats=" + _euc(U(_ate.menu._menuShare)) + "&atc=" + _euc(U(U(_ate.menu._menuConfig))),
                      height: "100%",
                      width: "100%",
                      frameBorder: "0"
                    }
                  }]
                });
                u("at3wincontent").appendChild(g), d("at3wincopy");
                break;
              default:
                _ate.menu._menuConfig;
                if (l("more", "Share"), !_ate.xf.upm && u("at3winshare") && u("at3wincontent").removeChild(u("at3winshare")), u("at3winshare")) _ate.menu._message(u("at3winshare-iframe").contentWindow, e), _ate.xf.send(u("at3winshare-iframe").contentWindow, "addthis.expanded.share.ui_pane", _ate.menu._menuConfig);
                else {
                  if (_ate.xf.upm) var b = _atc.rsrcs.bookmark + "#ats=" + _euc(U(_ate.menu._menuShare)) + "&atc=" + _euc(U(_ate.menu._menuConfig));
                  else {
                    _ate.menu._menuShare.url = _euc(_ate.menu._menuShare.url), _ate.menu._menuShare.title = _euc(_ate.menu._menuShare.title);
                    var b = _atc.rsrcs.bookmark + "#ats=" + _euc(U(_ate.menu._menuShare)) + "&atc=" + _euc(U(_ate.menu._menuConfig))
                  }
                  var g = _ate.util.json2html({
                    "div#at3winshare": [{
                      iframe: {
                        src: b,
                        height: "100%",
                        width: "100%",
                        frameBorder: "0",
                        id: "at3winshare-iframe"
                      }
                    }]
                  });
                  _ate.menu._menuShare.url = _duc(_ate.menu._menuShare.url), u("at3wincontent").appendChild(g), _ate.xf.upm && (_ate.menu._regListeners.bookmark ? _ate.menu._message(null) : (_ate.menu._regListeners.bookmark = !0, addthis.addEventListener("addthis.expanded.bookmark", function(t) {
                    _ate.menu._message(u("at3winshare-iframe").contentWindow, e), _ate.xf.send(u("at3winshare-iframe").contentWindow, "addthis.expanded.share.ui_pane", _ate.menu._menuConfig)
                  }, !1)))
                }
                d("at3winshare"), _ate.xf.upm && u("at3winshare-iframe") && _ate.xf.send(u("at3winshare-iframe").contentWindow, "addthis.expanded.reopen", {})
            }
            if (1 != r)
              if (_atw.ujq() && 0 != _ate.menu._menuConfig.ui_animate) setTimeout(function() {
                addthis.menu._animating || (addthis.menu._animating = !0, jQuery("#at3win").css("margin-top", "250px"), jQuery("#at3win").animate({
                  opacity: 1,
                  marginTop: "0px"
                }, "medium", "swing", function() {
                  addthis.menu._animating = !1, addthis.menu._displayed = !0
                }), jQuery("#at3win,#at3lb").fadeIn({
                  queue: !1
                }));
                try {
                  u("at3winshare-iframe").focus()
                } catch (e) {}
              }, 10), addthis.menu._displayed = !1;
              else {
                u("at3lb").style.display = "block", u("at3win").style.display = "block", addthis.menu._displayed = !0;
                try {
                  u("at3winshare-iframe").focus()
                } catch (v) {}
              }
            window.onkeypress = function(e) {
              e = e || window.event;
              var t = e.keyCode ? e.keyCode : e.which;
              t && 27 == t && addthis.menu._displayed && _ate.menu.close()
            }, _ate.menu._regListeners.header || (_ate.menu._regListeners.header = !0, addthis.addEventListener("addthis.expanded.header", function(e) {
              l(e.target.svc, e.target.msg)
            }, !1)), _ate.menu._regListeners.pane || (_ate.menu._regListeners.pane = !0, addthis.addEventListener("addthis.expanded.pane", function(e) {
              _ate.menu._menuConfig.ui_pane = e.target.pane, _ate.menu.open(_ate.maf && _ate.maf.sib, _ate.menu._menuConfig, _ate.menu._menuShare, !0)
            }, !1)), _ate.menu._regListeners.close || (_ate.menu._regListeners.close = !0, addthis.addEventListener("addthis.expanded.close", function(e) {
              _ate.menu.close()
            })), _ate.menu._regListeners.print || (_ate.menu._regListeners.print = !0, addthis.addEventListener("addthis.expanded.print", function(e) {
              _ate.menu.close(), setTimeout(function() {
                Z.print()
              }, 500)
            })), G = n && n.service && "email" === n.service || o && "email" === o.ui_pane ? "email" : "expanded", _ate.ed.fire("addthis.menu.open", window.addthis || {}, {
              pane: G,
              url: t && t.url || s && s.url || "",
              title: t && t.title || s && s.title || "",
              conf: t,
              share: n
            })
          },
          close: function() {
            if (_atw.ujq() && 0 != _ate.menu._menuConfig.ui_animate) addthis.menu._animating || (addthis.menu._animating = !0, jQuery("#at3win").animate({
              opacity: 1,
              marginTop: "250px"
            }, "medium", "swing", function() {
              addthis.menu._animating = !1, addthis.menu._displayed = !1
            }), jQuery("#at3win,#at3lb").fadeOut({
              queue: !1
            }));
            else {
              var e = h("at3win"),
                t = h("at3lb");
              e && t && (e.style.display = "none", t.style.display = "none")
            }
            if (_ate.menu._previous) try {
              _ate.menu._previous.focus()
            } catch (n) {}
            _ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: G
            }), G = void 0
          },
          _animating: !1,
          _displayed: !1,
          _menuShare: {},
          _menuConfig: {},
          _message: function(e, t) {
            _ate.menu._menuConfig && "undefined" != typeof _ate.menu._menuConfig.image_container ? _ate.menu._menuConfig.image_container : null, _ate.menu._menuConfig && "undefined" != typeof _ate.menu._menuConfig.image_include ? _ate.menu._menuConfig.image_include : null, _ate.menu._menuConfig && "undefined" != typeof _ate.menu._menuConfig.image_exclude ? _ate.menu._menuConfig.image_exclude : null;
            _ate.xf.send(e, "addthis.expanded.data.share", _ate.menu._menuShare), _ate.xf.send(e, "addthis.expanded.data.config", _ate.menu._menuConfig)
          },
          _previous: null,
          _regListeners: {}
        }, addthis.menu = _ate.menu.open, addthis.menu.close = _ate.menu.close, _ate.ao = function(e, t, n, r, a, i, o) {
          if (e === document.body) return _ate.menu.open(e, a, i);
          if (W.iph || W.dro || W.wph) return !0;
          var s = _atw;
          if (_atw.ver >= 250 && (a && !p(a) && (s.conf = a), i && !p(i) && (s.share = i)), !s.evar()) {
            n && _ate.usu(n);
            var c = s.dut(n, r);
            s.share || (s.share = {}), n && (s.share.url = c[0]), r && (s.share.title = c[1]);
            var u = (_ate, document, (n || s.share.url || "").toLowerCase(), (r || s.share.title || "").toLowerCase(), V(), s.conf.ui_delay);
            if (u && "" === t) {
              if (u = Math.min(500, Math.max(50, u)), s.xhwa(), s.hwa = null, "hwe" != e) return s.hwe = e, void(s.hwa = setTimeout(function() {
                _ate.ao("hwe", t, n || s.share.url, r || s.share.title || "")
              }, u));
              e = s.hwe, s.hwe = null
            }
            return s.conf.ui_window_panes === !0 ? _ate.as("email" == t || "link" == t ? t : "more", s.conf, s.share) : "link" == t ? s.menu(e, t, _atr + "static/link.html#inl=true&url=" + _euc(n) + "&ats=" + _euc(U(addthis_share)) + "&atc=" + _euc(U(addthis_config)), r) : s.menu(e, t, n, r), (!s.sta || "expanded" == s.sta && "email" == t) && ("more" == t && (t = "expanded"), t || (t = "compact"), !s.sta || "email" != t && "link" != t || _ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: s.sta
            }), s.sta = t, _ate.ed.fire("addthis.menu.open", window.addthis || {}, {
              element: e,
              pane: t,
              url: n,
              title: r,
              conf: a,
              share: i
            })), !1
          }
        }, _ate.ac = function() {
          _atw.xhwa(), T("at_pspromo") || (clearTimeout(_atw.cwa), _atw.cwa = setTimeout(_atw.clo, _atc.cwait))
        }, _ate.as = function(e, t, n) {
          var r, a = H(n),
            i = H(t);
          return n = _ate.util.extend(a || {}, _atw.share || {}), t = _ate.util.extend(i || {}, _atw.conf || {}), r = _ate.util.extend(n, t), _ate.share.cleanly(e, r), !1
        }, window.addthis_send = function() {
          var e = _atw.ver,
            t = _atw,
            n = (t.fe, e >= 200 || t.ibm()),
            r = h("at_from" + (n ? "" : "15")),
            a = h("at_to" + (n ? "" : "15")),
            i = (h("at_email" + (n ? "" : "15")), h("at_msg" + (n ? "" : "15"))),
            s = a.value.replace(/[\n;]/g, ","),
            c = "at_error",
            u = t.conf.ui_language,
            l = 0;
          n ? t.rse() : t.fe = null, "," == s.substr(s.length - 1) && (s = s.substr(0, s.length - 1));
          var d = s.split(",");
          if (d.length > 5) t.err(t.lang(u, 34), a, c), l = 1;
          else {
            for (var f = 0; f < d.length; f++) {
              var p = _ate.trim(d[f]),
                m = p.indexOf("<"),
                _ = p.indexOf(">");
              if (m > -1 && (p = p.substr(m + 1)), _ > -1 && (p = p.substr(0, _ - m - 1)), p.length && "" !== p.replace(/ /g, "") && !o(p)) {
                t.err(t.lang(u, 12), a, c), l = 1;
                break
              }
            }
            "" === s.replace(/ ,/g, "") && (t.err(t.lang(u, 12), a, c), l = 1)
          }
          if (o(r.value) || (t.err(t.lang(u, 12), r, c), l = 1), i.value.length > 255 && (t.err(t.lang(u, 21), i, c), l = 1), !l) {
            var g = i.value,
              b = "";
            if (t.share.email_vars && "object" == typeof t.share.email_vars)
              for (var v in t.share.email_vars) "string" == typeof t.share.email_vars[v] && (b += ("" === b ? "" : "&") + _euc(v) + "=" + _euc(t.share.email_vars[v]));
            g == t.lang(u, 20) && (g = ""), _ate.cookie.sck("_atfrom", r.value), _atw.isrc = _ate.share.geneurl(t.share, {
              from: r.value,
              to: a.value.replace(/[;\n]/g, ","),
              vars: b,
              note: g
            }, t.mck > 1 ? {
              product: "max-" + _atw.ver
            } : null), setTimeout(function() {
              _atw.taf = _ate.ajs(_atw.isrc, 1)
            }, 100), _ate.ed.fire("addthis.menu.share", window.addthis || {}, {
              service: "email",
              url: t.share.url
            }), w("at_email", 1), n ? x("at_sending") : t.eok()
          }
          return !1
        };
      for (; _ate.plo && _ate.plo.length > 0;) {
        var ee = _ate.plo.pop(),
          te = ee[0];
        switch (te) {
          case "open":
            addthis_open(ee[1], ee[2], ee[3], ee[4], ee[5], ee[6]), _atw.plo.push(ee);
            break;
          case "cout":
            break;
          case "send":
            var ne, re;
            ee.length > 2 && (ne = ee[2], re = ee[3]), addthis_sendto(ee[1], ne, re);
            break;
          case "span":
            var ae = h(ee[1]);
            ae && (_atw.evar(), ae.innerHTML = '<a href="' + _ate.share.genurl("") + "\" onmouseover=\"return addthis_open(this, 'share', '" + ee[2] + "', '" + (ee[3] || "").replace(/'/g, "\\'") + '\')" onmouseout="addthis_close()" onclick="return addthis_to()" class="snap_noshots"><img src="' + _atr + 'static/btn/v2/lg-bookmark-en.gif" width="125" height="16" style="border:none;padding:0px" alt="AddThis" /></a>');
            break;
          case "deco":
            _atw.evar(), ee[1](ee[2], ee[3], ee[4], ee[5]);
            break;
          case "pref":
            _atw.gps(ee[1])
        }
      }
      _ate.ed.fire("addthis.menu.ready", {
        atw: _atw
      }), window.postMessage && (W.msi ? window.attachEvent("onmessage", _atw.cpmh) : window.addEventListener("message", _atw.cpmh, !1))
    }
  },
  315: function(e, t, n) {
    var r, a;
    r = [], a = function() {
      function e(e) {
        if (e && 1 !== e.nodeType) throw new Error("Cannot wrap non-element in Emdot");
        this.element = e, this.element.style || (this.element.style = {})
      }

      function t(e) {
        return function(t) {
          try {
            return this.attr(e, t)
          } catch (n) {
            return this.element[e] = t, this
          }
        }
      }

      function n(t) {
        return function() {
          var n, a, i, o = Array.prototype.slice.call(arguments, 0);
          for (n = document.createElement(t), i = 0; i < o.length; i++) a = o[i], r(n, a);
          return new e(n)
        }
      }

      function r(t, n) {
        if (null !== n) {
          if (void 0 === n) t.appendChild(document.createTextNode(""));
          else if (n.constructor === String || n.constructor === Number) t.appendChild(document.createTextNode(n));
          else if (n && 1 === n.nodeType) t.appendChild(n);
          else if (n instanceof e) t.appendChild(n.element);
          else {
            if (!(n instanceof Array)) {
              if (n) throw new Error("Could not turn truthy argument into element");
              return !1
            }
            for (var a = 0; a < n.length; a++) r(t, n[a])
          }
          return !0
        }
      }
      var a = "html,head,title,base,link,meta,style,script,noscript,template,body,section,nav,article,aside,h1,h2,h3,h4,h5,h6,header,footer,address,main,p,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,div,a,em,strong,small,s,cite,q,dfn,abbr,data,time,code,var,samp,kbd,sub,sup,i,b,u,mark,ruby,rt,rp,bdi,bdo,span,br,wbr,ins,del,img,iframe,embed,object,param,video,audio,source,track,canvas,map,area,svg,table,caption,colgroup,col,tbody,thead,tfoot,tr,td,th,form,fieldset,legend,label,input,button,select,datalist,optgroup,option,textarea,keygen,output,progress,meter,details,summary,menuitem,menu".split(","),
        i = "value,name,id,href,src,title,alt,target,type,role,placeholder,action,method,autocorrect,autocapitalize,required".split(","),
        o = e.prototype;
      for (o.style = function(e) {
          if (e)
            for (var t = e.replace(/^\s+/, "").replace(/[;\s]+$/, "").split(";"), n = 0, r = t.length; r > n; n++) {
              var a = t[n].split(":"),
                i = a[0].replace(/\s+/g, ""),
                o = a[1].replace(/^\s+/, "").replace(/\s+$/, "");
              if (!i || !o) throw new Error("Emdot: Malformed style string - " + e);
              try {
                o.replace(/\s+/g, ""), this.element.style[i] = o
              } catch (s) {
                window.console && console.log && console.log(s.toString() + " - " + e)
              }
            }
          return this
        }, o.css = function() {
          if (arguments.length) {
            var e = Array.prototype.slice.call(arguments, 0);
            this.element.className = e.join(" ")
          }
          return this
        }, o.data = function(e, t) {
          return null === t || "" === t ? this.element.removeAttribute("data-" + e, t) : e && this.element.setAttribute("data-" + e, t), this
        }, o.attr = function(e, t) {
          return null === t || "" === t ? this.element.removeAttribute(e, t) : e && this.element.setAttribute(e, t), this
        }, o.aria = function(e, t) {
          return this.attr("aria-" + e, t)
        }, o.html = function(e) {
          return this.element.innerHTML = e, this
        }, emdot = function(e, t, n) {
          var r, a = [],
            n = n || this;
          for (r = 0, len = e.length; r < len; r++) a[a.length] = t.call(n, e[r], r, e);
          return a
        }, c = a.length - 1; c >= 0; c--) {
        var s = a[c];
        emdot[s] = n(s)
      }
      for (var c = i.length - 1; c >= 0; c--) {
        var u = i[c];
        o[u] = t(u)
      }
      return emdot
    }.apply(t, r), !(void 0 !== a && (e.exports = a))
  },
  316: function(e, t, n) {
    "use strict";
    var r = n(83),
      a = n(137);
    e.exports = function(e) {
      var t = {
          utm_source: "AddThis Tools",
          utm_medium: "image",
          utm_campaign: e
        },
        n = r(t, function(e, t) {
          return t
        }),
        i = a(n, function(e, t) {
          return window.encodeURIComponent(t) + "=" + window.encodeURIComponent(e)
        }).join("&");
      return "//www.addthis.com/website-tools/overview?" + i
    }
  },
  320: function(e, t, n) {
    "use strict";
    var r = n(316),
      a = n(315);
    e.exports.getMixin = function(e) {
      return e = e || {}, {
        generateBranding: function(t) {
          var n = r(e.campaign);
          return Boolean(t) ? this._generateReducedBranding(n) : this._generateAddThisBranding(n)
        },
        _generateReducedBranding: function(e) {
          return a.div(a.a(a.span("AddThis")).css("at-branding-info").href(e).title("Powered by AddThis").target("_blank"))
        },
        _generateAddThisBranding: function(e) {
          return a.div(a.a(a.div().css("at-branding-icon"), a.span("AddThis").css("at-branding-addthis")).css("at-branding-logo").href(e).title("Powered by AddThis").target("_blank"))
        }
      }
    }
  }
});