<template>
  <Layout>
    <div class="label-wrapper">
      <router-link v-for="tag in tags" :key="tag.id" class="item" :to="`/label/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <TagButton @click.native="createTag">添加标签</TagButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TagButton from '@/components/TagButton.vue'
import store from '@/store/index2'
@Component({
  components: {TagButton}
})

export default class Label extends Vue {
  tags = store.tagList
  createTag() {
    // 重复不添加
    const name = window.prompt('请输入标签名')
    if(name) {
      store.createTag(name)
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
  .item {
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
.createTag-wrapper {
    text-align: center;
    margin-top: 44-15px;
  }
</style>