import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Swiper from '../components/Swiper'
import Diabox from '../components/Dialog'
// import Overlay from '@/demo/Overlay'
import Action from '../components/Actions'
import IosSelect from '../components/IosSelect'
import Datepicker from '../components/Datepicker'
import Scroll from '../components/Scroll'
import Ranger from '../components/Ranger'
import Dropdown from '../components/Dropdown'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import RadioAndCheckbox from '../components/RadioAndCheckbox'

import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/swiper',
            name: 'Swiper',
            component: Swiper
        },
        {
            path: '/diabox',
            name: 'Diabox',
            component: Diabox
        },
        {
            path: '/action',
            name: 'Action',
            component: Action
        },
        {
            path: '/iosselect',
            name: 'IosSelect',
            component: IosSelect
        },
        {
            path: '/datepicker',
            name: 'Datepicker',
            component: Datepicker
        },
        {
            path: '/ranger',
            name: 'Ranger',
            component: Ranger
        },
        {
            path: '/scroll',
            name: 'Scroll',
            component: Scroll
        },
        {
            path: '/dropdown',
            name: 'Dropdown',
            component: Dropdown
        },
        {
            path: '/modal',
            name: 'Modal',
            component: Modal
        },
        {
            path: '/toast',
            name: 'Toast',
            component: Toast
        },
        {
            path: '/radioandcheckbox',
            name: 'RadioAndCheckbox',
            component: RadioAndCheckbox
        }
    ]
})
