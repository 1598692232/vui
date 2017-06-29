/**
 * Created by EX-pengzhiliang001 on 2017-05-25.
 */

import Vue from 'vue'
import VueScroller from 'vue-scroller'
import Swiper from './components/swiper'
import Backdesk from './components/backdesk'
import Actions from './components/actions'
import Datepicker from './components/datepicker'
import Diabox from './components/Diabox'
import IosSelect from './components/iosselect'
import Ranger from './components/ranger'
import Scroll from './components/scroll'
import Dropdown from './components/dropdown'

Vue.use(VueScroller)

/* components */
Vue.component('swiper', Swiper)
Vue.component('Backdesk', Backdesk)
Vue.component('Actions', Actions)
Vue.component('Datepicker', Datepicker)
Vue.component('Diabox', Diabox)
Vue.component('IosSelect', IosSelect)
Vue.component('Ranger', Ranger)
Vue.component('Scroll', Scroll)
/* directives */
Vue.directive('dropdown', Dropdown)

export default {
    Swiper,
    Backdesk,
    Actions,
    Datepicker,
    Diabox,
    IosSelect,
    Ranger,
    Scroll,
    Dropdown
}
