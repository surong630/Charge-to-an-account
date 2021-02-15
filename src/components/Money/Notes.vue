<template>
    <!-- 备注 -->
    <label class="notes">
      <span class="name">{{name}}</span>
      <input 
      :type="type" 
      placeholder="请在这里输入"
      :value="value"
      @input="onValueChanged($event.target.value)"
      />
    </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component,Watch,Prop } from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    @Prop() value!: string;
    @Prop() name!: string;
    @Prop() placeholder!: string;
    @Prop() type!: string;
    // 监听值变化 传回去
    onValueChanged(value: string) {
      this.$emit('update:value', value);
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