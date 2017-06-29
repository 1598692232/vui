/**
 * Created by EX-pengzhiliang001 on 2017-05-02.
 */
import Vue from 'vue'
let vm = new Vue()
Vue.directive('overlay', {
    bind (el, binding, vnode) {
        el.onclick = () => {
            if (binding.modifiers.id !== undefined) {
                vm.$emit('overshow.' + binding.value, binding.value)
            }
        }
    }
})
Vue.directive('overhide', {
    bind (el, binding, vnode) {
        el.onclick = () => {
            if (binding.modifiers.id !== undefined) {
                vm.$emit('overhide.' + binding.value, binding.value)
            }
        }
    }
})
export default vm
