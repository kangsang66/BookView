"use strict";
var common_vendor = require("../../common/vendor.js");
var api_index = require("../../api/index.js");
var store_index = require("../../store/index.js");
require("../../api/home.js");
require("../../utils/request.js");
require("../../store/store-name.js");
const _sfc_main = {
  __name: "BookRead",
  setup(__props) {
    const index = common_vendor.ref(0);
    const showMenu = common_vendor.ref(true);
    const showList = () => {
      showMenu.value = !showMenu.value;
    };
    const pre = () => {
      if (index.value != 0) {
        index.value--;
      } else {
        index.value;
      }
    };
    const next = () => {
      if (index.value != BookInfo.value.length - 1) {
        index.value++;
      } else {
        index.value;
      }
    };
    const BookInfo = common_vendor.ref(store_index.useCounterStore().BookInformation);
    common_vendor.onMounted(async () => {
      const data = await api_index.getBookContentApi();
      BookInfo.value = data.data;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: BookInfo.value[index.value]
      }, BookInfo.value[index.value] ? {
        b: common_vendor.t(BookInfo.value[index.value].title),
        c: common_vendor.f(BookInfo.value[index.value].content, (p, i, i0) => {
          return {
            a: common_vendor.f(p, (c, j, i1) => {
              return {
                a: common_vendor.t(c),
                b: j
              };
            }),
            b: i
          };
        })
      } : {}, {
        d: common_vendor.o(showList),
        e: common_vendor.o(pre),
        f: common_vendor.o(next),
        g: showMenu.value
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b0378534"], ["__file", "D:/uniapp\u9879\u76EE/BookView/pages/BookRead/BookRead.vue"]]);
wx.createPage(MiniProgramPage);
