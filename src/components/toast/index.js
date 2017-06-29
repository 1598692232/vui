
/**
 * Created by EX-pengzhiliang001 on 2017-06-02.
 */
import Vue from 'vue'
import toast from './toast'
import Util from '@/util/util'

class ToastController {
    constructor() {
        this._vm = null
        this._util = new Util()
    }

    show(text, timeout) {
        if (!document.querySelector('[vui-toast]')) {
            this._util.createElement('vui-toast')
        }

        let Toast = Vue.extend(toast)

        this._vm = new Toast({
            propsData: {
                text: text || '',
                timeout: timeout || 0
            }
        }).$mount('[vui-toast]')
    }
}

export default new ToastController()

