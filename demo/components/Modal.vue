<template>
    <div>
        <button v-modal="{title:'123'}" style="display: inline-block;float: left;margin:0 20px;">弹出modal</button>
    </div>
</template>
<style>

</style>
<script>
    import modal from '@/components/modal/index.js'
    export default {
      data() {
        return {
          list: [1, 2, 3, 4]
        }
      },

      directives: {
        modal
      },

      methods: {
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
