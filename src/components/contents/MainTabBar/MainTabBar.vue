<template>
  <tabBar>
    <tabBarItem path="/home" activeColor="blue">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/home.svg" alt="">
      <img slot="tabbar-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="tabbar-text">首页</div>
    </tabBarItem>
    <tabBarItem path="/category" activeColor="blue">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/category.svg" alt="">
      <img slot="tabbar-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="tabbar-text">分类</div>
    </tabBarItem>
    <tabBarItem path="/cart" activeColor="blue">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="tabbar-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="tabbar-text">购物车</div>
    </tabBarItem>
    <tabBarItem path="/profile" activeColor="blue">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img slot="tabbar-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="tabbar-text">我的</div>
    </tabBarItem>
  </tabBar>
</template>

<script>
import tabBar from "@/components/common/tabbar/tabBar";
import tabBarItem from "@/components/common/tabbar/tabBarItem";
export default {
  name: "MainTabBar",
  components: {
    tabBar,
    tabBarItem,
  }
}

</script>

<style scoped>

</style>
