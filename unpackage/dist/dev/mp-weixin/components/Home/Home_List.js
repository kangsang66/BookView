"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/store-name.js");
const _sfc_main = {
  __name: "Home_List",
  setup(__props) {
    const ListData = common_vendor.ref([]);
    const goview = store_index.useCounterStore().goview;
    common_vendor.index.getStorage({
      key: "ListData",
      success: function(res) {
        ListData.value = res.data;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(ListData.value.data, (ele, i, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(goview)(ele.ImgSrc, ele.title)),
            b: ele.ImgSrc,
            c: common_vendor.t(ele.title.length > 6 ? ele.title.slice(0, 6) + "..." : ele.title),
            d: i
          };
        }),
        b: common_vendor.f(ListData.value.data, (ele, i, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(goview)(ele.ImgSrc, ele.title)),
            b: ele.ImgSrc,
            c: common_vendor.t(ele.title.length > 6 ? ele.title.slice(0, 6) + "..." : ele.title),
            d: i
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-65f63de9"], ["__file", "D:/uniapp\u9879\u76EE/BookView/components/Home/Home_List.vue"]]);
wx.createComponent(Component);
