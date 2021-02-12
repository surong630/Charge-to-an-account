import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export class TagHelper extends Vue {
  createTag() {
    let tag = window.prompt('请输入你需要添加的标签');
    if(tag === '' || tag === null) {
      tag = window.prompt('请输入正确的标签');
      this.$store.commit('createTag',tag)
    }else {
      // 将tag存入到localStorage中
      this.$store.commit('createTag',tag)
    }
  }
}
export default TagHelper