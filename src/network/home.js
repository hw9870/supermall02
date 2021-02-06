//问题点1：导入一个方法用{}？？？
import {request} from "@/network/request";
export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){
      return request({
        //要更换新接口
        url:'/home/data',
        params:{
          type,
          page
        }
      })
}
