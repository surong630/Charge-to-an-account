<template>
  <div id="nav">
    <router-link to="/money">
    <svg>
      <use xlink:href="#money"></use>
    </svg>
    Money
    </router-link>
    <router-link to="/Label">
    <svg>
      <use xlink:href="#label"></use>
    </svg>
    Label
    </router-link>
    <router-link to="/Statistics">
        <svg>
      <use xlink:href="#statistics"></use>
    </svg>
    Statistics</router-link>
  </div>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
}
try{
  importAll(require.context('../assets/iconfont', true, /\.svg$/))
}catch(err){
  console.log(err);
}
export default {};
</script>

<style lang="scss" scoped>
#nav{
  border: 1px solid green;
}
</style>