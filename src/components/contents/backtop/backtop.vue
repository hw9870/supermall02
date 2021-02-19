<template>
  <div class="backtop" >
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "backtop",
  // methods:{
  //   btnClick(){
  //     console.log('回到顶部');
  //   }
  // }
}
</script>

<style scoped>
.backtop{
  position: fixed;
  right: 6px;
  bottom: 40px;
}
.backtop img{
  height: 42px;
  width: 43px;
}
</style>
