<template>
    <div>
        <button @click="show()">modal1</button>

        <button v-dropdown="{dropList:list1,dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>

    </div>
</template>
<style>

</style>
<script>
    import ManagerModal from '@/components/modal/index.js'
    import MutileModal2 from './MutileModal2'
    import Dropdown from '@/components/dropdown/index.js'
    export default {
      name: 'MutileModal',
      data() {
        return {
          list1: [1, 2, 3, 4]
        }
      },
      directives: {
        Dropdown
      },
      methods: {
        show() {
          let mm = new ManagerModal()
          mm.createModalParent(MutileModal2, {})
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
        }
      }
    }
</script>
