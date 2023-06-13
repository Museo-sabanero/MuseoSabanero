"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["articleUpdate"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleUpdate.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleUpdate.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ArticleService */ "./resources/js/services/ArticleService.js");
/* harmony import */ var _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/HistoryService */ "./resources/js/services/HistoryService.js");
/* harmony import */ var _services_FileService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/FileService */ "./resources/js/services/FileService.js");
/* harmony import */ var _services_Donor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Donor */ "./resources/js/services/Donor.js");
/* harmony import */ var _components_GoBack_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GoBack.vue */ "./resources/js/components/GoBack.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ArticleUpdate',
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
      formData: {
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
      itemId: '',
      showPopup: false,
      file: null,
      imageUrl: null,
      list: [],
      listHistory: [],
      donors: [],
      showErrorDonor: false,
      showErrorAcquisitionType: false,
      showErrorConservationStatus: false,
      showErrorLegalStatus: false,
      showErrorFragmented: false,
      showErrorReplica: false,
      showErrorWidth: false,
      showErrorHeight: false,
      showErrorLenght: false,
      showErrorDiameter: false,
      showErrorWeight: false,
      showErrorCurrency: false,
      weights: ['Gramos (g)', 'Kilogramos (kg)', 'Onzas (oz)', 'Libras (lb)', 'Toneladas (t)'],
      distances: ['Milímetros (mm)', 'Centímetros (cm)', 'Metros (m)', 'Pulgadas (in)', 'Pies (ft)'],
      currencies: [{
        label: 'Colón costarricense',
        value: 'CRC'
      }, {
        label: 'Dólar estadounidense',
        value: 'USD'
      }, {
        label: 'Euro',
        value: 'EUR'
      }, {
        label: 'Dólar canadiense',
        value: 'CAD'
      }, {
        label: 'Peso mexicano',
        value: 'MXN'
      }, {
        label: 'No aplica',
        value: 'N/A'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_Donor__WEBPACK_IMPORTED_MODULE_3__["default"].getDonors().then(function (data) {
              console.log(data);
              _this.donors = data;
            });
          case 2:
            _context.next = 4;
            return _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__["default"].getArticle(_this.id).then(function (data) {
              _this.list = data;
              var event = _this.list[0];
              console.log(data);
              _this.formData.id = event.id, _this.formData.numRefInter = event.numRefInter, _this.formData.otherRef = event.otherRef, _this.formData.name = event.name, _this.formData.title = event.title, _this.formData.objectType = event.objectType, _this.formData.acquisitionType = event.acquisitionType, _this.formData.width = event.width, _this.formData.measureWidth = event.measureWidth, _this.formData.height = event.height, _this.formData.measureHeight = event.measureHeight, _this.formData.lenght = event.lenght, _this.formData.measureLenght = event.measureLenght, _this.formData.diameter = event.diameter, _this.formData.measureDiameter = event.measureDiameter, _this.formData.weight = event.weight, _this.formData.measureWeight = event.measureWeight, _this.formData.conservationStatus = event.conservationStatus, _this.formData.legalStatus = event.legalStatus, _this.formData.value = event.value, _this.formData.typeCoin = event.typeCoin, _this.formData.distinguishingFeature = event.distinguishingFeature, _this.formData.location = event.location, _this.formData.fragmented = event.fragmented, _this.formData.replica = event.replica, _this.formData.cedulaDonor = event.cedulaDonor;
            });
          case 4:
            _context.next = 6;
            return _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__["default"].getHistoryByArticle(_this.formData.id).then(function (data) {
              _this.listHistory = data;
              console.log(data);
              var event = _this.listHistory[0];
              _this.history.id = event.id, _this.history.materials = event.materials, _this.history.manufacturing = event.manufacturing, _this.history.inscripsionMarcas = event.inscripsionMarcas, _this.history.antiquity = event.antiquity, _this.history.history = event.history, _this.history.itemId = event.itemId;
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    handleSubmit: function handleSubmit() {
      if (!this.formData.acquisitionType) {
        return this.showErrorAcquisitionType = true;
      }
      if (!this.formData.conservationStatus) {
        return this.showErrorConservationStatus = true;
      }
      if (!this.formData.legalStatus) {
        return this.showErrorLegalStatus = true;
      }
      if (!this.formData.fragmented) {
        return this.showErrorFragmented = true;
      }
      if (!this.formData.replica) {
        return this.showErrorReplica = true;
      }
      if (!this.formData.cedulaDonor) {
        return this.showErrorDonor = true;
      }
      if (!this.formData.measureWidth) {
        return this.showErrorWidth = true;
      }
      if (!this.formData.measureHeight) {
        return this.showErrorHeight = true;
      }
      if (!this.formData.measureLenght) {
        return this.showErrorLenght = true;
      }
      if (!this.formData.measureDiameter) {
        return this.showErrorDiameter = true;
      }
      if (!this.formData.measureWeight) {
        return this.showErrorWeight = true;
      }
      if (!this.formData.typeCoin) {
        return this.showErrorCurrency = true;
      }
      console.log(this.formData);
      var article = {
        id: this.formData.id,
        numRefInter: this.formData.numRefInter,
        otherRef: this.formData.otherRef,
        name: this.formData.name,
        title: this.formData.title,
        objectType: this.formData.objectType,
        acquisitionType: this.formData.acquisitionType,
        width: this.formData.width,
        measureWidth: this.formData.measureWidth,
        height: this.formData.height,
        measureHeight: this.formData.measureHeight,
        lenght: this.formData.lenght,
        measureLenght: this.formData.measureLenght,
        diameter: this.formData.diameter,
        measureDiameter: this.formData.measureDiameter,
        weight: this.formData.weight,
        measureWeight: this.formData.measureWeight,
        conservationStatus: this.formData.conservationStatus,
        legalStatus: this.formData.legalStatus,
        value: this.formData.value,
        typeCoin: this.formData.typeCoin,
        distinguishingFeature: this.formData.distinguishingFeature,
        location: this.formData.location,
        fragmented: this.formData.fragmented,
        replica: this.formData.replica,
        cedulaDonor: this.formData.cedulaDonor
      };
      console.log(article);
      _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__["default"].updateArticle(article).then(function (data) {
        console.log(data);
      });
      var histo = {
        id: this.history.id,
        materials: this.history.materials,
        manufacturing: this.history.manufacturing,
        inscripsionMarcas: this.history.inscripsionMarcas,
        antiquity: this.history.antiquity,
        history: this.history.history,
        itemId: this.history.itemId
      };
      console.log(histo);
      _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__["default"].updateHistory(histo).then(function (dataHisto) {
        console.log(dataHisto);
        console.log(histo);
        // this.$router.push('/article/index')
      });

      if (this.file != null) {
        var fileData = new FormData();
        fileData.append('file', this.file);
        fileData.append('elementId', this.formData.id);
        console.log('data');
        console.log(fileData);
        _services_FileService__WEBPACK_IMPORTED_MODULE_2__["default"].updateFile(fileData).then(function (dataFile) {
          console.log(dataFile);
          console.log(fileData);
        });
      }
      this.$router.push('/article/index');
    },
    deleteArticle: function deleteArticle() {
      var _this2 = this;
      console.log(this.formData);
      var registro = {
        id: this.formData.id
      };
      console.log(registro);
      _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteArticle(registro).then(function (data) {
        console.log(data);
        _this2.$router.push('/article/index');
      });
    },
    goBack: function goBack() {
      this.$router.push({
        name: 'ArticleView'
      });
    },
    handleDrop: function handleDrop(e) {
      e.preventDefault();
      this.file = e.dataTransfer.files[0];
      this.previewImage();
    },
    handleFileInput: function handleFileInput() {
      this.file = this.$refs.fileInput.files[0];
      this.previewImage();
    },
    openFileInput: function openFileInput() {
      //this.$refs.fileInput.click()
      ;
      this.file = null, this.imageUrl = null;
    },
    previewImage: function previewImage() {
      var _this3 = this;
      if (!this.file) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        _this3.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleUpdate.vue?vue&type=template&id=05322552":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleUpdate.vue?vue&type=template&id=05322552 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  "class": "main-wrap about-us-page mb-xxl"
};
var _hoisted_4 = {
  "class": "how-do-section pt-0"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-theme font-md"
}, "Editar articulo:", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-6"
};
var _hoisted_8 = {
  "class": "steps-wrap"
};
var _hoisted_9 = {
  "class": "steps-box"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-spreadsheet"
})], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "content"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Número de referencia:", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "input-box mt-3"
};
var _hoisted_14 = {
  "class": "col-md-6"
};
var _hoisted_15 = {
  "class": "steps-wrap"
};
var _hoisted_16 = {
  "class": "steps-box"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-expand-alt"
})], -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "content"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Otra referencia:", -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "input-box mt-3"
};
var _hoisted_21 = {
  "class": "col-md-6"
};
var _hoisted_22 = {
  "class": "steps-wrap"
};
var _hoisted_23 = {
  "class": "steps-box"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-rename"
})], -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "content"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Nombre:", -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "input-box mt-3"
};
var _hoisted_28 = {
  "class": "col-md-6"
};
var _hoisted_29 = {
  "class": "steps-wrap"
};
var _hoisted_30 = {
  "class": "steps-box"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-pen"
})], -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "content"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Título:", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "input-box mt-3"
};
var _hoisted_35 = {
  "class": "col-md-6"
};
var _hoisted_36 = {
  "class": "steps-wrap"
};
var _hoisted_37 = {
  "class": "steps-box"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-color"
})], -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "content"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Tipo de objeto:", -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "input-box mt-3"
};
var _hoisted_42 = {
  "class": "col-md-6"
};
var _hoisted_43 = {
  "class": "steps-wrap"
};
var _hoisted_44 = {
  "class": "steps-box"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-message-square-add"
})], -1 /* HOISTED */);
var _hoisted_46 = {
  "class": "content"
};
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Tipo de adquisición:", -1 /* HOISTED */);
var _hoisted_48 = {
  "class": "input-box mt-3"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione tipo de adquisición", -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "R"
}, "Regalía", -1 /* HOISTED */);
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "D"
}, "Donativo", -1 /* HOISTED */);
var _hoisted_52 = [_hoisted_49, _hoisted_50, _hoisted_51];
var _hoisted_53 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_54 = {
  "class": "col-md-6"
};
var _hoisted_55 = {
  "class": "steps-wrap"
};
var _hoisted_56 = {
  "class": "steps-box"
};
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-move-horizontal"
})], -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "content"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Ancho:", -1 /* HOISTED */);
var _hoisted_60 = {
  "class": "input-box mt-3"
};
var _hoisted_61 = {
  "class": "col-md-6"
};
var _hoisted_62 = {
  "class": "steps-wrap"
};
var _hoisted_63 = {
  "class": "steps-box"
};
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-ruler"
})], -1 /* HOISTED */);
var _hoisted_65 = {
  "class": "content"
};
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Medida del ancho:", -1 /* HOISTED */);
var _hoisted_67 = {
  "class": "input-box mt-3"
};
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Elige una medida", -1 /* HOISTED */);
var _hoisted_69 = ["value"];
var _hoisted_70 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_71 = {
  "class": "col-md-6"
};
var _hoisted_72 = {
  "class": "steps-wrap"
};
var _hoisted_73 = {
  "class": "steps-box"
};
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-move-vertical"
})], -1 /* HOISTED */);
var _hoisted_75 = {
  "class": "content"
};
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Alto:", -1 /* HOISTED */);
var _hoisted_77 = {
  "class": "input-box mt-3"
};
var _hoisted_78 = {
  "class": "col-md-6"
};
var _hoisted_79 = {
  "class": "steps-wrap"
};
var _hoisted_80 = {
  "class": "steps-box"
};
var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-ruler"
})], -1 /* HOISTED */);
var _hoisted_82 = {
  "class": "content"
};
var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Medida del alto:", -1 /* HOISTED */);
var _hoisted_84 = {
  "class": "input-box mt-3"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Elige una medida", -1 /* HOISTED */);
var _hoisted_86 = ["value"];
var _hoisted_87 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_88 = {
  "class": "col-md-6"
};
var _hoisted_89 = {
  "class": "steps-wrap"
};
var _hoisted_90 = {
  "class": "steps-box"
};
var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-expand-horizontal"
})], -1 /* HOISTED */);
var _hoisted_92 = {
  "class": "content"
};
var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Largo:", -1 /* HOISTED */);
var _hoisted_94 = {
  "class": "input-box mt-3"
};
var _hoisted_95 = {
  "class": "col-md-6"
};
var _hoisted_96 = {
  "class": "steps-wrap"
};
var _hoisted_97 = {
  "class": "steps-box"
};
var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-ruler"
})], -1 /* HOISTED */);
var _hoisted_99 = {
  "class": "content"
};
var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Medida del largo:", -1 /* HOISTED */);
var _hoisted_101 = {
  "class": "input-box mt-3"
};
var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Elige una medida", -1 /* HOISTED */);
var _hoisted_103 = ["value"];
var _hoisted_104 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_105 = {
  "class": "col-md-6"
};
var _hoisted_106 = {
  "class": "steps-wrap"
};
var _hoisted_107 = {
  "class": "steps-box"
};
var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-cross"
})], -1 /* HOISTED */);
var _hoisted_109 = {
  "class": "content"
};
var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Diámetro:", -1 /* HOISTED */);
var _hoisted_111 = {
  "class": "input-box mt-3"
};
var _hoisted_112 = {
  "class": "col-md-6"
};
var _hoisted_113 = {
  "class": "steps-wrap"
};
var _hoisted_114 = {
  "class": "steps-box"
};
var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-ruler"
})], -1 /* HOISTED */);
var _hoisted_116 = {
  "class": "content"
};
var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Medida del diámetro:", -1 /* HOISTED */);
var _hoisted_118 = {
  "class": "input-box mt-3"
};
var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Elige una medida", -1 /* HOISTED */);
var _hoisted_120 = ["value"];
var _hoisted_121 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_122 = {
  "class": "col-md-6"
};
var _hoisted_123 = {
  "class": "steps-wrap"
};
var _hoisted_124 = {
  "class": "steps-box"
};
var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-math"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(">")], -1 /* HOISTED */);
var _hoisted_126 = {
  "class": "content"
};
var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Peso:", -1 /* HOISTED */);
var _hoisted_128 = {
  "class": "input-box mt-3"
};
var _hoisted_129 = {
  "class": "col-md-6"
};
var _hoisted_130 = {
  "class": "steps-wrap"
};
var _hoisted_131 = {
  "class": "steps-box"
};
var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-ruler"
})], -1 /* HOISTED */);
var _hoisted_133 = {
  "class": "content"
};
var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Medida del peso:", -1 /* HOISTED */);
var _hoisted_135 = {
  "class": "input-box mt-3"
};
var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Elige una medida", -1 /* HOISTED */);
var _hoisted_137 = ["value"];
var _hoisted_138 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_139 = {
  "class": "col-md-6"
};
var _hoisted_140 = {
  "class": "steps-wrap"
};
var _hoisted_141 = {
  "class": "steps-box"
};
var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-question-mark"
})], -1 /* HOISTED */);
var _hoisted_143 = {
  "class": "content"
};
var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Estado de conservación:", -1 /* HOISTED */);
var _hoisted_145 = {
  "class": "input-box mt-3"
};
var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, " Seleccione estado de conservación ", -1 /* HOISTED */);
var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "B"
}, "Bueno", -1 /* HOISTED */);
var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "R"
}, "Regular", -1 /* HOISTED */);
var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "M"
}, "Malo", -1 /* HOISTED */);
var _hoisted_150 = [_hoisted_146, _hoisted_147, _hoisted_148, _hoisted_149];
var _hoisted_151 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_152 = {
  "class": "col-md-6"
};
var _hoisted_153 = {
  "class": "steps-wrap"
};
var _hoisted_154 = {
  "class": "steps-box"
};
var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-question-mark"
})], -1 /* HOISTED */);
var _hoisted_156 = {
  "class": "content"
};
var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Estado legal:", -1 /* HOISTED */);
var _hoisted_158 = {
  "class": "input-box mt-3"
};
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione estado legal", -1 /* HOISTED */);
var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "P"
}, "Prestamo", -1 /* HOISTED */);
var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "D"
}, "Donado", -1 /* HOISTED */);
var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "M"
}, "Propio del museo", -1 /* HOISTED */);
var _hoisted_163 = [_hoisted_159, _hoisted_160, _hoisted_161, _hoisted_162];
var _hoisted_164 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_165 = {
  "class": "col-md-6"
};
var _hoisted_166 = {
  "class": "steps-wrap"
};
var _hoisted_167 = {
  "class": "steps-box"
};
var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-money"
})], -1 /* HOISTED */);
var _hoisted_169 = {
  "class": "content"
};
var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, " Valor: (Si no tiene un valor coloque un 0) ", -1 /* HOISTED */);
var _hoisted_171 = {
  "class": "input-box mt-3"
};
var _hoisted_172 = {
  "class": "col-md-6"
};
var _hoisted_173 = {
  "class": "steps-wrap"
};
var _hoisted_174 = {
  "class": "steps-box"
};
var _hoisted_175 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-coin"
})], -1 /* HOISTED */);
var _hoisted_176 = {
  "class": "content"
};
var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Tipo de moneda:", -1 /* HOISTED */);
var _hoisted_178 = {
  "class": "input-box mt-3"
};
var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Elige una moneda", -1 /* HOISTED */);
var _hoisted_180 = ["value"];
var _hoisted_181 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_182 = {
  "class": "steps-wrap"
};
var _hoisted_183 = {
  "class": "steps-box"
};
var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-location-plus"
})], -1 /* HOISTED */);
var _hoisted_185 = {
  "class": "content"
};
var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Localización:", -1 /* HOISTED */);
var _hoisted_187 = {
  "class": "input-box mt-3"
};
var _hoisted_188 = {
  "class": "col-md-6"
};
var _hoisted_189 = {
  "class": "steps-wrap"
};
var _hoisted_190 = {
  "class": "steps-box"
};
var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_192 = {
  "class": "content"
};
var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Fragmentado:", -1 /* HOISTED */);
var _hoisted_194 = {
  "class": "input-box mt-3"
};
var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione", -1 /* HOISTED */);
var _hoisted_196 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "SI"
}, "Si", -1 /* HOISTED */);
var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "NO"
}, "No", -1 /* HOISTED */);
var _hoisted_198 = [_hoisted_195, _hoisted_196, _hoisted_197];
var _hoisted_199 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_200 = {
  "class": "col-md-6"
};
var _hoisted_201 = {
  "class": "steps-wrap"
};
var _hoisted_202 = {
  "class": "steps-box"
};
var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_204 = {
  "class": "content"
};
var _hoisted_205 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Réplica:", -1 /* HOISTED */);
var _hoisted_206 = {
  "class": "input-box mt-3"
};
var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione", -1 /* HOISTED */);
var _hoisted_208 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "SI"
}, "Si", -1 /* HOISTED */);
var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "NO"
}, "No", -1 /* HOISTED */);
var _hoisted_210 = [_hoisted_207, _hoisted_208, _hoisted_209];
var _hoisted_211 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_212 = {
  "class": "steps-wrap"
};
var _hoisted_213 = {
  "class": "steps-box"
};
var _hoisted_214 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-user"
})], -1 /* HOISTED */);
var _hoisted_215 = {
  "class": "content"
};
var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Donador:", -1 /* HOISTED */);
var _hoisted_217 = {
  "class": "input-box mt-3"
};
var _hoisted_218 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione el donador", -1 /* HOISTED */);
var _hoisted_219 = ["value"];
var _hoisted_220 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_221 = {
  "class": "steps-wrap"
};
var _hoisted_222 = {
  "class": "steps-box"
};
var _hoisted_223 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-image"
})], -1 /* HOISTED */);
var _hoisted_224 = {
  "class": "content"
};
var _hoisted_225 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Imagen del articulo:", -1 /* HOISTED */);
var _hoisted_226 = {
  "class": "input-box mt-3"
};
var _hoisted_227 = {
  key: 0
};
var _hoisted_228 = ["src"];
var _hoisted_229 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_230 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_231 = {
  key: 1
};
var _hoisted_232 = {
  "class": "steps-wrap"
};
var _hoisted_233 = {
  "class": "steps-box"
};
var _hoisted_234 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-registered"
})], -1 /* HOISTED */);
var _hoisted_235 = {
  "class": "content"
};
var _hoisted_236 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Rasgos distintivos:", -1 /* HOISTED */);
var _hoisted_237 = {
  "class": "input-box mt-3"
};
var _hoisted_238 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_239 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-theme font-md"
}, "Editar Historia:", -1 /* HOISTED */);
var _hoisted_240 = {
  "class": "row"
};
var _hoisted_241 = {
  "class": "col-md-6"
};
var _hoisted_242 = {
  "class": "steps-wrap"
};
var _hoisted_243 = {
  "class": "steps-box"
};
var _hoisted_244 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-customize"
})], -1 /* HOISTED */);
var _hoisted_245 = {
  "class": "content"
};
var _hoisted_246 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Materiales:", -1 /* HOISTED */);
var _hoisted_247 = {
  "class": "input-box mt-3"
};
var _hoisted_248 = {
  "class": "col-md-6"
};
var _hoisted_249 = {
  "class": "steps-wrap"
};
var _hoisted_250 = {
  "class": "steps-box"
};
var _hoisted_251 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-list-minus"
})], -1 /* HOISTED */);
var _hoisted_252 = {
  "class": "content"
};
var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Técnicas de manufactura:", -1 /* HOISTED */);
var _hoisted_254 = {
  "class": "input-box mt-3"
};
var _hoisted_255 = {
  "class": "col-md-6"
};
var _hoisted_256 = {
  "class": "steps-wrap"
};
var _hoisted_257 = {
  "class": "steps-box"
};
var _hoisted_258 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-bookmark-plus"
})], -1 /* HOISTED */);
var _hoisted_259 = {
  "class": "content"
};
var _hoisted_260 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Inscripción de marcas:", -1 /* HOISTED */);
var _hoisted_261 = {
  "class": "input-box mt-3"
};
var _hoisted_262 = {
  "class": "col-md-6"
};
var _hoisted_263 = {
  "class": "steps-wrap"
};
var _hoisted_264 = {
  "class": "steps-box"
};
var _hoisted_265 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-history"
})], -1 /* HOISTED */);
var _hoisted_266 = {
  "class": "content"
};
var _hoisted_267 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Antigüedad:", -1 /* HOISTED */);
var _hoisted_268 = {
  "class": "input-box mt-3"
};
var _hoisted_269 = {
  "class": "steps-wrap"
};
var _hoisted_270 = {
  "class": "steps-box"
};
var _hoisted_271 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-library"
})], -1 /* HOISTED */);
var _hoisted_272 = {
  "class": "content"
};
var _hoisted_273 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Historia:", -1 /* HOISTED */);
var _hoisted_274 = {
  "class": "input-box mt-3"
};
var _hoisted_275 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn-solid",
  style: {
    "margin-top": "20px",
    "width": "100%"
  }
}, " Guardar ")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GoBack = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GoBack");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GoBack)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" How do I order? Section Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "custom-form",
    onSubmit: _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleSubmit && $options.handleSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "numRefInter",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.formData.numRefInter = $event;
    }),
    type: "text",
    placeholder: "Número de referencia",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.numRefInter]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "otherRef",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.formData.otherRef = $event;
    }),
    type: "text",
    placeholder: "Otra Referencia",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.otherRef]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "name",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.formData.name = $event;
    }),
    type: "text",
    placeholder: "Nombre",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.name]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "title",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.formData.title = $event;
    }),
    type: "text",
    placeholder: "Título",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.title]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "objectType",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.formData.objectType = $event;
    }),
    maxlength: "200",
    type: "text",
    required: "",
    "class": "form-control"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.objectType]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "acquisitionType",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.formData.acquisitionType = $event;
    }),
    "class": "form-control"
  }, _hoisted_52, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.acquisitionType]]), $data.showErrorAcquisitionType && !$data.formData.acquisitionType ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_53, " Debe seleccionar tipo de adquisición ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "width",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.formData.width = $event;
    }),
    type: "number",
    placeholder: "Ancho",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.width]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "measureWidth",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.formData.measureWidth = $event;
    })
  }, [_hoisted_68, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.distances, function (distance, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: distance
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(distance), 9 /* TEXT, PROPS */, _hoisted_69);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.measureWidth]]), $data.showErrorWidth && !$data.formData.measureWidth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_70, " Debe seleccionar una unidad de medida ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "height",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.formData.height = $event;
    }),
    type: "number",
    placeholder: "Alto",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.height]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "measureHeight",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.formData.measureHeight = $event;
    })
  }, [_hoisted_85, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.distances, function (distance, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: distance
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(distance), 9 /* TEXT, PROPS */, _hoisted_86);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.measureHeight]]), $data.showErrorHeight && !$data.formData.measureHeight ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_87, " Debe seleccionar una unidad de medida ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "lenght",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.formData.lenght = $event;
    }),
    type: "number",
    placeholder: "Largo",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.lenght]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "measureLenght",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.formData.measureLenght = $event;
    })
  }, [_hoisted_102, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.distances, function (distance, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: distance
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(distance), 9 /* TEXT, PROPS */, _hoisted_103);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.measureLenght]]), $data.showErrorLenght && !$data.formData.measureLenght ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_104, " Debe seleccionar una unidad de medida ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [_hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [_hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "diameter",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.formData.diameter = $event;
    }),
    type: "number",
    placeholder: "Diámetro",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.diameter]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [_hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [_hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "measureDiameter",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.formData.measureDiameter = $event;
    })
  }, [_hoisted_119, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.distances, function (distance, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: distance
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(distance), 9 /* TEXT, PROPS */, _hoisted_120);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.measureDiameter]]), $data.showErrorDiameter && !$data.formData.measureDiameter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_121, " Debe seleccionar una unidad de medida ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [_hoisted_127, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "weight",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.formData.weight = $event;
    }),
    type: "number",
    placeholder: "Peso",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.weight]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "measureWeight",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.formData.measureWeight = $event;
    })
  }, [_hoisted_136, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.weights, function (weight, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: weight
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(weight), 9 /* TEXT, PROPS */, _hoisted_137);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.measureWeight]]), $data.showErrorWeight && !$data.formData.measureWeight ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_138, " Debe seleccionar una unidad de medida ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [_hoisted_142, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "estado_conserv",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.formData.conservationStatus = $event;
    }),
    "class": "form-control"
  }, _hoisted_150, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.conservationStatus]]), $data.showErrorConservationStatus && !$data.formData.conservationStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_151, " Debe seleccionar estado de conservación ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [_hoisted_155, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "legalStatus",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.formData.legalStatus = $event;
    }),
    "class": "form-control"
  }, _hoisted_163, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.legalStatus]]), $data.showErrorLegalStatus && !$data.formData.legalStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_164, " Debe seleccionar estado legal ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [_hoisted_170, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "value",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.formData.value = $event;
    }),
    type: "number",
    placeholder: "Valor",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.value]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [_hoisted_175, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "typeCoin",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.formData.typeCoin = $event;
    })
  }, [_hoisted_179, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.currencies, function (currency) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: currency.value,
      value: currency.value,
      "class": "form-control"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(currency.label), 9 /* TEXT, PROPS */, _hoisted_180);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.typeCoin]]), $data.showErrorCurrency && !$data.formData.typeCoin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_181, " Debe seleccionar un tipo de moneda, si no tiene valor seleccione \"No aplica\" ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [_hoisted_184, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "location",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.formData.location = $event;
    }),
    type: "text",
    placeholder: "Localización",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.location]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_189, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [_hoisted_191, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_192, [_hoisted_193, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "fragmented",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.formData.fragmented = $event;
    }),
    "class": "form-control"
  }, _hoisted_198, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.fragmented]]), $data.showErrorFragmented && !$data.formData.fragmented ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_199, " Debe seleccionar fragmentado ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_202, [_hoisted_203, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_204, [_hoisted_205, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "replica",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.formData.replica = $event;
    }),
    "class": "form-control"
  }, _hoisted_210, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.replica]]), $data.showErrorReplica && !$data.formData.replica ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_211, " Debe seleccionar réplica ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [_hoisted_214, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_215, [_hoisted_216, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_217, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "cedulaDonor",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.formData.cedulaDonor = $event;
    }),
    "class": "form-control"
  }, [_hoisted_218, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.donors, function (donor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: donor.identification,
      value: donor.identification
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(donor.name), 9 /* TEXT, PROPS */, _hoisted_219);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.cedulaDonor]]), $data.showErrorDonor && !$data.formData.cedulaDonor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_220, " Debe seleccionar un donador ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_222, [_hoisted_223, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [_hoisted_225, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_226, [$data.imageUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_227, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.imageUrl,
    style: {
      "max-width": "500px",
      "max-height": "500px"
    }
  }, null, 8 /* PROPS */, _hoisted_228), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fileInput",
    type: "file",
    style: {
      "display": "none"
    },
    accept: ".png, .jpg, .jpeg",
    onChange: _cache[24] || (_cache[24] = function () {
      return $options.handleFileInput && $options.handleFileInput.apply($options, arguments);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), _hoisted_229, _hoisted_230, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-solid",
    style: {
      "display": "block",
      "margin": "0 auto"
    },
    onClick: _cache[25] || (_cache[25] = function () {
      return $options.openFileInput && $options.openFileInput.apply($options, arguments);
    })
  }, " Eliminar imagen ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_231, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fileInput",
    type: "file",
    "class": "form-control",
    accept: ".png, .jpg, .jpeg",
    onChange: _cache[26] || (_cache[26] = function () {
      return $options.handleFileInput && $options.handleFileInput.apply($options, arguments);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)]))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_232, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_233, [_hoisted_234, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_235, [_hoisted_236, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_237, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "distinguishingFeature",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $data.formData.distinguishingFeature = $event;
    }),
    type: "text",
    placeholder: "Rasgos distintivos",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.distinguishingFeature]])])])])]), _hoisted_238, _hoisted_239, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_240, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_241, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_242, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_243, [_hoisted_244, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_245, [_hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_247, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "materials",
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $data.history.materials = $event;
    }),
    type: "text",
    placeholder: "Materiales",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.materials]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_248, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_249, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_250, [_hoisted_251, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [_hoisted_253, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_254, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "manufacturing",
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $data.history.manufacturing = $event;
    }),
    type: "text",
    placeholder: "Técnicas de manufactura",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.manufacturing]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_256, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_257, [_hoisted_258, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_259, [_hoisted_260, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_261, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "inscripsionMarcas",
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
      return $data.history.inscripsionMarcas = $event;
    }),
    type: "text",
    placeholder: "Inscripción de marcas",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.inscripsionMarcas]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_262, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_263, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_264, [_hoisted_265, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_266, [_hoisted_267, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_268, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "antiquity",
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return $data.history.antiquity = $event;
    }),
    type: "text",
    placeholder: "Antigüedad",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.antiquity]])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_269, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_270, [_hoisted_271, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_272, [_hoisted_273, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_274, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "history",
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $data.history.history = $event;
    }),
    type: "text",
    placeholder: "Historia",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.history]])])])])]), _hoisted_275], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary w-100",
    style: {
      "background-color": "red",
      "margin-top": "20px"
    },
    onClick: _cache[34] || (_cache[34] = function () {
      return $options.deleteArticle && $options.deleteArticle.apply($options, arguments);
    })
  }, " Inactivar Articulo ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" How do I order? Section End ")])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/services/ArticleService.js":
