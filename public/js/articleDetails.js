(self["webpackChunk"] = self["webpackChunk"] || []).push([["articleDetails"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    goBack: function goBack() {
      history.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleDetails.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleDetails.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ArticleService */ "./resources/js/services/ArticleService.js");
/* harmony import */ var _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/HistoryService */ "./resources/js/services/HistoryService.js");
/* harmony import */ var _services_Donor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Donor */ "./resources/js/services/Donor.js");
/* harmony import */ var _services_FileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/FileService */ "./resources/js/services/FileService.js");
/* harmony import */ var _components_GoBack_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GoBack.vue */ "./resources/js/components/GoBack.vue");
/* harmony import */ var _services_RestaurationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/RestaurationService */ "./resources/js/services/RestaurationService.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ArticleDetails',
  components: {
    GoBack: _components_GoBack_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      List: [],
      searchTerm: '',
      originalList: [],
      imageUrl: '',
      // Ruta relativa de la imagen desde la carpeta public
      imageAlt: '',
      qrCodeSrc: '',
      article: {
        id: '',
        numRefInter: '',
        otherRef: '',
        name: '',
        title: '',
        objectType: '',
        acquisitionType: '',
        width: '',
        measureWidth: '',
        height: '',
        measureHeight: '',
        lenght: '',
        measureLenght: '',
        diameter: '',
        measureDiameter: '',
        weight: '',
        measureWeight: '',
        conservationStatus: '',
        legalStatus: '',
        value: '',
        typeCoin: '',
        distinguishingFeature: '',
        location: '',
        fragmented: '',
        replica: '',
        cedulaDonor: ''
      },
      history: {
        id: '',
        materials: '',
        manufacturing: '',
        inscripsionMarcas: '',
        antiquity: '',
        history: '',
        itemId: ''
      },
      donor: [],
      ListRestauration: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var currentUrl;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__["default"].getArticles().then(function (data) {
              console.log(data);
              _this.List = data;
              _this.originalList = _this.List;
              console.log(_this.originalList);
            });
          case 2:
            // Generamos el código QR con la dirección web actual
            currentUrl = encodeURIComponent(window.location.href);
            _this.qrCodeSrc = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=".concat(currentUrl);
            _context.next = 6;
            return _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__["default"].getArticle(_this.id).then(function (data) {
              _this.list = data;
              var event = _this.list[0];
              console.log(data);
              _this.article.id = event.id, _this.article.numRefInter = event.numRefInter, _this.article.otherRef = event.otherRef, _this.article.name = event.name, _this.article.title = event.title, _this.article.objectType = event.objectType, _this.article.acquisitionType = event.acquisitionTypeDescription, _this.article.width = event.width, _this.article.measureWidth = event.measureWidth, _this.article.height = event.height, _this.article.measureHeight = event.measureHeight, _this.article.lenght = event.lenght, _this.article.measureLenght = event.measureLenght, _this.article.diameter = event.diameter, _this.article.measureDiameter = event.measureDiameter, _this.article.weight = event.weight, _this.article.measureWeight = event.measureWeight, _this.article.conservationStatus = event.conservationStatusDescription, _this.article.legalStatus = event.legalStatusDescription, _this.article.value = event.value, _this.article.typeCoin = event.typeCoin, _this.article.distinguishingFeature = event.distinguishingFeature, _this.article.location = event.location, _this.article.fragmented = event.fragmented, _this.article.replica = event.replica, _this.article.cedulaDonor = event.cedulaDonor;
            });
          case 6:
            _context.next = 8;
            return _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__["default"].getHistoryByArticle(_this.article.id).then(function (data) {
              _this.listHistory = data;
              console.log(data);
              var event = _this.listHistory[0];
              _this.history.id = event.id, _this.history.materials = event.materials, _this.history.manufacturing = event.manufacturing, _this.history.inscripsionMarcas = event.inscripsionMarcas, _this.history.antiquity = event.antiquity, _this.history.history = event.history, _this.history.itemId = event.itemId;
            });
          case 8:
            console.log(_this.article.cedulaDonor);
            _context.next = 11;
            return _services_Donor__WEBPACK_IMPORTED_MODULE_2__["default"].getDetailsByCedula(_this.article.cedulaDonor).then(function (data) {
              console.log(data);
              _this.donor = data;
            });
          case 11:
            console.log(_this.donor);
            _context.next = 14;
            return _services_RestaurationService__WEBPACK_IMPORTED_MODULE_5__["default"].getRestaurationsByArticle(_this.id).then(function (data) {
              console.log('rest');
              console.log(data);
              _this.ListRestauration = data;
            });
          case 14:
            _context.next = 16;
            return _services_FileService__WEBPACK_IMPORTED_MODULE_3__["default"].getImageByIdArticle(_this.id).then(function (data) {
              console.log('image');
              console.log(data);
              if (data == 'null') {
                ;
                _this.imageUrl = '/images/museo/frontPage.png',
                // Ruta relativa de la imagen desde la carpeta public
                _this.imageAlt = 'Imagen de muestra';
              } else {
                ;
                _this.imageUrl = '/' + data.filePath, _this.imageAlt = data.fileName;
              }
              console.log(_this.imageUrl);
            });
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    downloadQRCode: function downloadQRCode() {
      fetch(this.qrCodeSrc).then(function (res) {
        return res.blob();
      }).then(function (blob) {
        return (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(blob, 'my-qr-code.png');
      });
    },
    goBack: function goBack() {
      this.$router.push({
        name: 'ArticleView'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "iconly-Arrow-Left-Square icli"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "title-color",
    style: {
      "font-size": "x-large"
    },
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.goBack();
    })
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Volver ")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleDetails.vue?vue&type=template&id=5b1ef424":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleDetails.vue?vue&type=template&id=5b1ef424 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "header"
};
var _hoisted_2 = {
  "class": "logo-wrap"
};
var _hoisted_3 = {
  "class": "main-wrap product-page mb-xxl"
};
var _hoisted_4 = {
  "class": "banner-box product-banner"
};
var _hoisted_5 = {
  "class": "banner",
  style: {
    "display": "flex",
    "justify-content": "center"
  }
};
var _hoisted_6 = ["src", "alt"];
var _hoisted_7 = {
  "class": "product-section"
};
var _hoisted_8 = {
  "class": "font-md"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"rating\"><i data-feather=\"star\"></i><i data-feather=\"star\"></i><i data-feather=\"star\"></i><i data-feather=\"star\"></i><i data-feather=\"star\"></i></div>", 1);
var _hoisted_10 = {
  "class": "price"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Título: ", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "product-detail section-p-t"
};
var _hoisted_13 = {
  "class": "product-detail-box"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title-color"
}, "Detalles del artículo", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_16 = {
  style: {
    "display": "flex",
    "flex-wrap": "wrap"
  }
};
var _hoisted_17 = {
  style: {
    "flex": "1"
  }
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Número de referencia: ", -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Otra número de referencia: ", -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Tipo de objeto: ", -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Tipo de adquisición: ", -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Estado de conservación: ", -1 /* HOISTED */);
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Valor: ", -1 /* HOISTED */);
var _hoisted_24 = {
  style: {
    "flex": "1"
  }
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Estado legal: ", -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Localización: ", -1 /* HOISTED */);
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Fragmentado: ", -1 /* HOISTED */);
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Réplica: ", -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Donador: ", -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Rasgos distintivos: ", -1 /* HOISTED */);
var _hoisted_31 = {
  id: "accordionExample",
  "class": "accordion"
};
var _hoisted_32 = {
  "class": "accordion-item"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  id: "headingOne",
  "class": "accordion-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "accordion-button",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapseOne",
  "aria-expanded": "true",
  "aria-controls": "collapseOne"
}, " Código QR ")], -1 /* HOISTED */);
var _hoisted_34 = {
  id: "collapseOne",
  "class": "accordion-collapse collapse show",
  "aria-labelledby": "headingOne",
  "data-bs-parent": "#accordionExample"
};
var _hoisted_35 = {
  "class": "accordion-body"
};
var _hoisted_36 = {
  "class": "banner",
  style: {
    "display": "flex",
    "justify-content": "center"
  }
};
var _hoisted_37 = ["src"];
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_39 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_40 = {
  "class": "accordion-item"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  id: "headingTwo",
  "class": "accordion-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "accordion-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapseTwo",
  "aria-expanded": "false",
  "aria-controls": "collapseTwo"
}, " Historia del artículo ")], -1 /* HOISTED */);
var _hoisted_42 = {
  id: "collapseTwo",
  "class": "accordion-collapse collapse",
  "aria-labelledby": "headingTwo",
  "data-bs-parent": "#accordionExample"
};
var _hoisted_43 = {
  "class": "accordion-body"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Materiales: ", -1 /* HOISTED */);
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Técnicas de manufactura: ", -1 /* HOISTED */);
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Inscripción de marcas: ", -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Antigüedad: ", -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Historia: ", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "accordion-item"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  id: "headingThree",
  "class": "accordion-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "accordion-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapseThree",
  "aria-expanded": "false",
  "aria-controls": "collapseThree"
}, " Características del artículo ")], -1 /* HOISTED */);
var _hoisted_56 = {
  id: "collapseThree",
  "class": "accordion-collapse collapse",
  "aria-labelledby": "headingThree",
  "data-bs-parent": "#accordionExample"
};
var _hoisted_57 = {
  "class": "accordion-body"
};
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_59 = {
  style: {
    "display": "flex",
    "flex-wrap": "wrap"
  }
};
var _hoisted_60 = {
  style: {
    "flex": "1"
  }
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Ancho: ", -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Alto: ", -1 /* HOISTED */);
var _hoisted_63 = {
  style: {
    "flex": "1"
  }
};
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Largo: ", -1 /* HOISTED */);
var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Diámetro: ", -1 /* HOISTED */);
var _hoisted_66 = {
  "class": "accordion-item"
};
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  id: "headingThree",
  "class": "accordion-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "accordion-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapseFour",
  "aria-expanded": "false",
  "aria-controls": "collapseFour"
}, " Restauraciones del artículo ")], -1 /* HOISTED */);
var _hoisted_68 = {
  id: "collapseFour",
  "class": "accordion-collapse collapse",
  "aria-labelledby": "headingThree",
  "data-bs-parent": "#accordionExample"
};
var _hoisted_69 = {
  "class": "accordion-body"
};
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_71 = {
  style: {
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "center"
  }
};
var _hoisted_72 = {
  key: 0,
  "class": "offer-section pt-0"
};
var _hoisted_73 = {
  "class": "offer"
};
var _hoisted_74 = {
  "class": "product-list media"
};
var _hoisted_75 = {
  "class": "media-body"
};
var _hoisted_76 = {
  "class": "font-sm"
};
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_78 = {
  "class": "content-color font-xs"
};
var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_80 = {
  "class": "content-color font-xs"
};
var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_82 = {
  "class": "content-color font-xs"
};
var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_84 = {
  "class": "content-color font-xs"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_86 = {
  "class": "content-color font-xs"
};
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_89 = {
  "class": "title-color font-sm"
};
var _hoisted_90 = {
  "class": "badges-round bg-theme-theme font-xs"
};
var _hoisted_91 = {
  "class": "plus-minus"
};
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "plus-theme"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "data-feather": "plus"
})], -1 /* HOISTED */);
var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_94 = {
  key: 1
};
var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "No posee restauraciones.", -1 /* HOISTED */);
var _hoisted_96 = [_hoisted_95];
var _hoisted_97 = {
  "class": "product-review pb-0"
};
var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "top-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "title-color"
}, "Donador")], -1 /* HOISTED */);
var _hoisted_99 = {
  "class": "review-wrap"
};
var _hoisted_100 = {
  "class": "review-box"
};
var _hoisted_101 = {
  "class": "media"
};
var _hoisted_102 = {
  key: 0
};
var _hoisted_103 = {
  "class": "badge bg-success text-uppercase mb-2"
};
var _hoisted_104 = {
  key: 1
};
var _hoisted_105 = {
  "class": "badge bg-danger text-uppercase mb-2"
};
var _hoisted_106 = {
  "class": "media-body"
};
var _hoisted_107 = {
  "class": "font-sm title-color"
};
var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"rating\"><i data-feather=\"star\"></i><i data-feather=\"star\"></i><i data-feather=\"star\"></i><i data-feather=\"star\"></i><i data-feather=\"star\"></i></div>", 1);
var _hoisted_109 = {
  "class": "font-sm content-color"
};
var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Cédula: ", -1 /* HOISTED */);
var _hoisted_111 = {
  "class": "font-sm content-color"
};
var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Correo electrónico: ", -1 /* HOISTED */);
var _hoisted_113 = {
  "class": "font-sm content-color"
};
var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Teléfono: ", -1 /* HOISTED */);
var _hoisted_115 = {
  "class": "font-sm content-color"
};
var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Dirección: ", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GoBack = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GoBack");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GoBack)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Banner Section Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.imageUrl,
    alt: $data.imageAlt,
    style: {
      "display": "block",
      "max-width": "50%",
      "height": "auto",
      "padding": "20px",
      "box-sizing": "border-box"
    }
  }, null, 8 /* PROPS */, _hoisted_6)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Banner Section End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Section Section Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.name), 1 /* TEXT */), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Detail Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.numRefInter), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.otherRef), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.objectType), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.acquisitionType), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.conservationStatus), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.value) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.typeCoin), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.legalStatus), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.location), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.fragmented), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.replica), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.name), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.distinguishingFeature), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Detail Accordian Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Accordion Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.qrCodeSrc,
    alt: "Código QR generado con la dirección web actual",
    style: {
      "width": "250px",
      "height": "250px"
    }
  }, null, 8 /* PROPS */, _hoisted_37)]), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-outline font-md text-center",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.downloadQRCode && $options.downloadQRCode.apply($options, arguments);
    })
  }, " Descargar QR ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Accordion End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Accordion Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.history.materials), 1 /* TEXT */)]), _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.history.manufacturing), 1 /* TEXT */)]), _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.history.inscripsionMarcas), 1 /* TEXT */)]), _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.history.antiquity), 1 /* TEXT */)]), _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.history.history), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Accordion End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Accordion Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.width) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.measureWidth), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.height) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.measureHeight), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.lenght) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.measureLenght), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.diameter) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.article.measureDiameter), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Accordion End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [$data.ListRestauration.length !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ListRestauration, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id,
      "class": "offer-wrap"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_76, " Artículo: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.articles.name), 1 /* TEXT */), _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_78, "Enviado a restauración: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.dateSend), 1 /* TEXT */), _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_80, "Encargado de realizar la restauración: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.inChargeRestauration), 1 /* TEXT */), _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_82, "Lugar donde se realiza la restauración: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.placeRestauration), 1 /* TEXT */), _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_84, "Costo: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.cost), 1 /* TEXT */), _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_86, "Usuario que autorizó: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.userAutorizedSend), 1 /* TEXT */), _hoisted_87, _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.statusDescription) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.detailsSend), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      "class": "btn-outline font-md text-center",
      to: {
        name: 'RestaurationDetails',
        params: {
          id: item.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Detalle")];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])])]), _hoisted_92])])]), _hoisted_93]);
  }), 128 /* KEYED_FRAGMENT */))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_94, _hoisted_96))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Detail Accordian End ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Detail End ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Section Section End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Review Section Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [$data.donor.status == 'A' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.statusDescription), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.donor.status == 'I' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.statusDescription), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.name), 1 /* TEXT */), _hoisted_108])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_109, [_hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.identification), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.email), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.phone), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_115, [_hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.donor.description), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Review Section End ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main End ")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/services/ArticleService.js":
