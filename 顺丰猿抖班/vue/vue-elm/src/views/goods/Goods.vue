<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" @click="selectMenu(index)" v-for="(item, index) in goods" :key="index" :class="{'current': currentIndex === index}">
            <span class="text">
              <span class="icon"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper"></div>
    </div>
    <!-- 购物车 -->
  </div>
</template>

<script>
import { getGoods } from '@/api'
export default {
  data() {
    return {
      goods: [],
      currentIndex: 0
    }
  },
  created() {
    getGoods().then(res => {
      console.log(res);
      this.goods = res
    })
  },
  methods: {
    selectMenu(idx) {
      this.currentIndex = idx
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
.goods
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper
    flex 0 0 80px
    // width: 80px;
    background: #f3f5f7;
    .menu-item
      display table
      width: 56px;
      height: 54px;
      padding 0 12px
      line-height: 14px;
      align-items: center;
      font-size: $fontsize-small;
      &.current
        background: #fff;
        font-weight: 700;
</style>