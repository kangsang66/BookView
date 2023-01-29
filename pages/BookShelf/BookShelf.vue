<template>
	<view class="BookShelf">
		<text class="search"></text>
	</view>
	<view class="BookShelf-header List">
		<view class="BookShelf-header-left">
			<view class="BookShelf-header-left-text" v-for="(item,i) in chooseTextData" @click="chooseTextTop(i)"
				:class="activeTextNumTop === i? 'active-text':''" :key="i">{{item}}</view>
		</view>
		<view class="BookShelf-header-right">
			<text class="outline"></text>
			<text>选择</text>
		</view>
	</view>
	<!-- 书籍分类 -->
	<view class="bookKinds List">
		<view @click="chooseTextMain(i)" v-for="(item,i)  in defaultTestData" wx:key="i"
			:class="activeTextNumMain === i? 'active-text':''">
			{{item}}
		</view>
	</view>
	<swiper @touchstart="touchItem" class="swiper" :current="activeTextNumMain" :duration="duration">
		<swiper-item>
			<view class="swiper-item">
				<view class="swiper-item-inner List">
					<view class="mybooksbox">
						<view class="mybooks" v-for="(ele,i) in MyBooks" :key="i">

							<image :src="ele.imgSrc" class="images" mode="aspectFill"></image>

							<view>
								<text
									class="mybookstext">{{ele.title.length > 7? ele.title.slice(0,6) + '...':ele.title}}</text>
							</view>
						</view>
					</view>
				</view>


			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo1</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo2</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo3</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo4</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo5</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo6</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">demo7</view>
		</swiper-item>
	</swiper>

</template>

<script setup>
	import {
		ref,
		onMounted,
		nextTick
	} from 'vue'
	import {
		useCounterStore
	} from '../../store/index.js'
	const MyBooks = useCounterStore().MyBooks
	const chooseTextData = ['书架', '书单']
	const defaultTestData = ['默认', '更新', '进度', '推荐值', '分支', '分类', '付费']
	const activeTextNumTop = ref(0)
	const activeTextNumMain = ref(0)
	const chooseTextTop = (i) => {
		activeTextNumTop.value = i
	}
	const chooseTextMain = (i) => {
		duration.value = 0
		activeTextNumMain.value = i
	}
	const duration = ref(0)
	const touchItem = () => {
		duration.value = 500
	}
</script>

<style lang="less" scoped>
	.BookShelf {
		margin-bottom: 120rpx;

		&-header {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			&-left {
				display: flex;
				justify-content: flex-start;
				flex: 1;

				&-text:nth-of-type(1) {
					margin-right: 40rpx;

				}
			}

			&-right {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				flex: 1;
			}
		}
	}


	.bookKinds {
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		line-height: 120rpx;
	}

	.swiper {
		height: calc(100vh - 80rpx);
	}





	.mybooksbox {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.mybooks {
		display: flex;
		justify-content: flex-start;

		flex-direction: column;
		width: 200rpx;
		margin-right: 30rpx;

		.images {
			width: 100%;
			height: 300rpx;
			border: 2rpx solid #eee;
		}

		.mybookstext {
			font-size: 26rpx
		}
	}

	.mybooks:nth-child(3n) {
		margin-right: 0rpx;
	}

	.search {
		width: 35rpx;
		height: 35rpx;
		background-size: cover;
		background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='1.4em' height='1.4em' viewBox='0 0 24 24'%3E %3Cpath fill='%23616a72' d='M12 19q-.425 0-.712-.288Q11 18.425 11 18v-5H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h5V6q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6v5h5q.425 0 .712.287q.288.288.288.713t-.288.712Q18.425 13 18 13h-5v5q0 .425-.287.712Q12.425 19 12 19Z'%3E %3C/path%3E %3C/svg%3E");
	}

	.outline {
		width: 35rpx;
		height: 35rpx;
		background-size: cover;
		background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'%3E %3Cpath fill='%23616a72' d='M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm-.615 12.66h-1.34l-3.24-4.54l1.341-1.25l2.569 2.4l5.141-5.931l1.34.94l-5.811 8.381z'%3E %3C/path%3E %3C/svg%3E");
	}
</style>
