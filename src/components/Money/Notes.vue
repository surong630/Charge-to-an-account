<template>
    <!-- 备注 -->
    <label class="notes">
      <span class="name">备注</span>
      <input 
      type="text" 
      placeholder="在这里添加备注"
      v-model="value"/>
    </label>
</template>

<script>
  import Vue from 'vue';
  import { Component,Watch } from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    value = '';
    @Watch('value')
    onvalueChange(val) {
      this.$emit('update:value', this.value)
    }
  }
</script>

<style lang="scss" scoped>

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
          padding-right: 16px;
  }
}

</style>