/*!*************************************************!*\
  !*** ./resources/js/services/ArticleService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/GoBack.vue":
/*!********************************************!*\
  !*** ./resources/js/components/GoBack.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoBack.vue?vue&type=template&id=e0041ecc */ "./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc");
/* harmony import */ var _GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoBack.vue?vue&type=script&lang=js */ "./resources/js/components/GoBack.vue?vue&type=script&lang=js");
/* harmony import */ var D_Museo_el_sabanero_git_Jeank_DV_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Museo_el_sabanero_git_Jeank_DV_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/GoBack.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Article/ArticleUpdate.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Article/ArticleUpdate.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArticleUpdate_vue_vue_type_template_id_05322552__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleUpdate.vue?vue&type=template&id=05322552 */ "./resources/js/views/Article/ArticleUpdate.vue?vue&type=template&id=05322552");
/* harmony import */ var _ArticleUpdate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleUpdate.vue?vue&type=script&lang=js */ "./resources/js/views/Article/ArticleUpdate.vue?vue&type=script&lang=js");
/* harmony import */ var D_Museo_el_sabanero_git_Jeank_DV_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Museo_el_sabanero_git_Jeank_DV_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ArticleUpdate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ArticleUpdate_vue_vue_type_template_id_05322552__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Article/ArticleUpdate.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/GoBack.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/GoBack.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GoBack.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Article/ArticleUpdate.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Article/ArticleUpdate.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleUpdate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleUpdate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleUpdate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleUpdate.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc":
/*!**************************************************************************!*\
  !*** ./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GoBack.vue?vue&type=template&id=e0041ecc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/GoBack.vue?vue&type=template&id=e0041ecc");


/***/ }),

/***/ "./resources/js/views/Article/ArticleUpdate.vue?vue&type=template&id=05322552":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Article/ArticleUpdate.vue?vue&type=template&id=05322552 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleUpdate_vue_vue_type_template_id_05322552__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleUpdate_vue_vue_type_template_id_05322552__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleUpdate.vue?vue&type=template&id=05322552 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleUpdate.vue?vue&type=template&id=05322552");


/***/ })

}]);