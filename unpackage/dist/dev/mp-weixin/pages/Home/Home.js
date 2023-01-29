"use strict";
var common_vendor = require("../../common/vendor.js");
var api_index = require("../../api/index.js");
require("../../store/index.js");
require("../../api/home.js");
require("../../utils/request.js");
require("../../store/store-name.js");
if (!Math) {
  (Search + SwiperKind + Book + RecommendBook + List)();
}
const Search = () => "../../components/Home/Home_Search.js";
const SwiperKind = () => "../../components/Home/Home_Swiper.js";
const Book = () => "../../components/Home/Home_Book.js";
const RecommendBook = () => "../../components/Home/Home_RecommendBook.js";
const List = () => "../../components/Home/Home_List.js";
const _sfc_main = {
  __name: "Home",
  setup(__props) {
    common_vendor.onMounted(async () => {
      const BookData = await api_index.getBookDataApi();
      common_vendor.index.setStorage({
        key: "Bookdata",
        data: BookData
      });
      const ImgData = await api_index.getImgDataApi();
      common_vendor.index.setStorage({
        key: "ImgData",
        data: ImgData
      });
      const ListData = await api_index.getSoaringListDataApi();
      common_vendor.index.setStorage({
        key: "ListData",
        data: ListData
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2bc86734"], ["__file", "D:/uniapp\u9879\u76EE/BookView/pages/Home/Home.vue"]]);
wx.createPage(MiniProgramPage);
