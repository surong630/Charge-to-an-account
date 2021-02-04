const localStorageKey = 'tagList';
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
}
const model: TagListModel = {
  data: [],
  create(name: string) {
    if(this.data.indexOf(name) >=0) {
      return 'duplicated'
    }
    this.data.push(name)
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