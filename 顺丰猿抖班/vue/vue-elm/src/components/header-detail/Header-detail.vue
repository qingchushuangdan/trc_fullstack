<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">

          <h1 class="name">{{seller.name}}</h1>
          <div class="start-wrapper">
            <!-- 星星 -->
          </div>

          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>

          <ul class="supports">
            <li class="supports-item" v-for="(support, index) in seller.supports" :key="index">
              <SupportIco :size=2 :type="support.type"></SupportIco>
              <span class="text">{{support.description}}</span>
            </li>
          </ul>

          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>

          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>

        </div>
      </div>
      <div class="detail-close" @click.stop="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from '@/components/support-ico/Support-ico'
export default {
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    SupportIco
  },
  methods: {
    hide() {
      this.$emit('hide', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
.header-detail
  position fixed    //相对屏幕做固定定位
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index 100
  overflow auto   //超出则自动
  background $color-background-s
  color $color-white
  opacity 1
  backdrop-filter blur(10px)    //背景图虚化
  &.fade-enter, &.fade-leave-to
    opacity 0
    background $color-background
  &.fade-enter-active, &.fade-leave-active
    transform all 0.5s
  .detail-wrapper
    display inline-block
    width: 100%;
    min-height 100%
    .detail-main
      margin-top: 64px;
      padding-bottom: 64px;
      .name
        line-height: 16px;
        text-align center
        font-size $fontsize-large
        font-weight: bold;
      .start-wrapper
        margin-top: 8px;
        padding: 2px 0;
        text-align center
      .title
        display flex
        width: 80%;
        margin 28px auto 24px auto
        .line
          flex 1
          position: relative;   //相对于它自己文档流所处的位置定位
          border-bottom: 1px solid rgba(255,255,255,0.2);
          top -7px
        .text
          padding: 0 12px;
          font-weight: 700;
          font-size $fontsize-medium
      .supports
        width 80%
        margin 0 auto
        &-item
          display flex
          align-items center
          padding 0 12px
          margin-bottom 12px
          &:last-child
            margin-bottom 0
          .text
            line-height 16px
            font-size $fontsize-small
            margin-left 6px
      .bulletin
        width: 80%;
        margin: 0 auto;
        .content
          padding: 12px;
          line-height 24px
          font-size $fontsize-small
  .detail-close
    position: relative;
    width: 30px;
    height: 30px;
    margin: -64px auto 0 auto;
    font-size: $fontsize-large-xxxx;
    clear: both;
</style>