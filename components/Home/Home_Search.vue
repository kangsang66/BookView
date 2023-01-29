<template>
	<!-- 搜索框 -->
	<view class="search">
		<uni-search-bar class="uni-mt-10" bgColor="#ebedf1" :radius="100" placeholder="龙族" clearButton="auto"
			cancelButton="none" />
		<view class="search-right"><text class="search-right-row">|</text><text class="search-right-text">书城</text>
		</view>
	</view>


</template>

<script setup>

</script>

<style lang="less" scoped>
	:deep(.uni-searchbar__box-icon-search) {
		color: #606972;
	}

	:deep(.uni-searchbar__box) {
		justify-content: flex-start;
		align-items: center;
	}

	.search {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		padding: 0rpx 30rpx 30rpx 20rpx;
		z-index: 10;
		background-color: #fff;
		border-bottom: 2rpx solid #eee;

		&-right {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			top: 50%;
			right: 10%;
			transform: translate(-15%, -55%);
			width: 100rpx;
			height: 72rpx;

			&-row {
				color: #dbdde1;
				margin-right: 20rpx;
			}

			&-text {
				font-size: 32rpx;
				color: #000;
				font-weight: 500;
			}
		}
	}
</style>
