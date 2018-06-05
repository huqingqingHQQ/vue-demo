<template> 
	<transition name="move">
  		<div v-show="showFlag" class="food">
  			<div class="food-content">
  				<div></div>
  			</div>
  		</div>
  	</transition>
</template>

<script>
	export default {
		props: {
			food: {
				type: Object
			}
		},
		data() {
			return {
				showFlag: false
			};	
		},
		methods: {
			show() {
				this.showFlag = true;
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.food
		position: fixed
		top: 0
		left: 0
		bottom: 48px
		z-index: 30
		width: 100%
		background: #fff
		transition: all 0.2s
		transform: translate3d(0, 0, 0)
		&.move-enter,&.move-leave-active
			transform: translate3d(100%, 0, 0)
</style>