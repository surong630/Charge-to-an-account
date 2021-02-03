<template>
  <Layout>
    <number></number>
    <types :type.sync="type"></types>
    <notes></notes>
    <tags :tagList.sync="tagsList"></tags>
  </Layout>
</template>

<script>
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
export default {
  components: { Notes, Number, Tags, Types },
  data() {
    return {
      name: "Moneys",
      tagsList: ['衣','食','住','行'],
      type: '-'
    };
  },
  updated() {
    console.log(this.type);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/base.scss";


</style>