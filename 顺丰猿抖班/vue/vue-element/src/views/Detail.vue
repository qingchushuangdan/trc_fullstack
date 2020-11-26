<template>
  <div class="detail">
    这是{{$route.params.username}}的个人信息
    <button @click="goBack">返回首页</button>
  </div>
</template>

<script>
export default {
  methods:{
    goBack() {
      this.$router.push({path: '/', query: { id: 123}})
      // this.$router.push({name: 'Home',params: { id: 1234}})

    }
  }
}
</script>

<style>

</style>