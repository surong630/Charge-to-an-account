import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createId';

Vue.use(Vuex)
type RootState = {
  recordList: Source[];
  tagList: datas[];
  currentTag?: datas;
}
const store =  new Vuex.Store({
  state: {
    recordList: [] as Source[],
    tagList: [] as datas[],
    currentTag: undefined
  } as RootState,
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
    setCurrentTag(state, id: string) {
      const tags = state.tagList
      const tag = tags.filter((t: datas) => {return t.id === id})[0]
      state.currentTag = tag
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
    },
    // 移除标签 
    removeTag(state,id: string) {
      let index = -1
        // 找到匹配到的index,存下来
      for(let i=0;i<state.tagList.length;i++) {
        if(state.tagList[i].id === id) {
          index = i;
          break
        }
      }
      if(index >= 0) {
        // 删除并保存
        state.tagList.splice(index,1)
        store.commit('saveTag')
      }
      return true
    },
    // 更新标签
    updateTag(state, object: {id: string; name: string}){
      const id = object.id
      const name = object.name
      // 找到对应的匹配项
      const tag = state.tagList.filter(i => i.id === id)[0]
      // 判断是否重复
      const names = state.tagList.map(i => i.name)
      const index = names.indexOf(name);
      names.splice(index,1)
      if(names.indexOf(name) >=0){
        alert('重复了大哥')
      }else {
        // 更改对应的name值
        tag.name = name
        // 保存
        store.commit('saveTag')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
