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
    }

    show (props) {
        $backdesk.show()
        if (!document.querySelector('[vui-diabox]')) {
            this._util.createElement('vui-diabox')
        }

        this._vm = this._util.createVm(Diabox, {propsData: props}, document.querySelector('[vui-dialog]'))
    }

    close () {
        $backdesk.hide()
        this._vm.$destroy()
        this._util.removeElement('[vui-diabox]', 300).then(() => {
            this._vm = null
            this._util = null
        })
    }
}

export default new DialogController()

