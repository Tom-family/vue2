module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5, // 设计稿宽度 / 10，例如设计稿宽度为 375px 时，rootValue 为 37.5
      propList: ["*"], // 需要转换的属性列表，* 表示所有属性
      selectorBlackList: [".norem"], // 忽略的类名，不转换 .norem 开头的类名
      minPixelValue: 2, // 小于 2px 的值不转换
    },
  },
};
