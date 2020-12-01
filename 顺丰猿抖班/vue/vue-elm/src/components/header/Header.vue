<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2944606985,3722907313&fm=11&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>

        <div class="support">
          <support-ico :size="1" :type="0"></support-ico>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景 -->
    <div class="background">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2944606985,3722907313&fm=11&gp=0.jpg" alt="" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
import SupportIco from "@/components/support-ico/Support-ico";
export default {
  components: {
    SupportIco,
  },
};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';
.header
  position: relative;
  overflow: hidden;
  color $color-white
  background $color-background-ss
  .content-wrapper
    position: relative;
    display flex
    padding: 24px 12px 18px 24px;
    align-items: center;
    .avatar
      flex 0 0 64px
      padding-right: 16px;
      img
        border-radius: 2px;
    .content
      flex 1
      .title
        display flex
        align-items: center;
        margin-bottom: 8px;
        .brand
          width: 30px;
          height: 18px;
          bg-image('brand')
          background-size 30px 18px
          background-repeat: no-repeat;
          // vertical-align middle
        .name
          margin-left: 6px;
          font-size $fontsize-large
          font-weight: bold;
          // line-height: 1;
          // vertical-align middle
      .description
        font-size: $fontsize-small;
        margin-bottom: 8px;
        line-height: 12px;
      .support
        display flex
        align-items: center;
        &-ico
          margin-right: 4px;
        .text
          line-height: 12px;
          font-size: $fontsize-small-s;
    .support-count
      position absolute
      right 12px
      bottom 14px
      display flex
      align-items center
      padding 0 8px
      height 24px
      line-height 24px
      text-align center
      border-radius 14px
      background $color-background-sss
      .count
        font-size $fontsize-small-s
      .icon-keyboard_arrow_right
        margin-left 2px
        line-height 24px
        font-size $fontsize-small-s
  .bulletin-wrapper
    position relative
    display flex
    align-items: center;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background-color: $color-background-sss;
    .bulletin-title
      flex 0 0 22px
      width: 22px;
      height: 12px;
      margin-right: 4px;
      bg-image('bulletin')
      background-size: 22px 12px;
      background-repeat: no-repeat;
    .bulletin-text
      flex 1
      white-space nowrap
      text-overflow ellipsis
      overflow: hidden;     
      font-size: $fontsize-small-s;
    .icon-keyboard_arrow_right
      flex 0 0 10px
      width: 10px;
      font-size $fontsize-small-s
  .background
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index -1
    filter blur(10px)
</style>