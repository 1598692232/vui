<template>
<div>
  <input type="text" placeholder="点击显示select" @click="showBack" v-model="val" :style="inputStyle">
</div>
</template>
<style>

</style>
<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  import $backDesk from '../backdesk/index'
  import iosSelect from './select.vue'
  import Util from '../../util/util'
  import channel from './channel'
  Vue.use(VueScroller)
  export default {
    props: {
      selectList: {
        type: Array,
        default() {
          return []
        }
      },

      valConnect: {
        type: String,
        default: '/'
      },

      inputStyle: {
        type: Object,
        default() {
          return {width: '100%'}
        }
      },

      initVal: {
        type: Array,
        default() {
          return [2, 3, 4, 5]
        }
      }
    },

    data() {
      return {
        select: '',
        setList: false,
        val: '',
        util: ''
      }
    },

    computed: {
      selectAll() {
        return  this.selectList
      }
    },

    directives: {
      iosselect: {
        bind(el, binding, vnode) {

        }
      }
    },

    mounted() {
      let _$ = this
      _$.util = new Util('vui-select')
      channel.$on('selectok', (val) => {
        _$.val = ''
        val.forEach((v, k) => {
          if (k === val.length - 1) {
            _$.val += v.text
          } else {
            _$.val += v.text + _$.valConnect
          }
        })
        _$.$emit('select:ok', val)
        this.hideBack()
      })

      channel.$on('selectcancel', this.hideBack)
      channel.$on('loopevent', (val) => {
        this.$emit('loop:event', val)
      })

      channel.$on('init', () => {
        this.$emit('select:init')
      })
    },

    methods: {

      showBack() {
        $backDesk.show()
        this.$emit('select:beforeinit')
        let backdesk = document.querySelector('[vui-backdesk]')

        if (!document.querySelector('[vui-select]')) {
          this.util = new Util('vui-select')
        }

        let SelectCom = Vue.extend(iosSelect)
        this.select = new SelectCom().$mount('[vui-select]')
        if (!this.setList) {
          this.selectAll = this.selectAll.map((v, k) => {
            v.unshift({}, {}, {})
            v.push({}, {}, {})
            return v
          })
          this.setList = true
        }

        this.select.$data.selectList = this.selectAll
        this.select.$data.show = true
        this.select.$data.initVal = this.initVal
        setTimeout(() => {
          this.select.initRender()
        }, 500)

        backdesk.addEventListener('click', () => {
          this.hideBack()
        })
      },

      hideBack() {
        $backDesk.hide()
        this.select !== '' && this.select.$destroy()
        this.setList = false
        this.$emit('select:cancel')
      },

      listRender(i) {
        if (this.select === '') {
          return
        }
        this.selectAll[i].unshift({}, {}, {})
        this.selectAll[i].push({}, {}, {})
        this.select.$set(this.select.selectList, i, this.selectAll[i])
      }

    }
  }
</script>
