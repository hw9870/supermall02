<template>
<div id="home" >
  <navBar  class="homeNav">
    <div slot="center"> 购物街</div>
  </navBar>
  <TabControl  :titles="['流行','新款','精选']"
              @tabClick="tabClick" ref="talControl1" class="tabControl" v-show="isTabFixed"></TabControl>
  <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"
          :pull-up-load="true" @pullingUp="learnMore">
    <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad"
    ></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <featureViews></featureViews>
    <TabControl  :titles="['流行','新款','精选']"
                @tabClick="tabClick" ref="talControl2" ></TabControl>
    <goodList :goods="showGood"></goodList>
  </Scroll>
  <backtop @click.native="btnClick" v-show="isshowbacktop"></backtop>

</div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import featureViews from "./childComps/FeatureView"
import TabControl from "@/components/contents/TabControl/TabControl";
import goodList from "@/components/contents/goods/goodList";
import Scroll from "@/components/common/Scroll/Scroll";
import backtop from "@/components/contents/backtop/backtop";
import {getHomeMultiData,getHomeGoods} from "network/home";
import {debounce} from "common/untils";
export default {
  name: "home",
  components:{
    navBar,
    HomeSwiper,
    RecommendView,
    featureViews,
    TabControl,
    goodList,
    Scroll,
    backtop
  },
  data(){
    return{
      // data: null
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[ ]},
        'new':{page:0,list:[ ]},
        'sell':{page:0,list:[ ]},
      },
      currentType: 'pop',
      isshowbacktop: false,
      tabOffsetTop: 0,
      isTabFixed:false,
      saveY:0
    }
  },
  computed:{
    showGood(){
      return this.goods[this.currentType].list
    }
  },
  // destroyed() {
  //   console.log('destroy');
  // },
  activated() {
    // console.log("activated"+this.saveY);
    // this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,100)
    this.$refs.scroll.refresh()

  },
  deactivated() {
    this.saveY = this.$refs.scroll.Scroll.y;
    // console.log("deactivated"+this.saveY);
  },
  created() {
    //1、请求轮播图多个数据
    this.getHomeMultiData();

  //  2、请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');



  },
  mounted() {
    //1、图片加载完成监听
    let refresh= debounce (this.$refs.scroll.refresh,500);
    this.$bus.$on('homeitemimgload', () => {
        refresh()
      });
  },

  methods:{
      /*
     事件监听相关
      */
      tabClick(index){
        // console.log(index)
        switch (index){
          case 0:
            this.currentType='pop';
            break;
          case 1:
            this.currentType='new';
            break;
          case 2:
            this.currentType='sell';
            break;
        }
        this.$refs.talControl1.currentIndex = index
        this.$refs.talControl2.currentIndex = index
      },
      contentScroll(position){
        // console.log(position);
        //1、完成backtop的显示
        this.isshowbacktop = (-position.y ) > 1000;
      //  2、完成吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop

      },
      btnClick(){
        this.$refs.scroll.scrollTo(0,0,500);
      },
      learnMore(){
        // console.log("上拉加载更多");
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.Scroll.finishPullUp()
        // this.$refs.scroll.Scroll.refresh()
      },
      swiperImgLoad(){
        // console.log("+++++");
        //1、完成吸顶效果
        // console.log(this.$refs.talControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.talControl2.$el.offsetTop
    },
    /*
      网络请求相关
       */
      getHomeMultiData(){
        getHomeMultiData().then(res => {
        // console.log(res);
        // this.data = res;
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })},

      getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res =>{
          // console.log(res);
          //...  三个具有解析数组的功能
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1;
        })
        // this.$refs.scroll.Scroll.refresh()
      },

    },

}

</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.homeNav{
  color:#ffffff;
  background-color:var(--color-tint);
  font-size: 20px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /*z-index: 9;*/
}
.TabControl{
  /*position:sticky;*/
  /*top:44px*/
}
.content{
  /*height: calc(100% - 93px);*/
  overflow: hidden;
  /*margin-top: 44px;*/
  position:absolute;
  top:44px;
  bottom: 49px;
  right: 0;
  left:0;

}
.tabControl{
  position: relative;
  z-index: 9;
}
/*.fixed{*/
/*  position: fixed;*/
/*  left: 0;*/
/*  right: 0;*/
/*  top:44px;*/

/*}*/
</style>
