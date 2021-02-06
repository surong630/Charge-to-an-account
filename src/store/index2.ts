import labelmodel from './labelmodel'
import newtagsListmodel from './newtagsListmodel'

const store = {

// 全局变量太多
...labelmodel,
...newtagsListmodel
// 严重依赖window
}
console.log(store);

export default store