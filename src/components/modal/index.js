/**
 * Created by EX-pengzhiliang001 on 2017-05-26.
 */
// import modal from './modal'
import Util from '../../util/util'
export default {
  bind (el, binding, vnode) {
    el.addEventListener('click', () => {
      let util = new Util('vui-modal')
      console.log(util)
      // drop = new Drop(dropdown, el, position, binding.value)
    })
  }
}
