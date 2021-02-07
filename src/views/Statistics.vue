<template>
  <div class="xxx">
    <Layout>
      <Tabs :dataSource="typeList" classfix="type" :value.sync="type"></Tabs>
      <Tabs height="48px" :dataSource="intervalList" classfix="interval" :value.sync='interval'></Tabs>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Tabs from '@/components/Money/Tabs.vue'
import intervalList from '@/constants/intervalList'
import typeList from '@/constants/typeList'
@Component({
  components:{
    Tabs
  }
})
export default class Statistics extends Vue{
  type = '-'
  interval =  'day'
  intervalList = intervalList
  typeList = typeList
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/base.scss';
.xxx ::v-deep .type-name {
  background: white;
&.selected{
  background: #c4c4c4;
  &::after{
    display: none;
  }
}
}
.xxx ::v-deep .interval-name {
  height: 48px;
}
</style>