/*!*************************************************!*\
  !*** ./resources/js/services/ArticleService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var apiUrl = 'articles';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Obtener todos los donantes
  getArticles: function getArticles() {
    return axios.get("".concat(apiUrl, "/getArticles")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getTypeObjects: function getTypeObjects() {
    return axios.get("".concat(apiUrl, "/getTypeObjects")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getArticle: function getArticle($id) {
    console.log($id);
    return axios.get("".concat(apiUrl, "/getArticle?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getTypeObject: function getTypeObject($id) {
    console.log($id);
    return axios.get("".concat(apiUrl, "/getTypeObject?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getArticleById: function getArticleById($id) {
    console.log($id);
    return axios.get("".concat(apiUrl, "/getArticleById?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  createArticle: function createArticle($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/store"), $data).then(function (response) {
      return response.data;
    });
    // .catch((error) => Promise.reject(error))
  },
  updateArticle: function updateArticle($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/update"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  },
  deleteArticle: function deleteArticle($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/delete"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  }
});

/***/ }),

/***/ "./resources/js/services/Donor.js":
/*!****************************************!*\
  !*** ./resources/js/services/Donor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var apiUrl = 'donores';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Obtener todos los donantes
  getDonors: function getDonors() {
    return axios.get("".concat(apiUrl, "/showDonor")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  //Obtener los detalles de un donante
  getDetails: function getDetails(id) {
    return axios.get("".concat(apiUrl, "/").concat(id, "/detailsDonor")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getDetailsByCedula: function getDetailsByCedula(cedula) {
    return axios.get("".concat(apiUrl, "/").concat(cedula, "/detailsDonorByCedula")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  //Cambiar estado
  changeStatus: function changeStatus(id) {
    return axios.put("".concat(apiUrl, "/").concat(id, "/changeStatus")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  //Registrar donantes
  register: function register(requestOptions) {
    return axios.post("".concat(apiUrl, "/register"), requestOptions).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  update: function update(requestOptions) {
    return axios.put("".concat(apiUrl, "/update"), requestOptions).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  }
});

/***/ }),

