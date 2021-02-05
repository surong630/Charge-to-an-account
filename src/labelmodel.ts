const localStorageKey = 'tagList';
type datas = {
  id: string;
  name: string;
}
type TagListModel = {
  data: datas[];
  fetch: () => Record<string, any>[];
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
}
const model: TagListModel = {
  data: [],
  // 判断有无,是否存储
  create(name: string) {
    const names = this.data.map(i => {
      return i.name
    })
    if(names.indexOf(name) >=0) {
      return 'duplicated'
    }
    this.data.push({id:name, name: name})
    this.save()
    return 'success'
  },
  // 存到localStorage
  save () {
    localStorage.setItem(localStorageKey, JSON.stringify(this.data))
  },
  // 从localStorage取出来 放到data中
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    return this.data
  }
}
export default model