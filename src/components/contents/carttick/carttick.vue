<template>
  <div class="tick-image" :class="{check:ischeck}">
    <img src="../../../assets/img/cart/tick.svg" alt="" >
  </div>


</template>

<script>
export default {
name: "carttick",
props:{
  ischeck:{
    type:Boolean,
    default:false
  }
}
}
</script>

<style scoped>
.tick-image{
  border-radius: 50%;
  border: 2px solid #aaa;
  /*background-color: red;*/
}
.check{
  border-color: orangered;
  background-color: orangered;
}
</style>
