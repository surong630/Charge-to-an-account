<template>
    <!-- 标签 -->
    <div class="tags">
      <div class="new">
        <button @click="addTag">新增标签</button>
      </div>
      <ul class="current">
        <li 
        v-for="item in tagList"
        :key="item.id"
        @click="toggle(item)"
        :class="{actived:currentList.indexOf(item) >=0}">
          {{item.name}}
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator'
  const labelmodel = require('@/models/labelmodel').default
  console.log(labelmodel);
  
  @Component
  export default class Tags extends Vue {
    @Prop() tagList: string[] | undefined;
    currentList: string[] = [];
    // 是否选中标签
    toggle(item: string) {
      const index = this.currentList.indexOf(item);
      if(index<0) {
        this.currentList.push(item)
      }else {
        this.currentList.splice(index, 1)
      }
      this.$emit('update:check', this.currentList)
    }
    // 新增标签
    addTag() {
      let tag = window.prompt('请输入你需要添加的标签');
      if(tag === '' || tag === null) {
        tag = window.prompt('请输入正确的标签');
      }else if(this.tagList) {
        // 将tag存入到localStorage中
      window.createTag(tag)
      }
    }
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
  background: white;
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
      &.actived {
        background: darken(green, .4);
        color: white;
      }
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