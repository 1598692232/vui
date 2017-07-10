/**
 * Created by bll on 2017/7/10.
 */
import Diabox from './diabox.vue'
import $backdesk from '../backdesk'
import Util from '../../util/util'

class DialogController {
    constructor () {
        this._vm = null
        this._util = new Util()
        this.props = null
    }

    show (props) {
        this.props = props
        this.props.backShow !== false && $backdesk.show()
        if (!document.querySelector('[vui-diabox]')) {
            this._util.createElement('vui-diabox')
        }

        this._vm = this._util.createVm(Diabox, {propsData: props}, document.querySelector('[vui-dialog]'))
    }

    close () {
        this.props.backShow !== false && $backdesk.hide()
        this._vm.$destroy()
        this._util.removeElement('[vui-diabox]', 300).then(() => {
            this._vm = null
            this._util = null
        })
    }
}

export default new DialogController()

