<template>
<div>
  <Layout classFix="money">
    <number :number.sync="source.num" @update:number="onnumberChange"></number>
    <Tabs :dataSource="typeList" :value.sync="source.type"></Tabs>
    <div class="formNotes">
      <notes name="备注" palceholder="在这里添加备注" @update:value="onvalueChange"></notes>
    </div>
    <tags @check='check'></tags>
  </Layout>
</div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Tags from '@/components/Money/Tags.vue';
import Tabs from '@/components/Money/Tabs.vue';
import typeList from '@/constants/typeList'
type Source = {
  tagsList: string[];
  type: string;
  num: string;
  notes: string;
  data?: string;
}

@Component({ components:{
  Notes, Number, Tags, Tabs
}
 })

export default class Money extends Vue{
  typeList = typeList
  get newtagsList() {
    return this.$store.state.recordList
  }
  source: Source = {
    tagsList: [],
    type: '-',
    num: '0',
    notes: '',
    data: new Date().toISOString()
  }
  beforeCreate() {
    this.$store.commit('fetchSource')
  }
  onvalueChange(val: string) {
    this.source.notes = val
  }
  onnumberChange() {
    this.$store.commit('createSource',this.source)
  }
  check(val: []) {
    this.source.tagsList = val
    console.log(val);
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