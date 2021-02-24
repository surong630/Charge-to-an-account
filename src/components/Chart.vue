<template>
  <div class="wrapper" ref="wrapper">
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
  import echarts from 'echarts'
  
  @Component
  export default class Chart extends Vue{
    @Prop() options: any;
    chart: any;
    mounted() {
      if(this.options === undefined) {
        console.log('options为空');
        return 
      }
      this.chart = echarts.init(document.querySelector('.wrapper') as HTMLElement)
      this.chart.setOption(this.options!)
    }
    @Watch('options')
    optionsChange(newValue: any) {
      this.chart.setOption(newValue)
    }
  }
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 340%;
}
</style>