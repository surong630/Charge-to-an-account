import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import clone from '@/lib/clone'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    recordList: [] as Source[]
  },
  mutations: {
    fetchSource(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]')
      console.log(state.recordList);
      
    },
    createSource: (state, source: Source) => {
      const newSource = clone(source)
      state.recordList.push(newSource)
      console.log(state.recordList);
      store.commit('saveSource')
    },
    saveSource (state) {
      localStorage.setItem('recordList', JSON.stringify(state.recordList))
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
