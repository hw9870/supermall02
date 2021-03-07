<template>
  <NavBar>
    <div slot="left" @click="backClick">
      <img src="../../../assets/img/common/back.svg" alt=""
      class="back">
    </div>
    <div slot="center" class="NavBar">
      <div v-for="(item,index) in titles" :key="item" class="NavBarItem"
      :class="{active: index === currentIndex}" @click="titleClick(index)">
        {{item}}</div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
  components:{
    NavBar
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index)

    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.NavBar{
  display: flex;
  font-size: 13px;
}
.NavBarItem{
  flex: 1;
}
.active{
  color: #ff8198;
}
.back{
  margin-top: 12px;
  height: 18px;
  width: 18px;
}
</style>
