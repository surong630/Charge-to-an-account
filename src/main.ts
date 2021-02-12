import Vue from 'vue'
import App from './App.vue'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.onload = () => {
  setTimeout(() => {
    window.scrollTo(0,200)
  },0)
}
console.log(document.body.clientWidth);
if(document.body.clientWidth > 500) {
  const img = document.createElement('img')
  img.src = '/qrcode.png'
  img.style.position = 'fixed'
  img.style.left = '50%'
  img.style.top = '50%'
  img.style.transform = 'translate(-50%,-50%)'
  document.body.appendChild(img)
}