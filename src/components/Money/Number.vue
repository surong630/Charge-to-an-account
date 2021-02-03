<template>
    <!-- 数字 -->
    <div class="numberPad">
      <div class="output">{{output}}</div>
      <div class="buttons">
        <button @click="changeOutput">1</button>
        <button @click="changeOutput">2</button>
        <button @click="changeOutput">3</button>
        <button @click="del">删除</button>
        <button @click="changeOutput">4</button>
        <button @click="changeOutput">5</button>
        <button @click="changeOutput">6</button>
        <button @click="empty">清空</button>
        <button @click="changeOutput">7</button>
        <button @click="changeOutput">8</button>
        <button @click="changeOutput">9</button>
        <button @click="ok" class="ok">OK</button>
        <button @click="changeOutput" class="zero">0</button>
        <button @click="changeOutput">.</button>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'
  @Component // 装饰器
  export default class NumberPad extends Vue{
    @Prop(String) number?: string;
    output =  '0';
    changeOutput(event: MouseEvent) {
      if(this.output.length === 16) {
        return
      }
      const target = event.target as HTMLButtonElement;
      const input = target.textContent!;
      // 判断开头是否为0
      if(this.output.indexOf('0') === 0) {
        // 判断点击是否为.
        if(input === '.') {
          if(this.output.indexOf('.') >=0) {
            return
          }
        }else if(this.output.indexOf('.') === 1) {
          this.output += input;
          return;
        }else{
          this.output = input;
          return;
        }
      }
      if(input === '.') {
        if(this.output.indexOf('.') >=0) {
          return
        }
      }
      this.output += input;
    }
    del(){
      if(this.output.length>0) {
        this.output = this.output.substring(0,this.output.length-1)
        if(this.output.length === 0) {
          this.output = '0'
        }
      }
    }
    empty() {
      this.output = '0';
    }
    ok () {
      this.$emit('update:number', this.output);
      this.output = '0'
    }
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
      color: black;
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