/***/ "./resources/js/services/FileService.js":
/*!**********************************************!*\
  !*** ./resources/js/services/FileService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var apiUrl = 'files';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Obtener todos los donantes
  registerFile: function registerFile($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/store"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  },
  updateFile: function updateFile($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/update"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  },
  getImageByIdArticle: function getImageByIdArticle($id) {
    return axios.get("".concat(apiUrl, "/getImageByIdArticle?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  }
});

// import axios from 'axios'

// async function insertFile(formData) {
//   try {
//     const response = await axios.post(`${apiUrl}/store`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//     return response.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// async function saveData(dataObj) {
//   try {
//     await insertFile(dataObj)
//     console.log('Datos guardados en línea')
//   } catch (error) {
//     console.log('No se pudo guardar en línea, almacenando en IndexedDB')
//     const dbPromise = window.indexedDB.open(dbName, 1)
//     dbPromise.onupgradeneeded = function (event) {
//       const db = event.target.result
//       const objectStore = db
//         .createObjectStore(objectStoreName, {
//           keyPath: 'id',
//           autoIncrement: true,
//         })
//         .then((response) => response.data)
//         .catch((error) => Promise.reject(error))
//     }
//   }
// }

// async function showFile(id, location) {
//   try {
//     const response = await axios.get(`/files/${id}/${location}/showFile`)
//     return response.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// async function showSignature(id, location) {
//   try {
//     const response = await axios.get(`/files/${id}/${location}/showSignature`)
//     return response.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// async function downloadFile(id, location) {
//   try {
//     const response = await axios.get(`/files/${id}/${location}/download`)
//     return response.data
//   } catch (error) {
//     const errorMessage =
//       'No se pudo descargar el archivo. Verifique su conexión a Internet.'
//     return Promise.reject(new Error(errorMessage))
//   }
// }

// async function deleteFiles(data) {
//   return axios
//     .put(`/files/${data.id}/${data.location}/delete`, data)
//     .then((response) => response.data)
//     .catch((error) => Promise.reject(error))
// }

// export default {
//   insertFile,
//   saveData,
//   showFile,
//   downloadFile,
//   showSignature,
//   deleteFiles,
// }

/***/ }),

