<template>
  <div class="nav">
    <router-link class="item" to="/money" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link class="item" to="/Label" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link class="item" to="/Statistics" active-class="selected">
      <Icon name="statistics" />
      图标</router-link
    >
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import '~@/assets/style/base.scss';
.nav {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 4px rgba(0,0,0,.6);
  padding: 1.5px 0 ;
  font-size: 12px;
  // router-link
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
  // 选中后 icon的颜色
  .selected {
    .icon {
      color: $highlight;
    }
  }
}
</style>