<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// 去除默认样式
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/base.scss';
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-family: $font-hei;
}
</style>
