<template>
    <!-- 备注 -->
    <label class="notes">
      <span class="name">{{name}}</span>
      <input 
      type="text" 
      placeholder="请在这里输入"
      v-model="value"/>
    </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component,Watch,Prop } from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    value = '';
    @Prop() name!: string;
    @Prop() placeholder!: string;
    // 监听值变化 传回去
    @Watch('value')
    onvalueChange(value: string) {
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
    line-height: 44px;
    height: 44px;
    padding-right: 16px;
  }
}

</style>