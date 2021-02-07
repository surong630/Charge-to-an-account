<template>
  <div class="xxx">
    <Layout>
      <Tabs :dataSource="typeList" classfix="type" :value.sync="type"></Tabs>
      <Tabs height="48px" :dataSource="intervalList" classfix="interval" :value.sync='interval'></Tabs>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h2>{{group.title}}</h2>
          <ol>
            <li v-for="(item,index) in group.items" :key="index">{{item.num}}</li>
          </ol>
        </li>
      </ol>
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
  created() {
    this.$store.commit('fetchSource')
  }
  get recordList() {
    return (this.$store.state as RootState).recordList
  }
  get result() {
    // 解构赋值
    const {recordList } = this;
    // 声明hashTab对象中key后的值
    type HashTableValue = {title: string; items: Source[]}
    // 创建hashTab 为对象
    const hashTab: {[key: string]: HashTableValue} = {}
    for(let i =0;i<recordList.length;i++) {
      // 用split定义日期和事件
      const [data,time] = recordList[i].data!.split('T')
      // 将hashTab对象定义初始值
      hashTab[data] = hashTab[data] || {title:data, items: []}
      // 将每个变量的items中添加每个recordList对象
      hashTab[data].items.push(recordList[i])
    }
    return hashTab
  }
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