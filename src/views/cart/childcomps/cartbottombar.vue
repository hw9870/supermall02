<template>
  <div class="bottomBar">
    <div class="check-content">
      <carttick class="check-button" :ischeck="SelectAll"
      @click.native="allClick"></carttick>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calc" >
      去计算({{checkLength}})
    </div>
    <toast :message="message" :Show="Show"></toast>
  </div>

</template>

<script>
import carttick from "@/components/contents/carttick/carttick";
import toast from "@/components/contents/toast/toast";
export default {
  name: "cartbottombar",
  components:{
    carttick,
    toast
  },
  data(){
    return{
      message:'',
      Show:false,
    }
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.check}).reduce((preTotal,item) =>{
        return  preTotal + item.lowPrice * item.count
      },0).toFixed(2)
      // return '￥' + this.$store.state.cartList.filter(item => {
      //   return item.check
      // }).reduce((preValue, item) => {
      //   return preValue + item.lowPrice * item.count
      // }, 0).toFixed(2)

    },
    checkLength() {
      return this.$store.state.cartList.filter(item => {
        return item.check}).length
    },
    SelectAll(){
      if((this.$store.state.cartList.length === 0)){return false}
      for( let item of this.$store.state.cartList){
        if(!item.check){
          return false
        }
      }
      return true
    },

  },
methods:{
  allClick(){
    if(this.SelectAll){
      return this.$store.state.cartList.forEach(item => item.check = false)
    }else{
      return this.$store.state.cartList.forEach(item =>item.check = true)
    }
  },
  calc(){
      if(!this.SelectAll){
        this.Show = true;
        this.message = '请添加商品'
        setTimeout(()=>{
          this.Show = false;
        },2000)
      }
    // this.Show = true;
    //   this.message = '请添加商品'
    //   setTimeout(()=>{
    //     this.Show = false;
    //   },2000)
  }
}
}
</script>

<style scoped>
.bottomBar{
  background-color: #eeeeee;
  height: 40px;
  line-height: 40px;
  display: flex;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price{
  margin-left: 30px;
}
.calculate{
  width: 90px;
  height: 30px;
  background: #ff8198;
  border-radius: 25px;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-left: 25px;
  margin-top: 5px;
}
</style>
