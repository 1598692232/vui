var css3s = ['transform', 'transition']

export default{
  offset(element) {
    var top = 0
    var left = 0

    element = element.offsetParent
    top += element.offsetTop
    left += element.offsetLeft

    // do {
    //   top += element.offsetTop
    //   left += element.offsetLeft
    // } while (element = element.offsetParent)

    return {
      left,
      top
    }
  },

  siblings(element) {
    return [].filter.call(element.parentNode.children, (child) => child !== element)
  },

  height(element) {
    return this.isDoc(element) ? document.documentElement.clientHeight : element.offsetHeight
  },

  width(element) {
    return this.isDoc(element) ? document.documentElement.clientWidth : element.offsetWidth
  },

  size(element) {
    return {width: this.width(element), height: this.height(element)}
  },

  rect(element) {
    return element.getBoundingClientRect()
  },

  isDoc(element) {
    return element === document.documentElement || element === document
  },

  contains(root, el) {
    return root === el || !!(root.compareDocumentPosition(el) & 16)
  },

  on(element, event, callback) {
    element.addEventListener(event, callback)
  },

  off(element, event, callback) {
    element.removeEventListener(event, callback)
  },

  trigger(element, event, data = []) {
    var evt = document.createEvent('HTMLEvents')
    evt.initEvent(event, true, true)
    evt.data = data
    return !element.dispatchEvent(evt)
  },

  l2camel(str) {
    return str.replace(/-(\w)/g, (all, c, index) => index > 0 ? c.toUpperCase() : c)
  },

  css(element, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        this.css(element, key, name[key])
      }
    } else {
      var camel = this.l2camel(name)

      if (typeof value === 'undefined') {
        return window.getComputedStyle(element).getPropertyValue(camel)
      } else {
        value += (typeof value === 'number' && !/^(?:opacity|zIndex)$/.test(camel) ? 'px' : '')
        element.style[camel] = value

        if (this.css3(name)) {
          element.style[this.l2camel('-webkit-' + name)] = value
        }
      }
    }
  },

  css3(name) {
    return css3s.indexOf(name) > -1
  },

  assign(obj) {
    [].slice.call(arguments, 1).forEach((args) => {
      for (var i in args) {
        obj[i] = args[i]
      }
    })

    return obj
  },

  $(str, root = document) {
    return typeof str === 'string' ? root.querySelector(str) : str
  },

  $$(str, root = document) {
    return (typeof str === 'string' ? root.querySelectorAll(str) : str) || []
  },

  each(arr, callback) {
    if (arr.length) {
      [].forEach.call(arr, callback)
    } else {
      for (var i in arr) {
        callback(arr[i], i)
      }
    }
  },

  hasClass(element, className) {
    return element.className.match(new RegExp('(\\s+|^)' + className + '(\\s+|$)'))
  },

  addClass(element, className) {
    if (this.hasClass(element, className)) {
      element.className += ' ' + className
    }
  },

  removeClass(element, className) {
    element.className = element.className.replace(new RegExp('(\\s+|^)' + className + '(\\s+|$)'))
  },

  rfa(callback) {
    return (window.requestAnimationFrame     ||
            window.webkitRequestAnimationFrame  ||
            function (callback) { window.setTimeout(callback, 1000 / 60) })(callback)
  },

  crfa(id) {
    return id && (
            window.cancelRequestAnimationFrame ||
            window.webkitCancelAnimationFrame  ||
            window.clearTimeout
        )(id)
  }

}

!Object.assign && (Object.assign = exports.default.assign)
