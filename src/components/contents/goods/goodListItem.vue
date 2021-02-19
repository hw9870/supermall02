<template>
<div class="goodListItem">
<img :src="goodList.show.img" alt=" " @load="imgLoad">
  <div class="goods-info">
    <p>{{goodList.title}}</p>
    <span class="price">{{goodList.price}}</span>
    <span class="collect">{{goodList.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {
name: "goodListItem",
  props:{
  goodList:{
    type:Object,
    default(){
      return {}
      }
    }
  },
  methods:{
    imgLoad(){
      // console.log('imgLoad');
      this.$bus.$emit('itemimgload')
    }
  }
}
</script>

<style scoped>
.goodListItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  z-index:3
}

.goodListItem img {
  width: 100%;
  border-radius: 5px;
  border:3px solid var(--color-tint);

}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
