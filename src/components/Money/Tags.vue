<template>
    <!-- 标签 -->
    <div class="tags">
      <ul class="current">
        <li 
        v-for="item in tagList"
        :key="item.id"
        @click="toggle(item)"
        :class="{actived:currentList.indexOf(item.name) >=0, tag: true}">
          <Icon name="card"></Icon>
          <span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
  import { Component} from 'vue-property-decorator'
  import {mixins} from 'vue-class-component'
  import TagHelper from '@/mixins/TagHelper'
  @Component
  export default class Tags extends mixins(TagHelper) {
    get tagList(){ 
        return this.$store.state.tagList
    }
    beforeCreate() {
      this.$store.commit('fetchTag')
    }
    currentList: string[] = [];
    // 是否选中标签
    toggle(item: {id: string; name: string}) {
      console.log(this.tagList);
      
      const index = this.currentList.indexOf(item.name);
      if(index<0) {
        this.currentList.push(item.name)
      }else {
        this.currentList.splice(index, 1)
      }
      console.log(this.currentList);
      this.$emit('check', this.currentList)
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
      display: flex;
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