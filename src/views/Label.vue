<template>
  <div class="content-wrapper">
    <div class="content">
      Label
    </div>
    <Nav/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.content-wrapper{
  display: flex;
  flex-direction: column;
}
.content{
  border: 1px solid red;
  height: 100vh;
  overflow: hidden;
}
</style>