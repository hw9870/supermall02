<template>
  <div class="wrapper" ref="wrapperHome">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      Scroll:null
    }},
  mounted(){
    this.Scroll = new BScroll(this.$refs.wrapperHome,{
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true,
      // mouseWheel:true,

    });
    this.Scroll.on('scroll',(position) => {
      // console.log(position);
      this.$emit('scroll',position)
    });
    console.log(this.Scroll);
    this.Scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多');
      this.$emit('pullingUp')

    })
  },
  methods:{
    scrollTo(x,y,time){
      this.Scroll && this.Scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.Scroll && this.Scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
