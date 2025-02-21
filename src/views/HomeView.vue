<template>
  <div class="home">
    <div class="home-text">欢迎来到vue2！</div>
    <van-button type="primary">主要按钮</van-button>
    <div>{{ count }}</div>
    <span @click="add">加</span>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    count() {
      return this.$store.state.user.count;
    },
  },
  methods: {
    add() {
      this.$store.commit("user/increment");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  .home-text {
    font-size: 12px;
  }
}
</style>
