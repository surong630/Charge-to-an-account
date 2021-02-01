<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
// 容器flex
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  // 让内容撑满最多
  .content {
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
  }
</style>