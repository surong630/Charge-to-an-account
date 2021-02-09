<template>
  <div class="xxx">
    <Layout>
      <Tabs :dataSource="typeList" classfix="type" :value.sync="type"></Tabs>
      <ol>
        <li v-for="(group,index) in groupedList" :key="index">
          <h2 class="title">
            {{beautify(group.title)}}
            <span class="total">
              ¥{{group.total}}
            </span>
            </h2>
          <ol>
            <li class="record" v-for="(item,index) in group.items" :key="index">
              <span>{{getList(item.tagsList)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>¥{{item.num}}</span>
              </li>
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
import dayjs from 'dayjs'
@Component({
  components:{
    Tabs
  }
})
export default class Statistics extends Vue{
  created() {
    this.$store.commit('fetchSource')
  }
  beautify(string: string) {
    if(dayjs(string).isSame(new Date(), 'day')) {
      return '今天'
    }else if(dayjs(string).isSame(dayjs().subtract(1, 'day'), 'day')) {
      return '昨天'
    }else if(dayjs(string).isSame(dayjs().subtract(2,'day'), 'day')) {
      return '前天'
    }else {
      return dayjs(string).format('YYYY-M-DD')
    }
  }
  getList(list: []) {
    return list.length === 0? '无' : list.join('')
  }
  get recordList() {
    return (this.$store.state as RootState).recordList
  }
  get groupedList() {
    // 解构赋值
    const { recordList } = this; // hashTab
    if(recordList.length === 0) {return null}
    // 将数据用sort进行排序,通过比较a.data的ISO8601
    // 这里通过filter进行过滤,判断 只有type相等时才显示对应的数据
    const newList = recordList.filter(r => r.type === this.type).sort((a,b) => {
      return dayjs(b.data).valueOf() - dayjs(a.data).valueOf()
    })
    type Result = {title: string; total?: number; items: Source[] }[]
    // 将第一项存入到数组中
    const result: Result = [{title: dayjs(newList[0].data).format('YYYY-MM-DD'), items:[newList[0]]}]
    for(let i=1;i<newList.length;i++) {
      // 获取第i项
      const current = newList[i]
      // 找到y的最后一项
      const last = result[result.length-1]
      // 判断title是否匹配 
      if(dayjs(last.title).isSame(dayjs(current.data), 'day')) {
        // 匹配就推到当前的数组中
        last.items.push(current)
      }else {
        // 不匹配则在y重新创建一个
        result.push({title: dayjs(current.data).format('YYYY-MM-DD'), items: [current]})
      }
    }
    result.map(group => {
      group.total = group.items.reduce((res,sum) => {
        return res + sum.num
      },0)
      console.log(group);
    })
    return result
    
    // // 声明hashTab对象中key后的值
    //  // 定义的是对象的key : value
    // const hashTab:{[key:string]: {title:string,items:Source[]}} = {}
    // // 创建hashTab 为对象
    // for(let i =0;i<recordList.length;i++) {
    //   // 用split定义日期和事件
    //   const [data, time] = recordList[i].data!.split('T')
    //   // 将hashTab对象定义初始值
    //   // 这里将对象的value 设置成对象
    //   hashTab[data] = hashTab[data] || {title:data, items: []}
    //   // 将每个变量的items中添加每个recordList对象
    //   hashTab[data].items.push(recordList[i])
    // }
    // return hashTab
  }
  type = '-'
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
%all {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.title {
  @extend %all;
}
.record {
  background: white;
  height: 40px;
  @extend %all;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
.total {
  margin-left: auto;
}
</style>