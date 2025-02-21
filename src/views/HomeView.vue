<template>
  <div class="home">
    <div class="home-text">欢迎来到vue2！</div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style lang="scss" scoped>
.home {
  .home-text {
    font-size: 12px;
  }
}
</style>
