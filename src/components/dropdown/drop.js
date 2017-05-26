/**
 * Created by EX-pengzhiliang001 on 2017-05-26.
 **/
import Util from '../../util/util'
export default class Drop {
  constructor (component, el, pos = {}, options ) {
    this._component = component
    this._vm = null
    this._position = {x: pos.x, y: pos.y}
    this._options = options
    this._bindEl = el
    this._util = null
    this.getBindElHeight()
    this.create()
  }

  getBindElHeight() {
    this._position.y += this._bindEl.offsetHeight + 5
  }

  create () {
    if (!this._util) {
      this._util = new Util('vui-dropdown')
    }
    this._vm = this._util.createVm(this._component)
    this._vm.show(this._position, this._options, this._bindEl)
  }

  remove () {
    this._util.removeElement('[vui-dropdown]')
  }
}
