<template>
<div>
  <transition name="fade">
    <div v-if="isShow" class="screen">
      <Money></Money>
      <span class="close" @click="close">
        *
      </span>
    </div>
  </transition>
  <div class="nav" v-if="!isShow">
    <router-link class="item" to="/Label" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link class="item" to="/money" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link class="item" to="/Statistics" active-class="selected">
      <Icon name="statistics" />
      明细</router-link
    >
    <div class="item" @click="hover">
      <Icon name="statistics" />
      记账
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Money from '@/views/Money.vue'
@Component({
  components: {
    Money
  }
})
export default class Nav extends Vue {
  isShow =  false;
  hover() {
    this.isShow = true
  }
  close() {
    this.isShow = false
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/base.scss';
.nav {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 4px rgba(0,0,0,.6);
  padding: 1.5px 0 ;
  font-size: 12px;
  // router-link
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  // 选中后 icon的颜色
  .selected {
    .icon {
      color: $highlight;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  .screen {
    height: 100vh;
    width: 100vw;
    position: relative;
    .close {
      display: block;
      position: absolute;
      font-size: 18px;
      height: 30px;
      width: 30px;
      left: 0;
      top: 0;
      border: 1px solid red;
    }
  }
</style>