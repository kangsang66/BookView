<template>

	<Search />
	<SwiperKind />
	<Book />
	<RecommendBook />
	<List />


</template>

<script setup>
	import Search from '@/components/Home/Home_Search.vue'
	import SwiperKind from '@/components/Home/Home_Swiper.vue'
	import Book from '@/components/Home/Home_Book.vue'
	import RecommendBook from '@/components/Home/Home_RecommendBook.vue'
	import List from '@/components/Home/Home_List.vue'

	import {
		getBookDataApi,
		getImgDataApi,
		getSoaringListDataApi
	}
	from '@/api/index.js'
	// 引入pina
	import {
		useCounterStore
	} from '../../store/index.js'
	import {
		onMounted,
		ref
	} from 'vue'

	onMounted(async () => {
		const BookData = await getBookDataApi()
		// 安卓没有localstorage => 所以存入缓存中
		uni.setStorage({
			key: 'Bookdata',
			data: BookData
		});
		const ImgData = await getImgDataApi()
		uni.setStorage({
			key: 'ImgData',
			data: ImgData
		});
		const ListData = await getSoaringListDataApi()
		uni.setStorage({
			key: 'ListData',
			data: ListData
		});
	})
</script>

<style lang="less" scoped>
	:deep(.swiper-kind .uni-swiper-slides) {
		top: 50% !important;
		transform: translateY(-50%);
	}
</style>
