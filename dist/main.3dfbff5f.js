// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../scripts/main.js":[function(require,module,exports) {
$("#services").hover(function () {
  $(".dropdown-1").css("padding-top", "0");
  $(".dropdown-1").animate({
    paddingTop: '10px'
  }, 500);
}, function () {
  $(".dropdown-1").stop();
});
$("#projects").hover(function () {
  $(".dropdown-2").css("padding-top", "0");
  $(".dropdown-2").animate({
    paddingTop: '10px'
  }, 500);
}, function () {
  $(".dropdown-2").stop();
});
$(".hover-left").hover(function () {
  // $(this).parent().css("padding-left", "20px")
  $(this).parent().stop();
  $(this).parent().animate({
    paddingLeft: '40px'
  }, 500);
}, function () {
  $(this).parent().stop(); // $(this).parent().css("padding-left", "20px");

  $(this).parent().animate({
    paddingLeft: '20px'
  }, 300);
}); // $(function () {
//     var div = $('body');
//     var width = div.width();
//     div.css('height', width);
// });

$(".Header-menu-nav-button").on("click", function () {
  if ($("Header").is(".menu-nav-links-show")) {
    $(".Header").removeClass("menu-nav-links-show");
  } else {
    $(".Header").addClass("menu-nav-links-show");
  }
}); // $("#services").on("click", function () {
//     $(".dropdown-1").css("display", "block")
// })

var click_services = 0;

if ($(window).width() < 768) {
  // $("ul").removeClass("dropdown-1")
  $("#services").click(function () {
    click_projects = 0;

    if (click_services == 0) {
      $(".dropdown-2").css("display", "none");
      $("#services").removeClass("hover-border_mobile");
      $("#services").addClass("hover-border");
      $(".dropdown-1").css("display", "block");
      click_services++;
      console.log(click_services);
    } else {
      $(".dropdown-1").css("display", "none");
      $("#services").removeClass("hover-border");
      $("#services").addClass("hover-border_mobile");
      click_services--;
    }

    return false;
  });
} else if ($(window).width() > 768) {// $("ul").addClass("dropdown-1")
}

var click_projects = 0;

if ($(window).width() < 768) {
  $("#projects").click(function () {
    click_services = 0;

    if (click_projects == 0) {
      $(".dropdown-1").css("display", "none");
      $("#projects").removeClass("hover-border_mobile");
      $("#projects").addClass("hover-border");
      $(".dropdown-2").css("display", "block");
      click_projects++;
      console.log(click_projects);
    } else {
      $(".dropdown-2").css("display", "none");
      $("#projects").removeClass("hover-border");
      $("#projects").addClass("hover-border_mobile");
      click_projects--;
    }

    return false;
  });
} else if ($(window).width() > 768) {// $("ul").addClass("dropdown-1")
}

$(document).ready(function () {
  var refresh = true;

  if ($(window).width() > 480 && $(window).width() < 768) {
    refresh = false;
  }

  $(window).resize(function () {
    if ($(window).width() > 480 && $(window).width() < 768) {
      if (refresh == true) location.reload();
    } else {
      refresh = true;
    }
  });

  if ($(window).width() > 768 && $(window).width() < 1200) {
    refresh = false;
  }

  $(window).resize(function () {
    if ($(window).width() > 768 && $(window).width() < 1200) {
      if (refresh == true) location.reload();
    } else {
      refresh = true;
    }
  });
});
$('.homepage-slider').flickity({
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  pageDots: false,
  // autoPlay: 10000,
  pauseAutoPlayOnHover: true
});
$(".homepage-slider").on("mouseleave", function () {
  $(this).flickity("playPlayer");
});
$(window).on('load', function () {
  $('.preloader').addClass('complete');
  $('.homepage-slider').flickity({
    autoPlay: 8000
  });
  $("#text1").removeClass("text1");
  $("#text1").addClass("text1");
});

if ($(".homepage-slider-1").is(".is-selected")) {} else {}

