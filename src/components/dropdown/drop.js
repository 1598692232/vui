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
    console.log(el, 73737373)
    this.getBindElHeight()
    this.create()
  }

  getBindElHeight() {
    this._position.y += this._bindEl.offsetHeight + 5
  }

  create () {
    this._vm = Util.createVm('vui-dropdown', this._component )
    this._vm.show(this._position, this._options, this._bindEl)
  }

  remove () {
    Util.removeElement('[vui-dropdown]')
  }
}
