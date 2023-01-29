"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/Home/Home.js";
  "./pages/BookShelf/BookShelf.js";
  "./pages/personal/personal.js";
  "./pages/BookView/BookView.js";
  "./pages/BookRead/BookRead.js";
}
const _sfc_main = {};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp\u9879\u76EE/BookView/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
