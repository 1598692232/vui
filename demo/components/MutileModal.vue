<template>
    <div>
        <button @click="show()">modal1</button>
        <button v-dropdown="{dropList:list1,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
        <button @click="hide">close</button>
    </div>
</template>
<style>

</style>
<script>
    import $managerModal from '@/components/modal/index.js'
    import MutileModal2 from './MutileModal2'
    import Dropdown from '@/components/dropdown/index.js'
    export default {
      name: 'MutileModal',
      data() {
        return {
          list1: [1, 2, 3, 4],
          mm: null
        }
      },
      directives: {
        Dropdown
      },
      methods: {
        show() {
//          this.mm = new ManagerModal()
          $managerModal.createModalParent(MutileModal2, {
            title: '这是标题',
            direction: 'right'
          })
        },
        dataFormatter(item, index) {
          console.log('dateformatter')
          return `<div>${item}${item}${item}${item}${item}${item}${item}</div>`
        },

        dropClick(item, index) {
          console.log(item, index, '66666')
        },

        render() {
          console.log('已经render了')
        },

        hide() {
          console.log($managerModal.modalVMArgs, 94949)
          $managerModal.destroy(0)
        }
      }
    }
</script>
