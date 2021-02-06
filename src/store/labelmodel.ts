import createId from '@/lib/createId';
const localStorageKey = 'tagList';
const label =  {
  // tag store
tagList: [] as datas[],
fetchTag() {
  this.tagList = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  return this.tagList
},
createTag(name: string){
  const id = createId().toString()
  const names = this.tagList.map(i => {
    return i.name
  })
  if(names.indexOf(name) >=0) {
    window.alert('重复了大哥')

    return 'duplicated'
  }
  this.tagList.push({id, name: name})
  this.saveTag()
  window.alert('成功了')
  return 'success'
},
removeTag(id: string) {
  let index = -1
    // 找到匹配到的index,存下来
    for(let i=0;i<this.tagList.length;i++) {
      if(this.tagList[i].id === id) {
        index = i;
        break
      }
    }
    if(index >= 0) {
      // 删除并保存
      this.tagList.splice(index,1)
      this.saveTag()
    }
    return true
},
updateTag(id: string, name: string){
      // 找到对应的匹配项
      const tag = this.tagList.filter(i => i.id === id)[0]
      // 判断是否重复
      const names = this.tagList.map(i => i.name)
      const index = names.indexOf(name);
      names.splice(index,1)
      if(names.indexOf(name) >=0){
        alert('重复了大哥')
        return 'duplicated'
      }else {
        // 更改对应的name值
        console.log('还是保存了');
        tag.name = name
        // 保存
        this.saveTag()
        return 'success'
      }
},
saveTag () {
  localStorage.setItem(localStorageKey, JSON.stringify(this.tagList))
  // TODO
  // store.tagList = this.tagList
}
}
label.fetchTag()
export default label