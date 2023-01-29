"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      bgColor: "#ebedf1",
      radius: 100,
      placeholder: "\u9F99\u65CF",
      clearButton: "auto",
      cancelButton: "none"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7f8e859a"], ["__file", "D:/uniapp\u9879\u76EE/BookView/components/Home/Home_Search.vue"]]);
wx.createComponent(Component);
