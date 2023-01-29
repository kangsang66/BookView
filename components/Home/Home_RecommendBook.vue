<template>
	<!-- 推荐 -->
	<view class="recommendBook">
		<view class="recommendBook-text">
			<text>为你推荐</text>
		</view>
		<view class="recommendBook-mainbox">
			<view class="recommendBook-mainbox-box" v-for="(ele,i) in Imgdata.data" :key="i">

				<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :show="show">
					<image @click="goview(ele.ImgSrc,ele.title)" class="img imgbox" :src="ele.ImgSrc"
						mode="scaleToFill">
					</image>
				</uni-transition>
			</view>
		</view>
		<view>

			<button @click="handle(['fade', 'slide-top'])" class=" recommendBook-button">换一批</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		useCounterStore
	} from '../../store/index.js'
	const Imgdata = ref([])
	const goview = useCounterStore().goview
	uni.getStorage({
		key: 'ImgData',
		success: function(res) {
			Imgdata.value = res.data;
		}
	});

	const show = ref(true)
	const modeClass = ref(['fade', 'slide-top'])
	const flag = ref(true) // 节流
	const handle = (type) => {
		// 如果是第一次进入 => 就执行,只有当执行完之后才让下一次进入
		if (flag.value) {
			flag.value = false
			show.value = !show.value
			setTimeout(() => {
				flag.value = true
				show.value = !show.value
			}, 600)
			modeClass.value = type
		}
	}
</script>

<style lang="less" scoped>
	.imgbox {
		height: 260rpx;
	}

	.recommendBook {
		width: 100%;
		height: 800rpx;
		background-color: #fff;
		padding: 0 45rpx;

		&-text {
			font-weight: 600;
			height: 100rpx;
			line-height: 100rpx;
		}

		&-button {
			font-size: 36rpx;
			border-radius: 15rpx;
			background-color: #f3f4f6;
		}

		&-mainbox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			&-box {
				width: 200rpx;
				height: 260rpx;
				margin-bottom: 30rpx;
				background-color: #fff;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			}
		}
	}
</style>