/***/ "./resources/js/services/HistoryService.js":
/*!*************************************************!*\
  !*** ./resources/js/services/HistoryService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var apiUrl = 'histories';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Obtener todos los donantes
  getHistories: function getHistories() {
    return axios.get("".concat(apiUrl, "/getHistories")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getHistory: function getHistory($id) {
    console.log($id);
    return axios.get("".concat(apiUrl, "/getHistory?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getHistoryByArticle: function getHistoryByArticle($id) {
    console.log($id);
    return axios.get("".concat(apiUrl, "/getHistoryByArticle?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  createHistory: function createHistory($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/store"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  },
  updateHistory: function updateHistory($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/update"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  },
  deleteHistory: function deleteHistory($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/delete"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  }
});

/***/ }),

/***/ "./resources/js/services/RestaurationService.js":
/*!******************************************************!*\
  !*** ./resources/js/services/RestaurationService.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var apiUrl = 'restaurations';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getRestaurations: function getRestaurations() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(apiUrl, "/getRestaurations")).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getRestauration: function getRestauration($id) {
    console.log($id);
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(apiUrl, "/getRestauration?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  getRestaurationsByArticle: function getRestaurationsByArticle($id) {
    console.log($id);
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(apiUrl, "/getRestaurationsByArticle?id=") + $id).then(function (response) {
      return response.data;
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  createRestauration: function createRestauration($data) {
    console.log($data);
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(apiUrl, "/store"), $data).then(function (response) {
      return response.data;
    });
    //.catch((error) => Promise.reject(error))
  },
  updateRestauration: function updateRestauration($data) {
    console.log($data);
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(apiUrl, "/update"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  },
  approveRestauration: function approveRestauration($data) {
    console.log($data);
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(apiUrl, "/approve"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
  } //   deleteRestauration($data) {
  //     console.log($data)
  //     return axios
  //       .post(`${apiUrl}/delete`, $data)
  //       .then((response) => response.data)
  //     //   .catch((error) => Promise.reject(error))
  //   },
});

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./resources/js/components/GoBack.vue":
/*!********************************************!*\
  !*** ./resources/js/components/GoBack.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoBack.vue?vue&type=template&id=e0041ecc */ "./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc");
