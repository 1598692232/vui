<template>
    <div>
        <button  style="display: inline-block;float: left;margin:0 20px;" @click="show()">弹出modal</button>
    </div>
</template>
<style>

</style>
<script>
    import $managerModal from '@/components/modal/index.js'
    import MutileModal from './MutileModal'
    export default {
      data() {
        return {
          list: [1, 2, 3, 4],
          modal: null
        }
      },

      created () {
//        window.MutileModal = MutileModal
        window.modal = null
      },

      methods: {
        show() {
//          let mm = new ManagerModal()
          $managerModal.createModalParent(MutileModal, {
            title: '这里是标题1',
            theme: '#f00',
            render() {
              console.log('render')
            },
            onHide() {
              console.log('onHide')
            }
          }).then((modal) => {
            console.log(modal, 7575)
            window.modal = modal
          })
        }
      }
    }
</script>
