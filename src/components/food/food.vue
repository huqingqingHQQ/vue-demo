<template> 
	<transition name="move">
  		<div v-show="showFlag" class="food" ref="food">
  			<div class="food-content">
  				<div class="image-header">
  					<img :src="food.images">  						
  					<div class="back" @click="hide">
  						<i class="icon-arrow-left"></i>
  					</div>
  				</div>
  				<div class="content">
  					<h1 class="title">{{food.name}}</h1>
  					<div class="detail">
  						<span class="sell-count">月售：{{food.sellCount}}份</span>
  						<span class="rating">好评率{{food.rating}}</span>
  					</div>
  					<div class="price">
						<span class="now">￥{{food.price}}</span>
						<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
					</div>
					<div class="cartcontrol-wrapper">
	  					<cartcontrol :food="food"></cartcontrol>
	  				</div>
	  				<transition name="fade">
	  					<div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
	  				</transition>
  				</div>
  				<split v-show="food.info"></split>
  				<div class="info" v-show="food.info">
					<h1 class="title">商品信息</h1>
					<div class="text">{{food.info}}</div>
  				</div>
  				<split></split>
  				<div class="rating">
  					<h1 class="title">商品评价</h1>
  					<ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
  				</div>
  			</div>
  		</div>
  	</transition>
</template>

<script>
import BScroll from "better-scroll";
import Vue from "vue";
import cartcontrol from "../../components/cartcontrol/cartcontrol.vue";
import ratingselect from "../../components/ratingselect/ratingselect.vue";
import split from "../../components/split/split.vue";

	const POSITIVE = 0;
	const NEGATIVE = 1;
	const ALL = 2;
	export default {
		props: {
			food: {
				type: Object
			}
		},
		data() {
			return {
				showFlag: false,
				selectType: ALL,
				onlyContent: true,
				desc: {
					all: '全部',
					positive: '推荐',
					negative: '吐槽'
				}
			};	
		},
		methods: {
			show() {
				this.showFlag = true;
				this.selectType = ALL;
				this.onlyContent = true;
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.food, {
			  				click: true
			  			});
					}else {
						this.scroll.refresh();
					}
				})
			},
			hide() {
				this.showFlag = false;
			},
			addFirst(event) {
				if(!event._constructed) {//防止pc多次点击
					return;
				}
				this.$emit('cart.add',event.target);
				Vue.set(this.food, 'count', 1);
			}
		},
		components: {
			cartcontrol,
			split,
			ratingselect
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
		.image-header
			position: relative
			width: 100% 
			height: 0
			padding-top: 100%
			img
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%
			.back
				position: absolute
				top: 10px
				left: 0
				.icon-arrow-left
					display: block
					padding: 10px
					font-size: 20px
					color: #fff
		.content
			padding: 18px
			position: relative
			.title
				line-height: 14px
				margin-bottom: 8px
				font-size: 14px
				font-weight: 700
				color: rgb(7, 17, 27)
			.detail
				margin-bottom: 18px
				line-height: 10px
				height: 10px
				font-size: 0
				.sell-count, .rating
					font-size: 10px
					color: rgb(147, 153, 159)
				.sell-count
					margin-right: 12px
			.price
				font-weight: 700
				line-height: 24px
				font-size: 0
				.now
					margin-right: 8px
					color: rgb(240,20,20)
					font-size: 14px
				.old
					font-size: 10px; 
					color: rgb(147,153,159)
					text-decoration: line-through
			.cartcontrol-wrapper
				position: absolute
				right: 12px
				bottom: 12px
			.buy
				position: absolute
				right: 18px
				bottom: 18px
				z-index: 10
				height: 24px
				line-height: 24px
				padding: 0 12px
				box-sizing: border-box
				border-radius: 12px
				font-size: 10px
				color: #fff
				background: rgb(0, 160, 220)
				transition: all 0.2s
				opacity: 1
				&.fade-enter,&.fade-leave-active
					opacity: 0
		.info
			padding: 18px
			.title
				line-height: 14px
				margin-bottom: 6px
				font-size: 14px
				color: rgb(7, 17, 27)
			.text
				line-height: 24px
				padding: 0 8px
				font-size: 12px
				color: rgb(77, 85, 93)
		.rating
			padding-top: 18px
			.title
				line-height: 14px
				margin-left: 18px
				font-size: 14px
				color: rgb(7, 17, 27)

</style>