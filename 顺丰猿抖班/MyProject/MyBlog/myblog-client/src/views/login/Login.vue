<template>
  <div class="star-login">
    <h1>登录</h1>
    <div class="login-wrapper">
      <div class="avatar" :style="`background-image: url(${avatar})`"></div>
      <div class="input-group">
        <label for="username">账号</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div class="input-group input-group-panel">
        <label for="userpwd">密码</label>
        <input type="password" id="userpwd" v-model="userpwd">
      </div>
      <p class="forgot-pwd">忘记密码</p>
      <div class="sign">登录</div>
    </div>
    <div class="register">新用户？点击这里注册吧！</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('./../../assets/img/raw_1512446140.jpeg')
    }
  }
}
</script>

<style lang="less" scoped>
input {
  border: 0;
  outline: none;
}
.star-login {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 1.28rem;
  overflow: hidden;
  h1 {
    margin-top: 1.12rem;
    height: 0.6933rem;
    line-height: 0.6933rem;
  }
}
</style>