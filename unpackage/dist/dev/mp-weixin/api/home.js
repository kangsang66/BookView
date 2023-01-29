"use strict";
var utils_request = require("../utils/request.js");
const getBookData = (query) => {
  return utils_request.axios({
    url: "/Home/Bookdata",
    method: "get"
  });
};
const getImgData = (query) => {
  return utils_request.axios({
    url: "/Home/Imgdata",
    method: "get"
  });
};
const getSoaringListData = (query) => {
  return utils_request.axios({
    url: "/Home/SoaringList",
    method: "get"
  });
};
const getBookContent = (query) => {
  return utils_request.axios({
    url: "/Home/BookContent",
    method: "get"
  });
};
exports.getBookContent = getBookContent;
exports.getBookData = getBookData;
exports.getImgData = getImgData;
exports.getSoaringListData = getSoaringListData;
