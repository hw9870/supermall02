<template>
  <div v-if="Object.keys(commentInfo).lenght !==0"
       class="comment-info">
    <div class="info-header">
      <span class="header-title">用户评价</span>
      <span class="header-more">更多
        <i class="arrow-right">&gt;</i></span>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <div class="user-name">{{commentInfo.user.uname}}</div>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>

</template>

<script>
import {formatDate} from "@/common/untils";
export default {
  name: "detailcomment",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return{ }
      }
    }
  },
  filters: {
    showDate(value) {
      // 1.将时间戳转成Date对象（value * 1000）
      const date = new Date(value * 1000)
      // console.log(date.getMonth());
      // return date
      //2.将date进行格式化
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-info{
  background-color: #ffffff;
}
.info-header{
  display: flex;
  border-bottom: 2px solid rgba(100,100,100,.1);
}
.header-title{
  font-size: 18px;
  padding: 20px 10px;
}
.header-more{
  float: right;
  font-size: 14px;
  padding: 20px 0;
  padding-left: 60%;
}
.info-user{
  padding: 10px;
  display: flex;
}
.info-user img{
  border-radius: 50px;
  width: 40px;
  height: 40px;
}
.user-name{
  padding-top: 10px;
  padding-left: 10px;
  font-size: 15px;
}
.info-detail{
  padding: 0 5px 15px;
}
.info-detail p{
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-imgs{
  margin-top: 10px;
}
.info-imgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
