"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["articleRegister"],{

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
      return this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleRegister.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleRegister.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ArticleService */ "./resources/js/services/ArticleService.js");
/* harmony import */ var _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/HistoryService */ "./resources/js/services/HistoryService.js");
/* harmony import */ var _services_FileService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/FileService */ "./resources/js/services/FileService.js");
/* harmony import */ var _components_GoBack_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GoBack.vue */ "./resources/js/components/GoBack.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ArticleRegister',
  components: {
    GoBack: _components_GoBack_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      formData: {
        numRefInter: '',
        otherRef: '',
        name: '',
        title: '',
        objectType: '',
        acquisitionType: '',
        width: '',
        height: '',
        lenght: '',
        diameter: '',
        weight: '',
        conservationStatus: '',
        legalStatus: '',
        value: '',
        distinguishingFeature: '',
        location: '',
        fragmented: '',
        replica: '',
        cedulaDonor: ''
      },
      history: {
        materials: '',
        manufacturing: '',
        inscripsionMarcas: '',
        antiquity: '',
        history: ''
      },
      itemId: '',
      showPopup: false,
      file: null,
      imageUrl: null
    };
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;
      console.log(this.formData);
      var article = {
        numRefInter: this.formData.numRefInter,
        otherRef: this.formData.otherRef,
        name: this.formData.name,
        title: this.formData.title,
        objectType: this.formData.objectType,
        acquisitionType: this.formData.acquisitionType,
        width: this.formData.width,
        height: this.formData.height,
        lenght: this.formData.lenght,
        diameter: this.formData.diameter,
        weight: this.formData.weight,
        conservationStatus: this.formData.conservationStatus,
        legalStatus: this.formData.legalStatus,
        value: this.formData.value,
        distinguishingFeature: this.formData.distinguishingFeature,
        location: this.formData.location,
        fragmented: this.formData.fragmented,
        replica: this.formData.replica,
        cedulaDonor: this.formData.cedulaDonor
      };
      console.log(article);
      _services_ArticleService__WEBPACK_IMPORTED_MODULE_0__["default"].createArticle(article).then(function (data) {
        console.log(data);
        var id = data.id;
        _this.itemId = id;
        console.log(_this.itemId);
        var histo = {
          materials: _this.history.materials,
          manufacturing: _this.history.manufacturing,
          inscripsionMarcas: _this.history.inscripsionMarcas,
          antiquity: _this.history.antiquity,
          history: _this.history.history,
          itemId: _this.itemId
        };
        console.log(histo);
        _services_HistoryService__WEBPACK_IMPORTED_MODULE_1__["default"].createHistory(histo).then(function (dataHisto) {
          console.log(dataHisto);
          console.log(histo);
          _this.$router.push('/event/index');
        });

        // const fileData = {
        //   elementId: this.itemId,
        //   file: this.file,
        // }
        // Files.registerFile(fileData).then((dataFile) => {
        //   console.log(dataFile)
        //   console.log(fileData)
        //   //this.$router.push('/event/index')
        // })
      });
    },
    goBack: function goBack() {
      this.$router.push({
        name: 'Event'
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
      var _this2 = this;
      if (!this.file) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        _this2.imageUrl = e.target.result;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleRegister.vue?vue&type=template&id=5096a0b1":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleRegister.vue?vue&type=template&id=5096a0b1 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "iconly-Arrow-Left-Square icli"
}, null, -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "title-color font-md"
}, "Volver", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "main-wrap about-us-page mb-xxl"
};
var _hoisted_7 = {
  "class": "how-do-section pt-0"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-theme font-md"
}, "Registrar articulo:", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-md-6"
};
var _hoisted_11 = {
  "class": "steps-wrap"
};
var _hoisted_12 = {
  "class": "steps-box"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "content"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Número de referencia:", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "input-box mt-3"
};
var _hoisted_17 = {
  "class": "col-md-6"
};
var _hoisted_18 = {
  "class": "steps-wrap"
};
var _hoisted_19 = {
  "class": "steps-box"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "content"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Otra referencia:", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "input-box mt-3"
};
var _hoisted_24 = {
  "class": "col-md-6"
};
var _hoisted_25 = {
  "class": "steps-wrap"
};
var _hoisted_26 = {
  "class": "steps-box"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "content"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Nombre:", -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "input-box mt-3"
};
var _hoisted_31 = {
  "class": "col-md-6"
};
var _hoisted_32 = {
  "class": "steps-wrap"
};
var _hoisted_33 = {
  "class": "steps-box"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_35 = {
  "class": "content"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Título:", -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "input-box mt-3"
};
var _hoisted_38 = {
  "class": "col-md-6"
};
var _hoisted_39 = {
  "class": "steps-wrap"
};
var _hoisted_40 = {
  "class": "steps-box"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "content"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Tipo de objeto:", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "input-box mt-3"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione tipo de objeto", -1 /* HOISTED */);
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "A"
}, "Artesanía", -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "T"
}, "Herramienta de trabajo", -1 /* HOISTED */);
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "C"
}, "Herramienta de cocina", -1 /* HOISTED */);
var _hoisted_49 = [_hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48];
var _hoisted_50 = {
  "class": "col-md-6"
};
var _hoisted_51 = {
  "class": "steps-wrap"
};
var _hoisted_52 = {
  "class": "steps-box"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "content"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Tipo de adquisición:", -1 /* HOISTED */);
var _hoisted_56 = {
  "class": "input-box mt-3"
};
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione tipo de adquisición", -1 /* HOISTED */);
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "R"
}, "Regalía", -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "D"
}, "Donativo", -1 /* HOISTED */);
var _hoisted_60 = [_hoisted_57, _hoisted_58, _hoisted_59];
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
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_65 = {
  "class": "content"
};
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Ancho:", -1 /* HOISTED */);
var _hoisted_67 = {
  "class": "input-box mt-3"
};
var _hoisted_68 = {
  "class": "col-md-6"
};
var _hoisted_69 = {
  "class": "steps-wrap"
};
var _hoisted_70 = {
  "class": "steps-box"
};
var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_72 = {
  "class": "content"
};
var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Alto:", -1 /* HOISTED */);
var _hoisted_74 = {
  "class": "input-box mt-3"
};
var _hoisted_75 = {
  "class": "col-md-6"
};
var _hoisted_76 = {
  "class": "steps-wrap"
};
var _hoisted_77 = {
  "class": "steps-box"
};
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_79 = {
  "class": "content"
};
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Largo:", -1 /* HOISTED */);
var _hoisted_81 = {
  "class": "input-box mt-3"
};
var _hoisted_82 = {
  "class": "col-md-6"
};
var _hoisted_83 = {
  "class": "steps-wrap"
};
var _hoisted_84 = {
  "class": "steps-box"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_86 = {
  "class": "content"
};
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Diámetro:", -1 /* HOISTED */);
var _hoisted_88 = {
  "class": "input-box mt-3"
};
var _hoisted_89 = {
  "class": "col-md-6"
};
var _hoisted_90 = {
  "class": "steps-wrap"
};
var _hoisted_91 = {
  "class": "steps-box"
};
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_93 = {
  "class": "content"
};
var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Peso:", -1 /* HOISTED */);
var _hoisted_95 = {
  "class": "input-box mt-3"
};
var _hoisted_96 = {
  "class": "col-md-6"
};
var _hoisted_97 = {
  "class": "steps-wrap"
};
var _hoisted_98 = {
  "class": "steps-box"
};
var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_100 = {
  "class": "content"
};
var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Estado de conservación:", -1 /* HOISTED */);
var _hoisted_102 = {
  "class": "input-box mt-3"
};
var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, " Seleccione estado de conservación ", -1 /* HOISTED */);
var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "B"
}, "Bueno", -1 /* HOISTED */);
var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "R"
}, "Regular", -1 /* HOISTED */);
var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "M"
}, "Malo", -1 /* HOISTED */);
var _hoisted_107 = [_hoisted_103, _hoisted_104, _hoisted_105, _hoisted_106];
var _hoisted_108 = {
  "class": "col-md-6"
};
var _hoisted_109 = {
  "class": "steps-wrap"
};
var _hoisted_110 = {
  "class": "steps-box"
};
var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_112 = {
  "class": "content"
};
var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Estado legal:", -1 /* HOISTED */);
var _hoisted_114 = {
  "class": "input-box mt-3"
};
var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione estado legal", -1 /* HOISTED */);
var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "P"
}, "Prestamo", -1 /* HOISTED */);
var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "D"
}, "Donado", -1 /* HOISTED */);
var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "M"
}, "Propio del museo", -1 /* HOISTED */);
var _hoisted_119 = [_hoisted_115, _hoisted_116, _hoisted_117, _hoisted_118];
var _hoisted_120 = {
  "class": "col-md-6"
};
var _hoisted_121 = {
  "class": "steps-wrap"
};
var _hoisted_122 = {
  "class": "steps-box"
};
var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_124 = {
  "class": "content"
};
var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Valor:", -1 /* HOISTED */);
var _hoisted_126 = {
  "class": "input-box mt-3"
};
var _hoisted_127 = {
  "class": "col-md-6"
};
var _hoisted_128 = {
  "class": "steps-wrap"
};
var _hoisted_129 = {
  "class": "steps-box"
};
var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_131 = {
  "class": "content"
};
var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Localización:", -1 /* HOISTED */);
var _hoisted_133 = {
  "class": "input-box mt-3"
};
var _hoisted_134 = {
  "class": "col-md-6"
};
var _hoisted_135 = {
  "class": "steps-wrap"
};
var _hoisted_136 = {
  "class": "steps-box"
};
var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_138 = {
  "class": "content"
};
var _hoisted_139 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Fragmentado:", -1 /* HOISTED */);
var _hoisted_140 = {
  "class": "input-box mt-3"
};
var _hoisted_141 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione", -1 /* HOISTED */);
var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "SI"
}, "Si", -1 /* HOISTED */);
var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "NO"
}, "No", -1 /* HOISTED */);
var _hoisted_144 = [_hoisted_141, _hoisted_142, _hoisted_143];
var _hoisted_145 = {
  "class": "col-md-6"
};
var _hoisted_146 = {
  "class": "steps-wrap"
};
var _hoisted_147 = {
  "class": "steps-box"
};
var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_149 = {
  "class": "content"
};
var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Réplica:", -1 /* HOISTED */);
var _hoisted_151 = {
  "class": "input-box mt-3"
};
var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Seleccione", -1 /* HOISTED */);
var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "SI"
}, "Si", -1 /* HOISTED */);
var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "NO"
}, "No", -1 /* HOISTED */);
var _hoisted_155 = [_hoisted_152, _hoisted_153, _hoisted_154];
var _hoisted_156 = {
  "class": "col-md-6"
};
var _hoisted_157 = {
  "class": "steps-wrap"
};
var _hoisted_158 = {
  "class": "steps-box"
};
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_160 = {
  "class": "content"
};
var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Donador:", -1 /* HOISTED */);
var _hoisted_162 = {
  "class": "input-box mt-3"
};
var _hoisted_163 = {
  "class": "steps-wrap"
};
var _hoisted_164 = {
  "class": "steps-box"
};
var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "iconly-Location icli"
})], -1 /* HOISTED */);
var _hoisted_166 = {
  "class": "content"
};
var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Imagen del articulo:", -1 /* HOISTED */);
var _hoisted_168 = {
  "class": "input-box mt-3"
};
var _hoisted_169 = {
  key: 0
};
var _hoisted_170 = ["src"];
var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_173 = {
  key: 1
};
var _hoisted_174 = {
  "class": "steps-wrap"
};
var _hoisted_175 = {
  "class": "steps-box"
};
var _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "iconly-Location icli"
})], -1 /* HOISTED */);
var _hoisted_177 = {
  "class": "content"
};
var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Rasgos distintivos:", -1 /* HOISTED */);
var _hoisted_179 = {
  "class": "input-box mt-3"
};
var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-theme font-md"
}, "Registrar Historia:", -1 /* HOISTED */);
var _hoisted_182 = {
  "class": "row"
};
var _hoisted_183 = {
  "class": "col-md-6"
};
var _hoisted_184 = {
  "class": "steps-wrap"
};
var _hoisted_185 = {
  "class": "steps-box"
};
var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_187 = {
  "class": "content"
};
var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Materiales:", -1 /* HOISTED */);
var _hoisted_189 = {
  "class": "input-box mt-3"
};
var _hoisted_190 = {
  "class": "col-md-6"
};
var _hoisted_191 = {
  "class": "steps-wrap"
};
var _hoisted_192 = {
  "class": "steps-box"
};
var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_194 = {
  "class": "content"
};
var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Técnicas de manufactura:", -1 /* HOISTED */);
var _hoisted_196 = {
  "class": "input-box mt-3"
};
var _hoisted_197 = {
  "class": "col-md-6"
};
var _hoisted_198 = {
  "class": "steps-wrap"
};
var _hoisted_199 = {
  "class": "steps-box"
};
var _hoisted_200 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_201 = {
  "class": "content"
};
var _hoisted_202 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Inscripción de marcas:", -1 /* HOISTED */);
var _hoisted_203 = {
  "class": "input-box mt-3"
};
var _hoisted_204 = {
  "class": "col-md-6"
};
var _hoisted_205 = {
  "class": "steps-wrap"
};
var _hoisted_206 = {
  "class": "steps-box"
};
var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge"
})], -1 /* HOISTED */);
var _hoisted_208 = {
  "class": "content"
};
var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Antigüedad:", -1 /* HOISTED */);
var _hoisted_210 = {
  "class": "input-box mt-3"
};
var _hoisted_211 = {
  "class": "steps-wrap"
};
var _hoisted_212 = {
  "class": "steps-box"
};
var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "iconly-Location icli"
})], -1 /* HOISTED */);
var _hoisted_214 = {
  "class": "content"
};
var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-color font-sm"
}, "Historia:", -1 /* HOISTED */);
var _hoisted_216 = {
  "class": "input-box mt-3"
};
var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.goBack();
    })
  }, _hoisted_4), _hoisted_5])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" How do I order? Section Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "custom-form",
    onSubmit: _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleSubmit && $options.handleSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "numRefInter",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.formData.numRefInter = $event;
    }),
    type: "text",
    placeholder: "Número de referencia",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.numRefInter]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "otherRef",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.formData.otherRef = $event;
    }),
    type: "text",
    placeholder: "Otra Referencia",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.otherRef]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "name",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.formData.name = $event;
    }),
    type: "text",
    placeholder: "Nombre",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.name]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "title",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.formData.title = $event;
    }),
    type: "text",
    placeholder: "Título",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.title]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "objectType",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.formData.objectType = $event;
    }),
    "class": "form-control"
  }, _hoisted_49, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.objectType]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "acquisitionType",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.formData.acquisitionType = $event;
    }),
    "class": "form-control"
  }, _hoisted_60, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.acquisitionType]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "width",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.formData.width = $event;
    }),
    type: "number",
    placeholder: "Ancho",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.width]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "height",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.formData.height = $event;
    }),
    type: "number",
    placeholder: "Alto",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.height]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "lenght",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.formData.lenght = $event;
    }),
    type: "number",
    placeholder: "Largo",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.lenght]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "diameter",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.formData.diameter = $event;
    }),
    type: "number",
    placeholder: "Diámetro",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.diameter]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [_hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [_hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "weight",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.formData.weight = $event;
    }),
    type: "number",
    placeholder: "Peso",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.weight]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "estado_conserv",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.formData.conservationStatus = $event;
    }),
    "class": "form-control"
  }, _hoisted_107, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.conservationStatus]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [_hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [_hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "legalStatus",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.formData.legalStatus = $event;
    }),
    "class": "form-control"
  }, _hoisted_119, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.legalStatus]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [_hoisted_123, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "value",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.formData.value = $event;
    }),
    type: "number",
    placeholder: "Valor",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.value]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [_hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "location",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.formData.location = $event;
    }),
    type: "text",
    placeholder: "Localización",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.location]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [_hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [_hoisted_139, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "fragmented",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.formData.fragmented = $event;
    }),
    "class": "form-control"
  }, _hoisted_144, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.fragmented]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [_hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "replica",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.formData.replica = $event;
    }),
    "class": "form-control"
  }, _hoisted_155, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.replica]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [_hoisted_159, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [_hoisted_161, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "cedulaDonor",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.formData.cedulaDonor = $event;
    }),
    type: "text",
    placeholder: "Donador",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.cedulaDonor]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [_hoisted_167, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_168, [$data.imageUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.imageUrl,
    style: {
      "max-width": "500px",
      "max-height": "500px"
    }
  }, null, 8 /* PROPS */, _hoisted_170), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fileInput",
    type: "file",
    style: {
      "display": "none"
    },
    onChange: _cache[19] || (_cache[19] = function () {
      return $options.handleFileInput && $options.handleFileInput.apply($options, arguments);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), _hoisted_171, _hoisted_172, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-solid",
    style: {
      "display": "block",
      "margin": "0 auto"
    },
    onClick: _cache[20] || (_cache[20] = function () {
      return $options.openFileInput && $options.openFileInput.apply($options, arguments);
    })
  }, " Eliminar imagen ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fileInput",
    type: "file",
    "class": "form-control",
    onChange: _cache[21] || (_cache[21] = function () {
      return $options.handleFileInput && $options.handleFileInput.apply($options, arguments);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)]))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [_hoisted_176, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [_hoisted_178, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "distinguishingFeature",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.formData.distinguishingFeature = $event;
    }),
    type: "text",
    placeholder: "Rasgos distintivos",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.distinguishingFeature]])])])])]), _hoisted_180, _hoisted_181, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [_hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_189, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "materials",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.history.materials = $event;
    }),
    type: "text",
    placeholder: "Materiales",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.materials]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_192, [_hoisted_193, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [_hoisted_195, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "manufacturing",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $data.history.manufacturing = $event;
    }),
    type: "text",
    placeholder: "Técnicas de manufactura",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.manufacturing]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_198, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_199, [_hoisted_200, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [_hoisted_202, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "inscripsionMarcas",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $data.history.inscripsionMarcas = $event;
    }),
    type: "text",
    placeholder: "Inscripción de marcas",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.inscripsionMarcas]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_204, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [_hoisted_207, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [_hoisted_209, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "antiquity",
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $data.history.antiquity = $event;
    }),
    type: "text",
    placeholder: "Antigüedad",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.antiquity]])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [_hoisted_213, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [_hoisted_215, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_216, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "history",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $data.history.history = $event;
    }),
    type: "text",
    placeholder: "Historia",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.history.history]])])])])]), _hoisted_217], 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" How do I order? Section End ")])], 64 /* STABLE_FRAGMENT */);
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
var apiUrl = 'http://127.0.0.1:8001/api/articles';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Obtener todos los donantes
  getArticles: function getArticles() {
    return axios.get("".concat(apiUrl, "/getArticles")).then(function (response) {
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
  createArticle: function createArticle($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/store"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
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

/***/ "./resources/js/services/FileService.js":
/*!**********************************************!*\
  !*** ./resources/js/services/FileService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var apiUrl = 'http://127.0.0.1:8001/api/files';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Obtener todos los donantes
  registerFile: function registerFile($data) {
    console.log($data);
    return axios.post("".concat(apiUrl, "/store"), $data).then(function (response) {
      return response.data;
    });
    //   .catch((error) => Promise.reject(error))
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
var apiUrl = 'http://127.0.0.1:8001/api/histories';
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
/* harmony import */ var C_Users_User_Documents_UTN_I_Cuatrimestre_TCU_Museo_el_sabanero_Front_End_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Documents_UTN_I_Cuatrimestre_TCU_Museo_el_sabanero_Front_End_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GoBack_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GoBack_vue_vue_type_template_id_e0041ecc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/GoBack.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Article/ArticleRegister.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/Article/ArticleRegister.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArticleRegister_vue_vue_type_template_id_5096a0b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleRegister.vue?vue&type=template&id=5096a0b1 */ "./resources/js/views/Article/ArticleRegister.vue?vue&type=template&id=5096a0b1");
/* harmony import */ var _ArticleRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleRegister.vue?vue&type=script&lang=js */ "./resources/js/views/Article/ArticleRegister.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_User_Documents_UTN_I_Cuatrimestre_TCU_Museo_el_sabanero_Front_End_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Documents_UTN_I_Cuatrimestre_TCU_Museo_el_sabanero_Front_End_MuseoSabanero_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ArticleRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ArticleRegister_vue_vue_type_template_id_5096a0b1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Article/ArticleRegister.vue"]])
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

/***/ "./resources/js/views/Article/ArticleRegister.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Article/ArticleRegister.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleRegister.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleRegister.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/views/Article/ArticleRegister.vue?vue&type=template&id=5096a0b1":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Article/ArticleRegister.vue?vue&type=template&id=5096a0b1 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleRegister_vue_vue_type_template_id_5096a0b1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArticleRegister_vue_vue_type_template_id_5096a0b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArticleRegister.vue?vue&type=template&id=5096a0b1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Article/ArticleRegister.vue?vue&type=template&id=5096a0b1");


/***/ })

}]);