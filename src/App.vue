<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
<!--    <router-view v-if="!$route.meta.keepalive"></router-view>-->
  <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/contents/MainTabBar/MainTabBar.vue";
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
