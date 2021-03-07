<template>
  <div>
      <cartListItem v-for="(item,index) in list" :key="index" :product="item"></cartListItem>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import cartListItem from "@/views/cart/childcomps/cartListitem";

export default {
  name: "cartList",
  components:{
    cartListItem
  },
  computed:{
    ...mapGetters({
      list:'cartList'
    })
  }
}
</script>

<style scoped>

</style>