/* harmony import */ var _GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoBack.vue?vue&type=script&lang=js */ "./resources/js/components/GoBack.vue?vue&type=script&lang=js");
/* harmony import */ var D_Museo_el_sabanero_git_Jeank_DV_Jeank_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Museo_el_sabanero_git_Jeank_DV_Jeank_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/GoBack.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Article/ArticleDetails.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Article/ArticleDetails.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArticleDetails_vue_vue_type_template_id_5b1ef424__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleDetails.vue?vue&type=template&id=5b1ef424 */ "./resources/js/views/Article/ArticleDetails.vue?vue&type=template&id=5b1ef424");
/* harmony import */ var _ArticleDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleDetails.vue?vue&type=script&lang=js */ "./resources/js/views/Article/ArticleDetails.vue?vue&type=script&lang=js");
/* harmony import */ var D_Museo_el_sabanero_git_Jeank_DV_Jeank_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Museo_el_sabanero_git_Jeank_DV_Jeank_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ArticleDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ArticleDetails_vue_vue_type_template_id_5b1ef424__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Article/ArticleDetails.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/GoBack.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/GoBack.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GoBack.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Article/ArticleDetails.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Article/ArticleDetails.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleDetails.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc":
/*!**************************************************************************!*\
  !*** ./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GoBack.vue?vue&type=template&id=e0041ecc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc");


/***/ }),

/***/ "./resources/js/views/Article/ArticleDetails.vue?vue&type=template&id=5b1ef424":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Article/ArticleDetails.vue?vue&type=template&id=5b1ef424 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleDetails_vue_vue_type_template_id_5b1ef424__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleDetails_vue_vue_type_template_id_5b1ef424__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleDetails.vue?vue&type=template&id=5b1ef424 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleDetails.vue?vue&type=template&id=5b1ef424");


/***/ })

}]);