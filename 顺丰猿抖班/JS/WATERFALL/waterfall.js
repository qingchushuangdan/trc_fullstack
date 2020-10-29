window.onload = function() {
    imgLocation('container', 'box')
}

function imgLocation(parent, content){
    // 获取到当前有多少张图片要摆放
    var cparent = document.getElementById(parent)
    // var ccontent = document.querySelectorAll(content)
    var ccontent = getChildElement(cparent, content)
    // console.log(ccontent)

    // 获取可视区宽度(浏览器窗口宽度)，图片宽度(box宽度)，一行能放几张图片
    var imgWidth = ccontent[0].offsetWidth
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    // cparent.style.width = `${imgWidth * num}px` 
    cparent.style.cssText = `width: ${imgWidth * num}px` // 设置一个css属性

    // 拿到第二行的第一张图片，放到第一行高度最小的图片下面
    var BoxHeightArr = []
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight
        } else{
          var minHeight = Math.min.apply(null, BoxHeightArr)//将math里面的min方法借给数组去用
          // console.log(minHeight)
          var minIndex = getMinHeightLocation(BoxHeightArr, minHeight)
          ccontent[i].style.position = 'absolute'
          ccontent[i].style.top = minHeight + 'px'
          ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
          BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
        }
    }
    // console.log(BoxHightArr)
}

// 增强容错性
function getChildElement(parent, content){
    var contentArr = []
    var allContent = parent.getElementsByTagName('*')
    // console.log(allContent)
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i])
        }
    }
    return  contentArr
}

function getMinHeightLocation(BoxHeightArr, minHeight){
  for(var i = 0; i < BoxHeightArr.length; i++){
    if(BoxHeightArr[i] === minHeight){
      return i
    }
  }
}