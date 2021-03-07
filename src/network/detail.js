import {request} from './request'
export function getdetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class goods{
    constructor(itemInfo,columns,shopInfo) {
      this.title = itemInfo.title;
      this.price = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discountDesc = itemInfo.discountDesc;
      this.columns = columns;
      this.services = shopInfo.services;
      this.lowPrice = itemInfo.lowPrice
    }
}
export class shops{
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.store = shopInfo.name;
    this.csells = shopInfo.cSells;
    this.cgoods = shopInfo.cGoods;
    this.score = shopInfo.score

  }
}
export class goodsList{
  constructor(detailInfo) {
    this.desc = detailInfo.desc;
    this.key = detailInfo.detailImage[0].key;
    this.list = detailInfo.detailImage[0].list
  }
}
export class goodsParams{
  constructor(itemParams) {

    this.infos = itemParams.info.set;
    // this.image = itemParams.info.images ? itemParams.info.images[0] : '';
    // this.infos = itemParams.info.set;
    // this.sizes = itemParams.rule.tables;
    this.sizes = itemParams.rule.tables;
  }
}
