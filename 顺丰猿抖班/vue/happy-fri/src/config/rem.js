// 读取到用户的设备宽度并设置项目的根字体大小
(function(doc, win){
  let docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function() {
    let clienWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 20 * (clienWidth / 375) + 'px' // 根字体变小
  }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);//大小发生变化的时候
  doc.addEventListener('DOMContentLoaded', recalc)
})(document, window)