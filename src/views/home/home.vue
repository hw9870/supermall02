<template>
<div id="home">
  <navBar class="homeNav">购物街</navBar>
  <HomeSwiper :banners="banners"></HomeSwiper>
  <RecommendView :recommends="recommends"></RecommendView>
  <featureViews></featureViews>
  <TabControl class="TabControl" :titles="['流行','新款','精选']"></TabControl>
  <ul>
    <li>列表 1</li>
    <li>列表 1</li>
    <li>列表 2</li>
    <li>列表 3</li>
    <li>列表 4</li>
    <li>列表 5</li>
    <li>列表 6</li>
    <li>列表 1</li>
    <li>列表 2</li>
    <li>列表 3</li>
    <li>列表 4</li>
    <li>列表 5</li>
    <li>列表 6</li>
    <li>列表 1</li>
    <li>列表 2</li>
    <li>列表 3</li>
    <li>列表 4</li>
    <li>列表 5</li>
    <li>列表 6</li>
    <li>列表 2</li>
    <li>列表 3</li>
    <li>列表 4</li>
    <li>列表 5</li>
    <li>列表 6</li>
    <li>列表 7</li>
    <li>列表 8</li>
    <li>列表 9</li>
    <li>列表 10</li>
    <li>列表 1</li>
    <li>列表 2</li>
    <li>列表 3</li>
    <li>列表 4</li>
    <li>列表 5</li>
    <li>列表 6</li>
    <li>列表 7</li>
    <li>列表 8</li>
    <li>列表 9</li>
    <li>列表 10</li>
    <li>列表 1</li>
    <li>列表 2</li>
    <li>列表 3</li>
    <li>列表 4</li>
    <li>列表 5</li>
    <li>列表 6</li>
    <li>列表 7</li>
    <li>列表 8</li>
    <li>列表 9</li>
    <li>列表 10</li>
  </ul>
</div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";

import featureViews from "./childComps/FeatureView"

import TabControl from "@/components/contents/TabControl/TabControl";

import {getHomeMultiData,getHomeGoods} from "network/home";
export default {
  name: "home",
  components:{
    navBar,
    HomeSwiper,
    RecommendView,
    featureViews,
    TabControl
  },
  data(){
    return{
      // data: null
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[ ]},
        'news':{page:0,list:[ ]},
        'sell':{page:0,list:[  ]}
      }
    }
  },
  created() {
    //1、请求轮播图多个数据
    this.getHomeMultiData();

  //  2、请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('news');
    this.getHomeGoods('sell');
  },

    methods:{
      getHomeMultiData(){
        getHomeMultiData().then(res => {
        console.log(res);
        // this.data = res;
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })},
      getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res =>{
          console.log(res);
          //...  三个具有解析数组的功能
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1
        })
      }
    }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.homeNav{
  color:#ffffff;
  background-color:var(--color-tint);
  font-size: 20px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.TabControl{
  position:sticky;
  top:44px
}
</style>
