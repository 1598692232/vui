<template>
  <div>
    <head-top title="Datepicker" left-url="#/"></head-top>
        <div style="margin-top: 0.64rem">
            <datepicker @select:ok="selectOk" @select:cancel="selectCancel" :input-style="inputStyle" placeholder="请选择需要的日期"></datepicker>
        </div>

  </div>
</template>
<style>

</style>
<script>

import datepicker from '@/components/datepicker/index.vue'
import headTop from './header'


export default {
    data() {
        return {
            inputStyle: {
                border: 0,
                lineHeight: '0.35rem',
                padding: '0 0.1rem',
                width: '100%',
                boxSizing: 'border-box',
                marginTop: '0.1rem',
                background: '#f5f5f5'
            }
        }
    },
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
