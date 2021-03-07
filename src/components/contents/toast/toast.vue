<template>
  <div class="toast" v-show="Show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props:{
    message:{
      type:String,
      default:'购物'
    },
    Show:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%,-50%);
  color: #ffffff;
  background-color: rgba(0,0,0,.65);
  /*z-index: 99;*/
}
</style>
