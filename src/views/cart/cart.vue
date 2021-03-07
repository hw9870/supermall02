<template>
  <div class="cart">

    <NavBar class="cartNav">
      <div slot="center" class="center"> 购物车（{{length}}）</div>
    </NavBar>

    <Scroll class ="content" ref="scroll">
      <cartList ></cartList>
    </Scroll>

    <cartbottombar></cartbottombar>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {mapGetters} from "vuex";
import Scroll from "@/components/common/Scroll/Scroll";
import cartList from "@/views/cart/childcomps/cartList";
import cartbottombar from "@/views/cart/childcomps/cartbottombar";
export default {
  name: "cart",
  components:{
    NavBar,
    Scroll,
    cartList,
    cartbottombar

  },
  computed:{
    ...mapGetters({
      length:'cartLength'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.cartNav{
  background-color: #ff8198;
}
.center{
  font-size: 18px;
  color: #eeeeee;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>

