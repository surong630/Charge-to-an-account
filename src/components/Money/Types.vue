<template>
    <!-- 支出收入 -->
    <div>
      <ul class="types">
        <li :class="{selected: type === '-'}" @click="selectType('-')">支出</li>
        <li :class="{selected: type === '+'}" @click="selectType('+')">收入</li>
      </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component
  export default class Types extends Vue{
    type = '-'
    selectType(type: string) {
      if(type !== '-' && type !== '+') {
        throw new Error('传入的有误')
      }
      this.type = type
    }

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