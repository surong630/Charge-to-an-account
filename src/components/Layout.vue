<template>
  <div class="layout-wrapper">
    <div class="content" :class="classFix">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
  export default {
    props:['classFix']
  }
</script>

<style lang="scss" scoped>
// 容器flex
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }
  // 让内容撑满最多
  .money {
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
  }
</style>