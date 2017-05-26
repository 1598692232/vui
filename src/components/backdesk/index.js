/**
 * Created by EX-pengzhiliang001 on 2017-05-19.
 */
import Vue from 'vue'
import backDesk from './backdesk.vue'
import Util from '../../util/util'
class VuiBackDesk {
  constructor() {
    this._vm = undefined
    this._util = new Util('vui-backdesk')
  }

  show(allowTouchMove) {
    if (!document.querySelector('[vui-backdesk]')) {
      this._util = new Util('vui-backdesk')
    }

    this._vm = new Vue(backDesk)
    this._vm.$mount('[vui-backdesk]')

    setTimeout(() => {
      this._vm.show(allowTouchMove)
    })
  }

  hide(allowTouchMove) {
    if (this._vm) {
      this._vm.hide(allowTouchMove).then(() => {
        this._vm.$destroy()
      })
    }
  }
}
export default new VuiBackDesk()
