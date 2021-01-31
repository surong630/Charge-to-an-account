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
  .content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    flex: 1;
  }
</style>