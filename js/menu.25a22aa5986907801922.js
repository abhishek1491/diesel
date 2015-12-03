atwpjp([0], {
  23: function(e, t, n) {
    function r(e) {
      return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)
    }

    function o(e) {
      if (2 != e.split("@").length || -1 == e.indexOf(".") || e.length > 256) return !1;
      var a = new RegExp("^[a-z0-9,!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9,!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*.([a-z]{2,})$");
      return -1 != String(e.toLowerCase()).search(a)
    }

    function s(e) {
      var a = new Array;
      e: for (var t = 0; t < e.length; t++) {
        for (var i = 0; i < a.length; i++)
          if (a[i] == e[t]) continue e;
        a[a.length] = e[t]
      }
      return a
    }

    function l(e) {
      var a, t = window,
        i = document,
        n = t.onkeydown || function() {},
        r = function(a) {
          e(a), n(a)
        };
      D.msi ? (a = i.onkeydown, i.onkeydown = function() {
        r(), null != a && a()
      }) : (a = t.onkeydown, t.onkeydown = function(e) {
        r(e), null != a && a()
      })
    }

    function d() {
      return D.ie6 ? ' style="cursor:hand;"' : ""
    }

    function c(e) {
      if (f(e)) {
        var a = E(!0),
          t = A();
        y(e), L(e, a[0] - t), S(e, a[1] - t)
      }
    }

    function _(e, a) {
      e && e.value && e.value.length > a && (e.value = e.value.substring(0, a))
    }

    function u(e, a, t) {
      return e.length > a && (e = e.slice(0, a - 1), t && e[e.length - 1] != t && e.push(t)), e
    }

    function m(e) {
      if (e._e) return !0;
      for (var a in e)
        if ("_e" != a && e.hasOwnProperty(a)) return delete e._e, !1;
      return e._e = 1, !0
    }

    function f(e) {
      return "string" == typeof e && (e = document.getElementById(e)), e
    }

    function h(e) {
      return '<a name="' + e + '"></a>'
    }

    function p(e, a, t, i) {
      return "<div " + (1 === t ? "class" : "id") + '="' + e + '"' + (0 === a ? ' style="display:none"' : "") + (i ? i : "") + ">"
    }

    function g(e, a, t) {
      return "<span " + (a === !0 ? "class" : "id") + '="' + e + '"' + (t ? t : "") + ">"
    }

    function w(e, a, t) {
      return a || (a = ""), '<label for="' + a + '">' + e + ":" + (t ? "  <span>(" + t + ")</span>" : "") + "</label>"
    }

    function b(e, a, t) {
      e = f(e), e && e.style && (e.style[a] = t)
    }

    function v(e, a, t) {
      t || b(e, "display", "none"), a && b(e, "visibility", "hidden")
    }

    function y(e, a, t) {
      t || b(e, "display", "block"), a && b(e, "visibility", "visible")
    }

    function k(e, a) {
      e = f(e), e && (e.className ? -1 == e.className.indexOf(a) && (e.className += " " + a) : e.className = a)
    }

    function x(e, a) {
      if (e = f(e)) {
        if (!e.className) return; - 1 != e.className.indexOf(a) && (e.className = e.className.split(a).join(" "))
      }
    }

    function C(e, a) {
      return e = f(e), e ? e.className ? -1 != e.className.indexOf(a) : !1 : void 0
    }

    function T(e, a) {
      return e = f(e), e && e.parentNode && (e.parentNode.className || "").indexOf(a) > -1
    }

    function L(e, a) {
      b(e, "width", a + "px")
    }

    function S(e, a) {
      b(e, "height", a + "px")
    }

    function N(e) {
      return e = f(e), e ? "block" == e.style.display : !1
    }

    function E(e) {
      var a = J.documentElement,
        t = J.body,
        i = 0,
        n = 0,
        r = 0,
        o = 0;
      return e && (K.innerHeight && K.scrollMaxY ? (i = t.scrollWidth, n = K.innerHeight + K.scrollMaxY) : t.scrollHeight > t.offsetHeight ? (i = t.scrollWidth, n = t.scrollHeight) : (i = t.offsetWidth, n = t.offsetHeight)), K.self && K.self.innerHeight ? (r = K.self.innerWidth, o = K.self.innerHeight) : a && a.clientHeight ? (r = a.clientWidth, o = a.clientHeight) : t && (t.clientWidth || t.clientHeight) ? (r = t.clientWidth, o = t.clientHeight) : t && (r = t.clientWidth, o = t.clientHeight), [e !== !0 || r > i ? r : i, e !== !0 || o > n ? o : n]
    }

    function M() {
      var e = J.documentElement,
        a = J.body;
      return "number" == typeof K.pageYOffset ? [K.pageXOffset, K.pageYOffset] : a && (a.scrollLeft || a.scrollTop) ? [a.scrollLeft, a.scrollTop] : e && (e.scrollLeft || e.scrollTop) ? [e.scrollLeft, e.scrollTop] : [0, 0]
    }

    function B(e) {
      var a = document.documentElement,
        t = 0,
        i = 0,
        n = 0,
        r = 0;
      do n = /fixed/.test(e.style.position), r |= n, t += e.offsetTop || 0, i += e.offsetLeft || 0, n && e && (t += e.scrollTop, i += e.scrollLeft), e = e.offsetParent; while (e);
      return !D.ie6 && a.scrollTop && r && (t += a.scrollTop, i += a.scrollLeft), [i, t]
    }

    function A() {
      if (X) return X;
      try {
        var e = document,
          a = e.ce("div"),
          t = e.ce("div"),
          i = e.getElementsByTagName("body")[0],
          n = a.style;
        n.width = "50px", n.height = "50px", n.overflow = "hidden", n.position = "absolute", n.top = "-200px", n.left = "-200px", t.style.height = "100px", i.appendChild(a), a.appendChild(t);
        var r = t.innerWidth;
        a.style.overflow = "scroll";
        var o = t.innerWidth;
        a.removeChild(t), i.removeChild(a), X = r && o ? r - o : 20
      } catch (s) {
        X = 20
      }
      return X
    }

    function O(e) {
      e && (e.cancelBubble = !0, e.preventDefault && e.preventDefault())
    }
    var H, j, P = n(48),
      I = n(62),
      z = n(82),
      F = n(1),
      R = n(178),
      W = n(29),
      D = n(2),
      $ = n(22),
      q = n(55),
      U = n(21),
      K = window,
      Q = (K.conf || {}).ui_language;
    _ate.maf = _ate.maf || {}, _ate.maf.fnc = 'onkeypress="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}" onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}" onblur="if(_ate.maf.key==9){_ate.maf.key=null;}else{_ate.maf.key=null;addthis_close();}"';
    var Y, X = D.msi ? 20 : void 0;
    if (!window._atw) {
      var G = "twitter,facebook,email,print,gmail,favorites,google,pinterest_share,gmail,tumblr,mailto,linkedin,blogger,delicious,yahoomail,livejournal,wordpress,aim,meneame,vk",
        V = G,
        J = document;
      ! function() {
        var e, a = document.compatMode,
          t = 1,
          i = window;
        a && ("BackCompat" == a ? t = 2 : "CSS1Compat" == a && (t = 0), D.mode = t, D.msi && (D.mod = t, 2 != t && !D.ie6 || window.addthis_do_ab || (e = i.onscroll ? i.onscroll : function() {}, window.onscroll = function() {
          _atw && _atw.fpf(), e()
        })))
      }(), window._atw = {
          ver: 300,
          show: 1,
          uus: function() {
            _atw.uusf || (_ate.track.cev("uus", 1), _atw.uusf = 1)
          },
          ujq: function() {
            return !D.ie6 && !D.ie7 && !D.ie8 && "function" == typeof window.jQuery
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
            var a = window.addthis_options;
            e(a ? a.replace(",more", "").split(",") : [])
          },
          ibt: function() {
            if (_atw.bti) return _atw.bti;
            var e = (window.addthis_product || "men").substr(0, 3),
              a = "bkm" == e || "bmt" == e || "fct" == e || "fxe" == e;
            return a && (_atw.bti = a), a
          },
          lfy: 0,
          fpf: function() {
            if (D.ie6 || D.msi && 2 == D.mod) {
              var e = document,
                a = e.documentElement,
                t = e.body,
                i = _atw,
                n = f(i.did),
                r = f("at16p"),
                o = a && "undefined" != typeof a.scrollTop,
                s = t && "undefined" != typeof t.scrollTop,
                l = !1,
                d = f("atie6ifh"),
                c = o && s ? Math.max(a.scrollTop, t.scrollTop) : o ? a.scrollTop : t.scrollTop;
              if (c += 10, c != i.lfy) {
                if (i.lfy = c, r && (r.style.top = c + "px"), n && n.className && n.className.indexOf("mmborder") > -1) {
                  var _ = 0,
                    u = E();
                  _ = r && "" != r.style.marginTop ? r.style.marginTop.split("px").shift() : Math.max(0, u[1] / 2 - 222.5), n.style.top = c - 10 + _ + "px", l = !0
                }
                d && D.ie6 && (d.style.top = (l ? 0 : 290) + c + "px")
              }
            }
          },
          rev: "$Rev$",
          lang: function(e, a) {
            var t = D.msi ? navigator.userLanguage : navigator.language,
              i = e || t,
              n = _atw,
              r = n.conf.ui_localize || window.addthis_localize,
              o = window.addthis_translations || [];
            if (r) switch (a) {
              case 1:
                r = r.share_caption;
                break;
              case 2:
                r = r.more;
                break;
              case 3:
                r = r.email_caption;
                break;
              case 4:
                r = r.email;
                break;
              case 5:
                r = r.favorites;
                break;
              case 6:
                r = r.email_instructions;
                break;
              case 7:
                r = r.email_to;
                break;
              case 8:
                r = r.email_from;
                break;
              case 9:
                r = r.email_message;
                break;
              case 10:
                r = r.email_privacy;
                break;
              case 11:
                r = r.email_send;
                break;
              case 12:
                r = r.email_valid;
                break;
              case 13:
                r = r.email_sent;
                break;
              case 14:
                r = r.rss_caption;
                break;
              case 15:
                r = r.rss_instructions;
                break;
              case 16:
                r = r.rss_remember;
                break;
              case 17:
                r = r.done;
                break;
              case 18:
                r = r.get_your_own;
                break;
              case 19:
                r = r.email_address;
                break;
              case 20:
                r = r.optional;
                break;
              case 21:
                r = r.max_characters;
                break;
              case 22:
                r = r.print;
                break;
              case 23:
                r = r.whats_this;
                break;
              case 24:
                r = r.privacy;
                break;
              case 25:
                r = r.use_address_book;
                break;
              case 26:
                r = r.cancel;
                break;
              case 27:
                r = r.sign_in_contacts;
                break;
              case 28:
                r = r.username;
                break;
              case 29:
                r = r.password;
                break;
              case 30:
                r = r.remember_me;
                break;
              case 31:
                r = r.sign_in;
                break;
              case 32:
                r = r.select_address_book;
                break;
              case 33:
                r = r.error_auth;
                break;
              case 34:
                r = r.email_recipients;
                break;
              case 35:
                r = r.find_a_service;
                break;
              case 36:
                r = r.no_services;
                break;
              case 37:
                r = r.share_again;
                break;
              case 38:
                r = r.sign_out;
                break;
              case 39:
                r = r.getting_contacts;
                break;
              case 40:
                r = r.suggest_a_service;
                break;
              case 41:
                r = r.share_successful;
                break;
              case 42:
                r = r.toolbar_promo;
                break;
              case 43:
                r = r.download;
                break;
              case 44:
                r = r.dont_show_these;
                break;
              case 45:
                r = r.sending;
                break;
              case 46:
                r = r.captcha;
                break;
              case 47:
                r = r.settings;
                break;
              case 48:
                r = r.email_error;
                break;
              case 49:
                r = r.captcha_header;
                break;
              case 50:
                r = r.captcha_instr;
                break;
              case 51:
                r = r.captcha_missing;
                break;
              case 52:
                r = r.captcha_error;
                break;
              case 53:
                r = r.signin_customize
            }
            if (r) return r;
            for (var s in o)
              if (o.hasOwnProperty(s))
                for (var l in o[s][0])
                  if (o[s][0].hasOwnProperty(l) && o[s][0][l] === i && o[s].length > a && o[s][a]) return o[s][a];
            return ["Bookmark &amp; Share", "More...", "Email a Friend", "Email", "Favorites", "Multiple emails? Use commas.", "To", "From", "Note", "Privacy Policy: We never share your personal information.", "Send", "Please enter a valid email address.", "Message sent!", "Subscribe to Feed", "Select from these web-based feed readers:", "Please don't ask me again; send me directly to my favorite feed reader.", "Done", "Get your own button!", "email address", "optional", "255 character limit", "Print", "What's this?", "Privacy", "Use Address Book", "Cancel", "Sign in to use your contacts", "Username", "Password", "Remember me", "Sign In", "Select address book", "Error signing in.", "Please limit to 5 recipients.", "Find a service", "No matching services.", "Share again.", "Sign out", "Getting contacts", "Suggest a service", "Share successful!", "Make sharing easier with AddThis for Firefox.", "Download", "Don't show these", "Sending message...", 'We hate spam too! Please <a id="at16ecmc" href="#" onclick="_atw.rse();_atw.cef();return true" target="_blank">click here</a> to confirm you are a real-live person.', "Settings", "Sorry, we couldn't send this message. Please try again in a few minutes.", "Please help us prevent spam.", "Type the two words:", "Please enter a valid response.", "Sorry, your response was incorrect.", "Sign in to customize"][a - 1]
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
          loc: (window.addthis_services_loc || G).replace(D.xp || D.mob ? /,mailto,/ : /,,/, ","),
          list: W($.list),
          ibm: function() {
            var e = _atw,
              a = (e.conf || {}).product || window.addthis_product || "";
            return C(e.did, "mmborder") || a.indexOf("bkm") > -1
          },
          ics: function(e, a) {
            var t, i, n, r, o = _atw;
            if (o.custom_list) return o.custom_list[e];
            if (a.services_custom) {
              o.custom_list = {}, t = a.services_custom;
              for (n in t) i = t[n], o.custom_list[i.code] = i, e === i.code && (r = i);
              return r
            }
            return !1
          },
          sag: function() {
            _ate.as(_atw.ibm() ? "bkmore" : "more")
          },
          hkd: function(e) {
            "undefined" == typeof e && (e = window.event);
            var a = _atw;
            e && 27 == e.keyCode && (a.clb(), O(e))
          },
          filt: function(e, a, t, i, n, r) {
            var o, s, l = 0,
              d = (_atw, i || "ati_"),
              c = n || "at16nms",
              _ = r || "div",
              u = "" != e ? e.replace(/\W+/g, "").replace(/ /g, "").toLowerCase() : "";
            v(c), t && y(t);
            for (o in a)
              if ("string" == typeof a[o]) {
                var m = f(d + o.replace("@", "_")),
                  h = o.toLowerCase(),
                  p = a[o].toLowerCase(),
                  g = 0;
                (h.indexOf(e) > -1 || h.indexOf(u) > -1 || p.indexOf(u) > -1 || p.indexOf(e) > -1) && (g = 1, l++), !s && m && (s = m.parentNode), g ? y(m) : v(m)
              }
            if (l && s) {
              l = 0;
              var w = s.getElementsByTagName(_);
              for (o in w) w[o].style && "block" == w[o].style.display && l++
            }
            0 === l && (y(c), t && v(t)), "" == e.replace(/ /g, "") && t && v(t)
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
            var a = _atw,
              t = _atw.ver >= 200,
              i = f("at_" + (t ? "success" : "send")),
              n = t ? f("at_promo") : i;
            if (v("at_sending"), t) e ? (a.err(a.lang(a.conf.ui_language, 48), null, "at_error"), y("at_email", 1)) : addthis_do_ab ? (a.ppr = !0, a.cle(), n && !_ate.dbm && (_atw.addImg(n), y(n)), y(i), v("at_email")) : (n && !_ate.dbm && (_atw.addImg(n), y(n)), y(i), v("at_captcha"), v("at_email"), a.cle());
            else {
              var r = a.lang(Q, 13); - 1 == r.indexOf("&") && (i.value = r)
            }
            a.cwa = setTimeout(_atw.clo, 1200), _ate.gat && _ate.gat("email", null, a.conf, a.share)
          },
          roe: function(e) {
            var a = _atw;
            v("at_sending"), a.cle(), _atw.ver >= 200 && a.err(a.lang(a.conf.ui_language, 46).replace('href="#"', 'href="' + e + '"'), null, "at_error")
          },
          ert: function(e, a, t) {
            t || (t = "at_error");
            var i = _atw,
              n = f(t);
            n.innerHTML = e || i.lang(i.conf.ui_language, 33), y(n), a && (a.style.borderColor = "#dd0000")
          },
          err: function(e, a, t) {
            var i = _atw,
              n = _atw.ver >= 200;
            null === i.fe && a && (i.fe = a, a.focus(), n ? (a.style.outlineStyle = "none", a.style.outlineWidth = "0px") : alert(e)), n && setTimeout(function() {
              i.ert(e, a, t)
            }, 50)
          },
          mck: 0,
          cef: function() {
            var e = _atw,
              a = _ate,
              t = e.mck < 2 || e.ibm();
            return addthis_do_ab ? t ? a.com("cef") : a.com("cle") : t ? e.clb() : a.as("more"), !1
          },
          cle: function() {
            var e = _atw,
              a = _atw.ver >= 200 ? "" : "15",
              t = f("at_msg" + a),
              i = f("at_to" + a);
            t && (t.value = addthis_email_note || e.conf.ui_email_note || ""), i && (i.value = e.conf.ui_email_to || ""), v("at16pit")
          },
          rse: function(e) {
            var a = _atw,
              t = _atw.ver,
              i = "at_from" + (200 > t ? "15" : ""),
              n = "at_to" + (200 > t ? "15" : ""),
              r = f(n),
              o = "at_" + (200 > t ? "send" : "success"),
              s = a.lang(a.conf.ui_language, 11),
              l = function(e) {
                e = f(e), e && (e.style.borderColor = e.style.outlineWidth = e.style.outlineStyle = "")
              };
            200 > t && -1 == s.indexOf("&") && (f(o).value = s), r && ", " == r.value.substr(r.value.length - 2) && (r.value = r.value.substr(0, r.value.length - 2)), l("at_ab_user"), l("at_ab_pass"), v("at_ab_error"), v("at_error"), v("at16eatdr"), v("at_captcha"), e || (l(i), l(n), v(o), v("at_promo"), y("at_email", 1))
          },
          lml: _,
          clo: function() {
            var e = _atw,
              a = f(e.did),
              t = _atw.ver,
              n = document.gn("embed");
            if (a && (200 > t && v("at_email15"), v(a), D.ie6 && v("atie6cmifh"), v("at_pspromo", 1)), n && e.conf && e.conf.ui_hide_embed)
              for (i = 0; i < n.length; i++) n[i].addthis_hidden && (n[i].style.visibility = "visible");
            return e.sta && "compact" == e.sta && (_ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: e.sta
            }), e.sta = null), !1
          },
          hash: window.location.hash,
          psp: function() {
            if ((D.msi || D.ffx || D.chr || D.saf || _atc.sjp) && !D.ipa) {
              var e = (window, window._atab, _atw);
              if (!e.addthis_popup_mode) {
                if (e.mck < 1) {
                  var a = f("at15ptc"),
                    t = f(e.did),
                    i = f("at15s_brand");
                  if (v("at_hover"), !(_ate.sau || {}).gat) {
                    var n = (document.getElementById("at_testpromo_bg") || {}).style;
                    n && (n.background = "url(//s7.addthis.com/images/btn_" + (D.saf ? "saf_dl120.gif" : D.chr ? "ch_dl120.gif" : D.msi ? "ie_dl129x51.jpg" : "ff_dl120.jpg") + ")", D.saf ? (n.width = "120px", n.height = "47px") : D.msi && (n.marginBottom = "-12px"))
                  }
                  y("at_pspromo", 1), y(t), c("at16lb"), _atw.ver < 300 && (k("at15s_head", "at15s_head_success"), a && (a.innerHTML = e.lang(addthis_language, 41)), i && !e.conf.ui_use_close_control && (i.innerHTML = '<a href="#" onclick="return _atw.clb();" tabindex="9000"  >X</a>'))
                } else _atw.ver >= 200 && e.clb();
                D.msi && "BackCompat" == document.compatMode ? v("atic_auth", !0, !0) : v("atic_auth"), x("at15s", "at-menu-auth")
              }
            }
          },
          clb: function() {
            var e = window,
              a = (window._atab, _atw);
            return a.mck = 0, a.addthis_popup_mode ? e.close() : e.addthis_do_ab ? _ate.com("clb") : (v("at_complete"), v("at16lb"), v("at_email"), v("at_promo"), v("at_pspromo", 1), v("at16p"), v("at15s"), x("at15s_head", "at15s_head_success"), v("atie6ifh"), v("atie6cmifh"), v("at15s"), (_ate.maf || {}).pre && _ate.maf.pre.focus()), a.sta && "compact" !== a.sta && (_ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: a.sta
            }), a.sta = null), !1
          },
          sho: function(e, a) {
            var t = (_ate, _atw),
              i = _atw.ver,
              n = (t.conf.ui_language.split("-").shift(), i >= 200 || "bkemail" == e || t.ibm()),
              r = "at16lb",
              o = "at_hover",
              s = "at_feed",
              l = "at_share",
              d = "at16psf",
              _ = "at_email" + (n ? "" : 15),
              u = f("at16pit"),
              m = f(_atw.did),
              h = f("atie6ifh"),
              p = f("at16p"),
              g = f("at_to"),
              w = f("at" + (n ? 16 : 15) + "ptc"),
              b = !1,
              C = !1;
            _ate.resource && _ate.resource.useHighResIcons;
            if (v(l), v(s), v(d, 1), v(_, 1), v("at_copylink", 1), v("at16abifc"), v("at_error"), v(o), n && (v(m), v(u, 1), v("at_promo"), v("at_success"), v("at_pspromo", 1), x("at15s_head", "at15s_head_success")), "feed" == e) v(l), k(s, "atused"), y(s), w.innerHTML = addthis_caption_feed, b = !0;
            else if ("share" == e || "" === e || "bkmore" == e) "bkmore" == e ? (b = C = !0, k(t.did, "mmborder")) : (e = "share", m.style.display = "", x(t.did, "mmborder")), v(p), D.ie6 && (v(h), y("atie6cmifh")), t.conf.ui_use_vertical_menu && v("at15s_head"), y(o), D.ipa && c("at16lb"), w && (w.innerHTML = addthis_caption_share);
            else {
              if (_atw.mck++, "link" == e) {
                w && (w.innerHTML = "Permalink");
                var T = document.createElement("iframe");
                T.src = a, T.frameBorder = "0", T.height = "353px", T.width = "295px", f("at_copylink").innerHTML = "", f("at_copylink").appendChild(T), y("at_copylink", 1)
              } else if ("more" !== e) {
                if ("bkemail" == e || t.ibm() ? (k(t.did, "mmborder"), v("at_use_addr"), v(u, 1), C = !0) : n && y("at_use_addr"), -1 == e.indexOf("email") && (e = "email"), t.rse(), i >= 200 && (y("at16abifc"), window._atab && (_atab.plda(), t.ppr && (t.ppr = !1, t.conf.ui_use_addressbook && (_atab.opp(), _atab.opp())))), y(_, 1), i >= 200 && (v(l), C || y(u, 1), window._atab)) {
                  var N = _atab.ipo();
                  u && (u.innerHTML = "&" + (N ? "l" : "r") + "aquo;")
                }
                w.innerHTML = addthis_caption_email, "emailab" == e && _atab.opp()
              } else v("at_captcha"), y(l), y(d, 1), w && (w.innerHTML = addthis_caption_share);
              b = !0
            }
            if (b && i >= 200 || C) {
              var M = "bkmore" == e || "link" == e;
              if (y(r), addthis_do_ab) p.style.marginTop = 0, p.style.marginLeft = 0, p.style.top = 0, p.style.left = 0;
              else {
                var B = E(!0),
                  O = E(),
                  H = A();
                L(r, B[0] - H), S(r, B[1] - H), !M || n ? p.style.marginTop = Math.max(0, O[1] / 2 - 222.5) + "px" : m.style.display = ""
              }
              if (!M && (D.ie6 && y(h), y(p), window.addthis_do_ab || t.fpf(), "more" == e)) {
                L(p, 300), L("at16abifc", 300);
                var j = f("at16filt");
                j && "none" != j.style.display && j.focus()
              }
              "email" == e && g && g.focus()
            }
            if (t.show-- > 0 && !_atc.abf) {
              var P, I = t.conf.services_compact_org || "",
                z = I.split(",").length,
                W = 0,
                $ = 0,
                q = window.addthis_ssh;
              q && t.csl && (q = q.split(t.csl).shift().replace(/,$/, "")), q || t.crs || !I || I === addthis_options_default ? q && q !== t.crs && (W = window.addthis_ssh) : $ = z, P = W ? W.split(",") : [], F(P, function(e, a) {
                R.loadColorCSSForService(a)
              }), _ate.ed.fire("addthis-internal.compact", window.addthis || {}, {
                svc: e,
                cmo: $,
                cso: W,
                crs: t.crs,
                pco: t.conf.product || addthis_product
              })
            }
          },
          dut: function(e, a) {
            var t = document,
              i = (e || "").toLowerCase(),
              n = (a || "").toLowerCase();
            return addthis_url = e, addthis_title = a, ("" === i || "[url]" === i || "<data:post.url/>" === i) && (addthis_url = location.href), ("" === n || "[title]" === n || "<data:post.title/>" === n) && (addthis_title = t.title), [addthis_url, addthis_title]
          },
          menu: function(e, a, t, i) {
            var n = _ate,
              r = _atw,
              o = document,
              c = (t || r.share.url || "").toLowerCase();
            (i || r.share.title || "").toLowerCase(), U();
            if ("feed" == a && c.length && (r.share.url = "feed://" + (t || r.share.url)), r.ost) {
              var _ = f("at15s_brand"),
                m = f("at16_brand"),
                y = r.conf.ui_cobrand,
                L = f("at15ptc"),
                S = r.conf.ui_header_color,
                N = r.conf.ui_header_background;
              _ && (_.innerHTML = y), m && (m.innerHTML = y), L && (L.innerHTML = window.addthis_caption_share), b("at15s_head", "backgroundColor", N), b("at16pt", "backgroundColor", N), b("at16ptx", "color", S), b("at16pt", "color", S), b("at16ptc", "color", S), b("at15s_brand", "color", S), b("at16ptc", "color", S), r.conf.ui_use_close_control ? (k("at15s_brand", "at15s_brandx"), x("at15sptx", "at15dn")) : (x("at15s_brand", "at15s_brandx"), k("at15sptx", "at15dn"))
            } else {
              var A = window;
              r.conf.product || A.addthis_product;
              if (l(_atw.hkd), !_atc.ostm) {
                if (!A.addthis_product || 0 !== A.addthis_product.indexOf("f"))
                  for (ce in A.addthis_conf) _atc[ce] = A.addthis_conf[ce];
                for (ce in A.addthis_config) "product" != ce && "services_compact" != ce && (r.conf[ce] = A.addthis_config[ce]);
                _atc.ostm = 1
              }
              r.ti = 1;
              var O = "</span>",
                P = "</div>",
                I = "</a>",
                F = '<div style="clear:both;">' + P,
                R = r.conf.ui_language || "en",
                W = function(e, a, t, i) {
                  return '<input id="' + e + '" ' + (addthis_do_ab ? 'class="abif" ' : D.ffx && 2 == D.mode ? 'class="atfxmode2"' : "") + 'name="' + e + '" type="text" tabindex="' + _atw.ti++ + '" ' + (t ? 'value="' + t + '" ' : "") + 'size="' + (i ? i : 30) + '"' + a + "/>"
                },
                $ = function(e) {
                  return 'onfocus="_atw.rse();' + (e || "") + '"'
                },
                K = window.addthis_feed || (r.share.url ? r.share.url.indexOf("feed://") > -1 : !1) || r.hf,
                Q = r.conf.ui_header_background,
                Y = "" != Q ? ' style="background-color:' + Q + '"' : "",
                X = r.conf.ui_header_color,
                G = (window.addthis_ssh ? addthis_ssh.split(",") : [], "" != X ? ' style="color:' + X + '"' : ""),
                V = window.addthis_caption_share,
                J = (r.conf.services_exclude || "").replace(/\s/g, "").replace(/\*/, ""),
                Z = r.conf.product || window.addthis_product,
                ee = _ate.cookie.rck("_atfrom"),
                ae = {},
                te = _ate.resource.useHighResIcons,
                ie = q,
                ne = '<div id="at16lb"' + (D.msi ? ' style="filter:alpha(opacity=0.01);"' : "") + ' onclick="return _atw.clb()">' + P;
              if (J)
                for (var re = J.split(","), oe = 0; oe < re.length; oe++) ae[re[oe]] = 1;
              _atw.excluded = ae;
              var se = (r.conf.services_compact || addthis_options_default).replace(/\s/g, "").replace(/\*/, ""),
                le = _ate.gvl(R);
              if (le && r.lsv[le])
                for (var de = r.lsv[le].split(","), ce = 0; ce < de.length; ce++) {
                  var _e = de[ce],
                    ue = new RegExp("(?:^|,)(" + _e + ")(?:$|,)"),
                    me = se.search(ue);
                  r.list[_e + "_" + le] = r.list[_e], delete r.list[_e], me > -1 && (se = (0 == me ? "" : se.substr(0, me) + ",") + _e + "_" + le + (0 == me ? "," : "") + se.substr(me + _e.length + 1))
                }
              "" === U() && -1 == Z.indexOf("ffext") && -1 == Z.indexOf("fxe") && (se = se.replace(/^email(?:,)|,email/g, "")), se = se.split(",");
              for (var ce = 0; ce < se.length; ce++)
                if (ce < se.length - 1 && "more" == se[ce]) {
                  var fe = se.splice(ce, 1);
                  se.push(fe[0]);
                  break
                }
              se = s(se), ne += [D.ie6 ? '<iframe id="atie6ifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe><iframe id="atie6cmifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe>' : "", p("at16pcc"), p("at16p", !K && _atw.ver >= 200 ? 1 : 0), h("atpro"), h("atclb"), h("atopp"), h("atcle"), h("atcef"), p("at16pib"), p("at16pi")].join(""), ne += !addthis_do_ab && r.conf.ui_use_addressbook ? '<a id="at16pit" href="#" onclick="if (window._atab) return _atab.opp()" style="display:none">&raquo;' + I : "", ne += p("at16pp", 0) + P, ne += p("at16pm", 1, 0, 2 == D.mod ? 'style="width:299px"' : 0 == D.mod ? 'style="width:300px"' : ""), ne += p("at16pt", 1, 0, Y), V == r.lang(R, 1) && "feed" == a && (V = r.lang(R, 14)), ne += '<h4><span id="at16ptc"' + G + ">" + V + O + '</h4><span id="at16_brand"' + G + ">" + r.conf.ui_cobrand + O, ne += '<a id="at16ptx" href="#" tabindex="9000" onclick="return _atw.clb()"' + G + '>X<span class="at_a11y">Close AddThis Expanded Menu</span></a>', ne += P, ne += p("at16pc", 1, "at_default");
              var he = r.rss;
              ne += p("at_feed", 0), ne += '<span style="display:block">' + r.lang(R, 15) + O + "<br/>";
              var ce = 1;
              for (var pe in he) ae[pe] || "string" == typeof he[pe] && (ne += "<div" + d() + (ce % 2 === 0 ? ' class="at_litem"' : "") + (" onclick=\"return addthis_sendto('" + pe + "');\">") + '<a class="fbtn at_baa ' + pe + '">' + he[pe] + "</a>" + P, ce++);
              ne += P, ne += p("at_share"), ne += p("at16psf"), ne += '<label for="at16filt" class="at_a11y">Sharing Service Filter</label>', ne += W("at16filt", "maxlength=\"50\" onkeyup=\"_atw.filt(this.value,_atw.list,false,'ati_','at16nms','a');_atw.uus()\"" + (D.msi ? "" : ' style="padding:2px 0 0"'), ""), ne += P, ne += p("at16ps", 1, 0, 'class="addthis_32x32_style" ' + (2 == D.mod ? 'style="height:292px"' : "")), ne += p("at16nms", 0) + (r.lang(R, 36) || "") + P, he = r.list;
              var ge = r.conf.services_expanded || [],
                we = 0;
              if (r.conf.services_expanded) ge = ge.replace(/ /g, "").split(",");
              else
                for (var pe in he) "string" != typeof pe || ae[pe] || ge.push(pe);
              for (ge.sort(function(e, a) {
                  if ("string" == typeof he[e] && "string" == typeof he[a]) {
                    var t = (he[e] || "").toLowerCase(),
                      i = (he[a] || "").toLowerCase();
                    return (t > i ? 1 : t == i ? 0 : -1) || 0
                  }
                  return 0
                }), ce = 0; ce < ge.length; ce++) {
                var pe = ge[ce],
                  be = r.css[pe] ? ' style="' + r.css[pe] + '"' : "";
                if ("string" == typeof he[pe] && !ae[pe]) {
                  var ve = z.isTop(pe),
                    ye = te ? "at4-icon aticon-" + pe : ve ? "at16nc at16t_" + pe + " at16t" : "at15t at15t_" + pe;
                  D.ie9 && "link" == pe || "more" === pe || "email" === pe && "" === U() && -1 == Z.indexOf("ffext") && -1 == Z.indexOf("fxe") || (we++, ne += "<a " + d() + ' id="ati_' + pe + '" class="at_item"' + be + 'tabindex="' + _atw.ti++ + '" ' + (n.bro.ffx && 2 != D.mode ? "" : ' onmouseover="_atw.shv(this)" onmouseout="_atw.rhv(this)"   ') + ("favorites" == pe && n.bro.opr ? ' rel="sidebar" href="' + c + '"' : " onclick=\"return addthis_sendto('" + pe + "');\" href=\"javascript:return addthis_sendto('" + pe + "');\"  >") + g(ye, !0, be) + he[pe] + O + I)
                }
              }
              if (ne += P, ne += F + P, ne += p("at_complete", 0), ne += '<button onclick="_atw.clb()">' + r.lang(R, 17) + "</button>", ne += P, ne += p("at_success", 0) + r.lang(R, 13) + ' <a href="#" onclick="' + (addthis_do_ab ? "_ate.com('cle');_atw.rse()" : "_atw.get('at16filt').value='';_atw.filt('',_atw.list);_atw.sag()") + ';return false">' + _atw.lang(R, 37) + "</a>" + P, ne += p("at_sending", 0) + '<div class="at16c"><div class="at_redloading"></div><br/>' + r.lang(R, 45) + P + P, ne += p("at_error", 0, null, 'class="at_error"') + P, ne += p("at_copylink", 0), ne += P, ne += p("at_captcha", 0) + P, (n.bro.ffx || n.bro.msi || n.bro.chr || n.bro.saf) && (!R || R.indexOf("en") > -1))
                if (ne += p("at_promo"), (n.sau || {}).gat) {
                  var ke = "?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPE" + (n.bro.ffx ? "FF" : n.bro.msi ? "IE" : n.bro.chr ? "CR" : "SF") + "_DL";
                  ne += '<div style="float:left; text-align:center; margin-top:40px; width:100%"><span style="font-size:20px; color:#4c4c4c; font-weight:normal; line-height:24px;">Know what your users are<br>sharing, in real time.</span>', ne += '<a href="http://www.addthis.com/analytics' + ke + '" target="_blank"><img src="//s7.addthis.com/static/t00/ata_72.png" style="border:none; display:block;margin:25px 0 0 ' + (n.bro.msi && "BackCompat" == document.compatMode ? "" : "60") + 'px;" /></a>', ne += P + P
                } else n.bro.ffx ? (ne += '<div class="at-promo-content">', ne += "<h4>AddThis for Firefox</h4>", ne += "<span>" + _atw.lang(R, 42) + O, ne += '<div class="at-promo-btn"><a href="http://' + _atd + 'landing/?to=ffext&utm_source=el&utm_medium=link&utm_content=ATTool_orig&utm_campaign=AT_tooldl" target="_blank">' + _atw.lang(R, 43) + "</a>") : n.bro.chr ? (ne += '<div class="at-promo-content">', ne += "<h4>AddThis for Chrome</h4>", ne += "<span>" + _atw.lang(R, 42).replace("Firefox", "Chrome") + O, ne += '<div class="at-promo-btn at-promo-btm-ch"><a href="http://' + _atd + 'landing?to=chrome&utm_source=Promo&utm_medium=img&utm_content=ATCHPromo_orig&utm_campaign=AT_CHLP" target="_blank">' + _atw.lang(R, 43) + "</a>") : n.bro.saf ? (ne += '<div class="at-promo-content">', ne += "<h4>AddThis for Safari</h4>", ne += "<span>" + _atw.lang(R, 42).replace("Firefox", "Safari") + O, ne += '<div class="at-promo-btn at-promo-btm-ch"><a href="http://' + _atd + 'tools/safari?utm_source=Promo&utm_medium=img&utm_content=ATSFPromo_orig&utm_campaign=AT_SFLP" target="_blank">' + _atw.lang(R, 43) + "</a>") : (ne += '<div class="at-promo-content">', ne += "<h4>AddThis for Internet Explorer</h4>", ne += "<span>" + _atw.lang(R, 42).replace("Firefox", "Internet Explorer") + O, ne += '<div class="at-promo-btn at-promo-btm-ie"><a href="http://' + _atd + 'tools/internet-explorer?utm_source=Promo&utm_medium=img&utm_content=ATIEPromo_orig&utm_campaign=AT_IELP" target="_blank">' + _atw.lang(R, 43) + "</a>"), ne += n.bro.ff2 || D.ie6 || D.ie7 ? "" : '<br/><br/><br/><a target="_blank" href="http://' + _atd + 'pages/toolbar-preferences" style="padding-top:10px;font-size:10px">' + _atw.lang(R, 44) + "</a>", ne += P + P + P;
              else ne += p("at_promo", 0) + P;
              ne += p("at_email", 0), r.conf.ui_use_addressbook && (ne += '<div id="at_head" class="tmsg"><a id="at_use_addr" href="#" onclick="' + (addthis_do_ab ? "_ate.com('opp');_atab.abtd()" : "_atab.opp()") + ';return false">' + r.lang(R, 25) + "</a>" + P), ne += '<form onsubmit="addthis_send();return false;">', ne += w(r.lang(R, 7), "at_to", r.lang(R, 19)), ne += '<textarea id="at_to" ' + (addthis_do_ab ? 'class="abif" ' : D.ffx && 2 == D.mode ? 'class="atfxmode2"' : "") + 'cols="30" rows="4" ' + (D.ffx ? "" : 'style="resize:none"') + " onkey" + (n.bro.ffx ? "press" : "down") + "=\"if (window._atab) _atab.htkd(this, event)\" onkeyup=\"_atw.filt(this.value.replace(/[;\\n]/g,',').replace(/ /g,'').split(',').pop(), _atw.data.contacts.all, 'at16eatdr', '_ataddr', null, 'a')\" tabindex=\"" + r.ti++ + '" ' + $() + " >" + (addthis_do_ab ? addthis_eto : r.conf.ui_email_to || "") + "</textarea>", ne += p("at16eatdr", 0, 0, addthis_do_ab ? ' class="abif"' : "") + P, ne += w(r.lang(R, 8), "at_from", r.lang(R, 19)) + W("at_from", $(), "", 0), ne += w(r.lang(R, 9), "at_msg", r.lang(R, 20)), ne += '<textarea id="at_msg" style="resize:none" ' + (addthis_do_ab ? 'class="abif" ' : D.ffx && 2 == D.mode ? 'class="atfxmode2"' : "") + 'cols="30" rows="4" tabindex="' + r.ti++ + '" onkeyup="return _atw.lml(this,255);" ' + $() + '">' + (addthis_do_ab ? addthis_enote : r.conf.ui_email_note) + "</textarea>", ne += '<div id="ateml"><small>' + r.lang(R, 21) + "</small>" + P;
              var xe = r.lang(R, 10),
                Ce = xe.indexOf(":"),
                Te = "";
              Ce > 0 && (Te = xe.substr(Ce + 1), xe = xe.substr(0, Ce)), ne += "<div>", ne += '<input id="at16sub" class="atbtn" type="submit" tabindex="' + r.ti++ + '" value="' + r.lang(R, 11) + '" onclick="return addthis_send();"/>', ne += '<input class="atbtn atrse" type="reset" tabindex="' + r.ti++ + '" value="' + r.lang(R, 26) + '" onclick="return _atw.cef()"/>', ne += P, ne += "</form>", ne += '<div id="at16meo">', ne += "<span>" + _atw.list.more.replace("...", "") + ":" + O;
              var Le = {
                gmail: 1,
                yahoomail: 1,
                hotmail: 1,
                aolmail: 1,
                mailto: !D.xp
              };
              for (var pe in Le) Le[pe] && (ne += '<a class="at15t at15t_' + pe + '" tabindex="' + r.ti++ + '" href="#" onclick="_ate.as(\'' + pe + '\'); return false" alt="' + _atw.list[pe] + '"></a>');
              ne += P, ne += P, ne += P;
              var Se = !D.ipa && r.conf.ui_use_vertical_menu;
              ne += (addthis_do_ab ? "" : H) + P + P + P + P + P, Se && (j = j.replace('id="', 'class="atm-f' + (D.msi && D.mod ? " atm-f-iemode2" : "") + '" id="')), ne += '<div id="' + r.did + '" class="' + (D.ie6 ? r.did + (Se ? "atm" : "") + "ie6" : D.msi && D.mod && !Se ? "atiemode2" : "") + (Se ? " atm" : "") + '"onmouseover="_atw.xwa()" onmouseout="if (this.className.indexOf(\'border\')==-1) addthis_close()" style="z-index:1000000;position:' + (_atw.ver >= 250 && window.addthis && addthis.bar && addthis.bar.selects && (!D.msi || "BackCompat" != document.compatMode) ? "fixed;" : "absolute;") + 'display:none;visibility:hidden;top:0px;left:0px">', ne += Se ? '<div class="atm-i">' : '<div id="' + r.did + '_inner">', ne += p("at15s_head", 1, 0, Y) + '<span id="at15ptc"' + G + ">" + addthis_caption_share + "</span><span " + (r.conf.ui_use_close_control ? 'class="at15s_brandx" ' : "") + 'id="at15s_brand"' + G + ">" + r.conf.ui_cobrand + '</span><a id="at15sptx" ' + (r.conf.ui_use_close_control ? "" : 'class="at15dn" ') + 'href="#" onclick="return _atw.clb()"' + G + ' onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null" tabindex="9000" >X</a>' + P;
              var Ne = n.bro.msi,
                Ee = n.bro.chr,
                Me = n.bro.saf,
                Be = Ne ? "Internet&nbsp;Explorer" : Ee ? "Chrome" : Me ? "Safari" : "Firefox",
                Ae = function(e) {
                  return "http://" + _atd + (Me ? "tools/safari?" : Ne ? "tools/internet-explorer?" : "landing?" + (Ee ? "to=chrome&amp;" : "to=ffext&amp;")) + "utm_source=ps&amp;utm_medium=" + (e ? e : "link") + "&amp;utm_content=AT" + (Ne ? "IE" : Ee ? "CH" : Me ? "SF" : "FF") + "&amp;utm_campaign=ATSP" + (Ne ? "I" : Ee ? "C" : Me ? "S" : "F") + "4_DL"
                };
              if (ne += p("at_pspromo", 0), (n.sau || {}).gat) {
                var ke = "?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPS" + (n.bro.ffx ? "FF" : n.bro.msi ? "IE" : n.bro.chr ? "CR" : "SF") + "_DL";
                _atw.ver < 300 ? (ne += '<div style="float:left; text-align:center; margin-top:0px; width:235px"><span style="font-size:18px; color:#4c4c4c; font-weight:normal; line-height:24px;">Know what your users are<br>sharing, in real time.</span>', ne += '<a href="http://www.addthis.com/analytics' + ke + '" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 ' + (n.bro.msi && "BackCompat" == document.compatMode ? "0" : "44") + 'px;" /></a>', ne += P) : (ne += '<div style="float:left; text-align:center; margin:20px 0 0 -1px; width:150px"><span style="font-size:12px; color:#4c4c4c; font-weight:normal; line-height:16px;">Know what your users are<br>sharing, in real time.</span>', ne += '<a href="http://www.addthis.com/analytics' + ke + '" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 0" /></a>', ne += P)
              } else ne += '<div style="position:absolute;display:block;border:0">    <div id="at_testpromo" style="display:block"><div class="at-promo-single" align="center">    <h4>' + r.lang(R, 42).replace("Firefox", Be) + '</h4>    <div align="center"><a target="_blank" href="' + Ae("img") + '">      <div id="at_testpromo_bg" class="at-promo-single-dl-' + (Me ? "sa" : Ee ? "ch" : Ne ? "ie" : "ff") + '" border="0" alt="' + _atw.lang(R, 43) + '"></div></a>' + (n.bro.ie6 || n.bro.ie7 || n.bro.ff2 ? "" : (_atw.ver < 300 ? "<br>" : "") + '<a target="_blank" href="http://' + _atd + 'pages/toolbar-preferences" style="' + (Ne && 2 == n.bro.mod && Se ? "position:absolute;left:35px;top:125px" : "padding-top:10px") + ';font-size:10px">' + _atw.lang(R, 44) + "</a>") + "</div></div>    </div></div>";
              if (ne += P, _atw.ver < 200) {
                var Oe = '<div class="at15e_row"',
                  He = Oe + '><label for="">',
                  je = '</label><input class="at15ti" type="text" size="20" maxlength="80" value=" email address" onfocus="this.style.color=\'#000000\';if (this.value==\' email address\') this.value =\'\';" ';
                ne += p("at_email15", 0), ne += He + r.lang(R, 7) + ":" + je + ' id="at_to15" value="' + (r.conf.ui_email_to || "") + '"/>' + P, ne += He + r.lang(R, 8) + ":" + je + ' id="at_from15" value="' + (ee || r.conf.ui_email_from || "") + '"/>' + P, ne += Oe + ' style="height:60px;"><label for="at_msg15">' + r.lang(R, 9) + ':</label><textarea id="at_msg15" name="" cols="30" rows="3" style="width:150px;">' + r.conf.ui_email_note + "</textarea>" + P,
                  ne += He + '&nbsp;</label><input id="at_send" onclick="return addthis_send()" type="button" value="' + r.lang(R, 11) + '"/>' + P, ne += F + P
              }
              var Pe = "ja,fr,he,it,af,ga,el,tl,ro,ru,ms,mk,az,zh,sq,te,be,ta,uk,ml,eu,se,su,aze,gre,tra,fre,gdh,jpn,mac,mak,msa,may,ron,rum,rus,tam,tgl,ukr,zho",
                Ie = (window.addthis_ssh || "").split(","),
                ze = {},
                Se = !D.ipa && r.conf.ui_use_vertical_menu;
              ne += p("at_hover", 0, 0, Se ? 'class="atm-s"' : "");
              for (var ce = 0; ce < Ie.length; ce++) ze[Ie[ce]] = 1;
              se = D.ipa ? u(se, 7, "more") : Se ? u(se, 8, "more") : u(se, 12, "more");
              for (var ce = 0; ce < se.length; ce++) {
                var pe = se[ce],
                  he = r.list,
                  Fe = R.split("-").shift(),
                  Re = pe.split("_").shift(),
                  We = (pe.indexOf("facebook_") > -1 ? pe.split("_").pop() : 0, ze[Re] || ze[pe]),
                  be = ' style="' + (r.css[pe] ? r.css[pe] : "") + (te && ie ? " background-color:" + ie(pe) + ";)" : "") + '"';
                if (pe in he) {
                  if (ae[pe]) continue;
                  if ("string" != typeof he[pe]) continue;
                  var De = z.isTop(pe);
                  if (ye = te ? "at4-icon aticon-" + pe + " at-size-16" : De ? "at16nc at16t_" + pe + " at16t" : "at15t at15t_" + pe, "email" !== pe || "" !== U() || Z.indexOf("ffext") > -1 || Z.indexOf("fxe") > -1) {
                    if (Se) ne += '<a id="atic_' + pe + '" href="#" ' + _ate.maf.fnc + " onclick=\"return addthis_sendto('" + pe + '\');"><span class="' + ye + " " + (We ? " at_bold" : "") + '"' + be + ">" + he[pe] + ("more" === pe && -1 == Pe.indexOf(Fe) ? " (" + we + ")" : "") + O + "</a>";
                    else {
                      if ("link" == pe && D.ie9) continue;
                      ne += "<a" + d() + ' id="atic_' + pe + '" tabindex="' + ce + '2" ' + (D.ie6 || D.msi && 2 == D.mode ? "" : ' href="#" ') + ' class="at_item ' + (D.ipa ? "addthis_16x16_style " : "") + (n.bro.mod && n.bro.msi && !Se ? " atiemode2" : "") + (We ? " at_bold" : "") + " at_col" + ce % 2 + '"' + be + (n.bro.ffx && 2 != n.bro.mode || n.bro.ipa ? "" : ' onmouseover="_atw.shv(this)" onmouseout="_atw.rhv(this)" ') + " onclick=\"return addthis_sendto('" + pe + '\');"><span class="' + ye + '"' + be + ">" + he[pe] + ("more" === pe && -1 == Pe.indexOf(Fe) ? " (" + we + ")" : "") + O + I
                    }
                    0 == ce && (_ate.maf.firstCompact = "atic_" + pe)
                  }
                }
              }
              if (ne += F + P, ne += j.replace("mm", "hm"), ne += P, r.div = o.ce("div"), r.div.id = "at20mc", r.div.innerHTML = ne, D.ipa && (r.div.className = "ipad"), o.body.appendChild(r.div), r.div.style.zIndex = 1e6, r.div = null, _atw.ver < 200) {
                var ce = f("at_from15");
                ce && (ce.value = ee || r.conf.ui_email_from || "")
              } else {
                var ce = f("at_from");
                ce && (ce.value = addthis_do_ab ? addthis_efrom || ee || "" : ee || r.conf.ui_email_from || "")
              }
            }
            r.xwa(), r.dut(t, i), _atw.ver < 200 && (a && "share" != a ? "email" == a && (e = r.elt || e) : r.elt = e);
            var $e, qe, Ue, Ke = 16;
            e.getElementsByTagName && ($e = e.getElementsByTagName("img"), qe = e.getElementsByTagName("span")), Ue = _atw.ver > 200 && T(e, "addthis_counter") && qe && qe[0], $e && $e[0] ? (e = $e[0], Ke = 0) : Ue || _atw.ver > 200 && C(e, "addthis_button") && qe && qe[0] ? (e = qe[0], Ke = 0) : (n.bro.saf || n.bro.chr) && e.childNodes && 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType && (Ke = 0);
            var Qe = offLeft = void 0;
            if (Qe = "undefined" != typeof(window.addthis_config || {}).ui_offset_top ? (window.addthis_config || {}).ui_offset_top || 0 : r.conf.ui_offset_top || 0, "undefined" != typeof(window.addthis_config || {}).ui_offset_left ? offLeft = (window.addthis_config || {}).ui_offset_left || 0 : offLeft = r.conf.ui_offset_left || 0, r.sho(a, t), (_atw.ver < 200 || "email" != a && "feed" != a && "more" != a) && "bkemail" != a && ("email" != a || !C(r.did, "mmborder"))) {
              var Ye = (B(e), void 0 != offLeft ? offLeft : r.conf.ui_offset_left),
                Xe = void 0 != Qe ? Qe : r.conf.ui_offset_top,
                Ge = 0,
                Ve = 0,
                Je = E(),
                Ze = M(),
                ea = f(r.did) || {
                  style: 0
                },
                aa = ea.style,
                ta = D.ie6 ? f("atie6cmifh").style : null,
                ia = r.conf.ui_hover_direction || 0,
                na = r.conf.ui_compact_direction || -1,
                ra = "bkmore" == a || C(r.did, "mmborder"),
                oa = -1 != na && 1 & na,
                sa = -1 != na && 2 & na,
                la = -1 != na && 4 & na,
                da = -1 != na && 8 & na;
              if (0 === aa) return r.ost = !0, !1;
              aa.display = "";
              var ca = ea.clientWidth,
                _a = ea.clientHeight;
              if (ra) {
                var ua = f("at16p");
                Ge = Je[0] / 2 - ca / 2, Ve = ua && "" != ua.style.marginTop ? ua.style.marginTop : Math.max(0, Je[1] / 2 - 222.5) + "px", Ve = Ve.split("px").shift() - 8
              } else {
                var ma = e.getBoundingClientRect(),
                  fa = window.scrollY || document.documentElement.scrollTop,
                  ha = window.scrollX || document.documentElement.scrollLeft,
                  pa = window.innerHeight || document.documentElement.clientHeight;
                (0 === ma.height || 0 === ma.width) && (ma = e.parentElement.getBoundingClientRect());
                var ga = ma.top > .66 * pa,
                  wa = -1 !== ia && !da,
                  ba = ga && wa;
                if (la || 1 === ia || ba) {
                  var va = ea.getBoundingClientRect(),
                    ya = va.bottom - va.top;
                  Ge = ha + ma.left, Ve = fa + ma.top - ya
                } else Ge = ha + ma.left, Ve = fa + ma.bottom;
                var ka = Ge - Ze[0] + ca + 20 > Je[0];
                (oa || !sa && ka) && (Ge = Ge - ca + (e.clientWidth || 50))
              }
              if ((Ue && ((e.parentNode.parentNode.parentNode.parentNode || {}).className || "").indexOf("bar_vertical") > -1 || !Ue && ((e.parentNode.parentNode.parentNode || {}).className || "").indexOf("bar_vertical") > -1) && (Ve += Ze[1] + (Ue ? 16 : 0)), r.conf.ui_hide_embed) {
                var xa = Ge + ca,
                  Ca = Ve + _a,
                  Ta = o.gn("embed"),
                  La = 0,
                  Sa = 0,
                  Na = 0;
                for (ce = 0; ce < Ta.length; ce++) La = B(Ta[ce]), Sa = La[0], Na = La[1], Ge < Sa + Ta[ce].clientWidth && Ve < Na + Ta[ce].clientHeight && xa > Sa && Ca > Na && "hidden" != Ta[ce].style.visibility && (Ta[ce].addthis_hidden = !0, Ta[ce].style.visibility = "hidden")
              }
              x("at15s_head", "at15s_head_success"), v("at_pspromo", 1);
              var Ea = _ate.util.parent(e, ".addthis_bar"),
                Ma = _ate.util.parent(e, ".addthis_toolbox"),
                Ba = function(e) {
                  return window.getComputedStyle && null != e && e != document ? "fixed" === window.getComputedStyle(e).position : !1
                };
              Ge += parseInt(Ye, 10), Ve += parseInt(Xe, 10), aa.left = Ge + "px", Ba(Ma) || Ba(Ea) ? aa.top = Ve + Ze[1] + "px" : aa.top = Ve + "px", aa.visibility = "visible", ta && (ta.left = aa.left, ta.top = aa.top), ra && r.fpf()
            }
            if (_atw.ver >= 300) {
              _ate.maf.key = "9", _ate.maf && _ate.maf.sib && (_ate.maf.sib.tabIndex = "1000");
              try {
                f("at_hover").getElementsByTagName("a")[0].focus()
              } catch (Ta) {}
            }
            r.ost = !0
          },
          nuc: function(e, a, t) {
            v("at_error"), _atw.hsr(t, "nucaptcha")
          },
          hsr: function(e, a) {
            var t, i = "",
              n = _atw.share && _atw.share.email_vars ? _atw.share.email_vars : addthis_share && addthis_share.email_vars ? addthis_share.email_vars : {};
            if (_atw.ver < 200 || !window.postMessage) return void _atw.roe(e);
            if (v("at_sending"), v("at_email"), (t = f("at16recapframe")) || (f("at_captcha").innerHTML = "", t = document.createElement("iframe"), t.id = "at16recapframe", t.scrolling = "no", t.width = "298px", t.height = "315px", t.frameBorder = "0", f("at_captcha").appendChild(t)), n && "object" == typeof n)
              for (var r in n) "string" == typeof n[r] && (i += ("" === i ? "" : "&") + _euc(r) + "=" + _euc(n[r]));
            !addthis_share.email_template && _atw.share.email_template && (addthis_share.email_template = _atw.share.email_template);
            var o = _euc(_ate.share.geneurl(addthis_share, {
              from: f("at_from").value,
              to: f("at_to").value,
              vars: i,
              note: f("at_msg").value
            }, this.mck > 1 ? {
              product: "max-" + _atw.ver
            } : null));
            D.msi && (a = "recaptcha"), t.src = _atr + ("nucaptcha" == a ? "nucaptcha.html" : "recaptcha.html") + "#lng=" + _euc(I()) + "&tellfriend=" + _euc(o), y("at_captcha"), window._atab && (_atab.ipo() && _atab.opp(!0), v("at16pit", 1), window.addthis_do_ab && _ate.com("hip"))
          },
          cpmh: function(e) {
            if (e && e.origin && ".addthis.com" == e.origin.substr(e.origin.length - 12)) {
              var a = f("at16recapframe");
              switch (e.data) {
                case "reclb":
                  a && a.parentNode.removeChild(a), _atw.clb();
                  break;
                case "rerse":
                  v("at_error");
                  break;
                case "ncr":
                  _atw.err(_atw.lang(_atw.conf.ui_language, 51), f("at16recapframe")), _atw.cle();
                  break;
                case "cpe":
                  _atw.err(_atw.lang(_atw.conf.ui_language, 52), f("at16recapframe")), _atw.cle();
                  break;
                case "eok":
                  a && a.parentNode.removeChild(a), _atw.eok()
              }
            }
          },
          evar: function() {
            try {
              var e, a, t, i = _atw,
                n = function(e, a, t) {
                  return t || (t = window), (void 0 === t[e] || "" === t[e]) && (t[e] = a), t[e]
                },
                o = "addthis_",
                s = _ate,
                l = "services_",
                d = o + "logo",
                c = o + "header",
                _ = o + "caption_",
                u = s.gvl((_atw.conf || {}).ui_language || s.lng()),
                f = U(),
                h = _atw.loc,
                p = i.conf && !m(i.conf) ? i.conf : window.addthis_config || {},
                g = i.share || window.addthis_share || {},
                w = p.services_custom,
                b = _atw.ibt();
              if ((s.bro.xp || s.bro.mob) && delete i.list.mailto, _atw.ver < 200 && delete i.list.link, window[o + "language"] = u, n("ui_use_vertical_menu", _atw.ver >= 300, p), t = !D.ipa && p.ui_use_vertical_menu, (t || "en" != u || !window.addthis_ssh && !(w || []).length) && t && (h = _atw.loc = V), n(o + "localize", 0), n(o + "feed", ""), n(o + "wpl"), i.hf = addthis_feed.length > 0, n(_ + "email", i.lang(u, 3)), n(o + "caption", i.lang(u, 1)), n(o + "use_addressbook", !1), n(o + "do_ab", !1), n(o + "product", "men-" + _atw.ver), _atw.ver >= 300 && (i.list.settings = i.lang(u, 47) + "..."), i.list.more = i.lang(u, 2), i.list.email = i.lang(u, 4), i.list.favorites = i.lang(u, 5), i.list.print = i.lang(u, 22), n(o + "popup", !1), n(o + "popup_mode", !1), n(o + "url", ""), n(o + "append_data", !f || "addthis" == f.toLowerCase()), n(o + "brand", ""), n(o + "title", ""), n(o + "content", ""), n(o + "email_note", _atc.enote ? _atc.enote : ""), n(o + "email_from", ""), n(o + "email_to", ""), n(o + "use_personalization", !0), n(o + "options_default", h.split(",").slice(0, 11).join(",") + ",more"), n(o + "options_rank", h.split(",").join(",")), n(o + "options", addthis_options_default), n(o + "exclude", ""), n(o + "ssh", ""), n(d, ""), n(d + "_background", ""), n(d + "_color", ""), n(c + "_background", ""), n(c + "_color", ""), n(_ + "share", addthis_caption), n(_ + "feed", i.lang(u, 14)), n(o + "hide_embed", !1), n(o + "share", {}), D.ipa && (addthis_exclude && -1 == addthis_exclude.indexOf("print") && (addthis_exclude += ","), addthis_exclude += "print"), n("type", "link", g), n("url", addthis_url, g), n("title", addthis_title, g), n("description", "", g), n("swfurl", "", g), n("modules", {}, g), n("feed", addthis_feed, g), n("screenshot", "", g), n("author", "", g), n("email_template", window.addthis_email_template || "", g), n("email_vars", window.addthis_email_vars ? "string" == typeof addthis_email_vars ? _ate.util.fromKV(addthis_email_vars) : addthis_email_vars : {}, g), n("ui_cobrand", addthis_brand, p), n("ui_508_compliant", !1, p), n("ui_window_panes", !1, p), n("ui_close_control", !p.ui_cobrand && (p.ui_click || _atw.ver >= 200), p), n("ui_click", p.ui_window_panes, p), n("ui_email_note", addthis_email_note, p), n("ui_email_from", _ate.cookie.rck("_atfrom") || addthis_email_from || "", p), n("ui_email_to", addthis_email_to, p), n("ui_hover_direction", 0, p), n("ui_compact_direction", -1, p), n("ui_delay", window.addthis_hover_delay, p), n("ui_language", addthis_language, p), n("ui_hide_embed", addthis_hide_embed, p), n("ui_localize", addthis_localize, p), n("ui_header_color", addthis_header_color, p), n("ui_header_background", addthis_header_background, p), n("ui_icons", !0, p), n("ui_use_embeddable_services_beta", !1, p), n("ui_use_embeddable_services", p.ui_use_embeddable_services_beta, p), n("ui_use_mailto", !1, p), n("ui_use_addressbook", addthis_use_addressbook || b, p), n("ui_use_close_control", p.ui_close_control, p), n("ui_open_windows", !1, p), n("ui_show_promo", !0, p), n("data_ga_tracker", null, p), n("data_ga_property", null, p), n("data_omniture_collector", "", p), n("pubid", window.addthis_pub, p), n("username", p.pubid, p), n("product", addthis_product, p), n("data_track_clickback", addthis_append_data || p.data_track_linkback || _ate.track.ctp(p.product, p), p), n(l + "custom", [], p), n(l + "localize", u, p), n(l + "expanded", "", p), n(l + "compact_org", p.services_compact, p), n(l + "exclude", addthis_exclude, p), p.services_exclude = p.services_exclude.replace(/\s/g, ""), n(l + "exclude_natural", p.services_exclude, p), _atw.ver >= 300 && i.conf.parentServices && F(i.conf.parentServices, function(e) {
                  p.services_exclude += (p.services_exclude.length > 1 ? "," : "") + e
                }), 0 == p.ui_show_promo && (_ate.dbm = 1), p.ui_use_embeddable_services || g.swfurl || g.swfurl_secure || g.iframeurl || (!g.url || g.url == window.location.href) && (_ate.share.links.iframe_src || _ate.share.links.video_src))
                for (a in i.emb) i.list[a] = i.emb[a];
              else
                for (a in i.emb) g.modules[a] && (i.list[a] = i.emb[a]);
              if ((!D.win || D.xp) && delete i.list.windows, D.osx || delete i.list.dashboard, w)
                for (i.custom_list = i.custom_list || {}, w instanceof Array || (w = [w]), e = 0; e < w.length; e++) {
                  var v = w[e];
                  v.name && v.icon && v.url && r(v.url) && (v.code = v.url = v.url.replace(/ /g, ""), 0 === v.code.indexOf("http") && (v.code = v.code.substr(0 === v.code.indexOf("https") ? 8 : 7)), v.code = v.code.split("?").shift().split("/").shift().toLowerCase(), i.custom_list[v.code] = v, i.list[v.code] = v.name, i.css[v.code] = "background-image:url(" + v.icon + "); background-repeat: no-repeat;background-position: top left;background-color: transparent !important;", w[e] = v)
                } else w = [];
              var y = _ate.share.services.init(p) || {};
              if (i.crs = y.crs, i.csl = y.csl, p.services_compact = (y.conf || {}).services_compact, n(l + "compact", addthis_options, p), i.conf = p, i.share = g, p.ui_use_addressbook && !_atw.mab && (_atw.mab = _ate.ajs("menu-ab.js"), _atc.abf)) return !0
            } catch (s) {
              window.console && console.log("evar", s)
            }
            return !1
          }
        },
        function() {
          var e = n(389).getMixin({
              campaign: "AddThis compact menu"
            }),
            a = n(78).isBrandingReduced();
          j = p("at15pf") + e.generateBranding(a).element.innerHTML + "</div>", H = j.replace(/15/g, "16").replace(/compact/, "expanded")
        }(), _ate.menu = {
          open: function(e, a, t, i) {
            a = a || {}, _atw.conf = _atw.conf || {}, _ate = _ate || {};
            var n, r, o = _ate && _ate.menu && _ate.menu._menuConfig,
              s = _ate && _ate.menu && _ate.menu._menuShare,
              l = function(e) {
                return J.getElementById(e)
              },
              d = a.ui_language || _atw.conf.ui_language || I(),
              c = function(e, a) {
                l("at3winheader").getElementsByTagName("span")[0].className = "at-logo-bg-orange at3winheadersvc at300bs at15nc at15t_" + (e || "more"), l("at3winheader").getElementsByTagName("h3")[0].innerHTML = a || _atw.lang(d, 91)
              },
              _ = function(e) {
                var a = l("at3wincontent").childNodes;
                for (var t in a) 3 != a[t].nodeType && ((a[t].style || {}).display = "none");
                if ("undefined" != typeof e) {
                  var i = l(e);
                  i && ((i.style || {}).display = "block")
                }
              };
            if (_ate.xf.listen(), _ate.menu._menuShare = W(addthis_share), _ate.menu._menuConfig = W(addthis_config), _ate.menu._previous = e, _ate.util.mrg(_ate.menu._menuConfig, a), "undefined" != typeof t && (_ate.menu._menuShare.url = t.url || _ate.menu._menuShare.url, _ate.menu._menuShare.title = t.title || _ate.menu._menuShare.title, _ate.menu._menuShare.url_transforms = t.url_transforms || _ate.menu._menuShare.url_transforms || {}), _ate.menu._menuConfig.ui_pane = (a || {}).ui_pane || null, _ate.menu._menuConfig.ui_lightbox = (a || {}).ui_lightbox || (addthis_config || {}).ui_lightbox || "light", _ate.menu._menuConfig.image_service = (a || {}).image_service || null, _ate.menu._menuConfig.image_container = (a || {}).image_container || null, _ate.menu._menuConfig.image_include = (a || {}).image_include || null, _ate.menu._menuConfig.image_exclude = (a || {}).image_exclude || null, _ate.menu._menuConfig.ui_508_compliant) {
              switch (_ate.menu._menuConfig.ui_pane) {
                case null:
                  n = _ate.share.genurl("bookmark", 0, _ate.menu._menuShare, _ate.menu._menuConfig)
              }
              if (n) return n += window.location.href.search(/(\#|\?)/) > -1 ? "&" : "?", r = _ate.share.onw(n, "_blank", ""), void _ate.menu.close()
            }
            if (_ate.share.inBm() && "email" == _ate.menu._menuConfig.ui_pane ? window.location.href = _ate.share.genurl("email", 0, _ate.menu._menuShare, _ate.menu._menuConfig) + (window.location.href.search(/(\#|\?)/) > -1 ? "&" : "?") + "at3frame=true" : _ate.share.inBm() && "link" == _ate.menu._menuConfig.ui_pane && (window.location.href = _atr + 'link.28aff95e.html' + "#url=" + _euc(_euc(_ate.menu._menuShare.url)) + "&ats=" + _euc(P(_ate.menu._menuShare)) + "&atc=" + _euc(P(P(_ate.menu._menuConfig)))), !l("at3win")) {
              var u = document.createElement("div");
              u.innerHTML = H;
              var m = u.childNodes[0],
                f = _ate.util.json2html({
                  "div#at3win": {
                    "div.at3winwrapper": [{
                      "div#at3winheader": [{
                        "span.at3winheadersvc": [{
                          "span.at4-icon.aticon-compact": ""
                        }]
                      }, {
                        "h3#at3winheadermsg": _atw.lang(d, 91)
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
                      "div.ab-branding-footer": m
                    }]
                  }
                }),
                h = _ate.util.json2html({
                  "div#at3lb": ""
                });
              if (h.onclick = function() {
                  return addthis.menu.close(), !1
                }, D.msi && "BackCompat" == document.compatMode) {
                var p = "";
                switch ((_ate.menu._menuConfig.ui_lightbox || "").toLowerCase()) {
                  case "dark":
                    p = "url('//s7.addthis.com/static/t00/bg-at3lb-black.png') repeat";
                    break;
                  case "none":
                    p = "none";
                    break;
                  default:
                    p = "url('//s7.addthis.com/static/t00/bg-at3lb-white.png') repeat"
                }
                h.style.position = "absolute", h.style.background = p, h.style.height = J.body.scrollHeight, h.style.width = J.body.scrollWidth
              }
              J.body.appendChild(h), J.body.appendChild(f), l("at3winheaderclose").onclick = function() {
                return _ate.menu.close(), !1
              }
            }
            switch ((_ate.menu._menuConfig.ui_lightbox || "").toLowerCase()) {
              case "dark":
                l("at3lb").className = "at3lbdark";
                break;
              case "none":
                l("at3lb").className = "at3lbnone";
                break;
              default:
                l("at3lb").className = "at3lblight"
            }
            switch (_ate.menu._menuConfig.ui_pane) {
              case "email":
                c("email", _atw.lang(d, 4)), l("at3winemail") && l("at3wincontent").removeChild(l("at3winemail")), _ate.xf.upm || (_ate.menu._menuShare.url = _euc(_ate.menu._menuShare.url), _ate.menu._menuShare.title = _euc(_ate.menu._menuShare.title));
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
                l("at3wincontent").appendChild(g), _("at3winemail");
                break;
              case "link":
                c("link", "Copy"), l("at3wincopy") && l("at3wincontent").removeChild(l("at3wincopy"));
                var g = _ate.util.json2html({
                  "div#at3wincopy": [{
                    iframe: {
                      src: _atr + 'link.28aff95e.html' + "#url=" + _euc(_euc(_ate.menu._menuShare.url)) + "&ats=" + _euc(P(_ate.menu._menuShare)) + "&atc=" + _euc(P(P(_ate.menu._menuConfig))),
                      height: "100%",
                      width: "100%",
                      frameBorder: "0"
                    }
                  }]
                });
                l("at3wincontent").appendChild(g), _("at3wincopy");
                break;
              default:
                _ate.menu._menuConfig;
                if (c("more", "Share"), !_ate.xf.upm && l("at3winshare") && l("at3wincontent").removeChild(l("at3winshare")), l("at3winshare")) _ate.menu._message(l("at3winshare-iframe").contentWindow, e), _ate.xf.send(l("at3winshare-iframe").contentWindow, "addthis.expanded.share.ui_pane", _ate.menu._menuConfig);
                else {
                  if (_ate.xf.upm) var w = _atc.rsrcs.bookmark + "#ats=" + _euc(P(_ate.menu._menuShare)) + "&atc=" + _euc(P(_ate.menu._menuConfig));
                  else {
                    _ate.menu._menuShare.url = _euc(_ate.menu._menuShare.url), _ate.menu._menuShare.title = _euc(_ate.menu._menuShare.title);
                    var w = _atc.rsrcs.bookmark + "#ats=" + _euc(P(_ate.menu._menuShare)) + "&atc=" + _euc(P(_ate.menu._menuConfig))
                  }
                  var g = _ate.util.json2html({
                    "div#at3winshare": [{
                      iframe: {
                        src: w,
                        height: "100%",
                        width: "100%",
                        frameBorder: "0",
                        id: "at3winshare-iframe"
                      }
                    }]
                  });
                  _ate.menu._menuShare.url = _duc(_ate.menu._menuShare.url), l("at3wincontent").appendChild(g), _ate.xf.upm && (_ate.menu._regListeners.bookmark ? _ate.menu._message(null) : (_ate.menu._regListeners.bookmark = !0, addthis.addEventListener("addthis.expanded.bookmark", function(a) {
                    _ate.menu._message(l("at3winshare-iframe").contentWindow, e), _ate.xf.send(l("at3winshare-iframe").contentWindow, "addthis.expanded.share.ui_pane", _ate.menu._menuConfig)
                  }, !1)))
                }
                _("at3winshare"), _ate.xf.upm && l("at3winshare-iframe") && _ate.xf.send(l("at3winshare-iframe").contentWindow, "addthis.expanded.reopen", {})
            }
            if (1 != i)
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
                  l("at3winshare-iframe").focus()
                } catch (e) {}
              }, 10), addthis.menu._displayed = !1;
              else {
                l("at3lb").style.display = "block", l("at3win").style.display = "block", addthis.menu._displayed = !0;
                try {
                  l("at3winshare-iframe").focus()
                } catch (b) {}
              }
            window.onkeypress = function(e) {
              e = e || window.event;
              var a = e.keyCode ? e.keyCode : e.which;
              a && 27 == a && addthis.menu._displayed && _ate.menu.close()
            }, _ate.menu._regListeners.header || (_ate.menu._regListeners.header = !0, addthis.addEventListener("addthis.expanded.header", function(e) {
              c(e.target.svc, e.target.msg)
            }, !1)), _ate.menu._regListeners.pane || (_ate.menu._regListeners.pane = !0, addthis.addEventListener("addthis.expanded.pane", function(e) {
              _ate.menu._menuConfig.ui_pane = e.target.pane, _ate.menu.open(_ate.maf && _ate.maf.sib, _ate.menu._menuConfig, _ate.menu._menuShare, !0)
            }, !1)), _ate.menu._regListeners.close || (_ate.menu._regListeners.close = !0, addthis.addEventListener("addthis.expanded.close", function(e) {
              _ate.menu.close()
            })), _ate.menu._regListeners.print || (_ate.menu._regListeners.print = !0, addthis.addEventListener("addthis.expanded.print", function(e) {
              _ate.menu.close(), setTimeout(function() {
                K.print()
              }, 500)
            })), Y = t && t.service && "email" === t.service || o && "email" === o.ui_pane ? "email" : "expanded", _ate.ed.fire("addthis.menu.open", window.addthis || {}, {
              pane: Y,
              url: a && a.url || s && s.url || "",
              title: a && a.title || s && s.title || "",
              conf: a,
              share: t
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
              var e = f("at3win"),
                a = f("at3lb");
              e && a && (e.style.display = "none", a.style.display = "none")
            }
            if (_ate.menu._previous) try {
              _ate.menu._previous.focus()
            } catch (t) {}
            _ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: Y
            }), Y = void 0
          },
          _animating: !1,
          _displayed: !1,
          _menuShare: {},
          _menuConfig: {},
          _message: function(e, a) {
            _ate.menu._menuConfig && "undefined" != typeof _ate.menu._menuConfig.image_container ? _ate.menu._menuConfig.image_container : null, _ate.menu._menuConfig && "undefined" != typeof _ate.menu._menuConfig.image_include ? _ate.menu._menuConfig.image_include : null, _ate.menu._menuConfig && "undefined" != typeof _ate.menu._menuConfig.image_exclude ? _ate.menu._menuConfig.image_exclude : null;
            _ate.xf.send(e, "addthis.expanded.data.share", _ate.menu._menuShare), _ate.xf.send(e, "addthis.expanded.data.config", _ate.menu._menuConfig)
          },
          _previous: null,
          _regListeners: {}
        }, addthis.menu = _ate.menu.open, addthis.menu.close = _ate.menu.close, _ate.ao = function(e, a, t, i, n, r, o) {
          if (e === document.body) return _ate.menu.open(e, n, r);
          if (D.iph || D.dro || D.wph) return !0;
          var s = _atw;
          if (_atw.ver >= 250 && (n && !m(n) && (s.conf = n), r && !m(r) && (s.share = r)), !s.evar()) {
            t && _ate.usu(t);
            var l = s.dut(t, i);
            s.share || (s.share = {}), t && (s.share.url = l[0]), i && (s.share.title = l[1]);
            var d = (_ate, document, (t || s.share.url || "").toLowerCase(), (i || s.share.title || "").toLowerCase(), U(), s.conf.ui_delay);
            if (d && "" === a) {
              if (d = Math.min(500, Math.max(50, d)), s.xhwa(), s.hwa = null, "hwe" != e) return s.hwe = e, void(s.hwa = setTimeout(function() {
                _ate.ao("hwe", a, t || s.share.url, i || s.share.title || "")
              }, d));
              e = s.hwe, s.hwe = null
            }
            return s.conf.ui_window_panes === !0 ? _ate.as("email" == a || "link" == a ? a : "more", s.conf, s.share) : "link" == a ? s.menu(e, a, _atr + 'link.28aff95e.html' + "#inl=true&url=" + _euc(t) + "&ats=" + _euc(P(addthis_share)) + "&atc=" + _euc(P(addthis_config)), i) : s.menu(e, a, t, i), (!s.sta || "expanded" == s.sta && "email" == a) && ("more" == a && (a = "expanded"), a || (a = "compact"), !s.sta || "email" != a && "link" != a || _ate.ed.fire("addthis.menu.close", window.addthis || {}, {
              pane: s.sta
            }), s.sta = a, _ate.ed.fire("addthis.menu.open", window.addthis || {}, {
              element: e,
              pane: a,
              url: t,
              title: i,
              conf: n,
              share: r
            })), !1
          }
        }, _ate.ac = function() {
          _atw.xhwa(), N("at_pspromo") || (clearTimeout(_atw.cwa), _atw.cwa = setTimeout(_atw.clo, _atc.cwait))
        }, _ate.as = function(e, a, t) {
          var i, n = W(t),
            r = W(a);
          return t = _ate.util.extend(n || {}, _atw.share || {}), a = _ate.util.extend(r || {}, _atw.conf || {}), i = _ate.util.extend(t, a), _ate.share.cleanly(e, i), !1
        }, window.addthis_send = function() {
          var e = _atw.ver,
            a = _atw,
            t = (a.fe, e >= 200 || a.ibm()),
            i = f("at_from" + (t ? "" : "15")),
            n = f("at_to" + (t ? "" : "15")),
            r = (f("at_email" + (t ? "" : "15")), f("at_msg" + (t ? "" : "15"))),
            s = n.value.replace(/[\n;]/g, ","),
            l = "at_error",
            d = a.conf.ui_language,
            c = 0;
          t ? a.rse() : a.fe = null, "," == s.substr(s.length - 1) && (s = s.substr(0, s.length - 1));
          var _ = s.split(",");
          if (_.length > 5) a.err(a.lang(d, 34), n, l), c = 1;
          else {
            for (var u = 0; u < _.length; u++) {
              var m = _ate.trim(_[u]),
                h = m.indexOf("<"),
                p = m.indexOf(">");
              if (h > -1 && (m = m.substr(h + 1)), p > -1 && (m = m.substr(0, p - h - 1)), m.length && "" !== m.replace(/ /g, "") && !o(m)) {
                a.err(a.lang(d, 12), n, l), c = 1;
                break
              }
            }
            "" === s.replace(/ ,/g, "") && (a.err(a.lang(d, 12), n, l), c = 1)
          }
          if (o(i.value) || (a.err(a.lang(d, 12), i, l), c = 1), r.value.length > 255 && (a.err(a.lang(d, 21), r, l), c = 1), !c) {
            var g = r.value,
              w = "";
            if (a.share.email_vars && "object" == typeof a.share.email_vars)
              for (var b in a.share.email_vars) "string" == typeof a.share.email_vars[b] && (w += ("" === w ? "" : "&") + _euc(b) + "=" + _euc(a.share.email_vars[b]));
            g == a.lang(d, 20) && (g = ""), _ate.cookie.sck("_atfrom", i.value), _atw.isrc = _ate.share.geneurl(a.share, {
              from: i.value,
              to: n.value.replace(/[;\n]/g, ","),
              vars: w,
              note: g
            }, a.mck > 1 ? {
              product: "max-" + _atw.ver
            } : null), setTimeout(function() {
              _atw.taf = _ate.ajs(_atw.isrc, 1)
            }, 100), _ate.ed.fire("addthis.menu.share", window.addthis || {}, {
              service: "email",
              url: a.share.url
            }), v("at_email", 1), t ? y("at_sending") : a.eok()
          }
          return !1
        };
      for (; _ate.plo && _ate.plo.length > 0;) {
        var Z = _ate.plo.pop(),
          ee = Z[0];
        switch (ee) {
          case "open":
            addthis_open(Z[1], Z[2], Z[3], Z[4], Z[5], Z[6]), _atw.plo.push(Z);
            break;
          case "cout":
            break;
          case "send":
            var ae, te;
            Z.length > 2 && (ae = Z[2], te = Z[3]), addthis_sendto(Z[1], ae, te);
            break;
          case "span":
            var ie = f(Z[1]);
            ie && (_atw.evar(), ie.innerHTML = '<a href="' + _ate.share.genurl("") + "\" onmouseover=\"return addthis_open(this, 'share', '" + Z[2] + "', '" + (Z[3] || "").replace(/'/g, "\\'") + '\')" onmouseout="addthis_close()" onclick="return addthis_to()" class="snap_noshots"><img src="' + _atr + 'static/btn/v2/lg-bookmark-en.gif" width="125" height="16" style="border:none;padding:0px" alt="AddThis" /></a>');
            break;
          case "deco":
            _atw.evar(), Z[1](Z[2], Z[3], Z[4], Z[5]);
            break;
          case "pref":
            _atw.gps(Z[1])
        }
      }
      _ate.ed.fire("addthis.menu.ready", {
        atw: _atw
      }), window.postMessage && (D.msi ? window.attachEvent("onmessage", _atw.cpmh) : window.addEventListener("message", _atw.cpmh, !1))
    }
  },
  41: function(e, a, t) {
    var i, n;
    i = [], n = function() {
      function e(e) {
        if (e && 1 !== e.nodeType) throw new Error("Cannot wrap non-element in Emdot");
        this.element = e, this.element.style || (this.element.style = {})
      }

      function a(e) {
        return function(a) {
          try {
            return this.attr(e, a)
          } catch (t) {
            return this.element[e] = a, this
          }
        }
      }

      function t(a) {
        return function() {
          var t, n, r, o = Array.prototype.slice.call(arguments, 0);
          for (t = document.createElement(a), r = 0; r < o.length; r++) n = o[r], i(t, n);
          return new e(t)
        }
      }

      function i(a, t) {
        if (null !== t) {
          if (void 0 === t) a.appendChild(document.createTextNode(""));
          else if (t.constructor === String || t.constructor === Number) a.appendChild(document.createTextNode(t));
          else if (t && 1 === t.nodeType) a.appendChild(t);
          else if (t instanceof e) a.appendChild(t.element);
          else {
            if (!(t instanceof Array)) {
              if (t) throw new Error("Could not turn truthy argument into element");
              return !1
            }
            for (var n = 0; n < t.length; n++) i(a, t[n])
          }
          return !0
        }
      }
      var n = "html,head,title,base,link,meta,style,script,noscript,template,body,section,nav,article,aside,h1,h2,h3,h4,h5,h6,header,footer,address,main,p,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,div,a,em,strong,small,s,cite,q,dfn,abbr,data,time,code,var,samp,kbd,sub,sup,i,b,u,mark,ruby,rt,rp,bdi,bdo,span,br,wbr,ins,del,img,iframe,embed,object,param,video,audio,source,track,canvas,map,area,svg,table,caption,colgroup,col,tbody,thead,tfoot,tr,td,th,form,fieldset,legend,label,input,button,select,datalist,optgroup,option,textarea,keygen,output,progress,meter,details,summary,menuitem,menu".split(","),
        r = "value,name,id,href,src,title,alt,target,type,role,placeholder,action,method,autocorrect,autocapitalize,required".split(","),
        o = e.prototype;
      for (o.style = function(e) {
          if (e)
            for (var a = e.replace(/^\s+/, "").replace(/[;\s]+$/, "").split(";"), t = 0, i = a.length; i > t; t++) {
              var n = a[t].split(":"),
                r = n[0].replace(/\s+/g, ""),
                o = n[1].replace(/^\s+/, "").replace(/\s+$/, "");
              if (!r || !o) throw new Error("Emdot: Malformed style string - " + e);
              try {
                o.replace(/\s+/g, ""), this.element.style[r] = o
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
        }, o.data = function(e, a) {
          return null === a || "" === a ? this.element.removeAttribute("data-" + e, a) : e && this.element.setAttribute("data-" + e, a), this
        }, o.attr = function(e, a) {
          return null === a || "" === a ? this.element.removeAttribute(e, a) : e && this.element.setAttribute(e, a), this
        }, o.aria = function(e, a) {
          return this.attr("aria-" + e, a)
        }, o.html = function(e) {
          return this.element.innerHTML = e, this
        }, emdot = function(e, a, t) {
          var i, n = [],
            t = t || this;
          for (i = 0, len = e.length; i < len; i++) n[n.length] = a.call(t, e[i], i, e);
          return n
        }, l = n.length - 1; l >= 0; l--) {
        var s = n[l];
        emdot[s] = t(s)
      }
      for (var l = r.length - 1; l >= 0; l--) {
        var d = r[l];
        o[d] = a(d)
      }
      return emdot
    }.apply(a, i), !(void 0 !== n && (e.exports = n))
  },
  113: function(e, a, t) {
    "use strict";
    var i = t(19),
      n = t(15);
    e.exports = function(e) {
      var a = {
          utm_source: "AddThis Tools",
          utm_medium: "image",
          utm_campaign: e
        },
        t = i(a, function(e, a) {
          return a
        }),
        r = n(t, function(e, a) {
          return window.encodeURIComponent(a) + "=" + window.encodeURIComponent(e)
        }).join("&");
      return "//www.addthis.com/website-tools/overview?" + r
    }
  },
  389: function(e, a, t) {
    "use strict";
    var i = t(113),
      n = t(41);
    e.exports.getMixin = function(e) {
      return e = e || {}, {
        generateBranding: function(a) {
          var t = i(e.campaign);
          return Boolean(a) ? this._generateReducedBranding(t) : this._generateAddThisBranding(t)
        },
        _generateReducedBranding: function(e) {
          return n.div(n.a(n.span("AddThis")).css("at-branding-info").href(e).title("Powered by AddThis").target("_blank"))
        },
        _generateAddThisBranding: function(e) {
          return n.div(n.a(n.div().css("at-branding-icon"), n.span("AddThis").css("at-branding-addthis")).css("at-branding-logo").href(e).title("Powered by AddThis").target("_blank"))
        }
      }
    }
  }
});