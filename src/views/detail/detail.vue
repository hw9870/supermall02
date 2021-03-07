<template>
      <div id="detail">
        <detailNavBar class="d-navbar" @titleClick="titleClick" ref="title"></detailNavBar>
        <Scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type= "3">
<!--          <div>{{$store.state.cartList}}</div>-->
          <div>
            <detailSwiper :topimages="topImages"></detailSwiper>
            <detailList :goods="goods"></detailList>
            <detailshops :shops="shops"></detailshops>
            <div class="store">进店逛逛</div>
            <detailGoodsList :goodsList="goodsList" @imageLoad="imageLoad"></detailGoodsList>
            <detailParams ref="params" :paramInfo="paramInfo" ></detailParams>
            <detailcomment :commentInfo="commentInfo" ref="comment"></detailcomment>
            <goodList :goods="recommend" ref="recommend"></goodList>
          </div>
        </Scroll>
        <backtop @click.native="backtop" v-show="isShowbacktop"></backtop>
        <detailBottomBar @addCart="addtoCart"></detailBottomBar>
        <toast :message="message" :Show="Show"></toast>
      </div>
</template>

<script>
import detailNavBar from "@/views/detail/detailnavbar/detailNavBar";
import {getdetail,goods,shops,goodsList,goodsParams,getRecommend} from "@/network/detail";
import detailSwiper from "@/views/detail/detailnavbar/detailSwiper";
import detailList from "@/views/detail/detailnavbar/detailList";
import detailshops from "@/views/detail/detailnavbar/detailshops";
import Scroll from "@/components/common/Scroll/Scroll";
import detailGoodsList from "@/views/detail/detailnavbar/detailGoodsList";
import detailParams from "@/views/detail/detailnavbar/detailParams";
import detailcomment from "@/views/detail/detailnavbar/detailcomment";
import goodList from "@/components/contents/goods/goodList";
import {debounce} from "common/untils";
import detailBottomBar from "@/views/detail/detailnavbar/detailBottomBar";
import backtop from "@/components/contents/backtop/backtop";
import { mapActions } from 'vuex';
import toast from "@/components/contents/toast/toast";
export default {
  name: "detail",
  components: {
    detailSwiper,
    detailNavBar,
    detailList,
    detailshops,
    Scroll,
    detailGoodsList,
    detailParams,
    detailcomment,
    goodList,
    detailBottomBar,
    backtop,
    toast
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shops: {},
      goodsList: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      topY: [0],
      titletopY: 0,
      currentIndex:null,
      isShowbacktop:false,
      message:'',
      Show:false
    }
  },
  created() {
    //1、请求iid
    this.iid = this.$route.params.iid;
    //2、发送iid
    getdetail(this.iid).then(res => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages
      // console.log(this.topImages);
      // 3、获取detail的数据
      this.goods = new goods(res.result.itemInfo, res.result.columns, res.result.shopInfo)
      // console.log(goods);
      this.shops = new shops(res.result.shopInfo)
      // console.log(shops);
      this.goodsList = new goodsList(res.result.detailInfo)
      // console.log(goodsList);
      this.paramInfo = new goodsParams(res.result.itemParams)
      // console.log(this.paramInfo);
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0]
      }
      // this.topY.push(this.$refs.params.$el.offsetTop);
      // this.topY.push(this.$refs.comment.$el.offsetTop);
      // this.topY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.topY);
    });
    //3、推荐数据获取
    getRecommend().then(res => {
      // console.log(res);
      this.recommend = res.data.list
      // console.log(this.recommend);
    });
    this.titletopY = debounce(() => {
      // this.topY.push(0)
      this.topY.push(this.$refs.params.$el.offsetTop);
      this.topY.push(this.$refs.comment.$el.offsetTop);
      this.topY.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.topY);
    }, 100)
  },
  updated() {
    this.titletopY()
  },
  methods: {
    backtop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    imageLoad() {
      let refresh = debounce(this.$refs.scroll.refresh, 500);
      refresh();
      // this.topY.push(this.$refs.params.$el.offsetTop);
      // // this.topY.push(this.$refs.comment.$el.offsetTop);
      // // this.topY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.topY);

    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.topY[index] + 44, 500)
    },
    contentScroll(position) {
      this.isShowbacktop = (-position.y ) > 1000;
      const positionY = -position.y
      // console.log(positionY);
      for (let i = 0; i < this.topY.length; i++) {
        if(this.currentIndex !==i){
          if (i < this.topY.length-1) {
            if (positionY > this.topY[i] && positionY < this.topY[i + 1]) {
              // console.log(i);
              this.currentIndex = i
              this.$refs.title.currentIndex = this.currentIndex
            }
          }
          else if (i === this.topY.length-1)
            if (positionY > this.topY[i]) {
              // console.log(i);
              this.currentIndex = i
              this.$refs.title.currentIndex = this.currentIndex
            }
        }
      }
    },
    ...mapActions(['addCart']),
    addtoCart(){
      const product = {};
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.newPrice = this.goods.price;
      product.lowPrice = this.goods.lowPrice;
      product.title = this.goods.title;
      // console.log(product);
      this.addCart(product).then(res =>{
        this.Show = true
        this.message = res
        setTimeout(()=>{
          this.Show = false
          this.message = ''
        },1500)
      })
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })
    },
    mounted() {
      //1、图片加载完成监听
      let refresh = debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on('detailitmeload', () => {
        refresh()
      });
    },
  }
}

</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
}
.d-navbar{
  position:relative;
  z-index: 9;
  /*color: #ffffff;*/
}
.content{
  height:calc(100% - 44px);
  overflow: hidden;
}
.store{
  text-align:center
}
</style>
