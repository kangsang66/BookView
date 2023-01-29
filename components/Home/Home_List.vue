<template>
	<!-- 榜单 -->
	<view>
		<view class="SoaringList">
			<view class="SoaringList-text text List">
				<text>飙升榜</text>
			</view>
			<view class="SoaringList-mainbox">
				<swiper class="swiper" display-multiple-items="3" previous-margin="22.5px" next-margin="10px">
					<swiper-item v-for="(ele,i) in ListData.data" :key="i">
						<view class="swiper-box-little">
							<image @click="goview(ele.ImgSrc,ele.title)" class="img" mode="aspectFill"
								:src="ele.ImgSrc" />
						</view>
						<view class="description">{{ele.title.length > 6 ? ele.title.slice(0,6) + '...' : ele.title}}
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view>
				<button class="button">查看飙升榜</button>
			</view>
		</view>
		<view class="SoaringList">
			<view class="SoaringList-text text List">
				<text>新书榜</text>
			</view>
			<view class="SoaringList-mainbox">
				<swiper class="swiper" display-multiple-items="3" previous-margin="22.5px" next-margin="10px">
					<swiper-item v-for="(ele,i) in ListData.data" :key="i">
						<view class="swiper-box-little">
							<image @click="goview(ele.ImgSrc,ele.title)" class="img" mode="aspectFill"
								:src="ele.ImgSrc"></image>
						</view>
						<view class="description">{{ele.title.length > 6 ? ele.title.slice(0,6) + '...' : ele.title}}
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view>
				<button class="button">查看新书榜</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		useCounterStore
	} from '../../store/index.js'
	import {
		ref
	} from 'vue'
	const ListData = ref([])
	const goview = useCounterStore().goview
	uni.getStorage({
		key: 'ListData',
		success: function(res) {
			ListData.value = res.data;
		}
	});
</script>
<style lang="less" scoped>
	.swiper {
		height: 340rpx;
	}
</style>
