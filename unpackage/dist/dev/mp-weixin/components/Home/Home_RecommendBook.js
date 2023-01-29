"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/store-name.js");
if (!Array) {
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  _easycom_uni_transition2();
}
const _easycom_uni_transition = () => "../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  _easycom_uni_transition();
}
const _sfc_main = {
  __name: "Home_RecommendBook",
  setup(__props) {
    const Imgdata = common_vendor.ref([]);
    const goview = store_index.useCounterStore().goview;
    common_vendor.index.getStorage({
      key: "ImgData",
      success: function(res) {
        Imgdata.value = res.data;
      }
    });
    const show = common_vendor.ref(true);
    const modeClass = common_vendor.ref(["fade", "slide-top"]);
    const flag = common_vendor.ref(true);
    const handle = (type) => {
      if (flag.value) {
        flag.value = false;
        show.value = !show.value;
        setTimeout(() => {
          flag.value = true;
          show.value = !show.value;
        }, 600);
        modeClass.value = type;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(Imgdata.value.data, (ele, i, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(goview)(ele.ImgSrc, ele.title)),
            b: ele.ImgSrc,
            c: common_vendor.sr("ani", "3789298a-0-" + i0, {
              "f": 1
            }),
            d: "3789298a-0-" + i0,
            e: i
          };
        }),
        b: common_vendor.p({
          ["custom-class"]: "transition",
          ["mode-class"]: modeClass.value,
          show: show.value
        }),
        c: common_vendor.o(($event) => handle(["fade", "slide-top"]))
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3789298a"], ["__file", "D:/uniapp\u9879\u76EE/BookView/components/Home/Home_RecommendBook.vue"]]);
wx.createComponent(Component);
