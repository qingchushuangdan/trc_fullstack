// 云函数入口文件
const cloud = require('wx-server-sdk')
// Promise es6 node
const rp = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const res = rp('https://api.douban.com/v2/book/isbn' + event.isbn)
  .then(html => {

  })
  .catch(err => {
    console.log(err);
  })
  return res
}