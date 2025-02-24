<template>
  <div id="app">
    <router-view ref="refChild" v-if="!routeInfo.meta.keep" />

    <keep-alive>
      <router-view ref="refChild" v-if="routeInfo.meta.keep" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeInfo: {},
    };
  },
  mounted() {},
  watch: {
    $route: {
      handler: function (to, from) {
        this.routeInfo = to;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
