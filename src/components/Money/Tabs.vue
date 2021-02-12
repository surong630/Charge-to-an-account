<template>
  <div>
    <ul class="types">
      <li 
      :class="{selected: item.value === value, [classfix+'-name']: classfix}" 
      :style="{height: height}"
      v-for="item in dataSource"
      @click="selectType(item.value)"
      :key="item.name"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Vue, Component,Prop} from 'vue-property-decorator'
  @Component
  export default class Tabs extends Vue{
    // 用对象来进行存储支出和收入 再进行遍历 查看typeList
    @Prop(Array) dataSource?: [{name: string;value: string}];
    @Prop(String) classfix?: string;
    @Prop(String) value?: string;
    @Prop({type:String, default: '64px'}) height?: string
    selectType(value: string) {
      this.$emit('update:value', value)
    }
  }
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  background: #c4c4c4;
  font-size: 20px;
  li {
    display: flex;
    position: relative;
    // height: 64px;
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