const localStorageKey = 'recordList'
const model = {
  clone(data: Source[]){
    return JSON.parse(JSON.stringify(data))
  },
  save (data: Source[]) {
    localStorage.setItem(localStorageKey, JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  }
}
export default model