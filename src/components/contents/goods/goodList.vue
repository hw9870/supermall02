<template>
<div class="goods">
  <goodListItem v-for="item in goods" :goodList="item" :key="item.list">
  </goodListItem>
</div>
</template>

<script>
import goodListItem from './goodListItem'
export default {
name: "goodList",
components:{
  goodListItem,
},
props:
  {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
}
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
}
</style>
