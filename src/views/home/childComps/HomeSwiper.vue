<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      isLoad:false,
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoad){
        // console.log("+++++")
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
