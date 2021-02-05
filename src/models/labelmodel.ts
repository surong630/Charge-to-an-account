import createId from '@/lib/createId';

const localStorageKey = 'tagList';

const model: TagListModel = {
  data: [],
  // 判断有无,是否存储
  create(name: string) {
    const id = createId().toString()
    const names = this.data.map(i => {
      return i.name
    })
    if(names.indexOf(name) >=0) {
      return 'duplicated'
    }
    this.data.push({id, name: name})
    this.save()
    return 'success'
  },
  // 更新数据
  update(id: string,name: string) {
    // 找到对应的匹配项
    const tag = this.data.filter(i => i.id === id)[0]
    // 判断是否重复
    const names = this.data.map(i => i.name)
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
      this.save()
      return 'success'
    }
  },
  // 存到localStorage
  save () {
    localStorage.setItem(localStorageKey, JSON.stringify(this.data))
    window.tagList = this.data
  },
  // 删除
  remove(id: string) {
    let index = -1
    // 找到匹配到的index,存下来
    for(let i=0;i<this.data.length;i++) {
      if(this.data[i].id === id) {
        index = i;
        break
      }
    }
    if(index >= 0) {
      // 删除并保存
      this.data.splice(index,1)
      this.save()
    }
    return true
  },
  // 从localStorage取出来 放到data中
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    return this.data
  }
}
export default model