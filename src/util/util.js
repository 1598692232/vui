/**
 * Created by EX-pengzhiliang001 on 2017-05-19.
 */
class Util {
  createElement(attr, tag) {
    let el = document.createElement(tag || 'div')
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
}
export default new Util()
