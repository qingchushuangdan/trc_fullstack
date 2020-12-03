import { get } from "./helpers.js";

const getSeller = get('api/seller') // 获取商家信息的接口
const getGoods = get('api/goods') // 获取商品的接口

export {
  getSeller,
  getGoods
}