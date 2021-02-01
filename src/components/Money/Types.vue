<template>
    <!-- 支出收入 -->
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
// 支出 收入
.types {
  display: flex;
  background: #c4c4c4;
  font-size: 20px;
  li {
    display: flex;
    position: relative;
    height: 64px;
    width: 50%;
    align-items: center;
    justify-content: center;
    &.selected::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      width: 100%;
      background: #000;
    }
  }
}

</style>