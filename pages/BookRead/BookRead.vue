<template>
	<view @click="showList" class="BookRead">
		<text v-if="BookInfo[index]">
			<text class="title">{{BookInfo[index].title}}</text>
			<text class="content" v-for="(p,i) in BookInfo[index].content" :key="i">
				<text class="p" v-for="(c,j) in p" :key="j">{{c}}</text>
			</text>
		</text>
	</view>
	<view v-show="showMenu" class="menu slide-in-bottom">
		<button class="btn" @click="pre" type="primary">上一章</button>
		<button class="btn" @click="next" type="primary">下一章</button>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		getBookContentApi
	} from '../../api/index.js'
	import {
		useCounterStore
	} from '../../store/index.js'
	const index = ref(0)
	const showMenu = ref(true)
	const showList = () => {
		showMenu.value = !showMenu.value
	}
	const pre = () => {
		if (index.value != 0) {
			index.value--
		} else {
			index.value
		}
	}
	const next = () => {
		if (index.value != BookInfo.value.length - 1) {
			index.value++
		} else {
			index.value
		}
	}
	const BookInfo = ref(useCounterStore().BookInformation)
	onMounted(async () => {
		const data = await getBookContentApi()
		BookInfo.value = data.data
	})
</script>

<style lang="less" scoped>
	.title {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 30rpx 20rpx;
	}

	.p {
		font-size: 28rpx;

	}

	.menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: fixed;
		bottom: 0;
		height: 100rpx;
		background-color: #fff;
		width: 100%;
		transition: .6s;
		padding: 0 20rpx;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	.slide-in-bottom {
		-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}

	@-webkit-keyframes slide-in-bottom {
		0% {
			-webkit-transform: translateY(1000px);
			transform: translateY(1000px);
			opacity: 0;
		}

		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slide-in-bottom {
		0% {
			-webkit-transform: translateY(1000px);
			transform: translateY(1000px);
			opacity: 0;
		}

		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}

	.btn {
		border-radius: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
</style>
