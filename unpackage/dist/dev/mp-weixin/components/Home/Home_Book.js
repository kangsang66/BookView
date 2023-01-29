"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/store-name.js");
const _sfc_main = {
  __name: "Home_Book",
  setup(__props) {
    const goview = store_index.useCounterStore().goview;
    const Bookdata = common_vendor.ref([]);
    common_vendor.index.getStorage({
      key: "Bookdata",
      success: function(res) {
        Bookdata.value = res.data;
        console.log("Bookdata.value", Bookdata.value);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(Bookdata.value, (ele, key, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(goview)(ele.imgSrc, ele.title)),
            b: ele.imgSrc,
            c: key
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e584aa98"], ["__file", "D:/uniapp\u9879\u76EE/BookView/components/Home/Home_Book.vue"]]);
wx.createComponent(Component);
