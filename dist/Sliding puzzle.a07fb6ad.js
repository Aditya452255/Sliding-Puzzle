import * as __parcelExternal0 from "react";
import * as __parcelExternal1 from "react-dom";
import * as __parcelExternal2 from "react-router-dom";
import * as __parcelExternal3 from "@babel/runtime/helpers/defineProperty";
import * as __parcelExternal4 from "styled-components";
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"iJCA9":[function(require,module,exports,__globalThis) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1f27456802be1492";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b5da99f0a07fb6ad";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6zZG0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _appJsx = require("./src/App.jsx");
var _appJsxDefault = parcelHelpers.interopDefault(_appJsx);
const rootEl = document.getElementById('root');
const renderComponent = (Component)=>{
    (0, _reactDom.render)(/*#__PURE__*/ (0, _reactDefault.default).createElement(Component, {
        __source: {
            fileName: "index.js",
            lineNumber: 6,
            columnNumber: 10
        },
        __self: undefined
    }), rootEl);
};
renderComponent((0, _appJsxDefault.default));

},{"react":"react","react-dom":"react-dom","./src/App.jsx":"cFteB","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"cFteB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _appScss = require("./assets/styles/app.scss");
var _pages = require("./pages");
var _elements = require("./elements");
class App extends (0, _react.PureComponent) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactRouterDom.BrowserRouter), {
            __source: {
                fileName: "src/App.jsx",
                lineNumber: 8,
                columnNumber: 12
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GameFactory), {
            __source: {
                fileName: "src/App.jsx",
                lineNumber: 9,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            className: "app",
            __source: {
                fileName: "src/App.jsx",
                lineNumber: 10,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactRouterDom.Route), {
            exact: true,
            path: "/",
            component: (0, _pages.Home),
            __source: {
                fileName: "src/App.jsx",
                lineNumber: 11,
                columnNumber: 13
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactRouterDom.Route), {
            render: ()=>/*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactRouterDom.Redirect), {
                    to: "/",
                    __source: {
                        fileName: "src/App.jsx",
                        lineNumber: 12,
                        columnNumber: 34
                    }
                }),
            __source: {
                fileName: "src/App.jsx",
                lineNumber: 12,
                columnNumber: 13
            },
            __self: this
        }))));
    }
}
exports.default = App;

},{"react":"react","react-router-dom":"react-router-dom","./pages":"bRk9K","./elements":"2F52T","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS","./assets/styles/app.scss":"gLLBI"}],"bRk9K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>(0, _homeDefault.default));
var _home = require("./Home");
var _homeDefault = parcelHelpers.interopDefault(_home);

},{"./Home":"aSQjC","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"aSQjC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _hoc = require("../hoc");
var _components = require("../components");
var _elements = require("../elements");
var _wavesGif = require("../assets/img/waves.gif");
var _wavesGifDefault = parcelHelpers.interopDefault(_wavesGif);
const Home = ({ eventType })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Container), {
        __source: {
            fileName: "src/pages/Home.jsx",
            lineNumber: 9,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GameFactoryConsumer), {
        __source: {
            fileName: "src/pages/Home.jsx",
            lineNumber: 10,
            columnNumber: 7
        },
        __self: undefined
    }, ({ values, methods })=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react.Fragment), {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 15,
                columnNumber: 16
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _components.Header), {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 16,
                columnNumber: 15
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement("br", {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 17,
                columnNumber: 15
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _components.Game), {
            eventType: eventType,
            ...values,
            ...methods,
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 18,
                columnNumber: 15
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement("br", {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 19,
                columnNumber: 15
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _components.Instruction), {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 20,
                columnNumber: 15
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 21,
                columnNumber: 15
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Wave), {
            className: "waves",
            src: (0, _wavesGifDefault.default),
            alt: "",
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 22,
                columnNumber: 17
            },
            __self: undefined
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement("br", {
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 24,
                columnNumber: 15
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _components.Details), {
            name: '',
            githubURL: '',
            projectURL: '',
            linkedinURL: '',
            twitterURL: '',
            __source: {
                fileName: "src/pages/Home.jsx",
                lineNumber: 25,
                columnNumber: 15
            },
            __self: undefined
        }));
    }));
};
exports.default = (0, _hoc.KeyBoardManagar)(Home);

},{"react":"react","../hoc":"7g76s","../components":"2lhEI","../elements":"2F52T","../assets/img/waves.gif":"8qSmD","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"7g76s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyBoardManagar", ()=>(0, _keyboardManagerDefault.default));
var _keyboardManager = require("./keyboardManager");
var _keyboardManagerDefault = parcelHelpers.interopDefault(_keyboardManager);

},{"./keyboardManager":"ckgE1","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"ckgE1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const useMovement = ()=>{
    const [event, handleEvent] = (0, _react.useState)(null);
    const emit = (event, data)=>{
        handleEvent([
            event,
            data
        ]);
    };
    const map = {
        38: 0,
        // Up
        39: 1,
        // Right
        40: 2,
        // Down
        37: 3,
        // Left
        75: 0,
        // Vim up
        76: 1,
        // Vim right
        74: 2,
        // Vim down
        72: 3,
        // Vim left
        87: 0,
        // W
        68: 1,
        // D
        83: 2,
        // S
        65: 3 // A
    };
    // Respond to direction keys
    const handleKey = (event)=>{
        const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
        const mapped = map[event.which];
        if (!modifiers) {
            if (mapped !== undefined) {
                event.preventDefault();
                emit('move', mapped);
            }
        }
        // R key restarts the game
        if (!modifiers && event.which === 82) restart.call(self, event);
    };
    const listenKey = ()=>{
        window.document.addEventListener('keydown', handleKey);
    };
    const restart = (event)=>{
        event.preventDefault();
        emit('restart');
    };
    const keepPlaying = (event)=>{
        event.preventDefault();
        emit('keepPlaying');
    };
    let eventTouchstart = null, eventTouchmove = null, eventTouchend = null, touchStartClientX = null, touchStartClientY = null;
    if (window.navigator.msPointerEnabled) {
        //Internet Explorer 10 style
        eventTouchstart = 'MSPointerDown';
        eventTouchmove = 'MSPointerMove';
        eventTouchend = 'MSPointerUp';
    } else {
        eventTouchstart = 'touchstart';
        eventTouchmove = 'touchmove';
        eventTouchend = 'touchend';
    }
    const eventTouchStartListner = (event)=>{
        if (!window.navigator.msPointerEnabled && event.touches.length > 1 || event.targetTouches > 1) return; // Ignore if touching with more than 1 finger
        if (window.navigator.msPointerEnabled) {
            touchStartClientX = event.pageX;
            touchStartClientY = event.pageY;
        } else {
            touchStartClientX = event.touches[0].clientX;
            touchStartClientY = event.touches[0].clientY;
        }
    //event.preventDefault();
    };
    const eventTouchmoveListner = (event)=>{
    // event.preventDefault();
    };
    const eventTouchendListner = (event)=>{
        if (!window.navigator.msPointerEnabled && event.touches.length > 0 || event.targetTouches > 0) return; // Ignore if still touching with one or more fingers
        let touchEndClientX;
        let touchEndClientY;
        if (window.navigator.msPointerEnabled) {
            touchEndClientX = event.pageX;
            touchEndClientY = event.pageY;
        } else {
            touchEndClientX = event.changedTouches[0].clientX;
            touchEndClientY = event.changedTouches[0].clientY;
        }
        const dx = touchEndClientX - touchStartClientX;
        const absDx = Math.abs(dx);
        const dy = touchEndClientY - touchStartClientY;
        const absDy = Math.abs(dy);
        if (Math.max(absDx, absDy) > 10) // (right : left) : (down : up)
        emit('move', absDx > absDy ? dx > 0 ? 1 : 3 : dy > 0 ? 2 : 0);
    };
    const listenSwipe = ()=>{
        window.document.addEventListener(eventTouchstart, eventTouchStartListner);
        window.document.addEventListener(eventTouchmove, eventTouchmoveListner);
        window.document.addEventListener(eventTouchend, eventTouchendListner);
    };
    const removeEventListeners = ()=>{
        window.document.removeEventListener('keydown', handleKey);
        window.document.removeEventListener(eventTouchstart, eventTouchStartListner);
        window.document.removeEventListener(eventTouchmove, eventTouchmoveListner);
        window.document.removeEventListener(eventTouchend, eventTouchendListner);
    };
    (0, _react.useEffect)(()=>{
        listenKey();
        listenSwipe();
        return ()=>removeEventListeners();
    });
    return event;
};
const KeyBoardManager = (PassedComponent)=>(props)=>{
        const eventType = useMovement();
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(PassedComponent, {
            eventType: eventType,
            ...props,
            __source: {
                fileName: "src/hoc/keyboardManager/index.js",
                lineNumber: 134,
                columnNumber: 10
            },
            __self: undefined
        });
    };
exports.default = KeyBoardManager;

},{"react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"6XkeS":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2lhEI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>(0, _gameDefault.default));
parcelHelpers.export(exports, "Instruction", ()=>(0, _instructionsDefault.default));
parcelHelpers.export(exports, "Header", ()=>(0, _headerDefault.default));
parcelHelpers.export(exports, "Details", ()=>(0, _detailsDefault.default));
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _instructions = require("./Instructions");
var _instructionsDefault = parcelHelpers.interopDefault(_instructions);
var _header = require("./Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _details = require("./Details");
var _detailsDefault = parcelHelpers.interopDefault(_details);

},{"./Game":"64tYH","./Instructions":"gz0TA","./Header":"auVih","./Details":"gVIyX","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"64tYH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
var _score = require("../Score");
var _scoreDefault = parcelHelpers.interopDefault(_score);
var _grid = require("../Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _utils = require("../../utils");
class Game extends (0, _react.Component) {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.eventType !== this.props.eventType) {
            const [_, move] = this.props.eventType || [
                null,
                null
            ];
            const [row, col, location] = this.props.gettingEmptyBoxLocation();
            if (this.props.gameState === (0, _utils.gameState).GAME_IDLE || this.props.gameState === (0, _utils.gameState).GAME_STARTED) this.props.moveCell(location, row, col, move);
        }
    }
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 17,
                columnNumber: 12
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GameScore), {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 18,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Button), {
            onClick: this.props.resetGame,
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 19,
                columnNumber: 11
            },
            __self: this
        }, "new game"), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _scoreDefault.default), {
            moves: this.props.moves,
            seconds: this.props.seconds,
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 20,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gridDefault.default), {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 23,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.PlayPauseContainer), {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 25,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Button), {
            type: "big",
            onClick: this.props.pauseGame,
            disabled: this.props.gameState === (0, _utils.gameState).GAME_IDLE,
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 26,
                columnNumber: 11
            },
            __self: this
        }, this.props.gameState === (0, _utils.gameState).GAME_PAUSED ? 'Play' : 'Pause')), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Modal), {
            on: this.props.gameState === (0, _utils.gameState).GAME_OVER,
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 30,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.ModalContainer), {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 31,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            className: "text-1",
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 32,
                columnNumber: 13
            },
            __self: this
        }, "Excellent!"), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 33,
                columnNumber: 13
            },
            __self: this
        }, "It took you ", /*#__PURE__*/ (0, _reactDefault.default).createElement("b", {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 34,
                columnNumber: 27
            },
            __self: this
        }, this.props.moves, " moves")), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 36,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Button), {
            type: "big",
            textColor: "white",
            onClick: this.props.resetGame,
            __source: {
                fileName: "src/components/Game/index.jsx",
                lineNumber: 37,
                columnNumber: 15
            },
            __self: this
        }, "Play Again")))));
    }
}
exports.default = Game;

},{"react":"react","../../elements":"2F52T","../Score":"bV9ri","../Grid":"iMzCY","../../utils":"720ve","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"2F52T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameFactory", ()=>(0, _gameFactoryDefault.default));
parcelHelpers.export(exports, "Modal", ()=>(0, _modalDefault.default));
var _gameFactory = require("./GameFactory");
var _gameFactoryDefault = parcelHelpers.interopDefault(_gameFactory);
var _modal = require("./Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _button = require("./Button");
parcelHelpers.exportAll(_button, exports);
var _container = require("./Container");
parcelHelpers.exportAll(_container, exports);
var _text = require("./Text");
parcelHelpers.exportAll(_text, exports);
var _icon = require("./Icon");
parcelHelpers.exportAll(_icon, exports);
parcelHelpers.exportAll(_gameFactory, exports);

},{"./GameFactory":"hzIKz","./Modal":"cKk8D","./Button":"and2x","./Container":"i0BDj","./Text":"j79M4","./Icon":"9an7t","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"hzIKz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameFactoryConsumer", ()=>GameFactoryConsumer);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _utils = require("../utils");
const NEW_GAME = '__new_game__';
const RESET_GAME = '__reset_game__';
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const genrateArray = (num, add)=>{
    let puzzle = [
        ...Array(num)
    ].map((_, i)=>i + add);
    puzzle.push(0);
    return puzzle;
};
const ValuesContext = /*#__PURE__*/ (0, _react.createContext)({});
const SetValueContext = /*#__PURE__*/ (0, _react.createContext)(()=>{});
const isSolvable = (puzzle)=>{
    let parity = 0;
    let gridWidth = 4;
    let row = 0;
    let blankRow = 0;
    for(let i = 0; i < puzzle.length; i++){
        if (i % gridWidth == 0) // advance to next row
        row++;
        if (puzzle[i] == 0) {
            blankRow = row;
            continue;
        }
        for(var j = i + 1; j < puzzle.length; j++)if (puzzle[i] > puzzle[j] && puzzle[j] != 0) parity++;
    }
    if (gridWidth % 2 == 0) {
        if (blankRow % 2 == 0) return parity % 2 == 0;
        else return parity % 2 != 0;
    } else return parity % 2 == 0;
};
const genratePuzzle = (arr, event)=>{
    if (event === NEW_GAME) {
        if (isSolvable(arr)) return arr;
        else return genratePuzzle((0, _utils.shuffle)(genrateArray(15, 1)), NEW_GAME);
    } else return arr;
};
class GameFactory extends (0, _react.Component) {
    constructor(...args){
        super(...args);
        (0, _definePropertyDefault.default)(this, "defaultState", (_event, num = 1)=>({
                numbers: _event === NEW_GAME ? genratePuzzle((0, _utils.shuffle)(genrateArray(15, num)), _event) : (0, _utils.shuffle)(genrateArray(15, num)),
                moves: 0,
                seconds: 0,
                gameState: (0, _utils.gameState).GAME_IDLE
            }));
        (0, _definePropertyDefault.default)(this, "state", this.defaultState(NEW_GAME, 1));
        (0, _definePropertyDefault.default)(this, "timerId", null);
        (0, _definePropertyDefault.default)(this, "reset", ()=>{
            this.setState(this.defaultState(RESET_GAME));
            setTimeout(()=>{
                this.setState(this.defaultState(NEW_GAME, 1));
                if (this.timerId) clearInterval(this.timerId);
            }, 100);
        });
        (0, _definePropertyDefault.default)(this, "gettingEmptyBoxLocation", ()=>{
            let location = this.state.numbers.indexOf(0);
            let column = Math.floor(location % 4);
            let row = Math.floor(location / 4);
            return [
                row,
                column,
                location
            ];
        });
        (0, _definePropertyDefault.default)(this, "move", (from, row, col, moveType)=>{
            this.setState((prevState)=>{
                let newState = null;
                const [updated, newNumList] = (0, _utils.swapSpace)(prevState.numbers, from, row, col, moveType);
                if (updated) {
                    newState = {
                        numbers: newNumList,
                        moves: prevState.moves + 1
                    };
                    if (prevState.moves === 0) {
                        this.setTimer();
                        newState = {
                            ...newState,
                            gameState: (0, _utils.gameState).GAME_STARTED
                        };
                    }
                    if ((0, _utils.checkArray)(this.state.numbers)) {
                        clearInterval(this.timerId);
                        newState = {
                            ...newState,
                            gameState: (0, _utils.gameState).GAME_OVER
                        };
                    }
                }
                return newState;
            });
        });
        (0, _definePropertyDefault.default)(this, "addTimer", ()=>{
            this.setState((prevState)=>{
                return {
                    seconds: prevState.seconds + 1
                };
            });
        });
        (0, _definePropertyDefault.default)(this, "setTimer", ()=>{
            this.timerId = setInterval(()=>{
                this.addTimer();
            }, 1000);
        });
        (0, _definePropertyDefault.default)(this, "clickMove", (from)=>{
            this.setState((prevState)=>{
                let newState = null;
                let to = prevState.numbers.indexOf(0);
                if ((0, _utils.isNeighbour)(to, from)) {
                    const newNumList = (0, _utils.swap)(prevState.numbers, to, from);
                    newState = {
                        numbers: newNumList,
                        moves: prevState.moves + 1
                    };
                    if (prevState.moves === 0) {
                        this.setTimer();
                        newState = {
                            ...newState,
                            gameState: (0, _utils.gameState).GAME_STARTED
                        };
                    }
                    if ((0, _utils.checkArray)(this.state.numbers)) {
                        clearInterval(this.timerId);
                        newState = {
                            ...newState,
                            gameState: (0, _utils.gameState).GAME_OVER
                        };
                    }
                }
                return newState;
            });
        });
        (0, _definePropertyDefault.default)(this, "onPauseClick", ()=>{
            this.setState((prevState)=>{
                let newGameState = null;
                if (prevState.gameState === (0, _utils.gameState).GAME_STARTED) {
                    clearInterval(this.timerId);
                    newGameState = (0, _utils.gameState).GAME_PAUSED;
                } else {
                    this.setTimer();
                    newGameState = (0, _utils.gameState).GAME_STARTED;
                }
                return {
                    gameState: newGameState
                };
            });
        });
    }
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(ValuesContext.Provider, {
            value: this.state,
            __source: {
                fileName: "src/elements/GameFactory.js",
                lineNumber: 166,
                columnNumber: 12
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(SetValueContext.Provider, {
            value: {
                resetGame: this.reset,
                setTimer: this.setTimer,
                gettingEmptyBoxLocation: this.gettingEmptyBoxLocation,
                moveCell: this.move,
                clickMove: this.clickMove,
                pauseGame: this.onPauseClick
            },
            __source: {
                fileName: "src/elements/GameFactory.js",
                lineNumber: 167,
                columnNumber: 9
            },
            __self: this
        }, this.props.children));
    }
}
const GameFactoryConsumer = ({ children })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(ValuesContext.Consumer, {
        __source: {
            fileName: "src/elements/GameFactory.js",
            lineNumber: 183,
            columnNumber: 10
        },
        __self: undefined
    }, (values)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(SetValueContext.Consumer, {
            __source: {
                fileName: "src/elements/GameFactory.js",
                lineNumber: 184,
                columnNumber: 18
            },
            __self: undefined
        }, (methods)=>children({
                values,
                methods
            })));
};
exports.default = GameFactory;

},{"@babel/runtime/helpers/defineProperty":"@babel/runtime/helpers/defineProperty","react":"react","../utils":"720ve","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"720ve":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>(0, _colorDefault.default));
parcelHelpers.export(exports, "transition", ()=>(0, _transitionDefault.default));
parcelHelpers.export(exports, "Portal", ()=>(0, _portalDefault.default));
parcelHelpers.export(exports, "elevation", ()=>(0, _elevationDefault.default));
var _color = require("./color");
var _colorDefault = parcelHelpers.interopDefault(_color);
var _transition = require("./transition");
var _transitionDefault = parcelHelpers.interopDefault(_transition);
var _portal = require("./portal");
var _portalDefault = parcelHelpers.interopDefault(_portal);
var _elevation = require("./elevation");
var _elevationDefault = parcelHelpers.interopDefault(_elevation);
parcelHelpers.exportAll(_color, exports);
var _game = require("./game");
parcelHelpers.exportAll(_game, exports);
var _keyframes = require("./keyframes");
parcelHelpers.exportAll(_keyframes, exports);

},{"./color":"jmo4S","./transition":"hA2Xy","./portal":"jj3CK","./elevation":"8XQnD","./game":"1FPOR","./keyframes":"kfUjC","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"jmo4S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gridTileColor", ()=>gridTileColor);
parcelHelpers.export(exports, "backgroundColor", ()=>backgroundColor);
parcelHelpers.export(exports, "primaryFontColor", ()=>primaryFontColor);
parcelHelpers.export(exports, "buttonHoverColor", ()=>buttonHoverColor);
parcelHelpers.export(exports, "modalTextColor", ()=>modalTextColor);
parcelHelpers.export(exports, "modalBackgroundColor", ()=>modalBackgroundColor);
parcelHelpers.export(exports, "overlayBackgroundColor", ()=>overlayBackgroundColor);
parcelHelpers.export(exports, "gridOverlayBackground", ()=>gridOverlayBackground);
const gridTileColor = '#3d2963';
const backgroundColor = '#0f1113';
const primaryFontColor = (opacity = 1)=>`rgba(255, 255, 255, ${opacity})`;
const buttonHoverColor = '#d3386a';
const modalTextColor = '#534648';
const modalBackgroundColor = '#FFFFFF';
const overlayBackgroundColor = '#000000';
const gridOverlayBackground = '#412667b5';
exports.default = {
    backgroundColor,
    gridTileColor,
    primaryFontColor,
    buttonHoverColor,
    modalTextColor,
    modalBackgroundColor,
    overlayBackgroundColor,
    gridOverlayBackground
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"hA2Xy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ property = 'all', length = '0.3s', ease = 'ease' })=>`
    transition: ${property} ${length} ${ease};
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"jj3CK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDom = require("react-dom");
const portalRoot = document.getElementById('portal');
class Portal extends (0, _react.Component) {
    constructor(){
        super();
        this.el = document.createElement('div');
    }
    componentDidMount() {
        portalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        portalRoot.removeChild(this.el);
    }
    render() {
        const { children } = this.props;
        return /*#__PURE__*/ (0, _reactDom.createPortal)(children, this.el);
    }
}
exports.default = Portal;

},{"react":"react","react-dom":"react-dom","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"8XQnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    'box-shadow: inset 0 7px 9px -7px rgba(0,0,0.7);',
    'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
    'box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.10);',
    'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
    'box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"1FPOR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameState", ()=>gameState);
parcelHelpers.export(exports, "swap", ()=>swap);
parcelHelpers.export(exports, "isNeighbour", ()=>isNeighbour);
parcelHelpers.export(exports, "swapSpace", ()=>swapSpace);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "checkArray", ()=>checkArray);
const gameState = {
    GAME_IDLE: '__game_idle__',
    GAME_STARTED: '__game_started__',
    GAME_OVER: '__game_over__',
    GAME_PAUSED: '__game_paused__'
};
const swap = (arr, from, to)=>{
    arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    return arr;
};
const isNeighbour = (to, from)=>{
    let emptyColumn = Math.floor(to % 4);
    let emptyRow = Math.floor(to / 4);
    let clickedColumn = Math.floor(from % 4);
    let clickedRow = Math.floor(from / 4);
    const sameRow = emptyRow === clickedRow;
    const sameColumn = emptyColumn === clickedColumn;
    const columnDiff = emptyColumn - clickedColumn;
    const rowDiff = emptyRow - clickedRow;
    const diffColumn = Math.abs(columnDiff) === 1;
    const diffRow = Math.abs(rowDiff) === 1;
    const sameRowDiffColumn = sameRow && diffColumn;
    const sameColumnDiffRow = sameColumn && diffRow;
    if (sameRowDiffColumn || sameColumnDiffRow) return true;
    else return false;
};
const swapSpace = (arr, from, row, col, move)=>{
    let yMove = move === 0 ? 1 : move === 2 ? -1 : 0;
    let xMove = move === 3 ? 1 : move === 1 ? -1 : 0;
    let newRow = row + yMove;
    let newCol = col + xMove;
    if (newRow <= -1 || newCol <= -1 || newRow >= 4 || newCol >= 4) return [
        false,
        arr
    ];
    let to = newRow * 4 + newCol;
    return [
        true,
        swap(arr, from, to)
    ];
};
const shuffle = (array_elements)=>{
    let i = array_elements.length, randomNumIndex, randomNum;
    while(--i > 0){
        randomNumIndex = Math.floor(Math.random() * (i + 1));
        randomNum = array_elements[randomNumIndex];
        array_elements[randomNumIndex] = array_elements[i];
        array_elements[i] = randomNum;
    }
    return array_elements;
};
const checkArray = (arr)=>{
    let decision = true;
    arr.forEach((i, index)=>{
        if (i !== index + 1 && i != 0) decision = false;
    });
    return decision;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"kfUjC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bounceIn", ()=>bounceIn);
parcelHelpers.export(exports, "bounceInUp", ()=>bounceInUp);
parcelHelpers.export(exports, "fadeIn", ()=>fadeIn);
var _styledComponents = require("styled-components");
const bounceIn = (0, _styledComponents.keyframes)([
    "from,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);}0%{opacity:0;transform:scale3d(0,0,0);}20%{transform:scale3d(1.1,1.1,1.1);}40%{transform:scale3d(0.9,0.9,0.9);}60%{opacity:1;transform:scale3d(1.03,1.03,1.03);}80%{transform:scale3d(0.97,0.97,0.97);}to{opacity:1;transform:scale3d(1,1,1);}"
]);
const bounceInUp = (0, _styledComponents.keyframes)([
    "from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);}from{opacity:0;transform:translate3d(0,3000px,0);}60%{opacity:1;transform:translate3d(0,-20px,0);}75%{transform:translate3d(0,10px,0);}90%{transform:translate3d(0,-5px,0);}to{transform:translate3d(0,0,0);}"
]);
const fadeIn = (0, _styledComponents.keyframes)([
    "from{opacity:0;}tp{opacity:1;}"
]);

},{"styled-components":"styled-components","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"cKk8D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _utils = require("../utils");
class Modal extends (0, _react.Component) {
    render() {
        const { children, on } = this.props;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _utils.Portal), {
            __source: {
                fileName: "src/elements/Modal.js",
                lineNumber: 10,
                columnNumber: 12
            },
            __self: this
        }, on && /*#__PURE__*/ (0, _reactDefault.default).createElement(ModalWrapper, {
            __source: {
                fileName: "src/elements/Modal.js",
                lineNumber: 11,
                columnNumber: 16
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ModalCard, {
            __source: {
                fileName: "src/elements/Modal.js",
                lineNumber: 12,
                columnNumber: 13
            },
            __self: this
        }, children), /*#__PURE__*/ (0, _reactDefault.default).createElement(Background, {
            __source: {
                fileName: "src/elements/Modal.js",
                lineNumber: 13,
                columnNumber: 13
            },
            __self: this
        })));
    }
}
exports.default = Modal;
const ModalWrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Modal__ModalWrapper",
    componentId: "sc-kotl87-0"
})([
    "position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
]);
const ModalCard = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Modal__ModalCard",
    componentId: "sc-kotl87-1"
})([
    "color:",
    ";position:relative;z-index:10000;animation-duration:0.75s;animation-name:",
    ";border-radius:10px;padding:15px;min-width:320px;background-color:",
    ";height:200px;",
    " @media screen and (max-width:520px){min-width:284px;}"
], (0, _utils.color).modalTextColor, (0, _utils.bounceInUp), (0, _utils.color).modalBackgroundColor, (0, _utils.elevation));
const Background = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Modal__Background",
    componentId: "sc-kotl87-2"
})([
    "position:absolute;top:0;left:0;width:100%;z-index:1000;animation-duration:0.75s;animation-name:",
    ";height:100%;opacity:0.3;background:",
    ";"
], (0, _utils.fadeIn), (0, _utils.color).overlayBackgroundColor);

},{"react":"react","styled-components":"styled-components","../utils":"720ve","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"and2x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _utils = require("../utils");
const Button = (0, _styledComponentsDefault.default).button.withConfig({
    displayName: "Button",
    componentId: "sc-1m9brel-0"
})([
    "font-size:22px;width:",
    ";display:block;border-radius:8px;border:none;cursor:pointer;font-weight:bold;outline:none;text-decoration:none;line-height:60px;text-align:center;background-color:",
    ";color:",
    ";",
    ";",
    ";",
    ";&:active{transform:scale(0.99);}&:hover{background-color:",
    ";color:",
    ";}&:disabled{opacity:0.5;cursor:not-allowed;&:hover{background-color:",
    ";color:",
    ";}}@media (hover:none),(hover:on-demand){&:hover{background-color:",
    ";color:",
    ";}}@media only screen and (max-width:520px){font-size:16px;width:",
    ";height:100%;border-radius:5px;padding:0 5px;line-height:42px;}"
], (props)=>props.type === 'big' ? '100%' : '150px', (0, _utils.color).gridTileColor, (props)=>props.textColor ? props.textColor : (0, _utils.color).primaryFontColor(0.5), (0, _utils.transition)({
    property: 'color'
}), (0, _utils.transition)({
    property: 'background-color'
}), (0, _utils.transition)({
    property: 'opacity'
}), (0, _utils.color).buttonHoverColor, (0, _utils.color).primaryFontColor(), (0, _utils.color).gridTileColor, (0, _utils.color).primaryFontColor(0.5), (0, _utils.color).gridTileColor, (0, _utils.color).primaryFontColor(0.5), (props)=>props.type === 'big' ? '100%' : '112px');

},{"styled-components":"styled-components","../utils":"720ve","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"i0BDj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
parcelHelpers.export(exports, "GridContainer", ()=>GridContainer);
parcelHelpers.export(exports, "GridOverlay", ()=>GridOverlay);
parcelHelpers.export(exports, "PlayPauseContainer", ()=>PlayPauseContainer);
parcelHelpers.export(exports, "CellContainer", ()=>CellContainer);
parcelHelpers.export(exports, "NumberCellContainer", ()=>NumberCellContainer);
parcelHelpers.export(exports, "Keys", ()=>Keys);
parcelHelpers.export(exports, "GameScore", ()=>GameScore);
parcelHelpers.export(exports, "ScoreContainer", ()=>ScoreContainer);
parcelHelpers.export(exports, "GameInstructionContainer", ()=>GameInstructionContainer);
parcelHelpers.export(exports, "Wave", ()=>Wave);
parcelHelpers.export(exports, "ModalContainer", ()=>ModalContainer);
parcelHelpers.export(exports, "Footer", ()=>Footer);
parcelHelpers.export(exports, "Profile", ()=>Profile);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _utils = require("../utils");
const Container = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container",
    componentId: "sc-16h46pr-0"
})([
    "width:500px;margin:0 auto;@media screen and (max-width:520px){width:291px;margin:0 auto;}"
]);
const GridContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__GridContainer",
    componentId: "sc-16h46pr-1"
})([
    "margin:5px 0;grid-template-columns:auto auto auto auto;display:grid;position:relative;padding:15px;cursor:default;touch-action:none;background:",
    ";border-radius:12px;width:500px;height:500px;.grid-row{margin-bottom:15px;display:flex;}@media screen and (max-width:520px){width:292px;height:292px;.grid-row{margin-bottom:10px;}}"
], (0, _utils.color).backgroundColor);
const GridOverlay = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__GridOverlay",
    componentId: "sc-16h46pr-2"
})([
    "display:flex;justify-content:center;align-items:center;position:absolute;padding:15px;z-index:100;background-color:",
    ";float:left;margin-top:3px;margin-left:2px;border-radius:10px;width:499px;height:487px;animation:",
    " 250ms;@media screen and (max-width:520px){width:280px;height:275px;margin-left:6px;margin-top:5px;}"
], (0, _utils.color).gridOverlayBackground, (0, _utils.fadeIn));
const PlayPauseContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__PlayPauseContainer",
    componentId: "sc-16h46pr-3"
})([
    "padding:0 15px;"
]);
const CellContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__CellContainer",
    componentId: "sc-16h46pr-4"
})([
    "width:106.25px;height:106.25px;margin-right:15px;border-radius:10px;background-color:",
    ";@media screen and (max-width:520px){width:57.5px;height:57.5px;margin-right:10px;}&:last-child{margin-right:0;}"
], (0, _utils.color).gridTileColor);
const NumberCellContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__NumberCellContainer",
    componentId: "sc-16h46pr-5"
})([
    "display:",
    ";border-radius:10px;background:",
    ";cursor:pointer;position:relative;user-select:none;justify-content:center;align-items:center;font-family:'Pacifico',cursive;text-align:center;font-weight:bold;z-index:10;font-size:75px;width:107px;",
    ";animation-duration:0.75s;animation-name:",
    ";height:107px;transform:",
    ";.ball-1,.ball-2{position:absolute;background-color:",
    ";opacity:0.2;border-radius:50%;}.ball-1{height:30px;width:30px;top:21px;left:19px;}.ball-2{height:60px;width:60px;bottom:9px;right:10px;}.shadow{color:",
    ";font-size:90px;margin-left:",
    "px;margin-top:",
    "px;}.number{color:white;z-index:99;position:absolute;top:-22px;left:",
    "px;}@media screen and (max-width:520px){width:58px;height:58px;line-height:67.5px;font-size:45px;padding-top:9px;padding-left:",
    "px;border-radius:5px;.ball-1{height:15px;width:15px;top:12px;left:9px;}.ball-2{height:30px;width:30px;bottom:4px;right:7px;}.shadow{font-size:53px;margin-left:",
    "px;margin-top:",
    "px;}.number{top:-14px;left:",
    "px;}}"
], (props)=>props.number > 0 && props.number < 16 ? 'flex' : 'none', (props)=>props.index === props.number ? '#E88A45' : '#6ac6b8', (0, _utils.transition)({
    property: 'transform'
}), (0, _utils.bounceIn), ({ x = 0, y = 0 })=>`translate3d(${x}px, ${y}px, 0)`, (props)=>props.index === props.number ? '  #CD583A' : '#499591', (props)=>props.index === props.number ? '  #CD583A' : '#499591', (props)=>props.number.toString().length == 2 ? props.number === 11 ? -16 : -6 : props.number === 1 ? -10 : 0, (props)=>props.number.toString().length == 2 ? -21 : -19, (props)=>props.number.toString().length == 2 ? 15 : 32, (props)=>props.number === 1 ? 3 : 0, (props)=>props.number.toString().length == 2 ? props.number === 11 ? -6 : -1 : props.number === 1 ? -7 : 0, (props)=>props.number.toString().length == 2 ? -20 : -19, (props)=>props.number.toString().length == 2 ? 7 : 16);
const Keys = (0, _styledComponentsDefault.default).span.withConfig({
    displayName: "Container__Keys",
    componentId: "sc-16h46pr-6"
})([
    "width:150px;float:left;height:105px;display:flex;flex-direction:column;align-items:center;& span.bottom-keys{margin-top:-16px;}& rect{",
    ";}& path{",
    ";}@media screen and (max-width:520px){display:none;}"
], (0, _utils.transition)({
    property: 'fill'
}), (0, _utils.transition)({
    property: 'transform'
}));
const GameScore = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__GameScore",
    componentId: "sc-16h46pr-7"
})([
    "padding:0 15px;display:flex;justify-content:space-between;@media screen and (max-width:520px){padding:20px 15px 0 15px;}"
]);
const ScoreContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__ScoreContainer",
    componentId: "sc-16h46pr-8"
})([
    "background:",
    ";display:flex;margin-left:10px;padding-left:15px;border-radius:8px;.move,.best,.time{position:relative;display:inline-block;text-align:right;width:97px;padding:13px 20px 0 10px;float:right;}.score-title{text-transform:uppercase;font-size:12px;line-height:12px;color:",
    ";}.move-container,.best-container,.time-container{font-size:21px;line-height:25px;font-weight:bold;color:",
    ";}.best{opacity:0.5;}@media screen and (max-width:520px){padding-left:10px;border-radius:5px;.move-container,.best-container,.time-container{font-size:16px;line-height:14px;font-weight:bold;}.move,.best,.time{position:relative;display:inline-block;text-align:right;padding:8px 15px 0 10px;float:right;width:65px;}.time{width:80px;padding-right:6px;}.best{display:none;}}"
], (0, _utils.color).gridTileColor, (0, _utils.color).primaryFontColor(), (0, _utils.color).primaryFontColor());
const GameInstructionContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__GameInstructionContainer",
    componentId: "sc-16h46pr-9"
})([
    "display:flex;padding:0 17px 0 6px;justify-content:space-between;@media screen and (max-width:520px){display:block;}"
]);
const Wave = (0, _styledComponentsDefault.default).img.withConfig({
    displayName: "Container__Wave",
    componentId: "sc-16h46pr-10"
})([
    "margin-top:-30px;@media screen and (max-width:520px){max-width:270px;height:auto;margin-left:9px;}"
]);
const ModalContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__ModalContainer",
    componentId: "sc-16h46pr-11"
})([
    "display:flex;flex-direction:column;align-content:space-around;width:100%;height:100%;text-align:center;justify-content:space-between;.text-1{font-family:'Pacifico',cursive;text-align:center;font-weight:bold;font-size:37px;color:",
    ";}"
], (0, _utils.color).backgroundColor);
const Footer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Container__Footer",
    componentId: "sc-16h46pr-12"
})([
    "width:100%;height:22px;background:",
    ";z-index:10;display:flex;justify-content:center;flex-direction:column;margin-bottom:9px;& .text{color:",
    ";font-family:'Clear Sans',Arial,sans-serif;text-align:center;bottom:0px;margin:11px auto 0px;a{text-decoration:none;color:white;font-weight:bold;}}& .logos{display:flex;justify-content:center;align-items:center;width:100%;margin-top:29px;}@media (max-width:520px){height:22px;margin-top:-10px;padding:10px 4px;& .text{margin:26px auto 0px;}& .logos{margin-top:20px;}}"
], (0, _utils.color).backgroundColor, (0, _utils.color).primaryFontColor());
const Profile = (0, _styledComponentsDefault.default).a.withConfig({
    displayName: "Container__Profile",
    componentId: "sc-16h46pr-13"
})([
    "fill:",
    ";svg,path{",
    ";margin-right:17px;height:32px;width:32px;}&:hover svg path,&:hover{fill:",
    ";color:",
    ";}@media (max-width:520px){svg,path{",
    ";margin-right:7px;height:22px;width:22px;}}"
], (0, _utils.color).gridTileColor, (0, _utils.transition)({}), (0, _utils.color).buttonHoverColor, (0, _utils.color).buttonHoverColor, (0, _utils.transition)({}));

},{"styled-components":"styled-components","../utils":"720ve","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"j79M4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameInstruction", ()=>GameInstruction);
parcelHelpers.export(exports, "HeaderText", ()=>HeaderText);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _utils = require("../utils");
var _wavesGif = require("../assets/img/waves.gif");
var _wavesGifDefault = parcelHelpers.interopDefault(_wavesGif);
const GameInstruction = (0, _styledComponentsDefault.default).span.withConfig({
    displayName: "Text__GameInstruction",
    componentId: "sc-kt7ucz-0"
})([
    "display:block;float:right;margin-top:18px;font-size:22px;line-height:30px;color:",
    ";& strong{color:",
    ";font-size:inherit;}@media screen and (max-width:520px){margin-top:10px;font-size:18px;text-align:center;float:none;line-height:24px;}"
], (0, _utils.color).primaryFontColor(0.5), (0, _utils.color).primaryFontColor());
const HeaderText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Text__HeaderText",
    componentId: "sc-kt7ucz-1"
})([
    "font-family:'Pacifico',cursive;font-size:60px;padding-left:7px;margin-left:2px;text-align:center;span{font-size:85px;}background:url(",
    ") repeat 0 0;width:100%;text-align:center;color:",
    ";margin-top:27px;@media screen and (max-width:520px){font-size:44px;margin-left:-3px;margin-top:5px;span{font-size:58px;}}"
], (0, _wavesGifDefault.default), (0, _utils.color).primaryFontColor());

},{"styled-components":"styled-components","../utils":"720ve","../assets/img/waves.gif":"8qSmD","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"8qSmD":[function() {},{}],"9an7t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Icon", ()=>Icon);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const Icon = (props)=>{
    const { size, color } = props;
    switch(props.name){
        case 'key':
            {
                const { rotate, fillColor, move } = props;
                return /*#__PURE__*/ (0, _reactDefault.default).createElement("svg", {
                    height: size,
                    viewBox: "0 0 73 73",
                    width: size,
                    style: {
                        transform: `rotate(${rotate}deg)`,
                        margin: `0 2px`
                    },
                    __source: {
                        fileName: "src/elements/Icon.js",
                        lineNumber: 15,
                        columnNumber: 16
                    },
                    __self: undefined
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement("rect", {
                    x: "1.5",
                    y: "1.5",
                    width: "70",
                    height: "70",
                    rx: "10.5",
                    ry: "10.5",
                    fill: fillColor,
                    __source: {
                        fileName: "src/elements/Icon.js",
                        lineNumber: 19,
                        columnNumber: 11
                    },
                    __self: undefined
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement("path", {
                    stroke: color,
                    fill: color,
                    d: "M61 3a9 9 0 0 1 9 9v49a9 9 0 0 1-9 9H12a9 9 0 0 1-9-9V12a9 9 0 0 1 9-9h49m0-3H12A12 12 0 0 0 0 12v49a12 12 0 0 0 12 12h49a12 12 0 0 0 12-12V12A12 12 0 0 0 61 0z",
                    __source: {
                        fileName: "src/elements/Icon.js",
                        lineNumber: 20,
                        columnNumber: 11
                    },
                    __self: undefined
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement("path", {
                    style: {
                        transform: move
                    },
                    d: "M17.75 45.75l17.32-16.44a3.11 3.11 0 0 1 4.3.06l15.88 15.88",
                    fill: "none",
                    stroke: color,
                    strokeMiterlimit: "10",
                    strokeWidth: "3",
                    __source: {
                        fileName: "src/elements/Icon.js",
                        lineNumber: 21,
                        columnNumber: 11
                    },
                    __self: undefined
                }));
            }
        case 'play':
            return /*#__PURE__*/ (0, _reactDefault.default).createElement("svg", {
                height: size,
                width: size,
                viewBox: "0 0 512 512",
                style: {
                    ...props.style
                },
                __source: {
                    fileName: "src/elements/Icon.js",
                    lineNumber: 28,
                    columnNumber: 16
                },
                __self: undefined
            }, /*#__PURE__*/ (0, _reactDefault.default).createElement("path", {
                fill: color,
                d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z",
                __source: {
                    fileName: "src/elements/Icon.js",
                    lineNumber: 31,
                    columnNumber: 11
                },
                __self: undefined
            }));
        case 'github':
            return /*#__PURE__*/ (0, _reactDefault.default).createElement("svg", {
                viewBox: "0 0 24 24",
                height: size,
                width: size,
                __source: {
                    fileName: "src/elements/Icon.js",
                    lineNumber: 36,
                    columnNumber: 16
                },
                __self: undefined
            });
        case 'twitter':
            return /*#__PURE__*/ (0, _reactDefault.default).createElement("svg", {
                viewBox: "0 0 24 24",
                height: size,
                width: size,
                __source: {
                    fileName: "src/elements/Icon.js",
                    lineNumber: 41,
                    columnNumber: 16
                },
                __self: undefined
            });
        case 'linkedin':
            return /*#__PURE__*/ (0, _reactDefault.default).createElement("svg", {
                viewBox: "0 0 24 24",
                height: size,
                width: size,
                __source: {
                    fileName: "src/elements/Icon.js",
                    lineNumber: 46,
                    columnNumber: 16
                },
                __self: undefined
            });
    }
};

},{"react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"bV9ri":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
const Score = ({ moves, seconds })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.ScoreContainer), {
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 7,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "time",
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 8,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "score-title",
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 9,
            columnNumber: 9
        },
        __self: undefined
    }, "Time"), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "time-container",
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 10,
            columnNumber: 9
        },
        __self: undefined
    }, seconds, "s")), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "move",
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 12,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "score-title",
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 13,
            columnNumber: 9
        },
        __self: undefined
    }, "Moves"), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "move-container",
        __source: {
            fileName: "src/components/Score/index.js",
            lineNumber: 14,
            columnNumber: 9
        },
        __self: undefined
    }, moves)));
};
exports.default = Score;

},{"react":"react","../../elements":"2F52T","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"iMzCY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
var _utils = require("../../utils");
var _cell = require("../Cell");
var _cellDefault = parcelHelpers.interopDefault(_cell);
class Grid extends (0, _react.Component) {
    cellRender(number = [], clickMove) {
        return number.map((i, _)=>/*#__PURE__*/ (0, _reactDefault.default).createElement((0, _cellDefault.default), {
                key: _,
                number: i,
                index: _,
                clickMove: clickMove,
                __source: {
                    fileName: "src/components/Grid/index.js",
                    lineNumber: 7,
                    columnNumber: 33
                },
                __self: this
            }));
    }
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GameFactoryConsumer), {
            __source: {
                fileName: "src/components/Grid/index.js",
                lineNumber: 10,
                columnNumber: 12
            },
            __self: this
        }, ({ values, methods })=>/*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GridContainer), {
                __source: {
                    fileName: "src/components/Grid/index.js",
                    lineNumber: 14,
                    columnNumber: 13
                },
                __self: this
            }, this.cellRender(values.numbers, methods.clickMove), values.gameState === (0, _utils.gameState).GAME_PAUSED && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GridOverlay), {
                __source: {
                    fileName: "src/components/Grid/index.js",
                    lineNumber: 16,
                    columnNumber: 60
                },
                __self: this
            }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
                onClick: methods.pauseGame,
                __source: {
                    fileName: "src/components/Grid/index.js",
                    lineNumber: 17,
                    columnNumber: 17
                },
                __self: this
            }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Icon), {
                name: "play",
                color: (0, _utils.color).modalBackgroundColor,
                size: 80,
                style: {
                    cursor: 'pointer'
                },
                __source: {
                    fileName: "src/components/Grid/index.js",
                    lineNumber: 18,
                    columnNumber: 19
                },
                __self: this
            })))));
    }
}
exports.default = Grid;

},{"react":"react","../../elements":"2F52T","../../utils":"720ve","../Cell":"5dw3w","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"5dw3w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
const moveKey = ({ x, y })=>{
    const [moveX, handleX] = (0, _react.useState)(0);
    const [moveY, handleY] = (0, _react.useState)(0);
    (0, _react.useEffect)(()=>{
        handleX((currentX)=>currentX + x);
        handleY((currentY)=>currentY + y);
    }, [
        moveX,
        moveY
    ]);
    return {
        x,
        y
    };
};
class Cell extends (0, _react.Component) {
    render() {
        //const { x, y } = moveKey(this.props.x, this.props.y);
        const { number, index } = this.props;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.CellContainer), {
            __source: {
                fileName: "src/components/Cell/index.js",
                lineNumber: 25,
                columnNumber: 12
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.NumberCellContainer), {
            number: number,
            index: index + 1,
            onClick: ()=>{
                this.props.clickMove(index);
            },
            __source: {
                fileName: "src/components/Cell/index.js",
                lineNumber: 26,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            className: "ball-1",
            __source: {
                fileName: "src/components/Cell/index.js",
                lineNumber: 29,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            className: "ball-2",
            __source: {
                fileName: "src/components/Cell/index.js",
                lineNumber: 30,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            className: "number",
            __source: {
                fileName: "src/components/Cell/index.js",
                lineNumber: 31,
                columnNumber: 11
            },
            __self: this
        }, number), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            className: "shadow",
            __source: {
                fileName: "src/components/Cell/index.js",
                lineNumber: 32,
                columnNumber: 11
            },
            __self: this
        }, number)));
    }
}
exports.default = Cell;

},{"react":"react","../../elements":"2F52T","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"gz0TA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
var _utils = require("../../utils");
const KeyButton = ({ currentKey, index })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Icon), {
        name: "key",
        size: 40,
        color: currentKey == index ? (0, _utils.color).primaryFontColor(1) : (0, _utils.color).primaryFontColor(0.3),
        rotate: (index - 1) * 90,
        move: currentKey == index ? `translate3d(0px,-5px,0)` : null,
        fillColor: currentKey == index ? (0, _utils.color).primaryFontColor(0.3) : (0, _utils.color).primaryFontColor(0),
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 8,
            columnNumber: 10
        },
        __self: undefined
    });
};
const Instructions = ()=>{
    const [key, moveKey] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        let timer1 = (index)=>setTimeout(()=>moveKey(index), index * 350);
        for(let i = 1; i <= 5; i++)timer1(i);
        return ()=>{
            clearTimeout(timer1);
        };
    }, []);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GameInstructionContainer), {
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 21,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Keys), {
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 22,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(KeyButton, {
        currentKey: key,
        index: 1,
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 23,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement("br", {
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 24,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
        className: "bottom-keys",
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 25,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(KeyButton, {
        currentKey: key,
        index: 4,
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 26,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(KeyButton, {
        currentKey: key,
        index: 3,
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 27,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(KeyButton, {
        currentKey: key,
        index: 2,
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 28,
            columnNumber: 11
        },
        __self: undefined
    }))), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.GameInstruction), {
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 31,
            columnNumber: 7
        },
        __self: undefined
    }, "Move tiles in grid ", /*#__PURE__*/ (0, _reactDefault.default).createElement("br", {
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 32,
            columnNumber: 28
        },
        __self: undefined
    }), " to order them from ", /*#__PURE__*/ (0, _reactDefault.default).createElement("strong", {
        __source: {
            fileName: "src/components/Instructions/index.jsx",
            lineNumber: 32,
            columnNumber: 54
        },
        __self: undefined
    }, "1 to 15.")));
};
exports.default = Instructions;

},{"react":"react","../../elements":"2F52T","../../utils":"720ve","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"auVih":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
class Header extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.HeaderText), {
            __source: {
                fileName: "src/components/Header/index.jsx",
                lineNumber: 5,
                columnNumber: 12
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            __source: {
                fileName: "src/components/Header/index.jsx",
                lineNumber: 6,
                columnNumber: 9
            },
            __self: this
        }, "15"), " Puzzle");
    }
}
exports.default = Header;

},{"react":"react","../../elements":"2F52T","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"gVIyX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _elements = require("../../elements");
const Details = ({ name, githubURL, linkedinURL, twitterURL, projectURL })=>/*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Footer), {
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 9,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        className: "logos",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 11,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Profile), {
        href: githubURL,
        target: "_blank",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 12,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Icon), {
        name: "github",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 13,
            columnNumber: 9
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Profile), {
        href: linkedinURL,
        target: "_blank",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 15,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Icon), {
        name: "linkedin",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 16,
            columnNumber: 9
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Profile), {
        href: twitterURL,
        target: "_blank",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 18,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _elements.Icon), {
        name: "twitter",
        __source: {
            fileName: "src/components/Details/index.js",
            lineNumber: 19,
            columnNumber: 9
        },
        __self: undefined
    }))));
exports.default = Details;

},{"react":"react","../../elements":"2F52T","@parcel/transformer-js/src/esmodule-helpers.js":"6XkeS"}],"8qSmD":[function() {},{}],"gLLBI":[function() {},{}]},["iJCA9","6zZG0"], "6zZG0", "parcelRequire7892", {"react": __parcelExternal0,"react-dom": __parcelExternal1,"react-router-dom": __parcelExternal2,"@babel/runtime/helpers/defineProperty": __parcelExternal3,"styled-components": __parcelExternal4,})
let {} = parcelRequire7892("6zZG0");
export {};

//# sourceMappingURL=Sliding puzzle.a07fb6ad.js.map
