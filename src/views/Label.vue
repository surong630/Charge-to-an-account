<template>
  <Layout>
    <ul class="label-wrapper">
      <li v-for="tag in tags" :key="tag.id" class="item">
        <span>{{tag.name}}</span>
        <Icon name="right"></Icon>
      </li>
    </ul>
    <div class="createTag-wrapper">
      <button @click="createTag" class="createTag">添加标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const labelmodel = require('@/labelmodel.ts').default
labelmodel.fetch()
@Component

export default class Label extends Vue {
  tags = labelmodel.data
  createTag() {
    const name = window.prompt('请输入标签名')
    if(name) {
      const message = labelmodel.create(name)
      if(message === 'duplicated') {
        window.alert('重复了大哥')
      }else if(message === 'success') {
        window.alert('成功了')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.label-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  background: white;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 44px;
    border-bottom: 1px solid #DDDDE0;
    svg {
      color: #333333;
      width: 21px;
      height: 21px;
      margin-right: 16px;
    }
  }
}
.createTag {
  height: 40px;
  width: 98px;
  background: #767676;
  border-radius: 4px;
  color: white;
  padding: 9px 16px;
  &-wrapper {
    text-align: center;
    margin-top: 44-15px;
  }
}
</style>