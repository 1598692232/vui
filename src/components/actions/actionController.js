/**
 * Created by EX-pengzhiliang001 on 2017-06-02.
 */
import Vue from 'vue'
import $backDesk from '../backdesk/index'
import Util from '@/util/util'
import action from './actions'

export default class ActionController {
    constructor() {
        this._util = new Util()
        this._vm = null
    }

    show(bv) {
        $backDesk.show()
        let backdesk = document.querySelector('[vui-backdesk]')

        if (!document.querySelector('[vui-action]')) {
            this._util.createElement('vui-action')
        } else return

        let Action = Vue.extend(action)

        this._vm = new Action({
            propsData: {
                actions: bv.actionList || [],
                actionEvent: bv.actionEvent || null
            }
        }).$mount('[vui-action]')

        backdesk.addEventListener('click', () => {
            this.hide()
        }, false)
    }

    hide() {
        $backDesk.hide()
        this._vm.$destroy()
    }
}
