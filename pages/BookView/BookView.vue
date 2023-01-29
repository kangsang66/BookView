<template>
	<!-- 书籍 -->
	<view class="showBook">
		<view>
			<image :src="imgSrc" class="showBook-curImg" mode="aspectFill"></image>
		</view>
		<view>
			<text class="title titleText">{{title}}</text>
		</view>
	</view>
	<!-- 评论 -->
	<view class="comments">
		<view class="comments-title"> <text>精彩点评</text></view>
		<view class="commentsBox">
			<view class="commentsBox-Reviewer">
				<image class="img" src="https://www.kangsang666.top/logo.png" mode=""></image>
			</view>
			<text>非常好的一本书</text>
		</view>
		<view class="commentsBox">
			<view class="commentsBox-Reviewer">
				<image class="img" src="https://www.kangsang666.top/logo.png" mode=""></image>
			</view>
			<text>非常好的一本书</text>
		</view>
		<view class="commentsBox">
			<view class="commentsBox-Reviewer">
				<image class="img" src="https://www.kangsang666.top/logo.png" mode=""></image>
			</view>
			<text>非常好的一本书</text>
		</view>
		<view class="commentsBox">
			<view class="commentsBox-Reviewer">
				<image class="img" src="https://www.kangsang666.top/logo.png" mode=""></image>
			</view>
			<text>非常好的一本书</text>
		</view>
	</view>
	<!-- 阅读底部 -->
	<view class="read">
		<view><button @click="addToStorage(imgSrc,title)" class="btn default" type="default">加入书架</button></view>
		<view><button @click="toread" class="btn blue" type="default">阅读</button></view>
	</view>
</template>

<script>
	import {
		useCounterStore
	} from '../../store/index.js'
	export default {
		data() {
			return {
				imgSrc: '',
				title: '',
				Books: useCounterStore().MyBooks
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.imgSrc = option.imgSrc
			this.title = option.title
		},
		methods: {
			// 添加到我的书单
			addToStorage(imgSrc, title) {
				this.Books.push({
					imgSrc: imgSrc,
					title: title
				})
			},
			// 跳转到阅读页
			toread() {
				uni.navigateTo({
					url: '../BookRead/BookRead'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.showBook {
		display: flex;
		justify-content: flex-start;
		height: 440rpx;
		background-color: #fff;
		padding: 40rpx;

		&-curImg {
			width: 240rpx;
			height: 300rpx;
			margin-right: 40rpx;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}

		.titleText {
			font-size: 46rpx;
		}
	}

	.comments {
		display: flex;
		flex-direction: column;
		height: 1000rpx;
		justify-content: space-evenly;
		padding: 0 40rpx;
		background-color: #eee;
		border-radius: 10rpx;
		margin-bottom: 120rpx;

		&-title {
			height: 40rpx;
			line-height: 40rpx;
		}

		.commentsBox {
			width: 100%;
			height: 180rpx;
			background-color: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-radius: 10rpx;
			padding: 20rpx;

			&-Reviewer {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background-color: pink;
				margin-right: 30rpx;
			}
		}
	}

	.read {
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 140rpx;
		width: 100%;
		background-color: #fff;

		.btn {
			width: 340rpx;
			border-radius: 25rpx;
			font-size: 30rpx;
			height: 80rpx;
			font-weight: 600;
		}

		.default {
			color: #000;
		}

		.blue {
			color: #fff;
			background-color: #008af9;
		}
	}
</style>
