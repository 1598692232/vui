/**
 * Created by EX-pengzhiliang001 on 2017-05-19.
 */
import Vue from 'vue'
export default class Util {
  constructor() {
    this._el = null
  }

  createElement(attr, tag) {
    let el = document.createElement(tag || 'div')
    el.setAttribute(attr, '')
    document.body.appendChild(el)
    this._el = el
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

  createVm(parent = 'div', vm, more = false) {
    if (!document.querySelector('[' + parent + ']') || more) {
      this.createElement(parent)
    }

    this._vm = new Vue(vm)
    this._vm.$mount(this._el)
    return this._vm
  }
}
