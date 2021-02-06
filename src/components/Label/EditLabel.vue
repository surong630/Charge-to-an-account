<template>
  <Layout>
    <div class="icon-wrapper">
      <Icon @click.native="back" class="left" name="left"></Icon>
      <span class="edit">编辑标签</span>
      <span class="right"></span>
    </div>
    <div class="notes-wrapper">
      <Notes :value="tag.name" @update:value="update" name="标签名" placeholder="请输入标签名"></Notes>
    </div>
    <div class="button-wrapper">
      <tag-button @click.native="remove">删除标签</tag-button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import TagButton from '@/components/TagButton.vue'
  import Notes from '@/components/Money/Notes.vue'
  @Component({
    components: {
      TagButton,
      Notes
    }
  })
  export default class EditLabel extends Vue {
    tag?: datas
    created() {
      // 找到localStorage中是否有id,没有就跳转到404
      const id = this.$route.params.id
      // 找到label中的全局数据
      // TODO
      // const tags = [store.tagList]
      // const tag = tags.filter((t: datas) => {return t.id === id}
      // )[0]
      // if(tag) {
      //   this.tag = tag
      // }else {
      //   this.$router.replace('/404')
      // }
    }
    update(val: string) {
      if(this.tag) {
        console.log('edit');
        // TODO
        // store.updateTag(this.tag.id,val)
      }
    }
    remove() {
      if(this.tag) {
        // TODO
        // store.removeTag(this.tag.id)
        this.$router.back()
      }
    }
    back() {
      this.$router.back()
    }
  }
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: flex;
  align-items: center;
  height: 48px;
  justify-content: space-between;
  background: white;
  padding-left: 17px;
  .left {
    height: 20px;
    width: 20px;
  }
  .right {
    height: 20px;
    width: 20px;
  }
}
.notes-wrapper {
  margin-top: 9px;
  .notes{
    background: white;
  }
}
.button-wrapper{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>