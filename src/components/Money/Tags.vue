<template>
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
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/base.scss";
// 标签
.tags {
  font-size: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
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
      text-align: center;
      border-radius: $h/2;
      margin-right: 12px;
      margin-top: 5px;
      padding: 0 16px;
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
</style>