/**
 * Created by EX-pengzhiliang001 on 2017-06-02.
 */
import ActionController from './actionController'
export default {
    bind(el, binding) {
        el.addEventListener('click', () => {
            let ac = new ActionController()
            let bv = binding.value
            ac.show(bv)
        }, false)
    }
}
