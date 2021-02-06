const localStorageKey = 'recordList'
import clone from '@/lib/clone'
let data: Source[] | undefined = undefined;
const sourceStore = {
    // source store
recordList: data,
fetchSource() {
  data = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  return data
},
saveSource () {
  localStorage.setItem(localStorageKey, JSON.stringify(data))
},
createSource: (source: Source) => {
  const newSource = clone(source)
  data && data.push(newSource)
  sourceStore.saveSource()
},
}
sourceStore.fetchSource()
export default sourceStore