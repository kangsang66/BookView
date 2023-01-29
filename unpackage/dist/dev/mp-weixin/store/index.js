"use strict";
var common_vendor = require("../common/vendor.js");
var store_storeName = require("./store-name.js");
const useCounterStore = common_vendor.defineStore(store_storeName.name, {
  state: () => {
    return {
      change: false,
      MyBooks: [],
      BookInformation: []
    };
  },
  actions: {
    goview(imgSrc, title) {
      common_vendor.index.navigateTo({
        url: `/pages/BookView/BookView?imgSrc=${imgSrc}&title=${title}`
      });
    }
  }
});
exports.useCounterStore = useCounterStore;
