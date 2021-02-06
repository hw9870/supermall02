<template>
<div class="recommend">
  <div v-for="itemRecommend in recommends" :key="itemRecommend.index" class="itemRecommend">
    <a :href="itemRecommend.link">
      <img :src="itemRecommend.image" alt="">
      <div>{{itemRecommend.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends:{
      type: Array,
      default(){
        return[]
      }
}
}
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 20px;
  border-bottom: 5px solid #eeeeee;
}
.itemRecommend{
  flex: 1;

}
.itemRecommend img{
  flex: 1;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

</style>
