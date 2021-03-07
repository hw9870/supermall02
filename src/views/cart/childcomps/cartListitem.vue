<template>
  <div id="shop-item">
    <div class="item-selector">
      <carttick :ischeck="product.check" @click.native="listenTick"></carttick></div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div>{{product.title}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{product.lowPrice}}</div>
        <div class="item-count right">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import carttick from "@/components/contents/carttick/carttick";
export default {
  name: "cartListItem",
  props:{
    product:{
      type:Object,
      default() {
        return { }
      }
    }
  },
  components:{carttick},
  methods:{
    listenTick(){
      this.product.check = !this.product.check
    }
  }
}
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img{
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 14px;
  color: #333333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info{
  font-size: 14px;
  color: #666666;
  margin-top: 15px;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price{
  color: orangered;
}
</style>
