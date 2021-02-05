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
    if(names.indexOf(name) >=0){
      window.alert('标签名重复了 请重新输入')
      return 'duplicated'
    }
    // 更改对应的name值
    if(tag) {
      tag.name = name
    }
    // 保存
    this.save()
    return 'success'
  },
  // 存到localStorage
  save () {
    localStorage.setItem(localStorageKey, JSON.stringify(this.data))
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
    return 'success'
  },
  // 从localStorage取出来 放到data中
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    return this.data
  }
}
export default model