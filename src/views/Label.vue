<template>
  <Layout>
    <div class="title">
      标签
    </div>
    <div class="label-wrapper">
      <router-link v-for="tag in tags" :key="tag.id" class="item" :to="`/label/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="label-wrapper" v-if="tags.length ===0">
      暂时没有标签了快来加一个
    </div>
    <div class="createTag-wrapper">
      <TagButton @click.native="createTag">添加标签</TagButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component} from "vue-property-decorator";
import {mixins} from 'vue-class-component'
import TagHelper from '@/mixins/TagHelper'
import TagButton from '@/components/TagButton.vue'
@Component({
  components: {TagButton}
})

export default class Label extends mixins(TagHelper) {
  get tags() {
      return this.$store.state.tagList
    }
  beforeCreate() {
      this.$store.commit('fetchTag')
    }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 30px;
}
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