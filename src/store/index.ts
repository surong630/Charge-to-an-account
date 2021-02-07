import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createId';

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    recordList: [] as Source[],
    tagList: [] as datas[]
  },
  mutations: {
    // 将recordList重新定义
    fetchSource(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]')
    },
    // 创建标签
    createSource: (state, source: Source) => {
      const newSource = clone(source)
      state.recordList.push(newSource)
      console.log(state.recordList);
      store.commit('saveSource')
    },
    // 保存localStorage
    saveSource (state) {
      localStorage.setItem('recordList', JSON.stringify(state.recordList))
    },
    // 更新tagList
    fetchTag(state) {
    state.tagList = JSON.parse(localStorage.getItem('tagList') || '[]')
    },
    // 创建标签
    createTag(state,name: string){
      console.log('createTag');
      const id = createId().toString()
      const names = state.tagList.map(i => {
        return i.name
      })
      if(names.indexOf(name) >=0) {
        window.alert('重复了大哥')
        return 'duplicated'
      }
      state.tagList.push({id, name: name})
      store.commit('saveTag')
      window.alert('成功了')
      return 'success'
    },
    // 保存标签
    saveTag (state) {
      localStorage.setItem('tagList', JSON.stringify(state.tagList))
      // TODO
      // store.tagList = this.tagList
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
