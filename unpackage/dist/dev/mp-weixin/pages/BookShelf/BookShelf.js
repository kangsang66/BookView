"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/store-name.js");
const _sfc_main = {
  __name: "BookShelf",
  setup(__props) {
    const MyBooks = store_index.useCounterStore().MyBooks;
    const chooseTextData = ["\u4E66\u67B6", "\u4E66\u5355"];
    const defaultTestData = ["\u9ED8\u8BA4", "\u66F4\u65B0", "\u8FDB\u5EA6", "\u63A8\u8350\u503C", "\u5206\u652F", "\u5206\u7C7B", "\u4ED8\u8D39"];
    const activeTextNumTop = common_vendor.ref(0);
    const activeTextNumMain = common_vendor.ref(0);
    const chooseTextTop = (i) => {
      activeTextNumTop.value = i;
    };
    const chooseTextMain = (i) => {
      duration.value = 0;
      activeTextNumMain.value = i;
    };
    const duration = common_vendor.ref(0);
    const touchItem = () => {
      duration.value = 500;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(chooseTextData, (item, i, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(($event) => chooseTextTop(i), i),
            c: common_vendor.n(activeTextNumTop.value === i ? "active-text" : ""),
            d: i
          };
        }),
        b: common_vendor.f(defaultTestData, (item, i, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(($event) => chooseTextMain(i)),
            c: common_vendor.n(activeTextNumMain.value === i ? "active-text" : "")
          };
        }),
        c: common_vendor.f(common_vendor.unref(MyBooks), (ele, i, i0) => {
          return {
            a: ele.imgSrc,
            b: common_vendor.t(ele.title.length > 7 ? ele.title.slice(0, 6) + "..." : ele.title),
            c: i
          };
        }),
        d: common_vendor.o(touchItem),
        e: activeTextNumMain.value,
        f: duration.value
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ecf284a"], ["__file", "D:/uniapp\u9879\u76EE/BookView/pages/BookShelf/BookShelf.vue"]]);
wx.createPage(MiniProgramPage);
