<template>
<div class="tabControl">
  <div v-for="(item,index) in titles" :key="index"
       class="tabControItem"
       :class="{active:index === currentIndex}"
        @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
    type: Array,
    default(){
      return[ ]
    }
  }
  },
  data(){
    return{
      currentIndex:0,

    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }

}
</script>

<style scoped>
.tabControl{
  display: flex;
  text-align: center;
  background-color: #ffffff;
  z-index:10
}
.tabControItem{
  flex:1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tabControItem span{
  padding: 2px;
}
.active{
  color: var(--color-high-text);

}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