$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked");
    var email = $('.email').val();
    var subject = $('.subject').val();
    var message = $('.message').val();

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log('ok');
    } else {
      event.preventDefault();
      alert('Lütfen geçerli bir email adresi giriniz!');
    }

    if (subject.length > 2) {
      console.log('ok');
    } else {
      event.preventDefault();
      alert('Lütfen daha uzun bir konu başlığı giriniz!');
    }

    if (message.length > 10) {
      console.log('ok');
    } else {
      event.preventDefault();
      alert('Lütfen daha uzun bir mesaj giriniz!');
    }
  });
});
$(document).ready(function () {
  if ($(window).width() < 480) {
    $(".Zb-master-content-project1-container1 a").last().attr("data-lightbox", " ");
    $(".Zb-master-content-project1-container2 a").last().attr("data-lightbox", " ");
    $(".Zb-master-content-project1-container3 a").last().attr("data-lightbox", " ");
    $(".Zb-master-content-project1-container4 a").last().attr("data-lightbox", " "); // $(".Duhok-master-content-project1-container1 a").last().attr("data-lightbox", " ")

    $(".Bahcesehir_tadilat-master-content-project1-container2 a").first().attr("data-lightbox", " ");
    $(".Fapel-master-content-project1-container1 a").last().attr("data-lightbox", " ");
    $(".Fapel-master-content-project1-container2 a").last().attr("data-lightbox", " ");
    $(".Kerkuk-master-content-project1-container1 a").last().attr("data-lightbox", " ");
    $(".Kerkuk-master-content-project1-container2 a").last().attr("data-lightbox", " ");
    $(".Balkon-master-content-project1-container1 a").last().attr("data-lightbox", " ");
    $(".Balkon-master-content-project1-container2 a").last().attr("data-lightbox", " ");
    $(".Balkon-master-content-project1-container3 a").last().attr("data-lightbox", " ");
  } else if ($(window).width() > 480) {
    $(".Zb-master-content-project1-container5 a").eq(1).attr("data-lightbox", " ");
    $(".Zb-master-content-project1-container5 a").last().attr("data-lightbox", " ");
    $(".Zb-master-content-project1-container6 a").attr("data-lightbox", " ");
    $(".Zb-master-content-project1-container7 a").attr("data-lightbox", " "); // $(".Duhok-master-content-project1-container2 a").last().attr("data-lightbox", " ")

    $(".Bahcesehir_tadilat-master-content-project1-container2 a").last().attr("data-lightbox", " ");
    $(".Fapel-master-content-project1-container3 a").eq(1).attr("data-lightbox", " ");
    $(".Fapel-master-content-project1-container3 a").last().attr("data-lightbox", " ");
    $(".Kerkuk-master-content-project1-container3 a").eq(1).attr("data-lightbox", " ");
    $(".Kerkuk-master-content-project1-container3 a").first().attr("data-lightbox", " ");
    $(".Balkon-master-content-project1-container4 a").attr("data-lightbox", " ");
  }
});

function Circlle(el) {
  $(el).circleProgress({
    fill: {
      color: '#04BBBB'
    }
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
  });
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 200) {
    Circlle('.round');
    $(window).unbind('scroll');
  }

  if (window.location.pathname == "/index.html") {
    $(".Header").removeClass("bg_scroll");
    $(".Header-menu-logo").removeClass("ai_scroll");
    $(".Header-menu-nav").removeClass("jc_scroll");
  } else if (window.location.pathname == "/") {
    $(".Header").removeClass("bg_scroll");
    $(".Header-menu-logo").removeClass("ai_scroll");
    $(".Header-menu-nav").removeClass("jc_scroll");
  } else {
    if (scroll >= 40) {
      $(".Header").addClass("bg_scroll");
      $(".Header-menu-logo").addClass("ai_scroll");
      $(".Header-menu-nav").addClass("jc_scroll");
    } else {
      $(".Header").removeClass("bg_scroll");
      $(".Header-menu-logo").removeClass("ai_scroll");
      $(".Header-menu-nav").removeClass("jc_scroll");
    }
  }
});
},{}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51168" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../../scripts/main.js"], null)
//# sourceMappingURL=/main.3dfbff5f.js.map