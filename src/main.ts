import Vue from 'vue'
import App from './App.vue'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import labelmodel from '@/models/labelmodel'
import newtagsListmodel from '@/models/newtagsListmodel'
Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
// source store
window.recordList = newtagsListmodel.fetch()
window.createSource = (source: Source)=>{
  return newtagsListmodel.create(source)
}
// tag store
window.tagList = labelmodel.fetch()
window.createTag = (name: string) => {
  const message = labelmodel.create(name)
      if(message === 'duplicated') {
        window.alert('重复了大哥')
      }else if(message === 'success') {
        window.alert('成功了')
      }
}
window.removeTag = (id: string) => {
  return labelmodel.remove(id)
}
window.updateTag = (id: string, name: string) => {
  return labelmodel.update(id, name)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
