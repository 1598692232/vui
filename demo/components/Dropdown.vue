<template>
    <div>
        <div style="height:50px;"></div>
        <button v-dropdown="{dropList:[1,2,3,4],dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
        <div style="height:550px;"></div>
        <button v-dropdown="{dropList:[1,2,3,4],dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: right;margin:0 20px;">adasd</button>
        <div style="height:200px;"></div>
        <button v-dropdown="{dropList:[1,2,3,4],dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
        <div style="height:50px;"></div>
        <button v-dropdown="{dropList:[1,2,3,4],dataFormatter:dataFormatter,dropClick:dropClick,render:render}" style="display: inline-block;float: left;margin:0 20px;">adasd</button>
    </div>
</template>
<style>

</style>
<script>
    import Dropdown from '@/components/dropdown/index.js'
    export default {
      data() {
        return {
          list: [1, 2, 3, 4]
        }
      },

      directives: {
        Dropdown
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
