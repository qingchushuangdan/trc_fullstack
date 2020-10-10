function Block(){
    this.upDivWrap = null
    this.downDivWrap = null
    this.downHeight = baseObj.randomNum(0, 150)
    this.gapHeight = baseObj.randomNum(150, 160)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    //生成管道
}