const pubUrl = "http://139.224.67.36:5700" //这是我要请求的数据接口的公共部分
const axios = (options) => {
	// 返回一个promise对象即可
	// 还是使用wx.request方法来封装,添加上对应的配置项即可
	return new Promise((resolve, reject) => {
		wx.request({
			url: pubUrl + options.url, // 地址拼接 
			method: options.method || 'get', // 请求方式
			data: options.data || {}, // 请求参数
			header: options.header || { // 请求头信息
				'Content-type': 'application/json; charset=utf-8'
			},
			// 成功回调
			success: (res) => {
				resolve(res.data)
			},
			// 失败回调
			fail: (err) => {
				return uni.showToast({
					title: '请求接口失败'
				})
				console.log('失败')
				reject(err)
			}
		})
	})
}
export default axios
