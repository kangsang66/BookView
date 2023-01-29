<template>
	<!-- 分类书籍 -->
	<view class="swiper-kind">
		<swiper class="swiper" display-multiple-items="4" previous-margin="22.5px">
			<swiper-item>
				<view class="swiper-kind-item first">
					<text class="left">微信输入法</text>
					<text class="ArrowRirght"></text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-kind-item">
					<text>分类</text>
					<view class="ArrowRirght"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-kind-item">
					<text>榜单</text>
					<view class="ArrowRirght"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-kind-item">
					<text>书单</text>
					<view class="ArrowRirght"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-kind-item">
					<text>会员</text>
					<view class="ArrowRirght"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-kind-item">
					<text>免费</text>
					<view class="ArrowRirght"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-kind-item">
					<text>新书</text>
					<view class="ArrowRirght"></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
	.swiper {
		margin-top: 120rpx;
		height: 120rpx;
		line-height: 120rpx;
	}

	.swiper-kind-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 60rpx;
		border-radius: 30rpx;
		line-height: 60rpx;
		color: #727a81;
		background-color: #ebecee;
		font-size: 28rpx;
		margin-left: 40rpx;
	}

	.first {
		width: 100%;
		margin-right: 0rpx;
		font-size: 28rpx;
		margin-left: 0rpx;
	}

	.ArrowRirght {
		display: inline-block;
		width: 35rpx;
		height: 35rpx;
		background-size: cover;
		background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 24 24'%3E %3Cpath fill='%23a4acb0' d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'%3E %3C/path%3E %3C/svg%3E");

	}
</style>
