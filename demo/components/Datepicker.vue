<template>
  <div>
    <datepicker @select:ok="selectOk" @select:cancel="selectCancel"></datepicker>
  </div>
</template>
<style>

</style>
<script>
import datepicker from '../../src/components/datepicker/index.vue'

export default {
  components: {
    datepicker
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
