"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/store-name.js");
const _sfc_main = {
  data() {
    return {
      imgSrc: "",
      title: "",
      Books: store_index.useCounterStore().MyBooks
    };
  },
  onLoad: function(option) {
    this.imgSrc = option.imgSrc;
    this.title = option.title;
  },
  methods: {
    addToStorage(imgSrc, title) {
      this.Books.push({
        imgSrc,
        title
      });
    },
    toread() {
      common_vendor.index.navigateTo({
        url: "../BookRead/BookRead"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.imgSrc,
    b: common_vendor.t($data.title),
    c: common_vendor.o(($event) => $options.addToStorage($data.imgSrc, $data.title)),
    d: common_vendor.o((...args) => $options.toread && $options.toread(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-16b38e46"], ["__file", "D:/uniapp\u9879\u76EE/BookView/pages/BookView/BookView.vue"]]);
wx.createPage(MiniProgramPage);
