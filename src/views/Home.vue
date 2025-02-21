<template>
  <div class="home">
    <div class="home-text">欢迎来到vue2！</div>
    <van-button type="primary" @click="yyy">主要按钮</van-button>
    <div>{{ count }}</div>
    <span @click="add">加</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    ...mapMutations("user", ["increment","setToken"]),
    add() {
      this.increment();
    },
    yyy(){
      this.setToken('')
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
