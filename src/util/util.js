/**
 * Created by EX-pengzhiliang001 on 2017-05-19.
 */
import Vue from 'vue'
class Util {
  createElement(attr, tag) {
    let el = document.createElement(tag || 'div')
    console.log(el)
    el.setAttribute(attr, '')
    document.body.appendChild(el)
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

  createVm(parent = 'div', vm) {
    if (!document.querySelector('[' + parent + ']')) {
      this.createElement(parent)
    }

    this._vm = new Vue(vm)
    this._vm.$mount('[' + parent + ']')
    return this._vm
  }
}
export default new Util()
