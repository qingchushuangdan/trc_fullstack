// 云函数入口文件
const cloud = require('wx-server-sdk')
// const rp = require('request-promise')// http模块
const cheerio = require('cheerio') // jquery用来获取DOM结构的
let charset = require('superagent-charset')//解决乱码
let superagent = require('superagent')//发起请求
charset(superagent) // 先把请求乱码问题解决
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://wap.biqiuge8.com/${event.url}`//访问云服务的地址
  const result = await superagent.get(serverUrl).charset('gb2312') //取决于网页的编码方式
  const data = result.text || '' //result.text返回的是html结构
  const $ = cheerio.load(data, { decodeEntities: false})

  let content = $('#chaptercontent').text()
  let contentH = $('#chaptercontent').html()
  // let sectionName = $()
  let catalog = $('#pb_mulu').attr('href')// 目录
  let pre = $('#pb_prev').attr('href') //上一页
  let next = $('#pb_next').attr('href') //下一页

  return {
    content,
    contentH,
    catalog,
    pre,
    next
  }

}