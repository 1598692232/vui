/**
 * Created by EX-pengzhiliang001 on 2017-05-26.
 */
import Vue from 'vue'
import modal from './modal'
import Util from '../../util/util'
export default class ManagerModal {
  constructor() {
    this._util = new Util()
    this._modaVM = null
    this._comVM = null
    this._modalParent = null
  }

  createModalParent(component, options) {
    this._modalParent = this._util.createElement('vui-modal-' +  parseInt(Math.random() * 100))
    console.log(component, options)
    this._modaVM = new Vue(modal)
    this._modaVM.$mount(this._modalParent)
    this._comVM = new Vue(component)
    this._comVM.$mount(this._modaVM.$el.querySelector('[vui-modal-content]'))
  }
}

