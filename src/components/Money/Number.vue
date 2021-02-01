<template>
    <!-- 数字 -->
    <div class="numberPad">
      <div class="output">300</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/base.scss";
// 数字
.numberPad {
  .output {
    text-align: right;
    height: 72px;
    font-size: 36px;
    padding: 9px 16px;
    line-height: 72px;
    box-shadow: 1px 0px 4px rgb(0 0 0 / 80%);
  }
  .buttons {
    $bg: #f2f2f2;
    @extend %clearFix;
    button {
      float: left;
      width: 25%;
      height: 64px;
      &.zero {
        width: 25 * 2%;
      }
      &.ok {
        height: 64px * 2;
        float: right;
      }
      &:nth-child(1) {
        background: darken($bg, 4%);
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 8%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 12%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 16%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 20%);
      }
      &:nth-child(14) {
        background: darken($bg, 24%);
      }
      &:nth-child(12) {
        background: darken($bg, 28%);
      }
    }
  }
}
</style>