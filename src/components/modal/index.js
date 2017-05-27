/**
 * Created by EX-pengzhiliang001 on 2017-05-26.
 */
import Vue from 'vue'
import modal from './modal'
import Util from '../../util/util'
class ManagerModal {
  constructor() {
    this._util = new Util()
    this._modalVM = null
    this._comVM = null
    this._modalParent = null
    this.modalVMArgs = []
  }
  createModalParent(component, options) {
    this._modalParent = this._util.createElement('vui-modal-' +  parseInt(Math.random() * 100))
    this._modalVM = Vue.extend(modal)
    this._modalVM = new this._modalVM({
      propsData: {
        title: options.title || 'title',
        theme: options.theme || '#fff',
        direction: options.direction || 'bottom',
        sliderBar: options.sliderBar || false,
        onHide: options.onHide || null,
        render: options.render || null
      }
    })
    this._modalVM.$mount(this._modalParent)
    this._comVM = new Vue(component)
    this._comVM.$mount(this._modalVM.$el.querySelector('[vui-modal-content]'))
    return new Promise((resolve, reject) => {
      resolve(this._modalVM)
      this.modalVMArgs.push(this._modalVM)
      console.log( this.modalVMArgs)
    })
  }

  destroy(index) {
    this.modalVMArgs[index].hide()
    this.modalVMArgs.splice(index, 1)
  }
}
export default new ManagerModal()

