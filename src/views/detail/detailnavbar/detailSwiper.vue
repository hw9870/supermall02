<template>
  <div>
    <Swiper class="Swiper1">
      <SwiperItem v-for="(item,index) in topimages" :key="index" >
         <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'
export default {
  name: "detailSwiper",
  components:{
    Swiper,
    SwiperItem,
  },
  props: {
    topimages: {
      type: Array,
      default() {
        return []
      },
    },
  },
   // created() {
   //   console.log(this.topimages);
   // }
}
</script>

<style scoped>
.Swiper1{
  height: 300px;
  overflow: hidden;
}
</style>
