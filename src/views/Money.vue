<template>
<div>
  <Layout>
    {{newtagsList}}
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
type Source = {
  tagsList: string[];
  type: string;
  num: string;
  notes: string;
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
    notes: ''
  }
  newtagsList: Source[] = []
  ontagsListChanged(val: []) {
    this.source.tagsList = val
  }
  onvalueChange(val: string) {
    this.source.notes = val
  }
  onnumberChange() {
    const newSource = JSON.parse(JSON.stringify(this.source))
    this.newtagsList.push(newSource)
  }
  @Watch('newtagsList')
  onnewtagsListchange() {
    localStorage.setItem('xxx', JSON.stringify(this.newtagsList))
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/base.scss";
</style>