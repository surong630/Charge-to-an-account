<template>
    <svg class="icon">
      <use :xlink:href="'#'+ name"></use>
    </svg>
</template>

<script lang="ts">
// 引入所有svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
}
try{
  importAll(require.context('../assets/iconfont', true, /\.svg$/))
}catch(err){
  console.log(err);
}
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>