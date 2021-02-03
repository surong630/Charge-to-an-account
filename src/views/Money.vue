<template>
<div>
  <Layout>
    <number :number.sync="source.num" @update:number="onnumberChange"></number>
    <types :type.sync="source.type"></types>
    <notes @update:value="onvalueChange"></notes>
    <tags :tagList.sync="tagsList" @update:check="ontagsListChanged"></tags>
  </Layout>
</div>
</template>

<script lang="ts">
import { Vue, Component,Watch } from 'vue-property-decorator'
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import { extend } from 'vue/types/umd';
const model = require('@/model.ts').default
console.log(model);
type Source = {
  tagsList: string[];
  type: string;
  num: string;
  notes: string;
  data?: Date;
}
@Component({ components:{
  Notes, Number, Tags, Types
} })

export default class Money extends Vue{
  tagsList =  ['衣','食','住','行']
  source: Source = {
    tagsList: [],
    type: '-',
    num: '0',
    notes: '',
    data: new Date()
  }
  newtagsList: Source[] = model.fetch()
  ontagsListChanged(val: []) {
    this.source.tagsList = val
  }
  onvalueChange(val: string) {
    this.source.notes = val
  }
  onnumberChange() {
    const newSource = model.clone(this.source)
    this.newtagsList.push(newSource)
  }
  @Watch('newtagsList')
  onnewtagsListchange() {
    model.save(this.newtagsList)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/base.scss";
</style>