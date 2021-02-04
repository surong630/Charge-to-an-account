<template>
  <Layout>
    编辑
  </Layout>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  const labelmodel = require('@/labelmodel').default
  @Component
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id
      labelmodel.fetch()
      const tags = labelmodel.data
      console.log(tags);
      const tag = tags.filter(t => {return t.id === id}
      )
      if(tag.length > 0) {
        console.log(tag);
      }else {
        this.$router.replace('/404')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>