const localStorageKey = 'recordList'
const model = {
  // 深拷贝
  clone(data: Source[]){
    return JSON.parse(JSON.stringify(data))
  },
  // 存到localStorage
  save (data: Source[]) {
    localStorage.setItem(localStorageKey, JSON.stringify(data))
  },
  // 从localStorage取出
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  }
}
export default model