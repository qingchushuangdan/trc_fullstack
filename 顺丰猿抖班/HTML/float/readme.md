# 浮动
使文本脱离文档流

# 清除浮动
1. 在最后一个浮动元素后面增加一个冗余元素，给它设置clear：both;
2. 在父元素增加伪类
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    }
3. bfc(Block Formatting Context)

# margin 重叠
1. bfc

