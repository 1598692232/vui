<template>
    <div>
        <button  style="display: inline-block;float: left;margin:0 20px;" @click="show()">弹出modal</button>
    </div>
</template>
<style>

</style>
<script>
    import ManagerModal from '@/components/modal/index.js'
    import MutileModal from './MutileModal'
    export default {
      data() {
        return {
          list: [1, 2, 3, 4]
        }
      },

      created () {
        window.MutileModal = MutileModal
      },

      methods: {
        show() {
          let mm = new ManagerModal()
          mm.createModalParent(MutileModal, {})
        }
      }
    }
</script>
