"use strict";
var common_vendor = require("../common/vendor.js");
const pubUrl = "http://139.224.67.36:5700";
const axios = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: pubUrl + options.url,
      method: options.method || "get",
      data: options.data || {},
      header: options.header || {
        "Content-type": "application/json; charset=utf-8"
      },
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        return common_vendor.index.showToast({
          title: "\u8BF7\u6C42\u63A5\u53E3\u5931\u8D25"
        });
      }
    });
  });
};
exports.axios = axios;
