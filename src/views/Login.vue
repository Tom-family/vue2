<template>
  <div class="home">
    <div>
      <input type="text" v-model="account" />
    </div>
    <div>
      <input type="text" v-model="pwd" />
    </div>
    <van-button type="primary" size="small" @click="tapLogin">Login</van-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { login } from "@/api/user.js";
export default {
  name: "HomeView",
  data() {
    return {
      account: "13812345678",
      pwd: "123456",
    };
  },
  computed: {
    count() {
      return this.$store.state.user.count;
    },
  },
  methods: {
    ...mapMutations("user", ["setToken"]),
    async tapLogin() {
      const { account, pwd } = this;
      let params = {
        account: account,
        pwd: pwd,
      };
      let res = await login(params);
      console.log(res)
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
