const localStorageKey = 'recordList'
import clone from '@/lib/clone'
const model = {
  data: [] as Source[],
  // 深拷贝
  create(record: any) {
    const newSource = clone(record)
    this.data.push(newSource)
    this.save()
  },
  // 从localStorage取出
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  },
  // 存到localStorage
  save () {
    localStorage.setItem(localStorageKey, JSON.stringify(this.data))
  }
}
export default model