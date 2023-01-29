import axios from '@/utils/request.js'
export const getBookData = (query) => {
	return axios({ // 记住这里必须写上return
		url: '/Home/Bookdata',
		method: 'get'
	})
}
export const getImgData = (query) => {
	return axios({ // 记住这里必须写上return
		url: '/Home/Imgdata',
		method: 'get'
	})
}
export const getSoaringListData = (query) => {
	return axios({ // 记住这里必须写上return
		url: '/Home/SoaringList',
		method: 'get'
	})
}
export const getBookContent = (query) => {
	return axios({
		url: '/Home/BookContent',
		method: 'get'
	})
}
