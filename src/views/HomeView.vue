<template>
  <div class="home">
    <div class="home-text">欢迎来到vue2！</div>
    <div class="aaa"></div>
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
  .aaa{
    width: 300px;
    height: 300px;
    background: red;
}
}
</style>
