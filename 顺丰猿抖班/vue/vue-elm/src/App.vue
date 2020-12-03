<template>
  <div class="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>  
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { getSeller } from '@/api'
import qs from 'query-string'
export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components: {
    Header
  },
  created () {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller)
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl';
.tab
  width: 100%;
  display: flex;
  height: 36px;
  line-height: 36px;
  .tab-wrapper
    flex: 1;
    text-align: center;
    a
      width: 100%;
      display: inline-block;
      color #666
      text-decoration: none;
    .router-link-exact-active
      color $color-red
      border-bottom: 2px solid $color-red;
  
</style>