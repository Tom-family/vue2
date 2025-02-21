<template>
  <div class="home">
    <div>
      <input type="text" v-model="userNamen" />
    </div>
    <div>
      <input type="text" v-model="password" />
    </div>
    <van-button type="primary" size="small" @click="tapLogin">Login</van-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {
      userNamen: "admin",
      password: "admin123",
    };
  },
  computed: {
    count() {
      return this.$store.state.user.count;
    },
  },
  methods: {
    ...mapMutations("user", ["setToken"]),
    tapLogin() {
      this.setToken(123);
      this.$router.push("/home");
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
