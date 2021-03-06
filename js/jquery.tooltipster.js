(function(d, f, h) {
  var e = "tooltipster",
    b = {
      animation: "fade",
      arrow: true,
      arrowColor: "",
      autoClose: true,
      content: null,
      contentAsHTML: false,
      contentCloning: true,
      debug: true,
      delay: 200,
      minWidth: 0,
      maxWidth: null,
      functionInit: function(l, m) {},
      functionBefore: function(l, m) {
        m()
      },
      functionReady: function(l, m) {},
      functionAfter: function(l) {},
      hideOnClick: false,
      icon: "(?)",
      iconCloning: true,
      iconDesktop: false,
      iconTouch: false,
      iconTheme: "tooltipster-icon",
      interactive: false,
      interactiveTolerance: 350,
      multiple: false,
      offsetX: 0,
      offsetY: 0,
      onlyOne: false,
      position: "top",
      positionTracker: false,
      positionTrackerCallback: function(l) {
        if (this.option("trigger") == "hover" && this.option("autoClose")) {
          this.hide()
        }
      },
      restoration: "current",
      speed: 350,
      timer: 0,
      theme: "tooltipster-default",
      touchDevices: true,
      trigger: "hover",
      updateAnimation: true
    };

  function i(m, l) {
    this.bodyOverflowX;
    this.callbacks = {
      hide: [],
      show: []
    };
    this.checkInterval = null;
    this.Content;
    this.$el = d(m);
    this.$elProxy;
    this.elProxyPosition;
    this.enabled = true;
    this.options = d.extend({}, b, l);
    this.mouseIsOverProxy = false;
    this.namespace = "tooltipster-" + Math.round(Math.random() * 100000);
    this.Status = "hidden";
    this.timerHide = null;
    this.timerShow = null;
    this.$tooltip;
    this.options.iconTheme = this.options.iconTheme.replace(".", "");
    this.options.theme = this.options.theme.replace(".", "");
    this._init()
  }
  i.prototype = {
    _init: function() {
      var m = this;
      if (h.querySelector) {
        var l = null;
        if (m.$el.data("tooltipster-initialTitle") === undefined) {
          l = m.$el.attr("title");
          if (l === undefined) {
            l = null
          }
          m.$el.data("tooltipster-initialTitle", l)
        }
        if (m.options.content !== null) {
          m._content_set(m.options.content)
        } else {
          m._content_set(l)
        }
        var n = m.options.functionInit.call(m.$el, m.$el, m.Content);
        if (typeof n !== "undefined") {
          m._content_set(n)
        }
        m.$el.removeAttr("title").addClass("tooltipstered");
        if ((!g && m.options.iconDesktop) || (g && m.options.iconTouch)) {
          if (typeof m.options.icon === "string") {
            m.$elProxy = d('<span class="' + m.options.iconTheme + '"></span>');
            m.$elProxy.text(m.options.icon)
          } else {
            if (m.options.iconCloning) {
              m.$elProxy = m.options.icon.clone(true)
            } else {
              m.$elProxy = m.options.icon
            }
          }
          m.$elProxy.insertAfter(m.$el)
        } else {
          m.$elProxy = m.$el
        }
        if (m.options.trigger == "hover") {
          m.$elProxy.on("mouseenter." + m.namespace, function() {
            if (!j() || m.options.touchDevices) {
              m.mouseIsOverProxy = true;
              m._show()
            }
          }).on("mouseleave." + m.namespace, function() {
            if (!j() || m.options.touchDevices) {
              m.mouseIsOverProxy = false
            }
          });
          if (g && m.options.touchDevices) {
            m.$elProxy.on("touchstart." + m.namespace, function() {
              m._showNow()
            })
          }
        } else {
          if (m.options.trigger == "click") {
            m.$elProxy.on("click." + m.namespace, function() {
              if (!j() || m.options.touchDevices) {
                m._show()
              }
            })
          }
        }
      }
    },
    _show: function() {
      var l = this;
      if (l.Status != "shown" && l.Status != "appearing") {
        if (l.options.delay) {
          l.timerShow = setTimeout(function() {
            if (l.options.trigger == "click" || (l.options.trigger == "hover" && l.mouseIsOverProxy)) {
              l._showNow()
            }
          }, l.options.delay)
        } else {
          l._showNow()
        }
      }
    },
    _showNow: function(m) {
      var l = this;
      l.options.functionBefore.call(l.$el, l.$el, function() {
        if (l.enabled && l.Content !== null) {
          if (m) {
            l.callbacks.show.push(m)
          }
          l.callbacks.hide = [];
          clearTimeout(l.timerShow);
          l.timerShow = null;
          clearTimeout(l.timerHide);
          l.timerHide = null;
          if (l.options.onlyOne) {
            d(".tooltipstered").not(l.$el).each(function(y, z) {
              var x = d(z),
                w = x.data("tooltipster-ns");
              d.each(w, function(B, D) {
                var A = x.data(D),
                  C = A.status(),
                  E = A.option("autoClose");
                if (C !== "hidden" && C !== "disappearing" && E) {
                  A.hide()
                }
              })
            })
          }
          var o = function() {
            l.Status = "shown";
            d.each(l.callbacks.show, function(w, x) {
              x.call(l.$el)
            });
            l.callbacks.show = []
          };
          if (l.Status !== "hidden") {
            var r = 0;
            if (l.Status === "disappearing") {
              l.Status = "appearing";
              if (a()) {
                l.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + l.options.animation + "-show");
                if (l.options.speed > 0) {
                  l.$tooltip.delay(l.options.speed)
                }
                l.$tooltip.queue(o)
              } else {
                l.$tooltip.stop().fadeIn(o)
              }
            } else {
              if (l.Status === "shown") {
                o()
              }
            }
          } else {
            l.Status = "appearing";
            var r = l.options.speed;
            l.bodyOverflowX = d("body").css("overflow-x");
            d("body").css("overflow-x", "hidden");
            var s = "tooltipster-" + l.options.animation,
              u = "-webkit-transition-duration: " + l.options.speed + "ms; -webkit-animation-duration: " + l.options.speed + "ms; -moz-transition-duration: " + l.options.speed + "ms; -moz-animation-duration: " + l.options.speed + "ms; -o-transition-duration: " + l.options.speed + "ms; -o-animation-duration: " + l.options.speed + "ms; -ms-transition-duration: " + l.options.speed + "ms; -ms-animation-duration: " + l.options.speed + "ms; transition-duration: " + l.options.speed + "ms; animation-duration: " + l.options.speed + "ms;",
              p = l.options.minWidth ? "min-width:" + Math.round(l.options.minWidth) + "px;" : "",
              q = l.options.maxWidth ? "max-width:" + Math.round(l.options.maxWidth) + "px;" : "",
              t = l.options.interactive ? "pointer-events: auto;" : "";
            l.$tooltip = d('<div class="tooltipster-base ' + l.options.theme + '" style="' + p + " " + q + " " + t + " " + u + '"><div class="tooltipster-content"></div></div>');
            if (a()) {
              l.$tooltip.addClass(s)
            }
            l._content_insert();
            l.$tooltip.appendTo("body");
            l.reposition();
            l.options.functionReady.call(l.$el, l.$el, l.$tooltip);
            if (a()) {
              l.$tooltip.addClass(s + "-show");
              if (l.options.speed > 0) {
                l.$tooltip.delay(l.options.speed)
              }
              l.$tooltip.queue(o)
            } else {
              l.$tooltip.css("display", "none").fadeIn(l.options.speed, o)
            }
            l._interval_set();
            d(f).on("scroll." + l.namespace + " resize." + l.namespace, function() {
              l.reposition()
            });
            if (l.options.autoClose) {
              d("body").off("." + l.namespace);
              if (l.options.trigger == "hover") {
                if (g) {
                  setTimeout(function() {
                    d("body").on("touchstart." + l.namespace, function() {
                      l.hide()
                    })
                  }, 0)
                }
                if (l.options.interactive) {
                  if (g) {
                    l.$tooltip.on("touchstart." + l.namespace, function(w) {
                      w.stopPropagation()
                    })
                  }
                  var n = null;
                  l.$elProxy.add(l.$tooltip).on("mouseleave." + l.namespace + "-autoClose", function() {
                    clearTimeout(n);
                    n = setTimeout(function() {
                      l.hide()
                    }, l.options.interactiveTolerance)
                  }).on("mouseenter." + l.namespace + "-autoClose", function() {
                    clearTimeout(n)
                  })
                } else {
                  l.$elProxy.on("mouseleave." + l.namespace + "-autoClose", function() {
                    l.hide()
                  })
                }
                if (l.options.hideOnClick) {
                  l.$elProxy.on("click." + l.namespace + "-autoClose", function() {
                    l.hide()
                  })
                }
              } else {
                if (l.options.trigger == "click") {
                  setTimeout(function() {
                    d("body").on("click." + l.namespace + " touchstart." + l.namespace, function() {
                      l.hide()
                    })
                  }, 0);
                  if (l.options.interactive) {
                    l.$tooltip.on("click." + l.namespace + " touchstart." + l.namespace, function(w) {
                      w.stopPropagation()
                    })
                  }
                }
              }
            }
          }
          if (l.options.timer > 0) {
            l.timerHide = setTimeout(function() {
              l.timerHide = null;
              l.hide()
            }, l.options.timer + r)
          }
        }
      })
    },
    _interval_set: function() {
      var l = this;
      l.checkInterval = setInterval(function() {
        if (d("body").find(l.$el).length === 0 || d("body").find(l.$elProxy).length === 0 || l.Status == "hidden" || d("body").find(l.$tooltip).length === 0) {
          if (l.Status == "shown" || l.Status == "appearing") {
            l.hide()
          }
          l._interval_cancel()
        } else {
          if (l.options.positionTracker) {
            var n = l._repositionInfo(l.$elProxy),
              m = false;
            if (k(n.dimension, l.elProxyPosition.dimension)) {
              if (l.$elProxy.css("position") === "fixed") {
                if (k(n.position, l.elProxyPosition.position)) {
                  m = true
                }
              } else {
                if (k(n.offset, l.elProxyPosition.offset)) {
                  m = true
                }
              }
            }
            if (!m) {
              l.reposition();
              l.options.positionTrackerCallback.call(l, l.$el)
            }
          }
        }
      }, 200)
    },
    _interval_cancel: function() {
      clearInterval(this.checkInterval);
      this.checkInterval = null
    },
    _content_set: function(l) {
      if (typeof l === "object" && l !== null && this.options.contentCloning) {
        l = l.clone(true)
      }
      this.Content = l
    },
    _content_insert: function() {
      var l = this,
        m = this.$tooltip.find(".tooltipster-content");
      if (typeof l.Content === "string" && !l.options.contentAsHTML) {
        m.text(l.Content)
      } else {
        m.empty().append(l.Content)
      }
    },
    _update: function(m) {
      var l = this;
      l._content_set(m);
      if (l.Content !== null) {
        if (l.Status !== "hidden") {
          l._content_insert();
          l.reposition();
          if (l.options.updateAnimation) {
            if (a()) {
              l.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + l.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + l.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + l.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + l.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + l.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
              }).addClass("tooltipster-content-changing");
              setTimeout(function() {
                if (l.Status != "hidden") {
                  l.$tooltip.removeClass("tooltipster-content-changing");
                  setTimeout(function() {
                    if (l.Status !== "hidden") {
                      l.$tooltip.css({
                        "-webkit-transition": l.options.speed + "ms",
                        "-moz-transition": l.options.speed + "ms",
                        "-o-transition": l.options.speed + "ms",
                        "-ms-transition": l.options.speed + "ms",
                        transition: l.options.speed + "ms"
                      })
                    }
                  }, l.options.speed)
                }
              }, l.options.speed)
            } else {
              l.$tooltip.fadeTo(l.options.speed, 0.5, function() {
                if (l.Status != "hidden") {
                  l.$tooltip.fadeTo(l.options.speed, 1)
                }
              })
            }
          }
        }
      } else {
        l.hide()
      }
    },
    _repositionInfo: function(l) {
      return {
        dimension: {
          height: l.outerHeight(false),
          width: l.outerWidth(false)
        },
        offset: l.offset(),
        position: {
          left: parseInt(l.css("left")),
          top: parseInt(l.css("top"))
        }
      }
    },
    hide: function(o) {
      var l = this;
      if (o) {
        l.callbacks.hide.push(o)
      }
      l.callbacks.show = [];
      clearTimeout(l.timerShow);
      l.timerShow = null;
      clearTimeout(l.timerHide);
      l.timerHide = null;
      var n = function() {
        d.each(l.callbacks.hide, function(p, q) {
          q.call(l.$el)
        });
        l.callbacks.hide = []
      };
      if (l.Status == "shown" || l.Status == "appearing") {
        l.Status = "disappearing";
        var m = function() {
          l.Status = "hidden";
          if (typeof l.Content == "object" && l.Content !== null) {
            l.Content.detach()
          }
          l.$tooltip.remove();
          l.$tooltip = null;
          d(f).off("." + l.namespace);
          d("body").off("." + l.namespace).css("overflow-x", l.bodyOverflowX);
          d("body").off("." + l.namespace);
          l.$elProxy.off("." + l.namespace + "-autoClose");
          l.options.functionAfter.call(l.$el, l.$el);
          n()
        };
        if (a()) {
          l.$tooltip.clearQueue().removeClass("tooltipster-" + l.options.animation + "-show").addClass("tooltipster-dying");
          if (l.options.speed > 0) {
            l.$tooltip.delay(l.options.speed)
          }
          l.$tooltip.queue(m)
        } else {
          l.$tooltip.stop().fadeOut(l.options.speed, m)
        }
      } else {
        if (l.Status == "hidden") {
          n()
        }
      }
      return l
    },
    show: function(l) {
      this._showNow(l);
      return this
    },
    update: function(l) {
      return this.content(l)
    },
    content: function(l) {
      if (typeof l === "undefined") {
        return this.Content
      } else {
        this._update(l);
        return this
      }
    },
    reposition: function() {
      var x = this;
      if (d("body").find(x.$tooltip).length !== 0) {
        x.$tooltip.css("width", "");
        x.elProxyPosition = x._repositionInfo(x.$elProxy);
        var ag = null,
          ad = d(f).width(),
          aa = x.elProxyPosition,
          af = x.$tooltip.outerWidth(false),
          m = x.$tooltip.innerWidth() + 1,
          J = x.$tooltip.outerHeight(false);
        if (x.$elProxy.is("area")) {
          var P = x.$elProxy.attr("shape"),
            Z = x.$elProxy.parent().attr("name"),
            L = d('img[usemap="#' + Z + '"]'),
            n = L.offset().left,
            I = L.offset().top,
            S = x.$elProxy.attr("coords") !== undefined ? x.$elProxy.attr("coords").split(",") : undefined;
          if (P == "circle") {
            var K = parseInt(S[0]),
              r = parseInt(S[1]),
              A = parseInt(S[2]);
            aa.dimension.height = A * 2;
            aa.dimension.width = A * 2;
            aa.offset.top = I + r - A;
            aa.offset.left = n + K - A
          } else {
            if (P == "rect") {
              var K = parseInt(S[0]),
                r = parseInt(S[1]),
                q = parseInt(S[2]),
                G = parseInt(S[3]);
              aa.dimension.height = G - r;
              aa.dimension.width = q - K;
              aa.offset.top = I + r;
              aa.offset.left = n + K
            } else {
              if (P == "poly") {
                var w = [],
                  Y = [],
                  E = 0,
                  D = 0,
                  W = 0,
                  V = 0,
                  ae = "even";
                for (var ac = 0; ac < S.length; ac++) {
                  var C = parseInt(S[ac]);
                  if (ae == "even") {
                    if (C > W) {
                      W = C;
                      if (ac === 0) {
                        E = W
                      }
                    }
                    if (C < E) {
                      E = C
                    }
                    ae = "odd"
                  } else {
                    if (C > V) {
                      V = C;
                      if (ac == 1) {
                        D = V
                      }
                    }
                    if (C < D) {
                      D = C
                    }
                    ae = "even"
                  }
                }
                aa.dimension.height = V - D;
                aa.dimension.width = W - E;
                aa.offset.top = I + D;
                aa.offset.left = n + E
              } else {
                aa.dimension.height = L.outerHeight(false);
                aa.dimension.width = L.outerWidth(false);
                aa.offset.top = I;
                aa.offset.left = n
              }
            }
          }
        }
        var s = 0,
          X = 0,
          R = 0,
          T = parseInt(x.options.offsetY),
          U = parseInt(x.options.offsetX),
          ab = x.options.position;

        function u() {
          var ah = d(f).scrollLeft();
          if ((s - ah) < 0) {
            ag = s - ah;
            s = ah
          }
          if (((s + af) - ah) > ad) {
            ag = s - ((ad + ah) - af);
            s = (ad + ah) - af
          }
        }

        function t(ah, ai) {
          if (((aa.offset.top - d(f).scrollTop() - J - T - 12) < 0) && (ai.indexOf("top") > -1)) {
            ab = ah
          }
          if (((aa.offset.top + aa.dimension.height + J + 12 + T) > (d(f).scrollTop() + d(f).height())) && (ai.indexOf("bottom") > -1)) {
            ab = ah;
            R = (aa.offset.top - J) - T - 12
          }
        }
        if (ab == "top") {
          var M = (aa.offset.left + af) - (aa.offset.left + aa.dimension.width);
          s = (aa.offset.left + U) - (M / 2);
          R = (aa.offset.top - J) - T - 12;
          u();
          t("bottom", "top")
        }
        if (ab == "top-left") {
          s = aa.offset.left + U;
          R = (aa.offset.top - J) - T - 12;
          u();
          t("bottom-left", "top-left")
        }
        if (ab == "top-right") {
          s = (aa.offset.left + aa.dimension.width + U) - af;
          R = (aa.offset.top - J) - T - 12;
          u();
          t("bottom-right", "top-right")
        }
        if (ab == "bottom") {
          var M = (aa.offset.left + af) - (aa.offset.left + aa.dimension.width);
          s = aa.offset.left - (M / 2) + U;
          R = (aa.offset.top + aa.dimension.height) + T + 12;
          u();
          t("top", "bottom")
        }
        if (ab == "bottom-left") {
          s = aa.offset.left + U;
          R = (aa.offset.top + aa.dimension.height) + T + 12;
          u();
          t("top-left", "bottom-left")
        }
        if (ab == "bottom-right") {
          s = (aa.offset.left + aa.dimension.width + U) - af;
          R = (aa.offset.top + aa.dimension.height) + T + 12;
          u();
          t("top-right", "bottom-right")
        }
        if (ab == "left") {
          s = aa.offset.left - U - af - 12;
          X = aa.offset.left + U + aa.dimension.width + 12;
          var H = (aa.offset.top + J) - (aa.offset.top + aa.dimension.height);
          R = aa.offset.top - (H / 2) - T;
          if ((s < 0) && ((X + af) > ad)) {
            var p = parseFloat(x.$tooltip.css("border-width")) * 2,
              l = (af + s) - p;
            x.$tooltip.css("width", l + "px");
            J = x.$tooltip.outerHeight(false);
            s = aa.offset.left - U - l - 12 - p;
            H = (aa.offset.top + J) - (aa.offset.top + aa.dimension.height);
            R = aa.offset.top - (H / 2) - T
          } else {
            if (s < 0) {
              s = aa.offset.left + U + aa.dimension.width + 12;
              ag = "left"
            }
          }
        }
        if (ab == "right") {
          s = aa.offset.left + U + aa.dimension.width + 12;
          X = aa.offset.left - U - af - 12;
          var H = (aa.offset.top + J) - (aa.offset.top + aa.dimension.height);
          R = aa.offset.top - (H / 2) - T;
          if (((s + af) > ad) && (X < 0)) {
            var p = parseFloat(x.$tooltip.css("border-width")) * 2,
              l = (ad - s) - p;
            x.$tooltip.css("width", l + "px");
            J = x.$tooltip.outerHeight(false);
            H = (aa.offset.top + J) - (aa.offset.top + aa.dimension.height);
            R = aa.offset.top - (H / 2) - T
          } else {
            if ((s + af) > ad) {
              s = aa.offset.left - U - af - 12;
              ag = "right"
            }
          }
        }
        if (x.options.arrow) {
          var F = "tooltipster-arrow-" + ab;
          if (x.options.arrowColor.length < 1) {
            var N = x.$tooltip.css("background-color")
          } else {
            var N = x.options.arrowColor
          }
          if (!ag) {
            ag = ""
          } else {
            if (ag == "left") {
              F = "tooltipster-arrow-right";
              ag = ""
            } else {
              if (ag == "right") {
                F = "tooltipster-arrow-left";
                ag = ""
              } else {
                ag = "left:" + Math.round(ag) + "px;"
              }
            }
          }
          if ((ab == "top") || (ab == "top-left") || (ab == "top-right")) {
            var Q = parseFloat(x.$tooltip.css("border-bottom-width")),
              y = x.$tooltip.css("border-bottom-color")
          } else {
            if ((ab == "bottom") || (ab == "bottom-left") || (ab == "bottom-right")) {
              var Q = parseFloat(x.$tooltip.css("border-top-width")),
                y = x.$tooltip.css("border-top-color")
            } else {
              if (ab == "left") {
                var Q = parseFloat(x.$tooltip.css("border-right-width")),
                  y = x.$tooltip.css("border-right-color")
              } else {
                if (ab == "right") {
                  var Q = parseFloat(x.$tooltip.css("border-left-width")),
                    y = x.$tooltip.css("border-left-color")
                } else {
                  var Q = parseFloat(x.$tooltip.css("border-bottom-width")),
                    y = x.$tooltip.css("border-bottom-color")
                }
              }
            }
          }
          if (Q > 1) {
            Q++
          }
          var B = "";
          if (Q !== 0) {
            var z = "",
              O = "border-color: " + y + ";";
            if (F.indexOf("bottom") !== -1) {
              z = "margin-top: -" + Math.round(Q) + "px;"
            } else {
              if (F.indexOf("top") !== -1) {
                z = "margin-bottom: -" + Math.round(Q) + "px;"
              } else {
                if (F.indexOf("left") !== -1) {
                  z = "margin-right: -" + Math.round(Q) + "px;"
                } else {
                  if (F.indexOf("right") !== -1) {
                    z = "margin-left: -" + Math.round(Q) + "px;"
                  }
                }
              }
            }
            B = '<span class="tooltipster-arrow-border" style="' + z + " " + O + ';"></span>'
          }
          x.$tooltip.find(".tooltipster-arrow").remove();
          var o = '<div class="' + F + ' tooltipster-arrow" style="' + ag + '">' + B + '<span style="border-color:' + N + ';"></span></div>';
          x.$tooltip.append(o)
        }
        x.$tooltip.css({
          top: Math.round(R) + "px",
          left: Math.round(s) + "px"
        })
      }
      return x
    },
    enable: function() {
      this.enabled = true;
      return this
    },
    disable: function() {
      this.hide();
      this.enabled = false;
      return this
    },
    destroy: function() {
      var l = this;
      l.hide();
      if (l.$el[0] !== l.$elProxy[0]) {
        l.$elProxy.remove()
      }
      l.$el.removeData(l.namespace).off("." + l.namespace);
      var m = l.$el.data("tooltipster-ns");
      if (m.length === 1) {
        var n = null;
        if (l.options.restoration === "previous") {
          n = l.$el.data("tooltipster-initialTitle")
        } else {
          if (l.options.restoration === "current") {
            n = (typeof l.Content === "string") ? l.Content : d("<div></div>").append(l.Content).html()
          }
        }
        if (n) {
          l.$el.attr("title", n)
        }
        l.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
      } else {
        m = d.grep(m, function(p, o) {
          return p !== l.namespace
        });
        l.$el.data("tooltipster-ns", m)
      }
      return l
    },
    elementIcon: function() {
      return (this.$el[0] !== this.$elProxy[0]) ? this.$elProxy[0] : undefined
    },
    elementTooltip: function() {
      return this.$tooltip ? this.$tooltip[0] : undefined
    },
    option: function(m, l) {
      if (typeof l == "undefined") {
        return this.options[m]
      } else {
        this.options[m] = l;
        return this
      }
    },
    status: function() {
      return this.Status
    }
  };
  d.fn[e] = function() {
    var p = arguments;
    if (this.length === 0) {
      if (typeof p[0] === "string") {
        var q = true;
        switch (p[0]) {
          case "setDefaults":
            d.extend(b, p[1]);
            break;
          default:
            q = false;
            break
        }
        if (q) {
          return true
        } else {
          return this
        }
      } else {
        return this
      }
    } else {
      if (typeof p[0] === "string") {
        var o = "#*$~&";
        this.each(function() {
          var u = d(this).data("tooltipster-ns"),
            t = u ? d(this).data(u[0]) : null;
          if (t) {
            if (typeof t[p[0]] === "function") {
              var w = t[p[0]](p[1], p[2])
            } else {
              throw new Error('Unknown method .tooltipster("' + p[0] + '")')
            }
            if (w !== t) {
              o = w;
              return false
            }
          } else {
            throw new Error("You called Tooltipster's \"" + p[0] + '" method on an uninitialized element')
          }
        });
        return (o !== "#*$~&") ? o : this
      } else {
        var s = [],
          m = p[0] && typeof p[0].multiple !== "undefined",
          l = (m && p[0].multiple) || (!m && b.multiple),
          r = p[0] && typeof p[0].debug !== "undefined",
          n = (r && p[0].debug) || (!r && b.debug);
        this.each(function() {
          var w = false,
            u = d(this).data("tooltipster-ns"),
            t = null;
          if (!u) {
            w = true
          } else {
            if (l) {
              w = true
            } else {
              if (n) {
                console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')
              }
            }
          }
          if (w) {
            t = new i(this, p[0]);
            if (!u) {
              u = []
            }
            u.push(t.namespace);
            d(this).data("tooltipster-ns", u);
            d(this).data(t.namespace, t)
          }
          s.push(t)
        });
        if (l) {
          return s
        } else {
          return this
        }
      }
    }
  };

  function k(m, l) {
    var n = true;
    d.each(m, function(o, p) {
      if (typeof l[o] === "undefined" || m[o] !== l[o]) {
        n = false;
        return false
      }
    });
    return n
  }
  var g = !!("ontouchstart" in f);
  var c = false;
  d("body").one("mousemove", function() {
    c = true
  });

  function j() {
    return (!c && g)
  }

  function a() {
    var l = h.body || h.documentElement,
      n = l.style,
      o = "transition";
    if (typeof n[o] == "string") {
      return true
    }
    v = ["Moz", "Webkit", "Khtml", "O", "ms"], o = o.charAt(0).toUpperCase() + o.substr(1);
    for (var m = 0; m < v.length; m++) {
      if (typeof n[v[m] + o] == "string") {
        return true
      }
    }
    return false
  }
})(jQuery, window, document);