<template>
	<view>
		<text class="title">插件页面</text>
		<test/>
	</view>
</template>

<script>
	import test from '../../components/test'
	export default {
	    components: {
	        test
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: red;
		display: block;
		text-align: center;
		font-size: 40rpx;
		padding: 20rpx;
	}
</style>
