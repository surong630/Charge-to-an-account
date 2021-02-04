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
  save () {
    localStorage.setItem(localStorageKey, JSON.stringify(this.data))
  },
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    return this.data
  }
}
export default model