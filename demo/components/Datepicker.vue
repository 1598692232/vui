<template>
  <div>
    <head-top title="Datepicker" left-url="#/"></head-top>
    <div style="margin-top:100px;">
      <datepicker @select:ok="selectOk" @select:cancel="selectCancel"></datepicker>
    </div>
  </div>
</template>
<style>

</style>
<script>
import datepicker from '@/components/datepicker/index.vue'
import headTop from './header'

export default {
    components: {
        datepicker,
        headTop
    },
    methods: {
        selectOk(val) {
            console.log(val, 92929)
        },

        selectCancel() {
            console.log(11111)
        }
    }
}
</script>
