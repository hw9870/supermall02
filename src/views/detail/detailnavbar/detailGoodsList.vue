<template>
  <div v-if="Object.keys(goodsList).length !== 0"
  class="goods-info">
    <div class="info-desc clear-fix">
      <div class="desc">{{goodsList.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{goodsList.key}}</div>
    <div v-for="(item,index) in goodsList.list" :key="index" class="info-list">
      <img :src="item" alt="" @imageLoad="imagesLoad">
    </div>
  </div>
</template>

<script>

export default {
  name: "detailGoodsList",
  props:{
    goodsList:{
      type:Object,
    }
  },
  data(){
    return{
      imagesLength: 0,
      counter: 0
    }
  },
  methods:{
    imagesLoad(){
      if(++this.counter === this.imagesLength ){
        this.$emit("imageLoad")
      }
    }
  },
  watch:{
    goodsList(){
      this.imagesLength = this.goodsList.list.length
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  background-color: #ffffff;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before, .info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
  background-color: #ffffff;
}

.info-list img {
  width: 100%;
  background-color: #ffffff;
}

</style>
