<template>
  <Layout>
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
    <!-- 支出收入 -->
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <!-- 备注 -->
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" />
    </label>

    <!-- 标签 -->
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      name: "Moneys",
    };
  },
};
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
// 备注
.notes {
  display: block;
  background: #f5f5f5;
  display: flex;
  font-size: 14px;
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  input {
    flex: 1;
    background: transparent;
    border: none;
    line-height: 64px;
    height: 64px;
  }
}
// 标签
.tags {
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid red;
  flex: 1;
  .current {
    $h: 24px;
    $w: 48px;
    display: flex;
    flex-wrap: wrap;
    li {
      background: #d7d7d7;
      height: $h;
      line-height: $h;
      width: 48px;
      text-align: center;
      border-radius: $w/2;
      margin-right: 24px;
      margin-top: 5px;
    }
  }
  .new {
    padding: 10px 0;
    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #c4c4c4;
    }
  }
}
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