<template>
  <div>
    <Layout>
      <div>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>行</li>
          <li>住</li>
        </ul>
        <div>
          <button>新增标签</button>
        </div>
        <label for=""> 备注 <input type="text" /> </label>
      </div>
      <div>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>100</div>
      <div>
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
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>
    </Layout>
  </div>
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
</style>