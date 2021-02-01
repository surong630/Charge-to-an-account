<template>
  <div class="content-wrapper">
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
  .content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  // 让内容撑满最多
  .content {
    flex: 1;
  }
</style>