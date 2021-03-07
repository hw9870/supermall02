<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.price }}</span>
      <span class="o-price">{{ goods.oldPrice}}</span>
      <span class="discount">{{goods.discountDesc}}</span></div>
    <div class="info-other">
      <span v-for="items in goods.columns.slice(0,2)" :key="items">{{items}}</span>
      <span v-for="(item,index) in goods.services.slice(1,2)" :key="index">
      {{item.name}}</span>
    </div>
    <div class="info-service">
      <span v-for="(item,index) in goods.services.slice(2,4)" :key="index" class="info-service-item">
      <img :src="item.icon" alt=""> {{item.name}}</span>
    </div>

  </div>

</template>

<script>
export default {
  name: "detailList",
  props:{
    goods:{
      type:Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  font-size: 18px;
  color: #222;
}
.info-price{
  margin-top: 10px;
}
.info-price .n-price{
  font-size: 24px;
  color: red;
}
.info-price .o-price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration:line-through
}
.info-price .discount{
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top:-8px
}
.info-other{
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 18px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
}
.info-service{
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item img{
  width: 14px;
  height: 14px;
  top: 2px;
  position: relative;
}
</style>
