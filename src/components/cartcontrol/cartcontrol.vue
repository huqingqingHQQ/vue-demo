<template>
  <div class="cartcontrol">
  	<transition name="move">
	  	<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
	  		<span class="inner icon-jian"></span>
	  	</div>
	</transition>
  	<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
  	<div class="cart-add icon-jiahao" @click.stop.prevent="addcart"></div>
  </div>
</template>

<script>
	import Vue from 'vue';
	export default {
		props: {
			food: {
				type: Object
			}
		},
		created() {
			
		},
		methods: {
			addcart(event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count++;
				}
				this.$emit('cart.add',event.target);
			},
			decreaseCart(event) {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count--;
				}
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-decrease
			display: inline-block
			padding: 6px
			line-height: 20px
			font-size: 20px
			color: rgb(0,160,220)
			transition: all 0.4s linear
			opacity: 1
			transform: translate3d(0,0,0)
			.inner
				display: inline-block
				line-height: 20px
				font-size: 20px
				color: rgb(0,160,220)
				transition: all 0.4s linear
				transform: rotate(0)
			&.move-enter,&.move-leave-active
				opacity: 0
				transform: translate3d(24px,0,0)
				.inner
					transform: rotate(180deg)
		.cart-decrease
			display: inline-block
		.cart-count
			display: inline-block
			vertical-align: top
			width: 24px
			padding-top: 6px
			line-height: 20px
			text-align: center
			font-size: 10px
			color: rgb(147,153,159)
		.cart-add
			display: inline-block
			padding: 6px
			line-height: 20px
			font-size: 20px
			color: rgb(0,160,220)
			
</style>