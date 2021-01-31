<template>
  <div class="nav">
    <router-link class="item" to="/money">
      <Icon name="money" />
      记账
    </router-link>
    <router-link class="item" to="/Label">
      <Icon name="label" />
      标签
    </router-link>
    <router-link class="item" to="/Statistics">
      <Icon name="statistics" />
      图标</router-link
    >
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 4px rgba(0,0,0,.6);
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>