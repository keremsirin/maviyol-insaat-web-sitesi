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
})({"../../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../img/loading.gif":[["loading.16105e91.gif","../../img/loading.gif"],"../../img/loading.gif"],"./../img/prev.png":[["prev.935838c2.png","../../img/prev.png"],"../../img/prev.png"],"./../img/next.png":[["next.f8a9e1fd.png","../../img/next.png"],"../../img/next.png"],"./../img/close.png":[["close.0c4c3f4c.png","../../img/close.png"],"../../img/close.png"],"./../img/bg4.jpg":[["bg4.a3bf8520.jpg","../../img/bg4.jpg"],"../../img/bg4.jpg"],"./../img/bg3.jpg":[["bg3.dc143ce6.jpg","../../img/bg3.jpg"],"../../img/bg3.jpg"],"./../img/bg10.jpg":[["bg10.6e4e97f1.jpg","../../img/bg10.jpg"],"../../img/bg10.jpg"],"./../img/bg8.jpg":[["bg8.9a105da3.jpg","../../img/bg8.jpg"],"../../img/bg8.jpg"],"./../img/ibb.jpg":[["ibb.2ce8007f.jpg","../../img/ibb.jpg"],"../../img/ibb.jpg"],"./../img/iga.png":[["iga.1f001ae1.png","../../img/iga.png"],"../../img/iga.png"],"./../img/isfalt.jpg":[["isfalt.81804676.jpg","../../img/isfalt.jpg"],"../../img/isfalt.jpg"],"./../img/teskoop.jpg":[["teskoop.35184209.jpg","../../img/teskoop.jpg"],"../../img/teskoop.jpg"],"./../img/kagithane.png":[["kagithane.6cdf4382.png","../../img/kagithane.png"],"../../img/kagithane.png"],"./../img/agac.jpg":[["agac.6868e596.jpg","../../img/agac.jpg"],"../../img/agac.jpg"],"./../img/torunlar.jpg":[["torunlar.85f84e7b.jpg","../../img/torunlar.jpg"],"../../img/torunlar.jpg"],"./../img/ozyalcin.jpg":[["ozyalcin.e5ec3580.jpg","../../img/ozyalcin.jpg"],"../../img/ozyalcin.jpg"],"./../img/rasan.jpg":[["rasan.cef017d8.jpg","../../img/rasan.jpg"],"../../img/rasan.jpg"],"./../img/harran.png":[["harran.93e2fec7.png","../../img/harran.png"],"../../img/harran.png"],"./../img/ford.png":[["ford.812176d0.png","../../img/ford.png"],"../../img/ford.png"],"./../img/dedeman.jpg":[["dedeman.3bd542ed.jpg","../../img/dedeman.jpg"],"../../img/dedeman.jpg"],"./../img/rocks.jpeg":[["rocks.d413ae6b.jpeg","../../img/rocks.jpeg"],"../../img/rocks.jpeg"],"./../img/grand.jpg":[["grand.2f194efb.jpg","../../img/grand.jpg"],"../../img/grand.jpg"],"./../img/nevali.png":[["nevali.8b0faeff.png","../../img/nevali.png"],"../../img/nevali.png"],"./../img/merit.png":[["merit.9bc1f15e.png","../../img/merit.png"],"../../img/merit.png"],"./../img/sandavic.jpg":[["sandavic.16fe737d.jpg","../../img/sandavic.jpg"],"../../img/sandavic.jpg"],"./../img/kurukahve.jpeg":[["kurukahve.db9538d8.jpeg","../../img/kurukahve.jpeg"],"../../img/kurukahve.jpeg"],"./../img/fapel.jpeg":[["fapel.5dc618bf.jpeg","../../img/fapel.jpeg"],"../../img/fapel.jpeg"],"./../img/balkon.png":[["balkon.20a65a3e.png","../../img/balkon.png"],"../../img/balkon.png"],"./../img/zb1/3.jpg":[["3.f7d7a322.jpg","../../img/zb1/3.jpg"],"../../img/zb1/3.jpg"],"./../img/zb2/zb2-1.jpg":[["zb2-1.02600007.jpg","../../img/zb2/zb2-1.jpg"],"../../img/zb2/zb2-1.jpg"],"./../img/duhok1/7.jpg":[["7.c9d8c886.jpg","../../img/duhok1/7.jpg"],"../../img/duhok1/7.jpg"],"./../img/bhc20/1.jpg":[["1.6d13e713.jpg","../../img/bhc20/1.jpg"],"../../img/bhc20/1.jpg"],"./../img/tato/3.jpg":[["3.980d4e91.jpg","../../img/tato/3.jpg"],"../../img/tato/3.jpg"],"./../img/kerkuk/kutuphane/2.jpg":[["2.a8635d89.jpg","../../img/kerkuk/kutuphane/2.jpg"],"../../img/kerkuk/kutuphane/2.jpg"],"./../img/kerkuk/towers/11.jpg":[["11.5123bd88.jpg","../../img/kerkuk/towers/11.jpg"],"../../img/kerkuk/towers/11.jpg"],"./../img/kerkuk/plaza/8.jpg":[["8.967ba5e6.jpg","../../img/kerkuk/plaza/8.jpg"],"../../img/kerkuk/plaza/8.jpg"],"./../img/kerkuk/kuran/16.jpg":[["16.ebaee267.jpg","../../img/kerkuk/kuran/16.jpg"],"../../img/kerkuk/kuran/16.jpg"],"./../img/balkon-erbil/1.jpg":[["1.fb1ba4ae.jpg","../../img/balkon-erbil/1.jpg"],"../../img/balkon-erbil/1.jpg"],"./../img/balkon-kuveyt/1.jpg":[["1.05ea39c8.jpg","../../img/balkon-kuveyt/1.jpg"],"../../img/balkon-kuveyt/1.jpg"],"./../img/torunlar/11.jpg":[["11.c7ec5cdc.jpg","../../img/torunlar/11.jpg"],"../../img/torunlar/11.jpg"],"./../img/sandavic/8.jpg":[["8.9f95d94e.jpg","../../img/sandavic/8.jpg"],"../../img/sandavic/8.jpg"],"./../img/ibb-agac/6.jpg":[["6.891d05aa.jpg","../../img/ibb-agac/6.jpg"],"../../img/ibb-agac/6.jpg"],"./../img/kd_2.jpg":[["kd_2.8e933a0f.jpg","../../img/kd_2.jpg"],"../../img/kd_2.jpg"],"./../img/trafik-1.jpg":[["trafik-1.06cfe073.jpg","../../img/trafik-1.jpg"],"../../img/trafik-1.jpg"],"./../img/trafik-2.jpg":[["trafik-2.7d8e5b89.jpg","../../img/trafik-2.jpg"],"../../img/trafik-2.jpg"],"./../img/trafik-3.jpg":[["trafik-3.35a154e7.jpg","../../img/trafik-3.jpg"],"../../img/trafik-3.jpg"],"./../img/trafik-4.jpg":[["trafik-4.40b68ab5.jpg","../../img/trafik-4.jpg"],"../../img/trafik-4.jpg"],"./../img/mimari-1.jpg":[["mimari-1.6d4e766c.jpg","../../img/mimari-1.jpg"],"../../img/mimari-1.jpg"],"./../img/mimari-2.jpg":[["mimari-2.9007f94d.jpg","../../img/mimari-2.jpg"],"../../img/mimari-2.jpg"],"_css_loader":"../../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/main.90c45431.js.map