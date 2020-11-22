// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')// http模块
const cheerio = require('cheerio') // jquery用来获取DOM结构的
let charset = require('superagent-charset')//解决乱码
let superagent = require('superagent')//发起请求
charset(superagent) // 先把请求乱码问题解决
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://wap.biqiuge8.com/" //访问云服务的地址
  const result = await superagent.get(serverUrl).charset('gb2312') //取决于网页的编码方式
  const data = result.text || '' //result.text返回的是html结构
  const $ = cheerio.load(data)

  // 热门推荐
  let hotList = $('.hot').find('.image') //先找到大概的结构
  let hotData = []
  for (let i = 0; i < hotList.length; i++){
    let obj = {}
    obj['url'] = $(hotList[i]).find('a').attr('href')
    obj['imgurl'] = $(hotList[i]).find('img').attr('src')
    obj['name'] = $(hotList[i]).find('img').attr('alt')
    obj['author'] = $(hotList[i]).next().find('dt').find('span').text()
    obj['detail'] = $(hotList[i]).next().find('dd').text()
    hotData.push(obj) //把获取到的数据全部push给hotData数组
  }

  // 分类推荐
  let classifyList = $('.block')
  let classifyData = []
  for (let i = 0; i < classifyList.length; i++) { //外部循环
    let obj = {}
    let childData = []
    let childDom = $(classifyList[i]).find('.lis').find('li')
    for (let j = 0; j < childDom.length; j++) { //内部循环
      let childObj = {}
      childObj['name'] = $(childDom[j]).find('.s2').find('a').text()
      childObj['url'] = $(childDom[j]).find('.s2').find('a').attr('href')
      childObj['author'] = $(childDom[j]).find('.s3').text()
      childData.push(childObj)
    }
    obj['classifyList'] = $(classifyList[i]).find('h2').text()
    obj['data'] = childData
    classifyData.push(obj)

  }
  return {
    hotData,
    classifyData //返回这两个数据
  }
}