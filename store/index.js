// stores/counter.js
import {
	defineStore
} from 'pinia';
import {
	name
} from './store-name'
export const useCounterStore = defineStore(name, {
	state: () => {
		return {
			change: false,
			MyBooks: [],
			BookInformation: []
		};
	},
	actions: {
		// 路由跳转
		goview(imgSrc, title) {
			uni.navigateTo({
				url: `/pages/BookView/BookView?imgSrc=${imgSrc}&title=${title}`,
			})
		}
	},
});
