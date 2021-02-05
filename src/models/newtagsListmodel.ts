const localStorageKey = 'recordList'
const model = {
  data: [] as Source[],
  // 深拷贝
  create(record: any) {
    const newSource = clone(record)
    this.data.push(newSource)
  },
  // 从localStorage取出
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  },
  // 存到localStorage
  save () {
    window.localStorage.setItem(localStorageKey, JSON.stringify(this.data))
  }
}
export default model