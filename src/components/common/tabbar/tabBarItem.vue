<template>
<div class="tab-bar1-item" @click="itemClick">
  <div v-if="!isActive">
    <slot name="tabbar-icon"></slot>
  </div>
  <div v-else>
    <slot name="tabbar-icon-active"></slot>
  </div>
  <div :style="activeStyle">
    <slot name="tabbar-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "tabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
       return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>
<style scoped>
.tab-bar1-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 16px
}
.tab-bar1-item img {
  width: 30px;
  height: 24px;
  margin-top: 3px;
  /*去掉图片下部与文字间的3个像素*/
  vertical-align: middle
}
</style>
