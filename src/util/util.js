/**
 * Created by EX-pengzhiliang001 on 2017-05-19.
 */
import Vue from 'vue'
export default class Util {
  constructor(attr, tag) {
    this._el = null
    this._vm = null
    this.createElement(attr, tag)
  }

  createElement(attr, tag) {
    this._el = document.createElement(tag || 'div')
    this._el.setAttribute(attr, '')
    document.body.appendChild(this._el)
  }

  removeElement(attr, duration = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.removeChild(document.querySelector(attr))
      }, duration)
    })
  }

  timeout(duration = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration)
    })
  }

  createVm(vm, more = false) {
    this._vm = new Vue(vm)
    this._vm.$mount(this._el)
    return this._vm
  }
}
