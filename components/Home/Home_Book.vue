<template>
	<!-- book -->
	<view class="swiper-book">
		<swiper class="swiper" display-multiple-items="3" previous-margin="22.5px">
			<swiper-item>
				<view class="swiper-kind-item swiper-book-item-first">
					<view class="inner">
						<text>本周</text>
						<view><text>尚未开始阅读</text></view>
						<view class="box">阅读n分钟</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item v-for="(ele,key) in Bookdata" :key="key">
				<view class="swiper-kind-item swiper-book-item">
					<image @click="goview(ele.imgSrc,ele.title)" class="img" :src="ele.imgSrc" mode="scaleToFill" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	import {
		useCounterStore
	} from '../../store/index.js'
	const goview = useCounterStore().goview
	const Bookdata = ref([])
	// 获取缓存数据
	uni.getStorage({
		key: 'Bookdata',
		success: function(res) {
			Bookdata.value = res.data;
			console.log('Bookdata.value', Bookdata.value)
		}
	});
</script>

<style lang="less" scoped>
	.swiper {

		height: 200rpx;
	}


	.swiper-kind-item {

		line-height: 60rpx;
		color: #727a81;
		background-color: #ebecee;

		.box {
			display: flex;
			justify-content: flex-start;
			padding: 10rpx;
			align-items: center;
			color: #fff;
			width: 100%;
			height: 80rpx;
			background-color: #018efa;
		}
	}

	.swiper-book-item {
		width: 160rpx;
		background-color: #ebecee;
	}

	.swiper-book-item-first {
		height: 200rpx;
		width: 220rpx !important;
		margin-right: 0rpx !important;
	}

	.swiper-book {
		height: 200rpx;

		&-item {
			height: 200rpx;
		}
	}
</style>
