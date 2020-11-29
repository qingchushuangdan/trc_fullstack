<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{localTime}}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">南昌市</p>
      <p class="weather">阴</p>
      <h2 class="temp"><em>9</em>℃</h2>
      <div class="detail">
        <span>风力:≤3</span> | <span>风向:西北</span> | <span>空气湿度: 75%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      localTime: ''
    }
  },
  created () {
    setInterval(() => {
      this.localTime = this.getLocalTime()
    }, 1000)
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString()
    },
    initMap () { // 获取当前城市

    },
    getCurrentCityData () { // 查询天气
       
    }
  }
}
</script>

<style lang="less">
.container{
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: white;
  .nav{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info{
    .temp{
      font-size: 26px;
      em{
        font-size: 34px;
        font-style: normal;
      }
    }
  }
}
</style>