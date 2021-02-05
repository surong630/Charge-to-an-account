<template>
<div>
  <Layout classFix="money">
    <number :number.sync="source.num" @update:number="onnumberChange"></number>
    <types :type.sync="source.type"></types>
    <div class="formNotes">
      <notes name="备注" palceholder="在这里添加备注" @update:value="onvalueChange"></notes>
    </div>
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
const newtagsListmodel = require('@/models/newtagsListmodel.ts').default
const labelmodel = require('@/models/labelmodel.ts').default
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
  tagsList =  labelmodel.fetch()
  source: Source = {
    tagsList: [],
    type: '-',
    num: '0',
    notes: '',
    data: new Date()
  }
  newtagsList: Source[] = newtagsListmodel.fetch()
  ontagsListChanged(val: []) {
    this.source.tagsList = val
  }
  onvalueChange(val: string) {
    this.source.notes = val
  }
  onnumberChange() {
    newtagsListmodel.create(this.source)
  }
  @Watch('newtagsList')
  onnewtagsListchange() {
    newtagsListmodel.save(this.newtagsList)
  }
  // 上面的都是处理ok后的数据的
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/base.scss";
.formNotes {
  padding: 8px 0;
}
</style>