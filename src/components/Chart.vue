<template>
  <div class="wrapper" ref="wrapper">
  </div>
</template>

<script lang="ts">
  import {Vue, Component,Prop} from 'vue-property-decorator'
  const echarts = require('echarts')
  
  @Component
  export default class Chart extends Vue{
    @Prop() options:any;
    mounted() {
      if(this.options === undefined) {
        console.log('options为空');
        return 
      }
      const chart = echarts.init(document.querySelector('.wrapper'))
      chart.setOption(this.options!)
    }
  }
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;  
}
</style>